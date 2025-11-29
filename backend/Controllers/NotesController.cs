using Microsoft.AspNetCore.Mvc;
using Npgsql;
using OmniPlanner_API.IRepository;
using OmniPlanner_API.Models.Notes;
using OmniPlanner_API.ViewModels;

namespace OmniPlanner_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class NotesController : ControllerBase
    {
        private readonly INotesRepository _repo;
        public NotesController(INotesRepository repo) 
        { 
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> Get([FromQuery] string? q, [FromQuery] int? categoryId, [FromQuery] DateTime? createdFrom, [FromQuery] DateTime? createdTo, [FromQuery] string? important, [FromQuery] string sort = "createdOn_desc")
        {
            var response = new ServiceResponse<IEnumerable<Note>>();
            try
            {
                response.Data = await _repo.GetNotes(q, categoryId, createdFrom, createdTo, important, sort);
                var count = response.Data?.Count() ?? 0;
                response.Success = true;
                
                string message = count > 0 
                    ? $"Successfully retrieved {count} note{(count == 1 ? "" : "s")}"
                    : "No notes found";
                
                if (!string.IsNullOrEmpty(q))
                    message += $" matching '{q}'";
                if (categoryId.HasValue)
                    message += $" in category";
                
                response.Message = message;
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = $"Failed to retrieve notes: {ex.Message}";
                return Ok(response);
            }
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            var response = new ServiceResponse<Note?>();
            try
            {
                response.Data = await _repo.GetById(id);
                response.Success = response.Data != null;
                if (response.Success)
                {
                    var noteTitle = string.IsNullOrWhiteSpace(response.Data.title) ? "Untitled" : response.Data.title;
                    response.Message = $"Successfully retrieved note #{id}: {noteTitle}";
                }
                else
                {
                    response.Message = $"Note with ID {id} not found";
                }
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = $"Failed to retrieve note #{id}: {ex.Message}";
                return Ok(response);
            }
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] Note note)
        {
            var response = new ServiceResponse<Note>();
            try
            {
                // Validation
                if (note == null)
                {
                    response.Success = false;
                    response.Message = "Note data is required";
                    return Ok(response);
                }
                
                if (note.categoryId == null || note.categoryId == 0)
                {
                    response.Success = false;
                    response.Message = "Category is required to create a note";
                    return Ok(response);
                }

                var created = await _repo.Create(note);
                response.Data = created;
                response.Success = true;
                
                var noteTitle = string.IsNullOrWhiteSpace(created.title) ? "Untitled" : created.title;
                response.Message = $"Note '{noteTitle}' created successfully with ID {created.id}";
                return Ok(response);
            }
            catch (InvalidOperationException ex)
            {
                response.Success = false;
                response.Message = ex.Message;
                return Ok(response);
            }
            catch (PostgresException pe) when (pe.SqlState == "23505")
            {
                response.Success = false;
                var noteTitle = string.IsNullOrWhiteSpace(note?.title) ? "This title" : $"'{note.title}'";
                response.Message = $"{noteTitle} already exists in this category. Please choose a different title.";
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = $"Failed to create note: {ex.Message}";
                return Ok(response);
            }
        }

        [HttpPut("{id:int}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] Note note)
        {
            var response = new ServiceResponse<Note?>();
            try
            {
                // Validation
                if (note == null)
                {
                    response.Success = false;
                    response.Message = "Note data is required";
                    return Ok(response);
                }

                if (id != note.id)
                {
                    response.Success = false;
                    response.Message = $"Route ID {id} does not match note ID {note.id}";
                    return Ok(response);
                }

                response.Data = await _repo.Update(id, note);
                response.Success = response.Data != null;
                
                if (response.Success)
                {
                    var noteTitle = string.IsNullOrWhiteSpace(response.Data.title) ? "Untitled" : response.Data.title;
                    response.Message = $"Note '{noteTitle}' (ID: {id}) updated successfully";
                }
                else
                {
                    response.Message = $"Note with ID {id} not found. Cannot update non-existent note.";
                }
                return Ok(response);
            }
            catch (InvalidOperationException ex)
            {
                response.Success = false;
                response.Message = ex.Message;
                return Ok(response);
            }
            catch (PostgresException pe) when (pe.SqlState == "23505")
            {
                response.Success = false;
                var noteTitle = string.IsNullOrWhiteSpace(note?.title) ? "This title" : $"'{note.title}'";
                response.Message = $"{noteTitle} already exists in this category. Please choose a different title.";
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = $"Failed to update note #{id}: {ex.Message}";
                return Ok(response);
            }
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            var response = new ServiceResponse<bool>();
            try
            {
                // First check if note exists
                var existingNote = await _repo.GetById(id);
                if (existingNote == null)
                {
                    response.Success = false;
                    response.Data = false;
                    response.Message = $"Note with ID {id} not found. Cannot delete non-existent note.";
                    return Ok(response);
                }

                response.Data = await _repo.Delete(id);
                response.Success = response.Data;
                
                if (response.Success)
                {
                    var noteTitle = string.IsNullOrWhiteSpace(existingNote.title) ? "Untitled" : existingNote.title;
                    response.Message = $"Note '{noteTitle}' (ID: {id}) deleted successfully";
                }
                else
                {
                    response.Message = $"Failed to delete note #{id}. The note may have already been deleted.";
                }
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Data = false;
                response.Message = $"Failed to delete note #{id}: {ex.Message}";
                return Ok(response);
            }
        }

        // Note-URL relationship endpoints
        [HttpGet("{noteId:int}/urls")]
        public async Task<IActionResult> GetNoteUrls([FromRoute] int noteId)
        {
            var response = new ServiceResponse<IEnumerable<NoteUrlViewModel>>();
            try
            {
                response.Data = await _repo.GetNoteUrls(noteId);
                response.Success = true;
                var count = response.Data?.Count() ?? 0;
                response.Message = $"Successfully retrieved {count} URL{(count == 1 ? "" : "s")} for note #{noteId}";
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = $"Failed to retrieve URLs for note #{noteId}: {ex.Message}";
                return Ok(response);
            }
        }

        [HttpPost("{noteId:int}/urls/{urlId:int}")]
        public async Task<IActionResult> AddUrlToNote([FromRoute] int noteId, [FromRoute] int urlId)
        {
            var response = new ServiceResponse<bool>();
            try
            {
                var result = await _repo.AddUrlToNote(noteId, urlId);
                response.Data = result;
                response.Success = result;
                
                if (result)
                {
                    response.Message = "URL added to note successfully";
                }
                else
                {
                    response.Message = "URL is already associated with this note or the operation failed";
                }
                return Ok(response);
            }
            catch (InvalidOperationException ex)
            {
                response.Success = false;
                response.Data = false;
                response.Message = ex.Message;
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Data = false;
                response.Message = $"Failed to add URL to note: {ex.Message}";
                return Ok(response);
            }
        }

        [HttpDelete("{noteId:int}/urls/{urlId:int}")]
        public async Task<IActionResult> RemoveUrlFromNote([FromRoute] int noteId, [FromRoute] int urlId)
        {
            var response = new ServiceResponse<bool>();
            try
            {
                var result = await _repo.RemoveUrlFromNote(noteId, urlId);
                response.Data = result;
                response.Success = result;
                
                if (result)
                {
                    response.Message = "URL removed from note successfully";
                }
                else
                {
                    response.Message = "URL was not associated with this note";
                }
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Data = false;
                response.Message = $"Failed to remove URL from note: {ex.Message}";
                return Ok(response);
            }
        }

        [HttpGet("urls/available")]
        public async Task<IActionResult> GetAvailableUrls([FromQuery] int? categoryId)
        {
            var response = new ServiceResponse<IEnumerable<NoteUrlViewModel>>();
            try
            {
                response.Data = await _repo.GetAvailableUrlsForCategory(categoryId);
                response.Success = true;
                var count = response.Data?.Count() ?? 0;
                response.Message = $"Successfully retrieved {count} available URL{(count == 1 ? "" : "s")}";
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = $"Failed to retrieve available URLs: {ex.Message}";
                return Ok(response);
            }
        }
    }
}


