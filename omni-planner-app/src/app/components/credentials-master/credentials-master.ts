import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CredentialsMasterService, Credential, CredentialViewModel } from '../../services/credentials-master.service';
import { ToasterService } from '../../services/toaster.service';
import { ConfirmationService } from '../../services/confirmation.service';
import { DataTableComponent, TableColumn, TableConfig, TableAction, TableData } from '../data-table/data-table';

@Component({
  selector: 'app-credentials-master',
  standalone: true,
  imports: [CommonModule, FormsModule, DataTableComponent],
  templateUrl: './credentials-master.html',
  styleUrls: ['./credentials-master.scss']
})
export class CredentialsMasterComponent implements OnInit {
  credentials: CredentialViewModel[] = [];
  filteredCredentials: CredentialViewModel[] = [];
  searchQuery: string = '';
  showAddEditModal: boolean = false;
  isEditMode: boolean = false;
  selectedCredential: Credential | null = null;
  private isToggleInProgress: boolean = false;
  
  formCredential: Credential = {
    id: 0,
    provider: '',
    credential_name: '',
    credential_id: '',
    credential_password: '',
    additional_fields: '{}',
    notes: '',
    is_active: true
  };

  providerError: string = '';
  credentialNameError: string = '';
  credentialIdError: string = '';
  passwordError: string = '';
  additionalFieldsError: string = '';
  additionalFieldsJson: any = {};
  showPassword: boolean = false;
  additionalFieldErrors: { [key: string]: string } = {};
  tempKeyValues: { [key: string]: string } = {}; // Store temporary key values during editing

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
      key: 'provider',
      title: 'Provider',
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
      key: 'credential_name',
      title: 'Credential Name',
      sortable: true,
      filterable: true,
      resizable: true,
      width: '250px',
      minWidth: '200px',
      maxWidth: '400px',
      align: 'left',
      type: 'text'
    },
    {
      key: 'credential_id',
      title: 'Credential ID',
      sortable: true,
      filterable: true,
      resizable: true,
      width: '250px',
      minWidth: '200px',
      maxWidth: '400px',
      align: 'left',
      type: 'text'
    },
    {
      key: 'credential_password',
      title: 'Password',
      sortable: false,
      filterable: false,
      resizable: true,
      width: '200px',
      minWidth: '150px',
      maxWidth: '300px',
      align: 'left',
      type: 'password',
      hidden: false
    },
    {
      key: 'additional_fields',
      title: 'Additional Fields',
      sortable: false,
      filterable: false,
      resizable: true,
      width: '200px',
      minWidth: '150px',
      maxWidth: '400px',
      align: 'left',
      type: 'json',
      hidden: false
    },
    {
      key: 'notes',
      title: 'Notes',
      sortable: false,
      filterable: true,
      resizable: true,
      width: '250px',
      minWidth: '200px',
      maxWidth: '500px',
      align: 'left',
      type: 'text',
      hidden: false
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
      type: 'boolean',
      toggleable: true
    },
    {
      key: 'created_by_name',
      title: 'Created By',
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
      key: 'created_on',
      title: 'Created On',
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
      key: 'last_modified_by_name',
      title: 'Last Modified By',
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
      key: 'last_modified_on',
      title: 'Last Modified On',
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
      width: '100px',
      minWidth: '90px',
      maxWidth: '120px',
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
    private credentialsService: CredentialsMasterService,
    private toaster: ToasterService,
    private confirmation: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.loadCredentials();
  }

  loadCredentials(): void {
    this.credentialsService.getAllCredentials().subscribe({
      next: (data) => {
        this.credentials = data;
        this.filteredCredentials = data;
      },
      error: (error) => {
        this.toaster.error(`Failed to load credentials: ${error.message || 'Unknown error'}`);
      }
    });
  }

  onSearchChange(): void {
    // Pass search query to data-table component
  }

  getTableData(): TableData[] {
    return this.filteredCredentials.map(cred => {
      const { id, ...rest } = cred;
      return {
        id: id.toString(),
        ...rest
      } as TableData;
    });
  }

  openAddModal(): void {
    this.isEditMode = false;
    this.formCredential = {
      id: 0,
      provider: '',
      credential_name: '',
      credential_id: '',
      credential_password: '',
      additional_fields: '{}',
      notes: '',
      is_active: true
    };
    this.additionalFieldsJson = {};
    this.selectedCredential = null;
    this.clearErrors();
    this.showAddEditModal = true;
  }

  openEditModal(credential: CredentialViewModel | TableData): void {
    const cred = credential as CredentialViewModel;
    this.isEditMode = true;
    this.selectedCredential = cred;
    this.formCredential = {
      id: cred.id,
      provider: cred.provider,
      credential_name: cred.credential_name,
      credential_id: cred.credential_id,
      credential_password: cred.credential_password || '',
      additional_fields: cred.additional_fields || '{}',
      notes: cred.notes || '',
      is_active: cred.is_active ?? true
    };
    
    // Parse additional_fields JSON
    try {
      this.additionalFieldsJson = cred.additional_fields ? JSON.parse(cred.additional_fields) : {};
    } catch {
      this.additionalFieldsJson = {};
    }
    
    this.clearErrors();
    this.showAddEditModal = true;
  }

  closeModal(): void {
    this.showAddEditModal = false;
    this.isEditMode = false;
    this.selectedCredential = null;
    this.formCredential = {
      id: 0,
      provider: '',
      credential_name: '',
      credential_id: '',
      credential_password: '',
      additional_fields: '{}',
      notes: '',
      is_active: true
    };
    this.additionalFieldsJson = {};
    this.showPassword = false;
    this.additionalFieldErrors = {};
    this.tempKeyValues = {};
    this.clearErrors();
  }

  clearErrors(): void {
    this.providerError = '';
    this.credentialNameError = '';
    this.credentialIdError = '';
    this.passwordError = '';
    this.additionalFieldsError = '';
  }

  addAdditionalField(): void {
    if (!this.additionalFieldsJson) {
      this.additionalFieldsJson = {};
    }
    // Add empty key-value pair
    const newKey = `field_${Object.keys(this.additionalFieldsJson).length + 1}`;
    this.additionalFieldsJson[newKey] = '';
  }

  removeAdditionalField(key: string): void {
    if (this.additionalFieldsJson) {
      delete this.additionalFieldsJson[key];
    }
  }

  updateAdditionalFieldKey(oldKey: string, newKey: string, index: number): void {
    if (!this.additionalFieldsJson) {
      return;
    }
    
    // Store the temporary key value (don't update the actual object yet)
    this.tempKeyValues[oldKey] = newKey;
  }

  onAdditionalFieldKeyBlur(key: string): void {
    // Get the temporary key value
    const newKey = this.tempKeyValues[key];
    
    // If there's a temporary value and it's different from the current key, update it
    if (newKey !== undefined && newKey !== key) {
      const trimmedNewKey = newKey.trim();
      
      // If the new key is empty, keep the old key
      if (trimmedNewKey === '') {
        delete this.tempKeyValues[key];
        return;
      }
      
      // Check if the new key already exists (and it's not the same as old key)
      if (this.additionalFieldsJson[trimmedNewKey] !== undefined && trimmedNewKey !== key) {
        // Key already exists, don't update
        delete this.tempKeyValues[key];
        return;
      }
      
      // Store the value from the old key
      const value = this.additionalFieldsJson[key];
      
      // Remove the old key and add the new key with the same value
      delete this.additionalFieldsJson[key];
      this.additionalFieldsJson[trimmedNewKey] = value;
      
      // Clear any error for the old key
      if (this.additionalFieldErrors[key]) {
        delete this.additionalFieldErrors[key];
      }
      
      // Clear the temporary value
      delete this.tempKeyValues[key];
      
      // Validate the value for the new key
      this.validateAdditionalFieldValue(trimmedNewKey);
    }
    
    // Validate the value when key loses focus
    this.validateAdditionalFieldValue(key);
    this.validateAdditionalFields();
  }

  onAdditionalFieldValueInput(key: string): void {
    // Clear error when user starts typing
    if (this.additionalFieldErrors[key]) {
      this.additionalFieldErrors[key] = '';
    }
  }

  validateAdditionalFieldValue(key: string): void {
    // If key exists and is not empty, value is mandatory
    if (key && key.trim() !== '') {
      const value = this.additionalFieldsJson[key];
      if (!value || value.trim() === '') {
        this.additionalFieldErrors[key] = 'Value is required when key is provided';
      } else {
        // Clear error if value is provided
        delete this.additionalFieldErrors[key];
      }
    } else {
      // Clear error if key is empty
      delete this.additionalFieldErrors[key];
    }
  }

  getAdditionalFieldsKeys(): string[] {
    return this.additionalFieldsJson ? Object.keys(this.additionalFieldsJson) : [];
  }

  validateAdditionalFields(): void {
    this.additionalFieldsError = '';
    
    // Validate all key-value pairs
    const keys = this.getAdditionalFieldsKeys();
    let hasErrors = false;
    
    for (const key of keys) {
      this.validateAdditionalFieldValue(key);
      if (this.additionalFieldErrors[key]) {
        hasErrors = true;
      }
    }
    
    if (hasErrors) {
      this.additionalFieldsError = 'Please provide values for all fields with keys';
      return;
    }
    
    try {
      const jsonString = JSON.stringify(this.additionalFieldsJson);
      JSON.parse(jsonString); // Validate JSON
      this.formCredential.additional_fields = jsonString;
    } catch (error) {
      this.additionalFieldsError = 'Invalid JSON format';
    }
  }

  validateCredentialUniqueness(): void {
    this.credentialIdError = '';
    this.passwordError = '';
    
    const credentialIdValue = this.formCredential.credential_id?.trim();
    const passwordValue = this.formCredential.credential_password?.trim();
    
    if (!credentialIdValue || !passwordValue) {
      return;
    }

    const currentId = Number(this.formCredential.id);
    
    const existing = this.credentials.find(
      cred => {
        const credId = Number(cred.id);
        return cred.credential_id?.toLowerCase() === credentialIdValue.toLowerCase() &&
               cred.credential_password === passwordValue &&
               credId !== currentId &&
               !cred.is_deleted;
      }
    );

    if (existing) {
      this.credentialIdError = 'Credential with this ID and password combination already exists';
      this.passwordError = 'Credential with this ID and password combination already exists';
    }
  }

  onCredentialIdBlur(): void {
    this.validateCredentialUniqueness();
  }

  onPasswordBlur(): void {
    this.validateCredentialUniqueness();
  }

  onInput(field: string): void {
    // Clear errors when user starts typing
    if (field === 'provider') {
      this.providerError = '';
    } else if (field === 'credential_name') {
      this.credentialNameError = '';
    } else if (field === 'credential_id') {
      // Only clear if it's not a uniqueness error (which will be re-validated on blur)
      if (!this.credentialIdError?.includes('already exists')) {
        this.credentialIdError = '';
      }
    } else if (field === 'password') {
      // Only clear if it's not a uniqueness error (which will be re-validated on blur)
      if (!this.passwordError?.includes('already exists')) {
        this.passwordError = '';
      }
    } else if (field === 'additional_fields') {
      this.validateAdditionalFields();
    }
  }

  saveCredential(): void {
    // Clear all errors first
    this.clearErrors();
    
    // Validate all fields
    if (!this.formCredential.provider?.trim()) {
      this.providerError = 'Provider is required';
    } else {
      this.providerError = '';
    }

    if (!this.formCredential.credential_name?.trim()) {
      this.credentialNameError = 'Credential name is required';
    } else {
      this.credentialNameError = '';
    }

    if (!this.formCredential.credential_id?.trim()) {
      this.credentialIdError = 'Credential ID is required';
    } else {
      this.credentialIdError = '';
    }

    if (!this.formCredential.credential_password?.trim()) {
      this.passwordError = 'Password is required';
    } else {
      this.passwordError = '';
    }

    // Validate uniqueness only if both credential_id and password are provided
    if (this.formCredential.credential_id?.trim() && this.formCredential.credential_password?.trim()) {
      this.validateCredentialUniqueness();
    }

    this.validateAdditionalFields();
    
    // Check for individual field errors
    const hasFieldErrors = Object.keys(this.additionalFieldErrors).some(key => this.additionalFieldErrors[key]);
    
    if (this.providerError || this.credentialNameError || this.credentialIdError || this.passwordError || this.additionalFieldsError || hasFieldErrors) {
      return;
    }

    this.credentialsService.addUpdateCredential(this.formCredential).subscribe({
      next: (data) => {
        this.toaster.success(
          `Credential "${data.credential_name}" has been ${this.isEditMode ? 'updated' : 'created'} successfully`
        );
        this.closeModal();
        this.loadCredentials();
      },
      error: (error) => {
        const errorMessage = error.error?.message || error.message || 'Unknown error occurred';
        
        if (errorMessage.toLowerCase().includes('already exists')) {
          this.credentialIdError = 'Credential with this ID and password combination already exists';
          this.passwordError = 'Credential with this ID and password combination already exists';
          return;
        }
        
        this.toaster.error(`Operation Failed: ${errorMessage}`);
      }
    });
  }

  deleteCredential(credential: CredentialViewModel): void {
    this.confirmation.confirm({
      title: 'Delete Credential',
      message: `Are you sure you want to delete "${credential.credential_name}"?`,
      confirmText: 'Delete',
      cancelText: 'Cancel',
      confirmClass: 'danger'
    }).then((confirmed) => {
      if (confirmed) {
        this.credentialsService.deleteCredential(credential.id, false).subscribe({
          next: () => {
            this.toaster.success(`Credential "${credential.credential_name}" has been deleted successfully`);
            this.loadCredentials();
          },
          error: (error) => {
            this.toaster.error(`Delete Failed: ${error.error?.message || error.message || 'Unknown error occurred'}`);
          }
        });
      }
    });
  }

  toggleActive(credential: CredentialViewModel | TableData): void {
    if (this.isToggleInProgress) return;
    
    const cred = credential as CredentialViewModel;
    this.isToggleInProgress = true;
    const updatedCredential: Credential = {
      ...cred,
      is_active: !cred.is_active
    };

    this.credentialsService.addUpdateCredential(updatedCredential).subscribe({
      next: () => {
        this.toaster.success(
          `Credential "${cred.credential_name}" has been ${updatedCredential.is_active ? 'activated' : 'deactivated'}`
        );
        this.loadCredentials();
        this.isToggleInProgress = false;
      },
      error: (error) => {
        this.toaster.error(`Update Failed: ${error.error?.message || error.message || 'Unknown error occurred'}`);
        this.isToggleInProgress = false;
      }
    });
  }

  onTableRowClick(row: TableData): void {
    // Optional: handle row click if needed
  }

  onTableActionClick(event: {action: string, row: TableData}): void {
    const credential = event.row as unknown as CredentialViewModel;
    switch (event.action) {
      case 'edit':
        this.openEditModal(credential);
        break;
      case 'delete':
        this.deleteCredential(credential);
        break;
    }
  }

  onBooleanToggle(event: { column: string, row: TableData, value: boolean }): void {
    const cred = event.row as unknown as CredentialViewModel;
    if (event.column === 'is_active') {
      this.toggleActive(cred);
    }
  }

  onTableSortChange(event: {column: string, direction: 'asc' | 'desc'}): void {
    this.filteredCredentials.sort((a, b) => {
      const aVal = (a as any)[event.column];
      const bVal = (b as any)[event.column];
      if (event.direction === 'asc') {
        return aVal > bVal ? 1 : -1;
      } else {
        return aVal < bVal ? 1 : -1;
      }
    });
  }

  onTableFilterChange(event: {column: string, value: any}): void {
    if (!event.value) {
      this.filteredCredentials = this.credentials;
      return;
    }
    this.filteredCredentials = this.credentials.filter(cred =>
      String((cred as any)[event.column]).toLowerCase().includes(String(event.value).toLowerCase())
    );
  }

  onTablePageChange(event: {page: number, pageSize: number}): void {
    // Handle pagination if needed
  }
}

