using OmniPlanner_API.Models.Notes;

namespace OmniPlanner_API.IRepository
{
    public interface INotesRepository
    {
        Task<IEnumerable<Note>> GetNotes(string? q, int? categoryId, DateTime? createdFrom, DateTime? createdTo, string? important, string sort);
        Task<Note?> GetById(int id);
        Task<Note> Create(Note note);
        Task<Note?> Update(int id, Note note);
        Task<bool> Delete(int id);
        
        // Note-URL relationship methods
        Task<IEnumerable<NoteUrlViewModel>> GetNoteUrls(int noteId);
        Task<bool> AddUrlToNote(int noteId, int urlId);
        Task<bool> RemoveUrlFromNote(int noteId, int urlId);
        Task<IEnumerable<NoteUrlViewModel>> GetAvailableUrlsForCategory(int? categoryId);
    }
}


