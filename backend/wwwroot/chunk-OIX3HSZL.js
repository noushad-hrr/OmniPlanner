import {
  RolesService
} from "./chunk-VQBCC4JS.js";
import {
  PermissionsService
} from "./chunk-RCAS3JZU.js";
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

// src/app/components/role-management/role-management.ts
function RoleManagementComponent_div_1_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function RoleManagementComponent_div_1_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.searchQuery = "";
      return \u0275\u0275resetView(ctx_r1.onSearchChange());
    });
    \u0275\u0275element(1, "i", 14);
    \u0275\u0275elementEnd();
  }
}
function RoleManagementComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "input", 8);
    \u0275\u0275twoWayListener("ngModelChange", function RoleManagementComponent_div_1_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchQuery, $event) || (ctx_r1.searchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function RoleManagementComponent_div_1_Template_input_ngModelChange_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearchChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, RoleManagementComponent_div_1_button_3_Template, 2, 0, "button", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 10);
    \u0275\u0275listener("click", function RoleManagementComponent_div_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAddModal());
    });
    \u0275\u0275element(5, "i", 11);
    \u0275\u0275elementStart(6, "span", 12);
    \u0275\u0275text(7, "Add Role");
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
function RoleManagementComponent_div_4_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.nameError);
  }
}
function RoleManagementComponent_div_4_div_23_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "label", 32)(2, "input", 42);
    \u0275\u0275listener("change", function RoleManagementComponent_div_4_div_23_div_10_Template_input_change_2_listener() {
      const permission_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.togglePermissionSelection(permission_r8.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 34);
    \u0275\u0275element(4, "span", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 47);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 48);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const permission_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r1.isPermissionSelected(permission_r8.id));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(permission_r8.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(permission_r8.code);
  }
}
function RoleManagementComponent_div_4_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41)(2, "label", 32)(3, "input", 42, 0);
    \u0275\u0275listener("change", function RoleManagementComponent_div_4_div_23_Template_input_change_3_listener() {
      const module_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleModuleSelection(module_r6));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 34);
    \u0275\u0275element(6, "span", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 43);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 44);
    \u0275\u0275template(10, RoleManagementComponent_div_4_div_23_div_10_Template, 9, 3, "div", 45);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const module_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", ctx_r1.isModuleFullySelected(module_r6));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(module_r6);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.permissionsByModule[module_r6]);
  }
}
function RoleManagementComponent_div_4_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1, " No active permissions available ");
    \u0275\u0275elementEnd();
  }
}
function RoleManagementComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275listener("click", function RoleManagementComponent_div_4_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 16);
    \u0275\u0275listener("click", function RoleManagementComponent_div_4_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 17)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 18);
    \u0275\u0275listener("click", function RoleManagementComponent_div_4_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275element(6, "i", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 19)(8, "div", 20)(9, "label", 21);
    \u0275\u0275text(10, "Role Name ");
    \u0275\u0275elementStart(11, "span", 22);
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function RoleManagementComponent_div_4_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formRole.name, $event) || (ctx_r1.formRole.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, RoleManagementComponent_div_4_div_14_Template, 2, 1, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 20)(16, "label", 25);
    \u0275\u0275text(17, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "textarea", 26);
    \u0275\u0275twoWayListener("ngModelChange", function RoleManagementComponent_div_4_Template_textarea_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formRole.description, $event) || (ctx_r1.formRole.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 20)(20, "label");
    \u0275\u0275text(21, "Permissions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 27);
    \u0275\u0275template(23, RoleManagementComponent_div_4_div_23_Template, 11, 3, "div", 28)(24, RoleManagementComponent_div_4_div_24_Template, 2, 0, "div", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 30)(26, "label", 31);
    \u0275\u0275text(27, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "label", 32)(29, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function RoleManagementComponent_div_4_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formRole.is_active, $event) || (ctx_r1.formRole.is_active = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 34);
    \u0275\u0275element(31, "span", 35);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(32, "div", 36)(33, "button", 37);
    \u0275\u0275listener("click", function RoleManagementComponent_div_4_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(34, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 38);
    \u0275\u0275listener("click", function RoleManagementComponent_div_4_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveRole());
    });
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.isEditMode ? "Edit Role" : "Add New Role");
    \u0275\u0275advance(9);
    \u0275\u0275classProp("error", ctx_r1.nameError);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formRole.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.nameError);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formRole.description);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.modules);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.modules.length === 0);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formRole.is_active);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditMode ? "Update" : "Create", " ");
  }
}
var RoleManagementComponent = class _RoleManagementComponent {
  rolesService;
  permissionsService;
  toaster;
  confirmation;
  roles = [];
  filteredRoles = [];
  permissions = [];
  permissionsByModule = {};
  modules = [];
  searchQuery = "";
  showAddEditModal = false;
  isEditMode = false;
  selectedRole = null;
  formRole = {
    name: "",
    description: "",
    permissionIds: [],
    is_active: true
  };
  nameError = "";
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
      key: "name",
      title: "Role Name",
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
  constructor(rolesService, permissionsService, toaster, confirmation) {
    this.rolesService = rolesService;
    this.permissionsService = permissionsService;
    this.toaster = toaster;
    this.confirmation = confirmation;
  }
  ngOnInit() {
    this.loadRoles();
    this.loadPermissions();
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.updateIndeterminateStates();
    }, 0);
  }
  updateIndeterminateStates() {
    const checkboxes = document.querySelectorAll(".permission-module .checkbox-input");
    checkboxes.forEach((checkbox, index) => {
      const module = this.modules[index];
      if (module) {
        checkbox.indeterminate = this.isModulePartiallySelected(module);
      }
    });
  }
  loadRoles() {
    this.rolesService.getAllRoles().subscribe({
      next: (data) => {
        this.roles = data;
        this.filteredRoles = data;
      },
      error: (error) => {
        this.toaster.error(`Failed to load roles: ${error.message || "Unknown error"}`);
      }
    });
  }
  loadPermissions() {
    this.permissionsService.getAllPermissions().subscribe({
      next: (data) => {
        this.permissions = data.filter((p) => p.is_active);
        this.groupPermissionsByModule();
      },
      error: (error) => {
        this.toaster.error(`Failed to load permissions: ${error.message || "Unknown error"}`);
      }
    });
  }
  groupPermissionsByModule() {
    this.permissionsByModule = {};
    this.modules = [];
    this.permissions.forEach((permission) => {
      const module = permission.module || "Other";
      if (!this.permissionsByModule[module]) {
        this.permissionsByModule[module] = [];
        this.modules.push(module);
      }
      this.permissionsByModule[module].push(permission);
    });
    this.modules.sort();
  }
  onSearchChange() {
  }
  getTableData() {
    return this.filteredRoles.map((role) => {
      return {
        id: role.id.toString(),
        name: role.name,
        description: role.description || "",
        is_active: role.is_active
      };
    });
  }
  openAddModal() {
    this.isEditMode = false;
    this.formRole = {
      name: "",
      description: "",
      permissionIds: [],
      is_active: true
    };
    this.selectedRole = null;
    this.nameError = "";
    this.showAddEditModal = true;
  }
  openEditModal(role) {
    const rl = role;
    this.isEditMode = true;
    this.selectedRole = rl;
    this.formRole = {
      name: rl.name,
      description: rl.description || "",
      permissionIds: [],
      is_active: rl.is_active
    };
    this.nameError = "";
    this.rolesService.getRolePermissions(rl.id).subscribe({
      next: (permissions) => {
        this.formRole.permissionIds = permissions.map((p) => p.id);
        this.showAddEditModal = true;
        setTimeout(() => this.updateIndeterminateStates(), 100);
      },
      error: (error) => {
        this.toaster.error(`Failed to load role permissions: ${error.message || "Unknown error"}`);
      }
    });
  }
  validateForm() {
    this.nameError = "";
    if (!this.formRole.name || !this.formRole.name.trim()) {
      this.nameError = "Role name is required";
      return false;
    }
    if (this.formRole.name.length < 2) {
      this.nameError = "Role name must be at least 2 characters";
      return false;
    }
    return true;
  }
  saveRole() {
    if (!this.validateForm()) {
      return;
    }
    if (this.isEditMode && this.selectedRole) {
      const updateRequest = {
        id: this.selectedRole.id,
        name: this.formRole.name,
        description: this.formRole.description || void 0,
        permissionIds: this.formRole.permissionIds,
        is_active: this.formRole.is_active
      };
      this.rolesService.updateRole(updateRequest).subscribe({
        next: () => {
          this.toaster.success("Role updated successfully");
          this.closeModal();
          this.loadRoles();
        },
        error: (error) => {
          this.toaster.error(error.message || "Failed to update role");
        }
      });
    } else {
      this.rolesService.createRole(this.formRole).subscribe({
        next: () => {
          this.toaster.success("Role created successfully");
          this.closeModal();
          this.loadRoles();
        },
        error: (error) => {
          this.toaster.error(error.message || "Failed to create role");
        }
      });
    }
  }
  closeModal() {
    this.showAddEditModal = false;
    this.isEditMode = false;
    this.selectedRole = null;
    this.nameError = "";
  }
  onTableRowClick(data) {
  }
  onTableActionClick(event) {
    const role = this.roles.find((r) => r.id.toString() === event.row.id);
    if (!role)
      return;
    switch (event.action) {
      case "edit":
        this.openEditModal(role);
        break;
      case "delete":
        this.deleteRole(role);
        break;
      case "toggle-active":
        this.toggleRoleStatus(role);
        break;
    }
  }
  toggleRoleStatus(role) {
    const action = role.is_active ? "deactivate" : "activate";
    this.confirmation.confirm({
      title: `${action.charAt(0).toUpperCase() + action.slice(1)} Role`,
      message: `Are you sure you want to ${action} ${role.name}?`,
      confirmText: action.charAt(0).toUpperCase() + action.slice(1),
      cancelText: "Cancel"
    }).then((confirmed) => {
      if (confirmed) {
        const updateRequest = {
          id: role.id,
          name: role.name,
          description: role.description,
          permissionIds: [],
          // Will be loaded from server
          is_active: !role.is_active
        };
        this.rolesService.getRolePermissions(role.id).subscribe({
          next: (permissions) => {
            updateRequest.permissionIds = permissions.map((p) => p.id);
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
            this.toaster.error(`Failed to load role permissions: ${error.message || "Unknown error"}`);
          }
        });
      }
    });
  }
  deleteRole(role) {
    this.confirmation.confirm({
      title: "Delete Role",
      message: `Are you sure you want to delete ${role.name}? This action cannot be undone.`,
      confirmText: "Delete",
      cancelText: "Cancel",
      confirmClass: "danger"
    }).then((confirmed) => {
      if (confirmed) {
        this.rolesService.deleteRole(role.id, false).subscribe({
          next: () => {
            this.toaster.success("Role deleted successfully");
            this.loadRoles();
          },
          error: (error) => {
            this.toaster.error(error.message || "Failed to delete role");
          }
        });
      }
    });
  }
  togglePermissionSelection(permissionId) {
    const index = this.formRole.permissionIds.indexOf(permissionId);
    if (index > -1) {
      this.formRole.permissionIds.splice(index, 1);
    } else {
      this.formRole.permissionIds.push(permissionId);
    }
    setTimeout(() => this.updateIndeterminateStates(), 0);
  }
  isPermissionSelected(permissionId) {
    return this.formRole.permissionIds.includes(permissionId);
  }
  toggleModuleSelection(module) {
    const modulePermissions = this.permissionsByModule[module] || [];
    const allSelected = modulePermissions.every((p) => this.isPermissionSelected(p.id));
    if (allSelected) {
      modulePermissions.forEach((p) => {
        const index = this.formRole.permissionIds.indexOf(p.id);
        if (index > -1) {
          this.formRole.permissionIds.splice(index, 1);
        }
      });
    } else {
      modulePermissions.forEach((p) => {
        if (!this.isPermissionSelected(p.id)) {
          this.formRole.permissionIds.push(p.id);
        }
      });
    }
    setTimeout(() => this.updateIndeterminateStates(), 0);
  }
  isModuleFullySelected(module) {
    const modulePermissions = this.permissionsByModule[module] || [];
    return modulePermissions.length > 0 && modulePermissions.every((p) => this.isPermissionSelected(p.id));
  }
  isModulePartiallySelected(module) {
    const modulePermissions = this.permissionsByModule[module] || [];
    const selectedCount = modulePermissions.filter((p) => this.isPermissionSelected(p.id)).length;
    return selectedCount > 0 && selectedCount < modulePermissions.length;
  }
  onTableSortChange(event) {
  }
  onTableFilterChange(event) {
  }
  onTablePageChange(event) {
  }
  static \u0275fac = function RoleManagementComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RoleManagementComponent)(\u0275\u0275directiveInject(RolesService), \u0275\u0275directiveInject(PermissionsService), \u0275\u0275directiveInject(ToasterService), \u0275\u0275directiveInject(ConfirmationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoleManagementComponent, selectors: [["app-role-management"]], decls: 5, vars: 8, consts: [["moduleCheckbox", ""], [1, "role-management-container"], ["class", "master-toolbar", 4, "ngIf"], [1, "table-view"], ["emptyMessage", "No roles available", "searchPlaceholder", "Search roles...", 3, "rowClick", "actionClick", "sortChange", "filterChange", "pageChange", "columns", "data", "config", "actions", "loading", "externalSearch"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "master-toolbar"], [1, "master-search-wrapper"], ["type", "text", "placeholder", "Search roles...", 1, "master-search-input", 3, "ngModelChange", "ngModel"], ["class", "master-search-clear", "title", "Clear search", 3, "click", 4, "ngIf"], ["aria-label", "Add new role", "title", "Create a new role", 1, "add-action-btn", 3, "click"], [1, "fas", "fa-plus", "icon"], [1, "label"], ["title", "Clear search", 1, "master-search-clear", 3, "click"], [1, "fas", "fa-times"], [1, "modal-overlay", 3, "click"], [1, "modal-content", "modal-content-large", 3, "click"], [1, "modal-header"], ["title", "Close", 1, "btn-icon", 3, "click"], [1, "modal-body"], [1, "form-group"], ["for", "roleName"], [1, "required"], ["type", "text", "id", "roleName", "placeholder", "e.g., Manager", "maxlength", "100", 1, "form-input", 3, "ngModelChange", "ngModel"], ["class", "error-message", 4, "ngIf"], ["for", "roleDescription"], ["id", "roleDescription", "placeholder", "Role description...", "rows", "3", "maxlength", "500", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "permissions-selection"], ["class", "permission-module", 4, "ngFor", "ngForOf"], ["class", "no-permissions-message", 4, "ngIf"], [1, "form-group", "form-group-checkbox"], ["for", "roleActive", 1, "form-label-inline"], [1, "checkbox-label"], ["type", "checkbox", "id", "roleActive", 1, "checkbox-input", 3, "ngModelChange", "ngModel"], [1, "checkbox-toggle"], [1, "toggle-indicator"], [1, "modal-footer"], [1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-primary", 3, "click"], [1, "error-message"], [1, "permission-module"], [1, "module-header"], ["type", "checkbox", 1, "checkbox-input", 3, "change", "checked"], [1, "module-name"], [1, "permissions-list"], ["class", "permission-item", 4, "ngFor", "ngForOf"], [1, "permission-item"], [1, "permission-name"], [1, "permission-code"], [1, "no-permissions-message"]], template: function RoleManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275template(1, RoleManagementComponent_div_1_Template, 8, 3, "div", 2);
      \u0275\u0275elementStart(2, "div", 3)(3, "app-data-table", 4);
      \u0275\u0275listener("rowClick", function RoleManagementComponent_Template_app_data_table_rowClick_3_listener($event) {
        return ctx.onTableRowClick($event);
      })("actionClick", function RoleManagementComponent_Template_app_data_table_actionClick_3_listener($event) {
        return ctx.onTableActionClick($event);
      })("sortChange", function RoleManagementComponent_Template_app_data_table_sortChange_3_listener($event) {
        return ctx.onTableSortChange($event);
      })("filterChange", function RoleManagementComponent_Template_app_data_table_filterChange_3_listener($event) {
        return ctx.onTableFilterChange($event);
      })("pageChange", function RoleManagementComponent_Template_app_data_table_pageChange_3_listener($event) {
        return ctx.onTablePageChange($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(4, RoleManagementComponent_div_4_Template, 37, 10, "div", 5);
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
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, MaxLengthValidator, NgModel, DataTableComponent], styles: ["\n\n[_ngcontent-%COMP%]:root {\n  --primary-bg: #1a1a1a;\n  --secondary-bg: #2d2d2d;\n  --tertiary-bg: #3a3a3a;\n  --surface-bg: #2a2a2a;\n  --primary-accent: #4a9eff;\n  --secondary-accent: #7c3aed;\n  --success-color: #10b981;\n  --warning-color: #f59e0b;\n  --error-color: #ef4444;\n  --text-primary: #ffffff;\n  --text-secondary: #e5e5e5;\n  --text-muted: #a3a3a3;\n  --text-disabled: #6b7280;\n  --border-primary: #4a4a4a;\n  --border-secondary: #3a3a3a;\n  --border-accent: #5a5a5a;\n  --shadow-light: rgba(0, 0, 0, 0.1);\n  --shadow-medium: rgba(0, 0, 0, 0.2);\n  --shadow-heavy: rgba(0, 0, 0, 0.3);\n  --hover-bg: #3a3a3a;\n  --hover-accent: #5bb0ff;\n  --active-bg: #4a4a4a;\n  --active-accent: #3a8fdf;\n}\n.role-management-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 16px;\n  height: calc(100vh - 66px);\n  max-height: calc(100vh - 66px);\n  overflow: hidden;\n  box-sizing: border-box;\n  background: #0f1115;\n  color: #e6e6e6;\n}\n.modal-content-large[_ngcontent-%COMP%] {\n  max-width: 800px;\n  max-height: 90vh;\n  overflow-y: auto;\n}\n.permissions-selection[_ngcontent-%COMP%] {\n  max-height: 400px;\n  overflow-y: auto;\n  padding: 12px;\n  background: #1b1f26;\n  border: 1px solid #2a2f36;\n  border-radius: 6px;\n}\n.permissions-selection[_ngcontent-%COMP%]   .permission-module[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.permissions-selection[_ngcontent-%COMP%]   .permission-module[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.permissions-selection[_ngcontent-%COMP%]   .permission-module[_ngcontent-%COMP%]   .module-header[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid #2a2f36;\n}\n.permissions-selection[_ngcontent-%COMP%]   .permission-module[_ngcontent-%COMP%]   .module-header[_ngcontent-%COMP%]   .module-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  color: #e6e6e6;\n}\n.permissions-selection[_ngcontent-%COMP%]   .permission-module[_ngcontent-%COMP%]   .permissions-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding-left: 20px;\n}\n.permissions-selection[_ngcontent-%COMP%]   .permission-module[_ngcontent-%COMP%]   .permissions-list[_ngcontent-%COMP%]   .permission-item[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  cursor: pointer;\n}\n.permissions-selection[_ngcontent-%COMP%]   .permission-module[_ngcontent-%COMP%]   .permissions-list[_ngcontent-%COMP%]   .permission-item[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   .permission-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #e6e6e6;\n  flex: 1;\n}\n.permissions-selection[_ngcontent-%COMP%]   .permission-module[_ngcontent-%COMP%]   .permissions-list[_ngcontent-%COMP%]   .permission-item[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   .permission-code[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9aa0a6;\n  font-family: monospace;\n  background: #2a2f36;\n  padding: 2px 6px;\n  border-radius: 4px;\n}\n.permissions-selection[_ngcontent-%COMP%]   .no-permissions-message[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #9aa0a6;\n  padding: 20px;\n  font-size: 14px;\n}\n[_ngcontent-%COMP%]:root {\n  --primary-bg: #1a1a1a;\n  --secondary-bg: #2d2d2d;\n  --tertiary-bg: #3a3a3a;\n  --surface-bg: #2a2a2a;\n  --primary-accent: #4a9eff;\n  --secondary-accent: #7c3aed;\n  --success-color: #10b981;\n  --warning-color: #f59e0b;\n  --error-color: #ef4444;\n  --text-primary: #ffffff;\n  --text-secondary: #e5e5e5;\n  --text-muted: #a3a3a3;\n  --text-disabled: #6b7280;\n  --border-primary: #4a4a4a;\n  --border-secondary: #3a3a3a;\n  --border-accent: #5a5a5a;\n  --shadow-light: rgba(0, 0, 0, 0.1);\n  --shadow-medium: rgba(0, 0, 0, 0.2);\n  --shadow-heavy: rgba(0, 0, 0, 0.3);\n  --hover-bg: #3a3a3a;\n  --hover-accent: #5bb0ff;\n  --active-bg: #4a4a4a;\n  --active-accent: #3a8fdf;\n}\n.user-management-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 16px;\n  height: calc(100vh - 66px);\n  max-height: calc(100vh - 66px);\n  overflow: hidden;\n  box-sizing: border-box;\n  background: #0f1115;\n  color: #e6e6e6;\n}\n.user-management-container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n.user-management-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type=checkbox]):not([type=radio]):focus, \n.user-management-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, \n.user-management-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  border-color: #4a5568 !important;\n  box-shadow: 0 0 0 2px rgba(74, 85, 104, 0.15) !important;\n}\n.master-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 16px;\n  flex-shrink: 0;\n}\n.master-toolbar[_ngcontent-%COMP%]   .master-search-wrapper[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 500px;\n}\n.master-search-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.master-search-wrapper[_ngcontent-%COMP%]   .master-search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 40px 8px 10px;\n  background: #1f2228;\n  border: 1px solid #3a3f47;\n  border-radius: 8px;\n  color: #e6e6e6;\n  font-size: 0.95rem;\n  transition: all 0.2s ease;\n}\n.master-search-wrapper[_ngcontent-%COMP%]   .master-search-input[_ngcontent-%COMP%]::placeholder {\n  color: #9aa0a6;\n  opacity: 0.7;\n}\n.master-search-wrapper[_ngcontent-%COMP%]   .master-search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #4a5568;\n  box-shadow: 0 0 0 2px rgba(74, 85, 104, 0.15);\n}\n.master-search-wrapper[_ngcontent-%COMP%]   .master-search-clear[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: transparent;\n  border: none;\n  color: #9aa0a6;\n  cursor: pointer;\n  padding: 6px 10px;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  transition: all 0.2s ease;\n  z-index: 1;\n}\n.master-search-wrapper[_ngcontent-%COMP%]   .master-search-clear[_ngcontent-%COMP%]:hover {\n  color: #e6e6e6;\n  background: rgba(255, 255, 255, 0.15);\n}\n.table-view[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 0;\n  overflow: hidden;\n  background: transparent;\n}\n.table-view[_ngcontent-%COMP%]   app-data-table[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.roles-selection[_ngcontent-%COMP%] {\n  max-height: 200px;\n  overflow-y: auto;\n  padding: 12px;\n  background: #1b1f26;\n  border: 1px solid #2a2f36;\n  border-radius: 6px;\n}\n.roles-selection[_ngcontent-%COMP%]   .role-checkbox-item[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.roles-selection[_ngcontent-%COMP%]   .role-checkbox-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.roles-selection[_ngcontent-%COMP%]   .role-checkbox-item[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  cursor: pointer;\n}\n.roles-selection[_ngcontent-%COMP%]   .role-checkbox-item[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   .role-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #e6e6e6;\n}\n.roles-selection[_ngcontent-%COMP%]   .role-checkbox-item[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   .role-description[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9aa0a6;\n  margin-left: auto;\n}\n.roles-selection[_ngcontent-%COMP%]   .no-roles-message[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #9aa0a6;\n  padding: 20px;\n  font-size: 14px;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 12px;\n  background: #2c2f36;\n  color: #e6e6e6;\n  border: 1px solid #3a3f47;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 500;\n  transition: all 0.2s ease;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  background: #3a3f47;\n  border-color: #4a5568;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  border-color: #3b82f6;\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n  border-color: #2563eb;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background: #4a5568;\n  border-color: #4a5568;\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #5a6578;\n  border-color: #5a6578;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: 1px solid #3a3f47;\n  border-radius: 6px;\n  color: #e6e6e6;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 14px;\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  background: #2c2f36;\n  border-color: #4a5568;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #e6e6e6;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.form-group[_ngcontent-%COMP%]   label.form-label-inline[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 0;\n  margin-right: 12px;\n  vertical-align: middle;\n}\n.form-group.form-group-checkbox[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0;\n}\n.form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  background: #1b1f26;\n  border: 1px solid #2a2f36;\n  border-radius: 6px;\n  color: #e6e6e6;\n  font-size: 14px;\n  transition: all 0.2s ease;\n  box-sizing: border-box;\n}\n.form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]::placeholder {\n  color: #9aa0a6;\n}\n.form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:focus {\n  border-color: #4a5568;\n  box-shadow: 0 0 0 2px rgba(74, 85, 104, 0.15);\n}\n.form-group[_ngcontent-%COMP%]   .form-input.error[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.form-group[_ngcontent-%COMP%]   .form-input.error[_ngcontent-%COMP%]:focus {\n  border-color: #ef4444;\n  box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.15);\n}\n.form-group[_ngcontent-%COMP%]   textarea.form-input[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.form-group[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 12px;\n  margin-top: 4px;\n  display: block;\n}\n.checkbox-label[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  margin-bottom: 0;\n  vertical-align: middle;\n}\n.checkbox-label[_ngcontent-%COMP%]   .checkbox-input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0;\n  pointer-events: none;\n}\n.checkbox-label[_ngcontent-%COMP%]   .checkbox-toggle[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  width: 48px;\n  height: 26px;\n  background: rgba(30, 30, 30, 0.9);\n  border: 1.5px solid rgba(100, 100, 100, 0.3);\n  border-radius: 13px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  overflow: hidden;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.05);\n  cursor: pointer;\n  flex-shrink: 0;\n}\n.checkbox-label[_ngcontent-%COMP%]   .checkbox-toggle[_ngcontent-%COMP%]   .toggle-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  width: 20px;\n  height: 20px;\n  background: rgba(200, 200, 200, 0.3);\n  border: 1.5px solid rgba(180, 180, 180, 0.4);\n  border-radius: 50%;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.15);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  transform: translateX(0);\n  z-index: 2;\n}\n.checkbox-label[_ngcontent-%COMP%]   .checkbox-input[_ngcontent-%COMP%]:checked    + .checkbox-toggle[_ngcontent-%COMP%] {\n  background: rgba(50, 50, 50, 0.95);\n  border-color: rgba(59, 130, 246, 0.6);\n  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.05);\n}\n.checkbox-label[_ngcontent-%COMP%]   .checkbox-input[_ngcontent-%COMP%]:checked    + .checkbox-toggle[_ngcontent-%COMP%]   .toggle-indicator[_ngcontent-%COMP%] {\n  transform: translateX(22px);\n  background: rgba(59, 130, 246, 0.95);\n  border-color: rgba(59, 130, 246, 0.8);\n  box-shadow: 0 2px 6px rgba(59, 130, 246, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.2);\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.75);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 20px;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: #1a1d24;\n  border: 1px solid #2a2f36;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 600px;\n  max-height: 90vh;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px;\n  border-bottom: 1px solid #2a2f36;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: #e6e6e6;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 20px;\n  border-top: 1px solid #2a2f36;\n}\n/*# sourceMappingURL=role-management.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoleManagementComponent, [{
    type: Component,
    args: [{ selector: "app-role-management", standalone: true, imports: [CommonModule, FormsModule, DataTableComponent], template: `<div class="role-management-container">\r
  <!-- Search and Add Button Row -->\r
  <div class="master-toolbar" *ngIf="tableConfig.searchable">\r
    <div class="master-search-wrapper">\r
      <input \r
        type="text" \r
        class="master-search-input" \r
        [(ngModel)]="searchQuery"\r
        (ngModelChange)="onSearchChange()"\r
        placeholder="Search roles..."\r
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
      aria-label="Add new role"\r
      title="Create a new role"\r
    >\r
      <i class="fas fa-plus icon" [attr.aria-hidden]="true"></i>\r
      <span class="label">Add Role</span>\r
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
      emptyMessage="No roles available"\r
      searchPlaceholder="Search roles..."\r
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
    <div class="modal-content modal-content-large" (click)="$event.stopPropagation()">\r
      <div class="modal-header">\r
        <h3>{{ isEditMode ? 'Edit Role' : 'Add New Role' }}</h3>\r
        <button class="btn-icon" (click)="closeModal()" title="Close">\r
          <i class="fas fa-times"></i>\r
        </button>\r
      </div>\r
\r
      <div class="modal-body">\r
        <div class="form-group">\r
          <label for="roleName">Role Name <span class="required">*</span></label>\r
          <input \r
            type="text" \r
            id="roleName"\r
            class="form-input" \r
            [class.error]="nameError"\r
            [(ngModel)]="formRole.name"\r
            placeholder="e.g., Manager"\r
            maxlength="100"\r
          />\r
          <div class="error-message" *ngIf="nameError">{{ nameError }}</div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label for="roleDescription">Description</label>\r
          <textarea \r
            id="roleDescription"\r
            class="form-input" \r
            [(ngModel)]="formRole.description"\r
            placeholder="Role description..."\r
            rows="3"\r
            maxlength="500"\r
          ></textarea>\r
        </div>\r
\r
        <div class="form-group">\r
          <label>Permissions</label>\r
          <div class="permissions-selection">\r
            <div *ngFor="let module of modules" class="permission-module">\r
              <div class="module-header">\r
                <label class="checkbox-label">\r
                  <input \r
                    type="checkbox"\r
                    #moduleCheckbox\r
                    [checked]="isModuleFullySelected(module)"\r
                    (change)="toggleModuleSelection(module)"\r
                    class="checkbox-input"\r
                  />\r
                  <span class="checkbox-toggle">\r
                    <span class="toggle-indicator"></span>\r
                  </span>\r
                  <span class="module-name">{{ module }}</span>\r
                </label>\r
              </div>\r
              <div class="permissions-list">\r
                <div \r
                  *ngFor="let permission of permissionsByModule[module]" \r
                  class="permission-item"\r
                >\r
                  <label class="checkbox-label">\r
                    <input \r
                      type="checkbox"\r
                      [checked]="isPermissionSelected(permission.id)"\r
                      (change)="togglePermissionSelection(permission.id)"\r
                      class="checkbox-input"\r
                    />\r
                    <span class="checkbox-toggle">\r
                      <span class="toggle-indicator"></span>\r
                    </span>\r
                    <span class="permission-name">{{ permission.name }}</span>\r
                    <span class="permission-code">{{ permission.code }}</span>\r
                  </label>\r
                </div>\r
              </div>\r
            </div>\r
            <div class="no-permissions-message" *ngIf="modules.length === 0">\r
              No active permissions available\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="form-group form-group-checkbox">\r
          <label for="roleActive" class="form-label-inline">Active</label>\r
          <label class="checkbox-label">\r
            <input \r
              type="checkbox" \r
              id="roleActive"\r
              [(ngModel)]="formRole.is_active"\r
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
        <button class="btn btn-primary" (click)="saveRole()">\r
          {{ isEditMode ? 'Update' : 'Create' }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
`, styles: ["/* src/app/components/role-management/role-management.scss */\n:root {\n  --primary-bg: #1a1a1a;\n  --secondary-bg: #2d2d2d;\n  --tertiary-bg: #3a3a3a;\n  --surface-bg: #2a2a2a;\n  --primary-accent: #4a9eff;\n  --secondary-accent: #7c3aed;\n  --success-color: #10b981;\n  --warning-color: #f59e0b;\n  --error-color: #ef4444;\n  --text-primary: #ffffff;\n  --text-secondary: #e5e5e5;\n  --text-muted: #a3a3a3;\n  --text-disabled: #6b7280;\n  --border-primary: #4a4a4a;\n  --border-secondary: #3a3a3a;\n  --border-accent: #5a5a5a;\n  --shadow-light: rgba(0, 0, 0, 0.1);\n  --shadow-medium: rgba(0, 0, 0, 0.2);\n  --shadow-heavy: rgba(0, 0, 0, 0.3);\n  --hover-bg: #3a3a3a;\n  --hover-accent: #5bb0ff;\n  --active-bg: #4a4a4a;\n  --active-accent: #3a8fdf;\n}\n.role-management-container {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 16px;\n  height: calc(100vh - 66px);\n  max-height: calc(100vh - 66px);\n  overflow: hidden;\n  box-sizing: border-box;\n  background: #0f1115;\n  color: #e6e6e6;\n}\n.modal-content-large {\n  max-width: 800px;\n  max-height: 90vh;\n  overflow-y: auto;\n}\n.permissions-selection {\n  max-height: 400px;\n  overflow-y: auto;\n  padding: 12px;\n  background: #1b1f26;\n  border: 1px solid #2a2f36;\n  border-radius: 6px;\n}\n.permissions-selection .permission-module {\n  margin-bottom: 20px;\n}\n.permissions-selection .permission-module:last-child {\n  margin-bottom: 0;\n}\n.permissions-selection .permission-module .module-header {\n  margin-bottom: 12px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid #2a2f36;\n}\n.permissions-selection .permission-module .module-header .module-name {\n  font-weight: 600;\n  font-size: 14px;\n  color: #e6e6e6;\n}\n.permissions-selection .permission-module .permissions-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding-left: 20px;\n}\n.permissions-selection .permission-module .permissions-list .permission-item .checkbox-label {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  cursor: pointer;\n}\n.permissions-selection .permission-module .permissions-list .permission-item .checkbox-label .permission-name {\n  font-weight: 500;\n  color: #e6e6e6;\n  flex: 1;\n}\n.permissions-selection .permission-module .permissions-list .permission-item .checkbox-label .permission-code {\n  font-size: 11px;\n  color: #9aa0a6;\n  font-family: monospace;\n  background: #2a2f36;\n  padding: 2px 6px;\n  border-radius: 4px;\n}\n.permissions-selection .no-permissions-message {\n  text-align: center;\n  color: #9aa0a6;\n  padding: 20px;\n  font-size: 14px;\n}\n:root {\n  --primary-bg: #1a1a1a;\n  --secondary-bg: #2d2d2d;\n  --tertiary-bg: #3a3a3a;\n  --surface-bg: #2a2a2a;\n  --primary-accent: #4a9eff;\n  --secondary-accent: #7c3aed;\n  --success-color: #10b981;\n  --warning-color: #f59e0b;\n  --error-color: #ef4444;\n  --text-primary: #ffffff;\n  --text-secondary: #e5e5e5;\n  --text-muted: #a3a3a3;\n  --text-disabled: #6b7280;\n  --border-primary: #4a4a4a;\n  --border-secondary: #3a3a3a;\n  --border-accent: #5a5a5a;\n  --shadow-light: rgba(0, 0, 0, 0.1);\n  --shadow-medium: rgba(0, 0, 0, 0.2);\n  --shadow-heavy: rgba(0, 0, 0, 0.3);\n  --hover-bg: #3a3a3a;\n  --hover-accent: #5bb0ff;\n  --active-bg: #4a4a4a;\n  --active-accent: #3a8fdf;\n}\n.user-management-container {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 16px;\n  height: calc(100vh - 66px);\n  max-height: calc(100vh - 66px);\n  overflow: hidden;\n  box-sizing: border-box;\n  background: #0f1115;\n  color: #e6e6e6;\n}\n.user-management-container *:focus {\n  outline: none !important;\n}\n.user-management-container input:not([type=checkbox]):not([type=radio]):focus,\n.user-management-container textarea:focus,\n.user-management-container select:focus {\n  outline: none !important;\n  border-color: #4a5568 !important;\n  box-shadow: 0 0 0 2px rgba(74, 85, 104, 0.15) !important;\n}\n.master-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 16px;\n  flex-shrink: 0;\n}\n.master-toolbar .master-search-wrapper {\n  flex: 1;\n  max-width: 500px;\n}\n.master-search-wrapper {\n  position: relative;\n  width: 100%;\n}\n.master-search-wrapper .master-search-input {\n  width: 100%;\n  padding: 8px 40px 8px 10px;\n  background: #1f2228;\n  border: 1px solid #3a3f47;\n  border-radius: 8px;\n  color: #e6e6e6;\n  font-size: 0.95rem;\n  transition: all 0.2s ease;\n}\n.master-search-wrapper .master-search-input::placeholder {\n  color: #9aa0a6;\n  opacity: 0.7;\n}\n.master-search-wrapper .master-search-input:focus {\n  outline: none;\n  border-color: #4a5568;\n  box-shadow: 0 0 0 2px rgba(74, 85, 104, 0.15);\n}\n.master-search-wrapper .master-search-clear {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: transparent;\n  border: none;\n  color: #9aa0a6;\n  cursor: pointer;\n  padding: 6px 10px;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  transition: all 0.2s ease;\n  z-index: 1;\n}\n.master-search-wrapper .master-search-clear:hover {\n  color: #e6e6e6;\n  background: rgba(255, 255, 255, 0.15);\n}\n.table-view {\n  flex: 1;\n  min-height: 0;\n  overflow: hidden;\n  background: transparent;\n}\n.table-view app-data-table {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.roles-selection {\n  max-height: 200px;\n  overflow-y: auto;\n  padding: 12px;\n  background: #1b1f26;\n  border: 1px solid #2a2f36;\n  border-radius: 6px;\n}\n.roles-selection .role-checkbox-item {\n  margin-bottom: 12px;\n}\n.roles-selection .role-checkbox-item:last-child {\n  margin-bottom: 0;\n}\n.roles-selection .role-checkbox-item .checkbox-label {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  cursor: pointer;\n}\n.roles-selection .role-checkbox-item .checkbox-label .role-name {\n  font-weight: 500;\n  color: #e6e6e6;\n}\n.roles-selection .role-checkbox-item .checkbox-label .role-description {\n  font-size: 12px;\n  color: #9aa0a6;\n  margin-left: auto;\n}\n.roles-selection .no-roles-message {\n  text-align: center;\n  color: #9aa0a6;\n  padding: 20px;\n  font-size: 14px;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 12px;\n  background: #2c2f36;\n  color: #e6e6e6;\n  border: 1px solid #3a3f47;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 500;\n  transition: all 0.2s ease;\n}\n.btn:hover {\n  background: #3a3f47;\n  border-color: #4a5568;\n}\n.btn.btn-primary {\n  background: #3b82f6;\n  border-color: #3b82f6;\n  color: white;\n}\n.btn.btn-primary:hover {\n  background: #2563eb;\n  border-color: #2563eb;\n}\n.btn.btn-secondary {\n  background: #4a5568;\n  border-color: #4a5568;\n}\n.btn.btn-secondary:hover {\n  background: #5a6578;\n  border-color: #5a6578;\n}\n.btn-icon {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: 1px solid #3a3f47;\n  border-radius: 6px;\n  color: #e6e6e6;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 14px;\n}\n.btn-icon:hover {\n  background: #2c2f36;\n  border-color: #4a5568;\n}\n.form-group {\n  margin-bottom: 16px;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #e6e6e6;\n}\n.form-group label .required {\n  color: #ef4444;\n}\n.form-group label.form-label-inline {\n  display: inline-block;\n  margin-bottom: 0;\n  margin-right: 12px;\n  vertical-align: middle;\n}\n.form-group.form-group-checkbox {\n  display: flex;\n  align-items: center;\n  gap: 0;\n}\n.form-group .form-input {\n  width: 100%;\n  padding: 8px 12px;\n  background: #1b1f26;\n  border: 1px solid #2a2f36;\n  border-radius: 6px;\n  color: #e6e6e6;\n  font-size: 14px;\n  transition: all 0.2s ease;\n  box-sizing: border-box;\n}\n.form-group .form-input::placeholder {\n  color: #9aa0a6;\n}\n.form-group .form-input:focus {\n  border-color: #4a5568;\n  box-shadow: 0 0 0 2px rgba(74, 85, 104, 0.15);\n}\n.form-group .form-input.error {\n  border-color: #ef4444;\n}\n.form-group .form-input.error:focus {\n  border-color: #ef4444;\n  box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.15);\n}\n.form-group textarea.form-input {\n  resize: vertical;\n  min-height: 80px;\n}\n.form-group .error-message {\n  color: #ef4444;\n  font-size: 12px;\n  margin-top: 4px;\n  display: block;\n}\n.checkbox-label {\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  margin-bottom: 0;\n  vertical-align: middle;\n}\n.checkbox-label .checkbox-input {\n  position: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0;\n  pointer-events: none;\n}\n.checkbox-label .checkbox-toggle {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  width: 48px;\n  height: 26px;\n  background: rgba(30, 30, 30, 0.9);\n  border: 1.5px solid rgba(100, 100, 100, 0.3);\n  border-radius: 13px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  overflow: hidden;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.05);\n  cursor: pointer;\n  flex-shrink: 0;\n}\n.checkbox-label .checkbox-toggle .toggle-indicator {\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  width: 20px;\n  height: 20px;\n  background: rgba(200, 200, 200, 0.3);\n  border: 1.5px solid rgba(180, 180, 180, 0.4);\n  border-radius: 50%;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.15);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  transform: translateX(0);\n  z-index: 2;\n}\n.checkbox-label .checkbox-input:checked + .checkbox-toggle {\n  background: rgba(50, 50, 50, 0.95);\n  border-color: rgba(59, 130, 246, 0.6);\n  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.05);\n}\n.checkbox-label .checkbox-input:checked + .checkbox-toggle .toggle-indicator {\n  transform: translateX(22px);\n  background: rgba(59, 130, 246, 0.95);\n  border-color: rgba(59, 130, 246, 0.8);\n  box-shadow: 0 2px 6px rgba(59, 130, 246, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.2);\n}\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.75);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 20px;\n}\n.modal-content {\n  background: #1a1d24;\n  border: 1px solid #2a2f36;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 600px;\n  max-height: 90vh;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px;\n  border-bottom: 1px solid #2a2f36;\n}\n.modal-header h3 {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: #e6e6e6;\n}\n.modal-body {\n  padding: 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.modal-footer {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 20px;\n  border-top: 1px solid #2a2f36;\n}\n/*# sourceMappingURL=role-management.css.map */\n"] }]
  }], () => [{ type: RolesService }, { type: PermissionsService }, { type: ToasterService }, { type: ConfirmationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoleManagementComponent, { className: "RoleManagementComponent", filePath: "src/app/components/role-management/role-management.ts", lineNumber: 17 });
})();
export {
  RoleManagementComponent
};
//# sourceMappingURL=chunk-OIX3HSZL.js.map
