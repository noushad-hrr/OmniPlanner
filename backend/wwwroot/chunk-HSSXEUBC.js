import {
  StorageUtil
} from "./chunk-XMNU56NZ.js";
import {
  Injectable,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-OPSATDSU.js";

// src/app/services/theme.ts
var ThemeService = class _ThemeService {
  THEME_KEY = "omni-planner-theme";
  DEFAULT_THEME = "dark";
  // Reactive signal for theme state
  currentTheme = signal(this.getStoredTheme(), ...ngDevMode ? [{ debugName: "currentTheme" }] : []);
  constructor() {
    this.initializeTheme();
  }
  /**
   * Initialize theme on service creation
   */
  initializeTheme() {
    const theme = this.getStoredTheme();
    this.applyTheme(theme);
    this.currentTheme.set(theme);
  }
  /**
   * Get stored theme from localStorage or return default
   */
  getStoredTheme() {
    try {
      const stored = StorageUtil.getItem(this.THEME_KEY);
      return stored || this.DEFAULT_THEME;
    } catch {
      return this.DEFAULT_THEME;
    }
  }
  /**
   * Store theme in localStorage
   */
  storeTheme(theme) {
    try {
      StorageUtil.setItem(this.THEME_KEY, theme);
    } catch (error) {
      console.warn("Failed to store theme preference:", error);
    }
  }
  /**
   * Apply theme to document body
   */
  applyTheme(theme) {
    const body = document.body;
    body.classList.remove("theme-dark", "theme-light");
    body.classList.add(`theme-${theme}`);
    this.updateCSSVariables(theme);
  }
  /**
   * Update CSS custom properties based on theme
   */
  updateCSSVariables(theme) {
    const root = document.documentElement;
    if (theme === "dark") {
      root.style.setProperty("--theme-primary-bg", "#1a1a1a");
      root.style.setProperty("--theme-secondary-bg", "#2d2d2d");
      root.style.setProperty("--theme-tertiary-bg", "#3a3a3a");
      root.style.setProperty("--theme-text-primary", "#ffffff");
      root.style.setProperty("--theme-text-secondary", "#e5e5e5");
      root.style.setProperty("--theme-text-muted", "#a3a3a3");
      root.style.setProperty("--theme-border-primary", "#4a4a4a");
      root.style.setProperty("--theme-border-secondary", "#3a3a3a");
    } else {
      root.style.setProperty("--theme-primary-bg", "#ffffff");
      root.style.setProperty("--theme-secondary-bg", "#f8f9fa");
      root.style.setProperty("--theme-tertiary-bg", "#e9ecef");
      root.style.setProperty("--theme-text-primary", "#212529");
      root.style.setProperty("--theme-text-secondary", "#495057");
      root.style.setProperty("--theme-text-muted", "#6c757d");
      root.style.setProperty("--theme-border-primary", "#dee2e6");
      root.style.setProperty("--theme-border-secondary", "#e9ecef");
    }
  }
  /**
   * Toggle between dark and light themes
   */
  toggleTheme() {
    const newTheme = this.currentTheme() === "dark" ? "light" : "dark";
    this.setTheme(newTheme);
  }
  /**
   * Set specific theme
   */
  setTheme(theme) {
    this.applyTheme(theme);
    this.storeTheme(theme);
    this.currentTheme.set(theme);
  }
  /**
   * Get current theme
   */
  getCurrentTheme() {
    return this.currentTheme();
  }
  /**
   * Check if current theme is dark
   */
  isDarkTheme() {
    return this.currentTheme() === "dark";
  }
  /**
   * Check if current theme is light
   */
  isLightTheme() {
    return this.currentTheme() === "light";
  }
  /**
   * Reset theme to default
   */
  resetTheme() {
    this.setTheme(this.DEFAULT_THEME);
  }
  /**
   * Get theme preference from system
   */
  getSystemTheme() {
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return this.DEFAULT_THEME;
  }
  /**
   * Set theme based on system preference
   */
  setSystemTheme() {
    const systemTheme = this.getSystemTheme();
    this.setTheme(systemTheme);
  }
  /**
   * Listen to system theme changes
   */
  watchSystemTheme() {
    if (typeof window !== "undefined" && window.matchMedia) {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      mediaQuery.addEventListener("change", (e) => {
        const storedTheme = this.getStoredTheme();
        if (storedTheme === this.DEFAULT_THEME) {
          this.setTheme(e.matches ? "dark" : "light");
        }
      });
    }
  }
  static \u0275fac = function ThemeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeService, factory: _ThemeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  ThemeService
};
//# sourceMappingURL=chunk-HSSXEUBC.js.map
