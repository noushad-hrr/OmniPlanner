import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StatusMasterService, Status, StatusViewModel } from '../../services/status-master.service';
import { ToasterService } from '../../services/toaster.service';
import { ConfirmationService } from '../../services/confirmation.service';
import { DataTableComponent, TableColumn, TableConfig, TableAction, TableData } from '../data-table/data-table';

@Component({
  selector: 'app-status-master',
  standalone: true,
  imports: [CommonModule, FormsModule, DataTableComponent],
  templateUrl: './status-master.html',
  styleUrls: ['./status-master.scss']
})
export class StatusMasterComponent implements OnInit {
  statuses: StatusViewModel[] = [];
  filteredStatuses: StatusViewModel[] = [];
  searchQuery: string = '';
  showAddEditModal: boolean = false;
  isEditMode: boolean = false;
  selectedStatus: Status | null = null;
  private isToggleInProgress: boolean = false;

  formStatus: Status = {
    id: 0,
    status: '',
    color: '#2563EB',
    is_active: true,
    is_default: false,
    is_completion_status: false
  };

  statusError: string = '';
  colorError: string = '';

  // Table Configuration
  tableColumns: TableColumn[] = [
    { key: 'id', title: 'ID', sortable: true, filterable: true, resizable: true, width: '70px', minWidth: '60px', maxWidth: '90px', align: 'center', type: 'number', hidden: false },
    { key: 'status', title: 'Status', sortable: true, filterable: true, resizable: true, width: '250px', minWidth: '200px', maxWidth: '400px', align: 'left', type: 'text' },
    { key: 'color', title: 'Color', sortable: false, filterable: false, resizable: true, width: '90px', minWidth: '80px', maxWidth: '100px', align: 'center', type: 'custom' },
    { key: 'is_default', title: 'Default - Opener', sortable: true, filterable: true, resizable: true, width: '150px', minWidth: '120px', maxWidth: '180px', align: 'center', type: 'boolean', toggleable: true },
    { key: 'is_completion_status', title: 'Default - Closure', sortable: true, filterable: true, resizable: true, width: '150px', minWidth: '120px', maxWidth: '180px', align: 'center', type: 'boolean', toggleable: true },
    { key: 'is_active', title: 'Active - Status', sortable: true, filterable: true, resizable: true, width: '150px', minWidth: '120px', maxWidth: '180px', align: 'center', type: 'boolean', toggleable: true },
    { key: 'created_by_name', title: 'Created By', sortable: true, filterable: true, resizable: true, width: '150px', minWidth: '120px', maxWidth: '200px', align: 'left', type: 'text' },
    { key: 'created_on', title: 'Created On', sortable: true, filterable: true, resizable: true, width: '100px', minWidth: '90px', maxWidth: '180px', align: 'center', type: 'date' },
    { key: 'last_modified_by_name', title: 'Last Modified By', sortable: true, filterable: true, resizable: true, width: '150px', minWidth: '120px', maxWidth: '200px', align: 'left', type: 'text' },
    { key: 'last_modified_on', title: 'Last Modified On', sortable: true, filterable: true, resizable: true, width: '100px', minWidth: '90px', maxWidth: '180px', align: 'center', type: 'date' },
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
    private statusService: StatusMasterService,
    private toaster: ToasterService,
    private confirmation: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.loadStatuses();
  }

  loadStatuses(): void {
    this.statusService.getAllStatuses().subscribe({
      next: (data) => {
        this.statuses = data;
        this.filteredStatuses = data;
      },
      error: (error) => {
        this.toaster.error(`Failed to load statuses: ${error.message || 'Unknown error'}`);
      }
    });
  }

  onSearchChange(): void {
    // Pass search query to data-table component
    // The data-table will handle the filtering internally
  }

  getTableData(): TableData[] {
    return this.filteredStatuses.map(s => {
      const { id, ...rest } = s;
      return { id: id.toString(), ...rest } as TableData;
    });
  }

  openAddModal(): void {
    this.isEditMode = false;
    this.formStatus = { id: 0, status: '', color: '#2563EB', is_active: true, is_default: false, is_completion_status: false } as Status;
    this.selectedStatus = null;
    this.statusError = '';
    this.colorError = '';
    this.showAddEditModal = true;
  }

  openEditModal(row: StatusViewModel | TableData): void {
    const s = row as StatusViewModel;
    this.isEditMode = true;
    this.selectedStatus = s;
    this.formStatus = { id: s.id, status: s.status, color: s.color, is_active: s.is_active ?? true, is_default: s.is_default ?? false, is_completion_status: s.is_completion_status ?? false } as Status;
    this.statusError = '';
    this.colorError = '';
    this.showAddEditModal = true;
  }

  closeModal(): void {
    this.showAddEditModal = false;
    this.isEditMode = false;
    this.selectedStatus = null;
    this.formStatus = { id: 0, status: '', color: '#2563EB', is_active: true, is_default: false, is_completion_status: false } as Status;
    this.statusError = '';
    this.colorError = '';
  }

  validateColor(): void {
    if (!this.formStatus.color?.trim()) {
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

  validateStatusUniqueness(): void {
    this.statusError = '';
    const statusValue = this.formStatus.status?.trim();
    
    if (!statusValue) {
      return;
    }

    // Convert IDs to numbers for proper comparison
    const currentId = Number(this.formStatus.id);
    
    const existingStatus = this.statuses.find(
      s => {
        const statusId = Number(s.id);
        return s.status?.toLowerCase() === statusValue.toLowerCase() &&
               statusId !== currentId &&
               !s.is_deleted;
      }
    );

    if (existingStatus) {
      this.statusError = 'Status name already exists';
    }
  }

  onStatusBlur(): void {
    this.validateStatusUniqueness();
  }

  onStatusInput(): void {
    if (this.statusError) {
      this.validateStatusUniqueness();
    }
  }

  saveStatus(): void {
    // Validate all fields
    if (!this.formStatus.status?.trim()) {
      this.statusError = 'Status name is required';
    } else {
      this.validateStatusUniqueness();
    }

    if (!this.formStatus.color?.trim()) {
      this.colorError = 'Color is required';
    } else {
      this.colorError = '';
    }
    
    if (this.statusError || this.colorError) {
      return;
    }

    // If setting this status as default, unset all other defaults
    if (this.formStatus.is_default) {
      // Find all other statuses that are currently default
      const otherDefaultStatuses = this.statuses.filter(
        s => s.id !== this.formStatus.id && s.is_default === true && !s.is_deleted
      );
      
      // Unset defaults for other statuses (this will be handled by backend, but we can also do it here)
      // The backend should handle this, but we ensure the logic is clear
    }

    // If setting this status as completion status, unset all other completion statuses
    if (this.formStatus.is_completion_status) {
      // Find all other statuses that are currently completion status
      const otherCompletionStatuses = this.statuses.filter(
        s => s.id !== this.formStatus.id && s.is_completion_status === true && !s.is_deleted
      );
      
      // Unset completion statuses for other statuses (this will be handled by backend)
      // The backend should handle this, but we ensure the logic is clear
    }

    this.statusService.addUpdateStatus(this.formStatus).subscribe({
      next: (data) => {
        this.toaster.success(`Status "${data.status}" has been ${this.isEditMode ? 'updated' : 'created'} successfully`);
        this.closeModal();
        this.loadStatuses();
      },
      error: (error) => {
        const errorMessage = error.error?.message || error.message || 'Unknown error occurred';
        
        // Show validation errors below the field, not in toaster
        if (errorMessage.toLowerCase().includes('status name already exists')) {
          this.statusError = 'Status name already exists';
          return;
        }
        
        // For other errors, show in toaster
        this.toaster.error(`Operation Failed: ${errorMessage}`);
      }
    });
  }

  onDefaultChange(): void {
    // If user is setting this as default, ensure no other status is default
    // This will be handled by the backend, but we can show a warning if needed
    if (this.formStatus.is_default) {
      const currentDefault = this.statuses.find(s => s.id !== this.formStatus.id && s.is_default === true && !s.is_deleted);
      if (currentDefault) {
        // The backend should automatically unset the previous default
        // We just need to ensure the form reflects this
      }
    }
  }

  onCompletionStatusChange(): void {
    // If user is setting this as completion status, ensure no other status is completion status
    // This will be handled by the backend, but we can show a warning if needed
    if (this.formStatus.is_completion_status) {
      const currentCompletionStatus = this.statuses.find(s => s.id !== this.formStatus.id && s.is_completion_status === true && !s.is_deleted);
      if (currentCompletionStatus) {
        // The backend should automatically unset the previous completion status
        // We just need to ensure the form reflects this
      }
    }
  }

  deleteStatus(s: StatusViewModel): void {
    this.confirmation.confirm({
      title: 'Delete Status',
      message: `Are you sure you want to delete "${s.status}"?`,
      confirmText: 'Delete',
      cancelText: 'Cancel',
      confirmClass: 'danger'
    }).then((confirmed) => {
      if (confirmed) {
        this.statusService.deleteStatus(s.id, false).subscribe({
          next: () => {
            this.toaster.success(`Status "${s.status}" has been deleted successfully`);
            this.loadStatuses();
          },
          error: (error) => {
            this.toaster.error(`Delete Failed: ${error.error?.message || error.message || 'Unknown error occurred'}`);
          }
        });
      }
    });
  }

  toggleActive(row: StatusViewModel | TableData): void {
    if (this.isToggleInProgress) return;
    
    const s = row as StatusViewModel;
    this.isToggleInProgress = true;
    const updated: Status = { 
      id: s.id, 
      status: s.status, 
      color: s.color, 
      is_active: !s.is_active,
      is_default: s.is_default ?? false,
      is_completion_status: s.is_completion_status ?? false
    } as Status;
    this.statusService.addUpdateStatus(updated).subscribe({
      next: () => {
        this.toaster.success(`Status "${s.status}" has been ${updated.is_active ? 'activated' : 'deactivated'}`);
        this.loadStatuses();
        this.isToggleInProgress = false;
      },
      error: (error) => {
        this.toaster.error(`Update Failed: ${error.error?.message || error.message || 'Unknown error occurred'}`);
        this.isToggleInProgress = false;
      }
    });
  }

  onTableActionClick(event: { action: string, row: TableData }): void {
    const s = event.row as unknown as StatusViewModel;
    switch (event.action) {
      case 'edit':
        this.openEditModal(s);
        break;
      case 'delete':
        this.deleteStatus(s);
        break;
    }
  }

  onBooleanToggle(event: { column: string, row: TableData, value: boolean }): void {
    const s = event.row as unknown as StatusViewModel;
    const column = event.column;
    const newValue = event.value;

    if (column === 'is_active') {
      this.toggleActive(s);
    } else if (column === 'is_default') {
      this.toggleDefault(s, newValue);
    } else if (column === 'is_completion_status') {
      this.toggleCompletionStatus(s, newValue);
    }
  }

  toggleDefault(s: StatusViewModel, newValue: boolean): void {
    if (this.isToggleInProgress) return;
    
    this.isToggleInProgress = true;
    const updated: Status = { 
      id: s.id, 
      status: s.status, 
      color: s.color, 
      is_active: s.is_active ?? true,
      is_default: newValue,
      is_completion_status: s.is_completion_status ?? false
    } as Status;
    
    this.statusService.addUpdateStatus(updated).subscribe({
      next: () => {
        this.toaster.success(`Status "${s.status}" has been ${newValue ? 'set as default' : 'unset as default'}`);
        this.loadStatuses();
        this.isToggleInProgress = false;
      },
      error: (error) => {
        this.toaster.error(`Update Failed: ${error.error?.message || error.message || 'Unknown error occurred'}`);
        this.isToggleInProgress = false;
      }
    });
  }

  toggleCompletionStatus(s: StatusViewModel, newValue: boolean): void {
    if (this.isToggleInProgress) return;
    
    this.isToggleInProgress = true;
    const updated: Status = { 
      id: s.id, 
      status: s.status, 
      color: s.color, 
      is_active: s.is_active ?? true,
      is_default: s.is_default ?? false,
      is_completion_status: newValue
    } as Status;
    
    this.statusService.addUpdateStatus(updated).subscribe({
      next: () => {
        this.toaster.success(`Status "${s.status}" has been ${newValue ? 'set as completion status' : 'unset as completion status'}`);
        this.loadStatuses();
        this.isToggleInProgress = false;
      },
      error: (error) => {
        this.toaster.error(`Update Failed: ${error.error?.message || error.message || 'Unknown error occurred'}`);
        this.isToggleInProgress = false;
      }
    });
  }
}


