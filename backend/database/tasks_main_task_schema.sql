-- Tasks Main Task Table
-- This table stores the main tasks

CREATE TABLE IF NOT EXISTS tasks_main_task (
    id SERIAL PRIMARY KEY,
    title VARCHAR(500) NOT NULL,
    description TEXT,
    priority_level_id INTEGER REFERENCES priority_master(id) ON DELETE SET NULL,
    status_id INTEGER REFERENCES status_master(id) ON DELETE SET NULL,
    category_id INTEGER REFERENCES category_master(id) ON DELETE SET NULL,
    task_on_date DATE,
    start_time VARCHAR(10),
    end_time VARCHAR(10),
    created_on TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_by INTEGER NOT NULL,
    modified_on TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    modified_by INTEGER NOT NULL,
    estimated_hours INTEGER,
    priority_order INTEGER,
    remarks TEXT,
    important BOOLEAN NOT NULL DEFAULT false,
    completed BOOLEAN NOT NULL DEFAULT false,
    periodic_tasks_main_task_id INTEGER REFERENCES periodic_tasks_main_task(id) ON DELETE SET NULL
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_tasks_main_task_title ON tasks_main_task(title);
CREATE INDEX IF NOT EXISTS idx_tasks_main_task_priority_level_id ON tasks_main_task(priority_level_id);
CREATE INDEX IF NOT EXISTS idx_tasks_main_task_status_id ON tasks_main_task(status_id);
CREATE INDEX IF NOT EXISTS idx_tasks_main_task_category_id ON tasks_main_task(category_id);
CREATE INDEX IF NOT EXISTS idx_tasks_main_task_task_on_date ON tasks_main_task(task_on_date);
CREATE INDEX IF NOT EXISTS idx_tasks_main_task_created_by ON tasks_main_task(created_by);
CREATE INDEX IF NOT EXISTS idx_tasks_main_task_modified_by ON tasks_main_task(modified_by);
CREATE INDEX IF NOT EXISTS idx_tasks_main_task_periodic_tasks_main_task_id ON tasks_main_task(periodic_tasks_main_task_id);
CREATE INDEX IF NOT EXISTS idx_tasks_main_task_completed ON tasks_main_task(completed);
CREATE INDEX IF NOT EXISTS idx_tasks_main_task_important ON tasks_main_task(important);
CREATE INDEX IF NOT EXISTS idx_tasks_main_task_priority_order ON tasks_main_task(priority_order);

