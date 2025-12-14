import {
  ConfirmationService
} from "./chunk-Y44A5WDP.js";
import {
  API_CONFIG,
  BehaviorSubject,
  CheckboxControlValueAccessor,
  CommonModule,
  Component,
  DefaultValueAccessor,
  FormsModule,
  HttpClient,
  Injectable,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  Subject,
  __async,
  __spreadProps,
  __spreadValues,
  catchError,
  map,
  of,
  setClassMetadata,
  takeUntil,
  ɵNgSelectMultipleOption,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-OPSATDSU.js";

// src/app/services/budget.service.ts
var BudgetService = class _BudgetService {
  http;
  baseUrl = `${API_CONFIG.baseUrl}/Budget`;
  monthsSubject = new BehaviorSubject([]);
  months$ = this.monthsSubject.asObservable();
  constructor(http) {
    this.http = http;
    this.loadMonths();
  }
  // Load all months
  loadMonths() {
    this.http.get(`${this.baseUrl}/GetAllMonths`).pipe(map((response) => {
      const months = response.data || [];
      return months.map((month) => this.normalizeMonth(month));
    }), catchError((error) => {
      console.error("Error loading months from API:", error);
      this.initializeSampleData();
      return of([]);
    })).subscribe({
      next: (months) => {
        this.monthsSubject.next(months);
      }
    });
  }
  // Get single month with all data
  getMonthData(monthId) {
    return this.http.get(`${this.baseUrl}/GetMonthData/${monthId}`).pipe(map((response) => {
      const data = response.data || {};
      return {
        month: this.normalizeMonth(data.month || {}),
        credits: (data.credits || []).map((c) => this.normalizeCredit(c)),
        debits: (data.debits || []).map((d) => this.normalizeDebit(d)),
        summary: this.normalizeSummary(data.summary || {})
      };
    }), catchError((error) => {
      console.error("Error loading month data from API:", error);
      return of(this.getSampleMonthData(monthId));
    }));
  }
  // Get all months with summaries
  getAllMonthsWithSummaries() {
    return this.http.get(`${this.baseUrl}/GetAllMonthsWithSummaries`).pipe(map((response) => {
      const summaries = response.data || [];
      return summaries.map((s) => this.normalizeSummary(s));
    }), catchError((error) => {
      console.error("Error loading summaries from API:", error);
      return of([]);
    }));
  }
  // Create new month
  createMonth(monthYear, monthNumber, yearNumber) {
    return this.http.post(`${this.baseUrl}/CreateMonth`, {
      monthYear,
      monthNumber,
      yearNumber
    }).pipe(map((response) => {
      const month = this.normalizeMonth(response.data || response);
      this.loadMonths();
      return month;
    }));
  }
  // Credit operations
  addCredit(credit) {
    return this.http.post(`${this.baseUrl}/AddCredit`, {
      monthId: credit.monthId,
      source: credit.source,
      amountEstimated: credit.amountEstimated || 0,
      amountActual: credit.amountActual || 0,
      isLastMonthBalance: credit.isLastMonthBalance || false
    }).pipe(map((response) => this.normalizeCredit(response.data || response)));
  }
  updateCredit(id, credit) {
    return this.http.put(`${this.baseUrl}/UpdateCredit/${id}`, {
      source: credit.source,
      amountEstimated: credit.amountEstimated,
      amountActual: credit.amountActual,
      isLastMonthBalance: credit.isLastMonthBalance
    }).pipe(map((response) => this.normalizeCredit(response.data || response)));
  }
  deleteCredit(id) {
    return this.http.delete(`${this.baseUrl}/DeleteCredit/${id}`);
  }
  // Debit operations
  addDebit(debit) {
    return this.http.post(`${this.baseUrl}/AddDebit`, {
      monthId: debit.monthId,
      target: debit.target,
      amountEstimated: debit.amountEstimated || 0,
      amountActual: debit.amountActual || 0
    }).pipe(map((response) => this.normalizeDebit(response.data || response)));
  }
  updateDebit(id, debit) {
    return this.http.put(`${this.baseUrl}/UpdateDebit/${id}`, {
      target: debit.target,
      amountEstimated: debit.amountEstimated,
      amountActual: debit.amountActual
    }).pipe(map((response) => this.normalizeDebit(response.data || response)));
  }
  deleteDebit(id) {
    return this.http.delete(`${this.baseUrl}/DeleteDebit/${id}`);
  }
  // Calculate and update last month balance for a month
  updateLastMonthBalance(monthId) {
    return this.http.post(`${this.baseUrl}/UpdateLastMonthBalance/${monthId}`, {}).pipe(map((response) => this.normalizeCredit(response.data || response)));
  }
  // Normalize data from API
  normalizeMonth(month) {
    return {
      id: month.id,
      monthYear: month.monthYear || month.month_year || "",
      monthNumber: month.monthNumber || month.month_number || 0,
      yearNumber: month.yearNumber || month.year_number || 0,
      createdAt: month.createdAt ? new Date(month.createdAt) : /* @__PURE__ */ new Date(),
      updatedAt: month.updatedAt ? new Date(month.updatedAt) : /* @__PURE__ */ new Date()
    };
  }
  normalizeCredit(credit) {
    return {
      id: credit.id,
      monthId: credit.monthId || credit.month_id,
      source: credit.source || "",
      amountEstimated: parseFloat(credit.amountEstimated || credit.amount_estimated || 0),
      amountActual: parseFloat(credit.amountActual || credit.amount_actual || 0),
      isLastMonthBalance: credit.isLastMonthBalance || credit.is_last_month_balance || false,
      createdAt: credit.createdAt ? new Date(credit.createdAt) : /* @__PURE__ */ new Date(),
      updatedAt: credit.updatedAt ? new Date(credit.updatedAt) : /* @__PURE__ */ new Date()
    };
  }
  normalizeDebit(debit) {
    return {
      id: debit.id,
      monthId: debit.monthId || debit.month_id,
      target: debit.target || "",
      amountEstimated: parseFloat(debit.amountEstimated || debit.amount_estimated || 0),
      amountActual: parseFloat(debit.amountActual || debit.amount_actual || 0),
      createdAt: debit.createdAt ? new Date(debit.createdAt) : /* @__PURE__ */ new Date(),
      updatedAt: debit.updatedAt ? new Date(debit.updatedAt) : /* @__PURE__ */ new Date()
    };
  }
  normalizeSummary(summary) {
    return {
      monthId: summary.monthId || summary.month_id,
      monthYear: summary.monthYear || summary.month_year || "",
      monthlyCredit: parseFloat(summary.monthlyCredit || summary.monthly_credit || 0),
      monthlyDebit: parseFloat(summary.monthlyDebit || summary.monthly_debit || 0),
      finalBalance: parseFloat(summary.finalBalance || summary.final_balance || 0)
    };
  }
  // Sample data for development/testing
  initializeSampleData() {
    const sampleMonths = [
      {
        id: 1,
        monthYear: "Oct 2025",
        monthNumber: 10,
        yearNumber: 2025
      },
      {
        id: 2,
        monthYear: "Nov 2025",
        monthNumber: 11,
        yearNumber: 2025
      }
    ];
    this.monthsSubject.next(sampleMonths);
  }
  getSampleMonthData(monthId) {
    const sampleCredits = [
      { id: 1, monthId: 1, source: "Salary", amountEstimated: 2e4, amountActual: 2e4, isLastMonthBalance: false },
      { id: 2, monthId: 1, source: "Dad", amountEstimated: 5e3, amountActual: 6e3, isLastMonthBalance: false },
      { id: 3, monthId: 1, source: "Printer Payment", amountEstimated: 2e3, amountActual: 1500, isLastMonthBalance: false },
      { id: 4, monthId: 1, source: "Last month balance", amountEstimated: 0, amountActual: 0, isLastMonthBalance: true }
    ];
    const sampleDebits = [
      { id: 1, monthId: 1, target: "Salary sent to Home", amountEstimated: 18e3, amountActual: 17500 },
      { id: 2, monthId: 1, target: "My daily spents", amountEstimated: 2e3, amountActual: 3200 },
      { id: 3, monthId: 1, target: "Paid to friend", amountEstimated: 1e3, amountActual: 1e3 },
      { id: 4, monthId: 1, target: "EMI", amountEstimated: 900, amountActual: 900 }
    ];
    const monthlyCredit = sampleCredits.reduce((sum, c) => sum + c.amountActual, 0);
    const monthlyDebit = sampleDebits.reduce((sum, d) => sum + d.amountActual, 0);
    return {
      month: { id: 1, monthYear: "Oct 2025", monthNumber: 10, yearNumber: 2025 },
      credits: sampleCredits,
      debits: sampleDebits,
      summary: {
        monthId: 1,
        monthYear: "Oct 2025",
        monthlyCredit,
        monthlyDebit,
        finalBalance: monthlyCredit - monthlyDebit
      }
    };
  }
  static \u0275fac = function BudgetService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BudgetService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BudgetService, factory: _BudgetService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BudgetService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/components/budget/budget.ts
function BudgetComponent_option_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const month_r1 = ctx.$implicit;
    \u0275\u0275property("value", month_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", month_r1.monthYear, " ");
  }
}
function BudgetComponent_div_13_tr_22_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275listener("click", function BudgetComponent_div_13_tr_22_button_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const credit_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteCredit(credit_r5));
    });
    \u0275\u0275element(1, "i", 43);
    \u0275\u0275elementEnd();
  }
}
function BudgetComponent_div_13_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 38)(8, "button", 39);
    \u0275\u0275listener("click", function BudgetComponent_div_13_tr_22_Template_button_click_8_listener() {
      const credit_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openEditCreditModal(credit_r5));
    });
    \u0275\u0275element(9, "i", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, BudgetComponent_div_13_tr_22_button_10_Template, 2, 0, "button", 41);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const credit_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(credit_r5.source);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatCurrency(credit_r5.amountEstimated));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatCurrency(credit_r5.amountActual));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !credit_r5.isLastMonthBalance);
  }
}
function BudgetComponent_div_13_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 44)(1, "td", 45);
    \u0275\u0275text(2, "No credits added yet");
    \u0275\u0275elementEnd()();
  }
}
function BudgetComponent_div_13_tr_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 38)(8, "button", 39);
    \u0275\u0275listener("click", function BudgetComponent_div_13_tr_44_Template_button_click_8_listener() {
      const debit_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openEditDebitModal(debit_r8));
    });
    \u0275\u0275element(9, "i", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 42);
    \u0275\u0275listener("click", function BudgetComponent_div_13_tr_44_Template_button_click_10_listener() {
      const debit_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteDebit(debit_r8));
    });
    \u0275\u0275element(11, "i", 43);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const debit_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(debit_r8.target);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatCurrency(debit_r8.amountEstimated));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatCurrency(debit_r8.amountActual));
  }
}
function BudgetComponent_div_13_tr_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 44)(1, "td", 45);
    \u0275\u0275text(2, "No debits added yet");
    \u0275\u0275elementEnd()();
  }
}
function BudgetComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "div", 15)(3, "div", 16)(4, "h4");
    \u0275\u0275text(5, "Credit's");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 17);
    \u0275\u0275listener("click", function BudgetComponent_div_13_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openAddCreditModal());
    });
    \u0275\u0275element(7, "i", 8);
    \u0275\u0275text(8, " Add Credit ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 18)(10, "table", 19)(11, "thead")(12, "tr")(13, "th");
    \u0275\u0275text(14, "Source");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Amount (Estimated)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Amount (Actual)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275template(22, BudgetComponent_div_13_tr_22_Template, 11, 4, "tr", 20)(23, BudgetComponent_div_13_tr_23_Template, 3, 0, "tr", 21);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(24, "div", 22)(25, "div", 23)(26, "h4");
    \u0275\u0275text(27, "Debit's");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 24);
    \u0275\u0275listener("click", function BudgetComponent_div_13_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openAddDebitModal());
    });
    \u0275\u0275element(29, "i", 8);
    \u0275\u0275text(30, " Add Debit ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 18)(32, "table", 25)(33, "thead")(34, "tr")(35, "th");
    \u0275\u0275text(36, "Target");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "th");
    \u0275\u0275text(38, "Amount (Estimated)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "th");
    \u0275\u0275text(40, "Amount (Actual)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "th");
    \u0275\u0275text(42, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "tbody");
    \u0275\u0275template(44, BudgetComponent_div_13_tr_44_Template, 12, 3, "tr", 20)(45, BudgetComponent_div_13_tr_45_Template, 3, 0, "tr", 21);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(46, "div", 26)(47, "div", 27)(48, "div", 28)(49, "span", 29);
    \u0275\u0275text(50, "Monthly Credit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span", 30);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 28)(54, "span", 29);
    \u0275\u0275text(55, "Monthly Debit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "span", 30);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 31)(59, "span", 29);
    \u0275\u0275text(60, "Final Balance Till Month");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "span", 30);
    \u0275\u0275text(62);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(63, "div", 32)(64, "div", 33)(65, "div", 34);
    \u0275\u0275text(66, "TOTAL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "div", 35)(68, "span", 36);
    \u0275\u0275text(69, "Monthly Credit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "span", 37);
    \u0275\u0275text(71);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 35)(73, "span", 36);
    \u0275\u0275text(74, "Monthly Debit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "span", 37);
    \u0275\u0275text(76);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "div", 35)(78, "span", 36);
    \u0275\u0275text(79, "Final Balance Till Month");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "span", 37);
    \u0275\u0275text(81);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(22);
    \u0275\u0275property("ngForOf", ctx_r2.getCredits());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.getCredits().length === 0);
    \u0275\u0275advance(21);
    \u0275\u0275property("ngForOf", ctx_r2.getDebits());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.getDebits().length === 0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.formatCurrency(ctx_r2.getMonthlyCredit()));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.formatCurrency(ctx_r2.getMonthlyDebit()));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.formatCurrency(ctx_r2.getFinalBalance()));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.formatCurrency(ctx_r2.getTotalMonthlyCredit()));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.formatCurrency(ctx_r2.getTotalMonthlyDebit()));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.formatCurrency(ctx_r2.getTotalFinalBalance()));
  }
}
function BudgetComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275element(1, "i", 47);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Select a month or create a new month to start managing your budget");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 48);
    \u0275\u0275listener("click", function BudgetComponent_div_14_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openAddMonthModal());
    });
    \u0275\u0275element(5, "i", 8);
    \u0275\u0275text(6, " Create Month ");
    \u0275\u0275elementEnd()();
  }
}
function BudgetComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275listener("click", function BudgetComponent_div_15_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeCreditModal());
    });
    \u0275\u0275elementStart(1, "div", 50);
    \u0275\u0275listener("click", function BudgetComponent_div_15_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 51)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 52);
    \u0275\u0275listener("click", function BudgetComponent_div_15_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeCreditModal());
    });
    \u0275\u0275element(6, "i", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 54)(8, "div", 55)(9, "label");
    \u0275\u0275text(10, "Source");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function BudgetComponent_div_15_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newCredit.source, $event) || (ctx_r2.newCredit.source = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 55)(13, "label");
    \u0275\u0275text(14, "Amount (Estimated)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 57);
    \u0275\u0275twoWayListener("ngModelChange", function BudgetComponent_div_15_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newCredit.amountEstimated, $event) || (ctx_r2.newCredit.amountEstimated = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 55)(17, "label");
    \u0275\u0275text(18, "Amount (Actual)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 57);
    \u0275\u0275twoWayListener("ngModelChange", function BudgetComponent_div_15_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newCredit.amountActual, $event) || (ctx_r2.newCredit.amountActual = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 55)(21, "label")(22, "input", 58);
    \u0275\u0275twoWayListener("ngModelChange", function BudgetComponent_div_15_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newCredit.isLastMonthBalance, $event) || (ctx_r2.newCredit.isLastMonthBalance = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Last Month Balance ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 59)(25, "button", 60);
    \u0275\u0275listener("click", function BudgetComponent_div_15_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeCreditModal());
    });
    \u0275\u0275text(26, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 61);
    \u0275\u0275listener("click", function BudgetComponent_div_15_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveCredit());
    });
    \u0275\u0275text(28, "Save");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.showEditCreditModal ? "Edit Credit" : "Add Credit");
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newCredit.source);
    \u0275\u0275property("disabled", !!ctx_r2.newCredit.isLastMonthBalance);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newCredit.amountEstimated);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newCredit.amountActual);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newCredit.isLastMonthBalance);
    \u0275\u0275property("disabled", !!ctx_r2.showEditCreditModal);
  }
}
function BudgetComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275listener("click", function BudgetComponent_div_16_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDebitModal());
    });
    \u0275\u0275elementStart(1, "div", 50);
    \u0275\u0275listener("click", function BudgetComponent_div_16_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 51)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 52);
    \u0275\u0275listener("click", function BudgetComponent_div_16_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDebitModal());
    });
    \u0275\u0275element(6, "i", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 54)(8, "div", 55)(9, "label");
    \u0275\u0275text(10, "Target");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 62);
    \u0275\u0275twoWayListener("ngModelChange", function BudgetComponent_div_16_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newDebit.target, $event) || (ctx_r2.newDebit.target = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 55)(13, "label");
    \u0275\u0275text(14, "Amount (Estimated)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 57);
    \u0275\u0275twoWayListener("ngModelChange", function BudgetComponent_div_16_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newDebit.amountEstimated, $event) || (ctx_r2.newDebit.amountEstimated = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 55)(17, "label");
    \u0275\u0275text(18, "Amount (Actual)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 57);
    \u0275\u0275twoWayListener("ngModelChange", function BudgetComponent_div_16_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newDebit.amountActual, $event) || (ctx_r2.newDebit.amountActual = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 59)(21, "button", 60);
    \u0275\u0275listener("click", function BudgetComponent_div_16_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDebitModal());
    });
    \u0275\u0275text(22, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 63);
    \u0275\u0275listener("click", function BudgetComponent_div_16_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveDebit());
    });
    \u0275\u0275text(24, "Save");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.showEditDebitModal ? "Edit Debit" : "Add Debit");
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newDebit.target);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newDebit.amountEstimated);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newDebit.amountActual);
  }
}
function BudgetComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275listener("click", function BudgetComponent_div_17_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeMonthModal());
    });
    \u0275\u0275elementStart(1, "div", 50);
    \u0275\u0275listener("click", function BudgetComponent_div_17_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r12);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 51)(3, "h3");
    \u0275\u0275text(4, "Add New Month");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 52);
    \u0275\u0275listener("click", function BudgetComponent_div_17_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeMonthModal());
    });
    \u0275\u0275element(6, "i", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 54)(8, "div", 55)(9, "label");
    \u0275\u0275text(10, 'Month Year (e.g., "Oct 2025")');
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 64);
    \u0275\u0275twoWayListener("ngModelChange", function BudgetComponent_div_17_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newMonth.monthYear, $event) || (ctx_r2.newMonth.monthYear = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 55)(13, "label");
    \u0275\u0275text(14, "Month Number (1-12)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 65);
    \u0275\u0275twoWayListener("ngModelChange", function BudgetComponent_div_17_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newMonth.monthNumber, $event) || (ctx_r2.newMonth.monthNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 55)(17, "label");
    \u0275\u0275text(18, "Year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function BudgetComponent_div_17_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newMonth.yearNumber, $event) || (ctx_r2.newMonth.yearNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 59)(21, "button", 60);
    \u0275\u0275listener("click", function BudgetComponent_div_17_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeMonthModal());
    });
    \u0275\u0275text(22, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 48);
    \u0275\u0275listener("click", function BudgetComponent_div_17_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveMonth());
    });
    \u0275\u0275text(24, "Create");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newMonth.monthYear);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newMonth.monthNumber);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newMonth.yearNumber);
  }
}
var BudgetComponent = class _BudgetComponent {
  budgetService;
  confirmationService;
  months = [];
  selectedMonth = null;
  currentMonthData = null;
  summaries = [];
  // UI State
  showAddCreditModal = false;
  showEditCreditModal = false;
  showAddDebitModal = false;
  showEditDebitModal = false;
  showAddMonthModal = false;
  selectedCredit = null;
  selectedDebit = null;
  // Form data
  newCredit = {
    source: "",
    amountEstimated: 0,
    amountActual: 0,
    isLastMonthBalance: false
  };
  newDebit = {
    target: "",
    amountEstimated: 0,
    amountActual: 0
  };
  newMonth = {
    monthYear: "",
    monthNumber: 0,
    yearNumber: (/* @__PURE__ */ new Date()).getFullYear()
  };
  destroy$ = new Subject();
  constructor(budgetService, confirmationService) {
    this.budgetService = budgetService;
    this.confirmationService = confirmationService;
  }
  ngOnInit() {
    this.budgetService.months$.pipe(takeUntil(this.destroy$)).subscribe((months) => {
      this.months = months;
      if (months.length > 0 && !this.selectedMonth) {
        this.selectMonth(months[0]);
      }
    });
    this.loadSummaries();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadSummaries() {
    this.budgetService.getAllMonthsWithSummaries().pipe(takeUntil(this.destroy$)).subscribe((summaries) => {
      this.summaries = summaries;
    });
  }
  selectMonth(month) {
    if (!month)
      return;
    this.selectedMonth = month;
    this.budgetService.getMonthData(month.id).pipe(takeUntil(this.destroy$)).subscribe((data) => {
      this.currentMonthData = data;
      this.ensureLastMonthBalance();
    });
  }
  onMonthChange(event) {
    const target = event.target;
    const monthId = parseInt(target.value, 10);
    const month = this.months.find((m) => m.id === monthId);
    if (month) {
      this.selectMonth(month);
    }
  }
  ensureLastMonthBalance() {
    if (!this.currentMonthData)
      return;
    const hasLastMonthBalance = this.currentMonthData.credits.some((c) => c.isLastMonthBalance);
    if (!hasLastMonthBalance && this.selectedMonth) {
      const prevMonthSummary = this.findPreviousMonthSummary(this.selectedMonth);
      if (prevMonthSummary && prevMonthSummary.finalBalance > 0) {
        this.budgetService.addCredit({
          monthId: this.selectedMonth.id,
          source: "Last month balance",
          amountEstimated: prevMonthSummary.finalBalance,
          amountActual: prevMonthSummary.finalBalance,
          isLastMonthBalance: true
        }).subscribe(() => {
          this.refreshCurrentMonth();
        });
      }
    }
  }
  findPreviousMonthSummary(currentMonth) {
    const currentIndex = this.months.findIndex((m) => m.id === currentMonth.id);
    if (currentIndex > 0) {
      const prevMonth = this.months[currentIndex - 1];
      return this.summaries.find((s) => s.monthId === prevMonth.id) || null;
    }
    return null;
  }
  getCredits() {
    return this.currentMonthData?.credits || [];
  }
  getDebits() {
    return this.currentMonthData?.debits || [];
  }
  getMonthlyCredit() {
    if (!this.currentMonthData)
      return 0;
    return this.currentMonthData.credits.reduce((sum, c) => sum + c.amountActual, 0);
  }
  getMonthlyDebit() {
    if (!this.currentMonthData)
      return 0;
    return this.currentMonthData.debits.reduce((sum, d) => sum + d.amountActual, 0);
  }
  getFinalBalance() {
    return this.getMonthlyCredit() - this.getMonthlyDebit();
  }
  getTotalMonthlyCredit() {
    return this.summaries.reduce((sum, s) => sum + s.monthlyCredit, 0);
  }
  getTotalMonthlyDebit() {
    return this.summaries.reduce((sum, s) => sum + s.monthlyDebit, 0);
  }
  getTotalFinalBalance() {
    return this.summaries.reduce((sum, s) => sum + s.finalBalance, 0);
  }
  // Credit operations
  openAddCreditModal() {
    if (!this.selectedMonth)
      return;
    this.newCredit = {
      source: "",
      amountEstimated: 0,
      amountActual: 0,
      isLastMonthBalance: false,
      monthId: this.selectedMonth.id
    };
    this.showAddCreditModal = true;
  }
  openEditCreditModal(credit) {
    this.selectedCredit = credit;
    this.newCredit = __spreadValues({}, credit);
    this.showEditCreditModal = true;
  }
  saveCredit() {
    if (!this.selectedMonth || !this.newCredit.source)
      return;
    const operation = this.showEditCreditModal && this.selectedCredit ? this.budgetService.updateCredit(this.selectedCredit.id, this.newCredit) : this.budgetService.addCredit(__spreadProps(__spreadValues({}, this.newCredit), { monthId: this.selectedMonth.id }));
    operation.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.closeCreditModal();
      this.refreshCurrentMonth();
      this.loadSummaries();
    });
  }
  deleteCredit(credit) {
    return __async(this, null, function* () {
      const confirmed = yield this.confirmationService.confirm({
        title: "Delete Credit",
        message: `Are you sure you want to delete "${credit.source}"? This action cannot be undone.`,
        confirmText: "Delete",
        cancelText: "Cancel",
        confirmClass: "danger"
      });
      if (!confirmed)
        return;
      this.budgetService.deleteCredit(credit.id).pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.refreshCurrentMonth();
        this.loadSummaries();
      });
    });
  }
  closeCreditModal() {
    this.showAddCreditModal = false;
    this.showEditCreditModal = false;
    this.selectedCredit = null;
    this.newCredit = {
      source: "",
      amountEstimated: 0,
      amountActual: 0,
      isLastMonthBalance: false
    };
  }
  // Debit operations
  openAddDebitModal() {
    if (!this.selectedMonth)
      return;
    this.newDebit = {
      target: "",
      amountEstimated: 0,
      amountActual: 0,
      monthId: this.selectedMonth.id
    };
    this.showAddDebitModal = true;
  }
  openEditDebitModal(debit) {
    this.selectedDebit = debit;
    this.newDebit = __spreadValues({}, debit);
    this.showEditDebitModal = true;
  }
  saveDebit() {
    if (!this.selectedMonth || !this.newDebit.target)
      return;
    const operation = this.showEditDebitModal && this.selectedDebit ? this.budgetService.updateDebit(this.selectedDebit.id, this.newDebit) : this.budgetService.addDebit(__spreadProps(__spreadValues({}, this.newDebit), { monthId: this.selectedMonth.id }));
    operation.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.closeDebitModal();
      this.refreshCurrentMonth();
      this.loadSummaries();
    });
  }
  deleteDebit(debit) {
    return __async(this, null, function* () {
      const confirmed = yield this.confirmationService.confirm({
        title: "Delete Debit",
        message: `Are you sure you want to delete "${debit.target}"? This action cannot be undone.`,
        confirmText: "Delete",
        cancelText: "Cancel",
        confirmClass: "danger"
      });
      if (!confirmed)
        return;
      this.budgetService.deleteDebit(debit.id).pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.refreshCurrentMonth();
        this.loadSummaries();
      });
    });
  }
  closeDebitModal() {
    this.showAddDebitModal = false;
    this.showEditDebitModal = false;
    this.selectedDebit = null;
    this.newDebit = {
      target: "",
      amountEstimated: 0,
      amountActual: 0
    };
  }
  // Month operations
  openAddMonthModal() {
    const now = /* @__PURE__ */ new Date();
    this.newMonth = {
      monthYear: "",
      monthNumber: now.getMonth() + 1,
      yearNumber: now.getFullYear()
    };
    this.showAddMonthModal = true;
  }
  saveMonth() {
    if (!this.newMonth.monthYear)
      return;
    this.budgetService.createMonth(this.newMonth.monthYear, this.newMonth.monthNumber, this.newMonth.yearNumber).pipe(takeUntil(this.destroy$)).subscribe((month) => {
      this.closeMonthModal();
      this.selectMonth(month);
      this.loadSummaries();
    });
  }
  closeMonthModal() {
    this.showAddMonthModal = false;
    this.newMonth = {
      monthYear: "",
      monthNumber: 0,
      yearNumber: (/* @__PURE__ */ new Date()).getFullYear()
    };
  }
  refreshCurrentMonth() {
    if (this.selectedMonth) {
      this.selectMonth(this.selectedMonth);
    }
  }
  formatCurrency(amount) {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  }
  static \u0275fac = function BudgetComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BudgetComponent)(\u0275\u0275directiveInject(BudgetService), \u0275\u0275directiveInject(ConfirmationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BudgetComponent, selectors: [["app-budget"]], decls: 18, vars: 7, consts: [[1, "budget-container"], [1, "budget-header"], [1, "budget-title"], [1, "budget-controls"], [1, "month-selector", 3, "change", "value"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "add-action-btn", 3, "click"], [1, "fas", "fa-plus"], ["class", "budget-content", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [3, "value"], [1, "budget-content"], [1, "budget-grid"], [1, "credits-section"], [1, "section-header", "credits-header"], [1, "btn", "btn-small", "btn-success", 3, "click"], [1, "table-container"], [1, "budget-table", "credits-table"], [4, "ngFor", "ngForOf"], ["class", "empty-row", 4, "ngIf"], [1, "debits-section"], [1, "section-header", "debits-header"], [1, "btn", "btn-small", "btn-danger", 3, "click"], [1, "budget-table", "debits-table"], [1, "summary-section"], [1, "summary-grid"], [1, "summary-item"], [1, "summary-label"], [1, "summary-value"], [1, "summary-item", "balance-item"], [1, "total-section"], [1, "total-grid"], [1, "total-label"], [1, "total-item"], [1, "total-value-label"], [1, "total-value"], [1, "action-buttons"], ["title", "Edit", 1, "btn-icon", "btn-edit", 3, "click"], [1, "fas", "fa-edit"], ["class", "btn-icon btn-delete", "title", "Delete", 3, "click", 4, "ngIf"], ["title", "Delete", 1, "btn-icon", "btn-delete", 3, "click"], [1, "fas", "fa-trash"], [1, "empty-row"], ["colspan", "4"], [1, "empty-state"], [1, "fas", "fa-wallet"], [1, "btn", "btn-primary", 3, "click"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], ["title", "Close", 1, "btn-icon", 3, "click"], [1, "fas", "fa-times"], [1, "modal-body"], [1, "form-group"], ["type", "text", "placeholder", "e.g., Salary, Bonus, etc.", 1, "form-control", 3, "ngModelChange", "ngModel", "disabled"], ["type", "number", "placeholder", "0", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "checkbox", 3, "ngModelChange", "ngModel", "disabled"], [1, "modal-footer"], [1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-success", 3, "click"], ["type", "text", "placeholder", "e.g., Home, Daily Expenses, etc.", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-danger", 3, "click"], ["type", "text", "placeholder", "Oct 2025", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "1", "max", "12", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", 1, "form-control", 3, "ngModelChange", "ngModel"]], template: function BudgetComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
      \u0275\u0275text(3, " Budget Management ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 3)(5, "select", 4);
      \u0275\u0275listener("change", function BudgetComponent_Template_select_change_5_listener($event) {
        return ctx.onMonthChange($event);
      });
      \u0275\u0275elementStart(6, "option", 5);
      \u0275\u0275text(7, "Select Month");
      \u0275\u0275elementEnd();
      \u0275\u0275template(8, BudgetComponent_option_8_Template, 2, 2, "option", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "button", 7);
      \u0275\u0275listener("click", function BudgetComponent_Template_button_click_9_listener() {
        return ctx.openAddMonthModal();
      });
      \u0275\u0275element(10, "i", 8);
      \u0275\u0275elementStart(11, "span");
      \u0275\u0275text(12, "Add Month");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(13, BudgetComponent_div_13_Template, 82, 10, "div", 9)(14, BudgetComponent_div_14_Template, 7, 0, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275template(15, BudgetComponent_div_15_Template, 29, 7, "div", 11)(16, BudgetComponent_div_16_Template, 25, 4, "div", 11)(17, BudgetComponent_div_17_Template, 25, 3, "div", 11);
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("value", (ctx.selectedMonth == null ? null : ctx.selectedMonth.id) || "");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.months);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.currentMonthData);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.currentMonthData);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showAddCreditModal || ctx.showEditCreditModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showAddDebitModal || ctx.showEditDebitModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showAddMonthModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel], styles: ["\n\n[_ngcontent-%COMP%]:root {\n  --primary-bg: #1a1a1a;\n  --secondary-bg: #2d2d2d;\n  --tertiary-bg: #3a3a3a;\n  --surface-bg: #2a2a2a;\n  --primary-accent: #4a9eff;\n  --secondary-accent: #7c3aed;\n  --success-color: #10b981;\n  --warning-color: #f59e0b;\n  --error-color: #ef4444;\n  --text-primary: #ffffff;\n  --text-secondary: #e5e5e5;\n  --text-muted: #a3a3a3;\n  --text-disabled: #6b7280;\n  --border-primary: #4a4a4a;\n  --border-secondary: #3a3a3a;\n  --border-accent: #5a5a5a;\n  --shadow-light: rgba(0, 0, 0, 0.1);\n  --shadow-medium: rgba(0, 0, 0, 0.2);\n  --shadow-heavy: rgba(0, 0, 0, 0.3);\n  --hover-bg: #3a3a3a;\n  --hover-accent: #5bb0ff;\n  --active-bg: #4a4a4a;\n  --active-accent: #3a8fdf;\n}\n.budget-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 16px;\n  height: calc(100vh - 66px);\n  max-height: calc(100vh - 66px);\n  overflow: hidden;\n  box-sizing: border-box;\n  background: #0f1115;\n  color: #e6e6e6;\n}\n.budget-container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n.budget-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type=checkbox]):not([type=radio]):focus, \n.budget-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, \n.budget-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  border-color: #4a5568 !important;\n  box-shadow: 0 0 0 2px rgba(74, 85, 104, 0.15) !important;\n}\n.budget-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-shrink: 0;\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n.budget-header[_ngcontent-%COMP%]   .budget-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: #e6e6e6;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.budget-header[_ngcontent-%COMP%]   .budget-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #10b981;\n  font-size: 16px;\n}\n.budget-header[_ngcontent-%COMP%]   .budget-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.budget-header[_ngcontent-%COMP%]   .budget-controls[_ngcontent-%COMP%]   .month-selector[_ngcontent-%COMP%] {\n  background: #1f2228;\n  color: #e6e6e6;\n  border: 1px solid #3a3f47;\n  border-radius: 8px;\n  padding: 8px 10px;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.budget-header[_ngcontent-%COMP%]   .budget-controls[_ngcontent-%COMP%]   .month-selector[_ngcontent-%COMP%]:hover {\n  border-color: #4a5568;\n}\n.budget-header[_ngcontent-%COMP%]   .budget-controls[_ngcontent-%COMP%]   .month-selector[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #4a5568;\n  box-shadow: 0 0 0 2px rgba(74, 85, 104, 0.15);\n}\n.month-header[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.month-header[_ngcontent-%COMP%]   .month-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #9aa0a6;\n  margin: 0;\n  padding: 4px;\n}\n.budget-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-height: 0;\n  overflow: auto;\n}\n.budget-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n  margin-bottom: 8px;\n  flex: 1;\n  min-height: 0;\n}\n@media (max-width: 1200px) {\n  .budget-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.credits-section[_ngcontent-%COMP%] {\n  background: #14171c;\n  border: 1px solid #2a2f36;\n  border-radius: 8px;\n  padding: 8px;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n  max-height: 100%;\n  overflow: hidden;\n}\n.credits-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 6px;\n  padding-bottom: 6px;\n  border-bottom: 1px solid #23272f;\n  flex-shrink: 0;\n}\n.credits-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: #e6e6e6;\n  text-transform: uppercase;\n}\n.credits-header[_ngcontent-%COMP%] {\n  background: transparent;\n  padding: 0;\n  border-radius: 0;\n}\n.debits-section[_ngcontent-%COMP%] {\n  background: #14171c;\n  border: 1px solid #2a2f36;\n  border-radius: 8px;\n  padding: 8px;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n  max-height: 100%;\n  overflow: hidden;\n}\n.debits-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 6px;\n  padding-bottom: 6px;\n  border-bottom: 1px solid #23272f;\n  flex-shrink: 0;\n}\n.debits-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: #e6e6e6;\n  text-transform: uppercase;\n}\n.debits-header[_ngcontent-%COMP%] {\n  background: transparent;\n  padding: 0;\n  border-radius: 0;\n}\n.table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  overflow-y: auto;\n  flex: 1;\n  min-height: 0;\n  scrollbar-width: thin;\n  scrollbar-color: #3a3f47 #1a1d24;\n}\n.table-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 12px;\n  height: 12px;\n}\n.table-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #1a1d24;\n  border-radius: 6px;\n}\n.table-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #3a3f47;\n  border-radius: 6px;\n  border: 2px solid #1a1d24;\n}\n.table-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #4a4f57;\n}\n.table-container[_ngcontent-%COMP%]::-webkit-scrollbar-corner {\n  background: #1a1d24;\n}\n.budget-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.budget-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 1rem;\n  text-align: left;\n  font-weight: 600;\n  font-size: 0.875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.1);\n}\n.budget-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n  transition: background-color 0.15s ease-in-out;\n}\n.budget-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.05);\n}\n.budget-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.budget-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.budget-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.empty-row[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--text-muted);\n  font-style: italic;\n}\n.budget-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.empty-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.credits-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1);\n  color: #10b981;\n}\n.debits-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: #2c2f36;\n  color: #e6e6e6;\n  border: 1px solid #3a3f47;\n  border-radius: 8px;\n  padding: 8px 12px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  transition: all 0.2s ease;\n}\n.btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  border-color: #3b82f6;\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n  border-color: #2563eb;\n}\n.btn.btn-success[_ngcontent-%COMP%] {\n  background: #16a34a;\n  border-color: #16a34a;\n  color: white;\n}\n.btn.btn-success[_ngcontent-%COMP%]:hover {\n  background: #15803d;\n  border-color: #15803d;\n}\n.btn.btn-danger[_ngcontent-%COMP%] {\n  background: #dc2626;\n  border-color: #dc2626;\n  color: white;\n}\n.btn.btn-danger[_ngcontent-%COMP%]:hover {\n  background: #b91c1c;\n  border-color: #b91c1c;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background: #2c2f36;\n  color: #e6e6e6;\n  border: 1px solid #3a3f47;\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #3a3f47;\n  border-color: #4a4f57;\n}\n.btn.btn-small[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  font-size: 12px;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: var(--text-secondary);\n  cursor: pointer;\n  padding: 0.25rem;\n  border-radius: 4px;\n  transition: all 0.15s ease-in-out;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: var(--text-primary);\n}\n.btn-icon.btn-edit[_ngcontent-%COMP%]:hover {\n  color: var(--primary-accent);\n}\n.btn-icon.btn-delete[_ngcontent-%COMP%]:hover {\n  color: #ef4444;\n}\n.summary-section[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  padding: 8px;\n  background: #14171c;\n  border: 1px solid #2a2f36;\n  border-radius: 8px;\n  flex-shrink: 0;\n}\n.summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 6px;\n}\n@media (max-width: 768px) {\n  .summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.summary-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: 8px;\n  background: #1f2228;\n  border: 1px solid #3a3f47;\n  border-radius: 6px;\n}\n.summary-item[_ngcontent-%COMP%]   .summary-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #9aa0a6;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.summary-item[_ngcontent-%COMP%]   .summary-value[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #e6e6e6;\n}\n.summary-item.balance-item[_ngcontent-%COMP%] {\n  background: rgba(234, 179, 8, 0.15);\n  border: 1px solid rgba(234, 179, 8, 0.3);\n}\n.summary-item.balance-item[_ngcontent-%COMP%]   .summary-label[_ngcontent-%COMP%] {\n  color: #fbbf24;\n}\n.summary-item.balance-item[_ngcontent-%COMP%]   .summary-value[_ngcontent-%COMP%] {\n  color: #fbbf24;\n}\n.total-section[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  background: rgba(6, 182, 212, 0.1);\n  border: 2px solid rgba(6, 182, 212, 0.3);\n  border-radius: 16px;\n  box-shadow: 0 4px 20px rgba(6, 182, 212, 0.2);\n}\n.total-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 120px repeat(3, 1fr);\n  gap: 1.5rem;\n  align-items: center;\n}\n@media (max-width: 1024px) {\n  .total-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n}\n.total-label[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #06b6d4;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.total-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  padding: 1rem;\n  background: rgba(6, 182, 212, 0.1);\n  border-radius: 8px;\n}\n.total-item[_ngcontent-%COMP%]   .total-value-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #67e8f9;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.total-item[_ngcontent-%COMP%]   .total-value[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #06b6d4;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem;\n  text-align: center;\n  color: var(--text-muted);\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  margin-bottom: 1.5rem;\n  color: var(--text-disabled);\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=budget.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BudgetComponent, [{
    type: Component,
    args: [{ selector: "app-budget", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="budget-container">\r
  <!-- Header Section -->\r
  <div class="budget-header">\r
    <h2 class="budget-title">\r
      Budget Management\r
    </h2>\r
    <div class="budget-controls">\r
      <select \r
        class="month-selector" \r
        [value]="selectedMonth?.id || ''"\r
        (change)="onMonthChange($event)">\r
        <option value="" disabled>Select Month</option>\r
        <option *ngFor="let month of months" [value]="month.id">\r
          {{ month.monthYear }}\r
        </option>\r
      </select>\r
      <button class="add-action-btn" (click)="openAddMonthModal()">\r
        <i class="fas fa-plus"></i><span>Add Month</span>\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Budget Content -->\r
  <div class="budget-content" *ngIf="currentMonthData">\r
    <div class="budget-grid">\r
      <!-- Credits Section (Green) -->\r
      <div class="credits-section">\r
        <div class="section-header credits-header">\r
          <h4>Credit's</h4>\r
          <button class="btn btn-small btn-success" (click)="openAddCreditModal()">\r
            <i class="fas fa-plus"></i> Add Credit\r
          </button>\r
        </div>\r
        \r
        <div class="table-container">\r
          <table class="budget-table credits-table">\r
            <thead>\r
              <tr>\r
                <th>Source</th>\r
                <th>Amount (Estimated)</th>\r
                <th>Amount (Actual)</th>\r
                <th>Actions</th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              <tr *ngFor="let credit of getCredits()">\r
                <td>{{ credit.source }}</td>\r
                <td>{{ formatCurrency(credit.amountEstimated) }}</td>\r
                <td>{{ formatCurrency(credit.amountActual) }}</td>\r
                <td class="action-buttons">\r
                  <button class="btn-icon btn-edit" (click)="openEditCreditModal(credit)" title="Edit">\r
                    <i class="fas fa-edit"></i>\r
                  </button>\r
                  <button \r
                    class="btn-icon btn-delete" \r
                    (click)="deleteCredit(credit)"\r
                    *ngIf="!credit.isLastMonthBalance"\r
                    title="Delete">\r
                    <i class="fas fa-trash"></i>\r
                  </button>\r
                </td>\r
              </tr>\r
              <tr *ngIf="getCredits().length === 0" class="empty-row">\r
                <td colspan="4">No credits added yet</td>\r
              </tr>\r
            </tbody>\r
          </table>\r
        </div>\r
      </div>\r
\r
      <!-- Debits Section (Red) -->\r
      <div class="debits-section">\r
        <div class="section-header debits-header">\r
          <h4>Debit's</h4>\r
          <button class="btn btn-small btn-danger" (click)="openAddDebitModal()">\r
            <i class="fas fa-plus"></i> Add Debit\r
          </button>\r
        </div>\r
        \r
        <div class="table-container">\r
          <table class="budget-table debits-table">\r
            <thead>\r
              <tr>\r
                <th>Target</th>\r
                <th>Amount (Estimated)</th>\r
                <th>Amount (Actual)</th>\r
                <th>Actions</th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              <tr *ngFor="let debit of getDebits()">\r
                <td>{{ debit.target }}</td>\r
                <td>{{ formatCurrency(debit.amountEstimated) }}</td>\r
                <td>{{ formatCurrency(debit.amountActual) }}</td>\r
                <td class="action-buttons">\r
                  <button class="btn-icon btn-edit" (click)="openEditDebitModal(debit)" title="Edit">\r
                    <i class="fas fa-edit"></i>\r
                  </button>\r
                  <button class="btn-icon btn-delete" (click)="deleteDebit(debit)" title="Delete">\r
                    <i class="fas fa-trash"></i>\r
                  </button>\r
                </td>\r
              </tr>\r
              <tr *ngIf="getDebits().length === 0" class="empty-row">\r
                <td colspan="4">No debits added yet</td>\r
              </tr>\r
            </tbody>\r
          </table>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Monthly Summary Section -->\r
    <div class="summary-section">\r
      <div class="summary-grid">\r
        <div class="summary-item">\r
          <span class="summary-label">Monthly Credit</span>\r
          <span class="summary-value">{{ formatCurrency(getMonthlyCredit()) }}</span>\r
        </div>\r
        <div class="summary-item">\r
          <span class="summary-label">Monthly Debit</span>\r
          <span class="summary-value">{{ formatCurrency(getMonthlyDebit()) }}</span>\r
        </div>\r
        <div class="summary-item balance-item">\r
          <span class="summary-label">Final Balance Till Month</span>\r
          <span class="summary-value">{{ formatCurrency(getFinalBalance()) }}</span>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Total Row (Cyan) -->\r
    <div class="total-section">\r
      <div class="total-grid">\r
        <div class="total-label">TOTAL</div>\r
        <div class="total-item">\r
          <span class="total-value-label">Monthly Credit</span>\r
          <span class="total-value">{{ formatCurrency(getTotalMonthlyCredit()) }}</span>\r
        </div>\r
        <div class="total-item">\r
          <span class="total-value-label">Monthly Debit</span>\r
          <span class="total-value">{{ formatCurrency(getTotalMonthlyDebit()) }}</span>\r
        </div>\r
        <div class="total-item">\r
          <span class="total-value-label">Final Balance Till Month</span>\r
          <span class="total-value">{{ formatCurrency(getTotalFinalBalance()) }}</span>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Empty State -->\r
  <div class="empty-state" *ngIf="!currentMonthData">\r
    <i class="fas fa-wallet"></i>\r
    <p>Select a month or create a new month to start managing your budget</p>\r
    <button class="btn btn-primary" (click)="openAddMonthModal()">\r
      <i class="fas fa-plus"></i> Create Month\r
    </button>\r
  </div>\r
</div>\r
\r
<!-- Add/Edit Credit Modal -->\r
<div class="modal-overlay" *ngIf="showAddCreditModal || showEditCreditModal" (click)="closeCreditModal()">\r
  <div class="modal-content" (click)="$event.stopPropagation()">\r
    <div class="modal-header">\r
      <h3>{{ showEditCreditModal ? 'Edit Credit' : 'Add Credit' }}</h3>\r
      <button class="btn-icon" (click)="closeCreditModal()" title="Close">\r
        <i class="fas fa-times"></i>\r
      </button>\r
    </div>\r
    <div class="modal-body">\r
      <div class="form-group">\r
        <label>Source</label>\r
        <input \r
          type="text" \r
          [(ngModel)]="newCredit.source" \r
          placeholder="e.g., Salary, Bonus, etc."\r
          class="form-control"\r
          [disabled]="!!newCredit.isLastMonthBalance">\r
      </div>\r
      <div class="form-group">\r
        <label>Amount (Estimated)</label>\r
        <input \r
          type="number" \r
          [(ngModel)]="newCredit.amountEstimated" \r
          placeholder="0"\r
          class="form-control">\r
      </div>\r
      <div class="form-group">\r
        <label>Amount (Actual)</label>\r
        <input \r
          type="number" \r
          [(ngModel)]="newCredit.amountActual" \r
          placeholder="0"\r
          class="form-control">\r
      </div>\r
      <div class="form-group">\r
        <label>\r
          <input \r
            type="checkbox" \r
            [(ngModel)]="newCredit.isLastMonthBalance"\r
            [disabled]="!!showEditCreditModal">\r
          Last Month Balance\r
        </label>\r
      </div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-secondary" (click)="closeCreditModal()">Cancel</button>\r
      <button class="btn btn-success" (click)="saveCredit()">Save</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Add/Edit Debit Modal -->\r
<div class="modal-overlay" *ngIf="showAddDebitModal || showEditDebitModal" (click)="closeDebitModal()">\r
  <div class="modal-content" (click)="$event.stopPropagation()">\r
    <div class="modal-header">\r
      <h3>{{ showEditDebitModal ? 'Edit Debit' : 'Add Debit' }}</h3>\r
      <button class="btn-icon" (click)="closeDebitModal()" title="Close">\r
        <i class="fas fa-times"></i>\r
      </button>\r
    </div>\r
    <div class="modal-body">\r
      <div class="form-group">\r
        <label>Target</label>\r
        <input \r
          type="text" \r
          [(ngModel)]="newDebit.target" \r
          placeholder="e.g., Home, Daily Expenses, etc."\r
          class="form-control">\r
      </div>\r
      <div class="form-group">\r
        <label>Amount (Estimated)</label>\r
        <input \r
          type="number" \r
          [(ngModel)]="newDebit.amountEstimated" \r
          placeholder="0"\r
          class="form-control">\r
      </div>\r
      <div class="form-group">\r
        <label>Amount (Actual)</label>\r
        <input \r
          type="number" \r
          [(ngModel)]="newDebit.amountActual" \r
          placeholder="0"\r
          class="form-control">\r
      </div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-secondary" (click)="closeDebitModal()">Cancel</button>\r
      <button class="btn btn-danger" (click)="saveDebit()">Save</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Add Month Modal -->\r
<div class="modal-overlay" *ngIf="showAddMonthModal" (click)="closeMonthModal()">\r
  <div class="modal-content" (click)="$event.stopPropagation()">\r
    <div class="modal-header">\r
      <h3>Add New Month</h3>\r
      <button class="btn-icon" (click)="closeMonthModal()" title="Close">\r
        <i class="fas fa-times"></i>\r
      </button>\r
    </div>\r
    <div class="modal-body">\r
      <div class="form-group">\r
        <label>Month Year (e.g., "Oct 2025")</label>\r
        <input \r
          type="text" \r
          [(ngModel)]="newMonth.monthYear" \r
          placeholder="Oct 2025"\r
          class="form-control">\r
      </div>\r
      <div class="form-group">\r
        <label>Month Number (1-12)</label>\r
        <input \r
          type="number" \r
          [(ngModel)]="newMonth.monthNumber" \r
          min="1"\r
          max="12"\r
          class="form-control">\r
      </div>\r
      <div class="form-group">\r
        <label>Year</label>\r
        <input \r
          type="number" \r
          [(ngModel)]="newMonth.yearNumber" \r
          class="form-control">\r
      </div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-secondary" (click)="closeMonthModal()">Cancel</button>\r
      <button class="btn btn-primary" (click)="saveMonth()">Create</button>\r
    </div>\r
  </div>\r
</div>\r
\r
`, styles: ["/* src/app/components/budget/budget.scss */\n:root {\n  --primary-bg: #1a1a1a;\n  --secondary-bg: #2d2d2d;\n  --tertiary-bg: #3a3a3a;\n  --surface-bg: #2a2a2a;\n  --primary-accent: #4a9eff;\n  --secondary-accent: #7c3aed;\n  --success-color: #10b981;\n  --warning-color: #f59e0b;\n  --error-color: #ef4444;\n  --text-primary: #ffffff;\n  --text-secondary: #e5e5e5;\n  --text-muted: #a3a3a3;\n  --text-disabled: #6b7280;\n  --border-primary: #4a4a4a;\n  --border-secondary: #3a3a3a;\n  --border-accent: #5a5a5a;\n  --shadow-light: rgba(0, 0, 0, 0.1);\n  --shadow-medium: rgba(0, 0, 0, 0.2);\n  --shadow-heavy: rgba(0, 0, 0, 0.3);\n  --hover-bg: #3a3a3a;\n  --hover-accent: #5bb0ff;\n  --active-bg: #4a4a4a;\n  --active-accent: #3a8fdf;\n}\n.budget-container {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 16px;\n  height: calc(100vh - 66px);\n  max-height: calc(100vh - 66px);\n  overflow: hidden;\n  box-sizing: border-box;\n  background: #0f1115;\n  color: #e6e6e6;\n}\n.budget-container *:focus {\n  outline: none !important;\n}\n.budget-container input:not([type=checkbox]):not([type=radio]):focus,\n.budget-container textarea:focus,\n.budget-container select:focus {\n  outline: none !important;\n  border-color: #4a5568 !important;\n  box-shadow: 0 0 0 2px rgba(74, 85, 104, 0.15) !important;\n}\n.budget-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-shrink: 0;\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n.budget-header .budget-title {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: #e6e6e6;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.budget-header .budget-title i {\n  color: #10b981;\n  font-size: 16px;\n}\n.budget-header .budget-controls {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.budget-header .budget-controls .month-selector {\n  background: #1f2228;\n  color: #e6e6e6;\n  border: 1px solid #3a3f47;\n  border-radius: 8px;\n  padding: 8px 10px;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.budget-header .budget-controls .month-selector:hover {\n  border-color: #4a5568;\n}\n.budget-header .budget-controls .month-selector:focus {\n  outline: none;\n  border-color: #4a5568;\n  box-shadow: 0 0 0 2px rgba(74, 85, 104, 0.15);\n}\n.month-header {\n  margin-bottom: 8px;\n}\n.month-header .month-title {\n  font-size: 14px;\n  font-weight: 600;\n  color: #9aa0a6;\n  margin: 0;\n  padding: 4px;\n}\n.budget-content {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-height: 0;\n  overflow: auto;\n}\n.budget-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n  margin-bottom: 8px;\n  flex: 1;\n  min-height: 0;\n}\n@media (max-width: 1200px) {\n  .budget-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.credits-section {\n  background: #14171c;\n  border: 1px solid #2a2f36;\n  border-radius: 8px;\n  padding: 8px;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n  max-height: 100%;\n  overflow: hidden;\n}\n.credits-section .section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 6px;\n  padding-bottom: 6px;\n  border-bottom: 1px solid #23272f;\n  flex-shrink: 0;\n}\n.credits-section .section-header h4 {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: #e6e6e6;\n  text-transform: uppercase;\n}\n.credits-header {\n  background: transparent;\n  padding: 0;\n  border-radius: 0;\n}\n.debits-section {\n  background: #14171c;\n  border: 1px solid #2a2f36;\n  border-radius: 8px;\n  padding: 8px;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n  max-height: 100%;\n  overflow: hidden;\n}\n.debits-section .section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 6px;\n  padding-bottom: 6px;\n  border-bottom: 1px solid #23272f;\n  flex-shrink: 0;\n}\n.debits-section .section-header h4 {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: #e6e6e6;\n  text-transform: uppercase;\n}\n.debits-header {\n  background: transparent;\n  padding: 0;\n  border-radius: 0;\n}\n.table-container {\n  overflow-x: auto;\n  overflow-y: auto;\n  flex: 1;\n  min-height: 0;\n  scrollbar-width: thin;\n  scrollbar-color: #3a3f47 #1a1d24;\n}\n.table-container::-webkit-scrollbar {\n  width: 12px;\n  height: 12px;\n}\n.table-container::-webkit-scrollbar-track {\n  background: #1a1d24;\n  border-radius: 6px;\n}\n.table-container::-webkit-scrollbar-thumb {\n  background: #3a3f47;\n  border-radius: 6px;\n  border: 2px solid #1a1d24;\n}\n.table-container::-webkit-scrollbar-thumb:hover {\n  background: #4a4f57;\n}\n.table-container::-webkit-scrollbar-corner {\n  background: #1a1d24;\n}\n.budget-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.budget-table thead th {\n  padding: 1rem;\n  text-align: left;\n  font-weight: 600;\n  font-size: 0.875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.1);\n}\n.budget-table tbody tr {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n  transition: background-color 0.15s ease-in-out;\n}\n.budget-table tbody tr:hover {\n  background: rgba(255, 255, 255, 0.05);\n}\n.budget-table tbody tr td {\n  padding: 1rem;\n}\n.budget-table tbody tr td.action-buttons {\n  display: flex;\n  gap: 0.5rem;\n}\n.budget-table tbody tr.empty-row {\n  text-align: center;\n  color: var(--text-muted);\n  font-style: italic;\n}\n.budget-table tbody tr.empty-row td {\n  padding: 2rem;\n}\n.credits-table thead th {\n  background: rgba(16, 185, 129, 0.1);\n  color: #10b981;\n}\n.debits-table thead th {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: #2c2f36;\n  color: #e6e6e6;\n  border: 1px solid #3a3f47;\n  border-radius: 8px;\n  padding: 8px 12px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  transition: all 0.2s ease;\n}\n.btn i {\n  font-size: 14px;\n}\n.btn.btn-primary {\n  background: #3b82f6;\n  border-color: #3b82f6;\n  color: white;\n}\n.btn.btn-primary:hover {\n  background: #2563eb;\n  border-color: #2563eb;\n}\n.btn.btn-success {\n  background: #16a34a;\n  border-color: #16a34a;\n  color: white;\n}\n.btn.btn-success:hover {\n  background: #15803d;\n  border-color: #15803d;\n}\n.btn.btn-danger {\n  background: #dc2626;\n  border-color: #dc2626;\n  color: white;\n}\n.btn.btn-danger:hover {\n  background: #b91c1c;\n  border-color: #b91c1c;\n}\n.btn.btn-secondary {\n  background: #2c2f36;\n  color: #e6e6e6;\n  border: 1px solid #3a3f47;\n}\n.btn.btn-secondary:hover {\n  background: #3a3f47;\n  border-color: #4a4f57;\n}\n.btn.btn-small {\n  padding: 6px 10px;\n  font-size: 12px;\n}\n.btn-icon {\n  background: transparent;\n  border: none;\n  color: var(--text-secondary);\n  cursor: pointer;\n  padding: 0.25rem;\n  border-radius: 4px;\n  transition: all 0.15s ease-in-out;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n}\n.btn-icon:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: var(--text-primary);\n}\n.btn-icon.btn-edit:hover {\n  color: var(--primary-accent);\n}\n.btn-icon.btn-delete:hover {\n  color: #ef4444;\n}\n.summary-section {\n  margin-bottom: 8px;\n  padding: 8px;\n  background: #14171c;\n  border: 1px solid #2a2f36;\n  border-radius: 8px;\n  flex-shrink: 0;\n}\n.summary-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 6px;\n}\n@media (max-width: 768px) {\n  .summary-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.summary-item {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: 8px;\n  background: #1f2228;\n  border: 1px solid #3a3f47;\n  border-radius: 6px;\n}\n.summary-item .summary-label {\n  font-size: 10px;\n  color: #9aa0a6;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.summary-item .summary-value {\n  font-size: 16px;\n  font-weight: 700;\n  color: #e6e6e6;\n}\n.summary-item.balance-item {\n  background: rgba(234, 179, 8, 0.15);\n  border: 1px solid rgba(234, 179, 8, 0.3);\n}\n.summary-item.balance-item .summary-label {\n  color: #fbbf24;\n}\n.summary-item.balance-item .summary-value {\n  color: #fbbf24;\n}\n.total-section {\n  padding: 1.5rem;\n  background: rgba(6, 182, 212, 0.1);\n  border: 2px solid rgba(6, 182, 212, 0.3);\n  border-radius: 16px;\n  box-shadow: 0 4px 20px rgba(6, 182, 212, 0.2);\n}\n.total-grid {\n  display: grid;\n  grid-template-columns: 120px repeat(3, 1fr);\n  gap: 1.5rem;\n  align-items: center;\n}\n@media (max-width: 1024px) {\n  .total-grid {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n}\n.total-label {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #06b6d4;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.total-item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  padding: 1rem;\n  background: rgba(6, 182, 212, 0.1);\n  border-radius: 8px;\n}\n.total-item .total-value-label {\n  font-size: 0.75rem;\n  color: #67e8f9;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.total-item .total-value {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #06b6d4;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem;\n  text-align: center;\n  color: var(--text-muted);\n}\n.empty-state i {\n  font-size: 4rem;\n  margin-bottom: 1.5rem;\n  color: var(--text-disabled);\n}\n.empty-state p {\n  font-size: 1.125rem;\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=budget.css.map */\n"] }]
  }], () => [{ type: BudgetService }, { type: ConfirmationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BudgetComponent, { className: "BudgetComponent", filePath: "src/app/components/budget/budget.ts", lineNumber: 15 });
})();
export {
  BudgetComponent
};
//# sourceMappingURL=chunk-XS4Y7MTH.js.map
