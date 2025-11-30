import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, takeUntil, Observable } from 'rxjs';
import { TaskFiltersComponent, FilterState, FilterOptions } from '../task-filters/task-filters';
import { DataTableComponent, TableColumn, TableConfig, TableAction, TableData } from '../data-table/data-table';
import { Task2Service, Task2 as Task, Subtask2 as Subtask, TaskCategory, TaskFilter, TaskStats } from '../../services/task2.service';
import { PeriodicTaskService } from '../../services/periodic-task.service';
import { SettingsService } from '../../services/settings.service';
import { ConfirmationService } from '../../services/confirmation.service';
import { StatusMasterService, StatusViewModel } from '../../services/status-master.service';
import { PriorityMasterService, PriorityViewModel } from '../../services/priority-master.service';
import { CategoryMasterService, CategoryViewModel } from '../../services/category-master.service';
import { NotesService } from '../../services/notes.service';
import { ToasterService } from '../../services/toaster.service';

// Interfaces are now imported from the service

@Component({
  selector: 'app-tasks2',
  standalone: true,
  imports: [CommonModule, FormsModule, TaskFiltersComponent, DataTableComponent],
  templateUrl: './tasks2.html',
  styleUrls: ['./tasks2.scss']
})
export class Tasks2Component implements OnInit, OnDestroy {
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  categories: TaskCategory[] = [];
  statuses: StatusViewModel[] = [];
  priorities: PriorityViewModel[] = [];
  categoryMasters: CategoryViewModel[] = [];
  taskStats: TaskStats = {
    total: 0,
    completed: 0,
    inProgress: 0,
    overdue: 0,
    completionRate: 0,
    averageDuration: 0
  };

  private destroy$ = new Subject<void>();

  viewMode: 'list' | 'kanban' | 'periodic-tasks' | 'calendar' | 'analytics' = 'list';
  showAddTaskModal: boolean = false;
  showEditTaskModal: boolean = false;
  showTaskDetailsModal: boolean = false;
  showSubtaskDetailsModal: boolean = false;
  showSubtaskModal: boolean = false;
  showAddSubtaskModal: boolean = false;
  showViewTaskModal: boolean = false;
  // Level 1 subtask modals
  showAddLevel2SubtaskModal: boolean = false;
  showEditLevel1SubtaskModal: boolean = false;
  showViewLevel1SubtaskModal: boolean = false;
  // Level 2 subtask modals
  showEditLevel2SubtaskModal: boolean = false;
  showViewLevel2SubtaskModal: boolean = false;
  selectedTask: Task | null = null;
  selectedSubtask: Subtask | null = null;
  selectedSubtaskParent: Task | null = null;
  parentTaskForSubtask: Task | null = null;
  // Level 1 and Level 2 subtask tracking
  selectedLevel1Subtask: Subtask | null = null;
  selectedLevel2Subtask: Subtask | null = null;
  parentTaskForLevel1Subtask: Task | null = null;
  parentLevel1SubtaskForLevel2: Subtask | null = null;
  draggedTask: Task | null = null;
  isStatsPanelCollapsed: boolean = false;
  targetPeriodicTaskId: number | null = null; // Store target periodic task ID for navigation
  controlBarTheme: string = 'dark'; // Control bar theme from settings

  // Store original IDs when editing task (to preserve values on update)
  originalTaskIds: {
    priority_level_id: number | null;
    status_id: number | null;
    url_ids: number[];
  } | null = null;

  // Filter state
  currentFilters: FilterState = {
    category: [],
    status: [],
    priority: [],
    important: 'all',
    startDate: '',
    endDate: '',
    searchQuery: ''
  };

  filterOptions: FilterOptions = {
    categories: [],
    statuses: [],
    priorities: [],
    dateRanges: []
  };

  newTask: Partial<Task> = {
    title: '',
    description: '',
    priorityLevel: null,
    status: null,
    category: null,
    // @ts-ignore
    taskOnDate: null,
    startTime: '00:00',
    endTime: '00:00',
    estimatedHours: null,
    priorityOrder: null,
    remarks: '',
    urls: [],
    important: false,
    completed: false,
    subtasks: []
  };

  // Periodic Task Properties
  showAddPeriodicTaskModal: boolean = false;
  showEditPeriodicTaskModal: boolean = false;
  showViewPeriodicTaskModal: boolean = false;
  newPeriodicTask: any = {};
  selectedPeriodicTask: any = null;
  monthlyRepeatType: 'day' | 'week' = 'day';
  weekDays = [
    { label: 'Sun', value: 0 },
    { label: 'Mon', value: 1 },
    { label: 'Tue', value: 2 },
    { label: 'Wed', value: 3 },
    { label: 'Thu', value: 4 },
    { label: 'Fri', value: 5 },
    { label: 'Sat', value: 6 }
  ];
  showAddPeriodicTaskUrlDropdown: boolean = false;
  showAddUrlDropdown: boolean = false;
  availableUrls: any[] = [];
  loadingUrls: boolean = false;
  selectedUrlId: number | null = null;


  // Form validation errors
  titleError: string = '';
  categoryError: string = '';
  statusError: string = '';
  priorityError: string = '';
  urlErrors: { [key: number]: string } = {};

  periodicTaskTitleError: string = '';
  periodicTaskCategoryError: string = '';
  periodicTaskStatusError: string = '';
  periodicTaskPriorityError: string = '';
  periodicTaskStartDateError: string = '';
  periodicTaskEndDateError: string = '';

  // Data Table Configuration - Base columns
  private baseTableColumns: TableColumn[] = [
    {
      key: 'id',
      title: 'ID',
      sortable: true,
      filterable: true,
      resizable: true,
      width: '70px',
      minWidth: '60px',
      maxWidth: '90px',
      align: 'center',
      type: 'number',
      hidden: false
    },
    {
      key: 'title',
      title: 'Task',
      sortable: true,
      filterable: true,
      resizable: true,
      width: '400px',
      minWidth: '200px',
      maxWidth: '650px',
      align: 'left'
    },
    {
      key: 'priorityOrder',
      title: 'Order',
      sortable: true,
      filterable: true,
      resizable: true,
      width: '70px',
      minWidth: '60px',
      maxWidth: '80px',
      align: 'center',
      type: 'number'
    },
    {
      key: 'category',
      title: 'Category',
      sortable: true,
      filterable: true,
      resizable: true,
      width: '150px',
      minWidth: '90px',
      maxWidth: '250px',
      align: 'left',
      type: 'custom'
    },
    {
      key: 'status',
      title: 'Status',
      sortable: true,
      filterable: true,
      resizable: true,
      width: '100px',
      minWidth: '80px',
      maxWidth: '120px',
      align: 'center',
      type: 'status'
    },
    {
      key: 'startTime',
      title: 'ST',
      sortable: true,
      filterable: true,
      resizable: true,
      width: '80px',
      minWidth: '70px',
      maxWidth: '90px',
      align: 'center',
      type: 'text'
    },
    {
      key: 'endTime',
      title: 'ET',
      sortable: true,
      filterable: true,
      resizable: true,
      width: '80px',
      minWidth: '70px',
      maxWidth: '90px',
      align: 'center',
      type: 'text'
    },
    {
      key: 'hours',
      title: 'Hours',
      sortable: true,
      filterable: true,
      resizable: true,
      width: '120px',
      minWidth: '100px',
      maxWidth: '150px',
      align: 'center',
      type: 'text'
    },
    {
      key: 'priorityLevel',
      title: 'Priority',
      sortable: true,
      filterable: true,
      resizable: true,
      width: '80px',
      minWidth: '70px',
      maxWidth: '90px',
      align: 'center',
      type: 'priority'
    },
    {
      key: 'urls',
      title: 'Urls/Docs',
      sortable: false,
      filterable: false,
      resizable: true,
      width: '150px',
      minWidth: '100px',
      maxWidth: '200px',
      align: 'left',
      type: 'urls'
    },
    {
      key: 'remarks',
      title: 'Remarks',
      sortable: true,
      filterable: true,
      resizable: true,
      width: '200px',
      minWidth: '80px',
      align: 'left',
      type: 'remarks'
    },
    {
      key: 'createdAt',
      title: 'Created On',
      sortable: true,
      filterable: true,
      resizable: true,
      width: '100px',
      minWidth: '80px',
      maxWidth: '120px',
      align: 'center',
      type: 'date'
    }
  ];

  // Get table columns based on view mode
  get tableColumns(): TableColumn[] {
    const columns = [...this.baseTableColumns];

    // Find index where to insert date column
    const statusIndex = columns.findIndex(c => c.key === 'status');

    if (this.viewMode === 'list') {
      // For Tasks: Only Date column (renamed from SD), no End Date
      columns.splice(statusIndex + 1, 0, {
        key: 'taskOnDate',
        title: 'Date',
        sortable: true,
        filterable: true,
        resizable: true,
        width: '100px',
        minWidth: '80px',
        maxWidth: '120px',
        align: 'center',
        type: 'date'
      });
    } else if (this.viewMode === 'periodic-tasks') {
      // For Periodic Tasks: Both Start Date (SD) and End Date (ED)
      columns.splice(statusIndex + 1, 0, {
        key: 'startDate',
        title: 'SD',
        sortable: true,
        filterable: true,
        resizable: true,
        width: '100px',
        minWidth: '80px',
        maxWidth: '120px',
        align: 'center',
        type: 'date'
      });
      columns.splice(statusIndex + 2, 0, {
        key: 'endDate',
        title: 'ED',
        sortable: true,
        filterable: true,
        resizable: true,
        width: '100px',
        minWidth: '80px',
        maxWidth: '120px',
        align: 'center',
        type: 'date'
      });
    }

    return columns;
  }

  tableConfig: TableConfig = {
    selectable: true,
    multiSelect: true,
    sortable: true,
    filterable: true,
    resizable: true,
    pagination: true,
    pageSize: 8, // Reduced page size to show fewer rows
    pageSizeOptions: [5, 8, 10, 25, 50],
    exportable: true,
    searchable: true,
    virtualScrolling: false,
    stickyHeader: true,
    stickyColumns: 2 // Keep ID and Task columns sticky
  };

  tableActions: TableAction[] = [
    {
      label: 'Add Subtask',
      icon: 'fa-plus',
      action: 'add-subtask',
      color: '#059669'
    },
    {
      label: 'Edit',
      icon: 'fa-edit',
      action: 'edit',
      color: '#4a9eff'
    },
    {
      label: 'Delete',
      icon: 'fa-trash',
      action: 'delete',
      color: '#ef4444'
    },
    // {
    //   label: 'Duplicate',
    //   icon: '📋',
    //   action: 'duplicate',
    //   color: '#10b981'
    // }
  ];



  // Subtask form properties
  newSubtask: Partial<Subtask> & { remarks?: string; urls?: { label: string; url: string }[]; important?: boolean; category?: { name: string; icon: string } } = {
    title: '',
    description: '',
    priority: undefined,
    status: undefined,
    category: undefined,
    // @ts-ignore
    taskOnDate: null,
    startTime: '00:00',
    endTime: '00:00',
    estimatedHours: undefined,
    priorityOrder: undefined,
    remarks: '',
    urls: [],
    important: false,
    completed: false
  };

  // Subtask form validation errors
  subtaskTitleError: string = '';
  subtaskCategoryError: string = '';
  subtaskStatusError: string = '';
  subtaskPriorityError: string = '';
  subtaskUrlErrors: { [key: number]: string } = {};

  // Subtask URL management
  availableSubtaskUrls: any[] = [];
  showAddSubtaskUrlDropdown: boolean = false;
  selectedSubtaskUrlId: number | null = null;
  loadingSubtaskUrls: boolean = false;

  constructor(
    private task2Service: Task2Service,
    private periodicTaskService: PeriodicTaskService,
    private settingsService: SettingsService,
    private confirmationService: ConfirmationService,
    private statusMasterService: StatusMasterService,
    private priorityMasterService: PriorityMasterService,
    private categoryMasterService: CategoryMasterService,
    private notesService: NotesService,
    private toaster: ToasterService
  ) { }

  // Get the appropriate service based on view mode
  private getService(): Task2Service | PeriodicTaskService {
    return this.viewMode === 'periodic-tasks' ? this.periodicTaskService : this.task2Service;
  }

  ngOnInit(): void {
    this.loadTasks();
    this.loadCategories();
    this.loadStatuses();
    this.loadPriorities();
    this.loadCategoryMasters();
    this.updateStats();
    this.loadControlBarTheme();
    this.setupThemeListener();
  }

  loadControlBarTheme(): void {
    this.settingsService.getUserPreferences().subscribe({
      next: (prefs) => {
        if (prefs && prefs.controlBarThemeId) {
          this.controlBarTheme = prefs.controlBarThemeId;
        }
      },
      error: () => {
        // Fallback to localStorage
        try {
          const stored = localStorage.getItem('omni-planner-preferences');
          if (stored) {
            const prefs = JSON.parse(stored);
            if (prefs.controlBarThemeId) {
              this.controlBarTheme = prefs.controlBarThemeId;
            }
          }
        } catch (e) {
          console.error('Error loading control bar theme:', e);
        }
      }
    });
  }

  setupThemeListener(): void {
    window.addEventListener('control-bar-theme-changed', ((event: CustomEvent) => {
      if (event.detail && event.detail.theme) {
        this.controlBarTheme = event.detail.theme;
      }
    }) as EventListener);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadTasks(): void {
    (this.getService().getTasks() as any)
      .pipe(takeUntil(this.destroy$))
      .subscribe((tasks: any[]) => {
        this.tasks = tasks;
        this.filterTasks();
        this.updateStats();
      });
  }

  private loadCategories(): void {
    this.categories = this.getService().getCategories();
  }

  private loadStatuses(): void {
    this.statusMasterService.getAllStatuses()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (statuses) => {
          // Filter only active, non-deleted statuses
          this.statuses = statuses.filter(s => s.is_active && !s.is_deleted);
          this.initializeFilterOptions();
        },
        error: (error) => {
          console.error('Error loading statuses:', error);
          // Fallback to default statuses on error
          this.statuses = [];
          this.initializeFilterOptions();
        }
      });
  }

  private loadPriorities(): void {
    this.priorityMasterService.getAllPriorities()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (priorities) => {
          // Filter only active, non-deleted priorities
          this.priorities = priorities.filter(p => p.is_active && !p.is_deleted);
          this.initializeFilterOptions();
        },
        error: (error) => {
          console.error('Error loading priorities:', error);
          // Fallback to default priorities on error
          this.priorities = [];
          this.initializeFilterOptions();
        }
      });
  }

  private loadCategoryMasters(): void {
    this.categoryMasterService.getAllCategories()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (categories) => {
          // Filter only active, non-deleted categories
          this.categoryMasters = categories.filter(c => c.is_active && !c.is_deleted);
          this.initializeFilterOptions();
        },
        error: (error) => {
          console.error('Error loading category masters:', error);
          this.categoryMasters = [];
          this.initializeFilterOptions();
        }
      });
  }

  private updateStats(): void {
    this.taskStats = this.getService().getTaskStats();
  }

  // Helper method to check if task is for today (for regular tasks)
  private isTaskForToday(task: Task): boolean {
    if (this.viewMode === 'periodic-tasks') {
      return false; // Periodic tasks use different logic
    }
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const taskDate = (task as any)['taskOnDate'];
    if (!taskDate) return true; // null means today
    const taskDateObj = new Date(taskDate);
    taskDateObj.setHours(0, 0, 0, 0);
    return taskDateObj.getTime() === today.getTime();
  }

  // Helper method to check if task is overdue
  private isTaskOverdue(task: Task): boolean {
    if (task.completed) return false;

    if (this.viewMode === 'periodic-tasks') {
      const periodicTask = task as any;
      const endDate = periodicTask.endDate;
      if (!endDate) return false;
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const endDateObj = new Date(endDate);
      endDateObj.setHours(0, 0, 0, 0);
      return endDateObj.getTime() < today.getTime();
    } else {
      const taskDate = (task as any)['taskOnDate'];
      if (!taskDate) return false; // null is not overdue
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const taskDateObj = new Date(taskDate);
      taskDateObj.setHours(0, 0, 0, 0);
      return taskDateObj.getTime() < today.getTime();
    }
  }

  // Helper method to check if periodic task matches date filter
  private periodicTaskMatchesDateFilter(task: Task, startDate?: string, endDate?: string): boolean {
    if (this.viewMode !== 'periodic-tasks') return true;

    const periodicTask = task as any;
    const taskStartDate = periodicTask.startDate;
    const taskEndDate = periodicTask.endDate;

    // If both task dates are null, accept it
    if (!taskStartDate && !taskEndDate) return true;

    // If filter has no dates, accept all
    if (!startDate && !endDate) return true;

    // Check if task overlaps with filter date range
    // Task overlaps if: (taskStartDate <= filterEndDate OR null) AND (taskEndDate >= filterStartDate OR null)
    const filterStart = startDate ? new Date(startDate) : null;
    const filterEnd = endDate ? new Date(endDate) : null;
    const taskStart = taskStartDate ? new Date(taskStartDate) : null;
    const taskEnd = taskEndDate ? new Date(taskEndDate) : null;

    if (filterStart && taskEnd) {
      if (taskEnd < filterStart) return false;
    }
    if (filterEnd && taskStart) {
      if (taskStart > filterEnd) return false;
    }

    return true;
  }

  // Today's Stats (for regular tasks)
  getTodaysStats(): { total: number; completed: number; pending: number } {
    const allTasks = this.tasks;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const todaysTasks = allTasks.filter(task => {
      if (this.viewMode === 'periodic-tasks') {
        // For periodic tasks, check if today falls within startDate and endDate
        const periodicTask = task as any;
        const startDate = periodicTask.startDate;
        const endDate = periodicTask.endDate;
        if (!startDate && !endDate) return true; // Both null means today
        if (!startDate || !endDate) return false;
        const start = new Date(startDate);
        const end = new Date(endDate);
        start.setHours(0, 0, 0, 0);
        end.setHours(0, 0, 0, 0);
        return today >= start && today <= end;
      } else {
        const taskDate = (task as any)['taskOnDate'];
        if (!taskDate) return true; // null means today
        const taskDateObj = new Date(taskDate);
        taskDateObj.setHours(0, 0, 0, 0);
        return taskDateObj.getTime() === today.getTime();
      }
    });

    const total = todaysTasks.length;
    const completed = todaysTasks.filter(t => t.completed === true).length;
    const pending = total - completed;

    return { total, completed, pending };
  }

  // Total Stats (all tasks, no filters)
  getTotalStats(): { total: number; completed: number; pending: number; overdue: number } {
    const allTasks = this.tasks;
    const total = allTasks.length;
    const completed = allTasks.filter(t => t.completed === true).length;
    const pending = total - completed;
    const overdue = allTasks.filter(t => this.isTaskOverdue(t)).length;

    return { total, completed, pending, overdue };
  }

  // Filtered Stats (with applied filters)
  getFilteredStats(): { total: number; completed: number; pending: number; overdue: number } {
    const filtered = this.filteredTasks;
    const total = filtered.length;
    const completed = filtered.filter(t => t.completed === true).length;
    const pending = total - completed;
    const overdue = filtered.filter(t => this.isTaskOverdue(t)).length;

    return { total, completed, pending, overdue };
  }

  // Check if there are any overdue tasks (for siren effect)
  hasOverdueTasks(): boolean {
    const totalStats = this.getTotalStats();
    const filteredStats = this.getFilteredStats();
    return totalStats.overdue > 0 || filteredStats.overdue > 0;
  }

  // Sample data is now handled by the service

  initializeFilterOptions(): void {
    // Use category masters - no fallback
    const categoryNames = this.categoryMasters.map(c => c.category);

    // Use status masters - no fallback
    const statusNames = this.statuses.map(s => s.status);

    // Use priority masters - no fallback
    const priorityNames = this.priorities.map(p => p.priority);

    // Prepare master objects for icons and colors
    const categoryMasters = this.categoryMasters.map(c => ({
      category: c.category,
      icon: c.icon
    }));

    const statusMasters = this.statuses.map(s => ({
      status: s.status,
      color: s.color
    }));

    const priorityMasters = this.priorities.map(p => ({
      priority: p.priority,
      color: p.color
    }));

    this.filterOptions = {
      categories: categoryNames,
      statuses: statusNames,
      priorities: priorityNames,
      dateRanges: ['today', 'tomorrow', 'this-week', 'next-week', 'this-month', 'overdue'],
      categoryMasters: categoryMasters,
      statusMasters: statusMasters,
      priorityMasters: priorityMasters
    };
  }

  filterTasks(): void {
    // Handle array or string values for multi-select
    const categoryArray = Array.isArray(this.currentFilters.category)
      ? this.currentFilters.category
      : (this.currentFilters.category !== 'all' ? [this.currentFilters.category] : []);
    const statusArray = Array.isArray(this.currentFilters.status)
      ? this.currentFilters.status
      : (this.currentFilters.status !== 'all' ? [this.currentFilters.status] : []);
    const priorityArray = Array.isArray(this.currentFilters.priority)
      ? this.currentFilters.priority
      : (this.currentFilters.priority !== 'all' ? [this.currentFilters.priority] : []);

    const filter: TaskFilter = {
      category: categoryArray.length > 0 ? categoryArray : undefined,
      status: statusArray.length > 0 ? statusArray : undefined,
      priority: priorityArray.length > 0 ? priorityArray : undefined,
      important: (this.currentFilters.important && this.currentFilters.important !== 'all') ? this.currentFilters.important : undefined,
      searchQuery: this.currentFilters.searchQuery || undefined,
      startDate: this.currentFilters.startDate || undefined,
      endDate: this.currentFilters.endDate || undefined
    };

    // Create a new array reference to ensure Angular change detection
    this.filteredTasks = [...(this.getService().filterTasks(filter) as unknown) as Task[]];
  }

  onFiltersChanged(filters: FilterState): void {
    this.currentFilters = filters;
    this.filterTasks();
    // Force change detection by creating new array reference
    this.filteredTasks = [...this.filteredTasks];
  }

  onFiltersCleared(): void {
    this.currentFilters = {
      category: [],
      status: [],
      priority: [],
      important: 'all',
      startDate: '',
      endDate: '',
      searchQuery: ''
    };
    this.filterTasks();
  }

  onViewModeChanged(mode: string): void {
    this.viewMode = mode as 'list' | 'kanban' | 'periodic-tasks' | 'calendar' | 'analytics';
    this.loadTasks(); // Reload tasks when view mode changes
  }

  // Navigate to periodic tasks section and scroll to specific task
  navigateToPeriodicTask(periodicTaskId: number): void {
    this.targetPeriodicTaskId = periodicTaskId;
    this.viewMode = 'periodic-tasks';
    this.loadTasks();
    // Scroll to the specific periodic task after data loads
    setTimeout(() => {
      this.scrollToPeriodicTask(periodicTaskId);
    }, 800); // Increased timeout to ensure data is loaded
  }

  // Scroll to specific periodic task by ID (can be main task or subtask)
  scrollToPeriodicTask(periodicTaskId: number): void {
    // Try to find by main task ID first
    let element = document.querySelector(`[data-task-id="${periodicTaskId}"]`);

    // If not found, try to find by subtask ID
    if (!element) {
      element = document.querySelector(`[data-subtask-id="${periodicTaskId}"]`);
    }

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Add highlight class temporarily
      element.classList.add('highlight-periodic-task');
      setTimeout(() => {
        element?.classList.remove('highlight-periodic-task');
      }, 2000);
    }

    // Clear target after scrolling
    this.targetPeriodicTaskId = null;
  }

  onAddTaskClicked(): void {
    // Initialize defaults after statuses and priorities are loaded
    this.initializeTaskDefaults();
    this.showAddTaskModal = true;
  }

  initializeTaskDefaults(): void {
    // Get today's date in local format (YYYY-MM-DD)
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const todayString = `${year}-${month}-${day}`;

    // Get default status (is_default = true, or first available)
    // Handle boolean true and truthy values (in case API returns different types)
    const defaultStatus = this.statuses.find(s => s.is_default === true || Boolean(s.is_default)) ||
      (this.statuses.length > 0 ? this.statuses[0] : null);

    // Get default priority (is_default = true, or first available)
    // Handle boolean true and truthy values (in case API returns different types)
    const defaultPriority = this.priorities.find(p => p.is_default === true || Boolean(p.is_default)) ||
      (this.priorities.length > 0 ? this.priorities[0] : null);

    // Create objects that match EXACTLY what the dropdown options use
    // The dropdown uses: [ngValue]="{ name: status.status, color: status.color }"
    // We need to create the exact same object structure with the same property names
    // Using the exact same format ensures Angular's [ngValue] comparison works correctly
    const statusValue = defaultStatus ? {
      name: defaultStatus.status as any,
      color: defaultStatus.color
    } : null;

    const priorityValue = defaultPriority ? {
      name: defaultPriority.priority as any,
      color: defaultPriority.color
    } : null;

    // Debug: Log to verify defaults are being found and the object structure
    if (defaultStatus) {
      console.log('Default status found:', defaultStatus.status, 'is_default:', defaultStatus.is_default);
      console.log('Status value object:', statusValue);
    }
    if (defaultPriority) {
      console.log('Default priority found:', defaultPriority.priority, 'is_default:', defaultPriority.is_default);
      console.log('Priority value object:', priorityValue);
    }

    this.newTask = {
      title: '',
      description: '',
      priorityLevel: priorityValue,
      status: statusValue,
      category: null,
      // @ts-ignore
      taskOnDate: todayString,
      startTime: '00:00',
      endTime: '00:00',
      estimatedHours: null,
      priorityOrder: null,
      remarks: '',
      urls: [],
      important: false,
      completed: false,
      subtasks: []
    };
    // Reset errors
    this.titleError = '';
    this.categoryError = '';
    this.statusError = '';
    this.priorityError = '';
    this.urlErrors = {};
    // Reset URL dropdown
    this.availableUrls = [];
    this.showAddUrlDropdown = false;
    this.selectedUrlId = null;
  }

  closeAddTaskModal(): void {
    this.showAddTaskModal = false;
    this.resetNewTask();
  }

  toggleStatsPanel(): void {
    this.isStatsPanelCollapsed = !this.isStatsPanelCollapsed;
  }

  matchesStartDate(task: Task, startDate: string): boolean {
    const taskOnDate: any = (task as any)['taskOnDate'];
    // Always include tasks with null/empty/ND taskOnDate
    if (!taskOnDate || taskOnDate === null || taskOnDate === '' || taskOnDate === 'ND') {
      return true;
    }
    if (!startDate) return true;
    const filterStartDate = new Date(startDate);
    const taskDate = new Date(taskOnDate);
    return taskDate >= filterStartDate;
  }

  matchesEndDate(task: Task, endDate: string): boolean {
    const taskOnDate: any = (task as any)['taskOnDate'];
    // Always include tasks with null/empty/ND taskOnDate
    if (!taskOnDate || taskOnDate === null || taskOnDate === '' || taskOnDate === 'ND') {
      return true;
    }
    if (!endDate) return true;
    const filterEndDate = new Date(endDate);
    const taskDate = new Date(taskOnDate);
    return taskDate <= filterEndDate;
  }


  addTask(): void {
    // Validate form
    if (!this.validateTaskForm()) {
      return;
    }

    // Get category ID, priority ID, and status ID from masters
    const categoryId = this.categoryMasters.find(c => c.category === this.newTask.category?.name)?.id || null;
    const priorityId = this.priorities.find(p => p.priority === this.newTask.priorityLevel?.name)?.id || null;
    const statusId = this.statuses.find(s => s.status === this.newTask.status?.name)?.id || null;

    // Extract URL IDs from URLs array
    const urlIds = (this.newTask.urls || [])
      .map((u: any) => u.url_id)
      .filter((id: any) => id != null) as number[];

    // Helper function to convert value to number or null
    const toNumberOrNull = (value: any): number | null => {
      if (value === null || value === undefined || value === '' || value === 'null') return null;
      const num = Number(value);
      return isNaN(num) ? null : num;
    };

    // Helper function to convert date string to YYYY-MM-DD format or null
    const toDateStringOrNull = (value: any): string | null => {
      if (!value || value === '' || value === 'null') return null;
      try {
        // If it's already a date string in YYYY-MM-DD format, return it
        if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
          return value;
        }
        // Otherwise, try to parse it
        const date = new Date(value);
        if (isNaN(date.getTime())) return null;
        return date.toISOString().split('T')[0];
      } catch {
        return null;
      }
    };

    // Helper function to convert time string or null
    const toTimeStringOrNull = (value: any): string | null => {
      if (!value || value === '' || value === 'null') return null;
      return String(value);
    };

    // Prepare task data matching API structure
    const taskData: any = {
      title: this.newTask.title,
      description: this.newTask.description || null,
      priority_level_id: priorityId,
      status_id: statusId,
      category_id: categoryId,
      task_on_date: toDateStringOrNull(this.newTask.taskOnDate),
      start_time: toTimeStringOrNull(this.newTask.startTime),
      end_time: toTimeStringOrNull(this.newTask.endTime),
      estimated_hours: toNumberOrNull(this.newTask.estimatedHours),
      priority_order: toNumberOrNull(this.newTask.priorityOrder),
      remarks: this.newTask.remarks || null,
      url_ids: urlIds.length > 0 ? urlIds : null,
      important: this.newTask.important || false,
      completed: this.newTask.completed || false,
      periodic_tasks_main_task_id: null
    };

    this.task2Service.addMainTask(taskData).subscribe({
      next: (response: any) => {
        if (response.success) {
          this.toaster.success(response.message || 'Main task added successfully');
          this.resetNewTask();
          this.showAddTaskModal = false;
          this.task2Service.refreshTasks();
        } else {
          this.toaster.error(response.message || 'Failed to add main task');
        }
      },
      error: (error: any) => {
        this.toaster.error(error.error?.message || 'Failed to add main task');
      }
    });
  }

  validateTaskForm(): boolean {
    let isValid = true;

    // Reset errors
    this.titleError = '';
    this.categoryError = '';
    this.statusError = '';
    this.priorityError = '';

    // Validate title
    if (!this.newTask.title || !this.newTask.title.trim()) {
      this.titleError = 'Task title is required';
      isValid = false;
    }

    // Validate category
    if (!this.newTask.category || !this.newTask.category.name) {
      this.categoryError = 'Category is required';
      isValid = false;
    }

    // Validate status
    if (!this.newTask.status || !this.newTask.status.name) {
      this.statusError = 'Status is required';
      isValid = false;
    }

    // Validate priority
    if (!this.newTask.priorityLevel || !this.newTask.priorityLevel.name) {
      this.priorityError = 'Priority is required';
      isValid = false;
    }

    // Validate URLs
    if (this.newTask.urls && this.newTask.urls.length > 0) {
      this.newTask.urls.forEach((url, index) => {
        if (url.label && !url.url) {
          this.urlErrors[index] = 'URL is required when label is provided';
          isValid = false;
        } else if (url.url && !url.label) {
          this.urlErrors[index] = 'Label is required when URL is provided';
          isValid = false;
        } else {
          this.urlErrors[index] = '';
        }
      });
    }

    return isValid;
  }

  // Periodic Task Methods
  onAddPeriodicTaskClicked(): void {
    this.initializePeriodicTaskDefaults();
    this.showAddPeriodicTaskModal = true;
  }

  initializePeriodicTaskDefaults(): void {
    this.periodicTaskTitleError = '';
    this.periodicTaskCategoryError = '';
    this.periodicTaskStatusError = '';
    this.periodicTaskPriorityError = '';
    this.periodicTaskStartDateError = '';
    this.periodicTaskEndDateError = '';

    const today = new Date().toISOString().split('T')[0];
    const defaultStatus = this.statuses.find(s => s.is_default === true || Boolean(s.is_default)) ||
      (this.statuses.length > 0 ? this.statuses[0] : null);
    const defaultPriority = this.priorities.find(p => p.is_default === true || Boolean(p.is_default)) ||
      (this.priorities.length > 0 ? this.priorities[0] : null);

    this.newPeriodicTask = {
      title: '',
      description: '',
      startDate: today,
      startTime: '09:00',
      endTime: '17:00',
      recurrence_pattern: 'daily',
      recurrence_interval: 1,
      recurrence_days: [],
      recurrence_month_day: 1,
      recurrence_week_of_month: 1,
      recurrence_day_of_week: 1,
      recurrence_month: 1,
      recurrence_end_type: 'on_date',
      recurrence_end_date: null,
      recurrence_occurrences: null,
      priorityLevel: defaultPriority ? { name: defaultPriority.priority as any, color: defaultPriority.color } : null,
      status: defaultStatus ? { name: defaultStatus.status as any, color: defaultStatus.color } : null,
      category: null,
      estimatedHours: null,
      remarks: '',
      important: false,
      urls: []
    };
  }

  closePeriodicTaskModal(): void {
    this.showAddPeriodicTaskModal = false;
    this.showEditPeriodicTaskModal = false;
    this.newPeriodicTask = {};
    this.showAddPeriodicTaskUrlDropdown = false;
    this.availableUrls = [];
    this.periodicTaskTitleError = '';
    this.periodicTaskCategoryError = '';
    this.periodicTaskStatusError = '';
    this.periodicTaskPriorityError = '';
    this.periodicTaskStartDateError = '';
    this.periodicTaskEndDateError = '';
  }

  savePeriodicTask(): void {
    let hasErrors = false;

    // Clear all errors first
    this.periodicTaskTitleError = '';
    this.periodicTaskCategoryError = '';
    this.periodicTaskStatusError = '';
    this.periodicTaskPriorityError = '';
    this.periodicTaskStartDateError = '';
    this.periodicTaskEndDateError = '';

    // Validate title
    if (!this.newPeriodicTask.title || !this.newPeriodicTask.title.trim()) {
      this.periodicTaskTitleError = 'Title is required';
      hasErrors = true;
    }

    // Validate category
    if (!this.newPeriodicTask.category || !this.newPeriodicTask.category.name) {
      this.periodicTaskCategoryError = 'Category is required';
      hasErrors = true;
    }

    // Validate status
    if (!this.newPeriodicTask.status || !this.newPeriodicTask.status.name) {
      this.periodicTaskStatusError = 'Status is required';
      hasErrors = true;
    }

    // Validate priority
    if (!this.newPeriodicTask.priorityLevel || !this.newPeriodicTask.priorityLevel.name) {
      this.periodicTaskPriorityError = 'Priority is required';
      hasErrors = true;
    }

    // Validate start date
    if (!this.newPeriodicTask.startDate) {
      this.periodicTaskStartDateError = 'Start date is required';
      hasErrors = true;
    }

    // Validate recurrence_end_type is selected
    if (!this.newPeriodicTask.recurrence_end_type) {
      this.toaster.error('Recurrence Ends type is required');
      return;
    }

    // Validate end date based on recurrence_end_type
    if (this.newPeriodicTask.recurrence_end_type === 'on_date') {
      if (!this.newPeriodicTask.recurrence_end_date) {
        this.periodicTaskEndDateError = 'End date is required';
        hasErrors = true;
      }
    } else if (this.newPeriodicTask.recurrence_end_type === 'after_occurrences') {
      if (!this.newPeriodicTask.recurrence_occurrences || this.newPeriodicTask.recurrence_occurrences < 1) {
        this.toaster.error('Number of occurrences is required and must be at least 1');
        return;
      }
    }

    if (hasErrors) {
      return;
    }

    // Validate recurrence pattern specific fields
    if (this.newPeriodicTask.recurrence_pattern === 'weekly') {
      if (!this.newPeriodicTask.recurrence_days || this.newPeriodicTask.recurrence_days.length === 0) {
        this.toaster.error('Please select at least one day for weekly recurrence');
        return;
      }
    } else if (this.newPeriodicTask.recurrence_pattern === 'monthly') {
      if (this.monthlyRepeatType === 'day') {
        if (!this.newPeriodicTask.recurrence_month_day || this.newPeriodicTask.recurrence_month_day < 1 || this.newPeriodicTask.recurrence_month_day > 31) {
          this.toaster.error('Please enter a valid day of month (1-31)');
          return;
        }
      }
    }

    // Validate recurrence interval
    if (!this.newPeriodicTask.recurrence_interval || this.newPeriodicTask.recurrence_interval < 1) {
      this.toaster.error('Recurrence interval must be at least 1');
      return;
    }

    // Get IDs from master data
    const categoryId = this.categoryMasters.find(c => c.category === this.newPeriodicTask.category?.name)?.id || null;
    const priorityId = this.priorities.find(p => p.priority === this.newPeriodicTask.priorityLevel?.name)?.id || null;
    const statusId = this.statuses.find(s => s.status === this.newPeriodicTask.status?.name)?.id || null;

    // Helper function to format dates as ISO strings
    const formatDateToString = (date: any): string | null => {
      if (!date) return null;
      if (typeof date === 'string') return date;
      if (date instanceof Date) return date.toISOString().split('T')[0];
      return null;
    };

    const taskData = {
      title: this.newPeriodicTask.title,
      description: this.newPeriodicTask.description || null,
      priority_level_id: priorityId,
      status_id: statusId,
      category_id: categoryId,
      startDate: formatDateToString(this.newPeriodicTask.startDate),
      startTime: this.newPeriodicTask.startTime,
      endTime: this.newPeriodicTask.endTime,
      recurrence_pattern: this.newPeriodicTask.recurrence_pattern,
      recurrence_interval: this.newPeriodicTask.recurrence_interval,
      recurrence_days: this.newPeriodicTask.recurrence_days,
      recurrence_month_day: this.newPeriodicTask.recurrence_month_day,
      recurrence_week_of_month: this.newPeriodicTask.recurrence_week_of_month,
      recurrence_day_of_week: this.newPeriodicTask.recurrence_day_of_week,
      recurrence_month: this.newPeriodicTask.recurrence_month,
      recurrence_end_type: this.newPeriodicTask.recurrence_end_type,
      recurrence_end_date: formatDateToString(this.newPeriodicTask.recurrence_end_date),
      recurrence_occurrences: this.newPeriodicTask.recurrence_occurrences,
      estimatedHours: this.newPeriodicTask.estimatedHours,
      priorityOrder: null,
      remarks: this.newPeriodicTask.remarks,
      important: this.newPeriodicTask.important,
      url_ids: (this.newPeriodicTask.urls || []).map((u: any) => u.url_id).filter((id: any) => id != null)
    };

    if (this.newPeriodicTask.id) {
      (taskData as any).id = this.newPeriodicTask.id;
      this.periodicTaskService.updateTask(this.newPeriodicTask.id, taskData).subscribe({
        next: (task) => {
          this.toaster.success('Periodic task updated successfully');
          this.closePeriodicTaskModal();
          this.periodicTaskService.refreshTasks();
        },
        error: (error) => {
          this.toaster.error(error.message || 'Failed to update periodic task');
        }
      });
    } else {
      this.periodicTaskService.createTask(taskData).subscribe({
        next: (task) => {
          this.toaster.success('Periodic task created successfully');
          this.closePeriodicTaskModal();
          this.periodicTaskService.refreshTasks();
        },
        error: (error) => {
          this.toaster.error(error.message || 'Failed to create periodic task');
        }
      });
    }
  }

  getIntervalLabel(): string {
    const pattern = this.newPeriodicTask.recurrence_pattern;
    const interval = this.newPeriodicTask.recurrence_interval || 1;

    if (interval === 1) {
      return pattern?.slice(0, -2) || ''; // Remove 'ly' from 'daily', 'weekly', etc.
    }

    const labels: any = {
      daily: 'days',
      weekly: 'weeks',
      monthly: 'months',
      yearly: 'years'
    };

    return labels[pattern] || '';
  }

  isDaySelected(day: number): boolean {
    return this.newPeriodicTask.recurrence_days?.includes(day) || false;
  }

  toggleDay(day: number): void {
    if (!this.newPeriodicTask.recurrence_days) {
      this.newPeriodicTask.recurrence_days = [];
    }

    const index = this.newPeriodicTask.recurrence_days.indexOf(day);
    if (index > -1) {
      this.newPeriodicTask.recurrence_days.splice(index, 1);
    } else {
      this.newPeriodicTask.recurrence_days.push(day);
    }
  }

  onRecurrencePatternChange(): void {
    // Reset pattern-specific fields when pattern changes
    this.newPeriodicTask.recurrence_days = [];
    this.newPeriodicTask.recurrence_month_day = 1;
    this.newPeriodicTask.recurrence_week_of_month = 1;
    this.newPeriodicTask.recurrence_day_of_week = 1;
    this.newPeriodicTask.recurrence_month = 1;
    this.calculateEndDate();
  }

  calculateEndDate(): void {
    if (this.newPeriodicTask.recurrence_end_type !== 'after_occurrences' || !this.newPeriodicTask.recurrence_occurrences) {
      return;
    }

    const startDate = new Date(this.newPeriodicTask.startDate);
    if (isNaN(startDate.getTime())) {
      return;
    }

    const occurrences = this.newPeriodicTask.recurrence_occurrences - 1;
    const pattern = this.newPeriodicTask.recurrence_pattern;
    const interval = this.newPeriodicTask.recurrence_interval || 1;
    let endDate = new Date(startDate);

    if (pattern === 'daily') {
      endDate.setDate(endDate.getDate() + (occurrences * interval));
    } else if (pattern === 'weekly') {
      endDate.setDate(endDate.getDate() + (occurrences * interval * 7));
    } else if (pattern === 'monthly') {
      endDate.setMonth(endDate.getMonth() + (occurrences * interval));
    } else if (pattern === 'yearly') {
      endDate.setFullYear(endDate.getFullYear() + (occurrences * interval));
    }

    const year = endDate.getFullYear();
    const month = String(endDate.getMonth() + 1).padStart(2, '0');
    const day = String(endDate.getDate()).padStart(2, '0');
    this.newPeriodicTask.recurrence_end_date = `${year}-${month}-${day}`;
  }

  onRecurrenceOccurrencesChange(): void {
    this.calculateEndDate();
  }

  onRecurrenceEndTypeChange(): void {
    if (this.newPeriodicTask.recurrence_end_type === 'after_occurrences') {
      this.calculateEndDate();
    }
  }

  // Periodic Task URL Management
  togglePeriodicAddUrlDropdown(): void {
    if (!this.newPeriodicTask.category) {
      return;
    }
    this.showAddUrlDropdown = !this.showAddUrlDropdown;
    if (this.showAddUrlDropdown && this.availableUrls.length === 0) {
      this.loadAvailablePeriodicUrls();
    }
  }

  async loadAvailablePeriodicUrls(): Promise<void> {
    if (!this.newPeriodicTask.category) {
      this.availableUrls = [];
      return;
    }

    const categoryMaster = this.categoryMasters.find(c => c.category === this.newPeriodicTask.category?.name);
    if (!categoryMaster) {
      this.availableUrls = [];
      return;
    }

    try {
      this.loadingUrls = true;
      const urls = await this.notesService.getAvailableUrls(categoryMaster.id);
      const existingUrls = (this.newPeriodicTask.urls || []).map((u: any) => `${u.label}|${u.url}`);
      this.availableUrls = urls.filter((u: any) => !existingUrls.includes(`${u.label}|${u.url}`));
    } catch (err: any) {
      console.warn('Failed to load available URLs:', err);
      this.availableUrls = [];
    } finally {
      this.loadingUrls = false;
    }
  }

  addPeriodicUrlFromMaster(): void {
    if (!this.selectedUrlId) {
      return;
    }

    const selectedUrl = this.availableUrls.find((u: any) => u.url_id === this.selectedUrlId);
    if (!selectedUrl) {
      return;
    }

    if (!this.newPeriodicTask.urls) {
      this.newPeriodicTask.urls = [];
    }

    this.newPeriodicTask.urls.push({
      label: selectedUrl.label,
      url: selectedUrl.url,
      url_id: selectedUrl.url_id
    });

    this.availableUrls = this.availableUrls.filter((u: any) => u.url_id !== this.selectedUrlId);
    this.selectedUrlId = null;
    this.showAddUrlDropdown = false;
  }

  removePeriodicUrl(index: number): void {
    if (this.newPeriodicTask.urls) {
      this.newPeriodicTask.urls.splice(index, 1);
      // Reload available URLs
      if (this.newPeriodicTask.category) {
        this.loadAvailablePeriodicUrls();
      }
    }
  }

  onAddTaskClickedFromFilter(viewMode: string): void {
    if (viewMode === 'periodic-tasks') {
      this.onAddPeriodicTaskClicked();
    } else {
      this.onAddTaskClicked();
    }
  }


  onInput(field: string): void {
    // Clear error when user starts typing
    switch (field) {
      case 'title':
        this.titleError = '';
        break;
      case 'category':
        this.categoryError = '';
        // Load available URLs when category changes
        if (this.newTask.category) {
          this.loadAvailableUrls();
        } else {
          this.availableUrls = [];
        }
        break;
      case 'status':
        this.statusError = '';
        break;
      case 'priority':
        this.priorityError = '';
        break;
    }
  }

  async loadAvailableUrls(): Promise<void> {
    if (!this.newTask.category) {
      this.availableUrls = [];
      return;
    }

    // Get category ID from category masters
    const categoryMaster = this.categoryMasters.find(c => c.category === this.newTask.category?.name);
    if (!categoryMaster) {
      this.availableUrls = [];
      return;
    }

    try {
      this.loadingUrls = true;
      const urls = await this.notesService.getAvailableUrls(categoryMaster.id);
      // Filter out URLs that are already added (by comparing label and url)
      const existingUrls = (this.newTask.urls || []).map((u: any) => `${u.label}|${u.url}`);
      this.availableUrls = urls.filter((u: any) => !existingUrls.includes(`${u.label}|${u.url}`));
    } catch (err: any) {
      console.warn('Failed to load available URLs:', err);
      this.availableUrls = [];
    } finally {
      this.loadingUrls = false;
    }
  }

  toggleAddUrlDropdown(): void {
    // Check if we're in add mode or edit mode
    const isEditMode = !!this.selectedTask;
    const category = isEditMode ? this.selectedTask?.category : this.newTask.category;

    if (!category) {
      return;
    }
    this.showAddUrlDropdown = !this.showAddUrlDropdown;
    if (this.showAddUrlDropdown && this.availableUrls.length === 0) {
      if (isEditMode) {
        this.loadAvailableUrlsForEdit();
      } else {
        this.loadAvailableUrls();
      }
    }
  }

  addUrlFromMaster(): void {
    if (!this.selectedUrlId) {
      return;
    }

    // Check if we're in add mode or edit mode
    const isEditMode = !!this.selectedTask;
    const availableUrlsList = isEditMode ? this.availableUrls : this.availableUrls;

    const selectedUrl = availableUrlsList.find((u: any) => u.url_id === this.selectedUrlId);
    if (!selectedUrl) {
      return;
    }

    if (isEditMode && this.selectedTask) {
      // Edit mode - add to selectedTask
      if (!this.selectedTask.urls) {
        (this.selectedTask as any).urls = [];
      }
      (this.selectedTask.urls as any[]).push({
        label: selectedUrl.label,
        url: selectedUrl.url,
        url_id: selectedUrl.url_id // Store url_id for API
      });

      // Update stored URL IDs if available
      if (this.originalTaskIds && !this.originalTaskIds.url_ids.includes(selectedUrl.url_id)) {
        this.originalTaskIds.url_ids.push(selectedUrl.url_id);
      }

      // Reload available URLs to remove the added one from dropdown
      this.loadAvailableUrlsForEdit();
    } else {
      // Add mode - add to newTask
      if (!this.newTask.urls) {
        this.newTask.urls = [];
      }
      (this.newTask.urls as any[]).push({
        label: selectedUrl.label,
        url: selectedUrl.url,
        url_id: selectedUrl.url_id // Store url_id for API
      });

      // Remove from available URLs
      this.availableUrls = this.availableUrls.filter((u: any) => u.url_id !== this.selectedUrlId);
    }

    this.selectedUrlId = null;
    this.showAddUrlDropdown = false;
  }

  removeUrlFromSelectedTask(index: number): void {
    if (!this.selectedTask || !this.selectedTask.urls) return;

    const removedUrl = this.selectedTask.urls[index];
    // Remove url_id from stored IDs if available
    if (this.originalTaskIds && removedUrl && (removedUrl as any).url_id) {
      const urlIdIndex = this.originalTaskIds.url_ids.indexOf((removedUrl as any).url_id);
      if (urlIdIndex > -1) {
        this.originalTaskIds.url_ids.splice(urlIdIndex, 1);
      }
    }

    this.selectedTask.urls.splice(index, 1);
    // Reload available URLs to include the removed one
    if (this.selectedTask.category) {
      this.loadAvailableUrlsForEdit();
    }
  }

  generateAISuggestions(title: string, category: string): string[] {
    const suggestions: { [key: string]: string[] } = {
      'Development': ['Consider code review process', 'Add unit tests', 'Document API endpoints'],
      'Design': ['Follow design system guidelines', 'Consider responsive design', 'Test accessibility'],
      'Marketing': ['A/B test messaging', 'Track conversion metrics', 'Optimize for SEO'],
      'Operations': ['Monitor system performance', 'Create backup procedures', 'Document processes'],
      'Research': ['Validate assumptions', 'Gather user feedback', 'Document findings']
    };

    return suggestions[category] || ['Break down into smaller tasks', 'Set clear success criteria'];
  }

  updateTaskStatus(taskId: number, newStatus: Task['status']): void {
    if (this.viewMode === 'periodic-tasks') {
      (this.periodicTaskService as any).updateTask(taskId, { status: newStatus } as any).subscribe({
        next: () => {
          this.toaster.success('Task status updated');
          this.periodicTaskService.refreshTasks();
        },
        error: (err: any) => this.toaster.error('Failed to update task status')
      });
    } else {
      this.task2Service.updateTask(taskId, { status: newStatus } as any);
    }
  }

  async deleteTask(taskId: number): Promise<void> {
    if (this.viewMode === 'periodic-tasks') {
      const confirmed = await this.confirmationService.confirm({
        title: 'Delete Periodic Task',
        message: 'Are you sure you want to delete this periodic task? This will stop all future occurrences.',
        confirmText: 'Delete',
        cancelText: 'Cancel',
        confirmClass: 'danger'
      });

      if (confirmed) {
        this.periodicTaskService.deleteTask(taskId).subscribe({
          next: () => {
            this.toaster.success('Periodic task deleted successfully');
            this.periodicTaskService.refreshTasks();
          },
          error: (err: any) => this.toaster.error('Failed to delete periodic task')
        });
      }
      return;
    }

    const task = this.tasks.find(t => t.id === taskId) || null;
    const taskTitle = task?.title || 'this task';

    const confirmed = await this.confirmationService.confirm({
      title: 'Delete Main Task',
      message: `Are you sure you want to delete "${taskTitle}"? This will also delete all level 1 and level 2 subtasks. This action cannot be undone.`,
      confirmText: 'Delete',
      cancelText: 'Cancel',
      confirmClass: 'danger'
    });

    if (confirmed) {
      this.task2Service.deleteMainTask(taskId).subscribe({
        next: (response: any) => {
          if (response.success) {
            this.toaster.success(response.message || 'Main task deleted successfully');
            this.task2Service.refreshTasks();
          } else {
            this.toaster.error(response.message || 'Failed to delete main task');
          }
        },
        error: (error: any) => {
          this.toaster.error(error.error?.message || 'Failed to delete main task');
        }
      });
    }
  }

  resetNewTask(): void {
    // Get today's date in local format (YYYY-MM-DD)
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const todayString = `${year}-${month}-${day}`;

    // Get default status (is_default = true, or first available)
    const defaultStatus = this.statuses.find(s => s.is_default === true || Boolean(s.is_default)) ||
      (this.statuses.length > 0 ? this.statuses[0] : null);
    const statusValue = defaultStatus ? { name: defaultStatus.status as any, color: defaultStatus.color } : null;

    // Get default priority (is_default = true, or first available)
    const defaultPriority = this.priorities.find(p => p.is_default === true || Boolean(p.is_default)) ||
      (this.priorities.length > 0 ? this.priorities[0] : null);
    const priorityValue = defaultPriority ? { name: defaultPriority.priority as any, color: defaultPriority.color } : null;

    this.newTask = {
      title: '',
      description: '',
      priorityLevel: priorityValue,
      status: statusValue,
      category: null,
      // @ts-ignore
      taskOnDate: todayString,
      startTime: '00:00',
      endTime: '00:00',
      estimatedHours: null,
      priorityOrder: null,
      remarks: '',
      urls: [],
      important: false,
      completed: false,
      subtasks: []
    };
    // Reset errors
    this.titleError = '';
    this.categoryError = '';
    this.statusError = '';
    this.priorityError = '';
    this.urlErrors = {};
    // Reset URL dropdown
    this.availableUrls = [];
    this.showAddUrlDropdown = false;
    this.selectedUrlId = null;
  }

  // URL management methods - Keep for manual URL entry if needed
  addUrl(): void {
    if (!this.newTask.urls) {
      this.newTask.urls = [];
    }
    this.newTask.urls.push({ label: '', url: '' });
  }

  removeUrl(index: number): void {
    if (this.newTask.urls) {
      const removedUrl = this.newTask.urls[index];
      this.newTask.urls.splice(index, 1);
      delete this.urlErrors[index];
      // Reindex errors
      const newErrors: { [key: number]: string } = {};
      Object.keys(this.urlErrors).forEach(key => {
        const idx = parseInt(key);
        if (idx < index) {
          newErrors[idx] = this.urlErrors[idx];
        } else if (idx > index) {
          newErrors[idx - 1] = this.urlErrors[idx];
        }
      });
      this.urlErrors = newErrors;

      // Reload available URLs to add removed URL back to the list
      this.loadAvailableUrls();
    }
  }

  onUrlInput(index: number): void {
    // Clear error when user starts typing
    if (this.urlErrors[index]) {
      this.urlErrors[index] = '';
    }
  }

  // Periodic Task URL Management Methods
  async loadAvailableUrlsForPeriodicTask(): Promise<void> {
    if (!this.newPeriodicTask.category) {
      this.availableUrls = [];
      return;
    }

    const categoryMaster = this.categoryMasters.find(c => c.category === this.newPeriodicTask.category?.name);
    if (!categoryMaster) {
      this.availableUrls = [];
      return;
    }

    try {
      this.loadingUrls = true;
      const urls = await this.notesService.getAvailableUrls(categoryMaster.id);
      const existingUrls = (this.newPeriodicTask.urls || []).map((u: any) => `${u.label}|${u.url}`);
      this.availableUrls = urls.filter((u: any) => !existingUrls.includes(`${u.label}|${u.url}`));
    } catch (err: any) {
      console.warn('Failed to load available URLs:', err);
      this.availableUrls = [];
    } finally {
      this.loadingUrls = false;
    }
  }

  toggleAddPeriodicTaskUrlDropdown(): void {
    if (!this.newPeriodicTask.category) {
      return;
    }
    this.showAddPeriodicTaskUrlDropdown = !this.showAddPeriodicTaskUrlDropdown;
    if (this.showAddPeriodicTaskUrlDropdown && this.availableUrls.length === 0) {
      this.loadAvailableUrlsForPeriodicTask();
    }
  }

  addUrlFromMasterToPeriodicTask(): void {
    if (!this.selectedUrlId) {
      return;
    }

    const selectedUrl = this.availableUrls.find((u: any) => u.url_id === this.selectedUrlId);
    if (!selectedUrl) {
      return;
    }

    if (!this.newPeriodicTask.urls) {
      this.newPeriodicTask.urls = [];
    }
    (this.newPeriodicTask.urls as any[]).push({
      label: selectedUrl.label,
      url: selectedUrl.url,
      url_id: selectedUrl.url_id
    });

    this.availableUrls = this.availableUrls.filter((u: any) => u.url_id !== this.selectedUrlId);
    this.selectedUrlId = null;
    this.showAddPeriodicTaskUrlDropdown = false;
  }

  removePeriodicTaskUrl(index: number): void {
    if (this.newPeriodicTask.urls) {
      this.newPeriodicTask.urls.splice(index, 1);
      this.loadAvailableUrlsForPeriodicTask();
    }
  }

  // Subtask Management Methods
  addSubtaskDirect(taskId: number, subtask: Partial<Subtask>, parentSubtaskId?: number): void {
    (this.getService() as any).addSubtask(taskId, subtask as any, parentSubtaskId);
  }

  updateSubtask(taskId: number, subtaskId: number, updates: Partial<Subtask>): void {
    if (this.viewMode === 'periodic-tasks') {
      (this.periodicTaskService as any).updateSubtask(taskId, subtaskId, updates as any).subscribe({
        next: () => {
          this.toaster.success('Periodic subtask updated');
          this.periodicTaskService.refreshTasks();
        },
        error: (err: any) => this.toaster.error('Failed to update periodic subtask')
      });
      return;
    }
    (this.getService() as any).updateSubtask(taskId, subtaskId, updates as any);
  }

  async deleteSubtask(taskId: number, subtaskId: number): Promise<void> {
    const task = this.tasks.find(t => t.id === taskId);
    if (!task || !task.subtasks) return;

    const subtask = this.findSubtaskById(task.subtasks, subtaskId);
    if (!subtask) return;

    const subtaskTitle = subtask.title || 'this subtask';
    const isLevel1 = subtask.level === 1;
    const isLevel2 = subtask.level === 2;

    let confirmMessage = `Are you sure you want to delete "${subtaskTitle}"?`;
    if (isLevel1) {
      confirmMessage += ' This will also delete all level 2 subtasks.';
    }
    confirmMessage += ' This action cannot be undone.';

    const confirmed = await this.confirmationService.confirm({
      title: isLevel1 ? 'Delete Level 1 Subtask' : isLevel2 ? 'Delete Level 2 Subtask' : 'Delete Subtask',
      message: confirmMessage,
      confirmText: 'Delete',
      cancelText: 'Cancel',
      confirmClass: 'danger'
    });

    if (confirmed) {
      if (this.viewMode === 'periodic-tasks') {
        this.periodicTaskService.deleteSubtask(taskId, subtaskId).subscribe({
          next: () => {
            this.toaster.success('Periodic subtask deleted successfully');
            this.periodicTaskService.refreshTasks();
          },
          error: (err: any) => this.toaster.error('Failed to delete periodic subtask')
        });
        return;
      }

      if (isLevel1) {
        this.task2Service.deleteLevel1Subtask(subtaskId).subscribe({
          next: (response: any) => {
            if (response.success) {
              this.toaster.success(response.message || 'Level 1 subtask deleted successfully');
              this.task2Service.refreshTasks();
            } else {
              this.toaster.error(response.message || 'Failed to delete level 1 subtask');
            }
          },
          error: (error: any) => {
            this.toaster.error(error.error?.message || 'Failed to delete level 1 subtask');
          }
        });
      } else if (isLevel2) {
        this.task2Service.deleteLevel2Subtask(subtaskId).subscribe({
          next: (response: any) => {
            if (response.success) {
              this.toaster.success(response.message || 'Level 2 subtask deleted successfully');
              this.task2Service.refreshTasks();
            } else {
              this.toaster.error(response.message || 'Failed to delete level 2 subtask');
            }
          },
          error: (error: any) => {
            this.toaster.error(error.error?.message || 'Failed to delete level 2 subtask');
          }
        });
      }
    }
  }

  private findSubtaskById(subtasks: Subtask[], id: number): Subtask | null {
    for (const subtask of subtasks) {
      if (subtask.id === id) return subtask;
      if (subtask.subtasks && subtask.subtasks.length > 0) {
        const found = this.findSubtaskById(subtask.subtasks, id);
        if (found) return found;
      }
    }
    return null;
  }

  getSubtaskProgress(task: Task): { completed: number; total: number; percentage: number } {
    const allSubtasks = this.getAllSubtasksFlat(task.subtasks);
    const total = allSubtasks.length;
    const completed = allSubtasks.filter(s => this.isCompletedStatus(s.status)).length;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    return { completed, total, percentage };
  }

  private getAllSubtasksFlat(subtasks: Subtask[]): Subtask[] {
    const flat: Subtask[] = [];

    const addSubtasks = (subs: Subtask[]) => {
      subs.forEach(sub => {
        flat.push(sub);
        if (sub.subtasks && sub.subtasks.length > 0) {
          addSubtasks(sub.subtasks);
        }
      });
    };

    addSubtasks(subtasks);
    return flat;
  }

  // Subtask Modal Management Methods
  addNewSubtask(): void {
    if (!this.newTask.subtasks) {
      this.newTask.subtasks = [];
    }
    // Get default priority from masters (is_default = true, or first available)
    const defaultPriority = this.priorities.find(p => p.is_default === true || Boolean(p.is_default)) ||
      (this.priorities.length > 0 ? this.priorities[0] : null);
    const priorityValue = defaultPriority
      ? { name: defaultPriority.priority as any, color: defaultPriority.color }
      : (this.getDefaultPriority() || null);

    // Get default status from masters (is_default = true, or first available)
    const defaultStatus = this.statuses.find(s => s.is_default === true || Boolean(s.is_default)) ||
      (this.statuses.length > 0 ? this.statuses[0] : null);
    const statusValue = defaultStatus
      ? { name: defaultStatus.status as any, color: defaultStatus.color }
      : (this.getDefaultStatus() || null);

    // Ensure we have valid status and priority (use first available if defaults not found)
    // These should never be undefined as master data should always be loaded
    const finalStatus = statusValue || (this.statuses.length > 0 ? { name: this.statuses[0].status as any, color: this.statuses[0].color } : { name: '' as any, color: '' });
    const finalPriority = priorityValue || (this.priorities.length > 0 ? { name: this.priorities[0].priority as any, color: this.priorities[0].color } : { name: '' as any, color: '' });

    this.newTask.subtasks.push({
      id: Date.now(),
      title: '',
      description: '',
      status: finalStatus as any,
      priority: finalPriority as any,
      // @ts-ignore
      taskOnDate: null,
      startTime: '09:00',
      endTime: '17:00',
      estimatedHours: 0,
      priorityOrder: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      subtasks: [],
      level: 1,
      completed: false
    });
  }

  removeSubtask(index: number): void {
    if (this.newTask.subtasks) {
      this.newTask.subtasks.splice(index, 1);
    }
  }

  // Task Details Modal Methods
  closeTaskDetailsModal(): void {
    this.showTaskDetailsModal = false;
    this.selectedTask = null;
  }

  // Subtask Detail Modal Methods
  openSubtaskModal(task: Task, subtask: Subtask): void {
    this.closeTaskDetailsModal(); // Close the parent task modal first
    this.selectedSubtask = subtask;
    this.selectedSubtaskParent = task;
    this.showSubtaskModal = true;
  }

  closeSubtaskModal(): void {
    this.showSubtaskModal = false;
    this.selectedSubtask = null;
    this.selectedSubtaskParent = null;
  }

  hasSubtasks(): boolean {
    return !!(this.selectedTask?.subtasks && this.selectedTask.subtasks.length > 0);
  }

  hasSubtaskSubtasks(): boolean {
    return !!(this.selectedSubtask?.subtasks && this.selectedSubtask.subtasks.length > 0);
  }

  getSubtaskProgressPercentage(subtask: Subtask): number {
    return 0;
  }

  // Subtask Modal Methods
  addSubtaskToSubtask(): void {
    if (!this.selectedSubtask || !this.selectedSubtaskParent) return;

    // Get default status (is_default = true, or first available)
    const defaultStatus = this.statuses.find((s: any) => s.is_default === true || Boolean(s.is_default)) ||
      (this.statuses.length > 0 ? this.statuses[0] : null);
    const statusValue = defaultStatus ? { name: defaultStatus.status as any, color: defaultStatus.color } :
      (this.getDefaultStatus() || null);

    // Get default priority (is_default = true, or first available)
    const defaultPriority = this.priorities.find(p => p.is_default === true || Boolean(p.is_default)) ||
      (this.priorities.length > 0 ? this.priorities[0] : null);
    const priorityValue = defaultPriority ? { name: defaultPriority.priority as any, color: defaultPriority.color } :
      (this.getDefaultPriority() || null);

    (this.getService() as any).addSubtask(this.selectedSubtaskParent.id, {
      title: 'New Nested Subtask',
      description: '',
      status: statusValue,
      priority: priorityValue,
      // @ts-ignore
      taskOnDate: null,
      startTime: '09:00',
      endTime: '17:00',
      estimatedHours: 0,
      level: (this.selectedSubtask.level || 1) + 1
    }, this.selectedSubtask.id);
  }

  updateSubtaskModalStatus(subtaskId: number, status: Subtask['status']): void {
    if (!this.selectedSubtask) return;

    const nestedSubtask = this.selectedSubtask.subtasks?.find((s: Subtask) => s.id === subtaskId);
    if (nestedSubtask) {
      nestedSubtask.status = status;
      nestedSubtask.updatedAt = new Date();
      this.selectedSubtask.updatedAt = new Date();
      if (this.selectedSubtaskParent) {
        this.selectedSubtaskParent.updatedAt = new Date();
      }
      this.filterTasks();
    }
  }

  editSubtaskModal(subtaskId: number): void {
    if (!this.selectedSubtask) return;
    if (!this.selectedTask) return;

    const nestedSubtask = this.selectedSubtask.subtasks?.find((s: Subtask) => s.id === subtaskId);
    if (nestedSubtask) {
      const newTitle = prompt('Edit nested subtask title:', nestedSubtask.title);
      if (newTitle && newTitle.trim()) {
        const title = newTitle.trim();
        const result = this.getService().updateSubtask(this.selectedTask.id, subtaskId, { title });

        if (result && typeof result === 'object' && 'subscribe' in result) {
          (result as any).subscribe({
            next: (updatedSubtask: any) => {
              this.toaster.success('Nested subtask updated successfully');
              nestedSubtask.title = title;
              nestedSubtask.updatedAt = new Date();
              this.selectedSubtask!.updatedAt = new Date();
              if (this.viewMode === 'periodic-tasks') {
                this.periodicTaskService.refreshTasks();
              } else {
                this.task2Service.refreshTasks();
              }
            },
            error: (err: any) => {
              this.toaster.error('Failed to update nested subtask');
            }
          });
        } else {
          this.toaster.success('Nested subtask updated successfully');
          nestedSubtask.title = title;
          nestedSubtask.updatedAt = new Date();
          this.selectedSubtask!.updatedAt = new Date();
        }
      }
    }
  }

  async deleteSubtaskModal(subtaskId: number): Promise<void> {
    if (!this.selectedSubtask || !this.selectedSubtask.subtasks) return;
    if (!this.selectedTask) return;

    const nestedSubtask = this.selectedSubtask.subtasks.find((s: Subtask) => s.id === subtaskId);
    const subtaskTitle = nestedSubtask?.title || 'this nested subtask';

    const confirmed = await this.confirmationService.confirm({
      title: 'Delete Nested Subtask',
      message: `Are you sure you want to delete "${subtaskTitle}"? This action cannot be undone.`,
      confirmText: 'Delete',
      cancelText: 'Cancel',
      confirmClass: 'danger'
    });

    if (confirmed) {
      const result = this.getService().deleteSubtask(this.selectedTask.id, subtaskId);

      if (result && typeof result === 'object' && 'subscribe' in result) {
        (result as any).subscribe({
          next: () => {
            this.toaster.success('Nested subtask deleted successfully');
            if (this.selectedSubtask && this.selectedSubtask.subtasks) {
              this.selectedSubtask.subtasks = this.selectedSubtask.subtasks.filter((s: Subtask) => s.id !== subtaskId);
              this.selectedSubtask.updatedAt = new Date();
            }
            if (this.viewMode === 'periodic-tasks') {
              this.periodicTaskService.refreshTasks();
            } else {
              this.task2Service.refreshTasks();
            }
          },
          error: (err: any) => {
            this.toaster.error('Failed to delete nested subtask');
          }
        });
      } else {
        this.toaster.success('Nested subtask deleted successfully');
        if (this.selectedSubtask && this.selectedSubtask.subtasks) {
          this.selectedSubtask.subtasks = this.selectedSubtask.subtasks.filter((s: Subtask) => s.id !== subtaskId);
          this.selectedSubtask.updatedAt = new Date();
        }
      }
    }
  }

  // Task Details Modal Subtask Methods
  addSubtaskToTask(taskId: number): void {
    const task = this.tasks.find(t => t.id === taskId);
    if (!task) return;

    this.parentTaskForSubtask = task;
    this.initializeSubtaskDefaults();
    this.showAddSubtaskModal = true;
  }

  initializeSubtaskDefaults(): void {
    // Get date from parent task or parent Level 1 subtask in local format (YYYY-MM-DD)
    let taskOnDateString: string | null = null;
    let parentDate: Date | null = null;

    // For Level 2 subtasks, get date from parent Level 1 subtask (which inherits from main task)
    if (this.parentLevel1SubtaskForLevel2?.taskOnDate) {
      parentDate = new Date(this.parentLevel1SubtaskForLevel2.taskOnDate);
    } else if (this.parentTaskForLevel1Subtask?.taskOnDate) {
      // Fallback to main task if Level 1 subtask doesn't have date
      parentDate = new Date(this.parentTaskForLevel1Subtask.taskOnDate);
    } else if (this.parentTaskForSubtask?.taskOnDate) {
      // For Level 1 subtasks, get date from main task
      parentDate = new Date(this.parentTaskForSubtask.taskOnDate);
    }

    if (parentDate) {
      const year = parentDate.getFullYear();
      const month = String(parentDate.getMonth() + 1).padStart(2, '0');
      const day = String(parentDate.getDate()).padStart(2, '0');
      taskOnDateString = `${year}-${month}-${day}`;
    }

    // Get default status (is_default = true, or first available)
    // Create object with exact same structure as template: { name: status.status, color: status.color }
    const defaultStatus = this.statuses.find((s: any) => s.is_default === true || Boolean(s.is_default)) ||
      (this.statuses.length > 0 ? this.statuses[0] : null);
    const statusValue = defaultStatus ? { name: defaultStatus.status as any, color: defaultStatus.color } : null;

    // Get default priority (is_default = true, or first available)
    // Create object with exact same structure as template: { name: priority.priority, color: priority.color }
    const defaultPriority = this.priorities.find(p => p.is_default === true || Boolean(p.is_default)) ||
      (this.priorities.length > 0 ? this.priorities[0] : null);
    const priorityValue = defaultPriority ? { name: defaultPriority.priority as any, color: defaultPriority.color } : null;

    // Get category from parent task (for display only, disabled in form)
    // For Level 2, get from main task (parentTaskForLevel1Subtask)
    // For Level 1, get from parentTaskForSubtask
    const categoryValue = (this.parentTaskForLevel1Subtask?.category || this.parentTaskForSubtask?.category) ?
      {
        name: (this.parentTaskForLevel1Subtask?.category || this.parentTaskForSubtask?.category)!.name,
        icon: (this.parentTaskForLevel1Subtask?.category || this.parentTaskForSubtask?.category)!.icon
      } : null;

    this.newSubtask = {
      title: '',
      description: '',
      priority: priorityValue || undefined,
      status: statusValue || undefined,
      category: categoryValue || undefined,
      // @ts-ignore
      taskOnDate: taskOnDateString,
      startTime: '00:00',
      endTime: '00:00',
      estimatedHours: undefined,
      priorityOrder: undefined,
      important: false,
      completed: false
    };
    // Reset errors
    this.subtaskTitleError = '';
    this.subtaskCategoryError = '';
    this.subtaskStatusError = '';
    this.subtaskPriorityError = '';
  }

  closeAddSubtaskModal(): void {
    this.showAddSubtaskModal = false;
    this.resetNewSubtask();
    this.parentTaskForSubtask = null;
  }

  resetNewSubtask(): void {
    this.newSubtask = {
      title: '',
      description: '',
      priority: undefined,
      status: undefined,
      category: undefined,
      // @ts-ignore
      taskOnDate: null,
      startTime: '00:00',
      endTime: '00:00',
      estimatedHours: undefined,
      priorityOrder: undefined,
      important: false,
      completed: false
    };
    // Reset errors
    this.subtaskTitleError = '';
    this.subtaskCategoryError = '';
    this.subtaskStatusError = '';
    this.subtaskPriorityError = '';
  }

  addSubtask(): void {
    if (!this.parentTaskForSubtask) return;

    // Validate form
    if (!this.validateSubtaskForm()) {
      return;
    }

    // Get priority ID and status ID from masters
    const priorityId = this.priorities.find(p => p.priority === this.newSubtask.priority?.name)?.id || null;
    const statusId = this.statuses.find(s => s.status === this.newSubtask.status?.name)?.id || null;

    // estimated_hours now supports decimals
    const estimatedHours = this.newSubtask.estimatedHours;

    if (this.viewMode === 'periodic-tasks') {
      const subtaskData: any = {
        periodic_tasks_main_task_id: this.parentTaskForSubtask.id,
        title: this.newSubtask.title,
        description: this.newSubtask.description ?? null,
        priority_level_id: priorityId,
        status_id: statusId,
        start_time: this.newSubtask.startTime ?? null,
        end_time: this.newSubtask.endTime ?? null,
        estimated_hours: estimatedHours ?? null,
        priority_order: this.newSubtask.priorityOrder ?? null,
        important: this.newSubtask.important ?? false,
        completed: this.newSubtask.completed ?? false
      };

      (this.periodicTaskService as any).addSubtask(this.parentTaskForSubtask.id, subtaskData).subscribe({
        next: () => {
          this.toaster.success('Periodic subtask added successfully');
          this.resetNewSubtask();
          this.showAddSubtaskModal = false;
          this.parentTaskForSubtask = null;
          this.periodicTaskService.refreshTasks();
        },
        error: (err: any) => this.toaster.error('Failed to add periodic subtask')
      });
      return;
    }

    // Prepare subtask data matching API structure (Level 1 Subtask)
    // Use nullish coalescing to preserve 0 and empty string values
    const subtaskData: any = {
      tasks2_main_task_id: this.parentTaskForSubtask.id,
      title: this.newSubtask.title,
      description: this.newSubtask.description ?? null,
      priority_level_id: priorityId,
      status_id: statusId,
      start_time: this.newSubtask.startTime ?? null,
      end_time: this.newSubtask.endTime ?? null,
      estimated_hours: estimatedHours ?? null,
      priority_order: this.newSubtask.priorityOrder ?? null,
      important: this.newSubtask.important ?? false,
      completed: this.newSubtask.completed ?? false
    };

    this.task2Service.addLevel1Subtask(subtaskData).subscribe({
      next: (response: any) => {
        if (response.success) {
          this.toaster.success(response.message || 'Level 1 subtask added successfully');
          this.resetNewSubtask();
          this.showAddSubtaskModal = false;
          this.parentTaskForSubtask = null;
          this.task2Service.refreshTasks();
        } else {
          this.toaster.error(response.message || 'Failed to add level 1 subtask');
        }
      },
      error: (error: any) => {
        this.toaster.error(error.error?.message || 'Failed to add level 1 subtask');
      }
    });
  }

  validateSubtaskForm(): boolean {
    let isValid = true;

    // Reset errors
    this.subtaskTitleError = '';
    this.subtaskStatusError = '';
    this.subtaskPriorityError = '';

    // Validate title
    if (!this.newSubtask.title || !this.newSubtask.title.trim()) {
      this.subtaskTitleError = 'Subtask title is required';
      isValid = false;
    }

    // Validate status
    if (!this.newSubtask.status || !this.newSubtask.status.name) {
      this.subtaskStatusError = 'Status is required';
      isValid = false;
    }

    // Validate priority
    if (!this.newSubtask.priority || !this.newSubtask.priority.name) {
      this.subtaskPriorityError = 'Priority is required';
      isValid = false;
    }

    // Validate URLs
    if (this.newSubtask.urls && this.newSubtask.urls.length > 0) {
      this.newSubtask.urls.forEach((url: any, index: number) => {
        if (url.label && !url.url) {
          this.subtaskUrlErrors[index] = 'URL is required when label is provided';
          isValid = false;
        } else if (url.url && !url.label) {
          this.subtaskUrlErrors[index] = 'Label is required when URL is provided';
          isValid = false;
        } else {
          this.subtaskUrlErrors[index] = '';
        }
      });
    }

    return isValid;
  }

  validateEditLevel1SubtaskForm(): boolean {
    let isValid = true;

    // Reset errors
    this.subtaskTitleError = '';
    this.subtaskStatusError = '';
    this.subtaskPriorityError = '';

    // Validate title
    if (!this.selectedLevel1Subtask?.title || !this.selectedLevel1Subtask.title.trim()) {
      this.subtaskTitleError = 'Subtask title is required';
      isValid = false;
    }

    // Validate status
    if (!this.selectedLevel1Subtask?.status || !this.selectedLevel1Subtask.status.name) {
      this.subtaskStatusError = 'Status is required';
      isValid = false;
    }

    // Validate priority
    if (!this.selectedLevel1Subtask?.priority || !this.selectedLevel1Subtask.priority.name) {
      this.subtaskPriorityError = 'Priority is required';
      isValid = false;
    }

    return isValid;
  }

  onSubtaskInput(field: string): void {
    // Clear error when user starts typing
    switch (field) {
      case 'title':
        this.subtaskTitleError = '';
        break;
      // Category removed from subtasks - URLs use parent task's category
      // case 'category': removed
      case 'status':
        this.subtaskStatusError = '';
        break;
      case 'priority':
        this.subtaskPriorityError = '';
        break;
    }
  }

  async loadAvailableSubtaskUrls(): Promise<void> {
    // Subtasks don't have categories, use parent task's category
    const parentCategory = this.parentTaskForSubtask?.category || this.parentTaskForLevel1Subtask?.category;
    if (!parentCategory) {
      this.availableSubtaskUrls = [];
      return;
    }

    // Get category ID from category masters
    const categoryMaster = this.categoryMasters.find(c => c.category === parentCategory.name);
    if (!categoryMaster) {
      this.availableSubtaskUrls = [];
      return;
    }

    try {
      this.loadingSubtaskUrls = true;
      const urls = await this.notesService.getAvailableUrls(categoryMaster.id);
      // Filter out URLs that are already added (by comparing label and url)
      const existingUrls = (this.newSubtask.urls || []).map((u: any) => `${u.label}|${u.url}`);
      this.availableSubtaskUrls = urls.filter((u: any) => !existingUrls.includes(`${u.label}|${u.url}`));
    } catch (err: any) {
      console.warn('Failed to load available URLs:', err);
      this.availableSubtaskUrls = [];
    } finally {
      this.loadingSubtaskUrls = false;
    }
  }

  toggleAddSubtaskUrlDropdown(): void {
    // Subtasks don't have categories, use parent task's category
    const parentCategory = this.parentTaskForSubtask?.category || this.parentTaskForLevel1Subtask?.category;
    if (!parentCategory) {
      return;
    }
    this.showAddSubtaskUrlDropdown = !this.showAddSubtaskUrlDropdown;
    if (this.showAddSubtaskUrlDropdown && this.availableSubtaskUrls.length === 0) {
      this.loadAvailableSubtaskUrls();
    }
  }

  addSubtaskUrlFromMaster(): void {
    if (!this.selectedSubtaskUrlId) {
      return;
    }

    const selectedUrl = this.availableSubtaskUrls.find((u: any) => u.url_id === this.selectedSubtaskUrlId);
    if (!selectedUrl) {
      return;
    }

    if (!this.newSubtask.urls) {
      this.newSubtask.urls = [];
    }

    // Add URL to subtask
    this.newSubtask.urls.push({
      label: selectedUrl.label,
      url: selectedUrl.url
    });

    // Remove from available URLs
    this.availableSubtaskUrls = this.availableSubtaskUrls.filter((u: any) => u.url_id !== this.selectedSubtaskUrlId);
    this.selectedSubtaskUrlId = null;
    this.showAddSubtaskUrlDropdown = false;
  }

  removeSubtaskUrl(index: number): void {
    if (this.newSubtask.urls && this.newSubtask.urls[index]) {
      const removedUrl = this.newSubtask.urls[index];
      this.newSubtask.urls.splice(index, 1);

      // Add back to available URLs if it was from master
      if (removedUrl.label && removedUrl.url) {
        // Reload available URLs (uses parent task's category)
        const parentCategory = this.parentTaskForSubtask?.category || this.parentTaskForLevel1Subtask?.category;
        if (parentCategory) {
          this.loadAvailableSubtaskUrls();
        }
      }
    }
  }

  // Nested Subtask Methods
  addNestedSubtask(taskId: number, parentSubtaskId: number, nestedParentId?: number): void {
    // Get default status (is_default = true, or first available)
    const defaultStatus = this.statuses.find(s => s.is_default === true || Boolean(s.is_default)) ||
      (this.statuses.length > 0 ? this.statuses[0] : null);
    const statusValue = defaultStatus ? { name: defaultStatus.status as any, color: defaultStatus.color } :
      (this.getDefaultStatus() || null);

    // Get default priority (is_default = true, or first available)
    const defaultPriority = this.priorities.find(p => p.is_default === true || Boolean(p.is_default)) ||
      (this.priorities.length > 0 ? this.priorities[0] : null);
    const priorityValue = defaultPriority ? { name: defaultPriority.priority as any, color: defaultPriority.color } :
      (this.getDefaultPriority() || null);

    (this.getService() as any).addSubtask(taskId, {
      title: 'New Nested Subtask',
      description: '',
      status: statusValue,
      priority: priorityValue,
      category: this.categoryMasters.length > 0 ? { name: this.categoryMasters[0].category, icon: this.categoryMasters[0].icon } : null,
      // @ts-ignore
      taskOnDate: null,
      startTime: '09:00',
      endTime: '17:00',
      estimatedHours: 0
    }, nestedParentId || parentSubtaskId);
  }

  updateNestedSubtaskStatus(taskId: number, parentSubtaskId: number, nestedSubtaskId: number, status: Subtask['status']): void {
    (this.getService() as any).updateSubtask(taskId, nestedSubtaskId, { status });
  }

  editNestedSubtask(taskId: number, parentSubtaskId: number, nestedSubtask: Subtask): void {
    const newTitle = prompt('Edit nested subtask title:', nestedSubtask.title);
    if (newTitle && newTitle.trim()) {
      (this.getService() as any).updateSubtask(taskId, nestedSubtask.id, { title: newTitle.trim() });
    }
  }

  async deleteNestedSubtask(taskId: number, parentSubtaskId: number, nestedSubtaskId: number): Promise<void> {
    const task = this.tasks.find(t => t.id === taskId);
    if (!task || !task.subtasks) return;

    const nestedSubtask = this.findSubtaskById(task.subtasks, nestedSubtaskId);
    const subtaskTitle = nestedSubtask?.title || 'this nested subtask';

    const confirmed = await this.confirmationService.confirm({
      title: 'Delete Nested Subtask',
      message: `Are you sure you want to delete "${subtaskTitle}"? This action cannot be undone.`,
      confirmText: 'Delete',
      cancelText: 'Cancel',
      confirmClass: 'danger'
    });

    if (confirmed) {
      this.getService().deleteSubtask(taskId, nestedSubtaskId);
    }
  }

  editSubtask(taskId: number, subtask: Subtask): void {
    const newTitle = prompt('Edit subtask title:', subtask.title);
    if (newTitle && newTitle.trim()) {
      (this.getService() as any).updateSubtask(taskId, subtask.id, { title: newTitle.trim() });
    }
  }

  // Track by functions for performance
  trackBySubtaskId(index: number, subtask: Subtask): number {
    return subtask.id;
  }

  updateSubtaskStatus(taskId: number, subtaskId: number, status: Subtask['status']): void {
    // Check if this is a Level 1 subtask trying to be checked
    if (this.isCompletedStatus(status)) {
      const task = this.getService().getTask(taskId);
      if (task) {
        const subtask = (this.getService() as any).findSubtask(task as any, subtaskId);
        if (subtask && subtask.level === 1 && subtask.subtasks && subtask.subtasks.length > 0) {
          // Check if all Level 2 subtasks are completed
          const allLevel2Completed = subtask.subtasks.every((level2Subtask: any) => this.isCompletedStatus(level2Subtask.status));
          if (!allLevel2Completed) {
            // Prevent checking Level 1 subtask if not all Level 2 subtasks are done
            return;
          }
        }
      }
    }

    this.updateSubtask(taskId, subtaskId, { status });
  }

  // Helper methods to get objects from master data
  private getStatusFromMaster(statusName: string): Task['status'] | null {
    const status = this.statuses.find(s => s.status.toLowerCase() === statusName.toLowerCase());
    if (!status) return null;
    return { name: status.status as any, color: status.color };
  }

  private getPriorityFromMaster(priorityName: string): Task['priorityLevel'] | null {
    const priority = this.priorities.find(p => p.priority.toLowerCase() === priorityName.toLowerCase());
    if (!priority) return null;
    return { name: priority.priority as any, color: priority.color };
  }

  // Helper method to get default status (is_default = true, or first available)
  private getDefaultStatus(): Task['status'] | null {
    // Handle both boolean true and string "true" cases, and also check for truthy values
    const defaultStatus = this.statuses.find(s => s.is_default === true || Boolean(s.is_default)) ||
      (this.statuses.length > 0 ? this.statuses[0] : null);
    return defaultStatus ? { name: defaultStatus.status as any, color: defaultStatus.color } : null;
  }

  // Helper method to get default priority (is_default = true, or first available)
  private getDefaultPriority(): Task['priorityLevel'] | null {
    // Handle both boolean true and string "true" cases, and also check for truthy values
    const defaultPriority = this.priorities.find(p => p.is_default === true || Boolean(p.is_default)) ||
      (this.priorities.length > 0 ? this.priorities[0] : null);
    return defaultPriority ? { name: defaultPriority.priority as any, color: defaultPriority.color } : null;
  }

  // Compare function for status dropdown to match objects by property values
  // This ensures Angular can properly match the selected value even if object references differ
  compareCategory(category1: Task['category'] | null, category2: Task['category'] | null): boolean {
    if (!category1 || !category2) return category1 === category2;
    return category1.name?.toLowerCase() === category2.name?.toLowerCase();
  }

  compareStatus(status1: Task['status'] | null, status2: Task['status'] | null): boolean {
    if (!status1 || !status2) return status1 === status2;
    // Case-insensitive comparison for name
    return status1.name?.toLowerCase() === status2.name?.toLowerCase();
  }

  // Compare function for priority dropdown to match objects by property values
  // This ensures Angular can properly match the selected value even if object references differ
  comparePriority(priority1: Task['priorityLevel'] | null, priority2: Task['priorityLevel'] | null): boolean {
    if (!priority1 || !priority2) return priority1 === priority2;
    // Case-insensitive comparison for name
    return priority1.name?.toLowerCase() === priority2.name?.toLowerCase();
  }

  // Helper method to find a status by name (for dynamic lookups)
  private findStatusByName(statusName: string): Task['status'] | null {
    return this.getStatusFromMaster(statusName);
  }

  // Helper method to check if a status represents completion
  // This checks if the status exists in master data and if it's the last status in the workflow
  // For now, we'll use a simple heuristic: if status exists and is not the default status, it might be completed
  // In a real system, you might have a 'is_completed' flag in the status master
  private isCompletedStatus(status: Task['status'] | null): boolean {
    if (!status) return false;
    // Check if this status exists in master data
    const masterStatus = this.statuses.find(s => s.status.toLowerCase() === status.name.toLowerCase());
    if (!masterStatus) return false;
    // If there's a way to determine completion from master data, use it
    // For now, we'll check if it's not the default status (heuristic)
    // This is a simple approach - in production, you'd want a proper flag in the status master
    return !masterStatus.is_default;
  }

  private getCategoryFromMaster(categoryName?: string): { name: string; icon: string } | null {
    if (!categoryName) {
      return this.categoryMasters.length > 0
        ? { name: this.categoryMasters[0].category, icon: this.categoryMasters[0].icon }
        : null;
    }
    const category = this.categoryMasters.find(c => c.category.toLowerCase() === categoryName.toLowerCase());
    if (!category) return null;
    return { name: category.category, icon: category.icon };
  }

  getSubtaskStatusColor(status: Subtask['status']): string {
    // Get color from master data
    const masterStatus = this.statuses.find(s => s.status.toLowerCase() === status.name.toLowerCase());
    return masterStatus ? masterStatus.color : '#6B7280';
  }

  getSubtaskPriorityColor(priority: Subtask['priority']): string {
    // Get color from master data
    const masterPriority = this.priorities.find(p => p.priority.toLowerCase() === priority.name.toLowerCase());
    return masterPriority ? masterPriority.color : '#F97316';
  }

  // View methods for tasks and subtasks
  viewTask(taskId: number): void {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      this.selectedTask = task;
      this.showTaskDetailsModal = true;
    }
  }

  viewSubtask(taskId: number, subtask: Subtask): void {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      this.selectedTask = task;
      this.selectedSubtask = subtask;
      this.showSubtaskDetailsModal = true;
    }
  }

  // Level 1 Subtask Operations
  addLevel2SubtaskToLevel1(taskId: number, level1Subtask: Subtask): void {
    const task = this.tasks.find(t => t.id === taskId);
    if (!task || !level1Subtask) return;

    this.parentTaskForLevel1Subtask = task;
    this.parentLevel1SubtaskForLevel2 = level1Subtask;
    this.initializeSubtaskDefaults();
    this.showAddLevel2SubtaskModal = true;
  }

  editLevel1Subtask(taskId: number, level1Subtask: Subtask): void {
    const task = this.tasks.find(t => t.id === taskId);
    if (!task || !level1Subtask) return;

    this.parentTaskForLevel1Subtask = task;

    // Debug: Log the original subtask values
    console.log('Editing level 1 subtask - original values:', {
      startTime: level1Subtask.startTime,
      endTime: level1Subtask.endTime,
      estimatedHours: level1Subtask.estimatedHours,
      priorityOrder: level1Subtask.priorityOrder
    });

    // Create a copy and explicitly preserve all field values
    // Preserve actual values - don't override with defaults if values exist
    this.selectedLevel1Subtask = {
      ...level1Subtask,
      // Explicitly preserve all fields to ensure they're populated in the form
      title: level1Subtask.title ?? '',
      description: level1Subtask.description ?? '',
      // Preserve time values - only default if null/undefined, preserve empty strings and actual times
      startTime: level1Subtask.startTime != null && level1Subtask.startTime !== '' ? level1Subtask.startTime : '00:00',
      endTime: level1Subtask.endTime != null && level1Subtask.endTime !== '' ? level1Subtask.endTime : '00:00',
      // Preserve estimatedHours - preserve 0 and other numbers, only default if null/undefined
      estimatedHours: level1Subtask.estimatedHours != null ? level1Subtask.estimatedHours : 0,
      // Preserve priorityOrder - can be null, preserve actual numbers
      priorityOrder: level1Subtask.priorityOrder,
      status: level1Subtask.status,
      priority: level1Subtask.priority,
      completed: level1Subtask.completed ?? false,
      important: (level1Subtask as any).important ?? false
    };

    // Debug: Log the values after processing
    console.log('Editing level 1 subtask - processed values:', {
      startTime: this.selectedLevel1Subtask.startTime,
      endTime: this.selectedLevel1Subtask.endTime,
      estimatedHours: this.selectedLevel1Subtask.estimatedHours,
      priorityOrder: this.selectedLevel1Subtask.priorityOrder
    });

    // Set date from parent task in YYYY-MM-DD format (disabled in form)
    if (this.parentTaskForLevel1Subtask.taskOnDate) {
      const date = new Date(this.parentTaskForLevel1Subtask.taskOnDate);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      (this.selectedLevel1Subtask as any).taskOnDate = `${year}-${month}-${day}`;
    } else {
      (this.selectedLevel1Subtask as any).taskOnDate = null;
    }

    // Set category from parent task (for display only, disabled in form)
    if (this.parentTaskForLevel1Subtask.category) {
      (this.selectedLevel1Subtask as any).category = {
        name: this.parentTaskForLevel1Subtask.category.name,
        icon: this.parentTaskForLevel1Subtask.category.icon
      };
    } else {
      (this.selectedLevel1Subtask as any).category = null;
    }

    // Match status and priority to master list objects for proper dropdown binding
    // Angular [ngValue] uses reference equality, so we need to match the exact objects from master lists
    if (this.selectedLevel1Subtask.status?.name) {
      const matchedStatus = this.statuses.find(s =>
        s.status.toLowerCase() === this.selectedLevel1Subtask?.status?.name?.toLowerCase()
      );
      if (matchedStatus) {
        // Create object matching the dropdown option structure
        (this.selectedLevel1Subtask as any).status = { name: matchedStatus.status, color: matchedStatus.color };
      }
    }

    if (this.selectedLevel1Subtask.priority?.name) {
      const matchedPriority = this.priorities.find(p =>
        p.priority.toLowerCase() === this.selectedLevel1Subtask?.priority?.name?.toLowerCase()
      );
      if (matchedPriority) {
        // Create object matching the dropdown option structure
        (this.selectedLevel1Subtask as any).priority = { name: matchedPriority.priority, color: matchedPriority.color };
      }
    }

    this.showEditLevel1SubtaskModal = true;
  }

  viewLevel1Subtask(taskId: number, level1Subtask: Subtask): void {
    const task = this.tasks.find(t => t.id === taskId);
    if (!task || !level1Subtask) return;

    this.parentTaskForLevel1Subtask = task;

    // Create a copy and ensure category and taskOnDate are set from parent
    this.selectedLevel1Subtask = { ...level1Subtask };

    // Set date from parent task in YYYY-MM-DD format (for display)
    if (this.parentTaskForLevel1Subtask.taskOnDate) {
      const date = new Date(this.parentTaskForLevel1Subtask.taskOnDate);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      (this.selectedLevel1Subtask as any).taskOnDate = this.parentTaskForLevel1Subtask.taskOnDate;
    } else {
      (this.selectedLevel1Subtask as any).taskOnDate = null;
    }

    // Set category from parent task (for display only)
    if (this.parentTaskForLevel1Subtask.category) {
      (this.selectedLevel1Subtask as any).category = {
        name: this.parentTaskForLevel1Subtask.category.name,
        icon: this.parentTaskForLevel1Subtask.category.icon
      };
    } else {
      (this.selectedLevel1Subtask as any).category = null;
    }

    this.showViewLevel1SubtaskModal = true;
  }

  updateLevel1Subtask(): void {
    if (!this.selectedLevel1Subtask || !this.parentTaskForLevel1Subtask) {
      console.error('Cannot update: selectedLevel1Subtask or parentTaskForLevel1Subtask is missing');
      return;
    }

    // Validate form for edit (using selectedLevel1Subtask instead of newSubtask)
    if (!this.validateEditLevel1SubtaskForm()) {
      console.error('Validation failed for level 1 subtask');
      return;
    }

    // Get priority ID and status ID from masters
    const priorityId = this.priorities.find(p => p.priority === this.selectedLevel1Subtask?.priority?.name)?.id || null;
    const statusId = this.statuses.find(s => s.status === this.selectedLevel1Subtask?.status?.name)?.id || null;

    // Prepare subtask data matching API structure
    // Use nullish coalescing to preserve 0 and empty string values
    const subtaskData: any = {
      id: this.selectedLevel1Subtask.id,
      title: this.selectedLevel1Subtask.title,
      description: this.selectedLevel1Subtask.description ?? null,
      priority_level_id: priorityId,
      status_id: statusId,
      start_time: this.selectedLevel1Subtask.startTime ?? null,
      end_time: this.selectedLevel1Subtask.endTime ?? null,
      estimated_hours: this.selectedLevel1Subtask.estimatedHours ?? null,
      priority_order: this.selectedLevel1Subtask.priorityOrder ?? null,
      important: (this.selectedLevel1Subtask as any).important ?? false,
      completed: this.selectedLevel1Subtask.completed ?? false
    };

    console.log('Updating level 1 subtask with data:', subtaskData);

    this.task2Service.updateLevel1Subtask(subtaskData).subscribe({
      next: (response: any) => {
        console.log('Update response:', response);
        if (response.success) {
          this.toaster.success(response.message || 'Level 1 subtask updated successfully');
          this.showEditLevel1SubtaskModal = false;
          this.selectedLevel1Subtask = null;
          this.parentTaskForLevel1Subtask = null;
          this.task2Service.refreshTasks();
        } else {
          this.toaster.error(response.message || 'Failed to update level 1 subtask');
        }
      },
      error: (error: any) => {
        console.error('Update error:', error);
        this.toaster.error(error.error?.message || 'Failed to update level 1 subtask');
      }
    });
  }

  closeEditLevel1SubtaskModal(): void {
    this.showEditLevel1SubtaskModal = false;
    this.selectedLevel1Subtask = null;
    this.parentTaskForLevel1Subtask = null;
  }

  closeViewLevel1SubtaskModal(): void {
    this.showViewLevel1SubtaskModal = false;
    this.selectedLevel1Subtask = null;
    this.parentTaskForLevel1Subtask = null;
  }

  // Helper method to open edit modal from view modal
  openEditLevel1SubtaskFromView(): void {
    if (!this.selectedLevel1Subtask || !this.parentTaskForLevel1Subtask) return;

    // Save references before closing view modal
    const subtask = { ...this.selectedLevel1Subtask };
    const taskId = this.parentTaskForLevel1Subtask.id;
    const parentTask = this.parentTaskForLevel1Subtask;

    // Close view modal first
    this.showViewLevel1SubtaskModal = false;

    // Use setTimeout to ensure smooth transition (view modal closes before edit opens)
    setTimeout(() => {
      // Restore references and open edit modal
      this.parentTaskForLevel1Subtask = parentTask;
      this.editLevel1Subtask(taskId, subtask);
    }, 100);
  }

  // Level 2 Subtask Operations
  editLevel2Subtask(taskId: number, level1Subtask: Subtask, level2Subtask: Subtask): void {
    const task = this.tasks.find(t => t.id === taskId);
    if (!task || !level1Subtask || !level2Subtask) return;

    this.parentTaskForLevel1Subtask = task;
    this.parentLevel1SubtaskForLevel2 = level1Subtask;
    this.selectedLevel2Subtask = { ...level2Subtask };

    // Set category from parent main task (Level 2 subtasks inherit from main task)
    if (this.parentTaskForLevel1Subtask?.category) {
      (this.selectedLevel2Subtask as any).category = this.parentTaskForLevel1Subtask.category;
    }

    // Set taskOnDate from parent Level 1 subtask (which inherits from main task) and format to YYYY-MM-DD
    if (this.parentLevel1SubtaskForLevel2?.taskOnDate) {
      const date = new Date(this.parentLevel1SubtaskForLevel2.taskOnDate);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      (this.selectedLevel2Subtask as any).taskOnDate = `${year}-${month}-${day}`;
    } else if (this.selectedLevel2Subtask.taskOnDate) {
      // Fallback to existing taskOnDate if parent doesn't have one
      const date = new Date(this.selectedLevel2Subtask.taskOnDate);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      (this.selectedLevel2Subtask as any).taskOnDate = `${year}-${month}-${day}`;
    }

    // Preserve actual values - only default if null/undefined (preserves 0, false, empty string)
    (this.selectedLevel2Subtask as any).startTime = this.selectedLevel2Subtask.startTime ?? '';
    (this.selectedLevel2Subtask as any).endTime = this.selectedLevel2Subtask.endTime ?? '';
    (this.selectedLevel2Subtask as any).estimatedHours = this.selectedLevel2Subtask.estimatedHours ?? 0;
    (this.selectedLevel2Subtask as any).priorityOrder = this.selectedLevel2Subtask.priorityOrder ?? null;
    (this.selectedLevel2Subtask as any).completed = this.selectedLevel2Subtask.completed ?? false;
    (this.selectedLevel2Subtask as any).important = (this.selectedLevel2Subtask as any).important ?? false;

    // Match status and priority to master list objects for proper dropdown binding
    // Angular [ngValue] uses reference equality, so we need to match the exact objects from master lists
    if (this.selectedLevel2Subtask.status?.name) {
      const matchedStatus = this.statuses.find(s =>
        s.status.toLowerCase() === this.selectedLevel2Subtask?.status?.name?.toLowerCase()
      );
      if (matchedStatus) {
        // Create object matching the dropdown option structure
        (this.selectedLevel2Subtask as any).status = { name: matchedStatus.status, color: matchedStatus.color };
      }
    }

    if (this.selectedLevel2Subtask.priority?.name) {
      const matchedPriority = this.priorities.find(p =>
        p.priority.toLowerCase() === this.selectedLevel2Subtask?.priority?.name?.toLowerCase()
      );
      if (matchedPriority) {
        // Create object matching the dropdown option structure
        (this.selectedLevel2Subtask as any).priority = { name: matchedPriority.priority, color: matchedPriority.color };
      }
    }

    this.showEditLevel2SubtaskModal = true;
  }

  viewLevel2Subtask(taskId: number, level1Subtask: Subtask, level2Subtask: Subtask): void {
    const task = this.tasks.find(t => t.id === taskId);
    if (!task || !level1Subtask || !level2Subtask) return;

    this.parentTaskForLevel1Subtask = task;
    this.parentLevel1SubtaskForLevel2 = level1Subtask;
    this.selectedLevel2Subtask = { ...level2Subtask };
    this.showViewLevel2SubtaskModal = true;
  }

  updateLevel2Subtask(): void {
    if (!this.selectedLevel2Subtask || !this.parentTaskForLevel1Subtask || !this.parentLevel1SubtaskForLevel2) return;

    // Validate form
    if (!this.validateEditLevel2SubtaskForm()) {
      return;
    }

    // Get priority ID and status ID from masters
    const priorityId = this.priorities.find(p => p.priority === this.selectedLevel2Subtask?.priority?.name)?.id || null;
    const statusId = this.statuses.find(s => s.status === this.selectedLevel2Subtask?.status?.name)?.id || null;

    // Prepare subtask data matching API structure
    // Use nullish coalescing to preserve 0, false, and empty string values
    const estimatedHours = this.selectedLevel2Subtask.estimatedHours ?? 0;
    const subtaskData: any = {
      id: this.selectedLevel2Subtask.id,
      title: this.selectedLevel2Subtask.title,
      description: this.selectedLevel2Subtask.description ?? null,
      priority_level_id: priorityId,
      status_id: statusId,
      start_time: this.selectedLevel2Subtask.startTime ?? null,
      end_time: this.selectedLevel2Subtask.endTime ?? null,
      estimated_hours: estimatedHours ?? null, // Supports decimal values
      priority_order: this.selectedLevel2Subtask.priorityOrder ?? null,
      important: (this.selectedLevel2Subtask as any).important ?? false,
      completed: this.selectedLevel2Subtask.completed ?? false
    };

    if (this.viewMode === 'periodic-tasks') {
      const periodicSubtaskData: any = {
        title: this.selectedLevel2Subtask.title,
        description: this.selectedLevel2Subtask.description || null,
        startTime: this.selectedLevel2Subtask.startTime || '09:00',
        endTime: this.selectedLevel2Subtask.endTime || '17:00',
        estimatedHours: estimatedHours || null,
        priorityOrder: this.selectedLevel2Subtask.priorityOrder ?? null,
        completed: this.selectedLevel2Subtask.completed || false
      };

      this.periodicTaskService.updateSubtask(this.parentTaskForLevel1Subtask.id, this.selectedLevel2Subtask.id, periodicSubtaskData).subscribe({
        next: (response: any) => {
          this.toaster.success('Periodic level 2 subtask updated successfully');
          this.showEditLevel2SubtaskModal = false;
          this.selectedLevel2Subtask = null;
          this.parentTaskForLevel1Subtask = null;
          this.parentLevel1SubtaskForLevel2 = null;
          this.periodicTaskService.refreshTasks();
        },
        error: (error: any) => {
          this.toaster.error('Failed to update periodic level 2 subtask');
        }
      });
      return;
    }

    this.task2Service.updateLevel2Subtask(subtaskData).subscribe({
      next: (response: any) => {
        if (response.success) {
          this.toaster.success(response.message || 'Level 2 subtask updated successfully');
          this.showEditLevel2SubtaskModal = false;
          this.selectedLevel2Subtask = null;
          this.parentTaskForLevel1Subtask = null;
          this.parentLevel1SubtaskForLevel2 = null;
          this.task2Service.refreshTasks();
        } else {
          this.toaster.error(response.message || 'Failed to update level 2 subtask');
        }
      },
      error: (error: any) => {
        this.toaster.error(error.error?.message || 'Failed to update level 2 subtask');
      }
    });
  }

  closeEditLevel2SubtaskModal(): void {
    this.showEditLevel2SubtaskModal = false;
    this.selectedLevel2Subtask = null;
    this.parentTaskForLevel1Subtask = null;
    this.parentLevel1SubtaskForLevel2 = null;
  }

  closeViewLevel2SubtaskModal(): void {
    this.showViewLevel2SubtaskModal = false;
    this.selectedLevel2Subtask = null;
    this.parentTaskForLevel1Subtask = null;
    this.parentLevel1SubtaskForLevel2 = null;
  }

  // Helper method to open edit modal from view modal
  openEditLevel2SubtaskFromView(): void {
    if (!this.selectedLevel2Subtask || !this.parentTaskForLevel1Subtask || !this.parentLevel1SubtaskForLevel2) return;

    // Save references before closing view modal
    const subtask = { ...this.selectedLevel2Subtask };
    const taskId = this.parentTaskForLevel1Subtask.id;
    const parentTask = this.parentTaskForLevel1Subtask;
    const parentLevel1Subtask = this.parentLevel1SubtaskForLevel2;

    // Close view modal first
    this.showViewLevel2SubtaskModal = false;

    // Use setTimeout to ensure smooth transition (view modal closes before edit opens)
    setTimeout(() => {
      // Restore references and open edit modal
      this.parentTaskForLevel1Subtask = parentTask;
      this.parentLevel1SubtaskForLevel2 = parentLevel1Subtask;
      this.editLevel2Subtask(taskId, parentLevel1Subtask, subtask);
    }, 100);
  }

  // Validation for edit Level 2 subtask form
  validateEditLevel2SubtaskForm(): boolean {
    let isValid = true;

    // Reset errors
    this.subtaskTitleError = '';
    this.subtaskStatusError = '';
    this.subtaskPriorityError = '';

    // Validate title
    if (!this.selectedLevel2Subtask?.title || !this.selectedLevel2Subtask.title.trim()) {
      this.subtaskTitleError = 'Subtask title is required';
      isValid = false;
    }

    // Validate status
    if (!this.selectedLevel2Subtask?.status || !this.selectedLevel2Subtask.status.name) {
      this.subtaskStatusError = 'Status is required';
      isValid = false;
    }

    // Validate priority
    if (!this.selectedLevel2Subtask?.priority || !this.selectedLevel2Subtask.priority.name) {
      this.subtaskPriorityError = 'Priority is required';
      isValid = false;
    }

    return isValid;
  }

  // Get category for Level 2 subtask (inherited from parent main task)
  getLevel2SubtaskCategory(): { name: string; icon: string } | null {
    if (!this.selectedLevel2Subtask) return null;
    return (this.selectedLevel2Subtask as any).category || this.parentTaskForLevel1Subtask?.category || null;
  }

  addLevel2Subtask(): void {
    if (!this.parentTaskForLevel1Subtask || !this.parentLevel1SubtaskForLevel2) return;

    // Validate form
    if (!this.validateSubtaskForm()) {
      return;
    }

    // Get priority ID and status ID from masters
    const priorityId = this.priorities.find(p => p.priority === this.newSubtask.priority?.name)?.id || null;
    const statusId = this.statuses.find(s => s.status === this.newSubtask.status?.name)?.id || null;

    // estimated_hours now supports decimals
    const estimatedHours = this.newSubtask.estimatedHours;

    // Prepare subtask data matching API structure (Level 2 Subtask)
    // Use nullish coalescing to preserve 0 and empty string values
    const subtaskData: any = {
      tasks2_level_1_sub_task_id: this.parentLevel1SubtaskForLevel2.id,
      title: this.newSubtask.title,
      description: this.newSubtask.description ?? null,
      priority_level_id: priorityId,
      status_id: statusId,
      start_time: this.newSubtask.startTime ?? null,
      end_time: this.newSubtask.endTime ?? null,
      estimated_hours: estimatedHours ?? null,
      priority_order: this.newSubtask.priorityOrder ?? null,
      important: this.newSubtask.important ?? false,
      completed: this.newSubtask.completed ?? false
    };

    if (this.viewMode === 'periodic-tasks') {
      // For periodic tasks
      const subtaskData: any = {
        title: this.newSubtask.title,
        description: this.newSubtask.description || null,
        startTime: this.newSubtask.startTime || '09:00',
        endTime: this.newSubtask.endTime || '17:00',
        estimatedHours: estimatedHours || null,
        priorityOrder: this.newSubtask.priorityOrder ?? null,
        completed: this.newSubtask.completed || false
      };

      this.periodicTaskService.addSubtask(this.parentTaskForLevel1Subtask.id, subtaskData, this.parentLevel1SubtaskForLevel2.id).subscribe({
        next: (response: any) => {
          this.toaster.success('Periodic level 2 subtask added successfully');
          this.resetNewSubtask();
          this.showAddLevel2SubtaskModal = false;
          this.parentTaskForLevel1Subtask = null;
          this.parentLevel1SubtaskForLevel2 = null;
          this.periodicTaskService.refreshTasks();
        },
        error: (error: any) => {
          this.toaster.error('Failed to add periodic level 2 subtask');
        }
      });
      return;
    }

    this.task2Service.addLevel2Subtask(subtaskData).subscribe({
      next: (response: any) => {
        if (response.success) {
          this.toaster.success(response.message || 'Level 2 subtask added successfully');
          this.resetNewSubtask();
          this.showAddLevel2SubtaskModal = false;
          this.parentTaskForLevel1Subtask = null;
          this.parentLevel1SubtaskForLevel2 = null;
          this.task2Service.refreshTasks();
        } else {
          this.toaster.error(response.message || 'Failed to add level 2 subtask');
        }
      },
      error: (error: any) => {
        this.toaster.error(error.error?.message || 'Failed to add level 2 subtask');
      }
    });
  }

  closeAddLevel2SubtaskModal(): void {
    this.showAddLevel2SubtaskModal = false;
    this.resetNewSubtask();
    this.parentTaskForLevel1Subtask = null;
    this.parentLevel1SubtaskForLevel2 = null;
  }

  getPriorityColor(priority: Task['priorityLevel'] | Subtask['priority']): string {
    if (!priority) {
      const defaultPriority = this.priorities.find(p => p.is_default === true) || this.priorities[0];
      return defaultPriority ? defaultPriority.color : '#F97316';
    }
    const masterPriority = this.priorities.find(p => p.priority.toLowerCase() === priority.name.toLowerCase());
    return masterPriority ? masterPriority.color : '#F97316';
  }

  getStatusColor(status: Task['status'] | Subtask['status']): string {
    if (!status) {
      const defaultStatus = this.statuses.find(s => s.is_default === true) || this.statuses[0];
      return defaultStatus ? defaultStatus.color : '#6B7280';
    }
    const masterStatus = this.statuses.find(s => s.status.toLowerCase() === status.name.toLowerCase());
    return masterStatus ? masterStatus.color : '#6B7280';
  }

  getTasksByStatus(status: string): Task[] {
    return this.filteredTasks.filter(task => task.status?.name === status);
  }

  // Helper methods for template to get priority/status objects from master data
  getPriorityObjectByName(priorityName: string): Task['priorityLevel'] | null {
    return this.getPriorityFromMaster(priorityName);
  }

  getStatusObjectByName(statusName: string): Task['status'] | null {
    return this.getStatusFromMaster(statusName);
  }

  getOverdueTasksCount(): number {
    return this.taskStats.overdue;
  }

  getTaskCompletionRate(): number {
    return this.taskStats.completionRate;
  }

  getAverageTaskDuration(): number {
    return this.taskStats.averageDuration;
  }

  getCategoryIcon(categoryName: string): string {
    const category = this.categories.find(c => c.name === categoryName);
    return category?.icon || '📋';
  }

  onStatusChange(taskId: number, event: Event): void {
    const target = event.target as HTMLSelectElement;
    if (target && target.value) {
      const newStatus = this.getStatusObject(target.value);
      this.updateTaskStatus(taskId, newStatus);
    }
  }

  getProgressPercentage(task: Task): number {
    // Calculate progress from subtasks based on checkbox state (completed field)
    if (!task.subtasks || task.subtasks.length === 0) {
      return 0;
    }

    const allSubtasks = this.getAllSubtasksFlat(task.subtasks);
    if (allSubtasks.length === 0) return 0;

    // Progress is based on checkboxes being checked (completed === true)
    const completedSubtasks = allSubtasks.filter(subtask => subtask.completed === true).length;

    return Math.round((completedSubtasks / allSubtasks.length) * 100);
  }

  isOverdue(task: Task): boolean {
    const d: any = (task as any)['taskOnDate'];
    if (!d) return false;
    return d < new Date() && !this.isCompletedStatus(task.status);
  }

  // Drag and Drop Methods
  onDragStart(event: DragEvent, task: Task): void {
    this.draggedTask = task;
    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('text/html', '');
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = 'move';
    }
  }

  onDrop(event: DragEvent, targetStatus: string): void {
    event.preventDefault();
    if (this.draggedTask && this.draggedTask.status?.name !== targetStatus) {
      const statusObj = this.getStatusObject(targetStatus) as Task['status'];
      this.getService().moveTask(this.draggedTask.id, statusObj);
    }
    this.draggedTask = null;
  }

  onDragEnd(): void {
    this.draggedTask = null;
  }

  private getStatusObject(statusName: string): Task['status'] {
    const status = this.getStatusFromMaster(statusName);
    if (status) return status;
    // Fallback to default status (is_default = true) or first available
    const defaultStatus = this.statuses.find(s => s.is_default === true) || this.statuses[0];
    if (defaultStatus) {
      return { name: defaultStatus.status as any, color: defaultStatus.color };
    }
    // Last resort - should not happen if master data is loaded
    return this.getDefaultStatus() || null;
  }

  // Task Management Methods
  editTask(task: Task): void {
    // Handle periodic tasks separately
    if (this.viewMode === 'periodic-tasks') {
      const periodicTask = task as any;
      this.newPeriodicTask = {
        id: periodicTask.id,
        title: periodicTask.title,
        description: periodicTask.description,
        category: periodicTask.category,
        priorityLevel: periodicTask.priorityLevel,
        status: periodicTask.status,
        startDate: periodicTask.startDate,
        startTime: periodicTask.startTime,
        endTime: periodicTask.endTime,
        estimatedHours: periodicTask.estimatedHours,
        remarks: periodicTask.remarks,
        important: periodicTask.important,
        urls: periodicTask.urls || [],
        recurrence_pattern: periodicTask.recurrence_pattern || 'daily',
        recurrence_interval: periodicTask.recurrence_interval || 1,
        recurrence_days: periodicTask.recurrence_days || [],
        recurrence_month_day: periodicTask.recurrence_month_day || 1,
        recurrence_week_of_month: periodicTask.recurrence_week_of_month || 1,
        recurrence_day_of_week: periodicTask.recurrence_day_of_week || 1,
        recurrence_month: periodicTask.recurrence_month || 1,
        recurrence_end_type: periodicTask.recurrence_end_type || 'never',
        recurrence_end_date: periodicTask.recurrence_end_date || null,
        recurrence_occurrences: periodicTask.recurrence_occurrences || null
      };
      this.monthlyRepeatType = 'day';
      this.showEditPeriodicTaskModal = true;
      return;
    }

    this.selectedTask = { ...task };
    // Convert taskOnDate to YYYY-MM-DD format if it exists
    if (this.selectedTask.taskOnDate) {
      const date = new Date(this.selectedTask.taskOnDate);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      (this.selectedTask as any).taskOnDate = `${year}-${month}-${day}`;
    }
    // Ensure URLs array exists
    if (!this.selectedTask.urls) {
      (this.selectedTask as any).urls = [];
    }

    // Store original IDs before any transformations
    // Helper function to normalize status name for comparison
    const normalizeStatusName = (name: string): string => {
      return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    };

    // Helper function to normalize priority/status name for comparison
    const normalizeName = (name: string): string => {
      return name.toLowerCase().trim();
    };

    // Find and store original priority_level_id
    let priorityId: number | null = null;
    if (this.selectedTask.priorityLevel?.name && this.priorities.length > 0) {
      const matchedPriority = this.priorities.find(p =>
        normalizeName(p.priority) === normalizeName(this.selectedTask?.priorityLevel?.name || '')
      );
      if (matchedPriority) {
        priorityId = matchedPriority.id;
        this.selectedTask.priorityLevel = {
          name: matchedPriority.priority.toLowerCase() as 'low' | 'medium' | 'high' | 'urgent' | 'normal',
          color: matchedPriority.color
        };
      } else {
        console.warn('Priority not found:', this.selectedTask.priorityLevel.name, 'Available:', this.priorities.map(p => p.priority));
      }
    }

    // Find and store original status_id
    let statusId: number | null = null;
    if (this.selectedTask.status?.name && this.statuses.length > 0) {
      // Try to match by normalizing both names
      const taskStatusName = normalizeStatusName(this.selectedTask.status.name);
      const matchedStatus = this.statuses.find(s => {
        const statusName = normalizeStatusName(s.status);
        return statusName === taskStatusName ||
          normalizeName(s.status) === normalizeName(this.selectedTask?.status?.name || '');
      });
      if (matchedStatus) {
        statusId = matchedStatus.id;
        this.selectedTask.status = {
          name: matchedStatus.status.toLowerCase().replace(/\s+/g, '-') as 'todo' | 'in-progress' | 'review' | 'done' | 'open',
          color: matchedStatus.color
        };
      } else {
        console.warn('Status not found:', this.selectedTask.status.name, 'Available:', this.statuses.map(s => s.status));
      }
    }

    // Match category to master list objects for proper dropdown binding
    if (this.selectedTask.category?.name && this.categoryMasters.length > 0) {
      const matchedCategory = this.categoryMasters.find(c =>
        normalizeName(c.category) === normalizeName(this.selectedTask?.category?.name || '')
      );
      if (matchedCategory) {
        this.selectedTask.category = { name: matchedCategory.category, icon: matchedCategory.icon };
      } else {
        console.warn('Category not found:', this.selectedTask.category.name, 'Available:', this.categoryMasters.map(c => c.category));
      }
    }

    // Store original IDs for use in updateTask (URL IDs will be added after URLs are loaded)
    this.originalTaskIds = {
      priority_level_id: priorityId,
      status_id: statusId,
      url_ids: []
    };

    // Load available URLs if category is set, then store URL IDs
    if (this.selectedTask.category) {
      // First, try to extract URL IDs directly from task URLs if they have url_id property
      const urlIds: number[] = [];
      if (this.selectedTask.urls && this.selectedTask.urls.length > 0) {
        for (const url of this.selectedTask.urls) {
          // Check if URL already has url_id stored (from API response)
          if ((url as any).url_id) {
            urlIds.push((url as any).url_id);
          }
        }
      }

      // Store initial URL IDs (will be updated after loading all URLs)
      if (this.originalTaskIds) {
        this.originalTaskIds.url_ids = urlIds;
      }

      // Load all available URLs (including existing ones) to get IDs for any missing ones
      this.loadAllUrlsForEdit().then(() => {
        // After all URLs are loaded, match and store any missing URL IDs
        if (this.selectedTask && this.selectedTask.urls && this.selectedTask.urls.length > 0) {
          const taskUrls = this.selectedTask.urls;
          const currentUrlIds = this.originalTaskIds?.url_ids || [];

          for (const url of taskUrls) {
            // If URL doesn't have url_id, try to find it in all available URLs
            if (!(url as any).url_id) {
              const matchedUrl = this.allAvailableUrlsForEdit.find(au =>
                (au.label && url.label && normalizeName(au.label) === normalizeName(url.label)) ||
                (au.url && url.url && normalizeName(au.url) === normalizeName(url.url))
              );
              if (matchedUrl && matchedUrl.url_id) {
                // Set url_id directly on the URL object so updateTask() can find it
                (url as any).url_id = matchedUrl.url_id;
                if (!currentUrlIds.includes(matchedUrl.url_id)) {
                  currentUrlIds.push(matchedUrl.url_id);
                }
              }
            } else {
              // URL already has url_id, make sure it's in the stored IDs
              if (!currentUrlIds.includes((url as any).url_id)) {
                currentUrlIds.push((url as any).url_id);
              }
            }
          }

          // Update stored URL IDs
          if (this.originalTaskIds) {
            this.originalTaskIds.url_ids = currentUrlIds;
          }
        }
      });

      // Also load filtered URLs for the dropdown (this filters out already-added URLs)
      this.loadAvailableUrlsForEdit();
    }
    this.showEditTaskModal = true;
  }

  // Store all available URLs for edit (without filtering)
  allAvailableUrlsForEdit: any[] = [];

  // Load all available URLs for edit task modal (without filtering - used for ID matching)
  async loadAllUrlsForEdit(): Promise<void> {
    if (!this.selectedTask?.category) {
      this.allAvailableUrlsForEdit = [];
      return;
    }

    // Helper function to normalize names for comparison
    const normalizeName = (name: string): string => {
      return name.toLowerCase().trim();
    };

    // Get category ID from category masters
    const categoryMaster = this.categoryMasters.find(c =>
      normalizeName(c.category) === normalizeName(this.selectedTask?.category?.name || '')
    );
    if (!categoryMaster) {
      this.allAvailableUrlsForEdit = [];
      return;
    }

    try {
      const urls = await this.notesService.getAvailableUrls(categoryMaster.id);
      // Store all URLs (without filtering) for ID matching
      this.allAvailableUrlsForEdit = urls || [];
    } catch (err: any) {
      console.warn('Failed to load all URLs for edit:', err);
      this.allAvailableUrlsForEdit = [];
    }
  }

  // Load available URLs for edit task modal (uses selectedTask instead of newTask)
  // This filters out already-added URLs for the dropdown
  async loadAvailableUrlsForEdit(): Promise<void> {
    if (!this.selectedTask?.category) {
      this.availableUrls = [];
      return;
    }

    // Helper function to normalize names for comparison
    const normalizeName = (name: string): string => {
      return name.toLowerCase().trim();
    };

    // Get category ID from category masters
    const categoryMaster = this.categoryMasters.find(c =>
      normalizeName(c.category) === normalizeName(this.selectedTask?.category?.name || '')
    );
    if (!categoryMaster) {
      this.availableUrls = [];
      return;
    }

    try {
      this.loadingUrls = true;
      const urls = await this.notesService.getAvailableUrls(categoryMaster.id);
      // Filter out URLs that are already added (by comparing label and url)
      const existingUrls = (this.selectedTask.urls || []).map((u: any) => `${u.label}|${u.url}`);
      this.availableUrls = urls.filter((u: any) => !existingUrls.includes(`${u.label}|${u.url}`));
    } catch (err: any) {
      console.warn('Failed to load available URLs:', err);
      this.availableUrls = [];
    } finally {
      this.loadingUrls = false;
    }
  }

  viewTaskDetails(task: Task): void {
    this.selectedTask = { ...task };
    this.showViewTaskModal = true;
  }

  updateTask(): void {
    if (!this.selectedTask) return;

    // Validate form
    if (!this.validateEditTaskForm()) {
      return;
    }

    // Helper function to normalize names for comparison
    const normalizeName = (name: string): string => {
      return name.toLowerCase().trim();
    };

    const normalizeStatusName = (name: string): string => {
      return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    };

    // Get category ID from masters (this works fine)
    const categoryId = this.categoryMasters.find(c =>
      normalizeName(c.category) === normalizeName(this.selectedTask?.category?.name || '')
    )?.id || null;

    // Use stored original IDs if available, otherwise try to find by matching names
    let priorityId: number | null = null;
    if (this.originalTaskIds?.priority_level_id !== null && this.originalTaskIds?.priority_level_id !== undefined) {
      // Use stored ID, but verify it still matches the selected priority
      const currentPriorityName = this.selectedTask?.priorityLevel?.name;
      const storedPriority = this.priorities.find(p => p.id === this.originalTaskIds!.priority_level_id);
      if (storedPriority && normalizeName(storedPriority.priority) === normalizeName(currentPriorityName || '')) {
        priorityId = this.originalTaskIds.priority_level_id;
      } else {
        // Priority changed, find new ID
        priorityId = this.priorities.find(p =>
          normalizeName(p.priority) === normalizeName(currentPriorityName || '')
        )?.id || null;
      }
    } else {
      // No stored ID, try to find by name
      priorityId = this.priorities.find(p =>
        normalizeName(p.priority) === normalizeName(this.selectedTask?.priorityLevel?.name || '')
      )?.id || null;
    }

    let statusId: number | null = null;
    if (this.originalTaskIds?.status_id !== null && this.originalTaskIds?.status_id !== undefined) {
      // Use stored ID, but verify it still matches the selected status
      const currentStatusName = this.selectedTask?.status?.name;
      const storedStatus = this.statuses.find(s => s.id === this.originalTaskIds!.status_id);
      if (storedStatus) {
        const storedStatusNormalized = normalizeStatusName(storedStatus.status);
        const currentStatusNormalized = normalizeStatusName(currentStatusName || '');
        if (storedStatusNormalized === currentStatusNormalized ||
          normalizeName(storedStatus.status) === normalizeName(currentStatusName || '')) {
          statusId = this.originalTaskIds.status_id;
        } else {
          // Status changed, find new ID
          const taskStatusName = normalizeStatusName(currentStatusName || '');
          statusId = this.statuses.find(s => {
            const statusName = normalizeStatusName(s.status);
            return statusName === taskStatusName ||
              normalizeName(s.status) === normalizeName(currentStatusName || '');
          })?.id || null;
        }
      }
    } else {
      // No stored ID, try to find by name
      const taskStatusName = normalizeStatusName(this.selectedTask?.status?.name || '');
      statusId = this.statuses.find(s => {
        const statusName = normalizeStatusName(s.status);
        return statusName === taskStatusName ||
          normalizeName(s.status) === normalizeName(this.selectedTask?.status?.name || '');
      })?.id || null;
    }

    // Extract URL IDs - only use URLs that are currently in selectedTask.urls
    // This ensures removed URLs are not included
    let urlIds: number[] = [];

    // First, check if URLs have url_id property directly (from API response or when added)
    if (this.selectedTask.urls && this.selectedTask.urls.length > 0) {
      for (const url of this.selectedTask.urls) {
        if ((url as any).url_id && !urlIds.includes((url as any).url_id)) {
          urlIds.push((url as any).url_id);
        }
      }
    }

    // If some URLs don't have url_id, try to match from all available URLs
    if (this.selectedTask.urls && this.selectedTask.urls.length > 0 && this.allAvailableUrlsForEdit.length > 0) {
      for (const url of this.selectedTask.urls) {
        // If URL doesn't have url_id yet, try to find it
        if (!(url as any).url_id) {
          const matchedUrl = this.allAvailableUrlsForEdit.find(au =>
            (au.label && url.label && normalizeName(au.label) === normalizeName(url.label)) ||
            (au.url && url.url && normalizeName(au.url) === normalizeName(url.url))
          );
          if (matchedUrl && matchedUrl.url_id && !urlIds.includes(matchedUrl.url_id)) {
            urlIds.push(matchedUrl.url_id);
            // Also set it on the URL object for future reference
            (url as any).url_id = matchedUrl.url_id;
          }
        }
      }
    }

    // Fallback: If we still have URLs without IDs, check originalTaskIds for any that match current URLs
    // This handles edge cases where URLs were loaded before allAvailableUrlsForEdit was populated
    if (urlIds.length < (this.selectedTask.urls?.length || 0) && this.originalTaskIds?.url_ids) {
      // Only include IDs from originalTaskIds if the corresponding URL is still in selectedTask.urls
      for (const storedId of this.originalTaskIds.url_ids) {
        // Check if this ID corresponds to a URL that's still in selectedTask.urls
        const urlWithId = this.selectedTask.urls?.find((u: any) => (u as any).url_id === storedId);
        if (urlWithId && !urlIds.includes(storedId)) {
          urlIds.push(storedId);
        } else if (!urlWithId) {
          // Try to match by finding the URL in allAvailableUrlsForEdit
          const matchedUrl = this.allAvailableUrlsForEdit.find(au => au.url_id === storedId);
          if (matchedUrl) {
            // Check if a URL with matching label/url exists in selectedTask.urls
            const matchingUrl = this.selectedTask.urls?.find((u: any) =>
              (matchedUrl.label && u.label && normalizeName(matchedUrl.label) === normalizeName(u.label)) ||
              (matchedUrl.url && u.url && normalizeName(matchedUrl.url) === normalizeName(u.url))
            );
            if (matchingUrl && !urlIds.includes(storedId)) {
              urlIds.push(storedId);
              // Set url_id on the URL object
              (matchingUrl as any).url_id = storedId;
            }
          }
        }
      }
    }

    // Prepare task data matching API structure
    const taskData: any = {
      id: this.selectedTask.id,
      title: this.selectedTask.title,
      description: this.selectedTask.description || null,
      priority_level_id: priorityId,
      status_id: statusId,
      category_id: categoryId,
      task_on_date: this.selectedTask.taskOnDate ? new Date(this.selectedTask.taskOnDate).toISOString().split('T')[0] : null,
      start_time: this.selectedTask.startTime || null,
      end_time: this.selectedTask.endTime || null,
      estimated_hours: this.selectedTask.estimatedHours || null,
      priority_order: (this.selectedTask as any).priorityOrder || null,
      remarks: (this.selectedTask as any).remarks || null,
      url_ids: urlIds.length > 0 ? urlIds : null,
      important: this.selectedTask.important || false,
      completed: this.selectedTask.completed || false,
      periodic_tasks_main_task_id: (this.selectedTask as any).periodicTask?.id || null
    };

    this.task2Service.updateMainTask(taskData).subscribe({
      next: (response: any) => {
        if (response.success) {
          this.toaster.success(response.message || 'Main task updated successfully');
          this.showEditTaskModal = false;
          this.selectedTask = null;
          this.originalTaskIds = null; // Clear stored IDs
          this.task2Service.refreshTasks();
        } else {
          this.toaster.error(response.message || 'Failed to update main task');
        }
      },
      error: (error: any) => {
        this.toaster.error(error.error?.message || 'Failed to update main task');
      }
    });
  }

  validateEditTaskForm(): boolean {
    if (!this.selectedTask) return false;

    let isValid = true;

    // Validate title
    if (!this.selectedTask.title || !this.selectedTask.title.trim()) {
      isValid = false;
    }

    // Validate category
    if (!this.selectedTask.category || !this.selectedTask.category.name) {
      isValid = false;
    }

    // Validate status
    if (!this.selectedTask.status || !this.selectedTask.status.name) {
      isValid = false;
    }

    // Validate priority
    if (!this.selectedTask.priorityLevel || !this.selectedTask.priorityLevel.name) {
      isValid = false;
    }

    return isValid;
  }

  duplicateTask(task: Task): void {
    const defaultStatus = this.getDefaultStatus() || null;
    const duplicatedTask = (this.getService() as any).createTask({
      ...task,
      title: `${task.title} (Copy)`,
      status: defaultStatus
    });
  }

  toggleTaskImportant(taskId: number): void {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      const newImportantStatus = !task.important;
      task.important = newImportantStatus;
      task.updatedAt = new Date();

      // Call the dedicated API endpoint for updating important status
      this.task2Service.updateTaskImportant(taskId, newImportantStatus).subscribe({
        next: (response: any) => {
          if (response.success) {
            // Status already updated in UI, just refresh to ensure sync
            this.task2Service.refreshTasks();
          } else {
            // Revert on error
            task.important = !newImportantStatus;
            this.toaster.error(response.message || 'Failed to update task important status');
          }
        },
        error: (error: any) => {
          // Revert on error
          task.important = !newImportantStatus;
          this.toaster.error(error.error?.message || 'Failed to update task important status');
        }
      });

      this.filterTasks();
    }
  }

  updateTaskCompleted(taskId: number, completed: boolean): void {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      const previousCompleted = task.completed;
      task.completed = completed;
      task.updatedAt = new Date();

      // Call the dedicated API endpoint for updating completed status
      this.task2Service.updateTaskCompleted(taskId, completed).subscribe({
        next: (response: any) => {
          if (response.success) {
            // Status already updated in UI, just refresh to ensure sync
            this.task2Service.refreshTasks();
          } else {
            // Revert on error
            task.completed = previousCompleted;
            this.toaster.error(response.message || 'Failed to update task completed status');
          }
        },
        error: (error: any) => {
          // Revert on error
          task.completed = previousCompleted;
          this.toaster.error(error.error?.message || 'Failed to update task completed status');
        }
      });

      this.filterTasks();
    }
  }

  updateSubtaskCompleted(taskId: number, subtaskId: number, completed: boolean, sub_task: any): void {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      const subtask = sub_task;//(this.getService() as any).findSubtask(task as any, subtaskId);
      if (subtask) {
        const previousCompleted = subtask.completed;
        subtask.completed = completed;
        subtask.updatedAt = new Date();
        task.updatedAt = new Date();

        // Determine if it's Level 1 or Level 2 subtask and call the appropriate API
        const isLevel1 = subtask.level === 1;
        const isLevel2 = subtask.level === 2;

        let apiCall: Observable<any>;
        if (isLevel1) {
          apiCall = this.task2Service.updateLevel1SubtaskCompleted(subtaskId, completed);
        } else if (isLevel2) {
          apiCall = this.task2Service.updateLevel2SubtaskCompleted(subtaskId, completed);
        } else {
          // Fallback for other levels (shouldn't happen, but handle gracefully)
          console.warn('Unknown subtask level:', subtask.level);
          return;
        }

        apiCall.subscribe({
          next: (response: any) => {
            if (response.success) {
              // Status already updated in UI, just refresh to ensure sync
              this.task2Service.refreshTasks();
            } else {
              // Revert on error
              subtask.completed = previousCompleted;
              this.toaster.error(response.message || 'Failed to update subtask completed status');
            }
          },
          error: (error: any) => {
            // Revert on error
            subtask.completed = previousCompleted;
            this.toaster.error(error.error?.message || 'Failed to update subtask completed status');
          }
        });

        // Refresh filtered tasks to update progress calculation
        this.filterTasks();
      }
    }
  }

  archiveTask(taskId: number): void {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      // Find a non-default status (assuming non-default statuses might represent completion)
      // In a real system, you'd have an 'is_completed' flag in status master
      const completionStatus = this.statuses.find(s => !s.is_default) || this.statuses[this.statuses.length - 1];
      if (completionStatus) {
        task.status = { name: completionStatus.status as any, color: completionStatus.color };
      } else if (this.statuses.length > 0) {
        task.status = { name: this.statuses[0].status as any, color: this.statuses[0].color };
      }
      task.updatedAt = new Date();
      this.filterTasks();
    }
  }

  // Time Tracking Methods
  startTimeTracking(taskId: number): void {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      // In a real app, you'd start a timer here
      console.log(`Starting time tracking for task: ${task.title}`);
    }
  }

  logTime(taskId: number, hours: number): void {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      task.updatedAt = new Date();
      this.filterTasks();
    }
  }

  // Task Templates
  createTaskFromTemplate(templateType: string): void {
    // Get priorities dynamically from master data (using index-based selection)
    // In a real system, you'd have priority ordering or configuration
    const highPriority = this.priorities.length >= 3 ? this.priorities[2] : (this.priorities.length > 0 ? this.priorities[this.priorities.length - 1] : null);
    const mediumPriority = this.priorities.length >= 2 ? this.priorities[1] : (this.priorities.length > 0 ? this.priorities[0] : null);
    const lowPriority = this.priorities.length > 0 ? this.priorities[0] : null;

    // Get categories dynamically from master data (using first available)
    const firstCategory = this.categoryMasters.length > 0 ? this.categoryMasters[0] : null;
    const secondCategory = this.categoryMasters.length >= 2 ? this.categoryMasters[1] : firstCategory;

    const templates: { [key: string]: Partial<Task> } = {
      'bug-fix': {
        title: 'Bug Fix',
        description: 'Fix reported bug',
        priorityLevel: highPriority ? { name: highPriority.priority as any, color: highPriority.color } : null,
        category: firstCategory ? { name: firstCategory.category, icon: firstCategory.icon } : null,
        estimatedHours: 4
      },
      'feature': {
        title: 'New Feature',
        description: 'Implement new feature',
        priorityLevel: mediumPriority ? { name: mediumPriority.priority as any, color: mediumPriority.color } : null,
        category: firstCategory ? { name: firstCategory.category, icon: firstCategory.icon } : null,
        estimatedHours: 8
      },
      'research': {
        title: 'Research Task',
        description: 'Research and analyze',
        priorityLevel: lowPriority ? { name: lowPriority.priority as any, color: lowPriority.color } : null,
        category: secondCategory ? { name: secondCategory.category, icon: secondCategory.icon } : null,
        estimatedHours: 6
      }
    };

    const template = templates[templateType as keyof typeof templates];
    if (template) {
      this.newTask = { ...template };
      this.showAddTaskModal = true;
    }
  }

  // Quick Actions
  markAsUrgent(taskId: number): void {
    const task = this.tasks.find(t => t.id === taskId);
    if (task && this.priorities.length > 0) {
      // Use the highest priority (last in list, assuming sorted) or highest non-default
      const urgentPriority = this.priorities[this.priorities.length - 1] || this.priorities.find(p => !p.is_default) || this.priorities[0];
      if (urgentPriority) {
        task.priorityLevel = { name: urgentPriority.priority as any, color: urgentPriority.color };
        task.updatedAt = new Date();
        (this.getService() as any).updateTask(taskId, { priorityLevel: task.priorityLevel } as any);
        this.filterTasks();
      }
    }
  }

  markAsHighPriority(taskId: number): void {
    const task = this.tasks.find(t => t.id === taskId);
    if (task && this.priorities.length > 0) {
      // Use a high priority (second to last or high non-default)
      const highPriority = this.priorities.length >= 2 ? this.priorities[this.priorities.length - 2] :
        (this.priorities.find(p => !p.is_default) || this.priorities[0]);
      if (highPriority) {
        task.priorityLevel = { name: highPriority.priority as any, color: highPriority.color };
        task.updatedAt = new Date();
        (this.getService() as any).updateTask(taskId, { priorityLevel: task.priorityLevel } as any);
        this.filterTasks();
      }
    }
  }

  moveToInProgress(taskId: number): void {
    // Use the second status in the list (assuming workflow order) or first non-default
    // In a real system, you'd have status ordering or workflow configuration
    const inProgressStatus = this.statuses.find((s, index) => index === 1 || (!s.is_default && index > 0)) || this.statuses[0];
    if (inProgressStatus) {
      this.updateTaskStatus(taskId, { name: inProgressStatus.status as any, color: inProgressStatus.color });
    }
  }

  moveToReview(taskId: number): void {
    // Use the third status in the list (assuming workflow order) or a non-default status
    // In a real system, you'd have status ordering or workflow configuration
    const reviewStatus = this.statuses.find((s, index) => index === 2 || (!s.is_default && index > 1)) || this.statuses[1] || this.statuses[0];
    if (reviewStatus) {
      this.updateTaskStatus(taskId, { name: reviewStatus.status as any, color: reviewStatus.color });
    }
  }

  markAsDone(taskId: number): void {
    // Use the last status in the list (assuming it's completion) or a non-default status
    // In a real system, you'd have an 'is_completed' flag in status master
    const doneStatus = this.statuses[this.statuses.length - 1] || this.statuses.find(s => !s.is_default) || this.statuses[0];
    if (doneStatus) {
      this.updateTaskStatus(taskId, { name: doneStatus.status as any, color: doneStatus.color });
    }
  }

  private updateTaskProperty(taskId: number, property: keyof Task, value: any): void {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      (task as any)[property] = value;
      task.updatedAt = new Date();
      this.filterTasks();
    }
  }

  // Remove duplicate implementations - these are now handled by the service

  getTasksByPriority(priority: Task['priorityLevel']): Task[] {
    return this.filteredTasks.filter(task => task.priorityLevel === priority);
  }


  // Calendar Methods
  getTasksForDate(date: Date): Task[] {
    return this.filteredTasks.filter(task => {
      const d: any = (task as any)['taskOnDate'];
      if (!d) return false;
      return d.toDateString() === date.toDateString();
    });
  }

  getUpcomingTasks(days: number = 7): Task[] {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + days);

    return this.filteredTasks.filter(task => {
      const d: any = (task as any)['taskOnDate'];
      if (!d || this.isCompletedStatus(task.status)) return false;
      return d <= futureDate && d >= new Date();
    }).sort((a, b) => {
      const ad: any = (a as any)['taskOnDate'];
      const bd: any = (b as any)['taskOnDate'];
      return ((ad?.getTime()) || 0) - ((bd?.getTime()) || 0);
    });
  }

  // Calendar View Methods
  currentDate: Date = new Date();
  selectedDate: Date = new Date();

  getCalendarDays(): Date[] {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const days: Date[] = [];
    const current = new Date(startDate);

    for (let i = 0; i < 42; i++) {
      days.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }

    return days;
  }

  isCurrentMonth(date: Date): boolean {
    return date.getMonth() === this.currentDate.getMonth();
  }

  isToday(date: Date): boolean {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  }

  isSelectedDate(date: Date): boolean {
    return date.toDateString() === this.selectedDate.toDateString();
  }

  selectDate(date: Date): void {
    this.selectedDate = date;
  }

  previousMonth(): void {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
  }

  nextMonth(): void {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
  }

  getMonthName(): string {
    return this.currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  }

  getTasksForCalendarDate(date: Date): Task[] {
    return this.filteredTasks.filter(task => {
      const d: any = (task as any)['taskOnDate'];
      if (!d) return false;
      return d.toDateString() === date.toDateString();
    });
  }

  // Analytics Methods

  getRecentTasks(limit: number = 5): Task[] {
    return this.tasks
      .sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime())
      .slice(0, limit);
  }

  getTasksByCategory(categoryName: string): Task[] {
    return this.tasks.filter(task => task.category?.name === categoryName);
  }

  updateTaskEndDate(dateString: string): void {
    if (this.selectedTask) {
      (this.selectedTask as any)['taskOnDate'] = dateString ? new Date(dateString) : null;
    }
  }


  // Data Table Event Handlers
  onTableRowClick(row: TableData): void {
    const task = this.tasks.find(t => t.id === Number(row['id']));
    if (!task) return;
    if (this.viewMode === 'periodic-tasks') {
      this.openViewPeriodicTask(task);
    } else {
      this.viewTaskDetails(task);
    }
  }

  compareObjects(a: any, b: any): boolean {
    if (!a || !b) return a === b;
    return a.name === b.name && a.color === b.color;
  }

  onTableRowSelect(selectedRows: TableData[]): void {
    console.log('Selected rows:', selectedRows);
    // Handle bulk actions here
  }

  onTableActionClick(event: { action: string, row: TableData, subtask?: any }): void {
    // Handle navigation to periodic task
    if (event.action === 'navigate-to-periodic-task' && event.row['periodicTaskId']) {
      this.navigateToPeriodicTask(event.row['periodicTaskId']);
      return;
    }
    const task = this.tasks.find(t => t.id === Number(event.row['id']));
    if (!task) return;

    switch (event.action) {
      case 'add-subtask':
        this.addSubtaskToTask(Number(event.row['id']));
        break;
      case 'add-nested-subtask':
        // Legacy handler - keeping for backward compatibility but should use add-level2-subtask
        this.addNestedSubtask(Number(event.row['id']), event.subtask.id, event.subtask.id);
        break;
      case 'add-level2-subtask':
        // Add level 2 subtask to level 1 subtask - opens modal
        if (event.subtask && event.subtask.level === 1) {
          this.addLevel2SubtaskToLevel1(Number(event.row['id']), event.subtask);
        }
        break;
      case 'edit-task':
        this.editTask(task);
        break;
      case 'view-task':
        this.viewTaskDetails(task);
        break;
      case 'delete-task':
        this.deleteTask(task.id);
        break;
      case 'edit-subtask':
        // Check if it's a level 1 or level 2 subtask
        if (event.subtask.level === 1) {
          this.editLevel1Subtask(Number(event.row['id']), event.subtask);
        } else if (event.subtask.level === 2) {
          // Find the parent level 1 subtask
          const level1Subtask = task.subtasks.find(s => s.subtasks?.some(sub => sub.id === event.subtask.id));
          if (level1Subtask) {
            this.editLevel2Subtask(Number(event.row['id']), level1Subtask, event.subtask);
          }
        } else {
          this.editSubtask(Number(event.row['id']), event.subtask);
        }
        break;
      case 'view-subtask':
        // Check if it's a level 1 or level 2 subtask
        if (event.subtask.level === 1) {
          this.viewLevel1Subtask(Number(event.row['id']), event.subtask);
        } else if (event.subtask.level === 2) {
          // Find the parent level 1 subtask
          const level1Subtask = task.subtasks.find(s => s.subtasks?.some(sub => sub.id === event.subtask.id));
          if (level1Subtask) {
            this.viewLevel2Subtask(Number(event.row['id']), level1Subtask, event.subtask);
          }
        } else {
          this.openSubtaskModal(task, event.subtask);
        }
        break;
      case 'delete-subtask':
        this.deleteSubtask(Number(event.row['id']), event.subtask.id);
        break;
      case 'update-subtask-status':
        this.updateSubtaskStatus(Number(event.row['id']), Number(event.row['subtaskId']), event.row['status']);
        break;
      case 'toggle-task-expansion':
        this.getService().toggleTaskExpansion(Number(event.row['id']));
        break;
      case 'toggle-subtask-expansion':
        this.getService().toggleSubtaskExpansion(Number(event.row['id']), event.subtask.id);
        break;
      case 'edit':
        this.editTask(task);
        break;
      case 'delete':
        this.deleteTask(task.id);
        break;
      case 'duplicate':
        this.duplicateTask(task);
        break;
      case 'toggle-important':
        this.toggleTaskImportant(task.id);
        break;
      case 'toggle-main-task-completed':
        this.updateTaskCompleted(Number(event.row['id']), event.row['completed']);
        break;
      case 'toggle-subtask-completed':
        this.updateSubtaskCompleted(Number(event.row['id']), event.row['subtask'].id, event.row['subtask'].completed, event.row['subtask']);
        break;
    }
  }

  onTableSortChange(event: { column: string, direction: 'asc' | 'desc' }): void {
    console.log('Sort changed:', event);
    // The table component handles sorting internally
  }

  onTableFilterChange(event: { column: string, value: any }): void {
    console.log('Filter changed:', event);
    // The table component handles filtering internally
  }

  onTablePageChange(event: { page: number, pageSize: number }): void {
    console.log('Page changed:', event);
    // The table component handles pagination internally
  }

  // Convert time string to minutes
  private timeToMinutes(timeStr: string): number {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
  }

  // Calculate hours difference between start and end time
  private calculateTimeDifferenceHours(startTime: string, endTime: string): number | null {
    if (!startTime || !endTime || startTime === '00:00' && endTime === '00:00') {
      return null;
    }

    const startMinutes = this.timeToMinutes(startTime);
    const endMinutes = this.timeToMinutes(endTime);

    // Handle case where end time is next day (e.g., 23:00 to 02:00)
    let diffMinutes = endMinutes - startMinutes;
    if (diffMinutes < 0) {
      diffMinutes += 24 * 60; // Add 24 hours
    }

    // Convert minutes to hours (with 2 decimal places)
    return Math.round((diffMinutes / 60) * 100) / 100;
  }

  // Check if hours value doesn't match the calculated time difference
  hasHoursMismatch(task: Task): boolean {
    if (!task.startTime || !task.endTime || !task.estimatedHours) {
      return false;
    }

    // Skip if times are invalid (00:00 for both means not defined)
    if (task.startTime === '00:00' && task.endTime === '00:00') {
      return false;
    }

    const calculatedHours = this.calculateTimeDifferenceHours(task.startTime, task.endTime);
    if (calculatedHours === null) {
      return false;
    }

    // Compare with a small tolerance (0.01 hours = ~36 seconds) to account for rounding
    const tolerance = 0.01;
    return Math.abs(calculatedHours - task.estimatedHours) > tolerance;
  }

  // Check if priority_order is misaligned with start_time order for the same date
  hasOrderMismatch(task: Task): boolean {
    // Only check tasks with valid start_time and priority_order
    if (!task.startTime ||
      !task.taskOnDate ||
      task.startTime === '00:00' ||
      task.priorityOrder === null ||
      task.priorityOrder === undefined) {
      return false;
    }

    // Group tasks by date and get tasks on the same date
    const sameDateTasks = this.filteredTasks.filter(t => {
      if (!t.taskOnDate || !t.startTime || t.startTime === '00:00') {
        return false;
      }

      // Compare dates (normalize to date only, ignoring time)
      if (!task.taskOnDate || !t.taskOnDate) {
        return false;
      }
      const taskDate = new Date(task.taskOnDate);
      const otherDate = new Date(t.taskOnDate);
      return taskDate.getFullYear() === otherDate.getFullYear() &&
        taskDate.getMonth() === otherDate.getMonth() &&
        taskDate.getDate() === otherDate.getDate();
    });

    // Sort by start_time (ascending)
    const sortedByStartTime = [...sameDateTasks].sort((a, b) => {
      const aMinutes = this.timeToMinutes(a.startTime!);
      const bMinutes = this.timeToMinutes(b.startTime!);
      return aMinutes - bMinutes;
    });

    // Find the position of current task in start_time sorted list (1-based)
    const positionByStartTime = sortedByStartTime.findIndex(t => t.id === task.id) + 1;

    // Expected priority_order should match the position in start_time sorted list
    // If task is 1st by start_time, it should have Order=1, 2nd should have Order=2, etc.
    return task.priorityOrder !== positionByStartTime;
  }

  // Check if a task has schedule overlap with other tasks on the same date
  hasScheduleOverlap(task: Task): boolean {
    if (!task.taskOnDate || !task.startTime || !task.endTime) {
      return false;
    }

    // Skip if times are invalid (00:00 for both means not defined)
    if (task.startTime === '00:00' && task.endTime === '00:00') {
      return false;
    }

    const taskStart = this.timeToMinutes(task.startTime);
    const taskEnd = this.timeToMinutes(task.endTime);

    // Check for overlap with other tasks on the same date
    return this.filteredTasks.some(otherTask => {
      // Skip self
      if (otherTask.id === task.id) {
        return false;
      }

      // Must be on the same date
      if (!otherTask.taskOnDate ||
        !otherTask.startTime ||
        !otherTask.endTime ||
        otherTask.startTime === '00:00' && otherTask.endTime === '00:00') {
        return false;
      }

      // Compare dates (normalize to date only, ignoring time)
      if (!task.taskOnDate || !otherTask.taskOnDate) {
        return false;
      }
      const taskDate = new Date(task.taskOnDate);
      const otherDate = new Date(otherTask.taskOnDate);
      if (taskDate.getFullYear() !== otherDate.getFullYear() ||
        taskDate.getMonth() !== otherDate.getMonth() ||
        taskDate.getDate() !== otherDate.getDate()) {
        return false;
      }

      const otherStart = this.timeToMinutes(otherTask.startTime);
      const otherEnd = this.timeToMinutes(otherTask.endTime);

      // Check for time overlap: tasks overlap if one starts before the other ends
      return (taskStart < otherEnd && taskEnd > otherStart);
    });
  }

  // Transform tasks data for table
  getTableData(): TableData[] {
    // Always return a new array reference to ensure Angular change detection
    return this.filteredTasks.map((task, index) => {
      const hasOverlap = this.hasScheduleOverlap(task);
      const hasHoursMismatch = this.hasHoursMismatch(task);
      const hasOrderMismatch = this.hasOrderMismatch(task);

      const baseData: any = {
        id: String(task.id),
        title: task.title,
        description: task.description,
        priorityOrder: task.priorityOrder ?? null, // From backend API
        category: task.category,
        priorityLevel: task.priorityLevel,
        startTime: task.startTime,
        endTime: task.endTime,
        progress: this.getProgressPercentage(task),
        status: task.status,
        estimatedHours: task.estimatedHours,
        createdAt: task.createdAt,
        updatedAt: task.updatedAt,
        hours: task.estimatedHours != null ? `${task.estimatedHours}h` : null, // Only estimated hours
        remarks: task.remarks ? task.remarks.split('.').filter(r => r.trim()).map(r => r.trim() + '.') : [], // Convert remarks to list of points
        // URLs with labels, IDs, and credentials (similar to notes)
        urls: (task.urls || []).map((urlItem: any) => ({
          id: urlItem.id || null,
          label: urlItem.label || urlItem.url || '',
          url: urlItem.url || '',
          credentials: urlItem.credentials || []
        })),
        subtasks: task.subtasks,
        isExpanded: task.isExpanded, // Include expansion state
        important: task.important || false, // Include important status
        completed: task.completed || false, // Include completed status
        periodicTask: task.periodicTask || null, // Include periodic task object
        hasScheduleOverlap: hasOverlap, // Flag for schedule overlap
        hasHoursMismatch: hasHoursMismatch, // Flag for hours mismatch
        hasOrderMismatch: hasOrderMismatch // Flag for priority order mismatch with start time
      };

      // For periodic tasks view: include startDate and endDate
      if (this.viewMode === 'periodic-tasks') {
        const periodicTask = task as any;
        baseData.startDate = periodicTask.startDate || null;
        baseData.endDate = periodicTask.endDate || null;
      } else {
        // For regular tasks section: always include taskOnDate (preserve it even if periodicTask exists)
        baseData.taskOnDate = (task as any)['taskOnDate'] || null;
        // periodicTask object is already included in baseData above
      }

      return baseData;
    });
  }

  getRemarksList(remarks: string | null | undefined): string[] {
    if (!remarks) return [];
    return remarks.split('.').filter(r => r.trim()).map(r => r.trim());
  }

  hasUrls(task: Task | null | undefined): boolean {
    return !!(task?.urls && task.urls.length > 0);
  }

  getSubtaskCount(task: Task | null | undefined): number {
    if (!task || !task.subtasks) return 0;
    return this.getAllSubtasksFlat(task.subtasks).length;
  }

  hasDescription(task: Task | Subtask | null | undefined): boolean {
    return !!(task?.description && task.description.trim().length > 0);
  }

  hasRemarks(task: Task | null | undefined): boolean {
    return !!(task?.remarks && task.remarks.trim().length > 0);
  }

  // Comparison functions for select dropdowns to match objects by value instead of reference
  compareStatusOption(option1: any, option2: any): boolean {
    if (!option1 || !option2) return option1 === option2;
    return option1.name === option2.name && option1.color === option2.color;
  }

  comparePriorityOption(option1: any, option2: any): boolean {
    if (!option1 || !option2) return option1 === option2;
    return option1.name === option2.name && option1.color === option2.color;
  }

  // Getter for level 1 subtask category (for template binding)
  getLevel1SubtaskCategory(): { name: string; icon: string } | null {
    if (!this.selectedLevel1Subtask) return null;
    return (this.selectedLevel1Subtask as any).category || null;
  }

  // Helper method to open edit modal from view modal for periodic tasks
  openEditPeriodicTaskFromView(): void {
    if (!this.selectedPeriodicTask) return;

    const periodicTask = this.selectedPeriodicTask;
    this.newPeriodicTask = {
      id: periodicTask.id,
      title: periodicTask.title,
      description: periodicTask.description,
      category: periodicTask.category,
      priorityLevel: periodicTask.priorityLevel,
      status: periodicTask.status,
      startDate: periodicTask.startDate,
      startTime: periodicTask.startTime,
      endTime: periodicTask.endTime,
      estimatedHours: periodicTask.estimatedHours,
      remarks: periodicTask.remarks,
      important: periodicTask.important,
      urls: periodicTask.urls || [],
      recurrence_pattern: periodicTask.recurrence_pattern || 'daily',
      recurrence_interval: periodicTask.recurrence_interval || 1,
      recurrence_days: periodicTask.recurrence_days || [],
      recurrence_month_day: periodicTask.recurrence_month_day || 1,
      recurrence_week_of_month: periodicTask.recurrence_week_of_month || 1,
      recurrence_day_of_week: periodicTask.recurrence_day_of_week || 1,
      recurrence_month: periodicTask.recurrence_month || 1,
      recurrence_end_type: periodicTask.recurrence_end_type || 'never',
      recurrence_end_date: periodicTask.recurrence_end_date || null,
      recurrence_occurrences: periodicTask.recurrence_occurrences || null
    };

    this.monthlyRepeatType = this.newPeriodicTask.recurrence_month_day ? 'day' : 'week';
    this.showViewPeriodicTaskModal = false;
    this.showEditPeriodicTaskModal = true;
  }

  closeViewPeriodicTaskModal(): void {
    this.showViewPeriodicTaskModal = false;
    this.selectedPeriodicTask = null;
  }

  openViewPeriodicTask(task: any): void {
    this.selectedPeriodicTask = { ...task };
    this.showViewPeriodicTaskModal = true;
  }

  getSelectedDaysLabel(days: number[]): string[] {
    return days.map(day => this.weekDays.find(d => d.value === day)?.label || '').filter(d => d);
  }

}

