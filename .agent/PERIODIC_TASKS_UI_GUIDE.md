# Periodic Tasks UI Implementation Guide

## ✅ Completed
1. Backend fully implemented with all CRUD endpoints
2. Frontend service layer updated to use real APIs with Observables
3. TypeScript errors fixed (added `important` field to PeriodicSubtask interface)

## 🔧 Remaining Work

### 1. Update Component Methods to Handle Observables

The periodic task service now returns Observables, but the component expects synchronous returns. We need to update these methods:

#### Methods to Update in `tasks.ts`:

**Line 1194** - `updateTask` for drag & drop:
```typescript
// Current (synchronous):
(this.getService() as any).updateTask(taskId, { status: newStatus } as any);

// Should be (Observable):
if (this.viewMode === 'periodic-tasks') {
  (this.periodicTaskService as any).updateTask(taskId, { status: newStatus } as any)
    .subscribe({
      next: () => this.toaster.success('Task updated'),
      error: (err) => this.toaster.error('Failed to update task')
    });
} else {
  this.taskService.updateTask(taskId, { status: newStatus } as any);
}
```

**Line 1318, 1322** - `addSubtask` and `updateSubtask`:
```typescript
// Need to wrap in subscribe() for periodic tasks
```

**Line 1516, 1928** - More `addSubtask` calls
**Line 1943, 1949, 1976** - More `updateSubtask` calls  
**Line 1969** - `deleteSubtask` call
**Line 3122** - `createTask` call
**Line 3323, 3338** - More `updateTask` calls

### 2. Add Periodic Task Modal UI

Create a new modal for adding/editing periodic tasks with recurrence fields.

**In `tasks.html`**, add after the regular task modal:

```html
<!-- Add/Edit Periodic Task Modal -->
<div class="modal-overlay" *ngIf="showAddPeriodicTaskModal || showEditPeriodicTaskModal" (click)="closePeriodicTaskModal()">
  <div class="modal-content" (click)="$event.stopPropagation()">
    <div class="modal-header">
      <h2>{{ showAddPeriodicTaskModal ? 'Add Periodic Task' : 'Edit Periodic Task' }}</h2>
      <button class="close-btn" (click)="closePeriodicTaskModal()">&times;</button>
    </div>
    
    <div class="modal-body">
      <!-- Basic Fields -->
      <div class="form-group">
        <label>Title *</label>
        <input type="text" [(ngModel)]="newPeriodicTask.title" placeholder="Task title">
      </div>
      
      <div class="form-group">
        <label>Description</label>
        <textarea [(ngModel)]="newPeriodicTask.description" placeholder="Task description"></textarea>
      </div>
      
      <!-- Date Range -->
      <div class="form-row">
        <div class="form-group">
          <label>Start Date *</label>
          <input type="date" [(ngModel)]="newPeriodicTask.startDate">
        </div>
        <div class="form-group">
          <label>End Date</label>
          <input type="date" [(ngModel)]="newPeriodicTask.endDate">
        </div>
      </div>
      
      <!-- Time Range -->
      <div class="form-row">
        <div class="form-group">
          <label>Start Time</label>
          <input type="time" [(ngModel)]="newPeriodicTask.startTime">
        </div>
        <div class="form-group">
          <label>End Time</label>
          <input type="time" [(ngModel)]="newPeriodicTask.endTime">
        </div>
      </div>
      
      <!-- Recurrence Pattern -->
      <div class="form-group">
        <label>Recurrence Pattern *</label>
        <select [(ngModel)]="newPeriodicTask.recurrence_pattern" (change)="onRecurrencePatternChange()">
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>
      
      <!-- Recurrence Interval -->
      <div class="form-group">
        <label>Repeat Every</label>
        <div class="input-group">
          <input type="number" [(ngModel)]="newPeriodicTask.recurrence_interval" min="1">
          <span>{{ getIntervalLabel() }}</span>
        </div>
      </div>
      
      <!-- Weekly: Days of Week -->
      <div class="form-group" *ngIf="newPeriodicTask.recurrence_pattern === 'weekly'">
        <label>Repeat On</label>
        <div class="days-selector">
          <label *ngFor="let day of weekDays" class="day-checkbox">
            <input type="checkbox" [checked]="isDaySelected(day.value)" 
                   (change)="toggleDay(day.value)">
            <span>{{ day.label }}</span>
          </label>
        </div>
      </div>
      
      <!-- Monthly: Day of Month or Week -->
      <div class="form-group" *ngIf="newPeriodicTask.recurrence_pattern === 'monthly'">
        <label>Repeat By</label>
        <select [(ngModel)]="monthlyRepeatType">
          <option value="day">Day of Month</option>
          <option value="week">Week of Month</option>
        </select>
        
        <div *ngIf="monthlyRepeatType === 'day'" class="form-group">
          <label>Day</label>
          <input type="number" [(ngModel)]="newPeriodicTask.recurrence_month_day" min="1" max="31">
        </div>
        
        <div *ngIf="monthlyRepeatType === 'week'" class="form-row">
          <div class="form-group">
            <label>Week</label>
            <select [(ngModel)]="newPeriodicTask.recurrence_week_of_month">
              <option [value]="1">First</option>
              <option [value]="2">Second</option>
              <option [value]="3">Third</option>
              <option [value]="4">Fourth</option>
              <option [value]="-1">Last</option>
            </select>
          </div>
          <div class="form-group">
            <label>Day</label>
            <select [(ngModel)]="newPeriodicTask.recurrence_day_of_week">
              <option [value]="0">Sunday</option>
              <option [value]="1">Monday</option>
              <option [value]="2">Tuesday</option>
              <option [value]="3">Wednesday</option>
              <option [value]="4">Thursday</option>
              <option [value]="5">Friday</option>
              <option [value]="6">Saturday</option>
            </select>
          </div>
        </div>
      </div>
      
      <!-- Yearly: Month -->
      <div class="form-group" *ngIf="newPeriodicTask.recurrence_pattern === 'yearly'">
        <label>Month</label>
        <select [(ngModel)]="newPeriodicTask.recurrence_month">
          <option [value]="1">January</option>
          <option [value]="2">February</option>
          <option [value]="3">March</option>
          <option [value]="4">April</option>
          <option [value]="5">May</option>
          <option [value]="6">June</option>
          <option [value]="7">July</option>
          <option [value]="8">August</option>
          <option [value]="9">September</option>
          <option [value]="10">October</option>
          <option [value]="11">November</option>
          <option [value]="12">December</option>
        </select>
      </div>
      
      <!-- End Condition -->
      <div class="form-group">
        <label>Ends</label>
        <select [(ngModel)]="newPeriodicTask.recurrence_end_type">
          <option value="never">Never</option>
          <option value="on_date">On Date</option>
          <option value="after_occurrences">After Occurrences</option>
        </select>
        
        <div *ngIf="newPeriodicTask.recurrence_end_type === 'on_date'" class="form-group">
          <label>End Date</label>
          <input type="date" [(ngModel)]="newPeriodicTask.recurrence_end_date">
        </div>
        
        <div *ngIf="newPeriodicTask.recurrence_end_type === 'after_occurrences'" class="form-group">
          <label>Occurrences</label>
          <input type="number" [(ngModel)]="newPeriodicTask.recurrence_occurrences" min="1">
        </div>
      </div>
      
      <!-- Priority, Status, Category (same as regular task) -->
      <div class="form-row">
        <div class="form-group">
          <label>Priority</label>
          <select [(ngModel)]="newPeriodicTask.priorityLevel">
            <option *ngFor="let priority of priorities" [ngValue]="{ name: priority.priority, color: priority.color }">
              {{ priority.priority }}
            </option>
          </select>
        </div>
        
        <div class="form-group">
          <label>Status</label>
          <select [(ngModel)]="newPeriodicTask.status">
            <option *ngFor="let status of statuses" [ngValue]="{ name: status.status, color: status.color }">
              {{ status.status }}
            </option>
          </select>
        </div>
        
        <div class="form-group">
          <label>Category</label>
          <select [(ngModel)]="newPeriodicTask.category">
            <option *ngFor="let category of categoryMasters" [ngValue]="{ name: category.category, icon: category.icon }">
              {{ category.category }}
            </option>
          </select>
        </div>
      </div>
      
      <!-- Other Fields -->
      <div class="form-group">
        <label>Estimated Hours</label>
        <input type="number" [(ngModel)]="newPeriodicTask.estimatedHours" min="0" step="0.5">
      </div>
      
      <div class="form-group">
        <label>Remarks</label>
        <textarea [(ngModel)]="newPeriodicTask.remarks" placeholder="Additional notes"></textarea>
      </div>
      
      <div class="form-group">
        <label class="checkbox-label">
          <input type="checkbox" [(ngModel)]="newPeriodicTask.important">
          <span>Mark as Important</span>
        </label>
      </div>
    </div>
    
    <div class="modal-footer">
      <button class="btn btn-secondary" (click)="closePeriodicTaskModal()">Cancel</button>
      <button class="btn btn-primary" (click)="savePeriodicTask()">
        {{ showAddPeriodicTaskModal ? 'Add Task' : 'Update Task' }}
      </button>
    </div>
  </div>
</div>
```

### 3. Add Component Properties and Methods

**In `tasks.ts`**, add:

```typescript
// Properties
showAddPeriodicTaskModal: boolean = false;
showEditPeriodicTaskModal: boolean = false;
newPeriodicTask: any = {};
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

// Methods
onAddPeriodicTaskClicked(): void {
  this.initializePeriodicTaskDefaults();
  this.showAddPeriodicTaskModal = true;
}

initializePeriodicTaskDefaults(): void {
  const today = new Date().toISOString().split('T')[0];
  const defaultStatus = this.statuses.find(s => s.is_default) || this.statuses[0];
  const defaultPriority = this.priorities.find(p => p.is_default) || this.priorities[0];
  
  this.newPeriodicTask = {
    title: '',
    description: '',
    startDate: today,
    endDate: null,
    startTime: '09:00',
    endTime: '17:00',
    recurrence_pattern: 'daily',
    recurrence_interval: 1,
    recurrence_days: [],
    recurrence_month_day: 1,
    recurrence_week_of_month: 1,
    recurrence_day_of_week: 1,
    recurrence_month: 1,
    recurrence_end_type: 'never',
    recurrence_end_date: null,
    recurrence_occurrences: null,
    priorityLevel: defaultPriority ? { name: defaultPriority.priority, color: defaultPriority.color } : null,
    status: defaultStatus ? { name: defaultStatus.status, color: defaultStatus.color } : null,
    category: null,
    estimatedHours: null,
    remarks: '',
    important: false
  };
}

closePeriodicTaskModal(): void {
  this.showAddPeriodicTaskModal = false;
  this.showEditPeriodicTaskModal = false;
  this.newPeriodicTask = {};
}

savePeriodicTask(): void {
  // Validate
  if (!this.newPeriodicTask.title) {
    this.toaster.error('Title is required');
    return;
  }
  
  // Get IDs from master data
  const categoryId = this.categoryMasters.find(c => c.category === this.newPeriodicTask.category?.name)?.id || null;
  const priorityId = this.priorities.find(p => p.priority === this.newPeriodicTask.priorityLevel?.name)?.id || null;
  const statusId = this.statuses.find(s => s.status === this.newPeriodicTask.status?.name)?.id || null;
  
  const taskData = {
    title: this.newPeriodicTask.title,
    description: this.newPeriodicTask.description || null,
    priority_level_id: priorityId,
    status_id: statusId,
    category_id: categoryId,
    start_date: this.newPeriodicTask.startDate,
    end_date: this.newPeriodicTask.endDate,
    start_time: this.newPeriodicTask.startTime,
    end_time: this.newPeriodicTask.endTime,
    recurrence_pattern: this.newPeriodicTask.recurrence_pattern,
    recurrence_interval: this.newPeriodicTask.recurrence_interval,
    recurrence_days: this.newPeriodicTask.recurrence_days,
    recurrence_month_day: this.newPeriodicTask.recurrence_month_day,
    recurrence_week_of_month: this.newPeriodicTask.recurrence_week_of_month,
    recurrence_day_of_week: this.newPeriodicTask.recurrence_day_of_week,
    recurrence_month: this.newPeriodicTask.recurrence_month,
    recurrence_end_type: this.newPeriodicTask.recurrence_end_type,
    recurrence_end_date: this.newPeriodicTask.recurrence_end_date,
    recurrence_occurrences: this.newPeriodicTask.recurrence_occurrences,
    estimated_hours: this.newPeriodicTask.estimatedHours,
    priority_order: null,
    remarks: this.newPeriodicTask.remarks,
    important: this.newPeriodicTask.important,
    active: true,
    url_ids: []
  };
  
  this.periodicTaskService.createTask(taskData).subscribe({
    next: (task) => {
      this.toaster.success('Periodic task created successfully');
      this.closePeriodicTaskModal();
    },
    error: (error) => {
      this.toaster.error(error.message || 'Failed to create periodic task');
    }
  });
}

getIntervalLabel(): string {
  const pattern = this.newPeriodicTask.recurrence_pattern;
  const interval = this.newPeriodicTask.recurrence_interval || 1;
  
  if (interval === 1) {
    return pattern.slice(0, -2); // Remove 'ly' from 'daily', 'weekly', etc.
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
}
```

### 4. Update Task Filters Component

**In `task-filters.html`**, update the "Add Task" button to check view mode:

```html
<button class="btn btn-primary" (click)="onAddTaskClick()">
  <i class="fas fa-plus"></i>
  {{ viewMode === 'periodic-tasks' ? 'Add Periodic Task' : 'Add Task' }}
</button>
```

**In `task-filters.ts`**, add:

```typescript
onAddTaskClick(): void {
  this.addTaskClicked.emit(this.viewMode);
}
```

### 5. Update Tasks Component to Handle Add Button

**In `tasks.html`**, update the filter component:

```html
<app-task-filters
  [filterOptions]="filterOptions"
  [currentFilters]="currentFilters"
  [viewMode]="viewMode"
  (filterChanged)="onFilterChanged($event)"
  (viewModeChange)="onViewModeChanged($event)"
  (addTaskClicked)="onAddTaskClickedFromFilter($event)"
></app-task-filters>
```

**In `tasks.ts`**, add:

```typescript
onAddTaskClickedFromFilter(viewMode: string): void {
  if (viewMode === 'periodic-tasks') {
    this.onAddPeriodicTaskClicked();
  } else {
    this.onAddTaskClicked();
  }
}
```

## 🎯 Summary

Once these changes are made:
1. ✅ Periodic tasks can be created with full recurrence support
2. ✅ UI will show appropriate forms based on view mode
3. ✅ All CRUD operations will work with the backend
4. ✅ Recurrence patterns (daily, weekly, monthly, yearly) fully supported
5. ✅ End conditions (never, on date, after occurrences) supported

The implementation will be complete and ready to use!
