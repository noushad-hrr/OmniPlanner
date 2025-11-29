import {
  CategoryMasterService
} from "./chunk-LTHYET3S.js";
import {
  DataTableComponent
} from "./chunk-NTOVKSO6.js";
import {
  ToasterService
} from "./chunk-LTVL2GFZ.js";
import {
  ConfirmationService
} from "./chunk-Y44A5WDP.js";
import {
  CheckboxControlValueAccessor,
  CommonModule,
  Component,
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  __objRest,
  __spreadValues,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-OPSATDSU.js";

// src/app/components/category-master/category-master.ts
function CategoryMasterComponent_div_1_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function CategoryMasterComponent_div_1_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.searchQuery = "";
      return \u0275\u0275resetView(ctx_r1.onSearchChange());
    });
    \u0275\u0275element(1, "i", 13);
    \u0275\u0275elementEnd();
  }
}
function CategoryMasterComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "input", 7);
    \u0275\u0275twoWayListener("ngModelChange", function CategoryMasterComponent_div_1_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchQuery, $event) || (ctx_r1.searchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function CategoryMasterComponent_div_1_Template_input_ngModelChange_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearchChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CategoryMasterComponent_div_1_button_3_Template, 2, 0, "button", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 9);
    \u0275\u0275listener("click", function CategoryMasterComponent_div_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAddModal());
    });
    \u0275\u0275element(5, "i", 10);
    \u0275\u0275elementStart(6, "span", 11);
    \u0275\u0275text(7, "Add Category");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchQuery);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.searchQuery);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function CategoryMasterComponent_div_4_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.categoryError);
  }
}
function CategoryMasterComponent_div_4_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 41);
    \u0275\u0275listener("click", function CategoryMasterComponent_div_4_button_26_Template_button_click_0_listener() {
      const icon_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectIcon(icon_r6));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const icon_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r1.formCategory.icon === icon_r6);
    \u0275\u0275property("title", icon_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", icon_r6, " ");
  }
}
function CategoryMasterComponent_div_4_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.iconError);
  }
}
function CategoryMasterComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275listener("click", function CategoryMasterComponent_div_4_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 15);
    \u0275\u0275listener("click", function CategoryMasterComponent_div_4_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 16)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 17);
    \u0275\u0275listener("click", function CategoryMasterComponent_div_4_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275element(6, "i", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 18)(8, "div", 19)(9, "label", 20);
    \u0275\u0275text(10, "Category Name ");
    \u0275\u0275elementStart(11, "span", 21);
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function CategoryMasterComponent_div_4_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formCategory.category, $event) || (ctx_r1.formCategory.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("blur", function CategoryMasterComponent_div_4_Template_input_blur_13_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCategoryBlur());
    })("input", function CategoryMasterComponent_div_4_Template_input_input_13_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCategoryInput());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, CategoryMasterComponent_div_4_div_14_Template, 2, 1, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 19)(16, "label", 24);
    \u0275\u0275text(17, "Icon ");
    \u0275\u0275elementStart(18, "span", 21);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 25)(21, "div", 26)(22, "span", 27);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function CategoryMasterComponent_div_4_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formCategory.icon, $event) || (ctx_r1.formCategory.icon = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("blur", function CategoryMasterComponent_div_4_Template_input_blur_24_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.validateIcon());
    })("input", function CategoryMasterComponent_div_4_Template_input_input_24_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onIconInput());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 29);
    \u0275\u0275template(26, CategoryMasterComponent_div_4_button_26_Template, 2, 4, "button", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(27, CategoryMasterComponent_div_4_div_27_Template, 2, 1, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 31)(29, "label", 32);
    \u0275\u0275text(30, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "label", 33)(32, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function CategoryMasterComponent_div_4_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formCategory.is_active, $event) || (ctx_r1.formCategory.is_active = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 35);
    \u0275\u0275element(34, "span", 36);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(35, "div", 37)(36, "button", 38);
    \u0275\u0275listener("click", function CategoryMasterComponent_div_4_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(37, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 39);
    \u0275\u0275listener("click", function CategoryMasterComponent_div_4_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveCategory());
    });
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.isEditMode ? "Edit Category" : "Add New Category");
    \u0275\u0275advance(9);
    \u0275\u0275classProp("error", ctx_r1.categoryError);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formCategory.category);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.categoryError);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.formCategory.icon || "\u{1F680}");
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.iconError);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formCategory.icon);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.commonIcons);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.iconError);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formCategory.is_active);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditMode ? "Update" : "Create", " ");
  }
}
var CategoryMasterComponent = class _CategoryMasterComponent {
  categoryService;
  toaster;
  confirmation;
  categories = [];
  filteredCategories = [];
  searchQuery = "";
  showAddEditModal = false;
  isEditMode = false;
  selectedCategory = null;
  isToggleInProgress = false;
  formCategory = {
    id: 0,
    category: "",
    icon: "",
    is_active: true
  };
  categoryError = "";
  iconError = "";
  // Table Configuration
  tableColumns = [
    {
      key: "id",
      title: "ID",
      sortable: true,
      filterable: true,
      resizable: true,
      width: "70px",
      minWidth: "60px",
      maxWidth: "90px",
      align: "center",
      type: "number",
      hidden: false
    },
    {
      key: "icon",
      title: "Icon",
      sortable: false,
      filterable: false,
      resizable: true,
      width: "80px",
      minWidth: "60px",
      maxWidth: "100px",
      align: "center",
      type: "text"
    },
    {
      key: "category",
      title: "Category",
      sortable: true,
      filterable: true,
      resizable: true,
      width: "250px",
      minWidth: "200px",
      maxWidth: "400px",
      align: "left",
      type: "text"
    },
    {
      key: "is_active",
      title: "Status",
      sortable: true,
      filterable: true,
      resizable: true,
      width: "100px",
      minWidth: "80px",
      maxWidth: "120px",
      align: "center",
      type: "boolean",
      toggleable: true
    },
    {
      key: "created_by_name",
      title: "Created By",
      sortable: true,
      filterable: true,
      resizable: true,
      width: "150px",
      minWidth: "120px",
      maxWidth: "200px",
      align: "left",
      type: "text"
    },
    {
      key: "created_on",
      title: "Created On",
      sortable: true,
      filterable: true,
      resizable: true,
      width: "150px",
      minWidth: "120px",
      maxWidth: "180px",
      align: "center",
      type: "date"
    },
    {
      key: "last_modified_by_name",
      title: "Last Modified By",
      sortable: true,
      filterable: true,
      resizable: true,
      width: "150px",
      minWidth: "120px",
      maxWidth: "200px",
      align: "left",
      type: "text"
    },
    {
      key: "last_modified_on",
      title: "Last Modified On",
      sortable: true,
      filterable: true,
      resizable: true,
      width: "150px",
      minWidth: "120px",
      maxWidth: "180px",
      align: "center",
      type: "date"
    },
    {
      key: "actions",
      title: "Actions",
      sortable: false,
      filterable: false,
      resizable: true,
      width: "100px",
      minWidth: "90px",
      maxWidth: "120px",
      align: "center",
      type: "custom"
    }
  ];
  tableConfig = {
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
  tableActions = [
    {
      label: "Edit",
      icon: "fa-edit",
      action: "edit",
      color: "#4a9eff"
    },
    {
      label: "Delete",
      icon: "fa-trash",
      action: "delete",
      color: "#ef4444"
    }
  ];
  // Common icons for selection
  commonIcons = [
    "\u{1F4CB}",
    "\u{1F4DA}",
    "\u{1F4D6}",
    "\u{1F680}",
    "\u{1F3A8}",
    "\u{1F4C8}",
    "\u2699\uFE0F",
    "\u{1F4BB}",
    "\u{1F527}",
    "\u{1F4CA}",
    "\u{1F3AF}",
    "\u{1F4A1}",
    "\u{1F512}",
    "\u{1F4F1}",
    "\u{1F310}",
    "\u{1F3AA}",
    "\u{1F4DD}",
    "\u{1F3C6}",
    "\u2B50",
    "\u{1F525}",
    "\u{1F4BC}",
    "\u{1F393}",
    "\u{1F3E5}",
    "\u{1F3B5}",
    "\u{1F3AC}",
    "\u{1F3C3}",
    "\u26A1",
    "\u269B\uFE0F",
    "\u{1F504}",
    "\u{1F4BE}",
    "\u{1F5C4}\uFE0F",
    "\u{1F454}",
    "\u{1F3E2}",
    "\u{1F4E6}",
    "\u{1F510}",
    "\u{1F3AE}",
    "\u{1F4F8}",
    "\u{1F3AD}",
    "\u{1F9EA}",
    "\u{1F52C}",
    "\u{1F4E1}",
    "\u{1F6E0}\uFE0F",
    "\u{1F537}",
    "\u{1F48E}",
    "\u{1F535}",
    "\u{1F517}",
    "\u{1F578}\uFE0F",
    "\u{1F464}",
    "\u{1F9D1}",
    "\u{1F3E0}",
    "\u{1F31F}",
    "\u{1F381}",
    "\u{1F4CC}",
    "\u{1F4CD}",
    "\u{1F511}",
    "\u{1F3B2}",
    "\u{1F3B0}",
    "\u{1F3BA}",
    "\u{1F91D}",
    "\u{1F4AC}",
    "\u{1F4DE}",
    "\u{1F3A4}",
    "\u{1F389}",
    "\u{1F38A}",
    "\u{1F60A}",
    "\u{1F388}",
    "\u{1F308}",
    "\u2600\uFE0F",
    "\u{1F319}",
    "\u{1F30D}",
    "\u{1F5FA}\uFE0F",
    "\u23F0",
    "\u{1F4C5}",
    "\u{1F3CB}\uFE0F",
    "\u{1F6B4}",
    "\u{1F3CA}",
    "\u26BD",
    "\u{1F3C0}",
    "\u{1F3BE}",
    "\u{1F3F8}",
    "\u{1F5BC}\uFE0F",
    "\u{1F4F7}",
    "\u{1F3A5}",
    "\u{1F355}",
    "\u{1F354}",
    "\u2615",
    "\u{1F370}"
  ];
  constructor(categoryService, toaster, confirmation) {
    this.categoryService = categoryService;
    this.toaster = toaster;
    this.confirmation = confirmation;
  }
  ngOnInit() {
    this.loadCategories();
  }
  loadCategories() {
    this.categoryService.getAllCategories().subscribe({
      next: (data) => {
        this.categories = data;
        this.filteredCategories = data;
      },
      error: (error) => {
        this.toaster.error(`Failed to load categories: ${error.message || "Unknown error"}`);
      }
    });
  }
  onSearchChange() {
  }
  getTableData() {
    return this.filteredCategories.map((cat) => {
      const _a = cat, { id } = _a, rest = __objRest(_a, ["id"]);
      return __spreadValues({
        id: id.toString()
      }, rest);
    });
  }
  openAddModal() {
    this.isEditMode = false;
    this.formCategory = {
      id: 0,
      category: "",
      icon: "",
      is_active: true
    };
    this.selectedCategory = null;
    this.categoryError = "";
    this.iconError = "";
    this.showAddEditModal = true;
  }
  openEditModal(category) {
    const cat = category;
    this.isEditMode = true;
    this.selectedCategory = cat;
    this.formCategory = {
      id: cat.id,
      category: cat.category,
      icon: cat.icon,
      is_active: cat.is_active ?? true
    };
    this.categoryError = "";
    this.iconError = "";
    this.showAddEditModal = true;
  }
  closeModal() {
    this.showAddEditModal = false;
    this.isEditMode = false;
    this.selectedCategory = null;
    this.formCategory = {
      id: 0,
      category: "",
      icon: "",
      is_active: true
    };
    this.categoryError = "";
    this.iconError = "";
  }
  selectIcon(icon) {
    this.formCategory.icon = icon;
    this.iconError = "";
  }
  validateIcon() {
    if (!this.formCategory.icon?.trim()) {
      this.iconError = "Icon is required";
    } else {
      this.iconError = "";
    }
  }
  onIconInput() {
    if (this.iconError) {
      this.iconError = "";
    }
  }
  validateCategoryUniqueness() {
    this.categoryError = "";
    const categoryValue = this.formCategory.category?.trim();
    if (!categoryValue) {
      return;
    }
    const currentId = Number(this.formCategory.id);
    const existingCategory = this.categories.find((cat) => {
      const catId = Number(cat.id);
      return cat.category?.toLowerCase() === categoryValue.toLowerCase() && catId !== currentId && !cat.is_deleted;
    });
    if (existingCategory) {
      this.categoryError = "Category name already exists";
    }
  }
  onCategoryBlur() {
    this.validateCategoryUniqueness();
  }
  onCategoryInput() {
    if (this.categoryError) {
      this.validateCategoryUniqueness();
    }
  }
  saveCategory() {
    if (!this.formCategory.category?.trim()) {
      this.categoryError = "Category name is required";
    } else {
      this.validateCategoryUniqueness();
    }
    if (!this.formCategory.icon?.trim()) {
      this.iconError = "Icon is required";
    } else {
      this.iconError = "";
    }
    if (this.categoryError || this.iconError) {
      return;
    }
    this.categoryService.addUpdateCategory(this.formCategory).subscribe({
      next: (data) => {
        this.toaster.success(`Category "${data.category}" has been ${this.isEditMode ? "updated" : "created"} successfully`);
        this.closeModal();
        this.loadCategories();
      },
      error: (error) => {
        const errorMessage = error.error?.message || error.message || "Unknown error occurred";
        if (errorMessage.toLowerCase().includes("category name already exists")) {
          this.categoryError = "Category name already exists";
          return;
        }
        this.toaster.error(`Operation Failed: ${errorMessage}`);
      }
    });
  }
  deleteCategory(category) {
    this.confirmation.confirm({
      title: "Delete Category",
      message: `Are you sure you want to delete "${category.category}"?`,
      confirmText: "Delete",
      cancelText: "Cancel",
      confirmClass: "danger"
    }).then((confirmed) => {
      if (confirmed) {
        this.categoryService.deleteCategory(category.id, false).subscribe({
          next: () => {
            this.toaster.success(`Category "${category.category}" has been deleted successfully`);
            this.loadCategories();
          },
          error: (error) => {
            this.toaster.error(`Delete Failed: ${error.error?.message || error.message || "Unknown error occurred"}`);
          }
        });
      }
    });
  }
  toggleActive(category) {
    if (this.isToggleInProgress)
      return;
    const cat = category;
    this.isToggleInProgress = true;
    const updatedCategory = {
      id: cat.id,
      category: cat.category,
      icon: cat.icon,
      is_active: !cat.is_active
    };
    this.categoryService.addUpdateCategory(updatedCategory).subscribe({
      next: () => {
        this.toaster.success(`Category "${cat.category}" has been ${updatedCategory.is_active ? "activated" : "deactivated"}`);
        this.loadCategories();
        this.isToggleInProgress = false;
      },
      error: (error) => {
        this.toaster.error(`Update Failed: ${error.error?.message || error.message || "Unknown error occurred"}`);
        this.isToggleInProgress = false;
      }
    });
  }
  onTableRowClick(row) {
  }
  onTableActionClick(event) {
    const category = event.row;
    switch (event.action) {
      case "edit":
        this.openEditModal(category);
        break;
      case "delete":
        this.deleteCategory(category);
        break;
    }
  }
  onBooleanToggle(event) {
    const cat = event.row;
    if (event.column === "is_active") {
      this.toggleActive(cat);
    }
  }
  onTableSortChange(event) {
    this.filteredCategories.sort((a, b) => {
      const aVal = a[event.column];
      const bVal = b[event.column];
      if (event.direction === "asc") {
        return aVal > bVal ? 1 : -1;
      } else {
        return aVal < bVal ? 1 : -1;
      }
    });
  }
  onTableFilterChange(event) {
    if (!event.value) {
      this.filteredCategories = this.categories;
      return;
    }
    this.filteredCategories = this.categories.filter((cat) => String(cat[event.column]).toLowerCase().includes(String(event.value).toLowerCase()));
  }
  onTablePageChange(event) {
  }
  static \u0275fac = function CategoryMasterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CategoryMasterComponent)(\u0275\u0275directiveInject(CategoryMasterService), \u0275\u0275directiveInject(ToasterService), \u0275\u0275directiveInject(ConfirmationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoryMasterComponent, selectors: [["app-category-master"]], decls: 5, vars: 8, consts: [[1, "category-master-container"], ["class", "master-toolbar", 4, "ngIf"], [1, "table-view"], ["emptyMessage", "No categories available", "searchPlaceholder", "Search categories...", 3, "rowClick", "actionClick", "booleanToggle", "sortChange", "filterChange", "pageChange", "columns", "data", "config", "actions", "loading", "externalSearch"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "master-toolbar"], [1, "master-search-wrapper"], ["type", "text", "placeholder", "Search categories...", 1, "master-search-input", 3, "ngModelChange", "ngModel"], ["class", "master-search-clear", "title", "Clear search", 3, "click", 4, "ngIf"], ["aria-label", "Add new category", "title", "Create a new category", 1, "add-action-btn", 3, "click"], [1, "fas", "fa-plus", "icon"], [1, "label"], ["title", "Clear search", 1, "master-search-clear", 3, "click"], [1, "fas", "fa-times"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], ["title", "Close", 1, "btn-icon", 3, "click"], [1, "modal-body"], [1, "form-group"], ["for", "categoryName"], [1, "required"], ["type", "text", "id", "categoryName", "placeholder", "e.g., Development", "maxlength", "100", 1, "form-input", 3, "ngModelChange", "blur", "input", "ngModel"], ["class", "error-message", 4, "ngIf"], ["for", "categoryIcon"], [1, "icon-selector"], [1, "icon-preview"], [1, "preview-icon"], ["type", "text", "id", "categoryIcon", "placeholder", "Enter emoji or icon", "maxlength", "10", 1, "form-input", "icon-input", 3, "ngModelChange", "blur", "input", "ngModel"], [1, "icon-grid"], ["class", "icon-btn", 3, "selected", "title", "click", 4, "ngFor", "ngForOf"], [1, "form-group", "form-group-checkbox"], ["for", "categoryActive", 1, "form-label-inline"], [1, "checkbox-label"], ["type", "checkbox", "id", "categoryActive", 1, "checkbox-input", 3, "ngModelChange", "ngModel"], [1, "checkbox-toggle"], [1, "toggle-indicator"], [1, "modal-footer"], [1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-primary", 3, "click"], [1, "error-message"], [1, "icon-btn", 3, "click", "title"]], template: function CategoryMasterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, CategoryMasterComponent_div_1_Template, 8, 3, "div", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "app-data-table", 3);
      \u0275\u0275listener("rowClick", function CategoryMasterComponent_Template_app_data_table_rowClick_3_listener($event) {
        return ctx.onTableRowClick($event);
      })("actionClick", function CategoryMasterComponent_Template_app_data_table_actionClick_3_listener($event) {
        return ctx.onTableActionClick($event);
      })("booleanToggle", function CategoryMasterComponent_Template_app_data_table_booleanToggle_3_listener($event) {
        return ctx.onBooleanToggle($event);
      })("sortChange", function CategoryMasterComponent_Template_app_data_table_sortChange_3_listener($event) {
        return ctx.onTableSortChange($event);
      })("filterChange", function CategoryMasterComponent_Template_app_data_table_filterChange_3_listener($event) {
        return ctx.onTableFilterChange($event);
      })("pageChange", function CategoryMasterComponent_Template_app_data_table_pageChange_3_listener($event) {
        return ctx.onTablePageChange($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(4, CategoryMasterComponent_div_4_Template, 40, 13, "div", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.tableConfig.searchable);
      \u0275\u0275advance(2);
      \u0275\u0275property("columns", ctx.tableColumns)("data", ctx.getTableData())("config", ctx.tableConfig)("actions", ctx.tableActions)("loading", false)("externalSearch", ctx.searchQuery);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showAddEditModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, MaxLengthValidator, NgModel, DataTableComponent], styles: [`

[_ngcontent-%COMP%]:root {
  --primary-bg: #1a1a1a;
  --secondary-bg: #2d2d2d;
  --tertiary-bg: #3a3a3a;
  --surface-bg: #2a2a2a;
  --primary-accent: #4a9eff;
  --secondary-accent: #7c3aed;
  --success-color: #10b981;
  --warning-color: #f59e0b;
  --error-color: #ef4444;
  --text-primary: #ffffff;
  --text-secondary: #e5e5e5;
  --text-muted: #a3a3a3;
  --text-disabled: #6b7280;
  --border-primary: #4a4a4a;
  --border-secondary: #3a3a3a;
  --border-accent: #5a5a5a;
  --shadow-light: rgba(0, 0, 0, 0.1);
  --shadow-medium: rgba(0, 0, 0, 0.2);
  --shadow-heavy: rgba(0, 0, 0, 0.3);
  --hover-bg: #3a3a3a;
  --hover-accent: #5bb0ff;
  --active-bg: #4a4a4a;
  --active-accent: #3a8fdf;
}
.category-master-container[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  height: calc(100vh - 66px);
  max-height: calc(100vh - 66px);
  overflow: hidden;
  box-sizing: border-box;
  background: #0f1115;
  color: #e6e6e6;
}
.category-master-container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:focus {
  outline: none !important;
}
.category-master-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type=checkbox]):not([type=radio]):focus, 
.category-master-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, 
.category-master-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {
  outline: none !important;
  border-color: #4a5568 !important;
  box-shadow: 0 0 0 2px rgba(74, 85, 104, 0.15) !important;
}
.master-toolbar[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 16px;
  flex-shrink: 0;
}
.master-toolbar[_ngcontent-%COMP%]   .toolbar-left[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
}
.master-toolbar[_ngcontent-%COMP%]   .master-search-wrapper[_ngcontent-%COMP%] {
  flex: 1;
  max-width: 500px;
}
.master-toolbar[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {
  flex-shrink: 0;
  white-space: nowrap;
}
.master-toolbar[_ngcontent-%COMP%]   .category-filter-select[_ngcontent-%COMP%], 
.master-toolbar[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {
  padding: 8px 36px 8px 12px;
  background: #1f2228;
  border: 1px solid #3a3f47;
  border-radius: 8px;
  color: #e6e6e6;
  font-size: 0.95rem;
  transition: all 0.2s ease;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%239aa0a6' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  cursor: pointer;
  min-width: 180px;
  box-sizing: border-box;
}
.master-toolbar[_ngcontent-%COMP%]   .category-filter-select[_ngcontent-%COMP%]:hover, 
.master-toolbar[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:hover {
  border-color: #4a5568;
}
.master-toolbar[_ngcontent-%COMP%]   .category-filter-select[_ngcontent-%COMP%]:focus, 
.master-toolbar[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #4a5568;
  box-shadow: 0 0 0 2px rgba(74, 85, 104, 0.15);
}
.master-toolbar[_ngcontent-%COMP%]   .category-filter-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%], 
.master-toolbar[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {
  background: #1f2228;
  color: #e6e6e6;
  padding: 8px;
}
.master-search-wrapper[_ngcontent-%COMP%] {
  position: relative;
  width: 100%;
}
.master-search-wrapper[_ngcontent-%COMP%]   .master-search-input[_ngcontent-%COMP%] {
  width: 100%;
  padding: 8px 40px 8px 10px;
  background: #1f2228;
  border: 1px solid #3a3f47;
  border-radius: 8px;
  color: #e6e6e6;
  font-size: 0.95rem;
  transition: all 0.2s ease;
}
.master-search-wrapper[_ngcontent-%COMP%]   .master-search-input[_ngcontent-%COMP%]::placeholder {
  color: #9aa0a6;
  opacity: 0.7;
}
.master-search-wrapper[_ngcontent-%COMP%]   .master-search-input[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #4a5568;
  box-shadow: 0 0 0 2px rgba(74, 85, 104, 0.15);
}
.master-search-wrapper[_ngcontent-%COMP%]   .master-search-input[_ngcontent-%COMP%]:hover:not(:focus) {
  border-color: #4a5568;
}
.master-search-wrapper[_ngcontent-%COMP%]   .master-search-clear[_ngcontent-%COMP%] {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: #9aa0a6;
  cursor: pointer;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  z-index: 1;
}
.master-search-wrapper[_ngcontent-%COMP%]   .master-search-clear[_ngcontent-%COMP%]:hover {
  color: #e6e6e6;
  background: rgba(255, 255, 255, 0.15);
}
.master-search-wrapper[_ngcontent-%COMP%]   .master-search-clear[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  pointer-events: none;
}
.table-view[_ngcontent-%COMP%] {
  flex: 1;
  min-height: 0;
  overflow: hidden;
  background: transparent;
}
.table-view[_ngcontent-%COMP%]   app-data-table[_ngcontent-%COMP%] {
  display: block;
  width: 100%;
  height: 100%;
}
.btn[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  background: #2c2f36;
  color: #e6e6e6;
  border: 1px solid #3a3f47;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  transition: all 0.2s ease;
}
.btn[_ngcontent-%COMP%]:hover {
  background: #3a3f47;
  border-color: #4a5568;
}
.btn.btn-primary[_ngcontent-%COMP%] {
  background: #3b82f6;
  border-color: #3b82f6;
  color: white;
}
.btn.btn-primary[_ngcontent-%COMP%]:hover {
  background: #2563eb;
  border-color: #2563eb;
}
.btn.btn-secondary[_ngcontent-%COMP%] {
  background: #4a5568;
  border-color: #4a5568;
}
.btn.btn-secondary[_ngcontent-%COMP%]:hover {
  background: #5a6578;
  border-color: #5a6578;
}
.btn-icon[_ngcontent-%COMP%] {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid #3a3f47;
  border-radius: 6px;
  color: #e6e6e6;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 14px;
}
.btn-icon[_ngcontent-%COMP%]:hover {
  background: #2c2f36;
  border-color: #4a5568;
}
.btn-icon.active[_ngcontent-%COMP%] {
  color: #10b981;
  border-color: #10b981;
}
.btn-icon.btn-danger[_ngcontent-%COMP%] {
  color: #ef4444;
}
.btn-icon.btn-danger[_ngcontent-%COMP%]:hover {
  background: rgba(239, 68, 68, 0.1);
  border-color: #ef4444;
}
.form-group[_ngcontent-%COMP%] {
  margin-bottom: 16px;
}
.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  display: block;
  margin-bottom: 6px;
  font-size: 13px;
  font-weight: 500;
  color: #e6e6e6;
}
.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {
  color: #ef4444;
}
.form-group[_ngcontent-%COMP%]   label.form-label-inline[_ngcontent-%COMP%] {
  display: inline-block;
  margin-bottom: 0;
  margin-right: 12px;
  vertical-align: middle;
}
.form-group.form-group-checkbox[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0;
}
.form-group.form-group-checkbox[_ngcontent-%COMP%]   label.form-label-inline[_ngcontent-%COMP%] {
  margin-bottom: 0;
  margin-right: 12px;
}
.form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {
  width: 100%;
  padding: 8px 12px;
  background: #1b1f26;
  border: 1px solid #2a2f36;
  border-radius: 6px;
  color: #e6e6e6;
  font-size: 14px;
  transition: all 0.2s ease;
  box-sizing: border-box;
}
.form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]::placeholder {
  color: #9aa0a6;
}
.form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:focus {
  border-color: #4a5568;
  box-shadow: 0 0 0 2px rgba(74, 85, 104, 0.15);
}
.form-group[_ngcontent-%COMP%]   .form-input.error[_ngcontent-%COMP%] {
  border-color: #ef4444;
}
.form-group[_ngcontent-%COMP%]   .form-input.error[_ngcontent-%COMP%]:focus {
  border-color: #ef4444;
  box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.15);
}
.form-group[_ngcontent-%COMP%]   select.form-input[_ngcontent-%COMP%] {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%239aa0a6' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 36px;
  cursor: pointer;
}
.form-group[_ngcontent-%COMP%]   select.form-input[_ngcontent-%COMP%]:hover {
  border-color: #4a5568;
}
.form-group[_ngcontent-%COMP%]   select.form-input[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {
  background: #1b1f26;
  color: #e6e6e6;
  padding: 8px;
}
.form-group[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {
  color: #ef4444;
  font-size: 12px;
  margin-top: 4px;
  display: block;
}
.checkbox-label[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  margin-bottom: 0;
  vertical-align: middle;
}
.checkbox-label[_ngcontent-%COMP%]   .checkbox-input[_ngcontent-%COMP%] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
}
.checkbox-label[_ngcontent-%COMP%]   .checkbox-toggle[_ngcontent-%COMP%] {
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 48px;
  height: 26px;
  background: rgba(30, 30, 30, 0.9);
  border: 1.5px solid rgba(100, 100, 100, 0.3);
  border-radius: 13px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.05);
  cursor: pointer;
  flex-shrink: 0;
}
.checkbox-label[_ngcontent-%COMP%]   .checkbox-toggle[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    linear-gradient(
      135deg,
      rgba(120, 120, 120, 0.2) 0%,
      rgba(80, 80, 80, 0.1) 100%);
  opacity: 1;
  transition: opacity 0.3s ease;
}
.checkbox-label[_ngcontent-%COMP%]   .checkbox-toggle[_ngcontent-%COMP%]   .toggle-indicator[_ngcontent-%COMP%] {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 20px;
  height: 20px;
  background: rgba(200, 200, 200, 0.3);
  border: 1.5px solid rgba(180, 180, 180, 0.4);
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.15);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(0);
  z-index: 2;
}
.checkbox-label[_ngcontent-%COMP%]   .checkbox-toggle[_ngcontent-%COMP%]   .toggle-indicator[_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6px;
  height: 6px;
  background: rgba(100, 100, 100, 0.8);
  border-radius: 50%;
  transition: all 0.3s ease;
}
.checkbox-label[_ngcontent-%COMP%]   .checkbox-input[_ngcontent-%COMP%]:checked    + .checkbox-toggle[_ngcontent-%COMP%] {
  background: rgba(50, 50, 50, 0.95);
  border-color: rgba(59, 130, 246, 0.6);
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.05);
}
.checkbox-label[_ngcontent-%COMP%]   .checkbox-input[_ngcontent-%COMP%]:checked    + .checkbox-toggle[_ngcontent-%COMP%]::before {
  opacity: 1;
  background:
    linear-gradient(
      135deg,
      rgba(59, 130, 246, 0.25) 0%,
      rgba(37, 99, 235, 0.15) 100%);
}
.checkbox-label[_ngcontent-%COMP%]   .checkbox-input[_ngcontent-%COMP%]:checked    + .checkbox-toggle[_ngcontent-%COMP%]   .toggle-indicator[_ngcontent-%COMP%] {
  transform: translateX(22px);
  background: rgba(59, 130, 246, 0.95);
  border-color: rgba(59, 130, 246, 0.8);
  box-shadow: 0 2px 6px rgba(59, 130, 246, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.2);
}
.checkbox-label[_ngcontent-%COMP%]   .checkbox-input[_ngcontent-%COMP%]:checked    + .checkbox-toggle[_ngcontent-%COMP%]   .toggle-indicator[_ngcontent-%COMP%]::after {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 0 6px rgba(59, 130, 246, 0.5);
  width: 8px;
  height: 8px;
}
.checkbox-label[_ngcontent-%COMP%]:hover   .checkbox-toggle[_ngcontent-%COMP%] {
  border-color: rgba(150, 150, 150, 0.5);
}
.checkbox-label[_ngcontent-%COMP%]:hover   .checkbox-input[_ngcontent-%COMP%]:checked    + .checkbox-toggle[_ngcontent-%COMP%] {
  border-color: rgba(59, 130, 246, 0.8);
  box-shadow: 0 2px 12px rgba(59, 130, 246, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.05);
}
.checkbox-label[_ngcontent-%COMP%]   .checkbox-input[_ngcontent-%COMP%]:focus    + .checkbox-toggle[_ngcontent-%COMP%] {
  outline: none;
  box-shadow:
    0 0 0 3px rgba(59, 130, 246, 0.2),
    0 2px 4px rgba(0, 0, 0, 0.4),
    inset 0 1px 1px rgba(255, 255, 255, 0.05);
}
.icon-selector[_ngcontent-%COMP%]   .icon-preview[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}
.icon-selector[_ngcontent-%COMP%]   .icon-preview[_ngcontent-%COMP%]   .preview-icon[_ngcontent-%COMP%] {
  font-size: 24px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1b1f26;
  border: 1px solid #2a2f36;
  border-radius: 6px;
}
.icon-selector[_ngcontent-%COMP%]   .icon-preview[_ngcontent-%COMP%]   .icon-input[_ngcontent-%COMP%] {
  flex: 1;
}
.icon-selector[_ngcontent-%COMP%]   .icon-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 6px;
  max-height: 200px;
  overflow-y: auto;
  padding: 8px;
  background: #1b1f26;
  border: 1px solid #2a2f36;
  border-radius: 6px;
  scrollbar-width: thin;
  scrollbar-color: rgba(74, 85, 104, 0.6) rgba(20, 23, 28, 0.8);
}
.icon-selector[_ngcontent-%COMP%]   .icon-grid[_ngcontent-%COMP%]::-webkit-scrollbar {
  width: 6px;
}
.icon-selector[_ngcontent-%COMP%]   .icon-grid[_ngcontent-%COMP%]::-webkit-scrollbar-track {
  background: rgba(20, 23, 28, 0.8);
  border-radius: 3px;
}
.icon-selector[_ngcontent-%COMP%]   .icon-grid[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {
  background: rgba(74, 85, 104, 0.6);
  border-radius: 3px;
}
.icon-selector[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%] {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid #2a2f36;
  border-radius: 6px;
  cursor: pointer;
  font-size: 20px;
  transition: all 0.2s ease;
}
.icon-selector[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%]:hover {
  background: #2c2f36;
  border-color: #4a5568;
  transform: scale(1.1);
}
.icon-selector[_ngcontent-%COMP%]   .icon-btn.selected[_ngcontent-%COMP%] {
  background: #3b82f6;
  border-color: #3b82f6;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
}
/*# sourceMappingURL=category-master.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoryMasterComponent, [{
    type: Component,
    args: [{ selector: "app-category-master", standalone: true, imports: [CommonModule, FormsModule, DataTableComponent], template: `<div class="category-master-container">\r
  <!-- Search and Add Button Row -->\r
  <div class="master-toolbar" *ngIf="tableConfig.searchable">\r
    <div class="master-search-wrapper">\r
      <input \r
        type="text" \r
        class="master-search-input" \r
        [(ngModel)]="searchQuery"\r
        (ngModelChange)="onSearchChange()"\r
        placeholder="Search categories..."\r
      />\r
      <button \r
        *ngIf="searchQuery" \r
        class="master-search-clear"\r
        (click)="searchQuery = ''; onSearchChange()"\r
        title="Clear search"\r
      >\r
        <i class="fas fa-times"></i>\r
      </button>\r
    </div>\r
    <button \r
      class="add-action-btn" \r
      (click)="openAddModal()"\r
      aria-label="Add new category"\r
      title="Create a new category"\r
    >\r
      <i class="fas fa-plus icon" [attr.aria-hidden]="true"></i>\r
      <span class="label">Add Category</span>\r
    </button>\r
  </div>\r
\r
  <!-- Table View -->\r
  <div class="table-view">\r
    <app-data-table\r
      [columns]="tableColumns"\r
      [data]="getTableData()"\r
      [config]="tableConfig"\r
      [actions]="tableActions"\r
      [loading]="false"\r
      emptyMessage="No categories available"\r
      searchPlaceholder="Search categories..."\r
      [externalSearch]="searchQuery"\r
      (rowClick)="onTableRowClick($event)"\r
      (actionClick)="onTableActionClick($event)"\r
      (booleanToggle)="onBooleanToggle($event)"\r
      (sortChange)="onTableSortChange($event)"\r
      (filterChange)="onTableFilterChange($event)"\r
      (pageChange)="onTablePageChange($event)"\r
    ></app-data-table>\r
  </div>\r
\r
  <!-- Add/Edit Modal -->\r
  <div class="modal-overlay" *ngIf="showAddEditModal" (click)="closeModal()">\r
    <div class="modal-content" (click)="$event.stopPropagation()">\r
      <div class="modal-header">\r
        <h3>{{ isEditMode ? 'Edit Category' : 'Add New Category' }}</h3>\r
        <button class="btn-icon" (click)="closeModal()" title="Close">\r
          <i class="fas fa-times"></i>\r
        </button>\r
      </div>\r
\r
      <div class="modal-body">\r
        <div class="form-group">\r
          <label for="categoryName">Category Name <span class="required">*</span></label>\r
          <input \r
            type="text" \r
            id="categoryName"\r
            class="form-input" \r
            [class.error]="categoryError"\r
            [(ngModel)]="formCategory.category"\r
            (blur)="onCategoryBlur()"\r
            (input)="onCategoryInput()"\r
            placeholder="e.g., Development"\r
            maxlength="100"\r
          />\r
          <div class="error-message" *ngIf="categoryError">{{ categoryError }}</div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label for="categoryIcon">Icon <span class="required">*</span></label>\r
          <div class="icon-selector">\r
            <div class="icon-preview">\r
              <span class="preview-icon">{{ formCategory.icon || '\u{1F680}' }}</span>\r
              <input \r
                type="text" \r
                id="categoryIcon"\r
                class="form-input icon-input" \r
                [class.error]="iconError"\r
                [(ngModel)]="formCategory.icon"\r
                (blur)="validateIcon()"\r
                (input)="onIconInput()"\r
                placeholder="Enter emoji or icon"\r
                maxlength="10"\r
              />\r
            </div>\r
            <div class="icon-grid">\r
              <button \r
                *ngFor="let icon of commonIcons"\r
                class="icon-btn"\r
                [class.selected]="formCategory.icon === icon"\r
                (click)="selectIcon(icon)"\r
                [title]="icon"\r
              >\r
                {{ icon }}\r
              </button>\r
            </div>\r
          </div>\r
          <div class="error-message" *ngIf="iconError">{{ iconError }}</div>\r
        </div>\r
\r
        <div class="form-group form-group-checkbox">\r
          <label for="categoryActive" class="form-label-inline">Active</label>\r
          <label class="checkbox-label">\r
            <input \r
              type="checkbox" \r
              id="categoryActive"\r
              [(ngModel)]="formCategory.is_active"\r
              class="checkbox-input"\r
            />\r
            <span class="checkbox-toggle">\r
              <span class="toggle-indicator"></span>\r
            </span>\r
          </label>\r
        </div>\r
      </div>\r
\r
      <div class="modal-footer">\r
        <button class="btn btn-secondary" (click)="closeModal()">Cancel</button>\r
        <button class="btn btn-primary" (click)="saveCategory()">\r
          {{ isEditMode ? 'Update' : 'Create' }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: [`/* src/app/components/category-master/category-master.scss */
:root {
  --primary-bg: #1a1a1a;
  --secondary-bg: #2d2d2d;
  --tertiary-bg: #3a3a3a;
  --surface-bg: #2a2a2a;
  --primary-accent: #4a9eff;
  --secondary-accent: #7c3aed;
  --success-color: #10b981;
  --warning-color: #f59e0b;
  --error-color: #ef4444;
  --text-primary: #ffffff;
  --text-secondary: #e5e5e5;
  --text-muted: #a3a3a3;
  --text-disabled: #6b7280;
  --border-primary: #4a4a4a;
  --border-secondary: #3a3a3a;
  --border-accent: #5a5a5a;
  --shadow-light: rgba(0, 0, 0, 0.1);
  --shadow-medium: rgba(0, 0, 0, 0.2);
  --shadow-heavy: rgba(0, 0, 0, 0.3);
  --hover-bg: #3a3a3a;
  --hover-accent: #5bb0ff;
  --active-bg: #4a4a4a;
  --active-accent: #3a8fdf;
}
.category-master-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  height: calc(100vh - 66px);
  max-height: calc(100vh - 66px);
  overflow: hidden;
  box-sizing: border-box;
  background: #0f1115;
  color: #e6e6e6;
}
.category-master-container *:focus {
  outline: none !important;
}
.category-master-container input:not([type=checkbox]):not([type=radio]):focus,
.category-master-container textarea:focus,
.category-master-container select:focus {
  outline: none !important;
  border-color: #4a5568 !important;
  box-shadow: 0 0 0 2px rgba(74, 85, 104, 0.15) !important;
}
.master-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 16px;
  flex-shrink: 0;
}
.master-toolbar .toolbar-left {
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
}
.master-toolbar .master-search-wrapper {
  flex: 1;
  max-width: 500px;
}
.master-toolbar .btn {
  flex-shrink: 0;
  white-space: nowrap;
}
.master-toolbar .category-filter-select,
.master-toolbar .form-select {
  padding: 8px 36px 8px 12px;
  background: #1f2228;
  border: 1px solid #3a3f47;
  border-radius: 8px;
  color: #e6e6e6;
  font-size: 0.95rem;
  transition: all 0.2s ease;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%239aa0a6' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  cursor: pointer;
  min-width: 180px;
  box-sizing: border-box;
}
.master-toolbar .category-filter-select:hover,
.master-toolbar .form-select:hover {
  border-color: #4a5568;
}
.master-toolbar .category-filter-select:focus,
.master-toolbar .form-select:focus {
  outline: none;
  border-color: #4a5568;
  box-shadow: 0 0 0 2px rgba(74, 85, 104, 0.15);
}
.master-toolbar .category-filter-select option,
.master-toolbar .form-select option {
  background: #1f2228;
  color: #e6e6e6;
  padding: 8px;
}
.master-search-wrapper {
  position: relative;
  width: 100%;
}
.master-search-wrapper .master-search-input {
  width: 100%;
  padding: 8px 40px 8px 10px;
  background: #1f2228;
  border: 1px solid #3a3f47;
  border-radius: 8px;
  color: #e6e6e6;
  font-size: 0.95rem;
  transition: all 0.2s ease;
}
.master-search-wrapper .master-search-input::placeholder {
  color: #9aa0a6;
  opacity: 0.7;
}
.master-search-wrapper .master-search-input:focus {
  outline: none;
  border-color: #4a5568;
  box-shadow: 0 0 0 2px rgba(74, 85, 104, 0.15);
}
.master-search-wrapper .master-search-input:hover:not(:focus) {
  border-color: #4a5568;
}
.master-search-wrapper .master-search-clear {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: #9aa0a6;
  cursor: pointer;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  z-index: 1;
}
.master-search-wrapper .master-search-clear:hover {
  color: #e6e6e6;
  background: rgba(255, 255, 255, 0.15);
}
.master-search-wrapper .master-search-clear i {
  pointer-events: none;
}
.table-view {
  flex: 1;
  min-height: 0;
  overflow: hidden;
  background: transparent;
}
.table-view app-data-table {
  display: block;
  width: 100%;
  height: 100%;
}
.btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  background: #2c2f36;
  color: #e6e6e6;
  border: 1px solid #3a3f47;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  transition: all 0.2s ease;
}
.btn:hover {
  background: #3a3f47;
  border-color: #4a5568;
}
.btn.btn-primary {
  background: #3b82f6;
  border-color: #3b82f6;
  color: white;
}
.btn.btn-primary:hover {
  background: #2563eb;
  border-color: #2563eb;
}
.btn.btn-secondary {
  background: #4a5568;
  border-color: #4a5568;
}
.btn.btn-secondary:hover {
  background: #5a6578;
  border-color: #5a6578;
}
.btn-icon {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid #3a3f47;
  border-radius: 6px;
  color: #e6e6e6;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 14px;
}
.btn-icon:hover {
  background: #2c2f36;
  border-color: #4a5568;
}
.btn-icon.active {
  color: #10b981;
  border-color: #10b981;
}
.btn-icon.btn-danger {
  color: #ef4444;
}
.btn-icon.btn-danger:hover {
  background: rgba(239, 68, 68, 0.1);
  border-color: #ef4444;
}
.form-group {
  margin-bottom: 16px;
}
.form-group label {
  display: block;
  margin-bottom: 6px;
  font-size: 13px;
  font-weight: 500;
  color: #e6e6e6;
}
.form-group label .required {
  color: #ef4444;
}
.form-group label.form-label-inline {
  display: inline-block;
  margin-bottom: 0;
  margin-right: 12px;
  vertical-align: middle;
}
.form-group.form-group-checkbox {
  display: flex;
  align-items: center;
  gap: 0;
}
.form-group.form-group-checkbox label.form-label-inline {
  margin-bottom: 0;
  margin-right: 12px;
}
.form-group .form-input {
  width: 100%;
  padding: 8px 12px;
  background: #1b1f26;
  border: 1px solid #2a2f36;
  border-radius: 6px;
  color: #e6e6e6;
  font-size: 14px;
  transition: all 0.2s ease;
  box-sizing: border-box;
}
.form-group .form-input::placeholder {
  color: #9aa0a6;
}
.form-group .form-input:focus {
  border-color: #4a5568;
  box-shadow: 0 0 0 2px rgba(74, 85, 104, 0.15);
}
.form-group .form-input.error {
  border-color: #ef4444;
}
.form-group .form-input.error:focus {
  border-color: #ef4444;
  box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.15);
}
.form-group select.form-input {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%239aa0a6' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 36px;
  cursor: pointer;
}
.form-group select.form-input:hover {
  border-color: #4a5568;
}
.form-group select.form-input option {
  background: #1b1f26;
  color: #e6e6e6;
  padding: 8px;
}
.form-group .error-message {
  color: #ef4444;
  font-size: 12px;
  margin-top: 4px;
  display: block;
}
.checkbox-label {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  margin-bottom: 0;
  vertical-align: middle;
}
.checkbox-label .checkbox-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
}
.checkbox-label .checkbox-toggle {
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 48px;
  height: 26px;
  background: rgba(30, 30, 30, 0.9);
  border: 1.5px solid rgba(100, 100, 100, 0.3);
  border-radius: 13px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.05);
  cursor: pointer;
  flex-shrink: 0;
}
.checkbox-label .checkbox-toggle::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    linear-gradient(
      135deg,
      rgba(120, 120, 120, 0.2) 0%,
      rgba(80, 80, 80, 0.1) 100%);
  opacity: 1;
  transition: opacity 0.3s ease;
}
.checkbox-label .checkbox-toggle .toggle-indicator {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 20px;
  height: 20px;
  background: rgba(200, 200, 200, 0.3);
  border: 1.5px solid rgba(180, 180, 180, 0.4);
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.15);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(0);
  z-index: 2;
}
.checkbox-label .checkbox-toggle .toggle-indicator::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6px;
  height: 6px;
  background: rgba(100, 100, 100, 0.8);
  border-radius: 50%;
  transition: all 0.3s ease;
}
.checkbox-label .checkbox-input:checked + .checkbox-toggle {
  background: rgba(50, 50, 50, 0.95);
  border-color: rgba(59, 130, 246, 0.6);
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.05);
}
.checkbox-label .checkbox-input:checked + .checkbox-toggle::before {
  opacity: 1;
  background:
    linear-gradient(
      135deg,
      rgba(59, 130, 246, 0.25) 0%,
      rgba(37, 99, 235, 0.15) 100%);
}
.checkbox-label .checkbox-input:checked + .checkbox-toggle .toggle-indicator {
  transform: translateX(22px);
  background: rgba(59, 130, 246, 0.95);
  border-color: rgba(59, 130, 246, 0.8);
  box-shadow: 0 2px 6px rgba(59, 130, 246, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.2);
}
.checkbox-label .checkbox-input:checked + .checkbox-toggle .toggle-indicator::after {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 0 6px rgba(59, 130, 246, 0.5);
  width: 8px;
  height: 8px;
}
.checkbox-label:hover .checkbox-toggle {
  border-color: rgba(150, 150, 150, 0.5);
}
.checkbox-label:hover .checkbox-input:checked + .checkbox-toggle {
  border-color: rgba(59, 130, 246, 0.8);
  box-shadow: 0 2px 12px rgba(59, 130, 246, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.05);
}
.checkbox-label .checkbox-input:focus + .checkbox-toggle {
  outline: none;
  box-shadow:
    0 0 0 3px rgba(59, 130, 246, 0.2),
    0 2px 4px rgba(0, 0, 0, 0.4),
    inset 0 1px 1px rgba(255, 255, 255, 0.05);
}
.icon-selector .icon-preview {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}
.icon-selector .icon-preview .preview-icon {
  font-size: 24px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1b1f26;
  border: 1px solid #2a2f36;
  border-radius: 6px;
}
.icon-selector .icon-preview .icon-input {
  flex: 1;
}
.icon-selector .icon-grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 6px;
  max-height: 200px;
  overflow-y: auto;
  padding: 8px;
  background: #1b1f26;
  border: 1px solid #2a2f36;
  border-radius: 6px;
  scrollbar-width: thin;
  scrollbar-color: rgba(74, 85, 104, 0.6) rgba(20, 23, 28, 0.8);
}
.icon-selector .icon-grid::-webkit-scrollbar {
  width: 6px;
}
.icon-selector .icon-grid::-webkit-scrollbar-track {
  background: rgba(20, 23, 28, 0.8);
  border-radius: 3px;
}
.icon-selector .icon-grid::-webkit-scrollbar-thumb {
  background: rgba(74, 85, 104, 0.6);
  border-radius: 3px;
}
.icon-selector .icon-btn {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid #2a2f36;
  border-radius: 6px;
  cursor: pointer;
  font-size: 20px;
  transition: all 0.2s ease;
}
.icon-selector .icon-btn:hover {
  background: #2c2f36;
  border-color: #4a5568;
  transform: scale(1.1);
}
.icon-selector .icon-btn.selected {
  background: #3b82f6;
  border-color: #3b82f6;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
}
/*# sourceMappingURL=category-master.css.map */
`] }]
  }], () => [{ type: CategoryMasterService }, { type: ToasterService }, { type: ConfirmationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoryMasterComponent, { className: "CategoryMasterComponent", filePath: "src/app/components/category-master/category-master.ts", lineNumber: 16 });
})();
export {
  CategoryMasterComponent
};
//# sourceMappingURL=chunk-BALXQSPK.js.map
