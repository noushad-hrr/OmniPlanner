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

export interface Subtask2 {
  id: number;
  title: string;
  description: string;
  status: { name: 'todo' | 'in-progress' | 'review' | 'done' | 'open'; color: string };
  priority: { name: 'low' | 'medium' | 'high' | 'urgent' | 'normal'; color: string };
  // Category removed - only main tasks have categories
  startDate: Date | null;
  endDate: Date | null;
  startTime: string;
  endTime: string;
  createdAt: Date;
  updatedAt: Date;
  estimatedHours: number;
  priorityOrder: number | null; // Priority order for sorting subtasks (nullable)
  subtasks?: Subtask2[]; // Support for nested subtasks
  parentId?: number; // Reference to parent Subtask2
  level: number; // Level in hierarchy (1, 2, etc.)
  isExpanded?: boolean; // For UI expansion state
  completed?: boolean; // Field to mark Subtask2 as completed
  remarks?: string | null; // Field for remarks
  urls?: { label: string; url: string }[] | null; // Field for multiple URLs with labels
  important?: boolean; // Field to mark Subtask2 as important
  selectedDays?: number[]; // Days selected for the subtask
}

export interface PeriodicTaskReference {
  id: number;
  startDate: Date | null;
  endDate: Date | null;
}

export interface Task2 {
  id: number;
  title: string;
  description: string | null;
  priorityLevel: { name: 'low' | 'medium' | 'high' | 'urgent' | 'normal'; color: string } | null; // Renamed from priority
  status: { name: 'todo' | 'in-progress' | 'review' | 'done' | 'open'; color: string } | null;
  category: { name: string; icon: string } | null;
  startDate: Date | null;
  endDate: Date | null;
  startTime: string | null;
  endTime: string | null;
  createdAt: Date;
  updatedAt: Date;
  estimatedHours: number | null;
  priorityOrder: number | null; // New field from backend API
  subtasks: Subtask2[];
  progress: number; // Calculated progress based on subtasks
  isExpanded: boolean; // For UI expansion state
  remarks?: string | null; // New field for remarks
  urls?: { id?: number; label: string; url: string; credentials?: CredentialInfo[] }[] | null; // New field for multiple URLs with labels
  important?: boolean; // Field to mark task as important
  completed?: boolean; // Field to mark task as completed
  periodicTask?: PeriodicTaskReference | null; // Reference to periodic task object (nullable)
  selectedDays?: number[]; // Days selected for the task
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
export class Task2Service {
  private tasks2Subject = new BehaviorSubject<Task2[]>([]);
  public tasks2$ = this.tasks2Subject.asObservable();

  private categories: TaskCategory[] = [
    { id: 1, name: 'Development', color: '#2563EB', icon: 'ðŸš€' },
    { id: 2, name: 'Design', color: '#7C3AED', icon: 'âœ¨' },
    { id: 3, name: 'Marketing', color: '#059669', icon: 'ðŸ“Š' },
    { id: 4, name: 'Operations', color: '#DC2626', icon: 'âš¡' },
    { id: 5, name: 'Research', color: '#EA580C', icon: 'ðŸ”' }
  ];

  constructor(private http: HttpClient) {
    this.loadTasksFromAPI();
  }

  private loadTasksFromAPI(): void {
    this.http.get<any>(API_CONFIG.tasks2.getAll)
      .pipe(
        map(response => {
          const tasks = response.data || [];
          // Transform and normalize tasks to handle nullable fields
          return tasks.map((task: any) => this.normalizeTask(task));
        })
      )
      .subscribe({
        next: (tasks) => {
          this.tasks2Subject.next(tasks);
        },
        error: (error) => {
          console.error('Error loading tasks from API:', error);
          // Fallback to sample data if API fails
          // this.initializeSampleTasks();
        }
      });
  }

  // Normalize Subtask2 data from API
  private normalizeSubtask(Subtask2: any): Subtask2 {
    return {
      id: Subtask2.id,
      title: Subtask2.title || '',
      description: Subtask2.description || '',
      status: Subtask2.status ?? { name: 'todo', color: '#64748B' },
      priority: Subtask2.priority_level ?? Subtask2.priority ?? { name: 'medium', color: '#F97316' },
      // Category removed - only main tasks have categories
      // Backend sends taskOnDate for subtasks (By date/day tasks)
      startDate: Subtask2.startDate ? new Date(Subtask2.startDate) : (Subtask2.taskOnDate ? new Date(Subtask2.taskOnDate) : null),
      endDate: Subtask2.endDate ? new Date(Subtask2.endDate) : (Subtask2.taskOnDate ? new Date(Subtask2.taskOnDate) : null),
      // Preserve actual time values - only default if null/undefined
      startTime: Subtask2.startTime ?? '',
      endTime: Subtask2.endTime ?? '',
      createdAt: Subtask2.createdAt ? new Date(Subtask2.createdAt) : new Date(),
      updatedAt: Subtask2.updatedAt ? new Date(Subtask2.updatedAt) : new Date(),
      // Preserve actual estimatedHours - only default if null/undefined (preserves 0)
      estimatedHours: Subtask2.estimatedHours ?? 0,
      priorityOrder: Subtask2.priority_order ?? null, // Priority order for sorting
      subtasks: Subtask2.subtasks ? Subtask2.subtasks.map((s: any) => this.normalizeSubtask(s)) : [],
      parentId: Subtask2.parentId,
      level: Subtask2.level || 1,
      isExpanded: Subtask2.isExpanded || false,
      completed: Subtask2.completed || false,
      remarks: Subtask2.remarks ?? null,
      urls: Subtask2.urls ?? null,
      important: Subtask2.important || false,
      selectedDays: Subtask2.selected_days ? JSON.parse(Subtask2.selected_days) : []
    };
  }

  // Normalize task data from API to handle nullable fields - preserve null values
  private normalizeTask(task: any): Task2 {
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
      // Backend sends taskOnDate for Task2s (By date/day tasks)
      startDate: task.startDate ? new Date(task.startDate) : (task.taskOnDate ? new Date(task.taskOnDate) : null),
      endDate: task.endDate ? new Date(task.endDate) : (task.taskOnDate ? new Date(task.taskOnDate) : null),
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
      periodicTask: periodicTask,
      selectedDays: task.selected_days ? JSON.parse(task.selected_days) : []
    };
  }

  // Task2 CRUD Operations
  getTasks(): Observable<Task2[]> {
    return this.tasks2$;
  }

  getTask(id: number): Task2 | undefined {
    return this.tasks2Subject.value.find(task => task.id === id);
  }

  createTask(taskData: Partial<Task2>): Task2 {
    const task: Task2 = {
      id: this.generateId(),
      title: taskData.title || '',
      description: taskData.description || '',
      priorityLevel: taskData.priorityLevel || { name: 'medium', color: '#F97316' },
      status: taskData.status || { name: 'todo', color: '#64748B' },
      category: taskData.category || { name: 'General', icon: 'ðŸ“‹' },
      startDate: (taskData as any)['startDate'] || null,
      endDate: (taskData as any)['endDate'] || null,
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

    const tasks = [...this.tasks2Subject.value, task];
    this.tasks2Subject.next(tasks);
    return task;
  }

  updateTask(id: number, updates: Partial<Task2>): Task2 | null {
    const tasks = this.tasks2Subject.value;
    const taskIndex = tasks.findIndex(task => task.id === id);

    if (taskIndex === -1) return null;

    const updatedTask2 = {
      ...tasks[taskIndex],
      ...updates,
      updatedAt: new Date()
    };

    // Recalculate progress if subtasks changed
    if (updates.subtasks !== undefined) {
      updatedTask2.progress = this.calculateTaskProgress(updatedTask2);
    }

    tasks[taskIndex] = updatedTask2;
    this.tasks2Subject.next([...tasks]);
    return updatedTask2;
  }

  deleteTask(id: number): boolean {
    const tasks = this.tasks2Subject.value.filter(task => task.id !== id);
    this.tasks2Subject.next(tasks);
    return true;
  }

  // Subtask2 Operations
  addSubtask(taskId: number, Subtask2Data: Partial<Subtask2>, parentSubtaskId?: number): Subtask2 | null {
    const task = this.getTask(taskId);
    if (!task) return null;

    const level = parentSubtaskId ? this.getSubtaskLevel(task, parentSubtaskId) + 1 : 1;

    const Subtask2: Subtask2 = {
      id: this.generateId(),
      title: Subtask2Data.title || '',
      description: Subtask2Data.description || '',
      status: Subtask2Data.status || { name: 'todo', color: '#64748B' },
      priority: Subtask2Data.priority || { name: 'medium', color: '#F97316' },
      // Category removed from subtasks - only main tasks have categories
      startDate: (Subtask2Data as any)['startDate'] || null,
      endDate: (Subtask2Data as any)['endDate'] || null,
      startTime: Subtask2Data.startTime || '09:00',
      endTime: Subtask2Data.endTime || '17:00',
      createdAt: new Date(),
      updatedAt: new Date(),
      estimatedHours: Subtask2Data.estimatedHours || 0,
      priorityOrder: Subtask2Data.priorityOrder ?? null, // Priority order for sorting

      subtasks: [],
      parentId: parentSubtaskId,
      level: level,

      isExpanded: false // Default to collapsed
    };

    if (parentSubtaskId) {
      this.addSubtaskToParent(task, parentSubtaskId, Subtask2);
    } else {
      if (!task.subtasks) {
        task.subtasks = [];
      }
      task.subtasks.push(Subtask2);
    }

    // Update task progress and timestamp
    task.progress = this.calculateTaskProgress(task);
    task.updatedAt = new Date();

    this.tasks2Subject.next([...this.tasks2Subject.value]);
    return Subtask2;
  }

  updateSubtask(taskId: number, Subtask2Id: number, updates: Partial<Subtask2>): Subtask2 | null {
    const task = this.getTask(taskId);
    if (!task) return null;

    const Subtask2 = this.findSubtask(task, Subtask2Id);
    if (!Subtask2) return null;

    Object.assign(Subtask2, updates, { updatedAt: new Date() });

    // Update task progress
    task.progress = this.calculateTaskProgress(task);
    task.updatedAt = new Date();

    this.tasks2Subject.next([...this.tasks2Subject.value]);
    return Subtask2;
  }

  deleteSubtask(taskId: number, Subtask2Id: number): boolean {
    const task = this.getTask(taskId);
    if (!task) return false;

    const removed = this.removeSubtaskFromTask(task, Subtask2Id);
    if (removed) {
      task.progress = this.calculateTaskProgress(task);
      task.updatedAt = new Date();
      this.tasks2Subject.next([...this.tasks2Subject.value]);
    }

    return removed;
  }

  // Progress Calculation
  calculateTaskProgress(task: Task2): number {
    if (!task.subtasks || task.subtasks.length === 0) {
      return 0;
    }

    const allsubtasks = this.getAllSubtasksFlat(task.subtasks);
    if (allsubtasks.length === 0) return 0;

    // Progress is based on checkboxes being checked (completed === true)
    const completedsubtasks = allsubtasks.filter(Subtask2 => Subtask2.completed === true).length;
    return Math.round((completedsubtasks / allsubtasks.length) * 100);
  }

  // Drag and Drop Operations
  moveTask(taskId: number, newStatus: Task2['status']): boolean {
    return this.updateTask(taskId, { status: newStatus }) !== null;
  }

  moveSubtask(taskId: number, Subtask2Id: number, newStatus: Subtask2['status']): boolean {
    return this.updateSubtask(taskId, Subtask2Id, { status: newStatus }) !== null;
  }

  reorderSubtasks(taskId: number, Subtask2Ids: number[]): boolean {
    const task = this.getTask(taskId);
    if (!task || !task.subtasks || task.subtasks.length === 0) return false;

    // Reorder subtasks based on the provided order
    const reorderedsubtasks: Subtask2[] = [];

    Subtask2Ids.forEach(id => {
      const Subtask2 = task.subtasks!.find(s => s.id === id);
      if (Subtask2) {
        reorderedsubtasks.push(Subtask2);
      }
    });

    // Add any remaining subtasks that weren't in the reorder list
    task.subtasks.forEach(Subtask2 => {
      if (!Subtask2Ids.includes(Subtask2.id)) {
        reorderedsubtasks.push(Subtask2);
      }
    });

    task.subtasks = reorderedsubtasks;
    task.updatedAt = new Date();
    this.tasks2Subject.next([...this.tasks2Subject.value]);
    return true;
  }

  // Filtering and Search
  filterTasks(filters: TaskFilter): Task2[] {
    return this.tasks2Subject.value.filter(task => {
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
        const matchessubtasks = task.subtasks ? this.searchInSubtasks(task.subtasks, query) : false;

        if (!matchesTitle && !matchesDescription && !matchessubtasks) {
          return false;
        }
      }
      // Date filtering: Applied on startDate and endDate columns
      const taskStartDate = task.startDate;
      const taskEndDate = task.endDate;

      // If both startDate and endDate filters are provided
      if (filters.startDate && filters.endDate) {
        const filterStartDate = new Date(filters.startDate);
        const filterEndDate = new Date(filters.endDate);
        filterStartDate.setHours(0, 0, 0, 0);
        filterEndDate.setHours(23, 59, 59, 999);

        // Check for overlap: (StartA <= EndB) and (EndA >= StartB)
        // Task range: [taskStartDate, taskEndDate]
        // Filter range: [filterStartDate, filterEndDate]

        // If task has no dates, decide whether to include it. 
        // Usually if filtering by date, we want tasks that have dates.
        // But if we want to show everything when no filter, that's handled by the outer if.
        // Here filters are present.

        if (!taskStartDate && !taskEndDate) {
          // No dates on task, so it doesn't match the date filter
          // Unless we want to show undated tasks? Let's assume strict filtering.
          // Actually, let's include if it's "undated" only if the user explicitly asks for undated (not implemented).
          // For now, if filtering by date, undated tasks are excluded.
          if (filters.startDate || filters.endDate) return false;
        }

        const tStart = taskStartDate ? new Date(taskStartDate) : null;
        const tEnd = taskEndDate ? new Date(taskEndDate) : (tStart ? new Date(tStart) : null);

        if (tStart) tStart.setHours(0, 0, 0, 0);
        if (tEnd) tEnd.setHours(23, 59, 59, 999);

        if (tStart && tEnd) {
          if (tStart > filterEndDate || tEnd < filterStartDate) {
            return false;
          }
        } else if (tStart) {
          // Only start date exists
          if (tStart > filterEndDate || tStart < filterStartDate) { // This logic treats single date as point
            // If it's just a start date, does it fall in range?
            if (tStart < filterStartDate || tStart > filterEndDate) return false;
          }
        }
      } else if (filters.startDate) {
        // Only startDate filter provided - show tasks starting on or after this date
        const filterStartDate = new Date(filters.startDate);
        filterStartDate.setHours(0, 0, 0, 0);

        const tEnd = taskEndDate ? new Date(taskEndDate) : (taskStartDate ? new Date(taskStartDate) : null);
        if (tEnd) tEnd.setHours(23, 59, 59, 999);

        if (!tEnd || tEnd < filterStartDate) {
          return false;
        }
      } else if (filters.endDate) {
        // Only endDate filter provided - show tasks ending on or before this date
        const filterEndDate = new Date(filters.endDate);
        filterEndDate.setHours(23, 59, 59, 999);

        const tStart = taskStartDate ? new Date(taskStartDate) : null;
        if (tStart) tStart.setHours(0, 0, 0, 0);

        if (!tStart || tStart > filterEndDate) {
          return false;
        }
      }
      return true;
    });
  }

  // Statistics
  getTaskStats(): TaskStats {
    const tasks = this.tasks2Subject.value;
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


  private getSubtaskLevel(task: Task2, Subtask2Id: number): number {
    const Subtask2 = this.findSubtask(task, Subtask2Id);
    return Subtask2 ? Subtask2.level : 0;
  }

  findSubtask(task: Task2, Subtask2Id: number): Subtask2 | null {
    if (!task.subtasks || task.subtasks.length === 0) return null;
    const allsubtasks = this.getAllSubtasksFlat(task.subtasks);
    return allsubtasks.find(Subtask2 => Subtask2.id === Subtask2Id) || null;
  }

  private getAllSubtasksFlat(subtasks: Subtask2[]): Subtask2[] {
    if (!subtasks || subtasks.length === 0) return [];
    const flat: Subtask2[] = [];

    const addSubtasks = (subs: Subtask2[]) => {
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
  getAllsubtasks(subtasks: any[]): any[] {
    const flattenedsubtasks: any[] = [];

    const addSubtasksWithLevel = (subtasks: any[], level: number = 1) => {
      // Sort subtasks by priorityOrder before processing
      const sortedsubtasks = this.sortSubtasksByPriorityOrder(subtasks);

      sortedsubtasks.forEach(Subtask2 => {
        flattenedsubtasks.push({
          ...Subtask2,
          level: level
        });

        // Recursively add nested subtasks only if parent is expanded
        // Sort nested subtasks as well
        if (Subtask2.subtasks && Subtask2.subtasks.length > 0 && Subtask2.isExpanded) {
          // Sort nested subtasks before recursing
          Subtask2.subtasks = this.sortSubtasksByPriorityOrder(Subtask2.subtasks);
          addSubtasksWithLevel(Subtask2.subtasks, level + 1);
        }
      });
    };

    addSubtasksWithLevel(subtasks);
    return flattenedsubtasks;
  }

  // Toggle task expansion state
  toggleTaskExpansion(taskId: number): boolean {
    const task = this.getTask(taskId);
    if (!task) return false;

    task.isExpanded = !task.isExpanded;
    this.tasks2Subject.next([...this.tasks2Subject.value]);
    return task.isExpanded;
  }

  // Toggle Subtask2 expansion state
  toggleSubtaskExpansion(taskId: number, Subtask2Id: number): boolean {
    const task = this.getTask(taskId);
    if (!task) return false;

    const Subtask2 = this.findSubtaskById(task, Subtask2Id);
    if (!Subtask2) return false;

    Subtask2.isExpanded = !Subtask2.isExpanded;
    this.tasks2Subject.next([...this.tasks2Subject.value]);
    return Subtask2.isExpanded;
  }

  // Helper method to find Subtask2 by ID recursively
  private findSubtaskById(task: Task2, subtaskId: number): Subtask2 | null {
    const findInSubtasks = (subtasks: Subtask2[]): Subtask2 | null => {
      for (const Subtask2 of subtasks) {
        if (Subtask2.id === subtaskId) {
          return Subtask2;
        }
        if (Subtask2.subtasks && Subtask2.subtasks.length > 0) {
          const found = findInSubtasks(Subtask2.subtasks);
          if (found) return found;
        }
      }
      return null;
    };

    return findInSubtasks(task.subtasks);
  }

  private addSubtaskToParent(task: Task2, parentSubtaskId: number, newSubtask: Subtask2): void {
    const parentSubtask = this.findSubtask(task, parentSubtaskId);
    if (parentSubtask) {
      if (!parentSubtask.subtasks) {
        parentSubtask.subtasks = [];
      }
      parentSubtask.subtasks.push(newSubtask);
    }
  }

  private removeSubtaskFromTask(task: Task2, Subtask2Id: number): boolean {
    // Try to remove from direct subtasks first
    const directIndex = task.subtasks.findIndex(s => s.id === Subtask2Id);
    if (directIndex !== -1) {
      task.subtasks.splice(directIndex, 1);
      return true;
    }

    // If not found, search in nested subtasks
    return this.removeSubtaskFromNested(task.subtasks, Subtask2Id);
  }

  private removeSubtaskFromNested(subtasks: Subtask2[], Subtask2Id: number): boolean {
    for (let i = 0; i < subtasks.length; i++) {
      if (subtasks[i].id === Subtask2Id) {
        subtasks.splice(i, 1);
        return true;
      }
      if (subtasks[i].subtasks && this.removeSubtaskFromNested(subtasks[i].subtasks!, Subtask2Id)) {
        return true;
      }
    }
    return false;
  }

  private searchInSubtasks(subtasks: Subtask2[], query: string): boolean {
    return subtasks.some(Subtask2 => {
      const matchesSubtask = Subtask2.title?.toLowerCase().includes(query) ||
        Subtask2.description?.toLowerCase().includes(query) || false;
      const matchesNested = Subtask2.subtasks ? this.searchInSubtasks(Subtask2.subtasks, query) : false;
      return matchesSubtask || matchesNested;
    });
  }

  private isOverdue(task: Task2): boolean {
    const endDate = task.endDate;
    if (!endDate || task.status?.name === 'done') return false;
    return endDate < new Date();
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
        category: { name: 'Development', icon: 'ðŸš€' },
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
            category: { name: 'Development', icon: 'ðŸš€' },

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
                category: { name: 'Development', icon: 'ðŸš€' },

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
                category: { name: 'Development', icon: 'ðŸš€' },

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
                category: { name: 'Development', icon: 'ðŸš€' },

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
            category: { name: 'Development', icon: 'ðŸš€' },

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
                category: { name: 'Development', icon: 'ðŸš€' },
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
                category: { name: 'Development', icon: 'ðŸš€' },

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
                category: { name: 'Development', icon: 'ðŸš€' },

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
            category: { name: 'Development', icon: 'ðŸš€' },

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
                category: { name: 'Development', icon: 'ðŸš€' },
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
                category: { name: 'Development', icon: 'ðŸš€' },

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
        category: { name: 'Design', icon: 'âœ¨' },

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
            category: { name: 'Design', icon: 'âœ¨' },

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
                category: { name: 'Design', icon: 'âœ¨' },

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
                category: { name: 'Design', icon: 'âœ¨' },

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
            category: { name: 'Design', icon: 'âœ¨' },

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
                category: { name: 'Design', icon: 'âœ¨' },

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
                category: { name: 'Design', icon: 'âœ¨' },

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
            category: { name: 'Design', icon: 'âœ¨' },

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
                category: { name: 'Design', icon: 'âœ¨' },

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
                category: { name: 'Design', icon: 'âœ¨' },

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

    this.tasks2Subject.next(sampleTasks);
  }

  // API Methods for CRUD operations
  addMainTask(taskData: any): Observable<any> {
    // Stringify selected_days if it's an array
    if (taskData.selected_days && Array.isArray(taskData.selected_days)) {
      taskData = { ...taskData, selected_days: JSON.stringify(taskData.selected_days) };
    }
    return this.http.post<any>(API_CONFIG.tasks2.addMainTask, taskData);
  }

  updateMainTask(taskData: any): Observable<any> {
    // Stringify selected_days if it's an array
    if (taskData.selected_days && Array.isArray(taskData.selected_days)) {
      taskData = { ...taskData, selected_days: JSON.stringify(taskData.selected_days) };
    }
    return this.http.put<any>(API_CONFIG.tasks2.updateMainTask, taskData);
  }

  updateTaskImportant(id: number, important: boolean): Observable<any> {
    return this.http.put<any>(API_CONFIG.tasks2.updateTaskImportant(id), important);
  }

  updateTaskCompleted(id: number, completed: boolean): Observable<any> {
    return this.http.put<any>(API_CONFIG.tasks2.updateTaskCompleted(id), completed);
  }

  updateLevel1SubtaskCompleted(id: number, completed: boolean): Observable<any> {
    return this.http.put<any>(API_CONFIG.tasks2.updateLevel1SubtaskCompleted(id), completed);
  }

  updateLevel2SubtaskCompleted(id: number, completed: boolean): Observable<any> {
    return this.http.put<any>(API_CONFIG.tasks2.updateLevel2SubtaskCompleted(id), completed);
  }

  deleteMainTask(id: number): Observable<any> {
    return this.http.delete<any>(API_CONFIG.tasks2.deleteMainTask(id));
  }

  addLevel1Subtask(Subtask2Data: any): Observable<any> {
    // Stringify selected_days if it's an array
    if (Subtask2Data.selected_days && Array.isArray(Subtask2Data.selected_days)) {
      Subtask2Data = { ...Subtask2Data, selected_days: JSON.stringify(Subtask2Data.selected_days) };
    }
    return this.http.post<any>(API_CONFIG.tasks2.addLevel1Subtask, Subtask2Data);
  }

  updateLevel1Subtask(Subtask2Data: any): Observable<any> {
    // Stringify selected_days if it's an array
    if (Subtask2Data.selected_days && Array.isArray(Subtask2Data.selected_days)) {
      Subtask2Data = { ...Subtask2Data, selected_days: JSON.stringify(Subtask2Data.selected_days) };
    }
    return this.http.put<any>(API_CONFIG.tasks2.updateLevel1Subtask, Subtask2Data);
  }

  deleteLevel1Subtask(id: number): Observable<any> {
    return this.http.delete<any>(API_CONFIG.tasks2.deleteLevel1Subtask(id));
  }

  addLevel2Subtask(Subtask2Data: any): Observable<any> {
    return this.http.post<any>(API_CONFIG.tasks2.addLevel2Subtask, Subtask2Data);
  }

  updateLevel2Subtask(Subtask2Data: any): Observable<any> {
    return this.http.put<any>(API_CONFIG.tasks2.updateLevel2Subtask, Subtask2Data);
  }

  deleteLevel2Subtask(id: number): Observable<any> {
    return this.http.delete<any>(API_CONFIG.tasks2.deleteLevel2Subtask(id));
  }

  // Refresh tasks from API
  refreshTasks(): void {
    this.loadTasksFromAPI();
  }
}



