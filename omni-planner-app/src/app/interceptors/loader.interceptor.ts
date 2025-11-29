// Loader Interceptor - Automatically shows/hides loader for ALL HTTP requests
// This interceptor catches every HTTP request made through Angular's HttpClient
// No configuration needed - works automatically for all current and future API calls
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from '../shared/services/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  // URLs that should NOT trigger the loader (optional - currently empty to show loader on all requests)
  // Only add URLs here if you specifically don't want loader for certain endpoints
  // Examples: health checks, ping endpoints, polling requests, etc.
  private excludedUrls: string[] = [
    // Example exclusions (currently none - loader shows on ALL requests):
    // '/api/health',
    // '/api/ping',
  ];

  constructor(private loaderService: LoaderService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Check if this URL should be excluded from showing loader
    const shouldExclude = this.excludedUrls.some(url => request.url.includes(url));
    
    if (!shouldExclude) {
      // Show loader when ANY HTTP request starts
      // This works for: GET, POST, PUT, DELETE, PATCH, and any future HTTP methods
      this.loaderService.show();
    }

    // Handle the request and hide loader when complete (success or error)
    // finalize() ensures loader hides even if request fails
    return next.handle(request).pipe(
      finalize(() => {
        if (!shouldExclude) {
          // Hide loader when request completes (success or error)
          this.loaderService.hide();
        }
      })
    );
  }
}

