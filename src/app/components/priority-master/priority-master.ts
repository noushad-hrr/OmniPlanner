import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PriorityMasterService, Priority, PriorityViewModel } from '../../services/priority-master.service';
import { ToasterService } from '../../services/toaster.service';
import { ConfirmationService } from '../../services/confirmation.service';
import { DataTableComponent, TableColumn, TableConfig, TableAction, TableData } from '../data-table/data-table';

@Component({
  selector: 'app-priority-master',
  standalone: true,
  imports: [CommonModule, FormsModule, DataTableComponent],
  templateUrl: './priority-master.html',
  styleUrls: ['./priority-master.scss']
})
export class PriorityMasterComponent implements OnInit {
  priorities: PriorityViewModel[] = [];
  filteredPriorities: PriorityViewModel[] = [];
  searchQuery: string = '';
  showAddEditModal: boolean = false;
  isEditMode: boolean = false;
  selectedPriority: Priority | null = null;
  private isToggleInProgress: boolean = false;

  formPriority: Priority = {
    id: 0,
    priority: '',
    color: '#DC2626',
    is_active: true,
    is_default: false
  } as Priority;

  priorityError: string = '';
  colorError: string = '';

  tableColumns: TableColumn[] = [
    { key: 'id', title: 'ID', sortable: true, filterable: true, resizable: true, width: '70px', minWidth: '60px', maxWidth: '90px', align: 'center', type: 'number', hidden: false },
    { key: 'priority', title: 'Priority', sortable: true, filterable: true, resizable: true, width: '250px', minWidth: '200px', maxWidth: '400px', align: 'left', type: 'text' },
    { key: 'color', title: 'Color', sortable: false, filterable: false, resizable: true, width: '120px', minWidth: '100px', maxWidth: '150px', align: 'center', type: 'custom' },
    { key: 'is_default', title: 'Default', sortable: true, filterable: true, resizable: true, width: '100px', minWidth: '80px', maxWidth: '120px', align: 'center', type: 'boolean', toggleable: true },
    { key: 'is_active', title: 'Status', sortable: true, filterable: true, resizable: true, width: '100px', minWidth: '80px', maxWidth: '120px', align: 'center', type: 'boolean', toggleable: true },
    { key: 'created_by_name', title: 'Created By', sortable: true, filterable: true, resizable: true, width: '150px', minWidth: '120px', maxWidth: '200px', align: 'left', type: 'text' },
    { key: 'created_on', title: 'Created On', sortable: true, filterable: true, resizable: true, width: '150px', minWidth: '120px', maxWidth: '180px', align: 'center', type: 'date' },
    { key: 'last_modified_by_name', title: 'Last Modified By', sortable: true, filterable: true, resizable: true, width: '150px', minWidth: '120px', maxWidth: '200px', align: 'left', type: 'text' },
    { key: 'last_modified_on', title: 'Last Modified On', sortable: true, filterable: true, resizable: true, width: '150px', minWidth: '120px', maxWidth: '180px', align: 'center', type: 'date' },
    { key: 'actions', title: 'Actions', sortable: false, filterable: false, resizable: true, width: '100px', minWidth: '90px', maxWidth: '120px', align: 'center', type: 'custom' }
  ];

  tableConfig: TableConfig = {
    selectable: false,
    multiSelect: false,
    sortable: true,
    filterable: true,
    resizable: true,
    pagination: true,
    pageSize: 5,
    pageSizeOptions: [5, 10, 25, 50],
    exportable: false,
    searchable: true,
    virtualScrolling: false,
    stickyHeader: true,
    stickyColumns: 0
  };

  tableActions: TableAction[] = [
    { label: 'Edit', icon: 'fa-edit', action: 'edit', color: '#4a9eff' },
    { label: 'Delete', icon: 'fa-trash', action: 'delete', color: '#ef4444' }
  ];

  constructor(
    private priorityService: PriorityMasterService,
    private toaster: ToasterService,
    private confirmation: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.loadPriorities();
  }

  loadPriorities(): void {
    this.priorityService.getAllPriorities().subscribe({
      next: (data) => {
        const sorted = [...data].sort((a, b) => {
          const aTime = a.last_modified_on ? new Date(a.last_modified_on).getTime() : 0;
          const bTime = b.last_modified_on ? new Date(b.last_modified_on).getTime() : 0;
          return bTime - aTime;
        });
        this.priorities = sorted;
        this.filteredPriorities = sorted;
      },
      error: (error) => {
        this.toaster.error(`Failed to load priorities: ${error.message || 'Unknown error'}`);
      }
    });
  }

  onSearchChange(): void {
    // Pass search query to data-table component
    // The data-table will handle the filtering internally
  }

  getTableData(): TableData[] {
    return this.filteredPriorities.map(p => {
      const { id, ...rest } = p;
      return { id: id.toString(), ...rest } as TableData;
    });
  }

  openAddModal(): void {
    this.isEditMode = false;
    this.formPriority = { id: 0, priority: '', color: '#DC2626', is_active: true, is_default: false } as Priority;
    this.selectedPriority = null;
    this.priorityError = '';
    this.colorError = '';
    this.showAddEditModal = true;
  }

  openEditModal(row: PriorityViewModel | TableData): void {
    const p = row as PriorityViewModel;
    this.isEditMode = true;
    this.selectedPriority = p;
    this.formPriority = { id: p.id, priority: p.priority, color: p.color, is_active: p.is_active ?? true, is_default: p.is_default ?? false } as Priority;
    this.priorityError = '';
    this.colorError = '';
    this.showAddEditModal = true;
  }

  closeModal(): void {
    this.showAddEditModal = false;
    this.isEditMode = false;
    this.selectedPriority = null;
    this.formPriority = { id: 0, priority: '', color: '#DC2626', is_active: true, is_default: false } as Priority;
    this.priorityError = '';
    this.colorError = '';
  }

  validateColor(): void {
    if (!this.formPriority.color?.trim()) {
      this.colorError = 'Color is required';
    } else {
      this.colorError = '';
    }
  }

  onColorInput(): void {
    if (this.colorError) {
      this.colorError = '';
    }
  }

  validatePriorityUniqueness(): void {
    this.priorityError = '';
    const priorityValue = this.formPriority.priority?.trim();
    
    if (!priorityValue) {
      return;
    }

    // Convert IDs to numbers for proper comparison
    const currentId = Number(this.formPriority.id);
    
    const existingPriority = this.priorities.find(
      p => {
        const priorityId = Number(p.id);
        return p.priority?.toLowerCase() === priorityValue.toLowerCase() &&
               priorityId !== currentId &&
               !p.is_deleted;
      }
    );

    if (existingPriority) {
      this.priorityError = 'Priority name already exists';
    }
  }

  onPriorityBlur(): void {
    this.validatePriorityUniqueness();
  }

  onPriorityInput(): void {
    if (this.priorityError) {
      this.validatePriorityUniqueness();
    }
  }

  savePriority(): void {
    // Validate all fields
    if (!this.formPriority.priority?.trim()) {
      this.priorityError = 'Priority name is required';
    } else {
      this.validatePriorityUniqueness();
    }

    if (!this.formPriority.color?.trim()) {
      this.colorError = 'Color is required';
    } else {
      this.colorError = '';
    }
    
    if (this.priorityError || this.colorError) {
      return;
    }

    // If setting this priority as default, unset all other defaults
    // This will be handled by the backend, but we ensure the logic is clear
    if (this.formPriority.is_default) {
      // Find all other priorities that are currently default
      const otherDefaultPriorities = this.priorities.filter(
        p => p.id !== this.formPriority.id && p.is_default === true && !p.is_deleted
      );
      
      // Unset defaults for other priorities (this will be handled by backend)
      // The backend should handle this, but we ensure the logic is clear
    }

    this.priorityService.addUpdatePriority(this.formPriority).subscribe({
      next: (data) => {
        this.toaster.success(`Priority "${data.priority}" has been ${this.isEditMode ? 'updated' : 'created'} successfully`);
        this.closeModal();
        this.loadPriorities();
      },
      error: (error) => {
        const errorMessage = error.error?.message || error.message || 'Unknown error occurred';
        
        // Show validation errors below the field, not in toaster
        if (errorMessage.toLowerCase().includes('priority name already exists')) {
          this.priorityError = 'Priority name already exists';
          return;
        }
        
        // For other errors, show in toaster
        this.toaster.error(`Operation Failed: ${errorMessage}`);
      }
    });
  }

  onDefaultChange(): void {
    // If user is setting this as default, ensure no other priority is default
    // This will be handled by the backend, but we can show a warning if needed
    if (this.formPriority.is_default) {
      const currentDefault = this.priorities.find(p => p.id !== this.formPriority.id && p.is_default === true && !p.is_deleted);
      if (currentDefault) {
        // The backend should automatically unset the previous default
        // We just need to ensure the form reflects this
      }
    }
  }

  deletePriority(p: PriorityViewModel): void {
    this.confirmation.confirm({
      title: 'Delete Priority',
      message: `Are you sure you want to delete "${p.priority}"?`,
      confirmText: 'Delete',
      cancelText: 'Cancel',
      confirmClass: 'danger'
    }).then((confirmed) => {
      if (confirmed) {
        this.priorityService.deletePriority(p.id, false).subscribe({
          next: () => {
            this.toaster.success(`Priority "${p.priority}" has been deleted successfully`);
            this.loadPriorities();
          },
          error: (error) => {
            this.toaster.error(`Delete Failed: ${error.error?.message || error.message || 'Unknown error occurred'}`);
          }
        });
      }
    });
  }

  toggleActive(row: PriorityViewModel | TableData): void {
    if (this.isToggleInProgress) return;
    
    const p = row as PriorityViewModel;
    this.isToggleInProgress = true;
    const updated: Priority = { 
      id: p.id, 
      priority: p.priority, 
      color: p.color, 
      is_active: !p.is_active, 
      is_default: p.is_default ?? false 
    } as Priority;
    this.priorityService.addUpdatePriority(updated).subscribe({
      next: () => {
        this.toaster.success(`Priority "${p.priority}" has been ${updated.is_active ? 'activated' : 'deactivated'}`);
        this.loadPriorities();
        this.isToggleInProgress = false;
      },
      error: (error) => {
        this.toaster.error(`Update Failed: ${error.error?.message || error.message || 'Unknown error occurred'}`);
        this.isToggleInProgress = false;
      }
    });
  }

  onTableActionClick(event: { action: string, row: TableData }): void {
    const p = event.row as unknown as PriorityViewModel;
    switch (event.action) {
      case 'edit':
        this.openEditModal(p);
        break;
      case 'delete':
        this.deletePriority(p);
        break;
    }
  }

  onBooleanToggle(event: { column: string, row: TableData, value: boolean }): void {
    const p = event.row as unknown as PriorityViewModel;
    const column = event.column;
    const newValue = event.value;

    if (column === 'is_active') {
      this.toggleActive(p);
    } else if (column === 'is_default') {
      this.toggleDefault(p, newValue);
    }
  }

  toggleDefault(p: PriorityViewModel, newValue: boolean): void {
    if (this.isToggleInProgress) return;
    
    this.isToggleInProgress = true;
    const updated: Priority = { 
      id: p.id, 
      priority: p.priority, 
      color: p.color, 
      is_active: p.is_active ?? true,
      is_default: newValue
    } as Priority;
    
    this.priorityService.addUpdatePriority(updated).subscribe({
      next: () => {
        this.toaster.success(`Priority "${p.priority}" has been ${newValue ? 'set as default' : 'unset as default'}`);
        this.loadPriorities();
        this.isToggleInProgress = false;
      },
      error: (error) => {
        this.toaster.error(`Update Failed: ${error.error?.message || error.message || 'Unknown error occurred'}`);
        this.isToggleInProgress = false;
      }
    });
  }
}


