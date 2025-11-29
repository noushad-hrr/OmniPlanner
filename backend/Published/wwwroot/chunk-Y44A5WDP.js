import {
  Injectable,
  Subject,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-OPSATDSU.js";

// src/app/services/confirmation.service.ts
var ConfirmationService = class _ConfirmationService {
  confirmationSubject = new Subject();
  confirmations$ = this.confirmationSubject.asObservable();
  confirm(options) {
    return new Promise((resolve) => {
      this.confirmationSubject.next(__spreadProps(__spreadValues({}, options), {
        resolve: (result) => resolve(result.confirmed)
      }));
    });
  }
  static \u0275fac = function ConfirmationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConfirmationService, factory: _ConfirmationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmationService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  ConfirmationService
};
//# sourceMappingURL=chunk-Y44A5WDP.js.map
