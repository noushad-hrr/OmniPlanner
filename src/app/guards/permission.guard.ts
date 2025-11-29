import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class PermissionGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // First check if user is authenticated
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }

    // Get required permission from route data
    const requiredPermission = route.data['permission'] as string;
    
    // If no permission required, allow access (just need authentication)
    if (!requiredPermission) {
      return true;
    }

    // Check if user has the required permission
    if (this.authService.hasPermission(requiredPermission)) {
      return true;
    }

    // User doesn't have permission - redirect to tasks page
    console.warn(`Access denied: User does not have permission '${requiredPermission}'`);
    this.router.navigate(['/tasks']);
    return false;
  }
}

