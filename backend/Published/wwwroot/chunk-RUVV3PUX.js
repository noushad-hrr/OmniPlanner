import {
  PriorityMasterService
} from "./chunk-MADYNUQ7.js";
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

// src/app/components/priority-master/priority-master.ts
function PriorityMasterComponent_div_1_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function PriorityMasterComponent_div_1_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.searchQuery = "";
      return \u0275\u0275resetView(ctx_r1.onSearchChange());
    });
    \u0275\u0275element(1, "i", 13);
    \u0275\u0275elementEnd();
  }
}
function PriorityMasterComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "input", 7);
    \u0275\u0275twoWayListener("ngModelChange", function PriorityMasterComponent_div_1_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchQuery, $event) || (ctx_r1.searchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function PriorityMasterComponent_div_1_Template_input_ngModelChange_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearchChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, PriorityMasterComponent_div_1_button_3_Template, 2, 0, "button", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 9);
    \u0275\u0275listener("click", function PriorityMasterComponent_div_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAddModal());
    });
    \u0275\u0275element(5, "i", 10);
    \u0275\u0275elementStart(6, "span", 11);
    \u0275\u0275text(7, "Add Priority");
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
function PriorityMasterComponent_div_4_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.priorityError);
  }
}
function PriorityMasterComponent_div_4_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.colorError);
  }
}
function PriorityMasterComponent_div_4_small_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 41);
    \u0275\u0275text(1, "Only one priority can be set as default. Setting this as default will unset any other default priority.");
    \u0275\u0275elementEnd();
  }
}
function PriorityMasterComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275listener("click", function PriorityMasterComponent_div_4_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 15);
    \u0275\u0275listener("click", function PriorityMasterComponent_div_4_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 16)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 17);
    \u0275\u0275listener("click", function PriorityMasterComponent_div_4_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275element(6, "i", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 18)(8, "div", 19)(9, "label", 20);
    \u0275\u0275text(10, "Priority Name ");
    \u0275\u0275elementStart(11, "span", 21);
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function PriorityMasterComponent_div_4_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formPriority.priority, $event) || (ctx_r1.formPriority.priority = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("blur", function PriorityMasterComponent_div_4_Template_input_blur_13_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPriorityBlur());
    })("input", function PriorityMasterComponent_div_4_Template_input_input_13_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPriorityInput());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, PriorityMasterComponent_div_4_div_14_Template, 2, 1, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 19)(16, "label", 24);
    \u0275\u0275text(17, "Color ");
    \u0275\u0275elementStart(18, "span", 21);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 25)(21, "input", 26);
    \u0275\u0275twoWayListener("ngModelChange", function PriorityMasterComponent_div_4_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formPriority.color, $event) || (ctx_r1.formPriority.color = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function PriorityMasterComponent_div_4_Template_input_ngModelChange_21_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onColorInput());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function PriorityMasterComponent_div_4_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formPriority.color, $event) || (ctx_r1.formPriority.color = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("blur", function PriorityMasterComponent_div_4_Template_input_blur_22_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.validateColor());
    })("input", function PriorityMasterComponent_div_4_Template_input_input_22_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onColorInput());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(23, PriorityMasterComponent_div_4_div_23_Template, 2, 1, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 28)(25, "label", 29);
    \u0275\u0275text(26, "Default");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "label", 30)(28, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function PriorityMasterComponent_div_4_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formPriority.is_default, $event) || (ctx_r1.formPriority.is_default = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function PriorityMasterComponent_div_4_Template_input_change_28_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDefaultChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 32);
    \u0275\u0275element(30, "span", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(31, PriorityMasterComponent_div_4_small_31_Template, 2, 0, "small", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 28)(33, "label", 35);
    \u0275\u0275text(34, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "label", 30)(36, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function PriorityMasterComponent_div_4_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formPriority.is_active, $event) || (ctx_r1.formPriority.is_active = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 32);
    \u0275\u0275element(38, "span", 33);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(39, "div", 37)(40, "button", 38);
    \u0275\u0275listener("click", function PriorityMasterComponent_div_4_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(41, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 39);
    \u0275\u0275listener("click", function PriorityMasterComponent_div_4_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.savePriority());
    });
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.isEditMode ? "Edit Priority" : "Add New Priority");
    \u0275\u0275advance(9);
    \u0275\u0275classProp("error", ctx_r1.priorityError);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formPriority.priority);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.priorityError);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formPriority.color);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.colorError);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formPriority.color);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.colorError);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formPriority.is_default);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.formPriority.is_default);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formPriority.is_active);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditMode ? "Update" : "Create", " ");
  }
}
var PriorityMasterComponent = class _PriorityMasterComponent {
  priorityService;
  toaster;
  confirmation;
  priorities = [];
  filteredPriorities = [];
  searchQuery = "";
  showAddEditModal = false;
  isEditMode = false;
  selectedPriority = null;
  isToggleInProgress = false;
  formPriority = {
    id: 0,
    priority: "",
    color: "#DC2626",
    is_active: true,
    is_default: false
  };
  priorityError = "";
  colorError = "";
  tableColumns = [
    { key: "id", title: "ID", sortable: true, filterable: true, resizable: true, width: "70px", minWidth: "60px", maxWidth: "90px", align: "center", type: "number", hidden: false },
    { key: "priority", title: "Priority", sortable: true, filterable: true, resizable: true, width: "250px", minWidth: "200px", maxWidth: "400px", align: "left", type: "text" },
    { key: "color", title: "Color", sortable: false, filterable: false, resizable: true, width: "120px", minWidth: "100px", maxWidth: "150px", align: "center", type: "custom" },
    { key: "is_default", title: "Default", sortable: true, filterable: true, resizable: true, width: "100px", minWidth: "80px", maxWidth: "120px", align: "center", type: "boolean", toggleable: true },
    { key: "is_active", title: "Status", sortable: true, filterable: true, resizable: true, width: "100px", minWidth: "80px", maxWidth: "120px", align: "center", type: "boolean", toggleable: true },
    { key: "created_by_name", title: "Created By", sortable: true, filterable: true, resizable: true, width: "150px", minWidth: "120px", maxWidth: "200px", align: "left", type: "text" },
    { key: "created_on", title: "Created On", sortable: true, filterable: true, resizable: true, width: "150px", minWidth: "120px", maxWidth: "180px", align: "center", type: "date" },
    { key: "last_modified_by_name", title: "Last Modified By", sortable: true, filterable: true, resizable: true, width: "150px", minWidth: "120px", maxWidth: "200px", align: "left", type: "text" },
    { key: "last_modified_on", title: "Last Modified On", sortable: true, filterable: true, resizable: true, width: "150px", minWidth: "120px", maxWidth: "180px", align: "center", type: "date" },
    { key: "actions", title: "Actions", sortable: false, filterable: false, resizable: true, width: "100px", minWidth: "90px", maxWidth: "120px", align: "center", type: "custom" }
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
    { label: "Edit", icon: "fa-edit", action: "edit", color: "#4a9eff" },
    { label: "Delete", icon: "fa-trash", action: "delete", color: "#ef4444" }
  ];
  constructor(priorityService, toaster, confirmation) {
    this.priorityService = priorityService;
    this.toaster = toaster;
    this.confirmation = confirmation;
  }
  ngOnInit() {
    this.loadPriorities();
  }
  loadPriorities() {
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
        this.toaster.error(`Failed to load priorities: ${error.message || "Unknown error"}`);
      }
    });
  }
  onSearchChange() {
  }
  getTableData() {
    return this.filteredPriorities.map((p) => {
      const _a = p, { id } = _a, rest = __objRest(_a, ["id"]);
      return __spreadValues({ id: id.toString() }, rest);
    });
  }
  openAddModal() {
    this.isEditMode = false;
    this.formPriority = { id: 0, priority: "", color: "#DC2626", is_active: true, is_default: false };
    this.selectedPriority = null;
    this.priorityError = "";
    this.colorError = "";
    this.showAddEditModal = true;
  }
  openEditModal(row) {
    const p = row;
    this.isEditMode = true;
    this.selectedPriority = p;
    this.formPriority = { id: p.id, priority: p.priority, color: p.color, is_active: p.is_active ?? true, is_default: p.is_default ?? false };
    this.priorityError = "";
    this.colorError = "";
    this.showAddEditModal = true;
  }
  closeModal() {
    this.showAddEditModal = false;
    this.isEditMode = false;
    this.selectedPriority = null;
    this.formPriority = { id: 0, priority: "", color: "#DC2626", is_active: true, is_default: false };
    this.priorityError = "";
    this.colorError = "";
  }
  validateColor() {
    if (!this.formPriority.color?.trim()) {
      this.colorError = "Color is required";
    } else {
      this.colorError = "";
    }
  }
  onColorInput() {
    if (this.colorError) {
      this.colorError = "";
    }
  }
  validatePriorityUniqueness() {
    this.priorityError = "";
    const priorityValue = this.formPriority.priority?.trim();
    if (!priorityValue) {
      return;
    }
    const currentId = Number(this.formPriority.id);
    const existingPriority = this.priorities.find((p) => {
      const priorityId = Number(p.id);
      return p.priority?.toLowerCase() === priorityValue.toLowerCase() && priorityId !== currentId && !p.is_deleted;
    });
    if (existingPriority) {
      this.priorityError = "Priority name already exists";
    }
  }
  onPriorityBlur() {
    this.validatePriorityUniqueness();
  }
  onPriorityInput() {
    if (this.priorityError) {
      this.validatePriorityUniqueness();
    }
  }
  savePriority() {
    if (!this.formPriority.priority?.trim()) {
      this.priorityError = "Priority name is required";
    } else {
      this.validatePriorityUniqueness();
    }
    if (!this.formPriority.color?.trim()) {
      this.colorError = "Color is required";
    } else {
      this.colorError = "";
    }
    if (this.priorityError || this.colorError) {
      return;
    }
    if (this.formPriority.is_default) {
      const otherDefaultPriorities = this.priorities.filter((p) => p.id !== this.formPriority.id && p.is_default === true && !p.is_deleted);
    }
    this.priorityService.addUpdatePriority(this.formPriority).subscribe({
      next: (data) => {
        this.toaster.success(`Priority "${data.priority}" has been ${this.isEditMode ? "updated" : "created"} successfully`);
        this.closeModal();
        this.loadPriorities();
      },
      error: (error) => {
        const errorMessage = error.error?.message || error.message || "Unknown error occurred";
        if (errorMessage.toLowerCase().includes("priority name already exists")) {
          this.priorityError = "Priority name already exists";
          return;
        }
        this.toaster.error(`Operation Failed: ${errorMessage}`);
      }
    });
  }
  onDefaultChange() {
    if (this.formPriority.is_default) {
      const currentDefault = this.priorities.find((p) => p.id !== this.formPriority.id && p.is_default === true && !p.is_deleted);
      if (currentDefault) {
      }
    }
  }
  deletePriority(p) {
    this.confirmation.confirm({
      title: "Delete Priority",
      message: `Are you sure you want to delete "${p.priority}"?`,
      confirmText: "Delete",
      cancelText: "Cancel",
      confirmClass: "danger"
    }).then((confirmed) => {
      if (confirmed) {
        this.priorityService.deletePriority(p.id, false).subscribe({
          next: () => {
            this.toaster.success(`Priority "${p.priority}" has been deleted successfully`);
            this.loadPriorities();
          },
          error: (error) => {
            this.toaster.error(`Delete Failed: ${error.error?.message || error.message || "Unknown error occurred"}`);
          }
        });
      }
    });
  }
  toggleActive(row) {
    if (this.isToggleInProgress)
      return;
    const p = row;
    this.isToggleInProgress = true;
    const updated = {
      id: p.id,
      priority: p.priority,
      color: p.color,
      is_active: !p.is_active,
      is_default: p.is_default ?? false
    };
    this.priorityService.addUpdatePriority(updated).subscribe({
      next: () => {
        this.toaster.success(`Priority "${p.priority}" has been ${updated.is_active ? "activated" : "deactivated"}`);
        this.loadPriorities();
        this.isToggleInProgress = false;
      },
      error: (error) => {
        this.toaster.error(`Update Failed: ${error.error?.message || error.message || "Unknown error occurred"}`);
        this.isToggleInProgress = false;
      }
    });
  }
  onTableActionClick(event) {
    const p = event.row;
    switch (event.action) {
      case "edit":
        this.openEditModal(p);
        break;
      case "delete":
        this.deletePriority(p);
        break;
    }
  }
  onBooleanToggle(event) {
    const p = event.row;
    const column = event.column;
    const newValue = event.value;
    if (column === "is_active") {
      this.toggleActive(p);
    } else if (column === "is_default") {
      this.toggleDefault(p, newValue);
    }
  }
  toggleDefault(p, newValue) {
    if (this.isToggleInProgress)
      return;
    this.isToggleInProgress = true;
    const updated = {
      id: p.id,
      priority: p.priority,
      color: p.color,
      is_active: p.is_active ?? true,
      is_default: newValue
    };
    this.priorityService.addUpdatePriority(updated).subscribe({
      next: () => {
        this.toaster.success(`Priority "${p.priority}" has been ${newValue ? "set as default" : "unset as default"}`);
        this.loadPriorities();
        this.isToggleInProgress = false;
      },
      error: (error) => {
        this.toaster.error(`Update Failed: ${error.error?.message || error.message || "Unknown error occurred"}`);
        this.isToggleInProgress = false;
      }
    });
  }
  static \u0275fac = function PriorityMasterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PriorityMasterComponent)(\u0275\u0275directiveInject(PriorityMasterService), \u0275\u0275directiveInject(ToasterService), \u0275\u0275directiveInject(ConfirmationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PriorityMasterComponent, selectors: [["app-priority-master"]], decls: 5, vars: 8, consts: [[1, "category-master-container"], ["class", "master-toolbar", 4, "ngIf"], [1, "table-view"], ["emptyMessage", "No priorities available", "searchPlaceholder", "Search priorities...", 3, "actionClick", "booleanToggle", "columns", "data", "config", "actions", "loading", "externalSearch"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "master-toolbar"], [1, "master-search-wrapper"], ["type", "text", "placeholder", "Search priorities...", 1, "master-search-input", 3, "ngModelChange", "ngModel"], ["class", "master-search-clear", "title", "Clear search", 3, "click", 4, "ngIf"], ["aria-label", "Add new priority", "title", "Create a new priority", 1, "add-action-btn", 3, "click"], [1, "fas", "fa-plus", "icon"], [1, "label"], ["title", "Clear search", 1, "master-search-clear", 3, "click"], [1, "fas", "fa-times"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], ["title", "Close", 1, "btn-icon", 3, "click"], [1, "modal-body"], [1, "form-group"], ["for", "priorityName"], [1, "required"], ["type", "text", "id", "priorityName", "placeholder", "e.g., High", "maxlength", "100", 1, "form-input", 3, "ngModelChange", "blur", "input", "ngModel"], ["class", "error-message", 4, "ngIf"], ["for", "priorityColor"], [2, "display", "flex", "gap", "8px", "align-items", "center"], ["type", "color", 2, "width", "42px", "height", "38px", "background", "transparent", "border", "1px solid #2a2f36", "border-radius", "6px", "padding", "0", 3, "ngModelChange", "ngModel"], ["type", "text", "id", "priorityColor", "placeholder", "#DC2626", "maxlength", "7", 1, "form-input", 3, "ngModelChange", "blur", "input", "ngModel"], [1, "form-group", "form-group-checkbox"], ["for", "priorityDefault", 1, "form-label-inline"], [1, "checkbox-label"], ["type", "checkbox", "id", "priorityDefault", 1, "checkbox-input", 3, "ngModelChange", "change", "ngModel"], [1, "checkbox-toggle"], [1, "toggle-indicator"], ["class", "form-hint", 4, "ngIf"], ["for", "priorityActive", 1, "form-label-inline"], ["type", "checkbox", "id", "priorityActive", 1, "checkbox-input", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], [1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-primary", 3, "click"], [1, "error-message"], [1, "form-hint"]], template: function PriorityMasterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, PriorityMasterComponent_div_1_Template, 8, 3, "div", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "app-data-table", 3);
      \u0275\u0275listener("actionClick", function PriorityMasterComponent_Template_app_data_table_actionClick_3_listener($event) {
        return ctx.onTableActionClick($event);
      })("booleanToggle", function PriorityMasterComponent_Template_app_data_table_booleanToggle_3_listener($event) {
        return ctx.onBooleanToggle($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(4, PriorityMasterComponent_div_4_Template, 44, 14, "div", 4);
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
  }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, MaxLengthValidator, NgModel, DataTableComponent], styles: [`

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
/*# sourceMappingURL=priority-master.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PriorityMasterComponent, [{
    type: Component,
    args: [{ selector: "app-priority-master", standalone: true, imports: [CommonModule, FormsModule, DataTableComponent], template: `<div class="category-master-container">\r
  <!-- Search and Add Button Row -->\r
  <div class="master-toolbar" *ngIf="tableConfig.searchable">\r
    <div class="master-search-wrapper">\r
      <input \r
        type="text" \r
        class="master-search-input" \r
        [(ngModel)]="searchQuery"\r
        (ngModelChange)="onSearchChange()"\r
        placeholder="Search priorities..."\r
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
      aria-label="Add new priority"\r
      title="Create a new priority"\r
    >\r
      <i class="fas fa-plus icon" [attr.aria-hidden]="true"></i>\r
      <span class="label">Add Priority</span>\r
    </button>\r
  </div>\r
\r
  <div class="table-view">\r
    <app-data-table\r
      [columns]="tableColumns"\r
      [data]="getTableData()"\r
      [config]="tableConfig"\r
      [actions]="tableActions"\r
      [loading]="false"\r
      emptyMessage="No priorities available"\r
      searchPlaceholder="Search priorities..."\r
      [externalSearch]="searchQuery"\r
      (actionClick)="onTableActionClick($event)"\r
      (booleanToggle)="onBooleanToggle($event)"\r
    ></app-data-table>\r
  </div>\r
\r
  <div class="modal-overlay" *ngIf="showAddEditModal" (click)="closeModal()">\r
    <div class="modal-content" (click)="$event.stopPropagation()">\r
      <div class="modal-header">\r
        <h3>{{ isEditMode ? 'Edit Priority' : 'Add New Priority' }}</h3>\r
        <button class="btn-icon" (click)="closeModal()" title="Close">\r
          <i class="fas fa-times"></i>\r
        </button>\r
      </div>\r
\r
      <div class="modal-body">\r
        <div class="form-group">\r
          <label for="priorityName">Priority Name <span class="required">*</span></label>\r
          <input \r
            type="text" \r
            id="priorityName"\r
            class="form-input" \r
            [class.error]="priorityError"\r
            [(ngModel)]="formPriority.priority"\r
            (blur)="onPriorityBlur()"\r
            (input)="onPriorityInput()"\r
            placeholder="e.g., High"\r
            maxlength="100"\r
          />\r
          <div class="error-message" *ngIf="priorityError">{{ priorityError }}</div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label for="priorityColor">Color <span class="required">*</span></label>\r
          <div style="display:flex; gap:8px; align-items:center;">\r
            <input type="color" [(ngModel)]="formPriority.color" (ngModelChange)="onColorInput()" style="width:42px; height:38px; background:transparent; border:1px solid #2a2f36; border-radius:6px; padding:0;"/>\r
            <input \r
              type="text" \r
              id="priorityColor"\r
              class="form-input" \r
              [class.error]="colorError"\r
              [(ngModel)]="formPriority.color"\r
              (blur)="validateColor()"\r
              (input)="onColorInput()"\r
              placeholder="#DC2626"\r
              maxlength="7"\r
            />\r
          </div>\r
          <div class="error-message" *ngIf="colorError">{{ colorError }}</div>\r
        </div>\r
\r
        <div class="form-group form-group-checkbox">\r
          <label for="priorityDefault" class="form-label-inline">Default</label>\r
          <label class="checkbox-label">\r
            <input \r
              type="checkbox" \r
              id="priorityDefault"\r
              [(ngModel)]="formPriority.is_default"\r
              (change)="onDefaultChange()"\r
              class="checkbox-input"\r
            />\r
            <span class="checkbox-toggle">\r
              <span class="toggle-indicator"></span>\r
            </span>\r
          </label>\r
          <small class="form-hint" *ngIf="formPriority.is_default">Only one priority can be set as default. Setting this as default will unset any other default priority.</small>\r
        </div>\r
\r
        <div class="form-group form-group-checkbox">\r
          <label for="priorityActive" class="form-label-inline">Active</label>\r
          <label class="checkbox-label">\r
            <input \r
              type="checkbox" \r
              id="priorityActive"\r
              [(ngModel)]="formPriority.is_active"\r
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
        <button class="btn btn-primary" (click)="savePriority()">\r
          {{ isEditMode ? 'Update' : 'Create' }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
\r
`, styles: [`/* src/app/components/priority-master/priority-master.scss */
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
/*# sourceMappingURL=priority-master.css.map */
`] }]
  }], () => [{ type: PriorityMasterService }, { type: ToasterService }, { type: ConfirmationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PriorityMasterComponent, { className: "PriorityMasterComponent", filePath: "src/app/components/priority-master/priority-master.ts", lineNumber: 16 });
})();
export {
  PriorityMasterComponent
};
//# sourceMappingURL=chunk-RUVV3PUX.js.map
