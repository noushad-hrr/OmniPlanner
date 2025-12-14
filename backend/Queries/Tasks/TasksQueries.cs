namespace OmniPlanner_API.Queries.Tasks
{
    public class TasksQueries
    {
        // Get all tasks with all subtasks and URLs, joining with master tables
        public const string GetAllTasks = @"
            WITH level1_subtasks AS (
                SELECT 
                    l1.id,
                    l1.title,
                    l1.description,
                    l1.tasks_main_task_id,
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
                FROM tasks_level_1_sub_task l1
                LEFT JOIN priority_master pm1 ON l1.priority_level_id = pm1.id AND pm1.is_deleted = false
                LEFT JOIN status_master sm1 ON l1.status_id = sm1.id AND sm1.is_deleted = false
            ),
            level2_subtasks AS (
                SELECT 
                    l2.id,
                    l2.title,
                    l2.description,
                    l2.tasks_level_1_sub_task_id,
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
                FROM tasks_level_2_sub_task l2
                LEFT JOIN priority_master pm2 ON l2.priority_level_id = pm2.id AND pm2.is_deleted = false
                LEFT JOIN status_master sm2 ON l2.status_id = sm2.id AND sm2.is_deleted = false
            )
            SELECT 
                t.id,
                t.title,
                t.description,
                t.task_on_date AS taskOnDate,
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
                t.periodic_tasks_main_task_id,
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
                -- Periodic Task
                pt.id AS periodic_task_id,
                pt.start_date AS periodic_start_date,
                pt.end_date AS periodic_end_date,
                pt.title AS periodic_main_task_title,
                -- Periodic Level 1 Subtask
                pt_l1.id AS periodic_level_1_task_id,
                pt_l1.start_date AS periodic_level_1_start_date,
                pt_l1.end_date AS periodic_level_1_end_date,
                pt_l1.title AS periodic_level_1_task_title,
                -- Periodic Level 2 Subtask
                pt_l2.id AS periodic_level_2_task_id,
                pt_l2.start_date AS periodic_level_2_start_date,
                pt_l2.end_date AS periodic_level_2_end_date,
                pt_l2.title AS periodic_level_2_task_title
            FROM tasks_main_task t
            LEFT JOIN priority_master pm ON t.priority_level_id = pm.id AND pm.is_deleted = false
            LEFT JOIN status_master sm ON t.status_id = sm.id AND sm.is_deleted = false
            LEFT JOIN category_master cm ON t.category_id = cm.id AND cm.is_deleted = false
            LEFT JOIN tasks2_main_task pt ON t.periodic_tasks_main_task_id = pt.id
            LEFT JOIN tasks2_level_1_sub_task pt_l1 ON t.periodic_tasks_level_1_sub_task_id = pt_l1.id
            LEFT JOIN tasks2_level_2_sub_task pt_l2 ON t.periodic_tasks_level_2_sub_task_id = pt_l2.id
            ORDER BY t.task_on_date NULLS LAST, t.priority_order NULLS LAST, t.start_time NULLS LAST, t.id";

        // Get a single task by ID (for returning after insert/update)
        public const string GetTaskById = @"
            SELECT 
                t.id,
                t.title,
                t.description,
                t.task_on_date AS taskOnDate,
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
                t.periodic_tasks_main_task_id,
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
                -- Periodic Task
                pt.id AS periodic_task_id,
                pt.start_date AS periodic_start_date,
                pt.end_date AS periodic_end_date,
                pt.title AS periodic_main_task_title,
                -- Periodic Level 1 Subtask
                pt_l1.id AS periodic_level_1_task_id,
                pt_l1.start_date AS periodic_level_1_start_date,
                pt_l1.end_date AS periodic_level_1_end_date,
                pt_l1.title AS periodic_level_1_task_title,
                -- Periodic Level 2 Subtask
                pt_l2.id AS periodic_level_2_task_id,
                pt_l2.start_date AS periodic_level_2_start_date,
                pt_l2.end_date AS periodic_level_2_end_date,
                pt_l2.title AS periodic_level_2_task_title
            FROM tasks_main_task t
            LEFT JOIN priority_master pm ON t.priority_level_id = pm.id AND pm.is_deleted = false
            LEFT JOIN status_master sm ON t.status_id = sm.id AND sm.is_deleted = false
            LEFT JOIN category_master cm ON t.category_id = cm.id AND cm.is_deleted = false
            LEFT JOIN tasks2_main_task pt ON t.periodic_tasks_main_task_id = pt.id
            LEFT JOIN tasks2_level_1_sub_task pt_l1 ON t.periodic_tasks_level_1_sub_task_id = pt_l1.id
            LEFT JOIN tasks2_level_2_sub_task pt_l2 ON t.periodic_tasks_level_2_sub_task_id = pt_l2.id
            WHERE t.id = @task_id";

        // Get URLs for a task
        public const string GetTaskUrls = @"
            SELECT 
                u.id,
                u.label,
                u.url
            FROM tasks_url_task_mapping tm
            INNER JOIN urls_master u ON tm.url_id = u.id AND u.is_deleted = false
            WHERE tm.task_id = @task_id
            ORDER BY u.label";

        // Get Level 1 subtasks for a task
        public const string GetLevel1Subtasks = @"
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
            FROM tasks_level_1_sub_task l1
            LEFT JOIN priority_master pm ON l1.priority_level_id = pm.id AND pm.is_deleted = false
            LEFT JOIN status_master sm ON l1.status_id = sm.id AND sm.is_deleted = false
            WHERE l1.tasks_main_task_id = @task_id
            ORDER BY l1.priority_order NULLS LAST, l1.id";

        // Get Level 2 subtasks for a Level 1 subtask
        public const string GetLevel2Subtasks = @"
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
            FROM tasks_level_2_sub_task l2
            LEFT JOIN priority_master pm ON l2.priority_level_id = pm.id AND pm.is_deleted = false
            LEFT JOIN status_master sm ON l2.status_id = sm.id AND sm.is_deleted = false
            WHERE l2.tasks_level_1_sub_task_id = @level1_subtask_id
            ORDER BY l2.priority_order NULLS LAST, l2.id";

        // Insert Main Task
        public const string AddMainTask = @"
            INSERT INTO tasks_main_task (
                title, description, priority_level_id, status_id, category_id,
                task_on_date, start_time, end_time, created_on, created_by,
                modified_on, modified_by, estimated_hours, priority_order,
                remarks, important, completed, periodic_tasks_main_task_id, periodic_tasks_level_1_sub_task_id, periodic_tasks_level_2_sub_task_id
            )
            VALUES (
                @title, @description, @priority_level_id, @status_id, @category_id,
                @task_on_date, @start_time, @end_time, NOW(), @created_by,
                NOW(), @modified_by, @estimated_hours, @priority_order,
                @remarks, @important, @completed, @periodic_tasks_main_task_id, @periodic_tasks_level_1_sub_task_id, @periodic_tasks_level_2_sub_task_id
            )
            RETURNING id";

        // Update Main Task
        public const string UpdateMainTask = @"
            UPDATE tasks_main_task SET
                title = @title,
                description = @description,
                priority_level_id = @priority_level_id,
                status_id = @status_id,
                category_id = @category_id,
                task_on_date = @task_on_date,
                start_time = @start_time,
                end_time = @end_time,
                modified_on = NOW(),
                modified_by = @modified_by,
                estimated_hours = @estimated_hours,
                priority_order = @priority_order,
                remarks = @remarks,
                important = @important,
                completed = @completed,
                periodic_tasks_main_task_id = @periodic_tasks_main_task_id
            WHERE id = @id";

        // Update Task Important Status (lightweight update)
        public const string UpdateTaskImportant = @"
            UPDATE tasks_main_task SET
                important = @important,
                modified_on = NOW(),
                modified_by = @modified_by
            WHERE id = @id";

        // Update Task Completed Status (lightweight update)
        public const string UpdateTaskCompleted = @"
            UPDATE tasks_main_task SET
                completed = @completed,
                status_id = COALESCE(@status_id, status_id),
                modified_on = NOW(),
                modified_by = @modified_by
            WHERE id = @id";

        // Update Level 1 Subtask Completed Status (lightweight update)
        public const string UpdateLevel1SubtaskCompleted = @"
            UPDATE tasks_level_1_sub_task SET
                completed = @completed,
                status_id = COALESCE(@status_id, status_id),
                modified_on = NOW(),
                modified_by = @modified_by
            WHERE id = @id";

        // Update Level 2 Subtask Completed Status (lightweight update)
        public const string UpdateLevel2SubtaskCompleted = @"
            UPDATE tasks_level_2_sub_task SET
                completed = @completed,
                status_id = COALESCE(@status_id, status_id),
                modified_on = NOW(),
                modified_by = @modified_by
            WHERE id = @id";

        // Delete Main Task (cascade will handle subtasks and URL mappings)
        public const string DeleteMainTask = @"
            DELETE FROM tasks_main_task WHERE id = @id";

        // Insert Level 1 Subtask
        public const string AddLevel1Subtask = @"
            INSERT INTO tasks_level_1_sub_task (
                title, description, priority_level_id, status_id,
                start_time, end_time, created_on, created_by,
                modified_on, modified_by, estimated_hours, priority_order,
                important, completed, tasks_main_task_id
            )
            VALUES (
                @title, @description, @priority_level_id, @status_id,
                @start_time, @end_time, NOW(), @created_by,
                NOW(), @modified_by, @estimated_hours, @priority_order,
                @important, @completed, @tasks_main_task_id
            )
            RETURNING id";

        // Update Level 1 Subtask
        public const string UpdateLevel1Subtask = @"
            UPDATE tasks_level_1_sub_task SET
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

        // Delete Level 1 Subtask (cascade will handle level 2 subtasks)
        public const string DeleteLevel1Subtask = @"
            DELETE FROM tasks_level_1_sub_task WHERE id = @id";

        // Insert Level 2 Subtask
        public const string AddLevel2Subtask = @"
            INSERT INTO tasks_level_2_sub_task (
                title, description, priority_level_id, status_id,
                start_time, end_time, created_on, created_by,
                modified_on, modified_by, estimated_hours, priority_order,
                important, completed, tasks_level_1_sub_task_id
            )
            VALUES (
                @title, @description, @priority_level_id, @status_id,
                @start_time, @end_time, NOW(), @created_by,
                NOW(), @modified_by, @estimated_hours, @priority_order,
                @important, @completed, @tasks_level_1_sub_task_id
            )
            RETURNING id";

        // Update Level 2 Subtask
        public const string UpdateLevel2Subtask = @"
            UPDATE tasks_level_2_sub_task SET
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
        public const string DeleteLevel2Subtask = @"
            DELETE FROM tasks_level_2_sub_task WHERE id = @id";

        // URL Mapping Queries
        public const string DeleteTaskUrlMappings = @"
            DELETE FROM tasks_url_task_mapping WHERE task_id = @task_id";

        public const string InsertTaskUrlMapping = @"
            INSERT INTO tasks_url_task_mapping (task_id, url_id, created_by, modified_by)
            VALUES (@task_id, @url_id, @created_by, @modified_by)
            ON CONFLICT (task_id, url_id) DO NOTHING";
    }
}

