import {
  CredentialsMasterService
} from "./chunk-HDXWDRVO.js";
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
  __spreadProps,
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

// src/app/components/credentials-master/credentials-master.ts
function CredentialsMasterComponent_div_1_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function CredentialsMasterComponent_div_1_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.searchQuery = "";
      return \u0275\u0275resetView(ctx_r1.onSearchChange());
    });
    \u0275\u0275element(1, "i", 13);
    \u0275\u0275elementEnd();
  }
}
function CredentialsMasterComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "input", 7);
    \u0275\u0275twoWayListener("ngModelChange", function CredentialsMasterComponent_div_1_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchQuery, $event) || (ctx_r1.searchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function CredentialsMasterComponent_div_1_Template_input_ngModelChange_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearchChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CredentialsMasterComponent_div_1_button_3_Template, 2, 0, "button", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 9);
    \u0275\u0275listener("click", function CredentialsMasterComponent_div_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAddModal());
    });
    \u0275\u0275element(5, "i", 10);
    \u0275\u0275elementStart(6, "span", 11);
    \u0275\u0275text(7, "Add Credential");
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
function CredentialsMasterComponent_div_4_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.providerError);
  }
}
function CredentialsMasterComponent_div_4_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.credentialNameError);
  }
}
function CredentialsMasterComponent_div_4_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.credentialIdError);
  }
}
function CredentialsMasterComponent_div_4_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.passwordError);
  }
}
function CredentialsMasterComponent_div_4_div_48_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const key_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.additionalFieldErrors[key_r7]);
  }
}
function CredentialsMasterComponent_div_4_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50)(1, "input", 51);
    \u0275\u0275listener("ngModelChange", function CredentialsMasterComponent_div_4_div_48_Template_input_ngModelChange_1_listener($event) {
      const ctx_r5 = \u0275\u0275restoreView(_r5);
      const key_r7 = ctx_r5.$implicit;
      const i_r8 = ctx_r5.index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateAdditionalFieldKey(key_r7, $event, i_r8));
    })("blur", function CredentialsMasterComponent_div_4_div_48_Template_input_blur_1_listener() {
      const key_r7 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAdditionalFieldKeyBlur(key_r7));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function CredentialsMasterComponent_div_4_div_48_Template_input_ngModelChange_2_listener($event) {
      const key_r7 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.additionalFieldsJson[key_r7], $event) || (ctx_r1.additionalFieldsJson[key_r7] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("blur", function CredentialsMasterComponent_div_4_div_48_Template_input_blur_2_listener() {
      const key_r7 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.validateAdditionalFieldValue(key_r7));
    })("input", function CredentialsMasterComponent_div_4_div_48_Template_input_input_2_listener() {
      const key_r7 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAdditionalFieldValueInput(key_r7));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CredentialsMasterComponent_div_4_div_48_div_3_Template, 2, 1, "div", 53);
    \u0275\u0275elementStart(4, "button", 54);
    \u0275\u0275listener("click", function CredentialsMasterComponent_div_4_div_48_Template_button_click_4_listener() {
      const key_r7 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeAdditionalField(key_r7));
    });
    \u0275\u0275element(5, "i", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const key_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.tempKeyValues[key_r7] !== void 0 ? ctx_r1.tempKeyValues[key_r7] : key_r7);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.additionalFieldErrors[key_r7]);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.additionalFieldsJson[key_r7]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.additionalFieldErrors[key_r7]);
  }
}
function CredentialsMasterComponent_div_4_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.additionalFieldsError);
  }
}
function CredentialsMasterComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275listener("click", function CredentialsMasterComponent_div_4_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 15);
    \u0275\u0275listener("click", function CredentialsMasterComponent_div_4_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 16)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 17);
    \u0275\u0275listener("click", function CredentialsMasterComponent_div_4_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275element(6, "i", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 18)(8, "div", 19)(9, "label", 20);
    \u0275\u0275text(10, "Provider ");
    \u0275\u0275elementStart(11, "span", 21);
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function CredentialsMasterComponent_div_4_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formCredential.provider, $event) || (ctx_r1.formCredential.provider = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function CredentialsMasterComponent_div_4_Template_input_input_13_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onInput("provider"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, CredentialsMasterComponent_div_4_div_14_Template, 2, 1, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 19)(16, "label", 24);
    \u0275\u0275text(17, "Credential Name ");
    \u0275\u0275elementStart(18, "span", 21);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function CredentialsMasterComponent_div_4_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formCredential.credential_name, $event) || (ctx_r1.formCredential.credential_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function CredentialsMasterComponent_div_4_Template_input_input_20_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onInput("credential_name"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, CredentialsMasterComponent_div_4_div_21_Template, 2, 1, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 19)(23, "label", 26);
    \u0275\u0275text(24, "Credential ID ");
    \u0275\u0275elementStart(25, "span", 21);
    \u0275\u0275text(26, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function CredentialsMasterComponent_div_4_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formCredential.credential_id, $event) || (ctx_r1.formCredential.credential_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("blur", function CredentialsMasterComponent_div_4_Template_input_blur_27_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCredentialIdBlur());
    })("input", function CredentialsMasterComponent_div_4_Template_input_input_27_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onInput("credential_id"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, CredentialsMasterComponent_div_4_div_28_Template, 2, 1, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 19)(30, "label", 28);
    \u0275\u0275text(31, "Password ");
    \u0275\u0275elementStart(32, "span", 21);
    \u0275\u0275text(33, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 29)(35, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function CredentialsMasterComponent_div_4_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formCredential.credential_password, $event) || (ctx_r1.formCredential.credential_password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("blur", function CredentialsMasterComponent_div_4_Template_input_blur_35_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPasswordBlur());
    })("input", function CredentialsMasterComponent_div_4_Template_input_input_35_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onInput("password"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 31);
    \u0275\u0275listener("click", function CredentialsMasterComponent_div_4_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showPassword = !ctx_r1.showPassword);
    });
    \u0275\u0275element(37, "i", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(38, CredentialsMasterComponent_div_4_div_38_Template, 2, 1, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 19)(40, "label", 33);
    \u0275\u0275text(41, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "textarea", 34);
    \u0275\u0275twoWayListener("ngModelChange", function CredentialsMasterComponent_div_4_Template_textarea_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formCredential.notes, $event) || (ctx_r1.formCredential.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 19)(44, "label");
    \u0275\u0275text(45, "Additional Fields (Key-Value Pairs)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 35)(47, "div", 36);
    \u0275\u0275template(48, CredentialsMasterComponent_div_4_div_48_Template, 6, 5, "div", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "button", 38);
    \u0275\u0275listener("click", function CredentialsMasterComponent_div_4_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addAdditionalField());
    });
    \u0275\u0275element(50, "i", 39);
    \u0275\u0275text(51, " Add Field ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(52, CredentialsMasterComponent_div_4_div_52_Template, 2, 1, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 40)(54, "label", 41);
    \u0275\u0275text(55, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "label", 42)(57, "input", 43);
    \u0275\u0275twoWayListener("ngModelChange", function CredentialsMasterComponent_div_4_Template_input_ngModelChange_57_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formCredential.is_active, $event) || (ctx_r1.formCredential.is_active = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span", 44);
    \u0275\u0275element(59, "span", 45);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(60, "div", 46)(61, "button", 47);
    \u0275\u0275listener("click", function CredentialsMasterComponent_div_4_Template_button_click_61_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(62, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "button", 48);
    \u0275\u0275listener("click", function CredentialsMasterComponent_div_4_Template_button_click_63_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveCredential());
    });
    \u0275\u0275text(64);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.isEditMode ? "Edit Credential" : "Add New Credential");
    \u0275\u0275advance(9);
    \u0275\u0275classProp("error", ctx_r1.providerError);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formCredential.provider);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.providerError);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("error", ctx_r1.credentialNameError);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formCredential.credential_name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.credentialNameError);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("error", ctx_r1.credentialIdError);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formCredential.credential_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.credentialIdError);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("error", ctx_r1.passwordError);
    \u0275\u0275property("type", ctx_r1.showPassword ? "text" : "password");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formCredential.credential_password);
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r1.showPassword ? "Hide password" : "Show password");
    \u0275\u0275advance();
    \u0275\u0275classProp("fa-eye", !ctx_r1.showPassword)("fa-eye-slash", ctx_r1.showPassword);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.passwordError);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formCredential.notes);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r1.getAdditionalFieldsKeys());
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.additionalFieldsError);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formCredential.is_active);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditMode ? "Update" : "Create", " ");
  }
}
var CredentialsMasterComponent = class _CredentialsMasterComponent {
  credentialsService;
  toaster;
  confirmation;
  credentials = [];
  filteredCredentials = [];
  searchQuery = "";
  showAddEditModal = false;
  isEditMode = false;
  selectedCredential = null;
  isToggleInProgress = false;
  formCredential = {
    id: 0,
    provider: "",
    credential_name: "",
    credential_id: "",
    credential_password: "",
    additional_fields: "{}",
    notes: "",
    is_active: true
  };
  providerError = "";
  credentialNameError = "";
  credentialIdError = "";
  passwordError = "";
  additionalFieldsError = "";
  additionalFieldsJson = {};
  showPassword = false;
  additionalFieldErrors = {};
  tempKeyValues = {};
  // Store temporary key values during editing
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
      key: "provider",
      title: "Provider",
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
      key: "credential_name",
      title: "Credential Name",
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
      key: "credential_id",
      title: "Credential ID",
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
      key: "credential_password",
      title: "Password",
      sortable: false,
      filterable: false,
      resizable: true,
      width: "200px",
      minWidth: "150px",
      maxWidth: "300px",
      align: "left",
      type: "password",
      hidden: false
    },
    {
      key: "additional_fields",
      title: "Additional Fields",
      sortable: false,
      filterable: false,
      resizable: true,
      width: "200px",
      minWidth: "150px",
      maxWidth: "400px",
      align: "left",
      type: "json",
      hidden: false
    },
    {
      key: "notes",
      title: "Notes",
      sortable: false,
      filterable: true,
      resizable: true,
      width: "250px",
      minWidth: "200px",
      maxWidth: "500px",
      align: "left",
      type: "text",
      hidden: false
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
  constructor(credentialsService, toaster, confirmation) {
    this.credentialsService = credentialsService;
    this.toaster = toaster;
    this.confirmation = confirmation;
  }
  ngOnInit() {
    this.loadCredentials();
  }
  loadCredentials() {
    this.credentialsService.getAllCredentials().subscribe({
      next: (data) => {
        this.credentials = data;
        this.filteredCredentials = data;
      },
      error: (error) => {
        this.toaster.error(`Failed to load credentials: ${error.message || "Unknown error"}`);
      }
    });
  }
  onSearchChange() {
  }
  getTableData() {
    return this.filteredCredentials.map((cred) => {
      const _a = cred, { id } = _a, rest = __objRest(_a, ["id"]);
      return __spreadValues({
        id: id.toString()
      }, rest);
    });
  }
  openAddModal() {
    this.isEditMode = false;
    this.formCredential = {
      id: 0,
      provider: "",
      credential_name: "",
      credential_id: "",
      credential_password: "",
      additional_fields: "{}",
      notes: "",
      is_active: true
    };
    this.additionalFieldsJson = {};
    this.selectedCredential = null;
    this.clearErrors();
    this.showAddEditModal = true;
  }
  openEditModal(credential) {
    const cred = credential;
    this.isEditMode = true;
    this.selectedCredential = cred;
    this.formCredential = {
      id: cred.id,
      provider: cred.provider,
      credential_name: cred.credential_name,
      credential_id: cred.credential_id,
      credential_password: cred.credential_password || "",
      additional_fields: cred.additional_fields || "{}",
      notes: cred.notes || "",
      is_active: cred.is_active ?? true
    };
    try {
      this.additionalFieldsJson = cred.additional_fields ? JSON.parse(cred.additional_fields) : {};
    } catch {
      this.additionalFieldsJson = {};
    }
    this.clearErrors();
    this.showAddEditModal = true;
  }
  closeModal() {
    this.showAddEditModal = false;
    this.isEditMode = false;
    this.selectedCredential = null;
    this.formCredential = {
      id: 0,
      provider: "",
      credential_name: "",
      credential_id: "",
      credential_password: "",
      additional_fields: "{}",
      notes: "",
      is_active: true
    };
    this.additionalFieldsJson = {};
    this.showPassword = false;
    this.additionalFieldErrors = {};
    this.tempKeyValues = {};
    this.clearErrors();
  }
  clearErrors() {
    this.providerError = "";
    this.credentialNameError = "";
    this.credentialIdError = "";
    this.passwordError = "";
    this.additionalFieldsError = "";
  }
  addAdditionalField() {
    if (!this.additionalFieldsJson) {
      this.additionalFieldsJson = {};
    }
    const newKey = `field_${Object.keys(this.additionalFieldsJson).length + 1}`;
    this.additionalFieldsJson[newKey] = "";
  }
  removeAdditionalField(key) {
    if (this.additionalFieldsJson) {
      delete this.additionalFieldsJson[key];
    }
  }
  updateAdditionalFieldKey(oldKey, newKey, index) {
    if (!this.additionalFieldsJson) {
      return;
    }
    this.tempKeyValues[oldKey] = newKey;
  }
  onAdditionalFieldKeyBlur(key) {
    const newKey = this.tempKeyValues[key];
    if (newKey !== void 0 && newKey !== key) {
      const trimmedNewKey = newKey.trim();
      if (trimmedNewKey === "") {
        delete this.tempKeyValues[key];
        return;
      }
      if (this.additionalFieldsJson[trimmedNewKey] !== void 0 && trimmedNewKey !== key) {
        delete this.tempKeyValues[key];
        return;
      }
      const value = this.additionalFieldsJson[key];
      delete this.additionalFieldsJson[key];
      this.additionalFieldsJson[trimmedNewKey] = value;
      if (this.additionalFieldErrors[key]) {
        delete this.additionalFieldErrors[key];
      }
      delete this.tempKeyValues[key];
      this.validateAdditionalFieldValue(trimmedNewKey);
    }
    this.validateAdditionalFieldValue(key);
    this.validateAdditionalFields();
  }
  onAdditionalFieldValueInput(key) {
    if (this.additionalFieldErrors[key]) {
      this.additionalFieldErrors[key] = "";
    }
  }
  validateAdditionalFieldValue(key) {
    if (key && key.trim() !== "") {
      const value = this.additionalFieldsJson[key];
      if (!value || value.trim() === "") {
        this.additionalFieldErrors[key] = "Value is required when key is provided";
      } else {
        delete this.additionalFieldErrors[key];
      }
    } else {
      delete this.additionalFieldErrors[key];
    }
  }
  getAdditionalFieldsKeys() {
    return this.additionalFieldsJson ? Object.keys(this.additionalFieldsJson) : [];
  }
  validateAdditionalFields() {
    this.additionalFieldsError = "";
    const keys = this.getAdditionalFieldsKeys();
    let hasErrors = false;
    for (const key of keys) {
      this.validateAdditionalFieldValue(key);
      if (this.additionalFieldErrors[key]) {
        hasErrors = true;
      }
    }
    if (hasErrors) {
      this.additionalFieldsError = "Please provide values for all fields with keys";
      return;
    }
    try {
      const jsonString = JSON.stringify(this.additionalFieldsJson);
      JSON.parse(jsonString);
      this.formCredential.additional_fields = jsonString;
    } catch (error) {
      this.additionalFieldsError = "Invalid JSON format";
    }
  }
  validateCredentialUniqueness() {
    this.credentialIdError = "";
    this.passwordError = "";
    const credentialIdValue = this.formCredential.credential_id?.trim();
    const passwordValue = this.formCredential.credential_password?.trim();
    if (!credentialIdValue || !passwordValue) {
      return;
    }
    const currentId = Number(this.formCredential.id);
    const existing = this.credentials.find((cred) => {
      const credId = Number(cred.id);
      return cred.credential_id?.toLowerCase() === credentialIdValue.toLowerCase() && cred.credential_password === passwordValue && credId !== currentId && !cred.is_deleted;
    });
    if (existing) {
      this.credentialIdError = "Credential with this ID and password combination already exists";
      this.passwordError = "Credential with this ID and password combination already exists";
    }
  }
  onCredentialIdBlur() {
    this.validateCredentialUniqueness();
  }
  onPasswordBlur() {
    this.validateCredentialUniqueness();
  }
  onInput(field) {
    if (field === "provider") {
      this.providerError = "";
    } else if (field === "credential_name") {
      this.credentialNameError = "";
    } else if (field === "credential_id") {
      if (!this.credentialIdError?.includes("already exists")) {
        this.credentialIdError = "";
      }
    } else if (field === "password") {
      if (!this.passwordError?.includes("already exists")) {
        this.passwordError = "";
      }
    } else if (field === "additional_fields") {
      this.validateAdditionalFields();
    }
  }
  saveCredential() {
    this.clearErrors();
    if (!this.formCredential.provider?.trim()) {
      this.providerError = "Provider is required";
    } else {
      this.providerError = "";
    }
    if (!this.formCredential.credential_name?.trim()) {
      this.credentialNameError = "Credential name is required";
    } else {
      this.credentialNameError = "";
    }
    if (!this.formCredential.credential_id?.trim()) {
      this.credentialIdError = "Credential ID is required";
    } else {
      this.credentialIdError = "";
    }
    if (!this.formCredential.credential_password?.trim()) {
      this.passwordError = "Password is required";
    } else {
      this.passwordError = "";
    }
    if (this.formCredential.credential_id?.trim() && this.formCredential.credential_password?.trim()) {
      this.validateCredentialUniqueness();
    }
    this.validateAdditionalFields();
    const hasFieldErrors = Object.keys(this.additionalFieldErrors).some((key) => this.additionalFieldErrors[key]);
    if (this.providerError || this.credentialNameError || this.credentialIdError || this.passwordError || this.additionalFieldsError || hasFieldErrors) {
      return;
    }
    this.credentialsService.addUpdateCredential(this.formCredential).subscribe({
      next: (data) => {
        this.toaster.success(`Credential "${data.credential_name}" has been ${this.isEditMode ? "updated" : "created"} successfully`);
        this.closeModal();
        this.loadCredentials();
      },
      error: (error) => {
        const errorMessage = error.error?.message || error.message || "Unknown error occurred";
        if (errorMessage.toLowerCase().includes("already exists")) {
          this.credentialIdError = "Credential with this ID and password combination already exists";
          this.passwordError = "Credential with this ID and password combination already exists";
          return;
        }
        this.toaster.error(`Operation Failed: ${errorMessage}`);
      }
    });
  }
  deleteCredential(credential) {
    this.confirmation.confirm({
      title: "Delete Credential",
      message: `Are you sure you want to delete "${credential.credential_name}"?`,
      confirmText: "Delete",
      cancelText: "Cancel",
      confirmClass: "danger"
    }).then((confirmed) => {
      if (confirmed) {
        this.credentialsService.deleteCredential(credential.id, false).subscribe({
          next: () => {
            this.toaster.success(`Credential "${credential.credential_name}" has been deleted successfully`);
            this.loadCredentials();
          },
          error: (error) => {
            this.toaster.error(`Delete Failed: ${error.error?.message || error.message || "Unknown error occurred"}`);
          }
        });
      }
    });
  }
  toggleActive(credential) {
    if (this.isToggleInProgress)
      return;
    const cred = credential;
    this.isToggleInProgress = true;
    const updatedCredential = __spreadProps(__spreadValues({}, cred), {
      is_active: !cred.is_active
    });
    this.credentialsService.addUpdateCredential(updatedCredential).subscribe({
      next: () => {
        this.toaster.success(`Credential "${cred.credential_name}" has been ${updatedCredential.is_active ? "activated" : "deactivated"}`);
        this.loadCredentials();
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
    const credential = event.row;
    switch (event.action) {
      case "edit":
        this.openEditModal(credential);
        break;
      case "delete":
        this.deleteCredential(credential);
        break;
    }
  }
  onBooleanToggle(event) {
    const cred = event.row;
    if (event.column === "is_active") {
      this.toggleActive(cred);
    }
  }
  onTableSortChange(event) {
    this.filteredCredentials.sort((a, b) => {
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
      this.filteredCredentials = this.credentials;
      return;
    }
    this.filteredCredentials = this.credentials.filter((cred) => String(cred[event.column]).toLowerCase().includes(String(event.value).toLowerCase()));
  }
  onTablePageChange(event) {
  }
  static \u0275fac = function CredentialsMasterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CredentialsMasterComponent)(\u0275\u0275directiveInject(CredentialsMasterService), \u0275\u0275directiveInject(ToasterService), \u0275\u0275directiveInject(ConfirmationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CredentialsMasterComponent, selectors: [["app-credentials-master"]], decls: 5, vars: 8, consts: [[1, "category-master-container"], ["class", "master-toolbar", 4, "ngIf"], [1, "table-view"], ["emptyMessage", "No credentials available", "searchPlaceholder", "Search credentials...", 3, "rowClick", "actionClick", "booleanToggle", "sortChange", "filterChange", "pageChange", "columns", "data", "config", "actions", "loading", "externalSearch"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "master-toolbar"], [1, "master-search-wrapper"], ["type", "text", "placeholder", "Search credentials...", 1, "master-search-input", 3, "ngModelChange", "ngModel"], ["class", "master-search-clear", "title", "Clear search", 3, "click", 4, "ngIf"], ["aria-label", "Add new credential", "title", "Create a new credential", 1, "add-action-btn", 3, "click"], [1, "fas", "fa-plus", "icon"], [1, "label"], ["title", "Clear search", 1, "master-search-clear", 3, "click"], [1, "fas", "fa-times"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], ["title", "Close", 1, "btn-icon", 3, "click"], [1, "modal-body"], [1, "form-group"], ["for", "credentialProvider"], [1, "required"], ["type", "text", "id", "credentialProvider", "placeholder", "e.g., Google Drive, AWS, GitHub", "maxlength", "200", 1, "form-input", 3, "ngModelChange", "input", "ngModel"], ["class", "error-message", 4, "ngIf"], ["for", "credentialName"], ["type", "text", "id", "credentialName", "placeholder", "e.g., Personal Gmail, Work Account", "maxlength", "200", 1, "form-input", 3, "ngModelChange", "input", "ngModel"], ["for", "credentialId"], ["type", "text", "id", "credentialId", "placeholder", "e.g., user@gmail.com", "maxlength", "500", 1, "form-input", 3, "ngModelChange", "blur", "input", "ngModel"], ["for", "credentialPassword"], [1, "password-input-wrapper"], ["id", "credentialPassword", "placeholder", "Enter password", 1, "form-input", 3, "ngModelChange", "blur", "input", "type", "ngModel"], ["type", "button", 1, "password-toggle-btn-form", 3, "click", "title"], [1, "fas"], ["for", "credentialNotes"], ["id", "credentialNotes", "placeholder", "Optional notes", "rows", "3", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "additional-fields-container"], [1, "additional-fields-list"], ["class", "additional-field-row", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "fas", "fa-plus"], [1, "form-group", "form-group-checkbox"], ["for", "credentialActive", 1, "form-label-inline"], [1, "checkbox-label"], ["type", "checkbox", "id", "credentialActive", 1, "checkbox-input", 3, "ngModelChange", "ngModel"], [1, "checkbox-toggle"], [1, "toggle-indicator"], [1, "modal-footer"], [1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-primary", 3, "click"], [1, "error-message"], [1, "additional-field-row"], ["type", "text", "placeholder", "Field name (e.g., Host, Port, Key)", 1, "form-input", "field-key", 3, "ngModelChange", "blur", "ngModel"], ["type", "text", "placeholder", "Field value", 1, "form-input", "field-value", 3, "ngModelChange", "blur", "input", "ngModel"], ["class", "field-error", 4, "ngIf"], ["title", "Remove field", 1, "btn-icon", "btn-remove-field", 3, "click"], [1, "field-error"]], template: function CredentialsMasterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, CredentialsMasterComponent_div_1_Template, 8, 3, "div", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "app-data-table", 3);
      \u0275\u0275listener("rowClick", function CredentialsMasterComponent_Template_app_data_table_rowClick_3_listener($event) {
        return ctx.onTableRowClick($event);
      })("actionClick", function CredentialsMasterComponent_Template_app_data_table_actionClick_3_listener($event) {
        return ctx.onTableActionClick($event);
      })("booleanToggle", function CredentialsMasterComponent_Template_app_data_table_booleanToggle_3_listener($event) {
        return ctx.onBooleanToggle($event);
      })("sortChange", function CredentialsMasterComponent_Template_app_data_table_sortChange_3_listener($event) {
        return ctx.onTableSortChange($event);
      })("filterChange", function CredentialsMasterComponent_Template_app_data_table_filterChange_3_listener($event) {
        return ctx.onTableFilterChange($event);
      })("pageChange", function CredentialsMasterComponent_Template_app_data_table_pageChange_3_listener($event) {
        return ctx.onTablePageChange($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(4, CredentialsMasterComponent_div_4_Template, 65, 28, "div", 4);
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
.additional-fields-container[_ngcontent-%COMP%]   .additional-fields-list[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;
  max-height: 300px;
  overflow-y: auto;
}
.additional-fields-container[_ngcontent-%COMP%]   .additional-fields-list[_ngcontent-%COMP%]   .additional-field-row[_ngcontent-%COMP%] {
  display: flex;
  gap: 8px;
  align-items: center;
}
.additional-fields-container[_ngcontent-%COMP%]   .additional-fields-list[_ngcontent-%COMP%]   .additional-field-row[_ngcontent-%COMP%]   .field-key[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 150px;
}
.additional-fields-container[_ngcontent-%COMP%]   .additional-fields-list[_ngcontent-%COMP%]   .additional-field-row[_ngcontent-%COMP%]   .field-value[_ngcontent-%COMP%] {
  flex: 2;
  min-width: 200px;
}
.additional-fields-container[_ngcontent-%COMP%]   .additional-fields-list[_ngcontent-%COMP%]   .additional-field-row[_ngcontent-%COMP%]   .btn-remove-field[_ngcontent-%COMP%] {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  background: rgba(239, 68, 68, 0.1);
  border-color: rgba(239, 68, 68, 0.3);
  color: #ef4444;
}
.additional-fields-container[_ngcontent-%COMP%]   .additional-fields-list[_ngcontent-%COMP%]   .additional-field-row[_ngcontent-%COMP%]   .btn-remove-field[_ngcontent-%COMP%]:hover {
  background: rgba(239, 68, 68, 0.2);
  border-color: rgba(239, 68, 68, 0.5);
}
.additional-fields-container[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%] {
  padding: 6px 12px;
  font-size: 0.85rem;
}
.password-input-wrapper[_ngcontent-%COMP%] {
  position: relative;
  display: flex;
  align-items: center;
}
.password-input-wrapper[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {
  padding-right: 40px;
}
.password-input-wrapper[_ngcontent-%COMP%]   .password-toggle-btn-form[_ngcontent-%COMP%] {
  position: absolute;
  right: 8px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  color: #9aa0a6;
  cursor: pointer;
  padding: 6px 10px;
  font-size: 14px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}
.password-input-wrapper[_ngcontent-%COMP%]   .password-toggle-btn-form[_ngcontent-%COMP%]:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
  color: var(--text-primary);
}
.password-input-wrapper[_ngcontent-%COMP%]   .password-toggle-btn-form[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  pointer-events: none;
}
.additional-field-row[_ngcontent-%COMP%] {
  position: relative;
}
.additional-field-row[_ngcontent-%COMP%]   .field-error[_ngcontent-%COMP%] {
  position: absolute;
  bottom: -18px;
  left: 0;
  font-size: 0.75rem;
  color: #ef4444;
  margin-top: 4px;
  white-space: nowrap;
}
.additional-field-row[_ngcontent-%COMP%]   .field-value.error[_ngcontent-%COMP%] {
  border-color: #ef4444;
}
.additional-field-row[_ngcontent-%COMP%]   .field-value.error[_ngcontent-%COMP%]:focus {
  border-color: #ef4444;
  box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.2);
}
/*# sourceMappingURL=credentials-master.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CredentialsMasterComponent, [{
    type: Component,
    args: [{ selector: "app-credentials-master", standalone: true, imports: [CommonModule, FormsModule, DataTableComponent], template: `<div class="category-master-container">\r
  <!-- Search and Add Button Row -->\r
  <div class="master-toolbar" *ngIf="tableConfig.searchable">\r
    <div class="master-search-wrapper">\r
      <input \r
        type="text" \r
        class="master-search-input" \r
        [(ngModel)]="searchQuery"\r
        (ngModelChange)="onSearchChange()"\r
        placeholder="Search credentials..."\r
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
      aria-label="Add new credential"\r
      title="Create a new credential"\r
    >\r
      <i class="fas fa-plus icon" [attr.aria-hidden]="true"></i>\r
      <span class="label">Add Credential</span>\r
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
      emptyMessage="No credentials available"\r
      searchPlaceholder="Search credentials..."\r
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
        <h3>{{ isEditMode ? 'Edit Credential' : 'Add New Credential' }}</h3>\r
        <button class="btn-icon" (click)="closeModal()" title="Close">\r
          <i class="fas fa-times"></i>\r
        </button>\r
      </div>\r
\r
      <div class="modal-body">\r
        <div class="form-group">\r
          <label for="credentialProvider">Provider <span class="required">*</span></label>\r
          <input \r
            type="text" \r
            id="credentialProvider"\r
            class="form-input" \r
            [class.error]="providerError"\r
            [(ngModel)]="formCredential.provider"\r
            (input)="onInput('provider')"\r
            placeholder="e.g., Google Drive, AWS, GitHub"\r
            maxlength="200"\r
          />\r
          <div class="error-message" *ngIf="providerError">{{ providerError }}</div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label for="credentialName">Credential Name <span class="required">*</span></label>\r
          <input \r
            type="text" \r
            id="credentialName"\r
            class="form-input" \r
            [class.error]="credentialNameError"\r
            [(ngModel)]="formCredential.credential_name"\r
            (input)="onInput('credential_name')"\r
            placeholder="e.g., Personal Gmail, Work Account"\r
            maxlength="200"\r
          />\r
          <div class="error-message" *ngIf="credentialNameError">{{ credentialNameError }}</div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label for="credentialId">Credential ID <span class="required">*</span></label>\r
          <input \r
            type="text" \r
            id="credentialId"\r
            class="form-input" \r
            [class.error]="credentialIdError"\r
            [(ngModel)]="formCredential.credential_id"\r
            (blur)="onCredentialIdBlur()"\r
            (input)="onInput('credential_id')"\r
            placeholder="e.g., user@gmail.com"\r
            maxlength="500"\r
          />\r
          <div class="error-message" *ngIf="credentialIdError">{{ credentialIdError }}</div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label for="credentialPassword">Password <span class="required">*</span></label>\r
          <div class="password-input-wrapper">\r
            <input \r
              [type]="showPassword ? 'text' : 'password'"\r
              id="credentialPassword"\r
              class="form-input" \r
              [class.error]="passwordError"\r
              [(ngModel)]="formCredential.credential_password"\r
              (blur)="onPasswordBlur()"\r
              (input)="onInput('password')"\r
              placeholder="Enter password"\r
            />\r
            <button \r
              type="button"\r
              class="password-toggle-btn-form"\r
              (click)="showPassword = !showPassword"\r
              [title]="showPassword ? 'Hide password' : 'Show password'"\r
            >\r
              <i class="fas" [class.fa-eye]="!showPassword" [class.fa-eye-slash]="showPassword"></i>\r
            </button>\r
          </div>\r
          <div class="error-message" *ngIf="passwordError">{{ passwordError }}</div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label for="credentialNotes">Notes</label>\r
          <textarea \r
            id="credentialNotes"\r
            class="form-input" \r
            [(ngModel)]="formCredential.notes"\r
            placeholder="Optional notes"\r
            rows="3"\r
          ></textarea>\r
        </div>\r
\r
        <div class="form-group">\r
          <label>Additional Fields (Key-Value Pairs)</label>\r
          <div class="additional-fields-container">\r
            <div class="additional-fields-list">\r
              <div *ngFor="let key of getAdditionalFieldsKeys(); let i = index" class="additional-field-row">\r
                <input \r
                  type="text" \r
                  class="form-input field-key"\r
                  [ngModel]="tempKeyValues[key] !== undefined ? tempKeyValues[key] : key"\r
                  (ngModelChange)="updateAdditionalFieldKey(key, $event, i)"\r
                  placeholder="Field name (e.g., Host, Port, Key)"\r
                  (blur)="onAdditionalFieldKeyBlur(key)"\r
                />\r
                <input \r
                  type="text" \r
                  class="form-input field-value"\r
                  [class.error]="additionalFieldErrors[key]"\r
                  [(ngModel)]="additionalFieldsJson[key]"\r
                  placeholder="Field value"\r
                  (blur)="validateAdditionalFieldValue(key)"\r
                  (input)="onAdditionalFieldValueInput(key)"\r
                />\r
                <div class="field-error" *ngIf="additionalFieldErrors[key]">{{ additionalFieldErrors[key] }}</div>\r
                <button \r
                  class="btn-icon btn-remove-field"\r
                  (click)="removeAdditionalField(key)"\r
                  title="Remove field"\r
                >\r
                  <i class="fas fa-times"></i>\r
                </button>\r
              </div>\r
            </div>\r
            <button \r
              type="button"\r
              class="btn btn-secondary btn-sm"\r
              (click)="addAdditionalField()"\r
            >\r
              <i class="fas fa-plus"></i> Add Field\r
            </button>\r
          </div>\r
          <div class="error-message" *ngIf="additionalFieldsError">{{ additionalFieldsError }}</div>\r
        </div>\r
\r
        <div class="form-group form-group-checkbox">\r
          <label for="credentialActive" class="form-label-inline">Active</label>\r
          <label class="checkbox-label">\r
            <input \r
              type="checkbox" \r
              id="credentialActive"\r
              [(ngModel)]="formCredential.is_active"\r
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
        <button class="btn btn-primary" (click)="saveCredential()">\r
          {{ isEditMode ? 'Update' : 'Create' }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
`, styles: [`/* src/app/components/credentials-master/credentials-master.scss */
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
.additional-fields-container .additional-fields-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;
  max-height: 300px;
  overflow-y: auto;
}
.additional-fields-container .additional-fields-list .additional-field-row {
  display: flex;
  gap: 8px;
  align-items: center;
}
.additional-fields-container .additional-fields-list .additional-field-row .field-key {
  flex: 1;
  min-width: 150px;
}
.additional-fields-container .additional-fields-list .additional-field-row .field-value {
  flex: 2;
  min-width: 200px;
}
.additional-fields-container .additional-fields-list .additional-field-row .btn-remove-field {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  background: rgba(239, 68, 68, 0.1);
  border-color: rgba(239, 68, 68, 0.3);
  color: #ef4444;
}
.additional-fields-container .additional-fields-list .additional-field-row .btn-remove-field:hover {
  background: rgba(239, 68, 68, 0.2);
  border-color: rgba(239, 68, 68, 0.5);
}
.additional-fields-container .btn-sm {
  padding: 6px 12px;
  font-size: 0.85rem;
}
.password-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}
.password-input-wrapper .form-input {
  padding-right: 40px;
}
.password-input-wrapper .password-toggle-btn-form {
  position: absolute;
  right: 8px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  color: #9aa0a6;
  cursor: pointer;
  padding: 6px 10px;
  font-size: 14px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}
.password-input-wrapper .password-toggle-btn-form:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
  color: var(--text-primary);
}
.password-input-wrapper .password-toggle-btn-form i {
  pointer-events: none;
}
.additional-field-row {
  position: relative;
}
.additional-field-row .field-error {
  position: absolute;
  bottom: -18px;
  left: 0;
  font-size: 0.75rem;
  color: #ef4444;
  margin-top: 4px;
  white-space: nowrap;
}
.additional-field-row .field-value.error {
  border-color: #ef4444;
}
.additional-field-row .field-value.error:focus {
  border-color: #ef4444;
  box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.2);
}
/*# sourceMappingURL=credentials-master.css.map */
`] }]
  }], () => [{ type: CredentialsMasterService }, { type: ToasterService }, { type: ConfirmationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CredentialsMasterComponent, { className: "CredentialsMasterComponent", filePath: "src/app/components/credentials-master/credentials-master.ts", lineNumber: 16 });
})();
export {
  CredentialsMasterComponent
};
//# sourceMappingURL=chunk-3N26GHZX.js.map
