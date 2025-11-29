-- Tasks URL Task Mapping Table
-- This table stores the many-to-many relationship between tasks and URLs
-- Maps tasks_main_task.id to urls_master.id

CREATE TABLE IF NOT EXISTS tasks_url_task_mapping (
    id SERIAL PRIMARY KEY,
    task_id INTEGER NOT NULL REFERENCES tasks_main_task(id) ON DELETE CASCADE,
    url_id INTEGER NOT NULL REFERENCES urls_master(id) ON DELETE CASCADE,
    created_on TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_by INTEGER NOT NULL,
    modified_on TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    modified_by INTEGER NOT NULL
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_tasks_url_task_mapping_task_id ON tasks_url_task_mapping(task_id);
CREATE INDEX IF NOT EXISTS idx_tasks_url_task_mapping_url_id ON tasks_url_task_mapping(url_id);
CREATE INDEX IF NOT EXISTS idx_tasks_url_task_mapping_created_by ON tasks_url_task_mapping(created_by);
CREATE INDEX IF NOT EXISTS idx_tasks_url_task_mapping_modified_by ON tasks_url_task_mapping(modified_by);

-- Unique constraint to prevent duplicate mappings
CREATE UNIQUE INDEX IF NOT EXISTS idx_tasks_url_task_mapping_unique 
ON tasks_url_task_mapping (task_id, url_id);

