using OmniPlanner_API.IRepository;
using OmniPlanner_API.Models.Attachments;
using OmniPlanner_API.Models.Inventory_Management;
using OmniPlanner_API.Queries;
using OmniPlanner_API.Repository;
using OmniPlanner_API.ViewModels;
using OmniPlanner_API.ViewModels.Inventory_Management;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace OmniPlanner_API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    [Authorize]
    public class AttachmentController : ControllerBase
    {
        private readonly IAttachmentRepository _attachmentRepository;

        public AttachmentController(IAttachmentRepository AttachmentRepository)
        {
            _attachmentRepository = AttachmentRepository;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAttachmentById(int id)
        {
            var response = new ServiceResponse<AttachmentResponse?>();
            try
            {
                response.Data = await _attachmentRepository.GetAttachmentById(id);
                if (response.Data == null)
                    throw new Exception(CommonMessages.DataNotFound);

                response.Message = CommonMessages.GetSuccessfully;
                response.Success = true;
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
                return Ok(response);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAttachmentByInventoryId(int id)
        {
            var response = new ServiceResponse<IEnumerable<AttachmentResponse>>();
            try
            {
                response.Data = await _attachmentRepository.GetAttachmentByInventoryId(id);
                if (response.Data == null)
                    throw new Exception(CommonMessages.DataNotFound);

                response.Message = CommonMessages.GetSuccessfully;
                response.Success = true;
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
                return Ok(response);
            }
        }

        //[HttpPost]
        //public async Task<IActionResult> CreateAttachments([FromForm] AttachmentResponse request)
        //{
        //    var response = new ServiceResponse<List<AttachmentResponse>>();
        //    try
        //    {
        //        DeleteAttachmentByInventoryId(request.inventory_id);
        //        var createdAttachmets = new List<AttachmentResponse>();

        //        if (request.all_files != null && request.all_files.Any())
        //        {
        //            foreach (var file in request.all_files)
        //            {
        //                AttachmentResponse requestData = new AttachmentResponse
        //                {
        //                    id = request.id,
        //                    inventory_id = request.inventory_id,
        //                    file_name = file.FileName,
        //                    attachment_path = UploadFile(file)
        //                };
        //                var createdAttachment = await _attachmentRepository.CreateAttachments(requestData);

        //                if (createdAttachment == null)
        //                    throw new Exception(CommonMessages.UnableToCreate);
        //                createdAttachmets.Add(createdAttachment);
        //            }
        //        }

        //        //if (request.attachment2 != null && request.attachment2.Length != 0)
        //        //{
        //        //    AttachmentResponse requestData = new AttachmentResponse
        //        //    {
        //        //        id = request.id,
        //        //        inventory_id = request.inventory_id,
        //        //        file_name = request.attachment2.FileName,
        //        //        attachment_path = UploadFile(request.attachment2)
        //        //    };
        //        //    var createdAttachment = await _attachmentRepository.CreateAttachments(requestData);

        //        //    if (createdAttachment == null)
        //        //        throw new Exception(CommonMessages.UnableToCreate);
        //        //    createdAttachmets.Add(createdAttachment);
        //        //}
        //        //if (request.attachment3 != null && request.attachment3.Length != 0)
        //        //{
        //        //    AttachmentResponse requestData = new AttachmentResponse
        //        //    {
        //        //        id = request.id,
        //        //        inventory_id = request.inventory_id,
        //        //        file_name = request.attachment3.FileName,
        //        //        attachment_path = UploadFile(request.attachment3)
        //        //    };
        //        //    var createdAttachment = await _attachmentRepository.CreateAttachments(requestData);

        //        //    if (createdAttachment == null)
        //        //        throw new Exception(CommonMessages.UnableToCreate);
        //        //    createdAttachmets.Add(createdAttachment);
        //        //}
        //        //if (request.attachment5 != null && request.attachment5.Length != 0)
        //        //{
        //        //    AttachmentResponse requestData = new AttachmentResponse
        //        //    {
        //        //        id = request.id,
        //        //        inventory_id = request.inventory_id,
        //        //        file_name = request.attachment5.FileName,
        //        //        attachment_path = UploadFile(request.attachment5)
        //        //    };
        //        //    var createdAttachment = await _attachmentRepository.CreateAttachments(requestData);

        //        //    if (createdAttachment == null)
        //        //        throw new Exception(CommonMessages.UnableToCreate);
        //        //    createdAttachmets.Add(createdAttachment);
        //        //}
        //        response.Data = createdAttachmets;
        //        response.Message = CommonMessages.GetSuccessfully;
        //        response.Success = true;
        //        return Ok(response);
        //    }
        //    catch (Exception ex)
        //    {
        //        response.Success = false;
        //        response.Message = ex.Message;
        //        return Ok(response);
        //    }
        //}


        //// Only for Super Admin(Hard Delete)
        [HttpDelete("{id}/{isHardDelete}")]
        public async Task<IActionResult> DeleteAttachment(int id, bool isHardDelete)
        {
            var response = new ServiceResponse<bool>();
            try
            {
                response.Data = await _attachmentRepository.DeleteAttachment(id, isHardDelete);
                if (!response.Data)
                    throw new Exception(CommonMessages.UnableToDelete);

                response.Message = CommonMessages.GetSuccessfully;
                response.Success = true;
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
                return Ok(response);
            }
        }

        //// Only for Super Admin(Hard Delete)
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAttachmentByInventoryId(int id)
        {
            var response = new ServiceResponse<bool>();
            try
            {
                response.Data = await _attachmentRepository.DeleteAttachmentByInventoryId(id);
                if (!response.Data)
                    throw new Exception(CommonMessages.UnableToDelete);

                response.Message = CommonMessages.GetSuccessfully;
                response.Success = true;
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
                return Ok(response);
            }
        }

        //[HttpPost]
        //public async Task<IActionResult> CreateAttachments([FromForm] Attachments request)
        //{
        //    var response = new ServiceResponse<bool>();
        //    try
        //    {
        //        // Upload the files
        //        if (request.files != null && request.files.Any())
        //        {
        //                foreach (var file in request.files)
        //                {
        //                    AttachmentResponse requestData = new AttachmentResponse
        //                    {
        //                        id = 0,
        //                        inventory_id = request.inventory_id,
        //                        file_name = file.FileName,
        //                        attachment_path = UploadFile(file)
        //                    };
        //                    var createdAttachment = await _attachmentRepository.CreateAttachments(requestData);

        //                    if (createdAttachment == null)
        //                    {
        //                        response.Data = false;
        //                        throw new Exception(CommonMessages.UnableToCreate);
        //                    }
        //                }
        //        }

        //        response.Data = true;
        //        response.Message = CommonMessages.GetSuccessfully;
        //        response.Success = true;
        //        return Ok(response);
        //    }
        //    catch (Exception ex)
        //    {
        //        response.Success = false;
        //        response.Message = ex.Message;
        //        return Ok(response);
        //    }
        //}
        public static string UploadFile(IFormFile file)
        {
            string uploadsDirectory = Path.Combine(Directory.GetCurrentDirectory(), "Uploads");
            string newfileName = Guid.NewGuid().ToString() + "_" + file.FileName;
            string filePath = Path.Combine(uploadsDirectory, newfileName);
            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                file.CopyTo(stream);
            }
            return filePath;
        }
    }
}
