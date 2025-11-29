import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThemeService, Theme } from '../../services/theme';
import { SettingsService } from '../../services/settings.service';

export interface AppTheme {
  id: string;
  name: string;
  description: string;
  preview: string;
  isAvailable: boolean;
}

export interface IconTheme {
  id: string;
  name: string;
  description: string;
  icon: string;
  isDefault: boolean;
}

export interface ControlBarTheme {
  id: string;
  name: string;
  description: string;
  preview: string;
  isAvailable: boolean;
  // Future: Add theme configuration properties here
  // colors?: { primary: string; secondary: string; };
  // styles?: { borderRadius: string; padding: string; };
}

export interface UserPreferences {
  userId?: number;
  theme: Theme;
  appThemeId: string;
  iconThemeId: string;
  iconName: string;
  controlBarThemeId: string;
  sidebarCollapsed: boolean;
  language?: string;
  timezone?: string;
}

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './settings.html',
  styleUrls: ['./settings.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {
  currentTheme: Theme = 'dark';
  selectedAppTheme: string = 'theme1';
  selectedIconTheme: string = 'default';
  selectedIcon: string = 'layer-group';
  selectedControlBarTheme: string = 'dark';
  sidebarCollapsed: boolean = true;
  
  appThemes: AppTheme[] = [
    {
      id: 'theme1',
      name: 'Theme 1',
      description: 'Default dark theme (Development in progress)',
      preview: 'Dark gradient with blue accents',
      isAvailable: true
    }
    // Add more themes as they're developed
  ];
  
  iconThemes: IconTheme[] = [
    {
      id: 'default',
      name: 'Default Icons',
      description: 'Standard FontAwesome icons',
      icon: 'layer-group',
      isDefault: true
    }
  ];
  
  controlBarThemes: ControlBarTheme[] = [
    {
      id: 'standard',
      name: 'Purple Gradient Theme',
      description: 'Modern purple gradient with glassmorphism effects',
      preview: 'Purple gradient with smooth animations and modern icons',
      isAvailable: true
    },
    {
      id: 'dark',
      name: 'Dark Theme',
      description: 'Standard professional dark theme with clean, minimal design',
      preview: 'Clean dark background with subtle borders and standard button styling',
      isAvailable: true
    },
    {
      id: 'chrome-windows11',
      name: 'Chrome Theme - Windows 11',
      description: 'Windows 11 style with rounded corners and modern design',
      preview: 'Windows 11 inspired design with rounded elements',
      isAvailable: true
    }
  ];
  
  iconOptions = [
    { name: 'layer-group', description: 'Multiple planning layers - Currently used' },
    { name: 'project-diagram', description: 'Network/project structure - Best for comprehensive planning' },
    { name: 'sitemap', description: 'Hierarchical structure - Great for organizational planning' },
    { name: 'cubes', description: 'Interconnected modules - Represents modular planning' },
    { name: 'boxes', description: 'Organized containers - Clean, modern look' },
    { name: 'cube', description: 'Single 3D planning element' },
    { name: 'object-group', description: 'Grouped planning elements' },
    { name: 'stream', description: 'Continuous planning flow' },
    { name: 'network-wired', description: 'Connected planning network' },
    { name: 'shapes', description: 'Multiple planning shapes/types' }
  ];
  
  preferences: UserPreferences = {
    theme: 'dark',
    appThemeId: 'theme1',
    iconThemeId: 'default',
    iconName: 'layer-group',
    controlBarThemeId: 'dark',
    sidebarCollapsed: true
  };
  
  isLoading = false;
  saveSuccess = false;
  notificationEnabled = false;
  soundEnabled = true;
  
  constructor(
    private themeService: ThemeService,
    private settingsService: SettingsService
  ) {}
  
  ngOnInit(): void {
    this.loadPreferences();
  }
  
  ngOnDestroy(): void {
    // Cleanup if needed
  }
  
  loadPreferences(): void {
    this.isLoading = true;
    this.settingsService.getUserPreferences().subscribe({
      next: (prefs) => {
        if (prefs) {
          this.preferences = prefs;
          this.currentTheme = prefs.theme;
          this.selectedAppTheme = prefs.appThemeId;
          this.selectedIconTheme = prefs.iconThemeId;
          this.selectedIcon = prefs.iconName;
          this.selectedControlBarTheme = prefs.controlBarThemeId || 'dark';
          this.sidebarCollapsed = prefs.sidebarCollapsed || false;
          
          // Apply loaded preferences
          this.themeService.setTheme(prefs.theme);
          this.applyIcon(prefs.iconName);
        } else {
          // Load from localStorage
          this.loadFromLocalStorage();
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading preferences:', error);
        this.loadFromLocalStorage();
        this.isLoading = false;
      }
    });
  }
  
  loadFromLocalStorage(): void {
    const storedIcon = localStorage.getItem('omni-planner-icon');
    if (storedIcon) {
      this.selectedIcon = storedIcon;
      this.preferences.iconName = storedIcon;
    }
    
    this.currentTheme = this.themeService.getCurrentTheme();
    this.preferences.theme = this.currentTheme;
  }
  
  onThemeChange(theme: Theme): void {
    this.currentTheme = theme;
    this.preferences.theme = theme;
    this.themeService.setTheme(theme);
    this.savePreferences();
  }
  
  onAppThemeChange(themeId: string): void {
    this.selectedAppTheme = themeId;
    this.preferences.appThemeId = themeId;
    // Apply theme when implemented
    this.savePreferences();
  }
  
  onIconThemeChange(themeId: string): void {
    this.selectedIconTheme = themeId;
    this.preferences.iconThemeId = themeId;
    this.savePreferences();
  }
  
  onIconSelect(iconName: string): void {
    this.selectedIcon = iconName;
    this.preferences.iconName = iconName;
    this.applyIcon(iconName);
    this.savePreferences();
  }
  
  onControlBarThemeChange(themeId: string): void {
    this.selectedControlBarTheme = themeId;
    this.preferences.controlBarThemeId = themeId;
    // Dispatch event to apply theme immediately
    window.dispatchEvent(new CustomEvent('control-bar-theme-changed', { detail: { theme: themeId } }));
    this.savePreferences();
  }
  
  applyIcon(iconName: string): void {
    // Emit event or use service to update icon in header
    localStorage.setItem('omni-planner-icon', iconName);
    // Dispatch custom event that app component can listen to
    window.dispatchEvent(new CustomEvent('icon-changed', { detail: { icon: iconName } }));
  }
  
  onSidebarCollapseChange(collapsed: boolean): void {
    this.sidebarCollapsed = collapsed;
    this.preferences.sidebarCollapsed = collapsed;
    this.savePreferences();
  }
  
  savePreferences(): void {
    this.isLoading = true;
    this.settingsService.saveUserPreferences(this.preferences).subscribe({
      next: (result) => {
        this.saveSuccess = true;
        setTimeout(() => {
          this.saveSuccess = false;
        }, 3000);
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error saving preferences:', error);
        // Fallback to localStorage
        this.saveToLocalStorage();
        this.isLoading = false;
      }
    });
  }
  
  saveToLocalStorage(): void {
    try {
      localStorage.setItem('omni-planner-preferences', JSON.stringify(this.preferences));
      this.saveSuccess = true;
      setTimeout(() => {
        this.saveSuccess = false;
      }, 3000);
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }
  
  resetToDefaults(): void {
    this.currentTheme = 'dark';
    this.selectedAppTheme = 'theme1';
    this.selectedIconTheme = 'default';
    this.selectedIcon = 'layer-group';
    this.selectedControlBarTheme = 'dark';
    this.sidebarCollapsed = true;
    this.notificationEnabled = false;
    this.soundEnabled = true;
    
    this.preferences = {
      theme: 'dark',
      appThemeId: 'theme1',
      iconThemeId: 'default',
      iconName: 'layer-group',
      controlBarThemeId: 'dark',
      sidebarCollapsed: true
    };
    
    this.themeService.setTheme('dark');
    this.applyIcon('layer-group');
    this.savePreferences();
  }

  onNotificationToggle(): void {
    if (this.notificationEnabled && 'Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission().then(permission => {
        if (permission !== 'granted') {
          this.notificationEnabled = false;
        }
      });
    }
    this.savePreferences();
  }

  onSoundToggle(): void {
    this.savePreferences();
  }

  exportData(): void {
    const data = {
      preferences: this.preferences,
      timestamp: new Date().toISOString(),
      version: '1.0.0'
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `omni-planner-export-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    window.URL.revokeObjectURL(url);
  }

  clearLocalStorage(): void {
    if (confirm('Are you sure you want to clear all local storage data? This action cannot be undone.')) {
      localStorage.clear();
      sessionStorage.clear();
      alert('Local storage cleared. Please refresh the page.');
      window.location.reload();
    }
  }
}

