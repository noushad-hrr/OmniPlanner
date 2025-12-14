-- Add columns to tasks2_main_task
ALTER TABLE tasks2_main_task ADD COLUMN IF NOT EXISTS start_date DATE;
ALTER TABLE tasks2_main_task ADD COLUMN IF NOT EXISTS end_date DATE;

-- Migrate data for tasks2_main_task
UPDATE tasks2_main_task SET start_date = task_on_date, end_date = task_on_date WHERE task_on_date IS NOT NULL AND start_date IS NULL;

-- Add columns to tasks2_level_1_sub_task
ALTER TABLE tasks2_level_1_sub_task ADD COLUMN IF NOT EXISTS start_date DATE;
ALTER TABLE tasks2_level_1_sub_task ADD COLUMN IF NOT EXISTS end_date DATE;

-- Migrate data for tasks2_level_1_sub_task (inherit from main task)
UPDATE tasks2_level_1_sub_task l1
SET start_date = t.start_date, end_date = t.end_date
FROM tasks2_main_task t
WHERE l1.tasks2_main_task_id = t.id AND l1.start_date IS NULL;

-- Add columns to tasks2_level_2_sub_task
ALTER TABLE tasks2_level_2_sub_task ADD COLUMN IF NOT EXISTS start_date DATE;
ALTER TABLE tasks2_level_2_sub_task ADD COLUMN IF NOT EXISTS end_date DATE;

-- Migrate data for tasks2_level_2_sub_task (inherit from level 1 subtask)
UPDATE tasks2_level_2_sub_task l2
SET start_date = l1.start_date, end_date = l1.end_date
FROM tasks2_level_1_sub_task l1
WHERE l2.tasks2_level_1_sub_task_id = l1.id AND l2.start_date IS NULL;
