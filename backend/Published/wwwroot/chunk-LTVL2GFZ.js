import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-OPSATDSU.js";

// src/app/services/toaster.service.ts
var ToasterService = class _ToasterService {
  sequence = 1;
  messagesSubject = new BehaviorSubject([]);
  messages$ = this.messagesSubject.asObservable();
  show(text, type = "info", timeoutMs = 3500) {
    const msg = { id: this.sequence++, type, text, timeoutMs };
    const current = this.messagesSubject.getValue();
    this.messagesSubject.next([...current, msg]);
    window.setTimeout(() => this.dismiss(msg.id), timeoutMs);
  }
  success(text, timeoutMs = 3e3) {
    this.show(text, "success", timeoutMs);
  }
  error(text, timeoutMs = 5e3) {
    this.show(text, "error", timeoutMs);
  }
  info(text, timeoutMs = 3500) {
    this.show(text, "info", timeoutMs);
  }
  warn(text, timeoutMs = 4e3) {
    this.show(text, "warn", timeoutMs);
  }
  dismiss(id) {
    const current = this.messagesSubject.getValue();
    this.messagesSubject.next(current.filter((m) => m.id !== id));
  }
  static \u0275fac = function ToasterService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToasterService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ToasterService, factory: _ToasterService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToasterService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  ToasterService
};
//# sourceMappingURL=chunk-LTVL2GFZ.js.map
