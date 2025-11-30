-- Tasks2 Level 1 Sub Task Table
-- This table stores level 1 subtasks (direct children of main tasks) for tasks2 section

CREATE TABLE IF NOT EXISTS tasks2_level_1_sub_task (
    id SERIAL PRIMARY KEY,
    title VARCHAR(500) NOT NULL,
    description TEXT,
    priority_level_id INTEGER REFERENCES priority_master(id) ON DELETE SET NULL,
    status_id INTEGER REFERENCES status_master(id) ON DELETE SET NULL,
    start_time VARCHAR(10),
    end_time VARCHAR(10),
    created_on TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_by INTEGER NOT NULL,
    modified_on TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    modified_by INTEGER NOT NULL,
    estimated_hours DECIMAL(10,2),
    priority_order INTEGER,
    important BOOLEAN NOT NULL DEFAULT false,
    completed BOOLEAN NOT NULL DEFAULT false,
    tasks2_main_task_id INTEGER NOT NULL REFERENCES tasks2_main_task(id) ON DELETE CASCADE
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_tasks2_level_1_sub_task_title ON tasks2_level_1_sub_task(title);
CREATE INDEX IF NOT EXISTS idx_tasks2_level_1_sub_task_priority_level_id ON tasks2_level_1_sub_task(priority_level_id);
CREATE INDEX IF NOT EXISTS idx_tasks2_level_1_sub_task_status_id ON tasks2_level_1_sub_task(status_id);
CREATE INDEX IF NOT EXISTS idx_tasks2_level_1_sub_task_tasks2_main_task_id ON tasks2_level_1_sub_task(tasks2_main_task_id);
CREATE INDEX IF NOT EXISTS idx_tasks2_level_1_sub_task_created_by ON tasks2_level_1_sub_task(created_by);
CREATE INDEX IF NOT EXISTS idx_tasks2_level_1_sub_task_modified_by ON tasks2_level_1_sub_task(modified_by);
CREATE INDEX IF NOT EXISTS idx_tasks2_level_1_sub_task_completed ON tasks2_level_1_sub_task(completed);
CREATE INDEX IF NOT EXISTS idx_tasks2_level_1_sub_task_important ON tasks2_level_1_sub_task(important);
CREATE INDEX IF NOT EXISTS idx_tasks2_level_1_sub_task_priority_order ON tasks2_level_1_sub_task(priority_order);
