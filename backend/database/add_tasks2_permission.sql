-- Add tasks2.view permission to the permissions table
-- This permission allows users to view and access the tasks2 section

INSERT INTO permissions (
    name,
    code,
    description,
    module,
    is_active,
    is_deleted,
    created_by,
    created_on,
    last_modified_by,
    last_modified_on
) VALUES (
    'Tasks2 View',
    'tasks2.view',
    'Permission to view and access the Tasks2 section',
    'tasks2',
    true,
    false,
    1,  -- Adjust to your system user ID if needed
    NOW(),
    1,  -- Adjust to your system user ID if needed
    NOW()
);

-- Optional: Assign the permission to admin role (adjust role_id as needed)
-- Assuming you have a role_permissions table

-- Example: Assign to role with ID 1 (typically admin)
-- Uncomment and adjust table name if your role_permissions table has a different name
/*
INSERT INTO role_permissions (
    role_id,
    permission_id,
    created_by,
    created_on,
    last_modified_by,
    last_modified_on
)
SELECT 
    1,  -- Role ID (adjust to your admin role ID)
    id,
    1,
    NOW(),
    1,
    NOW()
FROM permissions
WHERE code = 'tasks2.view'
AND NOT EXISTS (
    SELECT 1 FROM role_permissions 
    WHERE role_id = 1 
    AND permission_id = (SELECT id FROM permissions WHERE code = 'tasks2.view')
);
*/

-- Verify the permission was added
SELECT * FROM permissions WHERE code = 'tasks2.view';
