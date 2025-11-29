import { Injectable, signal } from '@angular/core';
import { StorageUtil } from '../shared/utils/storage.util';

export type Theme = 'dark' | 'light';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'omni-planner-theme';
  private readonly DEFAULT_THEME: Theme = 'dark';

  // Reactive signal for theme state
  public currentTheme = signal<Theme>(this.getStoredTheme());

  constructor() {
    this.initializeTheme();
  }

  /**
   * Initialize theme on service creation
   */
  private initializeTheme(): void {
    const theme = this.getStoredTheme();
    this.applyTheme(theme);
    this.currentTheme.set(theme);
  }

  /**
   * Get stored theme from localStorage or return default
   */
  private getStoredTheme(): Theme {
    try {
      const stored = StorageUtil.getItem<string>(this.THEME_KEY);
      return (stored as Theme) || this.DEFAULT_THEME;
    } catch {
      return this.DEFAULT_THEME;
    }
  }

  /**
   * Store theme in localStorage
   */
  private storeTheme(theme: Theme): void {
    try {
      StorageUtil.setItem(this.THEME_KEY, theme);
    } catch (error) {
      console.warn('Failed to store theme preference:', error);
    }
  }

  /**
   * Apply theme to document body
   */
  private applyTheme(theme: Theme): void {
    const body = document.body;
    
    // Remove existing theme classes
    body.classList.remove('theme-dark', 'theme-light');
    
    // Add new theme class
    body.classList.add(`theme-${theme}`);
    
    // Update CSS custom properties for dynamic theming
    this.updateCSSVariables(theme);
  }

  /**
   * Update CSS custom properties based on theme
   */
  private updateCSSVariables(theme: Theme): void {
    const root = document.documentElement;
    
    if (theme === 'dark') {
      // Dark theme variables (already defined in CSS)
      root.style.setProperty('--theme-primary-bg', '#1a1a1a');
      root.style.setProperty('--theme-secondary-bg', '#2d2d2d');
      root.style.setProperty('--theme-tertiary-bg', '#3a3a3a');
      root.style.setProperty('--theme-text-primary', '#ffffff');
      root.style.setProperty('--theme-text-secondary', '#e5e5e5');
      root.style.setProperty('--theme-text-muted', '#a3a3a3');
      root.style.setProperty('--theme-border-primary', '#4a4a4a');
      root.style.setProperty('--theme-border-secondary', '#3a3a3a');
    } else {
      // Light theme variables
      root.style.setProperty('--theme-primary-bg', '#ffffff');
      root.style.setProperty('--theme-secondary-bg', '#f8f9fa');
      root.style.setProperty('--theme-tertiary-bg', '#e9ecef');
      root.style.setProperty('--theme-text-primary', '#212529');
      root.style.setProperty('--theme-text-secondary', '#495057');
      root.style.setProperty('--theme-text-muted', '#6c757d');
      root.style.setProperty('--theme-border-primary', '#dee2e6');
      root.style.setProperty('--theme-border-secondary', '#e9ecef');
    }
  }

  /**
   * Toggle between dark and light themes
   */
  public toggleTheme(): void {
    const newTheme: Theme = this.currentTheme() === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }

  /**
   * Set specific theme
   */
  public setTheme(theme: Theme): void {
    this.applyTheme(theme);
    this.storeTheme(theme);
    this.currentTheme.set(theme);
  }

  /**
   * Get current theme
   */
  public getCurrentTheme(): Theme {
    return this.currentTheme();
  }

  /**
   * Check if current theme is dark
   */
  public isDarkTheme(): boolean {
    return this.currentTheme() === 'dark';
  }

  /**
   * Check if current theme is light
   */
  public isLightTheme(): boolean {
    return this.currentTheme() === 'light';
  }

  /**
   * Reset theme to default
   */
  public resetTheme(): void {
    this.setTheme(this.DEFAULT_THEME);
  }

  /**
   * Get theme preference from system
   */
  public getSystemTheme(): Theme {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return this.DEFAULT_THEME;
  }

  /**
   * Set theme based on system preference
   */
  public setSystemTheme(): void {
    const systemTheme = this.getSystemTheme();
    this.setTheme(systemTheme);
  }

  /**
   * Listen to system theme changes
   */
  public watchSystemTheme(): void {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      mediaQuery.addEventListener('change', (e) => {
        // Only auto-switch if user hasn't manually set a preference
        const storedTheme = this.getStoredTheme();
        if (storedTheme === this.DEFAULT_THEME) {
          this.setTheme(e.matches ? 'dark' : 'light');
        }
      });
    }
  }
}
