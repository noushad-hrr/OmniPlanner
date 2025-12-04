-- =============================================
-- Days Selection Feature Migration Script
-- Adds selected_days column to tasks2 tables
-- =============================================

-- Add selected_days column to tasks2_main_tasks table
IF NOT EXISTS (SELECT * FROM sys.columns WHERE object_id = OBJECT_ID(N'[dbo].[tasks2_main_tasks]') AND name = 'selected_days')
BEGIN
    ALTER TABLE [dbo].[tasks2_main_tasks]
    ADD [selected_days] NVARCHAR(50) NULL DEFAULT '[0,1,2,3,4,5,6]';
    
    PRINT 'Column selected_days added to tasks2_main_tasks table';
END
ELSE
BEGIN
    PRINT 'Column selected_days already exists in tasks2_main_tasks table';
END
GO

-- Add selected_days column to tasks2_level_1_sub_tasks table
IF NOT EXISTS (SELECT * FROM sys.columns WHERE object_id = OBJECT_ID(N'[dbo].[tasks2_level_1_sub_tasks]') AND name = 'selected_days')
BEGIN
    ALTER TABLE [dbo].[tasks2_level_1_sub_tasks]
    ADD [selected_days] NVARCHAR(50) NULL DEFAULT '[0,1,2,3,4,5,6]';
    
    PRINT 'Column selected_days added to tasks2_level_1_sub_tasks table';
END
ELSE
BEGIN
    PRINT 'Column selected_days already exists in tasks2_level_1_sub_tasks table';
END
GO

-- Add selected_days column to tasks2_level_2_sub_tasks table
IF NOT EXISTS (SELECT * FROM sys.columns WHERE object_id = OBJECT_ID(N'[dbo].[tasks2_level_2_sub_tasks]') AND name = 'selected_days')
BEGIN
    ALTER TABLE [dbo].[tasks2_level_2_sub_tasks]
    ADD [selected_days] NVARCHAR(50) NULL DEFAULT '[0,1,2,3,4,5,6]';
    
    PRINT 'Column selected_days added to tasks2_level_2_sub_tasks table';
END
ELSE
BEGIN
    PRINT 'Column selected_days already exists in tasks2_level_2_sub_tasks table';
END
GO

-- Update existing records to have default value (all days selected)
UPDATE [dbo].[tasks2_main_tasks]
SET [selected_days] = '[0,1,2,3,4,5,6]'
WHERE [selected_days] IS NULL;

UPDATE [dbo].[tasks2_level_1_sub_tasks]
SET [selected_days] = '[0,1,2,3,4,5,6]'
WHERE [selected_days] IS NULL;

UPDATE [dbo].[tasks2_level_2_sub_tasks]
SET [selected_days] = '[0,1,2,3,4,5,6]'
WHERE [selected_days] IS NULL;

PRINT 'Existing records updated with default selected_days value';
GO

-- =============================================
-- OPTIONAL: Add selected_days to periodic_tasks tables if needed
-- =============================================

-- Add selected_days column to periodic_tasks_main_tasks table
IF NOT EXISTS (SELECT * FROM sys.columns WHERE object_id = OBJECT_ID(N'[dbo].[periodic_tasks_main_tasks]') AND name = 'selected_days')
BEGIN
    ALTER TABLE [dbo].[periodic_tasks_main_tasks]
    ADD [selected_days] NVARCHAR(50) NULL DEFAULT '[0,1,2,3,4,5,6]';
    
    PRINT 'Column selected_days added to periodic_tasks_main_tasks table';
END
ELSE
BEGIN
    PRINT 'Column selected_days already exists in periodic_tasks_main_tasks table';
END
GO

-- Add selected_days column to periodic_tasks_sub_tasks table
IF NOT EXISTS (SELECT * FROM sys.columns WHERE object_id = OBJECT_ID(N'[dbo].[periodic_tasks_sub_tasks]') AND name = 'selected_days')
BEGIN
    ALTER TABLE [dbo].[periodic_tasks_sub_tasks]
    ADD [selected_days] NVARCHAR(50) NULL DEFAULT '[0,1,2,3,4,5,6]';
    
    PRINT 'Column selected_days added to periodic_tasks_sub_tasks table';
END
ELSE
BEGIN
    PRINT 'Column selected_days already exists in periodic_tasks_sub_tasks table';
END
GO

-- Update existing periodic task records
UPDATE [dbo].[periodic_tasks_main_tasks]
SET [selected_days] = '[0,1,2,3,4,5,6]'
WHERE [selected_days] IS NULL;

UPDATE [dbo].[periodic_tasks_sub_tasks]
SET [selected_days] = '[0,1,2,3,4,5,6]'
WHERE [selected_days] IS NULL;

PRINT 'Existing periodic task records updated with default selected_days value';
GO

PRINT '=============================================';
PRINT 'Days Selection Migration Completed Successfully!';
PRINT '=============================================';
PRINT '';
PRINT 'NOTES:';
PRINT '- selected_days stores a JSON array of day numbers (0=Sunday, 6=Saturday)';
PRINT '- Default value is [0,1,2,3,4,5,6] (all days selected)';
PRINT '- Column type is NVARCHAR(50) to store JSON array as string';
PRINT '- All existing records have been updated with default value';
GO
