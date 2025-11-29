import {
  NotesService
} from "./chunk-FGXALKUN.js";
import {
  CategoryMasterService
} from "./chunk-LTHYET3S.js";
import {
  ToasterService
} from "./chunk-LTVL2GFZ.js";
import {
  ConfirmationService
} from "./chunk-Y44A5WDP.js";
import {
  CommonModule,
  Component,
  DatePipe,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  SlicePipe,
  ViewChild,
  __async,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  ɵNgSelectMultipleOption,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-OPSATDSU.js";

// src/app/components/notes/notes.ts
var _c0 = ["contentArea"];
var _c1 = ["lineNumbers"];
function NotesComponent_option_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    \u0275\u0275property("ngValue", c_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", c_r1.icon ? c_r1.icon + " " : "", "", c_r1.name);
  }
}
function NotesComponent_div_83_span_7_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const note_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.getCategoryIcon(note_r3.categoryId));
  }
}
function NotesComponent_div_83_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 58);
    \u0275\u0275template(1, NotesComponent_div_83_span_7_span_1_Template, 2, 1, "span", 59);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const note_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.getCategoryIcon(note_r3.categoryId));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", note_r3.categoryName, " ");
  }
}
function NotesComponent_div_83_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const note_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Updated ", \u0275\u0275pipeBind2(2, 1, note_r3.updatedOn, "MMM dd, yyyy HH:mm"));
  }
}
function NotesComponent_div_83_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275listener("click", function NotesComponent_div_83_Template_div_click_0_listener() {
      const note_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectNote(note_r3));
    });
    \u0275\u0275elementStart(1, "div", 48)(2, "button", 49);
    \u0275\u0275listener("click", function NotesComponent_div_83_Template_button_click_2_listener($event) {
      const note_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.toggleNoteImportant(note_r3.id);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 50);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 51);
    \u0275\u0275template(7, NotesComponent_div_83_span_7_Template, 3, 2, "span", 52);
    \u0275\u0275elementStart(8, "span", 53);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 54)(11, "span", 55);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, NotesComponent_div_83_span_14_Template, 3, 4, "span", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 57);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "slice");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const note_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", note_r3.id === (ctx_r3.selectedNote == null ? null : ctx_r3.selectedNote.id));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("important", note_r3.important);
    \u0275\u0275property("title", note_r3.important ? "Mark as not important" : "Mark as important");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", note_r3.important ? "\u2605" : "\u2606", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(note_r3.title || "Untitled");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", note_r3.categoryName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", note_r3.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 12, note_r3.createdOn, "MMM dd, yyyy HH:mm"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", note_r3.updatedOn);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(17, 15, note_r3.content, 0, 140));
  }
}
function NotesComponent_div_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275text(1, "No notes found");
    \u0275\u0275elementEnd();
  }
}
function NotesComponent_div_85_option_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    \u0275\u0275property("ngValue", c_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", c_r6.icon ? c_r6.icon + " " : "", "", c_r6.name);
  }
}
function NotesComponent_div_85_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 89);
    \u0275\u0275listener("click", function NotesComponent_div_85_button_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.duplicateNote());
    });
    \u0275\u0275element(1, "i", 90);
    \u0275\u0275elementEnd();
  }
}
function NotesComponent_div_85_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 91);
    \u0275\u0275listener("click", function NotesComponent_div_85_button_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.deleteSelectedNote());
    });
    \u0275\u0275element(1, "i", 92);
    \u0275\u0275elementEnd();
  }
}
function NotesComponent_div_85_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93);
    \u0275\u0275element(1, "i", 94);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Please select a category first before writing your note.");
    \u0275\u0275elementEnd()();
  }
}
function NotesComponent_div_85_div_27_div_24_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 118);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r3.currentMatchIndex + 1, " of ", ctx_r3.searchMatches.length);
  }
}
function NotesComponent_div_85_div_27_div_24_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 118);
    \u0275\u0275text(1, "No matches");
    \u0275\u0275elementEnd();
  }
}
function NotesComponent_div_85_div_27_div_24_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 119)(1, "button", 120);
    \u0275\u0275listener("click", function NotesComponent_div_85_div_27_div_24_div_3_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.findPrevious());
    });
    \u0275\u0275element(2, "i", 121);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 122);
    \u0275\u0275listener("click", function NotesComponent_div_85_div_27_div_24_div_3_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.findNext());
    });
    \u0275\u0275element(4, "i", 123);
    \u0275\u0275elementEnd()();
  }
}
function NotesComponent_div_85_div_27_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 113);
    \u0275\u0275template(1, NotesComponent_div_85_div_27_div_24_span_1_Template, 2, 2, "span", 114)(2, NotesComponent_div_85_div_27_div_24_span_2_Template, 2, 0, "span", 114)(3, NotesComponent_div_85_div_27_div_24_div_3_Template, 5, 0, "div", 115);
    \u0275\u0275elementStart(4, "button", 116);
    \u0275\u0275listener("click", function NotesComponent_div_85_div_27_div_24_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.closeSearchReplace());
    });
    \u0275\u0275element(5, "i", 117);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.searchMatches.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.searchMatches.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.searchMatches.length > 0);
  }
}
function NotesComponent_div_85_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 95)(1, "div", 96)(2, "span", 97);
    \u0275\u0275text(3, "SEARCH");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 98)(5, "div", 99)(6, "input", 100);
    \u0275\u0275twoWayListener("ngModelChange", function NotesComponent_div_85_div_27_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.searchText, $event) || (ctx_r3.searchText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function NotesComponent_div_85_div_27_Template_input_input_6_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.performSearch());
    })("keydown.enter", function NotesComponent_div_85_div_27_Template_input_keydown_enter_6_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.findNext());
    })("keydown.escape", function NotesComponent_div_85_div_27_Template_input_keydown_escape_6_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.closeSearchReplace());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 101)(8, "button", 102);
    \u0275\u0275listener("click", function NotesComponent_div_85_div_27_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleCaseSensitive());
    });
    \u0275\u0275text(9, " Aa ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 103);
    \u0275\u0275listener("click", function NotesComponent_div_85_div_27_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleWholeWord());
    });
    \u0275\u0275text(11, " ab ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 104);
    \u0275\u0275listener("click", function NotesComponent_div_85_div_27_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleRegex());
    });
    \u0275\u0275text(13, " .* ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 105)(15, "input", 106);
    \u0275\u0275twoWayListener("ngModelChange", function NotesComponent_div_85_div_27_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.replaceText, $event) || (ctx_r3.replaceText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function NotesComponent_div_85_div_27_Template_input_keydown_enter_15_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.replaceNext());
    })("keydown.escape", function NotesComponent_div_85_div_27_Template_input_keydown_escape_15_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.closeSearchReplace());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 107)(17, "button", 108);
    \u0275\u0275listener("click", function NotesComponent_div_85_div_27_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.replaceAll());
    });
    \u0275\u0275text(18, " AB ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 109);
    \u0275\u0275listener("click", function NotesComponent_div_85_div_27_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.replaceNext());
    });
    \u0275\u0275elementStart(20, "span", 110);
    \u0275\u0275text(21, "ab");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 111);
    \u0275\u0275text(23, "\u2193");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(24, NotesComponent_div_85_div_27_div_24_Template, 6, 3, "div", 112);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.searchText);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r3.searchCaseSensitive);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r3.searchWholeWord);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r3.searchRegex);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.replaceText);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r3.searchText || ctx_r3.searchMatches.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r3.searchText || ctx_r3.searchMatches.length === 0);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r3.searchText);
  }
}
function NotesComponent_div_85_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 124);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const num_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(num_r12);
  }
}
function NotesComponent_div_85_div_35_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 137);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.noteUrls.length);
  }
}
function NotesComponent_div_85_div_35_div_11_div_3_div_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 147);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const url_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(url_r16.category_icon);
  }
}
function NotesComponent_div_85_div_35_div_11_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 143);
    \u0275\u0275listener("click", function NotesComponent_div_85_div_35_div_11_div_3_div_1_Template_div_click_0_listener() {
      const url_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(5);
      ctx_r3.selectedUrlId = url_r16.url_id;
      return \u0275\u0275resetView(ctx_r3.addUrlToNote());
    });
    \u0275\u0275template(1, NotesComponent_div_85_div_35_div_11_div_3_div_1_span_1_Template, 2, 1, "span", 144);
    \u0275\u0275elementStart(2, "span", 145);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 146);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const url_r16 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", url_r16.category_icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(url_r16.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(url_r16.url);
  }
}
function NotesComponent_div_85_div_35_div_11_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 141);
    \u0275\u0275template(1, NotesComponent_div_85_div_35_div_11_div_3_div_1_Template, 6, 3, "div", 142);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.availableUrls);
  }
}
function NotesComponent_div_85_div_35_div_11_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 148);
    \u0275\u0275text(1, "No available URLs for this category");
    \u0275\u0275elementEnd();
  }
}
function NotesComponent_div_85_div_35_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 138);
    \u0275\u0275listener("click", function NotesComponent_div_85_div_35_div_11_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 139);
    \u0275\u0275text(2, "Select URL to add");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, NotesComponent_div_85_div_35_div_11_div_3_Template, 2, 1, "div", 140)(4, NotesComponent_div_85_div_35_div_11_ng_template_4_Template, 2, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const noUrlsTemplate_r17 = \u0275\u0275reference(5);
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("top", ctx_r3.dropdownPosition == null ? null : ctx_r3.dropdownPosition.top, "px")("right", ctx_r3.dropdownPosition == null ? null : ctx_r3.dropdownPosition.right, "px");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r3.availableUrls.length > 0)("ngIfElse", noUrlsTemplate_r17);
  }
}
function NotesComponent_div_85_div_35_div_12_div_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 157);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const urlItem_r19 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(urlItem_r19.category_icon);
  }
}
function NotesComponent_div_85_div_35_div_12_div_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 158);
    \u0275\u0275listener("click", function NotesComponent_div_85_div_35_div_12_div_2_span_4_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r20);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(1, "i", 159);
    \u0275\u0275elementStart(2, "span", 160);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const urlItem_r19 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275property("title", ctx_r3.getCredentialTooltip(urlItem_r19.credentials));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(urlItem_r19.credentials.length);
  }
}
function NotesComponent_div_85_div_35_div_12_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 153);
    \u0275\u0275listener("click", function NotesComponent_div_85_div_35_div_12_div_2_Template_div_click_0_listener() {
      const urlItem_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.openUrl(urlItem_r19.url));
    });
    \u0275\u0275template(1, NotesComponent_div_85_div_35_div_12_div_2_span_1_Template, 2, 1, "span", 154);
    \u0275\u0275elementStart(2, "span", 155);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, NotesComponent_div_85_div_35_div_12_div_2_span_4_Template, 4, 2, "span", 156);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const urlItem_r19 = ctx.$implicit;
    \u0275\u0275property("title", urlItem_r19.label + " - " + urlItem_r19.url);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", urlItem_r19.category_icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(urlItem_r19.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", urlItem_r19.credentials && urlItem_r19.credentials.length > 0);
  }
}
function NotesComponent_div_85_div_35_div_12_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 161);
    \u0275\u0275listener("click", function NotesComponent_div_85_div_35_div_12_div_3_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r3 = \u0275\u0275nextContext(4);
      ctx_r3.urlsSectionCollapsed = false;
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275property("title", "Click to expand and see all " + ctx_r3.noteUrls.length + " URLs");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", ctx_r3.noteUrls.length - 3, " more ");
  }
}
function NotesComponent_div_85_div_35_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 149)(1, "div", 150);
    \u0275\u0275template(2, NotesComponent_div_85_div_35_div_12_div_2_Template, 5, 4, "div", 151)(3, NotesComponent_div_85_div_35_div_12_div_3_Template, 2, 2, "div", 152);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.noteUrls.slice(0, 3));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.noteUrls.length > 3);
  }
}
function NotesComponent_div_85_div_35_div_13_div_1_div_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 173);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const urlItem_r23 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(urlItem_r23.category_icon);
  }
}
function NotesComponent_div_85_div_35_div_13_div_1_div_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 158);
    \u0275\u0275listener("click", function NotesComponent_div_85_div_35_div_13_div_1_div_1_span_7_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r24);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(1, "i", 159);
    \u0275\u0275elementStart(2, "span", 160);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const urlItem_r23 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(5);
    \u0275\u0275property("title", ctx_r3.getCredentialTooltip(urlItem_r23.credentials));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(urlItem_r23.credentials.length);
  }
}
function NotesComponent_div_85_div_35_div_13_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 166)(1, "div", 167);
    \u0275\u0275listener("click", function NotesComponent_div_85_div_35_div_13_div_1_div_1_Template_div_click_1_listener() {
      const urlItem_r23 = \u0275\u0275restoreView(_r22).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r3.openUrl(urlItem_r23.url));
    });
    \u0275\u0275template(2, NotesComponent_div_85_div_35_div_13_div_1_div_1_span_2_Template, 2, 1, "span", 168);
    \u0275\u0275elementStart(3, "span", 169);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 170);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, NotesComponent_div_85_div_35_div_13_div_1_div_1_span_7_Template, 4, 2, "span", 156);
    \u0275\u0275element(8, "i", 171);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 172);
    \u0275\u0275listener("click", function NotesComponent_div_85_div_35_div_13_div_1_div_1_Template_button_click_9_listener($event) {
      const urlItem_r23 = \u0275\u0275restoreView(_r22).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(5);
      ctx_r3.removeUrlFromNote(urlItem_r23.url_id);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(10, "i", 117);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const urlItem_r23 = ctx.$implicit;
    \u0275\u0275property("title", urlItem_r23.url);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", urlItem_r23.category_icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(urlItem_r23.label);
    \u0275\u0275advance();
    \u0275\u0275property("title", urlItem_r23.url);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(urlItem_r23.url);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", urlItem_r23.credentials && urlItem_r23.credentials.length > 0);
  }
}
function NotesComponent_div_85_div_35_div_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 164);
    \u0275\u0275template(1, NotesComponent_div_85_div_35_div_13_div_1_div_1_Template, 11, 6, "div", 165);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.noteUrls);
  }
}
function NotesComponent_div_85_div_35_div_13_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 174)(1, "span");
    \u0275\u0275text(2, "No URLs yet. Click ");
    \u0275\u0275element(3, "i", 8);
    \u0275\u0275text(4, " to add.");
    \u0275\u0275elementEnd()();
  }
}
function NotesComponent_div_85_div_35_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 162);
    \u0275\u0275template(1, NotesComponent_div_85_div_35_div_13_div_1_Template, 2, 1, "div", 163)(2, NotesComponent_div_85_div_35_div_13_ng_template_2_Template, 5, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const noUrlsMessage_r25 = \u0275\u0275reference(3);
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.noteUrls.length > 0)("ngIfElse", noUrlsMessage_r25);
  }
}
function NotesComponent_div_85_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 125)(1, "div", 126);
    \u0275\u0275listener("click", function NotesComponent_div_85_div_35_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.urlsSectionCollapsed = !ctx_r3.urlsSectionCollapsed);
    });
    \u0275\u0275elementStart(2, "div", 127);
    \u0275\u0275element(3, "i", 128);
    \u0275\u0275elementStart(4, "span", 129);
    \u0275\u0275text(5, "URLs/Docs");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, NotesComponent_div_85_div_35_span_6_Template, 2, 1, "span", 130);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 131);
    \u0275\u0275listener("click", function NotesComponent_div_85_div_35_Template_div_click_7_listener($event) {
      \u0275\u0275restoreView(_r13);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(8, "div", 132)(9, "button", 133);
    \u0275\u0275listener("click", function NotesComponent_div_85_div_35_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleAddUrlDropdown());
    });
    \u0275\u0275element(10, "i", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, NotesComponent_div_85_div_35_div_11_Template, 6, 6, "div", 134);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(12, NotesComponent_div_85_div_35_div_12_Template, 4, 2, "div", 135)(13, NotesComponent_div_85_div_35_div_13_Template, 4, 2, "div", 136);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("fa-chevron-down", !ctx_r3.urlsSectionCollapsed)("fa-chevron-right", ctx_r3.urlsSectionCollapsed);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r3.noteUrls.length > 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r3.selectedNote.categoryId);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.showAddUrlDropdown && ctx_r3.selectedNote.categoryId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.urlsSectionCollapsed && ctx_r3.noteUrls.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.urlsSectionCollapsed);
  }
}
function NotesComponent_div_85_span_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Updated: ", \u0275\u0275pipeBind2(2, 1, ctx_r3.selectedNote.updatedOn, "MMM dd, yyyy HH:mm"));
  }
}
function NotesComponent_div_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63)(1, "div", 64)(2, "button", 65);
    \u0275\u0275listener("click", function NotesComponent_div_85_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleSelectedNoteImportant());
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function NotesComponent_div_85_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.selectedNote.title, $event) || (ctx_r3.selectedNote.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function NotesComponent_div_85_Template_input_ngModelChange_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onTitleChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "select", 67);
    \u0275\u0275twoWayListener("ngModelChange", function NotesComponent_div_85_Template_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.selectedNote.categoryId, $event) || (ctx_r3.selectedNote.categoryId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function NotesComponent_div_85_Template_select_ngModelChange_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onCategoryChange());
    });
    \u0275\u0275elementStart(6, "option", 13);
    \u0275\u0275text(7, "Select Category *");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, NotesComponent_div_85_option_8_Template, 2, 3, "option", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "div", 68);
    \u0275\u0275elementStart(10, "button", 69);
    \u0275\u0275listener("click", function NotesComponent_div_85_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.decreaseIndent());
    });
    \u0275\u0275text(11, "\u21A4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 70);
    \u0275\u0275listener("click", function NotesComponent_div_85_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.insertBullet());
    });
    \u0275\u0275text(13, "\u25C9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 71);
    \u0275\u0275listener("click", function NotesComponent_div_85_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.increaseIndent());
    });
    \u0275\u0275text(15, "\u21A6");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 72);
    \u0275\u0275listener("click", function NotesComponent_div_85_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleTextWrap());
    });
    \u0275\u0275text(17, "\u21A9\uFE0E");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 73);
    \u0275\u0275listener("click", function NotesComponent_div_85_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleSearchReplace());
    });
    \u0275\u0275element(19, "i", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, NotesComponent_div_85_button_20_Template, 2, 0, "button", 75)(21, NotesComponent_div_85_button_21_Template, 2, 0, "button", 76);
    \u0275\u0275elementStart(22, "button", 77);
    \u0275\u0275listener("click", function NotesComponent_div_85_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.saveSelectedNote());
    });
    \u0275\u0275element(23, "i", 78);
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(26, NotesComponent_div_85_div_26_Template, 4, 0, "div", 79)(27, NotesComponent_div_85_div_27_Template, 25, 11, "div", 80);
    \u0275\u0275elementStart(28, "div", 81)(29, "div", 82, 0);
    \u0275\u0275listener("scroll", function NotesComponent_div_85_Template_div_scroll_29_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.syncScrollFromLineNumbers());
    });
    \u0275\u0275elementStart(31, "div", 83);
    \u0275\u0275template(32, NotesComponent_div_85_div_32_Template, 2, 1, "div", 84);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "textarea", 85, 1);
    \u0275\u0275twoWayListener("ngModelChange", function NotesComponent_div_85_Template_textarea_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.selectedNote.content, $event) || (ctx_r3.selectedNote.content = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function NotesComponent_div_85_Template_textarea_ngModelChange_33_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.onContentChange();
      ctx_r3.performSearch();
      return \u0275\u0275resetView(ctx_r3.updateLineCount());
    })("scroll", function NotesComponent_div_85_Template_textarea_scroll_33_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.syncScroll());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(35, NotesComponent_div_85_div_35_Template, 14, 9, "div", 86);
    \u0275\u0275elementStart(36, "div", 87)(37, "span");
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(40, NotesComponent_div_85_span_40_Template, 3, 4, "span", 88);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("important", ctx_r3.selectedNote.important);
    \u0275\u0275property("title", ctx_r3.selectedNote.important ? "Mark as not important" : "Mark as important");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.selectedNote.important ? "\u2605" : "\u2606", " ");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.selectedNote.title);
    \u0275\u0275property("disabled", ctx_r3.isNewNoteWithoutCategory());
    \u0275\u0275advance();
    \u0275\u0275classProp("required", ctx_r3.isNewNoteWithoutCategory());
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.selectedNote.categoryId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.categories);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.isNewNoteWithoutCategory());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.isNewNoteWithoutCategory());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.isNewNoteWithoutCategory());
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", !ctx_r3.isTextWrapped);
    \u0275\u0275property("disabled", ctx_r3.isNewNoteWithoutCategory())("title", ctx_r3.isTextWrapped ? "Disable text wrapping" : "Enable text wrapping");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r3.showSearchReplace);
    \u0275\u0275property("disabled", ctx_r3.isNewNoteWithoutCategory());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.selectedNote.id && ctx_r3.selectedNote.id > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.selectedNote.id && ctx_r3.selectedNote.id > 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.selectedNote.id && ctx_r3.selectedNote.id > 0 ? "Update" : "Save");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isNewNoteWithoutCategory());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.showSearchReplace);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r3.getLineNumbers());
    \u0275\u0275advance();
    \u0275\u0275classProp("unwrapped", !ctx_r3.isTextWrapped);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.selectedNote.content);
    \u0275\u0275property("disabled", ctx_r3.isNewNoteWithoutCategory());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.selectedNote && ctx_r3.selectedNote.id && ctx_r3.selectedNote.id > 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Created: ", \u0275\u0275pipeBind2(39, 34, ctx_r3.selectedNote.createdOn, "MMM dd, yyyy HH:mm"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.selectedNote.updatedOn);
  }
}
function NotesComponent_div_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 175)(1, "p");
    \u0275\u0275text(2, "Select a note or create a new one.");
    \u0275\u0275elementEnd()();
  }
}
var NotesComponent = class _NotesComponent {
  notesService;
  categoryMasterService;
  toaster;
  confirmation;
  notes = [];
  categories = [];
  selectedNote = null;
  filters = { search: "", categoryId: null, createdFrom: null, createdTo: null, important: "all", sort: "createdOn_desc" };
  loading = false;
  isTextWrapped = true;
  contentArea;
  lineNumbers;
  totalLines = 1;
  lineHeights = [];
  // Store heights for each line when wrapped
  // Auto-save properties
  autoSaveTimer = null;
  originalNoteState = null;
  isAutoSaving = false;
  autoSaveStatus = "idle";
  // Search and Replace properties
  showSearchReplace = false;
  searchText = "";
  replaceText = "";
  searchCaseSensitive = false;
  searchWholeWord = false;
  searchRegex = false;
  searchMatches = [];
  currentMatchIndex = -1;
  keyboardShortcutHandler;
  // URL management properties
  noteUrls = [];
  availableUrls = [];
  showAddUrlDropdown = false;
  selectedUrlId = null;
  loadingUrls = false;
  urlsSectionCollapsed = true;
  // Start collapsed to save space for note editor
  dropdownPosition = null;
  constructor(notesService, categoryMasterService, toaster, confirmation) {
    this.notesService = notesService;
    this.categoryMasterService = categoryMasterService;
    this.toaster = toaster;
    this.confirmation = confirmation;
  }
  STORAGE_KEYS = {
    selectedNoteId: "omni-planner-notes-selected-note-id",
    textWrap: "omni-planner-notes-text-wrap",
    sort: "omni-planner-notes-sort"
  };
  ngOnInit() {
    this.loadSavedState();
    this.loadCategories();
    this.loadNotes();
    this.setupKeyboardShortcuts();
  }
  setupKeyboardShortcuts() {
    this.keyboardShortcutHandler = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "f") {
        event.preventDefault();
        if (this.selectedNote && !this.isNewNoteWithoutCategory()) {
          this.toggleSearchReplace();
        }
      }
      if (event.key === "Escape" && this.showSearchReplace) {
        this.closeSearchReplace();
      }
    };
    document.addEventListener("keydown", this.keyboardShortcutHandler);
  }
  ngOnDestroy() {
    if (this.keyboardShortcutHandler) {
      document.removeEventListener("keydown", this.keyboardShortcutHandler);
    }
  }
  loadSavedState() {
    try {
      const savedTextWrap = localStorage.getItem(this.STORAGE_KEYS.textWrap);
      if (savedTextWrap !== null) {
        this.isTextWrapped = savedTextWrap === "true";
      }
      const savedSort = localStorage.getItem(this.STORAGE_KEYS.sort);
      if (savedSort) {
        this.filters.sort = savedSort;
      }
    } catch (error) {
      console.warn("Failed to load saved state from localStorage:", error);
    }
  }
  saveSelectedNoteId(noteId) {
    try {
      if (noteId && noteId > 0) {
        localStorage.setItem(this.STORAGE_KEYS.selectedNoteId, noteId.toString());
      } else {
        localStorage.removeItem(this.STORAGE_KEYS.selectedNoteId);
      }
    } catch (error) {
      console.warn("Failed to save selected note ID to localStorage:", error);
    }
  }
  saveTextWrapState() {
    try {
      localStorage.setItem(this.STORAGE_KEYS.textWrap, this.isTextWrapped.toString());
    } catch (error) {
      console.warn("Failed to save text wrap state to localStorage:", error);
    }
  }
  saveSortSelection() {
    try {
      localStorage.setItem(this.STORAGE_KEYS.sort, this.filters.sort);
    } catch (error) {
      console.warn("Failed to save sort selection to localStorage:", error);
    }
  }
  refresh() {
    this.loadNotes();
  }
  onFiltersChanged() {
    this.saveSortSelection();
    this.loadNotes();
  }
  resetFilters() {
    this.filters.search = "";
    this.filters.categoryId = null;
    this.filters.createdFrom = null;
    this.filters.createdTo = null;
    this.filters.important = "all";
    try {
      const savedSort = localStorage.getItem(this.STORAGE_KEYS.sort);
      this.filters.sort = savedSort ? savedSort : "createdOn_desc";
    } catch (error) {
      this.filters.sort = "createdOn_desc";
    }
    this.loadNotes();
  }
  selectNote(note) {
    this.clearAutoSaveTimer();
    this.selectedNote = __spreadProps(__spreadValues({}, note), { important: note.important ?? false });
    this.saveSelectedNoteId(note.id);
    this.originalNoteState = JSON.parse(JSON.stringify(__spreadProps(__spreadValues({}, note), { important: note.important ?? false })));
    this.autoSaveStatus = "idle";
    this.searchMatches = [];
    this.currentMatchIndex = -1;
    if (this.showSearchReplace && this.searchText) {
      setTimeout(() => this.performSearch(), 0);
    }
    if (note.id && note.id > 0) {
      this.loadNoteUrls();
    } else {
      this.noteUrls = [];
      this.availableUrls = [];
    }
    setTimeout(() => {
      this.updateLineCount();
      setTimeout(() => {
        this.syncScroll();
      }, 150);
    }, 100);
  }
  toggleTextWrap() {
    this.isTextWrapped = !this.isTextWrapped;
    this.saveTextWrapState();
    setTimeout(() => {
      this.updateLineCount();
      const lineNumbersEl = this.lineNumbers?.nativeElement;
      if (lineNumbersEl && !this.isTextWrapped) {
        const lineNumberElements = lineNumbersEl.querySelectorAll(".line-number");
        lineNumberElements.forEach((el) => {
          el.style.height = "";
          el.style.minHeight = "";
        });
      }
    }, 100);
  }
  isNewNoteWithoutCategory() {
    return !!(this.selectedNote && this.selectedNote.id === 0 && this.selectedNote.categoryId == null);
  }
  startNewNote() {
    this.clearAutoSaveTimer();
    this.selectedNote = {
      id: 0,
      title: "",
      content: "",
      categoryId: null,
      categoryName: void 0,
      createdOn: /* @__PURE__ */ new Date(),
      updatedOn: null,
      important: false
    };
    this.saveSelectedNoteId(null);
    this.originalNoteState = null;
    this.autoSaveStatus = "idle";
    setTimeout(() => this.updateLineCount(), 100);
  }
  duplicateNote() {
    if (!this.selectedNote) {
      return;
    }
    const copy = __spreadProps(__spreadValues({}, this.selectedNote), { id: 0, title: `${this.selectedNote.title || "Untitled"} (Copy)`, createdOn: /* @__PURE__ */ new Date(), updatedOn: null, important: false });
    this.selectedNote = copy;
    this.originalNoteState = null;
    this.autoSaveStatus = "idle";
  }
  toggleNoteImportant(noteId) {
    const note = this.notes.find((n) => n.id === noteId);
    if (note) {
      const oldImportant = note.important;
      note.important = !note.important;
      if (this.selectedNote && this.selectedNote.id === noteId) {
        this.selectedNote.important = note.important;
      }
      this.notesService.updateNote(__spreadProps(__spreadValues({}, note), { important: note.important })).then((response) => {
        this.toaster.success(response.message);
        this.loadNotes();
      }).catch((err) => {
        note.important = oldImportant;
        if (this.selectedNote && this.selectedNote.id === noteId) {
          this.selectedNote.important = oldImportant;
        }
        const msg = err?.message || "Failed to update note importance";
        this.toaster.error(msg);
      });
    }
  }
  toggleSelectedNoteImportant() {
    if (!this.selectedNote) {
      return;
    }
    this.selectedNote.important = !this.selectedNote.important;
    this.onTitleChange();
  }
  insertBullet() {
    if (!this.selectedNote) {
      return;
    }
    const ta = this.contentArea?.nativeElement;
    const value = this.selectedNote.content || "";
    if (!ta) {
      this.selectedNote.content = (value ? value + "\n" : "") + "    \u27A5 ";
      this.onContentChange();
      return;
    }
    const start = ta.selectionStart ?? value.length;
    const end = ta.selectionEnd ?? start;
    const lineEnd = value.indexOf("\n", start);
    let insertPosition;
    if (lineEnd === -1) {
      insertPosition = value.length;
      const needsNewline = value.length > 0 && value[value.length - 1] !== "\n";
      const bulletText = (needsNewline ? "\n" : "") + "    \u27A5 ";
      const newValue = value.slice(0, insertPosition) + bulletText + value.slice(insertPosition);
      this.selectedNote.content = newValue;
      this.onContentChange();
      setTimeout(() => {
        try {
          const newCaretPos = insertPosition + bulletText.length;
          ta.setSelectionRange(newCaretPos, newCaretPos);
          ta.focus();
        } catch {
        }
      });
    } else {
      insertPosition = lineEnd + 1;
      const bulletText = "    \u27A5 ";
      const newValue = value.slice(0, insertPosition) + bulletText + value.slice(insertPosition);
      this.selectedNote.content = newValue;
      this.onContentChange();
      setTimeout(() => {
        try {
          const newCaretPos = insertPosition + bulletText.length;
          ta.setSelectionRange(newCaretPos, newCaretPos);
          ta.focus();
        } catch {
        }
      });
    }
  }
  increaseIndent() {
    if (!this.selectedNote) {
      return;
    }
    const ta = this.contentArea?.nativeElement;
    const value = this.selectedNote.content || "";
    if (!ta) {
      return;
    }
    const start = ta.selectionStart ?? value.length;
    const end = ta.selectionEnd ?? start;
    const firstLineStart = value.lastIndexOf("\n", start - 1) + 1;
    const lastLineEnd = value.indexOf("\n", end - 1);
    const selectionEnd = lastLineEnd === -1 ? value.length : lastLineEnd;
    const before = value.slice(0, firstLineStart);
    const selected = value.slice(firstLineStart, selectionEnd);
    const after = value.slice(selectionEnd);
    const indented = selected.split("\n").map((line) => "    " + line).join("\n");
    const newValue = before + indented + after;
    this.selectedNote.content = newValue;
    this.onContentChange();
    const lineCount = selected.split("\n").length;
    const lengthDiff = lineCount * 4;
    const newStart = start + (start === firstLineStart ? 0 : 4);
    const newEnd = end + lengthDiff;
    setTimeout(() => {
      try {
        ta.setSelectionRange(newStart, newEnd);
        ta.focus();
      } catch {
      }
    });
  }
  decreaseIndent() {
    if (!this.selectedNote) {
      return;
    }
    const ta = this.contentArea?.nativeElement;
    const value = this.selectedNote.content || "";
    if (!ta) {
      return;
    }
    const start = ta.selectionStart ?? value.length;
    const end = ta.selectionEnd ?? start;
    const firstLineStart = value.lastIndexOf("\n", start - 1) + 1;
    const lastLineEnd = value.indexOf("\n", end - 1);
    const selectionEnd = lastLineEnd === -1 ? value.length : lastLineEnd;
    const before = value.slice(0, firstLineStart);
    const selected = value.slice(firstLineStart, selectionEnd);
    const after = value.slice(selectionEnd);
    const unindented = selected.split("\n").map((line) => {
      let trimmed = line;
      let removed = 0;
      while (removed < 4 && trimmed.startsWith(" ")) {
        trimmed = trimmed.substring(1);
        removed++;
      }
      return trimmed;
    }).join("\n");
    const newValue = before + unindented + after;
    this.selectedNote.content = newValue;
    this.onContentChange();
    const lines = selected.split("\n");
    let totalRemoved = 0;
    lines.forEach((line) => {
      let spaces = 0;
      for (let i = 0; i < Math.min(4, line.length); i++) {
        if (line[i] === " ")
          spaces++;
        else
          break;
      }
      totalRemoved += spaces;
    });
    const newStart = Math.max(firstLineStart, start - (start > firstLineStart ? 4 : 0));
    const newEnd = end - totalRemoved;
    setTimeout(() => {
      try {
        ta.setSelectionRange(newStart, Math.max(newStart, newEnd));
        ta.focus();
      } catch {
      }
    });
  }
  // Auto-save methods
  onContentChange() {
    if (!this.selectedNote) {
      return;
    }
    this.scheduleAutoSave();
  }
  onTitleChange() {
    if (!this.selectedNote) {
      return;
    }
    this.scheduleAutoSave();
  }
  onCategoryChange() {
    if (!this.selectedNote) {
      return;
    }
    if (this.selectedNote.id === 0 && this.selectedNote.categoryId != null) {
      if ((this.selectedNote.title || "").trim() || (this.selectedNote.content || "").trim()) {
        this.scheduleAutoSave();
      }
      this.loadAvailableUrls();
    } else {
      this.scheduleAutoSave();
      if (this.selectedNote.id && this.selectedNote.id > 0) {
        this.loadNoteUrls();
      }
    }
  }
  scheduleAutoSave() {
    this.clearAutoSaveTimer();
    this.autoSaveTimer = setTimeout(() => {
      this.performAutoSave();
    }, 3e3);
    if (this.autoSaveStatus === "saved") {
      this.autoSaveStatus = "idle";
    }
  }
  clearAutoSaveTimer() {
    if (this.autoSaveTimer) {
      clearTimeout(this.autoSaveTimer);
      this.autoSaveTimer = null;
    }
  }
  performAutoSave() {
    return __async(this, null, function* () {
      if (!this.selectedNote) {
        return;
      }
      if (this.hasNoteChanged()) {
        if (this.selectedNote.id === 0 && this.selectedNote.categoryId == null) {
          return;
        }
        this.isAutoSaving = true;
        this.autoSaveStatus = "saving";
        try {
          if (this.selectedNote.id && this.selectedNote.id > 0) {
            const response = yield this.notesService.updateNote(this.selectedNote);
            this.selectedNote = response.data;
            this.saveSelectedNoteId(response.data.id);
            this.originalNoteState = JSON.parse(JSON.stringify(response.data));
            this.autoSaveStatus = "saved";
            this.toaster.success(response.message);
            yield this.loadNotes();
          } else {
            const response = yield this.notesService.createNote(this.selectedNote);
            this.selectedNote = response.data;
            this.saveSelectedNoteId(response.data.id);
            this.originalNoteState = JSON.parse(JSON.stringify(response.data));
            this.autoSaveStatus = "saved";
            this.toaster.success(response.message);
            yield this.loadNotes();
          }
        } catch (err) {
          const msg = err?.message || "Auto-save failed";
          this.toaster.error(msg);
          console.warn("Auto-save failed:", err);
          this.autoSaveStatus = "idle";
        } finally {
          this.isAutoSaving = false;
        }
      }
    });
  }
  hasNoteChanged() {
    if (!this.selectedNote || !this.originalNoteState) {
      return !!(this.selectedNote && ((this.selectedNote.title || "").trim() || (this.selectedNote.content || "").trim()));
    }
    return (this.selectedNote.title || "") !== (this.originalNoteState.title || "") || (this.selectedNote.content || "") !== (this.originalNoteState.content || "") || this.selectedNote.categoryId !== this.originalNoteState.categoryId || (this.selectedNote.important ?? false) !== (this.originalNoteState.important ?? false);
  }
  saveSelectedNote() {
    return __async(this, null, function* () {
      this.clearAutoSaveTimer();
      if (!this.selectedNote) {
        return;
      }
      if (this.selectedNote.categoryId == null) {
        this.toaster.warn("Please select a category before saving.");
        return;
      }
      this.loading = true;
      try {
        if (this.selectedNote.id && this.selectedNote.id > 0) {
          const response = yield this.notesService.updateNote(this.selectedNote);
          this.selectedNote = response.data;
          this.saveSelectedNoteId(response.data.id);
          this.originalNoteState = JSON.parse(JSON.stringify(response.data));
          this.autoSaveStatus = "saved";
          this.toaster.success(response.message);
        } else {
          const response = yield this.notesService.createNote(this.selectedNote);
          this.selectedNote = response.data;
          this.saveSelectedNoteId(response.data.id);
          this.originalNoteState = JSON.parse(JSON.stringify(response.data));
          this.autoSaveStatus = "saved";
          this.toaster.success(response.message);
        }
        yield this.loadNotes();
      } catch (err) {
        const msg = err?.message || "Failed to save note";
        this.toaster.error(msg);
      } finally {
        this.loading = false;
      }
    });
  }
  deleteSelectedNote() {
    return __async(this, null, function* () {
      if (!this.selectedNote || !this.selectedNote.id) {
        return;
      }
      this.clearAutoSaveTimer();
      const confirmed = yield this.confirmation.confirm({
        title: "Delete Note",
        message: "Are you sure you want to delete this note? This action cannot be undone.",
        confirmText: "Delete",
        cancelText: "Cancel",
        confirmClass: "danger"
      });
      if (!confirmed) {
        return;
      }
      this.loading = true;
      try {
        const response = yield this.notesService.deleteNote(this.selectedNote.id);
        this.selectedNote = null;
        this.originalNoteState = null;
        this.autoSaveStatus = "idle";
        this.saveSelectedNoteId(null);
        yield this.loadNotes();
        this.toaster.success(response.message);
      } catch (err) {
        const msg = err?.message || "Failed to delete note";
        this.toaster.error(msg);
      } finally {
        this.loading = false;
      }
    });
  }
  loadCategories() {
    return __async(this, null, function* () {
      try {
        const categoryData = yield this.categoryMasterService.getAllCategories().toPromise();
        this.categories = (categoryData || []).map((cat) => ({
          id: cat.id,
          name: cat.category,
          icon: cat.icon || ""
        }));
      } catch {
        this.categories = [
          { id: 1, name: "Development", icon: "\u{1F680}" },
          { id: 2, name: "Design", icon: "\u{1F3A8}" },
          { id: 3, name: "Marketing", icon: "\u{1F4C8}" },
          { id: 4, name: "Operations", icon: "\u2699\uFE0F" },
          { id: 5, name: "Research", icon: "\u{1F4DA}" }
        ];
      }
    });
  }
  getCategoryIcon(categoryId) {
    if (!categoryId)
      return "";
    const category = this.categories.find((c) => c.id === categoryId);
    return category?.icon || "";
  }
  loadNotes() {
    return __async(this, null, function* () {
      this.loading = true;
      try {
        this.notes = yield this.notesService.getNotes(this.filters);
        this.notes = this.notes.map((note) => __spreadProps(__spreadValues({}, note), { important: note.important ?? false }));
        if (!this.selectedNote) {
          try {
            const savedNoteId = localStorage.getItem(this.STORAGE_KEYS.selectedNoteId);
            if (savedNoteId) {
              const noteId = parseInt(savedNoteId, 10);
              const savedNote = this.notes.find((n) => n.id === noteId);
              if (savedNote) {
                this.selectNote(savedNote);
              } else {
                localStorage.removeItem(this.STORAGE_KEYS.selectedNoteId);
              }
            }
          } catch (error) {
            console.warn("Failed to restore selected note from localStorage:", error);
          }
        } else {
          const refreshed = this.notes.find((n) => n.id === this.selectedNote.id);
          if (refreshed) {
            const noteId = this.selectedNote.id;
            this.selectedNote = __spreadProps(__spreadValues({}, refreshed), { important: refreshed.important ?? false });
            if (this.noteUrls.length === 0 && noteId && noteId > 0) {
              this.loadNoteUrls();
            }
          } else {
            this.selectedNote = null;
            this.noteUrls = [];
            this.availableUrls = [];
            this.saveSelectedNoteId(null);
          }
        }
      } finally {
        this.loading = false;
      }
    });
  }
  // Search and Replace methods
  toggleSearchReplace() {
    this.showSearchReplace = !this.showSearchReplace;
    if (this.showSearchReplace) {
      setTimeout(() => {
        const searchInput = document.querySelector(".search-input");
        if (searchInput) {
          searchInput.focus();
        }
      }, 0);
    } else {
      this.searchText = "";
      this.replaceText = "";
      this.searchMatches = [];
      this.currentMatchIndex = -1;
    }
  }
  closeSearchReplace() {
    this.showSearchReplace = false;
    this.searchText = "";
    this.replaceText = "";
    this.searchMatches = [];
    this.currentMatchIndex = -1;
  }
  toggleCaseSensitive() {
    this.searchCaseSensitive = !this.searchCaseSensitive;
    this.performSearch();
  }
  toggleWholeWord() {
    this.searchWholeWord = !this.searchWholeWord;
    this.performSearch();
  }
  toggleRegex() {
    this.searchRegex = !this.searchRegex;
    this.performSearch();
  }
  performSearch() {
    if (!this.selectedNote || !this.searchText.trim()) {
      this.searchMatches = [];
      this.currentMatchIndex = -1;
      return;
    }
    const content = this.selectedNote.content || "";
    if (!content) {
      this.searchMatches = [];
      this.currentMatchIndex = -1;
      return;
    }
    try {
      let searchPattern;
      let searchString = this.searchText;
      if (this.searchRegex) {
        try {
          const flags = this.searchCaseSensitive ? "g" : "gi";
          searchPattern = new RegExp(searchString, flags);
        } catch (e) {
          this.searchMatches = [];
          this.currentMatchIndex = -1;
          return;
        }
      } else {
        if (this.searchWholeWord) {
          const escaped = searchString.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          searchString = `\\b${escaped}\\b`;
        } else {
          searchString = searchString.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        }
        const flags = this.searchCaseSensitive ? "g" : "gi";
        searchPattern = new RegExp(searchString, flags);
      }
      this.searchMatches = [];
      let match;
      while ((match = searchPattern.exec(content)) !== null) {
        this.searchMatches.push({
          start: match.index,
          end: match.index + match[0].length,
          text: match[0]
        });
        if (match[0].length === 0) {
          searchPattern.lastIndex++;
        }
      }
      if (this.currentMatchIndex >= this.searchMatches.length) {
        this.currentMatchIndex = -1;
      }
      if (this.searchMatches.length > 0 && this.currentMatchIndex === -1) {
        this.currentMatchIndex = 0;
        this.selectCurrentMatch();
      } else if (this.searchMatches.length === 0) {
        this.currentMatchIndex = -1;
      }
    } catch (error) {
      console.error("Search error:", error);
      this.searchMatches = [];
      this.currentMatchIndex = -1;
    }
  }
  findNext() {
    if (this.searchMatches.length === 0) {
      this.performSearch();
      return;
    }
    this.currentMatchIndex = (this.currentMatchIndex + 1) % this.searchMatches.length;
    this.selectCurrentMatch();
  }
  findPrevious() {
    if (this.searchMatches.length === 0) {
      return;
    }
    this.currentMatchIndex = this.currentMatchIndex <= 0 ? this.searchMatches.length - 1 : this.currentMatchIndex - 1;
    this.selectCurrentMatch();
  }
  selectCurrentMatch() {
    if (this.currentMatchIndex < 0 || this.currentMatchIndex >= this.searchMatches.length) {
      return;
    }
    const match = this.searchMatches[this.currentMatchIndex];
    const textarea = this.contentArea?.nativeElement;
    if (!textarea) {
      return;
    }
    textarea.setSelectionRange(match.start, match.end);
    textarea.focus();
    const lineHeight = parseInt(window.getComputedStyle(textarea).lineHeight, 10) || 20;
    const textBeforeSelection = textarea.value.substring(0, match.start);
    const linesBefore = textBeforeSelection.split("\n").length - 1;
    const scrollTop = linesBefore * lineHeight;
    textarea.scrollTop = Math.max(0, scrollTop - lineHeight * 2);
  }
  replaceNext() {
    if (!this.selectedNote || this.searchMatches.length === 0 || this.currentMatchIndex < 0) {
      return;
    }
    const match = this.searchMatches[this.currentMatchIndex];
    const content = this.selectedNote.content || "";
    let replacement = this.replaceText;
    if (this.searchRegex && this.searchText) {
      try {
        const flags = this.searchCaseSensitive ? "g" : "gi";
        const regex = new RegExp(this.searchText, flags);
        const beforeMatch = content.substring(0, match.start);
        const afterMatch = content.substring(match.end);
        const matchedText = content.substring(match.start, match.end);
        replacement = matchedText.replace(regex, this.replaceText);
        this.selectedNote.content = beforeMatch + replacement + afterMatch;
      } catch (e) {
        this.selectedNote.content = content.substring(0, match.start) + replacement + content.substring(match.end);
      }
    } else {
      this.selectedNote.content = content.substring(0, match.start) + replacement + content.substring(match.end);
    }
    this.onContentChange();
    const lengthDiff = replacement.length - match.text.length;
    this.performSearch();
    if (this.searchMatches.length > 0) {
      const nextMatchIndex = this.searchMatches.findIndex((m) => m.start >= match.start + replacement.length);
      if (nextMatchIndex >= 0) {
        this.currentMatchIndex = nextMatchIndex;
      } else {
        this.currentMatchIndex = 0;
      }
      this.selectCurrentMatch();
    }
  }
  replaceAll() {
    if (!this.selectedNote || !this.searchText || this.searchMatches.length === 0) {
      return;
    }
    let content = this.selectedNote.content || "";
    if (this.searchRegex) {
      try {
        const flags = this.searchCaseSensitive ? "g" : "gi";
        const regex = new RegExp(this.searchText, flags);
        content = content.replace(regex, this.replaceText);
      } catch (e) {
        const searchPattern = this.searchCaseSensitive ? this.searchText : new RegExp(this.searchText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");
        content = content.replace(searchPattern, this.replaceText);
      }
    } else {
      let searchPattern = this.searchText;
      if (this.searchWholeWord) {
        const escaped = this.searchText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        searchPattern = new RegExp(`\\b${escaped}\\b`, this.searchCaseSensitive ? "g" : "gi");
      } else {
        searchPattern = new RegExp(this.searchText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), this.searchCaseSensitive ? "g" : "gi");
      }
      content = content.replace(searchPattern, this.replaceText);
    }
    this.selectedNote.content = content;
    this.onContentChange();
    this.searchMatches = [];
    this.currentMatchIndex = -1;
  }
  // Simple line numbers implementation - based on logical lines (like Notepad++)
  updateLineCount() {
    setTimeout(() => {
      const textarea = this.contentArea?.nativeElement;
      const lineNumbersEl = this.lineNumbers?.nativeElement;
      if (!textarea || !this.selectedNote) {
        this.totalLines = 1;
        this.lineHeights = [];
        return;
      }
      const content = this.selectedNote.content || "";
      const logicalLines = content.split("\n");
      this.totalLines = logicalLines.length > 0 ? logicalLines.length : 1;
      const computedStyle = window.getComputedStyle(textarea);
      const lineHeight = parseFloat(computedStyle.lineHeight) || 24;
      if (this.isTextWrapped) {
        this.calculateLogicalLineHeights(textarea, computedStyle, logicalLines, lineHeight);
      } else {
        this.lineHeights = [];
        if (lineNumbersEl) {
          const lineNumberElements = lineNumbersEl.querySelectorAll(".line-number");
          lineNumberElements.forEach((el) => {
            el.style.height = "";
            el.style.minHeight = "";
          });
        }
      }
      if (lineNumbersEl) {
        lineNumbersEl.style.height = "";
        lineNumbersEl.style.minHeight = "";
        lineNumbersEl.style.maxHeight = "";
        const contentWrapper = lineNumbersEl.querySelector(".line-numbers-content");
        if (contentWrapper) {
          contentWrapper.style.minHeight = `${textarea.scrollHeight}px`;
        }
        requestAnimationFrame(() => {
          this.syncScroll();
          setTimeout(() => {
            this.syncScroll();
          }, 50);
        });
      }
    }, 0);
  }
  calculateLogicalLineHeights(textarea, computedStyle, logicalLines, lineHeight) {
    const textareaWidth = textarea.clientWidth - parseFloat(computedStyle.paddingLeft) - parseFloat(computedStyle.paddingRight);
    const measurer = document.createElement("div");
    measurer.style.position = "absolute";
    measurer.style.visibility = "hidden";
    measurer.style.height = "auto";
    measurer.style.width = `${textareaWidth}px`;
    measurer.style.fontSize = computedStyle.fontSize;
    measurer.style.fontFamily = computedStyle.fontFamily;
    measurer.style.lineHeight = computedStyle.lineHeight;
    measurer.style.whiteSpace = "pre-wrap";
    measurer.style.wordWrap = "break-word";
    measurer.style.overflowWrap = "break-word";
    measurer.style.padding = "0";
    measurer.style.margin = "0";
    document.body.appendChild(measurer);
    const heights = [];
    logicalLines.forEach((line) => {
      measurer.textContent = line || " ";
      const height = measurer.offsetHeight;
      heights.push(Math.max(lineHeight, height));
    });
    document.body.removeChild(measurer);
    this.lineHeights = heights;
    setTimeout(() => {
      const lineNumbersEl = this.lineNumbers?.nativeElement;
      const textarea2 = this.contentArea?.nativeElement;
      if (lineNumbersEl && textarea2) {
        const lineNumberElements = lineNumbersEl.querySelectorAll(".line-number");
        lineNumberElements.forEach((el, index) => {
          if (this.lineHeights[index]) {
            el.style.height = `${this.lineHeights[index]}px`;
            el.style.minHeight = `${this.lineHeights[index]}px`;
          }
        });
        const contentWrapper = lineNumbersEl.querySelector(".line-numbers-content");
        if (contentWrapper) {
          contentWrapper.style.minHeight = `${textarea2.scrollHeight}px`;
        }
        requestAnimationFrame(() => {
          this.syncScroll();
        });
      }
    }, 10);
  }
  getLineNumbers() {
    return Array.from({ length: this.totalLines }, (_, i) => i + 1);
  }
  syncScroll() {
    const textarea = this.contentArea?.nativeElement;
    const lineNumbersEl = this.lineNumbers?.nativeElement;
    if (textarea && lineNumbersEl) {
      const scrollTop = textarea.scrollTop;
      if (lineNumbersEl.scrollTop !== scrollTop) {
        lineNumbersEl.scrollTop = scrollTop;
      }
    }
  }
  syncScrollFromLineNumbers() {
    const textarea = this.contentArea?.nativeElement;
    const lineNumbersEl = this.lineNumbers?.nativeElement;
    if (textarea && lineNumbersEl) {
      textarea.scrollTop = lineNumbersEl.scrollTop;
    }
  }
  // URL management methods
  loadNoteUrls() {
    return __async(this, null, function* () {
      if (!this.selectedNote || !this.selectedNote.id || this.selectedNote.id === 0) {
        this.noteUrls = [];
        return;
      }
      this.loadingUrls = true;
      try {
        this.noteUrls = yield this.notesService.getNoteUrls(this.selectedNote.id);
        yield this.loadAvailableUrls();
      } catch (err) {
        this.toaster.error(err?.message || "Failed to load URLs");
        this.noteUrls = [];
      } finally {
        this.loadingUrls = false;
      }
    });
  }
  loadAvailableUrls() {
    return __async(this, null, function* () {
      if (!this.selectedNote || !this.selectedNote.categoryId) {
        this.availableUrls = [];
        return;
      }
      try {
        const urls = yield this.notesService.getAvailableUrls(this.selectedNote.categoryId);
        const existingUrlIds = this.noteUrls.map((u) => u.url_id);
        this.availableUrls = urls.filter((u) => !existingUrlIds.includes(u.url_id));
      } catch (err) {
        console.warn("Failed to load available URLs:", err);
        this.availableUrls = [];
      }
    });
  }
  addUrlToNote() {
    return __async(this, null, function* () {
      if (!this.selectedNote || !this.selectedNote.id || this.selectedNote.id === 0) {
        this.toaster.warn("Please save the note first before adding URLs");
        return;
      }
      if (!this.selectedUrlId) {
        this.toaster.warn("Please select a URL to add");
        return;
      }
      try {
        yield this.notesService.addUrlToNote(this.selectedNote.id, this.selectedUrlId);
        this.toaster.success("URL added successfully");
        this.selectedUrlId = null;
        this.showAddUrlDropdown = false;
        yield this.loadNoteUrls();
      } catch (err) {
        this.toaster.error(err?.message || "Failed to add URL");
      }
    });
  }
  removeUrlFromNote(urlId) {
    return __async(this, null, function* () {
      if (!this.selectedNote || !this.selectedNote.id || this.selectedNote.id === 0) {
        return;
      }
      const confirmed = yield this.confirmation.confirm({
        title: "Remove URL",
        message: "Are you sure you want to remove this URL from the note?",
        confirmText: "Remove",
        cancelText: "Cancel",
        confirmClass: "danger"
      });
      if (!confirmed)
        return;
      try {
        yield this.notesService.removeUrlFromNote(this.selectedNote.id, urlId);
        this.toaster.success("URL removed successfully");
        yield this.loadNoteUrls();
      } catch (err) {
        this.toaster.error(err?.message || "Failed to remove URL");
      }
    });
  }
  openUrl(url) {
    if (url) {
      let urlToOpen = url;
      if (!url.startsWith("http://") && !url.startsWith("https://")) {
        urlToOpen = "https://" + url;
      }
      window.open(urlToOpen, "_blank", "noopener,noreferrer");
    }
  }
  toggleAddUrlDropdown() {
    if (!this.selectedNote || !this.selectedNote.categoryId) {
      this.toaster.warn("Please select a category first");
      return;
    }
    this.showAddUrlDropdown = !this.showAddUrlDropdown;
    if (this.showAddUrlDropdown) {
      this.calculateDropdownPosition();
      if (this.availableUrls.length === 0) {
        this.loadAvailableUrls();
      }
    }
  }
  calculateDropdownPosition() {
    setTimeout(() => {
      const button = document.querySelector(".btn-add-url-compact");
      if (button) {
        const rect = button.getBoundingClientRect();
        const dropdownWidth = 300;
        const dropdownMaxHeight = 300;
        const screenPadding = 16;
        const margin = 4;
        const spaceBelow = window.innerHeight - rect.bottom;
        const spaceAbove = rect.top;
        const spaceRight = window.innerWidth - rect.right;
        const spaceLeft = rect.left;
        let calculatedTop;
        if (spaceAbove >= dropdownMaxHeight) {
          calculatedTop = rect.top - dropdownMaxHeight - margin;
          if (calculatedTop < screenPadding) {
            calculatedTop = screenPadding;
          }
        } else if (spaceAbove > spaceBelow) {
          calculatedTop = Math.max(screenPadding, rect.top - Math.min(dropdownMaxHeight, spaceAbove - margin));
        } else {
          calculatedTop = rect.bottom + margin;
        }
        let calculatedRight;
        if (spaceLeft >= dropdownWidth) {
          calculatedRight = window.innerWidth - rect.left;
        } else if (spaceLeft > spaceRight) {
          calculatedRight = window.innerWidth - Math.max(screenPadding, rect.left - dropdownWidth + screenPadding);
        } else {
          const rightPosition = window.innerWidth - rect.right;
          calculatedRight = Math.max(screenPadding, rightPosition);
        }
        this.dropdownPosition = {
          top: calculatedTop,
          right: calculatedRight
        };
      }
    }, 0);
  }
  closeAddUrlDropdown() {
    this.showAddUrlDropdown = false;
  }
  getCredentialTooltip(credentials) {
    if (!credentials || credentials.length === 0)
      return "";
    return credentials.map((cred) => `${cred.credential_id || cred.id || ""} - ${cred.credential_name || ""}`).filter((text) => text.trim()).join("\n");
  }
  static \u0275fac = function NotesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotesComponent)(\u0275\u0275directiveInject(NotesService), \u0275\u0275directiveInject(CategoryMasterService), \u0275\u0275directiveInject(ToasterService), \u0275\u0275directiveInject(ConfirmationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotesComponent, selectors: [["app-notes"]], viewQuery: function NotesComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
      \u0275\u0275viewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentArea = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.lineNumbers = _t.first);
    }
  }, decls: 87, vars: 14, consts: [["lineNumbers", ""], ["contentArea", ""], ["noUrlsTemplate", ""], ["noUrlsMessage", ""], [1, "notes-container"], [1, "notes-header"], [1, "actions"], [1, "add-action-btn", 3, "click"], [1, "fas", "fa-plus"], [1, "filters"], [1, "filter-field"], ["type", "text", "placeholder", "Search title or content", 3, "ngModelChange", "input", "ngModel"], [3, "ngModelChange", "change", "ngModel"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "date", 3, "ngModelChange", "change", "ngModel"], ["value", "all"], ["value", "starred"], ["value", "non-starred"], ["label", "By Date Created"], ["value", "createdOn_desc"], ["value", "createdOn_asc"], ["label", "By Date Updated"], ["value", "updatedOn_desc"], ["value", "updatedOn_asc"], ["label", "By ID"], ["value", "id_desc"], ["value", "id_asc"], ["label", "By Category"], ["value", "categoryName_asc"], ["value", "categoryName_desc"], ["label", "By Title"], ["value", "title_asc"], ["value", "title_desc"], [1, "filter-field", "filter-actions"], ["title", "Reset all filters", 1, "btn", "reset-btn", 3, "click"], [1, "fas", "fa-redo"], [1, "content"], [1, "list"], [1, "list-header"], [1, "list-title"], [1, "notes-count"], [1, "list-items"], ["class", "list-item", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "empty", 4, "ngIf"], ["class", "editor", 4, "ngIf"], ["class", "empty-editor", 4, "ngIf"], [1, "list-item", 3, "click"], [1, "title-row"], [1, "star-icon", 3, "click", "title"], [1, "title"], [1, "badges-right"], ["class", "category", 4, "ngIf"], [1, "id-badge"], [1, "meta-row"], [1, "date"], ["class", "updated", 4, "ngIf"], [1, "preview"], [1, "category"], ["class", "category-icon", 4, "ngIf"], [1, "category-icon"], [1, "updated"], [1, "empty"], [1, "editor"], [1, "editor-toolbar"], [1, "star-icon", "editor-star", 3, "click", "title"], ["type", "text", "placeholder", "Note title", 1, "title-input", 3, "ngModelChange", "ngModel", "disabled"], [1, "category-select", 3, "ngModelChange", "ngModel"], [1, "spacer"], ["title", "Decrease indentation", 1, "btn", 3, "click", "disabled"], ["title", "Insert bullet point", 1, "btn", 3, "click", "disabled"], ["title", "Increase indentation", 1, "btn", 3, "click", "disabled"], [1, "btn", 3, "click", "disabled", "title"], ["title", "Search and Replace (Ctrl+F)", 1, "btn", 3, "click", "disabled"], [1, "fas", "fa-search"], ["class", "btn", "title", "Duplicate", 3, "click", 4, "ngIf"], ["class", "btn warn", "title", "Delete", 3, "click", 4, "ngIf"], ["title", "Save", 1, "btn", "success", 3, "click"], [1, "fas", "fa-save"], ["class", "category-required-message", 4, "ngIf"], ["class", "search-replace-panel", 4, "ngIf"], [1, "content-editor-wrapper"], [1, "line-numbers", 3, "scroll"], [1, "line-numbers-content"], ["class", "line-number", 4, "ngFor", "ngForOf"], ["placeholder", "Write your note here...", 1, "content-input", 3, "ngModelChange", "scroll", "ngModel", "disabled"], ["class", "urls-section-compact", 4, "ngIf"], [1, "timestamps"], [4, "ngIf"], ["title", "Duplicate", 1, "btn", 3, "click"], [1, "fas", "fa-copy"], ["title", "Delete", 1, "btn", "warn", 3, "click"], [1, "fas", "fa-trash"], [1, "category-required-message"], [1, "fas", "fa-info-circle"], [1, "search-replace-panel"], [1, "search-replace-header"], [1, "search-label"], [1, "search-replace-content"], [1, "search-section"], ["type", "text", "placeholder", "Search", 1, "search-input", 3, "ngModelChange", "input", "keydown.enter", "keydown.escape", "ngModel"], [1, "search-options"], ["title", "Match case", 1, "search-option-btn", 3, "click"], ["title", "Match whole word", 1, "search-option-btn", 3, "click"], ["title", "Use regular expression", 1, "search-option-btn", 3, "click"], [1, "replace-section"], ["type", "text", "placeholder", "Replace", 1, "replace-input", 3, "ngModelChange", "keydown.enter", "keydown.escape", "ngModel"], [1, "replace-actions"], ["title", "Replace all", 1, "replace-btn", 3, "click", "disabled"], ["title", "Replace Current", 1, "replace-btn", "replace-next-btn", 3, "click", "disabled"], [1, "replace-icon"], [1, "replace-arrow"], ["class", "search-results", 4, "ngIf"], [1, "search-results"], ["class", "match-count", 4, "ngIf"], ["class", "search-nav-buttons", 4, "ngIf"], ["title", "Close", 1, "close-search-btn", 3, "click"], [1, "fas", "fa-times"], [1, "match-count"], [1, "search-nav-buttons"], ["title", "Previous match", 1, "nav-btn", 3, "click"], [1, "fas", "fa-chevron-up"], ["title", "Next match", 1, "nav-btn", 3, "click"], [1, "fas", "fa-chevron-down"], [1, "line-number"], [1, "urls-section-compact"], [1, "urls-header-compact", 3, "click"], [1, "urls-header-left"], [1, "fas"], [1, "urls-title-compact"], ["class", "urls-count-badge", 4, "ngIf"], [1, "urls-header-right", 3, "click"], [1, "add-url-wrapper"], ["title", "Add URL", 1, "btn", "btn-add-url-compact", 3, "click", "disabled"], ["class", "add-url-dropdown", 3, "top", "right", "click", 4, "ngIf"], ["class", "urls-preview-compact", 4, "ngIf"], ["class", "urls-content-compact", 4, "ngIf"], [1, "urls-count-badge"], [1, "add-url-dropdown", 3, "click"], [1, "dropdown-header"], ["class", "dropdown-content", 4, "ngIf", "ngIfElse"], [1, "dropdown-content"], ["class", "url-option", 3, "click", 4, "ngFor", "ngForOf"], [1, "url-option", 3, "click"], ["class", "url-icon", 4, "ngIf"], [1, "url-label"], [1, "url-url"], [1, "url-icon"], [1, "dropdown-empty"], [1, "urls-preview-compact"], [1, "urls-preview-grid"], ["class", "url-preview-item", 3, "title", "click", 4, "ngFor", "ngForOf"], ["class", "url-preview-more", 3, "title", "click", 4, "ngIf"], [1, "url-preview-item", 3, "click", "title"], ["class", "url-preview-icon", 4, "ngIf"], [1, "url-preview-label"], ["class", "credential-tag-note", 3, "title", "click", 4, "ngIf"], [1, "url-preview-icon"], [1, "credential-tag-note", 3, "click", "title"], [1, "fas", "fa-lock"], [1, "credential-count-note"], [1, "url-preview-more", 3, "click", "title"], [1, "urls-content-compact"], ["class", "urls-list-compact", 4, "ngIf", "ngIfElse"], [1, "urls-list-compact"], ["class", "url-item-compact", 3, "title", 4, "ngFor", "ngForOf"], [1, "url-item-compact", 3, "title"], [1, "url-content-compact", 3, "click"], ["class", "url-category-icon-compact", 4, "ngIf"], [1, "url-label-compact"], [1, "url-link-compact", 3, "title"], [1, "fas", "fa-external-link-alt", "url-external-icon-compact"], ["title", "Remove URL", 1, "btn-remove-url-compact", 3, "click"], [1, "url-category-icon-compact"], [1, "urls-empty-compact"], [1, "empty-editor"]], template: function NotesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "h2");
      \u0275\u0275text(3, "Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 6)(5, "button", 7);
      \u0275\u0275listener("click", function NotesComponent_Template_button_click_5_listener() {
        return ctx.startNewNote();
      });
      \u0275\u0275element(6, "i", 8);
      \u0275\u0275elementStart(7, "span");
      \u0275\u0275text(8, "New Note");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(9, "div", 9)(10, "div", 10)(11, "label");
      \u0275\u0275text(12, "Search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "input", 11);
      \u0275\u0275twoWayListener("ngModelChange", function NotesComponent_Template_input_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filters.search, $event) || (ctx.filters.search = $event);
        return $event;
      });
      \u0275\u0275listener("input", function NotesComponent_Template_input_input_13_listener() {
        return ctx.onFiltersChanged();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 10)(15, "label");
      \u0275\u0275text(16, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "select", 12);
      \u0275\u0275twoWayListener("ngModelChange", function NotesComponent_Template_select_ngModelChange_17_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filters.categoryId, $event) || (ctx.filters.categoryId = $event);
        return $event;
      });
      \u0275\u0275listener("change", function NotesComponent_Template_select_change_17_listener() {
        return ctx.onFiltersChanged();
      });
      \u0275\u0275elementStart(18, "option", 13);
      \u0275\u0275text(19, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275template(20, NotesComponent_option_20_Template, 2, 3, "option", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 10)(22, "label");
      \u0275\u0275text(23, "Created From");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "input", 15);
      \u0275\u0275twoWayListener("ngModelChange", function NotesComponent_Template_input_ngModelChange_24_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filters.createdFrom, $event) || (ctx.filters.createdFrom = $event);
        return $event;
      });
      \u0275\u0275listener("change", function NotesComponent_Template_input_change_24_listener() {
        return ctx.onFiltersChanged();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 10)(26, "label");
      \u0275\u0275text(27, "Created To");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "input", 15);
      \u0275\u0275twoWayListener("ngModelChange", function NotesComponent_Template_input_ngModelChange_28_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filters.createdTo, $event) || (ctx.filters.createdTo = $event);
        return $event;
      });
      \u0275\u0275listener("change", function NotesComponent_Template_input_change_28_listener() {
        return ctx.onFiltersChanged();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 10)(30, "label");
      \u0275\u0275text(31, "Star");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "select", 12);
      \u0275\u0275twoWayListener("ngModelChange", function NotesComponent_Template_select_ngModelChange_32_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filters.important, $event) || (ctx.filters.important = $event);
        return $event;
      });
      \u0275\u0275listener("change", function NotesComponent_Template_select_change_32_listener() {
        return ctx.onFiltersChanged();
      });
      \u0275\u0275elementStart(33, "option", 16);
      \u0275\u0275text(34, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "option", 17);
      \u0275\u0275text(36, "Starred");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "option", 18);
      \u0275\u0275text(38, "Unstarred");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(39, "div", 10)(40, "label");
      \u0275\u0275text(41, "Sort");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "select", 12);
      \u0275\u0275twoWayListener("ngModelChange", function NotesComponent_Template_select_ngModelChange_42_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filters.sort, $event) || (ctx.filters.sort = $event);
        return $event;
      });
      \u0275\u0275listener("change", function NotesComponent_Template_select_change_42_listener() {
        return ctx.onFiltersChanged();
      });
      \u0275\u0275elementStart(43, "optgroup", 19)(44, "option", 20);
      \u0275\u0275text(45, "Newest");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "option", 21);
      \u0275\u0275text(47, "Oldest");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "optgroup", 22)(49, "option", 23);
      \u0275\u0275text(50, "Recently Updated");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "option", 24);
      \u0275\u0275text(52, "Least Recently Updated");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "optgroup", 25)(54, "option", 26);
      \u0275\u0275text(55, "ID (Highest First)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "option", 27);
      \u0275\u0275text(57, "ID (Lowest First)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "optgroup", 28)(59, "option", 29);
      \u0275\u0275text(60, "Category A\u2192Z");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "option", 30);
      \u0275\u0275text(62, "Category Z\u2192A");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "optgroup", 31)(64, "option", 32);
      \u0275\u0275text(65, "Title A\u2192Z");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "option", 33);
      \u0275\u0275text(67, "Title Z\u2192A");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(68, "div", 34)(69, "label");
      \u0275\u0275text(70, "\xA0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "button", 35);
      \u0275\u0275listener("click", function NotesComponent_Template_button_click_71_listener() {
        return ctx.resetFilters();
      });
      \u0275\u0275element(72, "i", 36);
      \u0275\u0275elementStart(73, "span");
      \u0275\u0275text(74, "Reset Filters");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(75, "div", 37)(76, "div", 38)(77, "div", 39)(78, "span", 40);
      \u0275\u0275text(79, "Notes List");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "span", 41);
      \u0275\u0275text(81);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "div", 42);
      \u0275\u0275template(83, NotesComponent_div_83_Template, 18, 19, "div", 43)(84, NotesComponent_div_84_Template, 2, 0, "div", 44);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(85, NotesComponent_div_85_Template, 41, 37, "div", 45)(86, NotesComponent_div_86_Template, 3, 0, "div", 46);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275twoWayProperty("ngModel", ctx.filters.search);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.filters.categoryId);
      \u0275\u0275advance();
      \u0275\u0275property("ngValue", null);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.categories);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.filters.createdFrom);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.filters.createdTo);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.filters.important);
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.filters.sort);
      \u0275\u0275advance(39);
      \u0275\u0275textInterpolate2("", ctx.notes.length, " ", ctx.notes.length === 1 ? "note" : "notes");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.notes);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.notes.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedNote);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.selectedNote);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, SlicePipe, DatePipe], styles: ['\n\n.notes-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 16px;\n  height: calc(100vh - 66px);\n  max-height: calc(100vh - 66px);\n  overflow: hidden;\n  box-sizing: border-box;\n  background: #0f1115;\n  color: #e6e6e6;\n}\n.notes-container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n.notes-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type=checkbox]):not([type=radio]):focus, \n.notes-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, \n.notes-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  border-color: #4a5568 !important;\n  box-shadow: 0 0 0 2px rgba(74, 85, 104, 0.15) !important;\n}\n.notes-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-shrink: 0;\n  margin-bottom: 0;\n}\n.notes-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: #2c2f36;\n  color: #e6e6e6;\n  border: 1px solid #3a3f47;\n  border-radius: 8px;\n  padding: 8px 12px;\n  cursor: pointer;\n}\n.btn.primary[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  border-color: #3b82f6;\n  color: white;\n}\n.btn.success[_ngcontent-%COMP%] {\n  background: #16a34a;\n  border-color: #16a34a;\n  color: white;\n}\n.btn.warn[_ngcontent-%COMP%] {\n  background: #7f1d1d;\n  border-color: #ef4444;\n  color: #fecaca;\n}\n.filters[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, minmax(140px, 1fr));\n  gap: 6px;\n  flex-shrink: 0;\n}\n.filter-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n}\n.reset-btn[_ngcontent-%COMP%] {\n  background: #4a5568;\n  border-color: #4a5568;\n  color: #e6e6e6;\n  white-space: nowrap;\n}\n.reset-btn[_ngcontent-%COMP%]:hover {\n  background: #5a6578;\n  border-color: #5a6578;\n}\n.filter-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.filter-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #9aa0a6;\n  font-size: 12px;\n}\n.filter-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.filter-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  background: #1f2228;\n  color: #e6e6e6;\n  border: 1px solid #3a3f47;\n  border-radius: 8px;\n  padding: 8px 10px;\n  transition: all 0.2s ease;\n}\n.filter-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.filter-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #4a5568;\n  box-shadow: 0 0 0 2px rgba(74, 85, 104, 0.15);\n}\n.content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 360px 1fr;\n  gap: 8px;\n  flex: 1;\n  min-height: 0;\n  max-height: 100%;\n  overflow: hidden;\n}\n.list[_ngcontent-%COMP%] {\n  background: #14171c;\n  border: 1px solid #2a2f36;\n  border-radius: 12px;\n  overflow: hidden;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.list-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px;\n  border-bottom: 1px solid #23272f;\n  flex-shrink: 0;\n  background: #14171c;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n.list-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #e6e6e6;\n}\n.notes-count[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #9aa0a6;\n  font-weight: 400;\n}\n.list-items[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  scrollbar-width: thin;\n  scrollbar-color: #3a3f47 #1a1d24;\n}\n.list-item[_ngcontent-%COMP%] {\n  padding: 12px;\n  border-bottom: 1px solid #23272f;\n  cursor: pointer;\n  min-height: 80px;\n  display: flex;\n  flex-direction: column;\n  border-left: 3px solid transparent;\n  transition: all 0.2s ease;\n}\n.list-item[_ngcontent-%COMP%]:hover {\n  background: #171a20;\n}\n.list-item.active[_ngcontent-%COMP%] {\n  background: #1b1f26;\n  border-left-color: #4a5568;\n  box-shadow: -2px 0 6px rgba(74, 85, 104, 0.12);\n}\n.title-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-shrink: 0;\n  gap: 8px;\n}\n.star-icon[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #9aa0a6;\n  font-size: 18px;\n  cursor: pointer;\n  padding: 2px 4px;\n  line-height: 1;\n  transition: all 0.2s;\n  flex-shrink: 0;\n}\n.star-icon[_ngcontent-%COMP%]:hover {\n  color: #fbbf24;\n  transform: scale(1.1);\n}\n.star-icon.important[_ngcontent-%COMP%] {\n  color: #fbbf24;\n}\n.star-icon.editor-star[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding: 4px;\n}\n.title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  flex: 1;\n  min-width: 0;\n}\n.badges-right[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  margin-left: 8px;\n}\n.category[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9aa0a6;\n  background: #20242a;\n  border: 1px solid #2a2f36;\n  padding: 2px 6px;\n  border-radius: 6px;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.category-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 1;\n}\n.id-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #93c5fd;\n  background: #0b1320;\n  border: 1px solid #1e3a8a;\n  padding: 2px 6px;\n  border-radius: 6px;\n}\n.meta-row[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9aa0a6;\n  margin-top: 4px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-shrink: 0;\n}\n.preview[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  color: #c6cbd2;\n  font-size: 13px;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  line-height: 1.4;\n  max-height: 2.8em;\n  word-wrap: break-word;\n  text-overflow: ellipsis;\n  flex: 1;\n}\n.empty[_ngcontent-%COMP%] {\n  padding: 16px;\n  color: #9aa0a6;\n  text-align: center;\n}\n.editor[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  background: #14171c;\n  border: 1px solid #2a2f36;\n  border-radius: 12px;\n  padding: 12px;\n  height: 100%;\n  min-height: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  position: relative;\n}\n.editor-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  flex-shrink: 0;\n}\n.title-input[_ngcontent-%COMP%] {\n  flex: 1;\n  background: #1f2228;\n  color: #e6e6e6;\n  border: 1px solid #3a3f47;\n  border-radius: 8px;\n  padding: 8px 10px;\n  font-weight: 600;\n  transition: all 0.2s ease;\n}\n.title-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #4a5568;\n  box-shadow: 0 0 0 2px rgba(74, 85, 104, 0.15);\n}\n.category-select[_ngcontent-%COMP%] {\n  background: #151922;\n  color: #e6e6e6;\n  border: 1px solid #2b3340;\n  border-radius: 8px;\n  padding: 8px 10px;\n  transition: all 0.2s ease;\n}\n.category-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #4a5568;\n  box-shadow: 0 0 0 2px rgba(74, 85, 104, 0.15);\n}\n.category-select.required[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n  border-width: 2px;\n}\n.category-required-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px;\n  background: #1a1f2e;\n  border: 1px solid #3a3f47;\n  border-radius: 8px;\n  color: #9aa0a6;\n  font-size: 13px;\n  margin-bottom: 8px;\n}\n.category-required-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #3b82f6;\n}\n.content-input[_ngcontent-%COMP%]:disabled, \n.title-input[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  background: transparent;\n}\n.content-editor-wrapper[_ngcontent-%COMP%]:has(.content-input:disabled) {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.content-input[_ngcontent-%COMP%]:disabled:focus, \n.title-input[_ngcontent-%COMP%]:disabled:focus {\n  border-color: #3a3f47;\n  box-shadow: none;\n}\n.content-editor-wrapper[_ngcontent-%COMP%]:has(.content-input:disabled):focus-within {\n  border-color: #3a3f47;\n  box-shadow: none;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.content-editor-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  min-height: 0;\n  background: #0f1115;\n  border: 1px solid #3a3f47;\n  border-radius: 12px;\n  overflow: hidden;\n}\n.line-numbers[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 50px;\n  background: #14171c;\n  border-right: 1px solid #3a3f47;\n  padding: 12px 8px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  -webkit-user-select: none;\n  user-select: none;\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    "Liberation Mono",\n    "Courier New",\n    monospace;\n  font-size: 0.95rem;\n  line-height: 1.5;\n  color: #6b7280;\n  text-align: right;\n  box-sizing: border-box;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n  height: 100%;\n  align-self: stretch;\n}\n.line-numbers-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\n.line-number[_ngcontent-%COMP%] {\n  padding: 0;\n  min-height: 1.5em;\n  height: 1.5em;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-end;\n  box-sizing: border-box;\n  flex-shrink: 0;\n}\n.content-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 0;\n  resize: none;\n  background: transparent;\n  color: #e6e6e6;\n  border: none;\n  border-radius: 0;\n  padding: 12px;\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    "Liberation Mono",\n    "Courier New",\n    monospace;\n  font-size: 0.95rem;\n  line-height: 1.5;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  overflow: auto;\n  scrollbar-width: thin;\n  scrollbar-color: #3a3f47 #1a1d24;\n  transition: all 0.2s ease;\n  box-sizing: border-box;\n}\n.content-editor-wrapper[_ngcontent-%COMP%]:focus-within {\n  border-color: #4a5568;\n  box-shadow: 0 0 0 2px rgba(74, 85, 104, 0.15);\n}\n.content-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.content-input.unwrapped[_ngcontent-%COMP%] {\n  white-space: pre;\n  overflow-x: auto;\n  overflow-y: auto;\n  word-wrap: normal;\n  overflow-wrap: normal;\n}\n.list-items[_ngcontent-%COMP%]::-webkit-scrollbar, \n.content-input[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 12px;\n  height: 12px;\n}\n.line-numbers[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n  width: 0;\n  height: 0;\n}\n.list-items[_ngcontent-%COMP%]::-webkit-scrollbar-track, \n.content-input[_ngcontent-%COMP%]::-webkit-scrollbar-track, \n.line-numbers[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #1a1d24;\n  border-radius: 6px;\n}\n.list-items[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, \n.content-input[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, \n.line-numbers[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #3a3f47;\n  border-radius: 6px;\n  border: 2px solid #1a1d24;\n}\n.list-items[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover, \n.content-input[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #4a4f57;\n}\n.list-items[_ngcontent-%COMP%]::-webkit-scrollbar-corner, \n.content-input[_ngcontent-%COMP%]::-webkit-scrollbar-corner {\n  background: #1a1d24;\n}\n.btn.active[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  border-color: #3b82f6;\n  color: white;\n}\n.timestamps[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  font-size: 12px;\n  color: #9aa0a6;\n  flex-shrink: 0;\n}\n.empty-editor[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  background: #14171c;\n  border: 1px solid #2a2f36;\n  border-radius: 12px;\n  color: #9aa0a6;\n}\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.search-replace-panel[_ngcontent-%COMP%] {\n  background: #1f2228;\n  border: 1px solid #3a3f47;\n  border-radius: 8px;\n  padding: 12px;\n  margin-bottom: 8px;\n  flex-shrink: 0;\n}\n.search-replace-header[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.search-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #9aa0a6;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.search-replace-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.search-section[_ngcontent-%COMP%], \n.replace-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.search-input[_ngcontent-%COMP%], \n.replace-input[_ngcontent-%COMP%] {\n  flex: 1;\n  background: #14171c;\n  color: #e6e6e6;\n  border: 1px solid #3a3f47;\n  border-radius: 6px;\n  padding: 6px 10px;\n  font-size: 13px;\n  font-family: inherit;\n  transition: all 0.2s ease;\n}\n.search-input[_ngcontent-%COMP%]:focus, \n.replace-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #4a5568;\n  box-shadow: 0 0 0 2px rgba(74, 85, 104, 0.15);\n}\n.search-options[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.search-option-btn[_ngcontent-%COMP%] {\n  background: #2c2f36;\n  color: #9aa0a6;\n  border: 1px solid #3a3f47;\n  border-radius: 4px;\n  padding: 4px 8px;\n  font-size: 12px;\n  cursor: pointer;\n  transition: all 0.2s;\n  min-width: 32px;\n  font-weight: 500;\n}\n.search-option-btn[_ngcontent-%COMP%]:hover {\n  background: #3a3f47;\n  color: #e6e6e6;\n  border-color: #4a4f57;\n}\n.search-option-btn.active[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  border-color: #3b82f6;\n  color: white;\n}\n.replace-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.replace-btn[_ngcontent-%COMP%] {\n  background: #2c2f36;\n  color: #9aa0a6;\n  border: 1px solid #3a3f47;\n  border-radius: 4px;\n  padding: 4px 8px;\n  font-size: 12px;\n  cursor: pointer;\n  transition: all 0.2s;\n  min-width: 32px;\n  font-weight: 500;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.replace-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #3a3f47;\n  color: #e6e6e6;\n  border-color: #4a4f57;\n}\n.replace-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.replace-next-btn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  line-height: 1;\n  padding: 4px 6px;\n  gap: 2px;\n}\n.replace-icon[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 500;\n}\n.replace-arrow[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.search-results[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 4px;\n  border-top: 1px solid #2a2f36;\n  gap: 8px;\n}\n.match-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9aa0a6;\n}\n.search-nav-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.nav-btn[_ngcontent-%COMP%] {\n  background: #2c2f36;\n  color: #9aa0a6;\n  border: 1px solid #3a3f47;\n  border-radius: 4px;\n  padding: 4px 6px;\n  cursor: pointer;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n}\n.nav-btn[_ngcontent-%COMP%]:hover {\n  background: #3a3f47;\n  color: #e6e6e6;\n  border-color: #4a4f57;\n}\n.close-search-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #9aa0a6;\n  cursor: pointer;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: color 0.2s;\n}\n.close-search-btn[_ngcontent-%COMP%]:hover {\n  color: #e6e6e6;\n}\n@media (max-width: 1200px) {\n  .content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.urls-section-compact[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  background: #1f2228;\n  border: 1px solid #3a3f47;\n  border-radius: 6px;\n  flex-shrink: 0;\n  overflow: visible;\n  position: relative;\n}\n.urls-header-compact[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 6px 10px;\n  cursor: pointer;\n  transition: background 0.2s ease;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.urls-header-compact[_ngcontent-%COMP%]:hover {\n  background: #171a20;\n}\n.urls-header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex: 1;\n  min-width: 0;\n}\n.urls-header-left[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #9aa0a6;\n  width: 12px;\n  flex-shrink: 0;\n}\n.urls-title-compact[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #e6e6e6;\n  flex-shrink: 0;\n}\n.urls-count-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: #3b82f6;\n  color: white;\n  font-size: 12px;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 12px;\n  min-width: 24px;\n  height: 20px;\n  line-height: 1;\n  margin-left: 6px;\n  box-shadow: 0 2px 4px rgba(59, 130, 246, 0.3);\n}\n.urls-header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.add-url-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 10001;\n}\n.btn-add-url-compact[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: #3b82f6;\n  border: 1px solid #3b82f6;\n  color: white;\n  border-radius: 4px;\n  padding: 4px 8px;\n  font-size: 11px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  width: 24px;\n  height: 24px;\n}\n.btn-add-url-compact[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #2563eb;\n  border-color: #2563eb;\n}\n.btn-add-url-compact[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.add-url-dropdown[_ngcontent-%COMP%] {\n  position: fixed;\n  background: #1f2228;\n  border: 1px solid #3a3f47;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\n  z-index: 10000;\n  min-width: 300px;\n  max-width: 400px;\n  max-height: 300px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.dropdown-header[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  background: #14171c;\n  border-bottom: 1px solid #2a2f36;\n  font-size: 12px;\n  font-weight: 600;\n  color: #9aa0a6;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.dropdown-content[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  max-height: 250px;\n  scrollbar-width: thin;\n  scrollbar-color: #3a3f47 #1a1d24;\n}\n.dropdown-content[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n.dropdown-content[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #1a1d24;\n}\n.dropdown-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #3a3f47;\n  border-radius: 4px;\n}\n.url-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 12px;\n  cursor: pointer;\n  transition: background 0.2s ease;\n  border-bottom: 1px solid #2a2f36;\n}\n.url-option[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.url-option[_ngcontent-%COMP%]:hover {\n  background: #171a20;\n}\n.url-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.url-label[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 13px;\n  font-weight: 500;\n  color: #e6e6e6;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.url-url[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9aa0a6;\n  flex-shrink: 0;\n  max-width: 150px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.dropdown-empty[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n  color: #9aa0a6;\n  font-size: 13px;\n}\n.urls-content-compact[_ngcontent-%COMP%] {\n  border-top: 1px solid #2a2f36;\n  max-height: 200px;\n  overflow-y: auto;\n  scrollbar-width: thin;\n  scrollbar-color: #3a3f47 #1a1d24;\n}\n.urls-content-compact[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.urls-content-compact[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #1a1d24;\n}\n.urls-content-compact[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #3a3f47;\n  border-radius: 3px;\n}\n.urls-preview-compact[_ngcontent-%COMP%] {\n  border-top: 1px solid #2a2f36;\n  padding: 8px;\n  background: #171a20;\n  overflow: visible;\n  position: relative;\n  z-index: 1;\n}\n.urls-preview-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr) auto;\n  gap: 6px;\n  align-items: center;\n}\n.url-preview-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 8px;\n  background: rgba(74, 158, 255, 0.1);\n  border: 1px solid rgba(74, 158, 255, 0.2);\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  overflow: hidden;\n  min-width: 0;\n}\n.url-preview-item[_ngcontent-%COMP%]:hover {\n  background: rgba(74, 158, 255, 0.2);\n  border-color: rgba(74, 158, 255, 0.4);\n  transform: translateY(-1px);\n}\n.url-preview-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  flex-shrink: 0;\n  line-height: 1;\n  width: 16px;\n  text-align: center;\n}\n.url-preview-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: #4a9eff;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  flex: 1;\n  min-width: 0;\n}\n.url-preview-more[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 6px 8px;\n  background: #2a2f36;\n  border: 1px solid #3a3f47;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  color: #9aa0a6;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  text-align: center;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.url-preview-more[_ngcontent-%COMP%]:hover {\n  background: #3a3f47;\n  color: #3b82f6;\n  border-color: #3b82f6;\n}\n.urls-list-compact[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 6px;\n  padding: 6px;\n}\n.url-item-compact[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  background: rgba(74, 158, 255, 0.1);\n  border: 1px solid rgba(74, 158, 255, 0.2);\n  border-radius: 4px;\n  padding: 8px;\n  transition: all 0.2s ease;\n  min-height: 56px;\n  position: relative;\n}\n.url-item-compact[_ngcontent-%COMP%]:hover {\n  background: rgba(74, 158, 255, 0.2);\n  border-color: rgba(74, 158, 255, 0.4);\n  transform: translateY(-1px);\n}\n.url-content-compact[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  cursor: pointer;\n  min-width: 0;\n  overflow: hidden;\n  padding-right: 20px;\n}\n.url-category-icon-compact[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  font-size: 14px;\n  line-height: 1;\n  opacity: 0.7;\n  transition: opacity 0.2s ease;\n}\n.url-item-compact[_ngcontent-%COMP%]:hover   .url-category-icon-compact[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.url-label-compact[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #4a9eff;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  line-height: 1.3;\n}\n.url-link-compact[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #4a9eff;\n  opacity: 0.8;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  line-height: 1.2;\n  transition: opacity 0.2s ease;\n}\n.url-item-compact[_ngcontent-%COMP%]:hover   .url-link-compact[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.url-external-icon-compact[_ngcontent-%COMP%] {\n  display: none;\n}\n.url-content-compact[_ngcontent-%COMP%]:hover   .url-label-compact[_ngcontent-%COMP%], \n.url-content-compact[_ngcontent-%COMP%]:hover   .url-link-compact[_ngcontent-%COMP%] {\n  color: #4a9eff;\n}\n.btn-remove-url-compact[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  background: rgba(15, 17, 21, 0.8);\n  border: none;\n  color: #6b7280;\n  cursor: pointer;\n  padding: 2px;\n  border-radius: 3px;\n  transition: all 0.2s ease;\n  width: 18px;\n  height: 18px;\n  font-size: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  z-index: 10;\n}\n.url-item-compact[_ngcontent-%COMP%]:hover   .btn-remove-url-compact[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.btn-remove-url-compact[_ngcontent-%COMP%]:hover {\n  background: #2a2f36;\n  color: #ef4444;\n}\n.urls-empty-compact[_ngcontent-%COMP%] {\n  padding: 12px;\n  text-align: center;\n  color: #6b7280;\n  font-size: 11px;\n  font-style: italic;\n}\n.urls-empty-compact[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin: 0 2px;\n}\n.credential-tag-note[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n  padding: 2px 6px;\n  background: rgba(16, 185, 129, 0.15);\n  border: 1px solid rgba(16, 185, 129, 0.3);\n  border-radius: 4px;\n  font-size: 11px;\n  color: #10b981;\n  cursor: help;\n  flex-shrink: 0;\n  transition: all 0.2s ease;\n  margin-left: 6px;\n}\n.credential-tag-note[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.credential-tag-note[_ngcontent-%COMP%]   .credential-count-note[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 10px;\n}\n.credential-tag-note[_ngcontent-%COMP%]:hover {\n  background: rgba(16, 185, 129, 0.25);\n  border-color: rgba(16, 185, 129, 0.5);\n  transform: translateY(-1px);\n}\n/*# sourceMappingURL=notes.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotesComponent, [{
    type: Component,
    args: [{ selector: "app-notes", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="notes-container">\r
  <div class="notes-header">\r
    <h2>Notes</h2>\r
    <div class="actions">\r
      <button class="add-action-btn" (click)="startNewNote()"><i class="fas fa-plus"></i><span>New Note</span></button>\r
    </div>\r
  </div>\r
\r
  <div class="filters">\r
    <div class="filter-field">\r
      <label>Search</label>\r
      <input type="text" [(ngModel)]="filters.search" (input)="onFiltersChanged()" placeholder="Search title or content" />\r
    </div>\r
    <div class="filter-field">\r
      <label>Category</label>\r
      <select [(ngModel)]="filters.categoryId" (change)="onFiltersChanged()">\r
        <option [ngValue]="null">All</option>\r
        <option *ngFor="let c of categories" [ngValue]="c.id">{{ c.icon ? c.icon + ' ' : '' }}{{ c.name }}</option>\r
      </select>\r
    </div>\r
    <div class="filter-field">\r
      <label>Created From</label>\r
      <input type="date" [(ngModel)]="filters.createdFrom" (change)="onFiltersChanged()" />\r
    </div>\r
    <div class="filter-field">\r
      <label>Created To</label>\r
      <input type="date" [(ngModel)]="filters.createdTo" (change)="onFiltersChanged()" />\r
    </div>\r
    <div class="filter-field">\r
      <label>Star</label>\r
      <select [(ngModel)]="filters.important" (change)="onFiltersChanged()">\r
        <option value="all">All</option>\r
        <option value="starred">Starred</option>\r
        <option value="non-starred">Unstarred</option>\r
      </select>\r
    </div>\r
    <div class="filter-field">\r
      <label>Sort</label>\r
      <select [(ngModel)]="filters.sort" (change)="onFiltersChanged()">\r
        <optgroup label="By Date Created">\r
          <option value="createdOn_desc">Newest</option>\r
          <option value="createdOn_asc">Oldest</option>\r
        </optgroup>\r
        <optgroup label="By Date Updated">\r
          <option value="updatedOn_desc">Recently Updated</option>\r
          <option value="updatedOn_asc">Least Recently Updated</option>\r
        </optgroup>\r
        <optgroup label="By ID">\r
          <option value="id_desc">ID (Highest First)</option>\r
          <option value="id_asc">ID (Lowest First)</option>\r
        </optgroup>\r
        <optgroup label="By Category">\r
          <option value="categoryName_asc">Category A\u2192Z</option>\r
          <option value="categoryName_desc">Category Z\u2192A</option>\r
        </optgroup>\r
        <optgroup label="By Title">\r
          <option value="title_asc">Title A\u2192Z</option>\r
          <option value="title_desc">Title Z\u2192A</option>\r
        </optgroup>\r
      </select>\r
    </div>\r
    <div class="filter-field filter-actions">\r
      <label>&nbsp;</label>\r
      <button class="btn reset-btn" (click)="resetFilters()" title="Reset all filters">\r
        <i class="fas fa-redo"></i><span>Reset Filters</span>\r
      </button>\r
    </div>\r
  </div>\r
\r
  <div class="content">\r
    <div class="list">\r
      <div class="list-header">\r
        <span class="list-title">Notes List</span>\r
        <span class="notes-count">{{ notes.length }} {{ notes.length === 1 ? 'note' : 'notes' }}</span>\r
      </div>\r
      <div class="list-items">\r
        <div class="list-item" *ngFor="let note of notes" [class.active]="note.id === selectedNote?.id" (click)="selectNote(note)">\r
          <div class="title-row">\r
            <button \r
              class="star-icon" \r
              [class.important]="note.important"\r
              (click)="toggleNoteImportant(note.id); $event.stopPropagation()"\r
              [title]="note.important ? 'Mark as not important' : 'Mark as important'"\r
            >\r
              {{ note.important ? '\u2605' : '\u2606' }}\r
            </button>\r
            <span class="title">{{ note.title || 'Untitled' }}</span>\r
            <div class="badges-right">\r
              <span class="category" *ngIf="note.categoryName">\r
                <span *ngIf="getCategoryIcon(note.categoryId)" class="category-icon">{{ getCategoryIcon(note.categoryId) }}</span>\r
                {{ note.categoryName }}\r
              </span>\r
              <span class="id-badge">#{{ note.id }}</span>\r
            </div>\r
          </div>\r
          <div class="meta-row">\r
            <span class="date">{{ note.createdOn | date:'MMM dd, yyyy HH:mm' }}</span>\r
            <span class="updated" *ngIf="note.updatedOn">Updated {{ note.updatedOn | date:'MMM dd, yyyy HH:mm' }}</span>\r
          </div>\r
          <div class="preview">{{ note.content | slice:0:140 }}</div>\r
        </div>\r
        <div class="empty" *ngIf="notes.length === 0">No notes found</div>\r
      </div>\r
    </div>\r
\r
      <div class="editor" *ngIf="selectedNote">\r
      <div class="editor-toolbar">\r
        <button \r
          class="star-icon editor-star" \r
          [class.important]="selectedNote.important"\r
          (click)="toggleSelectedNoteImportant()"\r
          [title]="selectedNote.important ? 'Mark as not important' : 'Mark as important'"\r
        >\r
          {{ selectedNote.important ? '\u2605' : '\u2606' }}\r
        </button>\r
        <input \r
          class="title-input" \r
          type="text" \r
          [(ngModel)]="selectedNote.title" \r
          (ngModelChange)="onTitleChange()" \r
          [disabled]="isNewNoteWithoutCategory()"\r
          placeholder="Note title"\r
        />\r
        <select \r
          class="category-select" \r
          [(ngModel)]="selectedNote.categoryId" \r
          (ngModelChange)="onCategoryChange()"\r
          [class.required]="isNewNoteWithoutCategory()"\r
        >\r
          <option [ngValue]="null">Select Category *</option>\r
          <option *ngFor="let c of categories" [ngValue]="c.id">{{ c.icon ? c.icon + ' ' : '' }}{{ c.name }}</option>\r
        </select>\r
        <div class="spacer"></div>\r
        <button class="btn" (click)="decreaseIndent()" [disabled]="isNewNoteWithoutCategory()" title="Decrease indentation">\u21A4</button>\r
        <button class="btn" (click)="insertBullet()" [disabled]="isNewNoteWithoutCategory()" title="Insert bullet point">\u25C9</button>\r
        <button class="btn" (click)="increaseIndent()" [disabled]="isNewNoteWithoutCategory()" title="Increase indentation">\u21A6</button>\r
        <button class="btn" [class.active]="!isTextWrapped" (click)="toggleTextWrap()" [disabled]="isNewNoteWithoutCategory()" [title]="isTextWrapped ? 'Disable text wrapping' : 'Enable text wrapping'">\u21A9\uFE0E</button>\r
        <button class="btn" [class.active]="showSearchReplace" (click)="toggleSearchReplace()" [disabled]="isNewNoteWithoutCategory()" title="Search and Replace (Ctrl+F)"><i class="fas fa-search"></i></button>\r
        <button class="btn" (click)="duplicateNote()" *ngIf="selectedNote.id && selectedNote.id > 0" title="Duplicate"><i class="fas fa-copy"></i></button>\r
        <button class="btn warn" (click)="deleteSelectedNote()" *ngIf="selectedNote.id && selectedNote.id > 0" title="Delete"><i class="fas fa-trash"></i></button>\r
        <button class="btn success" (click)="saveSelectedNote()" title="Save"><i class="fas fa-save"></i><span>{{ selectedNote.id && selectedNote.id > 0 ? 'Update' : 'Save' }}</span></button>\r
      </div>\r
      <div class="category-required-message" *ngIf="isNewNoteWithoutCategory()">\r
        <i class="fas fa-info-circle"></i>\r
        <span>Please select a category first before writing your note.</span>\r
      </div>\r
      \r
      <!-- Search and Replace Panel -->\r
      <div class="search-replace-panel" *ngIf="showSearchReplace">\r
        <div class="search-replace-header">\r
          <span class="search-label">SEARCH</span>\r
        </div>\r
        <div class="search-replace-content">\r
          <div class="search-section">\r
            <input \r
              type="text" \r
              class="search-input" \r
              [(ngModel)]="searchText" \r
              (input)="performSearch()"\r
              (keydown.enter)="findNext()"\r
              (keydown.escape)="closeSearchReplace()"\r
              placeholder="Search"\r
            />\r
            <div class="search-options">\r
              <button \r
                class="search-option-btn" \r
                [class.active]="searchCaseSensitive"\r
                (click)="toggleCaseSensitive()"\r
                title="Match case"\r
              >\r
                Aa\r
              </button>\r
              <button \r
                class="search-option-btn" \r
                [class.active]="searchWholeWord"\r
                (click)="toggleWholeWord()"\r
                title="Match whole word"\r
              >\r
                ab\r
              </button>\r
              <button \r
                class="search-option-btn" \r
                [class.active]="searchRegex"\r
                (click)="toggleRegex()"\r
                title="Use regular expression"\r
              >\r
                .*\r
              </button>\r
            </div>\r
          </div>\r
          <div class="replace-section">\r
            <input \r
              type="text" \r
              class="replace-input" \r
              [(ngModel)]="replaceText" \r
              (keydown.enter)="replaceNext()"\r
              (keydown.escape)="closeSearchReplace()"\r
              placeholder="Replace"\r
            />\r
            <div class="replace-actions">\r
              <button \r
                class="replace-btn" \r
                (click)="replaceAll()"\r
                [disabled]="!searchText || searchMatches.length === 0"\r
                title="Replace all"\r
              >\r
                AB\r
              </button>\r
              <button \r
                class="replace-btn replace-next-btn" \r
                (click)="replaceNext()"\r
                [disabled]="!searchText || searchMatches.length === 0"\r
                title="Replace Current"\r
              >\r
                <span class="replace-icon">ab</span>\r
                <span class="replace-arrow">\u2193</span>\r
              </button>\r
            </div>\r
          </div>\r
          <div class="search-results" *ngIf="searchText">\r
            <span class="match-count" *ngIf="searchMatches.length > 0">{{ currentMatchIndex + 1 }} of {{ searchMatches.length }}</span>\r
            <span class="match-count" *ngIf="searchMatches.length === 0">No matches</span>\r
            <div class="search-nav-buttons" *ngIf="searchMatches.length > 0">\r
              <button class="nav-btn" (click)="findPrevious()" title="Previous match">\r
                <i class="fas fa-chevron-up"></i>\r
              </button>\r
              <button class="nav-btn" (click)="findNext()" title="Next match">\r
                <i class="fas fa-chevron-down"></i>\r
              </button>\r
            </div>\r
            <button class="close-search-btn" (click)="closeSearchReplace()" title="Close">\r
              <i class="fas fa-times"></i>\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <div class="content-editor-wrapper">\r
        <div class="line-numbers" #lineNumbers (scroll)="syncScrollFromLineNumbers()">\r
          <div class="line-numbers-content">\r
            <div *ngFor="let num of getLineNumbers()" class="line-number">{{ num }}</div>\r
          </div>\r
        </div>\r
        <textarea \r
          #contentArea \r
          class="content-input" \r
          [class.unwrapped]="!isTextWrapped" \r
          [(ngModel)]="selectedNote.content" \r
          (ngModelChange)="onContentChange(); performSearch(); updateLineCount()" \r
          (scroll)="syncScroll()"\r
          [disabled]="isNewNoteWithoutCategory()"\r
          placeholder="Write your note here..."\r
        ></textarea>\r
      </div>\r
\r
      <!-- URLs/Docs Section - Compact & Collapsible -->\r
      <div class="urls-section-compact" *ngIf="selectedNote && selectedNote.id && selectedNote.id > 0">\r
        <div class="urls-header-compact" (click)="urlsSectionCollapsed = !urlsSectionCollapsed">\r
          <div class="urls-header-left">\r
            <i class="fas" [class.fa-chevron-down]="!urlsSectionCollapsed" [class.fa-chevron-right]="urlsSectionCollapsed"></i>\r
            <span class="urls-title-compact">URLs/Docs</span>\r
            <span class="urls-count-badge" *ngIf="noteUrls.length > 0">{{ noteUrls.length }}</span>\r
          </div>\r
          <div class="urls-header-right" (click)="$event.stopPropagation()">\r
            <div class="add-url-wrapper">\r
              <button \r
                class="btn btn-add-url-compact" \r
                (click)="toggleAddUrlDropdown()"\r
                [disabled]="!selectedNote.categoryId"\r
                title="Add URL">\r
                <i class="fas fa-plus"></i>\r
              </button>\r
              <div \r
                class="add-url-dropdown" \r
                *ngIf="showAddUrlDropdown && selectedNote.categoryId" \r
                (click)="$event.stopPropagation()"\r
                [style.top.px]="dropdownPosition?.top"\r
                [style.right.px]="dropdownPosition?.right">\r
                <div class="dropdown-header">Select URL to add</div>\r
                <div class="dropdown-content" *ngIf="availableUrls.length > 0; else noUrlsTemplate">\r
                  <div \r
                    class="url-option" \r
                    *ngFor="let url of availableUrls"\r
                    (click)="selectedUrlId = url.url_id; addUrlToNote()">\r
                    <span class="url-icon" *ngIf="url.category_icon">{{ url.category_icon }}</span>\r
                    <span class="url-label">{{ url.label }}</span>\r
                    <span class="url-url">{{ url.url }}</span>\r
                  </div>\r
                </div>\r
                <ng-template #noUrlsTemplate>\r
                  <div class="dropdown-empty">No available URLs for this category</div>\r
                </ng-template>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
        <!-- Collapsed Preview: Show first 3 URLs in a single line -->\r
        <div class="urls-preview-compact" *ngIf="urlsSectionCollapsed && noteUrls.length > 0">\r
          <div class="urls-preview-grid">\r
            <div \r
              class="url-preview-item" \r
              *ngFor="let urlItem of noteUrls.slice(0, 3)" \r
              (click)="openUrl(urlItem.url)"\r
              [title]="urlItem.label + ' - ' + urlItem.url">\r
              <span class="url-preview-icon" *ngIf="urlItem.category_icon">{{ urlItem.category_icon }}</span>\r
              <span class="url-preview-label">{{ urlItem.label }}</span>\r
              <!-- Credential Lock Icon -->\r
              <span \r
                *ngIf="urlItem.credentials && urlItem.credentials.length > 0" \r
                class="credential-tag-note"\r
                [title]="getCredentialTooltip(urlItem.credentials)"\r
                (click)="$event.stopPropagation()"\r
              >\r
                <i class="fas fa-lock"></i>\r
                <span class="credential-count-note">{{ urlItem.credentials.length }}</span>\r
              </span>\r
            </div>\r
            <div \r
              class="url-preview-more" \r
              *ngIf="noteUrls.length > 3" \r
              (click)="urlsSectionCollapsed = false; $event.stopPropagation()"\r
              [title]="'Click to expand and see all ' + noteUrls.length + ' URLs'">\r
              +{{ noteUrls.length - 3 }} more\r
            </div>\r
          </div>\r
        </div>\r
        <!-- Expanded Content: Show all URLs in grid (3 per row) -->\r
        <div class="urls-content-compact" *ngIf="!urlsSectionCollapsed">\r
          <div class="urls-list-compact" *ngIf="noteUrls.length > 0; else noUrlsMessage">\r
            <div class="url-item-compact" *ngFor="let urlItem of noteUrls" [title]="urlItem.url">\r
              <div class="url-content-compact" (click)="openUrl(urlItem.url)">\r
                <span class="url-category-icon-compact" *ngIf="urlItem.category_icon">{{ urlItem.category_icon }}</span>\r
                <span class="url-label-compact">{{ urlItem.label }}</span>\r
                <span class="url-link-compact" [title]="urlItem.url">{{ urlItem.url }}</span>\r
                <!-- Credential Lock Icon -->\r
                <span \r
                  *ngIf="urlItem.credentials && urlItem.credentials.length > 0" \r
                  class="credential-tag-note"\r
                  [title]="getCredentialTooltip(urlItem.credentials)"\r
                  (click)="$event.stopPropagation()"\r
                >\r
                  <i class="fas fa-lock"></i>\r
                  <span class="credential-count-note">{{ urlItem.credentials.length }}</span>\r
                </span>\r
                <i class="fas fa-external-link-alt url-external-icon-compact"></i>\r
              </div>\r
              <button \r
                class="btn-remove-url-compact" \r
                (click)="removeUrlFromNote(urlItem.url_id); $event.stopPropagation()"\r
                title="Remove URL">\r
                <i class="fas fa-times"></i>\r
              </button>\r
            </div>\r
          </div>\r
          <ng-template #noUrlsMessage>\r
            <div class="urls-empty-compact">\r
              <span>No URLs yet. Click <i class="fas fa-plus"></i> to add.</span>\r
            </div>\r
          </ng-template>\r
        </div>\r
      </div>\r
\r
      <div class="timestamps">\r
        <span>Created: {{ selectedNote.createdOn | date:'MMM dd, yyyy HH:mm' }}</span>\r
        <span *ngIf="selectedNote.updatedOn">Updated: {{ selectedNote.updatedOn | date:'MMM dd, yyyy HH:mm' }}</span>\r
      </div>\r
    </div>\r
\r
    <div class="empty-editor" *ngIf="!selectedNote">\r
      <p>Select a note or create a new one.</p>\r
    </div>\r
  </div>\r
</div>\r
\r
`, styles: ['/* src/app/components/notes/notes.scss */\n.notes-container {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 16px;\n  height: calc(100vh - 66px);\n  max-height: calc(100vh - 66px);\n  overflow: hidden;\n  box-sizing: border-box;\n  background: #0f1115;\n  color: #e6e6e6;\n}\n.notes-container *:focus {\n  outline: none !important;\n}\n.notes-container input:not([type=checkbox]):not([type=radio]):focus,\n.notes-container textarea:focus,\n.notes-container select:focus {\n  outline: none !important;\n  border-color: #4a5568 !important;\n  box-shadow: 0 0 0 2px rgba(74, 85, 104, 0.15) !important;\n}\n.notes-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-shrink: 0;\n  margin-bottom: 0;\n}\n.notes-header h2 {\n  margin: 0;\n  font-size: 18px;\n}\n.actions {\n  display: flex;\n  gap: 8px;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: #2c2f36;\n  color: #e6e6e6;\n  border: 1px solid #3a3f47;\n  border-radius: 8px;\n  padding: 8px 12px;\n  cursor: pointer;\n}\n.btn.primary {\n  background: #3b82f6;\n  border-color: #3b82f6;\n  color: white;\n}\n.btn.success {\n  background: #16a34a;\n  border-color: #16a34a;\n  color: white;\n}\n.btn.warn {\n  background: #7f1d1d;\n  border-color: #ef4444;\n  color: #fecaca;\n}\n.filters {\n  display: grid;\n  grid-template-columns: repeat(7, minmax(140px, 1fr));\n  gap: 6px;\n  flex-shrink: 0;\n}\n.filter-actions {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n}\n.reset-btn {\n  background: #4a5568;\n  border-color: #4a5568;\n  color: #e6e6e6;\n  white-space: nowrap;\n}\n.reset-btn:hover {\n  background: #5a6578;\n  border-color: #5a6578;\n}\n.filter-field {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.filter-field label {\n  color: #9aa0a6;\n  font-size: 12px;\n}\n.filter-field input,\n.filter-field select {\n  background: #1f2228;\n  color: #e6e6e6;\n  border: 1px solid #3a3f47;\n  border-radius: 8px;\n  padding: 8px 10px;\n  transition: all 0.2s ease;\n}\n.filter-field input:focus,\n.filter-field select:focus {\n  outline: none;\n  border-color: #4a5568;\n  box-shadow: 0 0 0 2px rgba(74, 85, 104, 0.15);\n}\n.content {\n  display: grid;\n  grid-template-columns: 360px 1fr;\n  gap: 8px;\n  flex: 1;\n  min-height: 0;\n  max-height: 100%;\n  overflow: hidden;\n}\n.list {\n  background: #14171c;\n  border: 1px solid #2a2f36;\n  border-radius: 12px;\n  overflow: hidden;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.list-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px;\n  border-bottom: 1px solid #23272f;\n  flex-shrink: 0;\n  background: #14171c;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n.list-title {\n  font-size: 14px;\n  font-weight: 600;\n  color: #e6e6e6;\n}\n.notes-count {\n  font-size: 13px;\n  color: #9aa0a6;\n  font-weight: 400;\n}\n.list-items {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  scrollbar-width: thin;\n  scrollbar-color: #3a3f47 #1a1d24;\n}\n.list-item {\n  padding: 12px;\n  border-bottom: 1px solid #23272f;\n  cursor: pointer;\n  min-height: 80px;\n  display: flex;\n  flex-direction: column;\n  border-left: 3px solid transparent;\n  transition: all 0.2s ease;\n}\n.list-item:hover {\n  background: #171a20;\n}\n.list-item.active {\n  background: #1b1f26;\n  border-left-color: #4a5568;\n  box-shadow: -2px 0 6px rgba(74, 85, 104, 0.12);\n}\n.title-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-shrink: 0;\n  gap: 8px;\n}\n.star-icon {\n  background: none;\n  border: none;\n  color: #9aa0a6;\n  font-size: 18px;\n  cursor: pointer;\n  padding: 2px 4px;\n  line-height: 1;\n  transition: all 0.2s;\n  flex-shrink: 0;\n}\n.star-icon:hover {\n  color: #fbbf24;\n  transform: scale(1.1);\n}\n.star-icon.important {\n  color: #fbbf24;\n}\n.star-icon.editor-star {\n  font-size: 20px;\n  padding: 4px;\n}\n.title {\n  font-weight: 600;\n  flex: 1;\n  min-width: 0;\n}\n.badges-right {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  margin-left: 8px;\n}\n.category {\n  font-size: 12px;\n  color: #9aa0a6;\n  background: #20242a;\n  border: 1px solid #2a2f36;\n  padding: 2px 6px;\n  border-radius: 6px;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.category-icon {\n  font-size: 14px;\n  line-height: 1;\n}\n.id-badge {\n  font-size: 11px;\n  color: #93c5fd;\n  background: #0b1320;\n  border: 1px solid #1e3a8a;\n  padding: 2px 6px;\n  border-radius: 6px;\n}\n.meta-row {\n  font-size: 12px;\n  color: #9aa0a6;\n  margin-top: 4px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-shrink: 0;\n}\n.preview {\n  margin-top: 6px;\n  color: #c6cbd2;\n  font-size: 13px;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  line-height: 1.4;\n  max-height: 2.8em;\n  word-wrap: break-word;\n  text-overflow: ellipsis;\n  flex: 1;\n}\n.empty {\n  padding: 16px;\n  color: #9aa0a6;\n  text-align: center;\n}\n.editor {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  background: #14171c;\n  border: 1px solid #2a2f36;\n  border-radius: 12px;\n  padding: 12px;\n  height: 100%;\n  min-height: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  position: relative;\n}\n.editor-toolbar {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  flex-shrink: 0;\n}\n.title-input {\n  flex: 1;\n  background: #1f2228;\n  color: #e6e6e6;\n  border: 1px solid #3a3f47;\n  border-radius: 8px;\n  padding: 8px 10px;\n  font-weight: 600;\n  transition: all 0.2s ease;\n}\n.title-input:focus {\n  outline: none;\n  border-color: #4a5568;\n  box-shadow: 0 0 0 2px rgba(74, 85, 104, 0.15);\n}\n.category-select {\n  background: #151922;\n  color: #e6e6e6;\n  border: 1px solid #2b3340;\n  border-radius: 8px;\n  padding: 8px 10px;\n  transition: all 0.2s ease;\n}\n.category-select:focus {\n  outline: none;\n  border-color: #4a5568;\n  box-shadow: 0 0 0 2px rgba(74, 85, 104, 0.15);\n}\n.category-select.required {\n  border-color: #ef4444;\n  border-width: 2px;\n}\n.category-required-message {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px;\n  background: #1a1f2e;\n  border: 1px solid #3a3f47;\n  border-radius: 8px;\n  color: #9aa0a6;\n  font-size: 13px;\n  margin-bottom: 8px;\n}\n.category-required-message i {\n  color: #3b82f6;\n}\n.content-input:disabled,\n.title-input:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  background: transparent;\n}\n.content-editor-wrapper:has(.content-input:disabled) {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.content-input:disabled:focus,\n.title-input:disabled:focus {\n  border-color: #3a3f47;\n  box-shadow: none;\n}\n.content-editor-wrapper:has(.content-input:disabled):focus-within {\n  border-color: #3a3f47;\n  box-shadow: none;\n}\n.btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.content-editor-wrapper {\n  display: flex;\n  flex: 1;\n  min-height: 0;\n  background: #0f1115;\n  border: 1px solid #3a3f47;\n  border-radius: 12px;\n  overflow: hidden;\n}\n.line-numbers {\n  flex-shrink: 0;\n  width: 50px;\n  background: #14171c;\n  border-right: 1px solid #3a3f47;\n  padding: 12px 8px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  -webkit-user-select: none;\n  user-select: none;\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    "Liberation Mono",\n    "Courier New",\n    monospace;\n  font-size: 0.95rem;\n  line-height: 1.5;\n  color: #6b7280;\n  text-align: right;\n  box-sizing: border-box;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n  height: 100%;\n  align-self: stretch;\n}\n.line-numbers-content {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\n.line-number {\n  padding: 0;\n  min-height: 1.5em;\n  height: 1.5em;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-end;\n  box-sizing: border-box;\n  flex-shrink: 0;\n}\n.content-input {\n  flex: 1;\n  min-height: 0;\n  resize: none;\n  background: transparent;\n  color: #e6e6e6;\n  border: none;\n  border-radius: 0;\n  padding: 12px;\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    "Liberation Mono",\n    "Courier New",\n    monospace;\n  font-size: 0.95rem;\n  line-height: 1.5;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  overflow: auto;\n  scrollbar-width: thin;\n  scrollbar-color: #3a3f47 #1a1d24;\n  transition: all 0.2s ease;\n  box-sizing: border-box;\n}\n.content-editor-wrapper:focus-within {\n  border-color: #4a5568;\n  box-shadow: 0 0 0 2px rgba(74, 85, 104, 0.15);\n}\n.content-input:focus {\n  outline: none;\n}\n.content-input.unwrapped {\n  white-space: pre;\n  overflow-x: auto;\n  overflow-y: auto;\n  word-wrap: normal;\n  overflow-wrap: normal;\n}\n.list-items::-webkit-scrollbar,\n.content-input::-webkit-scrollbar {\n  width: 12px;\n  height: 12px;\n}\n.line-numbers::-webkit-scrollbar {\n  display: none;\n  width: 0;\n  height: 0;\n}\n.list-items::-webkit-scrollbar-track,\n.content-input::-webkit-scrollbar-track,\n.line-numbers::-webkit-scrollbar-track {\n  background: #1a1d24;\n  border-radius: 6px;\n}\n.list-items::-webkit-scrollbar-thumb,\n.content-input::-webkit-scrollbar-thumb,\n.line-numbers::-webkit-scrollbar-thumb {\n  background: #3a3f47;\n  border-radius: 6px;\n  border: 2px solid #1a1d24;\n}\n.list-items::-webkit-scrollbar-thumb:hover,\n.content-input::-webkit-scrollbar-thumb:hover {\n  background: #4a4f57;\n}\n.list-items::-webkit-scrollbar-corner,\n.content-input::-webkit-scrollbar-corner {\n  background: #1a1d24;\n}\n.btn.active {\n  background: #3b82f6;\n  border-color: #3b82f6;\n  color: white;\n}\n.timestamps {\n  display: flex;\n  gap: 16px;\n  font-size: 12px;\n  color: #9aa0a6;\n  flex-shrink: 0;\n}\n.empty-editor {\n  display: grid;\n  place-items: center;\n  background: #14171c;\n  border: 1px solid #2a2f36;\n  border-radius: 12px;\n  color: #9aa0a6;\n}\n.spacer {\n  flex: 1;\n}\n.search-replace-panel {\n  background: #1f2228;\n  border: 1px solid #3a3f47;\n  border-radius: 8px;\n  padding: 12px;\n  margin-bottom: 8px;\n  flex-shrink: 0;\n}\n.search-replace-header {\n  margin-bottom: 8px;\n}\n.search-label {\n  font-size: 12px;\n  font-weight: 600;\n  color: #9aa0a6;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.search-replace-content {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.search-section,\n.replace-section {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.search-input,\n.replace-input {\n  flex: 1;\n  background: #14171c;\n  color: #e6e6e6;\n  border: 1px solid #3a3f47;\n  border-radius: 6px;\n  padding: 6px 10px;\n  font-size: 13px;\n  font-family: inherit;\n  transition: all 0.2s ease;\n}\n.search-input:focus,\n.replace-input:focus {\n  outline: none;\n  border-color: #4a5568;\n  box-shadow: 0 0 0 2px rgba(74, 85, 104, 0.15);\n}\n.search-options {\n  display: flex;\n  gap: 4px;\n}\n.search-option-btn {\n  background: #2c2f36;\n  color: #9aa0a6;\n  border: 1px solid #3a3f47;\n  border-radius: 4px;\n  padding: 4px 8px;\n  font-size: 12px;\n  cursor: pointer;\n  transition: all 0.2s;\n  min-width: 32px;\n  font-weight: 500;\n}\n.search-option-btn:hover {\n  background: #3a3f47;\n  color: #e6e6e6;\n  border-color: #4a4f57;\n}\n.search-option-btn.active {\n  background: #3b82f6;\n  border-color: #3b82f6;\n  color: white;\n}\n.replace-actions {\n  display: flex;\n  gap: 4px;\n}\n.replace-btn {\n  background: #2c2f36;\n  color: #9aa0a6;\n  border: 1px solid #3a3f47;\n  border-radius: 4px;\n  padding: 4px 8px;\n  font-size: 12px;\n  cursor: pointer;\n  transition: all 0.2s;\n  min-width: 32px;\n  font-weight: 500;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.replace-btn:hover:not(:disabled) {\n  background: #3a3f47;\n  color: #e6e6e6;\n  border-color: #4a4f57;\n}\n.replace-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.replace-next-btn {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  line-height: 1;\n  padding: 4px 6px;\n  gap: 2px;\n}\n.replace-icon {\n  font-size: 10px;\n  font-weight: 500;\n}\n.replace-arrow {\n  font-size: 10px;\n}\n.search-results {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 4px;\n  border-top: 1px solid #2a2f36;\n  gap: 8px;\n}\n.match-count {\n  font-size: 12px;\n  color: #9aa0a6;\n}\n.search-nav-buttons {\n  display: flex;\n  gap: 4px;\n}\n.nav-btn {\n  background: #2c2f36;\n  color: #9aa0a6;\n  border: 1px solid #3a3f47;\n  border-radius: 4px;\n  padding: 4px 6px;\n  cursor: pointer;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n}\n.nav-btn:hover {\n  background: #3a3f47;\n  color: #e6e6e6;\n  border-color: #4a4f57;\n}\n.close-search-btn {\n  background: none;\n  border: none;\n  color: #9aa0a6;\n  cursor: pointer;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: color 0.2s;\n}\n.close-search-btn:hover {\n  color: #e6e6e6;\n}\n@media (max-width: 1200px) {\n  .content {\n    grid-template-columns: 1fr;\n  }\n}\n.urls-section-compact {\n  margin-top: 8px;\n  background: #1f2228;\n  border: 1px solid #3a3f47;\n  border-radius: 6px;\n  flex-shrink: 0;\n  overflow: visible;\n  position: relative;\n}\n.urls-header-compact {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 6px 10px;\n  cursor: pointer;\n  transition: background 0.2s ease;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.urls-header-compact:hover {\n  background: #171a20;\n}\n.urls-header-left {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex: 1;\n  min-width: 0;\n}\n.urls-header-left i {\n  font-size: 10px;\n  color: #9aa0a6;\n  width: 12px;\n  flex-shrink: 0;\n}\n.urls-title-compact {\n  font-size: 12px;\n  font-weight: 600;\n  color: #e6e6e6;\n  flex-shrink: 0;\n}\n.urls-count-badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: #3b82f6;\n  color: white;\n  font-size: 12px;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 12px;\n  min-width: 24px;\n  height: 20px;\n  line-height: 1;\n  margin-left: 6px;\n  box-shadow: 0 2px 4px rgba(59, 130, 246, 0.3);\n}\n.urls-header-right {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.add-url-wrapper {\n  position: relative;\n  z-index: 10001;\n}\n.btn-add-url-compact {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: #3b82f6;\n  border: 1px solid #3b82f6;\n  color: white;\n  border-radius: 4px;\n  padding: 4px 8px;\n  font-size: 11px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  width: 24px;\n  height: 24px;\n}\n.btn-add-url-compact:hover:not(:disabled) {\n  background: #2563eb;\n  border-color: #2563eb;\n}\n.btn-add-url-compact:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.add-url-dropdown {\n  position: fixed;\n  background: #1f2228;\n  border: 1px solid #3a3f47;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\n  z-index: 10000;\n  min-width: 300px;\n  max-width: 400px;\n  max-height: 300px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.dropdown-header {\n  padding: 10px 12px;\n  background: #14171c;\n  border-bottom: 1px solid #2a2f36;\n  font-size: 12px;\n  font-weight: 600;\n  color: #9aa0a6;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.dropdown-content {\n  overflow-y: auto;\n  max-height: 250px;\n  scrollbar-width: thin;\n  scrollbar-color: #3a3f47 #1a1d24;\n}\n.dropdown-content::-webkit-scrollbar {\n  width: 8px;\n}\n.dropdown-content::-webkit-scrollbar-track {\n  background: #1a1d24;\n}\n.dropdown-content::-webkit-scrollbar-thumb {\n  background: #3a3f47;\n  border-radius: 4px;\n}\n.url-option {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 12px;\n  cursor: pointer;\n  transition: background 0.2s ease;\n  border-bottom: 1px solid #2a2f36;\n}\n.url-option:last-child {\n  border-bottom: none;\n}\n.url-option:hover {\n  background: #171a20;\n}\n.url-icon {\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.url-label {\n  flex: 1;\n  font-size: 13px;\n  font-weight: 500;\n  color: #e6e6e6;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.url-url {\n  font-size: 11px;\n  color: #9aa0a6;\n  flex-shrink: 0;\n  max-width: 150px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.dropdown-empty {\n  padding: 20px;\n  text-align: center;\n  color: #9aa0a6;\n  font-size: 13px;\n}\n.urls-content-compact {\n  border-top: 1px solid #2a2f36;\n  max-height: 200px;\n  overflow-y: auto;\n  scrollbar-width: thin;\n  scrollbar-color: #3a3f47 #1a1d24;\n}\n.urls-content-compact::-webkit-scrollbar {\n  width: 6px;\n}\n.urls-content-compact::-webkit-scrollbar-track {\n  background: #1a1d24;\n}\n.urls-content-compact::-webkit-scrollbar-thumb {\n  background: #3a3f47;\n  border-radius: 3px;\n}\n.urls-preview-compact {\n  border-top: 1px solid #2a2f36;\n  padding: 8px;\n  background: #171a20;\n  overflow: visible;\n  position: relative;\n  z-index: 1;\n}\n.urls-preview-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr) auto;\n  gap: 6px;\n  align-items: center;\n}\n.url-preview-item {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 8px;\n  background: rgba(74, 158, 255, 0.1);\n  border: 1px solid rgba(74, 158, 255, 0.2);\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  overflow: hidden;\n  min-width: 0;\n}\n.url-preview-item:hover {\n  background: rgba(74, 158, 255, 0.2);\n  border-color: rgba(74, 158, 255, 0.4);\n  transform: translateY(-1px);\n}\n.url-preview-icon {\n  font-size: 14px;\n  flex-shrink: 0;\n  line-height: 1;\n  width: 16px;\n  text-align: center;\n}\n.url-preview-label {\n  font-size: 11px;\n  font-weight: 500;\n  color: #4a9eff;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  flex: 1;\n  min-width: 0;\n}\n.url-preview-more {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 6px 8px;\n  background: #2a2f36;\n  border: 1px solid #3a3f47;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  color: #9aa0a6;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  text-align: center;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.url-preview-more:hover {\n  background: #3a3f47;\n  color: #3b82f6;\n  border-color: #3b82f6;\n}\n.urls-list-compact {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 6px;\n  padding: 6px;\n}\n.url-item-compact {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  background: rgba(74, 158, 255, 0.1);\n  border: 1px solid rgba(74, 158, 255, 0.2);\n  border-radius: 4px;\n  padding: 8px;\n  transition: all 0.2s ease;\n  min-height: 56px;\n  position: relative;\n}\n.url-item-compact:hover {\n  background: rgba(74, 158, 255, 0.2);\n  border-color: rgba(74, 158, 255, 0.4);\n  transform: translateY(-1px);\n}\n.url-content-compact {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  cursor: pointer;\n  min-width: 0;\n  overflow: hidden;\n  padding-right: 20px;\n}\n.url-category-icon-compact {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  font-size: 14px;\n  line-height: 1;\n  opacity: 0.7;\n  transition: opacity 0.2s ease;\n}\n.url-item-compact:hover .url-category-icon-compact {\n  opacity: 1;\n}\n.url-label-compact {\n  font-size: 12px;\n  font-weight: 600;\n  color: #4a9eff;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  line-height: 1.3;\n}\n.url-link-compact {\n  font-size: 10px;\n  color: #4a9eff;\n  opacity: 0.8;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  line-height: 1.2;\n  transition: opacity 0.2s ease;\n}\n.url-item-compact:hover .url-link-compact {\n  opacity: 1;\n}\n.url-external-icon-compact {\n  display: none;\n}\n.url-content-compact:hover .url-label-compact,\n.url-content-compact:hover .url-link-compact {\n  color: #4a9eff;\n}\n.btn-remove-url-compact {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  background: rgba(15, 17, 21, 0.8);\n  border: none;\n  color: #6b7280;\n  cursor: pointer;\n  padding: 2px;\n  border-radius: 3px;\n  transition: all 0.2s ease;\n  width: 18px;\n  height: 18px;\n  font-size: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  z-index: 10;\n}\n.url-item-compact:hover .btn-remove-url-compact {\n  opacity: 1;\n}\n.btn-remove-url-compact:hover {\n  background: #2a2f36;\n  color: #ef4444;\n}\n.urls-empty-compact {\n  padding: 12px;\n  text-align: center;\n  color: #6b7280;\n  font-size: 11px;\n  font-style: italic;\n}\n.urls-empty-compact i {\n  font-size: 10px;\n  margin: 0 2px;\n}\n.credential-tag-note {\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n  padding: 2px 6px;\n  background: rgba(16, 185, 129, 0.15);\n  border: 1px solid rgba(16, 185, 129, 0.3);\n  border-radius: 4px;\n  font-size: 11px;\n  color: #10b981;\n  cursor: help;\n  flex-shrink: 0;\n  transition: all 0.2s ease;\n  margin-left: 6px;\n}\n.credential-tag-note i {\n  font-size: 10px;\n}\n.credential-tag-note .credential-count-note {\n  font-weight: 600;\n  font-size: 10px;\n}\n.credential-tag-note:hover {\n  background: rgba(16, 185, 129, 0.25);\n  border-color: rgba(16, 185, 129, 0.5);\n  transform: translateY(-1px);\n}\n/*# sourceMappingURL=notes.css.map */\n'] }]
  }], () => [{ type: NotesService }, { type: CategoryMasterService }, { type: ToasterService }, { type: ConfirmationService }], { contentArea: [{
    type: ViewChild,
    args: ["contentArea"]
  }], lineNumbers: [{
    type: ViewChild,
    args: ["lineNumbers"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotesComponent, { className: "NotesComponent", filePath: "src/app/components/notes/notes.ts", lineNumber: 17 });
})();
export {
  NotesComponent
};
//# sourceMappingURL=chunk-B2T4G7QC.js.map
