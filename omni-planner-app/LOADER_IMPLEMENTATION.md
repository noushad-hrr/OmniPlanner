# Loader Implementation Guide

## Overview

The OmniPlanner application includes a beautiful, theme-matched loader that automatically appears during API calls. The loader uses the application's signature purple/blue gradient theme and provides smooth animations.

## 🎨 Design Features

### Visual Design
- **Purple/Blue Gradient Theme**: Matches application's `#4a9eff` to `#7c3aed` gradient
- **Dark Theme Background**: Semi-transparent dark overlay with backdrop blur
- **Animated Spinner**: Dual-ring spinner with pulsing center dot
- **Shimmer Effect**: Subtle animated shimmer on loader card
- **Smooth Animations**: Fade-in, spin, pulse, and shimmer animations

### UI Elements
- **Full-screen overlay** with backdrop blur
- **Centered loader card** with gradient background
- **Dual-ring spinner** (outer and inner rings spinning in opposite directions)
- **Pulsing center dot** with gradient and glow effect
- **Optional message** text below spinner

## 🔄 Automatic Loading

### HTTP Interceptor

The `LoaderInterceptor` automatically shows/hides the loader for all HTTP requests:

```typescript
// src/app/interceptors/loader.interceptor.ts
export class LoaderInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.show();  // Show loader
    return next.handle(request).pipe(
      finalize(() => this.loaderService.hide())  // Hide loader when done
    );
  }
}
```

### How It Works

1. **Request Starts**: Interceptor calls `loaderService.show()`
2. **Request Completes**: Interceptor calls `loaderService.hide()` in `finalize()`
3. **Multiple Requests**: `LoaderService` uses a counter to handle concurrent requests
4. **Loader Displays**: Component subscribes to `loaderService.loading$` and shows/hides automatically

## 📁 File Structure

```
src/app/
├── shared/
│   ├── components/
│   │   └── loader/
│   │       ├── loader.component.ts
│   │       ├── loader.component.html
│   │       └── loader.component.scss
│   └── services/
│       └── loader.service.ts
└── interceptors/
    └── loader.interceptor.ts
```

## 🚀 Usage

### Automatic (Recommended)

The loader works automatically for all HTTP requests. No code needed!

```typescript
// Just make your API call - loader shows automatically
this.http.get(API_CONFIG.tasks.getAll).subscribe(data => {
  // Loader automatically hides when request completes
});
```

### Manual Control

If you need manual control:

```typescript
import { LoaderService } from '../shared/services/loader.service';

constructor(private loaderService: LoaderService) {}

// Show loader manually
this.loaderService.show();

// Hide loader manually
this.loaderService.hide();

// Reset loader (force hide)
this.loaderService.reset();
```

### Component Usage

The loader is already added to `app.html`:

```html
<app-loader [showGlobalLoader]="true" [fullScreen]="true"></app-loader>
```

**Properties:**
- `showGlobalLoader`: `true` = subscribes to `LoaderService`, `false` = always visible
- `fullScreen`: `true` = full screen overlay, `false` = relative to parent
- `message`: Optional loading message (default: "Loading...")

## 🎯 Features

### ✅ Automatic Loading
- Shows automatically for all HTTP requests
- Hides automatically when requests complete
- Handles multiple concurrent requests correctly

### ✅ Beautiful Design
- Matches application's purple/blue gradient theme
- Smooth animations and transitions
- Professional backdrop blur effect

### ✅ Smart Behavior
- Uses request counter to handle multiple concurrent requests
- Only hides when all requests complete
- Can exclude specific URLs from showing loader

### ✅ Customizable
- Can exclude specific URLs
- Can show custom messages
- Can be used inline or full-screen

## 🔧 Configuration

### Excluding URLs from Loader

Edit `loader.interceptor.ts`:

```typescript
private excludedUrls: string[] = [
  '/api/health',        // Health check endpoints
  '/api/ping',          // Ping endpoints
  // Add more URLs that shouldn't show loader
];
```

### Custom Messages

```html
<app-loader 
  [showGlobalLoader]="true" 
  [fullScreen]="true"
  message="Loading tasks...">
</app-loader>
```

## 🎨 Styling Details

### Colors
- **Primary Blue**: `#4a9eff`
- **Primary Purple**: `#7c3aed`
- **Background**: `rgba(26, 26, 26, 0.92)` with blur
- **Card Background**: Gradient from `#1a1a1a` to `#2d2d2d`

### Animations
- **Fade In**: 0.2s ease-out
- **Spin**: 1s linear infinite (outer ring)
- **Spin Reverse**: 0.8s linear infinite (inner ring)
- **Pulse**: 1.5s ease-in-out infinite (center dot)
- **Shimmer**: 2s infinite (background shimmer)

### Z-Index
- Loader overlay: `10000` (above modals and other UI)

## 📊 Loader Service API

```typescript
class LoaderService {
  // Observable for loading state
  loading$: Observable<boolean>
  
  // Show loader (increments counter)
  show(): void
  
  // Hide loader (decrements counter)
  hide(): void
  
  // Force hide (resets counter)
  reset(): void
  
  // Check if currently loading
  get isLoading(): boolean
}
```

## 🔍 How Multiple Requests Work

```
Request 1 starts → show() → counter = 1 → Loader visible
Request 2 starts → show() → counter = 2 → Loader still visible
Request 1 ends   → hide() → counter = 1 → Loader still visible
Request 2 ends     → hide() → counter = 0 → Loader hidden
```

The counter ensures the loader stays visible until ALL requests complete.

## ✅ Benefits

1. **Zero Code Required**: Works automatically for all HTTP requests
2. **Consistent UX**: Same loader everywhere in the application
3. **Theme Matched**: Matches application's purple/blue gradient design
4. **Smart Handling**: Correctly handles multiple concurrent requests
5. **Smooth Animations**: Professional fade-in, spin, and pulse effects
6. **Accessible**: High contrast, clear visual feedback

## 🐛 Troubleshooting

### Loader not showing
- Check if `LoaderInterceptor` is registered in `app.config.ts`
- Verify `app-loader` is in `app.html` with `[showGlobalLoader]="true"`
- Check browser console for errors

### Loader not hiding
- Check if HTTP requests are completing (check Network tab)
- Verify `finalize()` is called in interceptor
- Try calling `loaderService.reset()` manually

### Multiple loaders showing
- Ensure only one `<app-loader>` in `app.html`
- Check if multiple instances of component are created

## 📚 Related Files

- `src/app/shared/components/loader/` - Loader component
- `src/app/shared/services/loader.service.ts` - Loader service
- `src/app/interceptors/loader.interceptor.ts` - HTTP interceptor
- `src/app/app.config.ts` - Interceptor registration
- `src/app/app.html` - Loader component usage

---

**Last Updated:** 2025-11-08
**Version:** 1.0.0

