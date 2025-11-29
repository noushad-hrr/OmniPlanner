import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RolesService, RoleViewModel, CreateRoleRequest, UpdateRoleRequest, PermissionViewModel } from '../../services/roles.service';
import { PermissionsService } from '../../services/permissions.service';
import { ToasterService } from '../../services/toaster.service';
import { ConfirmationService } from '../../services/confirmation.service';
import { DataTableComponent, TableColumn, TableConfig, TableAction, TableData } from '../data-table/data-table';

@Component({
  selector: 'app-role-management',
  standalone: true,
  imports: [CommonModule, FormsModule, DataTableComponent],
  templateUrl: './role-management.html',
  styleUrls: ['./role-management.scss']
})
export class RoleManagementComponent implements OnInit, AfterViewInit {
  roles: RoleViewModel[] = [];
  filteredRoles: RoleViewModel[] = [];
  permissions: PermissionViewModel[] = [];
  permissionsByModule: { [key: string]: PermissionViewModel[] } = {};
  modules: string[] = [];
  searchQuery: string = '';
  showAddEditModal: boolean = false;
  isEditMode: boolean = false;
  selectedRole: RoleViewModel | null = null;
  
  formRole: CreateRoleRequest = {
    name: '',
    description: '',
    permissionIds: [],
    is_active: true
  };

  nameError: string = '';

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
      key: 'name',
      title: 'Role Name',
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
    pageSize: 8,
    pageSizeOptions: [5, 8, 10, 25, 50],
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
    private rolesService: RolesService,
    private permissionsService: PermissionsService,
    private toaster: ToasterService,
    private confirmation: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.loadRoles();
    this.loadPermissions();
  }

  ngAfterViewInit(): void {
    // Set indeterminate state for checkboxes after view init
    setTimeout(() => {
      this.updateIndeterminateStates();
    }, 0);
  }

  updateIndeterminateStates(): void {
    // This will be called after permissions are loaded
    const checkboxes = document.querySelectorAll('.permission-module .checkbox-input') as NodeListOf<HTMLInputElement>;
    checkboxes.forEach((checkbox, index) => {
      const module = this.modules[index];
      if (module) {
        checkbox.indeterminate = this.isModulePartiallySelected(module);
      }
    });
  }

  loadRoles(): void {
    this.rolesService.getAllRoles().subscribe({
      next: (data) => {
        this.roles = data;
        this.filteredRoles = data;
      },
      error: (error) => {
        this.toaster.error(`Failed to load roles: ${error.message || 'Unknown error'}`);
      }
    });
  }

  loadPermissions(): void {
    this.permissionsService.getAllPermissions().subscribe({
      next: (data) => {
        this.permissions = data.filter(p => p.is_active);
        this.groupPermissionsByModule();
      },
      error: (error) => {
        this.toaster.error(`Failed to load permissions: ${error.message || 'Unknown error'}`);
      }
    });
  }

  groupPermissionsByModule(): void {
    this.permissionsByModule = {};
    this.modules = [];
    
    this.permissions.forEach(permission => {
      const module = permission.module || 'Other';
      if (!this.permissionsByModule[module]) {
        this.permissionsByModule[module] = [];
        this.modules.push(module);
      }
      this.permissionsByModule[module].push(permission);
    });
    
    this.modules.sort();
  }

  onSearchChange(): void {
    // Pass search query to data-table component
  }

  getTableData(): TableData[] {
    return this.filteredRoles.map(role => {
      return {
        id: role.id.toString(),
        name: role.name,
        description: role.description || '',
        is_active: role.is_active
      } as TableData;
    });
  }

  openAddModal(): void {
    this.isEditMode = false;
    this.formRole = {
      name: '',
      description: '',
      permissionIds: [],
      is_active: true
    };
    this.selectedRole = null;
    this.nameError = '';
    this.showAddEditModal = true;
  }

  openEditModal(role: RoleViewModel | TableData): void {
    const rl = role as RoleViewModel;
    this.isEditMode = true;
    this.selectedRole = rl;
    this.formRole = {
      name: rl.name,
      description: rl.description || '',
      permissionIds: [],
      is_active: rl.is_active
    };
    this.nameError = '';
    
    // Load role permissions
    this.rolesService.getRolePermissions(rl.id).subscribe({
      next: (permissions) => {
        this.formRole.permissionIds = permissions.map(p => p.id);
        this.showAddEditModal = true;
        // Update indeterminate states after modal opens
        setTimeout(() => this.updateIndeterminateStates(), 100);
      },
      error: (error) => {
        this.toaster.error(`Failed to load role permissions: ${error.message || 'Unknown error'}`);
      }
    });
  }

  validateForm(): boolean {
    this.nameError = '';
    
    if (!this.formRole.name || !this.formRole.name.trim()) {
      this.nameError = 'Role name is required';
      return false;
    }
    
    if (this.formRole.name.length < 2) {
      this.nameError = 'Role name must be at least 2 characters';
      return false;
    }
    
    return true;
  }

  saveRole(): void {
    if (!this.validateForm()) {
      return;
    }

    if (this.isEditMode && this.selectedRole) {
      const updateRequest: UpdateRoleRequest = {
        id: this.selectedRole.id,
        name: this.formRole.name,
        description: this.formRole.description || undefined,
        permissionIds: this.formRole.permissionIds,
        is_active: this.formRole.is_active
      };

      this.rolesService.updateRole(updateRequest).subscribe({
        next: () => {
          this.toaster.success('Role updated successfully');
          this.closeModal();
          this.loadRoles();
        },
        error: (error) => {
          this.toaster.error(error.message || 'Failed to update role');
        }
      });
    } else {
      this.rolesService.createRole(this.formRole).subscribe({
        next: () => {
          this.toaster.success('Role created successfully');
          this.closeModal();
          this.loadRoles();
        },
        error: (error) => {
          this.toaster.error(error.message || 'Failed to create role');
        }
      });
    }
  }

  closeModal(): void {
    this.showAddEditModal = false;
    this.isEditMode = false;
    this.selectedRole = null;
    this.nameError = '';
  }

  onTableRowClick(data: TableData): void {
    // Optional: Handle row click
  }

  onTableActionClick(event: { action: string; row: TableData }): void {
    const role = this.roles.find(r => r.id.toString() === event.row.id);
    if (!role) return;

    switch (event.action) {
      case 'edit':
        this.openEditModal(role);
        break;
      case 'delete':
        this.deleteRole(role);
        break;
      case 'toggle-active':
        this.toggleRoleStatus(role);
        break;
    }
  }

  toggleRoleStatus(role: RoleViewModel): void {
    const action = role.is_active ? 'deactivate' : 'activate';
    this.confirmation.confirm({
      title: `${action.charAt(0).toUpperCase() + action.slice(1)} Role`,
      message: `Are you sure you want to ${action} ${role.name}?`,
      confirmText: action.charAt(0).toUpperCase() + action.slice(1),
      cancelText: 'Cancel'
    }).then((confirmed) => {
      if (confirmed) {
        const updateRequest: UpdateRoleRequest = {
          id: role.id,
          name: role.name,
          description: role.description,
          permissionIds: [], // Will be loaded from server
          is_active: !role.is_active
        };

        // First get current permissions
        this.rolesService.getRolePermissions(role.id).subscribe({
          next: (permissions) => {
            updateRequest.permissionIds = permissions.map(p => p.id);
            this.rolesService.updateRole(updateRequest).subscribe({
              next: () => {
                this.toaster.success(`Role ${action}d successfully`);
                this.loadRoles();
              },
              error: (error) => {
                this.toaster.error(error.message || `Failed to ${action} role`);
              }
            });
          },
          error: (error) => {
            this.toaster.error(`Failed to load role permissions: ${error.message || 'Unknown error'}`);
          }
        });
      }
    });
  }

  deleteRole(role: RoleViewModel): void {
    this.confirmation.confirm({
      title: 'Delete Role',
      message: `Are you sure you want to delete ${role.name}? This action cannot be undone.`,
      confirmText: 'Delete',
      cancelText: 'Cancel',
      confirmClass: 'danger'
    }).then((confirmed) => {
      if (confirmed) {
        this.rolesService.deleteRole(role.id, false).subscribe({
          next: () => {
            this.toaster.success('Role deleted successfully');
            this.loadRoles();
          },
          error: (error) => {
            this.toaster.error(error.message || 'Failed to delete role');
          }
        });
      }
    });
  }

  togglePermissionSelection(permissionId: number): void {
    const index = this.formRole.permissionIds.indexOf(permissionId);
    if (index > -1) {
      this.formRole.permissionIds.splice(index, 1);
    } else {
      this.formRole.permissionIds.push(permissionId);
    }
    
    // Update indeterminate states after change
    setTimeout(() => this.updateIndeterminateStates(), 0);
  }

  isPermissionSelected(permissionId: number): boolean {
    return this.formRole.permissionIds.includes(permissionId);
  }

  toggleModuleSelection(module: string): void {
    const modulePermissions = this.permissionsByModule[module] || [];
    const allSelected = modulePermissions.every(p => this.isPermissionSelected(p.id));
    
    if (allSelected) {
      // Deselect all
      modulePermissions.forEach(p => {
        const index = this.formRole.permissionIds.indexOf(p.id);
        if (index > -1) {
          this.formRole.permissionIds.splice(index, 1);
        }
      });
    } else {
      // Select all
      modulePermissions.forEach(p => {
        if (!this.isPermissionSelected(p.id)) {
          this.formRole.permissionIds.push(p.id);
        }
      });
    }
    
    // Update indeterminate states after change
    setTimeout(() => this.updateIndeterminateStates(), 0);
  }

  isModuleFullySelected(module: string): boolean {
    const modulePermissions = this.permissionsByModule[module] || [];
    return modulePermissions.length > 0 && modulePermissions.every(p => this.isPermissionSelected(p.id));
  }

  isModulePartiallySelected(module: string): boolean {
    const modulePermissions = this.permissionsByModule[module] || [];
    const selectedCount = modulePermissions.filter(p => this.isPermissionSelected(p.id)).length;
    return selectedCount > 0 && selectedCount < modulePermissions.length;
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

