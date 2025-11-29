# Settings Menu Implementation

## Overview
A comprehensive Settings menu has been built with the ability to manage application themes, icon themes, and user preferences. The theme toggle and icon picker have been moved from the header to the Settings menu.

## What Was Built

### Frontend Components

1. **Settings Component** (`src/app/components/settings/`)
   - `settings.ts` - Component logic
   - `settings.html` - UI template
   - `settings.scss` - Styling

2. **Settings Service** (`src/app/services/settings.service.ts`)
   - Handles API communication with backend
   - Fallback to localStorage when API is unavailable

### Backend Components

1. **Settings Controller** (`backend/Controllers/SettingsController.cs`)
   - `GET /api/Settings/GetUserPreferences` - Get user preferences
   - `POST /api/Settings/SaveUserPreferences` - Save user preferences
   - `GET /api/Settings/GetAppThemes` - Get available application themes
   - `GET /api/Settings/GetIconThemes` - Get available icon themes

2. **Settings Repository** (`backend/Repository/SettingsRepository.cs`)
   - Database operations for user preferences

3. **Models**
   - `backend/Models/System/UserPreferences.cs` - User preferences model
   - `backend/ViewModels/System/UserPreferencesViewModel.cs` - ViewModel for API

4. **Database Schema** (`backend/database/user_preferences_schema.sql`)
   - SQL script to create the `user_preferences` table

## Features Implemented

### 1. Color Theme Toggle
- Dark/Light mode toggle
- Moved from header to Settings menu
- Persisted to database and localStorage

### 2. Application Themes
- System for multiple application themes
- Currently shows "Theme 1" (Development in progress)
- Ready for additional themes to be added

### 3. Icon Themes
- System for different icon styles
- Currently includes "Default Icons"

### 4. Application Icon Selection
- 10 icon options available:
  - `layer-group` (currently used)
  - `project-diagram`
  - `sitemap`
  - `cubes`
  - `boxes`
  - `cube`
  - `object-group`
  - `stream`
  - `network-wired`
  - `shapes`
- Icons are applied immediately and saved to preferences

### 5. General Settings
- Sidebar behavior toggle (collapsed/expanded by default)

## Database Setup

### Step 1: Run the SQL Script
Execute the following SQL script in your PostgreSQL database:

```sql
-- File: backend/database/user_preferences_schema.sql
```

You can run it using:
```bash
psql -U your_username -d your_database -f backend/database/user_preferences_schema.sql
```

Or copy and paste the contents directly into your database client.

### Step 2: Verify Table Creation
```sql
SELECT * FROM user_preferences LIMIT 1;
```

### Step 3: Note on Foreign Key
The foreign key constraint to the `users` table is commented out in the schema. If your `users` table exists, uncomment this line:

```sql
CONSTRAINT fk_user_preferences_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
```

## API Endpoints

All endpoints require JWT authentication (Bearer token).

### Get User Preferences
```
GET /api/Settings/GetUserPreferences
Authorization: Bearer {token}

Response:
{
  "success": true,
  "data": {
    "userId": 1,
    "theme": "dark",
    "appThemeId": "theme1",
    "iconThemeId": "default",
    "iconName": "layer-group",
    "sidebarCollapsed": true,
    "language": null,
    "timezone": null
  },
  "message": "Successful"
}
```

### Save User Preferences
```
POST /api/Settings/SaveUserPreferences
Authorization: Bearer {token}
Content-Type: application/json

Body:
{
  "theme": "dark",
  "appThemeId": "theme1",
  "iconThemeId": "default",
  "iconName": "layer-group",
  "sidebarCollapsed": true,
  "language": "en",
  "timezone": "UTC"
}

Response:
{
  "success": true,
  "data": { ... },
  "message": "Preferences saved successfully"
}
```

### Get Application Themes
```
GET /api/Settings/GetAppThemes
Authorization: Bearer {token}

Response:
{
  "success": true,
  "data": [
    {
      "id": "theme1",
      "name": "Theme 1",
      "description": "Default dark theme (Development in progress)",
      "preview": "Dark gradient with blue accents",
      "isAvailable": true
    }
  ],
  "message": "Successful"
}
```

### Get Icon Themes
```
GET /api/Settings/GetIconThemes
Authorization: Bearer {token}

Response:
{
  "success": true,
  "data": [
    {
      "id": "default",
      "name": "Default Icons",
      "description": "Standard FontAwesome icons",
      "icon": "layer-group",
      "isDefault": true
    }
  ],
  "message": "Successful"
}
```

## Usage

### Accessing Settings
1. Click on "Settings" in the sidebar menu
2. All preferences are displayed in organized sections

### Changing Preferences
1. Select your preferred options in each section
2. Changes are automatically saved to the backend
3. If the backend is unavailable, preferences are saved to localStorage as a fallback

### Resetting to Defaults
Click the "Reset to Defaults" button at the bottom of the Settings page to restore all preferences to their default values.

## File Structure

```
Frontend:
src/app/
├── components/
│   └── settings/
│       ├── settings.ts
│       ├── settings.html
│       └── settings.scss
└── services/
    └── settings.service.ts

Backend:
backend/
├── Controllers/
│   └── SettingsController.cs
├── Repository/
│   └── SettingsRepository.cs
├── Models/
│   └── System/
│       └── UserPreferences.cs
├── ViewModels/
│   └── System/
│       └── UserPreferencesViewModel.cs
├── IRepository/
│   └── ISettingsRepository.cs
├── Queries/
│   └── System/
│       └── SettingsQueries.cs
└── database/
    └── user_preferences_schema.sql
```

## Future Enhancements

1. **Additional Application Themes**: Add more themes as they're developed
2. **Custom Icon Themes**: Create and add more icon theme options
3. **Language Support**: Implement multi-language support
4. **Timezone Management**: Add timezone selection and management
5. **Export/Import Preferences**: Allow users to export and import their settings

## Notes

- The Settings menu is fully integrated into the sidebar navigation
- All preferences are user-specific and stored per user ID
- The system gracefully falls back to localStorage if the backend API is unavailable
- Icon changes are immediately reflected in the header
- Theme changes are applied instantly
- The database uses soft delete pattern (is_deleted flag) for data retention

