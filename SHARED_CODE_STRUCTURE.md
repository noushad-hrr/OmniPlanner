# Shared/Common Code Structure - Implementation Summary

## Overview

This document outlines the shared/common code structure implemented to eliminate code duplication and improve reusability across the OmniPlanner application.

## ✅ What Has Been Created

### 1. **Environment Configuration** (`src/environments/`)
   - `environment.ts` - Development environment config
   - `environment.prod.ts` - Production environment config
   - **Purpose**: Centralized API URLs and environment-specific settings
   - **Usage**: Import `environment` to access `apiUrl`, `apiBaseUrl`, etc.

### 2. **API Configuration** (`src/app/shared/config/`)
   - `api.config.ts` - Centralized API endpoints
   - **Purpose**: All API endpoints in one place, using environment config
   - **Usage**: `import { API_CONFIG } from '../shared/config/api.config'`
   - **Benefits**: Easy to update endpoints, environment-aware

### 3. **Common Loader Component** (`src/app/shared/components/loader/`)
   - `loader.component.ts` - Reusable loader component
   - `loader.component.html` - Loader template
   - `loader.component.scss` - Loader styles
   - **Purpose**: Consistent loading UI across the app
   - **Usage**: `<app-loader [message]="'Loading...'" [fullScreen]="true"></app-loader>`

### 4. **Loader Service** (`src/app/shared/services/`)
   - `loader.service.ts` - Global loading state management
   - **Purpose**: Manage loading state across multiple API calls
   - **Usage**: 
     ```typescript
     this.loaderService.show();
     // API call
     this.loaderService.hide();
     ```

### 5. **Storage Utilities** (`src/app/shared/utils/`)
   - `storage.util.ts` - localStorage/sessionStorage utilities
   - **Purpose**: Centralized storage management with error handling
   - **Usage**: `StorageUtil.getToken()`, `StorageUtil.setItem()`, etc.
   - **Benefits**: Type-safe, consistent error handling

### 6. **Application Constants** (`src/app/shared/constants/`)
   - `app.constants.ts` - App-wide constants
   - **Purpose**: Storage keys, timeouts, pagination, date formats, validation rules
   - **Usage**: `APP_CONSTANTS.STORAGE_KEYS.TOKEN`
   - **Benefits**: No magic strings, easy to update

### 7. **Common Styles** (`src/styles/`)
   - `_loader.scss` - Common loader/spinner styles
   - **Purpose**: Reusable CSS classes for loaders
   - **Usage**: Use `.loading-overlay`, `.spinner-inline`, `.btn-loading` classes
   - **Already Integrated**: Added to `styles.scss`

## 📁 Folder Structure

```
omni-planner-app/
├── src/
│   ├── environments/
│   │   ├── environment.ts          # Dev config
│   │   └── environment.prod.ts    # Prod config
│   ├── styles/
│   │   ├── _loader.scss             # Common loader styles
│   │   ├── _modal.scss            # Modal & button styles (existing)
│   │   ├── _variables.scss        # CSS variables (existing)
│   │   └── _mixins.scss           # SCSS mixins (existing)
│   └── app/
│       ├── shared/
│       │   ├── components/
│       │   │   └── loader/        # Loader component
│       │   ├── services/
│       │   │   └── loader.service.ts
│       │   ├── config/
│       │   │   └── api.config.ts  # API endpoints
│       │   ├── constants/
│       │   │   └── app.constants.ts
│       │   ├── utils/
│       │   │   └── storage.util.ts
│       │   └── README.md          # Usage documentation
│       ├── services/              # Feature-specific services
│       └── components/            # Feature components
└── SHARED_CODE_STRUCTURE.md      # This file
```

## 🔄 Migration Status

### ✅ Completed
- Environment configuration files created
- API configuration structure created
- Loader component and service created
- Storage utilities created
- Application constants created
- Common loader styles created
- Documentation created

### ⚠️ Pending (Non-Breaking)
- **Optional**: Update services to use `API_CONFIG` (backward compatible)
- **Optional**: Update services to use `StorageUtil` (backward compatible)
- **Optional**: Add global loader to app component (optional feature)

## 🚀 How to Use

### Example 1: Using API Configuration

**Before:**
```typescript
this.http.get('http://localhost:5500/api/Task/GetAllTasks')
```

**After (Recommended):**
```typescript
import { API_CONFIG } from '../shared/config/api.config';
this.http.get(API_CONFIG.tasks.getAll)
```

### Example 2: Using Loader Service

```typescript
import { LoaderService } from '../shared/services/loader.service';

constructor(private loaderService: LoaderService) {}

loadData() {
  this.loaderService.show();
  this.http.get(API_CONFIG.tasks.getAll).subscribe({
    next: (data) => {
      // Handle data
      this.loaderService.hide();
    },
    error: () => {
      this.loaderService.hide();
    }
  });
}
```

### Example 3: Using Storage Utilities

**Before:**
```typescript
const token = localStorage.getItem('omni-planner-token');
localStorage.setItem('omni-planner-token', newToken);
```

**After:**
```typescript
import { StorageUtil } from '../shared/utils/storage.util';

const token = StorageUtil.getToken();
StorageUtil.setToken(newToken);
```

### Example 4: Using Constants

```typescript
import { APP_CONSTANTS } from '../shared/constants/app.constants';

// Instead of: 'omni-planner-token'
const token = StorageUtil.getItem(APP_CONSTANTS.STORAGE_KEYS.TOKEN);
```

## ⚠️ Important Notes

1. **No Breaking Changes**: All existing code continues to work. The new shared structure is additive.

2. **Gradual Migration**: You can migrate services one at a time to use the new shared utilities.

3. **Backward Compatible**: Old hardcoded URLs and localStorage calls still work.

4. **Environment Files**: Update `environment.prod.ts` with your production API URL before deploying.

5. **Testing**: Test thoroughly after migrating any service to ensure functionality remains intact.

## 📝 Next Steps (Optional)

1. **Update Services Gradually**: Start with one service (e.g., `auth.service.ts`) and update it to use:
   - `API_CONFIG` instead of hardcoded URLs
   - `StorageUtil` instead of direct localStorage calls
   - `APP_CONSTANTS` instead of magic strings

2. **Add Global Loader**: Optionally add `<app-loader [showGlobalLoader]="true"></app-loader>` to `app.html` for global loading state.

3. **Update Interceptors**: Consider updating HTTP interceptors to use `LoaderService` automatically.

4. **Create More Utilities**: As you identify more common patterns, add them to the shared folder.

## 🎯 Benefits

✅ **No Code Duplication**: Common code is in one place  
✅ **Easy Maintenance**: Update once, affects everywhere  
✅ **Type Safety**: TypeScript types for better IDE support  
✅ **Environment Aware**: Easy to switch between dev/prod  
✅ **Consistent UI**: Same loader/spinner everywhere  
✅ **Better Organization**: Clear structure for shared code  
✅ **No Breaking Changes**: Existing code still works  

## 📚 Documentation

See `src/app/shared/README.md` for detailed usage examples and best practices.

