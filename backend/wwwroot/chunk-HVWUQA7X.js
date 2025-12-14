import {
  StorageUtil
} from "./chunk-XMNU56NZ.js";
import {
  API_CONFIG,
  BehaviorSubject,
  HttpClient,
  Injectable,
  catchError,
  map,
  of,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-OPSATDSU.js";

// src/app/services/auth.service.ts
var AuthService = class _AuthService {
  http;
  currentUserSubject = new BehaviorSubject(this.getStoredUser());
  currentUser$ = this.currentUserSubject.asObservable();
  currentAuthSubject = new BehaviorSubject(this.getStoredAuth());
  currentAuth$ = this.currentAuthSubject.asObservable();
  constructor(http) {
    this.http = http;
    this.checkTokenExpiration();
  }
  login(credentials) {
    return this.http.post(API_CONFIG.auth.login, credentials).pipe(map((response) => {
      console.log("Login API Response:", response);
      if (!response || !response.success) {
        throw new Error(response?.message || "Login failed");
      }
      if (!response.data) {
        console.error("Login response missing data:", response);
        throw new Error("Invalid response from server");
      }
      if (!response.data.token) {
        console.error("Login response missing token:", response.data);
        throw new Error("Token not received from server");
      }
      return response.data;
    }), tap((auth) => {
      console.log("Setting auth data:", auth);
      if (auth && auth.token) {
        this.setAuth(auth, credentials.rememberMe || false);
        this.currentUserSubject.next(auth.user);
        this.currentAuthSubject.next(auth);
        console.log("Auth stored successfully. Token:", auth.token.substring(0, 20) + "...");
      } else {
        console.error("Auth data is invalid:", auth);
        throw new Error("Invalid authentication data");
      }
    }));
  }
  logout() {
    return this.http.post(API_CONFIG.auth.logout, {}).pipe(
      map((response) => response.success),
      tap(() => {
        this.clearAuth();
        this.currentUserSubject.next(null);
        this.currentAuthSubject.next(null);
      }),
      // Catch errors and still clear local state
      catchError((error) => {
        console.log("Backend logout failed (this is OK):", error);
        this.clearAuth();
        this.currentUserSubject.next(null);
        this.currentAuthSubject.next(null);
        return of(true);
      })
    );
  }
  clearAuthLocal() {
    this.clearAuth();
    this.currentUserSubject.next(null);
    this.currentAuthSubject.next(null);
  }
  getCurrentUser() {
    return this.http.get(API_CONFIG.auth.getCurrentUser).pipe(map((response) => response.data), tap((auth) => {
      if (auth) {
        this.currentUserSubject.next(auth.user);
        this.currentAuthSubject.next(auth);
      }
    }));
  }
  forgotPassword(email) {
    return this.http.post(API_CONFIG.auth.forgotPassword, { email }).pipe(map((response) => response.success));
  }
  resetPassword(token, email, newPassword) {
    return this.http.post(API_CONFIG.auth.resetPassword, {
      token,
      email,
      newPassword
    }).pipe(map((response) => response.success));
  }
  isAuthenticated() {
    const token = this.getToken();
    console.log("isAuthenticated check - Token exists:", token ? "Yes" : "No");
    if (!token) {
      console.log("No token found");
      return false;
    }
    const auth = this.getStoredAuth();
    if (auth && auth.expiresAt) {
      const expiresAt = new Date(auth.expiresAt);
      const now = /* @__PURE__ */ new Date();
      console.log("Token expires at:", expiresAt, "Current time:", now);
      if (expiresAt < now) {
        console.log("Token expired, clearing auth");
        this.clearAuth();
        return false;
      }
    }
    console.log("User is authenticated");
    return true;
  }
  getToken() {
    return StorageUtil.getToken();
  }
  getRefreshToken() {
    return StorageUtil.getRefreshToken();
  }
  getUser() {
    return this.currentUserSubject.value || this.getStoredUser();
  }
  getRoles() {
    const auth = this.getStoredAuth();
    return auth?.roles || [];
  }
  getPermissions() {
    const auth = this.getStoredAuth();
    return auth?.permissions || [];
  }
  hasPermission(permission) {
    return this.getPermissions().includes(permission);
  }
  hasRole(role) {
    return this.getRoles().includes(role);
  }
  setAuth(auth, rememberMe) {
    StorageUtil.setToken(auth.token, rememberMe);
    StorageUtil.setRefreshToken(auth.refreshToken, rememberMe);
    StorageUtil.setUser(auth.user, rememberMe);
    StorageUtil.setAuth(auth, rememberMe);
  }
  clearAuth() {
    StorageUtil.removeAuth();
  }
  getStoredUser() {
    return StorageUtil.getUser();
  }
  getStoredAuth() {
    return StorageUtil.getAuth();
  }
  checkTokenExpiration() {
    const auth = this.getStoredAuth();
    if (auth && auth.expiresAt) {
      const expiresAt = new Date(auth.expiresAt);
      if (expiresAt < /* @__PURE__ */ new Date()) {
        this.clearAuth();
        this.currentUserSubject.next(null);
        this.currentAuthSubject.next(null);
      }
    }
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-HVWUQA7X.js.map
