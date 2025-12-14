import {
  API_CONFIG,
  HttpClient,
  Injectable,
  map,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-OPSATDSU.js";

// src/app/services/status-master.service.ts
var StatusMasterService = class _StatusMasterService {
  http;
  constructor(http) {
    this.http = http;
  }
  getAllStatuses() {
    return this.http.get(API_CONFIG.statuses.getAll).pipe(map((response) => response.data || []));
  }
  getStatusById(id) {
    return this.http.get(API_CONFIG.statuses.getById(id)).pipe(map((response) => response.data));
  }
  addUpdateStatus(status) {
    return this.http.post(API_CONFIG.statuses.addUpdate, status).pipe(map((response) => response.data));
  }
  deleteStatus(id, isHardDelete = false) {
    return this.http.delete(API_CONFIG.statuses.delete(id, isHardDelete)).pipe(map((response) => response.success));
  }
  static \u0275fac = function StatusMasterService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StatusMasterService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StatusMasterService, factory: _StatusMasterService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StatusMasterService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  StatusMasterService
};
//# sourceMappingURL=chunk-LPAYRAOF.js.map
