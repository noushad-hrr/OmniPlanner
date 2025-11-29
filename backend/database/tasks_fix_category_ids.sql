-- Fix NULL category_id in tasks_main_task
-- This script updates tasks that have NULL category_id to use the first available category
-- OR you can manually set specific categories for each task

-- First, check which tasks have NULL category_id
SELECT id, title, category_id 
FROM tasks_main_task 
WHERE category_id IS NULL;

-- Option 1: Set all NULL category_ids to the first available category (Development)
UPDATE tasks_main_task
SET category_id = (SELECT id FROM category_master WHERE LOWER(category) = 'development' AND is_deleted = false LIMIT 1)
WHERE category_id IS NULL
AND EXISTS (SELECT 1 FROM category_master WHERE LOWER(category) = 'development' AND is_deleted = false);

-- Option 2: Set specific categories based on task title or other criteria
-- Example: Set category based on task title keywords
UPDATE tasks_main_task
SET category_id = (SELECT id FROM category_master WHERE LOWER(category) = 'development' AND is_deleted = false LIMIT 1)
WHERE category_id IS NULL
AND (LOWER(title) LIKE '%system%' OR LOWER(title) LIKE '%authentication%' OR LOWER(title) LIKE '%web%');

UPDATE tasks_main_task
SET category_id = (SELECT id FROM category_master WHERE LOWER(category) = 'operations' AND is_deleted = false LIMIT 1)
WHERE category_id IS NULL
AND (LOWER(title) LIKE '%operation%' OR LOWER(title) LIKE '%plan%');

-- Option 3: Manually set category for specific task IDs
-- UPDATE tasks_main_task
-- SET category_id = (SELECT id FROM category_master WHERE LOWER(category) = 'development' AND is_deleted = false LIMIT 1)
-- WHERE id = 4;

-- Option 4: If you want to see what categories are available:
SELECT id, category, icon, is_deleted 
FROM category_master 
WHERE is_deleted = false 
ORDER BY category;

-- After running the updates, verify the fix:
SELECT 
    t.id, 
    t.title, 
    t.category_id,
    cm.category AS category_name,
    cm.icon AS category_icon
FROM tasks_main_task t
LEFT JOIN category_master cm ON t.category_id = cm.id AND cm.is_deleted = false
ORDER BY t.id;

