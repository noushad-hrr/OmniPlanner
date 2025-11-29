# Shared/Common Code Structure

This folder contains all shared/common code that is reused across multiple components and services in the application. This structure follows the DRY (Don't Repeat Yourself) principle and ensures code reusability.

## Folder Structure

```
shared/
├── components/          # Reusable UI components
│   └── loader/         # Common loader/spinner component
├── services/            # Shared services
│   └── loader.service.ts # Global loading state management
├── config/              # Configuration files
│   └── api.config.ts    # Centralized API endpoints
├── constants/           # Application constants
│   └── app.constants.ts # App-wide constants (storage keys, timeouts, etc.)
└── utils/               # Utility functions
    └── storage.util.ts  # localStorage/sessionStorage utilities
```

## Usage Examples

### 1. Using API Configuration

Instead of hardcoding API URLs, use the centralized config:

```typescript
import { API_CONFIG } from '../shared/config/api.config';

// Before:
this.http.get('http://localhost:5500/api/Task/GetAllTasks')

// After:
this.http.get(API_CONFIG.tasks.getAll)
```

### 2. Using Loader Service

```typescript
import { LoaderService } from '../shared/services/loader.service';

constructor(private loaderService: LoaderService) {}

// Show loader
this.loaderService.show();

// Hide loader
this.loaderService.hide();

// In template
<app-loader [showGlobalLoader]="true"></app-loader>
```

### 3. Using Storage Utilities

```typescript
import { StorageUtil } from '../shared/utils/storage.util';
import { APP_CONSTANTS } from '../shared/constants/app.constants';

// Get token
const token = StorageUtil.getToken();

// Set token
StorageUtil.setToken('your-token');

// Generic storage
StorageUtil.setItem('key', value);
const value = StorageUtil.getItem<Type>('key');
```

### 4. Using Constants

```typescript
import { APP_CONSTANTS } from '../shared/constants/app.constants';

// Use storage keys
const token = StorageUtil.getItem(APP_CONSTANTS.STORAGE_KEYS.TOKEN);

// Use toast timeouts
this.toaster.success('Message', APP_CONSTANTS.TOAST_TIMEOUTS.SUCCESS);
```

## Environment Configuration

Environment files are located in `src/environments/`:
- `environment.ts` - Development configuration
- `environment.staging.ts` - Staging configuration
- `environment.prod.ts` - Production configuration

### How It Works

1. **Development Mode:**
   ```bash
   ng serve                    # Uses environment.ts
   ng build                    # Uses environment.ts
   ```
   - API calls go to: `http://localhost:5500/api`

2. **Staging Mode:**
   ```bash
   ng build --configuration=staging       # Uses environment.staging.ts
   ng serve --configuration=staging       # Serve with staging config
   ```
   - Angular automatically replaces `environment.ts` with `environment.staging.ts` during build
   - API calls go to: `https://staging-api.omniplanner.com/api` (or your staging URL)

3. **Production Mode:**
   ```bash
   ng build --configuration=production    # Uses environment.prod.ts
   ```
   - Angular automatically replaces `environment.ts` with `environment.prod.ts` during build
   - API calls go to: `https://api.omniplanner.com/api` (or your production URL)

3. **File Replacement:**
   - Configured in `angular.json` under `build.configurations.production.fileReplacements`
   - Angular CLI handles the replacement automatically during production builds

### Flow:
```
Build Command → Angular CLI → Check Configuration → Replace File → Build
     ↓              ↓                ↓                    ↓           ↓
ng build      Reads angular.json   Production?      Replace with    Use
--prod                              Yes              .prod.ts        environment
```

### Update Instructions:
- **For Development**: Update `environment.ts` with local API URLs
- **For Staging**: Update `environment.staging.ts` with staging API URLs
- **For Production**: Update `environment.prod.ts` with production API URLs
- **No code changes needed** - just update the environment files

### Quick Reference:
| Environment | Build Command | API URL |
|------------|---------------|---------|
| Development | `ng serve` or `ng build` | `http://localhost:5500/api` |
| Staging | `ng build --configuration=staging` | `https://staging-api.omniplanner.com/api` |
| Production | `ng build --configuration=production` | `https://api.omniplanner.com/api` |

## Common Styles

Common styles are in `src/styles/`:
- `_modal.scss` - Modal and button styles
- `_loader.scss` - Loader/spinner styles
- `_variables.scss` - CSS variables
- `_mixins.scss` - SCSS mixins

## Migration Guide

When updating services to use the new shared structure:

1. **Replace hardcoded API URLs** with `API_CONFIG`
2. **Replace localStorage calls** with `StorageUtil`
3. **Use constants** instead of magic strings
4. **Add loader service** for API calls
5. **Test thoroughly** to ensure no functionality breaks

## Best Practices

1. **Always use shared utilities** instead of duplicating code
2. **Update environment files** when deploying to different environments
3. **Use TypeScript types** for better type safety
4. **Keep shared code generic** and reusable
5. **Document any new shared utilities** in this README

