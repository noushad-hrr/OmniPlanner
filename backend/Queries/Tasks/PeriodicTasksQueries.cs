namespace OmniPlanner_API.Queries.Tasks
{
    public class PeriodicTasksQueries
    {
        // Get all periodic tasks with subtasks
        public const string GetAllPeriodicTasks = @"
            SELECT 
                t.id,
                t.title,
                t.description,
                t.start_date AS startDate,
                t.end_date AS endDate,
                t.start_time AS startTime,
                t.end_time AS endTime,
                t.recurrence_pattern,
                t.recurrence_interval,
                t.recurrence_days,
                t.recurrence_month_day,
                t.recurrence_week_of_month,
                t.recurrence_day_of_week,
                t.recurrence_month,
                t.recurrence_end_type,
                t.recurrence_end_date,
                t.recurrence_occurrences,
                t.created_on AS createdAt,
                t.modified_on AS updatedAt,
                t.estimated_hours AS estimatedHours,
                t.priority_order AS priorityOrder,
                t.remarks,
                t.important,
                t.active,
                -- Priority
                t.priority_level_id,
                pm.priority AS priority_name,
                pm.color AS priority_color,
                -- Status
                t.status_id,
                sm.status AS status_name,
                sm.color AS status_color,
                -- Category
                t.category_id,
                cm.category AS category_name,
                cm.icon AS category_icon
            FROM periodic_tasks_main_task t
            LEFT JOIN priority_master pm ON t.priority_level_id = pm.id AND pm.is_deleted = false
            LEFT JOIN status_master sm ON t.status_id = sm.id AND sm.is_deleted = false
            LEFT JOIN category_master cm ON t.category_id = cm.id AND cm.is_deleted = false
            WHERE t.active = true
            ORDER BY t.start_date NULLS LAST, t.priority_order NULLS LAST, t.start_time NULLS LAST, t.id";

        // Get a single periodic task by ID
        public const string GetPeriodicTaskById = @"
            SELECT 
                t.id,
                t.title,
                t.description,
                t.start_date AS startDate,
                t.end_date AS endDate,
                t.start_time AS startTime,
                t.end_time AS endTime,
                t.recurrence_pattern,
                t.recurrence_interval,
                t.recurrence_days,
                t.recurrence_month_day,
                t.recurrence_week_of_month,
                t.recurrence_day_of_week,
                t.recurrence_month,
                t.recurrence_end_type,
                t.recurrence_end_date,
                t.recurrence_occurrences,
                t.created_on AS createdAt,
                t.modified_on AS updatedAt,
                t.estimated_hours AS estimatedHours,
                t.priority_order AS priorityOrder,
                t.remarks,
                t.important,
                t.active,
                -- Priority
                t.priority_level_id,
                pm.priority AS priority_name,
                pm.color AS priority_color,
                -- Status
                t.status_id,
                sm.status AS status_name,
                sm.color AS status_color,
                -- Category
                t.category_id,
                cm.category AS category_name,
                cm.icon AS category_icon
            FROM periodic_tasks_main_task t
            LEFT JOIN priority_master pm ON t.priority_level_id = pm.id AND pm.is_deleted = false
            LEFT JOIN status_master sm ON t.status_id = sm.id AND sm.is_deleted = false
            LEFT JOIN category_master cm ON t.category_id = cm.id AND cm.is_deleted = false
            WHERE t.id = @task_id";

        // Get URLs for a periodic task
        public const string GetPeriodicTaskUrls = @"
            SELECT 
                u.id,
                u.label,
                u.url
            FROM periodic_tasks_url_task_mapping tm
            INNER JOIN urls_master u ON tm.url_id = u.id AND u.is_deleted = false
            WHERE tm.task_id = @task_id
            ORDER BY u.label";

        // Get Level 1 subtasks for a periodic task
        public const string GetPeriodicLevel1Subtasks = @"
            SELECT 
                l1.id,
                l1.title,
                l1.description,
                l1.start_time AS startTime,
                l1.end_time AS endTime,
                l1.created_on AS createdAt,
                l1.modified_on AS updatedAt,
                l1.estimated_hours AS estimatedHours,
                l1.priority_order AS priorityOrder,
                l1.important,
                l1.completed,
                l1.priority_level_id,
                pm.priority AS priority_name,
                pm.color AS priority_color,
                l1.status_id,
                sm.status AS status_name,
                sm.color AS status_color
            FROM periodic_tasks_level_1_sub_task l1
            LEFT JOIN priority_master pm ON l1.priority_level_id = pm.id AND pm.is_deleted = false
            LEFT JOIN status_master sm ON l1.status_id = sm.id AND sm.is_deleted = false
            WHERE l1.periodic_tasks_main_task_id = @task_id
            ORDER BY l1.priority_order NULLS LAST, l1.id";

        // Get Level 2 subtasks for a Level 1 subtask
        public const string GetPeriodicLevel2Subtasks = @"
            SELECT 
                l2.id,
                l2.title,
                l2.description,
                l2.start_time AS startTime,
                l2.end_time AS endTime,
                l2.created_on AS createdAt,
                l2.modified_on AS updatedAt,
                l2.estimated_hours AS estimatedHours,
                l2.priority_order AS priorityOrder,
                l2.important,
                l2.completed,
                l2.priority_level_id,
                pm.priority AS priority_name,
                pm.color AS priority_color,
                l2.status_id,
                sm.status AS status_name,
                sm.color AS status_color
            FROM periodic_tasks_level_2_sub_task l2
            LEFT JOIN priority_master pm ON l2.priority_level_id = pm.id AND pm.is_deleted = false
            LEFT JOIN status_master sm ON l2.status_id = sm.id AND sm.is_deleted = false
            WHERE l2.periodic_tasks_level_1_sub_task_id = @level1_subtask_id
            ORDER BY l2.priority_order NULLS LAST, l2.id";

        // Insert Periodic Task
        public const string AddPeriodicTask = @"
            INSERT INTO periodic_tasks_main_task (
                title, description, priority_level_id, status_id, category_id,
                start_date, end_date, start_time, end_time,
                recurrence_pattern, recurrence_interval, recurrence_days,
                recurrence_month_day, recurrence_week_of_month, recurrence_day_of_week,
                recurrence_month, recurrence_end_type, recurrence_end_date, recurrence_occurrences,
                created_on, created_by, modified_on, modified_by,
                estimated_hours, priority_order, remarks, important, active
            )
            VALUES (
                @title, @description, @priority_level_id, @status_id, @category_id,
                @start_date, @end_date, @start_time, @end_time,
                @recurrence_pattern, @recurrence_interval, @recurrence_days,
                @recurrence_month_day, @recurrence_week_of_month, @recurrence_day_of_week,
                @recurrence_month, @recurrence_end_type, @recurrence_end_date, @recurrence_occurrences,
                NOW(), @created_by, NOW(), @modified_by,
                @estimated_hours, @priority_order, @remarks, @important, @active
            )
            RETURNING id";

        // Update Periodic Task
        public const string UpdatePeriodicTask = @"
            UPDATE periodic_tasks_main_task SET
                title = @title,
                description = @description,
                priority_level_id = @priority_level_id,
                status_id = @status_id,
                category_id = @category_id,
                start_date = @start_date,
                end_date = @end_date,
                start_time = @start_time,
                end_time = @end_time,
                recurrence_pattern = @recurrence_pattern,
                recurrence_interval = @recurrence_interval,
                recurrence_days = @recurrence_days,
                recurrence_month_day = @recurrence_month_day,
                recurrence_week_of_month = @recurrence_week_of_month,
                recurrence_day_of_week = @recurrence_day_of_week,
                recurrence_month = @recurrence_month,
                recurrence_end_type = @recurrence_end_type,
                recurrence_end_date = @recurrence_end_date,
                recurrence_occurrences = @recurrence_occurrences,
                modified_on = NOW(),
                modified_by = @modified_by,
                estimated_hours = @estimated_hours,
                priority_order = @priority_order,
                remarks = @remarks,
                important = @important,
                active = @active
            WHERE id = @id";

        // Delete Periodic Task (soft delete by setting active = false)
        public const string DeletePeriodicTask = @"
            UPDATE periodic_tasks_main_task SET
                active = false,
                modified_on = NOW()
            WHERE id = @id";

        // Insert Level 1 Subtask
        public const string AddPeriodicLevel1Subtask = @"
            INSERT INTO periodic_tasks_level_1_sub_task (
                title, description, priority_level_id, status_id,
                start_time, end_time, created_on, created_by,
                modified_on, modified_by, estimated_hours, priority_order,
                important, completed, periodic_tasks_main_task_id
            )
            VALUES (
                @title, @description, @priority_level_id, @status_id,
                @start_time, @end_time, NOW(), @created_by,
                NOW(), @modified_by, @estimated_hours, @priority_order,
                @important, @completed, @periodic_tasks_main_task_id
            )
            RETURNING id";

        // Update Level 1 Subtask
        public const string UpdatePeriodicLevel1Subtask = @"
            UPDATE periodic_tasks_level_1_sub_task SET
                title = @title,
                description = @description,
                priority_level_id = @priority_level_id,
                status_id = @status_id,
                start_time = @start_time,
                end_time = @end_time,
                modified_on = NOW(),
                modified_by = @modified_by,
                estimated_hours = @estimated_hours,
                priority_order = @priority_order,
                important = @important,
                completed = @completed
            WHERE id = @id";

        // Delete Level 1 Subtask
        public const string DeletePeriodicLevel1Subtask = @"
            DELETE FROM periodic_tasks_level_1_sub_task WHERE id = @id";

        // Insert Level 2 Subtask
        public const string AddPeriodicLevel2Subtask = @"
            INSERT INTO periodic_tasks_level_2_sub_task (
                title, description, priority_level_id, status_id,
                start_time, end_time, created_on, created_by,
                modified_on, modified_by, estimated_hours, priority_order,
                important, completed, periodic_tasks_level_1_sub_task_id
            )
            VALUES (
                @title, @description, @priority_level_id, @status_id,
                @start_time, @end_time, NOW(), @created_by,
                NOW(), @modified_by, @estimated_hours, @priority_order,
                @important, @completed, @periodic_tasks_level_1_sub_task_id
            )
            RETURNING id";

        // Update Level 2 Subtask
        public const string UpdatePeriodicLevel2Subtask = @"
            UPDATE periodic_tasks_level_2_sub_task SET
                title = @title,
                description = @description,
                priority_level_id = @priority_level_id,
                status_id = @status_id,
                start_time = @start_time,
                end_time = @end_time,
                modified_on = NOW(),
                modified_by = @modified_by,
                estimated_hours = @estimated_hours,
                priority_order = @priority_order,
                important = @important,
                completed = @completed
            WHERE id = @id";

        // Delete Level 2 Subtask
        public const string DeletePeriodicLevel2Subtask = @"
            DELETE FROM periodic_tasks_level_2_sub_task WHERE id = @id";

        // URL Mapping Queries
        public const string DeletePeriodicTaskUrlMappings = @"
            DELETE FROM periodic_tasks_url_task_mapping WHERE task_id = @task_id";

        public const string InsertPeriodicTaskUrlMapping = @"
            INSERT INTO periodic_tasks_url_task_mapping (task_id, url_id, created_by, modified_by)
            VALUES (@task_id, @url_id, @created_by, @modified_by)
            ON CONFLICT (task_id, url_id) DO NOTHING";
    }
}
