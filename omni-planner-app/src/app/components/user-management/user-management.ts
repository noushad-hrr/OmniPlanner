import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersService, UserViewModel, CreateUserRequest, UpdateUserRequest } from '../../services/users.service';
import { RolesService, RoleViewModel } from '../../services/roles.service';
import { ToasterService } from '../../services/toaster.service';
import { ConfirmationService } from '../../services/confirmation.service';
import { DataTableComponent, TableColumn, TableConfig, TableAction, TableData } from '../data-table/data-table';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule, FormsModule, DataTableComponent],
  templateUrl: './user-management.html',
  styleUrls: ['./user-management.scss']
})
export class UserManagementComponent implements OnInit {
  users: UserViewModel[] = [];
  filteredUsers: UserViewModel[] = [];
  roles: RoleViewModel[] = [];
  searchQuery: string = '';
  showAddEditModal: boolean = false;
  isEditMode: boolean = false;
  selectedUser: UserViewModel | null = null;
  showPasswordModal: boolean = false;
  passwordUserId: number = 0;
  newPassword: string = '';
  confirmPassword: string = '';
  passwordError: string = '';
  
  formUser: CreateUserRequest = {
    email: '',
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    phone: '',
    roleIds: [],
    is_active: true
  };

  emailError: string = '';
  usernameError: string = '';
  firstNameError: string = '';
  lastNameError: string = '';
  passwordFormError: string = '';
  phoneError: string = '';

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
      key: 'email',
      title: 'Email',
      sortable: true,
      filterable: true,
      resizable: true,
      width: '250px',
      minWidth: '200px',
      maxWidth: '350px',
      align: 'left',
      type: 'text'
    },
    {
      key: 'username',
      title: 'Username',
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
      key: 'first_name',
      title: 'First Name',
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
      key: 'last_name',
      title: 'Last Name',
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
      key: 'roles',
      title: 'Roles',
      sortable: false,
      filterable: false,
      resizable: true,
      width: '200px',
      minWidth: '150px',
      maxWidth: '300px',
      align: 'left',
      type: 'custom'
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
      key: 'email_verified',
      title: 'Verified',
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
      key: 'last_login',
      title: 'Last Login',
      sortable: true,
      filterable: true,
      resizable: true,
      width: '150px',
      minWidth: '120px',
      maxWidth: '180px',
      align: 'center',
      type: 'date'
    },
    {
      key: 'actions',
      title: 'Actions',
      sortable: false,
      filterable: false,
      resizable: true,
      width: '200px',
      minWidth: '150px',
      maxWidth: '250px',
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
      label: 'Change Password',
      icon: 'fa-key',
      action: 'change-password',
      color: '#8b5cf6'
    },
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
    private usersService: UsersService,
    private rolesService: RolesService,
    private toaster: ToasterService,
    private confirmation: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.loadUsers();
    this.loadRoles();
  }

  loadUsers(): void {
    this.usersService.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.filteredUsers = data;
      },
      error: (error) => {
        this.toaster.error(`Failed to load users: ${error.message || 'Unknown error'}`);
      }
    });
  }

  loadRoles(): void {
    this.rolesService.getAllRoles().subscribe({
      next: (data) => {
        this.roles = data.filter(r => r.is_active);
      },
      error: (error) => {
        this.toaster.error(`Failed to load roles: ${error.message || 'Unknown error'}`);
      }
    });
  }

  onSearchChange(): void {
    // Pass search query to data-table component
  }

  getTableData(): TableData[] {
    return this.filteredUsers.map(user => {
      return {
        id: user.id.toString(),
        email: user.email,
        username: user.username,
        first_name: user.first_name,
        last_name: user.last_name,
        roles: user.roles.map(r => r.name).join(', '),
        is_active: user.is_active,
        email_verified: user.email_verified,
        last_login: user.last_login || null,
        _roles: user.roles // Store full roles array for reference
      } as TableData;
    });
  }

  openAddModal(): void {
    this.isEditMode = false;
    this.formUser = {
      email: '',
      username: '',
      password: '',
      first_name: '',
      last_name: '',
      phone: '',
      roleIds: [],
      is_active: true
    };
    this.selectedUser = null;
    this.clearErrors();
    this.showAddEditModal = true;
  }

  openEditModal(user: UserViewModel | TableData): void {
    const usr = user as UserViewModel;
    this.isEditMode = true;
    this.selectedUser = usr;
    this.formUser = {
      email: usr.email,
      username: usr.username,
      password: '', // Don't populate password
      first_name: usr.first_name,
      last_name: usr.last_name,
      phone: usr.phone || '',
      roleIds: usr.roles.map(r => r.id),
      is_active: usr.is_active
    };
    this.clearErrors();
    this.showAddEditModal = true;
  }

  clearErrors(): void {
    this.emailError = '';
    this.usernameError = '';
    this.firstNameError = '';
    this.lastNameError = '';
    this.passwordFormError = '';
    this.phoneError = '';
  }

  validateForm(): boolean {
    this.clearErrors();
    let isValid = true;

    if (!this.formUser.email || !this.formUser.email.trim()) {
      this.emailError = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.formUser.email)) {
      this.emailError = 'Invalid email format';
      isValid = false;
    }

    if (!this.formUser.username || !this.formUser.username.trim()) {
      this.usernameError = 'Username is required';
      isValid = false;
    } else if (this.formUser.username.length < 3) {
      this.usernameError = 'Username must be at least 3 characters';
      isValid = false;
    }

    if (!this.isEditMode) {
      if (!this.formUser.password || !this.formUser.password.trim()) {
        this.passwordFormError = 'Password is required';
        isValid = false;
      } else if (this.formUser.password.length < 6) {
        this.passwordFormError = 'Password must be at least 6 characters';
        isValid = false;
      }
    }

    if (!this.formUser.first_name || !this.formUser.first_name.trim()) {
      this.firstNameError = 'First name is required';
      isValid = false;
    }

    if (!this.formUser.last_name || !this.formUser.last_name.trim()) {
      this.lastNameError = 'Last name is required';
      isValid = false;
    }

    if (this.formUser.phone && !/^[\d\s\-\+\(\)]+$/.test(this.formUser.phone)) {
      this.phoneError = 'Invalid phone format';
      isValid = false;
    }

    return isValid;
  }

  saveUser(): void {
    if (!this.validateForm()) {
      return;
    }

    if (this.isEditMode && this.selectedUser) {
      const updateRequest: UpdateUserRequest = {
        id: this.selectedUser.id,
        email: this.formUser.email,
        username: this.formUser.username,
        password: this.formUser.password || undefined,
        first_name: this.formUser.first_name,
        last_name: this.formUser.last_name,
        phone: this.formUser.phone || undefined,
        roleIds: this.formUser.roleIds,
        is_active: this.formUser.is_active
      };

      this.usersService.updateUser(updateRequest).subscribe({
        next: () => {
          this.toaster.success('User updated successfully');
          this.closeModal();
          this.loadUsers();
        },
        error: (error) => {
          this.toaster.error(error.message || 'Failed to update user');
        }
      });
    } else {
      this.usersService.createUser(this.formUser).subscribe({
        next: () => {
          this.toaster.success('User created successfully');
          this.closeModal();
          this.loadUsers();
        },
        error: (error) => {
          this.toaster.error(error.message || 'Failed to create user');
        }
      });
    }
  }

  closeModal(): void {
    this.showAddEditModal = false;
    this.isEditMode = false;
    this.selectedUser = null;
    this.clearErrors();
  }

  onTableRowClick(data: TableData): void {
    // Optional: Handle row click
  }

  onTableActionClick(event: { action: string; row: TableData }): void {
    const user = this.users.find(u => u.id.toString() === event.row.id);
    if (!user) return;

    switch (event.action) {
      case 'edit':
        this.openEditModal(user);
        break;
      case 'delete':
        this.deleteUser(user);
        break;
      case 'toggle-active':
        this.toggleUserStatus(user);
        break;
      case 'change-password':
        this.openPasswordModal(user.id);
        break;
    }
  }

  toggleUserStatus(user: UserViewModel): void {
    const action = user.is_active ? 'deactivate' : 'activate';
    this.confirmation.confirm({
      title: `${action.charAt(0).toUpperCase() + action.slice(1)} User`,
      message: `Are you sure you want to ${action} ${user.email}?`,
      confirmText: action.charAt(0).toUpperCase() + action.slice(1),
      cancelText: 'Cancel'
    }).then((confirmed) => {
      if (confirmed) {
        const updateRequest: UpdateUserRequest = {
          id: user.id,
          email: user.email,
          username: user.username,
          first_name: user.first_name,
          last_name: user.last_name,
          phone: user.phone,
          roleIds: user.roles.map(r => r.id),
          is_active: !user.is_active
        };

        this.usersService.updateUser(updateRequest).subscribe({
          next: () => {
            this.toaster.success(`User ${action}d successfully`);
            this.loadUsers();
          },
          error: (error) => {
            this.toaster.error(error.message || `Failed to ${action} user`);
          }
        });
      }
    });
  }

  deleteUser(user: UserViewModel): void {
    this.confirmation.confirm({
      title: 'Delete User',
      message: `Are you sure you want to delete ${user.email}? This action cannot be undone.`,
      confirmText: 'Delete',
      cancelText: 'Cancel',
      confirmClass: 'danger'
    }).then((confirmed) => {
      if (confirmed) {
        this.usersService.deleteUser(user.id, false).subscribe({
          next: () => {
            this.toaster.success('User deleted successfully');
            this.loadUsers();
          },
          error: (error) => {
            this.toaster.error(error.message || 'Failed to delete user');
          }
        });
      }
    });
  }

  openPasswordModal(userId: number): void {
    this.passwordUserId = userId;
    this.newPassword = '';
    this.confirmPassword = '';
    this.passwordError = '';
    this.showPasswordModal = true;
  }

  closePasswordModal(): void {
    this.showPasswordModal = false;
    this.passwordUserId = 0;
    this.newPassword = '';
    this.confirmPassword = '';
    this.passwordError = '';
  }

  validatePassword(): boolean {
    this.passwordError = '';
    
    if (!this.newPassword || this.newPassword.length < 6) {
      this.passwordError = 'Password must be at least 6 characters';
      return false;
    }

    if (this.newPassword !== this.confirmPassword) {
      this.passwordError = 'Passwords do not match';
      return false;
    }

    return true;
  }

  changePassword(): void {
    if (!this.validatePassword()) {
      return;
    }

    this.usersService.changePassword(this.passwordUserId, this.newPassword).subscribe({
      next: () => {
        this.toaster.success('Password changed successfully');
        this.closePasswordModal();
      },
      error: (error) => {
        this.passwordError = error.message || 'Failed to change password';
      }
    });
  }

  toggleRoleSelection(roleId: number): void {
    const index = this.formUser.roleIds.indexOf(roleId);
    if (index > -1) {
      this.formUser.roleIds.splice(index, 1);
    } else {
      this.formUser.roleIds.push(roleId);
    }
  }

  isRoleSelected(roleId: number): boolean {
    return this.formUser.roleIds.includes(roleId);
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

