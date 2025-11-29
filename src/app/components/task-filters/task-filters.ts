import { Component, Input, Output, EventEmitter, OnInit, HostListener, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface FilterOptions {
  categories: string[];
  statuses: string[];
  priorities: string[];
  dateRanges: string[];
  categoryMasters?: Array<{ category: string; icon: string }>;
  statusMasters?: Array<{ status: string; color: string }>;
  priorityMasters?: Array<{ priority: string; color: string }>;
}

export interface FilterState {
  category: string | string[];
  status: string | string[];
  priority: string | string[];
  important?: string; // 'all', 'starred', 'unstarred'
  startDate: string;
  endDate: string;
  searchQuery: string;
}

@Component({
  selector: 'app-task-filters',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-filters.html',
  styleUrls: ['./task-filters.scss']
})
export class TaskFiltersComponent implements OnInit, AfterViewInit {
  @Input() filterOptions: FilterOptions = {
    categories: [],
    statuses: [],
    priorities: [],
    dateRanges: [],
    categoryMasters: [],
    statusMasters: [],
    priorityMasters: []
  };

  @Input() initialFilters: Partial<FilterState> = {};
  @Input() isStatsPanelCollapsed: boolean = false;
  @Input() controlBarTheme: string = 'dark'; // Control bar theme: 'standard', 'dark', 'chrome-windows11'

  @Output() filtersChanged = new EventEmitter<FilterState>();
  @Output() filtersCleared = new EventEmitter<void>();
  @Output() viewModeChanged = new EventEmitter<string>();
  @Output() addTaskClicked = new EventEmitter<void>();
  @Output() statsPanelToggled = new EventEmitter<void>();

  filters: FilterState = {
    category: [],
    status: [],
    priority: [],
    important: 'all', // Default to 'all'
    startDate: '',
    endDate: '',
    searchQuery: ''
  };

  isExpanded: boolean = false;
  viewMode: string = 'list';
  isAddingTask: boolean = false;
  taskAddedSuccessfully: boolean = false;
  showAttention: boolean = false;
  
  // Dropdown states
  categoryDropdownOpen: boolean = false;
  statusDropdownOpen: boolean = false;
  priorityDropdownOpen: boolean = false;
  importantDropdownOpen: boolean = false;

  // Dropdown position styles
  categoryDropdownStyle: any = {};
  statusDropdownStyle: any = {};
  priorityDropdownStyle: any = {};
  importantDropdownStyle: any = {};

  // Date validation
  dateValidationError: string = '';
  hasDateValidationError: boolean = false;

  // Quick filter presets
  quickFilters = [
    { id: 'today', label: 'Today', icon: 'fa-crosshairs', color: '#3B82F6' }
  ];

  activeQuickFilter: string | null = 'today'; // Today selected by default
  selectedDate: Date = new Date(); // Track the currently selected date for navigation

  ngOnInit(): void {
    // Initialize with provided filters
    this.filters = { ...this.filters, ...this.initialFilters };
    this.initializeFilterOptions();
    // Initialize Today filter by default
    this.applyQuickFilter('today');
  }

  ngAfterViewInit(): void {
    // Position calculations will be done when dropdowns open
  }

  initializeFilterOptions(): void {
    // All data should come from master data - no hardcoded fallbacks
    // If filterOptions are empty, they should be populated by the parent component from master data
    if (this.filterOptions.dateRanges.length === 0) {
      this.filterOptions.dateRanges = ['today', 'tomorrow', 'this-week', 'next-week', 'this-month', 'overdue'];
    }
  }

  onFilterChange(): void {
    this.validateDates();
    this.filtersChanged.emit(this.filters);
  }

  validateDates(): void {
    this.dateValidationError = '';
    this.hasDateValidationError = false;

    // Only validate if both dates are provided
    if (!this.filters.startDate || !this.filters.endDate) {
      return;
    }

    const startDate = new Date(this.filters.startDate);
    const endDate = new Date(this.filters.endDate);

    // Validate that start date is not greater than end date
    if (startDate > endDate) {
      this.dateValidationError = 'Start date cannot be greater than end date';
      this.hasDateValidationError = true;
      return;
    }
  }

  onStartDateChange(): void {
    // Validate when start date changes
    this.validateDates();
    // Always emit filter change to update UI, but validation error will be shown
    this.filtersChanged.emit(this.filters);
  }

  onEndDateChange(): void {
    // Validate when end date changes
    this.validateDates();
    // Always emit filter change to update UI, but validation error will be shown
    this.filtersChanged.emit(this.filters);
  }

  onQuickFilterClick(filterId: string): void {
    if (this.activeQuickFilter === filterId) {
      this.clearQuickFilter();
      return;
    }

    this.activeQuickFilter = filterId;
    this.applyQuickFilter(filterId);
  }

  applyQuickFilter(filterId: string): void {
    // Reset all filters first
    this.resetFilters();

    switch (filterId) {
      case 'today':
        this.selectedDate = new Date(); // Set to today
        const todayStr = this.formatDateToLocalString(this.selectedDate);
        this.filters.startDate = todayStr;
        this.filters.endDate = todayStr;
        break;
    }

    this.onFilterChange();
  }

  // Navigate to previous day
  goToPreviousDay(): void {
    const previousDay = new Date(this.selectedDate);
    previousDay.setDate(previousDay.getDate() - 1);
    this.selectedDate = previousDay;
    this.applyDateFilter(this.selectedDate);
  }

  // Navigate to next day
  goToNextDay(): void {
    const nextDay = new Date(this.selectedDate);
    nextDay.setDate(nextDay.getDate() + 1);
    this.selectedDate = nextDay;
    this.applyDateFilter(this.selectedDate);
  }

  // Apply date filter for the selected date
  private applyDateFilter(date: Date): void {
    const dateStr = this.formatDateToLocalString(date);
    this.filters.startDate = dateStr;
    this.filters.endDate = dateStr;
    this.activeQuickFilter = 'today'; // Keep the filter active when navigating
    this.onFilterChange();
  }

  // Format date to local date string (YYYY-MM-DD) using local timezone
  private formatDateToLocalString(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  // Get formatted date for display (optional - for showing current date)
  getSelectedDateLabel(): string {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selected = new Date(this.selectedDate);
    selected.setHours(0, 0, 0, 0);
    
    if (selected.getTime() === today.getTime()) {
      return 'Today';
    }
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    if (selected.getTime() === yesterday.getTime()) {
      return 'Yesterday';
    }
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    if (selected.getTime() === tomorrow.getTime()) {
      return 'Tomorrow';
    }
    // Format as readable date
    return selected.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }

  clearQuickFilter(): void {
    this.activeQuickFilter = null;
    this.selectedDate = new Date(); // Reset to today
    this.resetFilters();
    this.onFilterChange();
  }

  resetFilters(): void {
    this.filters = {
      category: [],
      status: [],
      priority: [],
      important: 'all',
      startDate: '',
      endDate: '',
      searchQuery: ''
    };
  }

  clearAllFilters(): void {
    this.selectedDate = new Date(); // Reset to today
    this.resetFilters();
    this.activeQuickFilter = null;
    this.filtersCleared.emit();
  }

  toggleExpanded(): void {
    this.isExpanded = !this.isExpanded;
  }

  onViewModeChange(mode: string): void {
    this.viewMode = mode;
    this.viewModeChanged.emit(mode);
  }

  onAddTaskClick(): void {
    if (this.isAddingTask) return;
    
    this.isAddingTask = true;
    this.taskAddedSuccessfully = false;
    
    // Simulate a brief loading state for better UX
    setTimeout(() => {
      this.addTaskClicked.emit();
      this.isAddingTask = false;
      this.taskAddedSuccessfully = true;
      
      // Reset success state after animation
      setTimeout(() => {
        this.taskAddedSuccessfully = false;
      }, 2000);
    }, 300);
  }

  onStatsPanelToggle(): void {
    this.statsPanelToggled.emit();
  }

  onSearchChange(): void {
    this.onFilterChange();
  }

  getCategoryIcon(category: string): string {
    // First try to get icon from master data
    if (this.filterOptions.categoryMasters && this.filterOptions.categoryMasters.length > 0) {
      const master = this.filterOptions.categoryMasters.find(c => c.category === category);
      if (master && master.icon) {
        return master.icon;
      }
    }
    // Fallback to default icons
    const icons: { [key: string]: string } = {
      'Development': '💻',
      'Design': '🎨',
      'Marketing': '📈',
      'Operations': '⚙️',
      'Research': '🔬'
    };
    return icons[category] || '📋';
  }

  getPriorityIcon(priority: string): string {
    // First try to get color from master data and convert to icon
    if (this.filterOptions.priorityMasters && this.filterOptions.priorityMasters.length > 0) {
      const master = this.filterOptions.priorityMasters.find(p => p.priority === priority);
      if (master && master.color) {
        // Convert color to emoji based on common colors
        const color = master.color.toLowerCase();
        if (color.includes('#059669') || color.includes('green')) return '🟢';
        if (color.includes('#f97316') || color.includes('orange')) return '🟡';
        if (color.includes('#dc2626') || color.includes('red')) return '🔴';
      }
    }
    // Fallback to default icons
    const icons: { [key: string]: string } = {
      'low': '🟢',
      'medium': '🟡',
      'high': '🟠',
      'urgent': '🔴'
    };
    return icons[priority] || '⚪';
  }

  getStatusColor(status: string): string {
    // Get color from master data
    if (this.filterOptions.statusMasters && this.filterOptions.statusMasters.length > 0) {
      const master = this.filterOptions.statusMasters.find(s => s.status === status);
      if (master && master.color) {
        return master.color;
      }
    }
    // Fallback to default colors
    const colors: { [key: string]: string } = {
      'todo': '#64748B',
      'in-progress': '#2563EB',
      'review': '#7C3AED',
      'done': '#059669'
    };
    return colors[status] || '#6B7280';
  }

  getStatusIcon(status: string): string {
    // First try to get color from master data and convert to icon
    if (this.filterOptions.statusMasters && this.filterOptions.statusMasters.length > 0) {
      const master = this.filterOptions.statusMasters.find(s => s.status === status);
      if (master && master.color) {
        // Convert color to emoji based on common colors
        const color = master.color.toLowerCase();
        if (color.includes('#64748b') || color.includes('gray')) return '📝';
        if (color.includes('#2563eb') || color.includes('blue')) return '⏳';
        if (color.includes('#7c3aed') || color.includes('purple')) return '👀';
        if (color.includes('#059669') || color.includes('green')) return '✅';
      }
    }
    // Fallback to default icons
    const icons: { [key: string]: string } = {
      'todo': '📝',
      'in-progress': '⏳',
      'review': '👀',
      'done': '✅'
    };
    return icons[status] || '📋';
  }

  getPriorityColor(priority: string): string {
    // Get color from master data
    if (this.filterOptions.priorityMasters && this.filterOptions.priorityMasters.length > 0) {
      const master = this.filterOptions.priorityMasters.find(p => p.priority === priority);
      if (master && master.color) {
        return master.color;
      }
    }
    // Fallback to default colors
    const colors: { [key: string]: string } = {
      'low': '#059669',
      'medium': '#F97316',
      'high': '#DC2626',
      'urgent': '#DC2626'
    };
    return colors[priority] || '#6B7280';
  }

  getActiveFiltersCount(): number {
    let count = 0;
    const categoryArray = Array.isArray(this.filters.category) ? this.filters.category : [this.filters.category];
    const statusArray = Array.isArray(this.filters.status) ? this.filters.status : [this.filters.status];
    const priorityArray = Array.isArray(this.filters.priority) ? this.filters.priority : [this.filters.priority];
    
    if (categoryArray.length > 0 && !categoryArray.includes('all')) count++;
    if (statusArray.length > 0 && !statusArray.includes('all')) count++;
    if (priorityArray.length > 0 && !priorityArray.includes('all')) count++;
    if (this.filters.important && this.filters.important !== 'all') count++;
    if (this.filters.startDate) count++;
    if (this.filters.endDate) count++;
    if (this.filters.searchQuery.trim()) count++;
    return count;
  }

  // Calculate dropdown position based on trigger element
  calculateDropdownPosition(triggerId: string): any {
    const trigger = document.querySelector(`[data-dropdown-trigger="${triggerId}"]`);
    if (!trigger) return {};
    
    const rect = trigger.getBoundingClientRect();
    return {
      top: `${rect.bottom + 4}px`,
      left: `${rect.left}px`,
      width: `${rect.width}px`
    };
  }

  // Dropdown toggle methods
  toggleCategoryDropdown(event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.categoryDropdownOpen = !this.categoryDropdownOpen;
    if (this.categoryDropdownOpen) {
      this.statusDropdownOpen = false;
      this.priorityDropdownOpen = false;
      this.importantDropdownOpen = false;
      // Calculate position
      setTimeout(() => {
        this.categoryDropdownStyle = this.calculateDropdownPosition('category');
      }, 0);
    }
  }

  toggleStatusDropdown(event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.statusDropdownOpen = !this.statusDropdownOpen;
    if (this.statusDropdownOpen) {
      this.categoryDropdownOpen = false;
      this.priorityDropdownOpen = false;
      this.importantDropdownOpen = false;
      // Calculate position
      setTimeout(() => {
        this.statusDropdownStyle = this.calculateDropdownPosition('status');
      }, 0);
    }
  }

  togglePriorityDropdown(event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.priorityDropdownOpen = !this.priorityDropdownOpen;
    if (this.priorityDropdownOpen) {
      this.categoryDropdownOpen = false;
      this.statusDropdownOpen = false;
      this.importantDropdownOpen = false;
      // Calculate position
      setTimeout(() => {
        this.priorityDropdownStyle = this.calculateDropdownPosition('priority');
      }, 0);
    }
  }

  toggleImportantDropdown(event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.importantDropdownOpen = !this.importantDropdownOpen;
    if (this.importantDropdownOpen) {
      this.categoryDropdownOpen = false;
      this.statusDropdownOpen = false;
      this.priorityDropdownOpen = false;
      // Calculate position
      setTimeout(() => {
        this.importantDropdownStyle = this.calculateDropdownPosition('important');
      }, 0);
    }
  }

  closeAllDropdowns(): void {
    this.categoryDropdownOpen = false;
    this.statusDropdownOpen = false;
    this.priorityDropdownOpen = false;
    this.importantDropdownOpen = false;
  }

  // Check if value is selected
  isCategorySelected(category: string): boolean {
    const categoryArray = Array.isArray(this.filters.category) ? this.filters.category : [];
    return categoryArray.includes(category);
  }

  isStatusSelected(status: string): boolean {
    const statusArray = Array.isArray(this.filters.status) ? this.filters.status : [];
    return statusArray.includes(status);
  }

  isPrioritySelected(priority: string): boolean {
    const priorityArray = Array.isArray(this.filters.priority) ? this.filters.priority : [];
    return priorityArray.includes(priority);
  }

  // Toggle selection
  toggleCategory(category: string): void {
    const categoryArray = Array.isArray(this.filters.category) ? [...this.filters.category] : [];
    const index = categoryArray.indexOf(category);
    if (index > -1) {
      categoryArray.splice(index, 1);
    } else {
      categoryArray.push(category);
    }
    this.filters.category = categoryArray;
    this.onFilterChange();
  }

  toggleStatus(status: string): void {
    const statusArray = Array.isArray(this.filters.status) ? [...this.filters.status] : [];
    const index = statusArray.indexOf(status);
    if (index > -1) {
      statusArray.splice(index, 1);
    } else {
      statusArray.push(status);
    }
    this.filters.status = statusArray;
    this.onFilterChange();
  }

  togglePriority(priority: string): void {
    const priorityArray = Array.isArray(this.filters.priority) ? [...this.filters.priority] : [];
    const index = priorityArray.indexOf(priority);
    if (index > -1) {
      priorityArray.splice(index, 1);
    } else {
      priorityArray.push(priority);
    }
    this.filters.priority = priorityArray;
    this.onFilterChange();
  }

  // Get display text for selected values
  getCategoryDisplayText(): string {
    const categoryArray = Array.isArray(this.filters.category) ? this.filters.category : [];
    if (categoryArray.length === 0) return 'All Categories';
    if (categoryArray.length === 1) return categoryArray[0];
    return `${categoryArray.length} selected`;
  }

  getStatusDisplayText(): string {
    const statusArray = Array.isArray(this.filters.status) ? this.filters.status : [];
    if (statusArray.length === 0) return 'All Status';
    if (statusArray.length === 1) return statusArray[0].charAt(0).toUpperCase() + statusArray[0].slice(1);
    return `${statusArray.length} selected`;
  }

  getPriorityDisplayText(): string {
    const priorityArray = Array.isArray(this.filters.priority) ? this.filters.priority : [];
    if (priorityArray.length === 0) return 'All Priorities';
    if (priorityArray.length === 1) return priorityArray[0].charAt(0).toUpperCase() + priorityArray[0].slice(1);
    return `${priorityArray.length} selected`;
  }

  // Important/Starred filter methods (single-select)
  selectImportant(value: string): void {
    this.filters.important = value;
    this.onFilterChange();
  }

  isImportantSelected(value: string): boolean {
    return this.filters.important === value;
  }

  getImportantDisplayText(): string {
    const important = this.filters.important || 'all';
    switch (important) {
      case 'starred':
        return 'Starred';
      case 'unstarred':
        return 'Unstarred';
      default:
        return 'All';
    }
  }

  // Method to trigger attention animation
  triggerAttention(): void {
    this.showAttention = true;
    setTimeout(() => {
      this.showAttention = false;
    }, 4000); // Show attention for 4 seconds
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    // Close dropdowns if clicking outside
    // Check if click is outside all custom dropdowns
    const clickedInsideDropdown = target.closest('.custom-dropdown');
    if (!clickedInsideDropdown) {
      this.closeAllDropdowns();
    }
  }
}
