import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_CONFIG } from '../shared/config/api.config';

export interface CredentialInfo {
  id: number;
  provider: string;
  credential_name: string;
  credential_id: string;
}

export interface Subtask {
  id: number;
  title: string;
  description: string;
  status: { name: 'todo' | 'in-progress' | 'review' | 'done' | 'open'; color: string };
  priority: { name: 'low' | 'medium' | 'high' | 'urgent' | 'normal'; color: string };
  // Category removed - only main tasks have categories
  taskOnDate: Date | null;
  startTime: string;
  endTime: string;
  createdAt: Date;
  updatedAt: Date;
  estimatedHours: number;
  priorityOrder: number | null; // Priority order for sorting subtasks (nullable)
  subtasks?: Subtask[]; // Support for nested subtasks
  parentId?: number; // Reference to parent subtask
  level: number; // Level in hierarchy (1, 2, etc.)
  isExpanded?: boolean; // For UI expansion state
  completed?: boolean; // Field to mark subtask as completed
  remarks?: string | null; // Field for remarks
  urls?: { label: string; url: string }[] | null; // Field for multiple URLs with labels
  important?: boolean; // Field to mark subtask as important
}

export interface PeriodicTaskReference {
  id: number;
  startDate: Date | null;
  endDate: Date | null;
}

export interface Task {
  id: number;
  title: string;
  description: string | null;
  priorityLevel: { name: 'low' | 'medium' | 'high' | 'urgent' | 'normal'; color: string } | null; // Renamed from priority
  status: { name: 'todo' | 'in-progress' | 'review' | 'done' | 'open'; color: string } | null;
  category: { name: string; icon: string } | null;
  taskOnDate: Date | null;
  startTime: string | null;
  endTime: string | null;
  createdAt: Date;
  updatedAt: Date;
  estimatedHours: number | null;
  priorityOrder: number | null; // New field from backend API
  subtasks: Subtask[];
  progress: number; // Calculated progress based on subtasks
  isExpanded: boolean; // For UI expansion state
  remarks?: string | null; // New field for remarks
  urls?: { id?: number; label: string; url: string; credentials?: CredentialInfo[] }[] | null; // New field for multiple URLs with labels
  important?: boolean; // Field to mark task as important
  completed?: boolean; // Field to mark task as completed
  periodicTask?: PeriodicTaskReference | null; // Reference to periodic task object (nullable)
}

export interface TaskCategory {
  id: number;
  name: string;
  color: string;
  icon: string;
}

export interface TaskFilter {
  category?: string | string[];
  status?: string | string[];
  priority?: string | string[];
  important?: string; // 'all', 'starred', 'unstarred'
  searchQuery?: string;
  startDate?: string;
  endDate?: string;
}

export interface TaskStats {
  total: number;
  completed: number;
  inProgress: number;
  overdue: number;
  completionRate: number;
  averageDuration: number;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksSubject = new BehaviorSubject<Task[]>([]);
  public tasks$ = this.tasksSubject.asObservable();

  private categories: TaskCategory[] = [
    { id: 1, name: 'Development', color: '#2563EB', icon: '🚀' },
    { id: 2, name: 'Design', color: '#7C3AED', icon: '✨' },
    { id: 3, name: 'Marketing', color: '#059669', icon: '📊' },
    { id: 4, name: 'Operations', color: '#DC2626', icon: '⚡' },
    { id: 5, name: 'Research', color: '#EA580C', icon: '🔍' }
  ];

  constructor(private http: HttpClient) {
    this.loadTasksFromAPI();
  }

  private loadTasksFromAPI(): void {
    this.http.get<any>(API_CONFIG.tasks.getAll)
      .pipe(
        map(response => {
          const tasks = response.data || [];
          // Transform and normalize tasks to handle nullable fields
          return tasks.map((task: any) => this.normalizeTask(task));
        })
      )
      .subscribe({
        next: (tasks) => {
          this.tasksSubject.next(tasks);
        },
        error: (error) => {
          console.error('Error loading tasks from API:', error);
          // Fallback to sample data if API fails
          // this.initializeSampleTasks();
        }
      });
  }

  // Normalize subtask data from API
  private normalizeSubtask(subtask: any): Subtask {
    return {
      id: subtask.id,
      title: subtask.title || '',
      description: subtask.description || '',
      status: subtask.status ?? { name: 'todo', color: '#64748B' },
      priority: subtask.priority_level ?? subtask.priority ?? { name: 'medium', color: '#F97316' },
      // Category removed - only main tasks have categories
      // Backend sends taskOnDate for Subtasks (By date/day tasks)
      taskOnDate: subtask.taskOnDate ? new Date(subtask.taskOnDate) : (subtask.startDate ? new Date(subtask.startDate) : null),
      // Preserve actual time values - only default if null/undefined
      startTime: subtask.startTime ?? '',
      endTime: subtask.endTime ?? '',
      createdAt: subtask.createdAt ? new Date(subtask.createdAt) : new Date(),
      updatedAt: subtask.updatedAt ? new Date(subtask.updatedAt) : new Date(),
      // Preserve actual estimatedHours - only default if null/undefined (preserves 0)
      estimatedHours: subtask.estimatedHours ?? 0,
      priorityOrder: subtask.priority_order ?? null, // Priority order for sorting
      subtasks: subtask.subtasks ? subtask.subtasks.map((s: any) => this.normalizeSubtask(s)) : [],
      parentId: subtask.parentId,
      level: subtask.level || 1,
      isExpanded: subtask.isExpanded || false,
      completed: subtask.completed || false,
      remarks: subtask.remarks ?? null,
      urls: subtask.urls ?? null,
      important: subtask.important || false
    };
  }

  // Normalize task data from API to handle nullable fields - preserve null values
  private normalizeTask(task: any): Task {
    // Normalize periodic_task object if present
    let periodicTask: PeriodicTaskReference | null = null;
    if (task.periodic_task && task.periodic_task.id) {
      periodicTask = {
        id: task.periodic_task.id,
        startDate: task.periodic_task.startDate ? new Date(task.periodic_task.startDate) : null,
        endDate: task.periodic_task.endDate ? new Date(task.periodic_task.endDate) : null
      };
    }

    return {
      id: task.id,
      title: task.title || '',
      description: task.description ?? null,
      priorityLevel: task.priority_level ?? task.priority ?? null, // Map from priority_level (or fallback to priority for backward compatibility)
      status: task.status ?? null,
      category: task.category ?? null,
      // Backend sends taskOnDate for Tasks (By date/day tasks)
      taskOnDate: task.taskOnDate ? new Date(task.taskOnDate) : (task.startDate ? new Date(task.startDate) : null),
      startTime: task.startTime ?? null,
      endTime: task.endTime ?? null,
      createdAt: task.createdAt ? new Date(task.createdAt) : new Date(),
      updatedAt: task.updatedAt ? new Date(task.updatedAt) : new Date(),
      estimatedHours: task.estimatedHours ?? null,
      priorityOrder: task.priority_order ?? null, // New field from backend
      subtasks: task.subtasks ? task.subtasks.map((s: any) => this.normalizeSubtask(s)) : [],
      progress: 0, // Will be calculated dynamically, set to 0 for initialization
      isExpanded: task.isExpanded || false,
      remarks: task.remarks ?? null,
      urls: task.urls ?? null,
      important: task.important || false,
      completed: task.completed || false,
      periodicTask: periodicTask
    };
  }

  // Task CRUD Operations
  getTasks(): Observable<Task[]> {
    return this.tasks$;
  }

  getTask(id: number): Task | undefined {
    return this.tasksSubject.value.find(task => task.id === id);
  }

  createTask(taskData: Partial<Task>): Task {
    const task: Task = {
      id: this.generateId(),
      title: taskData.title || '',
      description: taskData.description || '',
      priorityLevel: taskData.priorityLevel || { name: 'medium', color: '#F97316' },
      status: taskData.status || { name: 'todo', color: '#64748B' },
      category: taskData.category || { name: 'General', icon: '📋' },
      taskOnDate: (taskData as any)['taskOnDate'] || null,
      startTime: taskData.startTime || '09:00',
      endTime: taskData.endTime || '17:00',
      createdAt: new Date(),
      updatedAt: new Date(),
      estimatedHours: taskData.estimatedHours || 0,
      priorityOrder: taskData.priorityOrder ?? null,
      subtasks: [],
      progress: 0,
      isExpanded: false,
      important: taskData.important || false,
      completed: taskData.completed || false
    };

    const tasks = [...this.tasksSubject.value, task];
    this.tasksSubject.next(tasks);
    return task;
  }

  updateTask(id: number, updates: Partial<Task>): Task | null {
    const tasks = this.tasksSubject.value;
    const taskIndex = tasks.findIndex(task => task.id === id);
    
    if (taskIndex === -1) return null;

    const updatedTask = {
      ...tasks[taskIndex],
      ...updates,
      updatedAt: new Date()
    };

    // Recalculate progress if subtasks changed
    if (updates.subtasks !== undefined) {
      updatedTask.progress = this.calculateTaskProgress(updatedTask);
    }

    tasks[taskIndex] = updatedTask;
    this.tasksSubject.next([...tasks]);
    return updatedTask;
  }

  deleteTask(id: number): boolean {
    const tasks = this.tasksSubject.value.filter(task => task.id !== id);
    this.tasksSubject.next(tasks);
    return true;
  }

  // Subtask Operations
  addSubtask(taskId: number, subtaskData: Partial<Subtask>, parentSubtaskId?: number): Subtask | null {
    const task = this.getTask(taskId);
    if (!task) return null;

    const level = parentSubtaskId ? this.getSubtaskLevel(task, parentSubtaskId) + 1 : 1;
    
    const subtask: Subtask = {
      id: this.generateId(),
      title: subtaskData.title || '',
      description: subtaskData.description || '',
      status: subtaskData.status || { name: 'todo', color: '#64748B' },
      priority: subtaskData.priority || { name: 'medium', color: '#F97316' },
      // Category removed from subtasks - only main tasks have categories
      taskOnDate: (subtaskData as any)['taskOnDate'] || null,
      startTime: subtaskData.startTime || '09:00',
      endTime: subtaskData.endTime || '17:00',
      createdAt: new Date(),
      updatedAt: new Date(),
      estimatedHours: subtaskData.estimatedHours || 0,
      priorityOrder: subtaskData.priorityOrder ?? null, // Priority order for sorting

      subtasks: [],
      parentId: parentSubtaskId,
      level: level,

      isExpanded: false // Default to collapsed
    };

    if (parentSubtaskId) {
      this.addSubtaskToParent(task, parentSubtaskId, subtask);
    } else {
      if (!task.subtasks) {
        task.subtasks = [];
      }
      task.subtasks.push(subtask);
    }

    // Update task progress and timestamp
    task.progress = this.calculateTaskProgress(task);
    task.updatedAt = new Date();

    this.tasksSubject.next([...this.tasksSubject.value]);
    return subtask;
  }

  updateSubtask(taskId: number, subtaskId: number, updates: Partial<Subtask>): Subtask | null {
    const task = this.getTask(taskId);
    if (!task) return null;

    const subtask = this.findSubtask(task, subtaskId);
    if (!subtask) return null;

    Object.assign(subtask, updates, { updatedAt: new Date() });

    // Update task progress
    task.progress = this.calculateTaskProgress(task);
    task.updatedAt = new Date();

    this.tasksSubject.next([...this.tasksSubject.value]);
    return subtask;
  }

  deleteSubtask(taskId: number, subtaskId: number): boolean {
    const task = this.getTask(taskId);
    if (!task) return false;

    const removed = this.removeSubtaskFromTask(task, subtaskId);
    if (removed) {
      task.progress = this.calculateTaskProgress(task);
      task.updatedAt = new Date();
      this.tasksSubject.next([...this.tasksSubject.value]);
    }

    return removed;
  }

  // Progress Calculation
  calculateTaskProgress(task: Task): number {
    if (!task.subtasks || task.subtasks.length === 0) {
      return 0;
    }

    const allSubtasks = this.getAllSubtasksFlat(task.subtasks);
    if (allSubtasks.length === 0) return 0;

    // Progress is based on checkboxes being checked (completed === true)
    const completedSubtasks = allSubtasks.filter(subtask => subtask.completed === true).length;
    return Math.round((completedSubtasks / allSubtasks.length) * 100);
  }

  // Drag and Drop Operations
  moveTask(taskId: number, newStatus: Task['status']): boolean {
    return this.updateTask(taskId, { status: newStatus }) !== null;
  }

  moveSubtask(taskId: number, subtaskId: number, newStatus: Subtask['status']): boolean {
    return this.updateSubtask(taskId, subtaskId, { status: newStatus }) !== null;
  }

  reorderSubtasks(taskId: number, subtaskIds: number[]): boolean {
    const task = this.getTask(taskId);
    if (!task || !task.subtasks || task.subtasks.length === 0) return false;

    // Reorder subtasks based on the provided order
    const reorderedSubtasks: Subtask[] = [];
    
    subtaskIds.forEach(id => {
      const subtask = task.subtasks!.find(s => s.id === id);
      if (subtask) {
        reorderedSubtasks.push(subtask);
      }
    });

    // Add any remaining subtasks that weren't in the reorder list
    task.subtasks.forEach(subtask => {
      if (!subtaskIds.includes(subtask.id)) {
        reorderedSubtasks.push(subtask);
      }
    });

    task.subtasks = reorderedSubtasks;
    task.updatedAt = new Date();
    this.tasksSubject.next([...this.tasksSubject.value]);
    return true;
  }

  // Filtering and Search
  filterTasks(filters: TaskFilter): Task[] {
    return this.tasksSubject.value.filter(task => {
      // Handle category filter (array or string)
      if (filters.category) {
        const categoryArray = Array.isArray(filters.category) ? filters.category : [filters.category];
        if (categoryArray.length > 0 && !categoryArray.includes('all')) {
          const taskCategory = task.category?.name || '';
          if (!categoryArray.includes(taskCategory)) {
            return false;
          }
        }
      }
      
      // Case-insensitive comparison for status (array or string)
      if (filters.status) {
        const statusArray = Array.isArray(filters.status) ? filters.status : [filters.status];
        if (statusArray.length > 0 && !statusArray.includes('all')) {
          const taskStatus = task.status?.name?.toLowerCase() || '';
          const matches = statusArray.some(s => s.toLowerCase() === taskStatus);
          if (!matches) {
            return false;
          }
        }
      }
      
      // Case-insensitive comparison for priority (array or string)
      if (filters.priority) {
        const priorityArray = Array.isArray(filters.priority) ? filters.priority : [filters.priority];
        if (priorityArray.length > 0 && !priorityArray.includes('all')) {
          const taskPriority = task.priorityLevel?.name?.toLowerCase() || '';
          const matches = priorityArray.some(p => p.toLowerCase() === taskPriority);
          if (!matches) {
            return false;
          }
        }
      }
      
      // Important/Starred filter
      if (filters.important && filters.important !== 'all') {
        const taskImportant = task.important || false;
        if (filters.important === 'starred' && !taskImportant) {
          return false;
        }
        if (filters.important === 'unstarred' && taskImportant) {
          return false;
        }
      }
      
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase();
        const matchesTitle = task.title?.toLowerCase().includes(query) || false;
        const matchesDescription = task.description?.toLowerCase().includes(query) || false;
        const matchesSubtasks = task.subtasks ? this.searchInSubtasks(task.subtasks, query) : false;
        
        if (!matchesTitle && !matchesDescription && !matchesSubtasks) {
          return false;
        }
      }
      // Date filtering: Applied on taskOnDate column
      // If taskOnDate is null, always include the task
      // If taskOnDate exists, check if it's within the date range [startDate, endDate]
      const taskOnDate = task.taskOnDate;
      
      // If both startDate and endDate filters are provided
      if (filters.startDate && filters.endDate) {
        // If taskOnDate is null, include the task
        if (!taskOnDate || taskOnDate === null) {
          // Include task - taskOnDate is null
        } else {
          // Apply date filter: taskOnDate must be within [startDate, endDate]
          const taskDate = new Date(taskOnDate);
          const startDate = new Date(filters.startDate);
          const endDate = new Date(filters.endDate);
          
          // Set time to start of day for accurate date comparison
          taskDate.setHours(0, 0, 0, 0);
          startDate.setHours(0, 0, 0, 0);
          endDate.setHours(23, 59, 59, 999);
          
          if (taskDate < startDate || taskDate > endDate) {
            return false;
          }
        }
      } else if (filters.startDate) {
        // Only startDate filter is provided
        if (!taskOnDate || taskOnDate === null) {
          // Include task - taskOnDate is null
        } else {
          const taskDate = new Date(taskOnDate);
          const startDate = new Date(filters.startDate);
          taskDate.setHours(0, 0, 0, 0);
          startDate.setHours(0, 0, 0, 0);
          if (taskDate < startDate) {
            return false;
          }
        }
      } else if (filters.endDate) {
        // Only endDate filter is provided
        if (!taskOnDate || taskOnDate === null) {
          // Include task - taskOnDate is null
        } else {
          const taskDate = new Date(taskOnDate);
          const endDate = new Date(filters.endDate);
          taskDate.setHours(0, 0, 0, 0);
          endDate.setHours(23, 59, 59, 999);
          if (taskDate > endDate) {
            return false;
          }
        }
      }
      return true;
    });
  }

  // Statistics
  getTaskStats(): TaskStats {
    const tasks = this.tasksSubject.value;
    const total = tasks.length;
    const completed = tasks.filter(t => t.status?.name === 'done').length;
    const inProgress = tasks.filter(t => t.status?.name === 'in-progress').length;
    const overdue = tasks.filter(t => this.isOverdue(t)).length;
    const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;
    
    const averageDuration = 0;

    return {
      total,
      completed,
      inProgress,
      overdue,
      completionRate,
      averageDuration
    };
  }

  // Categories
  getCategories(): TaskCategory[] {
    return [...this.categories];
  }

  // Utility Methods
  private generateId(): number {
    return Date.now();
  }


  private getSubtaskLevel(task: Task, subtaskId: number): number {
    const subtask = this.findSubtask(task, subtaskId);
    return subtask ? subtask.level : 0;
  }

  findSubtask(task: Task, subtaskId: number): Subtask | null {
    if (!task.subtasks || task.subtasks.length === 0) return null;
    const allSubtasks = this.getAllSubtasksFlat(task.subtasks);
    return allSubtasks.find(subtask => subtask.id === subtaskId) || null;
  }

  private getAllSubtasksFlat(subtasks: Subtask[]): Subtask[] {
    if (!subtasks || subtasks.length === 0) return [];
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

  // Helper method to sort subtasks by priorityOrder (ascending, nulls last)
  private sortSubtasksByPriorityOrder(subtasks: any[]): any[] {
    return [...subtasks].sort((a, b) => {
      const aOrder = a.priorityOrder ?? Number.MAX_SAFE_INTEGER;
      const bOrder = b.priorityOrder ?? Number.MAX_SAFE_INTEGER;
      return aOrder - bOrder;
    });
  }

  // Helper method to flatten all subtasks (including nested ones) with level information and respect expansion state
  getAllSubtasks(subtasks: any[]): any[] {
    const flattenedSubtasks: any[] = [];
    
    const addSubtasksWithLevel = (subtasks: any[], level: number = 1) => {
      // Sort subtasks by priorityOrder before processing
      const sortedSubtasks = this.sortSubtasksByPriorityOrder(subtasks);
      
      sortedSubtasks.forEach(subtask => {
        flattenedSubtasks.push({
          ...subtask,
          level: level
        });
        
        // Recursively add nested subtasks only if parent is expanded
        // Sort nested subtasks as well
        if (subtask.subtasks && subtask.subtasks.length > 0 && subtask.isExpanded) {
          // Sort nested subtasks before recursing
          subtask.subtasks = this.sortSubtasksByPriorityOrder(subtask.subtasks);
          addSubtasksWithLevel(subtask.subtasks, level + 1);
        }
      });
    };
    
    addSubtasksWithLevel(subtasks);
    return flattenedSubtasks;
  }

  // Toggle task expansion state
  toggleTaskExpansion(taskId: number): boolean {
    const task = this.getTask(taskId);
    if (!task) return false;
    
    task.isExpanded = !task.isExpanded;
    this.tasksSubject.next([...this.tasksSubject.value]);
    return task.isExpanded;
  }

  // Toggle subtask expansion state
  toggleSubtaskExpansion(taskId: number, subtaskId: number): boolean {
    const task = this.getTask(taskId);
    if (!task) return false;
    
    const subtask = this.findSubtaskById(task, subtaskId);
    if (!subtask) return false;
    
    subtask.isExpanded = !subtask.isExpanded;
    this.tasksSubject.next([...this.tasksSubject.value]);
    return subtask.isExpanded;
  }

  // Helper method to find subtask by ID recursively
  private findSubtaskById(task: Task, subtaskId: number): Subtask | null {
    const findInSubtasks = (subtasks: Subtask[]): Subtask | null => {
      for (const subtask of subtasks) {
        if (subtask.id === subtaskId) {
          return subtask;
        }
        if (subtask.subtasks && subtask.subtasks.length > 0) {
          const found = findInSubtasks(subtask.subtasks);
          if (found) return found;
        }
      }
      return null;
    };
    
    return findInSubtasks(task.subtasks);
  }

  private addSubtaskToParent(task: Task, parentSubtaskId: number, newSubtask: Subtask): void {
    const parentSubtask = this.findSubtask(task, parentSubtaskId);
    if (parentSubtask) {
      if (!parentSubtask.subtasks) {
        parentSubtask.subtasks = [];
      }
      parentSubtask.subtasks.push(newSubtask);
    }
  }

  private removeSubtaskFromTask(task: Task, subtaskId: number): boolean {
    // Try to remove from direct subtasks first
    const directIndex = task.subtasks.findIndex(s => s.id === subtaskId);
    if (directIndex !== -1) {
      task.subtasks.splice(directIndex, 1);
      return true;
    }

    // If not found, search in nested subtasks
    return this.removeSubtaskFromNested(task.subtasks, subtaskId);
  }

  private removeSubtaskFromNested(subtasks: Subtask[], subtaskId: number): boolean {
    for (let i = 0; i < subtasks.length; i++) {
      if (subtasks[i].id === subtaskId) {
        subtasks.splice(i, 1);
        return true;
      }
      if (subtasks[i].subtasks && this.removeSubtaskFromNested(subtasks[i].subtasks!, subtaskId)) {
        return true;
      }
    }
    return false;
  }

  private searchInSubtasks(subtasks: Subtask[], query: string): boolean {
    return subtasks.some(subtask => {
      const matchesSubtask = subtask.title?.toLowerCase().includes(query) ||
                            subtask.description?.toLowerCase().includes(query) || false;
      const matchesNested = subtask.subtasks ? this.searchInSubtasks(subtask.subtasks, query) : false;
      return matchesSubtask || matchesNested;
    });
  }

  private isOverdue(task: Task): boolean {
    const d: any = (task as any)['taskOnDate'];
    if (!d || task.status?.name === 'done') return false;
    return d < new Date();
  }

  // Initialize sample data
  private initializeSampleTasks(): void {
    const sampleTasks: any[] = [
      {
        id: 1,
        title: 'Implement user authentication system',
        description: 'Create a secure authentication system with JWT tokens and role-based access control',
        priorityLevel: { name: 'high', color: '#2563EB' },
        status: { name: 'in-progress', color: '#2563EB' },
        category: { name: 'Development', icon: '🚀' },
        startDate: new Date('2024-01-10'),
        endDate: new Date('2024-01-15'),
        startTime: '09:00',
        endTime: '17:00',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-10'),
        estimatedHours: 16,
        priorityOrder: 1,
        remarks: 'Critical security feature for the application. Must implement proper encryption. Need to ensure compliance with security standards.',
        urls: [
          { label: 'JWT Documentation', url: 'https://jwt.io' },
          { label: 'Auth0 Guide', url: 'https://auth0.com/docs' }
        ],
        isExpanded: false,
        subtasks: [
          {
            id: 11,
            title: 'Setup JWT authentication',
            description: 'Implement JWT token generation and validation',
            status: { name: 'done', color: '#059669' },
            priority: { name: 'high', color: '#DC2626' },
            category: { name: 'Development', icon: '🚀' },

            startDate: new Date('2024-01-01'),
            endDate: new Date('2024-01-02'),
            startTime: '09:00',
            endTime: '17:00',
            createdAt: new Date('2024-01-01'),
            updatedAt: new Date('2024-01-02'),
            estimatedHours: 4,
            priorityOrder: null,

            level: 1,
            isExpanded: false,
            subtasks: [
              {
                id: 111,
                title: 'Install JWT library',
                description: 'Add JWT package to project dependencies',
        status: { name: 'done', color: '#059669' },
        priority: { name: 'medium', color: '#F97316' },
        category: { name: 'Development', icon: '🚀' },

                startDate: new Date('2024-01-01'),
                endDate: new Date('2024-01-01'),
                startTime: '09:00',
                endTime: '10:00',
                createdAt: new Date('2024-01-01'),
                updatedAt: new Date('2024-01-01'),
                estimatedHours: 1,
                priorityOrder: null,

                level: 2,
                isExpanded: false,
                subtasks: []
              },
              {
                id: 112,
                title: 'Configure JWT secret',
                description: 'Set up environment variables for JWT secret',
        status: { name: 'done', color: '#059669' },
        priority: { name: 'high', color: '#DC2626' },
        category: { name: 'Development', icon: '🚀' },

                startDate: new Date('2024-01-01'),
                endDate: new Date('2024-01-01'),
                startTime: '10:00',
                endTime: '11:00',
                createdAt: new Date('2024-01-01'),
                updatedAt: new Date('2024-01-01'),
                estimatedHours: 1,
                priorityOrder: null,

                level: 2,
                isExpanded: false,
                subtasks: []
              },
              {
                id: 113,
                title: 'Create token generation service',
                description: 'Implement service for creating and signing JWT tokens',
        status: { name: 'done', color: '#059669' },
        priority: { name: 'high', color: '#DC2626' },
        category: { name: 'Development', icon: '🚀' },

                startDate: new Date('2024-01-01'),
                endDate: new Date('2024-01-02'),
                startTime: '11:00',
                endTime: '17:00',
                createdAt: new Date('2024-01-01'),
                updatedAt: new Date('2024-01-02'),
                estimatedHours: 2,
                priorityOrder: null,

                level: 2,
                isExpanded: false,
                subtasks: []
              }
            ]
          },
          {
            id: 12,
            title: 'Create user roles and permissions',
            description: 'Define and implement role-based access control',
        status: { name: 'in-progress', color: '#2563EB' },
        priority: { name: 'high', color: '#DC2626' },
        category: { name: 'Development', icon: '🚀' },

            startDate: new Date('2024-01-02'),
            endDate: new Date('2024-01-10'),
            startTime: '09:00',
            endTime: '17:00',
            createdAt: new Date('2024-01-02'),
            updatedAt: new Date('2024-01-10'),
            estimatedHours: 6,
            priorityOrder: null,

            level: 1,
            subtasks: [
              {
                id: 121,
                title: 'Define user roles',
                description: 'Create enum for user roles (admin, user, guest)',
        status: { name: 'done', color: '#059669' },
        priority: { name: 'medium', color: '#F97316' },
        category: { name: 'Development', icon: '🚀' },
                startDate: new Date('2024-01-02'),
                endDate: new Date('2024-01-02'),
                startTime: '09:00',
                endTime: '10:00',
                createdAt: new Date('2024-01-02'),
                updatedAt: new Date('2024-01-02'),
                estimatedHours: 1,
                priorityOrder: null,

                level: 2,
                isExpanded: false,
                subtasks: []
              },
              {
                id: 122,
                title: 'Create permission system',
                description: 'Implement permission checking middleware',
        status: { name: 'in-progress', color: '#2563EB' },
        priority: { name: 'high', color: '#DC2626' },
        category: { name: 'Development', icon: '🚀' },

                startDate: new Date('2024-01-03'),
                endDate: new Date('2024-01-10'),
                startTime: '09:00',
                endTime: '17:00',
                createdAt: new Date('2024-01-03'),
                updatedAt: new Date('2024-01-10'),
                estimatedHours: 3,
                priorityOrder: null,

                level: 2,
                isExpanded: false,
                subtasks: []
              },
              {
                id: 123,
                title: 'Add role-based routes',
                description: 'Protect routes based on user roles',
        status: { name: 'todo', color: '#64748B' },
        priority: { name: 'medium', color: '#F97316' },
        category: { name: 'Development', icon: '🚀' },

                startDate: new Date('2024-01-08'),
                endDate: new Date('2024-01-10'),
                startTime: '09:00',
                endTime: '17:00',
                createdAt: new Date('2024-01-08'),
                updatedAt: new Date('2024-01-08'),
                estimatedHours: 2,
                priorityOrder: null,

                level: 2,
                isExpanded: false,
                subtasks: []
              }
            ]
          },
          {
            id: 13,
            title: 'Add password reset functionality',
            description: 'Implement secure password reset with email verification',
        status: { name: 'todo', color: '#64748B' },
        priority: { name: 'medium', color: '#F97316' },
        category: { name: 'Development', icon: '🚀' },

            startDate: new Date('2024-01-05'),
            endDate: new Date('2024-01-07'),
            startTime: '09:00',
            endTime: '17:00',
            createdAt: new Date('2024-01-05'),
            updatedAt: new Date('2024-01-05'),
            estimatedHours: 6,
            priorityOrder: null,

            level: 1,
            subtasks: [
              {
                id: 131,
                title: 'Create reset token table',
                description: 'Database table for storing password reset tokens',
        status: { name: 'todo', color: '#64748B' },
        priority: { name: 'medium', color: '#F97316' },
        category: { name: 'Development', icon: '🚀' },
                startDate: new Date('2024-01-05'),
                endDate: new Date('2024-01-05'),
                startTime: '09:00',
                endTime: '12:00',
                createdAt: new Date('2024-01-05'),
                updatedAt: new Date('2024-01-05'),
                estimatedHours: 3,
                priorityOrder: null,

                level: 2,
                isExpanded: false,
                subtasks: []
              },
              {
                id: 132,
                title: 'Implement email service',
                description: 'Create service for sending password reset emails',
        status: { name: 'todo', color: '#64748B' },
        priority: { name: 'medium', color: '#F97316' },
        category: { name: 'Development', icon: '🚀' },

                startDate: new Date('2024-01-06'),
                endDate: new Date('2024-01-07'),
                startTime: '09:00',
                endTime: '17:00',
                createdAt: new Date('2024-01-06'),
                updatedAt: new Date('2024-01-06'),
                estimatedHours: 3,
                priorityOrder: null,

                level: 2,
                isExpanded: false,
                subtasks: []
              }
            ]
          }
        ],
        progress: 50
      },
      {
        id: 2,
        title: 'Design mobile app wireframes',
        description: 'Create wireframes for the mobile application user interface',
        priorityLevel: { name: 'medium', color: '#F97316' },
        status: { name: 'todo', color: '#F97316' },
        category: { name: 'Design', icon: '✨' },

        startDate: new Date('2024-01-15'),
        endDate: new Date('2024-01-20'),
        startTime: '10:00',
        endTime: '16:00',
        createdAt: new Date('2024-01-05'),
        updatedAt: new Date('2024-01-05'),
        estimatedHours: 12,
        priorityOrder: 2,
        remarks: 'Focus on user experience and accessibility. Must follow mobile-first design principles.',
        urls: [
          { label: 'Figma Design Tool', url: 'https://figma.com' },
          { label: 'Sketch Resources', url: 'https://sketch.com' }
        ],
        subtasks: [
          {
            id: 21,
            title: 'Create main navigation wireframes',
            description: 'Design the primary navigation structure',
        status: { name: 'todo', color: '#64748B' },
        priority: { name: 'medium', color: '#F97316' },
        category: { name: 'Design', icon: '✨' },

            startDate: new Date('2024-01-15'),
            endDate: new Date('2024-01-16'),
            startTime: '10:00',
            endTime: '16:00',
            createdAt: new Date('2024-01-05'),
            updatedAt: new Date('2024-01-05'),
            estimatedHours: 4,
            priorityOrder: null,

            level: 1,
            subtasks: [
              {
                id: 211,
                title: 'Design bottom tab bar',
                description: 'Create wireframe for main navigation tabs',
        status: { name: 'todo', color: '#64748B' },
        priority: { name: 'medium', color: '#F97316' },
        category: { name: 'Design', icon: '✨' },

                startDate: new Date('2024-01-15'),
                endDate: new Date('2024-01-15'),
                startTime: '10:00',
                endTime: '12:00',
                createdAt: new Date('2024-01-05'),
                updatedAt: new Date('2024-01-05'),
                estimatedHours: 2,
                priorityOrder: null,

                level: 2,
                isExpanded: false,
                subtasks: []
              },
              {
                id: 212,
                title: 'Design hamburger menu',
                description: 'Create wireframe for side navigation menu',
        status: { name: 'todo', color: '#64748B' },
        priority: { name: 'medium', color: '#F97316' },
        category: { name: 'Design', icon: '✨' },

                startDate: new Date('2024-01-15'),
                endDate: new Date('2024-01-16'),
                startTime: '12:00',
                endTime: '16:00',
                createdAt: new Date('2024-01-05'),
                updatedAt: new Date('2024-01-05'),
                estimatedHours: 2,
                priorityOrder: null,

                level: 2,
                isExpanded: false,
                subtasks: []
              }
            ]
          },
          {
            id: 22,
            title: 'Design user profile screens',
            description: 'Create wireframes for user profile and settings',
        status: { name: 'todo', color: '#64748B' },
        priority: { name: 'medium', color: '#F97316' },
        category: { name: 'Design', icon: '✨' },

            startDate: new Date('2024-01-16'),
            endDate: new Date('2024-01-17'),
            startTime: '10:00',
            endTime: '16:00',
            createdAt: new Date('2024-01-05'),
            updatedAt: new Date('2024-01-05'),
            estimatedHours: 4,
            priorityOrder: null,

            level: 1,
            subtasks: [
              {
                id: 221,
                title: 'Design profile header',
                description: 'Create wireframe for user profile header section',
        status: { name: 'todo', color: '#64748B' },
        priority: { name: 'medium', color: '#F97316' },
        category: { name: 'Design', icon: '✨' },

                startDate: new Date('2024-01-16'),
                endDate: new Date('2024-01-16'),
                startTime: '10:00',
                endTime: '12:00',
                createdAt: new Date('2024-01-05'),
                updatedAt: new Date('2024-01-05'),
                estimatedHours: 2,
                priorityOrder: null,

                level: 2,
                isExpanded: false,
                subtasks: []
              },
              {
                id: 222,
                title: 'Design settings menu',
                description: 'Create wireframe for user settings and preferences',
        status: { name: 'todo', color: '#64748B' },
        priority: { name: 'medium', color: '#F97316' },
        category: { name: 'Design', icon: '✨' },

                startDate: new Date('2024-01-16'),
                endDate: new Date('2024-01-17'),
                startTime: '12:00',
                endTime: '16:00',
                createdAt: new Date('2024-01-05'),
                updatedAt: new Date('2024-01-05'),
                estimatedHours: 2,
                priorityOrder: null,

                level: 2,
                isExpanded: false,
                subtasks: []
              }
            ]
          },
          {
            id: 22,
            title: 'Create dashboard wireframes',
            description: 'Design the main dashboard layout and widgets',
        status: { name: 'todo', color: '#64748B' },
        priority: { name: 'medium', color: '#F97316' },
        category: { name: 'Design', icon: '✨' },

            startDate: new Date('2024-01-17'),
            endDate: new Date('2024-01-18'),
            startTime: '10:00',
            endTime: '16:00',
            createdAt: new Date('2024-01-05'),
            updatedAt: new Date('2024-01-05'),
            estimatedHours: 4,
            priorityOrder: null,

            level: 1,
            subtasks: [
              {
                id: 3,
                title: 'Design main dashboard layout',
                description: 'Create wireframe for dashboard grid layout',
        status: { name: 'todo', color: '#64748B' },
        priority: { name: 'medium', color: '#F97316' },
        category: { name: 'Design', icon: '✨' },

                startDate: new Date('2024-01-17'),
                endDate: new Date('2024-01-17'),
                startTime: '10:00',
                endTime: '14:00',
                createdAt: new Date('2024-01-05'),
                updatedAt: new Date('2024-01-05'),
                estimatedHours: 2,
                priorityOrder: null,

                level: 2,
                isExpanded: false,
                subtasks: []
              },
              {
                id: 7,
                title: 'Design widget components',
                description: 'Create wireframes for dashboard widgets',
        status: { name: 'todo', color: '#64748B' },
        priority: { name: 'medium', color: '#F97316' },
        category: { name: 'Design', icon: '✨' },

                startDate: new Date('2024-01-17'),
                endDate: new Date('2024-01-18'),
                startTime: '14:00',
                endTime: '16:00',
                createdAt: new Date('2024-01-05'),
                updatedAt: new Date('2024-01-05'),
                estimatedHours: 2,
                priorityOrder: null,

                level: 2,
                isExpanded: false,
                subtasks: []
              }
            ]
          }
        ],

        progress: 0,
        isExpanded: false
      }
    ];

    this.tasksSubject.next(sampleTasks);
  }

  // API Methods for CRUD operations
  addMainTask(taskData: any): Observable<any> {
    return this.http.post<any>(API_CONFIG.tasks.addMainTask, taskData);
  }

  updateMainTask(taskData: any): Observable<any> {
    return this.http.put<any>(API_CONFIG.tasks.updateMainTask, taskData);
  }

  updateTaskImportant(id: number, important: boolean): Observable<any> {
    return this.http.put<any>(API_CONFIG.tasks.updateTaskImportant(id), important);
  }

  updateTaskCompleted(id: number, completed: boolean): Observable<any> {
    return this.http.put<any>(API_CONFIG.tasks.updateTaskCompleted(id), completed);
  }

  updateLevel1SubtaskCompleted(id: number, completed: boolean): Observable<any> {
    return this.http.put<any>(API_CONFIG.tasks.updateLevel1SubtaskCompleted(id), completed);
  }

  updateLevel2SubtaskCompleted(id: number, completed: boolean): Observable<any> {
    return this.http.put<any>(API_CONFIG.tasks.updateLevel2SubtaskCompleted(id), completed);
  }

  deleteMainTask(id: number): Observable<any> {
    return this.http.delete<any>(API_CONFIG.tasks.deleteMainTask(id));
  }

  addLevel1Subtask(subtaskData: any): Observable<any> {
    return this.http.post<any>(API_CONFIG.tasks.addLevel1Subtask, subtaskData);
  }

  updateLevel1Subtask(subtaskData: any): Observable<any> {
    return this.http.put<any>(API_CONFIG.tasks.updateLevel1Subtask, subtaskData);
  }

  deleteLevel1Subtask(id: number): Observable<any> {
    return this.http.delete<any>(API_CONFIG.tasks.deleteLevel1Subtask(id));
  }

  addLevel2Subtask(subtaskData: any): Observable<any> {
    return this.http.post<any>(API_CONFIG.tasks.addLevel2Subtask, subtaskData);
  }

  updateLevel2Subtask(subtaskData: any): Observable<any> {
    return this.http.put<any>(API_CONFIG.tasks.updateLevel2Subtask, subtaskData);
  }

  deleteLevel2Subtask(id: number): Observable<any> {
    return this.http.delete<any>(API_CONFIG.tasks.deleteLevel2Subtask(id));
  }

  // Refresh tasks from API
  refreshTasks(): void {
    this.loadTasksFromAPI();
  }
}
