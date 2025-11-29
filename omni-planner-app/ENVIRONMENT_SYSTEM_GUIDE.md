# Environment Configuration & System Handling Guide

## Overview

This guide explains how the environment configuration system works in the OmniPlanner application, including how different environments (development, production, staging) are handled and how the system automatically switches between them.

## 📁 Environment Files Structure

```
omni-planner-app/
└── src/
    └── environments/
        ├── environment.ts          # Development environment
        ├── environment.staging.ts   # Staging environment
        └── environment.prod.ts    # Production environment
```

## 🔄 How Environment System Works

### 1. **Environment Files**

#### Development Environment (`environment.ts`)
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:5500/api',
  apiBaseUrl: 'http://localhost:5500',
  appName: 'OmniPlanner',
  version: '1.0.0'
};
```

#### Staging Environment (`environment.staging.ts`)
```typescript
export const environment = {
  production: false,
  apiUrl: 'https://staging-api.omniplanner.com/api',
  apiBaseUrl: 'https://staging-api.omniplanner.com',
  appName: 'OmniPlanner',
  version: '1.0.0'
};
```

#### Production Environment (`environment.prod.ts`)
```typescript
export const environment = {
  production: true,
  apiUrl: 'https://api.omniplanner.com/api',
  apiBaseUrl: 'https://api.omniplanner.com',
  appName: 'OmniPlanner',
  version: '1.0.0'
};
```

### 2. **How Angular Switches Environments**

Angular uses **file replacement** during the build process:

- **Development Build**: Uses `environment.ts`
- **Staging Build**: Automatically replaces `environment.ts` with `environment.staging.ts`
- **Production Build**: Automatically replaces `environment.ts` with `environment.prod.ts`

This is configured in `angular.json` under `build.configurations` with `fileReplacements`.

### 3. **Flow Diagram**

```
┌─────────────────────────────────────────────────────────────┐
│                    Build Command                            │
└─────────────────────────────────────────────────────────────┘
                         │
                         ▼
        ┌────────────────────────────────────┐
        │  ng build (development)            │
        │  OR                                 │
        │  ng build --configuration=production│
        └────────────────────────────────────┘
                         │
                         ▼
        ┌────────────────────────────────────┐
        │  Angular CLI checks configuration │
        └────────────────────────────────────┘
                         │
            ┌────────────┬────────────┬────────────┐
            │            │            │            │
            ▼            ▼            ▼            ▼
    ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐
    │   Dev    │  │ Staging  │  │  Prod    │  │  Custom  │
    │  Build   │  │  Build   │  │  Build   │  │  Build   │
    └──────────┘  └──────────┘  └──────────┘  └──────────┘
            │            │            │            │
            │            │            │            │
            ▼            ▼            ▼            ▼
    ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐
    │ Uses      │  │ Replaces │  │ Replaces │  │ Replaces │
    │ env.ts    │  │ with     │  │ with     │  │ with     │
    │           │  │ env.     │  │ env.     │  │ env.     │
    │           │  │ staging  │  │ prod     │  │ custom   │
    │           │  │ .ts      │  │ .ts      │  │ .ts      │
    └──────────┘  └──────────┘  └──────────┘  └──────────┘
            │                       │
            └───────────┬───────────┘
                        ▼
            ┌───────────────────────┐
            │  API_CONFIG imports  │
            │  environment         │
            └───────────────────────┘
                        │
                        ▼
            ┌───────────────────────┐
            │  All services use    │
            │  API_CONFIG which    │
            │  uses environment    │
            └───────────────────────┘
```

## 🔧 Configuration Flow

### Step 1: Environment File Selection

**During Development:**
```bash
ng serve                    # Uses environment.ts (development)
ng build                    # Uses environment.ts (development)
```

**During Staging:**
```bash
ng build --configuration=staging      # Uses environment.staging.ts
ng serve --configuration=staging      # Serves with staging config
```

**During Production:**
```bash
ng build --configuration=production    # Uses environment.prod.ts
ng build --prod                        # Uses environment.prod.ts
```

### Step 2: API Configuration Uses Environment

```typescript
// src/app/shared/config/api.config.ts
import { environment } from '../../../environments/environment';

export const API_CONFIG = {
  baseUrl: environment.apiUrl,  // ← Gets value from environment file
  // ... all endpoints use environment.apiUrl
};
```

### Step 3: Services Use API_CONFIG

```typescript
// src/app/services/category-master.service.ts
import { API_CONFIG } from '../shared/config/api.config';

addUpdateCategory(category: Category): Observable<Category> {
  return this.http.post<ServiceResponse<Category>>(
    API_CONFIG.categories.addUpdate,  // ← Uses environment-based URL
    category
  );
}
```

## 📊 Complete Data Flow

```
┌─────────────────────────────────────────────────────────────┐
│                    ENVIRONMENT FILES                       │
│  ┌──────────────────┐        ┌──────────────────┐         │
│  │ environment.ts   │        │ environment.prod │         │
│  │ (Development)    │        │ .ts (Production)│         │
│  │                  │        │                  │         │
│  │ apiUrl:          │        │ apiUrl:          │         │
│  │ localhost:5500   │        │ api.omniplanner  │         │
│  └──────────────────┘        └──────────────────┘         │
└─────────────────────────────────────────────────────────────┘
                         │
                         │ Import
                         ▼
┌─────────────────────────────────────────────────────────────┐
│              API_CONFIG (api.config.ts)                     │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ import { environment } from '.../environment'       │  │
│  │                                                       │  │
│  │ export const API_CONFIG = {                          │  │
│  │   baseUrl: environment.apiUrl,  ← Uses environment   │  │
│  │   categories: {                                      │  │
│  │     getAll: `${environment.apiUrl}/...`             │  │
│  │   }                                                   │  │
│  │ }                                                     │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                         │
                         │ Import
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                    SERVICES                                 │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ import { API_CONFIG } from '../shared/config/...'    │  │
│  │                                                       │  │
│  │ this.http.get(API_CONFIG.categories.getAll)         │  │
│  │   ↑                                                  │  │
│  │   Uses environment-based URL automatically          │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

## 🎯 Key Benefits

### 1. **Automatic Environment Switching**
- No code changes needed when switching environments
- Angular CLI handles file replacement automatically
- Build configuration determines which environment is used

### 2. **Single Source of Truth**
- All API URLs come from environment files
- API_CONFIG centralizes all endpoints
- Services don't need to know about environment details

### 3. **Type Safety**
- TypeScript ensures environment object structure
- Compile-time checking prevents errors
- IDE autocomplete for environment properties

### 4. **Easy Deployment**
- Update `environment.prod.ts` with production URLs
- Build with `--configuration=production`
- No code changes required

## 📝 Usage Examples

### Example 1: Development
```bash
# Start development server (uses environment.ts)
ng serve

# API calls go to: http://localhost:5500/api
```

### Example 2: Production Build
```bash
# Build for production (uses environment.prod.ts)
ng build --configuration=production

# API calls go to: https://api.omniplanner.com/api
```

### Example 3: Adding New Environment Variable

1. **Add to both environment files:**
```typescript
// environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:5500/api',
  newFeature: true  // ← Add new property
};

// environment.prod.ts
export const environment = {
  production: true,
  apiUrl: 'https://api.omniplanner.com/api',
  newFeature: false  // ← Add same property
};
```

2. **Use in code:**
```typescript
import { environment } from '../../../environments/environment';

if (environment.newFeature) {
  // Enable new feature
}
```

## 🔐 Security Considerations

### ✅ Good Practices

1. **Never commit sensitive data** to environment files
   - Use environment variables for secrets
   - Use backend configuration for sensitive settings

2. **Use different URLs for different environments**
   - Development: `localhost`
   - Staging: `staging-api.omniplanner.com`
   - Production: `api.omniplanner.com`

3. **Keep production URLs in `environment.prod.ts`**
   - Only update when deploying
   - Review before each production deployment

### ⚠️ What NOT to Do

- ❌ Don't hardcode API URLs in services
- ❌ Don't commit API keys or secrets to environment files
- ❌ Don't use production URLs in development environment

## 🚀 Deployment Workflow

### Development
```bash
ng serve
# Uses: environment.ts
# API: http://localhost:5500/api
```

### Staging
```bash
ng build --configuration=staging
# Uses: environment.staging.ts
# API: https://staging-api.omniplanner.com/api

# Or serve with staging config
ng serve --configuration=staging
```

### Production
```bash
ng build --configuration=production
# Uses: environment.prod.ts
# API: https://api.omniplanner.com/api
```

## 📋 Environment Properties Reference

| Property | Development | Staging | Production | Description |
|----------|------------|---------|------------|-------------|
| `production` | `false` | `false` | `true` | Flag to identify environment |
| `apiUrl` | `http://localhost:5500/api` | `https://staging-api.omniplanner.com/api` | `https://api.omniplanner.com/api` | Base API URL with `/api` |
| `apiBaseUrl` | `http://localhost:5500` | `https://staging-api.omniplanner.com` | `https://api.omniplanner.com` | Base API URL without `/api` |
| `appName` | `OmniPlanner` | `OmniPlanner` | `OmniPlanner` | Application name |
| `version` | `1.0.0` | `1.0.0` | `1.0.0` | Application version |

## 🔄 Staging Environment (Already Configured)

The staging environment is already set up! Here's how to use it:

### 1. **Update Staging API URL**

Edit `src/environments/environment.staging.ts`:
```typescript
export const environment = {
  production: false,
  apiUrl: 'https://your-staging-api.com/api',  // ← Update this
  apiBaseUrl: 'https://your-staging-api.com',  // ← Update this
  appName: 'OmniPlanner',
  version: '1.0.0'
};
```

### 2. **Build for Staging**
```bash
# Build for staging
ng build --configuration=staging

# Or serve with staging config (for testing)
ng serve --configuration=staging
```

### 3. **Output**
- Build output: `dist/omni-planner-app/`
- API calls will go to your staging API URL
- Source maps enabled (for debugging)

## 🔄 Adding More Environments (Optional)

If you need additional environments (e.g., QA, UAT):

1. **Create new environment file:**
```typescript
// environment.qa.ts
export const environment = {
  production: false,
  apiUrl: 'https://qa-api.omniplanner.com/api',
  apiBaseUrl: 'https://qa-api.omniplanner.com',
  appName: 'OmniPlanner',
  version: '1.0.0'
};
```

2. **Add to angular.json:**
```json
"configurations": {
  "qa": {
    "fileReplacements": [
      {
        "replace": "src/environments/environment.ts",
        "with": "src/environments/environment.qa.ts"
      }
    ],
    "optimization": true,
    "sourceMap": true
  }
}
```

3. **Build with QA:**
```bash
ng build --configuration=qa
```

## 🎓 Best Practices Summary

1. ✅ **Always use `API_CONFIG`** instead of hardcoded URLs
2. ✅ **Update environment files** when API URLs change
3. ✅ **Test both environments** before deploying
4. ✅ **Keep environment files in sync** (same properties)
5. ✅ **Use TypeScript** for type safety
6. ✅ **Document environment-specific settings** in comments

## 🔍 Troubleshooting

### Issue: Wrong API URL being used
**Solution:** Check which build configuration is being used:
```bash
# Verify current build
ng build --configuration=production
```

### Issue: Environment variables not updating
**Solution:** 
- Clear build cache: `rm -rf dist`
- Rebuild: `ng build`

### Issue: TypeScript errors with environment
**Solution:** Ensure both environment files have the same structure

## 📚 Related Files

- `src/environments/environment.ts` - Development config
- `src/environments/environment.prod.ts` - Production config
- `src/app/shared/config/api.config.ts` - API endpoints using environment
- `angular.json` - Build configurations
- `src/app/shared/README.md` - Shared code documentation

---

**Last Updated:** 2025-11-08
**Version:** 1.0.0

