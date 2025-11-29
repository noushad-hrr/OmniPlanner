import {
  API_CONFIG,
  HttpClient,
  Injectable,
  map,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-OPSATDSU.js";

// src/app/services/category-master.service.ts
var CategoryMasterService = class _CategoryMasterService {
  http;
  constructor(http) {
    this.http = http;
  }
  getAllCategories() {
    return this.http.get(API_CONFIG.categories.getAll).pipe(map((response) => response.data || []));
  }
  getCategoryById(id) {
    return this.http.get(API_CONFIG.categories.getById(id)).pipe(map((response) => response.data));
  }
  addUpdateCategory(category) {
    return this.http.post(API_CONFIG.categories.addUpdate, category).pipe(map((response) => response.data));
  }
  deleteCategory(id, isHardDelete = false) {
    return this.http.delete(API_CONFIG.categories.delete(id, isHardDelete)).pipe(map((response) => response.success));
  }
  static \u0275fac = function CategoryMasterService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CategoryMasterService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CategoryMasterService, factory: _CategoryMasterService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoryMasterService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  CategoryMasterService
};
//# sourceMappingURL=chunk-LTHYET3S.js.map
