import {
  API_CONFIG,
  HttpClient,
  Injectable,
  map,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-OPSATDSU.js";

// src/app/services/priority-master.service.ts
var PriorityMasterService = class _PriorityMasterService {
  http;
  constructor(http) {
    this.http = http;
  }
  getAllPriorities() {
    return this.http.get(API_CONFIG.priorities.getAll).pipe(map((response) => response.data || []));
  }
  getPriorityById(id) {
    return this.http.get(API_CONFIG.priorities.getById(id)).pipe(map((response) => response.data));
  }
  addUpdatePriority(priority) {
    return this.http.post(API_CONFIG.priorities.addUpdate, priority).pipe(map((response) => response.data));
  }
  deletePriority(id, isHardDelete = false) {
    return this.http.delete(API_CONFIG.priorities.delete(id, isHardDelete)).pipe(map((response) => response.success));
  }
  static \u0275fac = function PriorityMasterService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PriorityMasterService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PriorityMasterService, factory: _PriorityMasterService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PriorityMasterService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  PriorityMasterService
};
//# sourceMappingURL=chunk-MADYNUQ7.js.map
