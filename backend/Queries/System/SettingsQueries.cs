namespace OmniPlanner_API.Queries.System
{
    public static class SettingsQueries
    {
        public const string GetUserPreferences = @"
            SELECT 
                id,
                user_id,
                theme,
                app_theme_id,
                icon_theme_id,
                icon_name,
                sidebar_collapsed,
                language,
                timezone,
                created_by,
                created_on,
                created_by_name,
                last_modified_by,
                last_modified_on,
                last_modified_by_name,
                is_active,
                is_deleted
            FROM user_preferences
            WHERE user_id = @UserId 
                AND is_active = true 
                AND is_deleted = false
            ORDER BY last_modified_on DESC
            LIMIT 1;
        ";

        public const string InsertUserPreferences = @"
            INSERT INTO user_preferences (
                user_id,
                theme,
                app_theme_id,
                icon_theme_id,
                icon_name,
                sidebar_collapsed,
                language,
                timezone,
                created_by,
                created_on,
                created_by_name,
                last_modified_by,
                last_modified_on,
                last_modified_by_name,
                is_active,
                is_deleted
            )
            VALUES (
                @user_id,
                @theme,
                @app_theme_id,
                @icon_theme_id,
                @icon_name,
                @sidebar_collapsed,
                @language,
                @timezone,
                @created_by,
                NOW(),
                @created_by_name,
                @last_modified_by,
                NOW(),
                @last_modified_by_name,
                true,
                false
            )
            RETURNING id;
        ";

        public const string UpdateUserPreferences = @"
            UPDATE user_preferences
            SET 
                theme = @theme,
                app_theme_id = @app_theme_id,
                icon_theme_id = @icon_theme_id,
                icon_name = @icon_name,
                sidebar_collapsed = @sidebar_collapsed,
                language = @language,
                timezone = @timezone,
                last_modified_by = @last_modified_by,
                last_modified_on = NOW(),
                last_modified_by_name = @last_modified_by_name
            WHERE user_id = @user_id
                AND is_active = true 
                AND is_deleted = false
            RETURNING id;
        ";

        public const string CheckUserPreferencesExists = @"
            SELECT COUNT(*) 
            FROM user_preferences
            WHERE user_id = @UserId 
                AND is_active = true 
                AND is_deleted = false;
        ";
    }
}

