import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_CONFIG } from '../shared/config/api.config';
import type { TaskCategory, TaskFilter, TaskStats } from './task.service';

// Local types for Periodic Tasks (retain startDate/endDate)
export interface PeriodicSubtask {
  id: number;
  title: string;
  description: string;
  status: { name: 'todo' | 'in-progress' | 'review' | 'done' | 'open'; color: string };
  priority: { name: 'low' | 'medium' | 'high' | 'urgent' | 'normal'; color: string };
  category: { name: string; icon: string };
  startDate: Date | null;
  endDate: Date | null;
  startTime: string;
  endTime: string;
  createdAt: Date;
  updatedAt: Date;
  estimatedHours: number;
  priorityOrder: number | null;
  subtasks?: PeriodicSubtask[];
  parentId?: number;
  level: number;
  isExpanded?: boolean;
  important?: boolean;
  completed?: boolean;
}

export interface PeriodicTask {
  id: number;
  title: string;
  description: string | null;
  priorityLevel: { name: 'low' | 'medium' | 'high' | 'urgent' | 'normal'; color: string } | null;
  status: { name: 'todo' | 'in-progress' | 'review' | 'done' | 'open'; color: string } | null;
  category: { name: string; icon: string } | null;
  startDate: Date | null;
  endDate: Date | null;
  startTime: string | null;
  endTime: string | null;
  createdAt: Date;
  updatedAt: Date;
  estimatedHours: number | null;
  priorityOrder: number | null;
  subtasks: PeriodicSubtask[];
  progress: number;
  isExpanded: boolean;
  remarks?: string | null;
  urls?: { label: string; url: string }[] | null;
  important?: boolean;
  completed?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PeriodicTaskService {
  private tasksSubject = new BehaviorSubject<PeriodicTask[]>([]);
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

  public refreshTasks(): void {
    this.loadTasksFromAPI();
  }

  private loadTasksFromAPI(): void {
    this.http.get<any>(API_CONFIG.periodicTasks.getAll)
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
          console.error('Error loading periodic tasks from API:', error);
        }
      });
  }

  // Import normalizeSubtask and normalizeTask from task.service logic
  private normalizeSubtask(subtask: any): PeriodicSubtask {
    return {
      id: subtask.id,
      title: subtask.title || '',
      description: subtask.description || '',
      status: subtask.status ?? { name: 'todo', color: '#64748B' },
      priority: subtask.priority_level ?? subtask.priority ?? { name: 'medium', color: '#F97316' },
      category: subtask.category ?? { name: 'General', icon: '📋' },
      startDate: subtask.startDate ? new Date(subtask.startDate) : null,
      endDate: subtask.endDate ? new Date(subtask.endDate) : null,
      startTime: subtask.startTime || '',
      endTime: subtask.endTime || '',
      createdAt: subtask.createdAt ? new Date(subtask.createdAt) : new Date(),
      updatedAt: subtask.updatedAt ? new Date(subtask.updatedAt) : new Date(),
      estimatedHours: subtask.estimatedHours || 0,
      priorityOrder: subtask.priority_order ?? null,
      subtasks: subtask.subtasks ? subtask.subtasks.map((s: any) => this.normalizeSubtask(s)) : [],
      parentId: subtask.parentId,
      level: subtask.level || 1,
      isExpanded: subtask.isExpanded || false,
      important: subtask.important || false,
      completed: subtask.completed || false
    };
  }

  private normalizeTask(task: any): PeriodicTask {
    return {
      id: task.id,
      title: task.title || '',
      description: task.description ?? null,
      priorityLevel: task.priority_level ?? task.priority ?? null,
      status: task.status ?? null,
      category: task.category ?? null,
      startDate: task.startDate ? new Date(task.startDate) : null,
      endDate: task.endDate ? new Date(task.endDate) : null,
      startTime: task.startTime ?? null,
      endTime: task.endTime ?? null,
      createdAt: task.createdAt ? new Date(task.createdAt) : new Date(),
      updatedAt: task.updatedAt ? new Date(task.updatedAt) : new Date(),
      estimatedHours: task.estimatedHours ?? null,
      priorityOrder: task.priority_order ?? null,
      subtasks: task.subtasks ? task.subtasks.map((s: any) => this.normalizeSubtask(s)) : [],
      progress: 0,
      isExpanded: task.isExpanded || false,
      remarks: task.remarks ?? null,
      urls: task.urls ?? null,
      important: task.important || false,
      completed: task.completed || false
    };
  }

  // Task CRUD Operations
  getTasks(): Observable<PeriodicTask[]> {
    return this.tasks$;
  }

  getTask(id: number): PeriodicTask | undefined {
    return this.tasksSubject.value.find(task => task.id === id);
  }

  createTask(taskData: Partial<PeriodicTask> & any): Observable<PeriodicTask> {
    const requestBody = {
      title: taskData.title || '',
      description: taskData.description || null,
      priority_level_id: taskData.priority_level_id || null,
      status_id: taskData.status_id || null,
      category_id: taskData.category_id || null,
      start_date: taskData.startDate || null,
      end_date: taskData.endDate || null,
      start_time: taskData.startTime || '09:00',
      end_time: taskData.endTime || '17:00',
      recurrence_pattern: taskData.recurrence_pattern || 'daily',
      recurrence_interval: taskData.recurrence_interval || 1,
      recurrence_days: taskData.recurrence_days || null,
      recurrence_month_day: taskData.recurrence_month_day || null,
      recurrence_week_of_month: taskData.recurrence_week_of_month || null,
      recurrence_day_of_week: taskData.recurrence_day_of_week || null,
      recurrence_month: taskData.recurrence_month || null,
      recurrence_end_type: taskData.recurrence_end_type || 'never',
      recurrence_end_date: taskData.recurrence_end_date || null,
      recurrence_occurrences: taskData.recurrence_occurrences || null,
      estimated_hours: taskData.estimatedHours || null,
      priority_order: taskData.priorityOrder ?? null,
      remarks: taskData.remarks || null,
      important: taskData.important || false,
      active: true,
      url_ids: []
    };

    return this.http.post<any>(API_CONFIG.periodicTasks.add, requestBody)
      .pipe(
        map(response => {
          if (response.success && response.data) {
            const newTask = this.normalizeTask(response.data);
            const tasks = [...this.tasksSubject.value, newTask];
            this.tasksSubject.next(tasks);
            return newTask;
          }
          throw new Error(response.message || 'Failed to create periodic task');
        })
      );
  }

  updateTask(id: number, updates: Partial<PeriodicTask> & any): Observable<PeriodicTask> {
    const task = this.getTask(id);
    if (!task) {
      throw new Error('Task not found');
    }

    const requestBody = {
      id: id,
      title: updates.title ?? task.title,
      description: updates.description ?? task.description,
      priority_level_id: updates.priority_level_id ?? null,
      status_id: updates.status_id ?? null,
      category_id: updates.category_id ?? null,
      start_date: updates.startDate ?? task.startDate,
      end_date: updates.endDate ?? task.endDate,
      start_time: updates.startTime ?? task.startTime,
      end_time: updates.endTime ?? task.endTime,
      recurrence_pattern: updates.recurrence_pattern ?? (task as any).recurrence_pattern ?? 'daily',
      recurrence_interval: updates.recurrence_interval ?? (task as any).recurrence_interval ?? 1,
      recurrence_days: updates.recurrence_days ?? (task as any).recurrence_days ?? null,
      recurrence_month_day: updates.recurrence_month_day ?? (task as any).recurrence_month_day ?? null,
      recurrence_week_of_month: updates.recurrence_week_of_month ?? (task as any).recurrence_week_of_month ?? null,
      recurrence_day_of_week: updates.recurrence_day_of_week ?? (task as any).recurrence_day_of_week ?? null,
      recurrence_month: updates.recurrence_month ?? (task as any).recurrence_month ?? null,
      recurrence_end_type: updates.recurrence_end_type ?? (task as any).recurrence_end_type ?? 'never',
      recurrence_end_date: updates.recurrence_end_date ?? (task as any).recurrence_end_date ?? null,
      recurrence_occurrences: updates.recurrence_occurrences ?? (task as any).recurrence_occurrences ?? null,
      estimated_hours: updates.estimatedHours ?? task.estimatedHours,
      priority_order: updates.priorityOrder ?? task.priorityOrder,
      remarks: updates.remarks ?? task.remarks,
      important: updates.important ?? task.important,
      active: true,
      url_ids: []
    };

    return this.http.put<any>(API_CONFIG.periodicTasks.update, requestBody)
      .pipe(
        map(response => {
          if (response.success && response.data) {
            const updatedTask = this.normalizeTask(response.data);
            const tasks = this.tasksSubject.value.map(t =>
              t.id === id ? updatedTask : t
            );
            this.tasksSubject.next(tasks);
            return updatedTask;
          }
          throw new Error(response.message || 'Failed to update periodic task');
        })
      );
  }

  deleteTask(id: number): Observable<boolean> {
    return this.http.delete<any>(`${API_CONFIG.periodicTasks.delete}/${id}`)
      .pipe(
        map(response => {
          if (response.success) {
            const tasks = this.tasksSubject.value.filter(task => task.id !== id);
            this.tasksSubject.next(tasks);
            return true;
          }
          throw new Error(response.message || 'Failed to delete periodic task');
        })
      );
  }

  // Subtask Operations
  addSubtask(taskId: number, subtaskData: Partial<PeriodicSubtask>, parentSubtaskId?: number): Observable<PeriodicSubtask> {
    const level = parentSubtaskId ? 2 : 1;

    const requestBody = level === 1 ? {
      periodic_tasks_main_task_id: taskId,
      title: subtaskData.title || '',
      description: subtaskData.description || null,
      priority_level_id: null,
      status_id: null,
      start_time: subtaskData.startTime || '09:00',
      end_time: subtaskData.endTime || '17:00',
      estimated_hours: subtaskData.estimatedHours || null,
      priority_order: subtaskData.priorityOrder ?? null,
      important: subtaskData.completed || false,
      completed: subtaskData.completed || false
    } : {
      periodic_tasks_level_1_sub_task_id: parentSubtaskId,
      title: subtaskData.title || '',
      description: subtaskData.description || null,
      priority_level_id: null,
      status_id: null,
      start_time: subtaskData.startTime || '09:00',
      end_time: subtaskData.endTime || '17:00',
      estimated_hours: subtaskData.estimatedHours || null,
      priority_order: subtaskData.priorityOrder ?? null,
      important: subtaskData.completed || false,
      completed: subtaskData.completed || false
    };

    const endpoint = level === 1 ? API_CONFIG.periodicTasks.addLevel1Subtask : API_CONFIG.periodicTasks.addLevel2Subtask;

    return this.http.post<any>(endpoint, requestBody)
      .pipe(
        map(response => {
          if (response.success && response.data) {
            // Reload tasks to get updated data
            this.loadTasksFromAPI();
            return this.normalizeSubtask(response.data);
          }
          throw new Error(response.message || 'Failed to add subtask');
        })
      );
  }

  updateSubtask(taskId: number, subtaskId: number, updates: Partial<PeriodicSubtask>): Observable<PeriodicSubtask> {
    const task = this.getTask(taskId);
    if (!task) {
      throw new Error('Task not found');
    }

    const subtask = this.findSubtask(task, subtaskId);
    if (!subtask) {
      throw new Error('Subtask not found');
    }

    const level = subtask.level;
    const requestBody = level === 1 ? {
      id: subtaskId,
      periodic_tasks_main_task_id: taskId,
      title: updates.title ?? subtask.title,
      description: updates.description ?? subtask.description,
      priority_level_id: null,
      status_id: null,
      start_time: updates.startTime ?? subtask.startTime,
      end_time: updates.endTime ?? subtask.endTime,
      estimated_hours: updates.estimatedHours ?? subtask.estimatedHours,
      priority_order: updates.priorityOrder ?? subtask.priorityOrder,
      important: updates.completed ?? subtask.completed,
      completed: updates.completed ?? subtask.completed
    } : {
      id: subtaskId,
      periodic_tasks_level_1_sub_task_id: subtask.parentId,
      title: updates.title ?? subtask.title,
      description: updates.description ?? subtask.description,
      priority_level_id: null,
      status_id: null,
      start_time: updates.startTime ?? subtask.startTime,
      end_time: updates.endTime ?? subtask.endTime,
      estimated_hours: updates.estimatedHours ?? subtask.estimatedHours,
      priority_order: updates.priorityOrder ?? subtask.priorityOrder,
      important: updates.completed ?? subtask.completed,
      completed: updates.completed ?? subtask.completed
    };

    const endpoint = level === 1 ? API_CONFIG.periodicTasks.updateLevel1Subtask : API_CONFIG.periodicTasks.updateLevel2Subtask;

    return this.http.put<any>(endpoint, requestBody)
      .pipe(
        map(response => {
          if (response.success && response.data) {
            // Reload tasks to get updated data
            this.loadTasksFromAPI();
            return this.normalizeSubtask(response.data);
          }
          throw new Error(response.message || 'Failed to update subtask');
        })
      );
  }

  deleteSubtask(taskId: number, subtaskId: number): Observable<boolean> {
    const task = this.getTask(taskId);
    if (!task) {
      throw new Error('Task not found');
    }

    const subtask = this.findSubtask(task, subtaskId);
    if (!subtask) {
      throw new Error('Subtask not found');
    }

    const level = subtask.level;
    const endpoint = level === 1
      ? `${API_CONFIG.periodicTasks.deleteLevel1Subtask}/level1/${subtaskId}`
      : `${API_CONFIG.periodicTasks.deleteLevel2Subtask}/level2/${subtaskId}`;

    return this.http.delete<any>(endpoint)
      .pipe(
        map(response => {
          if (response.success) {
            // Reload tasks to get updated data
            this.loadTasksFromAPI();
            return true;
          }
          throw new Error(response.message || 'Failed to delete subtask');
        })
      );
  }

  // Progress Calculation
  calculateTaskProgress(task: PeriodicTask): number {
    if (!task.subtasks || task.subtasks.length === 0) {
      return 0;
    }

    const allSubtasks = this.getAllSubtasksFlat(task.subtasks);
    if (allSubtasks.length === 0) return 0;

    const completedSubtasks = allSubtasks.filter(subtask => subtask.completed === true).length;
    return Math.round((completedSubtasks / allSubtasks.length) * 100);
  }

  // Drag and Drop Operations
  moveTask(taskId: number, newStatus: PeriodicTask['status']): boolean {
    return this.updateTask(taskId, { status: newStatus }) !== null;
  }

  moveSubtask(taskId: number, subtaskId: number, newStatus: PeriodicSubtask['status']): boolean {
    return this.updateSubtask(taskId, subtaskId, { status: newStatus }) !== null;
  }

  reorderSubtasks(taskId: number, subtaskIds: number[]): boolean {
    const task = this.getTask(taskId);
    if (!task || !task.subtasks || task.subtasks.length === 0) return false;

    const reorderedSubtasks: PeriodicSubtask[] = [];

    subtaskIds.forEach(id => {
      const subtask = task.subtasks!.find(s => s.id === id);
      if (subtask) {
        reorderedSubtasks.push(subtask);
      }
    });

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
  filterTasks(filters: TaskFilter): PeriodicTask[] {
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
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase();
        const matchesTitle = task.title?.toLowerCase().includes(query) || false;
        const matchesDescription = task.description?.toLowerCase().includes(query) || false;
        const matchesSubtasks = task.subtasks ? this.searchInSubtasks(task.subtasks, query) : false;

        if (!matchesTitle && !matchesDescription && !matchesSubtasks) {
          return false;
        }
      }

      // Date filtering: Applied on startDate and endDate columns
      // Logic: ((startDate <= givenEndDate OR null) AND (endDate >= givenStartDate OR null))
      // Also accept tasks where both startDate and endDate are null
      const taskStartDate = task.startDate;
      const taskEndDate = task.endDate;

      // If both startDate and endDate filters are provided
      if (filters.startDate && filters.endDate) {
        const filterStartDate = new Date(filters.startDate);
        const filterEndDate = new Date(filters.endDate);
        filterStartDate.setHours(0, 0, 0, 0);
        filterEndDate.setHours(23, 59, 59, 999);

        // If both task dates are null, include the task
        if ((!taskStartDate || taskStartDate === null) && (!taskEndDate || taskEndDate === null)) {
          // Include task - both dates are null
        } else {
          // Check: (startDate <= givenEndDate OR null) AND (endDate >= givenStartDate OR null)
          const condition1 = !taskStartDate || taskStartDate === null || new Date(taskStartDate) <= filterEndDate;
          const condition2 = !taskEndDate || taskEndDate === null || new Date(taskEndDate) >= filterStartDate;

          if (!condition1 || !condition2) {
            return false;
          }
        }
      } else if (filters.startDate) {
        // Only startDate filter is provided
        // Check: endDate >= givenStartDate OR null
        if (!taskEndDate || taskEndDate === null) {
          // Include task - endDate is null
        } else {
          const filterStartDate = new Date(filters.startDate);
          filterStartDate.setHours(0, 0, 0, 0);
          const taskEnd = new Date(taskEndDate);
          taskEnd.setHours(23, 59, 59, 999);
          if (taskEnd < filterStartDate) {
            return false;
          }
        }
      } else if (filters.endDate) {
        // Only endDate filter is provided
        // Check: startDate <= givenEndDate OR null
        if (!taskStartDate || taskStartDate === null) {
          // Include task - startDate is null
        } else {
          const filterEndDate = new Date(filters.endDate);
          filterEndDate.setHours(23, 59, 59, 999);
          const taskStart = new Date(taskStartDate);
          taskStart.setHours(0, 0, 0, 0);
          if (taskStart > filterEndDate) {
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

  private getSubtaskLevel(task: PeriodicTask, subtaskId: number): number {
    const subtask = this.findSubtask(task, subtaskId);
    return subtask ? subtask.level : 0;
  }

  findSubtask(task: PeriodicTask, subtaskId: number): PeriodicSubtask | null {
    if (!task.subtasks || task.subtasks.length === 0) return null;
    const allSubtasks = this.getAllSubtasksFlat(task.subtasks);
    return allSubtasks.find(subtask => subtask.id === subtaskId) || null;
  }

  private getAllSubtasksFlat(subtasks: PeriodicSubtask[]): PeriodicSubtask[] {
    if (!subtasks || subtasks.length === 0) return [];
    const flat: PeriodicSubtask[] = [];

    const addSubtasks = (subs: PeriodicSubtask[]) => {
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

  private sortSubtasksByPriorityOrder(subtasks: any[]): any[] {
    return [...subtasks].sort((a, b) => {
      const aOrder = a.priorityOrder ?? Number.MAX_SAFE_INTEGER;
      const bOrder = b.priorityOrder ?? Number.MAX_SAFE_INTEGER;
      return aOrder - bOrder;
    });
  }

  getAllSubtasks(subtasks: any[]): any[] {
    const flattenedSubtasks: any[] = [];

    const addSubtasksWithLevel = (subtasks: any[], level: number = 1) => {
      const sortedSubtasks = this.sortSubtasksByPriorityOrder(subtasks);

      sortedSubtasks.forEach(subtask => {
        flattenedSubtasks.push({
          ...subtask,
          level: level
        });

        if (subtask.subtasks && subtask.subtasks.length > 0 && subtask.isExpanded) {
          subtask.subtasks = this.sortSubtasksByPriorityOrder(subtask.subtasks);
          addSubtasksWithLevel(subtask.subtasks, level + 1);
        }
      });
    };

    addSubtasksWithLevel(subtasks);
    return flattenedSubtasks;
  }

  toggleTaskExpansion(taskId: number): boolean {
    const task = this.getTask(taskId);
    if (!task) return false;

    task.isExpanded = !task.isExpanded;
    this.tasksSubject.next([...this.tasksSubject.value]);
    return task.isExpanded;
  }

  toggleSubtaskExpansion(taskId: number, subtaskId: number): boolean {
    const task = this.getTask(taskId);
    if (!task) return false;

    const subtask = this.findSubtaskById(task, subtaskId);
    if (!subtask) return false;

    subtask.isExpanded = !subtask.isExpanded;
    this.tasksSubject.next([...this.tasksSubject.value]);
    return subtask.isExpanded;
  }

  private findSubtaskById(task: PeriodicTask, subtaskId: number): PeriodicSubtask | null {
    const findInSubtasks = (subtasks: PeriodicSubtask[]): PeriodicSubtask | null => {
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

  private addSubtaskToParent(task: PeriodicTask, parentSubtaskId: number, newSubtask: PeriodicSubtask): void {
    const parentSubtask = this.findSubtask(task, parentSubtaskId);
    if (parentSubtask) {
      if (!parentSubtask.subtasks) {
        parentSubtask.subtasks = [];
      }
      parentSubtask.subtasks.push(newSubtask);
    }
  }

  private removeSubtaskFromTask(task: PeriodicTask, subtaskId: number): boolean {
    const directIndex = task.subtasks.findIndex(s => s.id === subtaskId);
    if (directIndex !== -1) {
      task.subtasks.splice(directIndex, 1);
      return true;
    }

    return this.removeSubtaskFromNested(task.subtasks, subtaskId);
  }

  private removeSubtaskFromNested(subtasks: PeriodicSubtask[], subtaskId: number): boolean {
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

  private searchInSubtasks(subtasks: PeriodicSubtask[], query: string): boolean {
    return subtasks.some(subtask => {
      const matchesSubtask = subtask.title?.toLowerCase().includes(query) ||
        subtask.description?.toLowerCase().includes(query) || false;
      const matchesNested = subtask.subtasks ? this.searchInSubtasks(subtask.subtasks, query) : false;
      return matchesSubtask || matchesNested;
    });
  }

  private isOverdue(task: PeriodicTask): boolean {
    if (!task.endDate || task.status?.name === 'done') return false;
    return task.endDate < new Date();
  }
}

