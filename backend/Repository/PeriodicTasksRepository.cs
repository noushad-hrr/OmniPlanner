using Dapper;
using OmniPlanner_API.Models.Tasks;
using OmniPlanner_API.IRepository;
using OmniPlanner_API.Queries;
using TaskStatus = OmniPlanner_API.Models.Tasks.TaskStatus;
using TaskPriority = OmniPlanner_API.Models.Tasks.TaskPriority;
using TaskCategory = OmniPlanner_API.Models.Tasks.TaskCategory;
using TaskUrl = OmniPlanner_API.Models.Tasks.TaskUrl;
using PeriodicTask = OmniPlanner_API.Models.Tasks.PeriodicTask;
using PeriodicSubtask = OmniPlanner_API.Models.Tasks.PeriodicSubtask;

namespace OmniPlanner_API.Repository
{
    public class PeriodicTasksRepository : IPeriodicTasksRepository
    {
        private readonly DapperContext _context;

        public PeriodicTasksRepository(DapperContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<PeriodicTask>> GetPeriodicTasks()
        {
            // TODO: Replace with actual database query
            // For now, return dummy data for periodic tasks
            // This is a separate isolated repository for periodic tasks
            
            return GetDummyPeriodicTasks();
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

