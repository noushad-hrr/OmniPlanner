import {
  API_CONFIG,
  HttpClient,
  Injectable,
  map,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-OPSATDSU.js";

// src/app/services/permissions.service.ts
var PermissionsService = class _PermissionsService {
  http;
  constructor(http) {
    this.http = http;
  }
  getAllPermissions() {
    return this.http.get(API_CONFIG.permissions.getAll).pipe(map((response) => response.data || []));
  }
  getPermissionsByModule(module) {
    return this.http.get(API_CONFIG.permissions.getByModule(module)).pipe(map((response) => response.data || []));
  }
  getPermissionById(id) {
    return this.http.get(API_CONFIG.permissions.getById(id)).pipe(map((response) => response.data));
  }
  createPermission(permission) {
    return this.http.post(API_CONFIG.permissions.create, permission).pipe(map((response) => response.data));
  }
  updatePermission(permission) {
    return this.http.put(API_CONFIG.permissions.update, permission).pipe(map((response) => response.data));
  }
  deletePermission(id, isHardDelete = false) {
    return this.http.delete(API_CONFIG.permissions.delete(id, isHardDelete)).pipe(map((response) => response.success));
  }
  getUniqueModules() {
    return this.http.get(API_CONFIG.permissions.getUniqueModules).pipe(map((response) => response.data || []));
  }
  static \u0275fac = function PermissionsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PermissionsService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PermissionsService, factory: _PermissionsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PermissionsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  PermissionsService
};
//# sourceMappingURL=chunk-RCAS3JZU.js.map
