-- Tasks2 URL Task Mapping Table
-- This table stores the mapping between tasks2 and URLs

CREATE TABLE IF NOT EXISTS tasks2_url_task_mapping (
    id SERIAL PRIMARY KEY,
    tasks2_main_task_id INTEGER NOT NULL REFERENCES tasks2_main_task(id) ON DELETE CASCADE,
    url_id INTEGER NOT NULL REFERENCES urls_master(id) ON DELETE CASCADE,
    created_on TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_by INTEGER NOT NULL,
    modified_on TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    modified_by INTEGER NOT NULL,
    UNIQUE(tasks2_main_task_id, url_id)
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_tasks2_url_task_mapping_tasks2_main_task_id ON tasks2_url_task_mapping(tasks2_main_task_id);
CREATE INDEX IF NOT EXISTS idx_tasks2_url_task_mapping_url_id ON tasks2_url_task_mapping(url_id);
CREATE INDEX IF NOT EXISTS idx_tasks2_url_task_mapping_created_by ON tasks2_url_task_mapping(created_by);
CREATE INDEX IF NOT EXISTS idx_tasks2_url_task_mapping_modified_by ON tasks2_url_task_mapping(modified_by);
