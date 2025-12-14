// src/app/shared/constants/app.constants.ts
var APP_CONSTANTS = {
  // Storage keys
  STORAGE_KEYS: {
    TOKEN: "omni-planner-token",
    REFRESH_TOKEN: "omni-planner-refresh-token",
    USER: "omni-planner-user",
    SETTINGS: "omni-planner-settings",
    THEME: "omni-planner-theme"
  },
  // Toast default timeouts (in milliseconds)
  TOAST_TIMEOUTS: {
    SUCCESS: 3e3,
    ERROR: 5e3,
    INFO: 3500,
    WARNING: 4e3
  },
  // Pagination defaults
  PAGINATION: {
    DEFAULT_PAGE_SIZE: 10,
    PAGE_SIZE_OPTIONS: [5, 10, 20, 50, 100]
  },
  // Date formats
  DATE_FORMATS: {
    DISPLAY: "MMM dd, yyyy",
    DISPLAY_WITH_TIME: "MMM dd, yyyy hh:mm a",
    API: "yyyy-MM-dd",
    API_WITH_TIME: "yyyy-MM-dd HH:mm:ss"
  },
  // Validation
  VALIDATION: {
    MIN_PASSWORD_LENGTH: 8,
    MAX_TITLE_LENGTH: 200,
    MAX_DESCRIPTION_LENGTH: 2e3
  }
};

// src/app/shared/utils/storage.util.ts
var StorageUtil = class _StorageUtil {
  /**
   * Get item from localStorage
   */
  static getItem(key) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(`Error getting item from storage: ${key}`, error);
      return null;
    }
  }
  /**
   * Get item from sessionStorage
   */
  static getSessionItem(key) {
    try {
      const item = sessionStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(`Error getting item from session storage: ${key}`, error);
      return null;
    }
  }
  /**
   * Get item from localStorage or sessionStorage (checks localStorage first)
   */
  static getItemFromAnyStorage(key) {
    return this.getItem(key) || this.getSessionItem(key);
  }
  /**
   * Set item to localStorage
   */
  static setItem(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting item to storage: ${key}`, error);
    }
  }
  /**
   * Set item to sessionStorage
   */
  static setSessionItem(key, value) {
    try {
      sessionStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting item to session storage: ${key}`, error);
    }
  }
  /**
   * Remove item from localStorage
   */
  static removeItem(key) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing item from storage: ${key}`, error);
    }
  }
  /**
   * Remove item from sessionStorage
   */
  static removeSessionItem(key) {
    try {
      sessionStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing item from session storage: ${key}`, error);
    }
  }
  /**
   * Remove item from both localStorage and sessionStorage
   */
  static removeItemFromAllStorage(key) {
    this.removeItem(key);
    this.removeSessionItem(key);
  }
  /**
   * Clear all localStorage
   */
  static clear() {
    try {
      localStorage.clear();
    } catch (error) {
      console.error("Error clearing storage", error);
    }
  }
  /**
   * Clear all sessionStorage
   */
  static clearSession() {
    try {
      sessionStorage.clear();
    } catch (error) {
      console.error("Error clearing session storage", error);
    }
  }
  /**
   * Get token from storage (checks both localStorage and sessionStorage)
   */
  static getToken() {
    const token = _StorageUtil.getItem(APP_CONSTANTS.STORAGE_KEYS.TOKEN) || _StorageUtil.getSessionItem(APP_CONSTANTS.STORAGE_KEYS.TOKEN);
    return token;
  }
  /**
   * Set token to storage (localStorage or sessionStorage based on rememberMe)
   */
  static setToken(token, rememberMe = true) {
    if (rememberMe) {
      _StorageUtil.setItem(APP_CONSTANTS.STORAGE_KEYS.TOKEN, token);
    } else {
      _StorageUtil.setSessionItem(APP_CONSTANTS.STORAGE_KEYS.TOKEN, token);
    }
  }
  /**
   * Remove token from storage (both localStorage and sessionStorage)
   */
  static removeToken() {
    _StorageUtil.removeItemFromAllStorage(APP_CONSTANTS.STORAGE_KEYS.TOKEN);
  }
  /**
   * Get refresh token from storage
   */
  static getRefreshToken() {
    return _StorageUtil.getItem(APP_CONSTANTS.STORAGE_KEYS.REFRESH_TOKEN) || _StorageUtil.getSessionItem(APP_CONSTANTS.STORAGE_KEYS.REFRESH_TOKEN);
  }
  /**
   * Set refresh token to storage
   */
  static setRefreshToken(token, rememberMe = true) {
    if (rememberMe) {
      _StorageUtil.setItem(APP_CONSTANTS.STORAGE_KEYS.REFRESH_TOKEN, token);
    } else {
      _StorageUtil.setSessionItem(APP_CONSTANTS.STORAGE_KEYS.REFRESH_TOKEN, token);
    }
  }
  /**
   * Remove refresh token from storage
   */
  static removeRefreshToken() {
    _StorageUtil.removeItemFromAllStorage(APP_CONSTANTS.STORAGE_KEYS.REFRESH_TOKEN);
  }
  /**
   * Get user from storage
   */
  static getUser() {
    return _StorageUtil.getItemFromAnyStorage(APP_CONSTANTS.STORAGE_KEYS.USER);
  }
  /**
   * Set user to storage
   */
  static setUser(user, rememberMe = true) {
    if (rememberMe) {
      _StorageUtil.setItem(APP_CONSTANTS.STORAGE_KEYS.USER, user);
    } else {
      _StorageUtil.setSessionItem(APP_CONSTANTS.STORAGE_KEYS.USER, user);
    }
  }
  /**
   * Remove user from storage
   */
  static removeUser() {
    _StorageUtil.removeItemFromAllStorage(APP_CONSTANTS.STORAGE_KEYS.USER);
  }
  /**
   * Set auth data (all auth-related data at once)
   */
  static setAuth(auth, rememberMe = true) {
    if (rememberMe) {
      _StorageUtil.setItem("omni-planner-auth", auth);
    } else {
      _StorageUtil.setSessionItem("omni-planner-auth", auth);
    }
  }
  /**
   * Get auth data
   */
  static getAuth() {
    return _StorageUtil.getItemFromAnyStorage("omni-planner-auth");
  }
  /**
   * Remove auth data
   */
  static removeAuth() {
    _StorageUtil.removeItemFromAllStorage("omni-planner-auth");
    _StorageUtil.removeToken();
    _StorageUtil.removeRefreshToken();
    _StorageUtil.removeUser();
  }
};

export {
  StorageUtil
};
//# sourceMappingURL=chunk-XMNU56NZ.js.map
