import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UrlsMasterService, UrlDoc, UrlDocViewModel } from '../../services/urls-master.service';
import { CategoryMasterService, CategoryViewModel } from '../../services/category-master.service';
import { CredentialsMasterService, CredentialViewModel } from '../../services/credentials-master.service';
import { ToasterService } from '../../services/toaster.service';
import { ConfirmationService } from '../../services/confirmation.service';
import { DataTableComponent, TableColumn, TableConfig, TableAction, TableData } from '../data-table/data-table';

@Component({
  selector: 'app-urls-master',
  standalone: true,
  imports: [CommonModule, FormsModule, DataTableComponent],
  templateUrl: './urls-master.html',
  styleUrls: ['./urls-master.scss']
})
export class UrlsMasterComponent implements OnInit {
  docs: UrlDocViewModel[] = [];
  filteredDocs: UrlDocViewModel[] = [];
  categories: CategoryViewModel[] = [];
  credentials: CredentialViewModel[] = [];
  selectedCategoryId: number | null = null;
  searchQuery: string = '';
  showAddEditModal: boolean = false;
  isEditMode: boolean = false;
  selectedDoc: UrlDoc | null = null;
  selectedCredentialIds: number[] = [];
  isAllSelected: boolean = true; // Default to "All" selected
  private isToggleInProgress: boolean = false;

  formDoc: UrlDoc = {
    id: 0,
    label: '',
    url: '',
    category_id: null,
    is_active: true
  } as UrlDoc;

  urlError: string = '';
  labelError: string = '';
  categoryError: string = '';

  tableColumns: TableColumn[] = [
    { key: 'id', title: 'ID', sortable: true, filterable: true, resizable: true, width: '70px', minWidth: '60px', maxWidth: '90px', align: 'center', type: 'number', hidden: false },
    { key: 'category_name', title: 'Category', sortable: true, filterable: true, resizable: true, width: '150px', minWidth: '120px', maxWidth: '200px', align: 'left', type: 'text', hidden: false },
    { key: 'label', title: 'Label', sortable: true, filterable: true, resizable: true, width: '280px', minWidth: '220px', maxWidth: '420px', align: 'left', type: 'text', hidden: true },
    { key: 'links', title: 'URL', sortable: false, filterable: false, resizable: true, width: '260px', minWidth: '200px', maxWidth: '420px', align: 'left', type: 'urls' },
    { key: 'accessible_to', title: 'Accessible To', sortable: false, filterable: false, resizable: true, width: '200px', minWidth: '150px', maxWidth: '300px', align: 'left', type: 'credentials' },
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
    pageSize: 8,
    pageSizeOptions: [5, 8, 10, 25, 50],
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
    private urlsService: UrlsMasterService,
    private categoryMasterService: CategoryMasterService,
    private credentialsService: CredentialsMasterService,
    private toaster: ToasterService,
    private confirmation: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.loadCategories();
    this.loadCredentials();
    this.loadDocs();
  }

  loadCategories(): void {
    this.categoryMasterService.getAllCategories().subscribe({
      next: (data) => {
        this.categories = data || [];
      },
      error: (error) => {
        this.toaster.error(`Failed to load categories: ${error.message || 'Unknown error'}`);
      }
    });
  }

  loadCredentials(): void {
    this.credentialsService.getAllCredentials().subscribe({
      next: (data) => {
        this.credentials = data || [];
      },
      error: (error) => {
        this.toaster.error(`Failed to load credentials: ${error.message || 'Unknown error'}`);
      }
    });
  }

  loadDocs(): void {
    this.urlsService.getAllUrls().subscribe({
      next: (data) => {
        const sorted = [...data].sort((a, b) => {
          const aTime = a.last_modified_on ? new Date(a.last_modified_on).getTime() : 0;
          const bTime = b.last_modified_on ? new Date(b.last_modified_on).getTime() : 0;
          return bTime - aTime;
        });
        this.docs = sorted;
        this.applyFilters();
      },
      error: (error) => {
        this.toaster.error(`Failed to load URLs/Docs: ${error.message || 'Unknown error'}`);
      }
    });
  }

  applyFilters(): void {
    let filtered = [...this.docs];
    
    // Filter by category
    if (this.selectedCategoryId !== null) {
      filtered = filtered.filter(d => d.category_id === this.selectedCategoryId);
    }
    
    // Apply search filter
    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase().trim();
      filtered = filtered.filter(d => 
        d.label?.toLowerCase().includes(query) ||
        d.url?.toLowerCase().includes(query) ||
        d.category_name?.toLowerCase().includes(query)
      );
    }
    
    this.filteredDocs = filtered;
  }

  onCategoryFilterChange(): void {
    this.applyFilters();
  }

  onSearchChange(): void {
    this.applyFilters();
  }

  getTableData(): TableData[] {
    return this.filteredDocs.map(d => {
      const { id, label, url, category_name, category_icon, credentials, ...rest } = d;
      const links = [{ label: label || url, url: url, credentials: credentials || [] }];
      const categoryDisplay = category_icon ? `${category_icon} ${category_name || 'No Category'}` : (category_name || 'No Category');
      return { 
        id: id.toString(), 
        label, 
        url, 
        links, 
        category_name: categoryDisplay, 
        accessible_to: credentials || [],
        ...rest 
      } as TableData;
    });
  }

  openAddModal(): void {
    this.isEditMode = false;
    this.formDoc = { id: 0, label: '', url: '', category_id: null, is_active: true } as UrlDoc;
    this.selectedDoc = null;
    this.selectedCredentialIds = [];
    this.isAllSelected = true; // Default to "All" selected
    this.urlError = '';
    this.labelError = '';
    this.categoryError = '';
    this.showAddEditModal = true;
  }

  openEditModal(row: UrlDocViewModel | TableData): void {
    const d = row as UrlDocViewModel;
    this.isEditMode = true;
    this.selectedDoc = d;
    // Ensure id is a number (convert from string if needed)
    const docId = typeof d.id === 'string' ? parseInt(d.id, 10) : (d.id || 0);
    this.formDoc = { id: docId, label: d.label, url: d.url, category_id: d.category_id ?? null, is_active: d.is_active ?? true } as UrlDoc;
    // Load selected credential IDs from the URL's credentials
    this.selectedCredentialIds = d.credentials?.map(c => c.id) || [];
    this.isAllSelected = !this.selectedCredentialIds || this.selectedCredentialIds.length === 0; // "All" if no credentials selected
    this.urlError = '';
    this.labelError = '';
    this.categoryError = '';
    this.showAddEditModal = true;
  }

  closeModal(): void {
    this.showAddEditModal = false;
    this.isEditMode = false;
    this.selectedDoc = null;
    this.formDoc = { id: 0, label: '', url: '', category_id: null, is_active: true } as UrlDoc;
    this.selectedCredentialIds = [];
    this.isAllSelected = true;
    this.urlError = '';
    this.labelError = '';
    this.categoryError = '';
  }

  onAllToggle(): void {
    if (this.isAllSelected) {
      // If "All" is selected, clear all credential selections
      this.selectedCredentialIds = [];
    } else {
      // If "All" is deselected, do nothing (user can select individual credentials)
      // Actually, if user unchecks "All", we should keep current selections
    }
  }

  onCredentialToggle(credentialId: number): void {
    const index = this.selectedCredentialIds.indexOf(credentialId);
    if (index > -1) {
      // Remove from selection
      this.selectedCredentialIds.splice(index, 1);
    } else {
      // Add to selection
      this.selectedCredentialIds.push(credentialId);
    }
    // If any credential is selected, "All" should be unchecked
    this.isAllSelected = this.selectedCredentialIds.length === 0;
  }

  isCredentialSelected(credentialId: number): boolean {
    return this.selectedCredentialIds.includes(credentialId);
  }

  validateCategory(): void {
    this.categoryError = '';
    if (!this.formDoc.category_id || this.formDoc.category_id === 0) {
      this.categoryError = 'Category is required';
    }
  }

  onCategoryChange(): void {
    this.validateCategory();
    this.validateLabelUniqueness();
    this.validateUrlUniqueness();
  }

  validateUrlUniqueness(): void {
    this.urlError = '';
    const urlValue = this.formDoc.url?.trim();
    
    if (!urlValue) {
      return;
    }

    // Convert IDs to numbers for proper comparison
    const currentId = Number(this.formDoc.id);
    const currentCategoryId = this.formDoc.category_id ?? null;
    
    const existingUrl = this.docs.find(
      doc => {
        const docId = Number(doc.id);
        const docCategoryId = doc.category_id ?? null;
        return doc.url?.toLowerCase() === urlValue.toLowerCase() &&
               docCategoryId === currentCategoryId &&
               docId !== currentId &&
               !doc.is_deleted;
      }
    );

    if (existingUrl) {
      this.urlError = 'URL already exists in this category';
    }
  }

  validateLabelUniqueness(): void {
    this.labelError = '';
    const labelValue = this.formDoc.label?.trim();
    
    if (!labelValue) {
      return;
    }

    // Convert IDs to numbers for proper comparison
    const currentId = Number(this.formDoc.id);
    const currentCategoryId = this.formDoc.category_id ?? null;
    
    const existingLabel = this.docs.find(
      doc => {
        const docId = Number(doc.id);
        const docCategoryId = doc.category_id ?? null;
        return doc.label?.toLowerCase() === labelValue.toLowerCase() &&
               docCategoryId === currentCategoryId &&
               docId !== currentId &&
               !doc.is_deleted;
      }
    );

    if (existingLabel) {
      this.labelError = 'Label already exists in this category';
    }
  }

  onUrlBlur(): void {
    this.validateUrlUniqueness();
  }

  onUrlInput(): void {
    if (this.urlError) {
      this.validateUrlUniqueness();
    }
  }

  onLabelBlur(): void {
    this.validateLabelUniqueness();
  }

  onLabelInput(): void {
    if (this.labelError) {
      this.validateLabelUniqueness();
    }
  }

  saveDoc(): void {
    // Validate all fields
    if (!this.formDoc.label?.trim()) {
      this.labelError = 'Label is required';
    } else {
      this.validateLabelUniqueness();
    }

    if (!this.formDoc.url?.trim()) {
      this.urlError = 'URL is required';
    } else {
      this.validateUrlUniqueness();
    }

    this.validateCategory();
    
    if (this.urlError || this.labelError || this.categoryError) {
      return;
    }

    // If "All" is selected, send empty array (public access)
    const credentialIdsToSend = this.isAllSelected ? [] : this.selectedCredentialIds;
    this.urlsService.addUpdateUrl(this.formDoc, credentialIdsToSend).subscribe({
      next: (data) => {
        this.toaster.success(`URL/DOC "${data.label}" has been ${this.isEditMode ? 'updated' : 'created'} successfully`);
        this.closeModal();
        this.loadDocs();
      },
      error: (error) => {
        const errorMessage = error.error?.message || error.message || 'Unknown error occurred';
        
        // Show validation errors below the field, not in toaster
        if (errorMessage.toLowerCase().includes('label already exists')) {
          this.labelError = 'Label already exists in this category';
        }
        if (errorMessage.toLowerCase().includes('url already exists')) {
          this.urlError = 'URL already exists in this category';
        }
        if (errorMessage.toLowerCase().includes('category is required')) {
          this.toaster.error('Category is required');
          return;
        }
        
        // If validation errors were set, return (don't show toaster)
        if (this.labelError || this.urlError) {
          return;
        }
        
        // For other errors, show in toaster
        this.toaster.error(`Operation Failed: ${errorMessage}`);
      }
    });
  }

  deleteDoc(d: UrlDocViewModel): void {
    this.confirmation.confirm({
      title: 'Delete URL/DOC',
      message: `Are you sure you want to delete "${d.label}"?`,
      confirmText: 'Delete',
      cancelText: 'Cancel',
      confirmClass: 'danger'
    }).then((confirmed) => {
      if (confirmed) {
        this.urlsService.deleteUrl(d.id, false).subscribe({
          next: () => {
            this.toaster.success(`URL/DOC "${d.label}" has been deleted successfully`);
            this.loadDocs();
          },
          error: (error) => {
            this.toaster.error(`Delete Failed: ${error.error?.message || error.message || 'Unknown error occurred'}`);
          }
        });
      }
    });
  }

  toggleActive(row: UrlDocViewModel | TableData, newValue?: boolean): void {
    if (this.isToggleInProgress) return;
    
    const d = row as UrlDocViewModel;
    this.isToggleInProgress = true;
    // Use newValue if provided (from toggle event), otherwise toggle the current value
    const isActiveValue = newValue !== undefined ? newValue : !d.is_active;
    const updated: UrlDoc = { id: d.id, label: d.label, url: d.url, category_id: d.category_id, is_active: isActiveValue } as UrlDoc;
    const currentCredentialIds = d.credentials?.map(c => c.id) || [];
    this.urlsService.addUpdateUrl(updated, currentCredentialIds).subscribe({
      next: () => {
        this.toaster.success(`URL/DOC "${d.label}" has been ${updated.is_active ? 'activated' : 'deactivated'}`);
        this.loadDocs();
        this.isToggleInProgress = false;
      },
      error: (error) => {
        this.toaster.error(`Update Failed: ${error.error?.message || error.message || 'Unknown error occurred'}`);
        this.isToggleInProgress = false;
      }
    });
  }

  onTableActionClick(event: { action: string, row: TableData }): void {
    const d = event.row as unknown as UrlDocViewModel;
    switch (event.action) {
      case 'edit':
        this.openEditModal(d);
        break;
      case 'delete':
        this.deleteDoc(d);
        break;
    }
  }

  onBooleanToggle(event: { column: string, row: TableData, value: boolean }): void {
    const d = event.row as unknown as UrlDocViewModel;
    if (event.column === 'is_active') {
      // Convert ID to number if it's a string (from TableData)
      const rowWithNumericId = {
        ...d,
        id: typeof d.id === 'string' ? parseInt(d.id, 10) : (d.id || 0)
      } as UrlDocViewModel;
      // Pass the new value from the event
      this.toggleActive(rowWithNumericId, event.value);
    }
  }
}


