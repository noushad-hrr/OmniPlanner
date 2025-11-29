-- Periodic Tasks Main Task Table
-- This table stores periodic/recurring tasks (for future use)

CREATE TABLE IF NOT EXISTS periodic_tasks_main_task (
    id SERIAL PRIMARY KEY,
    title VARCHAR(500) NOT NULL,
    description TEXT,
    start_date DATE,
    end_date DATE,
    created_by INTEGER NOT NULL,
    created_on TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    last_modified_by INTEGER NOT NULL,
    last_modified_on TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN NOT NULL DEFAULT true,
    is_deleted BOOLEAN NOT NULL DEFAULT false
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_periodic_tasks_main_task_title ON periodic_tasks_main_task(title);
CREATE INDEX IF NOT EXISTS idx_periodic_tasks_main_task_is_deleted ON periodic_tasks_main_task(is_deleted);
CREATE INDEX IF NOT EXISTS idx_periodic_tasks_main_task_created_by ON periodic_tasks_main_task(created_by);
CREATE INDEX IF NOT EXISTS idx_periodic_tasks_main_task_dates ON periodic_tasks_main_task(start_date, end_date);

