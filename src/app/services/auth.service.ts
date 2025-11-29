import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { API_CONFIG } from '../shared/config/api.config';
import { StorageUtil } from '../shared/utils/storage.util';
import { APP_CONSTANTS } from '../shared/constants/app.constants';

export interface LoginRequest {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface UserInfo {
  id: number;
  email: string;
  username: string;
  first_name: string;
  last_name: string;
  phone?: string;
  email_verified: boolean;
}

export interface AuthResponse {
  token: string;
  refreshToken: string;
  expiresAt: string;
  user: UserInfo;
  roles: string[];
  permissions: string[];
}

export interface ServiceResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUserSubject = new BehaviorSubject<UserInfo | null>(this.getStoredUser());
  public currentUser$ = this.currentUserSubject.asObservable();

  private currentAuthSubject = new BehaviorSubject<AuthResponse | null>(this.getStoredAuth());
  public currentAuth$ = this.currentAuthSubject.asObservable();

  constructor(private http: HttpClient) {
    // Check if token is expired on initialization
    this.checkTokenExpiration();
  }

  login(credentials: LoginRequest): Observable<AuthResponse> {
    return this.http.post<ServiceResponse<AuthResponse>>(API_CONFIG.auth.login, credentials)
      .pipe(
        map(response => {
          console.log('Login API Response:', response);
          if (!response || !response.success) {
            throw new Error(response?.message || 'Login failed');
          }
          if (!response.data) {
            console.error('Login response missing data:', response);
            throw new Error('Invalid response from server');
          }
          if (!response.data.token) {
            console.error('Login response missing token:', response.data);
            throw new Error('Token not received from server');
          }
          return response.data;
        }),
        tap(auth => {
          console.log('Setting auth data:', auth);
          if (auth && auth.token) {
            this.setAuth(auth, credentials.rememberMe || false);
            this.currentUserSubject.next(auth.user);
            this.currentAuthSubject.next(auth);
            console.log('Auth stored successfully. Token:', auth.token.substring(0, 20) + '...');
          } else {
            console.error('Auth data is invalid:', auth);
            throw new Error('Invalid authentication data');
          }
        })
      );
  }

  logout(): Observable<boolean> {
    // Try to call backend logout, but don't fail if it doesn't work
    return this.http.post<ServiceResponse<boolean>>(API_CONFIG.auth.logout, {}).pipe(
      map(response => response.success),
      tap(() => {
        this.clearAuth();
        this.currentUserSubject.next(null);
        this.currentAuthSubject.next(null);
      }),
      // Catch errors and still clear local state
      catchError(error => {
        console.log('Backend logout failed (this is OK):', error);
        this.clearAuth();
        this.currentUserSubject.next(null);
        this.currentAuthSubject.next(null);
        return of(true); // Return success anyway since we cleared local state
      })
    );
  }

  clearAuthLocal(): void {
    // Public method to clear auth without calling backend
    this.clearAuth();
    this.currentUserSubject.next(null);
    this.currentAuthSubject.next(null);
  }

  getCurrentUser(): Observable<AuthResponse> {
    return this.http.get<ServiceResponse<AuthResponse>>(API_CONFIG.auth.getCurrentUser)
      .pipe(
        map(response => response.data),
        tap(auth => {
          if (auth) {
            this.currentUserSubject.next(auth.user);
            this.currentAuthSubject.next(auth);
          }
        })
      );
  }

  forgotPassword(email: string): Observable<boolean> {
    return this.http.post<ServiceResponse<boolean>>(API_CONFIG.auth.forgotPassword, { email })
      .pipe(map(response => response.success));
  }

  resetPassword(token: string, email: string, newPassword: string): Observable<boolean> {
    return this.http.post<ServiceResponse<boolean>>(API_CONFIG.auth.resetPassword, {
      token,
      email,
      newPassword
    }).pipe(map(response => response.success));
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    console.log('isAuthenticated check - Token exists:', token ? 'Yes' : 'No');
    
    if (!token) {
      console.log('No token found');
      return false;
    }

    // Check if token is expired
    const auth = this.getStoredAuth();
    if (auth && auth.expiresAt) {
      const expiresAt = new Date(auth.expiresAt);
      const now = new Date();
      console.log('Token expires at:', expiresAt, 'Current time:', now);
      if (expiresAt < now) {
        console.log('Token expired, clearing auth');
        this.clearAuth();
        return false;
      }
    }

    console.log('User is authenticated');
    return true;
  }

  getToken(): string | null {
    return StorageUtil.getToken();
  }

  getRefreshToken(): string | null {
    return StorageUtil.getRefreshToken();
  }

  getUser(): UserInfo | null {
    return this.currentUserSubject.value || this.getStoredUser();
  }

  getRoles(): string[] {
    const auth = this.getStoredAuth();
    return auth?.roles || [];
  }

  getPermissions(): string[] {
    const auth = this.getStoredAuth();
    return auth?.permissions || [];
  }

  hasPermission(permission: string): boolean {
    return this.getPermissions().includes(permission);
  }

  hasRole(role: string): boolean {
    return this.getRoles().includes(role);
  }

  private setAuth(auth: AuthResponse, rememberMe: boolean): void {
    StorageUtil.setToken(auth.token, rememberMe);
    StorageUtil.setRefreshToken(auth.refreshToken, rememberMe);
    StorageUtil.setUser(auth.user, rememberMe);
    StorageUtil.setAuth(auth, rememberMe);
  }

  private clearAuth(): void {
    StorageUtil.removeAuth();
  }

  private getStoredUser(): UserInfo | null {
    return StorageUtil.getUser<UserInfo>();
  }

  getStoredAuth(): AuthResponse | null {
    return StorageUtil.getAuth<AuthResponse>();
  }

  private checkTokenExpiration(): void {
    const auth = this.getStoredAuth();
    if (auth && auth.expiresAt) {
      const expiresAt = new Date(auth.expiresAt);
      if (expiresAt < new Date()) {
        this.clearAuth();
        this.currentUserSubject.next(null);
        this.currentAuthSubject.next(null);
      }
    }
  }
}

