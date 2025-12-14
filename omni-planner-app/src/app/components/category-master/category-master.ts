import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoryMasterService, Category, CategoryViewModel } from '../../services/category-master.service';
import { ToasterService } from '../../services/toaster.service';
import { ConfirmationService } from '../../services/confirmation.service';
import { DataTableComponent, TableColumn, TableConfig, TableAction, TableData } from '../data-table/data-table';

@Component({
  selector: 'app-category-master',
  standalone: true,
  imports: [CommonModule, FormsModule, DataTableComponent],
  templateUrl: './category-master.html',
  styleUrls: ['./category-master.scss']
})
export class CategoryMasterComponent implements OnInit {
  categories: CategoryViewModel[] = [];
  filteredCategories: CategoryViewModel[] = [];
  searchQuery: string = '';
  showAddEditModal: boolean = false;
  isEditMode: boolean = false;
  selectedCategory: Category | null = null;
  private isToggleInProgress: boolean = false;
  
  formCategory: Category = {
    id: 0,
    category: '',
    icon: '',
    is_active: true
  };

  categoryError: string = '';
  iconError: string = '';

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
      key: 'icon',
      title: 'Icon',
      sortable: false,
      filterable: false,
      resizable: true,
      width: '80px',
      minWidth: '60px',
      maxWidth: '100px',
      align: 'center',
      type: 'text'
    },
    {
      key: 'category',
      title: 'Category',
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

  // Common icons for selection
  commonIcons: string[] = [
    '📋', '📚', '📖', '🚀', '🎨', '📈', '⚙️', '💻', '🔧', '📊', 
    '🎯', '💡', '🔒', '📱', '🌐', '🎪', '📝', '🏆',
    '⭐', '🔥', '💼', '🎓', '🏥', '🎵', '🎬', '🏃',
    '⚡', '⚛️', '🔄', '💾', '🗄️', '👔', '🏢', '📦',
    '🔐', '🎮', '📸', '🎭', '🧪', '🔬', '📡', '🛠️',
    '🔷', '💎', '🔵', '🔗', '🕸️', '👤', '🧑', '🏠', '🌟', '🎁', '📌', '📍', '🔑', '🎲', '🎰', '🎺',
    '🤝', '💬', '📞', '🎤', '🎉', '🎊', '😊', '🎈', '🌈', '☀️', '🌙', '🌍', '🗺️', '⏰', '📅',
    '🏋️', '🚴', '🏊', '⚽', '🏀', '🎾', '🏸', '🖼️', '📷', '🎥', '🍕', '🍔', '☕', '🍰'
  ];

  constructor(
    private categoryService: CategoryMasterService,
    private toaster: ToasterService,
    private confirmation: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getAllCategories().subscribe({
      next: (data) => {
        this.categories = data;
        this.filteredCategories = data;
      },
      error: (error) => {
        this.toaster.error(`Failed to load categories: ${error.message || 'Unknown error'}`);
      }
    });
  }

  onSearchChange(): void {
    // Pass search query to data-table component
    // The data-table will handle the filtering internally
  }

  getTableData(): TableData[] {
    return this.filteredCategories.map(cat => {
      const { id, ...rest } = cat;
      return {
        id: id.toString(),
        ...rest
      } as TableData;
    });
  }

  openAddModal(): void {
    this.isEditMode = false;
    this.formCategory = {
      id: 0,
      category: '',
      icon: '',
      is_active: true
    };
    this.selectedCategory = null;
    this.categoryError = '';
    this.iconError = '';
    this.showAddEditModal = true;
  }

  openEditModal(category: CategoryViewModel | TableData): void {
    const cat = category as CategoryViewModel;
    this.isEditMode = true;
    this.selectedCategory = cat;
    this.formCategory = {
      id: cat.id,
      category: cat.category,
      icon: cat.icon,
      is_active: cat.is_active ?? true
    };
    this.categoryError = '';
    this.iconError = '';
    this.showAddEditModal = true;
  }

  closeModal(): void {
    this.showAddEditModal = false;
    this.isEditMode = false;
    this.selectedCategory = null;
    this.formCategory = {
      id: 0,
      category: '',
      icon: '',
      is_active: true
    };
    this.categoryError = '';
    this.iconError = '';
  }

  selectIcon(icon: string): void {
    this.formCategory.icon = icon;
    this.iconError = '';
  }

  validateIcon(): void {
    if (!this.formCategory.icon?.trim()) {
      this.iconError = 'Icon is required';
    } else {
      this.iconError = '';
    }
  }

  onIconInput(): void {
    if (this.iconError) {
      this.iconError = '';
    }
  }

  validateCategoryUniqueness(): void {
    this.categoryError = '';
    const categoryValue = this.formCategory.category?.trim();
    
    if (!categoryValue) {
      return;
    }

    // Convert IDs to numbers for proper comparison
    const currentId = Number(this.formCategory.id);
    
    const existingCategory = this.categories.find(
      cat => {
        const catId = Number(cat.id);
        return cat.category?.toLowerCase() === categoryValue.toLowerCase() &&
               catId !== currentId &&
               !cat.is_deleted;
      }
    );

    if (existingCategory) {
      this.categoryError = 'Category name already exists';
    }
  }

  onCategoryBlur(): void {
    this.validateCategoryUniqueness();
  }

  onCategoryInput(): void {
    if (this.categoryError) {
      this.validateCategoryUniqueness();
    }
  }

  saveCategory(): void {
    // Validate all fields
    if (!this.formCategory.category?.trim()) {
      this.categoryError = 'Category name is required';
    } else {
      this.validateCategoryUniqueness();
    }

    if (!this.formCategory.icon?.trim()) {
      this.iconError = 'Icon is required';
    } else {
      this.iconError = '';
    }
    
    if (this.categoryError || this.iconError) {
      return;
    }

    this.categoryService.addUpdateCategory(this.formCategory).subscribe({
      next: (data) => {
        this.toaster.success(
          `Category "${data.category}" has been ${this.isEditMode ? 'updated' : 'created'} successfully`
        );
        this.closeModal();
        this.loadCategories();
      },
      error: (error) => {
        const errorMessage = error.error?.message || error.message || 'Unknown error occurred';
        
        // Show validation errors below the field, not in toaster
        if (errorMessage.toLowerCase().includes('category name already exists')) {
          this.categoryError = 'Category name already exists';
          return;
        }
        
        // For other errors, show in toaster
        this.toaster.error(`Operation Failed: ${errorMessage}`);
      }
    });
  }

  deleteCategory(category: CategoryViewModel): void {
    this.confirmation.confirm({
      title: 'Delete Category',
      message: `Are you sure you want to delete "${category.category}"?`,
      confirmText: 'Delete',
      cancelText: 'Cancel',
      confirmClass: 'danger'
    }).then((confirmed) => {
      if (confirmed) {
        this.categoryService.deleteCategory(category.id, false).subscribe({
          next: () => {
            this.toaster.success(`Category "${category.category}" has been deleted successfully`);
            this.loadCategories();
          },
          error: (error) => {
            this.toaster.error(`Delete Failed: ${error.error?.message || error.message || 'Unknown error occurred'}`);
          }
        });
      }
    });
  }

  toggleActive(category: CategoryViewModel | TableData): void {
    if (this.isToggleInProgress) return;
    
    const cat = category as CategoryViewModel;
    this.isToggleInProgress = true;
    const updatedCategory: Category = {
      id: cat.id,
      category: cat.category,
      icon: cat.icon,
      is_active: !cat.is_active
    };

    this.categoryService.addUpdateCategory(updatedCategory).subscribe({
      next: () => {
        this.toaster.success(
          `Category "${cat.category}" has been ${updatedCategory.is_active ? 'activated' : 'deactivated'}`
        );
        this.loadCategories();
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
    const category = event.row as unknown as CategoryViewModel;
    switch (event.action) {
      case 'edit':
        this.openEditModal(category);
        break;
      case 'delete':
        this.deleteCategory(category);
        break;
    }
  }

  onBooleanToggle(event: { column: string, row: TableData, value: boolean }): void {
    const cat = event.row as unknown as CategoryViewModel;
    if (event.column === 'is_active') {
      this.toggleActive(cat);
    }
  }

  onTableSortChange(event: {column: string, direction: 'asc' | 'desc'}): void {
    // Handle sorting if needed
    this.filteredCategories.sort((a, b) => {
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
    // Handle filtering if needed
    if (!event.value) {
      this.filteredCategories = this.categories;
      return;
    }
    this.filteredCategories = this.categories.filter(cat =>
      String((cat as any)[event.column]).toLowerCase().includes(String(event.value).toLowerCase())
    );
  }

  onTablePageChange(event: {page: number, pageSize: number}): void {
    // Handle pagination if needed
  }
}

