# Loader Usage Guide

## ✅ Automatic Loader for ALL API Calls

The loader is **automatically configured** to show on **ALL HTTP requests** made through Angular's `HttpClient`. This includes:

- ✅ All current API calls
- ✅ All future API calls you create
- ✅ GET, POST, PUT, DELETE, PATCH requests
- ✅ Any HTTP method

## 🎯 How It Works

### 1. **Automatic Interception**
The `LoaderInterceptor` automatically intercepts **every HTTP request** made through `HttpClient`:

```typescript
// In app.config.ts
provideHttpClient(withInterceptorsFromDi()),
{
  provide: HTTP_INTERCEPTORS,
  useClass: LoaderInterceptor,
  multi: true
}
```

### 2. **No Code Required**
You don't need to add any code to your services! Just use `HttpClient` normally:

```typescript
// Example: Task Service
constructor(private http: HttpClient) {}

getAllTasks() {
  // Loader automatically shows when this request starts
  // Loader automatically hides when this request completes
  return this.http.get(API_CONFIG.tasks.getAll);
}

createTask(task: Task) {
  // Loader automatically shows/hides for this too
  return this.http.post(API_CONFIG.tasks.create, task);
}
```

### 3. **Works for All Services**
- ✅ `TaskService` - GetAllTasks, CreateTask, UpdateTask, DeleteTask
- ✅ `PeriodicTaskService` - GetAllPeriodicTasks, etc.
- ✅ `CategoryMasterService` - All category operations
- ✅ `StatusMasterService` - All status operations
- ✅ `PriorityMasterService` - All priority operations
- ✅ `UrlsMasterService` - All URL operations
- ✅ `NotesService` - All notes operations
- ✅ `BudgetService` - All budget operations
- ✅ `AuthService` - Login, Logout, GetCurrentUser
- ✅ **Any future services you create**

## 📋 Current API Calls Covered

All these endpoints automatically show the loader:

### Tasks
- `GET /api/Task/GetAllTasks`
- `GET /api/Task/GetTaskById/{id}`
- `POST /api/Task/CreateTask`
- `PUT /api/Task/UpdateTask/{id}`
- `DELETE /api/Task/DeleteTask/{id}`

### Periodic Tasks
- `GET /api/PeriodicTask/GetAllPeriodicTasks`
- `GET /api/PeriodicTask/GetPeriodicTaskById/{id}`
- `POST /api/PeriodicTask/CreatePeriodicTask`
- `PUT /api/PeriodicTask/UpdatePeriodicTask/{id}`
- `DELETE /api/PeriodicTask/DeletePeriodicTask/{id}`

### Master Data
- Category, Status, Priority, URLs - All CRUD operations

### Other Services
- Notes, Budget, Auth, Users, Roles, Permissions - All operations

## 🚀 Future API Calls

**Any new API calls you create will automatically show the loader!**

### Example: New Service

```typescript
// New service you create
@Injectable({ providedIn: 'root' })
export class MyNewService {
  constructor(private http: HttpClient) {}
  
  // Loader automatically shows/hides for this
  getData() {
    return this.http.get('/api/MyNewEndpoint/GetData');
  }
  
  // And this
  saveData(data: any) {
    return this.http.post('/api/MyNewEndpoint/SaveData', data);
  }
}
```

**No additional code needed!** The loader will automatically appear.

## ⚙️ Configuration

### Excluding Specific URLs (Optional)

If you need to exclude certain endpoints from showing the loader (e.g., health checks, polling), edit `loader.interceptor.ts`:

```typescript
private excludedUrls: string[] = [
  '/api/health',      // Health check endpoint
  '/api/ping',        // Ping endpoint
  // Add more if needed
];
```

**By default, ALL URLs show the loader.**

## 🎨 Loader Appearance

- **Full-screen overlay** with dark background
- **Purple/Blue gradient spinner** matching app theme
- **Smooth animations** (fade-in, spin, pulse)
- **High z-index** (99999) - appears above all content

## 🔍 How to Verify

1. **Open browser console** (F12)
2. **Make any API call** (navigate to Tasks page, create a task, etc.)
3. **Loader should appear** immediately
4. **Loader should disappear** when request completes

## 📝 Notes

- Loader handles **multiple concurrent requests** correctly
- Loader only hides when **all requests** complete
- Works for both **success and error** responses
- No manual code needed in services

## ✅ Summary

**The loader is already configured to work on ALL API calls, including future ones!**

Just use `HttpClient` normally in your services - the loader will automatically appear. No additional configuration or code needed.

---

**Last Updated:** 2025-11-08

