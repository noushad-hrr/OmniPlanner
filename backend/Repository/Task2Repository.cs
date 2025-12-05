using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Reflection;
using System.Security.Claims;
using AutoMapper;
using Dapper;
using Microsoft.AspNetCore.Http;
using OmniPlanner_API.IRepository;
using OmniPlanner_API.Models.Tasks;
using OmniPlanner_API.Models.Tasks2;
using OmniPlanner_API.Queries.Tasks;
using OmniPlanner_API.Queries.Tasks2;
using OmniPlanner_API.Repository;
using OmniPlanner_API.ViewModels.Master_Data;
using OmniPlanner_API.ViewModels.Tasks2;
using Task2 = OmniPlanner_API.Models.Tasks2.Task2;
using TaskStatus = OmniPlanner_API.Models.Tasks.TaskStatus;

namespace OmniPlanner_API.Repository
{
    public class Task2Repository : ITask2Repository
    {
        private readonly DapperContext _context;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public Task2Repository(DapperContext context, IHttpContextAccessor httpContextAccessor = null)
        {
            _context = context;
            _httpContextAccessor = httpContextAccessor;
        }

        private int GetCurrentUserId()
        {
            if (_httpContextAccessor?.HttpContext == null)
                throw new UnauthorizedAccessException("User not authenticated");

            var userIdClaim = _httpContextAccessor.HttpContext.User.FindFirst(ClaimTypes.NameIdentifier);
            if (userIdClaim != null && int.TryParse(userIdClaim.Value, out int userId))
                return userId;

            throw new UnauthorizedAccessException("User not authenticated");
        }

        // Helper method to safely get values from dynamic Dapper rows with case-insensitive lookup
        // Dapper returns ExpandoObject which implements IDictionary<string, object>
        // PostgreSQL may return column names in different cases
        private T GetValue<T>(dynamic row, string propertyName, T defaultValue = default(T))
        {
            try
            {
                var dict = row as IDictionary<string, object>;
                if (dict != null)
                {
                    // Try exact match first
                    if (dict.ContainsKey(propertyName))
                    {
                        var value = dict[propertyName];
                        return ConvertValue<T>(value, defaultValue);
                    }

                    // Try case-insensitive lookup
                    var key = dict.Keys.FirstOrDefault(k =>
                        string.Equals(k, propertyName, StringComparison.OrdinalIgnoreCase));
                    if (key != null)
                    {
                        var value = dict[key];
                        return ConvertValue<T>(value, defaultValue);
                    }

                    // Debug: Log all available keys (can be removed later)
                    // var allKeys = string.Join(", ", dict.Keys);
                    // System.Diagnostics.Debug.WriteLine($"Available keys for {propertyName}: {allKeys}");
                }

                // Fallback to direct property access
                try
                {
                    var value = ((object)row).GetType().GetProperty(propertyName)?.GetValue(row);
                    if (value != null && value != DBNull.Value)
                        return ConvertValue<T>(value, defaultValue);
                }
                catch { }
            }
            catch
            {
                // If conversion fails, return default
            }
            return defaultValue;
        }

        // Helper to get value with fallback to database column name (snake_case)
        private T GetValueWithFallback<T>(dynamic row, string aliasName, string dbColumnName, T defaultValue = default(T))
        {
            var dict = row as IDictionary<string, object>;

            // Try alias first - check if key exists
            if (dict != null)
            {
                // Try exact match
                if (dict.ContainsKey(aliasName))
                {
                    var value = dict[aliasName];
                    return ConvertValue<T>(value, defaultValue);
                }

                // Try case-insensitive match for alias
                var aliasKey = dict.Keys.FirstOrDefault(k =>
                    string.Equals(k, aliasName, StringComparison.OrdinalIgnoreCase));
                if (aliasKey != null)
                {
                    var value = dict[aliasKey];
                    return ConvertValue<T>(value, defaultValue);
                }

                // Fallback to database column name
                if (dict.ContainsKey(dbColumnName))
                {
                    var value = dict[dbColumnName];
                    return ConvertValue<T>(value, defaultValue);
                }

                // Try case-insensitive match for database column name
                var dbKey = dict.Keys.FirstOrDefault(k =>
                    string.Equals(k, dbColumnName, StringComparison.OrdinalIgnoreCase));
                if (dbKey != null)
                {
                    var value = dict[dbKey];
                    return ConvertValue<T>(value, defaultValue);
                }
            }

            // Final fallback to GetValue which tries property access
            return GetValue<T>(row, aliasName, defaultValue);
        }

        private T ConvertValue<T>(object value, T defaultValue)
        {
            if (value == null || value == DBNull.Value)
                return defaultValue;

            try
            {
                // Handle nullable types
                if (typeof(T).IsGenericType && typeof(T).GetGenericTypeDefinition() == typeof(Nullable<>))
                {
                    var underlyingType = Nullable.GetUnderlyingType(typeof(T));
                    if (value.GetType() == underlyingType)
                        return (T)value;
                    return (T)Convert.ChangeType(value, underlyingType);
                }

                // Direct cast if types match
                if (value is T)
                    return (T)value;

                // For string conversion, use ToString()
                if (typeof(T) == typeof(string))
                    return (T)(object)value.ToString();

                return (T)Convert.ChangeType(value, typeof(T));
            }
            catch
            {
                return defaultValue;
            }
        }

        public async System.Threading.Tasks.Task<IEnumerable<Task2>> GetTasks2()
        {
            using (var connection = _context.CreateConnection())
            {
                // Get all main tasks
                var taskRows = await connection.QueryAsync<dynamic>(Tasks2Queries.GetAllTasks);

                var tasks = new Dictionary<int, Task2>();
                var taskIds = new List<int>();

                // First pass: Create all tasks
                foreach (var row in taskRows)
                {
                    // Convert dynamic to dictionary for reliable property access
                    var rowDict = row as IDictionary<string, object>;
                    var taskId = rowDict != null ? Convert.ToInt32(rowDict["id"]) : (int)row.id;
                    if (!tasks.ContainsKey(taskId))
                    {
                        // Helper to get value from dynamic row (Dapper preserves SQL alias case)
                        object GetValue(string key)
                        {
                            if (rowDict == null)
                                rowDict = row as IDictionary<string, object>;

                            if (rowDict != null)
                            {
                                // Try exact match first (Dapper preserves alias case)
                                if (rowDict.ContainsKey(key))
                                    return rowDict[key] == DBNull.Value ? null : rowDict[key];
                                // Try lowercase (PostgreSQL might lowercase)
                                var lowerKey = key.ToLower();
                                if (rowDict.ContainsKey(lowerKey))
                                    return rowDict[lowerKey] == DBNull.Value ? null : rowDict[lowerKey];
                                // Try case-insensitive search
                                var match = rowDict.FirstOrDefault(kvp =>
                                    kvp.Key.Equals(key, StringComparison.OrdinalIgnoreCase));
                                if (match.Key != null)
                                    return match.Value == DBNull.Value ? null : match.Value;
                            }
                            return null;
                        }

                        // Helper to convert date value
                        DateTime? ParseDate(object val)
                        {
                            if (val == null || val == DBNull.Value) return null;
                            if (val is DateTime dt) return dt;
                            if (val is DateOnly dateOnly) return dateOnly.ToDateTime(TimeOnly.MinValue);
                            if (DateTime.TryParse(val.ToString(), out DateTime parsed)) return parsed;
                            return null;
                        }

                        // Helper to convert int value
                        int? ParseInt(object val)
                        {
                            if (val == null || val == DBNull.Value) return null;
                            if (val is int i) return i;
                            if (int.TryParse(val.ToString(), out int parsed)) return parsed;
                            return null;
                        }

                        // Helper to convert decimal value
                        decimal? ParseDecimal(object val)
                        {
                            if (val == null || val == DBNull.Value) return null;
                            if (val is decimal d) return d;
                            if (val is double db) return (decimal)db;
                            if (val is float f) return (decimal)f;
                            if (decimal.TryParse(val.ToString(), out decimal parsed)) return parsed;
                            return null;
                        }

                        tasks[taskId] = new Task2
                        {
                            id = taskId,
                            title = GetValue("title")?.ToString() ?? string.Empty,
                            description = GetValue("description")?.ToString(),
                            startDate = ParseDate(GetValue("startDate")),
                            endDate = ParseDate(GetValue("endDate")),
                            startTime = GetValue("startTime")?.ToString(),
                            endTime = GetValue("endTime")?.ToString(),
                            createdAt = ParseDate(GetValue("createdAt")) ?? DateTime.UtcNow,
                            updatedAt = ParseDate(GetValue("updatedAt")) ?? DateTime.UtcNow,
                            estimatedHours = ParseDecimal(GetValue("estimatedHours")),
                            priority_order = ParseInt(GetValue("priorityOrder")),
                            remarks = GetValue("remarks")?.ToString(),
                            important = GetValue("important") as bool? ?? false,
                            completed = GetValue("completed") as bool? ?? false,
                            isExpanded = false,
                            subtasks = new List<Subtask2>(),
                            urls = new List<TaskUrl>(),
                            priority_level = !string.IsNullOrEmpty(GetValue("priority_name")?.ToString()) ? new TaskPriority
                            {
                                name = GetValue("priority_name")?.ToString() ?? "",
                                color = GetValue("priority_color")?.ToString() ?? "#64748B"
                            } : null,
                            status = !string.IsNullOrEmpty(GetValue("status_name")?.ToString()) ? new TaskStatus
                            {
                                name = GetValue("status_name")?.ToString() ?? "",
                                color = GetValue("status_color")?.ToString() ?? "#64748B"
                            } : null,
                            category = !string.IsNullOrEmpty(GetValue("category_name")?.ToString()) ? new TaskCategory
                            {
                                name = GetValue("category_name")?.ToString() ?? "",
                                icon = GetValue("category_icon")?.ToString() ?? ""
                            } : null,
                            selected_days = GetValue("selected_days")?.ToString()
                            //periodic_task = GetValue("periodic_task_id") != null ? new PeriodicTask
                            //{
                            //    id = GetValue("periodic_task_id") as int? ?? 0,
                            //    startDate = GetValue("periodic_start_date") as DateTime?,
                            //    endDate = GetValue("periodic_end_date") as DateTime?
                            //} : null
                        };
                        taskIds.Add(taskId);
                    }
                }

                // Get URLs for all tasks
                var urlsMasterRepo = new UrlsMasterRepository(_context, _httpContextAccessor);
                foreach (var taskId in taskIds)
                {
                    var urls = await connection.QueryAsync<TaskUrl>(Tasks2Queries.GetTaskUrls, new { task_id = taskId });
                    var urlList = urls.ToList();

                    // Populate credentials for each URL (similar to NotesRepository)
                    foreach (var url in urlList)
                    {
                        url.credentials = await urlsMasterRepo.GetUrlCredentials(url.id);
                    }

                    tasks[taskId].urls = urlList;
                }

                // Get Level 1 subtasks for all tasks
                var level1SubtasksDict = new Dictionary<int, List<Subtask2>>();
                foreach (var taskId in taskIds)
                {
                    var level1Rows = await connection.QueryAsync<dynamic>(Tasks2Queries.GetLevel1Subtasks, new { task_id = taskId });
                    var level1Subtasks = new List<Subtask2>();

                    // Level 1 subtasks inherit dates from parent task

                    foreach (var row in level1Rows)
                    {
                        var subtask = new Subtask2
                        {
                            id = (int)row.id,
                            title = row.title ?? string.Empty,
                            description = row.description,
                            // Use helper method with fallback to database column names
                            startTime = GetValueWithFallback<string>(row, "startTime", "start_time", null),
                            endTime = GetValueWithFallback<string>(row, "endTime", "end_time", null),
                            createdAt = GetValueWithFallback<DateTime?>(row, "createdAt", "created_on") ?? DateTime.UtcNow,
                            updatedAt = GetValueWithFallback<DateTime?>(row, "updatedAt", "modified_on") ?? DateTime.UtcNow,
                            estimatedHours = GetValueWithFallback<decimal?>(row, "estimatedHours", "estimated_hours", null),
                            priority_order = GetValueWithFallback<int?>(row, "priorityOrder", "priority_order", null),
                            // Use helper method with fallback to database column names
                            startDate = GetValueWithFallback<DateTime?>(row, "startDate", "start_date", null),
                            endDate = GetValueWithFallback<DateTime?>(row, "endDate", "end_date", null),
                            important = GetValue<bool>(row, "important", false),
                            completed = GetValue<bool>(row, "completed", false),
                            level = 1,
                            isExpanded = false,
                            subtasks = new List<Subtask2>(),
                            parentId = taskId.ToString(),
                            priority_level = !string.IsNullOrEmpty(row.priority_name) ? new TaskPriority
                            {
                                name = row.priority_name,
                                color = row.priority_color ?? "#64748B"
                            } : null,
                            status = !string.IsNullOrEmpty(row.status_name) ? new TaskStatus
                            {
                                name = row.status_name,
                                color = row.status_color ?? "#64748B"
                            } : null,
                            selected_days = GetValue<string>(row, "selected_days")
                        };
                        level1Subtasks.Add(subtask);
                    }

                    if (level1Subtasks.Any())
                    {
                        level1SubtasksDict[taskId] = level1Subtasks;
                        tasks[taskId].subtasks = level1Subtasks;
                    }
                }

                // Get Level 2 subtasks for all Level 1 subtasks
                foreach (var kvp in level1SubtasksDict)
                {
                    foreach (var level1Subtask in kvp.Value)
                    {
                        var level2Rows = await connection.QueryAsync<dynamic>(Tasks2Queries.GetLevel2Subtasks,
                            new { level1_subtask_id = level1Subtask.id });
                        var level2Subtasks = new List<Subtask2>();

                        // Level 2 subtasks inherit dates from parent Level 1 subtask

                        foreach (var row in level2Rows)
                        {
                            var subtask = new Subtask2
                            {
                                id = (int)row.id,
                                title = row.title ?? string.Empty,
                                description = row.description,
                                // Use helper method with fallback to database column names (same as Level 1)
                                startTime = GetValueWithFallback<string>(row, "startTime", "start_time", null),
                                endTime = GetValueWithFallback<string>(row, "endTime", "end_time", null),
                                createdAt = GetValueWithFallback<DateTime?>(row, "createdAt", "created_on") ?? DateTime.UtcNow,
                                updatedAt = GetValueWithFallback<DateTime?>(row, "updatedAt", "modified_on") ?? DateTime.UtcNow,
                                estimatedHours = GetValueWithFallback<decimal?>(row, "estimatedHours", "estimated_hours", null),
                                priority_order = GetValueWithFallback<int?>(row, "priorityOrder", "priority_order", null),
                                // Use helper method with fallback to database column names (same as Level 1)
                                startDate = GetValueWithFallback<DateTime?>(row, "startDate", "start_date", null),
                                endDate = GetValueWithFallback<DateTime?>(row, "endDate", "end_date", null),
                                important = GetValue<bool>(row, "important", false),
                                completed = GetValue<bool>(row, "completed", false),
                                level = 2,
                                isExpanded = false,
                                subtasks = new List<Subtask2>(),
                                parentId = level1Subtask.id.ToString(),
                                priority_level = !string.IsNullOrEmpty(row.priority_name) ? new TaskPriority
                                {
                                    name = row.priority_name,
                                    color = row.priority_color ?? "#64748B"
                                } : null,
                                status = !string.IsNullOrEmpty(row.status_name) ? new TaskStatus
                                {
                                    name = row.status_name,
                                    color = row.status_color ?? "#64748B"
                                } : null,
                                selected_days = GetValue<string>(row, "selected_days")
                            };
                            level2Subtasks.Add(subtask);
                        }

                        if (level2Subtasks.Any())
                        {
                            level1Subtask.subtasks = level2Subtasks;
                        }
                    }
                }

                return tasks.Values.ToList();
            }
        }

        public async System.Threading.Tasks.Task<Task2> AddMainTask2(AddMainTask2Request request, int userId)
        {
            int taskId = 0;
            using (var connection = _context.CreateConnection())
            {
                connection.Open();
                using (var transaction = connection.BeginTransaction())
                {
                    try
                    {
                        // Auto-assign priority_order if null
                        int? priorityOrder = request.priority_order;
                        if (!priorityOrder.HasValue && request.start_date.HasValue)
                        {
                            var maxOrder = await connection.QueryFirstOrDefaultAsync<int?>(
                                "SELECT MAX(priority_order) FROM tasks2_main_task WHERE start_date = @start_date",
                                new { start_date = request.start_date }, transaction);
                            priorityOrder = (maxOrder ?? 0) + 1;
                        }

                        // Insert main task
                        taskId = await connection.ExecuteScalarAsync<int>(Tasks2Queries.AddMainTask, new
                        {
                            title = request.title,
                            description = request.description,
                            priority_level_id = request.priority_level_id,
                            status_id = request.status_id,
                            category_id = request.category_id,
                            start_date = request.start_date,
                            end_date = request.end_date,
                            start_time = request.start_time,
                            end_time = request.end_time,
                            created_by = userId,
                            modified_by = userId,
                            estimated_hours = request.estimated_hours,
                            priority_order = priorityOrder,
                            remarks = request.remarks,
                            important = request.important,
                            completed = request.completed,
                            selected_days = request.selected_days
                        }, transaction);

                        // Reorder tasks on the same date to maintain non-gapped sequence
                        if (request.start_date.HasValue)
                        {
                            await ReorderMainTasks2ByDate(connection, request.start_date.Value, transaction);
                        }

                        // Insert URL mappings
                        if (request.url_ids != null && request.url_ids.Any())
                        {
                            foreach (var urlId in request.url_ids)
                            {
                                await connection.ExecuteAsync(Tasks2Queries.InsertTaskUrlMapping, new
                                {
                                    task_id = taskId,
                                    url_id = urlId,
                                    created_by = userId,
                                    modified_by = userId
                                }, transaction);
                            }
                        }

        //                for (DateTime currentDate = start; currentDate <= end; currentDate = currentDate.AddDays(1))
        //{
        //    // Action to perform for each day in the range
        //    Console.WriteLine($"Processing date: {currentDate:yyyy-MM-dd}.");
            
        //    // Example: Check if it's a weekend
        //    if (currentDate.DayOfWeek == DayOfWeek.Saturday || currentDate.DayOfWeek == DayOfWeek.Sunday)
        //    {
        //        Console.WriteLine("    -> It's a weekend!");

                        transaction.Commit();
                    }
                    catch
                    {
                        transaction.Rollback();
                        throw;
                    }
                }

                // Fetch the created task using the same connection (after transaction commit)
                var taskRow = await connection.QueryFirstOrDefaultAsync<dynamic>(Tasks2Queries.GetTaskById, new { task_id = taskId });
                if (taskRow == null)
                {
                    throw new Exception("Failed to retrieve created task");
                }

                // Get URLs for the task
                var urls = await connection.QueryAsync<TaskUrl>(Tasks2Queries.GetTaskUrls, new { task_id = taskId });
                var urlList = urls.ToList();

                // Populate credentials for each URL (similar to NotesRepository)
                var urlsMasterRepo = new UrlsMasterRepository(_context, _httpContextAccessor);
                foreach (var url in urlList)
                {
                    url.credentials = await urlsMasterRepo.GetUrlCredentials(url.id);
                }

                // Map the task (using same pattern as GetTasks method)
                var task = new Task2
                {
                    id = (int)taskRow.id,
                    title = taskRow.title ?? string.Empty,
                    description = taskRow.description,
                    startTime = taskRow.startTime,
                    endTime = taskRow.endTime,
                    startDate = taskRow.startDate,
                    endDate = taskRow.endDate,
                    createdAt = taskRow.createdAt as DateTime? ?? DateTime.UtcNow,
                    updatedAt = taskRow.updatedAt as DateTime? ?? DateTime.UtcNow,
                    estimatedHours = taskRow.estimatedHours as int?,
                    priority_order = taskRow.priorityOrder as int?,
                    remarks = taskRow.remarks,
                    important = taskRow.important ?? false,
                    completed = taskRow.completed ?? false,
                    isExpanded = false,
                    subtasks = new List<Subtask2>(),
                    urls = urlList,
                    priority_level = !string.IsNullOrEmpty(taskRow.priority_name) ? new TaskPriority
                    {
                        name = taskRow.priority_name,
                        color = taskRow.priority_color ?? "#64748B"
                    } : null,
                    status = !string.IsNullOrEmpty(taskRow.status_name) ? new TaskStatus
                    {
                        name = taskRow.status_name,
                        color = taskRow.status_color ?? "#64748B"
                    } : null,
                    category = !string.IsNullOrEmpty(taskRow.category_name) ? new TaskCategory
                    {
                        name = taskRow.category_name,
                        icon = taskRow.category_icon ?? ""
                    } : null,
                    //periodic_task = taskRow.periodic_task_id != null ? new PeriodicTask
                    //{
                    //    id = taskRow.periodic_task_id,
                    //    startDate = taskRow.periodic_start_date as DateTime?,
                    //    endDate = taskRow.periodic_end_date as DateTime?
                    //} : null
                };

                return task;
            }
        }

        public async System.Threading.Tasks.Task<Task2> UpdateMainTask2(UpdateMainTask2Request request, int userId)
        {
            using (var connection = _context.CreateConnection())
            {
                connection.Open();
                using (var transaction = connection.BeginTransaction())
                {
                    try
                    {
                        // Get old task data to check if date changed
                        var oldTask = await connection.QueryFirstOrDefaultAsync<dynamic>(
                            "SELECT start_date, priority_order FROM tasks2_main_task WHERE id = @id",
                            new { id = request.id }, transaction);

                        var oldDate = oldTask?.start_date as DateTime?;
                        var oldPriorityOrder = oldTask?.priority_order as int?;

                        // Auto-set completed when status is marked as completion status
                        var shouldForceCompleted = await ShouldForceCompletedAsync(connection, request.status_id, transaction);
                        request.completed = request.completed || shouldForceCompleted;

                        // Auto-assign priority_order if null
                        int? priorityOrder = request.priority_order;
                        if (!priorityOrder.HasValue && request.start_date.HasValue)
                        {
                            var maxOrder = await connection.QueryFirstOrDefaultAsync<int?>(
                                "SELECT MAX(priority_order) FROM tasks2_main_task WHERE start_date = @start_date AND id != @id",
                                new { start_date = request.start_date, id = request.id }, transaction);
                            priorityOrder = (maxOrder ?? 0) + 1;
                        }

                        // Handle priority_order change: move task to new position and shift others BEFORE updating
                        if (request.start_date.HasValue && priorityOrder.HasValue && oldPriorityOrder.HasValue && oldPriorityOrder != priorityOrder)
                        {
                            // If date changed, reorder old date first
                            if (oldDate.HasValue && oldDate != request.start_date)
                            {
                                await ReorderMainTasks2ByDate(connection, oldDate.Value, transaction);
                            }

                            // Update main task with all fields EXCEPT priority_order first (to avoid conflicts)
                            await connection.ExecuteAsync(
                                "UPDATE tasks2_main_task SET " +
                                "title = @title, description = @description, priority_level_id = @priority_level_id, " +
                                "status_id = @status_id, category_id = @category_id, start_date = @start_date, end_date = @end_date, " +
                                "start_time = @start_time, end_time = @end_time, modified_on = NOW(), " +
                                "modified_by = @modified_by, estimated_hours = @estimated_hours, " +
                                "remarks = @remarks, important = @important, completed = @completed " +
                                "WHERE id = @id",
                                new
                                {
                                    id = request.id,
                                    title = request.title,
                                    description = request.description,
                                    priority_level_id = request.priority_level_id,
                                    status_id = request.status_id,
                                    category_id = request.category_id,
                                    start_date = request.start_date,
                                    end_date = request.end_date,
                                    start_time = request.start_time,
                                    end_time = request.end_time,
                                    modified_by = userId,
                                    estimated_hours = request.estimated_hours,
                                    remarks = request.remarks,
                                    important = request.important,
                                    completed = request.completed
                                }, transaction);

                            // Move task to new position on new date (this will update priority_order)
                            await MoveMainTask2ToPosition(connection, request.id, priorityOrder.Value, request.start_date.Value, transaction);
                        }
                        else
                        {
                            // Update main task with all fields
                            await connection.ExecuteAsync(Tasks2Queries.UpdateMainTask, new
                            {
                                id = request.id,
                                title = request.title,
                                description = request.description,
                                priority_level_id = request.priority_level_id,
                                status_id = request.status_id,
                                category_id = request.category_id,
                                start_date = request.start_date,
                                end_date = request.end_date,
                                start_time = request.start_time,
                                end_time = request.end_time,
                                modified_by = userId,
                                estimated_hours = request.estimated_hours,
                                priority_order = priorityOrder,
                                remarks = request.remarks,
                                important = request.important,
                                completed = request.completed,
                                selected_days = request.selected_days
                            }, transaction);

                            // Reorder if date changed or priority_order changed
                            if (oldDate.HasValue && oldDate != request.start_date)
                            {
                                // Reorder old date
                                await ReorderMainTasks2ByDate(connection, oldDate.Value, transaction);
                            }
                            if (request.start_date.HasValue)
                            {
                                // Reorder new date
                                await ReorderMainTasks2ByDate(connection, request.start_date.Value, transaction);
                            }
                            else if (oldDate.HasValue && oldDate == request.start_date && oldPriorityOrder != priorityOrder)
                            {
                                // Same date but priority_order changed
                                await ReorderMainTasks2ByDate(connection, request.start_date.Value, transaction);
                            }
                        }

                        // Delete existing URL mappings
                        await connection.ExecuteAsync(Tasks2Queries.DeleteTaskUrlMappings, new { task_id = request.id }, transaction);

                        // Insert new URL mappings
                        if (request.url_ids != null && request.url_ids.Any())
                        {
                            foreach (var urlId in request.url_ids)
                            {
                                await connection.ExecuteAsync(Tasks2Queries.InsertTaskUrlMapping, new
                                {
                                    task_id = request.id,
                                    url_id = urlId,
                                    created_by = userId,
                                    modified_by = userId
                                }, transaction);
                            }
                        }

                        transaction.Commit();

                        // Return the updated task
                        var tasks = await GetTasks2();
                        return tasks.FirstOrDefault(t => t.id == request.id);
                    }
                    catch
                    {
                        transaction.Rollback();
                        throw;
                    }
                }
            }
        }

        public async System.Threading.Tasks.Task<bool> DeleteMainTask2(int id)
        {
            using (var connection = _context.CreateConnection())
            {
                connection.Open();
                using (var transaction = connection.BeginTransaction())
                {
                    try
                    {
                        // Get task date before deletion for reordering
                        var taskDate = await connection.QueryFirstOrDefaultAsync<DateTime?>(
                            "SELECT start_date FROM tasks2_main_task WHERE id = @id",
                            new { id = id }, transaction);

                        // Cascade delete will handle subtasks and URL mappings
                        var rowsAffected = await connection.ExecuteAsync(Tasks2Queries.DeleteMainTask, new { id }, transaction);

                        // Reorder remaining tasks on the same date
                        if (taskDate.HasValue && rowsAffected > 0)
                        {
                            await ReorderMainTasks2ByDate(connection, taskDate.Value, transaction);
                        }

                        transaction.Commit();
                        return rowsAffected > 0;
                    }
                    catch
                    {
                        transaction.Rollback();
                        throw;
                    }
                }
            }
        }

        public async System.Threading.Tasks.Task<Subtask2> AddLevel1Subtask2(AddLevel1Subtask2Request request, int userId)
        {
            using (var connection = _context.CreateConnection())
            {
                connection.Open();
                using (var transaction = connection.BeginTransaction())
                {
                    try
                    {
                        // Auto-assign priority_order if null
                        int? priorityOrder = request.priority_order;
                        if (!priorityOrder.HasValue)
                        {
                            var maxOrder = await connection.QueryFirstOrDefaultAsync<int?>(
                                "SELECT MAX(priority_order) FROM tasks2_level_1_sub_task WHERE tasks2_main_task_id = @tasks2_main_task_id",
                                new { tasks2_main_task_id = request.tasks2_main_task_id }, transaction);
                            priorityOrder = (maxOrder ?? 0) + 1;
                        }

                        var subtaskId = await connection.ExecuteScalarAsync<int>(Tasks2Queries.AddLevel1Subtask, new
                        {
                            tasks2_main_task_id = request.tasks2_main_task_id,
                            title = request.title,
                            description = request.description,
                            priority_level_id = request.priority_level_id,
                            status_id = request.status_id,
                            start_date = request.start_date,
                            end_date = request.end_date,
                            start_time = request.start_time,
                            end_time = request.end_time,
                            created_by = userId,
                            modified_by = userId,
                            estimated_hours = request.estimated_hours,
                            priority_order = priorityOrder,
                            important = request.important,
                            completed = request.completed,
                            selected_days = request.selected_days
                        }, transaction);

                        // Reorder siblings to maintain non-gapped sequence
                        await ReorderLevel1Subtasks2(connection, request.tasks2_main_task_id, transaction);

                        transaction.Commit();

                        // Return the created subtask by fetching it
                        var level1Rows = await connection.QueryAsync<dynamic>(Tasks2Queries.GetLevel1Subtasks,
                            new { task_id = request.tasks2_main_task_id });

                        var row = level1Rows.FirstOrDefault(r => (int)r.id == subtaskId);
                        if (row != null)
                        {
                            return new Subtask2
                            {
                                id = (int)row.id,
                                title = row.title ?? string.Empty,
                                description = row.description,
                                startTime = row.startTime,
                                endTime = row.endTime,
                                createdAt = row.createdAt as DateTime? ?? DateTime.UtcNow,
                                updatedAt = row.updatedAt as DateTime? ?? DateTime.UtcNow,
                                estimatedHours = row.estimatedHours as int?,
                                priority_order = row.priorityOrder as int?,
                                important = row.important ?? false,
                                completed = row.completed ?? false,
                                level = 1,
                                isExpanded = false,
                                subtasks = new List<Subtask2>(),
                                parentId = request.tasks2_main_task_id.ToString(),
                                priority_level = !string.IsNullOrEmpty(row.priority_name) ? new TaskPriority
                                {
                                    name = row.priority_name,
                                    color = row.priority_color ?? "#64748B"
                                } : null,
                                status = !string.IsNullOrEmpty(row.status_name) ? new TaskStatus
                                {
                                    name = row.status_name,
                                    color = row.status_color ?? "#64748B"
                                } : null
                            };
                        }

                        return null;
                    }
                    catch
                    {
                        transaction.Rollback();
                        throw;
                    }
                }
            }
        }

        public async System.Threading.Tasks.Task<bool> UpdateTask2Important(int id, bool important, int userId)
        {
            using (var connection = _context.CreateConnection())
            {
                var rowsAffected = await connection.ExecuteAsync(Tasks2Queries.UpdateTaskImportant, new
                {
                    id = id,
                    important = important,
                    modified_by = userId
                });
                return rowsAffected > 0;
            }
        }

        public async System.Threading.Tasks.Task<bool> UpdateTask2Completed(int id, bool completed, int userId)
        {
            using (var connection = _context.CreateConnection())
            {
                // Get the appropriate status_id based on completion status
                int? statusId = null;
                if (completed)
                {
                    // When marking as completed, use the status with is_completion_status = true
                    statusId = await connection.QueryFirstOrDefaultAsync<int?>(
                        "SELECT id FROM status_master WHERE is_completion_status = true AND is_deleted = false AND is_active = true LIMIT 1");
                }
                else
                {
                    // When unchecking, use the status with is_default = true
                    statusId = await connection.QueryFirstOrDefaultAsync<int?>(
                        "SELECT id FROM status_master WHERE is_default = true AND is_deleted = false AND is_active = true LIMIT 1");
                }

                // If no status found, don't update status_id (keep existing)
                var rowsAffected = await connection.ExecuteAsync(Tasks2Queries.UpdateTaskCompleted, new
                {
                    id = id,
                    completed = completed,
                    status_id = statusId,
                    modified_by = userId
                });
                return rowsAffected > 0;
            }
        }

        public async System.Threading.Tasks.Task<bool> UpdateLevel1Subtask2Completed(int id, bool completed, int userId)
        {
            using (var connection = _context.CreateConnection())
            {
                // Get the appropriate status_id based on completion status
                int? statusId = null;
                if (completed)
                {
                    // When marking as completed, use the status with is_completion_status = true
                    statusId = await connection.QueryFirstOrDefaultAsync<int?>(
                        "SELECT id FROM status_master WHERE is_completion_status = true AND is_deleted = false AND is_active = true LIMIT 1");
                }
                else
                {
                    // When unchecking, use the status with is_default = true
                    statusId = await connection.QueryFirstOrDefaultAsync<int?>(
                        "SELECT id FROM status_master WHERE is_default = true AND is_deleted = false AND is_active = true LIMIT 1");
                }

                // Update the Level 1 subtask
                var rowsAffected = await connection.ExecuteAsync(Tasks2Queries.UpdateLevel1SubtaskCompleted, new
                {
                    id = id,
                    completed = completed,
                    status_id = statusId,
                    modified_by = userId
                });

                // Cascade: If marked as not completed, mark parent main task as not completed
                if (!completed && rowsAffected > 0)
                {
                    // Get parent main task ID
                    var parentTaskId = await connection.ExecuteScalarAsync<int?>(
                        "SELECT tasks2_main_task_id FROM tasks2_level_1_sub_task WHERE id = @id",
                        new { id = id });

                    if (parentTaskId.HasValue)
                    {
                        // Get default status for parent task
                        var defaultStatusId = await connection.QueryFirstOrDefaultAsync<int?>(
                            "SELECT id FROM status_master WHERE is_default = true AND is_deleted = false AND is_active = true LIMIT 1");

                        // Update parent main task to not completed with default status
                        await connection.ExecuteAsync(Tasks2Queries.UpdateTaskCompleted, new
                        {
                            id = parentTaskId.Value,
                            completed = false,
                            status_id = defaultStatusId,
                            modified_by = userId
                        });
                    }
                }

                return rowsAffected > 0;
            }
        }

        public async System.Threading.Tasks.Task<bool> UpdateLevel2Subtask2Completed(int id, bool completed, int userId)
        {
            using (var connection = _context.CreateConnection())
            {
                // Get the appropriate status_id based on completion status
                int? statusId = null;
                if (completed)
                {
                    // When marking as completed, use the status with is_completion_status = true
                    statusId = await connection.QueryFirstOrDefaultAsync<int?>(
                        "SELECT id FROM status_master WHERE is_completion_status = true AND is_deleted = false AND is_active = true LIMIT 1");
                }
                else
                {
                    // When unchecking, use the status with is_default = true
                    statusId = await connection.QueryFirstOrDefaultAsync<int?>(
                        "SELECT id FROM status_master WHERE is_default = true AND is_deleted = false AND is_active = true LIMIT 1");
                }

                // Update the Level 2 subtask
                var rowsAffected = await connection.ExecuteAsync(Tasks2Queries.UpdateLevel2SubtaskCompleted, new
                {
                    id = id,
                    completed = completed,
                    status_id = statusId,
                    modified_by = userId
                });

                // Cascade: If marked as not completed, mark parent Level 1 subtask and main task as not completed
                if (!completed && rowsAffected > 0)
                {
                    // Get default status for cascade updates
                    var defaultStatusId = await connection.QueryFirstOrDefaultAsync<int?>(
                        "SELECT id FROM status_master WHERE is_default = true AND is_deleted = false AND is_active = true LIMIT 1");

                    // Get parent Level 1 subtask ID
                    var parentLevel1SubtaskId = await connection.ExecuteScalarAsync<int?>(
                        "SELECT tasks2_level_1_sub_task_id FROM tasks2_level_2_sub_task WHERE id = @id",
                        new { id = id });

                    if (parentLevel1SubtaskId.HasValue)
                    {
                        // Update parent Level 1 subtask to not completed with default status
                        await connection.ExecuteAsync(Tasks2Queries.UpdateLevel1SubtaskCompleted, new
                        {
                            id = parentLevel1SubtaskId.Value,
                            completed = false,
                            status_id = defaultStatusId,
                            modified_by = userId
                        });

                        // Get parent main task ID from Level 1 subtask
                        var parentTaskId = await connection.ExecuteScalarAsync<int?>(
                            "SELECT tasks2_main_task_id FROM tasks2_level_1_sub_task WHERE id = @id",
                            new { id = parentLevel1SubtaskId.Value });

                        if (parentTaskId.HasValue)
                        {
                            // Update parent main task to not completed with default status
                            await connection.ExecuteAsync(Tasks2Queries.UpdateTaskCompleted, new
                            {
                                id = parentTaskId.Value,
                                completed = false,
                                status_id = defaultStatusId,
                                modified_by = userId
                            });
                        }
                    }
                }

                return rowsAffected > 0;
            }
        }

        public async System.Threading.Tasks.Task<Subtask2> UpdateLevel1Subtask2(UpdateLevel1Subtask2Request request, int userId)
        {
            using (var connection = _context.CreateConnection())
            {
                connection.Open();
                using (var transaction = connection.BeginTransaction())
                {
                    try
                    {
                        // Get parent task ID and old priority_order
                        var parentInfo = await connection.QueryFirstOrDefaultAsync<dynamic>(
                            "SELECT tasks2_main_task_id, priority_order FROM tasks2_level_1_sub_task WHERE id = @id",
                            new { id = request.id }, transaction);

                        var parentTaskId = parentInfo?.tasks2_main_task_id as int?;
                        var oldPriorityOrder = parentInfo?.priority_order as int?;

                        // Auto-set completed when status is marked as completion status
                        var shouldForceCompleted = await ShouldForceCompletedAsync(connection, request.status_id, transaction);
                        request.completed = request.completed || shouldForceCompleted;

                        // Auto-assign priority_order if null
                        int? priorityOrder = request.priority_order;
                        if (!priorityOrder.HasValue && parentTaskId.HasValue)
                        {
                            var maxOrder = await connection.QueryFirstOrDefaultAsync<int?>(
                                "SELECT MAX(priority_order) FROM tasks2_level_1_sub_task WHERE tasks2_main_task_id = @tasks2_main_task_id AND id != @id",
                                new { tasks2_main_task_id = parentTaskId.Value, id = request.id }, transaction);
                            priorityOrder = (maxOrder ?? 0) + 1;
                        }

                        // Handle priority_order change: move subtask to new position and shift others BEFORE updating
                        if (parentTaskId.HasValue && priorityOrder.HasValue && oldPriorityOrder.HasValue && oldPriorityOrder != priorityOrder)
                        {
                            // Update subtask with all fields EXCEPT priority_order first (to avoid conflicts)
                            await connection.ExecuteAsync(
                                "UPDATE tasks2_level_1_sub_task SET " +
                                "title = @title, description = @description, priority_level_id = @priority_level_id, " +
                                "status_id = @status_id, start_time = @start_time, end_time = @end_time, start_date = @start_date, end_date = @end_date, " +
                                "modified_on = NOW(), modified_by = @modified_by, estimated_hours = @estimated_hours, " +
                                "important = @important, completed = @completed, selected_days = @selected_days " +
                                "WHERE id = @id",
                                new
                                {
                                    id = request.id,
                                    title = request.title,
                                    description = request.description,
                                    priority_level_id = request.priority_level_id,
                                    status_id = request.status_id,
                                    start_time = request.start_time,
                                    end_time = request.end_time,
                                    start_date = request.start_date,
                                    end_date = request.end_date,
                                    modified_by = userId,
                                    estimated_hours = request.estimated_hours,
                                    important = request.important,
                                    completed = request.completed
                                }, transaction);

                            // Move subtask to new position (this will update priority_order)
                            await MoveLevel1SubtaskToPosition(connection, request.id, priorityOrder.Value, parentTaskId.Value, transaction);
                        }
                        else
                        {
                            // Update subtask with all fields
                            await connection.ExecuteAsync(Tasks2Queries.UpdateLevel1Subtask, new
                            {
                                id = request.id,
                                title = request.title,
                                description = request.description,
                                priority_level_id = request.priority_level_id,
                                status_id = request.status_id,
                                start_time = request.start_time,
                                end_time = request.end_time,
                                modified_by = userId,
                                start_date = request.start_date,
                                end_date = request.end_date,
                                estimated_hours = request.estimated_hours,
                                priority_order = priorityOrder,
                                important = request.important,
                                completed = request.completed,
                                selected_days = request.selected_days
                            }, transaction);

                            // Reorder siblings if priority_order changed
                            if (parentTaskId.HasValue && oldPriorityOrder != priorityOrder)
                            {
                                await ReorderLevel1Subtasks2(connection, parentTaskId.Value, transaction);
                            }
                        }

                        transaction.Commit();

                        // Return the updated Level 1 subtask
                        var level1Rows = await connection.QueryAsync<dynamic>(Tasks2Queries.GetLevel1Subtasks,
                            new { task_id = parentTaskId.Value });

                        var updatedRow = level1Rows.FirstOrDefault(r => (int)r.id == request.id);
                        if (updatedRow != null)
                        {
                            return new Subtask2
                            {
                                id = (int)updatedRow.id,
                                title = updatedRow.title ?? string.Empty,
                                description = updatedRow.description,
                                startTime = updatedRow.startTime,
                                endTime = updatedRow.endTime,
                                createdAt = updatedRow.createdAt as DateTime? ?? DateTime.UtcNow,
                                updatedAt = updatedRow.updatedAt as DateTime? ?? DateTime.UtcNow,
                                estimatedHours = updatedRow.estimatedHours as decimal?,
                                priority_order = updatedRow.priorityOrder as int?,
                                important = updatedRow.important ?? false,
                                completed = updatedRow.completed ?? false,
                                level = 1,
                                isExpanded = false,
                                subtasks = new List<Subtask2>(),
                                parentId = parentTaskId.Value.ToString(),
                                priority_level = !string.IsNullOrEmpty(updatedRow.priority_name) ? new TaskPriority
                                {
                                    name = updatedRow.priority_name,
                                    color = updatedRow.priority_color ?? "#64748B"
                                } : null,
                                status = !string.IsNullOrEmpty(updatedRow.status_name) ? new TaskStatus
                                {
                                    name = updatedRow.status_name,
                                    color = updatedRow.status_color ?? "#64748B"
                                } : null
                            };
                        }

                        return null;
                    }
                    catch
                    {
                        transaction.Rollback();
                        throw;
                    }
                }
            }
        }

        public async System.Threading.Tasks.Task<bool> DeleteLevel2Subtask2(int id)
        {
            using (var connection = _context.CreateConnection())
            {
                var rowsAffected = await connection.ExecuteAsync(Tasks2Queries.DeleteLevel2Subtask, new { id });
                return rowsAffected > 0;
            }
        }

        private async System.Threading.Tasks.Task<bool> ShouldForceCompletedAsync(IDbConnection connection, int? statusId, IDbTransaction transaction = null)
        {
            if (!statusId.HasValue)
            {
                return false;
            }

            var isCompletionStatus = await connection.ExecuteScalarAsync<bool?>(
                "SELECT is_completion_status FROM status_master WHERE id = @statusId AND is_deleted = false AND is_active = true",
                new { statusId = statusId.Value },
                transaction);

            return isCompletionStatus ?? false;
        }

        // Move main task to specific position and shift others accordingly
        private async System.Threading.Tasks.Task MoveMainTask2ToPosition(IDbConnection connection, int taskId, int newPosition, DateTime date, IDbTransaction transaction)
        {
            // Get current position of the task
            var currentOrder = await connection.QueryFirstOrDefaultAsync<int?>(
                "SELECT priority_order FROM tasks2_main_task WHERE id = @taskId",
                new { taskId = taskId }, transaction);

            if (!currentOrder.HasValue)
            {
                // If no current order, just set it and reorder
                await connection.ExecuteAsync(
                    "UPDATE tasks2_main_task SET priority_order = @order WHERE id = @id",
                    new { order = newPosition, id = taskId }, transaction);
                await ReorderMainTasks2ByDate(connection, date, transaction);
                return;
            }

            int oldPosition = currentOrder.Value;

            if (oldPosition == newPosition)
            {
                // No change needed
                return;
            }

            // Get all tasks on this date ordered by priority_order (including the moving task to get correct order)
            var allTasks = await connection.QueryAsync<dynamic>(
                "SELECT id, priority_order FROM tasks2_main_task WHERE start_date = @date ORDER BY priority_order NULLS LAST, id",
                new { date = date }, transaction);

            var taskList = allTasks.ToList();

            // Build a list of all task IDs in order
            var orderedTaskIds = new List<int>();
            foreach (var task in taskList)
            {
                var tid = (int)task.id;
                if (tid != taskId) // Exclude the moving task from the list
                {
                    orderedTaskIds.Add(tid);
                }
            }

            // Temporarily set the moving task to a high value to avoid conflicts
            await connection.ExecuteAsync(
                "UPDATE tasks2_main_task SET priority_order = 999999 WHERE id = @id",
                new { id = taskId }, transaction);

            // Reorder all other tasks: insert moving task at newPosition, shift others
            int currentPos = 1;
            foreach (var tid in orderedTaskIds)
            {
                if (currentPos == newPosition)
                {
                    // This is where the moving task should go, skip this position
                    currentPos++;
                }

                // Set this task's position
                await connection.ExecuteAsync(
                    "UPDATE tasks2_main_task SET priority_order = @order WHERE id = @id",
                    new { order = currentPos, id = tid }, transaction);

                currentPos++;
            }

            // Set the moving task to its new position
            await connection.ExecuteAsync(
                "UPDATE tasks2_main_task SET priority_order = @order WHERE id = @id",
                new { order = newPosition, id = taskId }, transaction);

            // Final reorder to ensure non-gapped sequence (should already be correct, but just in case)
            await ReorderMainTasks2ByDate(connection, date, transaction);
        }

        // Reorder main tasks by date to maintain non-gapped sequence (1, 2, 3, ...)
        private async System.Threading.Tasks.Task ReorderMainTasks2ByDate(IDbConnection connection, DateTime date, IDbTransaction transaction)
        {
            var tasks = await connection.QueryAsync<dynamic>(
                "SELECT id, priority_order FROM tasks2_main_task WHERE start_date = @date ORDER BY priority_order NULLS LAST, id",
                new { date = date }, transaction);

            var taskList = tasks.ToList();
            if (taskList.Count == 0) return;

            int order = 1;
            foreach (var task in taskList)
            {
                var taskId = (int)task.id;
                var currentOrder = task.priority_order as int?;

                // Only update if order changed
                if (currentOrder != order)
                {
                    await connection.ExecuteAsync(
                        "UPDATE tasks2_main_task SET priority_order = @order WHERE id = @id",
                        new { order = order, id = taskId }, transaction);
                }
                order++;
            }
        }

        // Move Level 1 subtask to specific position and shift others accordingly
        private async System.Threading.Tasks.Task MoveLevel1SubtaskToPosition(IDbConnection connection, int subtaskId, int newPosition, int parentTaskId, IDbTransaction transaction)
        {
            // Get current position of the subtask
            var currentOrder = await connection.QueryFirstOrDefaultAsync<int?>(
                "SELECT priority_order FROM tasks2_level_1_sub_task WHERE id = @subtaskId",
                new { subtaskId = subtaskId }, transaction);

            if (!currentOrder.HasValue)
            {
                // If no current order, just set it and reorder
                await connection.ExecuteAsync(
                    "UPDATE tasks2_level_1_sub_task SET priority_order = @order WHERE id = @id",
                    new { order = newPosition, id = subtaskId }, transaction);
                await ReorderLevel1Subtasks2(connection, parentTaskId, transaction);
                return;
            }

            int oldPosition = currentOrder.Value;

            if (oldPosition == newPosition)
            {
                // No change needed
                return;
            }

            // Get all subtasks ordered by priority_order (including the moving subtask to get correct order)
            var allSubtasks = await connection.QueryAsync<dynamic>(
                "SELECT id, priority_order FROM tasks2_level_1_sub_task WHERE tasks2_main_task_id = @parentTaskId ORDER BY priority_order NULLS LAST, id",
                new { parentTaskId = parentTaskId }, transaction);

            var subtaskList = allSubtasks.ToList();

            // Build a list of all subtask IDs in order, excluding the moving subtask
            var orderedSubtaskIds = new List<int>();
            foreach (var subtask in subtaskList)
            {
                var sid = (int)subtask.id;
                if (sid != subtaskId) // Exclude the moving subtask
                {
                    orderedSubtaskIds.Add(sid);
                }
            }

            // Temporarily set the moving subtask to a high value to avoid conflicts
            await connection.ExecuteAsync(
                "UPDATE tasks2_level_1_sub_task SET priority_order = 999999 WHERE id = @id",
                new { id = subtaskId }, transaction);

            // Reorder all other subtasks: insert moving subtask at newPosition, shift others
            int currentPos = 1;
            foreach (var sid in orderedSubtaskIds)
            {
                if (currentPos == newPosition)
                {
                    // This is where the moving subtask should go, skip this position
                    currentPos++;
                }

                // Set this subtask's position
                await connection.ExecuteAsync(
                    "UPDATE tasks2_level_1_sub_task SET priority_order = @order WHERE id = @id",
                    new { order = currentPos, id = sid }, transaction);

                currentPos++;
            }

            // Set the moving subtask to its new position
            await connection.ExecuteAsync(
                "UPDATE tasks2_level_1_sub_task SET priority_order = @order WHERE id = @id",
                new { order = newPosition, id = subtaskId }, transaction);

            // Final reorder to ensure non-gapped sequence
            await ReorderLevel1Subtasks2(connection, parentTaskId, transaction);
        }

        // Reorder Level 1 subtasks by parent task to maintain non-gapped sequence (1, 2, 3, ...)
        private async System.Threading.Tasks.Task ReorderLevel1Subtasks2(IDbConnection connection, int parentTaskId, IDbTransaction transaction)
        {
            var subtasks = await connection.QueryAsync<dynamic>(
                "SELECT id, priority_order FROM tasks2_level_1_sub_task WHERE tasks2_main_task_id = @parentTaskId ORDER BY priority_order NULLS LAST, id",
                new { parentTaskId = parentTaskId }, transaction);

            var subtaskList = subtasks.ToList();
            if (subtaskList.Count == 0) return;

            int order = 1;
            foreach (var subtask in subtaskList)
            {
                var subtaskId = (int)subtask.id;
                var currentOrder = subtask.priority_order as int?;

                // Only update if order changed
                if (currentOrder != order)
                {
                    await connection.ExecuteAsync(
                        "UPDATE tasks2_level_1_sub_task SET priority_order = @order WHERE id = @id",
                        new { order = order, id = subtaskId }, transaction);
                }
                order++;
            }
        }

        // Move Level 2 subtask to specific position and shift others accordingly
        private async System.Threading.Tasks.Task MoveLevel2SubtaskToPosition(IDbConnection connection, int subtaskId, int newPosition, int parentLevel1SubtaskId, IDbTransaction transaction)
        {
            // Get current position of the subtask
            var currentOrder = await connection.QueryFirstOrDefaultAsync<int?>(
                "SELECT priority_order FROM tasks2_level_2_sub_task WHERE id = @subtaskId",
                new { subtaskId = subtaskId }, transaction);

            if (!currentOrder.HasValue)
            {
                // If no current order, just set it and reorder
                await connection.ExecuteAsync(
                    "UPDATE tasks2_level_2_sub_task SET priority_order = @order WHERE id = @id",
                    new { order = newPosition, id = subtaskId }, transaction);
                await ReorderLevel2Subtasks2(connection, parentLevel1SubtaskId, transaction);
                return;
            }

            int oldPosition = currentOrder.Value;

            if (oldPosition == newPosition)
            {
                // No change needed
                return;
            }

            // Get all subtasks ordered by priority_order (including the moving subtask to get correct order)
            var allSubtasks = await connection.QueryAsync<dynamic>(
                "SELECT id, priority_order FROM tasks2_level_2_sub_task WHERE tasks2_level_1_sub_task_id = @parentLevel1SubtaskId ORDER BY priority_order NULLS LAST, id",
                new { parentLevel1SubtaskId = parentLevel1SubtaskId }, transaction);

            var subtaskList = allSubtasks.ToList();

            // Build a list of all subtask IDs in order, excluding the moving subtask
            var orderedSubtaskIds = new List<int>();
            foreach (var subtask in subtaskList)
            {
                var sid = (int)subtask.id;
                if (sid != subtaskId) // Exclude the moving subtask
                {
                    orderedSubtaskIds.Add(sid);
                }
            }

            // Temporarily set the moving subtask to a high value to avoid conflicts
            await connection.ExecuteAsync(
                "UPDATE tasks2_level_2_sub_task SET priority_order = 999999 WHERE id = @id",
                new { id = subtaskId }, transaction);

            // Reorder all other subtasks: insert moving subtask at newPosition, shift others
            int currentPos = 1;
            foreach (var sid in orderedSubtaskIds)
            {
                if (currentPos == newPosition)
                {
                    // This is where the moving subtask should go, skip this position
                    currentPos++;
                }

                // Set this subtask's position
                await connection.ExecuteAsync(
                    "UPDATE tasks2_level_2_sub_task SET priority_order = @order WHERE id = @id",
                    new { order = currentPos, id = sid }, transaction);

                currentPos++;
            }

            // Set the moving subtask to its new position
            await connection.ExecuteAsync(
                "UPDATE tasks2_level_2_sub_task SET priority_order = @order WHERE id = @id",
                new { order = newPosition, id = subtaskId }, transaction);

            // Final reorder to ensure non-gapped sequence
            await ReorderLevel2Subtasks2(connection, parentLevel1SubtaskId, transaction);
        }

        // Reorder Level 2 subtasks by parent Level 1 subtask to maintain non-gapped sequence (1, 2, 3, ...)
        private async System.Threading.Tasks.Task ReorderLevel2Subtasks2(IDbConnection connection, int parentLevel1SubtaskId, IDbTransaction transaction)
        {
            var subtasks = await connection.QueryAsync<dynamic>(
                "SELECT id, priority_order FROM tasks2_level_2_sub_task WHERE tasks2_level_1_sub_task_id = @parentLevel1SubtaskId ORDER BY priority_order NULLS LAST, id",
                new { parentLevel1SubtaskId = parentLevel1SubtaskId }, transaction);

            var subtaskList = subtasks.ToList();
            if (subtaskList.Count == 0) return;

            int order = 1;
            foreach (var subtask in subtaskList)
            {
                var subtaskId = (int)subtask.id;
                var currentOrder = subtask.priority_order as int?;

                // Only update if order changed
                if (currentOrder != order)
                {
                    await connection.ExecuteAsync(
                        "UPDATE tasks2_level_2_sub_task SET priority_order = @order WHERE id = @id",
                        new { order = order, id = subtaskId }, transaction);
                }
                order++;
            }
        }

        public async System.Threading.Tasks.Task<bool> DeleteLevel1Subtask2(int id)
        {
            using (var connection = _context.CreateConnection())
            {
                connection.Open();
                using (var transaction = connection.BeginTransaction())
                {
                    try
                    {
                        // Get parent task ID before deletion for reordering
                        var parentTaskId = await connection.QueryFirstOrDefaultAsync<int?>(
                            "SELECT tasks2_main_task_id FROM tasks2_level_1_sub_task WHERE id = @id",
                            new { id = id }, transaction);

                        // Cascade delete will handle level 2 subtasks
                        var rowsAffected = await connection.ExecuteAsync(Tasks2Queries.DeleteLevel1Subtask, new { id }, transaction);

                        // Reorder remaining siblings
                        if (parentTaskId.HasValue && rowsAffected > 0)
                        {
                            await ReorderLevel1Subtasks2(connection, parentTaskId.Value, transaction);
                        }

                        transaction.Commit();
                        return rowsAffected > 0;
                    }
                    catch
                    {
                        transaction.Rollback();
                        throw;
                    }
                }
            }
        }

        public async System.Threading.Tasks.Task<Subtask2> AddLevel2Subtask2(AddLevel2Subtask2Request request, int userId)
        {
            using (var connection = _context.CreateConnection())
            {
                connection.Open();
                using (var transaction = connection.BeginTransaction())
                {
                    try
                    {
                        // Auto-assign priority_order if null
                        int? priorityOrder = request.priority_order;
                        if (!priorityOrder.HasValue)
                        {
                            var maxOrder = await connection.QueryFirstOrDefaultAsync<int?>(
                                "SELECT MAX(priority_order) FROM tasks2_level_2_sub_task WHERE tasks2_level_1_sub_task_id = @tasks2_level_1_sub_task_id",
                                new { tasks2_level_1_sub_task_id = request.tasks2_level_1_sub_task_id }, transaction);
                            priorityOrder = (maxOrder ?? 0) + 1;
                        }

                        var subtaskId = await connection.ExecuteScalarAsync<int>(Tasks2Queries.AddLevel2Subtask, new
                        {
                            tasks2_level_1_sub_task_id = request.tasks2_level_1_sub_task_id,
                            title = request.title,
                            description = request.description,
                            priority_level_id = request.priority_level_id,
                            status_id = request.status_id,
                            start_time = request.start_time,
                            end_time = request.end_time,
                    start_date = request.start_date,
                    end_date = request.end_date,
                            created_by = userId,
                            modified_by = userId,
                            estimated_hours = request.estimated_hours,
                            priority_order = priorityOrder,
                            important = request.important,
                            completed = request.completed,
                            selected_days = request.selected_days
                        }, transaction);

                        // Reorder siblings to maintain non-gapped sequence
                        await ReorderLevel2Subtasks2(connection, request.tasks2_level_1_sub_task_id, transaction);

                        transaction.Commit();

                        //// Get parent Level 1 subtask's taskOnDate to inherit for Level 2 subtask
                        //var parentLevel1TaskOnDate = await connection.ExecuteScalarAsync<DateTime?>(
                        //    "SELECT t.task_on_date FROM tasks_main_task t " +
                        //    "INNER JOIN tasks_level_1_sub_task l1 ON l1.tasks_main_task_id = t.id " +
                        //    "WHERE l1.id = @level1_subtask_id",
                            //new { level1_subtask_id = request.tasks2_level_1_sub_task_id });

                        // Return the created subtask by fetching it
                        var level2Rows = await connection.QueryAsync<dynamic>(Tasks2Queries.GetLevel2Subtasks,
                            new { level1_subtask_id = request.tasks2_level_1_sub_task_id });

                        var row = level2Rows.FirstOrDefault(r => (int)r.id == subtaskId);
                        if (row != null)
                        {
                            return new Subtask2
                            {
                                id = (int)row.id,
                                title = row.title ?? string.Empty,
                                description = row.description,
                                // Use helper method with fallback to database column names
                                startTime = GetValueWithFallback<string>(row, "startTime", "start_time", null),
                                endTime = GetValueWithFallback<string>(row, "endTime", "end_time", null),
                                createdAt = GetValueWithFallback<DateTime?>(row, "createdAt", "created_on") ?? DateTime.UtcNow,
                                updatedAt = GetValueWithFallback<DateTime?>(row, "updatedAt", "modified_on") ?? DateTime.UtcNow,
                                estimatedHours = GetValueWithFallback<decimal?>(row, "estimatedHours", "estimated_hours", null),
                                priority_order = GetValueWithFallback<int?>(row, "priorityOrder", "priority_order", null),
                                // Inherit taskOnDate from parent Level 1 subtask (which inherits from main task)
                                //taskOnDate = parentLevel1TaskOnDate,
                                important = GetValue<bool>(row, "important", false),
                                completed = GetValue<bool>(row, "completed", false),
                                level = 2,
                                isExpanded = false,
                                subtasks = new List<Subtask2>(),
                                parentId = request.tasks2_level_1_sub_task_id.ToString(),
                                priority_level = !string.IsNullOrEmpty(row.priority_name) ? new TaskPriority
                                {
                                    name = row.priority_name,
                                    color = row.priority_color ?? "#64748B"
                                } : null,
                                status = !string.IsNullOrEmpty(row.status_name) ? new TaskStatus
                                {
                                    name = row.status_name,
                                    color = row.status_color ?? "#64748B"
                                } : null
                            };
                        }

                        return null;
                    }
                    catch
                    {
                        transaction.Rollback();
                        throw;
                    }
                }
            }
        }


        public async System.Threading.Tasks.Task<Subtask2> UpdateLevel2Subtask2(UpdateLevel2Subtask2Request request, int userId)
        {
            using (var connection = _context.CreateConnection())
            {
                connection.Open();
                using (var transaction = connection.BeginTransaction())
                {
                    try
                    {
                        // Get parent Level 1 subtask ID and old priority_order
                        var parentInfo = await connection.QueryFirstOrDefaultAsync<dynamic>(
                            "SELECT tasks2_level_1_sub_task_id, priority_order FROM tasks2_level_2_sub_task WHERE id = @id",
                            new { id = request.id }, transaction);

                        var parentLevel1SubtaskId = parentInfo?.tasks2_level_1_sub_task_id as int?;
                        var oldPriorityOrder = parentInfo?.priority_order as int?;

                        // Auto-set completed when status is marked as completion status
                        var shouldForceCompleted = await ShouldForceCompletedAsync(connection, request.status_id, transaction);
                        request.completed = request.completed || shouldForceCompleted;

                        // Auto-assign priority_order if null
                        int? priorityOrder = request.priority_order;
                        if (!priorityOrder.HasValue && parentLevel1SubtaskId.HasValue)
                        {
                            var maxOrder = await connection.QueryFirstOrDefaultAsync<int?>(
                                "SELECT MAX(priority_order) FROM tasks2_level_2_sub_task WHERE tasks2_level_1_sub_task_id = @tasks2_level_1_sub_task_id AND id != @id",
                                new { tasks2_level_1_sub_task_id = parentLevel1SubtaskId.Value, id = request.id }, transaction);
                            priorityOrder = (maxOrder ?? 0) + 1;
                        }

                        // Handle priority_order change: move subtask to new position and shift others BEFORE updating
                        if (parentLevel1SubtaskId.HasValue && priorityOrder.HasValue && oldPriorityOrder.HasValue && oldPriorityOrder != priorityOrder)
                        {
                            // Update subtask with all fields EXCEPT priority_order first (to avoid conflicts)
                            await connection.ExecuteAsync(
                                "UPDATE tasks2_level_2_sub_task SET " +
                                "title = @title, description = @description, priority_level_id = @priority_level_id, " +
                                "status_id = @status_id, start_time = @start_time, end_time = @end_time, start_date = @start_date, end_date = @end_date, " +
                                "modified_on = NOW(), modified_by = @modified_by, estimated_hours = @estimated_hours, " +
                                "important = @important, completed = @completed, selected_days = @selected_days " +
                                "WHERE id = @id",
                                new
                                {
                                    id = request.id,
                                    title = request.title,
                                    description = request.description,
                                    priority_level_id = request.priority_level_id,
                                    status_id = request.status_id,
                                    start_date = request.start_date,
                                    end_date = request.end_date,
                                    start_time = request.start_time,
                                    end_time = request.end_time,
                                    modified_by = userId,
                                    estimated_hours = request.estimated_hours,
                                    important = request.important,
                                    completed = request.completed,
                                    selected_days = request.selected_days
                                }, transaction);

                            // Move subtask to new position (this will update priority_order)
                            await MoveLevel2SubtaskToPosition(connection, request.id, priorityOrder.Value, parentLevel1SubtaskId.Value, transaction);
                        }
                        else
                        {
                            // Update subtask with all fields
                            await connection.ExecuteAsync(Tasks2Queries.UpdateLevel2Subtask, new
                            {
                                id = request.id,
                                title = request.title,
                                description = request.description,
                                priority_level_id = request.priority_level_id,
                                status_id = request.status_id,
                                start_time = request.start_time,
                                end_time = request.end_time,
                    start_date = request.start_date,
                    end_date = request.end_date,
                                modified_by = userId,
                                estimated_hours = request.estimated_hours,
                                priority_order = priorityOrder,
                                important = request.important,
                                completed = request.completed,
                                selected_days = request.selected_days
                            }, transaction);

                            // Reorder siblings if priority_order changed
                            if (parentLevel1SubtaskId.HasValue && oldPriorityOrder != priorityOrder)
                            {
                                await ReorderLevel2Subtasks2(connection, parentLevel1SubtaskId.Value, transaction);
                            }
                        }

                        transaction.Commit();

                        // Get the level 1 subtask ID for this subtask
                        var level1SubtaskId = parentLevel1SubtaskId;

                        if (level1SubtaskId.HasValue)
                        {
                            //// Get parent Level 1 subtask's taskOnDate to inherit for Level 2 subtask
                            //var parentLevel1TaskOnDate = await connection.ExecuteScalarAsync<DateTime?>(
                            //    "SELECT t.task_on_date FROM tasks_main_task t " +
                            //    "INNER JOIN tasks_level_1_sub_task l1 ON l1.tasks_main_task_id = t.id " +
                            //    "WHERE l1.id = @level1_subtask_id",
                            //    new { level1_subtask_id = level1SubtaskId.Value });

                            var level2Rows = await connection.QueryAsync<dynamic>(Tasks2Queries.GetLevel2Subtasks,
                                new { level1_subtask_id = level1SubtaskId.Value });

                            var row = level2Rows.FirstOrDefault(r => (int)r.id == request.id);
                            if (row != null)
                            {
                                return new Subtask2
                                {
                                    id = (int)row.id,
                                    title = row.title ?? string.Empty,
                                    description = row.description,
                                    // Use helper method with fallback to database column names
                                    startTime = GetValueWithFallback<string>(row, "startTime", "start_time", null),
                                    endTime = GetValueWithFallback<string>(row, "endTime", "end_time", null),
                                    createdAt = GetValueWithFallback<DateTime?>(row, "createdAt", "created_on") ?? DateTime.UtcNow,
                                    updatedAt = GetValueWithFallback<DateTime?>(row, "updatedAt", "modified_on") ?? DateTime.UtcNow,
                                    estimatedHours = GetValueWithFallback<decimal?>(row, "estimatedHours", "estimated_hours", null),
                                    priority_order = GetValueWithFallback<int?>(row, "priorityOrder", "priority_order", null),
                                    // Inherit taskOnDate from parent Level 1 subtask (which inherits from main task)
                                    important = GetValue<bool>(row, "important", false),
                                    completed = GetValue<bool>(row, "completed", false),
                                    level = 2,
                                    isExpanded = false,
                                    subtasks = new List<Subtask2>(),
                                    parentId = level1SubtaskId.Value.ToString(),
                                    priority_level = !string.IsNullOrEmpty(row.priority_name) ? new TaskPriority
                                    {
                                        name = row.priority_name,
                                        color = row.priority_color ?? "#64748B"
                                    } : null,
                                    status = !string.IsNullOrEmpty(row.status_name) ? new TaskStatus
                                    {
                                        name = row.status_name,
                                        color = row.status_color ?? "#64748B"
                                    } : null
                                };
                            }
                        }

                        return null;
                    }
                    catch
                    {
                        transaction.Rollback();
                        throw;
                    }
                }
            }
        }

        // Aliases without "2" suffix for controller compatibility
        public System.Threading.Tasks.Task<IEnumerable<Task2>> GetTasks() => GetTasks2();
        public System.Threading.Tasks.Task<Task2> AddMainTask(AddMainTask2Request request, int userId) => AddMainTask2(request, userId);
        public System.Threading.Tasks.Task<Task2> UpdateMainTask(UpdateMainTask2Request request, int userId) => UpdateMainTask2(request, userId);
        public System.Threading.Tasks.Task<bool> UpdateTaskImportant(int id, bool important, int userId) => UpdateTask2Important(id, important, userId);
        public System.Threading.Tasks.Task<bool> UpdateTaskCompleted(int id, bool completed, int userId) => UpdateTask2Completed(id, completed, userId);
        public System.Threading.Tasks.Task<bool> UpdateLevel1SubtaskCompleted(int id, bool completed, int userId) => UpdateLevel1Subtask2Completed(id, completed, userId);
        public System.Threading.Tasks.Task<bool> UpdateLevel2SubtaskCompleted(int id, bool completed, int userId) => UpdateLevel2Subtask2Completed(id, completed, userId);
        public System.Threading.Tasks.Task<bool> DeleteMainTask(int id) => DeleteMainTask2(id);
        public System.Threading.Tasks.Task<Subtask2> AddLevel1Subtask(AddLevel1Subtask2Request request, int userId) => AddLevel1Subtask2(request, userId);
        public System.Threading.Tasks.Task<Subtask2> UpdateLevel1Subtask(UpdateLevel1Subtask2Request request, int userId) => UpdateLevel1Subtask2(request, userId);
        public System.Threading.Tasks.Task<bool> DeleteLevel1Subtask(int id) => DeleteLevel1Subtask2(id);
        public System.Threading.Tasks.Task<Subtask2> AddLevel2Subtask(AddLevel2Subtask2Request request, int userId) => AddLevel2Subtask2(request, userId);
        public System.Threading.Tasks.Task<Subtask2> UpdateLevel2Subtask(UpdateLevel2Subtask2Request request, int userId) => UpdateLevel2Subtask2(request, userId);
        public System.Threading.Tasks.Task<bool> DeleteLevel2Subtask(int id) => DeleteLevel2Subtask2(id);
    }
}

