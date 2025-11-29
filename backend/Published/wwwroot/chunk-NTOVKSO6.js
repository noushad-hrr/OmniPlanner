import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  DatePipe,
  EventEmitter,
  FormsModule,
  Input,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  NgSelectOption,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  Output,
  SelectControlValueAccessor,
  TitleCasePipe,
  ViewChild,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  ɵNgSelectMultipleOption,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-OPSATDSU.js";

// src/app/components/data-table/data-table.ts
var _c0 = ["tableRef"];
var _c1 = ["headerRef"];
function DataTableComponent_div_1_div_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 32);
    \u0275\u0275listener("click", function DataTableComponent_div_1_div_4_span_1_Template_button_click_2_listener() {
      const filter_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.onFilter(filter_r3, ""));
    });
    \u0275\u0275text(3, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const filter_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", filter_r3, ": ", ctx_r3.filters[filter_r3], " ");
  }
}
function DataTableComponent_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275template(1, DataTableComponent_div_1_div_4_span_1_Template, 4, 2, "span", 29);
    \u0275\u0275elementStart(2, "button", 30);
    \u0275\u0275listener("click", function DataTableComponent_div_1_div_4_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.clearFilters());
    });
    \u0275\u0275text(3, "Clear All");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.getFilterKeys());
  }
}
function DataTableComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23, 1)(2, "div", 24)(3, "div", 25);
    \u0275\u0275template(4, DataTableComponent_div_1_div_4_Template, 4, 1, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r3.getFilterKeys().length > 0);
  }
}
function DataTableComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34);
    \u0275\u0275element(2, "div", 35);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Loading...");
    \u0275\u0275elementEnd()()();
  }
}
function DataTableComponent_th_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 36)(1, "div", 37);
    \u0275\u0275element(2, "span", 38);
    \u0275\u0275elementEnd()();
  }
}
function DataTableComponent_th_9_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r3.sortColumn === column_r6.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getSortIcon(column_r6), " ");
  }
}
function DataTableComponent_th_9_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275listener("mousedown", function DataTableComponent_th_9_div_5_Template_div_mousedown_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const column_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onMouseDown($event, column_r6));
    });
    \u0275\u0275elementEnd();
  }
}
function DataTableComponent_th_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "th", 39);
    \u0275\u0275listener("click", function DataTableComponent_th_9_Template_th_click_0_listener() {
      const column_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onSort(column_r6));
    });
    \u0275\u0275elementStart(1, "div", 37)(2, "span", 40);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, DataTableComponent_th_9_span_4_Template, 2, 3, "span", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, DataTableComponent_th_9_div_5_Template, 1, 0, "div", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("width", column_r6.width)("min-width", column_r6.minWidth)("max-width", column_r6.maxWidth)("text-align", column_r6.align || "left");
    \u0275\u0275classProp("sortable", column_r6.sortable)("sticky", column_r6.sticky);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", column_r6.tooltip || column_r6.title);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", column_r6.title, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", column_r6.sortable);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", column_r6.resizable && ctx_r3.config.resizable);
  }
}
function DataTableComponent_tr_11_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, " Try adjusting your search or filters ");
    \u0275\u0275elementEnd();
  }
}
function DataTableComponent_tr_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 45)(1, "td")(2, "div", 46)(3, "div", 47);
    \u0275\u0275text(4, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, DataTableComponent_tr_11_p_7_Template, 2, 0, "p", 48);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r3.getVisibleColumns().length + (ctx_r3.config.selectable ? 1 : 0) + (ctx_r3.actions.length > 0 ? 1 : 0));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.emptyMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.getFilteredCount() !== ctx_r3.getTotalCount());
  }
}
function DataTableComponent_tr_12_td_1_input_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 58);
    \u0275\u0275listener("change", function DataTableComponent_tr_12_td_1_input_3_Template_input_change_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const row_r9 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onMainTaskCheckboxChange(row_r9, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("disabled", ctx_r3.isMainTaskDisabled(row_r9));
    \u0275\u0275property("checked", row_r9["completed"] || false)("disabled", ctx_r3.isMainTaskDisabled(row_r9));
  }
}
function DataTableComponent_tr_12_td_1_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 59);
    \u0275\u0275listener("click", function DataTableComponent_tr_12_td_1_button_5_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const row_r9 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.onToggleImportant(row_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275classProp("important", row_r9["important"]);
    \u0275\u0275property("title", row_r9["important"] ? "Mark as not important" : "Mark as important");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r9["important"] ? "\u2605" : "\u2606", " ");
  }
}
function DataTableComponent_tr_12_td_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 52)(1, "div", 53)(2, "label", 54);
    \u0275\u0275template(3, DataTableComponent_tr_12_td_1_input_3_Template, 1, 4, "input", 55);
    \u0275\u0275element(4, "span", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, DataTableComponent_tr_12_td_1_button_5_Template, 2, 4, "button", 57);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !row_r9["level"]);
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", ctx_r3.isMainTaskDisabled(row_r9));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !row_r9["level"]);
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_span_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "titlecase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r11 = \u0275\u0275nextContext(3).$implicit;
    const row_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r3.getCellValue(row_r9, column_r11.key)), " ");
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_span_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 77);
    \u0275\u0275text(1, "ND");
    \u0275\u0275elementEnd();
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 76);
    \u0275\u0275template(1, DataTableComponent_tr_12_td_2_ng_container_2_span_2_span_1_Template, 3, 3, "span", 62)(2, DataTableComponent_tr_12_td_2_ng_container_2_span_2_ng_template_2_Template, 2, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const priorityND_r12 = \u0275\u0275reference(3);
    const column_r11 = \u0275\u0275nextContext(2).$implicit;
    const row_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background-color", ctx_r3.getPriorityColor(row_r9[column_r11.key] || row_r9["priorityLevel"]));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.getCellValue(row_r9, column_r11.key))("ngIfElse", priorityND_r12);
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_span_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "titlecase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r11 = \u0275\u0275nextContext(3).$implicit;
    const row_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r3.getCellValue(row_r9, column_r11.key)), " ");
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_span_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 77);
    \u0275\u0275text(1, "ND");
    \u0275\u0275elementEnd();
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 78);
    \u0275\u0275template(1, DataTableComponent_tr_12_td_2_ng_container_2_span_3_span_1_Template, 3, 3, "span", 62)(2, DataTableComponent_tr_12_td_2_ng_container_2_span_3_ng_template_2_Template, 2, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const statusND_r13 = \u0275\u0275reference(3);
    const column_r11 = \u0275\u0275nextContext(2).$implicit;
    const row_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background-color", ctx_r3.getStatusColor(row_r9[column_r11.key]));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.getCellValue(row_r9, column_r11.key))("ngIfElse", statusND_r13);
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82);
    \u0275\u0275element(1, "div", 83);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r11 = \u0275\u0275nextContext(3).$implicit;
    const row_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx_r3.getProgressPercentage(ctx_r3.getCellValue(row_r9, column_r11.key)), "%");
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_div_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 84);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r11 = \u0275\u0275nextContext(3).$implicit;
    const row_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r3.getCellValue(row_r9, column_r11.key), "%");
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275template(1, DataTableComponent_tr_12_td_2_ng_container_2_div_4_div_1_Template, 2, 2, "div", 80)(2, DataTableComponent_tr_12_td_2_ng_container_2_div_4_span_2_Template, 2, 1, "span", 81);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r9["level"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r9["level"]);
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_span_5_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const column_r11 = \u0275\u0275nextContext(4).$implicit;
    const row_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, ctx_r3.getCellValue(row_r9, column_r11.key), "EEE, MMM dd, yyyy"), " ");
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_span_5_ng_container_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 77);
    \u0275\u0275text(1, "ND");
    \u0275\u0275elementEnd();
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_span_5_ng_container_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275pipe(1, "date");
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementStart(3, "div", 89)(4, "span", 90);
    \u0275\u0275text(5, "SD:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 91);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 89)(10, "span", 90);
    \u0275\u0275text(11, "ED:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 91);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext(5).$implicit;
    \u0275\u0275property("title", "Periodic Task: " + \u0275\u0275pipeBind2(1, 3, row_r9["periodicTask"].startDate, "EEE, MMM dd, yyyy") + " - " + \u0275\u0275pipeBind2(2, 6, row_r9["periodicTask"].endDate, "EEE, MMM dd, yyyy"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 9, row_r9["periodicTask"].startDate, "EEE, MMM dd, yyyy"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 12, row_r9["periodicTask"].endDate, "EEE, MMM dd, yyyy"));
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_span_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 86);
    \u0275\u0275template(2, DataTableComponent_tr_12_td_2_ng_container_2_span_5_ng_container_1_ng_container_2_Template, 3, 4, "ng-container", 62)(3, DataTableComponent_tr_12_td_2_ng_container_2_span_5_ng_container_1_ng_template_3_Template, 2, 0, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, DataTableComponent_tr_12_td_2_ng_container_2_span_5_ng_container_1_div_5_Template, 15, 15, "div", 87);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const noDate_r14 = \u0275\u0275reference(4);
    const column_r11 = \u0275\u0275nextContext(3).$implicit;
    const row_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.getCellValue(row_r9, column_r11.key))("ngIfElse", noDate_r14);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", column_r11.key === "taskOnDate" && !row_r9["level"] && row_r9["periodicTask"] && row_r9["periodicTask"].id && row_r9["periodicTask"].startDate && row_r9["periodicTask"].endDate);
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_span_5_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const column_r11 = \u0275\u0275nextContext(4).$implicit;
    const row_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, ctx_r3.getCellValue(row_r9, column_r11.key), "EEE, MMM dd, yyyy"), " ");
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_span_5_ng_container_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 77);
    \u0275\u0275text(1, "ND");
    \u0275\u0275elementEnd();
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_span_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, DataTableComponent_tr_12_td_2_ng_container_2_span_5_ng_container_2_ng_container_1_Template, 3, 4, "ng-container", 62)(2, DataTableComponent_tr_12_td_2_ng_container_2_span_5_ng_container_2_ng_template_2_Template, 2, 0, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const noDate_r15 = \u0275\u0275reference(3);
    const column_r11 = \u0275\u0275nextContext(3).$implicit;
    const row_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.getCellValue(row_r9, column_r11.key))("ngIfElse", noDate_r15);
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 85);
    \u0275\u0275template(1, DataTableComponent_tr_12_td_2_ng_container_2_span_5_ng_container_1_Template, 6, 3, "ng-container", 48)(2, DataTableComponent_tr_12_td_2_ng_container_2_span_5_ng_container_2_Template, 4, 2, "ng-container", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.isPeriodicTasks);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isPeriodicTasks);
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_span_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 95)(1, "label", 96);
    \u0275\u0275listener("click", function DataTableComponent_tr_12_td_2_ng_container_2_span_6_div_1_Template_label_click_1_listener($event) {
      \u0275\u0275restoreView(_r16);
      const column_r11 = \u0275\u0275nextContext(3).$implicit;
      const row_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onBooleanToggle(column_r11.key, row_r9, $event));
    });
    \u0275\u0275elementStart(2, "input", 97);
    \u0275\u0275listener("click", function DataTableComponent_tr_12_td_2_ng_container_2_span_6_div_1_Template_input_click_2_listener($event) {
      \u0275\u0275restoreView(_r16);
      const column_r11 = \u0275\u0275nextContext(3).$implicit;
      const row_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onBooleanToggle(column_r11.key, row_r9, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 98);
    \u0275\u0275element(4, "span", 99);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const column_r11 = \u0275\u0275nextContext(3).$implicit;
    const row_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r3.getCellValue(row_r9, column_r11.key) ? "Turn off" : "Turn on");
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r3.getCellValue(row_r9, column_r11.key));
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r3.getCellValue(row_r9, column_r11.key));
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_span_6_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 100);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r11 = \u0275\u0275nextContext(3).$implicit;
    const row_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("true", ctx_r3.getCellValue(row_r9, column_r11.key))("false", !ctx_r3.getCellValue(row_r9, column_r11.key));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getCellValue(row_r9, column_r11.key) ? "\u2713" : "\u2717", " ");
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 92);
    \u0275\u0275template(1, DataTableComponent_tr_12_td_2_ng_container_2_span_6_div_1_Template, 5, 4, "div", 93)(2, DataTableComponent_tr_12_td_2_ng_container_2_span_6_span_2_Template, 2, 5, "span", 94);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r11 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", column_r11.toggleable);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !column_r11.toggleable);
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_ng_container_7_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 104);
    \u0275\u0275element(1, "span", 105);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r11 = \u0275\u0275nextContext(3).$implicit;
    const row_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r3.getCellValue(row_r9, column_r11.key));
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r3.getCellValue(row_r9, column_r11.key));
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_ng_container_7_span_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 107);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const column_r11 = \u0275\u0275nextContext(4).$implicit;
    const row_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.getCategoryIcon(row_r9[column_r11.key]));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getCellValue(row_r9, column_r11.key), " ");
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_ng_container_7_span_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 77);
    \u0275\u0275text(1, "ND");
    \u0275\u0275elementEnd();
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_ng_container_7_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 106);
    \u0275\u0275template(1, DataTableComponent_tr_12_td_2_ng_container_2_ng_container_7_span_2_ng_container_1_Template, 4, 2, "ng-container", 62)(2, DataTableComponent_tr_12_td_2_ng_container_2_ng_container_7_span_2_ng_template_2_Template, 2, 0, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const categoryND_r17 = \u0275\u0275reference(3);
    const column_r11 = \u0275\u0275nextContext(3).$implicit;
    const row_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r9[column_r11.key] && row_r9[column_r11.key].name)("ngIfElse", categoryND_r17);
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_ng_container_7_div_3_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 95)(1, "label", 96);
    \u0275\u0275listener("click", function DataTableComponent_tr_12_td_2_ng_container_2_ng_container_7_div_3_ng_container_2_div_1_Template_label_click_1_listener($event) {
      \u0275\u0275restoreView(_r18);
      const action_r19 = \u0275\u0275nextContext().$implicit;
      const row_r9 = \u0275\u0275nextContext(5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onActionClick(action_r19, row_r9, $event));
    });
    \u0275\u0275elementStart(2, "input", 97);
    \u0275\u0275listener("click", function DataTableComponent_tr_12_td_2_ng_container_2_ng_container_7_div_3_ng_container_2_div_1_Template_input_click_2_listener($event) {
      \u0275\u0275restoreView(_r18);
      const action_r19 = \u0275\u0275nextContext().$implicit;
      const row_r9 = \u0275\u0275nextContext(5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onActionClick(action_r19, row_r9, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 98);
    \u0275\u0275element(4, "span", 99);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext(6).$implicit;
    \u0275\u0275property("title", row_r9["is_active"] ? "Deactivate" : "Activate");
    \u0275\u0275advance();
    \u0275\u0275classProp("active", row_r9["is_active"]);
    \u0275\u0275advance();
    \u0275\u0275property("checked", row_r9["is_active"]);
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_ng_container_7_div_3_ng_container_2_button_2_i_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const action_r19 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275classMap("fas " + action_r19.icon);
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_ng_container_7_div_3_ng_container_2_button_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const action_r19 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(action_r19.icon);
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_ng_container_7_div_3_ng_container_2_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 112);
    \u0275\u0275listener("click", function DataTableComponent_tr_12_td_2_ng_container_2_ng_container_7_div_3_ng_container_2_button_2_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r20);
      const action_r19 = \u0275\u0275nextContext().$implicit;
      const row_r9 = \u0275\u0275nextContext(5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onActionClick(action_r19, row_r9, $event));
    });
    \u0275\u0275template(1, DataTableComponent_tr_12_td_2_ng_container_2_ng_container_7_div_3_ng_container_2_button_2_i_1_Template, 1, 2, "i", 113)(2, DataTableComponent_tr_12_td_2_ng_container_2_ng_container_7_div_3_ng_container_2_button_2_span_2_Template, 2, 1, "span", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const action_r19 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("edit-action", action_r19.action === "edit")("delete-action", action_r19.action === "delete");
    \u0275\u0275property("title", action_r19.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", action_r19.icon && action_r19.icon.startsWith("fa-"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", action_r19.icon && !action_r19.icon.startsWith("fa-"));
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_ng_container_7_div_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, DataTableComponent_tr_12_td_2_ng_container_2_ng_container_7_div_3_ng_container_2_div_1_Template, 5, 4, "div", 93)(2, DataTableComponent_tr_12_td_2_ng_container_2_ng_container_7_div_3_ng_container_2_button_2_Template, 3, 7, "button", 111);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const action_r19 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", action_r19.action === "toggle-active");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", action_r19.action !== "toggle-active");
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_ng_container_7_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108)(1, "div", 109);
    \u0275\u0275template(2, DataTableComponent_tr_12_td_2_ng_container_2_ng_container_7_div_3_ng_container_2_Template, 3, 2, "ng-container", 110);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.actions);
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, DataTableComponent_tr_12_td_2_ng_container_2_ng_container_7_span_1_Template, 2, 3, "span", 101)(2, DataTableComponent_tr_12_td_2_ng_container_2_ng_container_7_span_2_Template, 4, 2, "span", 102)(3, DataTableComponent_tr_12_td_2_ng_container_2_ng_container_7_div_3_Template, 3, 1, "div", 103);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const column_r11 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", column_r11.key === "color");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", column_r11.key !== "actions" && column_r11.key !== "color");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", column_r11.key === "actions");
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_div_8_div_1_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 121);
    \u0275\u0275listener("click", function DataTableComponent_tr_12_td_2_ng_container_2_div_8_div_1_div_1_span_4_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r21);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(1, "i", 122);
    \u0275\u0275elementStart(2, "span", 123);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const urlItem_r22 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(6);
    \u0275\u0275property("title", ctx_r3.getCredentialTooltip(urlItem_r22.credentials));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(urlItem_r22.credentials.length);
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_div_8_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 117)(1, "a", 118)(2, "span", 119);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, DataTableComponent_tr_12_td_2_ng_container_2_div_8_div_1_div_1_span_4_Template, 4, 2, "span", 120);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const urlItem_r22 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("href", urlItem_r22.url, \u0275\u0275sanitizeUrl)("title", urlItem_r22.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(urlItem_r22.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", urlItem_r22.credentials && urlItem_r22.credentials.length > 0);
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, DataTableComponent_tr_12_td_2_ng_container_2_div_8_div_1_div_1_Template, 5, 4, "div", 116);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r11 = \u0275\u0275nextContext(3).$implicit;
    const row_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.getUrlsArray(ctx_r3.getCellValue(row_r9, column_r11.key)));
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_div_8_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 124);
    \u0275\u0275text(1, " No docs ");
    \u0275\u0275elementEnd();
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 114);
    \u0275\u0275template(1, DataTableComponent_tr_12_td_2_ng_container_2_div_8_div_1_Template, 2, 1, "div", 48)(2, DataTableComponent_tr_12_td_2_ng_container_2_div_8_span_2_Template, 2, 0, "span", 115);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r11 = \u0275\u0275nextContext(2).$implicit;
    const row_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.getUrlsArray(ctx_r3.getCellValue(row_r9, column_r11.key)).length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.getUrlsArray(ctx_r3.getCellValue(row_r9, column_r11.key)).length === 0);
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_div_9_ul_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 130);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const remark_r23 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", remark_r23, " ");
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_div_9_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 128);
    \u0275\u0275template(1, DataTableComponent_tr_12_td_2_ng_container_2_div_9_ul_1_li_1_Template, 2, 1, "li", 129);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r11 = \u0275\u0275nextContext(3).$implicit;
    const row_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.getRemarksArray(ctx_r3.getCellValue(row_r9, column_r11.key)));
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_div_9_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 131);
    \u0275\u0275text(1, " No remarks ");
    \u0275\u0275elementEnd();
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 125);
    \u0275\u0275template(1, DataTableComponent_tr_12_td_2_ng_container_2_div_9_ul_1_Template, 2, 1, "ul", 126)(2, DataTableComponent_tr_12_td_2_ng_container_2_div_9_span_2_Template, 2, 0, "span", 127);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r11 = \u0275\u0275nextContext(2).$implicit;
    const row_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.getRemarksArray(ctx_r3.getCellValue(row_r9, column_r11.key)).length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.getRemarksArray(ctx_r3.getCellValue(row_r9, column_r11.key)).length === 0);
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_div_10_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 138);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r11 = \u0275\u0275nextContext(3).$implicit;
    const row_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.maskPassword(ctx_r3.getCellValue(row_r9, column_r11.key)), " ");
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_div_10_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 139);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r11 = \u0275\u0275nextContext(3).$implicit;
    const row_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getCellValue(row_r9, column_r11.key) || "-", " ");
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 132)(1, "div", 133);
    \u0275\u0275template(2, DataTableComponent_tr_12_td_2_ng_container_2_div_10_span_2_Template, 2, 1, "span", 134)(3, DataTableComponent_tr_12_td_2_ng_container_2_div_10_span_3_Template, 2, 1, "span", 135);
    \u0275\u0275elementStart(4, "button", 136);
    \u0275\u0275listener("click", function DataTableComponent_tr_12_td_2_ng_container_2_div_10_Template_button_click_4_listener($event) {
      \u0275\u0275restoreView(_r24);
      const column_r11 = \u0275\u0275nextContext(2).$implicit;
      const row_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.togglePasswordVisibility(row_r9, column_r11.key);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(5, "i", 137);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const column_r11 = \u0275\u0275nextContext(2).$implicit;
    const row_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r3.isPasswordVisible(row_r9, column_r11.key));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isPasswordVisible(row_r9, column_r11.key));
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r3.isPasswordVisible(row_r9, column_r11.key) ? "Hide password" : "Show password");
    \u0275\u0275advance();
    \u0275\u0275classProp("fa-eye", !ctx_r3.isPasswordVisible(row_r9, column_r11.key))("fa-eye-slash", ctx_r3.isPasswordVisible(row_r9, column_r11.key));
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 141);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const column_r11 = \u0275\u0275nextContext(3).$implicit;
    const row_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r3.formatAdditionalFields(ctx_r3.getCellValue(row_r9, column_r11.key)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.formatAdditionalFieldsPreview(ctx_r3.getCellValue(row_r9, column_r11.key)), " ");
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_div_11_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 140);
    \u0275\u0275template(1, DataTableComponent_tr_12_td_2_ng_container_2_div_11_div_1_Template, 3, 2, "div", 48)(2, DataTableComponent_tr_12_td_2_ng_container_2_div_11_span_2_Template, 2, 0, "span", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r11 = \u0275\u0275nextContext(2).$implicit;
    const row_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.getCellValue(row_r9, column_r11.key) && ctx_r3.getCellValue(row_r9, column_r11.key) !== "{}");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.getCellValue(row_r9, column_r11.key) || ctx_r3.getCellValue(row_r9, column_r11.key) === "{}");
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_div_12_div_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 146);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cred_r25 = ctx.$implicit;
    \u0275\u0275property("title", cred_r25.provider + " - " + cred_r25.credential_name + " (" + cred_r25.credential_id + ")");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", cred_r25.provider, " - ", cred_r25.credential_name, " ");
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 144);
    \u0275\u0275template(2, DataTableComponent_tr_12_td_2_ng_container_2_div_12_div_1_span_2_Template, 2, 3, "span", 145);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const column_r11 = \u0275\u0275nextContext(3).$implicit;
    const row_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.getCredentialsArray(ctx_r3.getCellValue(row_r9, column_r11.key)));
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_div_12_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 147);
    \u0275\u0275element(1, "i", 148);
    \u0275\u0275text(2, " Public ");
    \u0275\u0275elementEnd();
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 142);
    \u0275\u0275template(1, DataTableComponent_tr_12_td_2_ng_container_2_div_12_div_1_Template, 3, 1, "div", 48)(2, DataTableComponent_tr_12_td_2_ng_container_2_div_12_span_2_Template, 3, 0, "span", 143);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r11 = \u0275\u0275nextContext(2).$implicit;
    const row_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.getCredentialsArray(ctx_r3.getCellValue(row_r9, column_r11.key)).length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.getCredentialsArray(ctx_r3.getCellValue(row_r9, column_r11.key)).length === 0);
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_span_13_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r11 = \u0275\u0275nextContext(3).$implicit;
    const row_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("#", ctx_r3.getCellValue(row_r9, column_r11.key) || "-");
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_span_13_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r11 = \u0275\u0275nextContext(3).$implicit;
    const row_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getCellValue(row_r9, column_r11.key) || "-", " ");
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_span_13_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 77);
    \u0275\u0275text(1, " ND ");
    \u0275\u0275elementEnd();
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_span_13_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r11 = \u0275\u0275nextContext(3).$implicit;
    const row_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("schedule-overlap", row_r9["hasOrderMismatch"]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getCellValue(row_r9, column_r11.key), " ");
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_span_13_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 77);
    \u0275\u0275text(1, " ND ");
    \u0275\u0275elementEnd();
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_span_13_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r11 = \u0275\u0275nextContext(3).$implicit;
    const row_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("schedule-overlap", row_r9["hasScheduleOverlap"]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getCellValue(row_r9, column_r11.key), " ");
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_span_13_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 77);
    \u0275\u0275text(1, " ND ");
    \u0275\u0275elementEnd();
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_span_13_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r11 = \u0275\u0275nextContext(3).$implicit;
    const row_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("schedule-overlap", row_r9["hasScheduleOverlap"]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getCellValue(row_r9, column_r11.key), " ");
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_span_13_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 77);
    \u0275\u0275text(1, " ND ");
    \u0275\u0275elementEnd();
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_span_13_div_10_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 156);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext(5).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("title", "Hours per day: " + ctx_r3.getHoursPerDay(row_r9) + "h");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getHoursPerDay(row_r9), "h/day ");
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_span_13_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 153)(1, "span", 154);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, DataTableComponent_tr_12_td_2_ng_container_2_span_13_div_10_span_3_Template, 2, 2, "span", 155);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("schedule-overlap", row_r9["hasHoursMismatch"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.getHoursDisplay(row_r9));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isPeriodicTasks && ctx_r3.getHoursPerDay(row_r9) != null);
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 149);
    \u0275\u0275template(1, DataTableComponent_tr_12_td_2_ng_container_2_span_13_span_1_Template, 2, 1, "span", 48)(2, DataTableComponent_tr_12_td_2_ng_container_2_span_13_span_2_Template, 2, 1, "span", 48)(3, DataTableComponent_tr_12_td_2_ng_container_2_span_13_span_3_Template, 2, 0, "span", 150)(4, DataTableComponent_tr_12_td_2_ng_container_2_span_13_span_4_Template, 2, 3, "span", 151)(5, DataTableComponent_tr_12_td_2_ng_container_2_span_13_span_5_Template, 2, 0, "span", 150)(6, DataTableComponent_tr_12_td_2_ng_container_2_span_13_span_6_Template, 2, 3, "span", 151)(7, DataTableComponent_tr_12_td_2_ng_container_2_span_13_span_7_Template, 2, 0, "span", 150)(8, DataTableComponent_tr_12_td_2_ng_container_2_span_13_span_8_Template, 2, 3, "span", 151)(9, DataTableComponent_tr_12_td_2_ng_container_2_span_13_span_9_Template, 2, 0, "span", 150)(10, DataTableComponent_tr_12_td_2_ng_container_2_span_13_div_10_Template, 4, 4, "div", 152);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r11 = \u0275\u0275nextContext(2).$implicit;
    const row_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", column_r11.key === "id");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", column_r11.key !== "id" && column_r11.key !== "priorityOrder" && column_r11.key !== "startTime" && column_r11.key !== "endTime" && column_r11.key !== "hours");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", column_r11.key === "priorityOrder" && (ctx_r3.getCellValue(row_r9, column_r11.key) == null || ctx_r3.getCellValue(row_r9, column_r11.key) === "" || ctx_r3.getCellValue(row_r9, column_r11.key) === "null" || ctx_r3.getCellValue(row_r9, column_r11.key) === "nullh"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", column_r11.key === "priorityOrder" && ctx_r3.getCellValue(row_r9, column_r11.key) != null && ctx_r3.getCellValue(row_r9, column_r11.key) !== "" && ctx_r3.getCellValue(row_r9, column_r11.key) !== "null" && ctx_r3.getCellValue(row_r9, column_r11.key) !== "nullh");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", column_r11.key === "startTime" && (ctx_r3.getCellValue(row_r9, column_r11.key) == null || ctx_r3.getCellValue(row_r9, column_r11.key) === "" || ctx_r3.getCellValue(row_r9, column_r11.key) === "null" || ctx_r3.getCellValue(row_r9, column_r11.key) === "nullh" || ctx_r3.getCellValue(row_r9, "startTime") === "00:00" && ctx_r3.getCellValue(row_r9, "endTime") === "00:00"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", column_r11.key === "startTime" && ctx_r3.getCellValue(row_r9, column_r11.key) != null && ctx_r3.getCellValue(row_r9, column_r11.key) !== "" && ctx_r3.getCellValue(row_r9, column_r11.key) !== "null" && ctx_r3.getCellValue(row_r9, column_r11.key) !== "nullh" && !(ctx_r3.getCellValue(row_r9, "startTime") === "00:00" && ctx_r3.getCellValue(row_r9, "endTime") === "00:00"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", column_r11.key === "endTime" && (ctx_r3.getCellValue(row_r9, column_r11.key) == null || ctx_r3.getCellValue(row_r9, column_r11.key) === "" || ctx_r3.getCellValue(row_r9, column_r11.key) === "null" || ctx_r3.getCellValue(row_r9, column_r11.key) === "nullh" || ctx_r3.getCellValue(row_r9, "startTime") === "00:00" && ctx_r3.getCellValue(row_r9, "endTime") === "00:00"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", column_r11.key === "endTime" && ctx_r3.getCellValue(row_r9, column_r11.key) != null && ctx_r3.getCellValue(row_r9, column_r11.key) !== "" && ctx_r3.getCellValue(row_r9, column_r11.key) !== "null" && ctx_r3.getCellValue(row_r9, column_r11.key) !== "nullh" && !(ctx_r3.getCellValue(row_r9, "startTime") === "00:00" && ctx_r3.getCellValue(row_r9, "endTime") === "00:00"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", column_r11.key === "hours" && (ctx_r3.getCellValue(row_r9, column_r11.key) == null || ctx_r3.getCellValue(row_r9, column_r11.key) === "" || ctx_r3.getCellValue(row_r9, column_r11.key) === "null" || ctx_r3.getCellValue(row_r9, column_r11.key) === "nullh"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", column_r11.key === "hours" && ctx_r3.getCellValue(row_r9, column_r11.key) != null && ctx_r3.getCellValue(row_r9, column_r11.key) !== "" && ctx_r3.getCellValue(row_r9, column_r11.key) !== "null" && ctx_r3.getCellValue(row_r9, column_r11.key) !== "nullh");
  }
}
function DataTableComponent_tr_12_td_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0)(1, 63);
    \u0275\u0275template(2, DataTableComponent_tr_12_td_2_ng_container_2_span_2_Template, 4, 4, "span", 64)(3, DataTableComponent_tr_12_td_2_ng_container_2_span_3_Template, 4, 4, "span", 65)(4, DataTableComponent_tr_12_td_2_ng_container_2_div_4_Template, 3, 2, "div", 66)(5, DataTableComponent_tr_12_td_2_ng_container_2_span_5_Template, 3, 2, "span", 67)(6, DataTableComponent_tr_12_td_2_ng_container_2_span_6_Template, 3, 2, "span", 68)(7, DataTableComponent_tr_12_td_2_ng_container_2_ng_container_7_Template, 4, 3, "ng-container", 69)(8, DataTableComponent_tr_12_td_2_ng_container_2_div_8_Template, 3, 2, "div", 70)(9, DataTableComponent_tr_12_td_2_ng_container_2_div_9_Template, 3, 2, "div", 71)(10, DataTableComponent_tr_12_td_2_ng_container_2_div_10_Template, 6, 7, "div", 72)(11, DataTableComponent_tr_12_td_2_ng_container_2_div_11_Template, 3, 2, "div", 73)(12, DataTableComponent_tr_12_td_2_ng_container_2_div_12_Template, 3, 2, "div", 74)(13, DataTableComponent_tr_12_td_2_ng_container_2_span_13_Template, 11, 10, "span", 75);
    \u0275\u0275elementContainerEnd()();
  }
  if (rf & 2) {
    const column_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitch", column_r11.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "priority");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "status");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "progress");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "date");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "boolean");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "custom");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "urls");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "remarks");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "password");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "json");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "credentials");
  }
}
function DataTableComponent_tr_12_td_2_ng_template_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 77);
    \u0275\u0275text(1, " ND ");
    \u0275\u0275elementEnd();
  }
}
function DataTableComponent_tr_12_td_2_ng_template_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r11 = \u0275\u0275nextContext(2).$implicit;
    const row_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("schedule-overlap", row_r9["hasOrderMismatch"]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getCellValue(row_r9, column_r11.key), " ");
  }
}
function DataTableComponent_tr_12_td_2_ng_template_3_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 77);
    \u0275\u0275text(1, " ND ");
    \u0275\u0275elementEnd();
  }
}
function DataTableComponent_tr_12_td_2_ng_template_3_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r11 = \u0275\u0275nextContext(2).$implicit;
    const row_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("schedule-overlap", row_r9["hasScheduleOverlap"]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getCellValue(row_r9, column_r11.key), " ");
  }
}
function DataTableComponent_tr_12_td_2_ng_template_3_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 77);
    \u0275\u0275text(1, " ND ");
    \u0275\u0275elementEnd();
  }
}
function DataTableComponent_tr_12_td_2_ng_template_3_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r11 = \u0275\u0275nextContext(2).$implicit;
    const row_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("schedule-overlap", row_r9["hasScheduleOverlap"]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getCellValue(row_r9, column_r11.key), " ");
  }
}
function DataTableComponent_tr_12_td_2_ng_template_3_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function DataTableComponent_tr_12_td_2_ng_template_3_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r11 = \u0275\u0275nextContext(2).$implicit;
    const row_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.getCellValue(row_r9, column_r11.key));
  }
}
function DataTableComponent_tr_12_td_2_ng_template_3_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 77);
    \u0275\u0275text(1, " ND ");
    \u0275\u0275elementEnd();
  }
}
function DataTableComponent_tr_12_td_2_ng_template_3_div_10_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 156);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("title", "Hours per day: " + ctx_r3.getHoursPerDay(row_r9) + "h");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getHoursPerDay(row_r9), "h/day ");
  }
}
function DataTableComponent_tr_12_td_2_ng_template_3_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 153)(1, "span", 154);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, DataTableComponent_tr_12_td_2_ng_template_3_div_10_span_3_Template, 2, 2, "span", 155);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("schedule-overlap", row_r9["hasHoursMismatch"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.getHoursDisplay(row_r9));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isPeriodicTasks && ctx_r3.getHoursPerDay(row_r9) != null);
  }
}
function DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 167);
    \u0275\u0275listener("click", function DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_button_3_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r27);
      const row_r9 = \u0275\u0275nextContext(4).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.onToggleTaskExpansion(row_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(1, "i", 137);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275classProp("expanded", row_r9["isExpanded"]);
    \u0275\u0275property("title", \u0275\u0275interpolate1("", row_r9["isExpanded"] ? "Collapse" : "Expand", " subtasks"));
    \u0275\u0275advance();
    \u0275\u0275classProp("fa-chevron-down", row_r9["isExpanded"])("fa-chevron-right", !row_r9["isExpanded"]);
  }
}
function DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 168);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r3.getLevel1SubtaskTooltip(ctx_r3.getCellValue(row_r9, "subtasks")));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getLevel1SubtaskCount(ctx_r3.getCellValue(row_r9, "subtasks")), " ");
  }
}
function DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 169);
    \u0275\u0275listener("click", function DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_button_7_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r28);
      const row_r9 = \u0275\u0275nextContext(4).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.onNavigateToPeriodicTask(row_r9["periodicTask"].id);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "span", 170)(2, "span", 171);
    \u0275\u0275text(3, "\u27F2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span", 172)(5, "span", 173);
    \u0275\u0275text(6, "Periodic");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 174);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275property("title", "Move to periodic task: " + row_r9["periodicTask"].id);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(row_r9["periodicTask"].id);
  }
}
function DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_8_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 177);
    \u0275\u0275listener("click", function DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_8_button_1_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r30);
      const row_r9 = \u0275\u0275nextContext(5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      !ctx_r3.isTaskCompleted(row_r9) && ctx_r3.onAddSubtask(row_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(1, "i", 183);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext(5).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("disabled", ctx_r3.isTaskCompleted(row_r9));
    \u0275\u0275property("disabled", ctx_r3.isTaskCompleted(row_r9))("title", ctx_r3.getAddButtonTooltip(row_r9));
  }
}
function DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 175);
    \u0275\u0275listener("click", function DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_8_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r29);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275template(1, DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_8_button_1_Template, 2, 4, "button", 176);
    \u0275\u0275elementStart(2, "button", 177);
    \u0275\u0275listener("click", function DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_8_Template_button_click_2_listener($event) {
      \u0275\u0275restoreView(_r29);
      const row_r9 = \u0275\u0275nextContext(4).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      !ctx_r3.isTaskCompleted(row_r9) && ctx_r3.onEditTask(row_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(3, "i", 178);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 179);
    \u0275\u0275listener("click", function DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_8_Template_button_click_4_listener($event) {
      \u0275\u0275restoreView(_r29);
      const row_r9 = \u0275\u0275nextContext(4).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.onViewTask(row_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(5, "i", 180);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 181);
    \u0275\u0275listener("click", function DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_8_Template_button_click_6_listener($event) {
      \u0275\u0275restoreView(_r29);
      const row_r9 = \u0275\u0275nextContext(4).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.onDeleteTask(row_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(7, "i", 182);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isPeriodicTasks || (!row_r9["periodicTask"] || !row_r9["periodicTask"].id));
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", ctx_r3.isTaskCompleted(row_r9));
    \u0275\u0275property("disabled", ctx_r3.isTaskCompleted(row_r9))("title", ctx_r3.getEditButtonTooltip(row_r9));
  }
}
function DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 184)(1, "div", 185);
    \u0275\u0275element(2, "div", 186);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 187);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r3.getCellValue(row_r9, "progress"), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r3.getCellValue(row_r9, "progress"), "%");
  }
}
function DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_10_button_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 195);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext(6).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.getRemarksCount(row_r9));
  }
}
function DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_10_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 192);
    \u0275\u0275listener("click", function DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_10_button_1_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r31);
      const row_r9 = \u0275\u0275nextContext(5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.onRemarksClick(row_r9, $event);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "span", 193);
    \u0275\u0275text(2, "Remarks");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_10_button_1_span_3_Template, 2, 1, "span", 194);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext(5).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("title", "Has " + ctx_r3.getRemarksCount(row_r9) + " remark" + (ctx_r3.getRemarksCount(row_r9) > 1 ? "s" : "") + " please check");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r3.getRemarksCount(row_r9) > 0);
  }
}
function DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 196)(1, "span", 197);
    \u0275\u0275text(2, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 198);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext(5).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("title", "Description: " + ctx_r3.getDescriptionText(row_r9));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.getDescriptionText(row_r9));
  }
}
function DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_10_div_3_li_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 206);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const remark_r33 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", remark_r33, " ");
  }
}
function DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_10_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 199);
    \u0275\u0275listener("click", function DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_10_div_3_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r32);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 200)(2, "span", 201);
    \u0275\u0275text(3, "Remarks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 202);
    \u0275\u0275listener("click", function DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_10_div_3_Template_button_click_4_listener($event) {
      \u0275\u0275restoreView(_r32);
      const ctx_r3 = \u0275\u0275nextContext(6);
      ctx_r3.showRemarksTooltip = null;
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(5, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 203)(7, "ul", 204);
    \u0275\u0275template(8, DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_10_div_3_li_8_Template, 2, 1, "li", 205);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext(5).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r3.getRemarksArray(row_r9["remarks"]));
  }
}
function DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 188);
    \u0275\u0275template(1, DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_10_button_1_Template, 4, 2, "button", 189)(2, DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_10_div_2_Template, 5, 2, "div", 190)(3, DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_10_div_3_Template, 9, 1, "div", 191);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.hasRemarks(row_r9));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.hasDescription(row_r9));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.hasRemarks(row_r9) && ctx_r3.showRemarksTooltip === row_r9["id"]);
  }
}
function DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_11_div_1_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 221);
    \u0275\u0275listener("click", function DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_11_div_1_button_6_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r36);
      const subtask_r35 = \u0275\u0275nextContext().$implicit;
      const row_r9 = \u0275\u0275nextContext(5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.onToggleSubtaskExpansion(row_r9, subtask_r35);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(1, "i", 137);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subtask_r35 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("expanded", subtask_r35.isExpanded);
    \u0275\u0275property("title", \u0275\u0275interpolate1("", subtask_r35.isExpanded ? "Collapse" : "Expand", " nested subtasks"));
    \u0275\u0275advance();
    \u0275\u0275classProp("fa-chevron-down", subtask_r35.isExpanded)("fa-chevron-right", !subtask_r35.isExpanded);
  }
}
function DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_11_div_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 222);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subtask_r35 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(6);
    \u0275\u0275property("title", ctx_r3.getLevel2SubtaskTooltip(subtask_r35));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getLevel2SubtaskCount(subtask_r35), " ");
  }
}
function DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_11_div_1_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 177);
    \u0275\u0275listener("click", function DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_11_div_1_ng_container_12_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r37);
      const subtask_r35 = \u0275\u0275nextContext().$implicit;
      const row_r9 = \u0275\u0275nextContext(5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      !ctx_r3.isSubtaskCompleted(subtask_r35) && ctx_r3.onAddNestedSubtask(row_r9, subtask_r35);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(2, "i", 183);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 177);
    \u0275\u0275listener("click", function DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_11_div_1_ng_container_12_Template_button_click_3_listener($event) {
      \u0275\u0275restoreView(_r37);
      const subtask_r35 = \u0275\u0275nextContext().$implicit;
      const row_r9 = \u0275\u0275nextContext(5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      !ctx_r3.isSubtaskCompleted(subtask_r35) && ctx_r3.onEditSubtask(row_r9, subtask_r35);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(4, "i", 178);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 223);
    \u0275\u0275listener("click", function DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_11_div_1_ng_container_12_Template_button_click_5_listener($event) {
      \u0275\u0275restoreView(_r37);
      const subtask_r35 = \u0275\u0275nextContext().$implicit;
      const row_r9 = \u0275\u0275nextContext(5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.onViewSubtask(row_r9, subtask_r35);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(6, "i", 180);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 224);
    \u0275\u0275listener("click", function DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_11_div_1_ng_container_12_Template_button_click_7_listener($event) {
      \u0275\u0275restoreView(_r37);
      const subtask_r35 = \u0275\u0275nextContext().$implicit;
      const row_r9 = \u0275\u0275nextContext(5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.onDeleteSubtask(row_r9, subtask_r35);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(8, "i", 182);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const subtask_r35 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", ctx_r3.isSubtaskCompleted(subtask_r35));
    \u0275\u0275property("disabled", ctx_r3.isSubtaskCompleted(subtask_r35))("title", ctx_r3.getAddButtonTooltip(subtask_r35, true));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("disabled", ctx_r3.isSubtaskCompleted(subtask_r35));
    \u0275\u0275property("disabled", ctx_r3.isSubtaskCompleted(subtask_r35))("title", ctx_r3.getEditButtonTooltip(subtask_r35, true, 1));
  }
}
function DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_11_div_1_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 177);
    \u0275\u0275listener("click", function DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_11_div_1_ng_container_13_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r38);
      const subtask_r35 = \u0275\u0275nextContext().$implicit;
      const row_r9 = \u0275\u0275nextContext(5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      !ctx_r3.isSubtaskCompleted(subtask_r35) && ctx_r3.onEditSubtask(row_r9, subtask_r35);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(2, "i", 178);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 225);
    \u0275\u0275listener("click", function DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_11_div_1_ng_container_13_Template_button_click_3_listener($event) {
      \u0275\u0275restoreView(_r38);
      const subtask_r35 = \u0275\u0275nextContext().$implicit;
      const row_r9 = \u0275\u0275nextContext(5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.onViewSubtask(row_r9, subtask_r35);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(4, "i", 180);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 226);
    \u0275\u0275listener("click", function DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_11_div_1_ng_container_13_Template_button_click_5_listener($event) {
      \u0275\u0275restoreView(_r38);
      const subtask_r35 = \u0275\u0275nextContext().$implicit;
      const row_r9 = \u0275\u0275nextContext(5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.onDeleteSubtask(row_r9, subtask_r35);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(6, "i", 182);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const subtask_r35 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", ctx_r3.isSubtaskCompleted(subtask_r35));
    \u0275\u0275property("disabled", ctx_r3.isSubtaskCompleted(subtask_r35))("title", ctx_r3.getEditButtonTooltip(subtask_r35, true, 2));
  }
}
function DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_11_div_1_div_14_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 234);
    \u0275\u0275pipe(1, "titlecase");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "titlecase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subtask_r35 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r3 = \u0275\u0275nextContext(6);
    \u0275\u0275styleProp("background-color", ctx_r3.getStatusColor(subtask_r35.status));
    \u0275\u0275property("title", "Status: " + \u0275\u0275pipeBind1(1, 4, subtask_r35.status.name));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, subtask_r35.status.name), " ");
  }
}
function DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_11_div_1_div_14_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 235);
    \u0275\u0275pipe(1, "titlecase");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "titlecase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subtask_r35 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r3 = \u0275\u0275nextContext(6);
    \u0275\u0275styleProp("background-color", ctx_r3.getPriorityColor(subtask_r35.priority));
    \u0275\u0275property("title", "Priority: " + \u0275\u0275pipeBind1(1, 4, subtask_r35.priority.name));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, subtask_r35.priority.name), " ");
  }
}
function DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_11_div_1_div_14_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 236);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subtask_r35 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("title", \u0275\u0275interpolate1("Estimated Hours: ", subtask_r35.estimatedHours, "h"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", subtask_r35.estimatedHours, "h ");
  }
}
function DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_11_div_1_div_14_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 237);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subtask_r35 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r3 = \u0275\u0275nextContext(6);
    \u0275\u0275property("title", "Start Date: " + ctx_r3.formatSubtaskDate(subtask_r35.startDate));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" SD: ", ctx_r3.formatSubtaskDate(subtask_r35.startDate), " ");
  }
}
function DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_11_div_1_div_14_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 238);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subtask_r35 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r3 = \u0275\u0275nextContext(6);
    \u0275\u0275property("title", "End Date: " + ctx_r3.formatSubtaskDate(subtask_r35.endDate));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ED: ", ctx_r3.formatSubtaskDate(subtask_r35.endDate), " ");
  }
}
function DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_11_div_1_div_14_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 239)(1, "span", 240);
    \u0275\u0275text(2, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 241);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const subtask_r35 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("title", "Description: " + subtask_r35.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(subtask_r35.description);
  }
}
function DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_11_div_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 227);
    \u0275\u0275template(1, DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_11_div_1_div_14_span_1_Template, 4, 8, "span", 228)(2, DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_11_div_1_div_14_span_2_Template, 4, 8, "span", 229)(3, DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_11_div_1_div_14_span_3_Template, 2, 3, "span", 230)(4, DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_11_div_1_div_14_span_4_Template, 2, 2, "span", 231)(5, DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_11_div_1_div_14_span_5_Template, 2, 2, "span", 232)(6, DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_11_div_1_div_14_div_6_Template, 5, 2, "div", 233);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subtask_r35 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", subtask_r35.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", subtask_r35.priority);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", subtask_r35.estimatedHours != null && subtask_r35.estimatedHours > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isPeriodicTasks && subtask_r35.startDate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isPeriodicTasks && subtask_r35.endDate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", subtask_r35.description && subtask_r35.description.trim());
  }
}
function DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 209)(1, "div", 210)(2, "input", 211);
    \u0275\u0275listener("change", function DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_11_div_1_Template_input_change_2_listener($event) {
      const subtask_r35 = \u0275\u0275restoreView(_r34).$implicit;
      const row_r9 = \u0275\u0275nextContext(5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onSubtaskCheckboxChange(row_r9.id, subtask_r35, $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 212);
    \u0275\u0275listener("click", function DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_11_div_1_Template_div_click_3_listener() {
      const subtask_r35 = \u0275\u0275restoreView(_r34).$implicit;
      const row_r9 = \u0275\u0275nextContext(5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onSubtaskClick(row_r9.id, subtask_r35));
    });
    \u0275\u0275elementStart(4, "div", 213)(5, "div", 214);
    \u0275\u0275template(6, DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_11_div_1_button_6_Template, 2, 8, "button", 215);
    \u0275\u0275elementStart(7, "span", 216);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 217);
    \u0275\u0275template(10, DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_11_div_1_span_10_Template, 2, 2, "span", 218);
    \u0275\u0275elementStart(11, "div", 219);
    \u0275\u0275listener("click", function DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_11_div_1_Template_div_click_11_listener($event) {
      \u0275\u0275restoreView(_r34);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275template(12, DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_11_div_1_ng_container_12_Template, 9, 8, "ng-container", 48)(13, DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_11_div_1_ng_container_13_Template, 7, 4, "ng-container", 48);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(14, DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_11_div_1_div_14_Template, 7, 6, "div", 220);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const subtask_r35 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("disabled", ctx_r3.isSubtaskDisabled(subtask_r35));
    \u0275\u0275property("checked", subtask_r35.completed || false)("disabled", ctx_r3.isSubtaskDisabled(subtask_r35));
    \u0275\u0275advance();
    \u0275\u0275classProp("level-1", subtask_r35.level === 1)("level-2", subtask_r35.level === 2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", subtask_r35.level === 1 && ctx_r3.hasNestedSubtasks(subtask_r35));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", subtask_r35.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", subtask_r35.level === 1 && ctx_r3.hasNestedSubtasks(subtask_r35));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", subtask_r35.level === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", subtask_r35.level === 2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", subtask_r35.status || subtask_r35.priority || subtask_r35.estimatedHours || subtask_r35.description && subtask_r35.description.trim() || ctx_r3.isPeriodicTasks && (subtask_r35.startDate || subtask_r35.endDate));
  }
}
function DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 207);
    \u0275\u0275template(1, DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_11_div_1_Template, 15, 14, "div", 208);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.getAllSubtasks(ctx_r3.getCellValue(row_r9, "subtasks")));
  }
}
function DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 157)(2, "div", 158);
    \u0275\u0275template(3, DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_button_3_Template, 2, 8, "button", 159);
    \u0275\u0275elementStart(4, "div", 160);
    \u0275\u0275listener("click", function DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_Template_div_click_4_listener() {
      \u0275\u0275restoreView(_r26);
      const column_r11 = \u0275\u0275nextContext(2).$implicit;
      const row_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(column_r11.key === "title" ? ctx_r3.onTaskClick(row_r9) : null);
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_span_6_Template, 2, 2, "span", 161)(7, DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_button_7_Template, 9, 2, "button", 162)(8, DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_8_Template, 8, 5, "div", 163);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_9_Template, 5, 3, "div", 164)(10, DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_10_Template, 4, 3, "div", 165);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_div_11_Template, 2, 1, "div", 166);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const column_r11 = \u0275\u0275nextContext(2).$implicit;
    const row_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", column_r11.key === "title" && ctx_r3.getCellValue(row_r9, "subtasks") && ctx_r3.getCellValue(row_r9, "subtasks").length > 0);
    \u0275\u0275advance();
    \u0275\u0275classProp("clickable", column_r11.key === "title");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getCellValue(row_r9, column_r11.key), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", column_r11.key === "title" && ctx_r3.getCellValue(row_r9, "subtasks") && ctx_r3.getCellValue(row_r9, "subtasks").length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", column_r11.key === "title" && !ctx_r3.isPeriodicTasks && row_r9["periodicTask"] && row_r9["periodicTask"].id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", column_r11.key === "title");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", column_r11.key === "title" && !row_r9["level"] && ctx_r3.getCellValue(row_r9, "progress") != null && ctx_r3.getCellValue(row_r9, "subtasks") && ctx_r3.getCellValue(row_r9, "subtasks").length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", column_r11.key === "title" && !row_r9["level"] && (ctx_r3.hasRemarks(row_r9) || ctx_r3.hasDescription(row_r9)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", column_r11.key === "title" && ctx_r3.getCellValue(row_r9, "subtasks") && ctx_r3.getCellValue(row_r9, "subtasks").length > 0 && row_r9["isExpanded"]);
  }
}
function DataTableComponent_tr_12_td_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 149);
    \u0275\u0275template(1, DataTableComponent_tr_12_td_2_ng_template_3_span_1_Template, 2, 0, "span", 150)(2, DataTableComponent_tr_12_td_2_ng_template_3_span_2_Template, 2, 3, "span", 151)(3, DataTableComponent_tr_12_td_2_ng_template_3_span_3_Template, 2, 0, "span", 150)(4, DataTableComponent_tr_12_td_2_ng_template_3_span_4_Template, 2, 3, "span", 151)(5, DataTableComponent_tr_12_td_2_ng_template_3_span_5_Template, 2, 0, "span", 150)(6, DataTableComponent_tr_12_td_2_ng_template_3_span_6_Template, 2, 3, "span", 151)(7, DataTableComponent_tr_12_td_2_ng_template_3_span_7_Template, 2, 0, "span", 48)(8, DataTableComponent_tr_12_td_2_ng_template_3_span_8_Template, 2, 1, "span", 48)(9, DataTableComponent_tr_12_td_2_ng_template_3_span_9_Template, 2, 0, "span", 150)(10, DataTableComponent_tr_12_td_2_ng_template_3_div_10_Template, 4, 4, "div", 152)(11, DataTableComponent_tr_12_td_2_ng_template_3_ng_container_11_Template, 12, 10, "ng-container", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r11 = \u0275\u0275nextContext().$implicit;
    const row_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("task-cell", column_r11.key === "title");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", column_r11.key === "priorityOrder" && (ctx_r3.getCellValue(row_r9, column_r11.key) == null || ctx_r3.getCellValue(row_r9, column_r11.key) === "" || ctx_r3.getCellValue(row_r9, column_r11.key) === "null" || ctx_r3.getCellValue(row_r9, column_r11.key) === "nullh"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", column_r11.key === "priorityOrder" && ctx_r3.getCellValue(row_r9, column_r11.key) != null && ctx_r3.getCellValue(row_r9, column_r11.key) !== "" && ctx_r3.getCellValue(row_r9, column_r11.key) !== "null" && ctx_r3.getCellValue(row_r9, column_r11.key) !== "nullh");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", column_r11.key === "startTime" && (ctx_r3.getCellValue(row_r9, column_r11.key) == null || ctx_r3.getCellValue(row_r9, column_r11.key) === "" || ctx_r3.getCellValue(row_r9, column_r11.key) === "null" || ctx_r3.getCellValue(row_r9, column_r11.key) === "nullh" || ctx_r3.getCellValue(row_r9, "startTime") === "00:00" && ctx_r3.getCellValue(row_r9, "endTime") === "00:00"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", column_r11.key === "startTime" && ctx_r3.getCellValue(row_r9, column_r11.key) != null && ctx_r3.getCellValue(row_r9, column_r11.key) !== "" && ctx_r3.getCellValue(row_r9, column_r11.key) !== "null" && ctx_r3.getCellValue(row_r9, column_r11.key) !== "nullh" && !(ctx_r3.getCellValue(row_r9, "startTime") === "00:00" && ctx_r3.getCellValue(row_r9, "endTime") === "00:00"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", column_r11.key === "endTime" && (ctx_r3.getCellValue(row_r9, column_r11.key) == null || ctx_r3.getCellValue(row_r9, column_r11.key) === "" || ctx_r3.getCellValue(row_r9, column_r11.key) === "null" || ctx_r3.getCellValue(row_r9, column_r11.key) === "nullh" || ctx_r3.getCellValue(row_r9, "startTime") === "00:00" && ctx_r3.getCellValue(row_r9, "endTime") === "00:00"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", column_r11.key === "endTime" && ctx_r3.getCellValue(row_r9, column_r11.key) != null && ctx_r3.getCellValue(row_r9, column_r11.key) !== "" && ctx_r3.getCellValue(row_r9, column_r11.key) !== "null" && ctx_r3.getCellValue(row_r9, column_r11.key) !== "nullh" && !(ctx_r3.getCellValue(row_r9, "startTime") === "00:00" && ctx_r3.getCellValue(row_r9, "endTime") === "00:00"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.getCellValue(row_r9, column_r11.key) && column_r11.key !== "priorityOrder" && column_r11.key !== "startTime" && column_r11.key !== "endTime" && column_r11.key !== "hours");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.getCellValue(row_r9, column_r11.key) && column_r11.key === "id");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", column_r11.key === "hours" && (ctx_r3.getCellValue(row_r9, column_r11.key) == null || ctx_r3.getCellValue(row_r9, column_r11.key) === "" || ctx_r3.getCellValue(row_r9, column_r11.key) === "null" || ctx_r3.getCellValue(row_r9, column_r11.key) === "nullh"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", column_r11.key === "hours" && ctx_r3.getCellValue(row_r9, column_r11.key) != null && ctx_r3.getCellValue(row_r9, column_r11.key) !== "" && ctx_r3.getCellValue(row_r9, column_r11.key) !== "null" && ctx_r3.getCellValue(row_r9, column_r11.key) !== "nullh");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.getCellValue(row_r9, column_r11.key) && column_r11.key !== "id" && column_r11.key !== "priorityOrder" && column_r11.key !== "startTime" && column_r11.key !== "endTime" && column_r11.key !== "hours");
  }
}
function DataTableComponent_tr_12_td_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 60)(1, "div", 61);
    \u0275\u0275template(2, DataTableComponent_tr_12_td_2_ng_container_2_Template, 14, 12, "ng-container", 62)(3, DataTableComponent_tr_12_td_2_ng_template_3_Template, 12, 13, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const column_r11 = ctx.$implicit;
    const defaultCell_r39 = \u0275\u0275reference(4);
    \u0275\u0275styleProp("width", column_r11.width)("min-width", column_r11.minWidth)("max-width", column_r11.maxWidth)("text-align", column_r11.align || "left");
    \u0275\u0275classProp("sticky", column_r11.sticky);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", column_r11.type && column_r11.type !== "text")("ngIfElse", defaultCell_r39);
  }
}
function DataTableComponent_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 49);
    \u0275\u0275template(1, DataTableComponent_tr_12_td_1_Template, 6, 4, "td", 50)(2, DataTableComponent_tr_12_td_2_Template, 5, 12, "td", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = ctx.$implicit;
    const i_r40 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ctx_r3.isRowSelected(row_r9))("completed", !row_r9["level"] && row_r9["completed"])("even", i_r40 % 2 === 0)("odd", i_r40 % 2 === 1);
    \u0275\u0275attribute("data-task-id", !row_r9["level"] ? row_r9["id"] : null)("data-subtask-id", row_r9["level"] ? row_r9["id"] : null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.config.selectable);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.getVisibleColumns())("ngForTrackBy", ctx_r3.trackByColumn);
  }
}
function DataTableComponent_div_17_option_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 245);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const size_r42 = ctx.$implicit;
    \u0275\u0275property("value", size_r42);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", size_r42, " ");
  }
}
function DataTableComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 242)(1, "label");
    \u0275\u0275text(2, "Show:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 243);
    \u0275\u0275listener("ngModelChange", function DataTableComponent_div_17_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r41);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onPageSizeChange($event));
    });
    \u0275\u0275template(4, DataTableComponent_div_17_option_4_Template, 2, 2, "option", 244);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "per page");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r3.pageSize);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.config.pageSizeOptions);
  }
}
function DataTableComponent_div_18_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 250);
    \u0275\u0275listener("click", function DataTableComponent_div_18_button_4_Template_button_click_0_listener() {
      const page_r45 = \u0275\u0275restoreView(_r44).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onPageChange(page_r45));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r45 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", page_r45 === ctx_r3.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r45, " ");
  }
}
function DataTableComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 246)(1, "button", 247);
    \u0275\u0275listener("click", function DataTableComponent_div_18_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r43);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onPageChange(ctx_r3.currentPage - 1));
    });
    \u0275\u0275text(2, " \u2190 Previous ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 248);
    \u0275\u0275template(4, DataTableComponent_div_18_button_4_Template, 2, 3, "button", 249);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 247);
    \u0275\u0275listener("click", function DataTableComponent_div_18_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r43);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onPageChange(ctx_r3.currentPage + 1));
    });
    \u0275\u0275text(6, " Next \u2192 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", ctx_r3.currentPage === 1);
    \u0275\u0275property("disabled", ctx_r3.currentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r3.getPageNumbers());
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", ctx_r3.currentPage === ctx_r3.totalPages);
    \u0275\u0275property("disabled", ctx_r3.currentPage === ctx_r3.totalPages);
  }
}
var DataTableComponent = class _DataTableComponent {
  cdr;
  columns = [];
  data = [];
  config = {};
  actions = [];
  loading = false;
  emptyMessage = "No data available";
  searchPlaceholder = "Search...";
  isPeriodicTasks = false;
  set externalSearch(value) {
    if (value !== void 0 && value !== null) {
      this.searchQuery = value || "";
      this.onSearch();
    }
  }
  rowClick = new EventEmitter();
  rowSelect = new EventEmitter();
  actionClick = new EventEmitter();
  sortChange = new EventEmitter();
  filterChange = new EventEmitter();
  pageChange = new EventEmitter();
  booleanToggle = new EventEmitter();
  tableRef;
  headerRef;
  // Table state
  selectedRows = /* @__PURE__ */ new Set();
  sortColumn = "";
  sortDirection = "asc";
  searchQuery = "";
  filters = {};
  passwordVisibility = /* @__PURE__ */ new Map();
  // Track password visibility by rowId_columnKey
  // Pagination
  currentPage = 1;
  pageSize = 10;
  totalPages = 0;
  // Filtered and sorted data
  filteredData = [];
  displayedData = [];
  // Column resizing
  isResizing = false;
  resizingColumn = "";
  startX = 0;
  startWidth = 0;
  // Virtual scrolling
  scrollTop = 0;
  itemHeight = 50;
  visibleStart = 0;
  visibleEnd = 0;
  // Remarks tooltip state
  showRemarksTooltip = null;
  // Default configuration
  defaultConfig = {
    selectable: true,
    multiSelect: true,
    sortable: true,
    filterable: true,
    resizable: true,
    pagination: true,
    pageSize: 10,
    pageSizeOptions: [5, 10, 25, 50, 100],
    exportable: true,
    searchable: true,
    virtualScrolling: false,
    stickyHeader: true,
    stickyColumns: 0
  };
  constructor(cdr) {
    this.cdr = cdr;
  }
  ngOnInit() {
    this.config = __spreadValues(__spreadValues({}, this.defaultConfig), this.config);
    this.pageSize = Number(this.config.pageSize) || 10;
    this.processData();
  }
  ngOnChanges(changes) {
    if (changes["config"]) {
      this.config = __spreadValues(__spreadValues({}, this.defaultConfig), this.config);
      this.pageSize = Number(this.config.pageSize) || 10;
      this.currentPage = 1;
    }
    if (changes["data"] || changes["columns"] || changes["config"]) {
      this.processData();
    }
  }
  ngAfterViewInit() {
    this.setupVirtualScrolling();
  }
  processData() {
    this.filteredData = [...this.data];
    this.applyFilters();
    this.applySorting();
    const newTotalPages = Math.ceil(this.filteredData.length / this.pageSize);
    if (this.currentPage > newTotalPages && newTotalPages > 0) {
      this.currentPage = 1;
    }
    this.updatePagination();
  }
  applyFilters() {
    if (!this.searchQuery && Object.keys(this.filters).length === 0) {
      this.filteredData = [...this.data];
      return;
    }
    this.filteredData = this.data.filter((row) => {
      if (this.searchQuery) {
        const searchLower = this.searchQuery.toLowerCase();
        const matchesSearch = this.searchInRow(row, searchLower);
        if (!matchesSearch)
          return false;
      }
      for (const [columnKey, filterValue] of Object.entries(this.filters)) {
        if (filterValue !== null && filterValue !== void 0 && filterValue !== "") {
          const cellValue = this.getCellValue(row, columnKey);
          if (!this.matchesFilter(cellValue, filterValue)) {
            return false;
          }
        }
      }
      return true;
    });
  }
  searchInRow(row, searchLower) {
    return this.searchInValue(row, searchLower);
  }
  searchInValue(value, searchLower) {
    if (value === null || value === void 0) {
      return false;
    }
    if (Array.isArray(value)) {
      for (const item of value) {
        if (this.searchInValue(item, searchLower)) {
          return true;
        }
      }
      return false;
    }
    if (typeof value === "object" && value !== null) {
      if (value instanceof Date) {
        return value.toString().toLowerCase().includes(searchLower);
      }
      if (value instanceof RegExp) {
        return value.toString().toLowerCase().includes(searchLower);
      }
      for (const key in value) {
        if (value.hasOwnProperty(key)) {
          if (key === "__typename" || key === "$$typeof" || key === "$$observable") {
            continue;
          }
          const objValue = value[key];
          if (this.searchInValue(objValue, searchLower)) {
            return true;
          }
        }
      }
      return false;
    }
    try {
      const stringValue = String(value).toLowerCase();
      if (stringValue.includes(searchLower)) {
        return true;
      }
    } catch (e) {
      return false;
    }
    return false;
  }
  applySorting() {
    if (!this.sortColumn)
      return;
    const column = this.columns.find((col) => col.key === this.sortColumn);
    const isNumeric = column?.type === "number" || this.sortColumn === "id" || column?.key === "id";
    const isHoursColumn = this.sortColumn === "hours";
    this.filteredData.sort((a, b) => {
      let aValue = this.getCellValue(a, this.sortColumn);
      let bValue = this.getCellValue(b, this.sortColumn);
      if (aValue == null && bValue == null)
        return 0;
      if (aValue == null)
        return 1;
      if (bValue == null)
        return -1;
      let comparison = 0;
      if (isNumeric || isHoursColumn) {
        let aNum;
        let bNum;
        if (isHoursColumn) {
          const aStr = String(aValue).replace(/[^0-9.]/g, "");
          const bStr = String(bValue).replace(/[^0-9.]/g, "");
          aNum = parseFloat(aStr) || 0;
          bNum = parseFloat(bStr) || 0;
        } else {
          aNum = typeof aValue === "string" ? parseFloat(aValue) || 0 : Number(aValue) || 0;
          bNum = typeof bValue === "string" ? parseFloat(bValue) || 0 : Number(bValue) || 0;
        }
        if (aNum < bNum)
          comparison = -1;
        else if (aNum > bNum)
          comparison = 1;
      } else {
        const aStr = String(aValue).toLowerCase();
        const bStr = String(bValue).toLowerCase();
        if (aStr < bStr)
          comparison = -1;
        else if (aStr > bStr)
          comparison = 1;
      }
      return this.sortDirection === "desc" ? -comparison : comparison;
    });
  }
  updatePagination() {
    if (!this.config.pagination) {
      this.displayedData = this.filteredData;
      return;
    }
    this.totalPages = Math.ceil(this.filteredData.length / this.pageSize);
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedData = this.filteredData.slice(startIndex, endIndex);
  }
  getCellValue(row, key) {
    const value = row[key];
    if (key === "category" && value && typeof value === "object" && value.name) {
      return value.name;
    }
    if (key === "status" && value && typeof value === "object" && value.name) {
      return value.name;
    }
    if ((key === "priority" || key === "priorityLevel") && value && typeof value === "object" && value.name) {
      return value.name;
    }
    return value;
  }
  matchesFilter(cellValue, filterValue) {
    if (typeof cellValue === "string" && typeof filterValue === "string") {
      return cellValue.toLowerCase().includes(filterValue.toLowerCase());
    }
    return cellValue === filterValue;
  }
  onSort(column) {
    if (!column.sortable)
      return;
    if (this.sortColumn === column.key) {
      this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc";
    } else {
      this.sortColumn = column.key;
      this.sortDirection = "asc";
    }
    this.applySorting();
    this.updatePagination();
    this.sortChange.emit({ column: this.sortColumn, direction: this.sortDirection });
  }
  onSearch() {
    this.currentPage = 1;
    this.processData();
  }
  onFilter(column, value) {
    this.filters[column] = value;
    this.currentPage = 1;
    this.processData();
    this.filterChange.emit({ column, value });
  }
  onRowClick(row) {
    this.rowClick.emit(row);
  }
  onRowSelect(row, event) {
    event.stopPropagation();
    if (this.isMainTaskDisabled(row)) {
      return;
    }
    if (this.config.multiSelect) {
      if (this.selectedRows.has(row["id"])) {
        this.selectedRows.delete(row["id"]);
      } else {
        this.selectedRows.add(row["id"]);
      }
    } else {
      this.selectedRows.clear();
      this.selectedRows.add(row["id"]);
    }
    const selectedData = this.data.filter((item) => this.selectedRows.has(item["id"]));
    this.rowSelect.emit(selectedData);
  }
  onBooleanToggle(columnKey, row, event) {
    event.stopPropagation();
    const currentValue = this.getCellValue(row, columnKey);
    const newValue = !currentValue;
    this.booleanToggle.emit({ column: columnKey, row, value: newValue });
  }
  onActionClick(action, row, event) {
    event.stopPropagation();
    this.actionClick.emit({ action: action.action, row });
  }
  onPageChange(page) {
    this.currentPage = page;
    this.filteredData = [...this.data];
    this.applyFilters();
    this.applySorting();
    const newTotalPages = Math.ceil(this.filteredData.length / this.pageSize);
    if (this.currentPage > newTotalPages && newTotalPages > 0) {
      this.currentPage = 1;
    }
    this.updatePagination();
    this.pageChange.emit({ page: this.currentPage, pageSize: this.pageSize });
  }
  onPageSizeChange(pageSize) {
    const newPageSize = typeof pageSize === "string" ? parseInt(pageSize, 10) : pageSize;
    this.pageSize = newPageSize;
    this.currentPage = 1;
    this.updatePagination();
    this.pageChange.emit({ page: this.currentPage, pageSize: newPageSize });
  }
  onPageSizeChangeEvent(event) {
    const target = event.target;
    const pageSize = target ? +target.value : 10;
    this.onPageSizeChange(pageSize);
  }
  selectAll() {
    if (this.selectedRows.size === this.displayedData.length) {
      this.selectedRows.clear();
    } else {
      this.displayedData.forEach((row) => this.selectedRows.add(row["id"]));
    }
    const selectedData = this.data.filter((item) => this.selectedRows.has(item["id"]));
    this.rowSelect.emit(selectedData);
  }
  isAllSelected() {
    return this.displayedData.length > 0 && this.selectedRows.size === this.displayedData.length;
  }
  isIndeterminate() {
    return this.selectedRows.size > 0 && this.selectedRows.size < this.displayedData.length;
  }
  exportData(format = "csv") {
    const dataToExport = this.selectedRows.size > 0 ? this.data.filter((item) => this.selectedRows.has(item["id"])) : this.filteredData;
    switch (format) {
      case "csv":
        this.exportToCSV(dataToExport);
        break;
      case "json":
        this.exportToJSON(dataToExport);
        break;
      case "excel":
        this.exportToExcel(dataToExport);
        break;
    }
  }
  exportToCSV(data) {
    const headers = this.columns.map((col) => col.title).join(",");
    const rows = data.map((row) => this.columns.map((col) => `"${this.getCellValue(row, col.key) || ""}"`).join(","));
    const csvContent = [headers, ...rows].join("\n");
    this.downloadFile(csvContent, "data.csv", "text/csv");
  }
  exportToJSON(data) {
    const jsonContent = JSON.stringify(data, null, 2);
    this.downloadFile(jsonContent, "data.json", "application/json");
  }
  exportToExcel(data) {
    console.log("Excel export not implemented yet");
  }
  downloadFile(content, filename, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  }
  // Column resizing
  onMouseDown(event, column) {
    if (!column.resizable)
      return;
    event.preventDefault();
    this.isResizing = true;
    this.resizingColumn = column.key;
    this.startX = event.clientX;
    this.startWidth = this.getColumnWidth(column.key);
    document.addEventListener("mousemove", this.onMouseMove.bind(this));
    document.addEventListener("mouseup", this.onMouseUp.bind(this));
  }
  onMouseMove(event) {
    if (!this.isResizing)
      return;
    const deltaX = event.clientX - this.startX;
    const newWidth = Math.max(50, this.startWidth + deltaX);
    this.setColumnWidth(this.resizingColumn, newWidth);
  }
  onMouseUp() {
    this.isResizing = false;
    this.resizingColumn = "";
    document.removeEventListener("mousemove", this.onMouseMove.bind(this));
    document.removeEventListener("mouseup", this.onMouseUp.bind(this));
  }
  getColumnWidth(key) {
    const column = this.columns.find((col) => col.key === key);
    return column?.width ? parseInt(column.width) : 150;
  }
  setColumnWidth(key, width) {
    const column = this.columns.find((col) => col.key === key);
    if (column) {
      column.width = `${width}px`;
    }
  }
  // Virtual scrolling
  setupVirtualScrolling() {
    if (!this.config.virtualScrolling)
      return;
  }
  // Utility methods
  getVisibleColumns() {
    return this.columns.filter((col) => !col.hidden);
  }
  getStickyColumns() {
    return this.getVisibleColumns().slice(0, this.config.stickyColumns || 0);
  }
  getScrollableColumns() {
    return this.getVisibleColumns().slice(this.config.stickyColumns || 0);
  }
  getRowId(row) {
    return row["id"] || row["_id"] || JSON.stringify(row);
  }
  isRowSelected(row) {
    return this.selectedRows.has(this.getRowId(row));
  }
  getSortIcon(column) {
    if (this.sortColumn !== column.key)
      return "\u21C5";
    return this.sortDirection === "asc" ? "\u25B2" : "\u25BC";
  }
  getPageNumbers() {
    const pages = [];
    const maxVisible = 5;
    const start = Math.max(1, this.currentPage - Math.floor(maxVisible / 2));
    const end = Math.min(this.totalPages, start + maxVisible - 1);
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }
  clearFilters() {
    this.filters = {};
    this.searchQuery = "";
    this.processData();
  }
  getFilteredCount() {
    return this.filteredData.length;
  }
  getTotalCount() {
    return this.data.length;
  }
  // TrackBy functions for performance
  trackByColumn = (index, column) => {
    return column.key;
  };
  trackByRow = (index, row) => {
    return this.getRowId(row);
  };
  // Helper methods for cell rendering
  getProgressPercentage(value) {
    return Math.min(Math.max(value, 0), 100);
  }
  getFilterKeys() {
    return Object.keys(this.filters);
  }
  getPriorityColor(priority) {
    if (priority && typeof priority === "object" && priority.color) {
      return priority.color;
    }
    const colors = {
      "low": "#059669",
      "medium": "#F97316",
      "high": "#DC2626",
      "urgent": "#DC2626"
    };
    return colors[priority] || "#6B7280";
  }
  getStatusColor(status) {
    if (status && typeof status === "object" && status.color) {
      return status.color;
    }
    const colors = {
      "todo": "#64748B",
      "in-progress": "#2563EB",
      "review": "#7C3AED",
      "done": "#059669"
    };
    return colors[status] || "#6B7280";
  }
  getCategoryIcon(category) {
    if (category && typeof category === "object" && category.icon) {
      return category.icon;
    }
    const categoryIcons = {
      "Development": "\u{1F680}",
      "Design": "\u2728",
      "Marketing": "\u{1F4CA}",
      "Operations": "\u26A1",
      "Research": "\u{1F50D}"
    };
    return categoryIcons[category] || "\u{1F4CB}";
  }
  getUrlsArray(urlsData) {
    if (!urlsData)
      return [];
    if (Array.isArray(urlsData)) {
      return urlsData.filter((item) => item && item.label && item.url);
    }
    if (typeof urlsData === "string") {
      return urlsData.split(",").map((url) => url.trim()).filter((url) => url).map((url) => ({
        label: url,
        url
      }));
    }
    return [];
  }
  getCredentialTooltip(credentials) {
    if (!credentials || credentials.length === 0)
      return "";
    return credentials.map((cred) => `${cred.credential_id || cred.id || ""} - ${cred.credential_name || ""}`).filter((text) => text.trim()).join("\n");
  }
  getCredentialsArray(credentialsData) {
    if (!credentialsData)
      return [];
    if (Array.isArray(credentialsData)) {
      return credentialsData.filter((cred) => cred && (cred.id || cred.credential_id));
    }
    return [];
  }
  maskPassword(password) {
    if (!password)
      return "-";
    return "\u2022".repeat(Math.min(password.length, 10));
  }
  togglePasswordVisibility(row, columnKey) {
    const rowId = this.getRowId(row);
    const mapKey = `${rowId}_${columnKey}`;
    const currentState = this.passwordVisibility.get(mapKey) || false;
    const newState = !currentState;
    this.passwordVisibility.set(mapKey, newState);
    row["showPassword_" + columnKey] = newState;
    this.cdr.detectChanges();
  }
  isPasswordVisible(row, columnKey) {
    const rowId = this.getRowId(row);
    const mapKey = `${rowId}_${columnKey}`;
    return this.passwordVisibility.get(mapKey) || false;
  }
  formatAdditionalFields(jsonString) {
    if (!jsonString || jsonString === "{}")
      return "";
    try {
      const obj = JSON.parse(jsonString);
      return Object.entries(obj).map(([key, value]) => `${key}: ${value}`).join(", ");
    } catch {
      return jsonString;
    }
  }
  formatAdditionalFieldsPreview(jsonString) {
    if (!jsonString || jsonString === "{}")
      return "";
    try {
      const obj = JSON.parse(jsonString);
      const entries = Object.entries(obj);
      if (entries.length === 0)
        return "-";
      const preview = entries.slice(0, 2).map(([key, value]) => `${key}: ${value}`).join(", ");
      return entries.length > 2 ? preview + "..." : preview;
    } catch {
      return jsonString.length > 50 ? jsonString.substring(0, 50) + "..." : jsonString;
    }
  }
  getRemarksArray(remarksData) {
    if (!remarksData)
      return [];
    if (Array.isArray(remarksData))
      return remarksData;
    if (typeof remarksData === "string") {
      return remarksData.split(".").map((r) => r.trim()).filter((r) => r).map((r) => r + ".");
    }
    return [];
  }
  // Subtask management methods
  updateSubtaskStatus(taskId, subtaskId, status) {
    this.actionClick.emit({
      action: "update-subtask-status",
      row: { id: taskId, subtaskId, status }
    });
  }
  deleteSubtask(taskId, subtaskId) {
    this.actionClick.emit({
      action: "delete-subtask",
      row: { id: taskId, subtaskId }
    });
  }
  getSubtaskStatusColor(status) {
    const colors = {
      "todo": "#6B7280",
      "in-progress": "#3B82F6",
      "done": "#10B981"
    };
    return colors[status] || "#6B7280";
  }
  // Click handlers
  onTaskClick(row) {
    this.actionClick.emit({
      action: "view-task",
      row
    });
  }
  onSubtaskClick(taskId, subtask) {
    this.actionClick.emit({
      action: "view-subtask",
      row: { id: taskId, subtask }
    });
  }
  updateSubtaskStatusFromTable(row, status) {
    this.actionClick.emit({
      action: "update-subtask-status",
      row: { id: row.id, subtaskId: row.id, status }
    });
  }
  // Helper method to sort subtasks by priorityOrder (ascending, nulls last)
  sortSubtasksByPriorityOrder(subtasks) {
    return [...subtasks].sort((a, b) => {
      const aOrder = a.priorityOrder ?? Number.MAX_SAFE_INTEGER;
      const bOrder = b.priorityOrder ?? Number.MAX_SAFE_INTEGER;
      return aOrder - bOrder;
    });
  }
  // Helper method to flatten all subtasks (including nested ones) with level information
  // Respects the expansion state of each subtask
  getAllSubtasks(subtasks) {
    const flattenedSubtasks = [];
    const addSubtasksWithLevel = (subtasks2, level = 1) => {
      const sortedSubtasks = this.sortSubtasksByPriorityOrder(subtasks2);
      sortedSubtasks.forEach((subtask) => {
        flattenedSubtasks.push(__spreadProps(__spreadValues({}, subtask), {
          level
        }));
        if (subtask.subtasks && subtask.subtasks.length > 0 && subtask.isExpanded) {
          subtask.subtasks = this.sortSubtasksByPriorityOrder(subtask.subtasks);
          addSubtasksWithLevel(subtask.subtasks, level + 1);
        }
      });
    };
    addSubtasksWithLevel(subtasks);
    return flattenedSubtasks;
  }
  // New action methods for context-specific buttons
  onAddSubtask(task) {
    this.actionClick.emit({
      action: "add-subtask",
      row: task
    });
  }
  onEditTask(task) {
    this.actionClick.emit({
      action: "edit-task",
      row: task
    });
  }
  onViewTask(task) {
    this.actionClick.emit({
      action: "view-task",
      row: task
    });
  }
  onDeleteTask(task) {
    this.actionClick.emit({
      action: "delete-task",
      row: task
    });
  }
  // Navigate to periodic task
  onNavigateToPeriodicTask(periodicTaskId) {
    this.actionClick.emit({
      action: "navigate-to-periodic-task",
      row: { id: "", periodicTaskId }
    });
  }
  onAddNestedSubtask(task, subtask) {
    this.actionClick.emit({
      action: "add-level2-subtask",
      row: task,
      subtask
    });
  }
  onEditSubtask(task, subtask) {
    this.actionClick.emit({
      action: "edit-subtask",
      row: task,
      subtask
    });
  }
  onViewSubtask(task, subtask) {
    this.actionClick.emit({
      action: "view-subtask",
      row: task,
      subtask
    });
  }
  onDeleteSubtask(task, subtask) {
    this.actionClick.emit({
      action: "delete-subtask",
      row: task,
      subtask
    });
  }
  // Expand/Collapse functionality
  onToggleTaskExpansion(task) {
    this.actionClick.emit({
      action: "toggle-task-expansion",
      row: task
    });
  }
  onToggleSubtaskExpansion(task, subtask) {
    this.actionClick.emit({
      action: "toggle-subtask-expansion",
      row: task,
      subtask
    });
  }
  // Helper method to check if a subtask has nested subtasks
  hasNestedSubtasks(subtask) {
    return subtask.subtasks && subtask.subtasks.length > 0;
  }
  // Helper method to get count of Level 1 subtasks for main task (format: completed/total)
  getLevel1SubtaskCount(subtasks) {
    if (!subtasks || subtasks.length === 0) {
      return "0/0";
    }
    const total = subtasks.length;
    const completed = subtasks.filter((subtask) => subtask.completed === true).length;
    return `${completed}/${total}`;
  }
  // Helper method to get tooltip message for Level 1 subtasks
  getLevel1SubtaskTooltip(subtasks) {
    if (!subtasks || subtasks.length === 0) {
      return "0 of 0 are completed";
    }
    const total = subtasks.length;
    const completed = subtasks.filter((subtask) => subtask.completed === true).length;
    return `${completed} of ${total} are completed`;
  }
  // Helper method to get count of Level 2 subtasks for Level 1 subtask (format: completed/total)
  getLevel2SubtaskCount(subtask) {
    if (!subtask.subtasks || subtask.subtasks.length === 0) {
      return "0/0";
    }
    const total = subtask.subtasks.length;
    const completed = subtask.subtasks.filter((nestedSubtask) => nestedSubtask.completed === true).length;
    return `${completed}/${total}`;
  }
  // Helper method to get tooltip message for Level 2 subtasks
  getLevel2SubtaskTooltip(subtask) {
    if (!subtask.subtasks || subtask.subtasks.length === 0) {
      return "0 of 0 are completed";
    }
    const total = subtask.subtasks.length;
    const completed = subtask.subtasks.filter((nestedSubtask) => nestedSubtask.completed === true).length;
    return `${completed} of ${total} are completed`;
  }
  // Check if a subtask checkbox should be disabled
  isSubtaskDisabled(subtask) {
    if (subtask.level === 1 && this.hasNestedSubtasks(subtask)) {
      const level2Subtasks = subtask.subtasks || [];
      const allLevel2Completed = level2Subtasks.every((level2Subtask) => level2Subtask.completed === true);
      return !allLevel2Completed;
    }
    return false;
  }
  // Check if a main task checkbox should be disabled
  isMainTaskDisabled(row) {
    const subtasks = this.getCellValue(row, "subtasks") || [];
    if (subtasks.length > 0) {
      const allLevel1Completed = subtasks.every((subtask) => subtask.completed === true);
      return !allLevel1Completed;
    }
    return false;
  }
  // Check if a task is completed
  isTaskCompleted(row) {
    return row["completed"] === true || row["completed"] === 1;
  }
  // Check if a subtask is completed
  isSubtaskCompleted(subtask) {
    return subtask?.completed === true || subtask?.completed === 1;
  }
  // Get tooltip for Add button when task is completed
  getAddButtonTooltip(row, isSubtask = false) {
    if (isSubtask) {
      return this.isSubtaskCompleted(row) ? "Mark incomplete to add child task" : "Add Level 2 Child Task";
    }
    return this.isTaskCompleted(row) ? "Mark incomplete to add child task" : "Add Level 1 Child Task";
  }
  // Get tooltip for Edit button when task is completed
  getEditButtonTooltip(row, isSubtask = false, level = 1) {
    if (isSubtask) {
      return this.isSubtaskCompleted(row) ? "Mark incomplete to edit task" : `Edit Level ${level} Child Task`;
    }
    return this.isTaskCompleted(row) ? "Mark incomplete to edit task" : "Edit Main Task";
  }
  // Toggle important status
  onToggleImportant(row) {
    this.actionClick.emit({
      action: "toggle-important",
      row
    });
  }
  // Handle main task checkbox change
  onMainTaskCheckboxChange(row, event) {
    event.stopPropagation();
    const isChecked = event.target.checked;
    this.actionClick.emit({
      action: "toggle-main-task-completed",
      row: __spreadProps(__spreadValues({}, row), { completed: isChecked })
    });
  }
  // Handle subtask checkbox change
  onSubtaskCheckboxChange(taskId, subtask, event) {
    event.stopPropagation();
    const isChecked = event.target.checked;
    this.actionClick.emit({
      action: "toggle-subtask-completed",
      row: { id: taskId, subtask: __spreadProps(__spreadValues({}, subtask), { completed: isChecked }) }
    });
  }
  // Remarks indicator methods
  hasRemarks(row) {
    const remarks = row["remarks"];
    if (!remarks)
      return false;
    if (Array.isArray(remarks)) {
      return remarks.length > 0 && remarks.some((r) => r && r.trim().length > 0);
    }
    if (typeof remarks === "string") {
      return remarks.trim().length > 0;
    }
    return false;
  }
  getRemarksCount(row) {
    const remarksArray = this.getRemarksArray(row["remarks"]);
    return remarksArray.length;
  }
  getRemarksTooltip(row) {
    const count = this.getRemarksCount(row);
    if (count === 0)
      return "No remarks";
    if (count === 1)
      return "1 remark - Click to view";
    return `${count} remarks - Click to view`;
  }
  onRemarksClick(row, event) {
    event.stopPropagation();
    if (this.showRemarksTooltip === row["id"]) {
      this.showRemarksTooltip = null;
    } else {
      this.showRemarksTooltip = row["id"];
    }
  }
  // Description methods
  hasDescription(row) {
    const description = row["description"];
    if (!description)
      return false;
    if (typeof description === "string") {
      return description.trim().length > 0;
    }
    return false;
  }
  getDescriptionText(row) {
    const description = row["description"];
    if (!description)
      return "";
    if (typeof description === "string") {
      return description.trim();
    }
    return String(description);
  }
  // Format date for subtasks
  formatSubtaskDate(date) {
    if (!date)
      return "ND";
    try {
      const dateObj = date instanceof Date ? date : new Date(date);
      if (isNaN(dateObj.getTime()))
        return "ND";
      return dateObj.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" });
    } catch (e) {
      return "ND";
    }
  }
  // Calculate number of days between start and end date
  calculateDaysBetween(startDate, endDate) {
    if (!startDate || !endDate)
      return 0;
    try {
      const start = startDate instanceof Date ? startDate : new Date(startDate);
      const end = endDate instanceof Date ? endDate : new Date(endDate);
      if (isNaN(start.getTime()) || isNaN(end.getTime()))
        return 0;
      const diffTime = end.getTime() - start.getTime();
      const diffDays = Math.ceil(diffTime / (1e3 * 60 * 60 * 24)) + 1;
      return diffDays > 0 ? diffDays : 0;
    } catch (e) {
      return 0;
    }
  }
  // Calculate hours per day for periodic tasks
  calculateHoursPerDay(estimatedHours, startDate, endDate) {
    if (!estimatedHours || estimatedHours <= 0)
      return null;
    if (!startDate || !endDate)
      return null;
    const days = this.calculateDaysBetween(startDate, endDate);
    if (days <= 0)
      return null;
    const hoursPerDay = estimatedHours / days;
    return Math.round(hoursPerDay * 100) / 100;
  }
  // Get formatted hours display for periodic tasks
  getHoursDisplay(row) {
    const hours = this.getCellValue(row, "hours");
    if (!hours)
      return "ND";
    const hoursStr = String(hours).replace(/[^0-9.]/g, "");
    const estimatedHours = parseFloat(hoursStr) || 0;
    if (!this.isPeriodicTasks || estimatedHours <= 0) {
      return String(hours);
    }
    const startDate = this.getCellValue(row, "startDate");
    const endDate = this.getCellValue(row, "endDate");
    const hoursPerDay = this.calculateHoursPerDay(estimatedHours, startDate, endDate);
    if (hoursPerDay == null) {
      return String(hours);
    }
    return String(hours);
  }
  // Get hours per day for periodic tasks
  getHoursPerDay(row) {
    if (!this.isPeriodicTasks)
      return null;
    const hours = this.getCellValue(row, "hours");
    if (!hours)
      return null;
    const hoursStr = String(hours).replace(/[^0-9.]/g, "");
    const estimatedHours = parseFloat(hoursStr) || 0;
    if (estimatedHours <= 0)
      return null;
    const startDate = this.getCellValue(row, "startDate");
    const endDate = this.getCellValue(row, "endDate");
    return this.calculateHoursPerDay(estimatedHours, startDate, endDate);
  }
  static \u0275fac = function DataTableComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DataTableComponent)(\u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DataTableComponent, selectors: [["app-data-table"]], viewQuery: function DataTableComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
      \u0275\u0275viewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.tableRef = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerRef = _t.first);
    }
  }, inputs: { columns: "columns", data: "data", config: "config", actions: "actions", loading: "loading", emptyMessage: "emptyMessage", searchPlaceholder: "searchPlaceholder", isPeriodicTasks: "isPeriodicTasks", externalSearch: "externalSearch" }, outputs: { rowClick: "rowClick", rowSelect: "rowSelect", actionClick: "actionClick", sortChange: "sortChange", filterChange: "filterChange", pageChange: "pageChange", booleanToggle: "booleanToggle" }, features: [\u0275\u0275NgOnChangesFeature], decls: 19, vars: 16, consts: [["tableRef", ""], ["headerRef", ""], ["defaultCell", ""], ["priorityND", ""], ["statusND", ""], ["noDate", ""], ["categoryND", ""], [1, "smart-table-container"], ["class", "table-header", 4, "ngIf"], ["class", "loading-overlay", 4, "ngIf"], [1, "table-wrapper"], [1, "smart-table"], [1, "table-header-row"], ["class", "selection-column", 4, "ngIf"], ["class", "table-header-cell", 3, "sortable", "sticky", "width", "min-width", "max-width", "text-align", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "table-body"], ["class", "empty-row", 4, "ngIf"], ["class", "table-row", 3, "selected", "completed", "even", "odd", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "pagination-wrapper"], [1, "pagination-info"], [1, "page-info"], ["class", "page-size-selector", 4, "ngIf"], ["class", "pagination-controls", 4, "ngIf"], [1, "table-header"], [1, "table-controls"], [1, "search-section"], ["class", "filter-badges", 4, "ngIf"], [1, "table-actions"], [1, "filter-badges"], ["class", "filter-badge", 4, "ngFor", "ngForOf"], [1, "clear-all-filters", 3, "click"], [1, "filter-badge"], [1, "remove-filter", 3, "click"], [1, "loading-overlay"], [1, "loading-spinner"], [1, "spinner"], [1, "selection-column"], [1, "header-content"], ["title", "Select", 1, "column-title"], [1, "table-header-cell", 3, "click"], [1, "column-title", 3, "title"], ["class", "sort-indicator", 3, "active", 4, "ngIf"], ["class", "resize-handle", 3, "mousedown", 4, "ngIf"], [1, "sort-indicator"], [1, "resize-handle", 3, "mousedown"], [1, "empty-row"], [1, "empty-state"], [1, "empty-icon"], [4, "ngIf"], [1, "table-row"], ["class", "selection-cell", 4, "ngIf"], ["class", "table-cell", 3, "sticky", "width", "min-width", "max-width", "text-align", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "selection-cell"], [1, "selection-controls"], [1, "checkbox-wrapper"], ["type", "checkbox", "class", "row-checkbox", 3, "checked", "disabled", "change", 4, "ngIf"], [1, "checkbox-custom"], ["class", "star-icon", 3, "important", "title", "click", 4, "ngIf"], ["type", "checkbox", 1, "row-checkbox", 3, "change", "checked", "disabled"], [1, "star-icon", 3, "click", "title"], [1, "table-cell"], [1, "cell-content"], [4, "ngIf", "ngIfElse"], [3, "ngSwitch"], ["class", "priority-badge", 3, "background-color", 4, "ngSwitchCase"], ["class", "status-badge", 3, "background-color", 4, "ngSwitchCase"], ["class", "progress-cell", 4, "ngSwitchCase"], ["class", "date-cell", 4, "ngSwitchCase"], ["class", "boolean-cell", 4, "ngSwitchCase"], [4, "ngSwitchCase"], ["class", "urls-cell", 4, "ngSwitchCase"], ["class", "remarks-cell", 4, "ngSwitchCase"], ["class", "password-cell", 4, "ngSwitchCase"], ["class", "json-cell", 4, "ngSwitchCase"], ["class", "credentials-cell", 4, "ngSwitchCase"], ["class", "default-cell", 4, "ngSwitchDefault"], [1, "priority-badge"], ["title", "Not defined", 1, "nd-value"], [1, "status-badge"], [1, "progress-cell"], ["class", "progress-bar", 4, "ngIf"], ["class", "progress-text", 4, "ngIf"], [1, "progress-bar"], [1, "progress-fill"], [1, "progress-text"], [1, "date-cell"], [1, "task-on-date"], ["class", "periodic-task-date-panel", 3, "title", 4, "ngIf"], [1, "periodic-task-date-panel", 3, "title"], [1, "periodic-date-row"], [1, "periodic-date-label"], [1, "periodic-date-value"], [1, "boolean-cell"], ["class", "toggle-switch-wrapper", 3, "title", 4, "ngIf"], ["class", "boolean-indicator", 3, "true", "false", 4, "ngIf"], [1, "toggle-switch-wrapper", 3, "title"], [1, "modern-toggle-switch", 3, "click"], ["type", "checkbox", "readonly", "", "tabindex", "-1", 3, "click", "checked"], [1, "toggle-slider"], [1, "toggle-indicator"], [1, "boolean-indicator"], ["class", "color-cell", 3, "title", 4, "ngIf"], ["class", "category-cell", 4, "ngIf"], ["class", "actions-cell-wrapper", 4, "ngIf"], [1, "color-cell", 3, "title"], [1, "color-swatch"], [1, "category-cell"], [1, "category-icon"], [1, "actions-cell-wrapper"], [1, "action-buttons"], [4, "ngFor", "ngForOf"], ["class", "action-btn modern-icon-btn", 3, "edit-action", "delete-action", "title", "click", 4, "ngIf"], [1, "action-btn", "modern-icon-btn", 3, "click", "title"], [3, "class", 4, "ngIf"], [1, "urls-cell"], ["class", "no-docs", 4, "ngIf"], ["class", "url-item", 4, "ngFor", "ngForOf"], [1, "url-item"], ["target", "_blank", 1, "url-link", 3, "href", "title"], [1, "url-label-truncated"], ["class", "credential-tag-note", 3, "title", "click", 4, "ngIf"], [1, "credential-tag-note", 3, "click", "title"], [1, "fas", "fa-lock"], [1, "credential-count-note"], [1, "no-docs"], [1, "remarks-cell"], ["class", "remarks-list", 4, "ngIf"], ["class", "no-remarks", 4, "ngIf"], [1, "remarks-list"], ["class", "remark-item", 4, "ngFor", "ngForOf"], [1, "remark-item"], [1, "no-remarks"], [1, "password-cell"], [1, "password-display"], ["class", "password-masked", 4, "ngIf"], ["class", "password-visible", 4, "ngIf"], [1, "password-toggle-btn", 3, "click", "title"], [1, "fas"], [1, "password-masked"], [1, "password-visible"], [1, "json-cell"], [1, "json-preview", 3, "title"], [1, "credentials-cell"], ["class", "public-access", 4, "ngIf"], [1, "credentials-list"], ["class", "credential-badge", 3, "title", 4, "ngFor", "ngForOf"], [1, "credential-badge", 3, "title"], [1, "public-access"], [1, "fas", "fa-globe"], [1, "default-cell"], ["class", "nd-value", "title", "Not defined", 4, "ngIf"], [3, "schedule-overlap", 4, "ngIf"], ["class", "hours-cell", 3, "schedule-overlap", 4, "ngIf"], [1, "hours-cell"], [1, "hours-main"], ["class", "hours-per-day-badge", 3, "title", 4, "ngIf"], [1, "hours-per-day-badge", 3, "title"], [1, "task-title-container"], [1, "task-title-row"], ["class", "expand-btn", 3, "expanded", "title", "click", 4, "ngIf"], [1, "task-title", 3, "click"], ["class", "task-count", 3, "title", 4, "ngIf"], ["class", "periodic-task-btn", 3, "title", "click", 4, "ngIf"], ["class", "task-actions", 3, "click", 4, "ngIf"], ["class", "task-progress-row", 4, "ngIf"], ["class", "task-meta-row", 4, "ngIf"], ["class", "subtasks-container", 4, "ngIf"], [1, "expand-btn", 3, "click", "title"], [1, "task-count", 3, "title"], [1, "periodic-task-btn", 3, "click", "title"], [1, "periodic-icon-wrapper"], [1, "periodic-icon"], [1, "periodic-content"], [1, "periodic-label"], [1, "periodic-id"], [1, "task-actions", 3, "click"], ["class", "action-btn", 3, "disabled", "title", "click", 4, "ngIf"], [1, "action-btn", 3, "click", "disabled", "title"], [1, "fas", "fa-edit"], ["title", "View Main Task", 1, "action-btn", 3, "click"], [1, "fas", "fa-eye"], ["title", "Delete Main Task", 1, "action-btn", 3, "click"], [1, "fas", "fa-trash"], [1, "fas", "fa-plus"], [1, "task-progress-row"], [1, "progress-bar-inline"], [1, "progress-fill-inline"], [1, "progress-text-inline"], [1, "task-meta-row"], ["class", "remarks-indicator", 3, "title", "click", 4, "ngIf"], ["class", "description-indicator", 3, "title", 4, "ngIf"], ["class", "remarks-tooltip", 3, "click", 4, "ngIf"], [1, "remarks-indicator", 3, "click", "title"], [1, "remarks-label"], ["class", "remarks-badge", 4, "ngIf"], [1, "remarks-badge"], [1, "description-indicator", 3, "title"], [1, "description-label"], [1, "description-text"], [1, "remarks-tooltip", 3, "click"], [1, "remarks-tooltip-header"], [1, "remarks-tooltip-title"], [1, "remarks-tooltip-close", 3, "click"], [1, "remarks-tooltip-content"], [1, "remarks-tooltip-list"], ["class", "remarks-tooltip-item", 4, "ngFor", "ngForOf"], [1, "remarks-tooltip-item"], [1, "subtasks-container"], ["class", "subtask-item", 4, "ngFor", "ngForOf"], [1, "subtask-item"], [1, "subtask-checkbox"], ["type", "checkbox", 1, "subtask-checkbox-input", 3, "change", "checked", "disabled"], [1, "subtask-content", 3, "click"], [1, "subtask-title-row"], [1, "subtask-left-group"], ["class", "expand-btn subtask-expand-btn", 3, "expanded", "title", "click", 4, "ngIf"], [1, "subtask-title"], [1, "subtask-right-group"], ["class", "subtask-count", 3, "title", 4, "ngIf"], [1, "subtask-actions", 3, "click"], ["class", "subtask-meta-row", 4, "ngIf"], [1, "expand-btn", "subtask-expand-btn", 3, "click", "title"], [1, "subtask-count", 3, "title"], ["title", "View Level 1 Child Task", 1, "action-btn", 3, "click"], ["title", "Delete Level 1 Child Task", 1, "action-btn", 3, "click"], ["title", "View Level 2 Child Task", 1, "action-btn", 3, "click"], ["title", "Delete Level 2 Child Task", 1, "action-btn", 3, "click"], [1, "subtask-meta-row"], ["class", "subtask-status-indicator", 3, "background-color", "title", 4, "ngIf"], ["class", "subtask-priority-indicator", 3, "background-color", "title", 4, "ngIf"], ["class", "subtask-hours-indicator", 3, "title", 4, "ngIf"], ["class", "subtask-date-indicator subtask-start-date", 3, "title", 4, "ngIf"], ["class", "subtask-date-indicator subtask-end-date", 3, "title", 4, "ngIf"], ["class", "subtask-description-indicator", 3, "title", 4, "ngIf"], [1, "subtask-status-indicator", 3, "title"], [1, "subtask-priority-indicator", 3, "title"], [1, "subtask-hours-indicator", 3, "title"], [1, "subtask-date-indicator", "subtask-start-date", 3, "title"], [1, "subtask-date-indicator", "subtask-end-date", 3, "title"], [1, "subtask-description-indicator", 3, "title"], [1, "subtask-description-label"], [1, "subtask-description-text"], [1, "page-size-selector"], [1, "page-size-select", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "pagination-controls"], [1, "pagination-btn", 3, "click", "disabled"], [1, "page-numbers"], ["class", "page-number", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "page-number", 3, "click"]], template: function DataTableComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 7);
      \u0275\u0275template(1, DataTableComponent_div_1_Template, 6, 1, "div", 8)(2, DataTableComponent_div_2_Template, 5, 0, "div", 9);
      \u0275\u0275elementStart(3, "div", 10)(4, "table", 11, 0)(6, "thead", 12)(7, "tr");
      \u0275\u0275template(8, DataTableComponent_th_8_Template, 3, 0, "th", 13)(9, DataTableComponent_th_9_Template, 6, 16, "th", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "tbody", 15);
      \u0275\u0275template(11, DataTableComponent_tr_11_Template, 8, 3, "tr", 16)(12, DataTableComponent_tr_12_Template, 3, 13, "tr", 17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(13, "div", 18)(14, "div", 19)(15, "span", 20);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd();
      \u0275\u0275template(17, DataTableComponent_div_17_Template, 7, 2, "div", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275template(18, DataTableComponent_div_18_Template, 7, 7, "div", 22);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getFilterKeys().length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275classProp("resizing", ctx.isResizing);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("sticky", ctx.config.stickyHeader);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.config.selectable);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.getVisibleColumns())("ngForTrackBy", ctx.trackByColumn);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.displayedData.length === 0 && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.displayedData)("ngForTrackBy", ctx.trackByRow);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate2(" Showing ", ctx.displayedData.length, " of ", ctx.getFilteredCount(), " results ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.config.pagination);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.config.pagination && ctx.totalPages > 1);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, TitleCasePipe, DatePipe], styles: ['\n\n[_ngcontent-%COMP%]:root {\n  --primary-bg: #1a1a1a;\n  --secondary-bg: #2d2d2d;\n  --tertiary-bg: #3a3a3a;\n  --surface-bg: #2a2a2a;\n  --primary-accent: #4a9eff;\n  --secondary-accent: #7c3aed;\n  --success-color: #10b981;\n  --warning-color: #f59e0b;\n  --error-color: #ef4444;\n  --text-primary: #ffffff;\n  --text-secondary: #e5e5e5;\n  --text-muted: #a3a3a3;\n  --text-disabled: #6b7280;\n  --border-primary: #4a4a4a;\n  --border-secondary: #3a3a3a;\n  --border-accent: #5a5a5a;\n  --shadow-light: rgba(0, 0, 0, 0.1);\n  --shadow-medium: rgba(0, 0, 0, 0.2);\n  --shadow-heavy: rgba(0, 0, 0, 0.3);\n  --hover-bg: #3a3a3a;\n  --hover-accent: #5bb0ff;\n  --active-bg: #4a4a4a;\n  --active-accent: #3a8fdf;\n}\n.smart-table-container[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0f0f0f 0%,\n      #1a1a1a 50%,\n      #0f0f0f 100%);\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 8px 16px rgba(0, 0, 0, 0.2);\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  max-height: 100%;\n}\n.smart-table-container[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    radial-gradient(\n      circle at 20% 80%,\n      rgba(74, 158, 255, 0.03) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 80% 20%,\n      rgba(124, 58, 237, 0.03) 0%,\n      transparent 50%);\n  pointer-events: none;\n  z-index: 0;\n}\n.table-header[_ngcontent-%COMP%] {\n  background: rgba(42, 42, 42, 0.8);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  padding: 0;\n  position: relative;\n  z-index: 1;\n  min-height: 0;\n}\n.table-header[_ngcontent-%COMP%]:has(.table-controls:empty) {\n  display: none;\n}\n.table-header[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(74, 158, 255, 0.5),\n      transparent);\n}\n.table-controls[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1.5rem;\n  margin-bottom: 0;\n  padding: 0;\n}\n@media (max-width: 768px) {\n  .table-controls[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n  }\n}\n.search-section[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.search-section[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n.search-container[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 100%;\n  width: 100%;\n}\n.search-container[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 45px 12px 42px;\n  background: rgba(58, 58, 58, 0.9);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 10px;\n  color: var(--text-primary);\n  font-size: 1rem;\n  transition: all 0.3s ease;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);\n}\n.search-container[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-secondary);\n  opacity: 0.7;\n}\n.search-container[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: rgba(74, 158, 255, 0.7);\n  background: rgb(58, 58, 58);\n  box-shadow: 0 0 0 3px rgba(74, 158, 255, 0.2), 0 4px 16px rgba(0, 0, 0, 0.4);\n}\n.search-container[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:hover:not(:focus) {\n  border-color: rgba(255, 255, 255, 0.25);\n  background: rgba(58, 58, 58, 0.95);\n}\n.search-container[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 16px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-secondary);\n  font-size: 1rem;\n  pointer-events: none;\n  z-index: 1;\n}\n.search-container[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]   .clear-search-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: transparent;\n  border: none;\n  color: var(--text-secondary);\n  cursor: pointer;\n  padding: 6px 10px;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  transition: all 0.2s ease;\n  z-index: 1;\n}\n.search-container[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]   .clear-search-btn[_ngcontent-%COMP%]:hover {\n  color: var(--text-primary);\n  background: rgba(255, 255, 255, 0.15);\n}\n.search-container[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]   .clear-search-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.search-input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 500px;\n  width: 100%;\n}\n.search-input-wrapper[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.5rem 2rem 0.5rem 40px;\n  background: rgba(58, 58, 58, 0.8);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 8px;\n  color: var(--text-primary);\n  font-size: 0.95rem;\n  transition: all 0.3s ease;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n}\n.search-input-wrapper[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-secondary);\n  opacity: 0.7;\n}\n.search-input-wrapper[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: rgba(74, 158, 255, 0.6);\n  background: rgba(58, 58, 58, 0.95);\n  box-shadow: 0 0 0 3px rgba(74, 158, 255, 0.15), 0 4px 12px rgba(0, 0, 0, 0.3);\n}\n.search-input-wrapper[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:hover:not(:focus) {\n  border-color: rgba(255, 255, 255, 0.2);\n  background: rgba(58, 58, 58, 0.85);\n}\n.search-input-wrapper[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-secondary);\n  font-size: 0.95rem;\n  pointer-events: none;\n  z-index: 1;\n}\n.search-input-wrapper[_ngcontent-%COMP%]   .clear-search-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: transparent;\n  border: none;\n  color: var(--text-secondary);\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 4px;\n  font-size: 0.85rem;\n  transition: all 0.2s ease;\n  z-index: 1;\n}\n.search-input-wrapper[_ngcontent-%COMP%]   .clear-search-btn[_ngcontent-%COMP%]:hover {\n  color: var(--text-primary);\n  background: rgba(255, 255, 255, 0.1);\n}\n.search-input-wrapper[_ngcontent-%COMP%]   .clear-search-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.filter-badges[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-top: 0.5rem;\n}\n.filter-badges[_ngcontent-%COMP%]   .filter-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.25rem 0.5rem;\n  background: rgba(74, 158, 255, 0.1);\n  border: 1px solid rgba(74, 158, 255, 0.2);\n  border-radius: 8px;\n  color: var(--text-primary);\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n.filter-badges[_ngcontent-%COMP%]   .filter-badge[_ngcontent-%COMP%]   .remove-filter[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--text-secondary);\n  cursor: pointer;\n  padding: 0;\n  font-size: 0.9rem;\n  transition: color 0.2s ease;\n}\n.filter-badges[_ngcontent-%COMP%]   .filter-badge[_ngcontent-%COMP%]   .remove-filter[_ngcontent-%COMP%]:hover {\n  color: var(--text-primary);\n}\n.filter-badges[_ngcontent-%COMP%]   .clear-all-filters[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  border: 1px solid rgba(239, 68, 68, 0.2);\n  color: #EF4444;\n  padding: 0.25rem 0.5rem;\n  border-radius: 8px;\n  font-size: 0.8rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.filter-badges[_ngcontent-%COMP%]   .clear-all-filters[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.2);\n}\n.table-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.export-dropdown[_ngcontent-%COMP%] {\n  position: relative;\n}\n.export-dropdown[_ngcontent-%COMP%]   .export-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.5rem 1rem;\n  background: rgba(58, 58, 58, 0.6);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 12px;\n  color: var(--text-primary);\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.export-dropdown[_ngcontent-%COMP%]   .export-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(74, 158, 255, 0.1);\n  border-color: rgba(74, 158, 255, 0.3);\n}\n.export-dropdown[_ngcontent-%COMP%]   .export-btn[_ngcontent-%COMP%]   .dropdown-arrow[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  transition: transform 0.2s ease;\n}\n.export-dropdown[_ngcontent-%COMP%]:hover   .dropdown-arrow[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.export-dropdown[_ngcontent-%COMP%]   .export-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  margin-top: 0.25rem;\n  background: rgba(42, 42, 42, 0.95);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 12px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(-10px);\n  transition: all 0.2s ease;\n  z-index: 100;\n}\n.export-dropdown[_ngcontent-%COMP%]   .export-menu[_ngcontent-%COMP%]   .export-option[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.5rem 1rem;\n  background: none;\n  border: none;\n  color: var(--text-primary);\n  text-align: left;\n  cursor: pointer;\n  transition: background 0.2s ease;\n}\n.export-dropdown[_ngcontent-%COMP%]   .export-menu[_ngcontent-%COMP%]   .export-option[_ngcontent-%COMP%]:hover {\n  background: rgba(74, 158, 255, 0.1);\n}\n.export-dropdown[_ngcontent-%COMP%]   .export-menu[_ngcontent-%COMP%]   .export-option[_ngcontent-%COMP%]:first-child {\n  border-radius: 12px 12px 0 0;\n}\n.export-dropdown[_ngcontent-%COMP%]   .export-menu[_ngcontent-%COMP%]   .export-option[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 0 12px 12px;\n}\n.export-dropdown[_ngcontent-%COMP%]:hover   .export-menu[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  transform: translateY(0);\n}\n.view-options[_ngcontent-%COMP%] {\n  display: flex;\n  background: rgba(58, 58, 58, 0.6);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 12px;\n  overflow: hidden;\n}\n.view-options[_ngcontent-%COMP%]   .view-btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  background: none;\n  border: none;\n  color: var(--text-secondary);\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.view-options[_ngcontent-%COMP%]   .view-btn.active[_ngcontent-%COMP%] {\n  background: rgba(74, 158, 255, 0.2);\n  color: var(--text-primary);\n}\n.view-options[_ngcontent-%COMP%]   .view-btn[_ngcontent-%COMP%]:hover:not(.active) {\n  background: rgba(255, 255, 255, 0.05);\n  color: var(--text-primary);\n}\n.results-summary[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: var(--text-secondary);\n  font-size: 0.9rem;\n}\n@media (max-width: 768px) {\n  .results-summary[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.5rem;\n    align-items: flex-start;\n  }\n}\n.results-summary[_ngcontent-%COMP%]   .results-count[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.results-summary[_ngcontent-%COMP%]   .selected-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.results-summary[_ngcontent-%COMP%]   .selected-info[_ngcontent-%COMP%]   .selected-count[_ngcontent-%COMP%] {\n  color: rgba(74, 158, 255, 0.8);\n  font-weight: 500;\n}\n.results-summary[_ngcontent-%COMP%]   .selected-info[_ngcontent-%COMP%]   .clear-selection[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--text-secondary);\n  font-size: 0.8rem;\n  cursor: pointer;\n  text-decoration: underline;\n}\n.results-summary[_ngcontent-%COMP%]   .selected-info[_ngcontent-%COMP%]   .clear-selection[_ngcontent-%COMP%]:hover {\n  color: var(--text-primary);\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(15, 15, 15, 0.8);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.loading-overlay[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  color: var(--text-primary);\n}\n.loading-overlay[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid rgba(74, 158, 255, 0.2);\n  border-top: 3px solid #4a9eff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_tooltipFadeIn {\n  0% {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  overflow-x: auto;\n  overflow-y: auto;\n  min-width: 100%;\n  flex: 1;\n  min-height: 0;\n  max-height: 100%;\n  scrollbar-width: thin;\n  scrollbar-color: rgba(74, 158, 255, 0.3) rgba(42, 42, 42, 0.8);\n}\n.table-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n.table-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: rgba(42, 42, 42, 0.8);\n  border-radius: 4px;\n}\n.table-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(74, 158, 255, 0.3);\n  border-radius: 4px;\n}\n.table-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: rgba(74, 158, 255, 0.5);\n}\n.table-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-corner {\n  background: rgba(42, 42, 42, 0.8);\n}\n.table-wrapper.resizing[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n  user-select: none;\n  cursor: col-resize;\n}\n.smart-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  background: transparent;\n}\n.smart-table[_ngcontent-%COMP%]   .table-header-row.sticky[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n.smart-table[_ngcontent-%COMP%]   .table-header-cell[_ngcontent-%COMP%] {\n  background: rgba(58, 58, 58, 0.8);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  padding: 16px 16px;\n  text-align: left;\n  font-weight: 600;\n  font-size: 0.85rem;\n  color: var(--text-primary);\n  position: relative;\n  transition: all 0.2s ease;\n  min-height: 50px;\n}\n.smart-table[_ngcontent-%COMP%]   .table-header-cell.sortable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.smart-table[_ngcontent-%COMP%]   .table-header-cell.sortable[_ngcontent-%COMP%]:hover {\n  background: rgba(74, 158, 255, 0.1);\n}\n.smart-table[_ngcontent-%COMP%]   .table-header-cell.sticky[_ngcontent-%COMP%] {\n  position: sticky;\n  left: 0;\n  z-index: 5;\n}\n.smart-table[_ngcontent-%COMP%]   .table-header-cell[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.smart-table[_ngcontent-%COMP%]   .table-header-cell[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .column-title[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.smart-table[_ngcontent-%COMP%]   .table-header-cell[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .sort-indicator[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--text-secondary);\n  transition: all 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 16px;\n  font-weight: 500;\n  opacity: 0.6;\n}\n.smart-table[_ngcontent-%COMP%]   .table-header-cell[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .sort-indicator[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  color: var(--text-primary);\n}\n.smart-table[_ngcontent-%COMP%]   .table-header-cell[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .sort-indicator.active[_ngcontent-%COMP%] {\n  color: #4a9eff;\n  opacity: 1;\n  transform: scale(1.15);\n  font-weight: 600;\n}\n.smart-table[_ngcontent-%COMP%]   .table-header-cell[_ngcontent-%COMP%]   .column-filter[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n}\n.smart-table[_ngcontent-%COMP%]   .table-header-cell[_ngcontent-%COMP%]   .column-filter[_ngcontent-%COMP%]   .filter-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.25rem 0.5rem;\n  background: rgba(42, 42, 42, 0.6);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 6px;\n  color: var(--text-primary);\n  font-size: 0.8rem;\n}\n.smart-table[_ngcontent-%COMP%]   .table-header-cell[_ngcontent-%COMP%]   .column-filter[_ngcontent-%COMP%]   .filter-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-secondary);\n}\n.smart-table[_ngcontent-%COMP%]   .table-header-cell[_ngcontent-%COMP%]   .column-filter[_ngcontent-%COMP%]   .filter-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: rgba(74, 158, 255, 0.3);\n}\n.smart-table[_ngcontent-%COMP%]   .table-header-cell[_ngcontent-%COMP%]   .resize-handle[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 4px;\n  height: 100%;\n  cursor: col-resize;\n  background: transparent;\n  transition: background 0.2s ease;\n}\n.smart-table[_ngcontent-%COMP%]   .table-header-cell[_ngcontent-%COMP%]   .resize-handle[_ngcontent-%COMP%]:hover {\n  background: rgba(74, 158, 255, 0.3);\n}\n.smart-table[_ngcontent-%COMP%]   .selection-column[_ngcontent-%COMP%] {\n  width: 70px;\n  min-width: 70px;\n  text-align: center;\n  background: rgba(58, 58, 58, 0.8);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  padding: 12px 2px 12px 12px;\n  font-weight: 600;\n  font-size: 0.85rem;\n  color: var(--text-primary);\n  position: relative;\n  transition: all 0.2s ease;\n  min-height: 50px;\n  cursor: pointer;\n}\n.smart-table[_ngcontent-%COMP%]   .selection-column[_ngcontent-%COMP%]:hover {\n  background: rgba(74, 158, 255, 0.1);\n}\n.smart-table[_ngcontent-%COMP%]   .selection-column[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.smart-table[_ngcontent-%COMP%]   .selection-column[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .column-title[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.smart-table[_ngcontent-%COMP%]   .selection-column[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .sort-indicator[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--text-secondary);\n  transition: all 0.2s ease;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 16px;\n  font-weight: 500;\n  opacity: 0.6;\n}\n.smart-table[_ngcontent-%COMP%]   .selection-column[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .sort-indicator.active[_ngcontent-%COMP%] {\n  color: #4a9eff;\n  opacity: 1;\n  transform: scale(1.15);\n  font-weight: 600;\n}\n.smart-table[_ngcontent-%COMP%]   .selection-column[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .sort-indicator[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  color: var(--text-primary);\n}\n.smart-table[_ngcontent-%COMP%]   .actions-column[_ngcontent-%COMP%] {\n  width: 110px;\n  min-width: 110px;\n  max-width: 110px;\n  text-align: center;\n}\n.smart-table[_ngcontent-%COMP%]   .table-header-cell[_ngcontent-%COMP%]:first-of-type:not(.selection-column) {\n  width: auto;\n  flex: 1;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%] {\n  background: transparent;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]:hover {\n  background: rgba(74, 158, 255, 0.05);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row.selected[_ngcontent-%COMP%] {\n  background: rgba(74, 158, 255, 0.1);\n  border-color: rgba(74, 158, 255, 0.2);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row.highlight-periodic-task[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.15) !important;\n  border: 2px solid rgba(124, 58, 237, 0.4) !important;\n  box-shadow: 0 0 10px rgba(124, 58, 237, 0.3);\n  animation: _ngcontent-%COMP%_pulse-highlight 2s ease-in-out;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row.even[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.02);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row.odd[_ngcontent-%COMP%] {\n  background: transparent;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row.selected.even[_ngcontent-%COMP%], \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row.selected.odd[_ngcontent-%COMP%] {\n  background: rgba(74, 158, 255, 0.1);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row.completed[_ngcontent-%COMP%]   .checkbox-wrapper[_ngcontent-%COMP%]   .checkbox-custom[_ngcontent-%COMP%] {\n  border-color: #6b7280 !important;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row.completed[_ngcontent-%COMP%]   .checkbox-wrapper[_ngcontent-%COMP%]   .checkbox-custom[_ngcontent-%COMP%]::after {\n  border-color: #6b7280 !important;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row.completed[_ngcontent-%COMP%]   .checkbox-wrapper[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .checkbox-custom[_ngcontent-%COMP%] {\n  background: #6b7280 !important;\n  border-color: #6b7280 !important;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row.completed[_ngcontent-%COMP%]   .checkbox-wrapper[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .checkbox-custom[_ngcontent-%COMP%]::after {\n  border-color: #ffffff !important;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row.completed[_ngcontent-%COMP%]   .star-icon[_ngcontent-%COMP%] {\n  color: #6b7280 !important;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row.completed[_ngcontent-%COMP%]   .star-icon[_ngcontent-%COMP%]:hover {\n  color: #6b7280 !important;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row.completed[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%] {\n  color: #6b7280 !important;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row.completed[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%] {\n  color: #6b7280 !important;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row.completed[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .default-cell[_ngcontent-%COMP%] {\n  color: #6b7280 !important;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row.completed[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row.completed[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row.completed[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280 !important;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row.completed[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .priority-badge[_ngcontent-%COMP%], \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row.completed[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%], \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row.completed[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .category-badge[_ngcontent-%COMP%] {\n  background-color: #6b7280 !important;\n  opacity: 0.3 !important;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row.completed[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .priority-badge[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row.completed[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row.completed[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .category-badge[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row.completed[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .category-icon[_ngcontent-%COMP%] {\n  filter: grayscale(100%) !important;\n  opacity: 0.6 !important;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row.completed[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .category-cell[_ngcontent-%COMP%] {\n  color: #6b7280 !important;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row.completed[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .category-cell[_ngcontent-%COMP%]   .category-icon[_ngcontent-%COMP%] {\n  filter: grayscale(100%) !important;\n  opacity: 0.6 !important;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row.completed[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .progress-fill[_ngcontent-%COMP%], \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row.completed[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .progress-fill-inline[_ngcontent-%COMP%] {\n  background: #6b7280 !important;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row.completed[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .periodic-task-btn[_ngcontent-%COMP%] {\n  color: #6b7280 !important;\n  background: rgba(107, 114, 128, 0.15) !important;\n  border-color: rgba(107, 114, 128, 0.3) !important;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row.completed[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .periodic-task-btn[_ngcontent-%COMP%]   .periodic-icon-wrapper[_ngcontent-%COMP%] {\n  background: rgba(107, 114, 128, 0.2) !important;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row.completed[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .periodic-task-btn[_ngcontent-%COMP%]   .periodic-icon-wrapper[_ngcontent-%COMP%]   .periodic-icon[_ngcontent-%COMP%] {\n  color: #6b7280 !important;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row.completed[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .date-cell[_ngcontent-%COMP%], \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row.completed[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .task-on-date[_ngcontent-%COMP%] {\n  color: #6b7280 !important;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row.completed[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .nd-value[_ngcontent-%COMP%] {\n  color: #6b7280 !important;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row.completed[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .progress-fill[_ngcontent-%COMP%], \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row.completed[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .progress-fill-inline[_ngcontent-%COMP%] {\n  background: #6b7280 !important;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row.completed[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .progress-text[_ngcontent-%COMP%], \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row.completed[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .progress-text-inline[_ngcontent-%COMP%] {\n  color: #6b7280 !important;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row.completed[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .task-progress-row[_ngcontent-%COMP%]   .progress-fill-inline[_ngcontent-%COMP%] {\n  background: #6b7280 !important;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row.completed[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .task-progress-row[_ngcontent-%COMP%]   .progress-text-inline[_ngcontent-%COMP%] {\n  color: #6b7280 !important;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row.completed[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #6b7280 !important;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row.completed[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .url-item[_ngcontent-%COMP%], \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row.completed[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .url-link[_ngcontent-%COMP%] {\n  color: #6b7280 !important;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row.completed[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .remarks-list[_ngcontent-%COMP%], \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row.completed[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .remark-item[_ngcontent-%COMP%] {\n  color: #6b7280 !important;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row.completed[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .remarks-badge[_ngcontent-%COMP%] {\n  background: rgba(107, 114, 128, 0.2) !important;\n  color: #6b7280 !important;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row.completed[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .task-title[_ngcontent-%COMP%], \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row.completed[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .task-description[_ngcontent-%COMP%] {\n  color: #6b7280 !important;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n  color: var(--text-primary);\n  font-size: 0.9rem;\n  position: relative;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  vertical-align: middle;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]:first-of-type:not(.selection-cell) {\n  padding-left: 8px;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]:has(.task-cell) {\n  white-space: normal;\n  overflow: hidden;\n  padding: 10px 14px;\n  vertical-align: middle;\n  max-width: 100%;\n  box-sizing: border-box;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell.sticky[_ngcontent-%COMP%] {\n  position: sticky;\n  left: 0;\n  z-index: 1;\n  background: inherit;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  width: 100%;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]:has(.task-cell) {\n  align-items: flex-start;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .default-cell[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  width: 100%;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .default-cell[_ngcontent-%COMP%]   .hours-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  padding: 4px 0;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .default-cell[_ngcontent-%COMP%]   .hours-cell[_ngcontent-%COMP%]   .hours-main[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  line-height: 1.2;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .default-cell[_ngcontent-%COMP%]   .hours-cell[_ngcontent-%COMP%]   .hours-per-day-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2px 6px;\n  background: rgba(16, 185, 129, 0.12);\n  border: 1px solid rgba(16, 185, 129, 0.25);\n  border-radius: 4px;\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: rgba(16, 185, 129, 0.9);\n  letter-spacing: 0.1px;\n  white-space: nowrap;\n  transition: all 0.2s ease;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .default-cell[_ngcontent-%COMP%]   .hours-cell[_ngcontent-%COMP%]   .hours-per-day-badge[_ngcontent-%COMP%]:hover {\n  background: rgba(16, 185, 129, 0.18);\n  border-color: rgba(16, 185, 129, 0.35);\n  transform: translateY(-0.5px);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .default-cell[_ngcontent-%COMP%]   .hours-cell.schedule-overlap[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border-radius: 4px;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .default-cell[_ngcontent-%COMP%]   .hours-cell.schedule-overlap[_ngcontent-%COMP%]   .hours-main[_ngcontent-%COMP%] {\n  color: var(--text-primary) !important;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .default-cell[_ngcontent-%COMP%]   .nd-value[_ngcontent-%COMP%] {\n  color: #EF4444;\n  font-size: 0.9rem;\n  font-style: italic;\n  cursor: help;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .default-cell[_ngcontent-%COMP%]   .schedule-overlap[_ngcontent-%COMP%] {\n  color: var(--text-primary) !important;\n  font-weight: 500;\n  padding: 2px 6px;\n  border-radius: 4px;\n  background: rgba(239, 68, 68, 0.08);\n  border: 1px solid rgba(239, 68, 68, 0.4);\n  position: relative;\n  animation: _ngcontent-%COMP%_scheduleOverlapBlink 2s ease-in-out infinite;\n  transition: all 0.2s ease;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .default-cell[_ngcontent-%COMP%]   .schedule-overlap[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: -2px;\n  border-radius: 5px;\n  background: rgba(239, 68, 68, 0.1);\n  z-index: -1;\n  opacity: 0;\n  transition: opacity 0.2s ease;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .default-cell[_ngcontent-%COMP%]   .schedule-overlap[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.15);\n  border-color: rgba(239, 68, 68, 0.7);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .default-cell[_ngcontent-%COMP%]   .schedule-overlap[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .default-cell.task-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  width: 100%;\n  white-space: normal;\n  min-height: 32px;\n  justify-content: center;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .default-cell.task-cell[_ngcontent-%COMP%]:has(.subtasks-container) {\n  justify-content: flex-start;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .default-cell.task-cell[_ngcontent-%COMP%]   .task-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-primary);\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 4px;\n  transition: background-color 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .default-cell.task-cell[_ngcontent-%COMP%]   .task-title[_ngcontent-%COMP%]:hover {\n  background-color: rgba(74, 158, 255, 0.1);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .default-cell.task-cell[_ngcontent-%COMP%]   .task-title[_ngcontent-%COMP%]   .subtask-checkbox[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .default-cell.task-cell[_ngcontent-%COMP%]   .task-title[_ngcontent-%COMP%]   .subtask-checkbox[_ngcontent-%COMP%]   .subtask-checkbox-input[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  cursor: pointer;\n  accent-color: #4a9eff;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .default-cell.task-cell[_ngcontent-%COMP%]   .task-title[_ngcontent-%COMP%]   .subtask-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--text-secondary);\n  font-size: 0.9rem;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .default-cell.task-cell[_ngcontent-%COMP%]   .task-title[_ngcontent-%COMP%]   .main-task-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 1rem;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .default-cell.task-cell[_ngcontent-%COMP%]   .subtasks-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  margin-left: 16px;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .default-cell.task-cell[_ngcontent-%COMP%]   .subtasks-container[_ngcontent-%COMP%]   .subtask-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 2px 0;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .default-cell.task-cell[_ngcontent-%COMP%]   .subtasks-container[_ngcontent-%COMP%]   .subtask-item[_ngcontent-%COMP%]   .subtask-checkbox[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .default-cell.task-cell[_ngcontent-%COMP%]   .subtasks-container[_ngcontent-%COMP%]   .subtask-item[_ngcontent-%COMP%]   .subtask-checkbox[_ngcontent-%COMP%]   .subtask-checkbox-input[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  cursor: pointer;\n  accent-color: #4a9eff;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .default-cell.task-cell[_ngcontent-%COMP%]   .subtasks-container[_ngcontent-%COMP%]   .subtask-item[_ngcontent-%COMP%]   .subtask-content[_ngcontent-%COMP%] {\n  flex: 1;\n  cursor: pointer;\n  padding: 2px 4px;\n  border-radius: 4px;\n  transition: background-color 0.2s ease;\n  display: flex;\n  align-items: center;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .default-cell.task-cell[_ngcontent-%COMP%]   .subtasks-container[_ngcontent-%COMP%]   .subtask-item[_ngcontent-%COMP%]   .subtask-content[_ngcontent-%COMP%]:hover {\n  background-color: rgba(74, 158, 255, 0.1);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .default-cell.task-cell[_ngcontent-%COMP%]   .subtasks-container[_ngcontent-%COMP%]   .subtask-item[_ngcontent-%COMP%]   .subtask-content[_ngcontent-%COMP%]   .subtask-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--text-secondary);\n  font-size: 0.85rem;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .default-cell.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 4px;\n  transition: background-color 0.2s ease;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .default-cell.clickable[_ngcontent-%COMP%]:hover {\n  background-color: rgba(74, 158, 255, 0.1);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .default-cell.subtask-cell[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.9rem;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .default-cell.subtask-cell[_ngcontent-%COMP%]   .subtask-indicator[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  margin-right: 8px;\n  font-weight: normal;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .priority-badge[_ngcontent-%COMP%], \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.25rem 0.5rem;\n  border-radius: 8px;\n  color: white;\n  font-size: 0.8rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .progress-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  width: 100%;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .progress-cell[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  flex: 0 0 60px;\n  height: 6px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 3px;\n  overflow: hidden;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .progress-cell[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #4a9eff,\n      #7c3aed);\n  border-radius: 3px;\n  transition: width 0.3s ease;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .progress-cell[_ngcontent-%COMP%]   .progress-text[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n  min-width: 35px;\n  text-align: right;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .date-cell[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.8rem;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  align-items: flex-start;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .date-cell[_ngcontent-%COMP%]   .nd-value[_ngcontent-%COMP%] {\n  color: #EF4444;\n  font-size: 0.85rem;\n  font-style: italic;\n  cursor: help;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .date-cell[_ngcontent-%COMP%]   .task-on-date[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .date-cell[_ngcontent-%COMP%]   .periodic-task-date-panel[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n  gap: 2px;\n  margin-top: 4px;\n  padding: 3px 6px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 4px;\n  width: 100%;\n  box-sizing: border-box;\n  transition: all 0.2s ease;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .date-cell[_ngcontent-%COMP%]   .periodic-task-date-panel[_ngcontent-%COMP%]   .periodic-date-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 0.68rem;\n  line-height: 1.2;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .date-cell[_ngcontent-%COMP%]   .periodic-task-date-panel[_ngcontent-%COMP%]   .periodic-date-row[_ngcontent-%COMP%]   .periodic-date-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 0.62rem;\n  letter-spacing: 0.2px;\n  flex-shrink: 0;\n  min-width: 22px;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .date-cell[_ngcontent-%COMP%]   .periodic-task-date-panel[_ngcontent-%COMP%]   .periodic-date-row[_ngcontent-%COMP%]   .periodic-date-value[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.7);\n  flex: 1;\n  min-width: 0;\n  font-size: 0.68rem;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .date-cell[_ngcontent-%COMP%]   .periodic-task-date-panel[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.05);\n  border-color: rgba(255, 255, 255, 0.12);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .category-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-weight: 500;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .category-cell[_ngcontent-%COMP%]   .category-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .color-cell[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .color-cell[_ngcontent-%COMP%]   .color-swatch[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-radius: 4px;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);\n  display: inline-block;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .urls-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  width: 100%;\n  min-width: 0;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .urls-cell[_ngcontent-%COMP%]   .url-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  width: 100%;\n  min-width: 0;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .urls-cell[_ngcontent-%COMP%]   .url-item[_ngcontent-%COMP%]   .url-link[_ngcontent-%COMP%] {\n  color: #4a9eff;\n  text-decoration: none;\n  font-size: 12px;\n  padding: 2px 6px;\n  border-radius: 4px;\n  background: rgba(74, 158, 255, 0.1);\n  border: 1px solid rgba(74, 158, 255, 0.2);\n  transition: all 0.2s ease;\n  display: block;\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .urls-cell[_ngcontent-%COMP%]   .url-item[_ngcontent-%COMP%]   .url-link[_ngcontent-%COMP%]   .url-label-truncated[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 100%;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .urls-cell[_ngcontent-%COMP%]   .url-item[_ngcontent-%COMP%]   .url-link[_ngcontent-%COMP%]:hover {\n  background: rgba(74, 158, 255, 0.2);\n  border-color: rgba(74, 158, 255, 0.4);\n  transform: translateY(-1px);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .urls-cell[_ngcontent-%COMP%]   .url-item[_ngcontent-%COMP%]   .credential-tag-note[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n  padding: 2px 6px;\n  background: rgba(16, 185, 129, 0.15);\n  border: 1px solid rgba(16, 185, 129, 0.3);\n  border-radius: 4px;\n  font-size: 11px;\n  color: #10b981;\n  cursor: help;\n  flex-shrink: 0;\n  transition: all 0.2s ease;\n  margin-left: 6px;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .urls-cell[_ngcontent-%COMP%]   .url-item[_ngcontent-%COMP%]   .credential-tag-note[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .urls-cell[_ngcontent-%COMP%]   .url-item[_ngcontent-%COMP%]   .credential-tag-note[_ngcontent-%COMP%]   .credential-count-note[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 10px;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .urls-cell[_ngcontent-%COMP%]   .url-item[_ngcontent-%COMP%]   .credential-tag-note[_ngcontent-%COMP%]:hover {\n  background: rgba(16, 185, 129, 0.25);\n  border-color: rgba(16, 185, 129, 0.5);\n  transform: translateY(-1px);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .urls-cell[_ngcontent-%COMP%]   .url-item[_ngcontent-%COMP%]   .credential-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n  padding: 2px 6px;\n  background: rgba(16, 185, 129, 0.15);\n  border: 1px solid rgba(16, 185, 129, 0.3);\n  border-radius: 4px;\n  font-size: 11px;\n  color: #10b981;\n  cursor: help;\n  flex-shrink: 0;\n  transition: all 0.2s ease;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .urls-cell[_ngcontent-%COMP%]   .url-item[_ngcontent-%COMP%]   .credential-tag[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .urls-cell[_ngcontent-%COMP%]   .url-item[_ngcontent-%COMP%]   .credential-tag[_ngcontent-%COMP%]   .credential-count[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 10px;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .urls-cell[_ngcontent-%COMP%]   .url-item[_ngcontent-%COMP%]   .credential-tag[_ngcontent-%COMP%]:hover {\n  background: rgba(16, 185, 129, 0.25);\n  border-color: rgba(16, 185, 129, 0.5);\n  transform: translateY(-1px);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .urls-cell[_ngcontent-%COMP%]   .no-docs[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.85rem;\n  font-style: italic;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .remarks-cell[_ngcontent-%COMP%]   .remarks-list[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 16px;\n  list-style-type: disc;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .remarks-cell[_ngcontent-%COMP%]   .remarks-list[_ngcontent-%COMP%]   .remark-item[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-size: 0.85rem;\n  margin-bottom: 4px;\n  line-height: 1.4;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .remarks-cell[_ngcontent-%COMP%]   .remarks-list[_ngcontent-%COMP%]   .remark-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .remarks-cell[_ngcontent-%COMP%]   .no-remarks[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.85rem;\n  font-style: italic;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .password-cell[_ngcontent-%COMP%]   .password-display[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .password-cell[_ngcontent-%COMP%]   .password-display[_ngcontent-%COMP%]   .password-masked[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n  letter-spacing: 2px;\n  color: var(--text-primary);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .password-cell[_ngcontent-%COMP%]   .password-display[_ngcontent-%COMP%]   .password-visible[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n  color: var(--text-primary);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .password-cell[_ngcontent-%COMP%]   .password-display[_ngcontent-%COMP%]   .password-toggle-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 4px;\n  color: #9aa0a6;\n  cursor: pointer;\n  padding: 4px 8px;\n  font-size: 12px;\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .password-cell[_ngcontent-%COMP%]   .password-display[_ngcontent-%COMP%]   .password-toggle-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  border-color: rgba(255, 255, 255, 0.3);\n  color: var(--text-primary);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .password-cell[_ngcontent-%COMP%]   .password-display[_ngcontent-%COMP%]   .password-toggle-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .json-cell[_ngcontent-%COMP%]   .json-preview[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--text-primary);\n  line-height: 1.4;\n  word-break: break-word;\n  cursor: help;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .credentials-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .credentials-cell[_ngcontent-%COMP%]   .credentials-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .credentials-cell[_ngcontent-%COMP%]   .credentials-list[_ngcontent-%COMP%]   .credential-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 8px;\n  background: rgba(74, 158, 255, 0.15);\n  border: 1px solid rgba(74, 158, 255, 0.3);\n  border-radius: 4px;\n  font-size: 11px;\n  color: #4a9eff;\n  cursor: help;\n  white-space: nowrap;\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  transition: all 0.2s ease;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .credentials-cell[_ngcontent-%COMP%]   .credentials-list[_ngcontent-%COMP%]   .credential-badge[_ngcontent-%COMP%]:hover {\n  background: rgba(74, 158, 255, 0.25);\n  border-color: rgba(74, 158, 255, 0.5);\n  transform: translateY(-1px);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .credentials-cell[_ngcontent-%COMP%]   .public-access[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 8px;\n  background: rgba(16, 185, 129, 0.15);\n  border: 1px solid rgba(16, 185, 129, 0.3);\n  border-radius: 4px;\n  font-size: 11px;\n  color: #10b981;\n  font-weight: 500;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .credentials-cell[_ngcontent-%COMP%]   .public-access[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .boolean-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .boolean-cell[_ngcontent-%COMP%]   .boolean-indicator[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  font-size: 0.8rem;\n  font-weight: bold;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .boolean-cell[_ngcontent-%COMP%]   .boolean-indicator.true[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.2);\n  color: #10B981;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .boolean-cell[_ngcontent-%COMP%]   .boolean-indicator.false[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.2);\n  color: #EF4444;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .boolean-cell[_ngcontent-%COMP%]   .toggle-switch-wrapper[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .boolean-cell[_ngcontent-%COMP%]   .toggle-switch-wrapper[_ngcontent-%COMP%]   .modern-toggle-switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .boolean-cell[_ngcontent-%COMP%]   .toggle-switch-wrapper[_ngcontent-%COMP%]   .modern-toggle-switch[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0;\n  pointer-events: none;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .boolean-cell[_ngcontent-%COMP%]   .toggle-switch-wrapper[_ngcontent-%COMP%]   .modern-toggle-switch[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%] {\n  position: relative;\n  width: 44px;\n  height: 24px;\n  background: rgba(30, 30, 30, 0.9);\n  border: 1.5px solid rgba(100, 100, 100, 0.3);\n  border-radius: 12px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  overflow: hidden;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.05);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .boolean-cell[_ngcontent-%COMP%]   .toggle-switch-wrapper[_ngcontent-%COMP%]   .modern-toggle-switch[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(120, 120, 120, 0.2) 0%,\n      rgba(80, 80, 80, 0.1) 100%);\n  opacity: 1;\n  transition: opacity 0.3s ease;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .boolean-cell[_ngcontent-%COMP%]   .toggle-switch-wrapper[_ngcontent-%COMP%]   .modern-toggle-switch[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%]   .toggle-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  width: 18px;\n  height: 18px;\n  background: rgba(200, 200, 200, 0.3);\n  border: 1.5px solid rgba(180, 180, 180, 0.4);\n  border-radius: 50%;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.15);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  transform: translateX(0);\n  z-index: 2;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .boolean-cell[_ngcontent-%COMP%]   .toggle-switch-wrapper[_ngcontent-%COMP%]   .modern-toggle-switch[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%]   .toggle-indicator[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 6px;\n  height: 6px;\n  background: rgba(100, 100, 100, 0.8);\n  border-radius: 50%;\n  transition: all 0.3s ease;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .boolean-cell[_ngcontent-%COMP%]   .toggle-switch-wrapper[_ngcontent-%COMP%]   .modern-toggle-switch.active[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%] {\n  background: rgba(50, 50, 50, 0.95);\n  border-color: rgba(180, 180, 180, 0.6);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .boolean-cell[_ngcontent-%COMP%]   .toggle-switch-wrapper[_ngcontent-%COMP%]   .modern-toggle-switch.active[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%]::before {\n  opacity: 1;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(220, 220, 220, 0.25) 0%,\n      rgba(180, 180, 180, 0.15) 100%);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .boolean-cell[_ngcontent-%COMP%]   .toggle-switch-wrapper[_ngcontent-%COMP%]   .modern-toggle-switch.active[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%]   .toggle-indicator[_ngcontent-%COMP%] {\n  transform: translateX(20px);\n  background: rgba(240, 240, 240, 0.95);\n  border-color: rgba(255, 255, 255, 0.6);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .boolean-cell[_ngcontent-%COMP%]   .toggle-switch-wrapper[_ngcontent-%COMP%]   .modern-toggle-switch.active[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%]   .toggle-indicator[_ngcontent-%COMP%]::after {\n  background: rgba(255, 255, 255, 0.9);\n  box-shadow: 0 0 4px rgba(255, 255, 255, 0.4);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .boolean-cell[_ngcontent-%COMP%]   .toggle-switch-wrapper[_ngcontent-%COMP%]   .modern-toggle-switch[_ngcontent-%COMP%]:hover   .toggle-slider[_ngcontent-%COMP%] {\n  border-color: rgba(140, 140, 140, 0.5);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4), 0 0 0 2px rgba(140, 140, 140, 0.2);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .boolean-cell[_ngcontent-%COMP%]   .toggle-switch-wrapper[_ngcontent-%COMP%]   .modern-toggle-switch[_ngcontent-%COMP%]:hover.active   .toggle-slider[_ngcontent-%COMP%] {\n  border-color: rgba(200, 200, 200, 0.7);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4), 0 0 0 2px rgba(200, 200, 200, 0.25);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .boolean-cell[_ngcontent-%COMP%]   .toggle-switch-wrapper[_ngcontent-%COMP%]   .modern-toggle-switch[_ngcontent-%COMP%]:not(.active):hover   .toggle-slider[_ngcontent-%COMP%] {\n  border-color: rgba(120, 120, 120, 0.5);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4), 0 0 0 2px rgba(120, 120, 120, 0.2);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .boolean-cell[_ngcontent-%COMP%]   .toggle-switch-wrapper[_ngcontent-%COMP%]   .modern-toggle-switch[_ngcontent-%COMP%]:not(.active):hover   .toggle-slider[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(140, 140, 140, 0.25) 0%,\n      rgba(100, 100, 100, 0.15) 100%);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .selection-cell[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  width: 70px;\n  padding: 12px 2px 12px 12px;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .selection-cell[_ngcontent-%COMP%]   .selection-controls[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .selection-cell[_ngcontent-%COMP%]   .selection-controls[_ngcontent-%COMP%]   .star-icon[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 1.2rem;\n  color: var(--text-secondary);\n  padding: 2px;\n  transition: all 0.2s ease;\n  line-height: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .selection-cell[_ngcontent-%COMP%]   .selection-controls[_ngcontent-%COMP%]   .star-icon[_ngcontent-%COMP%]:hover {\n  color: #FFD700;\n  transform: scale(1.2);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .selection-cell[_ngcontent-%COMP%]   .selection-controls[_ngcontent-%COMP%]   .star-icon.important[_ngcontent-%COMP%] {\n  color: #FFD700;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .selection-cell[_ngcontent-%COMP%]   .selection-controls[_ngcontent-%COMP%]   .star-icon.important[_ngcontent-%COMP%]:hover {\n  transform: scale(1.3);\n  text-shadow: 0 0 8px rgba(255, 215, 0, 0.6);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%], \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell-wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 8px 12px;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%], \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell-wrapper[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 6px;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .toggle-switch-wrapper[_ngcontent-%COMP%], \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell-wrapper[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .toggle-switch-wrapper[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .toggle-switch-wrapper[_ngcontent-%COMP%]   .modern-toggle-switch[_ngcontent-%COMP%], \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell-wrapper[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .toggle-switch-wrapper[_ngcontent-%COMP%]   .modern-toggle-switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .toggle-switch-wrapper[_ngcontent-%COMP%]   .modern-toggle-switch[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%], \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell-wrapper[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .toggle-switch-wrapper[_ngcontent-%COMP%]   .modern-toggle-switch[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0;\n  pointer-events: none;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .toggle-switch-wrapper[_ngcontent-%COMP%]   .modern-toggle-switch[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%], \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell-wrapper[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .toggle-switch-wrapper[_ngcontent-%COMP%]   .modern-toggle-switch[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%] {\n  position: relative;\n  width: 44px;\n  height: 24px;\n  background: rgba(30, 30, 30, 0.9);\n  border: 1.5px solid rgba(100, 100, 100, 0.3);\n  border-radius: 12px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  overflow: hidden;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.05);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .toggle-switch-wrapper[_ngcontent-%COMP%]   .modern-toggle-switch[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%]::before, \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell-wrapper[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .toggle-switch-wrapper[_ngcontent-%COMP%]   .modern-toggle-switch[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(120, 120, 120, 0.2) 0%,\n      rgba(80, 80, 80, 0.1) 100%);\n  opacity: 1;\n  transition: opacity 0.3s ease;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .toggle-switch-wrapper[_ngcontent-%COMP%]   .modern-toggle-switch[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%]   .toggle-indicator[_ngcontent-%COMP%], \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell-wrapper[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .toggle-switch-wrapper[_ngcontent-%COMP%]   .modern-toggle-switch[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%]   .toggle-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  width: 18px;\n  height: 18px;\n  background: rgba(200, 200, 200, 0.3);\n  border: 1.5px solid rgba(180, 180, 180, 0.4);\n  border-radius: 50%;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.15);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  transform: translateX(0);\n  z-index: 2;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .toggle-switch-wrapper[_ngcontent-%COMP%]   .modern-toggle-switch[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%]   .toggle-indicator[_ngcontent-%COMP%]::after, \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell-wrapper[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .toggle-switch-wrapper[_ngcontent-%COMP%]   .modern-toggle-switch[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%]   .toggle-indicator[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 6px;\n  height: 6px;\n  background: rgba(100, 100, 100, 0.8);\n  border-radius: 50%;\n  transition: all 0.3s ease;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .toggle-switch-wrapper[_ngcontent-%COMP%]   .modern-toggle-switch.active[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%], \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell-wrapper[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .toggle-switch-wrapper[_ngcontent-%COMP%]   .modern-toggle-switch.active[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%] {\n  background: rgba(50, 50, 50, 0.95);\n  border-color: rgba(180, 180, 180, 0.6);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .toggle-switch-wrapper[_ngcontent-%COMP%]   .modern-toggle-switch.active[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%]::before, \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell-wrapper[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .toggle-switch-wrapper[_ngcontent-%COMP%]   .modern-toggle-switch.active[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%]::before {\n  opacity: 1;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(220, 220, 220, 0.25) 0%,\n      rgba(180, 180, 180, 0.15) 100%);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .toggle-switch-wrapper[_ngcontent-%COMP%]   .modern-toggle-switch.active[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%]   .toggle-indicator[_ngcontent-%COMP%], \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell-wrapper[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .toggle-switch-wrapper[_ngcontent-%COMP%]   .modern-toggle-switch.active[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%]   .toggle-indicator[_ngcontent-%COMP%] {\n  transform: translateX(20px);\n  background: rgba(240, 240, 240, 0.95);\n  border-color: rgba(255, 255, 255, 0.6);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .toggle-switch-wrapper[_ngcontent-%COMP%]   .modern-toggle-switch.active[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%]   .toggle-indicator[_ngcontent-%COMP%]::after, \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell-wrapper[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .toggle-switch-wrapper[_ngcontent-%COMP%]   .modern-toggle-switch.active[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%]   .toggle-indicator[_ngcontent-%COMP%]::after {\n  background: rgba(255, 255, 255, 0.9);\n  box-shadow: 0 0 4px rgba(255, 255, 255, 0.4);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .toggle-switch-wrapper[_ngcontent-%COMP%]   .modern-toggle-switch[_ngcontent-%COMP%]:hover   .toggle-slider[_ngcontent-%COMP%], \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell-wrapper[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .toggle-switch-wrapper[_ngcontent-%COMP%]   .modern-toggle-switch[_ngcontent-%COMP%]:hover   .toggle-slider[_ngcontent-%COMP%] {\n  border-color: rgba(140, 140, 140, 0.5);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4), 0 0 0 2px rgba(140, 140, 140, 0.2);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .toggle-switch-wrapper[_ngcontent-%COMP%]   .modern-toggle-switch[_ngcontent-%COMP%]:hover.active   .toggle-slider[_ngcontent-%COMP%], \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell-wrapper[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .toggle-switch-wrapper[_ngcontent-%COMP%]   .modern-toggle-switch[_ngcontent-%COMP%]:hover.active   .toggle-slider[_ngcontent-%COMP%] {\n  border-color: rgba(200, 200, 200, 0.7);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4), 0 0 0 2px rgba(200, 200, 200, 0.25);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .toggle-switch-wrapper[_ngcontent-%COMP%]   .modern-toggle-switch[_ngcontent-%COMP%]:not(.active):hover   .toggle-slider[_ngcontent-%COMP%], \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell-wrapper[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .toggle-switch-wrapper[_ngcontent-%COMP%]   .modern-toggle-switch[_ngcontent-%COMP%]:not(.active):hover   .toggle-slider[_ngcontent-%COMP%] {\n  border-color: rgba(120, 120, 120, 0.5);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4), 0 0 0 2px rgba(120, 120, 120, 0.2);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .toggle-switch-wrapper[_ngcontent-%COMP%]   .modern-toggle-switch[_ngcontent-%COMP%]:not(.active):hover   .toggle-slider[_ngcontent-%COMP%]::before, \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell-wrapper[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .toggle-switch-wrapper[_ngcontent-%COMP%]   .modern-toggle-switch[_ngcontent-%COMP%]:not(.active):hover   .toggle-slider[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(140, 140, 140, 0.25) 0%,\n      rgba(100, 100, 100, 0.15) 100%);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%], \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell-wrapper[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  background: rgba(58, 58, 58, 0.6);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 8px;\n  color: var(--text-secondary);\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell-wrapper[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 1;\n  color: rgba(255, 255, 255, 0.6);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:hover:not(.disabled), \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell-wrapper[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:hover:not(.disabled) {\n  background: rgba(74, 158, 255, 0.1);\n  border-color: rgba(74, 158, 255, 0.3);\n  color: var(--text-primary);\n  transform: translateY(-1px);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:hover:not(.disabled)   i[_ngcontent-%COMP%], \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell-wrapper[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:hover:not(.disabled)   i[_ngcontent-%COMP%] {\n  color: rgba(74, 158, 255, 0.9);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .action-btn.disabled[_ngcontent-%COMP%], \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell-wrapper[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .action-btn.disabled[_ngcontent-%COMP%] {\n  opacity: 0.9;\n  cursor: not-allowed;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .action-btn.disabled[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell-wrapper[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .action-btn.disabled[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%], \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell-wrapper[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   .action-text[_ngcontent-%COMP%], \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell-wrapper[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   .action-text[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .modern-icon-btn[_ngcontent-%COMP%], \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell-wrapper[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .modern-icon-btn[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  min-width: 36px;\n  min-height: 36px;\n  padding: 0;\n  background: rgba(30, 30, 30, 0.9);\n  border: 1.5px solid rgba(100, 100, 100, 0.3);\n  border-radius: 8px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.05);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .modern-icon-btn[_ngcontent-%COMP%]::before, \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell-wrapper[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .modern-icon-btn[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.1) 0%,\n      transparent 100%);\n  opacity: 0;\n  transition: opacity 0.25s ease;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .modern-icon-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell-wrapper[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .modern-icon-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n  position: relative;\n  z-index: 1;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  display: inline-block;\n  color: rgba(220, 220, 220, 0.8);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .modern-icon-btn.edit-action[_ngcontent-%COMP%], \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell-wrapper[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .modern-icon-btn.edit-action[_ngcontent-%COMP%] {\n  color: rgba(220, 220, 220, 0.8);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .modern-icon-btn.edit-action[_ngcontent-%COMP%]:hover, \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell-wrapper[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .modern-icon-btn.edit-action[_ngcontent-%COMP%]:hover {\n  background: rgba(50, 50, 50, 0.95);\n  border-color: rgba(180, 180, 180, 0.6);\n  color: #ffffff;\n  transform: translateY(-2px) scale(1.05);\n  box-shadow:\n    0 4px 12px rgba(0, 0, 0, 0.5),\n    0 2px 6px rgba(0, 0, 0, 0.4),\n    inset 0 1px 2px rgba(255, 255, 255, 0.15);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .modern-icon-btn.edit-action[_ngcontent-%COMP%]:hover::before, \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell-wrapper[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .modern-icon-btn.edit-action[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .modern-icon-btn.edit-action[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell-wrapper[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .modern-icon-btn.edit-action[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: scale(1.15) rotate(-5deg);\n  color: #ffffff;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .modern-icon-btn.edit-action[_ngcontent-%COMP%]:active, \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell-wrapper[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .modern-icon-btn.edit-action[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(1);\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(0, 0, 0, 0.3);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .modern-icon-btn.delete-action[_ngcontent-%COMP%], \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell-wrapper[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .modern-icon-btn.delete-action[_ngcontent-%COMP%] {\n  color: rgba(220, 220, 220, 0.8);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .modern-icon-btn.delete-action[_ngcontent-%COMP%]:hover, \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell-wrapper[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .modern-icon-btn.delete-action[_ngcontent-%COMP%]:hover {\n  background: rgba(40, 40, 40, 0.95);\n  border-color: rgba(150, 150, 150, 0.6);\n  color: #ffffff;\n  transform: translateY(-2px) scale(1.05);\n  box-shadow:\n    0 4px 12px rgba(0, 0, 0, 0.5),\n    0 2px 6px rgba(0, 0, 0, 0.4),\n    inset 0 1px 2px rgba(255, 255, 255, 0.15);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .modern-icon-btn.delete-action[_ngcontent-%COMP%]:hover::before, \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell-wrapper[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .modern-icon-btn.delete-action[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .modern-icon-btn.delete-action[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell-wrapper[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .modern-icon-btn.delete-action[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: scale(1.15);\n  color: #ffffff;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .modern-icon-btn.delete-action[_ngcontent-%COMP%]:active, \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .actions-cell-wrapper[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .modern-icon-btn.delete-action[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(1);\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(0, 0, 0, 0.3);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .task-title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  min-height: 32px;\n  line-height: 32px;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .task-title-row[_ngcontent-%COMP%]:hover   .task-title.clickable[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .task-title[_ngcontent-%COMP%] {\n  flex: 1;\n  font-weight: 500;\n  font-size: 0.9rem;\n  color: var(--text-primary);\n  line-height: 1.5;\n  word-wrap: break-word;\n  white-space: normal;\n  min-width: 0;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .task-title.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: color 0.15s ease;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .task-title.clickable[_ngcontent-%COMP%]:hover {\n  color: #4a9eff;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .task-count[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: rgba(255, 255, 255, 0.6);\n  font-weight: 600;\n  padding: 1px 6px;\n  background: rgba(74, 158, 255, 0.12);\n  border-radius: 6px;\n  border: 1px solid rgba(74, 158, 255, 0.2);\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .periodic-task-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 3px 9px;\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: rgba(196, 181, 253, 0.95);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(124, 58, 237, 0.15) 0%,\n      rgba(124, 58, 237, 0.08) 100%);\n  border: 1px solid rgba(124, 58, 237, 0.3);\n  border-radius: 7px;\n  white-space: nowrap;\n  flex-shrink: 0;\n  cursor: pointer;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 2px 4px rgba(124, 58, 237, 0.1);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .periodic-task-btn[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.08),\n      transparent);\n  transition: left 0.5s ease;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .periodic-task-btn[_ngcontent-%COMP%]   .periodic-icon-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 16px;\n  height: 16px;\n  background: rgba(124, 58, 237, 0.2);\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .periodic-task-btn[_ngcontent-%COMP%]   .periodic-icon-wrapper[_ngcontent-%COMP%]   .periodic-icon[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  line-height: 1;\n  color: rgb(196, 181, 253);\n  display: block;\n  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .periodic-task-btn[_ngcontent-%COMP%]   .periodic-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 5px;\n  line-height: 1;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .periodic-task-btn[_ngcontent-%COMP%]   .periodic-content[_ngcontent-%COMP%]   .periodic-label[_ngcontent-%COMP%] {\n  font-size: 0.63rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: rgba(196, 181, 253, 0.85);\n  opacity: 0.9;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .periodic-task-btn[_ngcontent-%COMP%]   .periodic-content[_ngcontent-%COMP%]   .periodic-id[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: rgb(196, 181, 253);\n  letter-spacing: 0.2px;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .periodic-task-btn[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(124, 58, 237, 0.22) 0%,\n      rgba(124, 58, 237, 0.12) 100%);\n  border-color: rgba(124, 58, 237, 0.4);\n  color: rgb(196, 181, 253);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 10px rgba(124, 58, 237, 0.25);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .periodic-task-btn[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .periodic-task-btn[_ngcontent-%COMP%]:hover   .periodic-icon-wrapper[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.3);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .periodic-task-btn[_ngcontent-%COMP%]:hover   .periodic-icon-wrapper[_ngcontent-%COMP%]   .periodic-icon[_ngcontent-%COMP%] {\n  transform: rotate(-180deg);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .periodic-task-btn[_ngcontent-%COMP%]:hover   .periodic-content[_ngcontent-%COMP%]   .periodic-label[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .periodic-task-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n  box-shadow: 0 2px 6px rgba(124, 58, 237, 0.2);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .expand-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  color: rgba(255, 255, 255, 0.5);\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n  min-width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .expand-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 10px;\n  transition: transform 0.2s ease;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .expand-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(74, 158, 255, 0.15);\n  border-color: rgba(74, 158, 255, 0.3);\n  color: rgba(255, 255, 255, 0.9);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .expand-btn[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .expand-btn.expanded[_ngcontent-%COMP%] {\n  background: rgba(74, 158, 255, 0.2);\n  border-color: rgba(74, 158, 255, 0.4);\n  color: #4a9eff;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .expand-btn.subtask-expand-btn[_ngcontent-%COMP%] {\n  min-width: 20px;\n  height: 20px;\n  margin-right: 8px;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .task-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  opacity: 0.6;\n  transition: opacity 0.2s ease;\n  margin-left: 0;\n  flex-shrink: 0;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .task-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 22px;\n  height: 22px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 4px;\n  color: rgba(255, 255, 255, 0.5);\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 0.7rem;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .task-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 10px;\n  line-height: 1;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .task-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:hover:not(.disabled) {\n  background: rgba(74, 158, 255, 0.2);\n  border-color: rgba(74, 158, 255, 0.4);\n  color: #4a9eff;\n  transform: translateY(-1px);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .task-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:hover:not(.disabled)   i[_ngcontent-%COMP%] {\n  color: #4a9eff;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .task-actions[_ngcontent-%COMP%]   .action-btn.disabled[_ngcontent-%COMP%] {\n  opacity: 0.9;\n  cursor: not-allowed;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .task-actions[_ngcontent-%COMP%]   .action-btn.disabled[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .task-title-row[_ngcontent-%COMP%]:hover   .task-actions[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .task-progress-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 2px;\n  padding-left: 4px;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .task-progress-row[_ngcontent-%COMP%]   .progress-bar-inline[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 6px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 3px;\n  overflow: hidden;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .task-progress-row[_ngcontent-%COMP%]   .progress-bar-inline[_ngcontent-%COMP%]   .progress-fill-inline[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #4a9eff,\n      #7c3aed);\n  border-radius: 3px;\n  transition: width 0.3s ease;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .task-progress-row[_ngcontent-%COMP%]   .progress-text-inline[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-secondary);\n  min-width: 35px;\n  text-align: right;\n  flex-shrink: 0;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .task-meta-row[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex-wrap: nowrap;\n  gap: 8px;\n  margin-top: 5px;\n  padding-left: 4px;\n  width: 100%;\n  max-width: 100%;\n  box-sizing: border-box;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .task-meta-row[_ngcontent-%COMP%]   .remarks-indicator[_ngcontent-%COMP%] {\n  position: relative;\n  background: rgba(74, 158, 255, 0.08);\n  border: 1px solid rgba(74, 158, 255, 0.15);\n  border-radius: 6px;\n  cursor: pointer;\n  padding: 4px 8px;\n  transition: all 0.2s ease;\n  line-height: 1.2;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n  flex-shrink: 0;\n  white-space: nowrap;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .task-meta-row[_ngcontent-%COMP%]   .remarks-indicator[_ngcontent-%COMP%]:hover {\n  background: rgba(74, 158, 255, 0.12);\n  border-color: rgba(74, 158, 255, 0.25);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .task-meta-row[_ngcontent-%COMP%]   .remarks-indicator[_ngcontent-%COMP%]:active {\n  background: rgba(74, 158, 255, 0.1);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .task-meta-row[_ngcontent-%COMP%]   .remarks-indicator[_ngcontent-%COMP%]   .remarks-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 500;\n  color: rgba(74, 158, 255, 0.75);\n  letter-spacing: 0.2px;\n  text-transform: uppercase;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .task-meta-row[_ngcontent-%COMP%]   .remarks-indicator[_ngcontent-%COMP%]   .remarks-badge[_ngcontent-%COMP%] {\n  background: rgba(74, 158, 255, 0.2);\n  color: rgba(74, 158, 255, 0.9);\n  font-size: 0.65rem;\n  font-weight: 600;\n  padding: 2px 5px;\n  border-radius: 4px;\n  min-width: 16px;\n  height: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 1;\n  border: 1px solid rgba(74, 158, 255, 0.2);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .task-meta-row[_ngcontent-%COMP%]   .description-indicator[_ngcontent-%COMP%] {\n  position: relative;\n  background: rgba(124, 58, 237, 0.08);\n  border: 1px solid rgba(124, 58, 237, 0.15);\n  border-radius: 6px;\n  padding: 4px 8px;\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  flex: 1;\n  min-width: 0;\n  transition: all 0.2s ease;\n  overflow: hidden;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .task-meta-row[_ngcontent-%COMP%]   .description-indicator[_ngcontent-%COMP%]:hover {\n  background: rgba(124, 58, 237, 0.12);\n  border-color: rgba(124, 58, 237, 0.25);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .task-meta-row[_ngcontent-%COMP%]   .description-indicator[_ngcontent-%COMP%]   .description-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 500;\n  color: rgba(124, 58, 237, 0.75);\n  letter-spacing: 0.2px;\n  text-transform: uppercase;\n  flex-shrink: 0;\n  white-space: nowrap;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .task-meta-row[_ngcontent-%COMP%]   .description-indicator[_ngcontent-%COMP%]   .description-text[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--text-secondary);\n  line-height: 1.3;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  flex: 1;\n  min-width: 0;\n  font-style: italic;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .task-meta-row[_ngcontent-%COMP%]   .remarks-tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: calc(100% + 8px);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(30, 30, 30, 0.98) 0%,\n      rgba(42, 42, 42, 0.98) 100%);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border: 1.5px solid rgba(74, 158, 255, 0.3);\n  border-radius: 12px;\n  box-shadow:\n    0 8px 24px rgba(0, 0, 0, 0.5),\n    0 4px 12px rgba(74, 158, 255, 0.2),\n    inset 0 1px 0 rgba(255, 255, 255, 0.1);\n  z-index: 1000;\n  min-width: 280px;\n  max-width: 400px;\n  animation: _ngcontent-%COMP%_tooltipFadeIn 0.2s ease-out;\n  overflow: hidden;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .task-meta-row[_ngcontent-%COMP%]   .remarks-tooltip[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -6px;\n  left: 20px;\n  transform: rotate(45deg);\n  width: 12px;\n  height: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(30, 30, 30, 0.98) 0%,\n      rgba(42, 42, 42, 0.98) 100%);\n  border-left: 1.5px solid rgba(74, 158, 255, 0.3);\n  border-top: 1.5px solid rgba(74, 158, 255, 0.3);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .task-meta-row[_ngcontent-%COMP%]   .remarks-tooltip[_ngcontent-%COMP%]   .remarks-tooltip-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-bottom: 1px solid rgba(74, 158, 255, 0.2);\n  background: rgba(74, 158, 255, 0.05);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .task-meta-row[_ngcontent-%COMP%]   .remarks-tooltip[_ngcontent-%COMP%]   .remarks-tooltip-header[_ngcontent-%COMP%]   .remarks-tooltip-title[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #4a9eff;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .task-meta-row[_ngcontent-%COMP%]   .remarks-tooltip[_ngcontent-%COMP%]   .remarks-tooltip-header[_ngcontent-%COMP%]   .remarks-tooltip-close[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: var(--text-secondary);\n  font-size: 1.5rem;\n  cursor: pointer;\n  padding: 0;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n  line-height: 1;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .task-meta-row[_ngcontent-%COMP%]   .remarks-tooltip[_ngcontent-%COMP%]   .remarks-tooltip-header[_ngcontent-%COMP%]   .remarks-tooltip-close[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: var(--text-primary);\n  transform: scale(1.1);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .task-meta-row[_ngcontent-%COMP%]   .remarks-tooltip[_ngcontent-%COMP%]   .remarks-tooltip-content[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  max-height: 300px;\n  overflow-y: auto;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .task-meta-row[_ngcontent-%COMP%]   .remarks-tooltip[_ngcontent-%COMP%]   .remarks-tooltip-content[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .task-meta-row[_ngcontent-%COMP%]   .remarks-tooltip[_ngcontent-%COMP%]   .remarks-tooltip-content[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: rgba(42, 42, 42, 0.5);\n  border-radius: 3px;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .task-meta-row[_ngcontent-%COMP%]   .remarks-tooltip[_ngcontent-%COMP%]   .remarks-tooltip-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(74, 158, 255, 0.3);\n  border-radius: 3px;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .task-meta-row[_ngcontent-%COMP%]   .remarks-tooltip[_ngcontent-%COMP%]   .remarks-tooltip-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: rgba(74, 158, 255, 0.5);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .task-meta-row[_ngcontent-%COMP%]   .remarks-tooltip[_ngcontent-%COMP%]   .remarks-tooltip-content[_ngcontent-%COMP%]   .remarks-tooltip-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .task-meta-row[_ngcontent-%COMP%]   .remarks-tooltip[_ngcontent-%COMP%]   .remarks-tooltip-content[_ngcontent-%COMP%]   .remarks-tooltip-list[_ngcontent-%COMP%]   .remarks-tooltip-item[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  background: rgba(74, 158, 255, 0.08);\n  border-left: 3px solid rgba(74, 158, 255, 0.5);\n  border-radius: 6px;\n  color: var(--text-primary);\n  font-size: 0.85rem;\n  line-height: 1.5;\n  transition: all 0.2s ease;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .task-title-container[_ngcontent-%COMP%]   .task-meta-row[_ngcontent-%COMP%]   .remarks-tooltip[_ngcontent-%COMP%]   .remarks-tooltip-content[_ngcontent-%COMP%]   .remarks-tooltip-list[_ngcontent-%COMP%]   .remarks-tooltip-item[_ngcontent-%COMP%]:hover {\n  background: rgba(74, 158, 255, 0.15);\n  border-left-color: rgba(74, 158, 255, 0.8);\n  transform: translateX(2px);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .subtasks-container[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  padding-left: 24px;\n  border-left: 2px solid rgba(255, 255, 255, 0.08);\n  margin-left: 4px;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .subtasks-container[_ngcontent-%COMP%]   .subtask-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 4px;\n  padding-left: 8px;\n  position: relative;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .subtasks-container[_ngcontent-%COMP%]   .subtask-item[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: -2px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 8px;\n  height: 1px;\n  background: rgba(255, 255, 255, 0.15);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .subtasks-container[_ngcontent-%COMP%]   .subtask-item[_ngcontent-%COMP%]   .subtask-checkbox[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .subtasks-container[_ngcontent-%COMP%]   .subtask-item[_ngcontent-%COMP%]   .subtask-checkbox[_ngcontent-%COMP%]   .subtask-checkbox-input[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n  accent-color: #4a9eff;\n  border-radius: 3px;\n  transition: all 0.15s ease;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .subtasks-container[_ngcontent-%COMP%]   .subtask-item[_ngcontent-%COMP%]   .subtask-checkbox[_ngcontent-%COMP%]   .subtask-checkbox-input[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: scale(1.1);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .subtasks-container[_ngcontent-%COMP%]   .subtask-item[_ngcontent-%COMP%]   .subtask-checkbox[_ngcontent-%COMP%]   .subtask-checkbox-input[_ngcontent-%COMP%]:checked {\n  background: #4a9eff;\n  border-color: #4a9eff;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .subtasks-container[_ngcontent-%COMP%]   .subtask-item[_ngcontent-%COMP%]   .subtask-checkbox[_ngcontent-%COMP%]   .subtask-checkbox-input[_ngcontent-%COMP%]:disabled, \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .subtasks-container[_ngcontent-%COMP%]   .subtask-item[_ngcontent-%COMP%]   .subtask-checkbox[_ngcontent-%COMP%]   .subtask-checkbox-input.disabled[_ngcontent-%COMP%] {\n  opacity: 0.9;\n  cursor: not-allowed;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .subtasks-container[_ngcontent-%COMP%]   .subtask-item[_ngcontent-%COMP%]   .subtask-checkbox[_ngcontent-%COMP%]   .subtask-checkbox-input[_ngcontent-%COMP%]:disabled:hover, \n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .subtasks-container[_ngcontent-%COMP%]   .subtask-item[_ngcontent-%COMP%]   .subtask-checkbox[_ngcontent-%COMP%]   .subtask-checkbox-input.disabled[_ngcontent-%COMP%]:hover {\n  transform: none;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .subtasks-container[_ngcontent-%COMP%]   .subtask-item[_ngcontent-%COMP%]   .subtask-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  flex: 1;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  padding: 6px 10px;\n  border-radius: 6px;\n  background: rgba(255, 255, 255, 0.02);\n  border: 1px solid rgba(255, 255, 255, 0.04);\n  min-width: 0;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .subtasks-container[_ngcontent-%COMP%]   .subtask-item[_ngcontent-%COMP%]   .subtask-content.level-1[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .subtasks-container[_ngcontent-%COMP%]   .subtask-item[_ngcontent-%COMP%]   .subtask-content.level-2[_ngcontent-%COMP%] {\n  margin-left: 32px;\n  padding-left: 12px;\n  background: rgba(124, 58, 237, 0.04);\n  border-color: rgba(124, 58, 237, 0.1);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .subtasks-container[_ngcontent-%COMP%]   .subtask-item[_ngcontent-%COMP%]   .subtask-content[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  border-color: rgba(74, 158, 255, 0.15);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .subtasks-container[_ngcontent-%COMP%]   .subtask-item[_ngcontent-%COMP%]   .subtask-content[_ngcontent-%COMP%]:hover.level-2 {\n  background: rgba(124, 58, 237, 0.08);\n  border-color: rgba(124, 58, 237, 0.2);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .subtasks-container[_ngcontent-%COMP%]   .subtask-item[_ngcontent-%COMP%]   .subtask-content[_ngcontent-%COMP%]   .subtask-title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  flex: 0 0 auto;\n  min-width: 0;\n  width: 100%;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .subtasks-container[_ngcontent-%COMP%]   .subtask-item[_ngcontent-%COMP%]   .subtask-content[_ngcontent-%COMP%]   .subtask-left-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex: 1;\n  min-width: 0;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .subtasks-container[_ngcontent-%COMP%]   .subtask-item[_ngcontent-%COMP%]   .subtask-content[_ngcontent-%COMP%]   .subtask-left-group[_ngcontent-%COMP%]   .expand-btn.subtask-expand-btn[_ngcontent-%COMP%] {\n  min-width: 20px;\n  height: 20px;\n  margin-right: 8px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  color: rgba(255, 255, 255, 0.5);\n  border-radius: 4px;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .subtasks-container[_ngcontent-%COMP%]   .subtask-item[_ngcontent-%COMP%]   .subtask-content[_ngcontent-%COMP%]   .subtask-left-group[_ngcontent-%COMP%]   .expand-btn.subtask-expand-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 10px;\n  transition: transform 0.2s ease;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .subtasks-container[_ngcontent-%COMP%]   .subtask-item[_ngcontent-%COMP%]   .subtask-content[_ngcontent-%COMP%]   .subtask-left-group[_ngcontent-%COMP%]   .expand-btn.subtask-expand-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(74, 158, 255, 0.15);\n  border-color: rgba(74, 158, 255, 0.3);\n  color: rgba(255, 255, 255, 0.9);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .subtasks-container[_ngcontent-%COMP%]   .subtask-item[_ngcontent-%COMP%]   .subtask-content[_ngcontent-%COMP%]   .subtask-left-group[_ngcontent-%COMP%]   .expand-btn.subtask-expand-btn[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .subtasks-container[_ngcontent-%COMP%]   .subtask-item[_ngcontent-%COMP%]   .subtask-content[_ngcontent-%COMP%]   .subtask-left-group[_ngcontent-%COMP%]   .expand-btn.subtask-expand-btn.expanded[_ngcontent-%COMP%] {\n  background: rgba(74, 158, 255, 0.2);\n  border-color: rgba(74, 158, 255, 0.4);\n  color: #4a9eff;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .subtasks-container[_ngcontent-%COMP%]   .subtask-item[_ngcontent-%COMP%]   .subtask-content[_ngcontent-%COMP%]   .subtask-title[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 0.875rem;\n  color: rgba(255, 255, 255, 0.85);\n  font-weight: 400;\n  line-height: 1.5;\n  word-wrap: break-word;\n  white-space: normal;\n  min-width: 0;\n  text-align: left;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .subtasks-container[_ngcontent-%COMP%]   .subtask-item[_ngcontent-%COMP%]   .subtask-content[_ngcontent-%COMP%]   .subtask-right-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-shrink: 0;\n  margin-left: auto;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .subtasks-container[_ngcontent-%COMP%]   .subtask-item[_ngcontent-%COMP%]   .subtask-content[_ngcontent-%COMP%]   .subtask-count[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: rgba(255, 255, 255, 0.6);\n  font-weight: 600;\n  padding: 2px 7px;\n  background: rgba(74, 158, 255, 0.12);\n  border-radius: 5px;\n  border: 1px solid rgba(74, 158, 255, 0.2);\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .subtasks-container[_ngcontent-%COMP%]   .subtask-item[_ngcontent-%COMP%]   .subtask-content[_ngcontent-%COMP%]   .subtask-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 3px;\n  opacity: 0.6;\n  transition: opacity 0.2s ease;\n  flex-shrink: 0;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .subtasks-container[_ngcontent-%COMP%]   .subtask-item[_ngcontent-%COMP%]   .subtask-content[_ngcontent-%COMP%]   .subtask-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 4px;\n  color: rgba(255, 255, 255, 0.5);\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 0.65rem;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .subtasks-container[_ngcontent-%COMP%]   .subtask-item[_ngcontent-%COMP%]   .subtask-content[_ngcontent-%COMP%]   .subtask-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 9px;\n  line-height: 1;\n  color: rgba(255, 255, 255, 0.5);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .subtasks-container[_ngcontent-%COMP%]   .subtask-item[_ngcontent-%COMP%]   .subtask-content[_ngcontent-%COMP%]   .subtask-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:hover:not(.disabled) {\n  background: rgba(74, 158, 255, 0.2);\n  border-color: rgba(74, 158, 255, 0.4);\n  color: #4a9eff;\n  transform: translateY(-1px);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .subtasks-container[_ngcontent-%COMP%]   .subtask-item[_ngcontent-%COMP%]   .subtask-content[_ngcontent-%COMP%]   .subtask-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:hover:not(.disabled)   i[_ngcontent-%COMP%] {\n  color: #4a9eff;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .subtasks-container[_ngcontent-%COMP%]   .subtask-item[_ngcontent-%COMP%]   .subtask-content[_ngcontent-%COMP%]   .subtask-actions[_ngcontent-%COMP%]   .action-btn.disabled[_ngcontent-%COMP%] {\n  opacity: 0.9;\n  cursor: not-allowed;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .subtasks-container[_ngcontent-%COMP%]   .subtask-item[_ngcontent-%COMP%]   .subtask-content[_ngcontent-%COMP%]   .subtask-actions[_ngcontent-%COMP%]   .action-btn.disabled[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .subtasks-container[_ngcontent-%COMP%]   .subtask-item[_ngcontent-%COMP%]   .subtask-content[_ngcontent-%COMP%]:hover   .subtask-actions[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .subtasks-container[_ngcontent-%COMP%]   .subtask-item[_ngcontent-%COMP%]   .subtask-content[_ngcontent-%COMP%]   .subtask-meta-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: nowrap;\n  gap: 6px;\n  margin-top: 4px;\n  padding-left: 0;\n  width: 100%;\n  max-width: 100%;\n  box-sizing: border-box;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .subtasks-container[_ngcontent-%COMP%]   .subtask-item[_ngcontent-%COMP%]   .subtask-content[_ngcontent-%COMP%]   .subtask-meta-row[_ngcontent-%COMP%]   .subtask-status-indicator[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3px 7px;\n  border-radius: 4px;\n  font-size: 0.65rem;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.85);\n  text-transform: uppercase;\n  letter-spacing: 0.2px;\n  flex-shrink: 0;\n  white-space: nowrap;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .subtasks-container[_ngcontent-%COMP%]   .subtask-item[_ngcontent-%COMP%]   .subtask-content[_ngcontent-%COMP%]   .subtask-meta-row[_ngcontent-%COMP%]   .subtask-priority-indicator[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3px 7px;\n  border-radius: 4px;\n  font-size: 0.65rem;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.85);\n  text-transform: uppercase;\n  letter-spacing: 0.2px;\n  flex-shrink: 0;\n  white-space: nowrap;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .subtasks-container[_ngcontent-%COMP%]   .subtask-item[_ngcontent-%COMP%]   .subtask-content[_ngcontent-%COMP%]   .subtask-meta-row[_ngcontent-%COMP%]   .subtask-hours-indicator[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3px 7px;\n  background: rgba(16, 185, 129, 0.08);\n  border: 1px solid rgba(16, 185, 129, 0.15);\n  border-radius: 4px;\n  font-size: 0.65rem;\n  font-weight: 500;\n  color: rgba(16, 185, 129, 0.75);\n  letter-spacing: 0.2px;\n  flex-shrink: 0;\n  white-space: nowrap;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .subtasks-container[_ngcontent-%COMP%]   .subtask-item[_ngcontent-%COMP%]   .subtask-content[_ngcontent-%COMP%]   .subtask-meta-row[_ngcontent-%COMP%]   .subtask-date-indicator[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3px 7px;\n  border-radius: 4px;\n  font-size: 0.65rem;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  flex-shrink: 0;\n  white-space: nowrap;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .subtasks-container[_ngcontent-%COMP%]   .subtask-item[_ngcontent-%COMP%]   .subtask-content[_ngcontent-%COMP%]   .subtask-meta-row[_ngcontent-%COMP%]   .subtask-date-indicator.subtask-start-date[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.08);\n  border: 1px solid rgba(59, 130, 246, 0.15);\n  color: rgba(59, 130, 246, 0.75);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .subtasks-container[_ngcontent-%COMP%]   .subtask-item[_ngcontent-%COMP%]   .subtask-content[_ngcontent-%COMP%]   .subtask-meta-row[_ngcontent-%COMP%]   .subtask-date-indicator.subtask-end-date[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.08);\n  border: 1px solid rgba(239, 68, 68, 0.15);\n  color: rgba(239, 68, 68, 0.75);\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .subtasks-container[_ngcontent-%COMP%]   .subtask-item[_ngcontent-%COMP%]   .subtask-content[_ngcontent-%COMP%]   .subtask-meta-row[_ngcontent-%COMP%]   .subtask-description-indicator[_ngcontent-%COMP%] {\n  position: relative;\n  background: rgba(124, 58, 237, 0.08);\n  border: 1px solid rgba(124, 58, 237, 0.15);\n  border-radius: 4px;\n  padding: 3px 7px;\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  flex: 1;\n  min-width: 0;\n  transition: all 0.2s ease;\n  overflow: hidden;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .subtasks-container[_ngcontent-%COMP%]   .subtask-item[_ngcontent-%COMP%]   .subtask-content[_ngcontent-%COMP%]   .subtask-meta-row[_ngcontent-%COMP%]   .subtask-description-indicator[_ngcontent-%COMP%]   .subtask-description-label[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 500;\n  color: rgba(124, 58, 237, 0.75);\n  letter-spacing: 0.2px;\n  text-transform: uppercase;\n  flex-shrink: 0;\n  white-space: nowrap;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .subtasks-container[_ngcontent-%COMP%]   .subtask-item[_ngcontent-%COMP%]   .subtask-content[_ngcontent-%COMP%]   .subtask-meta-row[_ngcontent-%COMP%]   .subtask-description-indicator[_ngcontent-%COMP%]   .subtask-description-text[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  color: var(--text-secondary);\n  line-height: 1.3;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  flex: 1;\n  min-width: 0;\n  font-style: italic;\n}\n.smart-table[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%]:first-of-type:not(.selection-cell) {\n  width: auto;\n  flex: 1;\n}\n.smart-table[_ngcontent-%COMP%]   .empty-row[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  text-align: center;\n  color: var(--text-secondary);\n}\n.smart-table[_ngcontent-%COMP%]   .empty-row[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n  opacity: 0.5;\n}\n.smart-table[_ngcontent-%COMP%]   .empty-row[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem 0;\n  color: var(--text-primary);\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n.smart-table[_ngcontent-%COMP%]   .empty-row[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n  opacity: 0.8;\n}\n.checkbox-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.checkbox-wrapper[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  opacity: 0;\n  position: absolute;\n  pointer-events: none;\n}\n.checkbox-wrapper[_ngcontent-%COMP%]   .checkbox-custom[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-radius: 4px;\n  background: transparent;\n  position: relative;\n  transition: all 0.2s ease;\n}\n.checkbox-wrapper[_ngcontent-%COMP%]   .checkbox-custom[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 2px;\n  left: 5px;\n  width: 4px;\n  height: 8px;\n  border: solid white;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n  opacity: 0;\n  transition: opacity 0.2s ease;\n}\n.checkbox-wrapper[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .checkbox-custom[_ngcontent-%COMP%] {\n  background: #4a9eff;\n  border-color: #4a9eff;\n}\n.checkbox-wrapper[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .checkbox-custom[_ngcontent-%COMP%]::after {\n  opacity: 1;\n}\n.checkbox-wrapper[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:indeterminate    + .checkbox-custom[_ngcontent-%COMP%] {\n  background: #4a9eff;\n  border-color: #4a9eff;\n}\n.checkbox-wrapper[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:indeterminate    + .checkbox-custom[_ngcontent-%COMP%]::after {\n  content: "";\n  width: 8px;\n  height: 2px;\n  top: 7px;\n  left: 3px;\n  border: none;\n  background: white;\n  transform: none;\n  opacity: 1;\n}\n.checkbox-wrapper[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled    + .checkbox-custom[_ngcontent-%COMP%], \n.checkbox-wrapper[_ngcontent-%COMP%]   .checkbox-custom.disabled[_ngcontent-%COMP%] {\n  opacity: 0.4;\n  cursor: not-allowed;\n  border-color: rgba(255, 255, 255, 0.1);\n  background: rgba(255, 255, 255, 0.05);\n}\n.checkbox-wrapper[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled    + .checkbox-custom[_ngcontent-%COMP%]::after, \n.checkbox-wrapper[_ngcontent-%COMP%]   .checkbox-custom.disabled[_ngcontent-%COMP%]::after {\n  opacity: 0.3;\n}\n.checkbox-wrapper[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled:checked    + .checkbox-custom[_ngcontent-%COMP%], \n.checkbox-wrapper[_ngcontent-%COMP%]   .checkbox-custom.disabled.checked[_ngcontent-%COMP%] {\n  background: rgba(74, 158, 255, 0.3);\n  border-color: rgba(74, 158, 255, 0.3);\n}\n.checkbox-wrapper[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled:checked    + .checkbox-custom[_ngcontent-%COMP%]::after, \n.checkbox-wrapper[_ngcontent-%COMP%]   .checkbox-custom.disabled.checked[_ngcontent-%COMP%]::after {\n  opacity: 0.6;\n}\n.pagination-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem;\n  background: rgba(42, 42, 42, 0.6);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n  flex-shrink: 0;\n}\n@media (max-width: 768px) {\n  .pagination-wrapper[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n  }\n}\n.pagination-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  color: var(--text-secondary);\n  font-size: 0.9rem;\n}\n.pagination-info[_ngcontent-%COMP%]   .page-info[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.pagination-info[_ngcontent-%COMP%]   .page-size-selector[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.pagination-info[_ngcontent-%COMP%]   .page-size-selector[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.9rem;\n}\n.pagination-info[_ngcontent-%COMP%]   .page-size-selector[_ngcontent-%COMP%]   .page-size-select[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  background: rgba(58, 58, 58, 0.6);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 6px;\n  color: var(--text-primary);\n  font-size: 0.9rem;\n}\n.pagination-info[_ngcontent-%COMP%]   .page-size-selector[_ngcontent-%COMP%]   .page-size-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: rgba(74, 158, 255, 0.3);\n}\n.pagination-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.pagination-controls[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  background: rgba(58, 58, 58, 0.6);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 8px;\n  color: var(--text-primary);\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.pagination-controls[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%]:hover:not(.disabled) {\n  background: rgba(74, 158, 255, 0.1);\n  border-color: rgba(74, 158, 255, 0.3);\n}\n.pagination-controls[_ngcontent-%COMP%]   .pagination-btn.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.pagination-controls[_ngcontent-%COMP%]   .page-numbers[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.25rem;\n}\n.pagination-controls[_ngcontent-%COMP%]   .page-numbers[_ngcontent-%COMP%]   .page-number[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  background: rgba(58, 58, 58, 0.6);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 8px;\n  color: var(--text-primary);\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.pagination-controls[_ngcontent-%COMP%]   .page-numbers[_ngcontent-%COMP%]   .page-number[_ngcontent-%COMP%]:hover {\n  background: rgba(74, 158, 255, 0.1);\n  border-color: rgba(74, 158, 255, 0.3);\n}\n.pagination-controls[_ngcontent-%COMP%]   .page-numbers[_ngcontent-%COMP%]   .page-number.active[_ngcontent-%COMP%] {\n  background: #4a9eff;\n  border-color: #4a9eff;\n  color: white;\n}\n@media (max-width: 1024px) {\n  .smart-table-container[_ngcontent-%COMP%] {\n    border-radius: 12px;\n  }\n  .table-header[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .table-controls[_ngcontent-%COMP%] {\n    gap: 1rem;\n  }\n  .search-input-wrapper[_ngcontent-%COMP%] {\n    max-width: 300px;\n  }\n}\n@media (max-width: 768px) {\n  .smart-table[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .smart-table[_ngcontent-%COMP%]   .table-header-cell[_ngcontent-%COMP%], \n   .smart-table[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n  }\n  .smart-table[_ngcontent-%COMP%]   .table-header-cell[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.25rem;\n  }\n  .pagination-wrapper[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .pagination-controls[_ngcontent-%COMP%]   .page-numbers[_ngcontent-%COMP%]   .page-number[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n    font-size: 0.8rem;\n  }\n}\n@media (max-width: 480px) {\n  .smart-table-container[_ngcontent-%COMP%] {\n    border-radius: 8px;\n    margin: 0.5rem;\n  }\n  .table-header[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n  }\n  .search-input-wrapper[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .table-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.5rem;\n    width: 100%;\n  }\n  .export-dropdown[_ngcontent-%COMP%], \n   .view-options[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .view-options[_ngcontent-%COMP%]   .view-btn[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.05);\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse-highlight {\n  0%, 100% {\n    box-shadow: 0 0 10px rgba(124, 58, 237, 0.3);\n  }\n  50% {\n    box-shadow: 0 0 20px rgba(124, 58, 237, 0.5);\n  }\n}\n@keyframes _ngcontent-%COMP%_expandPulse {\n  0%, 100% {\n    box-shadow:\n      0 5px 20px rgba(124, 58, 237, 0.3),\n      0 2px 8px rgba(0, 0, 0, 0.2),\n      inset 0 1px 0 rgba(255, 255, 255, 0.15);\n  }\n  50% {\n    box-shadow:\n      0 7px 25px rgba(124, 58, 237, 0.4),\n      0 3px 12px rgba(0, 0, 0, 0.3),\n      inset 0 1px 0 rgba(255, 255, 255, 0.2);\n  }\n}\n@keyframes _ngcontent-%COMP%_scheduleOverlapBlink {\n  0%, 100% {\n    background: rgba(239, 68, 68, 0.08);\n    border-color: rgba(239, 68, 68, 0.4);\n    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.3);\n  }\n  50% {\n    background: rgba(239, 68, 68, 0.15);\n    border-color: rgba(239, 68, 68, 0.6);\n    box-shadow: 0 0 8px 2px rgba(239, 68, 68, 0.5);\n  }\n}\n.schedule-overlap[_ngcontent-%COMP%] {\n  color: var(--text-primary) !important;\n  font-weight: 500;\n  padding: 2px 6px;\n  border-radius: 4px;\n  background: rgba(239, 68, 68, 0.08);\n  border: 1px solid rgba(239, 68, 68, 0.4);\n  position: relative;\n  animation: _ngcontent-%COMP%_scheduleOverlapBlink 2s ease-in-out infinite;\n  transition: all 0.2s ease;\n}\n.schedule-overlap[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: -2px;\n  border-radius: 5px;\n  background: rgba(239, 68, 68, 0.1);\n  z-index: -1;\n  opacity: 0;\n  transition: opacity 0.2s ease;\n}\n.schedule-overlap[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.18);\n  border-color: rgba(239, 68, 68, 0.7);\n  animation-play-state: paused;\n}\n.schedule-overlap[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.subtasks-container[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding-left: 24px;\n  border-left: 2px solid rgba(74, 158, 255, 0.2);\n  position: relative;\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease-out;\n}\n.subtasks-container[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: -1px;\n  top: 0;\n  bottom: 0;\n  width: 2px;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(74, 158, 255, 0.4) 0%,\n      rgba(74, 158, 255, 0.1) 50%,\n      rgba(74, 158, 255, 0.1) 100%);\n  border-radius: 1px;\n}\n.subtasks-container[_ngcontent-%COMP%]   .subtask-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 8px;\n  padding: 8px 12px;\n  border-radius: 10px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  background: rgba(255, 255, 255, 0.01);\n  border: 1px solid transparent;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease-out;\n}\n.subtasks-container[_ngcontent-%COMP%]   .subtask-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.03);\n  transform: translateX(6px);\n  border-color: rgba(74, 158, 255, 0.1);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.subtasks-container[_ngcontent-%COMP%]   .subtask-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n[_ngcontent-%COMP%]:root {\n  --text-primary: #ffffff;\n  --text-secondary: #a1a1aa;\n  --background-primary: #0f0f0f;\n  --background-secondary: #1a1a1a;\n  --border-color: rgba(255, 255, 255, 0.1);\n  --accent-color: #4a9eff;\n  --accent-secondary: #7c3aed;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n.fade-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-out;\n}\n.slide-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease-out;\n}\n/*# sourceMappingURL=data-table.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataTableComponent, [{
    type: Component,
    args: [{ selector: "app-data-table", standalone: true, imports: [CommonModule, FormsModule], template: `<!-- Modern Smart Data Table -->\r
<div class="smart-table-container">\r
  <!-- Table Header with Controls -->\r
  <div class="table-header" #headerRef *ngIf="getFilterKeys().length > 0">\r
    <!-- Search and Filter Bar -->\r
    <div class="table-controls">\r
      <div class="search-section">\r
        <div class="filter-badges" *ngIf="getFilterKeys().length > 0">\r
          <span *ngFor="let filter of getFilterKeys()"\r
                class="filter-badge">\r
            {{ filter }}: {{ filters[filter] }}\r
            <button (click)="onFilter(filter, '')" class="remove-filter">\xD7</button>\r
          </span>\r
          <button (click)="clearFilters()" class="clear-all-filters">Clear All</button>\r
        </div>\r
      </div>\r
\r
      <div class="table-actions">\r
        <!-- Export Options - Commented Out -->\r
        <!-- <div class="export-dropdown" *ngIf="config.exportable">\r
          <button class="export-btn">\r
            \u{1F4CA} Export\r
            <span class="dropdown-arrow">\u25BC</span>\r
          </button>\r
          <div class="export-menu">\r
            <button (click)="exportData('csv')" class="export-option">\u{1F4C4} CSV</button>\r
            <button (click)="exportData('json')" class="export-option">\u{1F4CB} JSON</button>\r
            <button (click)="exportData('excel')" class="export-option">\u{1F4C8} Excel</button>\r
          </div>\r
        </div> -->\r
        <!-- View Options - Commented Out -->\r
        <!-- <div class="view-options">\r
          <button class="view-btn" [class.active]="!config.pagination">\r
            \u{1F4CB} All\r
          </button>\r
          <button class="view-btn" [class.active]="config.pagination">\r
            \u{1F4C4} Paginated\r
          </button>\r
        </div> -->\r
      </div>\r
    </div>\r
\r
    <!-- Results Summary removed from header - moved to footer -->\r
  </div>\r
\r
  <!-- Loading Overlay -->\r
  <div class="loading-overlay" *ngIf="loading">\r
    <div class="loading-spinner">\r
      <div class="spinner"></div>\r
      <span>Loading...</span>\r
    </div>\r
  </div>\r
\r
  <!-- Table Container -->\r
  <div class="table-wrapper" [class.resizing]="isResizing">\r
    <table class="smart-table" #tableRef>\r
      <!-- Table Header -->\r
      <thead class="table-header-row" [class.sticky]="config.stickyHeader">\r
        <tr>\r
          <!-- Selection Column for checkbox and star -->\r
          <th class="selection-column" *ngIf="config.selectable">\r
            <div class="header-content">\r
              <span class="column-title" title="Select"></span>\r
            </div>\r
          </th>\r
\r
          <!-- Data Columns -->\r
          <th *ngFor="let column of getVisibleColumns(); trackBy: trackByColumn"\r
              class="table-header-cell"\r
              [class.sortable]="column.sortable"\r
              [class.sticky]="column.sticky"\r
              [style.width]="column.width"\r
              [style.min-width]="column.minWidth"\r
              [style.max-width]="column.maxWidth"\r
              [style.text-align]="column.align || 'left'"\r
              (click)="onSort(column)">\r
            <div class="header-content">\r
              <span class="column-title"\r
                    [title]="column.tooltip || column.title">\r
                {{ column.title }}\r
              </span>\r
\r
              <!-- Sort Indicator -->\r
              <span *ngIf="column.sortable"\r
                    class="sort-indicator"\r
                    [class.active]="sortColumn === column.key">\r
                {{ getSortIcon(column) }}\r
              </span>\r
            </div>\r
\r
\r
            <!-- Resize Handle -->\r
            <div *ngIf="column.resizable && config.resizable"\r
                 class="resize-handle"\r
                 (mousedown)="onMouseDown($event, column)"></div>\r
          </th>\r
\r
          <!-- Actions Column - Removed as requested -->\r
        </tr>\r
      </thead>\r
\r
      <!-- Table Body -->\r
      <tbody class="table-body">\r
        <!-- Empty State -->\r
        <tr *ngIf="displayedData.length === 0 && !loading" class="empty-row">\r
          <td [attr.colspan]="getVisibleColumns().length + (config.selectable ? 1 : 0) + (actions.length > 0 ? 1 : 0)">\r
            <div class="empty-state">\r
              <div class="empty-icon">\u{1F4CB}</div>\r
              <h3>{{ emptyMessage }}</h3>\r
              <p *ngIf="getFilteredCount() !== getTotalCount()">\r
                Try adjusting your search or filters\r
              </p>\r
            </div>\r
          </td>\r
        </tr>\r
\r
        <!-- Data Rows -->\r
        <tr *ngFor="let row of displayedData; trackBy: trackByRow; let i = index"\r
            class="table-row"\r
            [class.selected]="isRowSelected(row)"\r
            [class.completed]="!row['level'] && row['completed']"\r
            [class.even]="i % 2 === 0"\r
            [class.odd]="i % 2 === 1"\r
            [attr.data-task-id]="!row['level'] ? row['id'] : null"\r
            [attr.data-subtask-id]="row['level'] ? row['id'] : null">\r
          <!-- Selection Cell with checkbox and star -->\r
          <td class="selection-cell" *ngIf="config.selectable">\r
            <div class="selection-controls">\r
              <label class="checkbox-wrapper">\r
                <input type="checkbox"\r
                       *ngIf="!row['level']"\r
                       [checked]="row['completed'] || false"\r
                       [disabled]="isMainTaskDisabled(row)"\r
                       (change)="onMainTaskCheckboxChange(row, $event)"\r
                       class="row-checkbox"\r
                       [class.disabled]="isMainTaskDisabled(row)">\r
                <span class="checkbox-custom" [class.disabled]="isMainTaskDisabled(row)"></span>\r
              </label>\r
              <!-- Star icon for main tasks only -->\r
              <button *ngIf="!row['level']"\r
                      class="star-icon"\r
                      [class.important]="row['important']"\r
                      (click)="onToggleImportant(row); $event.stopPropagation()"\r
                      [title]="row['important'] ? 'Mark as not important' : 'Mark as important'">\r
                {{ row['important'] ? '\u2605' : '\u2606' }}\r
              </button>\r
            </div>\r
          </td>\r
\r
          <!-- Data Cells -->\r
          <td *ngFor="let column of getVisibleColumns(); trackBy: trackByColumn"\r
              class="table-cell"\r
              [class.sticky]="column.sticky"\r
              [style.width]="column.width"\r
              [style.min-width]="column.minWidth"\r
              [style.max-width]="column.maxWidth"\r
              [style.text-align]="column.align || 'left'">\r
            <div class="cell-content">\r
              <!-- Custom Template -->\r
              <ng-container *ngIf="column.type && column.type !== 'text'; else defaultCell">\r
                <ng-container [ngSwitch]="column.type">\r
                  <!-- Priority Badge -->\r
                  <span *ngSwitchCase="'priority'"\r
                        class="priority-badge"\r
                        [style.background-color]="getPriorityColor(row[column.key] || row['priorityLevel'])">\r
                    <span *ngIf="getCellValue(row, column.key); else priorityND">\r
                      {{ getCellValue(row, column.key) | titlecase }}\r
                    </span>\r
                    <ng-template #priorityND>\r
                      <span class="nd-value" title="Not defined">ND</span>\r
                    </ng-template>\r
                  </span>\r
\r
                  <!-- Status Badge -->\r
                  <span *ngSwitchCase="'status'"\r
                        class="status-badge"\r
                        [style.background-color]="getStatusColor(row[column.key])">\r
                    <span *ngIf="getCellValue(row, column.key); else statusND">\r
                      {{ (getCellValue(row, column.key) | titlecase) }}\r
                    </span>\r
                    <ng-template #statusND>\r
                      <span class="nd-value" title="Not defined">ND</span>\r
                    </ng-template>\r
                  </span>\r
\r
                  <!-- Progress Bar (Hidden for main tasks, shown only for subtasks if needed) -->\r
                  <div *ngSwitchCase="'progress'" class="progress-cell">\r
                    <div *ngIf="row['level']" class="progress-bar">\r
                      <div class="progress-fill"\r
                           [style.width.%]="getProgressPercentage(getCellValue(row, column.key))"></div>\r
                    </div>\r
                    <span *ngIf="row['level']" class="progress-text">{{ getCellValue(row, column.key) }}%</span>\r
                  </div>\r
\r
                  <!-- Date -->\r
                  <span *ngSwitchCase="'date'" class="date-cell">\r
                    <!-- For Tasks section: Always show taskOnDate, and add periodic task date tags if available -->\r
                    <ng-container *ngIf="!isPeriodicTasks">\r
                      <!-- Always show taskOnDate -->\r
                      <div class="task-on-date">\r
                        <ng-container *ngIf="getCellValue(row, column.key); else noDate">\r
                          {{ getCellValue(row, column.key) | date:'EEE, MMM dd, yyyy' }}\r
                        </ng-container>\r
                        <ng-template #noDate>\r
                          <span class="nd-value" title="Not defined">ND</span>\r
                        </ng-template>\r
                      </div>\r
                      <!-- Show periodic task dates as tags if available (only for main tasks with periodic_task AND only in taskOnDate column, not createdAt) -->\r
                      <div *ngIf="column.key === 'taskOnDate' && !row['level'] && row['periodicTask'] && row['periodicTask'].id && row['periodicTask'].startDate && row['periodicTask'].endDate"\r
                           class="periodic-task-date-panel"\r
                           [title]="'Periodic Task: ' + (row['periodicTask'].startDate | date:'EEE, MMM dd, yyyy') + ' - ' + (row['periodicTask'].endDate | date:'EEE, MMM dd, yyyy')">\r
                        <div class="periodic-date-row">\r
                          <span class="periodic-date-label">SD:</span>\r
                          <span class="periodic-date-value">{{ row['periodicTask'].startDate | date:'EEE, MMM dd, yyyy' }}</span>\r
                        </div>\r
                        <div class="periodic-date-row">\r
                          <span class="periodic-date-label">ED:</span>\r
                          <span class="periodic-date-value">{{ row['periodicTask'].endDate | date:'EEE, MMM dd, yyyy' }}</span>\r
                        </div>\r
                      </div>\r
                    </ng-container>\r
                    <!-- For Periodic Tasks section: Show startDate and endDate -->\r
                    <ng-container *ngIf="isPeriodicTasks">\r
                      <ng-container *ngIf="getCellValue(row, column.key); else noDate">\r
                        {{ getCellValue(row, column.key) | date:'EEE, MMM dd, yyyy' }}\r
                      </ng-container>\r
                      <ng-template #noDate>\r
                        <span class="nd-value" title="Not defined">ND</span>\r
                      </ng-template>\r
                    </ng-container>\r
                  </span>\r
\r
                  <!-- Boolean -->\r
                  <span *ngSwitchCase="'boolean'" class="boolean-cell">\r
                    <!-- Toggleable boolean column with toggle switch -->\r
                    <div *ngIf="column.toggleable"\r
                         class="toggle-switch-wrapper"\r
                         [title]="getCellValue(row, column.key) ? 'Turn off' : 'Turn on'">\r
                      <label class="modern-toggle-switch"\r
                             [class.active]="getCellValue(row, column.key)"\r
                             (click)="onBooleanToggle(column.key, row, $event)">\r
                        <input type="checkbox"\r
                               [checked]="getCellValue(row, column.key)"\r
                               (click)="onBooleanToggle(column.key, row, $event)"\r
                               readonly\r
                               tabindex="-1">\r
                        <span class="toggle-slider">\r
                          <span class="toggle-indicator"></span>\r
                        </span>\r
                      </label>\r
                    </div>\r
                    <!-- Non-toggleable boolean column with indicator -->\r
                    <span *ngIf="!column.toggleable"\r
                          class="boolean-indicator"\r
                          [class.true]="getCellValue(row, column.key)"\r
                          [class.false]="!getCellValue(row, column.key)">\r
                      {{ getCellValue(row, column.key) ? '\u2713' : '\u2717' }}\r
                    </span>\r
                  </span>\r
\r
                  <!-- Custom Category -->\r
                  <ng-container *ngSwitchCase="'custom'">\r
                    <!-- Color swatch for Status Master 'color' column -->\r
                    <span *ngIf="column.key === 'color'" class="color-cell" [title]="getCellValue(row, column.key)">\r
                      <span class="color-swatch" [style.background]="getCellValue(row, column.key)"></span>\r
                    </span>\r
\r
                    <!-- Default custom (Category icon/text) -->\r
                    <span *ngIf="column.key !== 'actions' && column.key !== 'color'" class="category-cell">\r
                      <ng-container *ngIf="row[column.key] && row[column.key].name; else categoryND">\r
                        <span class="category-icon">{{ getCategoryIcon(row[column.key]) }}</span>\r
                        {{ getCellValue(row, column.key) }}\r
                      </ng-container>\r
                      <ng-template #categoryND>\r
                        <span class="nd-value" title="Not defined">ND</span>\r
                      </ng-template>\r
                    </span>\r
\r
                    <!-- Actions Column -->\r
                    <div *ngIf="column.key === 'actions'" class="actions-cell-wrapper">\r
                      <div class="action-buttons">\r
                        <ng-container *ngFor="let action of actions">\r
                          <!-- Modern Toggle Switch for Active/Deactivate -->\r
                          <div *ngIf="action.action === 'toggle-active'"\r
                               class="toggle-switch-wrapper"\r
                               [title]="row['is_active'] ? 'Deactivate' : 'Activate'">\r
                            <label class="modern-toggle-switch" [class.active]="row['is_active']" (click)="onActionClick(action, row, $event)">\r
                              <input type="checkbox"\r
                                     [checked]="row['is_active']"\r
                                     (click)="onActionClick(action, row, $event)"\r
                                     readonly\r
                                     tabindex="-1">\r
                              <span class="toggle-slider">\r
                                <span class="toggle-indicator"></span>\r
                              </span>\r
                            </label>\r
                          </div>\r
\r
                          <!-- Regular Action Buttons -->\r
                          <button *ngIf="action.action !== 'toggle-active'"\r
                                  class="action-btn modern-icon-btn"\r
                                  [class.edit-action]="action.action === 'edit'"\r
                                  [class.delete-action]="action.action === 'delete'"\r
                                  [title]="action.label"\r
                                  (click)="onActionClick(action, row, $event)">\r
                            <i *ngIf="action.icon && action.icon.startsWith('fa-')" [class]="'fas ' + action.icon"></i>\r
                            <span *ngIf="action.icon && !action.icon.startsWith('fa-')">{{ action.icon }}</span>\r
                          </button>\r
                        </ng-container>\r
                      </div>\r
                    </div>\r
                  </ng-container>\r
\r
                  <!-- URLs -->\r
                  <div *ngSwitchCase="'urls'" class="urls-cell">\r
                    <div *ngIf="getUrlsArray(getCellValue(row, column.key)).length > 0">\r
                      <div *ngFor="let urlItem of getUrlsArray(getCellValue(row, column.key))" class="url-item">\r
                        <a [href]="urlItem.url"\r
                           target="_blank"\r
                           class="url-link"\r
                           [title]="urlItem.label">\r
                          <span class="url-label-truncated">{{ urlItem.label }}</span>\r
                        </a>\r
                        <!-- Credential Lock Icon (similar to notes section) -->\r
                        <span *ngIf="urlItem.credentials && urlItem.credentials.length > 0"\r
                              class="credential-tag-note"\r
                              [title]="getCredentialTooltip(urlItem.credentials)"\r
                              (click)="$event.stopPropagation()">\r
                          <i class="fas fa-lock"></i>\r
                          <span class="credential-count-note">{{ urlItem.credentials.length }}</span>\r
                        </span>\r
                      </div>\r
                    </div>\r
                    <span *ngIf="getUrlsArray(getCellValue(row, column.key)).length === 0" class="no-docs">\r
                      No docs\r
                    </span>\r
                  </div>\r
\r
                  <!-- Remarks -->\r
                  <div *ngSwitchCase="'remarks'" class="remarks-cell">\r
                    <ul *ngIf="getRemarksArray(getCellValue(row, column.key)).length > 0" class="remarks-list">\r
                      <li *ngFor="let remark of getRemarksArray(getCellValue(row, column.key))" class="remark-item">\r
                        {{ remark }}\r
                      </li>\r
                    </ul>\r
                    <span *ngIf="getRemarksArray(getCellValue(row, column.key)).length === 0" class="no-remarks">\r
                      No remarks\r
                    </span>\r
                  </div>\r
\r
                  <!-- Password (masked with show/hide toggle) -->\r
                  <div *ngSwitchCase="'password'" class="password-cell">\r
                    <div class="password-display">\r
                      <span *ngIf="!isPasswordVisible(row, column.key)" class="password-masked">\r
                        {{ maskPassword(getCellValue(row, column.key)) }}\r
                      </span>\r
                      <span *ngIf="isPasswordVisible(row, column.key)" class="password-visible">\r
                        {{ getCellValue(row, column.key) || '-' }}\r
                      </span>\r
                      <button class="password-toggle-btn"\r
                              (click)="togglePasswordVisibility(row, column.key); $event.stopPropagation()"\r
                              [title]="isPasswordVisible(row, column.key) ? 'Hide password' : 'Show password'">\r
                        <i class="fas" [class.fa-eye]="!isPasswordVisible(row, column.key)" [class.fa-eye-slash]="isPasswordVisible(row, column.key)"></i>\r
                      </button>\r
                    </div>\r
                  </div>\r
\r
                  <!-- Additional Fields (JSON formatted) -->\r
                  <div *ngSwitchCase="'json'" class="json-cell">\r
                    <div *ngIf="getCellValue(row, column.key) && getCellValue(row, column.key) !== '{}'">\r
                      <div class="json-preview" [title]="formatAdditionalFields(getCellValue(row, column.key))">\r
                        {{ formatAdditionalFieldsPreview(getCellValue(row, column.key)) }}\r
                      </div>\r
                    </div>\r
                    <span *ngIf="!getCellValue(row, column.key) || getCellValue(row, column.key) === '{}'">-</span>\r
                  </div>\r
\r
                  <!-- Credentials (Accessible To) -->\r
                  <div *ngSwitchCase="'credentials'" class="credentials-cell">\r
                    <div *ngIf="getCredentialsArray(getCellValue(row, column.key)).length > 0">\r
                      <div class="credentials-list">\r
                        <span *ngFor="let cred of getCredentialsArray(getCellValue(row, column.key)); let last = last"\r
                              class="credential-badge"\r
                              [title]="cred.provider + ' - ' + cred.credential_name + ' (' + cred.credential_id + ')'">\r
                          {{ cred.provider }} - {{ cred.credential_name }}\r
                        </span>\r
                      </div>\r
                    </div>\r
                    <span *ngIf="getCredentialsArray(getCellValue(row, column.key)).length === 0" class="public-access">\r
                      <i class="fas fa-globe"></i> Public\r
                    </span>\r
                  </div>\r
\r
                  <!-- Default -->\r
                  <span *ngSwitchDefault class="default-cell">\r
                    <span *ngIf="column.key === 'id'">#{{ getCellValue(row, column.key) || '-' }}</span>\r
                    <span *ngIf="column.key !== 'id' && column.key !== 'priorityOrder' && column.key !== 'startTime' && column.key !== 'endTime' && column.key !== 'hours'">\r
                      {{ getCellValue(row, column.key) || '-' }}\r
                    </span>\r
                    <!-- Priority Order - show ND if null/empty -->\r
                    <span *ngIf="column.key === 'priorityOrder' && (getCellValue(row, column.key) == null || getCellValue(row, column.key) === '' || getCellValue(row, column.key) === 'null' || getCellValue(row, column.key) === 'nullh')"\r
                          class="nd-value"\r
                          title="Not defined">\r
                      ND\r
                    </span>\r
                    <span *ngIf="column.key === 'priorityOrder' && getCellValue(row, column.key) != null && getCellValue(row, column.key) !== '' && getCellValue(row, column.key) !== 'null' && getCellValue(row, column.key) !== 'nullh'"\r
                          [class.schedule-overlap]="row['hasOrderMismatch']">\r
                      {{ getCellValue(row, column.key) }}\r
                    </span>\r
                    <!-- Start Time - show ND if null/empty or if both startTime and endTime are 00:00 -->\r
                    <span *ngIf="column.key === 'startTime' && ((getCellValue(row, column.key) == null || getCellValue(row, column.key) === '' || getCellValue(row, column.key) === 'null' || getCellValue(row, column.key) === 'nullh') || (getCellValue(row, 'startTime') === '00:00' && getCellValue(row, 'endTime') === '00:00'))"\r
                          class="nd-value"\r
                          title="Not defined">\r
                      ND\r
                    </span>\r
                    <span *ngIf="column.key === 'startTime' && getCellValue(row, column.key) != null && getCellValue(row, column.key) !== '' && getCellValue(row, column.key) !== 'null' && getCellValue(row, column.key) !== 'nullh' && !(getCellValue(row, 'startTime') === '00:00' && getCellValue(row, 'endTime') === '00:00')"\r
                          [class.schedule-overlap]="row['hasScheduleOverlap']">\r
                      {{ getCellValue(row, column.key) }}\r
                    </span>\r
                    <!-- End Time - show ND if null/empty or if both startTime and endTime are 00:00 -->\r
                    <span *ngIf="column.key === 'endTime' && ((getCellValue(row, column.key) == null || getCellValue(row, column.key) === '' || getCellValue(row, column.key) === 'null' || getCellValue(row, column.key) === 'nullh') || (getCellValue(row, 'startTime') === '00:00' && getCellValue(row, 'endTime') === '00:00'))"\r
                          class="nd-value"\r
                          title="Not defined">\r
                      ND\r
                    </span>\r
                    <span *ngIf="column.key === 'endTime' && getCellValue(row, column.key) != null && getCellValue(row, column.key) !== '' && getCellValue(row, column.key) !== 'null' && getCellValue(row, column.key) !== 'nullh' && !(getCellValue(row, 'startTime') === '00:00' && getCellValue(row, 'endTime') === '00:00')"\r
                          [class.schedule-overlap]="row['hasScheduleOverlap']">\r
                      {{ getCellValue(row, column.key) }}\r
                    </span>\r
                    <!-- Hours column with Hours Per Day for periodic tasks -->\r
                    <span *ngIf="column.key === 'hours' && (getCellValue(row, column.key) == null || getCellValue(row, column.key) === '' || getCellValue(row, column.key) === 'null' || getCellValue(row, column.key) === 'nullh')"\r
                          class="nd-value"\r
                          title="Not defined">\r
                      ND\r
                    </span>\r
                    <div *ngIf="column.key === 'hours' && getCellValue(row, column.key) != null && getCellValue(row, column.key) !== '' && getCellValue(row, column.key) !== 'null' && getCellValue(row, column.key) !== 'nullh'"\r
                         class="hours-cell"\r
                         [class.schedule-overlap]="row['hasHoursMismatch']">\r
                      <span class="hours-main">{{ getHoursDisplay(row) }}</span>\r
                      <span *ngIf="isPeriodicTasks && getHoursPerDay(row) != null"\r
                            class="hours-per-day-badge"\r
                            [title]="'Hours per day: ' + getHoursPerDay(row) + 'h'">\r
                        {{ getHoursPerDay(row) }}h/day\r
                      </span>\r
                    </div>\r
                  </span>\r
                </ng-container>\r
              </ng-container>\r
\r
              <!-- Default Cell Template -->\r
              <ng-template #defaultCell>\r
                <div class="default-cell"\r
                     [class.task-cell]="column.key === 'title'">\r
                  <!-- Priority Order - show ND if null/empty -->\r
                  <span *ngIf="column.key === 'priorityOrder' && (getCellValue(row, column.key) == null || getCellValue(row, column.key) === '' || getCellValue(row, column.key) === 'null' || getCellValue(row, column.key) === 'nullh')"\r
                        class="nd-value"\r
                        title="Not defined">\r
                    ND\r
                  </span>\r
                  <span *ngIf="column.key === 'priorityOrder' && getCellValue(row, column.key) != null && getCellValue(row, column.key) !== '' && getCellValue(row, column.key) !== 'null' && getCellValue(row, column.key) !== 'nullh'"\r
                        [class.schedule-overlap]="row['hasOrderMismatch']">\r
                    {{ getCellValue(row, column.key) }}\r
                  </span>\r
                  <!-- Start Time - show ND if null/empty or if both startTime and endTime are 00:00 -->\r
                  <span *ngIf="column.key === 'startTime' && ((getCellValue(row, column.key) == null || getCellValue(row, column.key) === '' || getCellValue(row, column.key) === 'null' || getCellValue(row, column.key) === 'nullh') || (getCellValue(row, 'startTime') === '00:00' && getCellValue(row, 'endTime') === '00:00'))"\r
                        class="nd-value"\r
                        title="Not defined">\r
                    ND\r
                  </span>\r
                  <span *ngIf="column.key === 'startTime' && getCellValue(row, column.key) != null && getCellValue(row, column.key) !== '' && getCellValue(row, column.key) !== 'null' && getCellValue(row, column.key) !== 'nullh' && !(getCellValue(row, 'startTime') === '00:00' && getCellValue(row, 'endTime') === '00:00')"\r
                        [class.schedule-overlap]="row['hasScheduleOverlap']">\r
                    {{ getCellValue(row, column.key) }}\r
                  </span>\r
                  <!-- End Time - show ND if null/empty or if both startTime and endTime are 00:00 -->\r
                  <span *ngIf="column.key === 'endTime' && ((getCellValue(row, column.key) == null || getCellValue(row, column.key) === '' || getCellValue(row, column.key) === 'null' || getCellValue(row, column.key) === 'nullh') || (getCellValue(row, 'startTime') === '00:00' && getCellValue(row, 'endTime') === '00:00'))"\r
                        class="nd-value"\r
                        title="Not defined">\r
                    ND\r
                  </span>\r
                  <span *ngIf="column.key === 'endTime' && getCellValue(row, column.key) != null && getCellValue(row, column.key) !== '' && getCellValue(row, column.key) !== 'null' && getCellValue(row, column.key) !== 'nullh' && !(getCellValue(row, 'startTime') === '00:00' && getCellValue(row, 'endTime') === '00:00')"\r
                        [class.schedule-overlap]="row['hasScheduleOverlap']">\r
                    {{ getCellValue(row, column.key) }}\r
                  </span>\r
                  <!-- Show - for other columns when null/empty -->\r
                  <span *ngIf="!getCellValue(row, column.key) && column.key !== 'priorityOrder' && column.key !== 'startTime' && column.key !== 'endTime' && column.key !== 'hours'">-</span>\r
                  <span *ngIf="getCellValue(row, column.key) && column.key === 'id'">{{ getCellValue(row, column.key) }}</span>\r
                  <!-- Hours column with Hours Per Day for periodic tasks -->\r
                  <span *ngIf="column.key === 'hours' && (getCellValue(row, column.key) == null || getCellValue(row, column.key) === '' || getCellValue(row, column.key) === 'null' || getCellValue(row, column.key) === 'nullh')"\r
                        class="nd-value"\r
                        title="Not defined">\r
                    ND\r
                  </span>\r
                  <div *ngIf="column.key === 'hours' && getCellValue(row, column.key) != null && getCellValue(row, column.key) !== '' && getCellValue(row, column.key) !== 'null' && getCellValue(row, column.key) !== 'nullh'"\r
                       class="hours-cell"\r
                       [class.schedule-overlap]="row['hasHoursMismatch']">\r
                    <span class="hours-main">{{ getHoursDisplay(row) }}</span>\r
                    <span *ngIf="isPeriodicTasks && getHoursPerDay(row) != null"\r
                          class="hours-per-day-badge"\r
                          [title]="'Hours per day: ' + getHoursPerDay(row) + 'h'">\r
                      {{ getHoursPerDay(row) }}h/day\r
                    </span>\r
                  </div>\r
                  <ng-container *ngIf="getCellValue(row, column.key) && column.key !== 'id' && column.key !== 'priorityOrder' && column.key !== 'startTime' && column.key !== 'endTime' && column.key !== 'hours'">\r
                    <!-- Main Task Title with Actions -->\r
                    <div class="task-title-container">\r
                      <div class="task-title-row">\r
                        <!-- Expand/Collapse Button for Main Task -->\r
                        <button *ngIf="column.key === 'title' && getCellValue(row, 'subtasks') && getCellValue(row, 'subtasks').length > 0"\r
                                class="expand-btn"\r
                                [class.expanded]="row['isExpanded']"\r
                                (click)="onToggleTaskExpansion(row); $event.stopPropagation()"\r
                                title="{{ row['isExpanded'] ? 'Collapse' : 'Expand' }} subtasks">\r
                          <i class="fas" [class.fa-chevron-down]="row['isExpanded']" [class.fa-chevron-right]="!row['isExpanded']"></i>\r
                        </button>\r
\r
                        <div class="task-title"\r
                             [class.clickable]="column.key === 'title'"\r
                             (click)="column.key === 'title' ? onTaskClick(row) : null">\r
                          {{ getCellValue(row, column.key) }}\r
                        </div>\r
\r
                        <span *ngIf="column.key === 'title' && getCellValue(row, 'subtasks') && getCellValue(row, 'subtasks').length > 0"\r
                              class="task-count"\r
                              [title]="getLevel1SubtaskTooltip(getCellValue(row, 'subtasks'))">\r
                          {{ getLevel1SubtaskCount(getCellValue(row, 'subtasks')) }}\r
                        </span>\r
\r
                        <!-- Periodic Task Button (Tasks section only, if task has periodicTask) -->\r
                        <button *ngIf="column.key === 'title' && !isPeriodicTasks && row['periodicTask'] && row['periodicTask'].id"\r
                                class="periodic-task-btn"\r
                                [title]="'Move to periodic task: ' + row['periodicTask'].id"\r
                                (click)="onNavigateToPeriodicTask(row['periodicTask'].id); $event.stopPropagation()">\r
                          <span class="periodic-icon-wrapper">\r
                            <span class="periodic-icon">\u27F2</span>\r
                          </span>\r
                          <span class="periodic-content">\r
                            <span class="periodic-label">Periodic</span>\r
                            <span class="periodic-id">{{ row['periodicTask'].id }}</span>\r
                          </span>\r
                        </button>\r
\r
                        <!-- Main Task Actions - Inline -->\r
                        <div class="task-actions" *ngIf="column.key === 'title'" (click)="$event.stopPropagation()">\r
                          <button *ngIf="isPeriodicTasks || (!row['periodicTask'] || !row['periodicTask'].id)"\r
                                  class="action-btn"\r
                                  [class.disabled]="isTaskCompleted(row)"\r
                                  [disabled]="isTaskCompleted(row)"\r
                                  (click)="!isTaskCompleted(row) && onAddSubtask(row); $event.stopPropagation()"\r
                                  [title]="getAddButtonTooltip(row)">\r
                            <i class="fas fa-plus"></i>\r
                          </button>\r
                          <button class="action-btn"\r
                                  [class.disabled]="isTaskCompleted(row)"\r
                                  [disabled]="isTaskCompleted(row)"\r
                                  (click)="!isTaskCompleted(row) && onEditTask(row); $event.stopPropagation()"\r
                                  [title]="getEditButtonTooltip(row)">\r
                            <i class="fas fa-edit"></i>\r
                          </button>\r
                          <button class="action-btn" (click)="onViewTask(row); $event.stopPropagation()" title="View Main Task">\r
                            <i class="fas fa-eye"></i>\r
                          </button>\r
                          <button class="action-btn" (click)="onDeleteTask(row); $event.stopPropagation()" title="Delete Main Task">\r
                            <i class="fas fa-trash"></i>\r
                          </button>\r
                        </div>\r
                      </div>\r
\r
                      <!-- Progress Bar Below Actions (Main Tasks Only - Only if task has subtasks) -->\r
                      <div class="task-progress-row" *ngIf="column.key === 'title' && !row['level'] && getCellValue(row, 'progress') != null && getCellValue(row, 'subtasks') && getCellValue(row, 'subtasks').length > 0">\r
                        <div class="progress-bar-inline">\r
                          <div class="progress-fill-inline"\r
                               [style.width.%]="getCellValue(row, 'progress')"></div>\r
                        </div>\r
                        <span class="progress-text-inline">{{ getCellValue(row, 'progress') }}%</span>\r
                      </div>\r
\r
                      <!-- Remarks and Description Row Below Task Title -->\r
                      <div class="task-meta-row" *ngIf="column.key === 'title' && !row['level'] && (hasRemarks(row) || hasDescription(row))">\r
                        <!-- Remarks Indicator -->\r
                        <button *ngIf="hasRemarks(row)"\r
                                class="remarks-indicator"\r
                                [title]="'Has ' + getRemarksCount(row) + ' remark' + (getRemarksCount(row) > 1 ? 's' : '') + ' please check'"\r
                                (click)="onRemarksClick(row, $event); $event.stopPropagation()">\r
                          <span class="remarks-label">Remarks</span>\r
                          <span class="remarks-badge" *ngIf="getRemarksCount(row) > 0">{{ getRemarksCount(row) }}</span>\r
                        </button>\r
\r
                        <!-- Description Indicator -->\r
                        <div *ngIf="hasDescription(row)"\r
                             class="description-indicator"\r
                             [title]="'Description: ' + getDescriptionText(row)">\r
                          <span class="description-label">Description</span>\r
                          <span class="description-text">{{ getDescriptionText(row) }}</span>\r
                        </div>\r
\r
                        <!-- Remarks Tooltip/Popover - Only on click -->\r
                        <div *ngIf="hasRemarks(row) && showRemarksTooltip === row['id']"\r
                             class="remarks-tooltip"\r
                             (click)="$event.stopPropagation()">\r
                          <div class="remarks-tooltip-header">\r
                            <span class="remarks-tooltip-title">Remarks</span>\r
                            <button class="remarks-tooltip-close" (click)="showRemarksTooltip = null; $event.stopPropagation()">\xD7</button>\r
                          </div>\r
                          <div class="remarks-tooltip-content">\r
                            <ul class="remarks-tooltip-list">\r
                              <li *ngFor="let remark of getRemarksArray(row['remarks'])" class="remarks-tooltip-item">\r
                                {{ remark }}\r
                              </li>\r
                            </ul>\r
                          </div>\r
                        </div>\r
                      </div>\r
                    </div>\r
\r
                    <!-- All Subtasks (including nested ones) in single cell -->\r
                    <div *ngIf="column.key === 'title' && getCellValue(row, 'subtasks') && getCellValue(row, 'subtasks').length > 0 && row['isExpanded']"\r
                         class="subtasks-container">\r
                      <div class="subtask-item" *ngFor="let subtask of getAllSubtasks(getCellValue(row, 'subtasks'))">\r
                        <div class="subtask-checkbox">\r
                          <input type="checkbox"\r
                                 [checked]="subtask.completed || false"\r
                                 [disabled]="isSubtaskDisabled(subtask)"\r
                                 (change)="onSubtaskCheckboxChange(row.id, subtask, $event)"\r
                                 class="subtask-checkbox-input"\r
                                 [class.disabled]="isSubtaskDisabled(subtask)">\r
                        </div>\r
                        <div class="subtask-content"\r
                             [class.level-1]="subtask.level === 1"\r
                             [class.level-2]="subtask.level === 2"\r
                             (click)="onSubtaskClick(row.id, subtask)">\r
                          <div class="subtask-title-row">\r
                            <!-- Left Side: Expand Button and Title -->\r
                            <div class="subtask-left-group">\r
                              <!-- Expand/Collapse Button for Level 1 Subtasks -->\r
                              <button *ngIf="subtask.level === 1 && hasNestedSubtasks(subtask)"\r
                                      class="expand-btn subtask-expand-btn"\r
                                      [class.expanded]="subtask.isExpanded"\r
                                      (click)="onToggleSubtaskExpansion(row, subtask); $event.stopPropagation()"\r
                                      title="{{ subtask.isExpanded ? 'Collapse' : 'Expand' }} nested subtasks">\r
                                <i class="fas" [class.fa-chevron-down]="subtask.isExpanded" [class.fa-chevron-right]="!subtask.isExpanded"></i>\r
                              </button>\r
\r
                              <span class="subtask-title">\r
                                {{ subtask.title }}\r
                              </span>\r
                            </div>\r
\r
                            <!-- Right Side: Count and Action Buttons -->\r
                            <div class="subtask-right-group">\r
                              <!-- Count on the right for Level 1 subtasks -->\r
                              <span *ngIf="subtask.level === 1 && hasNestedSubtasks(subtask)"\r
                                    class="subtask-count"\r
                                    [title]="getLevel2SubtaskTooltip(subtask)">\r
                                {{ getLevel2SubtaskCount(subtask) }}\r
                              </span>\r
\r
                              <!-- Context-specific Action Buttons -->\r
                              <div class="subtask-actions" (click)="$event.stopPropagation()">\r
                                <!-- Level 1 Child Task Actions -->\r
                                <ng-container *ngIf="subtask.level === 1">\r
                                  <button class="action-btn"\r
                                          [class.disabled]="isSubtaskCompleted(subtask)"\r
                                          [disabled]="isSubtaskCompleted(subtask)"\r
                                          (click)="!isSubtaskCompleted(subtask) && onAddNestedSubtask(row, subtask); $event.stopPropagation()"\r
                                          [title]="getAddButtonTooltip(subtask, true)">\r
                                    <i class="fas fa-plus"></i>\r
                                  </button>\r
                                  <button class="action-btn"\r
                                          [class.disabled]="isSubtaskCompleted(subtask)"\r
                                          [disabled]="isSubtaskCompleted(subtask)"\r
                                          (click)="!isSubtaskCompleted(subtask) && onEditSubtask(row, subtask); $event.stopPropagation()"\r
                                          [title]="getEditButtonTooltip(subtask, true, 1)">\r
                                    <i class="fas fa-edit"></i>\r
                                  </button>\r
                                  <button class="action-btn" (click)="onViewSubtask(row, subtask); $event.stopPropagation()" title="View Level 1 Child Task">\r
                                    <i class="fas fa-eye"></i>\r
                                  </button>\r
                                  <button class="action-btn" (click)="onDeleteSubtask(row, subtask); $event.stopPropagation()" title="Delete Level 1 Child Task">\r
                                    <i class="fas fa-trash"></i>\r
                                  </button>\r
                                </ng-container>\r
\r
                                <!-- Level 2 Child Task Actions -->\r
                                <ng-container *ngIf="subtask.level === 2">\r
                                  <button class="action-btn"\r
                                          [class.disabled]="isSubtaskCompleted(subtask)"\r
                                          [disabled]="isSubtaskCompleted(subtask)"\r
                                          (click)="!isSubtaskCompleted(subtask) && onEditSubtask(row, subtask); $event.stopPropagation()"\r
                                          [title]="getEditButtonTooltip(subtask, true, 2)">\r
                                    <i class="fas fa-edit"></i>\r
                                  </button>\r
                                  <button class="action-btn" (click)="onViewSubtask(row, subtask); $event.stopPropagation()" title="View Level 2 Child Task">\r
                                    <i class="fas fa-eye"></i>\r
                                  </button>\r
                                  <button class="action-btn" (click)="onDeleteSubtask(row, subtask); $event.stopPropagation()" title="Delete Level 2 Child Task">\r
                                    <i class="fas fa-trash"></i>\r
                                  </button>\r
                                </ng-container>\r
                              </div>\r
                            </div>\r
                          </div>\r
\r
                          <!-- Subtask Meta Information: Status, Priority, Hours, Description, Dates (Periodic Tasks Only) -->\r
                          <div class="subtask-meta-row" *ngIf="subtask.status || subtask.priority || subtask.estimatedHours || (subtask.description && subtask.description.trim()) || (isPeriodicTasks && (subtask.startDate || subtask.endDate))">\r
                            <!-- Status Indicator -->\r
                            <span *ngIf="subtask.status"\r
                                  class="subtask-status-indicator"\r
                                  [style.background-color]="getStatusColor(subtask.status)"\r
                                  [title]="'Status: ' + (subtask.status.name | titlecase)">\r
                              {{ (subtask.status.name | titlecase) }}\r
                            </span>\r
\r
                            <!-- Priority Indicator -->\r
                            <span *ngIf="subtask.priority"\r
                                  class="subtask-priority-indicator"\r
                                  [style.background-color]="getPriorityColor(subtask.priority)"\r
                                  [title]="'Priority: ' + (subtask.priority.name | titlecase)">\r
                              {{ (subtask.priority.name | titlecase) }}\r
                            </span>\r
\r
                            <!-- Estimated Hours Indicator -->\r
                            <span *ngIf="subtask.estimatedHours != null && subtask.estimatedHours > 0"\r
                                  class="subtask-hours-indicator"\r
                                  title="Estimated Hours: {{ subtask.estimatedHours }}h">\r
                              {{ subtask.estimatedHours }}h\r
                            </span>\r
\r
                            <!-- Start Date Indicator (Periodic Tasks Only) -->\r
                            <span *ngIf="isPeriodicTasks && subtask.startDate"\r
                                  class="subtask-date-indicator subtask-start-date"\r
                                  [title]="'Start Date: ' + formatSubtaskDate(subtask.startDate)">\r
                              SD: {{ formatSubtaskDate(subtask.startDate) }}\r
                            </span>\r
\r
                            <!-- End Date Indicator (Periodic Tasks Only) -->\r
                            <span *ngIf="isPeriodicTasks && subtask.endDate"\r
                                  class="subtask-date-indicator subtask-end-date"\r
                                  [title]="'End Date: ' + formatSubtaskDate(subtask.endDate)">\r
                              ED: {{ formatSubtaskDate(subtask.endDate) }}\r
                            </span>\r
\r
                            <!-- Description Indicator -->\r
                            <div *ngIf="subtask.description && subtask.description.trim()"\r
                                 class="subtask-description-indicator"\r
                                 [title]="'Description: ' + subtask.description">\r
                              <span class="subtask-description-label">Description</span>\r
                              <span class="subtask-description-text">{{ subtask.description }}</span>\r
                            </div>\r
                          </div>\r
                        </div>\r
                      </div>\r
                    </div>\r
                  </ng-container>\r
                </div>\r
              </ng-template>\r
            </div>\r
          </td>\r
\r
        </tr>\r
      </tbody>\r
    </table>\r
  </div>\r
\r
  <!-- Pagination -->\r
  <div class="pagination-wrapper">\r
    <div class="pagination-info">\r
      <span class="page-info">\r
        Showing {{ displayedData.length }} of {{ getFilteredCount() }} results\r
      </span>\r
\r
      <div class="page-size-selector" *ngIf="config.pagination">\r
        <label>Show:</label>\r
        <select [ngModel]="pageSize"\r
                (ngModelChange)="onPageSizeChange($event)"\r
                class="page-size-select">\r
          <option *ngFor="let size of config.pageSizeOptions" [value]="size">\r
            {{ size }}\r
          </option>\r
        </select>\r
        <span>per page</span>\r
      </div>\r
    </div>\r
\r
    <div class="pagination-controls" *ngIf="config.pagination && totalPages > 1">\r
      <!-- Previous Button -->\r
      <button class="pagination-btn"\r
              [class.disabled]="currentPage === 1"\r
              (click)="onPageChange(currentPage - 1)"\r
              [disabled]="currentPage === 1">\r
        \u2190 Previous\r
      </button>\r
\r
      <!-- Page Numbers -->\r
      <div class="page-numbers">\r
        <button *ngFor="let page of getPageNumbers()"\r
                class="page-number"\r
                [class.active]="page === currentPage"\r
                (click)="onPageChange(page)">\r
          {{ page }}\r
        </button>\r
      </div>\r
\r
      <!-- Next Button -->\r
      <button class="pagination-btn"\r
              [class.disabled]="currentPage === totalPages"\r
              (click)="onPageChange(currentPage + 1)"\r
              [disabled]="currentPage === totalPages">\r
        Next \u2192\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
\r
`, styles: ['/* src/app/components/data-table/data-table.scss */\n:root {\n  --primary-bg: #1a1a1a;\n  --secondary-bg: #2d2d2d;\n  --tertiary-bg: #3a3a3a;\n  --surface-bg: #2a2a2a;\n  --primary-accent: #4a9eff;\n  --secondary-accent: #7c3aed;\n  --success-color: #10b981;\n  --warning-color: #f59e0b;\n  --error-color: #ef4444;\n  --text-primary: #ffffff;\n  --text-secondary: #e5e5e5;\n  --text-muted: #a3a3a3;\n  --text-disabled: #6b7280;\n  --border-primary: #4a4a4a;\n  --border-secondary: #3a3a3a;\n  --border-accent: #5a5a5a;\n  --shadow-light: rgba(0, 0, 0, 0.1);\n  --shadow-medium: rgba(0, 0, 0, 0.2);\n  --shadow-heavy: rgba(0, 0, 0, 0.3);\n  --hover-bg: #3a3a3a;\n  --hover-accent: #5bb0ff;\n  --active-bg: #4a4a4a;\n  --active-accent: #3a8fdf;\n}\n.smart-table-container {\n  background:\n    linear-gradient(\n      135deg,\n      #0f0f0f 0%,\n      #1a1a1a 50%,\n      #0f0f0f 100%);\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 8px 16px rgba(0, 0, 0, 0.2);\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  max-height: 100%;\n}\n.smart-table-container::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    radial-gradient(\n      circle at 20% 80%,\n      rgba(74, 158, 255, 0.03) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 80% 20%,\n      rgba(124, 58, 237, 0.03) 0%,\n      transparent 50%);\n  pointer-events: none;\n  z-index: 0;\n}\n.table-header {\n  background: rgba(42, 42, 42, 0.8);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  padding: 0;\n  position: relative;\n  z-index: 1;\n  min-height: 0;\n}\n.table-header:has(.table-controls:empty) {\n  display: none;\n}\n.table-header::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(74, 158, 255, 0.5),\n      transparent);\n}\n.table-controls {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1.5rem;\n  margin-bottom: 0;\n  padding: 0;\n}\n@media (max-width: 768px) {\n  .table-controls {\n    flex-direction: column;\n    gap: 1rem;\n  }\n}\n.search-section {\n  flex: 1;\n  min-width: 0;\n}\n.search-section:empty {\n  display: none;\n}\n.search-container .search-input-wrapper {\n  position: relative;\n  max-width: 100%;\n  width: 100%;\n}\n.search-container .search-input-wrapper .search-input {\n  width: 100%;\n  padding: 12px 45px 12px 42px;\n  background: rgba(58, 58, 58, 0.9);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 10px;\n  color: var(--text-primary);\n  font-size: 1rem;\n  transition: all 0.3s ease;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);\n}\n.search-container .search-input-wrapper .search-input::placeholder {\n  color: var(--text-secondary);\n  opacity: 0.7;\n}\n.search-container .search-input-wrapper .search-input:focus {\n  outline: none;\n  border-color: rgba(74, 158, 255, 0.7);\n  background: rgb(58, 58, 58);\n  box-shadow: 0 0 0 3px rgba(74, 158, 255, 0.2), 0 4px 16px rgba(0, 0, 0, 0.4);\n}\n.search-container .search-input-wrapper .search-input:hover:not(:focus) {\n  border-color: rgba(255, 255, 255, 0.25);\n  background: rgba(58, 58, 58, 0.95);\n}\n.search-container .search-input-wrapper .search-icon {\n  position: absolute;\n  left: 16px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-secondary);\n  font-size: 1rem;\n  pointer-events: none;\n  z-index: 1;\n}\n.search-container .search-input-wrapper .clear-search-btn {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: transparent;\n  border: none;\n  color: var(--text-secondary);\n  cursor: pointer;\n  padding: 6px 10px;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  transition: all 0.2s ease;\n  z-index: 1;\n}\n.search-container .search-input-wrapper .clear-search-btn:hover {\n  color: var(--text-primary);\n  background: rgba(255, 255, 255, 0.15);\n}\n.search-container .search-input-wrapper .clear-search-btn i {\n  pointer-events: none;\n}\n.search-input-wrapper {\n  position: relative;\n  max-width: 500px;\n  width: 100%;\n}\n.search-input-wrapper .search-input {\n  width: 100%;\n  padding: 0.5rem 2rem 0.5rem 40px;\n  background: rgba(58, 58, 58, 0.8);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 8px;\n  color: var(--text-primary);\n  font-size: 0.95rem;\n  transition: all 0.3s ease;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n}\n.search-input-wrapper .search-input::placeholder {\n  color: var(--text-secondary);\n  opacity: 0.7;\n}\n.search-input-wrapper .search-input:focus {\n  outline: none;\n  border-color: rgba(74, 158, 255, 0.6);\n  background: rgba(58, 58, 58, 0.95);\n  box-shadow: 0 0 0 3px rgba(74, 158, 255, 0.15), 0 4px 12px rgba(0, 0, 0, 0.3);\n}\n.search-input-wrapper .search-input:hover:not(:focus) {\n  border-color: rgba(255, 255, 255, 0.2);\n  background: rgba(58, 58, 58, 0.85);\n}\n.search-input-wrapper .search-icon {\n  position: absolute;\n  left: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-secondary);\n  font-size: 0.95rem;\n  pointer-events: none;\n  z-index: 1;\n}\n.search-input-wrapper .clear-search-btn {\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: transparent;\n  border: none;\n  color: var(--text-secondary);\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 4px;\n  font-size: 0.85rem;\n  transition: all 0.2s ease;\n  z-index: 1;\n}\n.search-input-wrapper .clear-search-btn:hover {\n  color: var(--text-primary);\n  background: rgba(255, 255, 255, 0.1);\n}\n.search-input-wrapper .clear-search-btn i {\n  pointer-events: none;\n}\n.filter-badges {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-top: 0.5rem;\n}\n.filter-badges .filter-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.25rem 0.5rem;\n  background: rgba(74, 158, 255, 0.1);\n  border: 1px solid rgba(74, 158, 255, 0.2);\n  border-radius: 8px;\n  color: var(--text-primary);\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n.filter-badges .filter-badge .remove-filter {\n  background: none;\n  border: none;\n  color: var(--text-secondary);\n  cursor: pointer;\n  padding: 0;\n  font-size: 0.9rem;\n  transition: color 0.2s ease;\n}\n.filter-badges .filter-badge .remove-filter:hover {\n  color: var(--text-primary);\n}\n.filter-badges .clear-all-filters {\n  background: rgba(239, 68, 68, 0.1);\n  border: 1px solid rgba(239, 68, 68, 0.2);\n  color: #EF4444;\n  padding: 0.25rem 0.5rem;\n  border-radius: 8px;\n  font-size: 0.8rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.filter-badges .clear-all-filters:hover {\n  background: rgba(239, 68, 68, 0.2);\n}\n.table-actions {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.export-dropdown {\n  position: relative;\n}\n.export-dropdown .export-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.5rem 1rem;\n  background: rgba(58, 58, 58, 0.6);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 12px;\n  color: var(--text-primary);\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.export-dropdown .export-btn:hover {\n  background: rgba(74, 158, 255, 0.1);\n  border-color: rgba(74, 158, 255, 0.3);\n}\n.export-dropdown .export-btn .dropdown-arrow {\n  font-size: 0.7rem;\n  transition: transform 0.2s ease;\n}\n.export-dropdown:hover .dropdown-arrow {\n  transform: rotate(180deg);\n}\n.export-dropdown .export-menu {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  margin-top: 0.25rem;\n  background: rgba(42, 42, 42, 0.95);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 12px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(-10px);\n  transition: all 0.2s ease;\n  z-index: 100;\n}\n.export-dropdown .export-menu .export-option {\n  display: block;\n  width: 100%;\n  padding: 0.5rem 1rem;\n  background: none;\n  border: none;\n  color: var(--text-primary);\n  text-align: left;\n  cursor: pointer;\n  transition: background 0.2s ease;\n}\n.export-dropdown .export-menu .export-option:hover {\n  background: rgba(74, 158, 255, 0.1);\n}\n.export-dropdown .export-menu .export-option:first-child {\n  border-radius: 12px 12px 0 0;\n}\n.export-dropdown .export-menu .export-option:last-child {\n  border-radius: 0 0 12px 12px;\n}\n.export-dropdown:hover .export-menu {\n  opacity: 1;\n  visibility: visible;\n  transform: translateY(0);\n}\n.view-options {\n  display: flex;\n  background: rgba(58, 58, 58, 0.6);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 12px;\n  overflow: hidden;\n}\n.view-options .view-btn {\n  padding: 0.5rem 1rem;\n  background: none;\n  border: none;\n  color: var(--text-secondary);\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.view-options .view-btn.active {\n  background: rgba(74, 158, 255, 0.2);\n  color: var(--text-primary);\n}\n.view-options .view-btn:hover:not(.active) {\n  background: rgba(255, 255, 255, 0.05);\n  color: var(--text-primary);\n}\n.results-summary {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: var(--text-secondary);\n  font-size: 0.9rem;\n}\n@media (max-width: 768px) {\n  .results-summary {\n    flex-direction: column;\n    gap: 0.5rem;\n    align-items: flex-start;\n  }\n}\n.results-summary .results-count {\n  font-weight: 500;\n}\n.results-summary .selected-info {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.results-summary .selected-info .selected-count {\n  color: rgba(74, 158, 255, 0.8);\n  font-weight: 500;\n}\n.results-summary .selected-info .clear-selection {\n  background: none;\n  border: none;\n  color: var(--text-secondary);\n  font-size: 0.8rem;\n  cursor: pointer;\n  text-decoration: underline;\n}\n.results-summary .selected-info .clear-selection:hover {\n  color: var(--text-primary);\n}\n.loading-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(15, 15, 15, 0.8);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.loading-overlay .loading-spinner {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  color: var(--text-primary);\n}\n.loading-overlay .loading-spinner .spinner {\n  width: 40px;\n  height: 40px;\n  border: 3px solid rgba(74, 158, 255, 0.2);\n  border-top: 3px solid #4a9eff;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes tooltipFadeIn {\n  0% {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.table-wrapper {\n  position: relative;\n  overflow-x: auto;\n  overflow-y: auto;\n  min-width: 100%;\n  flex: 1;\n  min-height: 0;\n  max-height: 100%;\n  scrollbar-width: thin;\n  scrollbar-color: rgba(74, 158, 255, 0.3) rgba(42, 42, 42, 0.8);\n}\n.table-wrapper::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n.table-wrapper::-webkit-scrollbar-track {\n  background: rgba(42, 42, 42, 0.8);\n  border-radius: 4px;\n}\n.table-wrapper::-webkit-scrollbar-thumb {\n  background: rgba(74, 158, 255, 0.3);\n  border-radius: 4px;\n}\n.table-wrapper::-webkit-scrollbar-thumb:hover {\n  background: rgba(74, 158, 255, 0.5);\n}\n.table-wrapper::-webkit-scrollbar-corner {\n  background: rgba(42, 42, 42, 0.8);\n}\n.table-wrapper.resizing {\n  -webkit-user-select: none;\n  user-select: none;\n  cursor: col-resize;\n}\n.smart-table {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  background: transparent;\n}\n.smart-table .table-header-row.sticky {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n.smart-table .table-header-cell {\n  background: rgba(58, 58, 58, 0.8);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  padding: 16px 16px;\n  text-align: left;\n  font-weight: 600;\n  font-size: 0.85rem;\n  color: var(--text-primary);\n  position: relative;\n  transition: all 0.2s ease;\n  min-height: 50px;\n}\n.smart-table .table-header-cell.sortable {\n  cursor: pointer;\n}\n.smart-table .table-header-cell.sortable:hover {\n  background: rgba(74, 158, 255, 0.1);\n}\n.smart-table .table-header-cell.sticky {\n  position: sticky;\n  left: 0;\n  z-index: 5;\n}\n.smart-table .table-header-cell .header-content {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.smart-table .table-header-cell .header-content .column-title {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.smart-table .table-header-cell .header-content .sort-indicator {\n  font-size: 0.85rem;\n  color: var(--text-secondary);\n  transition: all 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 16px;\n  font-weight: 500;\n  opacity: 0.6;\n}\n.smart-table .table-header-cell .header-content .sort-indicator:hover {\n  opacity: 1;\n  color: var(--text-primary);\n}\n.smart-table .table-header-cell .header-content .sort-indicator.active {\n  color: #4a9eff;\n  opacity: 1;\n  transform: scale(1.15);\n  font-weight: 600;\n}\n.smart-table .table-header-cell .column-filter {\n  margin-top: 0.25rem;\n}\n.smart-table .table-header-cell .column-filter .filter-input {\n  width: 100%;\n  padding: 0.25rem 0.5rem;\n  background: rgba(42, 42, 42, 0.6);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 6px;\n  color: var(--text-primary);\n  font-size: 0.8rem;\n}\n.smart-table .table-header-cell .column-filter .filter-input::placeholder {\n  color: var(--text-secondary);\n}\n.smart-table .table-header-cell .column-filter .filter-input:focus {\n  outline: none;\n  border-color: rgba(74, 158, 255, 0.3);\n}\n.smart-table .table-header-cell .resize-handle {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 4px;\n  height: 100%;\n  cursor: col-resize;\n  background: transparent;\n  transition: background 0.2s ease;\n}\n.smart-table .table-header-cell .resize-handle:hover {\n  background: rgba(74, 158, 255, 0.3);\n}\n.smart-table .selection-column {\n  width: 70px;\n  min-width: 70px;\n  text-align: center;\n  background: rgba(58, 58, 58, 0.8);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  padding: 12px 2px 12px 12px;\n  font-weight: 600;\n  font-size: 0.85rem;\n  color: var(--text-primary);\n  position: relative;\n  transition: all 0.2s ease;\n  min-height: 50px;\n  cursor: pointer;\n}\n.smart-table .selection-column:hover {\n  background: rgba(74, 158, 255, 0.1);\n}\n.smart-table .selection-column .header-content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.smart-table .selection-column .header-content .column-title {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.smart-table .selection-column .header-content .sort-indicator {\n  font-size: 0.85rem;\n  color: var(--text-secondary);\n  transition: all 0.2s ease;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 16px;\n  font-weight: 500;\n  opacity: 0.6;\n}\n.smart-table .selection-column .header-content .sort-indicator.active {\n  color: #4a9eff;\n  opacity: 1;\n  transform: scale(1.15);\n  font-weight: 600;\n}\n.smart-table .selection-column .header-content .sort-indicator:hover {\n  opacity: 1;\n  color: var(--text-primary);\n}\n.smart-table .actions-column {\n  width: 110px;\n  min-width: 110px;\n  max-width: 110px;\n  text-align: center;\n}\n.smart-table .table-header-cell:first-of-type:not(.selection-column) {\n  width: auto;\n  flex: 1;\n}\n.smart-table .table-body .table-row {\n  background: transparent;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.smart-table .table-body .table-row:hover {\n  background: rgba(74, 158, 255, 0.05);\n}\n.smart-table .table-body .table-row.selected {\n  background: rgba(74, 158, 255, 0.1);\n  border-color: rgba(74, 158, 255, 0.2);\n}\n.smart-table .table-body .table-row.highlight-periodic-task {\n  background: rgba(124, 58, 237, 0.15) !important;\n  border: 2px solid rgba(124, 58, 237, 0.4) !important;\n  box-shadow: 0 0 10px rgba(124, 58, 237, 0.3);\n  animation: pulse-highlight 2s ease-in-out;\n}\n.smart-table .table-body .table-row.even {\n  background: rgba(255, 255, 255, 0.02);\n}\n.smart-table .table-body .table-row.odd {\n  background: transparent;\n}\n.smart-table .table-body .table-row.selected.even,\n.smart-table .table-body .table-row.selected.odd {\n  background: rgba(74, 158, 255, 0.1);\n}\n.smart-table .table-body .table-row.completed .checkbox-wrapper .checkbox-custom {\n  border-color: #6b7280 !important;\n}\n.smart-table .table-body .table-row.completed .checkbox-wrapper .checkbox-custom::after {\n  border-color: #6b7280 !important;\n}\n.smart-table .table-body .table-row.completed .checkbox-wrapper input[type=checkbox]:checked + .checkbox-custom {\n  background: #6b7280 !important;\n  border-color: #6b7280 !important;\n}\n.smart-table .table-body .table-row.completed .checkbox-wrapper input[type=checkbox]:checked + .checkbox-custom::after {\n  border-color: #ffffff !important;\n}\n.smart-table .table-body .table-row.completed .star-icon {\n  color: #6b7280 !important;\n}\n.smart-table .table-body .table-row.completed .star-icon:hover {\n  color: #6b7280 !important;\n}\n.smart-table .table-body .table-row.completed .table-cell {\n  color: #6b7280 !important;\n}\n.smart-table .table-body .table-row.completed .table-cell .cell-content {\n  color: #6b7280 !important;\n}\n.smart-table .table-body .table-row.completed .table-cell .cell-content .default-cell {\n  color: #6b7280 !important;\n}\n.smart-table .table-body .table-row.completed .table-cell .cell-content span,\n.smart-table .table-body .table-row.completed .table-cell .cell-content div,\n.smart-table .table-body .table-row.completed .table-cell .cell-content p {\n  color: #6b7280 !important;\n}\n.smart-table .table-body .table-row.completed .table-cell .cell-content .priority-badge,\n.smart-table .table-body .table-row.completed .table-cell .cell-content .status-badge,\n.smart-table .table-body .table-row.completed .table-cell .cell-content .category-badge {\n  background-color: #6b7280 !important;\n  opacity: 0.3 !important;\n}\n.smart-table .table-body .table-row.completed .table-cell .cell-content .priority-badge span,\n.smart-table .table-body .table-row.completed .table-cell .cell-content .status-badge span,\n.smart-table .table-body .table-row.completed .table-cell .cell-content .category-badge span {\n  color: #ffffff !important;\n}\n.smart-table .table-body .table-row.completed .table-cell .cell-content .category-icon {\n  filter: grayscale(100%) !important;\n  opacity: 0.6 !important;\n}\n.smart-table .table-body .table-row.completed .table-cell .cell-content .category-cell {\n  color: #6b7280 !important;\n}\n.smart-table .table-body .table-row.completed .table-cell .cell-content .category-cell .category-icon {\n  filter: grayscale(100%) !important;\n  opacity: 0.6 !important;\n}\n.smart-table .table-body .table-row.completed .table-cell .cell-content .progress-fill,\n.smart-table .table-body .table-row.completed .table-cell .cell-content .progress-fill-inline {\n  background: #6b7280 !important;\n}\n.smart-table .table-body .table-row.completed .table-cell .cell-content .periodic-task-btn {\n  color: #6b7280 !important;\n  background: rgba(107, 114, 128, 0.15) !important;\n  border-color: rgba(107, 114, 128, 0.3) !important;\n}\n.smart-table .table-body .table-row.completed .table-cell .cell-content .periodic-task-btn .periodic-icon-wrapper {\n  background: rgba(107, 114, 128, 0.2) !important;\n}\n.smart-table .table-body .table-row.completed .table-cell .cell-content .periodic-task-btn .periodic-icon-wrapper .periodic-icon {\n  color: #6b7280 !important;\n}\n.smart-table .table-body .table-row.completed .table-cell .cell-content .date-cell,\n.smart-table .table-body .table-row.completed .table-cell .cell-content .task-on-date {\n  color: #6b7280 !important;\n}\n.smart-table .table-body .table-row.completed .table-cell .cell-content .nd-value {\n  color: #6b7280 !important;\n}\n.smart-table .table-body .table-row.completed .table-cell .progress-fill,\n.smart-table .table-body .table-row.completed .table-cell .progress-fill-inline {\n  background: #6b7280 !important;\n}\n.smart-table .table-body .table-row.completed .table-cell .progress-text,\n.smart-table .table-body .table-row.completed .table-cell .progress-text-inline {\n  color: #6b7280 !important;\n}\n.smart-table .table-body .table-row.completed .table-cell .task-progress-row .progress-fill-inline {\n  background: #6b7280 !important;\n}\n.smart-table .table-body .table-row.completed .table-cell .task-progress-row .progress-text-inline {\n  color: #6b7280 !important;\n}\n.smart-table .table-body .table-row.completed .table-cell a {\n  color: #6b7280 !important;\n}\n.smart-table .table-body .table-row.completed .table-cell .url-item,\n.smart-table .table-body .table-row.completed .table-cell .url-link {\n  color: #6b7280 !important;\n}\n.smart-table .table-body .table-row.completed .table-cell .remarks-list,\n.smart-table .table-body .table-row.completed .table-cell .remark-item {\n  color: #6b7280 !important;\n}\n.smart-table .table-body .table-row.completed .table-cell .remarks-badge {\n  background: rgba(107, 114, 128, 0.2) !important;\n  color: #6b7280 !important;\n}\n.smart-table .table-body .table-row.completed .table-cell .task-title,\n.smart-table .table-body .table-row.completed .table-cell .task-description {\n  color: #6b7280 !important;\n}\n.smart-table .table-body .table-cell {\n  padding: 12px 14px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n  color: var(--text-primary);\n  font-size: 0.9rem;\n  position: relative;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  vertical-align: middle;\n}\n.smart-table .table-body .table-cell:first-of-type:not(.selection-cell) {\n  padding-left: 8px;\n}\n.smart-table .table-body .table-cell:has(.task-cell) {\n  white-space: normal;\n  overflow: hidden;\n  padding: 10px 14px;\n  vertical-align: middle;\n  max-width: 100%;\n  box-sizing: border-box;\n}\n.smart-table .table-body .table-cell.sticky {\n  position: sticky;\n  left: 0;\n  z-index: 1;\n  background: inherit;\n}\n.smart-table .table-body .table-cell .cell-content {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  width: 100%;\n}\n.smart-table .table-body .table-cell .cell-content:has(.task-cell) {\n  align-items: flex-start;\n}\n.smart-table .table-body .table-cell .cell-content .default-cell {\n  color: var(--text-primary);\n  width: 100%;\n}\n.smart-table .table-body .table-cell .cell-content .default-cell .hours-cell {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  padding: 4px 0;\n}\n.smart-table .table-body .table-cell .cell-content .default-cell .hours-cell .hours-main {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  line-height: 1.2;\n}\n.smart-table .table-body .table-cell .cell-content .default-cell .hours-cell .hours-per-day-badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2px 6px;\n  background: rgba(16, 185, 129, 0.12);\n  border: 1px solid rgba(16, 185, 129, 0.25);\n  border-radius: 4px;\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: rgba(16, 185, 129, 0.9);\n  letter-spacing: 0.1px;\n  white-space: nowrap;\n  transition: all 0.2s ease;\n}\n.smart-table .table-body .table-cell .cell-content .default-cell .hours-cell .hours-per-day-badge:hover {\n  background: rgba(16, 185, 129, 0.18);\n  border-color: rgba(16, 185, 129, 0.35);\n  transform: translateY(-0.5px);\n}\n.smart-table .table-body .table-cell .cell-content .default-cell .hours-cell.schedule-overlap {\n  padding: 4px 8px;\n  border-radius: 4px;\n}\n.smart-table .table-body .table-cell .cell-content .default-cell .hours-cell.schedule-overlap .hours-main {\n  color: var(--text-primary) !important;\n}\n.smart-table .table-body .table-cell .cell-content .default-cell .nd-value {\n  color: #EF4444;\n  font-size: 0.9rem;\n  font-style: italic;\n  cursor: help;\n}\n.smart-table .table-body .table-cell .cell-content .default-cell .schedule-overlap {\n  color: var(--text-primary) !important;\n  font-weight: 500;\n  padding: 2px 6px;\n  border-radius: 4px;\n  background: rgba(239, 68, 68, 0.08);\n  border: 1px solid rgba(239, 68, 68, 0.4);\n  position: relative;\n  animation: scheduleOverlapBlink 2s ease-in-out infinite;\n  transition: all 0.2s ease;\n}\n.smart-table .table-body .table-cell .cell-content .default-cell .schedule-overlap::before {\n  content: "";\n  position: absolute;\n  inset: -2px;\n  border-radius: 5px;\n  background: rgba(239, 68, 68, 0.1);\n  z-index: -1;\n  opacity: 0;\n  transition: opacity 0.2s ease;\n}\n.smart-table .table-body .table-cell .cell-content .default-cell .schedule-overlap:hover {\n  background: rgba(239, 68, 68, 0.15);\n  border-color: rgba(239, 68, 68, 0.7);\n}\n.smart-table .table-body .table-cell .cell-content .default-cell .schedule-overlap:hover::before {\n  opacity: 1;\n}\n.smart-table .table-body .table-cell .cell-content .default-cell.task-cell {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  width: 100%;\n  white-space: normal;\n  min-height: 32px;\n  justify-content: center;\n}\n.smart-table .table-body .table-cell .cell-content .default-cell.task-cell:has(.subtasks-container) {\n  justify-content: flex-start;\n}\n.smart-table .table-body .table-cell .cell-content .default-cell.task-cell .task-title {\n  font-weight: 600;\n  color: var(--text-primary);\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 4px;\n  transition: background-color 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.smart-table .table-body .table-cell .cell-content .default-cell.task-cell .task-title:hover {\n  background-color: rgba(74, 158, 255, 0.1);\n}\n.smart-table .table-body .table-cell .cell-content .default-cell.task-cell .task-title .subtask-checkbox {\n  flex-shrink: 0;\n}\n.smart-table .table-body .table-cell .cell-content .default-cell.task-cell .task-title .subtask-checkbox .subtask-checkbox-input {\n  width: 14px;\n  height: 14px;\n  cursor: pointer;\n  accent-color: #4a9eff;\n}\n.smart-table .table-body .table-cell .cell-content .default-cell.task-cell .task-title .subtask-title {\n  font-weight: 500;\n  color: var(--text-secondary);\n  font-size: 0.9rem;\n}\n.smart-table .table-body .table-cell .cell-content .default-cell.task-cell .task-title .main-task-title {\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 1rem;\n}\n.smart-table .table-body .table-cell .cell-content .default-cell.task-cell .subtasks-container {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  margin-left: 16px;\n}\n.smart-table .table-body .table-cell .cell-content .default-cell.task-cell .subtasks-container .subtask-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 2px 0;\n}\n.smart-table .table-body .table-cell .cell-content .default-cell.task-cell .subtasks-container .subtask-item .subtask-checkbox {\n  flex-shrink: 0;\n}\n.smart-table .table-body .table-cell .cell-content .default-cell.task-cell .subtasks-container .subtask-item .subtask-checkbox .subtask-checkbox-input {\n  width: 14px;\n  height: 14px;\n  cursor: pointer;\n  accent-color: #4a9eff;\n}\n.smart-table .table-body .table-cell .cell-content .default-cell.task-cell .subtasks-container .subtask-item .subtask-content {\n  flex: 1;\n  cursor: pointer;\n  padding: 2px 4px;\n  border-radius: 4px;\n  transition: background-color 0.2s ease;\n  display: flex;\n  align-items: center;\n}\n.smart-table .table-body .table-cell .cell-content .default-cell.task-cell .subtasks-container .subtask-item .subtask-content:hover {\n  background-color: rgba(74, 158, 255, 0.1);\n}\n.smart-table .table-body .table-cell .cell-content .default-cell.task-cell .subtasks-container .subtask-item .subtask-content .subtask-title {\n  font-weight: 500;\n  color: var(--text-secondary);\n  font-size: 0.85rem;\n}\n.smart-table .table-body .table-cell .cell-content .default-cell.clickable {\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 4px;\n  transition: background-color 0.2s ease;\n}\n.smart-table .table-body .table-cell .cell-content .default-cell.clickable:hover {\n  background-color: rgba(74, 158, 255, 0.1);\n}\n.smart-table .table-body .table-cell .cell-content .default-cell.subtask-cell {\n  color: var(--text-secondary);\n  font-size: 0.9rem;\n}\n.smart-table .table-body .table-cell .cell-content .default-cell.subtask-cell .subtask-indicator {\n  color: var(--text-muted);\n  margin-right: 8px;\n  font-weight: normal;\n}\n.smart-table .table-body .table-cell .cell-content .priority-badge,\n.smart-table .table-body .table-cell .cell-content .status-badge {\n  display: inline-block;\n  padding: 0.25rem 0.5rem;\n  border-radius: 8px;\n  color: white;\n  font-size: 0.8rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.smart-table .table-body .table-cell .cell-content .progress-cell {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  width: 100%;\n}\n.smart-table .table-body .table-cell .cell-content .progress-cell .progress-bar {\n  flex: 0 0 60px;\n  height: 6px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 3px;\n  overflow: hidden;\n}\n.smart-table .table-body .table-cell .cell-content .progress-cell .progress-bar .progress-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #4a9eff,\n      #7c3aed);\n  border-radius: 3px;\n  transition: width 0.3s ease;\n}\n.smart-table .table-body .table-cell .cell-content .progress-cell .progress-text {\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n  min-width: 35px;\n  text-align: right;\n}\n.smart-table .table-body .table-cell .cell-content .date-cell {\n  color: var(--text-secondary);\n  font-size: 0.8rem;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  align-items: flex-start;\n}\n.smart-table .table-body .table-cell .cell-content .date-cell .nd-value {\n  color: #EF4444;\n  font-size: 0.85rem;\n  font-style: italic;\n  cursor: help;\n}\n.smart-table .table-body .table-cell .cell-content .date-cell .task-on-date {\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n}\n.smart-table .table-body .table-cell .cell-content .date-cell .periodic-task-date-panel {\n  display: inline-flex;\n  flex-direction: column;\n  gap: 2px;\n  margin-top: 4px;\n  padding: 3px 6px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 4px;\n  width: 100%;\n  box-sizing: border-box;\n  transition: all 0.2s ease;\n}\n.smart-table .table-body .table-cell .cell-content .date-cell .periodic-task-date-panel .periodic-date-row {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 0.68rem;\n  line-height: 1.2;\n}\n.smart-table .table-body .table-cell .cell-content .date-cell .periodic-task-date-panel .periodic-date-row .periodic-date-label {\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 0.62rem;\n  letter-spacing: 0.2px;\n  flex-shrink: 0;\n  min-width: 22px;\n}\n.smart-table .table-body .table-cell .cell-content .date-cell .periodic-task-date-panel .periodic-date-row .periodic-date-value {\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.7);\n  flex: 1;\n  min-width: 0;\n  font-size: 0.68rem;\n}\n.smart-table .table-body .table-cell .cell-content .date-cell .periodic-task-date-panel:hover {\n  background: rgba(255, 255, 255, 0.05);\n  border-color: rgba(255, 255, 255, 0.12);\n}\n.smart-table .table-body .table-cell .cell-content .category-cell {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-weight: 500;\n}\n.smart-table .table-body .table-cell .cell-content .category-cell .category-icon {\n  font-size: 1rem;\n}\n.smart-table .table-body .table-cell .cell-content .color-cell {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n.smart-table .table-body .table-cell .cell-content .color-cell .color-swatch {\n  width: 18px;\n  height: 18px;\n  border-radius: 4px;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);\n  display: inline-block;\n}\n.smart-table .table-body .table-cell .cell-content .urls-cell {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  width: 100%;\n  min-width: 0;\n}\n.smart-table .table-body .table-cell .cell-content .urls-cell .url-item {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  width: 100%;\n  min-width: 0;\n}\n.smart-table .table-body .table-cell .cell-content .urls-cell .url-item .url-link {\n  color: #4a9eff;\n  text-decoration: none;\n  font-size: 12px;\n  padding: 2px 6px;\n  border-radius: 4px;\n  background: rgba(74, 158, 255, 0.1);\n  border: 1px solid rgba(74, 158, 255, 0.2);\n  transition: all 0.2s ease;\n  display: block;\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n}\n.smart-table .table-body .table-cell .cell-content .urls-cell .url-item .url-link .url-label-truncated {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 100%;\n}\n.smart-table .table-body .table-cell .cell-content .urls-cell .url-item .url-link:hover {\n  background: rgba(74, 158, 255, 0.2);\n  border-color: rgba(74, 158, 255, 0.4);\n  transform: translateY(-1px);\n}\n.smart-table .table-body .table-cell .cell-content .urls-cell .url-item .credential-tag-note {\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n  padding: 2px 6px;\n  background: rgba(16, 185, 129, 0.15);\n  border: 1px solid rgba(16, 185, 129, 0.3);\n  border-radius: 4px;\n  font-size: 11px;\n  color: #10b981;\n  cursor: help;\n  flex-shrink: 0;\n  transition: all 0.2s ease;\n  margin-left: 6px;\n}\n.smart-table .table-body .table-cell .cell-content .urls-cell .url-item .credential-tag-note i {\n  font-size: 10px;\n}\n.smart-table .table-body .table-cell .cell-content .urls-cell .url-item .credential-tag-note .credential-count-note {\n  font-weight: 600;\n  font-size: 10px;\n}\n.smart-table .table-body .table-cell .cell-content .urls-cell .url-item .credential-tag-note:hover {\n  background: rgba(16, 185, 129, 0.25);\n  border-color: rgba(16, 185, 129, 0.5);\n  transform: translateY(-1px);\n}\n.smart-table .table-body .table-cell .cell-content .urls-cell .url-item .credential-tag {\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n  padding: 2px 6px;\n  background: rgba(16, 185, 129, 0.15);\n  border: 1px solid rgba(16, 185, 129, 0.3);\n  border-radius: 4px;\n  font-size: 11px;\n  color: #10b981;\n  cursor: help;\n  flex-shrink: 0;\n  transition: all 0.2s ease;\n}\n.smart-table .table-body .table-cell .cell-content .urls-cell .url-item .credential-tag i {\n  font-size: 10px;\n}\n.smart-table .table-body .table-cell .cell-content .urls-cell .url-item .credential-tag .credential-count {\n  font-weight: 600;\n  font-size: 10px;\n}\n.smart-table .table-body .table-cell .cell-content .urls-cell .url-item .credential-tag:hover {\n  background: rgba(16, 185, 129, 0.25);\n  border-color: rgba(16, 185, 129, 0.5);\n  transform: translateY(-1px);\n}\n.smart-table .table-body .table-cell .cell-content .urls-cell .no-docs {\n  color: var(--text-secondary);\n  font-size: 0.85rem;\n  font-style: italic;\n}\n.smart-table .table-body .table-cell .cell-content .remarks-cell .remarks-list {\n  margin: 0;\n  padding-left: 16px;\n  list-style-type: disc;\n}\n.smart-table .table-body .table-cell .cell-content .remarks-cell .remarks-list .remark-item {\n  color: var(--text-primary);\n  font-size: 0.85rem;\n  margin-bottom: 4px;\n  line-height: 1.4;\n}\n.smart-table .table-body .table-cell .cell-content .remarks-cell .remarks-list .remark-item:last-child {\n  margin-bottom: 0;\n}\n.smart-table .table-body .table-cell .cell-content .remarks-cell .no-remarks {\n  color: var(--text-secondary);\n  font-size: 0.85rem;\n  font-style: italic;\n}\n.smart-table .table-body .table-cell .cell-content .password-cell .password-display {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.smart-table .table-body .table-cell .cell-content .password-cell .password-display .password-masked {\n  font-family: "Courier New", monospace;\n  letter-spacing: 2px;\n  color: var(--text-primary);\n}\n.smart-table .table-body .table-cell .cell-content .password-cell .password-display .password-visible {\n  font-family: "Courier New", monospace;\n  color: var(--text-primary);\n}\n.smart-table .table-body .table-cell .cell-content .password-cell .password-display .password-toggle-btn {\n  background: transparent;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 4px;\n  color: #9aa0a6;\n  cursor: pointer;\n  padding: 4px 8px;\n  font-size: 12px;\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n}\n.smart-table .table-body .table-cell .cell-content .password-cell .password-display .password-toggle-btn:hover {\n  background: rgba(255, 255, 255, 0.1);\n  border-color: rgba(255, 255, 255, 0.3);\n  color: var(--text-primary);\n}\n.smart-table .table-body .table-cell .cell-content .password-cell .password-display .password-toggle-btn i {\n  pointer-events: none;\n}\n.smart-table .table-body .table-cell .cell-content .json-cell .json-preview {\n  font-size: 0.85rem;\n  color: var(--text-primary);\n  line-height: 1.4;\n  word-break: break-word;\n  cursor: help;\n}\n.smart-table .table-body .table-cell .cell-content .credentials-cell {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.smart-table .table-body .table-cell .cell-content .credentials-cell .credentials-list {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.smart-table .table-body .table-cell .cell-content .credentials-cell .credentials-list .credential-badge {\n  display: inline-block;\n  padding: 4px 8px;\n  background: rgba(74, 158, 255, 0.15);\n  border: 1px solid rgba(74, 158, 255, 0.3);\n  border-radius: 4px;\n  font-size: 11px;\n  color: #4a9eff;\n  cursor: help;\n  white-space: nowrap;\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  transition: all 0.2s ease;\n}\n.smart-table .table-body .table-cell .cell-content .credentials-cell .credentials-list .credential-badge:hover {\n  background: rgba(74, 158, 255, 0.25);\n  border-color: rgba(74, 158, 255, 0.5);\n  transform: translateY(-1px);\n}\n.smart-table .table-body .table-cell .cell-content .credentials-cell .public-access {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 8px;\n  background: rgba(16, 185, 129, 0.15);\n  border: 1px solid rgba(16, 185, 129, 0.3);\n  border-radius: 4px;\n  font-size: 11px;\n  color: #10b981;\n  font-weight: 500;\n}\n.smart-table .table-body .table-cell .cell-content .credentials-cell .public-access i {\n  font-size: 10px;\n}\n.smart-table .table-body .table-cell .cell-content .boolean-cell {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.smart-table .table-body .table-cell .cell-content .boolean-cell .boolean-indicator {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  font-size: 0.8rem;\n  font-weight: bold;\n}\n.smart-table .table-body .table-cell .cell-content .boolean-cell .boolean-indicator.true {\n  background: rgba(16, 185, 129, 0.2);\n  color: #10B981;\n}\n.smart-table .table-body .table-cell .cell-content .boolean-cell .boolean-indicator.false {\n  background: rgba(239, 68, 68, 0.2);\n  color: #EF4444;\n}\n.smart-table .table-body .table-cell .cell-content .boolean-cell .toggle-switch-wrapper {\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.smart-table .table-body .table-cell .cell-content .boolean-cell .toggle-switch-wrapper .modern-toggle-switch {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n}\n.smart-table .table-body .table-cell .cell-content .boolean-cell .toggle-switch-wrapper .modern-toggle-switch input[type=checkbox] {\n  position: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0;\n  pointer-events: none;\n}\n.smart-table .table-body .table-cell .cell-content .boolean-cell .toggle-switch-wrapper .modern-toggle-switch .toggle-slider {\n  position: relative;\n  width: 44px;\n  height: 24px;\n  background: rgba(30, 30, 30, 0.9);\n  border: 1.5px solid rgba(100, 100, 100, 0.3);\n  border-radius: 12px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  overflow: hidden;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.05);\n}\n.smart-table .table-body .table-cell .cell-content .boolean-cell .toggle-switch-wrapper .modern-toggle-switch .toggle-slider::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(120, 120, 120, 0.2) 0%,\n      rgba(80, 80, 80, 0.1) 100%);\n  opacity: 1;\n  transition: opacity 0.3s ease;\n}\n.smart-table .table-body .table-cell .cell-content .boolean-cell .toggle-switch-wrapper .modern-toggle-switch .toggle-slider .toggle-indicator {\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  width: 18px;\n  height: 18px;\n  background: rgba(200, 200, 200, 0.3);\n  border: 1.5px solid rgba(180, 180, 180, 0.4);\n  border-radius: 50%;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.15);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  transform: translateX(0);\n  z-index: 2;\n}\n.smart-table .table-body .table-cell .cell-content .boolean-cell .toggle-switch-wrapper .modern-toggle-switch .toggle-slider .toggle-indicator::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 6px;\n  height: 6px;\n  background: rgba(100, 100, 100, 0.8);\n  border-radius: 50%;\n  transition: all 0.3s ease;\n}\n.smart-table .table-body .table-cell .cell-content .boolean-cell .toggle-switch-wrapper .modern-toggle-switch.active .toggle-slider {\n  background: rgba(50, 50, 50, 0.95);\n  border-color: rgba(180, 180, 180, 0.6);\n}\n.smart-table .table-body .table-cell .cell-content .boolean-cell .toggle-switch-wrapper .modern-toggle-switch.active .toggle-slider::before {\n  opacity: 1;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(220, 220, 220, 0.25) 0%,\n      rgba(180, 180, 180, 0.15) 100%);\n}\n.smart-table .table-body .table-cell .cell-content .boolean-cell .toggle-switch-wrapper .modern-toggle-switch.active .toggle-slider .toggle-indicator {\n  transform: translateX(20px);\n  background: rgba(240, 240, 240, 0.95);\n  border-color: rgba(255, 255, 255, 0.6);\n}\n.smart-table .table-body .table-cell .cell-content .boolean-cell .toggle-switch-wrapper .modern-toggle-switch.active .toggle-slider .toggle-indicator::after {\n  background: rgba(255, 255, 255, 0.9);\n  box-shadow: 0 0 4px rgba(255, 255, 255, 0.4);\n}\n.smart-table .table-body .table-cell .cell-content .boolean-cell .toggle-switch-wrapper .modern-toggle-switch:hover .toggle-slider {\n  border-color: rgba(140, 140, 140, 0.5);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4), 0 0 0 2px rgba(140, 140, 140, 0.2);\n}\n.smart-table .table-body .table-cell .cell-content .boolean-cell .toggle-switch-wrapper .modern-toggle-switch:hover.active .toggle-slider {\n  border-color: rgba(200, 200, 200, 0.7);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4), 0 0 0 2px rgba(200, 200, 200, 0.25);\n}\n.smart-table .table-body .table-cell .cell-content .boolean-cell .toggle-switch-wrapper .modern-toggle-switch:not(.active):hover .toggle-slider {\n  border-color: rgba(120, 120, 120, 0.5);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4), 0 0 0 2px rgba(120, 120, 120, 0.2);\n}\n.smart-table .table-body .table-cell .cell-content .boolean-cell .toggle-switch-wrapper .modern-toggle-switch:not(.active):hover .toggle-slider::before {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(140, 140, 140, 0.25) 0%,\n      rgba(100, 100, 100, 0.15) 100%);\n}\n.smart-table .table-body .selection-cell {\n  position: relative;\n  text-align: center;\n  width: 70px;\n  padding: 12px 2px 12px 12px;\n}\n.smart-table .table-body .selection-cell .selection-controls {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n}\n.smart-table .table-body .selection-cell .selection-controls .star-icon {\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 1.2rem;\n  color: var(--text-secondary);\n  padding: 2px;\n  transition: all 0.2s ease;\n  line-height: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.smart-table .table-body .selection-cell .selection-controls .star-icon:hover {\n  color: #FFD700;\n  transform: scale(1.2);\n}\n.smart-table .table-body .selection-cell .selection-controls .star-icon.important {\n  color: #FFD700;\n}\n.smart-table .table-body .selection-cell .selection-controls .star-icon.important:hover {\n  transform: scale(1.3);\n  text-shadow: 0 0 8px rgba(255, 215, 0, 0.6);\n}\n.smart-table .table-body .actions-cell,\n.smart-table .table-body .actions-cell-wrapper {\n  text-align: center;\n  padding: 8px 12px;\n}\n.smart-table .table-body .actions-cell .action-buttons,\n.smart-table .table-body .actions-cell-wrapper .action-buttons {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 6px;\n}\n.smart-table .table-body .actions-cell .action-buttons .toggle-switch-wrapper,\n.smart-table .table-body .actions-cell-wrapper .action-buttons .toggle-switch-wrapper {\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.smart-table .table-body .actions-cell .action-buttons .toggle-switch-wrapper .modern-toggle-switch,\n.smart-table .table-body .actions-cell-wrapper .action-buttons .toggle-switch-wrapper .modern-toggle-switch {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n}\n.smart-table .table-body .actions-cell .action-buttons .toggle-switch-wrapper .modern-toggle-switch input[type=checkbox],\n.smart-table .table-body .actions-cell-wrapper .action-buttons .toggle-switch-wrapper .modern-toggle-switch input[type=checkbox] {\n  position: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0;\n  pointer-events: none;\n}\n.smart-table .table-body .actions-cell .action-buttons .toggle-switch-wrapper .modern-toggle-switch .toggle-slider,\n.smart-table .table-body .actions-cell-wrapper .action-buttons .toggle-switch-wrapper .modern-toggle-switch .toggle-slider {\n  position: relative;\n  width: 44px;\n  height: 24px;\n  background: rgba(30, 30, 30, 0.9);\n  border: 1.5px solid rgba(100, 100, 100, 0.3);\n  border-radius: 12px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  overflow: hidden;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.05);\n}\n.smart-table .table-body .actions-cell .action-buttons .toggle-switch-wrapper .modern-toggle-switch .toggle-slider::before,\n.smart-table .table-body .actions-cell-wrapper .action-buttons .toggle-switch-wrapper .modern-toggle-switch .toggle-slider::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(120, 120, 120, 0.2) 0%,\n      rgba(80, 80, 80, 0.1) 100%);\n  opacity: 1;\n  transition: opacity 0.3s ease;\n}\n.smart-table .table-body .actions-cell .action-buttons .toggle-switch-wrapper .modern-toggle-switch .toggle-slider .toggle-indicator,\n.smart-table .table-body .actions-cell-wrapper .action-buttons .toggle-switch-wrapper .modern-toggle-switch .toggle-slider .toggle-indicator {\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  width: 18px;\n  height: 18px;\n  background: rgba(200, 200, 200, 0.3);\n  border: 1.5px solid rgba(180, 180, 180, 0.4);\n  border-radius: 50%;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.15);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  transform: translateX(0);\n  z-index: 2;\n}\n.smart-table .table-body .actions-cell .action-buttons .toggle-switch-wrapper .modern-toggle-switch .toggle-slider .toggle-indicator::after,\n.smart-table .table-body .actions-cell-wrapper .action-buttons .toggle-switch-wrapper .modern-toggle-switch .toggle-slider .toggle-indicator::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 6px;\n  height: 6px;\n  background: rgba(100, 100, 100, 0.8);\n  border-radius: 50%;\n  transition: all 0.3s ease;\n}\n.smart-table .table-body .actions-cell .action-buttons .toggle-switch-wrapper .modern-toggle-switch.active .toggle-slider,\n.smart-table .table-body .actions-cell-wrapper .action-buttons .toggle-switch-wrapper .modern-toggle-switch.active .toggle-slider {\n  background: rgba(50, 50, 50, 0.95);\n  border-color: rgba(180, 180, 180, 0.6);\n}\n.smart-table .table-body .actions-cell .action-buttons .toggle-switch-wrapper .modern-toggle-switch.active .toggle-slider::before,\n.smart-table .table-body .actions-cell-wrapper .action-buttons .toggle-switch-wrapper .modern-toggle-switch.active .toggle-slider::before {\n  opacity: 1;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(220, 220, 220, 0.25) 0%,\n      rgba(180, 180, 180, 0.15) 100%);\n}\n.smart-table .table-body .actions-cell .action-buttons .toggle-switch-wrapper .modern-toggle-switch.active .toggle-slider .toggle-indicator,\n.smart-table .table-body .actions-cell-wrapper .action-buttons .toggle-switch-wrapper .modern-toggle-switch.active .toggle-slider .toggle-indicator {\n  transform: translateX(20px);\n  background: rgba(240, 240, 240, 0.95);\n  border-color: rgba(255, 255, 255, 0.6);\n}\n.smart-table .table-body .actions-cell .action-buttons .toggle-switch-wrapper .modern-toggle-switch.active .toggle-slider .toggle-indicator::after,\n.smart-table .table-body .actions-cell-wrapper .action-buttons .toggle-switch-wrapper .modern-toggle-switch.active .toggle-slider .toggle-indicator::after {\n  background: rgba(255, 255, 255, 0.9);\n  box-shadow: 0 0 4px rgba(255, 255, 255, 0.4);\n}\n.smart-table .table-body .actions-cell .action-buttons .toggle-switch-wrapper .modern-toggle-switch:hover .toggle-slider,\n.smart-table .table-body .actions-cell-wrapper .action-buttons .toggle-switch-wrapper .modern-toggle-switch:hover .toggle-slider {\n  border-color: rgba(140, 140, 140, 0.5);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4), 0 0 0 2px rgba(140, 140, 140, 0.2);\n}\n.smart-table .table-body .actions-cell .action-buttons .toggle-switch-wrapper .modern-toggle-switch:hover.active .toggle-slider,\n.smart-table .table-body .actions-cell-wrapper .action-buttons .toggle-switch-wrapper .modern-toggle-switch:hover.active .toggle-slider {\n  border-color: rgba(200, 200, 200, 0.7);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4), 0 0 0 2px rgba(200, 200, 200, 0.25);\n}\n.smart-table .table-body .actions-cell .action-buttons .toggle-switch-wrapper .modern-toggle-switch:not(.active):hover .toggle-slider,\n.smart-table .table-body .actions-cell-wrapper .action-buttons .toggle-switch-wrapper .modern-toggle-switch:not(.active):hover .toggle-slider {\n  border-color: rgba(120, 120, 120, 0.5);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4), 0 0 0 2px rgba(120, 120, 120, 0.2);\n}\n.smart-table .table-body .actions-cell .action-buttons .toggle-switch-wrapper .modern-toggle-switch:not(.active):hover .toggle-slider::before,\n.smart-table .table-body .actions-cell-wrapper .action-buttons .toggle-switch-wrapper .modern-toggle-switch:not(.active):hover .toggle-slider::before {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(140, 140, 140, 0.25) 0%,\n      rgba(100, 100, 100, 0.15) 100%);\n}\n.smart-table .table-body .actions-cell .action-buttons .action-btn,\n.smart-table .table-body .actions-cell-wrapper .action-buttons .action-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  background: rgba(58, 58, 58, 0.6);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 8px;\n  color: var(--text-secondary);\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.smart-table .table-body .actions-cell .action-buttons .action-btn i,\n.smart-table .table-body .actions-cell-wrapper .action-buttons .action-btn i {\n  font-size: 12px;\n  line-height: 1;\n  color: rgba(255, 255, 255, 0.6);\n}\n.smart-table .table-body .actions-cell .action-buttons .action-btn:hover:not(.disabled),\n.smart-table .table-body .actions-cell-wrapper .action-buttons .action-btn:hover:not(.disabled) {\n  background: rgba(74, 158, 255, 0.1);\n  border-color: rgba(74, 158, 255, 0.3);\n  color: var(--text-primary);\n  transform: translateY(-1px);\n}\n.smart-table .table-body .actions-cell .action-buttons .action-btn:hover:not(.disabled) i,\n.smart-table .table-body .actions-cell-wrapper .action-buttons .action-btn:hover:not(.disabled) i {\n  color: rgba(74, 158, 255, 0.9);\n}\n.smart-table .table-body .actions-cell .action-buttons .action-btn.disabled,\n.smart-table .table-body .actions-cell-wrapper .action-buttons .action-btn.disabled {\n  opacity: 0.9;\n  cursor: not-allowed;\n}\n.smart-table .table-body .actions-cell .action-buttons .action-btn.disabled i,\n.smart-table .table-body .actions-cell-wrapper .action-buttons .action-btn.disabled i {\n  color: rgba(255, 255, 255, 0.5);\n}\n.smart-table .table-body .actions-cell .action-buttons .action-btn .action-icon,\n.smart-table .table-body .actions-cell-wrapper .action-buttons .action-btn .action-icon {\n  font-size: 0.9rem;\n}\n.smart-table .table-body .actions-cell .action-buttons .action-btn .action-text,\n.smart-table .table-body .actions-cell-wrapper .action-buttons .action-btn .action-text {\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n.smart-table .table-body .actions-cell .action-buttons .modern-icon-btn,\n.smart-table .table-body .actions-cell-wrapper .action-buttons .modern-icon-btn {\n  width: 36px;\n  height: 36px;\n  min-width: 36px;\n  min-height: 36px;\n  padding: 0;\n  background: rgba(30, 30, 30, 0.9);\n  border: 1.5px solid rgba(100, 100, 100, 0.3);\n  border-radius: 8px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.05);\n}\n.smart-table .table-body .actions-cell .action-buttons .modern-icon-btn::before,\n.smart-table .table-body .actions-cell-wrapper .action-buttons .modern-icon-btn::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.1) 0%,\n      transparent 100%);\n  opacity: 0;\n  transition: opacity 0.25s ease;\n}\n.smart-table .table-body .actions-cell .action-buttons .modern-icon-btn i,\n.smart-table .table-body .actions-cell-wrapper .action-buttons .modern-icon-btn i {\n  font-size: 14px;\n  position: relative;\n  z-index: 1;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  display: inline-block;\n  color: rgba(220, 220, 220, 0.8);\n}\n.smart-table .table-body .actions-cell .action-buttons .modern-icon-btn.edit-action,\n.smart-table .table-body .actions-cell-wrapper .action-buttons .modern-icon-btn.edit-action {\n  color: rgba(220, 220, 220, 0.8);\n}\n.smart-table .table-body .actions-cell .action-buttons .modern-icon-btn.edit-action:hover,\n.smart-table .table-body .actions-cell-wrapper .action-buttons .modern-icon-btn.edit-action:hover {\n  background: rgba(50, 50, 50, 0.95);\n  border-color: rgba(180, 180, 180, 0.6);\n  color: #ffffff;\n  transform: translateY(-2px) scale(1.05);\n  box-shadow:\n    0 4px 12px rgba(0, 0, 0, 0.5),\n    0 2px 6px rgba(0, 0, 0, 0.4),\n    inset 0 1px 2px rgba(255, 255, 255, 0.15);\n}\n.smart-table .table-body .actions-cell .action-buttons .modern-icon-btn.edit-action:hover::before,\n.smart-table .table-body .actions-cell-wrapper .action-buttons .modern-icon-btn.edit-action:hover::before {\n  opacity: 1;\n}\n.smart-table .table-body .actions-cell .action-buttons .modern-icon-btn.edit-action:hover i,\n.smart-table .table-body .actions-cell-wrapper .action-buttons .modern-icon-btn.edit-action:hover i {\n  transform: scale(1.15) rotate(-5deg);\n  color: #ffffff;\n}\n.smart-table .table-body .actions-cell .action-buttons .modern-icon-btn.edit-action:active,\n.smart-table .table-body .actions-cell-wrapper .action-buttons .modern-icon-btn.edit-action:active {\n  transform: translateY(0) scale(1);\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(0, 0, 0, 0.3);\n}\n.smart-table .table-body .actions-cell .action-buttons .modern-icon-btn.delete-action,\n.smart-table .table-body .actions-cell-wrapper .action-buttons .modern-icon-btn.delete-action {\n  color: rgba(220, 220, 220, 0.8);\n}\n.smart-table .table-body .actions-cell .action-buttons .modern-icon-btn.delete-action:hover,\n.smart-table .table-body .actions-cell-wrapper .action-buttons .modern-icon-btn.delete-action:hover {\n  background: rgba(40, 40, 40, 0.95);\n  border-color: rgba(150, 150, 150, 0.6);\n  color: #ffffff;\n  transform: translateY(-2px) scale(1.05);\n  box-shadow:\n    0 4px 12px rgba(0, 0, 0, 0.5),\n    0 2px 6px rgba(0, 0, 0, 0.4),\n    inset 0 1px 2px rgba(255, 255, 255, 0.15);\n}\n.smart-table .table-body .actions-cell .action-buttons .modern-icon-btn.delete-action:hover::before,\n.smart-table .table-body .actions-cell-wrapper .action-buttons .modern-icon-btn.delete-action:hover::before {\n  opacity: 1;\n}\n.smart-table .table-body .actions-cell .action-buttons .modern-icon-btn.delete-action:hover i,\n.smart-table .table-body .actions-cell-wrapper .action-buttons .modern-icon-btn.delete-action:hover i {\n  transform: scale(1.15);\n  color: #ffffff;\n}\n.smart-table .table-body .actions-cell .action-buttons .modern-icon-btn.delete-action:active,\n.smart-table .table-body .actions-cell-wrapper .action-buttons .modern-icon-btn.delete-action:active {\n  transform: translateY(0) scale(1);\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(0, 0, 0, 0.3);\n}\n.smart-table .table-body .task-title-container {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.smart-table .table-body .task-title-container .task-title-row {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  min-height: 32px;\n  line-height: 32px;\n}\n.smart-table .table-body .task-title-container .task-title-row:hover .task-title.clickable {\n  color: var(--text-primary);\n}\n.smart-table .table-body .task-title-container .task-title {\n  flex: 1;\n  font-weight: 500;\n  font-size: 0.9rem;\n  color: var(--text-primary);\n  line-height: 1.5;\n  word-wrap: break-word;\n  white-space: normal;\n  min-width: 0;\n}\n.smart-table .table-body .task-title-container .task-title.clickable {\n  cursor: pointer;\n  transition: color 0.15s ease;\n}\n.smart-table .table-body .task-title-container .task-title.clickable:hover {\n  color: #4a9eff;\n}\n.smart-table .table-body .task-title-container .task-count {\n  font-size: 0.7rem;\n  color: rgba(255, 255, 255, 0.6);\n  font-weight: 600;\n  padding: 1px 6px;\n  background: rgba(74, 158, 255, 0.12);\n  border-radius: 6px;\n  border: 1px solid rgba(74, 158, 255, 0.2);\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.smart-table .table-body .task-title-container .periodic-task-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 3px 9px;\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: rgba(196, 181, 253, 0.95);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(124, 58, 237, 0.15) 0%,\n      rgba(124, 58, 237, 0.08) 100%);\n  border: 1px solid rgba(124, 58, 237, 0.3);\n  border-radius: 7px;\n  white-space: nowrap;\n  flex-shrink: 0;\n  cursor: pointer;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 2px 4px rgba(124, 58, 237, 0.1);\n}\n.smart-table .table-body .task-title-container .periodic-task-btn::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.08),\n      transparent);\n  transition: left 0.5s ease;\n}\n.smart-table .table-body .task-title-container .periodic-task-btn .periodic-icon-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 16px;\n  height: 16px;\n  background: rgba(124, 58, 237, 0.2);\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.smart-table .table-body .task-title-container .periodic-task-btn .periodic-icon-wrapper .periodic-icon {\n  font-size: 0.7rem;\n  line-height: 1;\n  color: rgb(196, 181, 253);\n  display: block;\n  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.smart-table .table-body .task-title-container .periodic-task-btn .periodic-content {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 5px;\n  line-height: 1;\n}\n.smart-table .table-body .task-title-container .periodic-task-btn .periodic-content .periodic-label {\n  font-size: 0.63rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: rgba(196, 181, 253, 0.85);\n  opacity: 0.9;\n}\n.smart-table .table-body .task-title-container .periodic-task-btn .periodic-content .periodic-id {\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: rgb(196, 181, 253);\n  letter-spacing: 0.2px;\n}\n.smart-table .table-body .task-title-container .periodic-task-btn:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(124, 58, 237, 0.22) 0%,\n      rgba(124, 58, 237, 0.12) 100%);\n  border-color: rgba(124, 58, 237, 0.4);\n  color: rgb(196, 181, 253);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 10px rgba(124, 58, 237, 0.25);\n}\n.smart-table .table-body .task-title-container .periodic-task-btn:hover::before {\n  left: 100%;\n}\n.smart-table .table-body .task-title-container .periodic-task-btn:hover .periodic-icon-wrapper {\n  background: rgba(124, 58, 237, 0.3);\n}\n.smart-table .table-body .task-title-container .periodic-task-btn:hover .periodic-icon-wrapper .periodic-icon {\n  transform: rotate(-180deg);\n}\n.smart-table .table-body .task-title-container .periodic-task-btn:hover .periodic-content .periodic-label {\n  opacity: 1;\n}\n.smart-table .table-body .task-title-container .periodic-task-btn:active {\n  transform: translateY(0);\n  box-shadow: 0 2px 6px rgba(124, 58, 237, 0.2);\n}\n.smart-table .table-body .task-title-container .expand-btn {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  color: rgba(255, 255, 255, 0.5);\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n  min-width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.smart-table .table-body .task-title-container .expand-btn i {\n  font-size: 10px;\n  transition: transform 0.2s ease;\n}\n.smart-table .table-body .task-title-container .expand-btn:hover {\n  background: rgba(74, 158, 255, 0.15);\n  border-color: rgba(74, 158, 255, 0.3);\n  color: rgba(255, 255, 255, 0.9);\n}\n.smart-table .table-body .task-title-container .expand-btn:hover i {\n  transform: scale(1.1);\n}\n.smart-table .table-body .task-title-container .expand-btn.expanded {\n  background: rgba(74, 158, 255, 0.2);\n  border-color: rgba(74, 158, 255, 0.4);\n  color: #4a9eff;\n}\n.smart-table .table-body .task-title-container .expand-btn.subtask-expand-btn {\n  min-width: 20px;\n  height: 20px;\n  margin-right: 8px;\n}\n.smart-table .table-body .task-title-container .task-actions {\n  display: flex;\n  gap: 4px;\n  opacity: 0.6;\n  transition: opacity 0.2s ease;\n  margin-left: 0;\n  flex-shrink: 0;\n}\n.smart-table .table-body .task-title-container .task-actions .action-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 22px;\n  height: 22px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 4px;\n  color: rgba(255, 255, 255, 0.5);\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 0.7rem;\n}\n.smart-table .table-body .task-title-container .task-actions .action-btn i {\n  font-size: 10px;\n  line-height: 1;\n}\n.smart-table .table-body .task-title-container .task-actions .action-btn:hover:not(.disabled) {\n  background: rgba(74, 158, 255, 0.2);\n  border-color: rgba(74, 158, 255, 0.4);\n  color: #4a9eff;\n  transform: translateY(-1px);\n}\n.smart-table .table-body .task-title-container .task-actions .action-btn:hover:not(.disabled) i {\n  color: #4a9eff;\n}\n.smart-table .table-body .task-title-container .task-actions .action-btn.disabled {\n  opacity: 0.9;\n  cursor: not-allowed;\n}\n.smart-table .table-body .task-title-container .task-actions .action-btn.disabled i {\n  color: rgba(255, 255, 255, 0.5);\n}\n.smart-table .table-body .task-title-container .task-title-row:hover .task-actions {\n  opacity: 1;\n}\n.smart-table .table-body .task-title-container .task-progress-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 2px;\n  padding-left: 4px;\n}\n.smart-table .table-body .task-title-container .task-progress-row .progress-bar-inline {\n  flex: 1;\n  height: 6px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 3px;\n  overflow: hidden;\n}\n.smart-table .table-body .task-title-container .task-progress-row .progress-bar-inline .progress-fill-inline {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #4a9eff,\n      #7c3aed);\n  border-radius: 3px;\n  transition: width 0.3s ease;\n}\n.smart-table .table-body .task-title-container .task-progress-row .progress-text-inline {\n  font-size: 0.75rem;\n  color: var(--text-secondary);\n  min-width: 35px;\n  text-align: right;\n  flex-shrink: 0;\n}\n.smart-table .table-body .task-title-container .task-meta-row {\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex-wrap: nowrap;\n  gap: 8px;\n  margin-top: 5px;\n  padding-left: 4px;\n  width: 100%;\n  max-width: 100%;\n  box-sizing: border-box;\n}\n.smart-table .table-body .task-title-container .task-meta-row .remarks-indicator {\n  position: relative;\n  background: rgba(74, 158, 255, 0.08);\n  border: 1px solid rgba(74, 158, 255, 0.15);\n  border-radius: 6px;\n  cursor: pointer;\n  padding: 4px 8px;\n  transition: all 0.2s ease;\n  line-height: 1.2;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n  flex-shrink: 0;\n  white-space: nowrap;\n}\n.smart-table .table-body .task-title-container .task-meta-row .remarks-indicator:hover {\n  background: rgba(74, 158, 255, 0.12);\n  border-color: rgba(74, 158, 255, 0.25);\n}\n.smart-table .table-body .task-title-container .task-meta-row .remarks-indicator:active {\n  background: rgba(74, 158, 255, 0.1);\n}\n.smart-table .table-body .task-title-container .task-meta-row .remarks-indicator .remarks-label {\n  font-size: 0.7rem;\n  font-weight: 500;\n  color: rgba(74, 158, 255, 0.75);\n  letter-spacing: 0.2px;\n  text-transform: uppercase;\n}\n.smart-table .table-body .task-title-container .task-meta-row .remarks-indicator .remarks-badge {\n  background: rgba(74, 158, 255, 0.2);\n  color: rgba(74, 158, 255, 0.9);\n  font-size: 0.65rem;\n  font-weight: 600;\n  padding: 2px 5px;\n  border-radius: 4px;\n  min-width: 16px;\n  height: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 1;\n  border: 1px solid rgba(74, 158, 255, 0.2);\n}\n.smart-table .table-body .task-title-container .task-meta-row .description-indicator {\n  position: relative;\n  background: rgba(124, 58, 237, 0.08);\n  border: 1px solid rgba(124, 58, 237, 0.15);\n  border-radius: 6px;\n  padding: 4px 8px;\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  flex: 1;\n  min-width: 0;\n  transition: all 0.2s ease;\n  overflow: hidden;\n}\n.smart-table .table-body .task-title-container .task-meta-row .description-indicator:hover {\n  background: rgba(124, 58, 237, 0.12);\n  border-color: rgba(124, 58, 237, 0.25);\n}\n.smart-table .table-body .task-title-container .task-meta-row .description-indicator .description-label {\n  font-size: 0.7rem;\n  font-weight: 500;\n  color: rgba(124, 58, 237, 0.75);\n  letter-spacing: 0.2px;\n  text-transform: uppercase;\n  flex-shrink: 0;\n  white-space: nowrap;\n}\n.smart-table .table-body .task-title-container .task-meta-row .description-indicator .description-text {\n  font-size: 0.7rem;\n  color: var(--text-secondary);\n  line-height: 1.3;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  flex: 1;\n  min-width: 0;\n  font-style: italic;\n}\n.smart-table .table-body .task-title-container .task-meta-row .remarks-tooltip {\n  position: absolute;\n  left: 0;\n  top: calc(100% + 8px);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(30, 30, 30, 0.98) 0%,\n      rgba(42, 42, 42, 0.98) 100%);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border: 1.5px solid rgba(74, 158, 255, 0.3);\n  border-radius: 12px;\n  box-shadow:\n    0 8px 24px rgba(0, 0, 0, 0.5),\n    0 4px 12px rgba(74, 158, 255, 0.2),\n    inset 0 1px 0 rgba(255, 255, 255, 0.1);\n  z-index: 1000;\n  min-width: 280px;\n  max-width: 400px;\n  animation: tooltipFadeIn 0.2s ease-out;\n  overflow: hidden;\n}\n.smart-table .table-body .task-title-container .task-meta-row .remarks-tooltip::before {\n  content: "";\n  position: absolute;\n  top: -6px;\n  left: 20px;\n  transform: rotate(45deg);\n  width: 12px;\n  height: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(30, 30, 30, 0.98) 0%,\n      rgba(42, 42, 42, 0.98) 100%);\n  border-left: 1.5px solid rgba(74, 158, 255, 0.3);\n  border-top: 1.5px solid rgba(74, 158, 255, 0.3);\n}\n.smart-table .table-body .task-title-container .task-meta-row .remarks-tooltip .remarks-tooltip-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-bottom: 1px solid rgba(74, 158, 255, 0.2);\n  background: rgba(74, 158, 255, 0.05);\n}\n.smart-table .table-body .task-title-container .task-meta-row .remarks-tooltip .remarks-tooltip-header .remarks-tooltip-title {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #4a9eff;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.smart-table .table-body .task-title-container .task-meta-row .remarks-tooltip .remarks-tooltip-header .remarks-tooltip-close {\n  background: transparent;\n  border: none;\n  color: var(--text-secondary);\n  font-size: 1.5rem;\n  cursor: pointer;\n  padding: 0;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n  line-height: 1;\n}\n.smart-table .table-body .task-title-container .task-meta-row .remarks-tooltip .remarks-tooltip-header .remarks-tooltip-close:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: var(--text-primary);\n  transform: scale(1.1);\n}\n.smart-table .table-body .task-title-container .task-meta-row .remarks-tooltip .remarks-tooltip-content {\n  padding: 12px 16px;\n  max-height: 300px;\n  overflow-y: auto;\n}\n.smart-table .table-body .task-title-container .task-meta-row .remarks-tooltip .remarks-tooltip-content::-webkit-scrollbar {\n  width: 6px;\n}\n.smart-table .table-body .task-title-container .task-meta-row .remarks-tooltip .remarks-tooltip-content::-webkit-scrollbar-track {\n  background: rgba(42, 42, 42, 0.5);\n  border-radius: 3px;\n}\n.smart-table .table-body .task-title-container .task-meta-row .remarks-tooltip .remarks-tooltip-content::-webkit-scrollbar-thumb {\n  background: rgba(74, 158, 255, 0.3);\n  border-radius: 3px;\n}\n.smart-table .table-body .task-title-container .task-meta-row .remarks-tooltip .remarks-tooltip-content::-webkit-scrollbar-thumb:hover {\n  background: rgba(74, 158, 255, 0.5);\n}\n.smart-table .table-body .task-title-container .task-meta-row .remarks-tooltip .remarks-tooltip-content .remarks-tooltip-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.smart-table .table-body .task-title-container .task-meta-row .remarks-tooltip .remarks-tooltip-content .remarks-tooltip-list .remarks-tooltip-item {\n  padding: 8px 12px;\n  background: rgba(74, 158, 255, 0.08);\n  border-left: 3px solid rgba(74, 158, 255, 0.5);\n  border-radius: 6px;\n  color: var(--text-primary);\n  font-size: 0.85rem;\n  line-height: 1.5;\n  transition: all 0.2s ease;\n}\n.smart-table .table-body .task-title-container .task-meta-row .remarks-tooltip .remarks-tooltip-content .remarks-tooltip-list .remarks-tooltip-item:hover {\n  background: rgba(74, 158, 255, 0.15);\n  border-left-color: rgba(74, 158, 255, 0.8);\n  transform: translateX(2px);\n}\n.smart-table .table-body .subtasks-container {\n  margin-top: 8px;\n  padding-left: 24px;\n  border-left: 2px solid rgba(255, 255, 255, 0.08);\n  margin-left: 4px;\n}\n.smart-table .table-body .subtasks-container .subtask-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 4px;\n  padding-left: 8px;\n  position: relative;\n}\n.smart-table .table-body .subtasks-container .subtask-item::before {\n  content: "";\n  position: absolute;\n  left: -2px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 8px;\n  height: 1px;\n  background: rgba(255, 255, 255, 0.15);\n}\n.smart-table .table-body .subtasks-container .subtask-item .subtask-checkbox {\n  flex-shrink: 0;\n}\n.smart-table .table-body .subtasks-container .subtask-item .subtask-checkbox .subtask-checkbox-input {\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n  accent-color: #4a9eff;\n  border-radius: 3px;\n  transition: all 0.15s ease;\n}\n.smart-table .table-body .subtasks-container .subtask-item .subtask-checkbox .subtask-checkbox-input:hover:not(:disabled) {\n  transform: scale(1.1);\n}\n.smart-table .table-body .subtasks-container .subtask-item .subtask-checkbox .subtask-checkbox-input:checked {\n  background: #4a9eff;\n  border-color: #4a9eff;\n}\n.smart-table .table-body .subtasks-container .subtask-item .subtask-checkbox .subtask-checkbox-input:disabled,\n.smart-table .table-body .subtasks-container .subtask-item .subtask-checkbox .subtask-checkbox-input.disabled {\n  opacity: 0.9;\n  cursor: not-allowed;\n}\n.smart-table .table-body .subtasks-container .subtask-item .subtask-checkbox .subtask-checkbox-input:disabled:hover,\n.smart-table .table-body .subtasks-container .subtask-item .subtask-checkbox .subtask-checkbox-input.disabled:hover {\n  transform: none;\n}\n.smart-table .table-body .subtasks-container .subtask-item .subtask-content {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  flex: 1;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  padding: 6px 10px;\n  border-radius: 6px;\n  background: rgba(255, 255, 255, 0.02);\n  border: 1px solid rgba(255, 255, 255, 0.04);\n  min-width: 0;\n}\n.smart-table .table-body .subtasks-container .subtask-item .subtask-content.level-1 {\n  margin-left: 0;\n}\n.smart-table .table-body .subtasks-container .subtask-item .subtask-content.level-2 {\n  margin-left: 32px;\n  padding-left: 12px;\n  background: rgba(124, 58, 237, 0.04);\n  border-color: rgba(124, 58, 237, 0.1);\n}\n.smart-table .table-body .subtasks-container .subtask-item .subtask-content:hover {\n  background: rgba(255, 255, 255, 0.06);\n  border-color: rgba(74, 158, 255, 0.15);\n}\n.smart-table .table-body .subtasks-container .subtask-item .subtask-content:hover.level-2 {\n  background: rgba(124, 58, 237, 0.08);\n  border-color: rgba(124, 58, 237, 0.2);\n}\n.smart-table .table-body .subtasks-container .subtask-item .subtask-content .subtask-title-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  flex: 0 0 auto;\n  min-width: 0;\n  width: 100%;\n}\n.smart-table .table-body .subtasks-container .subtask-item .subtask-content .subtask-left-group {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex: 1;\n  min-width: 0;\n}\n.smart-table .table-body .subtasks-container .subtask-item .subtask-content .subtask-left-group .expand-btn.subtask-expand-btn {\n  min-width: 20px;\n  height: 20px;\n  margin-right: 8px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  color: rgba(255, 255, 255, 0.5);\n  border-radius: 4px;\n}\n.smart-table .table-body .subtasks-container .subtask-item .subtask-content .subtask-left-group .expand-btn.subtask-expand-btn i {\n  font-size: 10px;\n  transition: transform 0.2s ease;\n}\n.smart-table .table-body .subtasks-container .subtask-item .subtask-content .subtask-left-group .expand-btn.subtask-expand-btn:hover {\n  background: rgba(74, 158, 255, 0.15);\n  border-color: rgba(74, 158, 255, 0.3);\n  color: rgba(255, 255, 255, 0.9);\n}\n.smart-table .table-body .subtasks-container .subtask-item .subtask-content .subtask-left-group .expand-btn.subtask-expand-btn:hover i {\n  transform: scale(1.1);\n}\n.smart-table .table-body .subtasks-container .subtask-item .subtask-content .subtask-left-group .expand-btn.subtask-expand-btn.expanded {\n  background: rgba(74, 158, 255, 0.2);\n  border-color: rgba(74, 158, 255, 0.4);\n  color: #4a9eff;\n}\n.smart-table .table-body .subtasks-container .subtask-item .subtask-content .subtask-title {\n  flex: 1;\n  font-size: 0.875rem;\n  color: rgba(255, 255, 255, 0.85);\n  font-weight: 400;\n  line-height: 1.5;\n  word-wrap: break-word;\n  white-space: normal;\n  min-width: 0;\n  text-align: left;\n}\n.smart-table .table-body .subtasks-container .subtask-item .subtask-content .subtask-right-group {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-shrink: 0;\n  margin-left: auto;\n}\n.smart-table .table-body .subtasks-container .subtask-item .subtask-content .subtask-count {\n  font-size: 0.7rem;\n  color: rgba(255, 255, 255, 0.6);\n  font-weight: 600;\n  padding: 2px 7px;\n  background: rgba(74, 158, 255, 0.12);\n  border-radius: 5px;\n  border: 1px solid rgba(74, 158, 255, 0.2);\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.smart-table .table-body .subtasks-container .subtask-item .subtask-content .subtask-actions {\n  display: flex;\n  gap: 3px;\n  opacity: 0.6;\n  transition: opacity 0.2s ease;\n  flex-shrink: 0;\n}\n.smart-table .table-body .subtasks-container .subtask-item .subtask-content .subtask-actions .action-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 4px;\n  color: rgba(255, 255, 255, 0.5);\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 0.65rem;\n}\n.smart-table .table-body .subtasks-container .subtask-item .subtask-content .subtask-actions .action-btn i {\n  font-size: 9px;\n  line-height: 1;\n  color: rgba(255, 255, 255, 0.5);\n}\n.smart-table .table-body .subtasks-container .subtask-item .subtask-content .subtask-actions .action-btn:hover:not(.disabled) {\n  background: rgba(74, 158, 255, 0.2);\n  border-color: rgba(74, 158, 255, 0.4);\n  color: #4a9eff;\n  transform: translateY(-1px);\n}\n.smart-table .table-body .subtasks-container .subtask-item .subtask-content .subtask-actions .action-btn:hover:not(.disabled) i {\n  color: #4a9eff;\n}\n.smart-table .table-body .subtasks-container .subtask-item .subtask-content .subtask-actions .action-btn.disabled {\n  opacity: 0.9;\n  cursor: not-allowed;\n}\n.smart-table .table-body .subtasks-container .subtask-item .subtask-content .subtask-actions .action-btn.disabled i {\n  color: rgba(255, 255, 255, 0.9);\n}\n.smart-table .table-body .subtasks-container .subtask-item .subtask-content:hover .subtask-actions {\n  opacity: 1;\n}\n.smart-table .table-body .subtasks-container .subtask-item .subtask-content .subtask-meta-row {\n  display: flex;\n  align-items: center;\n  flex-wrap: nowrap;\n  gap: 6px;\n  margin-top: 4px;\n  padding-left: 0;\n  width: 100%;\n  max-width: 100%;\n  box-sizing: border-box;\n}\n.smart-table .table-body .subtasks-container .subtask-item .subtask-content .subtask-meta-row .subtask-status-indicator {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3px 7px;\n  border-radius: 4px;\n  font-size: 0.65rem;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.85);\n  text-transform: uppercase;\n  letter-spacing: 0.2px;\n  flex-shrink: 0;\n  white-space: nowrap;\n}\n.smart-table .table-body .subtasks-container .subtask-item .subtask-content .subtask-meta-row .subtask-priority-indicator {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3px 7px;\n  border-radius: 4px;\n  font-size: 0.65rem;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.85);\n  text-transform: uppercase;\n  letter-spacing: 0.2px;\n  flex-shrink: 0;\n  white-space: nowrap;\n}\n.smart-table .table-body .subtasks-container .subtask-item .subtask-content .subtask-meta-row .subtask-hours-indicator {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3px 7px;\n  background: rgba(16, 185, 129, 0.08);\n  border: 1px solid rgba(16, 185, 129, 0.15);\n  border-radius: 4px;\n  font-size: 0.65rem;\n  font-weight: 500;\n  color: rgba(16, 185, 129, 0.75);\n  letter-spacing: 0.2px;\n  flex-shrink: 0;\n  white-space: nowrap;\n}\n.smart-table .table-body .subtasks-container .subtask-item .subtask-content .subtask-meta-row .subtask-date-indicator {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3px 7px;\n  border-radius: 4px;\n  font-size: 0.65rem;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  flex-shrink: 0;\n  white-space: nowrap;\n}\n.smart-table .table-body .subtasks-container .subtask-item .subtask-content .subtask-meta-row .subtask-date-indicator.subtask-start-date {\n  background: rgba(59, 130, 246, 0.08);\n  border: 1px solid rgba(59, 130, 246, 0.15);\n  color: rgba(59, 130, 246, 0.75);\n}\n.smart-table .table-body .subtasks-container .subtask-item .subtask-content .subtask-meta-row .subtask-date-indicator.subtask-end-date {\n  background: rgba(239, 68, 68, 0.08);\n  border: 1px solid rgba(239, 68, 68, 0.15);\n  color: rgba(239, 68, 68, 0.75);\n}\n.smart-table .table-body .subtasks-container .subtask-item .subtask-content .subtask-meta-row .subtask-description-indicator {\n  position: relative;\n  background: rgba(124, 58, 237, 0.08);\n  border: 1px solid rgba(124, 58, 237, 0.15);\n  border-radius: 4px;\n  padding: 3px 7px;\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  flex: 1;\n  min-width: 0;\n  transition: all 0.2s ease;\n  overflow: hidden;\n}\n.smart-table .table-body .subtasks-container .subtask-item .subtask-content .subtask-meta-row .subtask-description-indicator .subtask-description-label {\n  font-size: 0.65rem;\n  font-weight: 500;\n  color: rgba(124, 58, 237, 0.75);\n  letter-spacing: 0.2px;\n  text-transform: uppercase;\n  flex-shrink: 0;\n  white-space: nowrap;\n}\n.smart-table .table-body .subtasks-container .subtask-item .subtask-content .subtask-meta-row .subtask-description-indicator .subtask-description-text {\n  font-size: 0.65rem;\n  color: var(--text-secondary);\n  line-height: 1.3;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  flex: 1;\n  min-width: 0;\n  font-style: italic;\n}\n.smart-table .table-body .table-cell:first-of-type:not(.selection-cell) {\n  width: auto;\n  flex: 1;\n}\n.smart-table .empty-row .empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  text-align: center;\n  color: var(--text-secondary);\n}\n.smart-table .empty-row .empty-state .empty-icon {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n  opacity: 0.5;\n}\n.smart-table .empty-row .empty-state h3 {\n  margin: 0 0 0.5rem 0;\n  color: var(--text-primary);\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n.smart-table .empty-row .empty-state p {\n  margin: 0;\n  font-size: 0.9rem;\n  opacity: 0.8;\n}\n.checkbox-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.checkbox-wrapper input[type=checkbox] {\n  opacity: 0;\n  position: absolute;\n  pointer-events: none;\n}\n.checkbox-wrapper .checkbox-custom {\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-radius: 4px;\n  background: transparent;\n  position: relative;\n  transition: all 0.2s ease;\n}\n.checkbox-wrapper .checkbox-custom::after {\n  content: "";\n  position: absolute;\n  top: 2px;\n  left: 5px;\n  width: 4px;\n  height: 8px;\n  border: solid white;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n  opacity: 0;\n  transition: opacity 0.2s ease;\n}\n.checkbox-wrapper input[type=checkbox]:checked + .checkbox-custom {\n  background: #4a9eff;\n  border-color: #4a9eff;\n}\n.checkbox-wrapper input[type=checkbox]:checked + .checkbox-custom::after {\n  opacity: 1;\n}\n.checkbox-wrapper input[type=checkbox]:indeterminate + .checkbox-custom {\n  background: #4a9eff;\n  border-color: #4a9eff;\n}\n.checkbox-wrapper input[type=checkbox]:indeterminate + .checkbox-custom::after {\n  content: "";\n  width: 8px;\n  height: 2px;\n  top: 7px;\n  left: 3px;\n  border: none;\n  background: white;\n  transform: none;\n  opacity: 1;\n}\n.checkbox-wrapper input[type=checkbox]:disabled + .checkbox-custom,\n.checkbox-wrapper .checkbox-custom.disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n  border-color: rgba(255, 255, 255, 0.1);\n  background: rgba(255, 255, 255, 0.05);\n}\n.checkbox-wrapper input[type=checkbox]:disabled + .checkbox-custom::after,\n.checkbox-wrapper .checkbox-custom.disabled::after {\n  opacity: 0.3;\n}\n.checkbox-wrapper input[type=checkbox]:disabled:checked + .checkbox-custom,\n.checkbox-wrapper .checkbox-custom.disabled.checked {\n  background: rgba(74, 158, 255, 0.3);\n  border-color: rgba(74, 158, 255, 0.3);\n}\n.checkbox-wrapper input[type=checkbox]:disabled:checked + .checkbox-custom::after,\n.checkbox-wrapper .checkbox-custom.disabled.checked::after {\n  opacity: 0.6;\n}\n.pagination-wrapper {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem;\n  background: rgba(42, 42, 42, 0.6);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n  flex-shrink: 0;\n}\n@media (max-width: 768px) {\n  .pagination-wrapper {\n    flex-direction: column;\n    gap: 1rem;\n  }\n}\n.pagination-info {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  color: var(--text-secondary);\n  font-size: 0.9rem;\n}\n.pagination-info .page-info {\n  font-weight: 500;\n}\n.pagination-info .page-size-selector {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.pagination-info .page-size-selector label {\n  color: var(--text-secondary);\n  font-size: 0.9rem;\n}\n.pagination-info .page-size-selector .page-size-select {\n  padding: 0.25rem 0.5rem;\n  background: rgba(58, 58, 58, 0.6);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 6px;\n  color: var(--text-primary);\n  font-size: 0.9rem;\n}\n.pagination-info .page-size-selector .page-size-select:focus {\n  outline: none;\n  border-color: rgba(74, 158, 255, 0.3);\n}\n.pagination-controls {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.pagination-controls .pagination-btn {\n  padding: 0.5rem 1rem;\n  background: rgba(58, 58, 58, 0.6);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 8px;\n  color: var(--text-primary);\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.pagination-controls .pagination-btn:hover:not(.disabled) {\n  background: rgba(74, 158, 255, 0.1);\n  border-color: rgba(74, 158, 255, 0.3);\n}\n.pagination-controls .pagination-btn.disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.pagination-controls .page-numbers {\n  display: flex;\n  gap: 0.25rem;\n}\n.pagination-controls .page-numbers .page-number {\n  width: 36px;\n  height: 36px;\n  background: rgba(58, 58, 58, 0.6);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 8px;\n  color: var(--text-primary);\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.pagination-controls .page-numbers .page-number:hover {\n  background: rgba(74, 158, 255, 0.1);\n  border-color: rgba(74, 158, 255, 0.3);\n}\n.pagination-controls .page-numbers .page-number.active {\n  background: #4a9eff;\n  border-color: #4a9eff;\n  color: white;\n}\n@media (max-width: 1024px) {\n  .smart-table-container {\n    border-radius: 12px;\n  }\n  .table-header {\n    padding: 1rem;\n  }\n  .table-controls {\n    gap: 1rem;\n  }\n  .search-input-wrapper {\n    max-width: 300px;\n  }\n}\n@media (max-width: 768px) {\n  .smart-table {\n    font-size: 0.8rem;\n  }\n  .smart-table .table-header-cell,\n  .smart-table .table-cell {\n    padding: 0.5rem;\n  }\n  .smart-table .table-header-cell .header-content {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.25rem;\n  }\n  .pagination-wrapper {\n    padding: 1rem;\n  }\n  .pagination-controls .page-numbers .page-number {\n    width: 32px;\n    height: 32px;\n    font-size: 0.8rem;\n  }\n}\n@media (max-width: 480px) {\n  .smart-table-container {\n    border-radius: 8px;\n    margin: 0.5rem;\n  }\n  .table-header {\n    padding: 0.5rem;\n  }\n  .search-input-wrapper {\n    max-width: 100%;\n  }\n  .table-actions {\n    flex-direction: column;\n    gap: 0.5rem;\n    width: 100%;\n  }\n  .export-dropdown,\n  .view-options {\n    width: 100%;\n  }\n  .view-options .view-btn {\n    flex: 1;\n  }\n}\n@keyframes slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes pulse {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.05);\n  }\n}\n@keyframes pulse-highlight {\n  0%, 100% {\n    box-shadow: 0 0 10px rgba(124, 58, 237, 0.3);\n  }\n  50% {\n    box-shadow: 0 0 20px rgba(124, 58, 237, 0.5);\n  }\n}\n@keyframes expandPulse {\n  0%, 100% {\n    box-shadow:\n      0 5px 20px rgba(124, 58, 237, 0.3),\n      0 2px 8px rgba(0, 0, 0, 0.2),\n      inset 0 1px 0 rgba(255, 255, 255, 0.15);\n  }\n  50% {\n    box-shadow:\n      0 7px 25px rgba(124, 58, 237, 0.4),\n      0 3px 12px rgba(0, 0, 0, 0.3),\n      inset 0 1px 0 rgba(255, 255, 255, 0.2);\n  }\n}\n@keyframes scheduleOverlapBlink {\n  0%, 100% {\n    background: rgba(239, 68, 68, 0.08);\n    border-color: rgba(239, 68, 68, 0.4);\n    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.3);\n  }\n  50% {\n    background: rgba(239, 68, 68, 0.15);\n    border-color: rgba(239, 68, 68, 0.6);\n    box-shadow: 0 0 8px 2px rgba(239, 68, 68, 0.5);\n  }\n}\n.schedule-overlap {\n  color: var(--text-primary) !important;\n  font-weight: 500;\n  padding: 2px 6px;\n  border-radius: 4px;\n  background: rgba(239, 68, 68, 0.08);\n  border: 1px solid rgba(239, 68, 68, 0.4);\n  position: relative;\n  animation: scheduleOverlapBlink 2s ease-in-out infinite;\n  transition: all 0.2s ease;\n}\n.schedule-overlap::before {\n  content: "";\n  position: absolute;\n  inset: -2px;\n  border-radius: 5px;\n  background: rgba(239, 68, 68, 0.1);\n  z-index: -1;\n  opacity: 0;\n  transition: opacity 0.2s ease;\n}\n.schedule-overlap:hover {\n  background: rgba(239, 68, 68, 0.18);\n  border-color: rgba(239, 68, 68, 0.7);\n  animation-play-state: paused;\n}\n.schedule-overlap:hover::before {\n  opacity: 1;\n}\n.subtasks-container {\n  margin-top: 16px;\n  padding-left: 24px;\n  border-left: 2px solid rgba(74, 158, 255, 0.2);\n  position: relative;\n  animation: slideIn 0.3s ease-out;\n}\n.subtasks-container::before {\n  content: "";\n  position: absolute;\n  left: -1px;\n  top: 0;\n  bottom: 0;\n  width: 2px;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(74, 158, 255, 0.4) 0%,\n      rgba(74, 158, 255, 0.1) 50%,\n      rgba(74, 158, 255, 0.1) 100%);\n  border-radius: 1px;\n}\n.subtasks-container .subtask-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 8px;\n  padding: 8px 12px;\n  border-radius: 10px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  background: rgba(255, 255, 255, 0.01);\n  border: 1px solid transparent;\n  animation: fadeIn 0.2s ease-out;\n}\n.subtasks-container .subtask-item:hover {\n  background: rgba(255, 255, 255, 0.03);\n  transform: translateX(6px);\n  border-color: rgba(74, 158, 255, 0.1);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.subtasks-container .subtask-item:last-child {\n  margin-bottom: 0;\n}\n:root {\n  --text-primary: #ffffff;\n  --text-secondary: #a1a1aa;\n  --background-primary: #0f0f0f;\n  --background-secondary: #1a1a1a;\n  --border-color: rgba(255, 255, 255, 0.1);\n  --accent-color: #4a9eff;\n  --accent-secondary: #7c3aed;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes slideIn {\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n.fade-in {\n  animation: fadeIn 0.3s ease-out;\n}\n.slide-in {\n  animation: slideIn 0.3s ease-out;\n}\n/*# sourceMappingURL=data-table.css.map */\n'] }]
  }], () => [{ type: ChangeDetectorRef }], { columns: [{
    type: Input
  }], data: [{
    type: Input
  }], config: [{
    type: Input
  }], actions: [{
    type: Input
  }], loading: [{
    type: Input
  }], emptyMessage: [{
    type: Input
  }], searchPlaceholder: [{
    type: Input
  }], isPeriodicTasks: [{
    type: Input
  }], externalSearch: [{
    type: Input
  }], rowClick: [{
    type: Output
  }], rowSelect: [{
    type: Output
  }], actionClick: [{
    type: Output
  }], sortChange: [{
    type: Output
  }], filterChange: [{
    type: Output
  }], pageChange: [{
    type: Output
  }], booleanToggle: [{
    type: Output
  }], tableRef: [{
    type: ViewChild,
    args: ["tableRef", { static: false }]
  }], headerRef: [{
    type: ViewChild,
    args: ["headerRef", { static: false }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DataTableComponent, { className: "DataTableComponent", filePath: "src/app/components/data-table/data-table.ts", lineNumber: 67 });
})();

export {
  DataTableComponent
};
//# sourceMappingURL=chunk-NTOVKSO6.js.map
