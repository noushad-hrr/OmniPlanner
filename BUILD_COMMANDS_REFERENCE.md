# Build Commands Quick Reference

## 🚀 Environment Build Commands

### Development
```bash
# Serve (development server)
ng serve
# OR
ng serve --configuration=development

# Build (development)
ng build
# OR
ng build --configuration=development
```
**Uses:** `environment.ts`  
**API URL:** `http://localhost:5500/api`

---

### Staging
```bash
# Build for staging
ng build --configuration=staging

# Serve with staging config (for testing)
ng serve --configuration=staging
```
**Uses:** `environment.staging.ts`  
**API URL:** `https://staging-api.omniplanner.com/api` (update in environment.staging.ts)

---

### Production
```bash
# Build for production
ng build --configuration=production
# OR
ng build --prod
```
**Uses:** `environment.prod.ts`  
**API URL:** `https://api.omniplanner.com/api` (update in environment.prod.ts)

---

## 📝 Quick Reference Table

| Environment | Build Command | Serve Command | Environment File | API URL |
|------------|---------------|---------------|------------------|---------|
| **Development** | `ng build` | `ng serve` | `environment.ts` | `http://localhost:5500/api` |
| **Staging** | `ng build --configuration=staging` | `ng serve --configuration=staging` | `environment.staging.ts` | `https://staging-api.omniplanner.com/api` |
| **Production** | `ng build --configuration=production` | `ng serve --configuration=production` | `environment.prod.ts` | `https://api.omniplanner.com/api` |

---

## 🔧 Configuration Files

### Environment Files Location
```
src/environments/
├── environment.ts          # Development
├── environment.staging.ts  # Staging
└── environment.prod.ts    # Production
```

### Build Configuration
Configured in `angular.json` under:
- `projects.omni-planner-app.architect.build.configurations`

---

## 📦 Build Output

All builds output to: `dist/omni-planner-app/`

### Build Differences

| Configuration | Optimization | Source Maps | Output Hashing |
|--------------|-------------|-------------|----------------|
| Development | ❌ No | ✅ Yes | ❌ No |
| Staging | ✅ Yes | ✅ Yes | ✅ Yes |
| Production | ✅ Yes | ❌ No | ✅ Yes |

---

## 🎯 Common Use Cases

### 1. Local Development
```bash
ng serve
# Runs on http://localhost:4200
# API: http://localhost:5500/api
```

### 2. Test Staging Build Locally
```bash
ng serve --configuration=staging
# Runs on http://localhost:4200
# API: https://staging-api.omniplanner.com/api
```

### 3. Build for Staging Deployment
```bash
ng build --configuration=staging
# Output: dist/omni-planner-app/
# Deploy this folder to staging server
```

### 4. Build for Production Deployment
```bash
ng build --configuration=production
# Output: dist/omni-planner-app/
# Deploy this folder to production server
```

---

## ⚙️ Updating Environment URLs

### For Staging
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

### For Production
Edit `src/environments/environment.prod.ts`:
```typescript
export const environment = {
  production: true,
  apiUrl: 'https://your-production-api.com/api',  // ← Update this
  apiBaseUrl: 'https://your-production-api.com',  // ← Update this
  appName: 'OmniPlanner',
  version: '1.0.0'
};
```

---

## ✅ Verification

After building, verify the correct environment is used:

1. **Check build output** - Look for environment-specific URLs in the built files
2. **Test API calls** - Open browser DevTools → Network tab → Check API request URLs
3. **Check console** - Some apps log the environment on startup

---

## 📚 Related Documentation

- `ENVIRONMENT_SYSTEM_GUIDE.md` - Complete environment system guide
- `src/app/shared/README.md` - Shared code documentation
- `angular.json` - Build configuration

---

**Last Updated:** 2025-11-08

