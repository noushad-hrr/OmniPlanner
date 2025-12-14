import {
  CredentialsMasterService
} from "./chunk-HDXWDRVO.js";
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
  API_CONFIG,
  CheckboxControlValueAccessor,
  CommonModule,
  Component,
  DefaultValueAccessor,
  FormsModule,
  HttpClient,
  Injectable,
  MaxLengthValidator,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  __objRest,
  __spreadProps,
  __spreadValues,
  map,
  setClassMetadata,
  ɵNgSelectMultipleOption,
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
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-OPSATDSU.js";

// src/app/services/urls-master.service.ts
var UrlsMasterService = class _UrlsMasterService {
  http;
  constructor(http) {
    this.http = http;
  }
  getAllUrls() {
    return this.http.get(API_CONFIG.urls.getAll).pipe(map((response) => response.data || []));
  }
  getUrlById(id) {
    return this.http.get(API_CONFIG.urls.getById(id)).pipe(map((response) => response.data));
  }
  addUpdateUrl(doc, credentialIds) {
    const payload = credentialIds && credentialIds.length > 0 ? { urlDoc: doc, credentialIds } : doc;
    return this.http.post(API_CONFIG.urls.addUpdate, payload).pipe(map((response) => response.data));
  }
  deleteUrl(id, isHardDelete = false) {
    return this.http.delete(API_CONFIG.urls.delete(id, isHardDelete)).pipe(map((response) => response.success));
  }
  getUrlCredentials(urlId) {
    return this.http.get(API_CONFIG.urls.getCredentials(urlId)).pipe(map((response) => response.data || []));
  }
  static \u0275fac = function UrlsMasterService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UrlsMasterService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UrlsMasterService, factory: _UrlsMasterService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UrlsMasterService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/components/urls-master/urls-master.ts
function UrlsMasterComponent_div_1_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function UrlsMasterComponent_div_1_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.searchQuery = "";
      return \u0275\u0275resetView(ctx_r1.onSearchChange());
    });
    \u0275\u0275element(1, "i", 18);
    \u0275\u0275elementEnd();
  }
}
function UrlsMasterComponent_div_1_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    \u0275\u0275property("ngValue", c_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", c_r4.icon ? c_r4.icon + " " : "", "", c_r4.category);
  }
}
function UrlsMasterComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "input", 8);
    \u0275\u0275twoWayListener("ngModelChange", function UrlsMasterComponent_div_1_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchQuery, $event) || (ctx_r1.searchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function UrlsMasterComponent_div_1_Template_input_ngModelChange_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearchChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, UrlsMasterComponent_div_1_button_4_Template, 2, 0, "button", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 10)(6, "select", 11);
    \u0275\u0275twoWayListener("ngModelChange", function UrlsMasterComponent_div_1_Template_select_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedCategoryId, $event) || (ctx_r1.selectedCategoryId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function UrlsMasterComponent_div_1_Template_select_ngModelChange_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCategoryFilterChange());
    });
    \u0275\u0275elementStart(7, "option", 12);
    \u0275\u0275text(8, "All Categories");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, UrlsMasterComponent_div_1_option_9_Template, 2, 3, "option", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 14);
    \u0275\u0275listener("click", function UrlsMasterComponent_div_1_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAddModal());
    });
    \u0275\u0275element(11, "i", 15);
    \u0275\u0275elementStart(12, "span", 16);
    \u0275\u0275text(13, "Add URL/DOC");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchQuery);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.searchQuery);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedCategoryId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.categories);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function UrlsMasterComponent_div_4_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.labelError);
  }
}
function UrlsMasterComponent_div_4_option_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    \u0275\u0275property("ngValue", c_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", c_r6.icon ? c_r6.icon + " " : "", "", c_r6.category);
  }
}
function UrlsMasterComponent_div_4_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.categoryError);
  }
}
function UrlsMasterComponent_div_4_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.urlError);
  }
}
function UrlsMasterComponent_div_4_label_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 36)(1, "input", 53);
    \u0275\u0275listener("change", function UrlsMasterComponent_div_4_label_43_Template_input_change_1_listener() {
      const cred_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCredentialToggle(cred_r8.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 38)(3, "span", 54);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 55);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 56);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const cred_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.isCredentialSelected(cred_r8.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(cred_r8.provider);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("- ", cred_r8.credential_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", cred_r8.credential_id, ")");
  }
}
function UrlsMasterComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275listener("click", function UrlsMasterComponent_div_4_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 20);
    \u0275\u0275listener("click", function UrlsMasterComponent_div_4_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 21)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 22);
    \u0275\u0275listener("click", function UrlsMasterComponent_div_4_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275element(6, "i", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 23)(8, "div", 24)(9, "label", 25);
    \u0275\u0275text(10, "Label ");
    \u0275\u0275elementStart(11, "span", 26);
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function UrlsMasterComponent_div_4_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formDoc.label, $event) || (ctx_r1.formDoc.label = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("blur", function UrlsMasterComponent_div_4_Template_input_blur_13_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLabelBlur());
    })("input", function UrlsMasterComponent_div_4_Template_input_input_13_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLabelInput());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, UrlsMasterComponent_div_4_div_14_Template, 2, 1, "div", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 24)(16, "label", 29);
    \u0275\u0275text(17, "Category ");
    \u0275\u0275elementStart(18, "span", 26);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "select", 30);
    \u0275\u0275twoWayListener("ngModelChange", function UrlsMasterComponent_div_4_Template_select_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formDoc.category_id, $event) || (ctx_r1.formDoc.category_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("blur", function UrlsMasterComponent_div_4_Template_select_blur_20_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.validateCategory());
    })("ngModelChange", function UrlsMasterComponent_div_4_Template_select_ngModelChange_20_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCategoryChange());
    });
    \u0275\u0275elementStart(21, "option", 12);
    \u0275\u0275text(22, "Select Category");
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, UrlsMasterComponent_div_4_option_23_Template, 2, 3, "option", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, UrlsMasterComponent_div_4_div_24_Template, 2, 1, "div", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 24)(26, "label", 31);
    \u0275\u0275text(27, "URL ");
    \u0275\u0275elementStart(28, "span", 26);
    \u0275\u0275text(29, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function UrlsMasterComponent_div_4_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formDoc.url, $event) || (ctx_r1.formDoc.url = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("blur", function UrlsMasterComponent_div_4_Template_input_blur_30_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onUrlBlur());
    })("input", function UrlsMasterComponent_div_4_Template_input_input_30_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onUrlInput());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(31, UrlsMasterComponent_div_4_div_31_Template, 2, 1, "div", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 24)(33, "label", 33);
    \u0275\u0275text(34, "Accessible To (Credentials)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 34)(36, "div", 35)(37, "label", 36)(38, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function UrlsMasterComponent_div_4_Template_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.isAllSelected, $event) || (ctx_r1.isAllSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function UrlsMasterComponent_div_4_Template_input_change_38_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAllToggle());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 38);
    \u0275\u0275element(40, "i", 39);
    \u0275\u0275text(41, " All (Public Access) ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "div", 40);
    \u0275\u0275template(43, UrlsMasterComponent_div_4_label_43_Template, 9, 4, "label", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 42);
    \u0275\u0275text(45, ' Select "All" for public access, or choose specific credentials for restricted access. ');
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 43)(47, "label", 44);
    \u0275\u0275text(48, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "label", 45)(50, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function UrlsMasterComponent_div_4_Template_input_ngModelChange_50_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formDoc.is_active, $event) || (ctx_r1.formDoc.is_active = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span", 47);
    \u0275\u0275element(52, "span", 48);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(53, "div", 49)(54, "button", 50);
    \u0275\u0275listener("click", function UrlsMasterComponent_div_4_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(55, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "button", 51);
    \u0275\u0275listener("click", function UrlsMasterComponent_div_4_Template_button_click_56_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveDoc());
    });
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.isEditMode ? "Edit URL/DOC" : "Add New URL/DOC");
    \u0275\u0275advance(9);
    \u0275\u0275classProp("error", ctx_r1.labelError);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formDoc.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.labelError);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("error", ctx_r1.categoryError);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formDoc.category_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.categories);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.categoryError);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("error", ctx_r1.urlError);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formDoc.url);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.urlError);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.isAllSelected);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.credentials);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formDoc.is_active);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditMode ? "Update" : "Create", " ");
  }
}
var UrlsMasterComponent = class _UrlsMasterComponent {
  urlsService;
  categoryMasterService;
  credentialsService;
  toaster;
  confirmation;
  docs = [];
  filteredDocs = [];
  categories = [];
  credentials = [];
  selectedCategoryId = null;
  searchQuery = "";
  showAddEditModal = false;
  isEditMode = false;
  selectedDoc = null;
  selectedCredentialIds = [];
  isAllSelected = true;
  // Default to "All" selected
  isToggleInProgress = false;
  formDoc = {
    id: 0,
    label: "",
    url: "",
    category_id: null,
    is_active: true
  };
  urlError = "";
  labelError = "";
  categoryError = "";
  tableColumns = [
    { key: "id", title: "ID", sortable: true, filterable: true, resizable: true, width: "70px", minWidth: "60px", maxWidth: "90px", align: "center", type: "number", hidden: false },
    { key: "category_name", title: "Category", sortable: true, filterable: true, resizable: true, width: "150px", minWidth: "120px", maxWidth: "200px", align: "left", type: "text", hidden: false },
    { key: "label", title: "Label", sortable: true, filterable: true, resizable: true, width: "280px", minWidth: "220px", maxWidth: "420px", align: "left", type: "text", hidden: true },
    { key: "links", title: "URL", sortable: false, filterable: false, resizable: true, width: "260px", minWidth: "200px", maxWidth: "420px", align: "left", type: "urls" },
    { key: "accessible_to", title: "Accessible To", sortable: false, filterable: false, resizable: true, width: "200px", minWidth: "150px", maxWidth: "300px", align: "left", type: "credentials" },
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
  constructor(urlsService, categoryMasterService, credentialsService, toaster, confirmation) {
    this.urlsService = urlsService;
    this.categoryMasterService = categoryMasterService;
    this.credentialsService = credentialsService;
    this.toaster = toaster;
    this.confirmation = confirmation;
  }
  ngOnInit() {
    this.loadCategories();
    this.loadCredentials();
    this.loadDocs();
  }
  loadCategories() {
    this.categoryMasterService.getAllCategories().subscribe({
      next: (data) => {
        this.categories = data || [];
      },
      error: (error) => {
        this.toaster.error(`Failed to load categories: ${error.message || "Unknown error"}`);
      }
    });
  }
  loadCredentials() {
    this.credentialsService.getAllCredentials().subscribe({
      next: (data) => {
        this.credentials = data || [];
      },
      error: (error) => {
        this.toaster.error(`Failed to load credentials: ${error.message || "Unknown error"}`);
      }
    });
  }
  loadDocs() {
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
        this.toaster.error(`Failed to load URLs/Docs: ${error.message || "Unknown error"}`);
      }
    });
  }
  applyFilters() {
    let filtered = [...this.docs];
    if (this.selectedCategoryId !== null) {
      filtered = filtered.filter((d) => d.category_id === this.selectedCategoryId);
    }
    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase().trim();
      filtered = filtered.filter((d) => d.label?.toLowerCase().includes(query) || d.url?.toLowerCase().includes(query) || d.category_name?.toLowerCase().includes(query));
    }
    this.filteredDocs = filtered;
  }
  onCategoryFilterChange() {
    this.applyFilters();
  }
  onSearchChange() {
    this.applyFilters();
  }
  getTableData() {
    return this.filteredDocs.map((d) => {
      const _a = d, { id, label, url, category_name, category_icon, credentials } = _a, rest = __objRest(_a, ["id", "label", "url", "category_name", "category_icon", "credentials"]);
      const links = [{ label: label || url, url, credentials: credentials || [] }];
      const categoryDisplay = category_icon ? `${category_icon} ${category_name || "No Category"}` : category_name || "No Category";
      return __spreadValues({
        id: id.toString(),
        label,
        url,
        links,
        category_name: categoryDisplay,
        accessible_to: credentials || []
      }, rest);
    });
  }
  openAddModal() {
    this.isEditMode = false;
    this.formDoc = { id: 0, label: "", url: "", category_id: null, is_active: true };
    this.selectedDoc = null;
    this.selectedCredentialIds = [];
    this.isAllSelected = true;
    this.urlError = "";
    this.labelError = "";
    this.categoryError = "";
    this.showAddEditModal = true;
  }
  openEditModal(row) {
    const d = row;
    this.isEditMode = true;
    this.selectedDoc = d;
    const docId = typeof d.id === "string" ? parseInt(d.id, 10) : d.id || 0;
    this.formDoc = { id: docId, label: d.label, url: d.url, category_id: d.category_id ?? null, is_active: d.is_active ?? true };
    this.selectedCredentialIds = d.credentials?.map((c) => c.id) || [];
    this.isAllSelected = !this.selectedCredentialIds || this.selectedCredentialIds.length === 0;
    this.urlError = "";
    this.labelError = "";
    this.categoryError = "";
    this.showAddEditModal = true;
  }
  closeModal() {
    this.showAddEditModal = false;
    this.isEditMode = false;
    this.selectedDoc = null;
    this.formDoc = { id: 0, label: "", url: "", category_id: null, is_active: true };
    this.selectedCredentialIds = [];
    this.isAllSelected = true;
    this.urlError = "";
    this.labelError = "";
    this.categoryError = "";
  }
  onAllToggle() {
    if (this.isAllSelected) {
      this.selectedCredentialIds = [];
    } else {
    }
  }
  onCredentialToggle(credentialId) {
    const index = this.selectedCredentialIds.indexOf(credentialId);
    if (index > -1) {
      this.selectedCredentialIds.splice(index, 1);
    } else {
      this.selectedCredentialIds.push(credentialId);
    }
    this.isAllSelected = this.selectedCredentialIds.length === 0;
  }
  isCredentialSelected(credentialId) {
    return this.selectedCredentialIds.includes(credentialId);
  }
  validateCategory() {
    this.categoryError = "";
    if (!this.formDoc.category_id || this.formDoc.category_id === 0) {
      this.categoryError = "Category is required";
    }
  }
  onCategoryChange() {
    this.validateCategory();
    this.validateLabelUniqueness();
    this.validateUrlUniqueness();
  }
  validateUrlUniqueness() {
    this.urlError = "";
    const urlValue = this.formDoc.url?.trim();
    if (!urlValue) {
      return;
    }
    const currentId = Number(this.formDoc.id);
    const currentCategoryId = this.formDoc.category_id ?? null;
    const existingUrl = this.docs.find((doc) => {
      const docId = Number(doc.id);
      const docCategoryId = doc.category_id ?? null;
      return doc.url?.toLowerCase() === urlValue.toLowerCase() && docCategoryId === currentCategoryId && docId !== currentId && !doc.is_deleted;
    });
    if (existingUrl) {
      this.urlError = "URL already exists in this category";
    }
  }
  validateLabelUniqueness() {
    this.labelError = "";
    const labelValue = this.formDoc.label?.trim();
    if (!labelValue) {
      return;
    }
    const currentId = Number(this.formDoc.id);
    const currentCategoryId = this.formDoc.category_id ?? null;
    const existingLabel = this.docs.find((doc) => {
      const docId = Number(doc.id);
      const docCategoryId = doc.category_id ?? null;
      return doc.label?.toLowerCase() === labelValue.toLowerCase() && docCategoryId === currentCategoryId && docId !== currentId && !doc.is_deleted;
    });
    if (existingLabel) {
      this.labelError = "Label already exists in this category";
    }
  }
  onUrlBlur() {
    this.validateUrlUniqueness();
  }
  onUrlInput() {
    if (this.urlError) {
      this.validateUrlUniqueness();
    }
  }
  onLabelBlur() {
    this.validateLabelUniqueness();
  }
  onLabelInput() {
    if (this.labelError) {
      this.validateLabelUniqueness();
    }
  }
  saveDoc() {
    if (!this.formDoc.label?.trim()) {
      this.labelError = "Label is required";
    } else {
      this.validateLabelUniqueness();
    }
    if (!this.formDoc.url?.trim()) {
      this.urlError = "URL is required";
    } else {
      this.validateUrlUniqueness();
    }
    this.validateCategory();
    if (this.urlError || this.labelError || this.categoryError) {
      return;
    }
    const credentialIdsToSend = this.isAllSelected ? [] : this.selectedCredentialIds;
    this.urlsService.addUpdateUrl(this.formDoc, credentialIdsToSend).subscribe({
      next: (data) => {
        this.toaster.success(`URL/DOC "${data.label}" has been ${this.isEditMode ? "updated" : "created"} successfully`);
        this.closeModal();
        this.loadDocs();
      },
      error: (error) => {
        const errorMessage = error.error?.message || error.message || "Unknown error occurred";
        if (errorMessage.toLowerCase().includes("label already exists")) {
          this.labelError = "Label already exists in this category";
        }
        if (errorMessage.toLowerCase().includes("url already exists")) {
          this.urlError = "URL already exists in this category";
        }
        if (errorMessage.toLowerCase().includes("category is required")) {
          this.toaster.error("Category is required");
          return;
        }
        if (this.labelError || this.urlError) {
          return;
        }
        this.toaster.error(`Operation Failed: ${errorMessage}`);
      }
    });
  }
  deleteDoc(d) {
    this.confirmation.confirm({
      title: "Delete URL/DOC",
      message: `Are you sure you want to delete "${d.label}"?`,
      confirmText: "Delete",
      cancelText: "Cancel",
      confirmClass: "danger"
    }).then((confirmed) => {
      if (confirmed) {
        this.urlsService.deleteUrl(d.id, false).subscribe({
          next: () => {
            this.toaster.success(`URL/DOC "${d.label}" has been deleted successfully`);
            this.loadDocs();
          },
          error: (error) => {
            this.toaster.error(`Delete Failed: ${error.error?.message || error.message || "Unknown error occurred"}`);
          }
        });
      }
    });
  }
  toggleActive(row, newValue) {
    if (this.isToggleInProgress)
      return;
    const d = row;
    this.isToggleInProgress = true;
    const isActiveValue = newValue !== void 0 ? newValue : !d.is_active;
    const updated = { id: d.id, label: d.label, url: d.url, category_id: d.category_id, is_active: isActiveValue };
    const currentCredentialIds = d.credentials?.map((c) => c.id) || [];
    this.urlsService.addUpdateUrl(updated, currentCredentialIds).subscribe({
      next: () => {
        this.toaster.success(`URL/DOC "${d.label}" has been ${updated.is_active ? "activated" : "deactivated"}`);
        this.loadDocs();
        this.isToggleInProgress = false;
      },
      error: (error) => {
        this.toaster.error(`Update Failed: ${error.error?.message || error.message || "Unknown error occurred"}`);
        this.isToggleInProgress = false;
      }
    });
  }
  onTableActionClick(event) {
    const d = event.row;
    switch (event.action) {
      case "edit":
        this.openEditModal(d);
        break;
      case "delete":
        this.deleteDoc(d);
        break;
    }
  }
  onBooleanToggle(event) {
    const d = event.row;
    if (event.column === "is_active") {
      const rowWithNumericId = __spreadProps(__spreadValues({}, d), {
        id: typeof d.id === "string" ? parseInt(d.id, 10) : d.id || 0
      });
      this.toggleActive(rowWithNumericId, event.value);
    }
  }
  static \u0275fac = function UrlsMasterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UrlsMasterComponent)(\u0275\u0275directiveInject(UrlsMasterService), \u0275\u0275directiveInject(CategoryMasterService), \u0275\u0275directiveInject(CredentialsMasterService), \u0275\u0275directiveInject(ToasterService), \u0275\u0275directiveInject(ConfirmationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UrlsMasterComponent, selectors: [["app-urls-master"]], decls: 5, vars: 8, consts: [[1, "category-master-container"], ["class", "master-toolbar", 4, "ngIf"], [1, "table-view"], ["emptyMessage", "No URLs available", "searchPlaceholder", "Search URLs...", 3, "booleanToggle", "actionClick", "columns", "data", "config", "actions", "loading", "externalSearch"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "master-toolbar"], [1, "toolbar-left"], [1, "master-search-wrapper"], ["type", "text", "placeholder", "Search URLs...", 1, "master-search-input", 3, "ngModelChange", "ngModel"], ["class", "master-search-clear", "title", "Clear search", 3, "click", 4, "ngIf"], [1, "toolbar-right"], [1, "category-filter-select", "form-select", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["aria-label", "Add new URL or document", "title", "Create a new URL or document", 1, "add-action-btn", 3, "click"], [1, "fas", "fa-plus", "icon"], [1, "label"], ["title", "Clear search", 1, "master-search-clear", 3, "click"], [1, "fas", "fa-times"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], ["title", "Close", 1, "btn-icon", 3, "click"], [1, "modal-body"], [1, "form-group"], ["for", "docLabel"], [1, "required"], ["type", "text", "id", "docLabel", "placeholder", "e.g., JWT Documentation", "maxlength", "200", 1, "form-input", 3, "ngModelChange", "blur", "input", "ngModel"], ["class", "error-message", 4, "ngIf"], ["for", "docCategory"], ["id", "docCategory", 1, "form-input", 3, "ngModelChange", "blur", "ngModel"], ["for", "docUrl"], ["type", "text", "id", "docUrl", "placeholder", "https://example.com", 1, "form-input", 3, "ngModelChange", "blur", "input", "ngModel"], ["for", "docCredentials"], [1, "credentials-select-container"], [1, "credentials-select-header"], [1, "credential-checkbox-label"], ["type", "checkbox", 1, "credential-checkbox", 3, "ngModelChange", "change", "ngModel"], [1, "credential-checkbox-text"], [1, "fas", "fa-globe"], [1, "credentials-select-list"], ["class", "credential-checkbox-label", 4, "ngFor", "ngForOf"], [1, "form-hint", 2, "margin-top", "8px", "font-size", "12px", "color", "#9aa0a6"], [1, "form-group", "form-group-checkbox"], ["for", "docActive", 1, "form-label-inline"], [1, "checkbox-label"], ["type", "checkbox", "id", "docActive", 1, "checkbox-input", 3, "ngModelChange", "ngModel"], [1, "checkbox-toggle"], [1, "toggle-indicator"], [1, "modal-footer"], [1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-primary", 3, "click"], [1, "error-message"], ["type", "checkbox", 1, "credential-checkbox", 3, "change", "checked"], [1, "credential-provider"], [1, "credential-name"], [1, "credential-id"]], template: function UrlsMasterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, UrlsMasterComponent_div_1_Template, 14, 6, "div", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "app-data-table", 3);
      \u0275\u0275listener("booleanToggle", function UrlsMasterComponent_Template_app_data_table_booleanToggle_3_listener($event) {
        return ctx.onBooleanToggle($event);
      })("actionClick", function UrlsMasterComponent_Template_app_data_table_actionClick_3_listener($event) {
        return ctx.onTableActionClick($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(4, UrlsMasterComponent_div_4_Template, 58, 19, "div", 4);
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
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, MaxLengthValidator, NgModel, DataTableComponent], styles: [`

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
.master-toolbar[_ngcontent-%COMP%]   .toolbar-right[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}
.credentials-select-container[_ngcontent-%COMP%] {
  background: rgba(42, 42, 42, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 12px;
  max-height: 300px;
  overflow-y: auto;
}
.credentials-select-container[_ngcontent-%COMP%]   .credentials-select-header[_ngcontent-%COMP%] {
  padding-bottom: 8px;
  margin-bottom: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.credentials-select-container[_ngcontent-%COMP%]   .credentials-select-header[_ngcontent-%COMP%]   .credential-checkbox-label[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 6px 8px;
  border-radius: 6px;
  transition: all 0.2s ease;
}
.credentials-select-container[_ngcontent-%COMP%]   .credentials-select-header[_ngcontent-%COMP%]   .credential-checkbox-label[_ngcontent-%COMP%]:hover {
  background: rgba(255, 255, 255, 0.05);
}
.credentials-select-container[_ngcontent-%COMP%]   .credentials-select-header[_ngcontent-%COMP%]   .credential-checkbox-label[_ngcontent-%COMP%]   .credential-checkbox[_ngcontent-%COMP%] {
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: #4a9eff;
  flex-shrink: 0;
}
.credentials-select-container[_ngcontent-%COMP%]   .credentials-select-header[_ngcontent-%COMP%]   .credential-checkbox-label[_ngcontent-%COMP%]   .credential-checkbox-text[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: var(--text-primary);
  font-weight: 500;
}
.credentials-select-container[_ngcontent-%COMP%]   .credentials-select-header[_ngcontent-%COMP%]   .credential-checkbox-label[_ngcontent-%COMP%]   .credential-checkbox-text[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  color: #10b981;
  font-size: 14px;
}
.credentials-select-container[_ngcontent-%COMP%]   .credentials-select-list[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-height: 220px;
  overflow-y: auto;
}
.credentials-select-container[_ngcontent-%COMP%]   .credentials-select-list[_ngcontent-%COMP%]   .credential-checkbox-label[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 8px 10px;
  border-radius: 6px;
  transition: all 0.2s ease;
}
.credentials-select-container[_ngcontent-%COMP%]   .credentials-select-list[_ngcontent-%COMP%]   .credential-checkbox-label[_ngcontent-%COMP%]:hover {
  background: rgba(255, 255, 255, 0.05);
}
.credentials-select-container[_ngcontent-%COMP%]   .credentials-select-list[_ngcontent-%COMP%]   .credential-checkbox-label[_ngcontent-%COMP%]   .credential-checkbox[_ngcontent-%COMP%] {
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: #4a9eff;
  flex-shrink: 0;
}
.credentials-select-container[_ngcontent-%COMP%]   .credentials-select-list[_ngcontent-%COMP%]   .credential-checkbox-label[_ngcontent-%COMP%]   .credential-checkbox-text[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: var(--text-primary);
  flex: 1;
  min-width: 0;
}
.credentials-select-container[_ngcontent-%COMP%]   .credentials-select-list[_ngcontent-%COMP%]   .credential-checkbox-label[_ngcontent-%COMP%]   .credential-checkbox-text[_ngcontent-%COMP%]   .credential-provider[_ngcontent-%COMP%] {
  font-weight: 500;
  color: #4a9eff;
}
.credentials-select-container[_ngcontent-%COMP%]   .credentials-select-list[_ngcontent-%COMP%]   .credential-checkbox-label[_ngcontent-%COMP%]   .credential-checkbox-text[_ngcontent-%COMP%]   .credential-name[_ngcontent-%COMP%] {
  color: var(--text-primary);
}
.credentials-select-container[_ngcontent-%COMP%]   .credentials-select-list[_ngcontent-%COMP%]   .credential-checkbox-label[_ngcontent-%COMP%]   .credential-checkbox-text[_ngcontent-%COMP%]   .credential-id[_ngcontent-%COMP%] {
  color: #9aa0a6;
  font-size: 11px;
}
.credentials-select-container[_ngcontent-%COMP%]::-webkit-scrollbar {
  width: 6px;
}
.credentials-select-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 3px;
}
.credentials-select-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}
.credentials-select-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.3);
}
/*# sourceMappingURL=urls-master.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UrlsMasterComponent, [{
    type: Component,
    args: [{ selector: "app-urls-master", standalone: true, imports: [CommonModule, FormsModule, DataTableComponent], template: `<div class="category-master-container">\r
  <!-- Search and Add Button Row -->\r
  <div class="master-toolbar" *ngIf="tableConfig.searchable">\r
    <div class="toolbar-left">\r
      <div class="master-search-wrapper">\r
        <input \r
          type="text" \r
          class="master-search-input" \r
          [(ngModel)]="searchQuery"\r
          (ngModelChange)="onSearchChange()"\r
          placeholder="Search URLs..."\r
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
    </div>\r
    <div class="toolbar-right">\r
      <select \r
        class="category-filter-select form-select" \r
        [(ngModel)]="selectedCategoryId" \r
        (ngModelChange)="onCategoryFilterChange()"\r
      >\r
        <option [ngValue]="null">All Categories</option>\r
        <option *ngFor="let c of categories" [ngValue]="c.id">{{ c.icon ? c.icon + ' ' : '' }}{{ c.category }}</option>\r
      </select>\r
      <button \r
        class="add-action-btn" \r
        (click)="openAddModal()"\r
        aria-label="Add new URL or document"\r
        title="Create a new URL or document"\r
      >\r
        <i class="fas fa-plus icon" [attr.aria-hidden]="true"></i>\r
        <span class="label">Add URL/DOC</span>\r
      </button>\r
    </div>\r
  </div>\r
\r
  <div class="table-view">\r
    <app-data-table\r
      [columns]="tableColumns"\r
      [data]="getTableData()"\r
      [config]="tableConfig"\r
      [actions]="tableActions"\r
      (booleanToggle)="onBooleanToggle($event)"\r
      [loading]="false"\r
      emptyMessage="No URLs available"\r
      searchPlaceholder="Search URLs..."\r
      [externalSearch]="searchQuery"\r
      (actionClick)="onTableActionClick($event)"\r
    ></app-data-table>\r
  </div>\r
\r
  <div class="modal-overlay" *ngIf="showAddEditModal" (click)="closeModal()">\r
    <div class="modal-content" (click)="$event.stopPropagation()">\r
      <div class="modal-header">\r
        <h3>{{ isEditMode ? 'Edit URL/DOC' : 'Add New URL/DOC' }}</h3>\r
        <button class="btn-icon" (click)="closeModal()" title="Close">\r
          <i class="fas fa-times"></i>\r
        </button>\r
      </div>\r
\r
      <div class="modal-body">\r
        <div class="form-group">\r
          <label for="docLabel">Label <span class="required">*</span></label>\r
          <input \r
            type="text" \r
            id="docLabel"\r
            class="form-input" \r
            [class.error]="labelError"\r
            [(ngModel)]="formDoc.label"\r
            (blur)="onLabelBlur()"\r
            (input)="onLabelInput()"\r
            placeholder="e.g., JWT Documentation"\r
            maxlength="200"\r
          />\r
          <div class="error-message" *ngIf="labelError">{{ labelError }}</div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label for="docCategory">Category <span class="required">*</span></label>\r
          <select \r
            id="docCategory"\r
            class="form-input" \r
            [class.error]="categoryError"\r
            [(ngModel)]="formDoc.category_id"\r
            (blur)="validateCategory()"\r
            (ngModelChange)="onCategoryChange()"\r
          >\r
            <option [ngValue]="null">Select Category</option>\r
            <option *ngFor="let c of categories" [ngValue]="c.id">{{ c.icon ? c.icon + ' ' : '' }}{{ c.category }}</option>\r
          </select>\r
          <div class="error-message" *ngIf="categoryError">{{ categoryError }}</div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label for="docUrl">URL <span class="required">*</span></label>\r
          <input \r
            type="text" \r
            id="docUrl"\r
            class="form-input" \r
            [class.error]="urlError"\r
            [(ngModel)]="formDoc.url"\r
            (blur)="onUrlBlur()"\r
            (input)="onUrlInput()"\r
            placeholder="https://example.com"\r
          />\r
          <div class="error-message" *ngIf="urlError">{{ urlError }}</div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label for="docCredentials">Accessible To (Credentials)</label>\r
          <div class="credentials-select-container">\r
            <div class="credentials-select-header">\r
              <label class="credential-checkbox-label">\r
                <input \r
                  type="checkbox" \r
                  class="credential-checkbox"\r
                  [(ngModel)]="isAllSelected"\r
                  (change)="onAllToggle()"\r
                />\r
                <span class="credential-checkbox-text">\r
                  <i class="fas fa-globe"></i> All (Public Access)\r
                </span>\r
              </label>\r
            </div>\r
            <div class="credentials-select-list">\r
              <label \r
                *ngFor="let cred of credentials" \r
                class="credential-checkbox-label"\r
              >\r
                <input \r
                  type="checkbox" \r
                  class="credential-checkbox"\r
                  [checked]="isCredentialSelected(cred.id)"\r
                  (change)="onCredentialToggle(cred.id)"\r
                />\r
                <span class="credential-checkbox-text">\r
                  <span class="credential-provider">{{ cred.provider }}</span>\r
                  <span class="credential-name">- {{ cred.credential_name }}</span>\r
                  <span class="credential-id">({{ cred.credential_id }})</span>\r
                </span>\r
              </label>\r
            </div>\r
          </div>\r
          <div class="form-hint" style="margin-top: 8px; font-size: 12px; color: #9aa0a6;">\r
            Select "All" for public access, or choose specific credentials for restricted access.\r
          </div>\r
        </div>\r
\r
        <div class="form-group form-group-checkbox">\r
          <label for="docActive" class="form-label-inline">Active</label>\r
          <label class="checkbox-label">\r
            <input \r
              type="checkbox" \r
              id="docActive"\r
              [(ngModel)]="formDoc.is_active"\r
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
        <button class="btn btn-primary" (click)="saveDoc()">\r
          {{ isEditMode ? 'Update' : 'Create' }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
\r
`, styles: [`/* src/app/components/urls-master/urls-master.scss */
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
.master-toolbar .toolbar-right {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}
.credentials-select-container {
  background: rgba(42, 42, 42, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 12px;
  max-height: 300px;
  overflow-y: auto;
}
.credentials-select-container .credentials-select-header {
  padding-bottom: 8px;
  margin-bottom: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.credentials-select-container .credentials-select-header .credential-checkbox-label {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 6px 8px;
  border-radius: 6px;
  transition: all 0.2s ease;
}
.credentials-select-container .credentials-select-header .credential-checkbox-label:hover {
  background: rgba(255, 255, 255, 0.05);
}
.credentials-select-container .credentials-select-header .credential-checkbox-label .credential-checkbox {
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: #4a9eff;
  flex-shrink: 0;
}
.credentials-select-container .credentials-select-header .credential-checkbox-label .credential-checkbox-text {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: var(--text-primary);
  font-weight: 500;
}
.credentials-select-container .credentials-select-header .credential-checkbox-label .credential-checkbox-text i {
  color: #10b981;
  font-size: 14px;
}
.credentials-select-container .credentials-select-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-height: 220px;
  overflow-y: auto;
}
.credentials-select-container .credentials-select-list .credential-checkbox-label {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 8px 10px;
  border-radius: 6px;
  transition: all 0.2s ease;
}
.credentials-select-container .credentials-select-list .credential-checkbox-label:hover {
  background: rgba(255, 255, 255, 0.05);
}
.credentials-select-container .credentials-select-list .credential-checkbox-label .credential-checkbox {
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: #4a9eff;
  flex-shrink: 0;
}
.credentials-select-container .credentials-select-list .credential-checkbox-label .credential-checkbox-text {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: var(--text-primary);
  flex: 1;
  min-width: 0;
}
.credentials-select-container .credentials-select-list .credential-checkbox-label .credential-checkbox-text .credential-provider {
  font-weight: 500;
  color: #4a9eff;
}
.credentials-select-container .credentials-select-list .credential-checkbox-label .credential-checkbox-text .credential-name {
  color: var(--text-primary);
}
.credentials-select-container .credentials-select-list .credential-checkbox-label .credential-checkbox-text .credential-id {
  color: #9aa0a6;
  font-size: 11px;
}
.credentials-select-container::-webkit-scrollbar {
  width: 6px;
}
.credentials-select-container::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 3px;
}
.credentials-select-container::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}
.credentials-select-container::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.3);
}
/*# sourceMappingURL=urls-master.css.map */
`] }]
  }], () => [{ type: UrlsMasterService }, { type: CategoryMasterService }, { type: CredentialsMasterService }, { type: ToasterService }, { type: ConfirmationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UrlsMasterComponent, { className: "UrlsMasterComponent", filePath: "src/app/components/urls-master/urls-master.ts", lineNumber: 18 });
})();
export {
  UrlsMasterComponent
};
//# sourceMappingURL=chunk-2KXMCPVS.js.map
