import {
  API_CONFIG,
  HttpClient,
  Injectable,
  map,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-OPSATDSU.js";

// src/app/services/roles.service.ts
var RolesService = class _RolesService {
  http;
  constructor(http) {
    this.http = http;
  }
  getAllRoles() {
    return this.http.get(API_CONFIG.roles.getAll).pipe(map((response) => response.data || []));
  }
  getRoleById(id) {
    return this.http.get(API_CONFIG.roles.getById(id)).pipe(map((response) => response.data));
  }
  createRole(role) {
    return this.http.post(API_CONFIG.roles.create, role).pipe(map((response) => response.data));
  }
  updateRole(role) {
    return this.http.put(API_CONFIG.roles.update, role).pipe(map((response) => response.data));
  }
  deleteRole(id, isHardDelete = false) {
    return this.http.delete(API_CONFIG.roles.delete(id, isHardDelete)).pipe(map((response) => response.success));
  }
  getRolePermissions(roleId) {
    return this.http.get(API_CONFIG.roles.getPermissions(roleId)).pipe(map((response) => response.data || []));
  }
  static \u0275fac = function RolesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RolesService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RolesService, factory: _RolesService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RolesService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  RolesService
};
//# sourceMappingURL=chunk-VQBCC4JS.js.map
