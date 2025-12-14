import {
  PermissionsService
} from "./chunk-RCAS3JZU.js";
import {
  AuthService
} from "./chunk-HVWUQA7X.js";
import "./chunk-XMNU56NZ.js";
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
  Directive,
  FormsModule,
  Input,
  MaxLengthValidator,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  Subject,
  TemplateRef,
  ViewContainerRef,
  setClassMetadata,
  takeUntil,
  ɵNgSelectMultipleOption,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
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

// src/app/directives/has-permission.directive.ts
var HasPermissionDirective = class _HasPermissionDirective {
  templateRef;
  viewContainer;
  authService;
  appHasPermission;
  appHasPermissionMode = "any";
  // 'all' = user must have ALL permissions, 'any' = user must have ANY permission
  destroy$ = new Subject();
  hasView = false;
  constructor(templateRef, viewContainer, authService) {
    this.templateRef = templateRef;
    this.viewContainer = viewContainer;
    this.authService = authService;
  }
  ngOnInit() {
    this.authService.currentUser$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.updateView();
    });
    this.updateView();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  updateView() {
    const hasPermission = this.checkPermission();
    if (hasPermission && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (!hasPermission && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
  checkPermission() {
    if (!this.appHasPermission) {
      return true;
    }
    const permissions = Array.isArray(this.appHasPermission) ? this.appHasPermission : [this.appHasPermission];
    if (permissions.length === 0) {
      return true;
    }
    if (this.appHasPermissionMode === "all") {
      return permissions.every((permission) => this.authService.hasPermission(permission));
    } else {
      return permissions.some((permission) => this.authService.hasPermission(permission));
    }
  }
  static \u0275fac = function HasPermissionDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HasPermissionDirective)(\u0275\u0275directiveInject(TemplateRef), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _HasPermissionDirective, selectors: [["", "appHasPermission", ""]], inputs: { appHasPermission: "appHasPermission", appHasPermissionMode: "appHasPermissionMode" } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HasPermissionDirective, [{
    type: Directive,
    args: [{
      selector: "[appHasPermission]",
      standalone: true
    }]
  }], () => [{ type: TemplateRef }, { type: ViewContainerRef }, { type: AuthService }], { appHasPermission: [{
    type: Input
  }], appHasPermissionMode: [{
    type: Input
  }] });
})();

// src/app/components/permission-management/permission-management.ts
function PermissionManagementComponent_div_1_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function PermissionManagementComponent_div_1_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.searchQuery = "";
      return \u0275\u0275resetView(ctx_r1.onSearchChange());
    });
    \u0275\u0275element(1, "i", 18);
    \u0275\u0275elementEnd();
  }
}
function PermissionManagementComponent_div_1_option_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const module_r4 = ctx.$implicit;
    \u0275\u0275property("value", module_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(module_r4);
  }
}
function PermissionManagementComponent_div_1_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function PermissionManagementComponent_div_1_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openAddModal());
    });
    \u0275\u0275element(1, "i", 21);
    \u0275\u0275elementStart(2, "span", 22);
    \u0275\u0275text(3, "Add Permission");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function PermissionManagementComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "input", 7);
    \u0275\u0275twoWayListener("ngModelChange", function PermissionManagementComponent_div_1_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchQuery, $event) || (ctx_r1.searchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function PermissionManagementComponent_div_1_Template_input_ngModelChange_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearchChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, PermissionManagementComponent_div_1_button_3_Template, 2, 0, "button", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 9)(5, "div", 10);
    \u0275\u0275element(6, "i", 11);
    \u0275\u0275elementStart(7, "select", 12);
    \u0275\u0275twoWayListener("ngModelChange", function PermissionManagementComponent_div_1_Template_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedModule, $event) || (ctx_r1.selectedModule = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function PermissionManagementComponent_div_1_Template_select_ngModelChange_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onModuleChange());
    });
    \u0275\u0275elementStart(8, "option", 13);
    \u0275\u0275text(9, "All Modules");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, PermissionManagementComponent_div_1_option_10_Template, 2, 2, "option", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "i", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, PermissionManagementComponent_div_1_button_12_Template, 4, 1, "button", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchQuery);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.searchQuery);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("has-selection", ctx_r1.selectedModule !== "all");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedModule);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.modules);
    \u0275\u0275advance(2);
    \u0275\u0275property("appHasPermission", "permissions.manage");
  }
}
function PermissionManagementComponent_div_4_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.nameError);
  }
}
function PermissionManagementComponent_div_4_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.codeError);
  }
}
function PermissionManagementComponent_div_4_option_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "option", 19);
  }
  if (rf & 2) {
    const module_r7 = ctx.$implicit;
    \u0275\u0275property("value", module_r7);
  }
}
function PermissionManagementComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275listener("click", function PermissionManagementComponent_div_4_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 24);
    \u0275\u0275listener("click", function PermissionManagementComponent_div_4_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 25)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 26);
    \u0275\u0275listener("click", function PermissionManagementComponent_div_4_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275element(6, "i", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 27)(8, "div", 28)(9, "label", 29);
    \u0275\u0275text(10, "Permission Name ");
    \u0275\u0275elementStart(11, "span", 30);
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function PermissionManagementComponent_div_4_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formPermission.name, $event) || (ctx_r1.formPermission.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, PermissionManagementComponent_div_4_div_14_Template, 2, 1, "div", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 28)(16, "label", 33);
    \u0275\u0275text(17, "Code ");
    \u0275\u0275elementStart(18, "span", 30);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function PermissionManagementComponent_div_4_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formPermission.code, $event) || (ctx_r1.formPermission.code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, PermissionManagementComponent_div_4_div_21_Template, 2, 1, "div", 32);
    \u0275\u0275elementStart(22, "div", 35);
    \u0275\u0275text(23, "Format: module.action (e.g., users.view, tasks.create)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 28)(25, "label", 36);
    \u0275\u0275text(26, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "textarea", 37);
    \u0275\u0275twoWayListener("ngModelChange", function PermissionManagementComponent_div_4_Template_textarea_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formPermission.description, $event) || (ctx_r1.formPermission.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 28)(29, "label", 38);
    \u0275\u0275text(30, "Module");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function PermissionManagementComponent_div_4_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formPermission.module, $event) || (ctx_r1.formPermission.module = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "datalist", 40);
    \u0275\u0275template(33, PermissionManagementComponent_div_4_option_33_Template, 1, 1, "option", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 41)(35, "label", 42);
    \u0275\u0275text(36, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "label", 43)(38, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function PermissionManagementComponent_div_4_Template_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formPermission.is_active, $event) || (ctx_r1.formPermission.is_active = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 45);
    \u0275\u0275element(40, "span", 46);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(41, "div", 47)(42, "button", 48);
    \u0275\u0275listener("click", function PermissionManagementComponent_div_4_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(43, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "button", 49);
    \u0275\u0275listener("click", function PermissionManagementComponent_div_4_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.savePermission());
    });
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.isEditMode ? "Edit Permission" : "Add New Permission");
    \u0275\u0275advance(9);
    \u0275\u0275classProp("error", ctx_r1.nameError);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formPermission.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.nameError);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("error", ctx_r1.codeError);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formPermission.code);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.codeError);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formPermission.description);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formPermission.module);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.modules);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formPermission.is_active);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditMode ? "Update" : "Create", " ");
  }
}
var PermissionManagementComponent = class _PermissionManagementComponent {
  permissionsService;
  toaster;
  confirmation;
  authService;
  permissions = [];
  filteredPermissions = [];
  modules = [];
  selectedModule = "all";
  searchQuery = "";
  showAddEditModal = false;
  isEditMode = false;
  selectedPermission = null;
  formPermission = {
    name: "",
    code: "",
    description: "",
    module: "",
    is_active: true
  };
  nameError = "";
  codeError = "";
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
      key: "module",
      title: "Module",
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
      key: "name",
      title: "Permission Name",
      sortable: true,
      filterable: true,
      resizable: true,
      width: "200px",
      minWidth: "150px",
      maxWidth: "300px",
      align: "left",
      type: "text"
    },
    {
      key: "code",
      title: "Code",
      sortable: true,
      filterable: true,
      resizable: true,
      width: "200px",
      minWidth: "150px",
      maxWidth: "300px",
      align: "left",
      type: "text"
    },
    {
      key: "description",
      title: "Description",
      sortable: true,
      filterable: true,
      resizable: true,
      width: "300px",
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
      type: "boolean"
    },
    {
      key: "actions",
      title: "Actions",
      sortable: false,
      filterable: false,
      resizable: true,
      width: "150px",
      minWidth: "120px",
      maxWidth: "180px",
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
    pageSize: 10,
    pageSizeOptions: [5, 10, 25, 50],
    exportable: false,
    searchable: true,
    virtualScrolling: false,
    stickyHeader: true,
    stickyColumns: 0
  };
  tableActions = [
    {
      label: "Active/Deactivate",
      icon: "\u{1F504}",
      action: "toggle-active",
      color: "#10b981"
    },
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
  constructor(permissionsService, toaster, confirmation, authService) {
    this.permissionsService = permissionsService;
    this.toaster = toaster;
    this.confirmation = confirmation;
    this.authService = authService;
  }
  ngOnInit() {
    this.loadPermissions();
    this.loadModules();
  }
  loadPermissions() {
    this.permissionsService.getAllPermissions().subscribe({
      next: (data) => {
        this.permissions = data;
        this.applyFilters();
      },
      error: (error) => {
        this.toaster.error(`Failed to load permissions: ${error.message || "Unknown error"}`);
      }
    });
  }
  loadModules() {
    this.permissionsService.getUniqueModules().subscribe({
      next: (data) => {
        this.modules = data;
      },
      error: (error) => {
        this.toaster.error(`Failed to load modules: ${error.message || "Unknown error"}`);
      }
    });
  }
  applyFilters() {
    let filtered = [...this.permissions];
    if (this.selectedModule !== "all") {
      filtered = filtered.filter((p) => p.module === this.selectedModule);
    }
    this.filteredPermissions = filtered;
  }
  onModuleChange() {
    this.applyFilters();
  }
  onSearchChange() {
  }
  getTableData() {
    return this.filteredPermissions.map((permission) => {
      return {
        id: permission.id.toString(),
        module: permission.module || "Other",
        name: permission.name,
        code: permission.code,
        description: permission.description || "",
        is_active: permission.is_active
      };
    });
  }
  openAddModal() {
    this.isEditMode = false;
    this.formPermission = {
      name: "",
      code: "",
      description: "",
      module: "",
      is_active: true
    };
    this.selectedPermission = null;
    this.nameError = "";
    this.codeError = "";
    this.showAddEditModal = true;
  }
  openEditModal(permission) {
    const perm = permission;
    this.isEditMode = true;
    this.selectedPermission = perm;
    this.formPermission = {
      name: perm.name,
      code: perm.code,
      description: perm.description || "",
      module: perm.module || "",
      is_active: perm.is_active
    };
    this.nameError = "";
    this.codeError = "";
    this.showAddEditModal = true;
  }
  validateForm() {
    this.nameError = "";
    this.codeError = "";
    if (!this.formPermission.name || !this.formPermission.name.trim()) {
      this.nameError = "Permission name is required";
      return false;
    }
    if (!this.formPermission.code || !this.formPermission.code.trim()) {
      this.codeError = "Permission code is required";
      return false;
    }
    if (!/^[a-z]+\.[a-z]+$/.test(this.formPermission.code)) {
      this.codeError = "Code must be in format: module.action (e.g., users.view)";
      return false;
    }
    return true;
  }
  savePermission() {
    if (!this.validateForm()) {
      return;
    }
    if (this.isEditMode && this.selectedPermission) {
      const updateRequest = {
        id: this.selectedPermission.id,
        name: this.formPermission.name,
        code: this.formPermission.code,
        description: this.formPermission.description || void 0,
        module: this.formPermission.module || void 0,
        is_active: this.formPermission.is_active
      };
      this.permissionsService.updatePermission(updateRequest).subscribe({
        next: () => {
          this.toaster.success("Permission updated successfully");
          this.closeModal();
          this.loadPermissions();
          this.loadModules();
        },
        error: (error) => {
          this.toaster.error(error.message || "Failed to update permission");
        }
      });
    } else {
      this.permissionsService.createPermission(this.formPermission).subscribe({
        next: () => {
          this.toaster.success("Permission created successfully");
          this.closeModal();
          this.loadPermissions();
          this.loadModules();
        },
        error: (error) => {
          this.toaster.error(error.message || "Failed to create permission");
        }
      });
    }
  }
  closeModal() {
    this.showAddEditModal = false;
    this.isEditMode = false;
    this.selectedPermission = null;
    this.nameError = "";
    this.codeError = "";
  }
  onTableRowClick(data) {
  }
  onTableActionClick(event) {
    const permission = this.permissions.find((p) => p.id.toString() === event.row.id);
    if (!permission)
      return;
    switch (event.action) {
      case "edit":
        this.openEditModal(permission);
        break;
      case "delete":
        this.deletePermission(permission);
        break;
      case "toggle-active":
        this.togglePermissionStatus(permission);
        break;
    }
  }
  togglePermissionStatus(permission) {
    const action = permission.is_active ? "deactivate" : "activate";
    this.confirmation.confirm({
      title: `${action.charAt(0).toUpperCase() + action.slice(1)} Permission`,
      message: `Are you sure you want to ${action} ${permission.name}?`,
      confirmText: action.charAt(0).toUpperCase() + action.slice(1),
      cancelText: "Cancel"
    }).then((confirmed) => {
      if (confirmed) {
        const updateRequest = {
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
  deletePermission(permission) {
    this.confirmation.confirm({
      title: "Delete Permission",
      message: `Are you sure you want to delete ${permission.name} (${permission.code})? This action cannot be undone.`,
      confirmText: "Delete",
      cancelText: "Cancel",
      confirmClass: "danger"
    }).then((confirmed) => {
      if (confirmed) {
        this.permissionsService.deletePermission(permission.id, false).subscribe({
          next: () => {
            this.toaster.success("Permission deleted successfully");
            this.loadPermissions();
            this.loadModules();
          },
          error: (error) => {
            this.toaster.error(error.message || "Failed to delete permission");
          }
        });
      }
    });
  }
  onTableSortChange(event) {
  }
  onTableFilterChange(event) {
  }
  onTablePageChange(event) {
  }
  static \u0275fac = function PermissionManagementComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PermissionManagementComponent)(\u0275\u0275directiveInject(PermissionsService), \u0275\u0275directiveInject(ToasterService), \u0275\u0275directiveInject(ConfirmationService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PermissionManagementComponent, selectors: [["app-permission-management"]], decls: 5, vars: 8, consts: [[1, "permission-management-container"], ["class", "master-toolbar", 4, "ngIf"], [1, "table-view"], ["emptyMessage", "No permissions available", "searchPlaceholder", "Search permissions...", 3, "rowClick", "actionClick", "sortChange", "filterChange", "pageChange", "columns", "data", "config", "actions", "loading", "externalSearch"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "master-toolbar"], [1, "master-search-wrapper"], ["type", "text", "placeholder", "Search permissions...", 1, "master-search-input", 3, "ngModelChange", "ngModel"], ["class", "master-search-clear", "title", "Clear search", 3, "click", 4, "ngIf"], [1, "toolbar-right"], [1, "module-filter-wrapper"], [1, "fas", "fa-filter", "module-filter-icon"], ["id", "moduleFilter", 1, "module-filter-select", 3, "ngModelChange", "ngModel"], ["value", "all"], [3, "value", 4, "ngFor", "ngForOf"], [1, "fas", "fa-chevron-down", "module-filter-arrow"], ["class", "add-action-btn", "aria-label", "Add new permission", "title", "Create a new permission", 3, "click", 4, "appHasPermission"], ["title", "Clear search", 1, "master-search-clear", 3, "click"], [1, "fas", "fa-times"], [3, "value"], ["aria-label", "Add new permission", "title", "Create a new permission", 1, "add-action-btn", 3, "click"], [1, "fas", "fa-plus", "icon"], [1, "label"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], ["title", "Close", 1, "btn-icon", 3, "click"], [1, "modal-body"], [1, "form-group"], ["for", "permissionName"], [1, "required"], ["type", "text", "id", "permissionName", "placeholder", "e.g., View Users", "maxlength", "100", 1, "form-input", 3, "ngModelChange", "ngModel"], ["class", "error-message", 4, "ngIf"], ["for", "permissionCode"], ["type", "text", "id", "permissionCode", "placeholder", "e.g., users.view", "maxlength", "100", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "form-hint"], ["for", "permissionDescription"], ["id", "permissionDescription", "placeholder", "Permission description...", "rows", "3", "maxlength", "500", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "permissionModule"], ["type", "text", "id", "permissionModule", "placeholder", "e.g., Users, Tasks, Budget", "maxlength", "100", "list", "modules-list", 1, "form-input", 3, "ngModelChange", "ngModel"], ["id", "modules-list"], [1, "form-group", "form-group-checkbox"], ["for", "permissionActive", 1, "form-label-inline"], [1, "checkbox-label"], ["type", "checkbox", "id", "permissionActive", 1, "checkbox-input", 3, "ngModelChange", "ngModel"], [1, "checkbox-toggle"], [1, "toggle-indicator"], [1, "modal-footer"], [1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-primary", 3, "click"], [1, "error-message"]], template: function PermissionManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, PermissionManagementComponent_div_1_Template, 13, 7, "div", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "app-data-table", 3);
      \u0275\u0275listener("rowClick", function PermissionManagementComponent_Template_app_data_table_rowClick_3_listener($event) {
        return ctx.onTableRowClick($event);
      })("actionClick", function PermissionManagementComponent_Template_app_data_table_actionClick_3_listener($event) {
        return ctx.onTableActionClick($event);
      })("sortChange", function PermissionManagementComponent_Template_app_data_table_sortChange_3_listener($event) {
        return ctx.onTableSortChange($event);
      })("filterChange", function PermissionManagementComponent_Template_app_data_table_filterChange_3_listener($event) {
        return ctx.onTableFilterChange($event);
      })("pageChange", function PermissionManagementComponent_Template_app_data_table_pageChange_3_listener($event) {
        return ctx.onTablePageChange($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(4, PermissionManagementComponent_div_4_Template, 46, 14, "div", 4);
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
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, MaxLengthValidator, NgModel, DataTableComponent, HasPermissionDirective], styles: ["\n\n[_ngcontent-%COMP%]:root {\n  --primary-bg: #1a1a1a;\n  --secondary-bg: #2d2d2d;\n  --tertiary-bg: #3a3a3a;\n  --surface-bg: #2a2a2a;\n  --primary-accent: #4a9eff;\n  --secondary-accent: #7c3aed;\n  --success-color: #10b981;\n  --warning-color: #f59e0b;\n  --error-color: #ef4444;\n  --text-primary: #ffffff;\n  --text-secondary: #e5e5e5;\n  --text-muted: #a3a3a3;\n  --text-disabled: #6b7280;\n  --border-primary: #4a4a4a;\n  --border-secondary: #3a3a3a;\n  --border-accent: #5a5a5a;\n  --shadow-light: rgba(0, 0, 0, 0.1);\n  --shadow-medium: rgba(0, 0, 0, 0.2);\n  --shadow-heavy: rgba(0, 0, 0, 0.3);\n  --hover-bg: #3a3a3a;\n  --hover-accent: #5bb0ff;\n  --active-bg: #4a4a4a;\n  --active-accent: #3a8fdf;\n}\n.permission-management-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 16px;\n  height: calc(100vh - 66px);\n  max-height: calc(100vh - 66px);\n  overflow: hidden;\n  box-sizing: border-box;\n  background: #0f1115;\n  color: #e6e6e6;\n}\n.master-toolbar[_ngcontent-%COMP%]   .toolbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.module-filter-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  min-width: 200px;\n  background: #1f2228;\n  border: 1px solid #3a3f47;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n}\n.module-filter-wrapper[_ngcontent-%COMP%]:hover {\n  border-color: #4a5568;\n}\n.module-filter-wrapper[_ngcontent-%COMP%]:focus-within {\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15);\n}\n.module-filter-wrapper[_ngcontent-%COMP%]   .module-filter-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  color: #9aa0a6;\n  font-size: 14px;\n  pointer-events: none;\n  z-index: 1;\n  transition: color 0.2s ease;\n}\n.module-filter-wrapper[_ngcontent-%COMP%]   .module-filter-select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 40px 10px 38px;\n  background: transparent;\n  border: none;\n  border-radius: 8px;\n  color: #e6e6e6;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  outline: none;\n  transition: all 0.2s ease;\n}\n.module-filter-wrapper[_ngcontent-%COMP%]   .module-filter-select[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n}\n.module-filter-wrapper[_ngcontent-%COMP%]   .module-filter-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.module-filter-wrapper[_ngcontent-%COMP%]   .module-filter-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: #1f2228;\n  color: #e6e6e6;\n  padding: 10px;\n}\n.module-filter-wrapper[_ngcontent-%COMP%]   .module-filter-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]:hover {\n  background: #2a2f36;\n}\n.module-filter-wrapper[_ngcontent-%COMP%]   .module-filter-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  color: #9aa0a6;\n  font-size: 12px;\n  pointer-events: none;\n  z-index: 1;\n  transition: transform 0.2s ease, color 0.2s ease;\n}\n.module-filter-wrapper[_ngcontent-%COMP%]:hover   .module-filter-icon[_ngcontent-%COMP%], \n.module-filter-wrapper[_ngcontent-%COMP%]:focus-within   .module-filter-icon[_ngcontent-%COMP%] {\n  color: #3b82f6;\n}\n.module-filter-wrapper[_ngcontent-%COMP%]:hover   .module-filter-arrow[_ngcontent-%COMP%], \n.module-filter-wrapper[_ngcontent-%COMP%]:focus-within   .module-filter-arrow[_ngcontent-%COMP%] {\n  color: #3b82f6;\n}\n.module-filter-wrapper[_ngcontent-%COMP%]:focus-within   .module-filter-arrow[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.module-filter-wrapper.has-selection[_ngcontent-%COMP%] {\n  border-color: #3b82f6;\n}\n.module-filter-wrapper.has-selection[_ngcontent-%COMP%]   .module-filter-icon[_ngcontent-%COMP%] {\n  color: #3b82f6;\n}\n.form-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9aa0a6;\n  margin-top: 4px;\n}\n[_ngcontent-%COMP%]:root {\n  --primary-bg: #1a1a1a;\n  --secondary-bg: #2d2d2d;\n  --tertiary-bg: #3a3a3a;\n  --surface-bg: #2a2a2a;\n  --primary-accent: #4a9eff;\n  --secondary-accent: #7c3aed;\n  --success-color: #10b981;\n  --warning-color: #f59e0b;\n  --error-color: #ef4444;\n  --text-primary: #ffffff;\n  --text-secondary: #e5e5e5;\n  --text-muted: #a3a3a3;\n  --text-disabled: #6b7280;\n  --border-primary: #4a4a4a;\n  --border-secondary: #3a3a3a;\n  --border-accent: #5a5a5a;\n  --shadow-light: rgba(0, 0, 0, 0.1);\n  --shadow-medium: rgba(0, 0, 0, 0.2);\n  --shadow-heavy: rgba(0, 0, 0, 0.3);\n  --hover-bg: #3a3a3a;\n  --hover-accent: #5bb0ff;\n  --active-bg: #4a4a4a;\n  --active-accent: #3a8fdf;\n}\n.user-management-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 16px;\n  height: calc(100vh - 66px);\n  max-height: calc(100vh - 66px);\n  overflow: hidden;\n  box-sizing: border-box;\n  background: #0f1115;\n  color: #e6e6e6;\n}\n.user-management-container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n.user-management-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type=checkbox]):not([type=radio]):focus, \n.user-management-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, \n.user-management-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  border-color: #4a5568 !important;\n  box-shadow: 0 0 0 2px rgba(74, 85, 104, 0.15) !important;\n}\n.master-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 16px;\n  flex-shrink: 0;\n}\n.master-toolbar[_ngcontent-%COMP%]   .master-search-wrapper[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 500px;\n}\n.master-search-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.master-search-wrapper[_ngcontent-%COMP%]   .master-search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 40px 8px 10px;\n  background: #1f2228;\n  border: 1px solid #3a3f47;\n  border-radius: 8px;\n  color: #e6e6e6;\n  font-size: 0.95rem;\n  transition: all 0.2s ease;\n}\n.master-search-wrapper[_ngcontent-%COMP%]   .master-search-input[_ngcontent-%COMP%]::placeholder {\n  color: #9aa0a6;\n  opacity: 0.7;\n}\n.master-search-wrapper[_ngcontent-%COMP%]   .master-search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #4a5568;\n  box-shadow: 0 0 0 2px rgba(74, 85, 104, 0.15);\n}\n.master-search-wrapper[_ngcontent-%COMP%]   .master-search-clear[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: transparent;\n  border: none;\n  color: #9aa0a6;\n  cursor: pointer;\n  padding: 6px 10px;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  transition: all 0.2s ease;\n  z-index: 1;\n}\n.master-search-wrapper[_ngcontent-%COMP%]   .master-search-clear[_ngcontent-%COMP%]:hover {\n  color: #e6e6e6;\n  background: rgba(255, 255, 255, 0.15);\n}\n.table-view[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 0;\n  overflow: hidden;\n  background: transparent;\n}\n.table-view[_ngcontent-%COMP%]   app-data-table[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.roles-selection[_ngcontent-%COMP%] {\n  max-height: 200px;\n  overflow-y: auto;\n  padding: 12px;\n  background: #1b1f26;\n  border: 1px solid #2a2f36;\n  border-radius: 6px;\n}\n.roles-selection[_ngcontent-%COMP%]   .role-checkbox-item[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.roles-selection[_ngcontent-%COMP%]   .role-checkbox-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.roles-selection[_ngcontent-%COMP%]   .role-checkbox-item[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  cursor: pointer;\n}\n.roles-selection[_ngcontent-%COMP%]   .role-checkbox-item[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   .role-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #e6e6e6;\n}\n.roles-selection[_ngcontent-%COMP%]   .role-checkbox-item[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   .role-description[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9aa0a6;\n  margin-left: auto;\n}\n.roles-selection[_ngcontent-%COMP%]   .no-roles-message[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #9aa0a6;\n  padding: 20px;\n  font-size: 14px;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 12px;\n  background: #2c2f36;\n  color: #e6e6e6;\n  border: 1px solid #3a3f47;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 500;\n  transition: all 0.2s ease;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  background: #3a3f47;\n  border-color: #4a5568;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  border-color: #3b82f6;\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n  border-color: #2563eb;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background: #4a5568;\n  border-color: #4a5568;\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #5a6578;\n  border-color: #5a6578;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: 1px solid #3a3f47;\n  border-radius: 6px;\n  color: #e6e6e6;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 14px;\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  background: #2c2f36;\n  border-color: #4a5568;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #e6e6e6;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.form-group[_ngcontent-%COMP%]   label.form-label-inline[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 0;\n  margin-right: 12px;\n  vertical-align: middle;\n}\n.form-group.form-group-checkbox[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0;\n}\n.form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  background: #1b1f26;\n  border: 1px solid #2a2f36;\n  border-radius: 6px;\n  color: #e6e6e6;\n  font-size: 14px;\n  transition: all 0.2s ease;\n  box-sizing: border-box;\n}\n.form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]::placeholder {\n  color: #9aa0a6;\n}\n.form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:focus {\n  border-color: #4a5568;\n  box-shadow: 0 0 0 2px rgba(74, 85, 104, 0.15);\n}\n.form-group[_ngcontent-%COMP%]   .form-input.error[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.form-group[_ngcontent-%COMP%]   .form-input.error[_ngcontent-%COMP%]:focus {\n  border-color: #ef4444;\n  box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.15);\n}\n.form-group[_ngcontent-%COMP%]   textarea.form-input[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.form-group[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 12px;\n  margin-top: 4px;\n  display: block;\n}\n.checkbox-label[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  margin-bottom: 0;\n  vertical-align: middle;\n}\n.checkbox-label[_ngcontent-%COMP%]   .checkbox-input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0;\n  pointer-events: none;\n}\n.checkbox-label[_ngcontent-%COMP%]   .checkbox-toggle[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  width: 48px;\n  height: 26px;\n  background: rgba(30, 30, 30, 0.9);\n  border: 1.5px solid rgba(100, 100, 100, 0.3);\n  border-radius: 13px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  overflow: hidden;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.05);\n  cursor: pointer;\n  flex-shrink: 0;\n}\n.checkbox-label[_ngcontent-%COMP%]   .checkbox-toggle[_ngcontent-%COMP%]   .toggle-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  width: 20px;\n  height: 20px;\n  background: rgba(200, 200, 200, 0.3);\n  border: 1.5px solid rgba(180, 180, 180, 0.4);\n  border-radius: 50%;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.15);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  transform: translateX(0);\n  z-index: 2;\n}\n.checkbox-label[_ngcontent-%COMP%]   .checkbox-input[_ngcontent-%COMP%]:checked    + .checkbox-toggle[_ngcontent-%COMP%] {\n  background: rgba(50, 50, 50, 0.95);\n  border-color: rgba(59, 130, 246, 0.6);\n  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.05);\n}\n.checkbox-label[_ngcontent-%COMP%]   .checkbox-input[_ngcontent-%COMP%]:checked    + .checkbox-toggle[_ngcontent-%COMP%]   .toggle-indicator[_ngcontent-%COMP%] {\n  transform: translateX(22px);\n  background: rgba(59, 130, 246, 0.95);\n  border-color: rgba(59, 130, 246, 0.8);\n  box-shadow: 0 2px 6px rgba(59, 130, 246, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.2);\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.75);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 20px;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: #1a1d24;\n  border: 1px solid #2a2f36;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 600px;\n  max-height: 90vh;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px;\n  border-bottom: 1px solid #2a2f36;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: #e6e6e6;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 20px;\n  border-top: 1px solid #2a2f36;\n}\n/*# sourceMappingURL=permission-management.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PermissionManagementComponent, [{
    type: Component,
    args: [{ selector: "app-permission-management", standalone: true, imports: [CommonModule, FormsModule, DataTableComponent, HasPermissionDirective], template: `<div class="permission-management-container">\r
  <!-- Search and Add Button Row -->\r
  <div class="master-toolbar" *ngIf="tableConfig.searchable">\r
    <div class="master-search-wrapper">\r
      <input \r
        type="text" \r
        class="master-search-input" \r
        [(ngModel)]="searchQuery"\r
        (ngModelChange)="onSearchChange()"\r
        placeholder="Search permissions..."\r
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
    <div class="toolbar-right">\r
      <div class="module-filter-wrapper" [class.has-selection]="selectedModule !== 'all'">\r
        <i class="fas fa-filter module-filter-icon"></i>\r
        <select \r
          class="module-filter-select"\r
          [(ngModel)]="selectedModule"\r
          (ngModelChange)="onModuleChange()"\r
          id="moduleFilter"\r
        >\r
          <option value="all">All Modules</option>\r
          <option *ngFor="let module of modules" [value]="module">{{ module }}</option>\r
        </select>\r
        <i class="fas fa-chevron-down module-filter-arrow"></i>\r
      </div>\r
      <button \r
        *appHasPermission="'permissions.manage'"\r
        class="add-action-btn" \r
        (click)="openAddModal()"\r
        aria-label="Add new permission"\r
        title="Create a new permission"\r
      >\r
        <i class="fas fa-plus icon" [attr.aria-hidden]="true"></i>\r
        <span class="label">Add Permission</span>\r
      </button>\r
    </div>\r
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
      emptyMessage="No permissions available"\r
      searchPlaceholder="Search permissions..."\r
      [externalSearch]="searchQuery"\r
      (rowClick)="onTableRowClick($event)"\r
      (actionClick)="onTableActionClick($event)"\r
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
        <h3>{{ isEditMode ? 'Edit Permission' : 'Add New Permission' }}</h3>\r
        <button class="btn-icon" (click)="closeModal()" title="Close">\r
          <i class="fas fa-times"></i>\r
        </button>\r
      </div>\r
\r
      <div class="modal-body">\r
        <div class="form-group">\r
          <label for="permissionName">Permission Name <span class="required">*</span></label>\r
          <input \r
            type="text" \r
            id="permissionName"\r
            class="form-input" \r
            [class.error]="nameError"\r
            [(ngModel)]="formPermission.name"\r
            placeholder="e.g., View Users"\r
            maxlength="100"\r
          />\r
          <div class="error-message" *ngIf="nameError">{{ nameError }}</div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label for="permissionCode">Code <span class="required">*</span></label>\r
          <input \r
            type="text" \r
            id="permissionCode"\r
            class="form-input" \r
            [class.error]="codeError"\r
            [(ngModel)]="formPermission.code"\r
            placeholder="e.g., users.view"\r
            maxlength="100"\r
          />\r
          <div class="error-message" *ngIf="codeError">{{ codeError }}</div>\r
          <div class="form-hint">Format: module.action (e.g., users.view, tasks.create)</div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label for="permissionDescription">Description</label>\r
          <textarea \r
            id="permissionDescription"\r
            class="form-input" \r
            [(ngModel)]="formPermission.description"\r
            placeholder="Permission description..."\r
            rows="3"\r
            maxlength="500"\r
          ></textarea>\r
        </div>\r
\r
        <div class="form-group">\r
          <label for="permissionModule">Module</label>\r
          <input \r
            type="text" \r
            id="permissionModule"\r
            class="form-input" \r
            [(ngModel)]="formPermission.module"\r
            placeholder="e.g., Users, Tasks, Budget"\r
            maxlength="100"\r
            list="modules-list"\r
          />\r
          <datalist id="modules-list">\r
            <option *ngFor="let module of modules" [value]="module"></option>\r
          </datalist>\r
        </div>\r
\r
        <div class="form-group form-group-checkbox">\r
          <label for="permissionActive" class="form-label-inline">Active</label>\r
          <label class="checkbox-label">\r
            <input \r
              type="checkbox" \r
              id="permissionActive"\r
              [(ngModel)]="formPermission.is_active"\r
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
        <button class="btn btn-primary" (click)="savePermission()">\r
          {{ isEditMode ? 'Update' : 'Create' }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
`, styles: ["/* src/app/components/permission-management/permission-management.scss */\n:root {\n  --primary-bg: #1a1a1a;\n  --secondary-bg: #2d2d2d;\n  --tertiary-bg: #3a3a3a;\n  --surface-bg: #2a2a2a;\n  --primary-accent: #4a9eff;\n  --secondary-accent: #7c3aed;\n  --success-color: #10b981;\n  --warning-color: #f59e0b;\n  --error-color: #ef4444;\n  --text-primary: #ffffff;\n  --text-secondary: #e5e5e5;\n  --text-muted: #a3a3a3;\n  --text-disabled: #6b7280;\n  --border-primary: #4a4a4a;\n  --border-secondary: #3a3a3a;\n  --border-accent: #5a5a5a;\n  --shadow-light: rgba(0, 0, 0, 0.1);\n  --shadow-medium: rgba(0, 0, 0, 0.2);\n  --shadow-heavy: rgba(0, 0, 0, 0.3);\n  --hover-bg: #3a3a3a;\n  --hover-accent: #5bb0ff;\n  --active-bg: #4a4a4a;\n  --active-accent: #3a8fdf;\n}\n.permission-management-container {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 16px;\n  height: calc(100vh - 66px);\n  max-height: calc(100vh - 66px);\n  overflow: hidden;\n  box-sizing: border-box;\n  background: #0f1115;\n  color: #e6e6e6;\n}\n.master-toolbar .toolbar-right {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.module-filter-wrapper {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  min-width: 200px;\n  background: #1f2228;\n  border: 1px solid #3a3f47;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n}\n.module-filter-wrapper:hover {\n  border-color: #4a5568;\n}\n.module-filter-wrapper:focus-within {\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15);\n}\n.module-filter-wrapper .module-filter-icon {\n  position: absolute;\n  left: 12px;\n  color: #9aa0a6;\n  font-size: 14px;\n  pointer-events: none;\n  z-index: 1;\n  transition: color 0.2s ease;\n}\n.module-filter-wrapper .module-filter-select {\n  width: 100%;\n  padding: 10px 40px 10px 38px;\n  background: transparent;\n  border: none;\n  border-radius: 8px;\n  color: #e6e6e6;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  outline: none;\n  transition: all 0.2s ease;\n}\n.module-filter-wrapper .module-filter-select:hover {\n  color: #ffffff;\n}\n.module-filter-wrapper .module-filter-select:focus {\n  outline: none;\n}\n.module-filter-wrapper .module-filter-select option {\n  background: #1f2228;\n  color: #e6e6e6;\n  padding: 10px;\n}\n.module-filter-wrapper .module-filter-select option:hover {\n  background: #2a2f36;\n}\n.module-filter-wrapper .module-filter-arrow {\n  position: absolute;\n  right: 12px;\n  color: #9aa0a6;\n  font-size: 12px;\n  pointer-events: none;\n  z-index: 1;\n  transition: transform 0.2s ease, color 0.2s ease;\n}\n.module-filter-wrapper:hover .module-filter-icon,\n.module-filter-wrapper:focus-within .module-filter-icon {\n  color: #3b82f6;\n}\n.module-filter-wrapper:hover .module-filter-arrow,\n.module-filter-wrapper:focus-within .module-filter-arrow {\n  color: #3b82f6;\n}\n.module-filter-wrapper:focus-within .module-filter-arrow {\n  transform: rotate(180deg);\n}\n.module-filter-wrapper.has-selection {\n  border-color: #3b82f6;\n}\n.module-filter-wrapper.has-selection .module-filter-icon {\n  color: #3b82f6;\n}\n.form-hint {\n  font-size: 12px;\n  color: #9aa0a6;\n  margin-top: 4px;\n}\n:root {\n  --primary-bg: #1a1a1a;\n  --secondary-bg: #2d2d2d;\n  --tertiary-bg: #3a3a3a;\n  --surface-bg: #2a2a2a;\n  --primary-accent: #4a9eff;\n  --secondary-accent: #7c3aed;\n  --success-color: #10b981;\n  --warning-color: #f59e0b;\n  --error-color: #ef4444;\n  --text-primary: #ffffff;\n  --text-secondary: #e5e5e5;\n  --text-muted: #a3a3a3;\n  --text-disabled: #6b7280;\n  --border-primary: #4a4a4a;\n  --border-secondary: #3a3a3a;\n  --border-accent: #5a5a5a;\n  --shadow-light: rgba(0, 0, 0, 0.1);\n  --shadow-medium: rgba(0, 0, 0, 0.2);\n  --shadow-heavy: rgba(0, 0, 0, 0.3);\n  --hover-bg: #3a3a3a;\n  --hover-accent: #5bb0ff;\n  --active-bg: #4a4a4a;\n  --active-accent: #3a8fdf;\n}\n.user-management-container {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 16px;\n  height: calc(100vh - 66px);\n  max-height: calc(100vh - 66px);\n  overflow: hidden;\n  box-sizing: border-box;\n  background: #0f1115;\n  color: #e6e6e6;\n}\n.user-management-container *:focus {\n  outline: none !important;\n}\n.user-management-container input:not([type=checkbox]):not([type=radio]):focus,\n.user-management-container textarea:focus,\n.user-management-container select:focus {\n  outline: none !important;\n  border-color: #4a5568 !important;\n  box-shadow: 0 0 0 2px rgba(74, 85, 104, 0.15) !important;\n}\n.master-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 16px;\n  flex-shrink: 0;\n}\n.master-toolbar .master-search-wrapper {\n  flex: 1;\n  max-width: 500px;\n}\n.master-search-wrapper {\n  position: relative;\n  width: 100%;\n}\n.master-search-wrapper .master-search-input {\n  width: 100%;\n  padding: 8px 40px 8px 10px;\n  background: #1f2228;\n  border: 1px solid #3a3f47;\n  border-radius: 8px;\n  color: #e6e6e6;\n  font-size: 0.95rem;\n  transition: all 0.2s ease;\n}\n.master-search-wrapper .master-search-input::placeholder {\n  color: #9aa0a6;\n  opacity: 0.7;\n}\n.master-search-wrapper .master-search-input:focus {\n  outline: none;\n  border-color: #4a5568;\n  box-shadow: 0 0 0 2px rgba(74, 85, 104, 0.15);\n}\n.master-search-wrapper .master-search-clear {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: transparent;\n  border: none;\n  color: #9aa0a6;\n  cursor: pointer;\n  padding: 6px 10px;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  transition: all 0.2s ease;\n  z-index: 1;\n}\n.master-search-wrapper .master-search-clear:hover {\n  color: #e6e6e6;\n  background: rgba(255, 255, 255, 0.15);\n}\n.table-view {\n  flex: 1;\n  min-height: 0;\n  overflow: hidden;\n  background: transparent;\n}\n.table-view app-data-table {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.roles-selection {\n  max-height: 200px;\n  overflow-y: auto;\n  padding: 12px;\n  background: #1b1f26;\n  border: 1px solid #2a2f36;\n  border-radius: 6px;\n}\n.roles-selection .role-checkbox-item {\n  margin-bottom: 12px;\n}\n.roles-selection .role-checkbox-item:last-child {\n  margin-bottom: 0;\n}\n.roles-selection .role-checkbox-item .checkbox-label {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  cursor: pointer;\n}\n.roles-selection .role-checkbox-item .checkbox-label .role-name {\n  font-weight: 500;\n  color: #e6e6e6;\n}\n.roles-selection .role-checkbox-item .checkbox-label .role-description {\n  font-size: 12px;\n  color: #9aa0a6;\n  margin-left: auto;\n}\n.roles-selection .no-roles-message {\n  text-align: center;\n  color: #9aa0a6;\n  padding: 20px;\n  font-size: 14px;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 12px;\n  background: #2c2f36;\n  color: #e6e6e6;\n  border: 1px solid #3a3f47;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 500;\n  transition: all 0.2s ease;\n}\n.btn:hover {\n  background: #3a3f47;\n  border-color: #4a5568;\n}\n.btn.btn-primary {\n  background: #3b82f6;\n  border-color: #3b82f6;\n  color: white;\n}\n.btn.btn-primary:hover {\n  background: #2563eb;\n  border-color: #2563eb;\n}\n.btn.btn-secondary {\n  background: #4a5568;\n  border-color: #4a5568;\n}\n.btn.btn-secondary:hover {\n  background: #5a6578;\n  border-color: #5a6578;\n}\n.btn-icon {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: 1px solid #3a3f47;\n  border-radius: 6px;\n  color: #e6e6e6;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 14px;\n}\n.btn-icon:hover {\n  background: #2c2f36;\n  border-color: #4a5568;\n}\n.form-group {\n  margin-bottom: 16px;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #e6e6e6;\n}\n.form-group label .required {\n  color: #ef4444;\n}\n.form-group label.form-label-inline {\n  display: inline-block;\n  margin-bottom: 0;\n  margin-right: 12px;\n  vertical-align: middle;\n}\n.form-group.form-group-checkbox {\n  display: flex;\n  align-items: center;\n  gap: 0;\n}\n.form-group .form-input {\n  width: 100%;\n  padding: 8px 12px;\n  background: #1b1f26;\n  border: 1px solid #2a2f36;\n  border-radius: 6px;\n  color: #e6e6e6;\n  font-size: 14px;\n  transition: all 0.2s ease;\n  box-sizing: border-box;\n}\n.form-group .form-input::placeholder {\n  color: #9aa0a6;\n}\n.form-group .form-input:focus {\n  border-color: #4a5568;\n  box-shadow: 0 0 0 2px rgba(74, 85, 104, 0.15);\n}\n.form-group .form-input.error {\n  border-color: #ef4444;\n}\n.form-group .form-input.error:focus {\n  border-color: #ef4444;\n  box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.15);\n}\n.form-group textarea.form-input {\n  resize: vertical;\n  min-height: 80px;\n}\n.form-group .error-message {\n  color: #ef4444;\n  font-size: 12px;\n  margin-top: 4px;\n  display: block;\n}\n.checkbox-label {\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  margin-bottom: 0;\n  vertical-align: middle;\n}\n.checkbox-label .checkbox-input {\n  position: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0;\n  pointer-events: none;\n}\n.checkbox-label .checkbox-toggle {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  width: 48px;\n  height: 26px;\n  background: rgba(30, 30, 30, 0.9);\n  border: 1.5px solid rgba(100, 100, 100, 0.3);\n  border-radius: 13px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  overflow: hidden;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.05);\n  cursor: pointer;\n  flex-shrink: 0;\n}\n.checkbox-label .checkbox-toggle .toggle-indicator {\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  width: 20px;\n  height: 20px;\n  background: rgba(200, 200, 200, 0.3);\n  border: 1.5px solid rgba(180, 180, 180, 0.4);\n  border-radius: 50%;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.15);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  transform: translateX(0);\n  z-index: 2;\n}\n.checkbox-label .checkbox-input:checked + .checkbox-toggle {\n  background: rgba(50, 50, 50, 0.95);\n  border-color: rgba(59, 130, 246, 0.6);\n  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.05);\n}\n.checkbox-label .checkbox-input:checked + .checkbox-toggle .toggle-indicator {\n  transform: translateX(22px);\n  background: rgba(59, 130, 246, 0.95);\n  border-color: rgba(59, 130, 246, 0.8);\n  box-shadow: 0 2px 6px rgba(59, 130, 246, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.2);\n}\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.75);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 20px;\n}\n.modal-content {\n  background: #1a1d24;\n  border: 1px solid #2a2f36;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 600px;\n  max-height: 90vh;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px;\n  border-bottom: 1px solid #2a2f36;\n}\n.modal-header h3 {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: #e6e6e6;\n}\n.modal-body {\n  padding: 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.modal-footer {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 20px;\n  border-top: 1px solid #2a2f36;\n}\n/*# sourceMappingURL=permission-management.css.map */\n"] }]
  }], () => [{ type: PermissionsService }, { type: ToasterService }, { type: ConfirmationService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PermissionManagementComponent, { className: "PermissionManagementComponent", filePath: "src/app/components/permission-management/permission-management.ts", lineNumber: 18 });
})();
export {
  PermissionManagementComponent
};
//# sourceMappingURL=chunk-3RZLP2KI.js.map
