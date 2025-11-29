import {
  API_CONFIG,
  HttpClient,
  Injectable,
  map,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-OPSATDSU.js";

// src/app/services/credentials-master.service.ts
var CredentialsMasterService = class _CredentialsMasterService {
  http;
  constructor(http) {
    this.http = http;
  }
  getAllCredentials() {
    return this.http.get(API_CONFIG.credentials.getAll).pipe(map((response) => response.data || []));
  }
  getCredentialById(id) {
    return this.http.get(API_CONFIG.credentials.getById(id)).pipe(map((response) => response.data));
  }
  addUpdateCredential(credential) {
    return this.http.post(API_CONFIG.credentials.addUpdate, credential).pipe(map((response) => response.data));
  }
  deleteCredential(id, isHardDelete = false) {
    return this.http.delete(API_CONFIG.credentials.delete(id, isHardDelete)).pipe(map((response) => response.success));
  }
  static \u0275fac = function CredentialsMasterService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CredentialsMasterService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CredentialsMasterService, factory: _CredentialsMasterService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CredentialsMasterService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  CredentialsMasterService
};
//# sourceMappingURL=chunk-HDXWDRVO.js.map
