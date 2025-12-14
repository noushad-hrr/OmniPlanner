namespace OmniPlanner_API.Queries.Tasks2
{
    public class Tasks2Queries
    {
        // Get all tasks2 with all subtasks and URLs, joining with master tables
        public const string GetAllTasks2 = @"
            WITH level1_subtasks AS (
                SELECT 
                    l1.id,
                    l1.title,
                    l1.description,
                    l1.tasks2_main_task_id,
                    l1.start_time,
                    l1.end_time,
                    l1.created_on,
                    l1.created_by,
                    l1.modified_on,
                    l1.modified_by,
                    l1.estimated_hours,
                    l1.priority_order,
                    l1.important,
                    l1.completed,
                    l1.priority_level_id,
                    l1.status_id,
                    pm1.priority AS priority_name,
                    pm1.color AS priority_color,
                    sm1.status AS status_name,
                    sm1.color AS status_color
                FROM tasks2_level_1_sub_task l1
                LEFT JOIN priority_master pm1 ON l1.priority_level_id = pm1.id AND pm1.is_deleted = false
                LEFT JOIN status_master sm1 ON l1.status_id = sm1.id AND sm1.is_deleted = false
            ),
            level2_subtasks AS (
                SELECT 
                    l2.id,
                    l2.title,
                    l2.description,
                    l2.tasks2_level_1_sub_task_id,
                    l2.start_time,
                    l2.end_time,
                    l2.created_on,
                    l2.created_by,
                    l2.modified_on,
                    l2.modified_by,
                    l2.estimated_hours,
                    l2.priority_order,
                    l2.important,
                    l2.completed,
                    l2.priority_level_id,
                    l2.status_id,
                    pm2.priority AS priority_name,
                    pm2.color AS priority_color,
                    sm2.status AS status_name,
                    sm2.color AS status_color
                FROM tasks2_level_2_sub_task l2
                LEFT JOIN priority_master pm2 ON l2.priority_level_id = pm2.id AND pm2.is_deleted = false
                LEFT JOIN status_master sm2 ON l2.status_id = sm2.id AND sm2.is_deleted = false
            )
            SELECT 
                t.id,
                t.title,
                t.description,
                t.start_date AS startDate,
                t.end_date AS endDate,
                t.start_time AS startTime,
                t.end_time AS endTime,
                t.created_on AS createdAt,
                t.created_by,
                t.modified_on AS updatedAt,
                t.modified_by,
                t.estimated_hours AS estimatedHours,
                t.priority_order AS priorityOrder,
                t.remarks,
                t.important,
                t.completed,
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
                cm.icon AS category_icon,
                t.selected_days
            FROM tasks2_main_task t
            LEFT JOIN priority_master pm ON t.priority_level_id = pm.id AND pm.is_deleted = false
            LEFT JOIN status_master sm ON t.status_id = sm.id AND sm.is_deleted = false
            LEFT JOIN category_master cm ON t.category_id = cm.id AND cm.is_deleted = false
            ORDER BY t.start_date NULLS LAST, t.priority_order NULLS LAST, t.start_time NULLS LAST, t.id";

        // Get a single task2 by ID (for returning after insert/update)
        public const string GetTask2ById = @"
            SELECT 
                t.id,
                t.title,
                t.description,
                t.start_date AS startDate,
                t.end_date AS endDate,
                t.start_time AS startTime,
                t.end_time AS endTime,
                t.created_on AS createdAt,
                t.created_by,
                t.modified_on AS updatedAt,
                t.modified_by,
                t.estimated_hours AS estimatedHours,
                t.priority_order AS priorityOrder,
                t.remarks,
                t.important,
                t.completed,
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
                cm.icon AS category_icon,
                t.selected_days
            FROM tasks2_main_task t
            LEFT JOIN priority_master pm ON t.priority_level_id = pm.id AND pm.is_deleted = false
            LEFT JOIN status_master sm ON t.status_id = sm.id AND sm.is_deleted = false
            LEFT JOIN category_master cm ON t.category_id = cm.id AND cm.is_deleted = false
            WHERE t.id = @task_id";

        // Get URLs for a task2
        public const string GetTask2Urls = @"
            SELECT 
                u.id,
                u.label,
                u.url
            FROM tasks2_url_task_mapping tm
            INNER JOIN urls_master u ON tm.url_id = u.id AND u.is_deleted = false
            WHERE tm.tasks2_main_task_id = @task_id
            ORDER BY u.label";

        // Get Level 1 subtasks for a task2
        public const string GetLevel1Subtasks2 = @"
            SELECT 
                l1.id,
                l1.title,
                l1.description,
                l1.start_date AS startDate,
                l1.end_date AS endDate,
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
                sm.color AS status_color,
                l1.selected_days
            FROM tasks2_level_1_sub_task l1
            LEFT JOIN priority_master pm ON l1.priority_level_id = pm.id AND pm.is_deleted = false
            LEFT JOIN status_master sm ON l1.status_id = sm.id AND sm.is_deleted = false
            WHERE l1.tasks2_main_task_id = @task_id
            ORDER BY l1.priority_order NULLS LAST, l1.id";

        // Get Level 2 subtasks for a Level 1 subtask in tasks2
        public const string GetLevel2Subtasks2 = @"
            SELECT 
                l2.id,
                l2.title,
                l2.description,
                l2.start_date AS startDate,
                l2.end_date AS endDate,
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
                sm.color AS status_color,
                l2.selected_days
            FROM tasks2_level_2_sub_task l2
            LEFT JOIN priority_master pm ON l2.priority_level_id = pm.id AND pm.is_deleted = false
            LEFT JOIN status_master sm ON l2.status_id = sm.id AND sm.is_deleted = false
            WHERE l2.tasks2_level_1_sub_task_id = @level1_subtask_id
            ORDER BY l2.priority_order NULLS LAST, l2.id";

        // Insert Main Task2
        public const string AddMainTask2 = @"
            INSERT INTO tasks2_main_task (
                title, description, priority_level_id, status_id, category_id,
                start_date, end_date, start_time, end_time, created_on, created_by,
                modified_on, modified_by, estimated_hours, priority_order,
                remarks, important, completed, selected_days
            )
            VALUES (
                @title, @description, @priority_level_id, @status_id, @category_id,
                @start_date, @end_date, @start_time, @end_time, NOW(), @created_by,
                NOW(), @modified_by, @estimated_hours, @priority_order,
                @remarks, @important, @completed, @selected_days
            )
            RETURNING id";

        // Update Main Task2
        public const string UpdateMainTask2 = @"
            UPDATE tasks2_main_task SET
                title = @title,
                description = @description,
                priority_level_id = @priority_level_id,
                status_id = @status_id,
                category_id = @category_id,
                start_date = @start_date,
                end_date = @end_date,
                start_time = @start_time,
                end_time = @end_time,
                modified_on = NOW(),
                modified_by = @modified_by,
                estimated_hours = @estimated_hours,
                priority_order = @priority_order,
                remarks = @remarks,
                important = @important,
                completed = @completed,
                selected_days = @selected_days
            WHERE id = @id";

        // Update Task2 Important Status (lightweight update)
        public const string UpdateTask2Important = @"
            UPDATE tasks2_main_task SET
                important = @important,
                modified_on = NOW(),
                modified_by = @modified_by
            WHERE id = @id";

        // Update Task2 Completed Status (lightweight update)
        public const string UpdateTask2Completed = @"
            UPDATE tasks2_main_task SET
                completed = @completed,
                status_id = COALESCE(@status_id, status_id),
                modified_on = NOW(),
                modified_by = @modified_by
            WHERE id = @id";

        // Update Level 1 Subtask2 Completed Status (lightweight update)
        public const string UpdateLevel1Subtask2Completed = @"
            UPDATE tasks2_level_1_sub_task SET
                completed = @completed,
                status_id = COALESCE(@status_id, status_id),
                modified_on = NOW(),
                modified_by = @modified_by
            WHERE id = @id";

        // Update Level 2 Subtask2 Completed Status (lightweight update)
        public const string UpdateLevel2Subtask2Completed = @"
            UPDATE tasks2_level_2_sub_task SET
                completed = @completed,
                status_id = COALESCE(@status_id, status_id),
                modified_on = NOW(),
                modified_by = @modified_by
            WHERE id = @id";

        // Delete Main Task2 (cascade will handle subtasks and URL mappings)
        public const string DeleteMainTask2 = @"
            DELETE FROM tasks2_main_task WHERE id = @id";

        // Insert Level 1 Subtask2
        public const string AddLevel1Subtask2 = @"
            INSERT INTO tasks2_level_1_sub_task (
                title, description, priority_level_id, status_id,
                start_date, end_date, start_time, end_time, created_on, created_by,
                modified_on, modified_by, estimated_hours, priority_order,
                important, completed, tasks2_main_task_id, selected_days
            )
            VALUES (
                @title, @description, @priority_level_id, @status_id,
                @start_date, @end_date, @start_time, @end_time, NOW(), @created_by,
                NOW(), @modified_by, @estimated_hours, @priority_order,
                @important, @completed, @tasks2_main_task_id, @selected_days
            )
            RETURNING id";

        // Update Level 1 Subtask2
        public const string UpdateLevel1Subtask2 = @"
            UPDATE tasks2_level_1_sub_task SET
                title = @title,
                description = @description,
                priority_level_id = @priority_level_id,
                status_id = @status_id,
                start_date = @start_date,
                end_date = @end_date,
                start_time = @start_time,
                end_time = @end_time,
                modified_on = NOW(),
                modified_by = @modified_by,
                estimated_hours = @estimated_hours,
                priority_order = @priority_order,
                important = @important,
                completed = @completed,
                selected_days = @selected_days
            WHERE id = @id";

        // Delete Level 1 Subtask2 (cascade will handle level 2 subtasks)
        public const string DeleteLevel1Subtask2 = @"
            DELETE FROM tasks2_level_1_sub_task WHERE id = @id";

        // Insert Level 2 Subtask2
        public const string AddLevel2Subtask2 = @"
            INSERT INTO tasks2_level_2_sub_task (
                title, description, priority_level_id, status_id,
                start_date, end_date, start_time, end_time, created_on, created_by,
                modified_on, modified_by, estimated_hours, priority_order,
                important, completed, tasks2_level_1_sub_task_id, selected_days
            )
            VALUES (
                @title, @description, @priority_level_id, @status_id,
                @start_date, @end_date, @start_time, @end_time, NOW(), @created_by,
                NOW(), @modified_by, @estimated_hours, @priority_order,
                @important, @completed, @tasks2_level_1_sub_task_id, @selected_days
            )
            RETURNING id";

        // Update Level 2 Subtask2
        public const string UpdateLevel2Subtask2 = @"
            UPDATE tasks2_level_2_sub_task SET
                title = @title,
                description = @description,
                priority_level_id = @priority_level_id,
                status_id = @status_id,
                start_date = @start_date,
                end_date = @end_date,
                start_time = @start_time,
                end_time = @end_time,
                modified_on = NOW(),
                modified_by = @modified_by,
                estimated_hours = @estimated_hours,
                priority_order = @priority_order,
                important = @important,
                completed = @completed,
                selected_days = @selected_days
            WHERE id = @id";

        // Delete Level 2 Subtask2
        public const string DeleteLevel2Subtask2 = @"
            DELETE FROM tasks2_level_2_sub_task WHERE id = @id";

        // URL Mapping Queries
        public const string DeleteTask2UrlMappings = @"
            DELETE FROM tasks2_url_task_mapping WHERE tasks2_main_task_id = @task_id";

        public const string InsertTask2UrlMapping = @"
            INSERT INTO tasks2_url_task_mapping (tasks2_main_task_id, url_id, created_by, modified_by)
            VALUES (@task_id, @url_id, @created_by, @modified_by)
            ON CONFLICT (tasks2_main_task_id, url_id) DO NOTHING";

        public const string DeleteTasks2ReferencesInTasks = @"DELETE FROM public.tasks_main_task where periodic_tasks_main_task_id = @task_id AND periodic_tasks_level_1_sub_task_id IS NULL AND periodic_tasks_level_2_sub_task_id IS NULL";
        public const string DeleteTasks2ReferencesInTasksLevel1 = @"DELETE FROM public.tasks_main_task where periodic_tasks_level_1_sub_task_id = @task_id AND periodic_tasks_level_2_sub_task_id IS NULL";
        public const string DeleteTasks2ReferencesInTasksLevel2 = @"DELETE FROM public.tasks_main_task where periodic_tasks_level_2_sub_task_id = @task_id";

        // Aliases without "2" suffix for repository compatibility
        public const string GetAllTasks = GetAllTasks2;
        public const string GetTaskById = GetTask2ById;
        public const string GetTaskUrls = GetTask2Urls;
        public const string GetLevel1Subtasks = GetLevel1Subtasks2;
        public const string GetLevel2Subtasks = GetLevel2Subtasks2;
        public const string AddMainTask = AddMainTask2;
        public const string UpdateMainTask = UpdateMainTask2;
        public const string UpdateTaskImportant = UpdateTask2Important;
        public const string UpdateTaskCompleted = UpdateTask2Completed;
        public const string UpdateLevel1SubtaskCompleted = UpdateLevel1Subtask2Completed;
        public const string UpdateLevel2SubtaskCompleted = UpdateLevel2Subtask2Completed;
        public const string DeleteMainTask = DeleteMainTask2;
        public const string AddLevel1Subtask = AddLevel1Subtask2;
        public const string UpdateLevel1Subtask = UpdateLevel1Subtask2;
        public const string DeleteLevel1Subtask = DeleteLevel1Subtask2;
        public const string AddLevel2Subtask = AddLevel2Subtask2;
        public const string UpdateLevel2Subtask = UpdateLevel2Subtask2;
        public const string DeleteLevel2Subtask = DeleteLevel2Subtask2;
        public const string DeleteTaskUrlMappings = DeleteTask2UrlMappings;
        public const string InsertTaskUrlMapping = InsertTask2UrlMapping;
        public const string DeleteTasksReferencesInTasks = DeleteTasks2ReferencesInTasks;

        //// Periodic Task Queries
        //public const string InsertPeriodicMainTask = @"
        //    INSERT INTO periodic_tasks_main_task (
        //        title, description, start_date, end_date, created_by, created_on,
        //        last_modified_by, last_modified_on, is_active, is_deleted
        //    )
        //    VALUES (
        //        @title, @description, @start_date, @end_date, @created_by, NOW(),
        //        @modified_by, NOW(), true, false
        //    )
        //    RETURNING id";

        //public const string InsertMainTaskWithPeriodicParent = @"
        //    INSERT INTO tasks2_main_task (
        //        title, description, priority_level_id, status_id, category_id,
        //        start_date, end_date, start_time, end_time, created_on, created_by,
        //        modified_on, modified_by, estimated_hours, priority_order,
        //        remarks, important, completed, selected_days, periodic_tasks_main_task_id
        //    )
        //    VALUES (
        //        @title, @description, @priority_level_id, @status_id, @category_id,
        //        @start_date, @end_date, @start_time, @end_time, NOW(), @created_by,
        //        NOW(), @modified_by, @estimated_hours, @priority_order,
        //        @remarks, @important, @completed, @selected_days, @periodic_tasks_main_task_id
        //    )
        //    RETURNING id";

        //public const string UpdateMainTaskPeriodicParent = @"
        //    UPDATE tasks2_main_task 
        //    SET periodic_tasks_main_task_id = @periodic_tasks_main_task_id 
        //    WHERE id = @id";
    }
}
