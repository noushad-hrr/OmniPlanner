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

  createTask(taskData: Partial<PeriodicTask>): PeriodicTask {
    const task: PeriodicTask = {
      id: this.generateId(),
      title: taskData.title || '',
      description: taskData.description || '',
      priorityLevel: taskData.priorityLevel || { name: 'medium', color: '#F97316' },
      status: taskData.status || { name: 'todo', color: '#64748B' },
      category: taskData.category || { name: 'General', icon: '📋' },
      startDate: taskData.startDate || null,
      endDate: taskData.endDate || null,
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

  updateTask(id: number, updates: Partial<PeriodicTask>): PeriodicTask | null {
    const tasks = this.tasksSubject.value;
    const taskIndex = tasks.findIndex(task => task.id === id);
    
    if (taskIndex === -1) return null;

    const updatedTask = {
      ...tasks[taskIndex],
      ...updates,
      updatedAt: new Date()
    };

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
  addSubtask(taskId: number, subtaskData: Partial<PeriodicSubtask>, parentSubtaskId?: number): PeriodicSubtask | null {
    const task = this.getTask(taskId);
    if (!task) return null;

    const level = parentSubtaskId ? this.getSubtaskLevel(task, parentSubtaskId) + 1 : 1;
    
    const subtask: PeriodicSubtask = {
      id: this.generateId(),
      title: subtaskData.title || '',
      description: subtaskData.description || '',
      status: subtaskData.status || { name: 'todo', color: '#64748B' },
      priority: subtaskData.priority || { name: 'medium', color: '#F97316' },
      category: subtaskData.category || task.category || { name: 'General', icon: '📋' },
      startDate: subtaskData.startDate || null,
      endDate: subtaskData.endDate || null,
      startTime: subtaskData.startTime || '09:00',
      endTime: subtaskData.endTime || '17:00',
      createdAt: new Date(),
      updatedAt: new Date(),
      estimatedHours: subtaskData.estimatedHours || 0,
      priorityOrder: subtaskData.priorityOrder ?? null,
      subtasks: [],
      parentId: parentSubtaskId,
      level: level,
      isExpanded: false
    };

    if (parentSubtaskId) {
      this.addSubtaskToParent(task, parentSubtaskId, subtask);
    } else {
      if (!task.subtasks) {
        task.subtasks = [];
      }
      task.subtasks.push(subtask);
    }

    task.progress = this.calculateTaskProgress(task);
    task.updatedAt = new Date();

    this.tasksSubject.next([...this.tasksSubject.value]);
    return subtask;
  }

  updateSubtask(taskId: number, subtaskId: number, updates: Partial<PeriodicSubtask>): PeriodicSubtask | null {
    const task = this.getTask(taskId);
    if (!task) return null;

    const subtask = this.findSubtask(task, subtaskId);
    if (!subtask) return null;

    Object.assign(subtask, updates, { updatedAt: new Date() });

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

