-- Fix PostgreSQL sequences after inserting data with explicit IDs
-- This ensures that new inserts will use IDs that don't conflict with existing data

-- Fix tasks_main_task sequence
SELECT setval('tasks_main_task_id_seq', COALESCE((SELECT MAX(id) FROM tasks_main_task), 1), true);

-- Fix tasks_level_1_sub_task sequence
SELECT setval('tasks_level_1_sub_task_id_seq', COALESCE((SELECT MAX(id) FROM tasks_level_1_sub_task), 1), true);

-- Fix tasks_level_2_sub_task sequence
SELECT setval('tasks_level_2_sub_task_id_seq', COALESCE((SELECT MAX(id) FROM tasks_level_2_sub_task), 1), true);

-- Fix periodic_tasks_main_task sequence (if you inserted with explicit IDs)
SELECT setval('periodic_tasks_main_task_id_seq', COALESCE((SELECT MAX(id) FROM periodic_tasks_main_task), 1), true);

-- Verify the sequences are set correctly
SELECT 
    'tasks_main_task' AS table_name,
    last_value AS current_sequence_value,
    (SELECT MAX(id) FROM tasks_main_task) AS max_id_in_table
FROM tasks_main_task_id_seq
UNION ALL
SELECT 
    'tasks_level_1_sub_task' AS table_name,
    last_value AS current_sequence_value,
    (SELECT MAX(id) FROM tasks_level_1_sub_task) AS max_id_in_table
FROM tasks_level_1_sub_task_id_seq
UNION ALL
SELECT 
    'tasks_level_2_sub_task' AS table_name,
    last_value AS current_sequence_value,
    (SELECT MAX(id) FROM tasks_level_2_sub_task) AS max_id_in_table
FROM tasks_level_2_sub_task_id_seq;

