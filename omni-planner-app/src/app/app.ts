import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { filter } from 'rxjs/operators';
import { SidebarComponent, SidebarItem } from './components/sidebar/sidebar';
import { TimerStopwatchHeaderComponent } from './components/timer-stopwatch/timer-stopwatch-header';
import { ThemeService } from './services/theme';
import { ToastContainerComponent } from './components/toast/toast-container';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog';
import { AuthService } from './services/auth.service';
import { LoaderComponent } from './shared/components/loader/loader.component';

export interface Notification {
  id: number;
  type: 'info' | 'success' | 'warning' | 'error' | 'task';
  icon: string;
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  actionUrl?: string;
}

export interface SearchResult {
  id: string;
  type: 'task' | 'budget' | 'report' | 'menu';
  title: string;
  subtitle: string;
  icon: string;
  action: () => void;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, SidebarComponent, TimerStopwatchHeaderComponent, ToastContainerComponent, ConfirmationDialogComponent, LoaderComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent implements OnInit {
  title = 'OmniPlanner';
  sidebarCollapsed = true; // Keep sidebar collapsed by default
  isAuthenticated = false;
  currentView = 'tasks'; // Track current view
  selectedIcon: string = 'layer-group'; // Current selected icon
  showUserDropdown = false; // User profile dropdown state
  dropdownTop = 70; // Dropdown top position (header height + margin)
  dropdownRight = 24; // Dropdown right position

  // User info from auth service
  currentUser: any = null;
  userDisplayName = 'Guest User';
  userRole = 'Guest';

  showNotificationsDropdown = false; // Notifications dropdown state
  notificationsDropdownTop = 70; // Notifications dropdown top position
  notificationsDropdownRight = 24; // Notifications dropdown right position

  showSearch = false; // Search dropdown state
  searchQuery = ''; // Search query
  searchResults: SearchResult[] = []; // Search results

  notifications: Notification[] = [
    {
      id: 1,
      type: 'task',
      icon: 'tasks',
      title: 'Task Overdue',
      message: 'Task "Implement user authentication system" is overdue',
      timestamp: new Date(Date.now() - 3600000), // 1 hour ago
      read: false,
      actionUrl: '/tasks'
    },
    {
      id: 2,
      type: 'warning',
      icon: 'exclamation-triangle',
      title: 'Budget Alert',
      message: 'Budget for October is exceeding the limit',
      timestamp: new Date(Date.now() - 7200000), // 2 hours ago
      read: false,
      actionUrl: '/budget'
    },
    {
      id: 3,
      type: 'info',
      icon: 'info-circle',
      title: 'New Assignment',
      message: 'You have been assigned to a new task',
      timestamp: new Date(Date.now() - 86400000), // 1 day ago
      read: false,
      actionUrl: '/tasks'
    },
    {
      id: 4,
      type: 'success',
      icon: 'check-circle',
      title: 'Task Completed',
      message: 'Task "Setup development environment" has been completed',
      timestamp: new Date(Date.now() - 172800000), // 2 days ago
      read: true,
      actionUrl: '/tasks'
    }
  ];

  get unreadCount(): number {
    return this.notifications.filter(n => !n.read).length;
  }

  sidebarItems: SidebarItem[] = [
    {
      id: 'tasks',
      label: 'Tasks',
      icon: 'tasks',
      route: '/tasks',
      permission: 'tasks.view'
    },
    {
      id: 'tasks2',
      label: 'Periodic Tasks',
      icon: 'tasks',
      route: '/tasks2',
      permission: 'tasks2.view'  // Temporarily commented for testing
    },
    {
      id: 'budget',
      label: 'Budget',
      icon: 'dollar-sign',
      route: '/budget',
      permission: 'budget.view'
    },
    {
      id: 'notes',
      label: 'Notes',
      icon: 'sticky-note',
      route: '/notes',
      permission: 'notes.view'
    },
    {
      id: 'masters',
      label: 'Masters',
      icon: 'database',
      permission: ['categories.view', 'statuses.view', 'priorities.view', 'urls.view', 'credentials.view'],
      children: [
        { id: 'category', label: 'Category', icon: 'tags', route: '/masters/category', permission: 'categories.view' },
        { id: 'status', label: 'Status', icon: 'info-circle', route: '/masters/status', permission: 'statuses.view' },
        { id: 'priority', label: 'Priority', icon: 'exclamation-circle', route: '/masters/priority', permission: 'priorities.view' },
        { id: 'urls-docs', label: 'Urls/Docs', icon: 'link', route: '/masters/urls-docs', permission: 'urls.view' },
        { id: 'credentials', label: 'Credentials', icon: 'key', route: '/masters/credentials', permission: 'credentials.view' }
      ]
    },
    {
      id: 'administration',
      label: 'Administration',
      icon: 'user-shield',
      permission: ['users.view', 'roles.view', 'permissions.view'],
      children: [
        { id: 'users', label: 'Users', icon: 'users', route: '/administration/users', permission: 'users.view' },
        { id: 'roles', label: 'Roles', icon: 'user-tag', route: '/administration/roles', permission: 'roles.view' },
        { id: 'permissions', label: 'Permissions', icon: 'key', route: '/administration/permissions', permission: 'permissions.view' }
      ]
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: 'cog',
      route: '/settings',
      permission: 'settings.view'
    }
  ];

  // Filtered sidebar items - property that only updates when permissions change
  // This prevents sidebar state from being reset on every change detection
  filteredSidebarItems: SidebarItem[] = [];
  private _lastPermissionsString: string = '';

  // Update filtered sidebar items (only called when permissions actually change)
  private updateFilteredSidebarItems(): void {
    // Get current permissions as sorted string for comparison
    const currentPermissions = this.authService.getPermissions().sort().join(',');

    // Only update if permissions have actually changed
    if (currentPermissions !== this._lastPermissionsString) {
      this._lastPermissionsString = currentPermissions;
      this.filteredSidebarItems = this.calculateFilteredItems();
    }
  }

  // Calculate filtered items based on permissions
  // IMPORTANT: Preserves object references when possible to prevent sidebar state reset
  private calculateFilteredItems(): SidebarItem[] {
    const result: SidebarItem[] = [];

    for (const item of this.sidebarItems) {
      // Check if parent item has permission requirement
      if (item.permission) {
        const hasPermission = Array.isArray(item.permission)
          ? item.permission.some(p => this.authService.hasPermission(p))
          : this.authService.hasPermission(item.permission);

        if (!hasPermission) {
          continue; // Skip this item
        }
      }

      // Filter children if they exist
      if (item.children && item.children.length > 0) {
        const filteredChildren = item.children.filter(child => {
          if (child.permission) {
            // Handle both string and string[] permissions
            if (Array.isArray(child.permission)) {
              return child.permission.some(p => this.authService.hasPermission(p));
            } else {
              return this.authService.hasPermission(child.permission);
            }
          }
          return true; // No permission requirement, show it
        });

        // If no children remain after filtering, skip parent
        if (filteredChildren.length === 0) {
          continue;
        }

        // Preserve original item reference if no filtering happened
        if (filteredChildren.length === item.children.length &&
          filteredChildren.every((child, idx) => child === item.children![idx])) {
          // No filtering happened, use original item
          result.push(item);
        } else {
          // Children were filtered, create new object (unavoidable)
          result.push({
            ...item,
            children: filteredChildren
          });
        }
      } else {
        // No children, use original item reference
        result.push(item);
      }
    }

    return result;
  }

  constructor(
    private themeService: ThemeService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Check authentication state
    this.checkAuthentication();

    // Initialize filtered items after auth check
    // Set initial permissions string to trigger first calculation
    this._lastPermissionsString = '';
    this.updateFilteredSidebarItems();

    // Subscribe to auth state changes
    this.authService.currentUser$.subscribe(user => {
      console.log('Auth state changed - User:', user);
      this.currentUser = user;
      this.isAuthenticated = this.authService.isAuthenticated();
      if (user && this.isAuthenticated) {
        this.userDisplayName = `${user.first_name} ${user.last_name}`.trim() || user.username || user.email;
        const auth = this.authService.getStoredAuth();
        if (auth && auth.roles && auth.roles.length > 0) {
          this.userRole = auth.roles[0];
        } else {
          this.userRole = 'User';
        }
      } else {
        this.userDisplayName = 'Guest User';
        this.userRole = 'Guest';
        this.isAuthenticated = false;
      }

      // Update filtered items when auth/permissions change
      this.updateFilteredSidebarItems();
    });

    // Subscribe to router events to update current view
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const url = event.urlAfterRedirects;
        if (url.startsWith('/masters/')) {
          this.currentView = url.split('/masters/')[1];
        } else if (url.startsWith('/administration/')) {
          this.currentView = url.split('/administration/')[1];
        } else if (url.startsWith('/')) {
          this.currentView = url.substring(1) || 'tasks';
        }
      });

    // Initialize theme service
    this.themeService.watchSystemTheme();

    // Load icon preference from localStorage
    const storedIcon = localStorage.getItem('omni-planner-icon');
    if (storedIcon) {
      this.selectedIcon = storedIcon;
    }

    // Listen for icon changes from Settings
    window.addEventListener('icon-changed', ((event: CustomEvent) => {
      if (event.detail && event.detail.icon) {
        this.selectedIcon = event.detail.icon;
      }
    }) as EventListener);

    // Keyboard shortcut for search (Ctrl+K or Cmd+K)
    document.addEventListener('keydown', (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        this.toggleSearch();
      }
      // Close search on Escape
      if (event.key === 'Escape' && this.showSearch) {
        this.closeSearch();
      }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.user-profile-menu') && !target.closest('.user-dropdown')) {
        this.showUserDropdown = false;
      }
      if (!target.closest('.notifications-container') && !target.closest('.notifications-dropdown')) {
        this.showNotificationsDropdown = false;
      }
      if (!target.closest('.search-container') && !target.closest('.search-dropdown')) {
        this.closeSearch();
      }
    });

    // Recalculate dropdown position on window resize
    window.addEventListener('resize', () => {
      if (this.showUserDropdown) {
        this.calculateDropdownPosition();
      }
      if (this.showNotificationsDropdown) {
        this.calculateNotificationsPosition();
      }
    });
  }

  onSidebarItemClick(item: SidebarItem): void {
    if (item.route) {
      this.router.navigate([item.route]);
    } else if (item.id) {
      // Handle nested routes
      if (item.id === 'category') {
        this.router.navigate(['/masters/category']);
      } else if (item.id === 'status') {
        this.router.navigate(['/masters/status']);
      } else if (item.id === 'priority') {
        this.router.navigate(['/masters/priority']);
      } else if (item.id === 'urls-docs') {
        this.router.navigate(['/masters/urls-docs']);
      } else if (item.id === 'credentials') {
        this.router.navigate(['/masters/credentials']);
      } else if (item.id === 'users') {
        this.router.navigate(['/administration/users']);
      } else if (item.id === 'roles') {
        this.router.navigate(['/administration/roles']);
      } else if (item.id === 'permissions') {
        this.router.navigate(['/administration/permissions']);
      } else {
        this.router.navigate([`/${item.id}`]);
      }
    }
  }

  onSidebarToggle(collapsed: boolean): void {
    this.sidebarCollapsed = collapsed;
  }

  toggleSidebar(): void {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

  toggleUserDropdown(): void {
    this.showUserDropdown = !this.showUserDropdown;
    if (this.showUserDropdown) {
      // Calculate dropdown position based on button position
      this.calculateDropdownPosition();
    }
  }

  calculateDropdownPosition(): void {
    // Get the user profile menu button position
    setTimeout(() => {
      const button = document.querySelector('.user-profile-menu') as HTMLElement;
      if (button) {
        const rect = button.getBoundingClientRect();
        // Position dropdown below the button (header height + small margin)
        this.dropdownTop = rect.bottom + 8; // 8px margin below button
        // Align right edge with button right edge, with minimum padding from screen edge
        const dropdownWidth = 220; // Minimum dropdown width
        const screenPadding = 16; // Minimum padding from screen edge
        const rightPosition = window.innerWidth - rect.right;

        // Ensure dropdown doesn't go off-screen
        if (rightPosition + dropdownWidth > window.innerWidth - screenPadding) {
          this.dropdownRight = screenPadding;
        } else {
          this.dropdownRight = Math.max(screenPadding, rightPosition);
        }
      }
    }, 0);
  }

  checkAuthentication(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
    console.log('App init - Is authenticated:', this.isAuthenticated);
    console.log('App init - Token exists:', this.authService.getToken() ? 'Yes' : 'No');

    if (this.isAuthenticated) {
      // Load current user info from stored auth first (faster)
      const storedAuth = this.authService.getStoredAuth();
      if (storedAuth && storedAuth.user) {
        this.currentUser = storedAuth.user;
        this.userDisplayName = `${storedAuth.user.first_name} ${storedAuth.user.last_name}`.trim() || storedAuth.user.username || storedAuth.user.email;
        if (storedAuth.roles && storedAuth.roles.length > 0) {
          this.userRole = storedAuth.roles[0];
        }
      }

      // Then verify with backend (only if authenticated)
      this.authService.getCurrentUser().subscribe({
        next: (auth) => {
          console.log('Current user loaded:', auth);
          if (auth && auth.user) {
            this.currentUser = auth.user;
            this.userDisplayName = `${auth.user.first_name} ${auth.user.last_name}`.trim() || auth.user.username || auth.user.email;
            if (auth.roles && auth.roles.length > 0) {
              this.userRole = auth.roles[0]; // Use first role as display role
            }
          }
        },
        error: (error) => {
          console.error('GetCurrentUser error:', error);
          // Token might be invalid, clear auth locally
          this.authService.clearAuthLocal();
          this.isAuthenticated = false;
          this.currentUser = null;
          this.userDisplayName = 'Guest User';
          this.userRole = 'Guest';
          if (this.router.url !== '/login' && !this.router.url.startsWith('/login')) {
            this.router.navigate(['/login']);
          }
        }
      });
    } else {
      // Not authenticated, redirect to login if not already there
      const currentUrl = this.router.url;
      console.log('Not authenticated, current URL:', currentUrl);
      if (currentUrl !== '/login' && !currentUrl.startsWith('/login')) {
        console.log('Redirecting to login');
        this.router.navigate(['/login']);
      }
    }
  }

  onLogout(): void {
    console.log('Logout initiated');
    this.showUserDropdown = false;

    // Clear local state immediately (don't wait for backend)
    this.authService.clearAuthLocal();
    this.isAuthenticated = false;
    this.currentUser = null;
    this.userDisplayName = 'Guest User';
    this.userRole = 'Guest';

    // Navigate to login immediately
    this.router.navigate(['/login']).then(() => {
      // Optionally call backend logout (but don't wait for it)
      // This is fire-and-forget since we've already cleared local state
      this.authService.logout().subscribe({
        next: () => console.log('Backend logout successful'),
        error: (error) => console.log('Backend logout failed (expected if token already cleared):', error)
      });
    });
  }

  onProfileClick(): void {
    this.showUserDropdown = false;
    // Navigate to profile page or show profile modal
    console.log('Profile clicked');
  }

  onSettingsClick(): void {
    this.showUserDropdown = false;
    this.router.navigate(['/settings']);
  }

  toggleNotificationsDropdown(): void {
    this.showNotificationsDropdown = !this.showNotificationsDropdown;
    if (this.showNotificationsDropdown) {
      // Calculate dropdown position based on button position
      this.calculateNotificationsPosition();
    }
  }

  calculateNotificationsPosition(): void {
    // Get the notifications button position
    setTimeout(() => {
      const button = document.querySelector('.notifications-btn') as HTMLElement;
      if (button) {
        const rect = button.getBoundingClientRect();
        // Position dropdown below the button (header height + small margin)
        this.notificationsDropdownTop = rect.bottom + 8; // 8px margin below button
        // Align right edge with button right edge, with minimum padding from screen edge
        const dropdownWidth = 500; // Dropdown width
        const screenPadding = 16; // Minimum padding from screen edge
        const rightPosition = window.innerWidth - rect.right;

        // Ensure dropdown doesn't go off-screen
        if (rightPosition + dropdownWidth > window.innerWidth - screenPadding) {
          this.notificationsDropdownRight = screenPadding;
        } else {
          this.notificationsDropdownRight = Math.max(screenPadding, rightPosition - 140); // Adjust for dropdown width
        }
      }
    }, 0);
  }

  onNotificationClick(notification: Notification): void {
    if (!notification.read) {
      this.markAsRead(notification);
    }
    // Navigate to the action URL if available
    if (notification.actionUrl) {
      this.currentView = notification.actionUrl.substring(1); // Remove leading slash
      this.showNotificationsDropdown = false;
    }
  }

  markAsRead(notification: Notification): void {
    notification.read = true;
    // Here you could also save to backend
  }

  markAllAsRead(): void {
    this.notifications.forEach(n => n.read = true);
    // Here you could also save to backend
  }

  removeNotification(notification: Notification): void {
    const index = this.notifications.findIndex(n => n.id === notification.id);
    if (index > -1) {
      this.notifications.splice(index, 1);
    }
    // Here you could also remove from backend
  }

  viewAllNotifications(): void {
    this.currentView = 'notifications'; // Assuming you have a notifications page
    this.showNotificationsDropdown = false;
    // Or you could show a modal with all notifications
  }

  getTimeAgo(timestamp: Date): string {
    const now = new Date();
    const diff = now.getTime() - timestamp.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) {
      return 'Just now';
    } else if (minutes < 60) {
      return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
    } else if (hours < 24) {
      return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
    } else if (days < 7) {
      return `${days} ${days === 1 ? 'day' : 'days'} ago`;
    } else {
      return timestamp.toLocaleDateString();
    }
  }

  toggleSearch(): void {
    this.showSearch = !this.showSearch;
    if (!this.showSearch) {
      this.searchQuery = '';
      this.searchResults = [];
    }
  }

  closeSearch(): void {
    this.showSearch = false;
    this.searchQuery = '';
    this.searchResults = [];
  }

  onSearchInput(): void {
    if (!this.searchQuery.trim()) {
      this.searchResults = [];
      return;
    }

    const query = this.searchQuery.toLowerCase().trim();
    const results: SearchResult[] = [];

    // Search in menu items
    this.sidebarItems.forEach(item => {
      if (item.label.toLowerCase().includes(query)) {
        results.push({
          id: item.id,
          type: 'menu',
          title: item.label,
          subtitle: `Navigate to ${item.label}`,
          icon: item.icon,
          action: () => {
            this.currentView = item.id;
            this.closeSearch();
          }
        });
      }
    });

    // Add common searches
    if (query.includes('task') || query.includes('todo')) {
      results.unshift({
        id: 'tasks-menu',
        type: 'menu',
        title: 'Tasks Management',
        subtitle: 'View and manage all tasks',
        icon: 'tasks',
        action: () => {
          this.currentView = 'tasks';
          this.closeSearch();
        }
      });
    }

    if (query.includes('budget') || query.includes('money') || query.includes('expense')) {
      results.unshift({
        id: 'budget-menu',
        type: 'menu',
        title: 'Budget Management',
        subtitle: 'View and manage budget',
        icon: 'dollar-sign',
        action: () => {
          this.currentView = 'budget';
          this.closeSearch();
        }
      });
    }

    if (query.includes('setting') || query.includes('preference') || query.includes('config')) {
      results.unshift({
        id: 'settings-menu',
        type: 'menu',
        title: 'Settings',
        subtitle: 'Application settings and preferences',
        icon: 'cog',
        action: () => {
          this.currentView = 'settings';
          this.closeSearch();
        }
      });
    }

    if (query.includes('timer') || query.includes('stopwatch') || query.includes('clock')) {
      results.unshift({
        id: 'timer-menu',
        type: 'menu',
        title: 'Timer & Stopwatch',
        subtitle: 'Use timer or stopwatch',
        icon: 'stopwatch',
        action: () => {
          this.currentView = 'timer';
          this.closeSearch();
        }
      });
    }

    this.searchResults = results.slice(0, 8); // Limit to 8 results
  }

  onSearchResultClick(result: SearchResult): void {
    result.action();
  }

  quickAction(action: string): void {
    switch (action) {
      case 'new-task':
        this.currentView = 'tasks';
        // Could emit event to open new task modal
        break;
      default:
        console.log('Quick action:', action);
    }
  }

  getCurrentMenuName(): string {
    // Special cases for Tasks and Budget
    if (this.currentView === 'tasks') {
      return 'Tasks Management';
    }
    if (this.currentView === 'budget') {
      return 'Budget Management';
    }
    if (this.currentView === 'settings') {
      return 'Settings';
    }
    if (this.currentView === 'timer') {
      return 'Timer & Stopwatch';
    }

    // First, check main menu items
    const mainItem = this.sidebarItems.find(item => item.id === this.currentView);
    if (mainItem) {
      return mainItem.label;
    }

    // If not found in main items, check submenu items
    for (const item of this.sidebarItems) {
      if (item.children) {
        const childItem = item.children.find(child => child.id === this.currentView);
        if (childItem) {
          // Special handling for Masters submenu items
          if (item.id === 'masters') {
            return `${childItem.label} Master`;
          }
          // Special handling for Administration submenu items
          if (item.id === 'administration') {
            return `${childItem.label} Management`;
          }
          return childItem.label;
        }
      }
    }

    // Default fallback
    return this.title;
  }
}
