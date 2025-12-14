import {
  RolesService
} from "./chunk-VQBCC4JS.js";
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
  API_CONFIG,
  CheckboxControlValueAccessor,
  CommonModule,
  Component,
  DefaultValueAccessor,
  FormsModule,
  HttpClient,
  HttpHeaders,
  Injectable,
  MaxLengthValidator,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  map,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
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

// src/app/services/users.service.ts
var UsersService = class _UsersService {
  http;
  constructor(http) {
    this.http = http;
  }
  getAllUsers() {
    return this.http.get(API_CONFIG.users.getAll).pipe(map((response) => response.data || []));
  }
  getUserById(id) {
    return this.http.get(API_CONFIG.users.getById(id)).pipe(map((response) => response.data));
  }
  createUser(user) {
    return this.http.post(API_CONFIG.users.create, user).pipe(map((response) => response.data));
  }
  updateUser(user) {
    return this.http.put(API_CONFIG.users.update, user).pipe(map((response) => response.data));
  }
  deleteUser(id, isHardDelete = false) {
    return this.http.delete(API_CONFIG.users.delete(id, isHardDelete)).pipe(map((response) => response.success));
  }
  changePassword(userId, newPassword) {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.put(API_CONFIG.users.changePassword(userId), JSON.stringify(newPassword), { headers }).pipe(map((response) => response.success));
  }
  static \u0275fac = function UsersService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UsersService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UsersService, factory: _UsersService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsersService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/components/user-management/user-management.ts
function UserManagementComponent_div_1_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function UserManagementComponent_div_1_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.searchQuery = "";
      return \u0275\u0275resetView(ctx_r1.onSearchChange());
    });
    \u0275\u0275element(1, "i", 13);
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "input", 7);
    \u0275\u0275twoWayListener("ngModelChange", function UserManagementComponent_div_1_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchQuery, $event) || (ctx_r1.searchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function UserManagementComponent_div_1_Template_input_ngModelChange_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearchChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, UserManagementComponent_div_1_button_3_Template, 2, 0, "button", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 9);
    \u0275\u0275listener("click", function UserManagementComponent_div_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAddModal());
    });
    \u0275\u0275element(5, "i", 10);
    \u0275\u0275elementStart(6, "span", 11);
    \u0275\u0275text(7, "Add User");
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
function UserManagementComponent_div_4_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.emailError);
  }
}
function UserManagementComponent_div_4_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.usernameError);
  }
}
function UserManagementComponent_div_4_div_22_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.passwordFormError);
  }
}
function UserManagementComponent_div_4_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "label", 46);
    \u0275\u0275text(2, "Password ");
    \u0275\u0275elementStart(3, "span", 21);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function UserManagementComponent_div_4_div_22_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.formUser.password, $event) || (ctx_r1.formUser.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, UserManagementComponent_div_4_div_22_div_6_Template, 2, 1, "div", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("error", ctx_r1.passwordFormError);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formUser.password);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.passwordFormError);
  }
}
function UserManagementComponent_div_4_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.firstNameError);
  }
}
function UserManagementComponent_div_4_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.lastNameError);
  }
}
function UserManagementComponent_div_4_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.phoneError);
  }
}
function UserManagementComponent_div_4_div_46_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(role_r7.description);
  }
}
function UserManagementComponent_div_4_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "label", 38)(2, "input", 49);
    \u0275\u0275listener("change", function UserManagementComponent_div_4_div_46_Template_input_change_2_listener() {
      const role_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleRoleSelection(role_r7.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 40);
    \u0275\u0275element(4, "span", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 50);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, UserManagementComponent_div_4_div_46_span_7_Template, 2, 1, "span", 51);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const role_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r1.isRoleSelected(role_r7.id));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(role_r7.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", role_r7.description);
  }
}
function UserManagementComponent_div_4_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275text(1, " No active roles available ");
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275listener("click", function UserManagementComponent_div_4_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 15);
    \u0275\u0275listener("click", function UserManagementComponent_div_4_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 16)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 17);
    \u0275\u0275listener("click", function UserManagementComponent_div_4_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275element(6, "i", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 18)(8, "div", 19)(9, "label", 20);
    \u0275\u0275text(10, "Email ");
    \u0275\u0275elementStart(11, "span", 21);
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function UserManagementComponent_div_4_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formUser.email, $event) || (ctx_r1.formUser.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, UserManagementComponent_div_4_div_14_Template, 2, 1, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 19)(16, "label", 24);
    \u0275\u0275text(17, "Username ");
    \u0275\u0275elementStart(18, "span", 21);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function UserManagementComponent_div_4_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formUser.username, $event) || (ctx_r1.formUser.username = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, UserManagementComponent_div_4_div_21_Template, 2, 1, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, UserManagementComponent_div_4_div_22_Template, 7, 4, "div", 26);
    \u0275\u0275elementStart(23, "div", 19)(24, "label", 27);
    \u0275\u0275text(25, "First Name ");
    \u0275\u0275elementStart(26, "span", 21);
    \u0275\u0275text(27, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function UserManagementComponent_div_4_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formUser.first_name, $event) || (ctx_r1.formUser.first_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, UserManagementComponent_div_4_div_29_Template, 2, 1, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 19)(31, "label", 29);
    \u0275\u0275text(32, "Last Name ");
    \u0275\u0275elementStart(33, "span", 21);
    \u0275\u0275text(34, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function UserManagementComponent_div_4_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formUser.last_name, $event) || (ctx_r1.formUser.last_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, UserManagementComponent_div_4_div_36_Template, 2, 1, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 19)(38, "label", 31);
    \u0275\u0275text(39, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function UserManagementComponent_div_4_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formUser.phone, $event) || (ctx_r1.formUser.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(41, UserManagementComponent_div_4_div_41_Template, 2, 1, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 19)(43, "label");
    \u0275\u0275text(44, "Roles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 33);
    \u0275\u0275template(46, UserManagementComponent_div_4_div_46_Template, 8, 3, "div", 34)(47, UserManagementComponent_div_4_div_47_Template, 2, 0, "div", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 36)(49, "label", 37);
    \u0275\u0275text(50, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "label", 38)(52, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function UserManagementComponent_div_4_Template_input_ngModelChange_52_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formUser.is_active, $event) || (ctx_r1.formUser.is_active = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span", 40);
    \u0275\u0275element(54, "span", 41);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(55, "div", 42)(56, "button", 43);
    \u0275\u0275listener("click", function UserManagementComponent_div_4_Template_button_click_56_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(57, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "button", 44);
    \u0275\u0275listener("click", function UserManagementComponent_div_4_Template_button_click_58_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveUser());
    });
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.isEditMode ? "Edit User" : "Add New User");
    \u0275\u0275advance(9);
    \u0275\u0275classProp("error", ctx_r1.emailError);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formUser.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.emailError);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("error", ctx_r1.usernameError);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formUser.username);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.usernameError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isEditMode);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("error", ctx_r1.firstNameError);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formUser.first_name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.firstNameError);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("error", ctx_r1.lastNameError);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formUser.last_name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.lastNameError);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ctx_r1.phoneError);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formUser.phone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.phoneError);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.roles);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.roles.length === 0);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formUser.is_active);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditMode ? "Update" : "Create", " ");
  }
}
function UserManagementComponent_div_5_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.passwordError);
  }
}
function UserManagementComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275listener("click", function UserManagementComponent_div_5_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePasswordModal());
    });
    \u0275\u0275elementStart(1, "div", 15);
    \u0275\u0275listener("click", function UserManagementComponent_div_5_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 16)(3, "h3");
    \u0275\u0275text(4, "Change Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 17);
    \u0275\u0275listener("click", function UserManagementComponent_div_5_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePasswordModal());
    });
    \u0275\u0275element(6, "i", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 18)(8, "div", 19)(9, "label", 54);
    \u0275\u0275text(10, "New Password ");
    \u0275\u0275elementStart(11, "span", 21);
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "input", 55);
    \u0275\u0275twoWayListener("ngModelChange", function UserManagementComponent_div_5_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newPassword, $event) || (ctx_r1.newPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 19)(15, "label", 56);
    \u0275\u0275text(16, "Confirm Password ");
    \u0275\u0275elementStart(17, "span", 21);
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "input", 57);
    \u0275\u0275twoWayListener("ngModelChange", function UserManagementComponent_div_5_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.confirmPassword, $event) || (ctx_r1.confirmPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, UserManagementComponent_div_5_div_20_Template, 2, 1, "div", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 42)(22, "button", 43);
    \u0275\u0275listener("click", function UserManagementComponent_div_5_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePasswordModal());
    });
    \u0275\u0275text(23, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 44);
    \u0275\u0275listener("click", function UserManagementComponent_div_5_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changePassword());
    });
    \u0275\u0275text(25, " Change Password ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275classProp("error", ctx_r1.passwordError);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newPassword);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("error", ctx_r1.passwordError);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.confirmPassword);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.passwordError);
  }
}
var UserManagementComponent = class _UserManagementComponent {
  usersService;
  rolesService;
  toaster;
  confirmation;
  users = [];
  filteredUsers = [];
  roles = [];
  searchQuery = "";
  showAddEditModal = false;
  isEditMode = false;
  selectedUser = null;
  showPasswordModal = false;
  passwordUserId = 0;
  newPassword = "";
  confirmPassword = "";
  passwordError = "";
  formUser = {
    email: "",
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    phone: "",
    roleIds: [],
    is_active: true
  };
  emailError = "";
  usernameError = "";
  firstNameError = "";
  lastNameError = "";
  passwordFormError = "";
  phoneError = "";
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
      key: "email",
      title: "Email",
      sortable: true,
      filterable: true,
      resizable: true,
      width: "250px",
      minWidth: "200px",
      maxWidth: "350px",
      align: "left",
      type: "text"
    },
    {
      key: "username",
      title: "Username",
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
      key: "first_name",
      title: "First Name",
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
      key: "last_name",
      title: "Last Name",
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
      key: "roles",
      title: "Roles",
      sortable: false,
      filterable: false,
      resizable: true,
      width: "200px",
      minWidth: "150px",
      maxWidth: "300px",
      align: "left",
      type: "custom"
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
      key: "email_verified",
      title: "Verified",
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
      key: "last_login",
      title: "Last Login",
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
      width: "200px",
      minWidth: "150px",
      maxWidth: "250px",
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
      label: "Change Password",
      icon: "fa-key",
      action: "change-password",
      color: "#8b5cf6"
    },
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
  constructor(usersService, rolesService, toaster, confirmation) {
    this.usersService = usersService;
    this.rolesService = rolesService;
    this.toaster = toaster;
    this.confirmation = confirmation;
  }
  ngOnInit() {
    this.loadUsers();
    this.loadRoles();
  }
  loadUsers() {
    this.usersService.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.filteredUsers = data;
      },
      error: (error) => {
        this.toaster.error(`Failed to load users: ${error.message || "Unknown error"}`);
      }
    });
  }
  loadRoles() {
    this.rolesService.getAllRoles().subscribe({
      next: (data) => {
        this.roles = data.filter((r) => r.is_active);
      },
      error: (error) => {
        this.toaster.error(`Failed to load roles: ${error.message || "Unknown error"}`);
      }
    });
  }
  onSearchChange() {
  }
  getTableData() {
    return this.filteredUsers.map((user) => {
      return {
        id: user.id.toString(),
        email: user.email,
        username: user.username,
        first_name: user.first_name,
        last_name: user.last_name,
        roles: user.roles.map((r) => r.name).join(", "),
        is_active: user.is_active,
        email_verified: user.email_verified,
        last_login: user.last_login || null,
        _roles: user.roles
        // Store full roles array for reference
      };
    });
  }
  openAddModal() {
    this.isEditMode = false;
    this.formUser = {
      email: "",
      username: "",
      password: "",
      first_name: "",
      last_name: "",
      phone: "",
      roleIds: [],
      is_active: true
    };
    this.selectedUser = null;
    this.clearErrors();
    this.showAddEditModal = true;
  }
  openEditModal(user) {
    const usr = user;
    this.isEditMode = true;
    this.selectedUser = usr;
    this.formUser = {
      email: usr.email,
      username: usr.username,
      password: "",
      // Don't populate password
      first_name: usr.first_name,
      last_name: usr.last_name,
      phone: usr.phone || "",
      roleIds: usr.roles.map((r) => r.id),
      is_active: usr.is_active
    };
    this.clearErrors();
    this.showAddEditModal = true;
  }
  clearErrors() {
    this.emailError = "";
    this.usernameError = "";
    this.firstNameError = "";
    this.lastNameError = "";
    this.passwordFormError = "";
    this.phoneError = "";
  }
  validateForm() {
    this.clearErrors();
    let isValid = true;
    if (!this.formUser.email || !this.formUser.email.trim()) {
      this.emailError = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.formUser.email)) {
      this.emailError = "Invalid email format";
      isValid = false;
    }
    if (!this.formUser.username || !this.formUser.username.trim()) {
      this.usernameError = "Username is required";
      isValid = false;
    } else if (this.formUser.username.length < 3) {
      this.usernameError = "Username must be at least 3 characters";
      isValid = false;
    }
    if (!this.isEditMode) {
      if (!this.formUser.password || !this.formUser.password.trim()) {
        this.passwordFormError = "Password is required";
        isValid = false;
      } else if (this.formUser.password.length < 6) {
        this.passwordFormError = "Password must be at least 6 characters";
        isValid = false;
      }
    }
    if (!this.formUser.first_name || !this.formUser.first_name.trim()) {
      this.firstNameError = "First name is required";
      isValid = false;
    }
    if (!this.formUser.last_name || !this.formUser.last_name.trim()) {
      this.lastNameError = "Last name is required";
      isValid = false;
    }
    if (this.formUser.phone && !/^[\d\s\-\+\(\)]+$/.test(this.formUser.phone)) {
      this.phoneError = "Invalid phone format";
      isValid = false;
    }
    return isValid;
  }
  saveUser() {
    if (!this.validateForm()) {
      return;
    }
    if (this.isEditMode && this.selectedUser) {
      const updateRequest = {
        id: this.selectedUser.id,
        email: this.formUser.email,
        username: this.formUser.username,
        password: this.formUser.password || void 0,
        first_name: this.formUser.first_name,
        last_name: this.formUser.last_name,
        phone: this.formUser.phone || void 0,
        roleIds: this.formUser.roleIds,
        is_active: this.formUser.is_active
      };
      this.usersService.updateUser(updateRequest).subscribe({
        next: () => {
          this.toaster.success("User updated successfully");
          this.closeModal();
          this.loadUsers();
        },
        error: (error) => {
          this.toaster.error(error.message || "Failed to update user");
        }
      });
    } else {
      this.usersService.createUser(this.formUser).subscribe({
        next: () => {
          this.toaster.success("User created successfully");
          this.closeModal();
          this.loadUsers();
        },
        error: (error) => {
          this.toaster.error(error.message || "Failed to create user");
        }
      });
    }
  }
  closeModal() {
    this.showAddEditModal = false;
    this.isEditMode = false;
    this.selectedUser = null;
    this.clearErrors();
  }
  onTableRowClick(data) {
  }
  onTableActionClick(event) {
    const user = this.users.find((u) => u.id.toString() === event.row.id);
    if (!user)
      return;
    switch (event.action) {
      case "edit":
        this.openEditModal(user);
        break;
      case "delete":
        this.deleteUser(user);
        break;
      case "toggle-active":
        this.toggleUserStatus(user);
        break;
      case "change-password":
        this.openPasswordModal(user.id);
        break;
    }
  }
  toggleUserStatus(user) {
    const action = user.is_active ? "deactivate" : "activate";
    this.confirmation.confirm({
      title: `${action.charAt(0).toUpperCase() + action.slice(1)} User`,
      message: `Are you sure you want to ${action} ${user.email}?`,
      confirmText: action.charAt(0).toUpperCase() + action.slice(1),
      cancelText: "Cancel"
    }).then((confirmed) => {
      if (confirmed) {
        const updateRequest = {
          id: user.id,
          email: user.email,
          username: user.username,
          first_name: user.first_name,
          last_name: user.last_name,
          phone: user.phone,
          roleIds: user.roles.map((r) => r.id),
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
  deleteUser(user) {
    this.confirmation.confirm({
      title: "Delete User",
      message: `Are you sure you want to delete ${user.email}? This action cannot be undone.`,
      confirmText: "Delete",
      cancelText: "Cancel",
      confirmClass: "danger"
    }).then((confirmed) => {
      if (confirmed) {
        this.usersService.deleteUser(user.id, false).subscribe({
          next: () => {
            this.toaster.success("User deleted successfully");
            this.loadUsers();
          },
          error: (error) => {
            this.toaster.error(error.message || "Failed to delete user");
          }
        });
      }
    });
  }
  openPasswordModal(userId) {
    this.passwordUserId = userId;
    this.newPassword = "";
    this.confirmPassword = "";
    this.passwordError = "";
    this.showPasswordModal = true;
  }
  closePasswordModal() {
    this.showPasswordModal = false;
    this.passwordUserId = 0;
    this.newPassword = "";
    this.confirmPassword = "";
    this.passwordError = "";
  }
  validatePassword() {
    this.passwordError = "";
    if (!this.newPassword || this.newPassword.length < 6) {
      this.passwordError = "Password must be at least 6 characters";
      return false;
    }
    if (this.newPassword !== this.confirmPassword) {
      this.passwordError = "Passwords do not match";
      return false;
    }
    return true;
  }
  changePassword() {
    if (!this.validatePassword()) {
      return;
    }
    this.usersService.changePassword(this.passwordUserId, this.newPassword).subscribe({
      next: () => {
        this.toaster.success("Password changed successfully");
        this.closePasswordModal();
      },
      error: (error) => {
        this.passwordError = error.message || "Failed to change password";
      }
    });
  }
  toggleRoleSelection(roleId) {
    const index = this.formUser.roleIds.indexOf(roleId);
    if (index > -1) {
      this.formUser.roleIds.splice(index, 1);
    } else {
      this.formUser.roleIds.push(roleId);
    }
  }
  isRoleSelected(roleId) {
    return this.formUser.roleIds.includes(roleId);
  }
  onTableSortChange(event) {
  }
  onTableFilterChange(event) {
  }
  onTablePageChange(event) {
  }
  static \u0275fac = function UserManagementComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserManagementComponent)(\u0275\u0275directiveInject(UsersService), \u0275\u0275directiveInject(RolesService), \u0275\u0275directiveInject(ToasterService), \u0275\u0275directiveInject(ConfirmationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserManagementComponent, selectors: [["app-user-management"]], decls: 6, vars: 9, consts: [[1, "user-management-container"], ["class", "master-toolbar", 4, "ngIf"], [1, "table-view"], ["emptyMessage", "No users available", "searchPlaceholder", "Search users...", 3, "rowClick", "actionClick", "sortChange", "filterChange", "pageChange", "columns", "data", "config", "actions", "loading", "externalSearch"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "master-toolbar"], [1, "master-search-wrapper"], ["type", "text", "placeholder", "Search users...", 1, "master-search-input", 3, "ngModelChange", "ngModel"], ["class", "master-search-clear", "title", "Clear search", 3, "click", 4, "ngIf"], ["aria-label", "Add new user", "title", "Create a new user", 1, "add-action-btn", 3, "click"], [1, "fas", "fa-plus", "icon"], [1, "label"], ["title", "Clear search", 1, "master-search-clear", 3, "click"], [1, "fas", "fa-times"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], ["title", "Close", 1, "btn-icon", 3, "click"], [1, "modal-body"], [1, "form-group"], ["for", "userEmail"], [1, "required"], ["type", "email", "id", "userEmail", "placeholder", "user@example.com", "maxlength", "255", 1, "form-input", 3, "ngModelChange", "ngModel"], ["class", "error-message", 4, "ngIf"], ["for", "userUsername"], ["type", "text", "id", "userUsername", "placeholder", "username", "maxlength", "100", 1, "form-input", 3, "ngModelChange", "ngModel"], ["class", "form-group", 4, "ngIf"], ["for", "userFirstName"], ["type", "text", "id", "userFirstName", "placeholder", "First Name", "maxlength", "100", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "userLastName"], ["type", "text", "id", "userLastName", "placeholder", "Last Name", "maxlength", "100", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "userPhone"], ["type", "tel", "id", "userPhone", "placeholder", "+1234567890", "maxlength", "20", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "roles-selection"], ["class", "role-checkbox-item", 4, "ngFor", "ngForOf"], ["class", "no-roles-message", 4, "ngIf"], [1, "form-group", "form-group-checkbox"], ["for", "userActive", 1, "form-label-inline"], [1, "checkbox-label"], ["type", "checkbox", "id", "userActive", 1, "checkbox-input", 3, "ngModelChange", "ngModel"], [1, "checkbox-toggle"], [1, "toggle-indicator"], [1, "modal-footer"], [1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-primary", 3, "click"], [1, "error-message"], ["for", "userPassword"], ["type", "password", "id", "userPassword", "placeholder", "Minimum 6 characters", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "role-checkbox-item"], ["type", "checkbox", 1, "checkbox-input", 3, "change", "checked"], [1, "role-name"], ["class", "role-description", 4, "ngIf"], [1, "role-description"], [1, "no-roles-message"], ["for", "newPassword"], ["type", "password", "id", "newPassword", "placeholder", "Minimum 6 characters", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "confirmPassword"], ["type", "password", "id", "confirmPassword", "placeholder", "Re-enter password", 1, "form-input", 3, "ngModelChange", "ngModel"]], template: function UserManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, UserManagementComponent_div_1_Template, 8, 3, "div", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "app-data-table", 3);
      \u0275\u0275listener("rowClick", function UserManagementComponent_Template_app_data_table_rowClick_3_listener($event) {
        return ctx.onTableRowClick($event);
      })("actionClick", function UserManagementComponent_Template_app_data_table_actionClick_3_listener($event) {
        return ctx.onTableActionClick($event);
      })("sortChange", function UserManagementComponent_Template_app_data_table_sortChange_3_listener($event) {
        return ctx.onTableSortChange($event);
      })("filterChange", function UserManagementComponent_Template_app_data_table_filterChange_3_listener($event) {
        return ctx.onTableFilterChange($event);
      })("pageChange", function UserManagementComponent_Template_app_data_table_pageChange_3_listener($event) {
        return ctx.onTablePageChange($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(4, UserManagementComponent_div_4_Template, 60, 26, "div", 4)(5, UserManagementComponent_div_5_Template, 26, 7, "div", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.tableConfig.searchable);
      \u0275\u0275advance(2);
      \u0275\u0275property("columns", ctx.tableColumns)("data", ctx.getTableData())("config", ctx.tableConfig)("actions", ctx.tableActions)("loading", false)("externalSearch", ctx.searchQuery);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showAddEditModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showPasswordModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, MaxLengthValidator, NgModel, DataTableComponent], styles: ["\n\n[_ngcontent-%COMP%]:root {\n  --primary-bg: #1a1a1a;\n  --secondary-bg: #2d2d2d;\n  --tertiary-bg: #3a3a3a;\n  --surface-bg: #2a2a2a;\n  --primary-accent: #4a9eff;\n  --secondary-accent: #7c3aed;\n  --success-color: #10b981;\n  --warning-color: #f59e0b;\n  --error-color: #ef4444;\n  --text-primary: #ffffff;\n  --text-secondary: #e5e5e5;\n  --text-muted: #a3a3a3;\n  --text-disabled: #6b7280;\n  --border-primary: #4a4a4a;\n  --border-secondary: #3a3a3a;\n  --border-accent: #5a5a5a;\n  --shadow-light: rgba(0, 0, 0, 0.1);\n  --shadow-medium: rgba(0, 0, 0, 0.2);\n  --shadow-heavy: rgba(0, 0, 0, 0.3);\n  --hover-bg: #3a3a3a;\n  --hover-accent: #5bb0ff;\n  --active-bg: #4a4a4a;\n  --active-accent: #3a8fdf;\n}\n.user-management-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 16px;\n  height: calc(100vh - 66px);\n  max-height: calc(100vh - 66px);\n  overflow: hidden;\n  box-sizing: border-box;\n  background: #0f1115;\n  color: #e6e6e6;\n}\n.user-management-container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n.user-management-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type=checkbox]):not([type=radio]):focus, \n.user-management-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, \n.user-management-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  border-color: #4a5568 !important;\n  box-shadow: 0 0 0 2px rgba(74, 85, 104, 0.15) !important;\n}\n.master-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 16px;\n  flex-shrink: 0;\n}\n.master-toolbar[_ngcontent-%COMP%]   .master-search-wrapper[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 500px;\n}\n.master-search-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.master-search-wrapper[_ngcontent-%COMP%]   .master-search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 40px 8px 10px;\n  background: #1f2228;\n  border: 1px solid #3a3f47;\n  border-radius: 8px;\n  color: #e6e6e6;\n  font-size: 0.95rem;\n  transition: all 0.2s ease;\n}\n.master-search-wrapper[_ngcontent-%COMP%]   .master-search-input[_ngcontent-%COMP%]::placeholder {\n  color: #9aa0a6;\n  opacity: 0.7;\n}\n.master-search-wrapper[_ngcontent-%COMP%]   .master-search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #4a5568;\n  box-shadow: 0 0 0 2px rgba(74, 85, 104, 0.15);\n}\n.master-search-wrapper[_ngcontent-%COMP%]   .master-search-clear[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: transparent;\n  border: none;\n  color: #9aa0a6;\n  cursor: pointer;\n  padding: 6px 10px;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  transition: all 0.2s ease;\n  z-index: 1;\n}\n.master-search-wrapper[_ngcontent-%COMP%]   .master-search-clear[_ngcontent-%COMP%]:hover {\n  color: #e6e6e6;\n  background: rgba(255, 255, 255, 0.15);\n}\n.table-view[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 0;\n  overflow: hidden;\n  background: transparent;\n}\n.table-view[_ngcontent-%COMP%]   app-data-table[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.roles-selection[_ngcontent-%COMP%] {\n  max-height: 200px;\n  overflow-y: auto;\n  padding: 12px;\n  background: #1b1f26;\n  border: 1px solid #2a2f36;\n  border-radius: 6px;\n}\n.roles-selection[_ngcontent-%COMP%]   .role-checkbox-item[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.roles-selection[_ngcontent-%COMP%]   .role-checkbox-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.roles-selection[_ngcontent-%COMP%]   .role-checkbox-item[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  cursor: pointer;\n}\n.roles-selection[_ngcontent-%COMP%]   .role-checkbox-item[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   .role-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #e6e6e6;\n}\n.roles-selection[_ngcontent-%COMP%]   .role-checkbox-item[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   .role-description[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9aa0a6;\n  margin-left: auto;\n}\n.roles-selection[_ngcontent-%COMP%]   .no-roles-message[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #9aa0a6;\n  padding: 20px;\n  font-size: 14px;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 12px;\n  background: #2c2f36;\n  color: #e6e6e6;\n  border: 1px solid #3a3f47;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 500;\n  transition: all 0.2s ease;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  background: #3a3f47;\n  border-color: #4a5568;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  border-color: #3b82f6;\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n  border-color: #2563eb;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background: #4a5568;\n  border-color: #4a5568;\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #5a6578;\n  border-color: #5a6578;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: 1px solid #3a3f47;\n  border-radius: 6px;\n  color: #e6e6e6;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 14px;\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  background: #2c2f36;\n  border-color: #4a5568;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #e6e6e6;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.form-group[_ngcontent-%COMP%]   label.form-label-inline[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 0;\n  margin-right: 12px;\n  vertical-align: middle;\n}\n.form-group.form-group-checkbox[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0;\n}\n.form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  background: #1b1f26;\n  border: 1px solid #2a2f36;\n  border-radius: 6px;\n  color: #e6e6e6;\n  font-size: 14px;\n  transition: all 0.2s ease;\n  box-sizing: border-box;\n}\n.form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]::placeholder {\n  color: #9aa0a6;\n}\n.form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:focus {\n  border-color: #4a5568;\n  box-shadow: 0 0 0 2px rgba(74, 85, 104, 0.15);\n}\n.form-group[_ngcontent-%COMP%]   .form-input.error[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.form-group[_ngcontent-%COMP%]   .form-input.error[_ngcontent-%COMP%]:focus {\n  border-color: #ef4444;\n  box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.15);\n}\n.form-group[_ngcontent-%COMP%]   textarea.form-input[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.form-group[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 12px;\n  margin-top: 4px;\n  display: block;\n}\n.checkbox-label[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  margin-bottom: 0;\n  vertical-align: middle;\n}\n.checkbox-label[_ngcontent-%COMP%]   .checkbox-input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0;\n  pointer-events: none;\n}\n.checkbox-label[_ngcontent-%COMP%]   .checkbox-toggle[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  width: 48px;\n  height: 26px;\n  background: rgba(30, 30, 30, 0.9);\n  border: 1.5px solid rgba(100, 100, 100, 0.3);\n  border-radius: 13px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  overflow: hidden;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.05);\n  cursor: pointer;\n  flex-shrink: 0;\n}\n.checkbox-label[_ngcontent-%COMP%]   .checkbox-toggle[_ngcontent-%COMP%]   .toggle-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  width: 20px;\n  height: 20px;\n  background: rgba(200, 200, 200, 0.3);\n  border: 1.5px solid rgba(180, 180, 180, 0.4);\n  border-radius: 50%;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.15);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  transform: translateX(0);\n  z-index: 2;\n}\n.checkbox-label[_ngcontent-%COMP%]   .checkbox-input[_ngcontent-%COMP%]:checked    + .checkbox-toggle[_ngcontent-%COMP%] {\n  background: rgba(50, 50, 50, 0.95);\n  border-color: rgba(59, 130, 246, 0.6);\n  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.05);\n}\n.checkbox-label[_ngcontent-%COMP%]   .checkbox-input[_ngcontent-%COMP%]:checked    + .checkbox-toggle[_ngcontent-%COMP%]   .toggle-indicator[_ngcontent-%COMP%] {\n  transform: translateX(22px);\n  background: rgba(59, 130, 246, 0.95);\n  border-color: rgba(59, 130, 246, 0.8);\n  box-shadow: 0 2px 6px rgba(59, 130, 246, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.2);\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.75);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 20px;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: #1a1d24;\n  border: 1px solid #2a2f36;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 600px;\n  max-height: 90vh;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px;\n  border-bottom: 1px solid #2a2f36;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: #e6e6e6;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 20px;\n  border-top: 1px solid #2a2f36;\n}\n/*# sourceMappingURL=user-management.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserManagementComponent, [{
    type: Component,
    args: [{ selector: "app-user-management", standalone: true, imports: [CommonModule, FormsModule, DataTableComponent], template: `<div class="user-management-container">\r
  <!-- Search and Add Button Row -->\r
  <div class="master-toolbar" *ngIf="tableConfig.searchable">\r
    <div class="master-search-wrapper">\r
      <input \r
        type="text" \r
        class="master-search-input" \r
        [(ngModel)]="searchQuery"\r
        (ngModelChange)="onSearchChange()"\r
        placeholder="Search users..."\r
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
      aria-label="Add new user"\r
      title="Create a new user"\r
    >\r
      <i class="fas fa-plus icon" [attr.aria-hidden]="true"></i>\r
      <span class="label">Add User</span>\r
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
      emptyMessage="No users available"\r
      searchPlaceholder="Search users..."\r
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
        <h3>{{ isEditMode ? 'Edit User' : 'Add New User' }}</h3>\r
        <button class="btn-icon" (click)="closeModal()" title="Close">\r
          <i class="fas fa-times"></i>\r
        </button>\r
      </div>\r
\r
      <div class="modal-body">\r
        <div class="form-group">\r
          <label for="userEmail">Email <span class="required">*</span></label>\r
          <input \r
            type="email" \r
            id="userEmail"\r
            class="form-input" \r
            [class.error]="emailError"\r
            [(ngModel)]="formUser.email"\r
            placeholder="user@example.com"\r
            maxlength="255"\r
          />\r
          <div class="error-message" *ngIf="emailError">{{ emailError }}</div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label for="userUsername">Username <span class="required">*</span></label>\r
          <input \r
            type="text" \r
            id="userUsername"\r
            class="form-input" \r
            [class.error]="usernameError"\r
            [(ngModel)]="formUser.username"\r
            placeholder="username"\r
            maxlength="100"\r
          />\r
          <div class="error-message" *ngIf="usernameError">{{ usernameError }}</div>\r
        </div>\r
\r
        <div class="form-group" *ngIf="!isEditMode">\r
          <label for="userPassword">Password <span class="required">*</span></label>\r
          <input \r
            type="password" \r
            id="userPassword"\r
            class="form-input" \r
            [class.error]="passwordFormError"\r
            [(ngModel)]="formUser.password"\r
            placeholder="Minimum 6 characters"\r
          />\r
          <div class="error-message" *ngIf="passwordFormError">{{ passwordFormError }}</div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label for="userFirstName">First Name <span class="required">*</span></label>\r
          <input \r
            type="text" \r
            id="userFirstName"\r
            class="form-input" \r
            [class.error]="firstNameError"\r
            [(ngModel)]="formUser.first_name"\r
            placeholder="First Name"\r
            maxlength="100"\r
          />\r
          <div class="error-message" *ngIf="firstNameError">{{ firstNameError }}</div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label for="userLastName">Last Name <span class="required">*</span></label>\r
          <input \r
            type="text" \r
            id="userLastName"\r
            class="form-input" \r
            [class.error]="lastNameError"\r
            [(ngModel)]="formUser.last_name"\r
            placeholder="Last Name"\r
            maxlength="100"\r
          />\r
          <div class="error-message" *ngIf="lastNameError">{{ lastNameError }}</div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label for="userPhone">Phone</label>\r
          <input \r
            type="tel" \r
            id="userPhone"\r
            class="form-input" \r
            [class.error]="phoneError"\r
            [(ngModel)]="formUser.phone"\r
            placeholder="+1234567890"\r
            maxlength="20"\r
          />\r
          <div class="error-message" *ngIf="phoneError">{{ phoneError }}</div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label>Roles</label>\r
          <div class="roles-selection">\r
            <div \r
              *ngFor="let role of roles" \r
              class="role-checkbox-item"\r
            >\r
              <label class="checkbox-label">\r
                <input \r
                  type="checkbox"\r
                  [checked]="isRoleSelected(role.id)"\r
                  (change)="toggleRoleSelection(role.id)"\r
                  class="checkbox-input"\r
                />\r
                <span class="checkbox-toggle">\r
                  <span class="toggle-indicator"></span>\r
                </span>\r
                <span class="role-name">{{ role.name }}</span>\r
                <span class="role-description" *ngIf="role.description">{{ role.description }}</span>\r
              </label>\r
            </div>\r
            <div class="no-roles-message" *ngIf="roles.length === 0">\r
              No active roles available\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="form-group form-group-checkbox">\r
          <label for="userActive" class="form-label-inline">Active</label>\r
          <label class="checkbox-label">\r
            <input \r
              type="checkbox" \r
              id="userActive"\r
              [(ngModel)]="formUser.is_active"\r
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
        <button class="btn btn-primary" (click)="saveUser()">\r
          {{ isEditMode ? 'Update' : 'Create' }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Change Password Modal -->\r
  <div class="modal-overlay" *ngIf="showPasswordModal" (click)="closePasswordModal()">\r
    <div class="modal-content" (click)="$event.stopPropagation()">\r
      <div class="modal-header">\r
        <h3>Change Password</h3>\r
        <button class="btn-icon" (click)="closePasswordModal()" title="Close">\r
          <i class="fas fa-times"></i>\r
        </button>\r
      </div>\r
\r
      <div class="modal-body">\r
        <div class="form-group">\r
          <label for="newPassword">New Password <span class="required">*</span></label>\r
          <input \r
            type="password" \r
            id="newPassword"\r
            class="form-input" \r
            [class.error]="passwordError"\r
            [(ngModel)]="newPassword"\r
            placeholder="Minimum 6 characters"\r
          />\r
        </div>\r
\r
        <div class="form-group">\r
          <label for="confirmPassword">Confirm Password <span class="required">*</span></label>\r
          <input \r
            type="password" \r
            id="confirmPassword"\r
            class="form-input" \r
            [class.error]="passwordError"\r
            [(ngModel)]="confirmPassword"\r
            placeholder="Re-enter password"\r
          />\r
          <div class="error-message" *ngIf="passwordError">{{ passwordError }}</div>\r
        </div>\r
      </div>\r
\r
      <div class="modal-footer">\r
        <button class="btn btn-secondary" (click)="closePasswordModal()">Cancel</button>\r
        <button class="btn btn-primary" (click)="changePassword()">\r
          Change Password\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
`, styles: ["/* src/app/components/user-management/user-management.scss */\n:root {\n  --primary-bg: #1a1a1a;\n  --secondary-bg: #2d2d2d;\n  --tertiary-bg: #3a3a3a;\n  --surface-bg: #2a2a2a;\n  --primary-accent: #4a9eff;\n  --secondary-accent: #7c3aed;\n  --success-color: #10b981;\n  --warning-color: #f59e0b;\n  --error-color: #ef4444;\n  --text-primary: #ffffff;\n  --text-secondary: #e5e5e5;\n  --text-muted: #a3a3a3;\n  --text-disabled: #6b7280;\n  --border-primary: #4a4a4a;\n  --border-secondary: #3a3a3a;\n  --border-accent: #5a5a5a;\n  --shadow-light: rgba(0, 0, 0, 0.1);\n  --shadow-medium: rgba(0, 0, 0, 0.2);\n  --shadow-heavy: rgba(0, 0, 0, 0.3);\n  --hover-bg: #3a3a3a;\n  --hover-accent: #5bb0ff;\n  --active-bg: #4a4a4a;\n  --active-accent: #3a8fdf;\n}\n.user-management-container {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 16px;\n  height: calc(100vh - 66px);\n  max-height: calc(100vh - 66px);\n  overflow: hidden;\n  box-sizing: border-box;\n  background: #0f1115;\n  color: #e6e6e6;\n}\n.user-management-container *:focus {\n  outline: none !important;\n}\n.user-management-container input:not([type=checkbox]):not([type=radio]):focus,\n.user-management-container textarea:focus,\n.user-management-container select:focus {\n  outline: none !important;\n  border-color: #4a5568 !important;\n  box-shadow: 0 0 0 2px rgba(74, 85, 104, 0.15) !important;\n}\n.master-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 16px;\n  flex-shrink: 0;\n}\n.master-toolbar .master-search-wrapper {\n  flex: 1;\n  max-width: 500px;\n}\n.master-search-wrapper {\n  position: relative;\n  width: 100%;\n}\n.master-search-wrapper .master-search-input {\n  width: 100%;\n  padding: 8px 40px 8px 10px;\n  background: #1f2228;\n  border: 1px solid #3a3f47;\n  border-radius: 8px;\n  color: #e6e6e6;\n  font-size: 0.95rem;\n  transition: all 0.2s ease;\n}\n.master-search-wrapper .master-search-input::placeholder {\n  color: #9aa0a6;\n  opacity: 0.7;\n}\n.master-search-wrapper .master-search-input:focus {\n  outline: none;\n  border-color: #4a5568;\n  box-shadow: 0 0 0 2px rgba(74, 85, 104, 0.15);\n}\n.master-search-wrapper .master-search-clear {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: transparent;\n  border: none;\n  color: #9aa0a6;\n  cursor: pointer;\n  padding: 6px 10px;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  transition: all 0.2s ease;\n  z-index: 1;\n}\n.master-search-wrapper .master-search-clear:hover {\n  color: #e6e6e6;\n  background: rgba(255, 255, 255, 0.15);\n}\n.table-view {\n  flex: 1;\n  min-height: 0;\n  overflow: hidden;\n  background: transparent;\n}\n.table-view app-data-table {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.roles-selection {\n  max-height: 200px;\n  overflow-y: auto;\n  padding: 12px;\n  background: #1b1f26;\n  border: 1px solid #2a2f36;\n  border-radius: 6px;\n}\n.roles-selection .role-checkbox-item {\n  margin-bottom: 12px;\n}\n.roles-selection .role-checkbox-item:last-child {\n  margin-bottom: 0;\n}\n.roles-selection .role-checkbox-item .checkbox-label {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  cursor: pointer;\n}\n.roles-selection .role-checkbox-item .checkbox-label .role-name {\n  font-weight: 500;\n  color: #e6e6e6;\n}\n.roles-selection .role-checkbox-item .checkbox-label .role-description {\n  font-size: 12px;\n  color: #9aa0a6;\n  margin-left: auto;\n}\n.roles-selection .no-roles-message {\n  text-align: center;\n  color: #9aa0a6;\n  padding: 20px;\n  font-size: 14px;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 12px;\n  background: #2c2f36;\n  color: #e6e6e6;\n  border: 1px solid #3a3f47;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 500;\n  transition: all 0.2s ease;\n}\n.btn:hover {\n  background: #3a3f47;\n  border-color: #4a5568;\n}\n.btn.btn-primary {\n  background: #3b82f6;\n  border-color: #3b82f6;\n  color: white;\n}\n.btn.btn-primary:hover {\n  background: #2563eb;\n  border-color: #2563eb;\n}\n.btn.btn-secondary {\n  background: #4a5568;\n  border-color: #4a5568;\n}\n.btn.btn-secondary:hover {\n  background: #5a6578;\n  border-color: #5a6578;\n}\n.btn-icon {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: 1px solid #3a3f47;\n  border-radius: 6px;\n  color: #e6e6e6;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 14px;\n}\n.btn-icon:hover {\n  background: #2c2f36;\n  border-color: #4a5568;\n}\n.form-group {\n  margin-bottom: 16px;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #e6e6e6;\n}\n.form-group label .required {\n  color: #ef4444;\n}\n.form-group label.form-label-inline {\n  display: inline-block;\n  margin-bottom: 0;\n  margin-right: 12px;\n  vertical-align: middle;\n}\n.form-group.form-group-checkbox {\n  display: flex;\n  align-items: center;\n  gap: 0;\n}\n.form-group .form-input {\n  width: 100%;\n  padding: 8px 12px;\n  background: #1b1f26;\n  border: 1px solid #2a2f36;\n  border-radius: 6px;\n  color: #e6e6e6;\n  font-size: 14px;\n  transition: all 0.2s ease;\n  box-sizing: border-box;\n}\n.form-group .form-input::placeholder {\n  color: #9aa0a6;\n}\n.form-group .form-input:focus {\n  border-color: #4a5568;\n  box-shadow: 0 0 0 2px rgba(74, 85, 104, 0.15);\n}\n.form-group .form-input.error {\n  border-color: #ef4444;\n}\n.form-group .form-input.error:focus {\n  border-color: #ef4444;\n  box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.15);\n}\n.form-group textarea.form-input {\n  resize: vertical;\n  min-height: 80px;\n}\n.form-group .error-message {\n  color: #ef4444;\n  font-size: 12px;\n  margin-top: 4px;\n  display: block;\n}\n.checkbox-label {\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  margin-bottom: 0;\n  vertical-align: middle;\n}\n.checkbox-label .checkbox-input {\n  position: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0;\n  pointer-events: none;\n}\n.checkbox-label .checkbox-toggle {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  width: 48px;\n  height: 26px;\n  background: rgba(30, 30, 30, 0.9);\n  border: 1.5px solid rgba(100, 100, 100, 0.3);\n  border-radius: 13px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  overflow: hidden;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.05);\n  cursor: pointer;\n  flex-shrink: 0;\n}\n.checkbox-label .checkbox-toggle .toggle-indicator {\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  width: 20px;\n  height: 20px;\n  background: rgba(200, 200, 200, 0.3);\n  border: 1.5px solid rgba(180, 180, 180, 0.4);\n  border-radius: 50%;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.15);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  transform: translateX(0);\n  z-index: 2;\n}\n.checkbox-label .checkbox-input:checked + .checkbox-toggle {\n  background: rgba(50, 50, 50, 0.95);\n  border-color: rgba(59, 130, 246, 0.6);\n  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.05);\n}\n.checkbox-label .checkbox-input:checked + .checkbox-toggle .toggle-indicator {\n  transform: translateX(22px);\n  background: rgba(59, 130, 246, 0.95);\n  border-color: rgba(59, 130, 246, 0.8);\n  box-shadow: 0 2px 6px rgba(59, 130, 246, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.2);\n}\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.75);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 20px;\n}\n.modal-content {\n  background: #1a1d24;\n  border: 1px solid #2a2f36;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 600px;\n  max-height: 90vh;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px;\n  border-bottom: 1px solid #2a2f36;\n}\n.modal-header h3 {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: #e6e6e6;\n}\n.modal-body {\n  padding: 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.modal-footer {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 20px;\n  border-top: 1px solid #2a2f36;\n}\n/*# sourceMappingURL=user-management.css.map */\n"] }]
  }], () => [{ type: UsersService }, { type: RolesService }, { type: ToasterService }, { type: ConfirmationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserManagementComponent, { className: "UserManagementComponent", filePath: "src/app/components/user-management/user-management.ts", lineNumber: 17 });
})();
export {
  UserManagementComponent
};
//# sourceMappingURL=chunk-OCXC6ZEN.js.map
