-- Migration Script: Insert Dummy Task Data
-- This script migrates data from GetDummyTasks() method to the new database structure
-- Run this AFTER creating all the tables and ensuring master tables have the required data

-- Note: This script assumes that:
-- 1. Master tables (priority_master, status_master, category_master, urls_master) have the required records
-- 2. If URLs don't exist in urls_master, they will be created first
-- 3. created_by and modified_by are set to 1 (system user)

-- ============================================
-- Step 1: Insert Periodic Tasks (if needed)
-- ============================================
INSERT INTO periodic_tasks_main_task (id, title, description, start_date, end_date, created_by, last_modified_by, is_active, is_deleted)
VALUES 
    (1001, 'Periodic Task 1001', NULL, '2024-01-15', '2024-12-31', 1, 1, true, false),
    (1005, 'Periodic Task 1005', NULL, '2024-01-15', '2024-12-31', 1, 1, true, false)
ON CONFLICT (id) DO NOTHING;

-- ============================================
-- Step 2: Ensure URLs exist in urls_master
-- ============================================
INSERT INTO urls_master (label, url, category_id, created_by, last_modified_by, is_active, is_deleted)
VALUES 
    ('JWT Documentation', 'https://jwt.io', NULL, 1, 1, true, false),
    ('Auth0 Guide', 'https://auth0.com/docs', NULL, 1, 1, true, false),
    ('System Guide', 'https://auth0.com/docs', NULL, 1, 1, true, false),
    ('Aesop plan', 'https://auth0.com/docs', NULL, 1, 1, true, false)
ON CONFLICT DO NOTHING;

-- ============================================
-- Step 3: Insert Main Tasks
-- ============================================
-- Task 1: id = 187326
INSERT INTO tasks_main_task (
    id, title, description, priority_level_id, status_id, category_id, 
    task_on_date, start_time, end_time, created_on, created_by, modified_on, modified_by,
    estimated_hours, priority_order, remarks, important, completed, periodic_tasks_main_task_id
)
VALUES (
    187326,
    'Implement user authentication system aaaaaaaaaaaaasydtyt  Implement user authenticationImplement user authenti',
    'Create a secure authentication system with JWT tokens and role-based access control',
    (SELECT id FROM priority_master WHERE LOWER(priority) = 'high' AND is_deleted = false LIMIT 1),
    (SELECT id FROM status_master WHERE LOWER(status) = 'in-progress' AND is_deleted = false LIMIT 1),
    (SELECT id FROM category_master WHERE LOWER(category) = 'development' AND is_deleted = false LIMIT 1),
    '2025-11-13', '09:00', '17:00', '2024-01-01 00:00:00', 1, '2024-01-10 00:00:00', 1,
    18, 11, 'Critical security feature for the application. Must implement proper encryption. Need to ensure compliance with security standards.', 
    true, true, 1001
)
ON CONFLICT (id) DO NOTHING;

-- Task 2: id = 2
INSERT INTO tasks_main_task (
    id, title, description, priority_level_id, status_id, category_id, 
    task_on_date, start_time, end_time, created_on, created_by, modified_on, modified_by,
    estimated_hours, priority_order, remarks, important, completed, periodic_tasks_main_task_id
)
VALUES (
    2,
    'Setup config for user authentication system',
    'Create a secure authentication system with JWT tokens and role-based access control',
    (SELECT id FROM priority_master WHERE LOWER(priority) = 'high' AND is_deleted = false LIMIT 1),
    (SELECT id FROM status_master WHERE LOWER(status) = 'in-progress' AND is_deleted = false LIMIT 1),
    (SELECT id FROM category_master WHERE LOWER(category) = 'development' AND is_deleted = false LIMIT 1),
    '2025-11-12', '09:00', '17:00', '2024-01-01 00:00:00', 1, '2024-01-10 00:00:00', 1,
    18, 23, '', false, false, NULL
)
ON CONFLICT (id) DO NOTHING;

-- Task 3: id = 3
INSERT INTO tasks_main_task (
    id, title, description, priority_level_id, status_id, category_id, 
    task_on_date, start_time, end_time, created_on, created_by, modified_on, modified_by,
    estimated_hours, priority_order, remarks, important, completed, periodic_tasks_main_task_id
)
VALUES (
    3,
    'Tech robotic creators grup anlystics',
    'Create a secure authentication system with JWT tokens and role-based access control',
    (SELECT id FROM priority_master WHERE LOWER(priority) = 'high' AND is_deleted = false LIMIT 1),
    (SELECT id FROM status_master WHERE LOWER(status) = 'in-progress' AND is_deleted = false LIMIT 1),
    (SELECT id FROM category_master WHERE LOWER(category) = 'operations' AND is_deleted = false LIMIT 1),
    '2025-11-13', '09:00', '17:00', '2024-01-01 00:00:00', 1, '2024-01-10 00:00:00', 1,
    18, NULL, '', false, false, 1005
)
ON CONFLICT (id) DO NOTHING;

-- Task 4: id = 4
INSERT INTO tasks_main_task (
    id, title, description, priority_level_id, status_id, category_id, 
    task_on_date, start_time, end_time, created_on, created_by, modified_on, modified_by,
    estimated_hours, priority_order, remarks, important, completed, periodic_tasks_main_task_id
)
VALUES (
    4,
    'Syatem define',
    'Create a secure authentication system with JWT tokens and role-based access control',
    (SELECT id FROM priority_master WHERE LOWER(priority) = 'high' AND is_deleted = false LIMIT 1),
    (SELECT id FROM status_master WHERE LOWER(status) = 'completed' AND is_deleted = false LIMIT 1),
    (SELECT id FROM category_master WHERE LOWER(category) = 'development' AND is_deleted = false LIMIT 1),
    '2025-11-13', '09:00', '17:00', '2024-01-01 00:00:00', 1, '2024-01-10 00:00:00', 1,
    18, 4, '', true, false, NULL
)
ON CONFLICT (id) DO NOTHING;

-- Task 5: id = 5
INSERT INTO tasks_main_task (
    id, title, description, priority_level_id, status_id, category_id, 
    task_on_date, start_time, end_time, created_on, created_by, modified_on, modified_by,
    estimated_hours, priority_order, remarks, important, completed, periodic_tasks_main_task_id
)
VALUES (
    5,
    'yasdystuy sadsad',
    NULL,
    (SELECT id FROM priority_master WHERE LOWER(priority) = 'high' AND is_deleted = false LIMIT 1),
    (SELECT id FROM status_master WHERE LOWER(status) = 'in-progress' AND is_deleted = false LIMIT 1),
    (SELECT id FROM category_master WHERE LOWER(category) = 'development' AND is_deleted = false LIMIT 1),
    NULL, NULL, NULL, '2024-01-01 00:00:00', 1, '2024-01-10 00:00:00', 1,
    NULL, 5, NULL, true, false, NULL
)
ON CONFLICT (id) DO NOTHING;

-- Task 6: id = 6
INSERT INTO tasks_main_task (
    id, title, description, priority_level_id, status_id, category_id, 
    task_on_date, start_time, end_time, created_on, created_by, modified_on, modified_by,
    estimated_hours, priority_order, remarks, important, completed, periodic_tasks_main_task_id
)
VALUES (
    6,
    'Web page for new user authentication system',
    'Create a secure authentication system with JWT tokens and role-based access control',
    (SELECT id FROM priority_master WHERE LOWER(priority) = 'urgent' AND is_deleted = false LIMIT 1),
    (SELECT id FROM status_master WHERE LOWER(status) = 'todo' AND is_deleted = false LIMIT 1),
    (SELECT id FROM category_master WHERE LOWER(category) = 'operations' AND is_deleted = false LIMIT 1),
    '2025-11-13', '09:00', '17:00', '2024-01-01 00:00:00', 1, '2024-01-10 00:00:00', 1,
    18, 6, 'Critical security feature for the application. Must implement proper encryption. Need to ensure compliance with security standards.', 
    true, false, NULL
)
ON CONFLICT (id) DO NOTHING;

-- Task 7: id = 7
INSERT INTO tasks_main_task (
    id, title, description, priority_level_id, status_id, category_id, 
    task_on_date, start_time, end_time, created_on, created_by, modified_on, modified_by,
    estimated_hours, priority_order, remarks, important, completed, periodic_tasks_main_task_id
)
VALUES (
    7,
    'Omni planner designing',
    'Create a secure authentication system with JWT tokens and role-based access control',
    (SELECT id FROM priority_master WHERE LOWER(priority) = 'high' AND is_deleted = false LIMIT 1),
    (SELECT id FROM status_master WHERE LOWER(status) = 'in-progress' AND is_deleted = false LIMIT 1),
    (SELECT id FROM category_master WHERE LOWER(category) = 'development' AND is_deleted = false LIMIT 1),
    '2024-11-13', '08:00', '17:00', '2024-01-01 00:00:00', 1, '2024-01-10 00:00:00', 1,
    18, 7, 'Critical security feature for the application. Must implement proper encryption. Need to ensure compliance with security standards.', 
    true, false, NULL
)
ON CONFLICT (id) DO NOTHING;

-- ============================================
-- Step 4: Insert Level 1 Subtasks for Task 187326
-- ============================================
-- Level 1 Subtask 1 (id = 1) for Task 187326
INSERT INTO tasks_level_1_sub_task (
    id, title, description, priority_level_id, status_id, start_time, end_time,
    created_on, created_by, modified_on, modified_by, estimated_hours, priority_order,
    important, completed, tasks_main_task_id
)
VALUES (
    1,
    'Setup JWT authenticationti cationuystadyt yutasdyut tsaduy satuydtyu asdtuyt',
    'Implement JWT token generation and validation',
    (SELECT id FROM priority_master WHERE LOWER(priority) = 'high' AND is_deleted = false LIMIT 1),
    (SELECT id FROM status_master WHERE LOWER(status) = 'done' AND is_deleted = false LIMIT 1),
    '09:00', '17:00', '2024-01-01 00:00:00', 1, '2024-01-02 00:00:00', 1,
    4, 2, false, true, 187326
)
ON CONFLICT (id) DO NOTHING;

-- Level 1 Subtask 2 (id = 2) for Task 187326
INSERT INTO tasks_level_1_sub_task (
    id, title, description, priority_level_id, status_id, start_time, end_time,
    created_on, created_by, modified_on, modified_by, estimated_hours, priority_order,
    important, completed, tasks_main_task_id
)
VALUES (
    2,
    'Create user roles and permissions',
    'Define and implement role-based access control',
    (SELECT id FROM priority_master WHERE LOWER(priority) = 'high' AND is_deleted = false LIMIT 1),
    (SELECT id FROM status_master WHERE LOWER(status) = 'in-progress' AND is_deleted = false LIMIT 1),
    '09:00', '17:00', '2024-01-02 00:00:00', 1, '2024-01-10 00:00:00', 1,
    6, 3, false, true, 187326
)
ON CONFLICT (id) DO NOTHING;

-- Level 1 Subtask 3 (id = 3) for Task 187326
INSERT INTO tasks_level_1_sub_task (
    id, title, description, priority_level_id, status_id, start_time, end_time,
    created_on, created_by, modified_on, modified_by, estimated_hours, priority_order,
    important, completed, tasks_main_task_id
)
VALUES (
    3,
    'Add password reset functionality',
    'Implement secure password reset with email verification',
    (SELECT id FROM priority_master WHERE LOWER(priority) = 'medium' AND is_deleted = false LIMIT 1),
    (SELECT id FROM status_master WHERE LOWER(status) = 'todo' AND is_deleted = false LIMIT 1),
    '09:00', '17:00', '2024-01-05 00:00:00', 1, '2024-01-05 00:00:00', 1,
    6, 1, false, true, 187326
)
ON CONFLICT (id) DO NOTHING;

-- ============================================
-- Step 5: Insert Level 2 Subtasks for Task 187326, Level 1 Subtask 1
-- ============================================
-- Level 2 Subtask 101 (id = 101) for Level 1 Subtask 1
INSERT INTO tasks_level_2_sub_task (
    id, title, description, priority_level_id, status_id, start_time, end_time,
    created_on, created_by, modified_on, modified_by, estimated_hours, priority_order,
    important, completed, tasks_level_1_sub_task_id
)
VALUES (
    101,
    'Install JWT library',
    'Add JWT package to project dependencies',
    (SELECT id FROM priority_master WHERE LOWER(priority) = 'medium' AND is_deleted = false LIMIT 1),
    (SELECT id FROM status_master WHERE LOWER(status) = 'done' AND is_deleted = false LIMIT 1),
    '09:00', '10:00', '2024-01-01 00:00:00', 1, '2024-01-01 00:00:00', 1,
    1, 2, false, true, 1
)
ON CONFLICT (id) DO NOTHING;

-- Level 2 Subtask 102 (id = 102) for Level 1 Subtask 1
INSERT INTO tasks_level_2_sub_task (
    id, title, description, priority_level_id, status_id, start_time, end_time,
    created_on, created_by, modified_on, modified_by, estimated_hours, priority_order,
    important, completed, tasks_level_1_sub_task_id
)
VALUES (
    102,
    'Configure JWT secret tication system aaaaaaaaaaaaasydtyt  ysduyats ytusydtu yuastuyda suydtau sdtsayudtyaustduy uystadyt yutasdyut tsaduy satuydtyu asdtuyt',
    'Set up environment variables for JWT secret',
    (SELECT id FROM priority_master WHERE LOWER(priority) = 'high' AND is_deleted = false LIMIT 1),
    (SELECT id FROM status_master WHERE LOWER(status) = 'done' AND is_deleted = false LIMIT 1),
    '10:00', '11:00', '2024-01-01 00:00:00', 1, '2024-01-01 00:00:00', 1,
    1, 1, false, true, 1
)
ON CONFLICT (id) DO NOTHING;

-- Level 2 Subtask 103 (id = 103) for Level 1 Subtask 1
INSERT INTO tasks_level_2_sub_task (
    id, title, description, priority_level_id, status_id, start_time, end_time,
    created_on, created_by, modified_on, modified_by, estimated_hours, priority_order,
    important, completed, tasks_level_1_sub_task_id
)
VALUES (
    103,
    'Create token generation service tication system aaaaaaaaaaaaasydtyt  ysduyats ytusydtu yuastuyda suydtau sdtsayudtyaustduy uystadyt yutasdyut tsaduy satuydtyu asdtuyt',
    'Implement service for creating and signing JWT tokens',
    (SELECT id FROM priority_master WHERE LOWER(priority) = 'high' AND is_deleted = false LIMIT 1),
    (SELECT id FROM status_master WHERE LOWER(status) = 'todo' AND is_deleted = false LIMIT 1),
    '11:00', '17:00', '2024-01-01 00:00:00', 1, '2024-01-02 00:00:00', 1,
    2, 3, false, true, 1
)
ON CONFLICT (id) DO NOTHING;

-- ============================================
-- Step 6: Insert Level 2 Subtasks for Task 187326, Level 1 Subtask 2
-- ============================================
-- Level 2 Subtask 201 (id = 201) for Level 1 Subtask 2
INSERT INTO tasks_level_2_sub_task (
    id, title, description, priority_level_id, status_id, start_time, end_time,
    created_on, created_by, modified_on, modified_by, estimated_hours, priority_order,
    important, completed, tasks_level_1_sub_task_id
)
VALUES (
    201,
    'Define user roles',
    'Create enum for user roles (admin, user, guest)',
    (SELECT id FROM priority_master WHERE LOWER(priority) = 'medium' AND is_deleted = false LIMIT 1),
    (SELECT id FROM status_master WHERE LOWER(status) = 'done' AND is_deleted = false LIMIT 1),
    '09:00', '10:00', '2024-01-02 00:00:00', 1, '2024-01-02 00:00:00', 1,
    1, 1, false, true, 2
)
ON CONFLICT (id) DO NOTHING;

-- Level 2 Subtask 202 (id = 202) for Level 1 Subtask 2
INSERT INTO tasks_level_2_sub_task (
    id, title, description, priority_level_id, status_id, start_time, end_time,
    created_on, created_by, modified_on, modified_by, estimated_hours, priority_order,
    important, completed, tasks_level_1_sub_task_id
)
VALUES (
    202,
    'Create permission system',
    'Implement permission checking middleware',
    (SELECT id FROM priority_master WHERE LOWER(priority) = 'high' AND is_deleted = false LIMIT 1),
    (SELECT id FROM status_master WHERE LOWER(status) = 'in-progress' AND is_deleted = false LIMIT 1),
    '09:00', '17:00', '2024-01-03 00:00:00', 1, '2024-01-10 00:00:00', 1,
    3, 2, false, true, 2
)
ON CONFLICT (id) DO NOTHING;

-- ============================================
-- Step 7: Insert Level 1 Subtasks for other tasks (Task 2, 3, 4, 5, 6, 7)
-- ============================================
-- For Task 2: Level 1 Subtasks (using IDs 4, 5, 6 to avoid conflicts)
INSERT INTO tasks_level_1_sub_task (
    id, title, description, priority_level_id, status_id, start_time, end_time,
    created_on, created_by, modified_on, modified_by, estimated_hours, priority_order,
    important, completed, tasks_main_task_id
)
VALUES 
    (4, 'Setup JWT authentication', 'Implement JWT token generation and validation',
     (SELECT id FROM priority_master WHERE LOWER(priority) = 'high' AND is_deleted = false LIMIT 1),
     (SELECT id FROM status_master WHERE LOWER(status) = 'done' AND is_deleted = false LIMIT 1),
     '09:00', '17:00', '2024-01-01 00:00:00', 1, '2024-01-02 00:00:00', 1,
     4, 1, false, false, 2),
    (5, 'Create user roles and permissions', 'Define and implement role-based access control',
     (SELECT id FROM priority_master WHERE LOWER(priority) = 'high' AND is_deleted = false LIMIT 1),
     (SELECT id FROM status_master WHERE LOWER(status) = 'in-progress' AND is_deleted = false LIMIT 1),
     '09:00', '17:00', '2024-01-02 00:00:00', 1, '2024-01-10 00:00:00', 1,
     6, 2, false, false, 2),
    (6, 'Add password reset functionality', 'Implement secure password reset with email verification',
     (SELECT id FROM priority_master WHERE LOWER(priority) = 'medium' AND is_deleted = false LIMIT 1),
     (SELECT id FROM status_master WHERE LOWER(status) = 'todo' AND is_deleted = false LIMIT 1),
     '09:00', '17:00', '2024-01-05 00:00:00', 1, '2024-01-05 00:00:00', 1,
     6, 3, false, false, 2)
ON CONFLICT (id) DO NOTHING;

-- For Task 3: Level 1 Subtasks (using IDs 7, 8, 9)
INSERT INTO tasks_level_1_sub_task (
    id, title, description, priority_level_id, status_id, start_time, end_time,
    created_on, created_by, modified_on, modified_by, estimated_hours, priority_order,
    important, completed, tasks_main_task_id
)
VALUES 
    (7, 'Setup JWT authentication', 'Implement JWT token generation and validation',
     (SELECT id FROM priority_master WHERE LOWER(priority) = 'high' AND is_deleted = false LIMIT 1),
     (SELECT id FROM status_master WHERE LOWER(status) = 'done' AND is_deleted = false LIMIT 1),
     '09:00', '17:00', '2024-01-01 00:00:00', 1, '2024-01-02 00:00:00', 1,
     4, 1, false, false, 3),
    (8, 'Create user roles and permissions', 'Define and implement role-based access control',
     (SELECT id FROM priority_master WHERE LOWER(priority) = 'high' AND is_deleted = false LIMIT 1),
     (SELECT id FROM status_master WHERE LOWER(status) = 'in-progress' AND is_deleted = false LIMIT 1),
     '09:00', '17:00', '2024-01-02 00:00:00', 1, '2024-01-10 00:00:00', 1,
     6, 2, false, false, 3),
    (9, 'Add password reset functionality', 'Implement secure password reset with email verification',
     (SELECT id FROM priority_master WHERE LOWER(priority) = 'medium' AND is_deleted = false LIMIT 1),
     (SELECT id FROM status_master WHERE LOWER(status) = 'todo' AND is_deleted = false LIMIT 1),
     '09:00', '17:00', '2024-01-05 00:00:00', 1, '2024-01-05 00:00:00', 1,
     6, 3, false, false, 3)
ON CONFLICT (id) DO NOTHING;

-- For Task 4: Level 1 Subtasks (using IDs 10, 11, 12)
INSERT INTO tasks_level_1_sub_task (
    id, title, description, priority_level_id, status_id, start_time, end_time,
    created_on, created_by, modified_on, modified_by, estimated_hours, priority_order,
    important, completed, tasks_main_task_id
)
VALUES 
    (10, 'Setup JWT authentication', 'Implement JWT token generation and validation',
     (SELECT id FROM priority_master WHERE LOWER(priority) = 'high' AND is_deleted = false LIMIT 1),
     (SELECT id FROM status_master WHERE LOWER(status) = 'done' AND is_deleted = false LIMIT 1),
     '09:00', '17:00', '2024-01-01 00:00:00', 1, '2024-01-02 00:00:00', 1,
     4, 1, false, false, 4),
    (11, 'Create user roles and permissions', 'Define and implement role-based access control',
     (SELECT id FROM priority_master WHERE LOWER(priority) = 'high' AND is_deleted = false LIMIT 1),
     (SELECT id FROM status_master WHERE LOWER(status) = 'in-progress' AND is_deleted = false LIMIT 1),
     '09:00', '17:00', '2024-01-02 00:00:00', 1, '2024-01-10 00:00:00', 1,
     6, 2, false, false, 4),
    (12, 'Add password reset functionality', 'Implement secure password reset with email verification',
     (SELECT id FROM priority_master WHERE LOWER(priority) = 'medium' AND is_deleted = false LIMIT 1),
     (SELECT id FROM status_master WHERE LOWER(status) = 'todo' AND is_deleted = false LIMIT 1),
     '09:00', '17:00', '2024-01-05 00:00:00', 1, '2024-01-05 00:00:00', 1,
     6, 3, false, false, 4)
ON CONFLICT (id) DO NOTHING;

-- For Task 5: Level 1 Subtasks (using IDs 13, 14, 15)
INSERT INTO tasks_level_1_sub_task (
    id, title, description, priority_level_id, status_id, start_time, end_time,
    created_on, created_by, modified_on, modified_by, estimated_hours, priority_order,
    important, completed, tasks_main_task_id
)
VALUES 
    (13, 'Setup JWT authentication', 'Implement JWT token generation and validation',
     (SELECT id FROM priority_master WHERE LOWER(priority) = 'high' AND is_deleted = false LIMIT 1),
     (SELECT id FROM status_master WHERE LOWER(status) = 'done' AND is_deleted = false LIMIT 1),
     '09:00', '17:00', '2024-01-01 00:00:00', 1, '2024-01-02 00:00:00', 1,
     4, 1, false, false, 5),
    (14, 'Create user roles and permissions', 'Define and implement role-based access control',
     (SELECT id FROM priority_master WHERE LOWER(priority) = 'high' AND is_deleted = false LIMIT 1),
     (SELECT id FROM status_master WHERE LOWER(status) = 'in-progress' AND is_deleted = false LIMIT 1),
     '09:00', '17:00', '2024-01-02 00:00:00', 1, '2024-01-10 00:00:00', 1,
     6, 2, false, false, 5),
    (15, 'Add password reset functionality', 'Implement secure password reset with email verification',
     (SELECT id FROM priority_master WHERE LOWER(priority) = 'medium' AND is_deleted = false LIMIT 1),
     (SELECT id FROM status_master WHERE LOWER(status) = 'todo' AND is_deleted = false LIMIT 1),
     '09:00', '17:00', '2024-01-05 00:00:00', 1, '2024-01-05 00:00:00', 1,
     6, 3, false, false, 5)
ON CONFLICT (id) DO NOTHING;

-- For Task 6: Level 1 Subtasks (using IDs 16, 17, 18)
INSERT INTO tasks_level_1_sub_task (
    id, title, description, priority_level_id, status_id, start_time, end_time,
    created_on, created_by, modified_on, modified_by, estimated_hours, priority_order,
    important, completed, tasks_main_task_id
)
VALUES 
    (16, 'Setup JWT authentication', 'Implement JWT token generation and validation',
     (SELECT id FROM priority_master WHERE LOWER(priority) = 'high' AND is_deleted = false LIMIT 1),
     (SELECT id FROM status_master WHERE LOWER(status) = 'done' AND is_deleted = false LIMIT 1),
     '09:00', '17:00', '2024-01-01 00:00:00', 1, '2024-01-02 00:00:00', 1,
     4, 1, false, false, 6),
    (17, 'Create user roles and permissions', 'Define and implement role-based access control',
     (SELECT id FROM priority_master WHERE LOWER(priority) = 'high' AND is_deleted = false LIMIT 1),
     (SELECT id FROM status_master WHERE LOWER(status) = 'in-progress' AND is_deleted = false LIMIT 1),
     '09:00', '17:00', '2024-01-02 00:00:00', 1, '2024-01-10 00:00:00', 1,
     6, 2, false, false, 6),
    (18, 'Add password reset functionality', 'Implement secure password reset with email verification',
     (SELECT id FROM priority_master WHERE LOWER(priority) = 'medium' AND is_deleted = false LIMIT 1),
     (SELECT id FROM status_master WHERE LOWER(status) = 'todo' AND is_deleted = false LIMIT 1),
     '09:00', '17:00', '2024-01-05 00:00:00', 1, '2024-01-05 00:00:00', 1,
     6, 3, false, false, 6)
ON CONFLICT (id) DO NOTHING;

-- For Task 7: Level 1 Subtasks (using IDs 19, 20, 21)
INSERT INTO tasks_level_1_sub_task (
    id, title, description, priority_level_id, status_id, start_time, end_time,
    created_on, created_by, modified_on, modified_by, estimated_hours, priority_order,
    important, completed, tasks_main_task_id
)
VALUES 
    (19, 'Setup JWT authentication', 'Implement JWT token generation and validation',
     (SELECT id FROM priority_master WHERE LOWER(priority) = 'high' AND is_deleted = false LIMIT 1),
     (SELECT id FROM status_master WHERE LOWER(status) = 'done' AND is_deleted = false LIMIT 1),
     '09:00', '17:00', '2024-01-01 00:00:00', 1, '2024-01-02 00:00:00', 1,
     4, 1, false, false, 7),
    (20, 'Create user roles and permissions', 'Define and implement role-based access control',
     (SELECT id FROM priority_master WHERE LOWER(priority) = 'high' AND is_deleted = false LIMIT 1),
     (SELECT id FROM status_master WHERE LOWER(status) = 'in-progress' AND is_deleted = false LIMIT 1),
     '09:00', '17:00', '2024-01-02 00:00:00', 1, '2024-01-10 00:00:00', 1,
     6, 2, false, false, 7),
    (21, 'Add password reset functionality', 'Implement secure password reset with email verification',
     (SELECT id FROM priority_master WHERE LOWER(priority) = 'medium' AND is_deleted = false LIMIT 1),
     (SELECT id FROM status_master WHERE LOWER(status) = 'todo' AND is_deleted = false LIMIT 1),
     '09:00', '17:00', '2024-01-05 00:00:00', 1, '2024-01-05 00:00:00', 1,
     6, 3, false, false, 7)
ON CONFLICT (id) DO NOTHING;

-- ============================================
-- Step 8: Insert URL Mappings
-- ============================================
-- Task 187326 URLs
INSERT INTO tasks_url_task_mapping (task_id, url_id, created_by, modified_by)
SELECT 187326, id, 1, 1 FROM urls_master WHERE label = 'JWT Documentation' AND is_deleted = false LIMIT 1
ON CONFLICT DO NOTHING;
INSERT INTO tasks_url_task_mapping (task_id, url_id, created_by, modified_by)
SELECT 187326, id, 1, 1 FROM urls_master WHERE label = 'Auth0 Guide' AND is_deleted = false LIMIT 1
ON CONFLICT DO NOTHING;

-- Task 2 URLs
INSERT INTO tasks_url_task_mapping (task_id, url_id, created_by, modified_by)
SELECT 2, id, 1, 1 FROM urls_master WHERE label = 'JWT Documentation' AND is_deleted = false LIMIT 1
ON CONFLICT DO NOTHING;
INSERT INTO tasks_url_task_mapping (task_id, url_id, created_by, modified_by)
SELECT 2, id, 1, 1 FROM urls_master WHERE label = 'Auth0 Guide' AND is_deleted = false LIMIT 1
ON CONFLICT DO NOTHING;

-- Task 3 URLs
INSERT INTO tasks_url_task_mapping (task_id, url_id, created_by, modified_by)
SELECT 3, id, 1, 1 FROM urls_master WHERE label = 'JWT Documentation' AND is_deleted = false LIMIT 1
ON CONFLICT DO NOTHING;
INSERT INTO tasks_url_task_mapping (task_id, url_id, created_by, modified_by)
SELECT 3, id, 1, 1 FROM urls_master WHERE label = 'Auth0 Guide' AND is_deleted = false LIMIT 1
ON CONFLICT DO NOTHING;

-- Task 4 URLs
INSERT INTO tasks_url_task_mapping (task_id, url_id, created_by, modified_by)
SELECT 4, id, 1, 1 FROM urls_master WHERE label = 'JWT Documentation' AND is_deleted = false LIMIT 1
ON CONFLICT DO NOTHING;
INSERT INTO tasks_url_task_mapping (task_id, url_id, created_by, modified_by)
SELECT 4, id, 1, 1 FROM urls_master WHERE label = 'Auth0 Guide' AND is_deleted = false LIMIT 1
ON CONFLICT DO NOTHING;

-- Task 6 URLs (has 4 URLs)
INSERT INTO tasks_url_task_mapping (task_id, url_id, created_by, modified_by)
SELECT 6, id, 1, 1 FROM urls_master WHERE label = 'JWT Documentation' AND is_deleted = false LIMIT 1
ON CONFLICT DO NOTHING;
INSERT INTO tasks_url_task_mapping (task_id, url_id, created_by, modified_by)
SELECT 6, id, 1, 1 FROM urls_master WHERE label = 'Auth0 Guide' AND is_deleted = false LIMIT 1
ON CONFLICT DO NOTHING;
INSERT INTO tasks_url_task_mapping (task_id, url_id, created_by, modified_by)
SELECT 6, id, 1, 1 FROM urls_master WHERE label = 'System Guide' AND is_deleted = false LIMIT 1
ON CONFLICT DO NOTHING;
INSERT INTO tasks_url_task_mapping (task_id, url_id, created_by, modified_by)
SELECT 6, id, 1, 1 FROM urls_master WHERE label = 'Aesop plan' AND is_deleted = false LIMIT 1
ON CONFLICT DO NOTHING;

-- Task 7 URLs
INSERT INTO tasks_url_task_mapping (task_id, url_id, created_by, modified_by)
SELECT 7, id, 1, 1 FROM urls_master WHERE label = 'JWT Documentation' AND is_deleted = false LIMIT 1
ON CONFLICT DO NOTHING;
INSERT INTO tasks_url_task_mapping (task_id, url_id, created_by, modified_by)
SELECT 7, id, 1, 1 FROM urls_master WHERE label = 'Auth0 Guide' AND is_deleted = false LIMIT 1
ON CONFLICT DO NOTHING;

