import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface CredentialInfo {
  id: number;
  provider: string;
  credential_name: string;
  credential_id: string;
}

export interface TableColumn {
  key: string;
  title: string;
  sortable?: boolean;
  filterable?: boolean;
  resizable?: boolean;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  align?: 'left' | 'center' | 'right';
  type?: 'text' | 'number' | 'date' | 'boolean' | 'custom' | 'priority' | 'progress' | 'status' | 'subtasks' | 'urls' | 'remarks' | 'password' | 'json' | 'credentials';
  customTemplate?: string;
  sticky?: boolean;
  hidden?: boolean;
  mergedKeys?: string[]; // For merged columns, specify which keys to merge
  tooltip?: string; // Tooltip text to show on hover
  toggleable?: boolean; // For boolean columns, if true, shows toggle switch instead of checkmark/X
}

export interface TableAction {
  label: string;
  icon?: string;
  action: string;
  color?: string;
  disabled?: boolean;
}

export interface TableConfig {
  selectable?: boolean;
  multiSelect?: boolean;
  sortable?: boolean;
  filterable?: boolean;
  resizable?: boolean;
  pagination?: boolean;
  pageSize?: number;
  pageSizeOptions?: number[];
  exportable?: boolean;
  searchable?: boolean;
  virtualScrolling?: boolean;
  stickyHeader?: boolean;
  stickyColumns?: number;
}

export interface TableData {
  id: string;
  [key: string]: any;
}

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './data-table.html',
  styleUrls: ['./data-table.scss']
})
export class DataTableComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() columns: TableColumn[] = [];
  @Input() data: TableData[] = [];
  @Input() config: TableConfig = {};
  @Input() actions: TableAction[] = [];
  @Input() loading: boolean = false;
  @Input() emptyMessage: string = 'No data available';
  @Input() searchPlaceholder: string = 'Search...';
  @Input() isPeriodicTasks: boolean = false;
  
  @Input() set externalSearch(value: string) {
    if (value !== undefined && value !== null) {
      this.searchQuery = value || '';
      this.onSearch();
    }
  }
  
  @Output() rowClick = new EventEmitter<TableData>();
  @Output() rowSelect = new EventEmitter<TableData[]>();
  @Output() actionClick = new EventEmitter<{action: string, row: TableData, subtask?: any}>();
  @Output() sortChange = new EventEmitter<{column: string, direction: 'asc' | 'desc'}>();
  @Output() filterChange = new EventEmitter<{column: string, value: any}>();
  @Output() pageChange = new EventEmitter<{page: number, pageSize: number}>();
  @Output() booleanToggle = new EventEmitter<{column: string, row: TableData, value: boolean}>();

  @ViewChild('tableRef', { static: false }) tableRef!: ElementRef;
  @ViewChild('headerRef', { static: false }) headerRef!: ElementRef;

  // Table state
  selectedRows: Set<string> = new Set();
  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';
  searchQuery: string = '';
  filters: { [key: string]: any } = {};
  passwordVisibility: Map<string, boolean> = new Map(); // Track password visibility by rowId_columnKey
  
  // Pagination
  currentPage: number = 1;
  pageSize: number = 10;
  totalPages: number = 0;
  
  // Filtered and sorted data
  filteredData: TableData[] = [];
  displayedData: TableData[] = [];
  
  // Column resizing
  isResizing: boolean = false;
  resizingColumn: string = '';
  startX: number = 0;
  startWidth: number = 0;
  
  // Virtual scrolling
  scrollTop: number = 0;
  itemHeight: number = 50;
  visibleStart: number = 0;
  visibleEnd: number = 0;
  
  // Remarks tooltip state
  showRemarksTooltip: string | null = null;
  
  // Default configuration
  defaultConfig: TableConfig = {
    selectable: true,
    multiSelect: true,
    sortable: true,
    filterable: true,
    resizable: true,
    pagination: true,
    pageSize: 8,
    pageSizeOptions: [5, 10, 25, 50, 100],
    exportable: true,
    searchable: true,
    virtualScrolling: false,
    stickyHeader: true,
    stickyColumns: 0
  };

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.config = { ...this.defaultConfig, ...this.config };
    this.pageSize = Number(this.config.pageSize) || 10;
    this.processData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['config']) {
      this.config = { ...this.defaultConfig, ...this.config };
      this.pageSize = Number(this.config.pageSize) || 10;
      this.currentPage = 1;
    }
    if (changes['data'] || changes['columns'] || changes['config']) {
      this.processData();
    }
  }

  ngAfterViewInit(): void {
    this.setupVirtualScrolling();
  }

  processData(): void {
    // Always start with fresh data from input
    this.filteredData = [...this.data];
    this.applyFilters();
    this.applySorting();
    // Reset to page 1 only if current page would be out of bounds
    const newTotalPages = Math.ceil(this.filteredData.length / this.pageSize);
    if (this.currentPage > newTotalPages && newTotalPages > 0) {
      this.currentPage = 1;
    }
    this.updatePagination();
  }

  applyFilters(): void {
    if (!this.searchQuery && Object.keys(this.filters).length === 0) {
      this.filteredData = [...this.data];
      return;
    }

    this.filteredData = this.data.filter(row => {
      // Search query filter - search across all row data, not just visible columns
      if (this.searchQuery) {
        const searchLower = this.searchQuery.toLowerCase();
        const matchesSearch = this.searchInRow(row, searchLower);
        if (!matchesSearch) return false;
      }

      // Column filters
      for (const [columnKey, filterValue] of Object.entries(this.filters)) {
        if (filterValue !== null && filterValue !== undefined && filterValue !== '') {
          const cellValue = this.getCellValue(row, columnKey);
          if (!this.matchesFilter(cellValue, filterValue)) {
            return false;
          }
        }
      }

      return true;
    });
  }

  searchInRow(row: TableData, searchLower: string): boolean {
    // Recursively search through ALL properties, including deeply nested structures
    // This will search: main task fields, subtasks (including nested subtasks), 
    // descriptions, tags, URLs, remarks, and ANY new fields you add
    return this.searchInValue(row, searchLower);
  }

  private searchInValue(value: any, searchLower: string): boolean {
    // Skip null and undefined
    if (value === null || value === undefined) {
      return false;
    }

    // Handle arrays (like subtasks, urls, remarks, tags, etc.)
    // Recursively search each item in the array
    if (Array.isArray(value)) {
      for (const item of value) {
        if (this.searchInValue(item, searchLower)) {
          return true;
        }
      }
      return false;
    }

    // Handle objects - recursively search all nested properties
    if (typeof value === 'object' && value !== null) {
      // Handle Date objects
      if (value instanceof Date) {
        return value.toString().toLowerCase().includes(searchLower);
      }

      // Handle RegExp objects
      if (value instanceof RegExp) {
        return value.toString().toLowerCase().includes(searchLower);
      }

      // Recursively search all object properties
      // This will search through: category.name, status.name, priorityLevel.name,
      // subtasks[].title, subtasks[].description, subtasks[].subtasks[], etc.
      for (const key in value) {
        if (value.hasOwnProperty(key)) {
          // Skip only internal/framework properties that aren't actual data
          if (key === '__typename' || key === '$$typeof' || key === '$$observable') {
            continue;
          }

          const objValue = value[key];
          
          // Recursively search nested values (handles subtasks within subtasks, etc.)
          if (this.searchInValue(objValue, searchLower)) {
            return true;
          }
        }
      }
      return false;
    }

    // Handle primitive values (string, number, boolean)
    // Convert to string and search (handles all data types)
    try {
      const stringValue = String(value).toLowerCase();
      if (stringValue.includes(searchLower)) {
        return true;
      }
    } catch (e) {
      // If conversion fails, skip this value
      return false;
    }

    return false;
  }

  applySorting(): void {
    if (!this.sortColumn) return;

    const column = this.columns.find(col => col.key === this.sortColumn);
    const isNumeric = column?.type === 'number' || this.sortColumn === 'id' || column?.key === 'id';
    const isHoursColumn = this.sortColumn === 'hours';

    this.filteredData.sort((a, b) => {
      let aValue = this.getCellValue(a, this.sortColumn);
      let bValue = this.getCellValue(b, this.sortColumn);
      
      // Handle null/undefined values
      if (aValue == null && bValue == null) return 0;
      if (aValue == null) return 1; // nulls last
      if (bValue == null) return -1; // nulls last
      
      let comparison = 0;
      
      // Numeric sorting for ID column, number type columns, and hours column
      if (isNumeric || isHoursColumn) {
        let aNum: number;
        let bNum: number;
        
        if (isHoursColumn) {
          // Extract numeric value from hours string (e.g., "18h" -> 18)
          const aStr = String(aValue).replace(/[^0-9.]/g, '');
          const bStr = String(bValue).replace(/[^0-9.]/g, '');
          aNum = parseFloat(aStr) || 0;
          bNum = parseFloat(bStr) || 0;
        } else {
          // Standard numeric parsing for other numeric columns
          aNum = typeof aValue === 'string' ? parseFloat(aValue) || 0 : Number(aValue) || 0;
          bNum = typeof bValue === 'string' ? parseFloat(bValue) || 0 : Number(bValue) || 0;
        }
        
        if (aNum < bNum) comparison = -1;
        else if (aNum > bNum) comparison = 1;
      } else {
        // String sorting for other columns
        const aStr = String(aValue).toLowerCase();
        const bStr = String(bValue).toLowerCase();
        
        if (aStr < bStr) comparison = -1;
        else if (aStr > bStr) comparison = 1;
      }
      
      return this.sortDirection === 'desc' ? -comparison : comparison;
    });
  }

  updatePagination(): void {
    if (!this.config.pagination) {
      this.displayedData = this.filteredData;
      return;
    }

    this.totalPages = Math.ceil(this.filteredData.length / this.pageSize);
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedData = this.filteredData.slice(startIndex, endIndex);
  }

  getCellValue(row: TableData, key: string): any {
    const value = row[key];
    
    // Handle new structured data for category, status, priority/priorityLevel
    if (key === 'category' && value && typeof value === 'object' && value.name) {
      return value.name;
    }
    if (key === 'status' && value && typeof value === 'object' && value.name) {
      return value.name;
    }
    if ((key === 'priority' || key === 'priorityLevel') && value && typeof value === 'object' && value.name) {
      return value.name;
    }
    
    return value;
  }

  matchesFilter(cellValue: any, filterValue: any): boolean {
    if (typeof cellValue === 'string' && typeof filterValue === 'string') {
      return cellValue.toLowerCase().includes(filterValue.toLowerCase());
    }
    return cellValue === filterValue;
  }

  onSort(column: TableColumn): void {
    if (!column.sortable) return;

    if (this.sortColumn === column.key) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column.key;
      this.sortDirection = 'asc';
    }

    this.applySorting();
    this.updatePagination();
    this.sortChange.emit({ column: this.sortColumn, direction: this.sortDirection });
  }

  onSearch(): void {
    this.currentPage = 1;
    this.processData();
  }

  onFilter(column: string, value: any): void {
    this.filters[column] = value;
    this.currentPage = 1;
    this.processData();
    this.filterChange.emit({ column, value });
  }

  onRowClick(row: TableData): void {
    this.rowClick.emit(row);
  }

  onRowSelect(row: TableData, event: Event): void {
    event.stopPropagation();
    
    // Check if main task checkbox should be disabled
    if (this.isMainTaskDisabled(row)) {
      return; // Prevent selection if disabled
    }
    
    if (this.config.multiSelect) {
      if (this.selectedRows.has(row['id'])) {
        this.selectedRows.delete(row['id']);
      } else {
        this.selectedRows.add(row['id']);
      }
    } else {
      this.selectedRows.clear();
      this.selectedRows.add(row['id']);
    }

    const selectedData = this.data.filter(item => this.selectedRows.has(item['id']));
    this.rowSelect.emit(selectedData);
  }

  onBooleanToggle(columnKey: string, row: TableData, event: Event): void {
    event.stopPropagation();
    const currentValue = this.getCellValue(row, columnKey);
    const newValue = !currentValue;
    this.booleanToggle.emit({ column: columnKey, row: row, value: newValue });
  }

  onActionClick(action: TableAction, row: TableData, event: Event): void {
    event.stopPropagation();
    this.actionClick.emit({ action: action.action, row });
  }

  onPageChange(page: number): void {
    // Set page first, then process data
    this.currentPage = page;
    // Re-process data to ensure filters are applied correctly with current data
    // This ensures filteredData is always up to date before pagination
    this.filteredData = [...this.data];
    this.applyFilters();
    this.applySorting();
    // Check if page is still valid after filtering
    const newTotalPages = Math.ceil(this.filteredData.length / this.pageSize);
    if (this.currentPage > newTotalPages && newTotalPages > 0) {
      this.currentPage = 1;
    }
    this.updatePagination();
    this.pageChange.emit({ page: this.currentPage, pageSize: this.pageSize });
  }

  onPageSizeChange(pageSize: number | string): void {
    const newPageSize = typeof pageSize === 'string' ? parseInt(pageSize, 10) : pageSize;
    this.pageSize = newPageSize;
    this.currentPage = 1;
    this.updatePagination();
    this.pageChange.emit({ page: this.currentPage, pageSize: newPageSize });
  }

  onPageSizeChangeEvent(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const pageSize = target ? +target.value : 10;
    this.onPageSizeChange(pageSize);
  }

  selectAll(): void {
    if (this.selectedRows.size === this.displayedData.length) {
      this.selectedRows.clear();
    } else {
      this.displayedData.forEach(row => this.selectedRows.add(row['id']));
    }
    
    const selectedData = this.data.filter(item => this.selectedRows.has(item['id']));
    this.rowSelect.emit(selectedData);
  }

  isAllSelected(): boolean {
    return this.displayedData.length > 0 && this.selectedRows.size === this.displayedData.length;
  }

  isIndeterminate(): boolean {
    return this.selectedRows.size > 0 && this.selectedRows.size < this.displayedData.length;
  }

  exportData(format: 'csv' | 'json' | 'excel' = 'csv'): void {
    const dataToExport = this.selectedRows.size > 0 
      ? this.data.filter(item => this.selectedRows.has(item['id']))
      : this.filteredData;

    switch (format) {
      case 'csv':
        this.exportToCSV(dataToExport);
        break;
      case 'json':
        this.exportToJSON(dataToExport);
        break;
      case 'excel':
        this.exportToExcel(dataToExport);
        break;
    }
  }

  private exportToCSV(data: TableData[]): void {
    const headers = this.columns.map(col => col.title).join(',');
    const rows = data.map(row => 
      this.columns.map(col => `"${this.getCellValue(row, col.key) || ''}"`).join(',')
    );
    
    const csvContent = [headers, ...rows].join('\n');
    this.downloadFile(csvContent, 'data.csv', 'text/csv');
  }

  private exportToJSON(data: TableData[]): void {
    const jsonContent = JSON.stringify(data, null, 2);
    this.downloadFile(jsonContent, 'data.json', 'application/json');
  }

  private exportToExcel(data: TableData[]): void {
    // This would require a library like xlsx
    console.log('Excel export not implemented yet');
  }

  private downloadFile(content: string, filename: string, mimeType: string): void {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  }

  // Column resizing
  onMouseDown(event: MouseEvent, column: TableColumn): void {
    if (!column.resizable) return;
    
    event.preventDefault();
    this.isResizing = true;
    this.resizingColumn = column.key;
    this.startX = event.clientX;
    this.startWidth = this.getColumnWidth(column.key);
    
    document.addEventListener('mousemove', this.onMouseMove.bind(this));
    document.addEventListener('mouseup', this.onMouseUp.bind(this));
  }

  private onMouseMove(event: MouseEvent): void {
    if (!this.isResizing) return;
    
    const deltaX = event.clientX - this.startX;
    const newWidth = Math.max(50, this.startWidth + deltaX);
    this.setColumnWidth(this.resizingColumn, newWidth);
  }

  private onMouseUp(): void {
    this.isResizing = false;
    this.resizingColumn = '';
    
    document.removeEventListener('mousemove', this.onMouseMove.bind(this));
    document.removeEventListener('mouseup', this.onMouseUp.bind(this));
  }

  private getColumnWidth(key: string): number {
    const column = this.columns.find(col => col.key === key);
    return column?.width ? parseInt(column.width) : 150;
  }

  private setColumnWidth(key: string, width: number): void {
    const column = this.columns.find(col => col.key === key);
    if (column) {
      column.width = `${width}px`;
    }
  }

  // Virtual scrolling
  private setupVirtualScrolling(): void {
    if (!this.config.virtualScrolling) return;
    
    // Implementation would go here
    // This is a complex feature that requires careful implementation
  }

  // Utility methods
  getVisibleColumns(): TableColumn[] {
    return this.columns.filter(col => !col.hidden);
  }

  getStickyColumns(): TableColumn[] {
    return this.getVisibleColumns().slice(0, this.config.stickyColumns || 0);
  }

  getScrollableColumns(): TableColumn[] {
    return this.getVisibleColumns().slice(this.config.stickyColumns || 0);
  }

  getRowId(row: TableData): string {
    return row['id'] || row['_id'] || JSON.stringify(row);
  }

  isRowSelected(row: TableData): boolean {
    return this.selectedRows.has(this.getRowId(row));
  }

  getSortIcon(column: TableColumn): string {
    if (this.sortColumn !== column.key) return '⇅'; // Unsorted: double arrow
    return this.sortDirection === 'asc' ? '▲' : '▼'; // Ascending: filled triangle up, Descending: filled triangle down
  }

  getPageNumbers(): number[] {
    const pages: number[] = [];
    const maxVisible = 5;
    const start = Math.max(1, this.currentPage - Math.floor(maxVisible / 2));
    const end = Math.min(this.totalPages, start + maxVisible - 1);
    
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    
    return pages;
  }

  clearFilters(): void {
    this.filters = {};
    this.searchQuery = '';
    this.processData();
  }

  getFilteredCount(): number {
    return this.filteredData.length;
  }

  getTotalCount(): number {
    return this.data.length;
  }

  // TrackBy functions for performance
  trackByColumn = (index: number, column: TableColumn): string => {
    return column.key;
  }

  trackByRow = (index: number, row: TableData): string => {
    return this.getRowId(row);
  }

  // Helper methods for cell rendering

  getProgressPercentage(value: number): number {
    return Math.min(Math.max(value, 0), 100);
  }

  getFilterKeys(): string[] {
    return Object.keys(this.filters);
  }

  getPriorityColor(priority: any): string {
    if (priority && typeof priority === 'object' && priority.color) {
      return priority.color;
    }
    // Fallback for old string format
    const colors: { [key: string]: string } = {
      'low': '#059669',
      'medium': '#F97316', 
      'high': '#DC2626',
      'urgent': '#DC2626'
    };
    return colors[priority] || '#6B7280';
  }

  getStatusColor(status: any): string {
    if (status && typeof status === 'object' && status.color) {
      return status.color;
    }
    // Fallback for old string format
    const colors: { [key: string]: string } = {
      'todo': '#64748B',
      'in-progress': '#2563EB',
      'review': '#7C3AED',
      'done': '#059669'
    };
    return colors[status] || '#6B7280';
  }

  getCategoryIcon(category: any): string {
    if (category && typeof category === 'object' && category.icon) {
      return category.icon;
    }
    // Fallback for old string format
    const categoryIcons: { [key: string]: string } = {
      'Development': '🚀',
      'Design': '✨',
      'Marketing': '📊',
      'Operations': '⚡',
      'Research': '🔍'
    };
    return categoryIcons[category] || '📋';
  }

  getUrlsArray(urlsData: any): { id?: number; label: string; url: string; credentials?: CredentialInfo[] }[] {
    if (!urlsData) return [];
    if (Array.isArray(urlsData)) {
      // Handle new format with label and url objects (may include id and credentials)
      return urlsData.filter(item => item && item.label && item.url);
    }
    if (typeof urlsData === 'string') {
      // Handle old format with comma-separated URLs
      return urlsData.split(',').map(url => url.trim()).filter(url => url).map(url => ({
        label: url,
        url: url
      }));
    }
    return [];
  }

  getCredentialTooltip(credentials: CredentialInfo[]): string {
    if (!credentials || credentials.length === 0) return '';
    return credentials.map(cred => 
      `${cred.credential_id || cred.id || ''} - ${cred.credential_name || ''}`
    ).filter(text => text.trim()).join('\n');
  }

  getCredentialsArray(credentialsData: any): any[] {
    if (!credentialsData) return [];
    if (Array.isArray(credentialsData)) {
      return credentialsData.filter(cred => cred && (cred.id || cred.credential_id));
    }
    return [];
  }

  maskPassword(password: string): string {
    if (!password) return '-';
    return '•'.repeat(Math.min(password.length, 10));
  }

  togglePasswordVisibility(row: TableData, columnKey: string): void {
    const rowId = this.getRowId(row);
    const mapKey = `${rowId}_${columnKey}`;
    const currentState = this.passwordVisibility.get(mapKey) || false;
    const newState = !currentState;
    this.passwordVisibility.set(mapKey, newState);
    // Update row object for change detection
    row['showPassword_' + columnKey] = newState;
    // Force change detection
    this.cdr.detectChanges();
  }

  isPasswordVisible(row: TableData, columnKey: string): boolean {
    const rowId = this.getRowId(row);
    const mapKey = `${rowId}_${columnKey}`;
    return this.passwordVisibility.get(mapKey) || false;
  }

  formatAdditionalFields(jsonString: string): string {
    if (!jsonString || jsonString === '{}') return '';
    try {
      const obj = JSON.parse(jsonString);
      return Object.entries(obj)
        .map(([key, value]) => `${key}: ${value}`)
        .join(', ');
    } catch {
      return jsonString;
    }
  }

  formatAdditionalFieldsPreview(jsonString: string): string {
    if (!jsonString || jsonString === '{}') return '';
    try {
      const obj = JSON.parse(jsonString);
      const entries = Object.entries(obj);
      if (entries.length === 0) return '-';
      // Show first 2 key-value pairs, or all if <= 2
      const preview = entries.slice(0, 2)
        .map(([key, value]) => `${key}: ${value}`)
        .join(', ');
      return entries.length > 2 ? preview + '...' : preview;
    } catch {
      return jsonString.length > 50 ? jsonString.substring(0, 50) + '...' : jsonString;
    }
  }

  getRemarksArray(remarksData: any): string[] {
    if (!remarksData) return [];
    if (Array.isArray(remarksData)) return remarksData;
    if (typeof remarksData === 'string') {
      return remarksData.split('.').map(r => r.trim()).filter(r => r).map(r => r + '.');
    }
    return [];
  }

  // Subtask management methods
  updateSubtaskStatus(taskId: string, subtaskId: string, status: string): void {
    // Emit event to parent component
    this.actionClick.emit({
      action: 'update-subtask-status',
      row: { id: taskId, subtaskId, status }
    });
  }

  deleteSubtask(taskId: string, subtaskId: string): void {
    // Emit event to parent component
    this.actionClick.emit({
      action: 'delete-subtask',
      row: { id: taskId, subtaskId }
    });
  }

  getSubtaskStatusColor(status: string): string {
    const colors: { [key: string]: string } = {
      'todo': '#6B7280',
      'in-progress': '#3B82F6',
      'done': '#10B981'
    };
    return colors[status] || '#6B7280';
  }

  // Click handlers
  onTaskClick(row: TableData): void {
    this.actionClick.emit({
      action: 'view-task',
      row: row
    });
  }

  onSubtaskClick(taskId: string, subtask: any): void {
    this.actionClick.emit({
      action: 'view-subtask',
      row: { id: taskId, subtask: subtask }
    });
  }

  updateSubtaskStatusFromTable(row: TableData, status: string): void {
    // For subtasks displayed as separate rows, emit the update event
    this.actionClick.emit({
      action: 'update-subtask-status',
      row: { id: row.id, subtaskId: row.id, status }
    });
  }

  // Helper method to sort subtasks by priorityOrder (ascending, nulls last)
  private sortSubtasksByPriorityOrder(subtasks: any[]): any[] {
    return [...subtasks].sort((a, b) => {
      const aOrder = a.priorityOrder ?? Number.MAX_SAFE_INTEGER;
      const bOrder = b.priorityOrder ?? Number.MAX_SAFE_INTEGER;
      return aOrder - bOrder;
    });
  }

  // Helper method to flatten all subtasks (including nested ones) with level information
  // Respects the expansion state of each subtask
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
        
        // Recursively add nested subtasks ONLY if the current subtask is expanded
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

  // New action methods for context-specific buttons
  onAddSubtask(task: any): void {
    this.actionClick.emit({
      action: 'add-subtask',
      row: task
    });
  }

  onEditTask(task: any): void {
    this.actionClick.emit({
      action: 'edit-task',
      row: task
    });
  }

  onViewTask(task: any): void {
    this.actionClick.emit({
      action: 'view-task',
      row: task
    });
  }

  onDeleteTask(task: any): void {
    this.actionClick.emit({
      action: 'delete-task',
      row: task
    });
  }

  // Navigate to periodic task
  onNavigateToPeriodicTask(periodicTaskId: number): void {
    this.actionClick.emit({
      action: 'navigate-to-periodic-task',
      row: { id: '', periodicTaskId: periodicTaskId } as TableData
    });
  }

  onAddNestedSubtask(task: any, subtask: any): void {
    this.actionClick.emit({
      action: 'add-level2-subtask',
      row: task,
      subtask: subtask
    });
  }

  onEditSubtask(task: any, subtask: any): void {
    this.actionClick.emit({
      action: 'edit-subtask',
      row: task,
      subtask: subtask
    });
  }

  onViewSubtask(task: any, subtask: any): void {
    this.actionClick.emit({
      action: 'view-subtask',
      row: task,
      subtask: subtask
    });
  }

  onDeleteSubtask(task: any, subtask: any): void {
    this.actionClick.emit({
      action: 'delete-subtask',
      row: task,
      subtask: subtask
    });
  }

  // Expand/Collapse functionality
  onToggleTaskExpansion(task: any): void {
    this.actionClick.emit({
      action: 'toggle-task-expansion',
      row: task
    });
  }

  onToggleSubtaskExpansion(task: any, subtask: any): void {
    this.actionClick.emit({
      action: 'toggle-subtask-expansion',
      row: task,
      subtask: subtask
    });
  }

  // Helper method to check if a subtask has nested subtasks
  hasNestedSubtasks(subtask: any): boolean {
    return subtask.subtasks && subtask.subtasks.length > 0;
  }

  // Helper method to get count of Level 1 subtasks for main task (format: completed/total)
  getLevel1SubtaskCount(subtasks: any[]): string {
    if (!subtasks || subtasks.length === 0) {
      return '0/0';
    }
    const total = subtasks.length;
    const completed = subtasks.filter((subtask: any) => subtask.completed === true).length;
    return `${completed}/${total}`;
  }

  // Helper method to get tooltip message for Level 1 subtasks
  getLevel1SubtaskTooltip(subtasks: any[]): string {
    if (!subtasks || subtasks.length === 0) {
      return '0 of 0 are completed';
    }
    const total = subtasks.length;
    const completed = subtasks.filter((subtask: any) => subtask.completed === true).length;
    return `${completed} of ${total} are completed`;
  }

  // Helper method to get count of Level 2 subtasks for Level 1 subtask (format: completed/total)
  getLevel2SubtaskCount(subtask: any): string {
    if (!subtask.subtasks || subtask.subtasks.length === 0) {
      return '0/0';
    }
    const total = subtask.subtasks.length;
    const completed = subtask.subtasks.filter((nestedSubtask: any) => nestedSubtask.completed === true).length;
    return `${completed}/${total}`;
  }

  // Helper method to get tooltip message for Level 2 subtasks
  getLevel2SubtaskTooltip(subtask: any): string {
    if (!subtask.subtasks || subtask.subtasks.length === 0) {
      return '0 of 0 are completed';
    }
    const total = subtask.subtasks.length;
    const completed = subtask.subtasks.filter((nestedSubtask: any) => nestedSubtask.completed === true).length;
    return `${completed} of ${total} are completed`;
  }

  // Check if a subtask checkbox should be disabled
  isSubtaskDisabled(subtask: any): boolean {
    // Level 1 subtasks are disabled if not all Level 2 subtasks are completed
    if (subtask.level === 1 && this.hasNestedSubtasks(subtask)) {
      const level2Subtasks = subtask.subtasks || [];
      const allLevel2Completed = level2Subtasks.every((level2Subtask: any) => level2Subtask.completed === true);
      return !allLevel2Completed;
    }
    
    // Level 2 subtasks are never disabled (they can always be checked)
    return false;
  }

  // Check if a main task checkbox should be disabled
  isMainTaskDisabled(row: any): boolean {
    const subtasks = this.getCellValue(row, 'subtasks') || [];
    
    // Main task is disabled if not all Level 1 subtasks are completed
    if (subtasks.length > 0) {
      const allLevel1Completed = subtasks.every((subtask: any) => subtask.completed === true);
      return !allLevel1Completed;
    }
    
    // If no subtasks, main task can be checked
    return false;
  }

  // Check if a task is completed
  isTaskCompleted(row: any): boolean {
    return row['completed'] === true || row['completed'] === 1;
  }

  // Check if a subtask is completed
  isSubtaskCompleted(subtask: any): boolean {
    return subtask?.completed === true || subtask?.completed === 1;
  }

  // Get tooltip for Add button when task is completed
  getAddButtonTooltip(row: any, isSubtask: boolean = false): string {
    if (isSubtask) {
      return this.isSubtaskCompleted(row) ? 'Mark incomplete to add child task' : 'Add Level 2 Child Task';
    }
    return this.isTaskCompleted(row) ? 'Mark incomplete to add child task' : 'Add Level 1 Child Task';
  }

  // Get tooltip for Edit button when task is completed
  getEditButtonTooltip(row: any, isSubtask: boolean = false, level: number = 1): string {
    if (isSubtask) {
      return this.isSubtaskCompleted(row) ? 'Mark incomplete to edit task' : `Edit Level ${level} Child Task`;
    }
    return this.isTaskCompleted(row) ? 'Mark incomplete to edit task' : 'Edit Main Task';
  }

  // Toggle important status
  onToggleImportant(row: any): void {
    this.actionClick.emit({
      action: 'toggle-important',
      row: row
    });
  }

  // Handle main task checkbox change
  onMainTaskCheckboxChange(row: any, event: Event): void {
    event.stopPropagation();
    const isChecked = (event.target as HTMLInputElement).checked;
    this.actionClick.emit({
      action: 'toggle-main-task-completed',
      row: { ...row, completed: isChecked }
    });
  }

  // Handle subtask checkbox change
  onSubtaskCheckboxChange(taskId: string, subtask: any, event: Event): void {
    event.stopPropagation();
    const isChecked = (event.target as HTMLInputElement).checked;
    this.actionClick.emit({
      action: 'toggle-subtask-completed',
      row: { id: taskId, subtask: { ...subtask, completed: isChecked } }
    });
  }

  // Remarks indicator methods
  hasRemarks(row: TableData): boolean {
    const remarks = row['remarks'];
    if (!remarks) return false;
    if (Array.isArray(remarks)) {
      return remarks.length > 0 && remarks.some((r: string) => r && r.trim().length > 0);
    }
    if (typeof remarks === 'string') {
      return remarks.trim().length > 0;
    }
    return false;
  }

  getRemarksCount(row: TableData): number {
    const remarksArray = this.getRemarksArray(row['remarks']);
    return remarksArray.length;
  }

  getRemarksTooltip(row: TableData): string {
    const count = this.getRemarksCount(row);
    if (count === 0) return 'No remarks';
    if (count === 1) return '1 remark - Click to view';
    return `${count} remarks - Click to view`;
  }

  onRemarksClick(row: TableData, event: Event): void {
    event.stopPropagation();
    // Toggle tooltip on click
    if (this.showRemarksTooltip === row['id']) {
      this.showRemarksTooltip = null;
    } else {
      this.showRemarksTooltip = row['id'];
    }
  }

  // Description methods
  hasDescription(row: TableData): boolean {
    const description = row['description'];
    if (!description) return false;
    if (typeof description === 'string') {
      return description.trim().length > 0;
    }
    return false;
  }

  getDescriptionText(row: TableData): string {
    const description = row['description'];
    if (!description) return '';
    if (typeof description === 'string') {
      return description.trim();
    }
    return String(description);
  }

  // Format date for subtasks
  formatSubtaskDate(date: Date | string | null): string {
    if (!date) return 'ND';
    try {
      const dateObj = date instanceof Date ? date : new Date(date);
      if (isNaN(dateObj.getTime())) return 'ND';
      return dateObj.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
    } catch (e) {
      return 'ND';
    }
  }

  // Calculate number of days between start and end date
  calculateDaysBetween(startDate: Date | string | null, endDate: Date | string | null): number {
    if (!startDate || !endDate) return 0;
    try {
      const start = startDate instanceof Date ? startDate : new Date(startDate);
      const end = endDate instanceof Date ? endDate : new Date(endDate);
      if (isNaN(start.getTime()) || isNaN(end.getTime())) return 0;
      
      // Calculate difference in milliseconds
      const diffTime = end.getTime() - start.getTime();
      // Convert to days (add 1 to include both start and end dates)
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
      return diffDays > 0 ? diffDays : 0;
    } catch (e) {
      return 0;
    }
  }

  // Calculate hours per day for periodic tasks
  calculateHoursPerDay(estimatedHours: number | null, startDate: Date | string | null, endDate: Date | string | null): number | null {
    if (!estimatedHours || estimatedHours <= 0) return null;
    if (!startDate || !endDate) return null;
    
    const days = this.calculateDaysBetween(startDate, endDate);
    if (days <= 0) return null;
    
    const hoursPerDay = estimatedHours / days;
    return Math.round(hoursPerDay * 100) / 100; // Round to 2 decimal places
  }

  // Get formatted hours display for periodic tasks
  getHoursDisplay(row: TableData): string {
    const hours = this.getCellValue(row, 'hours');
    if (!hours) return 'ND';
    
    // Extract numeric value from hours string (e.g., "18h" -> 18)
    const hoursStr = String(hours).replace(/[^0-9.]/g, '');
    const estimatedHours = parseFloat(hoursStr) || 0;
    
    if (!this.isPeriodicTasks || estimatedHours <= 0) {
      return String(hours);
    }
    
    const startDate = this.getCellValue(row, 'startDate');
    const endDate = this.getCellValue(row, 'endDate');
    const hoursPerDay = this.calculateHoursPerDay(estimatedHours, startDate, endDate);
    
    if (hoursPerDay == null) {
      return String(hours);
    }
    
    return String(hours);
  }

  // Get hours per day for periodic tasks
  getHoursPerDay(row: TableData): number | null {
    if (!this.isPeriodicTasks) return null;
    
    const hours = this.getCellValue(row, 'hours');
    if (!hours) return null;
    
    // Extract numeric value from hours string (e.g., "18h" -> 18)
    const hoursStr = String(hours).replace(/[^0-9.]/g, '');
    const estimatedHours = parseFloat(hoursStr) || 0;
    
    if (estimatedHours <= 0) return null;
    
    const startDate = this.getCellValue(row, 'startDate');
    const endDate = this.getCellValue(row, 'endDate');
    return this.calculateHoursPerDay(estimatedHours, startDate, endDate);
  }
}

