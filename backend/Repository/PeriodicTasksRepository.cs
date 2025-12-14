using Dapper;
using OmniPlanner_API.Models.Tasks;
using OmniPlanner_API.IRepository;
using OmniPlanner_API.Queries.Tasks;
using OmniPlanner_API.ViewModels.Tasks;
using TaskStatus = OmniPlanner_API.Models.Tasks.TaskStatus;
using TaskPriority = OmniPlanner_API.Models.Tasks.TaskPriority;
using TaskCategory = OmniPlanner_API.Models.Tasks.TaskCategory;
using TaskUrl = OmniPlanner_API.Models.Tasks.TaskUrl;
using PeriodicTask = OmniPlanner_API.Models.Tasks.PeriodicTask;
using PeriodicSubtask = OmniPlanner_API.Models.Tasks.PeriodicSubtask;
using System.Data;

namespace OmniPlanner_API.Repository
{
    public class PeriodicTasksRepository : IPeriodicTasksRepository
    {
        private readonly DapperContext _context;
        private readonly Microsoft.AspNetCore.Http.IHttpContextAccessor _httpContextAccessor;

        public PeriodicTasksRepository(DapperContext context, Microsoft.AspNetCore.Http.IHttpContextAccessor httpContextAccessor)
        {
            _context = context;
            _httpContextAccessor = httpContextAccessor;
        }

        // Helper method to safely get values from dynamic Dapper rows
        private T GetValue<T>(dynamic row, string propertyName, T defaultValue = default(T))
        {
            try
            {
                var dict = row as IDictionary<string, object>;
                if (dict != null)
                {
                    if (dict.ContainsKey(propertyName))
                    {
                        var value = dict[propertyName];
                        return ConvertValue<T>(value, defaultValue);
                    }
                    
                    var key = dict.Keys.FirstOrDefault(k => 
                        string.Equals(k, propertyName, StringComparison.OrdinalIgnoreCase));
                    if (key != null)
                    {
                        var value = dict[key];
                        return ConvertValue<T>(value, defaultValue);
                    }
                }
                
                try
                {
                    var value = ((object)row).GetType().GetProperty(propertyName)?.GetValue(row);
                    if (value != null && value != DBNull.Value)
                        return ConvertValue<T>(value, defaultValue);
                }
                catch { }
            }
            catch { }
            return defaultValue;
        }
        
        private T ConvertValue<T>(object value, T defaultValue)
        {
            if (value == null || value == DBNull.Value)
                return defaultValue;
            
            try
            {
                if (typeof(T).IsGenericType && typeof(T).GetGenericTypeDefinition() == typeof(Nullable<>))
                {
                    var underlyingType = Nullable.GetUnderlyingType(typeof(T));
                    if (value.GetType() == underlyingType)
                        return (T)value;
                    return (T)Convert.ChangeType(value, underlyingType);
                }
                
                if (value is T)
                    return (T)value;
                
                if (typeof(T) == typeof(string))
                    return (T)(object)value.ToString();
                
                return (T)Convert.ChangeType(value, typeof(T));
            }
            catch
            {
                return defaultValue;
            }
        }

        public async Task<IEnumerable<PeriodicTask>> GetPeriodicTasks()
        {
            using (var connection = _context.CreateConnection())
            {
                var taskRows = await connection.QueryAsync<dynamic>(PeriodicTasksQueries.GetAllPeriodicTasks);
                
                var tasks = new Dictionary<int, PeriodicTask>();
                var taskIds = new List<int>();

                // First pass: Create all tasks
                foreach (var row in taskRows)
                {
                    var rowDict = row as IDictionary<string, object>;
                    var taskId = rowDict != null ? Convert.ToInt32(rowDict["id"]) : (int)row.id;
                    if (!tasks.ContainsKey(taskId))
                    {
                        tasks[taskId] = new PeriodicTask
                        {
                            id = taskId,
                            title = GetValue<string>(row, "title", string.Empty),
                            description = GetValue<string>(row, "description", null),
                            startDate = GetValue<DateTime?>(row, "startDate", null),
                            endDate = GetValue<DateTime?>(row, "endDate", null),
                            startTime = GetValue<string>(row, "startTime", null),
                            endTime = GetValue<string>(row, "endTime", null),
                            recurrence_pattern = GetValue<string>(row, "recurrence_pattern", "daily"),
                            recurrence_interval = GetValue<int>(row, "recurrence_interval", 1),
                            recurrence_days = GetValue<int[]>(row, "recurrence_days", null),
                            recurrence_month_day = GetValue<int?>(row, "recurrence_month_day", null),
                            recurrence_week_of_month = GetValue<int?>(row, "recurrence_week_of_month", null),
                            recurrence_day_of_week = GetValue<int?>(row, "recurrence_day_of_week", null),
                            recurrence_month = GetValue<int?>(row, "recurrence_month", null),
                            recurrence_end_type = GetValue<string>(row, "recurrence_end_type", "never"),
                            recurrence_end_date = GetValue<DateTime?>(row, "recurrence_end_date", null),
                            recurrence_occurrences = GetValue<int?>(row, "recurrence_occurrences", null),
                            createdAt = GetValue<DateTime>(row, "createdAt", DateTime.UtcNow),
                            updatedAt = GetValue<DateTime>(row, "updatedAt", DateTime.UtcNow),
                            estimatedHours = GetValue<decimal?>(row, "estimatedHours", null),
                            priority_order = GetValue<int?>(row, "priorityOrder", null),
                            remarks = GetValue<string>(row, "remarks", null),
                            important = GetValue<bool>(row, "important", false),
                            active = GetValue<bool>(row, "active", true),
                            completed = false,
                            isExpanded = false,
                            subtasks = new List<PeriodicSubtask>(),
                            urls = new List<TaskUrl>(),
                            priority_level = !string.IsNullOrEmpty(GetValue<string>(row, "priority_name", null)) ? new TaskPriority
                            {
                                name = GetValue<string>(row, "priority_name", ""),
                                color = GetValue<string>(row, "priority_color", "#64748B")
                            } : null,
                            status = !string.IsNullOrEmpty(GetValue<string>(row, "status_name", null)) ? new TaskStatus
                            {
                                name = GetValue<string>(row, "status_name", ""),
                                color = GetValue<string>(row, "status_color", "#64748B")
                            } : null,
                            category = !string.IsNullOrEmpty(GetValue<string>(row, "category_name", null)) ? new TaskCategory
                            {
                                name = GetValue<string>(row, "category_name", ""),
                                icon = GetValue<string>(row, "category_icon", "")
                            } : null
                        };
                        taskIds.Add(taskId);
                    }
                }

                // Get URLs for all tasks
                var urlsMasterRepo = new UrlsMasterRepository(_context, _httpContextAccessor);
                foreach (var taskId in taskIds)
                {
                    var urls = await connection.QueryAsync<TaskUrl>(PeriodicTasksQueries.GetPeriodicTaskUrls, new { task_id = taskId });
                    var urlList = urls.ToList();
                    
                    foreach (var url in urlList)
                    {
                        url.credentials = await urlsMasterRepo.GetUrlCredentials(url.id);
                    }
                    
                    tasks[taskId].urls = urlList;
                }

                // Get Level 1 subtasks
                var level1SubtasksDict = new Dictionary<int, List<PeriodicSubtask>>();
                foreach (var taskId in taskIds)
                {
                    var level1Rows = await connection.QueryAsync<dynamic>(PeriodicTasksQueries.GetPeriodicLevel1Subtasks, new { task_id = taskId });
                    var level1Subtasks = new List<PeriodicSubtask>();
                    
                    foreach (var row in level1Rows)
                    {
                        var subtask = new PeriodicSubtask
                        {
                            id = GetValue<int>(row, "id", 0),
                            title = GetValue<string>(row, "title", string.Empty),
                            description = GetValue<string>(row, "description", null),
                            startTime = GetValue<string>(row, "startTime", null),
                            endTime = GetValue<string>(row, "endTime", null),
                            createdAt = GetValue<DateTime>(row, "createdAt", DateTime.UtcNow),
                            updatedAt = GetValue<DateTime>(row, "updatedAt", DateTime.UtcNow),
                            estimatedHours = GetValue<decimal?>(row, "estimatedHours", null),
                            priority_order = GetValue<int?>(row, "priorityOrder", null),
                            important = GetValue<bool>(row, "important", false),
                            completed = GetValue<bool>(row, "completed", false),
                            level = 1,
                            isExpanded = false,
                            subtasks = new List<PeriodicSubtask>(),
                            parentId = taskId.ToString(),
                            priority_level = !string.IsNullOrEmpty(GetValue<string>(row, "priority_name", null)) ? new TaskPriority
                            {
                                name = GetValue<string>(row, "priority_name", ""),
                                color = GetValue<string>(row, "priority_color", "#64748B")
                            } : null,
                            status = !string.IsNullOrEmpty(GetValue<string>(row, "status_name", null)) ? new TaskStatus
                            {
                                name = GetValue<string>(row, "status_name", ""),
                                color = GetValue<string>(row, "status_color", "#64748B")
                            } : null
                        };
                        level1Subtasks.Add(subtask);
                    }
                    
                    if (level1Subtasks.Any())
                    {
                        level1SubtasksDict[taskId] = level1Subtasks;
                        tasks[taskId].subtasks = level1Subtasks;
                    }
                }

                // Get Level 2 subtasks
                foreach (var kvp in level1SubtasksDict)
                {
                    foreach (var level1Subtask in kvp.Value)
                    {
                        var level2Rows = await connection.QueryAsync<dynamic>(PeriodicTasksQueries.GetPeriodicLevel2Subtasks, 
                            new { level1_subtask_id = level1Subtask.id });
                        var level2Subtasks = new List<PeriodicSubtask>();
                        
                        foreach (var row in level2Rows)
                        {
                            var subtask = new PeriodicSubtask
                            {
                                id = GetValue<int>(row, "id", 0),
                                title = GetValue<string>(row, "title", string.Empty),
                                description = GetValue<string>(row, "description", null),
                                startTime = GetValue<string>(row, "startTime", null),
                                endTime = GetValue<string>(row, "endTime", null),
                                createdAt = GetValue<DateTime>(row, "createdAt", DateTime.UtcNow),
                                updatedAt = GetValue<DateTime>(row, "updatedAt", DateTime.UtcNow),
                                estimatedHours = GetValue<decimal?>(row, "estimatedHours", null),
                                priority_order = GetValue<int?>(row, "priorityOrder", null),
                                important = GetValue<bool>(row, "important", false),
                                completed = GetValue<bool>(row, "completed", false),
                                level = 2,
                                isExpanded = false,
                                subtasks = new List<PeriodicSubtask>(),
                                parentId = level1Subtask.id.ToString(),
                                priority_level = !string.IsNullOrEmpty(GetValue<string>(row, "priority_name", null)) ? new TaskPriority
                                {
                                    name = GetValue<string>(row, "priority_name", ""),
                                    color = GetValue<string>(row, "priority_color", "#64748B")
                                } : null,
                                status = !string.IsNullOrEmpty(GetValue<string>(row, "status_name", null)) ? new TaskStatus
                                {
                                    name = GetValue<string>(row, "status_name", ""),
                                    color = GetValue<string>(row, "status_color", "#64748B")
                                } : null
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

        public async Task<PeriodicTask> AddPeriodicTask(AddPeriodicTaskRequest request, int userId)
        {
            int taskId = 0;
            using (var connection = _context.CreateConnection())
            {
                connection.Open();
                using (var transaction = connection.BeginTransaction())
                {
                    try
                    {
                        taskId = await connection.ExecuteScalarAsync<int>(PeriodicTasksQueries.AddPeriodicTask, new
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
                            recurrence_pattern = request.recurrence_pattern,
                            recurrence_interval = request.recurrence_interval,
                            recurrence_days = request.recurrence_days,
                            recurrence_month_day = request.recurrence_month_day,
                            recurrence_week_of_month = request.recurrence_week_of_month,
                            recurrence_day_of_week = request.recurrence_day_of_week,
                            recurrence_month = request.recurrence_month,
                            recurrence_end_type = request.recurrence_end_type,
                            recurrence_end_date = request.recurrence_end_date,
                            recurrence_occurrences = request.recurrence_occurrences,
                            created_by = userId,
                            modified_by = userId,
                            estimated_hours = request.estimated_hours,
                            priority_order = request.priority_order,
                            remarks = request.remarks,
                            important = request.important,
                            active = request.active
                        }, transaction);

                        // Insert URL mappings
                        if (request.url_ids != null && request.url_ids.Any())
                        {
                            foreach (var urlId in request.url_ids)
                            {
                                await connection.ExecuteAsync(PeriodicTasksQueries.InsertPeriodicTaskUrlMapping, new
                                {
                                    task_id = taskId,
                                    url_id = urlId,
                                    created_by = userId,
                                    modified_by = userId
                                }, transaction);
                            }
                        }

                        transaction.Commit();
                    }
                    catch
                    {
                        transaction.Rollback();
                        throw;
                    }
                }

                // Fetch the created task
                var tasks = await GetPeriodicTasks();
                return tasks.FirstOrDefault(t => t.id == taskId);
            }
        }

        public async Task<PeriodicTask> UpdatePeriodicTask(UpdatePeriodicTaskRequest request, int userId)
        {
            using (var connection = _context.CreateConnection())
            {
                connection.Open();
                using (var transaction = connection.BeginTransaction())
                {
                    try
                    {
                        await connection.ExecuteAsync(PeriodicTasksQueries.UpdatePeriodicTask, new
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
                            recurrence_pattern = request.recurrence_pattern,
                            recurrence_interval = request.recurrence_interval,
                            recurrence_days = request.recurrence_days,
                            recurrence_month_day = request.recurrence_month_day,
                            recurrence_week_of_month = request.recurrence_week_of_month,
                            recurrence_day_of_week = request.recurrence_day_of_week,
                            recurrence_month = request.recurrence_month,
                            recurrence_end_type = request.recurrence_end_type,
                            recurrence_end_date = request.recurrence_end_date,
                            recurrence_occurrences = request.recurrence_occurrences,
                            modified_by = userId,
                            estimated_hours = request.estimated_hours,
                            priority_order = request.priority_order,
                            remarks = request.remarks,
                            important = request.important,
                            active = request.active
                        }, transaction);

                        // Delete existing URL mappings
                        await connection.ExecuteAsync(PeriodicTasksQueries.DeletePeriodicTaskUrlMappings, new { task_id = request.id }, transaction);

                        // Insert new URL mappings
                        if (request.url_ids != null && request.url_ids.Any())
                        {
                            foreach (var urlId in request.url_ids)
                            {
                                await connection.ExecuteAsync(PeriodicTasksQueries.InsertPeriodicTaskUrlMapping, new
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
                        var tasks = await GetPeriodicTasks();
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

        public async Task<bool> DeletePeriodicTask(int id)
        {
            using (var connection = _context.CreateConnection())
            {
                var rowsAffected = await connection.ExecuteAsync(PeriodicTasksQueries.DeletePeriodicTask, new { id });
                return rowsAffected > 0;
            }
        }

        public async Task<PeriodicSubtask> AddLevel1Subtask(AddPeriodicLevel1SubtaskRequest request, int userId)
        {
            using (var connection = _context.CreateConnection())
            {
                var subtaskId = await connection.ExecuteScalarAsync<int>(PeriodicTasksQueries.AddPeriodicLevel1Subtask, new
                {
                    periodic_tasks_main_task_id = request.periodic_tasks_main_task_id,
                    title = request.title,
                    description = request.description,
                    priority_level_id = request.priority_level_id,
                    status_id = request.status_id,
                    start_time = request.start_time,
                    end_time = request.end_time,
                    created_by = userId,
                    modified_by = userId,
                    estimated_hours = request.estimated_hours,
                    priority_order = request.priority_order,
                    important = request.important,
                    completed = request.completed
                });

                // Return the created subtask
                var level1Rows = await connection.QueryAsync<dynamic>(PeriodicTasksQueries.GetPeriodicLevel1Subtasks, 
                    new { task_id = request.periodic_tasks_main_task_id });
                
                var row = level1Rows.FirstOrDefault(r => (int)r.id == subtaskId);
                if (row != null)
                {
                    return new PeriodicSubtask
                    {
                        id = GetValue<int>(row, "id", 0),
                        title = GetValue<string>(row, "title", string.Empty),
                        description = GetValue<string>(row, "description", null),
                        startTime = GetValue<string>(row, "startTime", null),
                        endTime = GetValue<string>(row, "endTime", null),
                        createdAt = GetValue<DateTime>(row, "createdAt", DateTime.UtcNow),
                        updatedAt = GetValue<DateTime>(row, "updatedAt", DateTime.UtcNow),
                        estimatedHours = GetValue<decimal?>(row, "estimatedHours", null),
                        priority_order = GetValue<int?>(row, "priorityOrder", null),
                        important = GetValue<bool>(row, "important", false),
                        completed = GetValue<bool>(row, "completed", false),
                        level = 1,
                        isExpanded = false,
                        subtasks = new List<PeriodicSubtask>(),
                        parentId = request.periodic_tasks_main_task_id.ToString(),
                        priority_level = !string.IsNullOrEmpty(GetValue<string>(row, "priority_name", null)) ? new TaskPriority
                        {
                            name = GetValue<string>(row, "priority_name", ""),
                            color = GetValue<string>(row, "priority_color", "#64748B")
                        } : null,
                        status = !string.IsNullOrEmpty(GetValue<string>(row, "status_name", null)) ? new TaskStatus
                        {
                            name = GetValue<string>(row, "status_name", ""),
                            color = GetValue<string>(row, "status_color", "#64748B")
                        } : null
                    };
                }
                return null;
            }
        }

        public async Task<PeriodicSubtask> UpdateLevel1Subtask(UpdatePeriodicLevel1SubtaskRequest request, int userId)
        {
            using (var connection = _context.CreateConnection())
            {
                await connection.ExecuteAsync(PeriodicTasksQueries.UpdatePeriodicLevel1Subtask, new
                {
                    id = request.id,
                    title = request.title,
                    description = request.description,
                    priority_level_id = request.priority_level_id,
                    status_id = request.status_id,
                    start_time = request.start_time,
                    end_time = request.end_time,
                    modified_by = userId,
                    estimated_hours = request.estimated_hours,
                    priority_order = request.priority_order,
                    important = request.important,
                    completed = request.completed
                });

                // Return the updated subtask
                var level1Rows = await connection.QueryAsync<dynamic>(PeriodicTasksQueries.GetPeriodicLevel1Subtasks, 
                    new { task_id = request.periodic_tasks_main_task_id });
                
                var row = level1Rows.FirstOrDefault(r => (int)r.id == request.id);
                if (row != null)
                {
                    return new PeriodicSubtask
                    {
                        id = GetValue<int>(row, "id", 0),
                        title = GetValue<string>(row, "title", string.Empty),
                        description = GetValue<string>(row, "description", null),
                        startTime = GetValue<string>(row, "startTime", null),
                        endTime = GetValue<string>(row, "endTime", null),
                        createdAt = GetValue<DateTime>(row, "createdAt", DateTime.UtcNow),
                        updatedAt = GetValue<DateTime>(row, "updatedAt", DateTime.UtcNow),
                        estimatedHours = GetValue<decimal?>(row, "estimatedHours", null),
                        priority_order = GetValue<int?>(row, "priorityOrder", null),
                        important = GetValue<bool>(row, "important", false),
                        completed = GetValue<bool>(row, "completed", false),
                        level = 1,
                        isExpanded = false,
                        subtasks = new List<PeriodicSubtask>(),
                        parentId = request.periodic_tasks_main_task_id.ToString(),
                        priority_level = !string.IsNullOrEmpty(GetValue<string>(row, "priority_name", null)) ? new TaskPriority
                        {
                            name = GetValue<string>(row, "priority_name", ""),
                            color = GetValue<string>(row, "priority_color", "#64748B")
                        } : null,
                        status = !string.IsNullOrEmpty(GetValue<string>(row, "status_name", null)) ? new TaskStatus
                        {
                            name = GetValue<string>(row, "status_name", ""),
                            color = GetValue<string>(row, "status_color", "#64748B")
                        } : null
                    };
                }
                return null;
            }
        }

        public async Task<bool> DeleteLevel1Subtask(int id)
        {
            using (var connection = _context.CreateConnection())
            {
                var rowsAffected = await connection.ExecuteAsync(PeriodicTasksQueries.DeletePeriodicLevel1Subtask, new { id });
                return rowsAffected > 0;
            }
        }

        public async Task<PeriodicSubtask> AddLevel2Subtask(AddPeriodicLevel2SubtaskRequest request, int userId)
        {
            using (var connection = _context.CreateConnection())
            {
                var subtaskId = await connection.ExecuteScalarAsync<int>(PeriodicTasksQueries.AddPeriodicLevel2Subtask, new
                {
                    periodic_tasks_level_1_sub_task_id = request.periodic_tasks_level_1_sub_task_id,
                    title = request.title,
                    description = request.description,
                    priority_level_id = request.priority_level_id,
                    status_id = request.status_id,
                    start_time = request.start_time,
                    end_time = request.end_time,
                    created_by = userId,
                    modified_by = userId,
                    estimated_hours = request.estimated_hours,
                    priority_order = request.priority_order,
                    important = request.important,
                    completed = request.completed
                });

                // Return the created subtask
                var level2Rows = await connection.QueryAsync<dynamic>(PeriodicTasksQueries.GetPeriodicLevel2Subtasks, 
                    new { level1_subtask_id = request.periodic_tasks_level_1_sub_task_id });
                
                var row = level2Rows.FirstOrDefault(r => (int)r.id == subtaskId);
                if (row != null)
                {
                    return new PeriodicSubtask
                    {
                        id = GetValue<int>(row, "id", 0),
                        title = GetValue<string>(row, "title", string.Empty),
                        description = GetValue<string>(row, "description", null),
                        startTime = GetValue<string>(row, "startTime", null),
                        endTime = GetValue<string>(row, "endTime", null),
                        createdAt = GetValue<DateTime>(row, "createdAt", DateTime.UtcNow),
                        updatedAt = GetValue<DateTime>(row, "updatedAt", DateTime.UtcNow),
                        estimatedHours = GetValue<decimal?>(row, "estimatedHours", null),
                        priority_order = GetValue<int?>(row, "priorityOrder", null),
                        important = GetValue<bool>(row, "important", false),
                        completed = GetValue<bool>(row, "completed", false),
                        level = 2,
                        isExpanded = false,
                        subtasks = new List<PeriodicSubtask>(),
                        parentId = request.periodic_tasks_level_1_sub_task_id.ToString(),
                        priority_level = !string.IsNullOrEmpty(GetValue<string>(row, "priority_name", null)) ? new TaskPriority
                        {
                            name = GetValue<string>(row, "priority_name", ""),
                            color = GetValue<string>(row, "priority_color", "#64748B")
                        } : null,
                        status = !string.IsNullOrEmpty(GetValue<string>(row, "status_name", null)) ? new TaskStatus
                        {
                            name = GetValue<string>(row, "status_name", ""),
                            color = GetValue<string>(row, "status_color", "#64748B")
                        } : null
                    };
                }
                return null;
            }
        }

        public async Task<PeriodicSubtask> UpdateLevel2Subtask(UpdatePeriodicLevel2SubtaskRequest request, int userId)
        {
            using (var connection = _context.CreateConnection())
            {
                await connection.ExecuteAsync(PeriodicTasksQueries.UpdatePeriodicLevel2Subtask, new
                {
                    id = request.id,
                    title = request.title,
                    description = request.description,
                    priority_level_id = request.priority_level_id,
                    status_id = request.status_id,
                    start_time = request.start_time,
                    end_time = request.end_time,
                    modified_by = userId,
                    estimated_hours = request.estimated_hours,
                    priority_order = request.priority_order,
                    important = request.important,
                    completed = request.completed
                });

                // Return the updated subtask
                var level2Rows = await connection.QueryAsync<dynamic>(PeriodicTasksQueries.GetPeriodicLevel2Subtasks, 
                    new { level1_subtask_id = request.periodic_tasks_level_1_sub_task_id });
                
                var row = level2Rows.FirstOrDefault(r => (int)r.id == request.id);
                if (row != null)
                {
                    return new PeriodicSubtask
                    {
                        id = GetValue<int>(row, "id", 0),
                        title = GetValue<string>(row, "title", string.Empty),
                        description = GetValue<string>(row, "description", null),
                        startTime = GetValue<string>(row, "startTime", null),
                        endTime = GetValue<string>(row, "endTime", null),
                        createdAt = GetValue<DateTime>(row, "createdAt", DateTime.UtcNow),
                        updatedAt = GetValue<DateTime>(row, "updatedAt", DateTime.UtcNow),
                        estimatedHours = GetValue<decimal?>(row, "estimatedHours", null),
                        priority_order = GetValue<int?>(row, "priorityOrder", null),
                        important = GetValue<bool>(row, "important", false),
                        completed = GetValue<bool>(row, "completed", false),
                        level = 2,
                        isExpanded = false,
                        subtasks = new List<PeriodicSubtask>(),
                        parentId = request.periodic_tasks_level_1_sub_task_id.ToString(),
                        priority_level = !string.IsNullOrEmpty(GetValue<string>(row, "priority_name", null)) ? new TaskPriority
                        {
                            name = GetValue<string>(row, "priority_name", ""),
                            color = GetValue<string>(row, "priority_color", "#64748B")
                        } : null,
                        status = !string.IsNullOrEmpty(GetValue<string>(row, "status_name", null)) ? new TaskStatus
                        {
                            name = GetValue<string>(row, "status_name", ""),
                            color = GetValue<string>(row, "status_color", "#64748B")
                        } : null
                    };
                }
                return null;
            }
        }

        public async Task<bool> DeleteLevel2Subtask(int id)
        {
            using (var connection = _context.CreateConnection())
            {
                var rowsAffected = await connection.ExecuteAsync(PeriodicTasksQueries.DeletePeriodicLevel2Subtask, new { id });
                return rowsAffected > 0;
            }
        }

        private List<PeriodicTask> GetDummyPeriodicTasks()
        {
            return new List<PeriodicTask>
            {
                new PeriodicTask
                {
                    id = 1001,
                    title = "Weekly team standup meeting",
                    description = "Recurring weekly team synchronization and status update meeting",
                    priority_level = new TaskPriority { name = "high", color = "#2563EB" },
                    status = new TaskStatus { name = "in-progress", color = "#2563EB" },
                    category = new TaskCategory { name = "Operations", icon = "⚡" },
                    startDate = new DateTime(2024, 1, 15),
                    endDate = new DateTime(2024, 12, 31),
                    startTime = "09:00",
                    endTime = "09:30",
                    createdAt = new DateTime(2024, 1, 1),
                    updatedAt = new DateTime(2024, 1, 15),
                    estimatedHours = 2,
                    priority_order = 1,
                    isExpanded = false,
                    remarks = "Recurring every Monday. Discuss project progress, blockers, and upcoming tasks.",
                    urls = new List<TaskUrl>
                    {
                        new TaskUrl { label = "Meeting Agenda", url = "https://docs.google.com/agenda" }
                    },
                    important = true,
                    completed = false,
                    subtasks = new List<PeriodicSubtask>
                    {
                        new PeriodicSubtask
                        {
                            id = 10011,
                            title = "Prepare weekly report",
                            description = "Gather status updates from team members",
                            status = new TaskStatus { name = "done", color = "#059669" },
                            priority_level = new TaskPriority { name = "medium", color = "#F97316" },
                            category = new TaskCategory { name = "Operations", icon = "⚡" },
                            startDate = new DateTime(2024, 1, 15),
                            endDate = new DateTime(2024, 1, 15),
                            startTime = "08:00",
                            endTime = "09:00",
                            createdAt = new DateTime(2024, 1, 1),
                            updatedAt = new DateTime(2024, 1, 15),
                            estimatedHours = 1,
                            priority_order = 1,
                            level = 1,
                            isExpanded = false,
                            completed = true,
                            subtasks = new List<PeriodicSubtask>()
                        },
                        new PeriodicSubtask
                        {
                            id = 10012,
                            title = "Review action items",
                            description = "Follow up on previous week's action items",
                            status = new TaskStatus { name = "in-progress", color = "#2563EB" },
                            priority_level = new TaskPriority { name = "high", color = "#DC2626" },
                            category = new TaskCategory { name = "Operations", icon = "⚡" },
                            startDate = new DateTime(2024, 1, 15),
                            endDate = new DateTime(2024, 1, 15),
                            startTime = "09:30",
                            endTime = "10:00",
                            createdAt = new DateTime(2024, 1, 1),
                            updatedAt = new DateTime(2024, 1, 15),
                            estimatedHours = 1,
                            priority_order = 2,
                            level = 1,
                            isExpanded = false,
                            completed = false,
                            subtasks = new List<PeriodicSubtask>()
                        }
                    }
                },
                new PeriodicTask
                {
                    id = 1008,
                    title = "Weekly team standup meeting",
                    description = "Recurring weekly team synchronization and status update meeting",
                    priority_level = new TaskPriority { name = "high", color = "#2563EB" },
                    status = new TaskStatus { name = "in-progress", color = "#2563EB" },
                    category = new TaskCategory { name = "Operations", icon = "⚡" },
                    startDate = new DateTime(2024, 1, 15),
                    endDate = new DateTime(2024, 12, 31),
                    startTime = "09:00",
                    endTime = "09:30",
                    createdAt = new DateTime(2024, 1, 1),
                    updatedAt = new DateTime(2024, 1, 15),
                    estimatedHours = 2,
                    priority_order = 1,
                    isExpanded = false,
                    remarks = "Recurring every Monday. Discuss project progress, blockers, and upcoming tasks.",
                    urls = new List<TaskUrl>
                    {
                        new TaskUrl { label = "Meeting Agenda", url = "https://docs.google.com/agenda" }
                    },
                    important = true,
                    completed = false,
                    subtasks = new List<PeriodicSubtask>
                    {
                        new PeriodicSubtask
                        {
                            id = 10011,
                            title = "Prepare weekly report",
                            description = "Gather status updates from team members",
                            status = new TaskStatus { name = "done", color = "#059669" },
                            priority_level = new TaskPriority { name = "medium", color = "#F97316" },
                            category = new TaskCategory { name = "Operations", icon = "⚡" },
                            startDate = new DateTime(2024, 1, 15),
                            endDate = new DateTime(2024, 1, 15),
                            startTime = "08:00",
                            endTime = "09:00",
                            createdAt = new DateTime(2024, 1, 1),
                            updatedAt = new DateTime(2024, 1, 15),
                            estimatedHours = 1,
                            priority_order = 1,
                            level = 1,
                            isExpanded = false,
                            completed = true,
                            subtasks = new List<PeriodicSubtask>()
                        },
                        new PeriodicSubtask
                        {
                            id = 10012,
                            title = "Review action items",
                            description = "Follow up on previous week's action items",
                            status = new TaskStatus { name = "in-progress", color = "#2563EB" },
                            priority_level = new TaskPriority { name = "high", color = "#DC2626" },
                            category = new TaskCategory { name = "Operations", icon = "⚡" },
                            startDate = new DateTime(2024, 1, 15),
                            endDate = new DateTime(2024, 1, 15),
                            startTime = "09:30",
                            endTime = "10:00",
                            createdAt = new DateTime(2024, 1, 1),
                            updatedAt = new DateTime(2024, 1, 15),
                            estimatedHours = 1,
                            priority_order = 2,
                            level = 1,
                            isExpanded = false,
                            completed = false,
                            subtasks = new List<PeriodicSubtask>()
                        }
                    }
                },
                new PeriodicTask
                {
                    id = 1002,
                    title = "Monthly budget review",
                    description = "Review and analyze monthly budget performance and allocations",
                    priority_level = new TaskPriority { name = "high", color = "#2563EB" },
                    status = new TaskStatus { name = "todo", color = "#64748B" },
                    category = new TaskCategory { name = "Operations", icon = "⚡" },
                    startDate = new DateTime(2024, 1, 1),
                    endDate = new DateTime(2024, 12, 31),
                    startTime = "14:00",
                    endTime = "15:30",
                    createdAt = new DateTime(2024, 1, 1),
                    updatedAt = new DateTime(2024, 1, 1),
                    estimatedHours = 3,
                    priority_order = 2,
                    isExpanded = false,
                    remarks = "Recurring on the first Monday of each month. Analyze expenses and plan for upcoming month.",
                    urls = new List<TaskUrl>
                    {
                        new TaskUrl { label = "Budget Dashboard", url = "https://budget.example.com" }
                    },
                    important = true,
                    completed = false,
                    subtasks = new List<PeriodicSubtask>
                    {
                        new PeriodicSubtask
                        {
                            id = 10021,
                            title = "Collect expense data",
                            description = "Gather all expense reports and receipts",
                            status = new TaskStatus { name = "todo", color = "#64748B" },
                            priority_level = new TaskPriority { name = "medium", color = "#F97316" },
                            category = new TaskCategory { name = "Operations", icon = "⚡" },
                            startDate = new DateTime(2024, 1, 1),
                            endDate = new DateTime(2024, 1, 1),
                            startTime = "14:00",
                            endTime = "14:30",
                            createdAt = new DateTime(2024, 1, 1),
                            updatedAt = new DateTime(2024, 1, 1),
                            estimatedHours = 1,
                            priority_order = 1,
                            level = 1,
                            isExpanded = false,
                            completed = false,
                            subtasks = new List<PeriodicSubtask>()
                        },
                        new PeriodicSubtask
                        {
                            id = 10022,
                            title = "Analyze spending patterns",
                            description = "Compare actual vs budgeted amounts",
                            status = new TaskStatus { name = "todo", color = "#64748B" },
                            priority_level = new TaskPriority { name = "high", color = "#DC2626" },
                            category = new TaskCategory { name = "Operations", icon = "⚡" },
                            startDate = new DateTime(2024, 1, 1),
                            endDate = new DateTime(2024, 1, 1),
                            startTime = "14:30",
                            endTime = "15:30",
                            createdAt = new DateTime(2024, 1, 1),
                            updatedAt = new DateTime(2024, 1, 1),
                            estimatedHours = 2,
                            priority_order = 2,
                            level = 1,
                            isExpanded = false,
                            completed = false,
                            subtasks = new List<PeriodicSubtask>()
                        }
                    }
                },
                new PeriodicTask
                {
                    id = 1003,
                    title = "Daily code review",
                    description = "Review pull requests and code changes submitted by team",
                    priority_level = new TaskPriority { name = "medium", color = "#F97316" },
                    status = new TaskStatus { name = "in-progress", color = "#2563EB" },
                    category = new TaskCategory { name = "Development", icon = "🚀" },
                    startDate = new DateTime(2024, 1, 1),
                    endDate = new DateTime(2024, 12, 31),
                    startTime = "11:00",
                    endTime = "12:00",
                    createdAt = new DateTime(2024, 1, 1),
                    updatedAt = new DateTime(2024, 1, 15),
                    estimatedHours = 2,
                    priority_order = 3,
                    isExpanded = false,
                    remarks = "Daily code review session to maintain code quality and standards.",
                    urls = new List<TaskUrl>
                    {
                        new TaskUrl { label = "GitHub PRs", url = "https://github.com/repo/pulls" }
                    },
                    important = false,
                    completed = false,
                    subtasks = new List<PeriodicSubtask>
                    {
                        new PeriodicSubtask
                        {
                            id = 10031,
                            title = "Review new pull requests",
                            description = "Check all new pull requests for code quality",
                            status = new TaskStatus { name = "done", color = "#059669" },
                            priority_level = new TaskPriority { name = "medium", color = "#F97316" },
                            category = new TaskCategory { name = "Development", icon = "🚀" },
                            startDate = new DateTime(2024, 1, 15),
                            endDate = new DateTime(2024, 1, 15),
                            startTime = "11:00",
                            endTime = "11:30",
                            createdAt = new DateTime(2024, 1, 1),
                            updatedAt = new DateTime(2024, 1, 15),
                            estimatedHours = 1,
                            priority_order = 1,
                            level = 1,
                            isExpanded = false,
                            completed = true,
                            subtasks = new List<PeriodicSubtask>()
                        },
                        new PeriodicSubtask
                        {
                            id = 10032,
                            title = "Provide feedback",
                            description = "Add comments and suggestions for improvements",
                            status = new TaskStatus { name = "in-progress", color = "#2563EB" },
                            priority_level = new TaskPriority { name = "medium", color = "#F97316" },
                            category = new TaskCategory { name = "Development", icon = "🚀" },
                            startDate = new DateTime(2024, 1, 15),
                            endDate = new DateTime(2024, 1, 15),
                            startTime = "11:30",
                            endTime = "12:00",
                            createdAt = new DateTime(2024, 1, 1),
                            updatedAt = new DateTime(2024, 1, 15),
                            estimatedHours = 1,
                            priority_order = 2,
                            level = 1,
                            isExpanded = false,
                            completed = false,
                            subtasks = new List<PeriodicSubtask>()
                        }
                    }
                },
                new PeriodicTask
                {
                    id = 1004,
                    title = "Quarterly performance review",
                    description = "Comprehensive quarterly performance evaluation and goal setting",
                    priority_level = new TaskPriority { name = "high", color = "#2563EB" },
                    status = new TaskStatus { name = "todo", color = "#64748B" },
                    category = new TaskCategory { name = "Operations", icon = "⚡" },
                    startDate = new DateTime(2024, 1, 1),
                    endDate = new DateTime(2024, 12, 31),
                    startTime = "10:00",
                    endTime = "16:00",
                    createdAt = new DateTime(2024, 1, 1),
                    updatedAt = new DateTime(2024, 1, 1),
                    estimatedHours = 8,
                    priority_order = 4,
                    isExpanded = false,
                    remarks = "Recurring quarterly. Review team performance, set new goals, and provide feedback.",
                    urls = new List<TaskUrl>
                    {
                        new TaskUrl { label = "Performance Metrics", url = "https://metrics.example.com" }
                    },
                    important = true,
                    completed = false,
                    subtasks = new List<PeriodicSubtask>
                    {
                        new PeriodicSubtask
                        {
                            id = 10041,
                            title = "Collect performance data",
                            description = "Gather metrics and achievements from the quarter",
                            status = new TaskStatus { name = "todo", color = "#64748B" },
                            priority_level = new TaskPriority { name = "high", color = "#DC2626" },
                            category = new TaskCategory { name = "Operations", icon = "⚡" },
                            startDate = new DateTime(2024, 1, 1),
                            endDate = new DateTime(2024, 1, 1),
                            startTime = "10:00",
                            endTime = "12:00",
                            createdAt = new DateTime(2024, 1, 1),
                            updatedAt = new DateTime(2024, 1, 1),
                            estimatedHours = 2,
                            priority_order = 1,
                            level = 1,
                            isExpanded = false,
                            completed = false,
                            subtasks = new List<PeriodicSubtask>()
                        },
                        new PeriodicSubtask
                        {
                            id = 10042,
                            title = "Schedule review meetings",
                            description = "Coordinate schedules with team members",
                            status = new TaskStatus { name = "todo", color = "#64748B" },
                            priority_level = new TaskPriority { name = "medium", color = "#F97316" },
                            category = new TaskCategory { name = "Operations", icon = "⚡" },
                            startDate = new DateTime(2024, 1, 1),
                            endDate = new DateTime(2024, 1, 1),
                            startTime = "12:00",
                            endTime = "13:00",
                            createdAt = new DateTime(2024, 1, 1),
                            updatedAt = new DateTime(2024, 1, 1),
                            estimatedHours = 1,
                            priority_order = 2,
                            level = 1,
                            isExpanded = false,
                            completed = false,
                            subtasks = new List<PeriodicSubtask>()
                        },
                        new PeriodicSubtask
                        {
                            id = 10043,
                            title = "Conduct review sessions",
                            description = "Meet with each team member individually",
                            status = new TaskStatus { name = "todo", color = "#64748B" },
                            priority_level = new TaskPriority { name = "high", color = "#DC2626" },
                            category = new TaskCategory { name = "Operations", icon = "⚡" },
                            startDate = new DateTime(2024, 1, 1),
                            endDate = new DateTime(2024, 1, 1),
                            startTime = "13:00",
                            endTime = "16:00",
                            createdAt = new DateTime(2024, 1, 1),
                            updatedAt = new DateTime(2024, 1, 1),
                            estimatedHours = 5,
                            priority_order = 3,
                            level = 1,
                            isExpanded = false,
                            completed = false,
                            subtasks = new List<PeriodicSubtask>()
                        }
                    }
                },
                new PeriodicTask
                {
                    id = 1005,
                    title = "Backup database",
                    description = "Scheduled database backup to ensure data safety",
                    priority_level = new TaskPriority { name = "urgent", color = "#DC2626" },
                    status = new TaskStatus { name = "in-progress", color = "#2563EB" },
                    category = new TaskCategory { name = "Operations", icon = "⚡" },
                    startDate = null,
                    endDate = new DateTime(2024, 12, 31),
                    startTime = "02:00",
                    endTime = "03:00",
                    createdAt = new DateTime(2024, 1, 1),
                    updatedAt = new DateTime(2024, 1, 15),
                    estimatedHours = 2,
                    priority_order = 5,
                    isExpanded = false,
                    remarks = "Automated daily backup tasked daily backup tasked daily backup tasked daily backup tasked daily backup tasked daily backup task. Verify backup completion and integrity.",
                    urls = new List<TaskUrl>
                    {
                        new TaskUrl { label = "Backup Console", url = "https://backup.example.com" }
                    },
                    important = true,
                    completed = false,
                    subtasks = new List<PeriodicSubtask>
                    {
                        new PeriodicSubtask
                        {
                            id = 10051,
                            title = "Verify backup completion",
                            description = "Check backup logs and confirm successful backup",
                            status = new TaskStatus { name = "done", color = "#059669" },
                            priority_level = new TaskPriority { name = "high", color = "#DC2626" },
                            category = new TaskCategory { name = "Operations", icon = "⚡" },
                            startDate = new DateTime(2024, 1, 15),
                            endDate = new DateTime(2024, 1, 15),
                            startTime = "02:00",
                            endTime = "02:30",
                            createdAt = new DateTime(2024, 1, 1),
                            updatedAt = new DateTime(2024, 1, 15),
                            estimatedHours = 1,
                            priority_order = 1,
                            level = 1,
                            isExpanded = false,
                            completed = true,
                            subtasks = new List<PeriodicSubtask>()
                        },
                        new PeriodicSubtask
                        {
                            id = 10052,
                            title = "Test backup restoration",
                            description = "Periodically test backup restoration process",
                            status = new TaskStatus { name = "todo", color = "#64748B" },
                            priority_level = new TaskPriority { name = "medium", color = "#F97316" },
                            category = new TaskCategory { name = "Operations", icon = "⚡" },
                            startDate = new DateTime(2024, 1, 1),
                            endDate = new DateTime(2024, 1, 31),
                            startTime = "02:30",
                            endTime = "03:00",
                            createdAt = new DateTime(2024, 1, 1),
                            updatedAt = new DateTime(2024, 1, 1),
                            estimatedHours = 1,
                            priority_order = 2,
                            level = 1,
                            isExpanded = false,
                            completed = false,
                            subtasks = new List<PeriodicSubtask>()
                        }
                    }
                }
            };
        }
    }
}

