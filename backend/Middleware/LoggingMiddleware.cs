using System;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using ClosedXML.Excel;

namespace OmniPlanner_API.Middleware
{
    public class LoggingMiddleware
    {
        private readonly RequestDelegate _next;
        private const string LogsFolder = "Logs";
        private const long MaxFileSize = 2 * 1024 * 1024; // 2MB
        private string currentLogFilePath;
        private DateTime currentStartDate;
        private DateTime currentEndDate;

        public LoggingMiddleware(RequestDelegate next)
        {
            _next = next;
            EnsureLogsFolderExists();
            currentLogFilePath = GetLatestLogFile();
            currentStartDate = ExtractStartDate(currentLogFilePath);
        }

        public async Task Invoke(HttpContext context)
        {
            var requestTime = DateTime.Now;
            var requestPath = context.Request.Path;
            var method = context.Request.Method;

            string requestBody = await ReadRequestBody(context.Request);
            string responseBody = string.Empty;
            string message = string.Empty;
            bool success = false;

            var requestPathString = requestPath.ToString().Trim().ToLower();

            try
            {
                var originalResponseBodyStream = context.Response.Body;
                using (var memoryStream = new MemoryStream())
                {
                    context.Response.Body = memoryStream;
                    await _next(context);
                    memoryStream.Seek(0, SeekOrigin.Begin);
                    responseBody = new StreamReader(memoryStream).ReadToEnd();
                    memoryStream.Seek(0, SeekOrigin.Begin);
                    await memoryStream.CopyToAsync(originalResponseBodyStream);
                }

                ExtractMessageAndSuccess(responseBody, out message, out success);

                if (ShouldSkipLogging(method, requestPathString, success))
                    return;

                LogToExcel(requestTime, method, requestPath, requestBody, responseBody, message, success);
            }
            catch (Exception ex)
            {
                //context.Response.StatusCode = 500;
                //responseBody = $"Exception: {ex.Message} | StackTrace: {ex.StackTrace}";
                //LogToExcel(requestTime, method, requestPath, requestBody, responseBody, message, success);
                //throw;

                context.Response.StatusCode = 500;

                responseBody = $"Exception: {ex.Message} | StackTrace: {ex.StackTrace}";
                message = ex.Message;
                success = false; // explicitly set

                if (!ShouldSkipLogging(method, requestPathString, success))
                {
                    LogToExcel(requestTime, method, requestPath, requestBody, responseBody, message, success);
                }

                throw;
            }
        }

        private bool ShouldSkipLogging(string method, string path, bool success)
        {
            var alwaysLogGetEndpoints = new HashSet<string>(StringComparer.OrdinalIgnoreCase)
    {
        "/api/emailnotification/sendmailforduepayments",
        "/api/emailnotification/sendmailforzeroweight"
    };

            var conditionalExclusions = new HashSet<string>(StringComparer.OrdinalIgnoreCase)
    {
        "/api/inventorymaster/getinventory",
        "/api/inventorysolddata/getallsoldoutv2",
        "/api/inventorysolddata/getsoldoutsbyproductid",
        "/api/inventorysolddata/getpaymentstobeverify",
        "/api/inventorysolddata/getoutstandingpaymentsv2",
        "/api/inventorysolddata/getoutstandingsbycustomer",
        "/api/inventorysolddata/getoutstandingsbyponumber",
        "/api/inventorysolddata/getsoldinventorydetailsbyponumber"
    };

            // Skip ALL successful GETs unless specifically allowed
            if (method.Equals("GET", StringComparison.OrdinalIgnoreCase) &&
                !alwaysLogGetEndpoints.Contains(path) &&
                success)
            {
                return true;
            }

            // Skip conditional APIs only if successful
            if (conditionalExclusions.Contains(path) && success)
            {
                return true;
            }

            return false;
        }


        private async Task<string> ReadRequestBody(HttpRequest request)
        {
            if (request.ContentLength == null || request.ContentLength == 0)
                return string.Empty;

            request.EnableBuffering();
            using (var reader = new StreamReader(request.Body, leaveOpen: true))
            {
                var body = await reader.ReadToEndAsync();
                request.Body.Position = 0;
                return body;
            }
        }

        private void ExtractMessageAndSuccess(string responseBody, out string message, out bool success)
        {
            try
            {
                var jsonDoc = JsonDocument.Parse(responseBody);
                var root = jsonDoc.RootElement;

                message = root.TryGetProperty("message", out var msgElement) ? msgElement.GetString() ?? string.Empty : string.Empty;
                success = root.TryGetProperty("success", out var successElement) ? successElement.GetBoolean() : false;
            }
            catch
            {
                message = string.Empty;
                success = false;
            }
        }

        private void LogToExcel(DateTime requestTime, string method, string path, string request, string response, string message, bool success)
        {
            EnsureLogsFolderExists();
            currentLogFilePath = GetLatestLogFile();
            currentEndDate = requestTime;

            using (var workbook = File.Exists(currentLogFilePath) ? new XLWorkbook(currentLogFilePath) : new XLWorkbook())
            {
                var worksheet = workbook.Worksheets.FirstOrDefault() ?? workbook.Worksheets.Add("Logs");
                int row = worksheet.LastRowUsed()?.RowNumber() + 1 ?? 2;

                if (row == 2) // Add headers if it's a new file
                {
                    worksheet.Cell("A1").Value = "Date";
                    worksheet.Cell("B1").Value = "Time";
                    worksheet.Cell("C1").Value = "Method";
                    worksheet.Cell("D1").Value = "Path";
                    worksheet.Cell("E1").Value = "Request Body";
                    worksheet.Cell("F1").Value = "Response Body";
                    worksheet.Cell("G1").Value = "Message";
                    worksheet.Cell("H1").Value = "Success";
                }

                int chunkSize = 30000; // 30K characters per row

                int requestChunks = (int)Math.Ceiling((double)request.Length / chunkSize);
                int responseChunks = (int)Math.Ceiling((double)response.Length / chunkSize);
                int totalChunks = Math.Max(requestChunks, responseChunks); // Ensure enough rows for both request and response

                for (int i = 0; i < totalChunks; i++)
                {
                    string requestPart = i < requestChunks ? request.Substring(i * chunkSize, Math.Min(chunkSize, request.Length - i * chunkSize)) : "";
                    string responsePart = i < responseChunks ? response.Substring(i * chunkSize, Math.Min(chunkSize, response.Length - i * chunkSize)) : "";

                    worksheet.Cell(row + i, 1).Value = i == 0 ? requestTime.ToString("yyyy-MM-dd") : ""; // Date
                    worksheet.Cell(row + i, 2).Value = i == 0 ? requestTime.ToString("HH:mm:ss") : ""; // Time
                    worksheet.Cell(row + i, 3).Value = i == 0 ? method : "";
                    worksheet.Cell(row + i, 4).Value = i == 0 ? path : "";
                    worksheet.Cell(row + i, 5).Value = requestPart;
                    worksheet.Cell(row + i, 6).Value = responsePart;
                    worksheet.Cell(row + i, 7).Value = i == 0 ? message : "";
                    worksheet.Cell(row + i, 8).Value = i == 0 ? success : "";
                }

                workbook.SaveAs(currentLogFilePath);
            }
        }

        private void EnsureLogsFolderExists()
        {
            if (!Directory.Exists(LogsFolder))
            {
                Directory.CreateDirectory(LogsFolder);
            }
        }

        private string GetLatestLogFile()
        {
            var existingFiles = Directory.GetFiles(LogsFolder, "API_Logs_*.xlsx");
            if (existingFiles.Length == 0)
            {
                return CreateNewLogFile();
            }

            var latestFile = new FileInfo(existingFiles.OrderByDescending(f => f).First());
            if (latestFile.Length >= MaxFileSize)
            {
                RenameFileWithEndDate(latestFile.FullName);
                return CreateNewLogFile();
            }

            return latestFile.FullName;
        }

        private string CreateNewLogFile()
        {
            currentStartDate = DateTime.Now;
            currentEndDate = currentStartDate;

            string date = currentStartDate.ToString("yyyyMMdd");
            int serialNumber = Directory.GetFiles(LogsFolder, $"API_Logs_{date}_*.xlsx").Length + 1;
            string newFilePath = Path.Combine(LogsFolder, $"API_Logs_{date}_PENDING_{serialNumber}.xlsx");

            using (var workbook = new XLWorkbook())
            {
                var worksheet = workbook.Worksheets.Add("Logs");
                worksheet.Cell("A1").Value = "Timestamp";
                worksheet.Cell("B1").Value = "Method";
                worksheet.Cell("C1").Value = "Path";
                worksheet.Cell("D1").Value = "Request Body";
                worksheet.Cell("E1").Value = "Response Body";
                worksheet.Cell("F1").Value = "Message";
                worksheet.Cell("G1").Value = "Success";
                workbook.SaveAs(newFilePath);
            }

            return newFilePath;
        }

        private void RenameFileWithEndDate(string filePath)
        {
            string startDate = ExtractStartDate(filePath).ToString("yyyyMMdd");
            string endDate = currentEndDate.ToString("yyyyMMdd");
            string serialNumber = ExtractSerialNumber(filePath);
            string newFileName = $"API_Logs_{startDate}_{endDate}_{serialNumber}.xlsx";
            string newFilePath = Path.Combine(LogsFolder, newFileName);

            if (File.Exists(newFilePath)) File.Delete(newFilePath);
            File.Move(filePath, newFilePath);
        }

        private DateTime ExtractStartDate(string filePath)
        {
            var fileName = Path.GetFileNameWithoutExtension(filePath);
            var parts = fileName.Split('_');
            if (parts.Length >= 4 && DateTime.TryParseExact(parts[2], "yyyyMMdd", null, System.Globalization.DateTimeStyles.None, out var startDate))
            {
                return startDate;
            }
            return DateTime.Now;
        }

        private string ExtractSerialNumber(string filePath)
        {
            var fileName = Path.GetFileNameWithoutExtension(filePath);
            var parts = fileName.Split('_');
            return parts.Length >= 5 ? parts[4] : "1";
        }
    }
    public static class LoggerHelper
    {
        public static void LogSystemEvent(string message)
        {
            string folder = "Logs";
            if (!Directory.Exists(folder)) Directory.CreateDirectory(folder);

            string file = Path.Combine(folder, $"SystemLogs_{DateTime.Now:yyyyMMdd}.txt");
            File.AppendAllText(file, $"[{DateTime.Now:yyyy-MM-dd HH:mm:ss}] {message}{Environment.NewLine}");
        }
    }

}
