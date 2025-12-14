import {
  StorageUtil
} from "./chunk-XMNU56NZ.js";
import {
  API_CONFIG,
  HttpClient,
  HttpHeaders,
  Injectable,
  catchError,
  map,
  of,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-OPSATDSU.js";

// src/app/services/settings.service.ts
var SettingsService = class _SettingsService {
  http;
  apiUrl = `${API_CONFIG.baseUrl}/Settings`;
  constructor(http) {
    this.http = http;
  }
  /**
   * Get user preferences from backend
   */
  getUserPreferences() {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    return this.http.get(`${this.apiUrl}/GetUserPreferences`, { headers }).pipe(map((response) => response.data), catchError((error) => {
      console.warn("API not available, using localStorage:", error);
      return of(this.getFromLocalStorage());
    }));
  }
  /**
   * Save user preferences to backend
   */
  saveUserPreferences(preferences) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    return this.http.post(`${this.apiUrl}/SaveUserPreferences`, preferences, { headers }).pipe(map((response) => response), catchError((error) => {
      console.warn("API not available, saving to localStorage:", error);
      this.saveToLocalStorage(preferences);
      return of({ success: true });
    }));
  }
  /**
   * Get available application themes
   */
  getAppThemes() {
    return this.http.get(`${this.apiUrl}/GetAppThemes`).pipe(map((response) => response.data), catchError(() => {
      return of([
        { id: "theme1", name: "Theme 1", description: "Default dark theme", isAvailable: true }
      ]);
    }));
  }
  /**
   * Get available icon themes
   */
  getIconThemes() {
    return this.http.get(`${this.apiUrl}/GetIconThemes`).pipe(map((response) => response.data), catchError(() => {
      return of([
        { id: "default", name: "Default Icons", description: "Standard FontAwesome icons", isDefault: true }
      ]);
    }));
  }
  /**
   * Fallback: Get from localStorage
   */
  getFromLocalStorage() {
    try {
      const stored = StorageUtil.getItem("omni-planner-preferences");
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (error) {
      console.error("Error reading from localStorage:", error);
    }
    return null;
  }
  /**
   * Fallback: Save to localStorage
   */
  saveToLocalStorage(preferences) {
    try {
      StorageUtil.setItem("omni-planner-preferences", preferences);
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }
  static \u0275fac = function SettingsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingsService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SettingsService, factory: _SettingsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  SettingsService
};
//# sourceMappingURL=chunk-M3IPD7GB.js.map
