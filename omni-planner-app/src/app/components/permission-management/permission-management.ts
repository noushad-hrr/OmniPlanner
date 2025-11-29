import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PermissionsService, PermissionViewModel, CreatePermissionRequest, UpdatePermissionRequest } from '../../services/permissions.service';
import { ToasterService } from '../../services/toaster.service';
import { ConfirmationService } from '../../services/confirmation.service';
import { DataTableComponent, TableColumn, TableConfig, TableAction, TableData } from '../data-table/data-table';
import { AuthService } from '../../services/auth.service';
import { HasPermissionDirective } from '../../directives/has-permission.directive';

@Component({
  selector: 'app-permission-management',
  standalone: true,
  imports: [CommonModule, FormsModule, DataTableComponent, HasPermissionDirective],
  templateUrl: './permission-management.html',
  styleUrls: ['./permission-management.scss']
})
export class PermissionManagementComponent implements OnInit {
  permissions: PermissionViewModel[] = [];
  filteredPermissions: PermissionViewModel[] = [];
  modules: string[] = [];
  selectedModule: string = 'all';
  searchQuery: string = '';
  showAddEditModal: boolean = false;
  isEditMode: boolean = false;
  selectedPermission: PermissionViewModel | null = null;
  
  formPermission: CreatePermissionRequest = {
    name: '',
    code: '',
    description: '',
    module: '',
    is_active: true
  };

  nameError: string = '';
  codeError: string = '';

  // Table Configuration
  tableColumns: TableColumn[] = [
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
      key: 'module',
      title: 'Module',
      sortable: true,
      filterable: true,
      resizable: true,
      width: '150px',
      minWidth: '120px',
      maxWidth: '200px',
      align: 'left',
      type: 'text'
    },
    {
      key: 'name',
      title: 'Permission Name',
      sortable: true,
      filterable: true,
      resizable: true,
      width: '200px',
      minWidth: '150px',
      maxWidth: '300px',
      align: 'left',
      type: 'text'
    },
    {
      key: 'code',
      title: 'Code',
      sortable: true,
      filterable: true,
      resizable: true,
      width: '200px',
      minWidth: '150px',
      maxWidth: '300px',
      align: 'left',
      type: 'text'
    },
    {
      key: 'description',
      title: 'Description',
      sortable: true,
      filterable: true,
      resizable: true,
      width: '300px',
      minWidth: '200px',
      maxWidth: '400px',
      align: 'left',
      type: 'text'
    },
    {
      key: 'is_active',
      title: 'Status',
      sortable: true,
      filterable: true,
      resizable: true,
      width: '100px',
      minWidth: '80px',
      maxWidth: '120px',
      align: 'center',
      type: 'boolean'
    },
    {
      key: 'actions',
      title: 'Actions',
      sortable: false,
      filterable: false,
      resizable: true,
      width: '150px',
      minWidth: '120px',
      maxWidth: '180px',
      align: 'center',
      type: 'custom'
    }
  ];

  tableConfig: TableConfig = {
    selectable: false,
    multiSelect: false,
    sortable: true,
    filterable: true,
    resizable: true,
    pagination: true,
    pageSize: 10,
    pageSizeOptions: [5, 10, 25, 50],
    exportable: false,
    searchable: true,
    virtualScrolling: false,
    stickyHeader: true,
    stickyColumns: 0
  };

  tableActions: TableAction[] = [
    {
      label: 'Active/Deactivate',
      icon: '🔄',
      action: 'toggle-active',
      color: '#10b981'
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
    }
  ];

  constructor(
    private permissionsService: PermissionsService,
    private toaster: ToasterService,
    private confirmation: ConfirmationService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadPermissions();
    this.loadModules();
  }

  loadPermissions(): void {
    this.permissionsService.getAllPermissions().subscribe({
      next: (data) => {
        this.permissions = data;
        this.applyFilters();
      },
      error: (error) => {
        this.toaster.error(`Failed to load permissions: ${error.message || 'Unknown error'}`);
      }
    });
  }

  loadModules(): void {
    this.permissionsService.getUniqueModules().subscribe({
      next: (data) => {
        this.modules = data;
      },
      error: (error) => {
        this.toaster.error(`Failed to load modules: ${error.message || 'Unknown error'}`);
      }
    });
  }

  applyFilters(): void {
    let filtered = [...this.permissions];
    
    if (this.selectedModule !== 'all') {
      filtered = filtered.filter(p => p.module === this.selectedModule);
    }
    
    this.filteredPermissions = filtered;
  }

  onModuleChange(): void {
    this.applyFilters();
  }

  onSearchChange(): void {
    // Pass search query to data-table component
  }

  getTableData(): TableData[] {
    return this.filteredPermissions.map(permission => {
      return {
        id: permission.id.toString(),
        module: permission.module || 'Other',
        name: permission.name,
        code: permission.code,
        description: permission.description || '',
        is_active: permission.is_active
      } as TableData;
    });
  }

  openAddModal(): void {
    this.isEditMode = false;
    this.formPermission = {
      name: '',
      code: '',
      description: '',
      module: '',
      is_active: true
    };
    this.selectedPermission = null;
    this.nameError = '';
    this.codeError = '';
    this.showAddEditModal = true;
  }

  openEditModal(permission: PermissionViewModel | TableData): void {
    const perm = permission as PermissionViewModel;
    this.isEditMode = true;
    this.selectedPermission = perm;
    this.formPermission = {
      name: perm.name,
      code: perm.code,
      description: perm.description || '',
      module: perm.module || '',
      is_active: perm.is_active
    };
    this.nameError = '';
    this.codeError = '';
    this.showAddEditModal = true;
  }

  validateForm(): boolean {
    this.nameError = '';
    this.codeError = '';
    
    if (!this.formPermission.name || !this.formPermission.name.trim()) {
      this.nameError = 'Permission name is required';
      return false;
    }
    
    if (!this.formPermission.code || !this.formPermission.code.trim()) {
      this.codeError = 'Permission code is required';
      return false;
    }
    
    // Validate code format (module.action)
    if (!/^[a-z]+\.[a-z]+$/.test(this.formPermission.code)) {
      this.codeError = 'Code must be in format: module.action (e.g., users.view)';
      return false;
    }
    
    return true;
  }

  savePermission(): void {
    if (!this.validateForm()) {
      return;
    }

    if (this.isEditMode && this.selectedPermission) {
      const updateRequest: UpdatePermissionRequest = {
        id: this.selectedPermission.id,
        name: this.formPermission.name,
        code: this.formPermission.code,
        description: this.formPermission.description || undefined,
        module: this.formPermission.module || undefined,
        is_active: this.formPermission.is_active
      };

      this.permissionsService.updatePermission(updateRequest).subscribe({
        next: () => {
          this.toaster.success('Permission updated successfully');
          this.closeModal();
          this.loadPermissions();
          this.loadModules();
        },
        error: (error) => {
          this.toaster.error(error.message || 'Failed to update permission');
        }
      });
    } else {
      this.permissionsService.createPermission(this.formPermission).subscribe({
        next: () => {
          this.toaster.success('Permission created successfully');
          this.closeModal();
          this.loadPermissions();
          this.loadModules();
        },
        error: (error) => {
          this.toaster.error(error.message || 'Failed to create permission');
        }
      });
    }
  }

  closeModal(): void {
    this.showAddEditModal = false;
    this.isEditMode = false;
    this.selectedPermission = null;
    this.nameError = '';
    this.codeError = '';
  }

  onTableRowClick(data: TableData): void {
    // Optional: Handle row click
  }

  onTableActionClick(event: { action: string; row: TableData }): void {
    const permission = this.permissions.find(p => p.id.toString() === event.row.id);
    if (!permission) return;

    switch (event.action) {
      case 'edit':
        this.openEditModal(permission);
        break;
      case 'delete':
        this.deletePermission(permission);
        break;
      case 'toggle-active':
        this.togglePermissionStatus(permission);
        break;
    }
  }

  togglePermissionStatus(permission: PermissionViewModel): void {
    const action = permission.is_active ? 'deactivate' : 'activate';
    this.confirmation.confirm({
      title: `${action.charAt(0).toUpperCase() + action.slice(1)} Permission`,
      message: `Are you sure you want to ${action} ${permission.name}?`,
      confirmText: action.charAt(0).toUpperCase() + action.slice(1),
      cancelText: 'Cancel'
    }).then((confirmed) => {
      if (confirmed) {
        const updateRequest: UpdatePermissionRequest = {
          id: permission.id,
          name: permission.name,
          code: permission.code,
          description: permission.description,
          module: permission.module,
          is_active: !permission.is_active
        };

        this.permissionsService.updatePermission(updateRequest).subscribe({
          next: () => {
            this.toaster.success(`Permission ${action}d successfully`);
            this.loadPermissions();
          },
          error: (error) => {
            this.toaster.error(error.message || `Failed to ${action} permission`);
          }
        });
      }
    });
  }

  deletePermission(permission: PermissionViewModel): void {
    this.confirmation.confirm({
      title: 'Delete Permission',
      message: `Are you sure you want to delete ${permission.name} (${permission.code})? This action cannot be undone.`,
      confirmText: 'Delete',
      cancelText: 'Cancel',
      confirmClass: 'danger'
    }).then((confirmed) => {
      if (confirmed) {
        this.permissionsService.deletePermission(permission.id, false).subscribe({
          next: () => {
            this.toaster.success('Permission deleted successfully');
            this.loadPermissions();
            this.loadModules();
          },
          error: (error) => {
            this.toaster.error(error.message || 'Failed to delete permission');
          }
        });
      }
    });
  }

  onTableSortChange(event: any): void {
    // Handle sort change if needed
  }

  onTableFilterChange(event: any): void {
    // Handle filter change if needed
  }

  onTablePageChange(event: any): void {
    // Handle page change if needed
  }
}

