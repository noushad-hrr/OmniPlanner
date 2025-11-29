// Storage utility functions - Centralized localStorage/sessionStorage management
import { APP_CONSTANTS } from '../constants/app.constants';

export class StorageUtil {
  /**
   * Get item from localStorage
   */
  static getItem<T>(key: string): T | null {
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
  static getSessionItem<T>(key: string): T | null {
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
  static getItemFromAnyStorage<T>(key: string): T | null {
    return this.getItem<T>(key) || this.getSessionItem<T>(key);
  }

  /**
   * Set item to localStorage
   */
  static setItem<T>(key: string, value: T): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting item to storage: ${key}`, error);
    }
  }

  /**
   * Set item to sessionStorage
   */
  static setSessionItem<T>(key: string, value: T): void {
    try {
      sessionStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting item to session storage: ${key}`, error);
    }
  }

  /**
   * Remove item from localStorage
   */
  static removeItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing item from storage: ${key}`, error);
    }
  }

  /**
   * Remove item from sessionStorage
   */
  static removeSessionItem(key: string): void {
    try {
      sessionStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing item from session storage: ${key}`, error);
    }
  }

  /**
   * Remove item from both localStorage and sessionStorage
   */
  static removeItemFromAllStorage(key: string): void {
    this.removeItem(key);
    this.removeSessionItem(key);
  }

  /**
   * Clear all localStorage
   */
  static clear(): void {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Error clearing storage', error);
    }
  }

  /**
   * Clear all sessionStorage
   */
  static clearSession(): void {
    try {
      sessionStorage.clear();
    } catch (error) {
      console.error('Error clearing session storage', error);
    }
  }

  /**
   * Get token from storage (checks both localStorage and sessionStorage)
   */
  static getToken(): string | null {
    const token = StorageUtil.getItem<string>(APP_CONSTANTS.STORAGE_KEYS.TOKEN) || 
                  StorageUtil.getSessionItem<string>(APP_CONSTANTS.STORAGE_KEYS.TOKEN);
    return token;
  }

  /**
   * Set token to storage (localStorage or sessionStorage based on rememberMe)
   */
  static setToken(token: string, rememberMe: boolean = true): void {
    if (rememberMe) {
      StorageUtil.setItem(APP_CONSTANTS.STORAGE_KEYS.TOKEN, token);
    } else {
      StorageUtil.setSessionItem(APP_CONSTANTS.STORAGE_KEYS.TOKEN, token);
    }
  }

  /**
   * Remove token from storage (both localStorage and sessionStorage)
   */
  static removeToken(): void {
    StorageUtil.removeItemFromAllStorage(APP_CONSTANTS.STORAGE_KEYS.TOKEN);
  }

  /**
   * Get refresh token from storage
   */
  static getRefreshToken(): string | null {
    return StorageUtil.getItem<string>(APP_CONSTANTS.STORAGE_KEYS.REFRESH_TOKEN) ||
           StorageUtil.getSessionItem<string>(APP_CONSTANTS.STORAGE_KEYS.REFRESH_TOKEN);
  }

  /**
   * Set refresh token to storage
   */
  static setRefreshToken(token: string, rememberMe: boolean = true): void {
    if (rememberMe) {
      StorageUtil.setItem(APP_CONSTANTS.STORAGE_KEYS.REFRESH_TOKEN, token);
    } else {
      StorageUtil.setSessionItem(APP_CONSTANTS.STORAGE_KEYS.REFRESH_TOKEN, token);
    }
  }

  /**
   * Remove refresh token from storage
   */
  static removeRefreshToken(): void {
    StorageUtil.removeItemFromAllStorage(APP_CONSTANTS.STORAGE_KEYS.REFRESH_TOKEN);
  }

  /**
   * Get user from storage
   */
  static getUser<T>(): T | null {
    return StorageUtil.getItemFromAnyStorage<T>(APP_CONSTANTS.STORAGE_KEYS.USER);
  }

  /**
   * Set user to storage
   */
  static setUser<T>(user: T, rememberMe: boolean = true): void {
    if (rememberMe) {
      StorageUtil.setItem(APP_CONSTANTS.STORAGE_KEYS.USER, user);
    } else {
      StorageUtil.setSessionItem(APP_CONSTANTS.STORAGE_KEYS.USER, user);
    }
  }

  /**
   * Remove user from storage
   */
  static removeUser(): void {
    StorageUtil.removeItemFromAllStorage(APP_CONSTANTS.STORAGE_KEYS.USER);
  }

  /**
   * Set auth data (all auth-related data at once)
   */
  static setAuth<T>(auth: T, rememberMe: boolean = true): void {
    if (rememberMe) {
      StorageUtil.setItem('omni-planner-auth', auth);
    } else {
      StorageUtil.setSessionItem('omni-planner-auth', auth);
    }
  }

  /**
   * Get auth data
   */
  static getAuth<T>(): T | null {
    return StorageUtil.getItemFromAnyStorage<T>('omni-planner-auth');
  }

  /**
   * Remove auth data
   */
  static removeAuth(): void {
    StorageUtil.removeItemFromAllStorage('omni-planner-auth');
    StorageUtil.removeToken();
    StorageUtil.removeRefreshToken();
    StorageUtil.removeUser();
  }
}

