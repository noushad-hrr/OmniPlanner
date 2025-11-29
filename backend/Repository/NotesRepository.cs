using Dapper;
using Npgsql;
using OmniPlanner_API.IRepository;
using OmniPlanner_API.Models.Notes;
using Microsoft.AspNetCore.Http;

namespace OmniPlanner_API.Repository
{
    public class NotesRepository : INotesRepository
    {
        private readonly DapperContext _context;
        private readonly IHttpContextAccessor _httpContextAccessor;
        public NotesRepository(DapperContext context, IHttpContextAccessor httpContextAccessor = null) 
        { 
            _context = context;
            _httpContextAccessor = httpContextAccessor;
        }


        public async Task<IEnumerable<Note>> GetNotes(string? q, int? categoryId, DateTime? createdFrom, DateTime? createdTo, string? important, string sort)
        {
            using var conn = _context.CreateConnection();
            var where = new List<string>();
            var p = new DynamicParameters();
            if (!string.IsNullOrWhiteSpace(q)) { where.Add("(title ilike concat('%', @q, '%') or content ilike concat('%', @q, '%'))"); p.Add("q", q!.Trim()); }
            if (categoryId.HasValue) { where.Add("category_id = @categoryId"); p.Add("categoryId", categoryId.Value); }
            if (createdFrom.HasValue) { where.Add("created_on >= @createdFrom"); p.Add("createdFrom", createdFrom.Value); }
            if (createdTo.HasValue) { where.Add("created_on < @createdTo"); p.Add("createdTo", createdTo.Value.AddDays(1)); }
            
            // Filter by important status
            if (!string.IsNullOrWhiteSpace(important))
            {
                var importantLower = important.Trim().ToLowerInvariant();
                if (importantLower == "starred")
                {
                    where.Add("coalesce(n.important, false) = true");
                }
                else if (importantLower == "non-starred")
                {
                    where.Add("coalesce(n.important, false) = false");
                }
            }
            
            var whereSql = where.Count > 0 ? (" where " + string.Join(" and ", where)) : string.Empty;
            
            // Normalize sort parameter
            var normalizedSort = (sort ?? "createdOn_desc").Trim().ToLowerInvariant();
            System.Diagnostics.Debug.WriteLine($"Sort parameter received: '{sort}', normalized: '{normalizedSort}'");
            
            var orderBy = normalizedSort switch {
                "id_asc" => " order by n.id asc, n.created_on desc",
                "id_desc" => " order by n.id desc, n.created_on desc",
                "createdon_asc" => " order by n.created_on asc, n.id desc",
                "createdon_desc" => " order by n.created_on desc, n.id desc",
                "updatedon_asc" => " order by n.updated_on asc nulls last, n.created_on desc",
                "updatedon_desc" => " order by n.updated_on desc nulls last, n.created_on desc",
                "categoryname_asc" => " order by c.category asc nulls last, n.created_on desc",
                "categoryname_desc" => " order by c.category desc nulls last, n.created_on desc",
                "title_asc" => " order by n.title asc, n.created_on desc",
                "title_desc" => " order by n.title desc, n.created_on desc",
                _ => " order by n.created_on desc, n.id desc"
            };
            var sql = $@"select n.id, n.title, n.content, n.category_id as categoryId, c.category as categoryName, n.created_on as createdOn, n.updated_on as updatedOn, coalesce(n.important, false) as important
                          from notes n
                          left join category_master c on c.id = n.category_id and c.is_deleted = false
                          {whereSql}
                          {orderBy}";
            System.Diagnostics.Debug.WriteLine($"Executing SQL query with orderBy: {orderBy}");
            return await conn.QueryAsync<Note>(sql, p);
        }

        public async Task<Note?> GetById(int id)
        {
            using var conn = _context.CreateConnection();
            var sql = "select n.id, n.title, n.content, n.category_id as categoryId, c.category as categoryName, n.created_on as createdOn, n.updated_on as updatedOn, coalesce(n.important, false) as important from notes n left join category_master c on c.id = n.category_id and c.is_deleted = false where n.id=@id";
            return await conn.QueryFirstOrDefaultAsync<Note>(sql, new { id });
        }

        public async Task<bool> ExistsWithSameTitleAndCategory(string title, int? categoryId, int? excludeId = null)
        {
            using var conn = _context.CreateConnection();
            var sql = @"select count(*) > 0 from notes 
                        where lower(trim(title)) = lower(trim(@title)) 
                        and coalesce(category_id, -1) = coalesce(@categoryId, -1)";
            
            if (excludeId.HasValue)
            {
                sql += " and id != @excludeId";
            }
            
            return await conn.QueryFirstOrDefaultAsync<bool>(sql, new { title = title ?? string.Empty, categoryId, excludeId });
        }

        public async Task<Note> Create(Note note)
        {
            using var conn = _context.CreateConnection();
            
            // Check for duplicate before inserting
            var exists = await ExistsWithSameTitleAndCategory(note.title ?? string.Empty, note.categoryId);
            if (exists)
            {
                throw new InvalidOperationException($"A note with the title '{note.title ?? "Untitled"}' already exists in this category.");
            }
            
            var sql = @"insert into notes(title, content, category_id, important) values(@title, @content, @categoryId, @important) returning id, created_on";
            var created = await conn.QueryFirstAsync<(int id, DateTime created_on)>(sql, new { title = note.title ?? string.Empty, content = note.content ?? string.Empty, categoryId = note.categoryId, important = note.important });
            var saved = await GetById(created.id) ?? new Note { id = created.id, title = note.title ?? string.Empty, content = note.content ?? string.Empty, categoryId = note.categoryId, important = note.important, createdOn = created.created_on };
            return saved;
        }

        public async Task<Note?> Update(int id, Note note)
        {
            using var conn = _context.CreateConnection();
            
            // Check for duplicate before updating (excluding current note)
            var exists = await ExistsWithSameTitleAndCategory(note.title ?? string.Empty, note.categoryId, excludeId: id);
            if (exists)
            {
                throw new InvalidOperationException($"A note with the title '{note.title ?? "Untitled"}' already exists in this category.");
            }
            
            var sql = @"update notes set title=@title, content=@content, category_id=@categoryId, important=@important, updated_on=now() where id=@id";
            await conn.ExecuteAsync(sql, new { id, title = note.title ?? string.Empty, content = note.content ?? string.Empty, categoryId = note.categoryId, important = note.important });
            return await GetById(id);
        }

        public async Task<bool> Delete(int id)
        {
            using var conn = _context.CreateConnection();
            var sql = "delete from notes where id=@id";
            var rows = await conn.ExecuteAsync(sql, new { id });
            return rows > 0;
        }

        // Note-URL relationship methods
        public async Task<IEnumerable<NoteUrlViewModel>> GetNoteUrls(int noteId)
        {
            using var conn = _context.CreateConnection();
            var sql = @"SELECT 
                        num.id,
                        num.note_id,
                        num.url_id,
                        u.label,
                        u.url,
                        c.category AS category_name,
                        c.icon AS category_icon,
                        num.created_on
                       FROM notes_urls_mapping num
                       INNER JOIN urls_master u ON num.url_id = u.id AND u.is_deleted = false AND u.is_active = true
                       LEFT JOIN category_master c ON u.category_id = c.id AND c.is_deleted = false
                       WHERE num.note_id = @noteId
                       ORDER BY num.created_on DESC";
            var urls = await conn.QueryAsync<NoteUrlViewModel>(sql, new { noteId });
            
            // Populate credentials for each URL
            var urlsMasterRepo = new UrlsMasterRepository(_context, _httpContextAccessor);
            foreach (var url in urls)
            {
                url.credentials = await urlsMasterRepo.GetUrlCredentials(url.url_id);
            }
            
            return urls;
        }

        public async Task<bool> AddUrlToNote(int noteId, int urlId)
        {
            using var conn = _context.CreateConnection();
            try
            {
                // Check if note exists
                var note = await GetById(noteId);
                if (note == null)
                {
                    throw new InvalidOperationException($"Note with ID {noteId} not found");
                }

                // Check if URL exists and is active
                var urlExists = await conn.QueryFirstOrDefaultAsync<bool>(
                    "SELECT COUNT(*) > 0 FROM urls_master WHERE id = @urlId AND is_deleted = false AND is_active = true",
                    new { urlId });

                if (!urlExists)
                {
                    throw new InvalidOperationException($"URL with ID {urlId} not found or inactive");
                }

                // Check if URL category matches note category (optional validation)
                var urlCategory = await conn.QueryFirstOrDefaultAsync<int?>(
                    "SELECT category_id FROM urls_master WHERE id = @urlId",
                    new { urlId });

                if (note.categoryId.HasValue && urlCategory.HasValue && note.categoryId.Value != urlCategory.Value)
                {
                    // Allow it but could warn - for now, we'll allow cross-category links
                }

                // Insert the mapping (unique constraint will prevent duplicates)
                var sql = @"INSERT INTO notes_urls_mapping (note_id, url_id, created_on)
                           VALUES (@noteId, @urlId, NOW())
                           ON CONFLICT (note_id, url_id) DO NOTHING
                           RETURNING id";
                var result = await conn.QueryFirstOrDefaultAsync<int?>(sql, new { noteId, urlId });
                return result.HasValue;
            }
            catch (PostgresException pe) when (pe.SqlState == "23505")
            {
                // Unique constraint violation - URL already added to note
                return false;
            }
        }

        public async Task<bool> RemoveUrlFromNote(int noteId, int urlId)
        {
            using var conn = _context.CreateConnection();
            var sql = "DELETE FROM notes_urls_mapping WHERE note_id = @noteId AND url_id = @urlId";
            var rows = await conn.ExecuteAsync(sql, new { noteId, urlId });
            return rows > 0;
        }

        public async Task<IEnumerable<NoteUrlViewModel>> GetAvailableUrlsForCategory(int? categoryId)
        {
            using var conn = _context.CreateConnection();
            var whereClause = categoryId.HasValue
                ? "WHERE u.category_id = @categoryId AND u.is_deleted = false AND u.is_active = true"
                : "WHERE u.category_id IS NULL AND u.is_deleted = false AND u.is_active = true";

            var sql = $@"SELECT 
                        0 as id,
                        0 as note_id,
                        u.id as url_id,
                        u.label,
                        u.url,
                        c.category AS category_name,
                        c.icon AS category_icon,
                        NOW() as created_on
                       FROM urls_master u
                       LEFT JOIN category_master c ON u.category_id = c.id AND c.is_deleted = false
                       {whereClause}
                       ORDER BY c.category ASC, u.label ASC";

            var param = new DynamicParameters();
            if (categoryId.HasValue)
            {
                param.Add("categoryId", categoryId.Value);
            }
            var urls = await conn.QueryAsync<NoteUrlViewModel>(sql, param);
            
            // Populate credentials for each URL
            var urlsMasterRepo = new UrlsMasterRepository(_context, _httpContextAccessor);
            foreach (var url in urls)
            {
                url.credentials = await urlsMasterRepo.GetUrlCredentials(url.url_id);
            }
            
            return urls;
        }
    }
}


