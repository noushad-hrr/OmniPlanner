import {
  ThemeService
} from "./chunk-HSSXEUBC.js";
import {
  SettingsService
} from "./chunk-M3IPD7GB.js";
import "./chunk-XMNU56NZ.js";
import {
  CheckboxControlValueAccessor,
  CommonModule,
  Component,
  FormsModule,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  setClassMetadata,
  ɵNgSelectMultipleOption,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-OPSATDSU.js";

// src/app/components/settings/settings.ts
function SettingsComponent_div_40_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1, "Coming Soon");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275listener("click", function SettingsComponent_div_40_Template_div_click_0_listener() {
      const theme_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(theme_r2.isAvailable && ctx_r2.onAppThemeChange(theme_r2.id));
    });
    \u0275\u0275elementStart(1, "div", 46);
    \u0275\u0275element(2, "div", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 48)(4, "h4");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, SettingsComponent_div_40_span_8_Template, 2, 0, "span", 49);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const theme_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.selectedAppTheme === theme_r2.id)("disabled", !theme_r2.isAvailable);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", theme_r2.id === "theme1" ? "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)" : "#f0f0f0");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(theme_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(theme_r2.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !theme_r2.isAvailable);
  }
}
function SettingsComponent_option_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const theme_r4 = ctx.$implicit;
    \u0275\u0275property("value", theme_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", theme_r4.name, " ");
  }
}
function SettingsComponent_div_66_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1, "Coming Soon");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_div_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275listener("click", function SettingsComponent_div_66_Template_div_click_0_listener() {
      const theme_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(theme_r6.isAvailable && ctx_r2.onControlBarThemeChange(theme_r6.id));
    });
    \u0275\u0275elementStart(1, "div", 46);
    \u0275\u0275element(2, "div", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 48)(4, "h4");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, SettingsComponent_div_66_span_8_Template, 2, 0, "span", 49);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const theme_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.selectedControlBarTheme === theme_r6.id)("disabled", !theme_r6.isAvailable);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", theme_r6.id === "standard" ? "linear-gradient(135deg, rgba(109, 94, 246, 0.95) 0%, rgba(107, 87, 242, 0.95) 50%, rgba(116, 79, 230, 0.95) 100%)" : theme_r6.id === "dark" ? "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 25%, #252525 50%, #1f1f1f 75%, #151515 100%)" : theme_r6.id === "chrome-windows11" ? "linear-gradient(135deg, #f3f3f3 0%, #e8e8e8 50%, #f0f0f0 100%)" : "#f0f0f0");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(theme_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(theme_r6.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !theme_r6.isAvailable);
  }
}
function SettingsComponent_div_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275listener("click", function SettingsComponent_div_78_Template_div_click_0_listener() {
      const icon_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onIconSelect(icon_r8.name));
    });
    \u0275\u0275elementStart(1, "div", 53);
    \u0275\u0275element(2, "i", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 55);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const icon_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.selectedIcon === icon_r8.name);
    \u0275\u0275property("title", icon_r8.description);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("fa-" + icon_r8.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(icon_r8.name);
  }
}
function SettingsComponent_div_160_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275element(1, "i", 57);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Preferences saved successfully!");
    \u0275\u0275elementEnd()();
  }
}
var SettingsComponent = class _SettingsComponent {
  themeService;
  settingsService;
  currentTheme = "dark";
  selectedAppTheme = "theme1";
  selectedIconTheme = "default";
  selectedIcon = "layer-group";
  selectedControlBarTheme = "dark";
  sidebarCollapsed = true;
  appThemes = [
    {
      id: "theme1",
      name: "Theme 1",
      description: "Default dark theme (Development in progress)",
      preview: "Dark gradient with blue accents",
      isAvailable: true
    }
    // Add more themes as they're developed
  ];
  iconThemes = [
    {
      id: "default",
      name: "Default Icons",
      description: "Standard FontAwesome icons",
      icon: "layer-group",
      isDefault: true
    }
  ];
  controlBarThemes = [
    {
      id: "standard",
      name: "Purple Gradient Theme",
      description: "Modern purple gradient with glassmorphism effects",
      preview: "Purple gradient with smooth animations and modern icons",
      isAvailable: true
    },
    {
      id: "dark",
      name: "Dark Theme",
      description: "Standard professional dark theme with clean, minimal design",
      preview: "Clean dark background with subtle borders and standard button styling",
      isAvailable: true
    },
    {
      id: "chrome-windows11",
      name: "Chrome Theme - Windows 11",
      description: "Windows 11 style with rounded corners and modern design",
      preview: "Windows 11 inspired design with rounded elements",
      isAvailable: true
    }
  ];
  iconOptions = [
    { name: "layer-group", description: "Multiple planning layers - Currently used" },
    { name: "project-diagram", description: "Network/project structure - Best for comprehensive planning" },
    { name: "sitemap", description: "Hierarchical structure - Great for organizational planning" },
    { name: "cubes", description: "Interconnected modules - Represents modular planning" },
    { name: "boxes", description: "Organized containers - Clean, modern look" },
    { name: "cube", description: "Single 3D planning element" },
    { name: "object-group", description: "Grouped planning elements" },
    { name: "stream", description: "Continuous planning flow" },
    { name: "network-wired", description: "Connected planning network" },
    { name: "shapes", description: "Multiple planning shapes/types" }
  ];
  preferences = {
    theme: "dark",
    appThemeId: "theme1",
    iconThemeId: "default",
    iconName: "layer-group",
    controlBarThemeId: "dark",
    sidebarCollapsed: true
  };
  isLoading = false;
  saveSuccess = false;
  notificationEnabled = false;
  soundEnabled = true;
  constructor(themeService, settingsService) {
    this.themeService = themeService;
    this.settingsService = settingsService;
  }
  ngOnInit() {
    this.loadPreferences();
  }
  ngOnDestroy() {
  }
  loadPreferences() {
    this.isLoading = true;
    this.settingsService.getUserPreferences().subscribe({
      next: (prefs) => {
        if (prefs) {
          this.preferences = prefs;
          this.currentTheme = prefs.theme;
          this.selectedAppTheme = prefs.appThemeId;
          this.selectedIconTheme = prefs.iconThemeId;
          this.selectedIcon = prefs.iconName;
          this.selectedControlBarTheme = prefs.controlBarThemeId || "dark";
          this.sidebarCollapsed = prefs.sidebarCollapsed || false;
          this.themeService.setTheme(prefs.theme);
          this.applyIcon(prefs.iconName);
        } else {
          this.loadFromLocalStorage();
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error loading preferences:", error);
        this.loadFromLocalStorage();
        this.isLoading = false;
      }
    });
  }
  loadFromLocalStorage() {
    const storedIcon = localStorage.getItem("omni-planner-icon");
    if (storedIcon) {
      this.selectedIcon = storedIcon;
      this.preferences.iconName = storedIcon;
    }
    this.currentTheme = this.themeService.getCurrentTheme();
    this.preferences.theme = this.currentTheme;
  }
  onThemeChange(theme) {
    this.currentTheme = theme;
    this.preferences.theme = theme;
    this.themeService.setTheme(theme);
    this.savePreferences();
  }
  onAppThemeChange(themeId) {
    this.selectedAppTheme = themeId;
    this.preferences.appThemeId = themeId;
    this.savePreferences();
  }
  onIconThemeChange(themeId) {
    this.selectedIconTheme = themeId;
    this.preferences.iconThemeId = themeId;
    this.savePreferences();
  }
  onIconSelect(iconName) {
    this.selectedIcon = iconName;
    this.preferences.iconName = iconName;
    this.applyIcon(iconName);
    this.savePreferences();
  }
  onControlBarThemeChange(themeId) {
    this.selectedControlBarTheme = themeId;
    this.preferences.controlBarThemeId = themeId;
    window.dispatchEvent(new CustomEvent("control-bar-theme-changed", { detail: { theme: themeId } }));
    this.savePreferences();
  }
  applyIcon(iconName) {
    localStorage.setItem("omni-planner-icon", iconName);
    window.dispatchEvent(new CustomEvent("icon-changed", { detail: { icon: iconName } }));
  }
  onSidebarCollapseChange(collapsed) {
    this.sidebarCollapsed = collapsed;
    this.preferences.sidebarCollapsed = collapsed;
    this.savePreferences();
  }
  savePreferences() {
    this.isLoading = true;
    this.settingsService.saveUserPreferences(this.preferences).subscribe({
      next: (result) => {
        this.saveSuccess = true;
        setTimeout(() => {
          this.saveSuccess = false;
        }, 3e3);
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error saving preferences:", error);
        this.saveToLocalStorage();
        this.isLoading = false;
      }
    });
  }
  saveToLocalStorage() {
    try {
      localStorage.setItem("omni-planner-preferences", JSON.stringify(this.preferences));
      this.saveSuccess = true;
      setTimeout(() => {
        this.saveSuccess = false;
      }, 3e3);
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }
  resetToDefaults() {
    this.currentTheme = "dark";
    this.selectedAppTheme = "theme1";
    this.selectedIconTheme = "default";
    this.selectedIcon = "layer-group";
    this.selectedControlBarTheme = "dark";
    this.sidebarCollapsed = true;
    this.notificationEnabled = false;
    this.soundEnabled = true;
    this.preferences = {
      theme: "dark",
      appThemeId: "theme1",
      iconThemeId: "default",
      iconName: "layer-group",
      controlBarThemeId: "dark",
      sidebarCollapsed: true
    };
    this.themeService.setTheme("dark");
    this.applyIcon("layer-group");
    this.savePreferences();
  }
  onNotificationToggle() {
    if (this.notificationEnabled && "Notification" in window && Notification.permission === "default") {
      Notification.requestPermission().then((permission) => {
        if (permission !== "granted") {
          this.notificationEnabled = false;
        }
      });
    }
    this.savePreferences();
  }
  onSoundToggle() {
    this.savePreferences();
  }
  exportData() {
    const data = {
      preferences: this.preferences,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      version: "1.0.0"
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `omni-planner-export-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.json`;
    link.click();
    window.URL.revokeObjectURL(url);
  }
  clearLocalStorage() {
    if (confirm("Are you sure you want to clear all local storage data? This action cannot be undone.")) {
      localStorage.clear();
      sessionStorage.clear();
      alert("Local storage cleared. Please refresh the page.");
      window.location.reload();
    }
  }
  static \u0275fac = function SettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingsComponent)(\u0275\u0275directiveInject(ThemeService), \u0275\u0275directiveInject(SettingsService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsComponent, selectors: [["app-settings"]], decls: 165, vars: 16, consts: [[1, "settings-container"], [1, "settings-header"], [1, "settings-title"], [1, "fas", "fa-cog"], [1, "settings-subtitle"], [1, "settings-content"], [1, "settings-section"], [1, "section-header"], [1, "section-title"], [1, "fas", "fa-palette"], [1, "section-description"], [1, "section-content"], [1, "setting-item"], [1, "setting-label"], [1, "setting-description"], [1, "setting-control"], [1, "theme-toggle-group"], [1, "theme-btn", 3, "click"], [1, "fas", "fa-moon"], [1, "fas", "fa-sun"], [1, "theme-grid"], ["class", "theme-card", 3, "active", "disabled", "click", 4, "ngFor", "ngForOf"], [1, "form-select", 3, "ngModelChange", "change", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "fas", "fa-sliders-h"], [1, "fas", "fa-icons"], [1, "setting-item", "icon-selection-item"], [1, "setting-control", "icon-selection-control"], [1, "icon-grid"], ["class", "icon-option", 3, "active", "title", "click", 4, "ngFor", "ngForOf"], [1, "settings-section", "full-width"], [1, "toggle-switch"], ["type", "checkbox", 3, "ngModelChange", "change", "ngModel"], [1, "slider"], [1, "toggle-label"], [1, "fas", "fa-bell"], [1, "fas", "fa-database"], [1, "btn", "btn-secondary", 3, "click"], [1, "fas", "fa-download"], [1, "btn", "btn-danger", 3, "click"], [1, "fas", "fa-trash"], [1, "settings-actions"], ["class", "save-status", 4, "ngIf"], [1, "action-buttons"], [1, "fas", "fa-undo"], [1, "theme-card", 3, "click"], [1, "theme-preview"], [1, "preview-box"], [1, "theme-info"], ["class", "badge", 4, "ngIf"], [1, "badge"], [3, "value"], [1, "icon-option", 3, "click", "title"], [1, "icon-preview-box"], [1, "fas"], [1, "icon-name"], [1, "save-status"], [1, "fas", "fa-check-circle"]], template: function SettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275text(4, " Settings ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6, "Manage your application preferences and appearance");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "h3", 8);
      \u0275\u0275element(11, "i", 9);
      \u0275\u0275text(12, " Color & Theme ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "p", 10);
      \u0275\u0275text(14, "Customize colors and visual themes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 11)(16, "div", 12)(17, "div", 13)(18, "label");
      \u0275\u0275text(19, "Color Theme");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "span", 14);
      \u0275\u0275text(21, "Choose between dark and light mode");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 15)(23, "div", 16)(24, "button", 17);
      \u0275\u0275listener("click", function SettingsComponent_Template_button_click_24_listener() {
        return ctx.onThemeChange("dark");
      });
      \u0275\u0275element(25, "i", 18);
      \u0275\u0275elementStart(26, "span");
      \u0275\u0275text(27, "Dark");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "button", 17);
      \u0275\u0275listener("click", function SettingsComponent_Template_button_click_28_listener() {
        return ctx.onThemeChange("light");
      });
      \u0275\u0275element(29, "i", 19);
      \u0275\u0275elementStart(30, "span");
      \u0275\u0275text(31, "Light");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(32, "div", 12)(33, "div", 13)(34, "label");
      \u0275\u0275text(35, "Application Theme");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "span", 14);
      \u0275\u0275text(37, "Select a visual theme for the application");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 15)(39, "div", 20);
      \u0275\u0275template(40, SettingsComponent_div_40_Template, 9, 9, "div", 21);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(41, "div", 12)(42, "div", 13)(43, "label");
      \u0275\u0275text(44, "Icon Theme");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "span", 14);
      \u0275\u0275text(46, "Choose your preferred icon style");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div", 15)(48, "select", 22);
      \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Template_select_ngModelChange_48_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedIconTheme, $event) || (ctx.selectedIconTheme = $event);
        return $event;
      });
      \u0275\u0275listener("change", function SettingsComponent_Template_select_change_48_listener() {
        return ctx.onIconThemeChange(ctx.selectedIconTheme);
      });
      \u0275\u0275template(49, SettingsComponent_option_49_Template, 2, 2, "option", 23);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(50, "div", 6)(51, "div", 7)(52, "h3", 8);
      \u0275\u0275element(53, "i", 24);
      \u0275\u0275text(54, " Control Bar Theme ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "p", 10);
      \u0275\u0275text(56, "Customize the appearance of the control bar");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "div", 11)(58, "div", 12)(59, "div", 13)(60, "label");
      \u0275\u0275text(61, "Control Bar Theme");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "span", 14);
      \u0275\u0275text(63, "Select a visual theme for the control bar");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "div", 15)(65, "div", 20);
      \u0275\u0275template(66, SettingsComponent_div_66_Template, 9, 9, "div", 21);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(67, "div", 6)(68, "div", 7)(69, "h3", 8);
      \u0275\u0275element(70, "i", 25);
      \u0275\u0275text(71, " Application Icon ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "p", 10);
      \u0275\u0275text(73, "Select the icon displayed in the header");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "div", 11)(75, "div", 26)(76, "div", 27)(77, "div", 28);
      \u0275\u0275template(78, SettingsComponent_div_78_Template, 5, 6, "div", 29);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(79, "div", 30)(80, "div", 7)(81, "h3", 8);
      \u0275\u0275element(82, "i", 24);
      \u0275\u0275text(83, " General ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "p", 10);
      \u0275\u0275text(85, "General application settings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "div", 11)(87, "div", 12)(88, "div", 13)(89, "label");
      \u0275\u0275text(90, "Sidebar Behavior");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "span", 14);
      \u0275\u0275text(92, "Control how the sidebar behaves by default");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "div", 15)(94, "label", 31)(95, "input", 32);
      \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Template_input_ngModelChange_95_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.sidebarCollapsed, $event) || (ctx.sidebarCollapsed = $event);
        return $event;
      });
      \u0275\u0275listener("change", function SettingsComponent_Template_input_change_95_listener() {
        return ctx.onSidebarCollapseChange(ctx.sidebarCollapsed);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(96, "span", 33);
      \u0275\u0275elementStart(97, "span", 34);
      \u0275\u0275text(98);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(99, "div", 30)(100, "div", 7)(101, "h3", 8);
      \u0275\u0275element(102, "i", 35);
      \u0275\u0275text(103, " Notifications & Alerts ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "p", 10);
      \u0275\u0275text(105, "Manage notification preferences and alerts");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(106, "div", 11)(107, "div", 12)(108, "div", 13)(109, "label");
      \u0275\u0275text(110, "Desktop Notifications");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "span", 14);
      \u0275\u0275text(112, "Receive browser notifications for important events");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(113, "div", 15)(114, "label", 31)(115, "input", 32);
      \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Template_input_ngModelChange_115_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.notificationEnabled, $event) || (ctx.notificationEnabled = $event);
        return $event;
      });
      \u0275\u0275listener("change", function SettingsComponent_Template_input_change_115_listener() {
        return ctx.onNotificationToggle();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(116, "span", 33);
      \u0275\u0275elementStart(117, "span", 34);
      \u0275\u0275text(118);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(119, "div", 12)(120, "div", 13)(121, "label");
      \u0275\u0275text(122, "Sound Alerts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "span", 14);
      \u0275\u0275text(124, "Play sounds for notifications and alerts");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(125, "div", 15)(126, "label", 31)(127, "input", 32);
      \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Template_input_ngModelChange_127_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.soundEnabled, $event) || (ctx.soundEnabled = $event);
        return $event;
      });
      \u0275\u0275listener("change", function SettingsComponent_Template_input_change_127_listener() {
        return ctx.onSoundToggle();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(128, "span", 33);
      \u0275\u0275elementStart(129, "span", 34);
      \u0275\u0275text(130);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(131, "div", 30)(132, "div", 7)(133, "h3", 8);
      \u0275\u0275element(134, "i", 36);
      \u0275\u0275text(135, " Data & Privacy ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "p", 10);
      \u0275\u0275text(137, "Manage your data and privacy settings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(138, "div", 11)(139, "div", 12)(140, "div", 13)(141, "label");
      \u0275\u0275text(142, "Export Data");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "span", 14);
      \u0275\u0275text(144, "Export all your application data");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(145, "div", 15)(146, "button", 37);
      \u0275\u0275listener("click", function SettingsComponent_Template_button_click_146_listener() {
        return ctx.exportData();
      });
      \u0275\u0275element(147, "i", 38);
      \u0275\u0275text(148, " Export Data ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(149, "div", 12)(150, "div", 13)(151, "label");
      \u0275\u0275text(152, "Clear Local Storage");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "span", 14);
      \u0275\u0275text(154, "Remove all locally stored data (preferences, cache, etc.)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(155, "div", 15)(156, "button", 39);
      \u0275\u0275listener("click", function SettingsComponent_Template_button_click_156_listener() {
        return ctx.clearLocalStorage();
      });
      \u0275\u0275element(157, "i", 40);
      \u0275\u0275text(158, " Clear Storage ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(159, "div", 41);
      \u0275\u0275template(160, SettingsComponent_div_160_Template, 4, 0, "div", 42);
      \u0275\u0275elementStart(161, "div", 43)(162, "button", 37);
      \u0275\u0275listener("click", function SettingsComponent_Template_button_click_162_listener() {
        return ctx.resetToDefaults();
      });
      \u0275\u0275element(163, "i", 44);
      \u0275\u0275text(164, " Reset to Defaults ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(24);
      \u0275\u0275classProp("active", ctx.currentTheme === "dark");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.currentTheme === "light");
      \u0275\u0275advance(12);
      \u0275\u0275property("ngForOf", ctx.appThemes);
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedIconTheme);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.iconThemes);
      \u0275\u0275advance(17);
      \u0275\u0275property("ngForOf", ctx.controlBarThemes);
      \u0275\u0275advance(12);
      \u0275\u0275property("ngForOf", ctx.iconOptions);
      \u0275\u0275advance(17);
      \u0275\u0275twoWayProperty("ngModel", ctx.sidebarCollapsed);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.sidebarCollapsed ? "Collapsed by default" : "Expanded by default");
      \u0275\u0275advance(17);
      \u0275\u0275twoWayProperty("ngModel", ctx.notificationEnabled);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.notificationEnabled ? "Enabled" : "Disabled");
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.soundEnabled);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.soundEnabled ? "Enabled" : "Disabled");
      \u0275\u0275advance(30);
      \u0275\u0275property("ngIf", ctx.saveSuccess);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['\n\n[_ngcontent-%COMP%]:root {\n  --primary-bg: #1a1a1a;\n  --secondary-bg: #2d2d2d;\n  --tertiary-bg: #3a3a3a;\n  --surface-bg: #2a2a2a;\n  --primary-accent: #4a9eff;\n  --secondary-accent: #7c3aed;\n  --success-color: #10b981;\n  --warning-color: #f59e0b;\n  --error-color: #ef4444;\n  --text-primary: #ffffff;\n  --text-secondary: #e5e5e5;\n  --text-muted: #a3a3a3;\n  --text-disabled: #6b7280;\n  --border-primary: #4a4a4a;\n  --border-secondary: #3a3a3a;\n  --border-accent: #5a5a5a;\n  --shadow-light: rgba(0, 0, 0, 0.1);\n  --shadow-medium: rgba(0, 0, 0, 0.2);\n  --shadow-heavy: rgba(0, 0, 0, 0.3);\n  --hover-bg: #3a3a3a;\n  --hover-accent: #5bb0ff;\n  --active-bg: #4a4a4a;\n  --active-accent: #3a8fdf;\n}\n.settings-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  padding: 2rem 3rem;\n  color: var(--text-primary);\n  box-sizing: border-box;\n}\n.settings-header[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n  padding-bottom: 1.5rem;\n  border-bottom: 2px solid var(--border-primary);\n}\n.settings-header[_ngcontent-%COMP%]   .settings-title[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-size: 2.25rem;\n  font-weight: 700;\n  margin: 0 0 0.5rem 0;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.settings-header[_ngcontent-%COMP%]   .settings-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary-accent);\n  font-size: 1.75rem;\n}\n.settings-header[_ngcontent-%COMP%]   .settings-subtitle[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 1.125rem;\n  margin: 0;\n  font-weight: 400;\n}\n.settings-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 2rem;\n  align-items: start;\n}\n.settings-section[_ngcontent-%COMP%] {\n  background-color: var(--secondary-bg);\n  border: 1px solid var(--border-primary);\n  border-radius: 0.75rem;\n  box-shadow: 0 1px 2px 0 var(--shadow-light);\n  transition: all 0.3s ease-in-out;\n  box-shadow: 0 10px 15px -3px var(--shadow-medium), 0 4px 6px -2px var(--shadow-light);\n  border-radius: 0.75rem;\n  overflow: hidden;\n  height: fit-content;\n}\n.settings-section[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 6px -1px var(--shadow-light), 0 2px 4px -1px var(--shadow-light);\n  border-color: var(--border-accent);\n}\n.settings-section[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 20px 25px -5px var(--shadow-medium), 0 10px 10px -5px var(--shadow-light);\n  transform: translateY(-2px);\n}\n.settings-section.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.settings-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  padding: 1.5rem 2rem;\n  border-bottom: 1px solid var(--border-primary);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(74, 158, 255, 0.08) 0%,\n      rgba(124, 58, 237, 0.08) 100%);\n}\n.settings-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-size: 1.125rem;\n  font-weight: 600;\n  margin: 0 0 0.25rem 0;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.settings-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary-accent);\n  font-size: 1rem;\n}\n.settings-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-description[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.875rem;\n  margin: 0;\n}\n.settings-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%] {\n  padding: 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.setting-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  gap: 1.5rem;\n  align-items: start;\n  padding: 1rem 0;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n}\n.setting-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.setting-item[_ngcontent-%COMP%]   .setting-label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  min-width: 200px;\n}\n.setting-item[_ngcontent-%COMP%]   .setting-label[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-size: 1rem;\n  font-weight: 600;\n}\n.setting-item[_ngcontent-%COMP%]   .setting-label[_ngcontent-%COMP%]   .setting-description[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.875rem;\n  line-height: 1.4;\n}\n.setting-item[_ngcontent-%COMP%]   .setting-control[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.setting-item.icon-selection-item[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n  padding: 0;\n  border-bottom: none;\n}\n.setting-item.icon-selection-item[_ngcontent-%COMP%]   .icon-selection-control[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.theme-toggle-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n.theme-toggle-group[_ngcontent-%COMP%]   .theme-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 1rem 1.5rem;\n  background: var(--tertiary-bg);\n  border: 2px solid var(--border-primary);\n  border-radius: 0.5rem;\n  color: var(--text-secondary);\n  font-size: 1rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.theme-toggle-group[_ngcontent-%COMP%]   .theme-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n}\n.theme-toggle-group[_ngcontent-%COMP%]   .theme-btn[_ngcontent-%COMP%]:hover {\n  background: var(--hover-bg);\n  border-color: var(--primary-accent);\n  color: var(--text-primary);\n  transform: translateY(-2px);\n}\n.theme-toggle-group[_ngcontent-%COMP%]   .theme-btn.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-accent) 0%,\n      var(--secondary-accent) 100%);\n  border-color: var(--primary-accent);\n  color: var(--text-primary);\n  box-shadow: 0 4px 12px rgba(74, 158, 255, 0.3);\n}\n.theme-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 1.5rem;\n}\n.theme-grid[_ngcontent-%COMP%]   .theme-card[_ngcontent-%COMP%] {\n  background-color: var(--secondary-bg);\n  border: 1px solid var(--border-primary);\n  border-radius: 0.75rem;\n  box-shadow: 0 1px 2px 0 var(--shadow-light);\n  transition: all 0.3s ease-in-out;\n  box-shadow: 0 10px 15px -3px var(--shadow-medium), 0 4px 6px -2px var(--shadow-light);\n  border-radius: 0.75rem;\n  padding: 1rem;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  border: 2px solid transparent;\n  opacity: 1;\n}\n.theme-grid[_ngcontent-%COMP%]   .theme-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 6px -1px var(--shadow-light), 0 2px 4px -1px var(--shadow-light);\n  border-color: var(--border-accent);\n}\n.theme-grid[_ngcontent-%COMP%]   .theme-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 20px 25px -5px var(--shadow-medium), 0 10px 10px -5px var(--shadow-light);\n  transform: translateY(-2px);\n}\n.theme-grid[_ngcontent-%COMP%]   .theme-card[_ngcontent-%COMP%]:hover:not(.disabled) {\n  transform: translateY(-4px);\n  border-color: rgba(74, 158, 255, 0.3);\n}\n.theme-grid[_ngcontent-%COMP%]   .theme-card.active[_ngcontent-%COMP%] {\n  border-color: var(--primary-accent);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(74, 158, 255, 0.1) 0%,\n      rgba(124, 58, 237, 0.1) 100%);\n}\n.theme-grid[_ngcontent-%COMP%]   .theme-card.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.theme-grid[_ngcontent-%COMP%]   .theme-card[_ngcontent-%COMP%]   .theme-preview[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 80px;\n  border-radius: 0.5rem;\n  overflow: hidden;\n  margin-bottom: 1rem;\n}\n.theme-grid[_ngcontent-%COMP%]   .theme-card[_ngcontent-%COMP%]   .theme-preview[_ngcontent-%COMP%]   .preview-box[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 0.5rem;\n}\n.theme-grid[_ngcontent-%COMP%]   .theme-card[_ngcontent-%COMP%]   .theme-info[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.theme-grid[_ngcontent-%COMP%]   .theme-card[_ngcontent-%COMP%]   .theme-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-size: 1rem;\n  font-weight: 600;\n  margin: 0 0 0.25rem 0;\n}\n.theme-grid[_ngcontent-%COMP%]   .theme-card[_ngcontent-%COMP%]   .theme-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.75rem;\n  margin: 0 0 0.25rem 0;\n}\n.theme-grid[_ngcontent-%COMP%]   .theme-card[_ngcontent-%COMP%]   .theme-info[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 0.25rem;\n  background: var(--warning-color);\n  color: var(--text-primary);\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.form-select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem;\n  background: var(--tertiary-bg);\n  border: 1px solid var(--border-primary);\n  border-radius: 0.5rem;\n  color: var(--text-primary);\n  font-size: 1rem;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n}\n.form-select[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-accent);\n}\n.form-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-accent);\n  box-shadow: 0 0 0 3px rgba(74, 158, 255, 0.2);\n}\n.icon-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\n  gap: 1rem;\n}\n.icon-grid[_ngcontent-%COMP%]   .icon-option[_ngcontent-%COMP%] {\n  background-color: var(--secondary-bg);\n  border: 1px solid var(--border-primary);\n  border-radius: 0.75rem;\n  box-shadow: 0 1px 2px 0 var(--shadow-light);\n  transition: all 0.3s ease-in-out;\n  box-shadow: 0 10px 15px -3px var(--shadow-medium), 0 4px 6px -2px var(--shadow-light);\n  padding: 1rem;\n  border-radius: 0.5rem;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  border: 2px solid transparent;\n  text-align: center;\n}\n.icon-grid[_ngcontent-%COMP%]   .icon-option[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 6px -1px var(--shadow-light), 0 2px 4px -1px var(--shadow-light);\n  border-color: var(--border-accent);\n}\n.icon-grid[_ngcontent-%COMP%]   .icon-option[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 20px 25px -5px var(--shadow-medium), 0 10px 10px -5px var(--shadow-light);\n  transform: translateY(-2px);\n}\n.icon-grid[_ngcontent-%COMP%]   .icon-option[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  border-color: rgba(74, 158, 255, 0.3);\n}\n.icon-grid[_ngcontent-%COMP%]   .icon-option.active[_ngcontent-%COMP%] {\n  border-color: var(--primary-accent);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(74, 158, 255, 0.1) 0%,\n      rgba(124, 58, 237, 0.1) 100%);\n}\n.icon-grid[_ngcontent-%COMP%]   .icon-option.active[_ngcontent-%COMP%]   .icon-preview-box[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-accent) 0%,\n      var(--secondary-accent) 100%);\n  box-shadow: 0 4px 12px rgba(74, 158, 255, 0.3);\n}\n.icon-grid[_ngcontent-%COMP%]   .icon-option[_ngcontent-%COMP%]   .icon-preview-box[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  margin: 0 auto 0.5rem;\n  background: var(--tertiary-bg);\n  border-radius: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-primary);\n  font-size: 1.5rem;\n  transition: all 0.3s ease-in-out;\n}\n.icon-grid[_ngcontent-%COMP%]   .icon-option[_ngcontent-%COMP%]   .icon-name[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-size: 0.75rem;\n  font-weight: 600;\n  margin-bottom: 0.25rem;\n  text-transform: capitalize;\n}\n.icon-grid[_ngcontent-%COMP%]   .icon-option[_ngcontent-%COMP%]   .icon-description[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.65rem;\n  line-height: 1.2;\n  display: none;\n}\n.toggle-switch[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  cursor: pointer;\n}\n.toggle-switch[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  display: none;\n}\n.toggle-switch[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]    + .slider[_ngcontent-%COMP%] {\n  position: relative;\n  width: 50px;\n  height: 26px;\n  background: var(--tertiary-bg);\n  border-radius: 9999px;\n  transition: all 0.3s ease-in-out;\n  border: 2px solid var(--border-primary);\n}\n.toggle-switch[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]    + .slider[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  background: var(--text-primary);\n  top: 2px;\n  left: 2px;\n  transition: all 0.3s ease-in-out;\n}\n.toggle-switch[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-accent) 0%,\n      var(--secondary-accent) 100%);\n  border-color: var(--primary-accent);\n}\n.toggle-switch[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]::before {\n  transform: translateX(24px);\n}\n.toggle-switch[_ngcontent-%COMP%]   .toggle-label[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.875rem;\n}\n.settings-actions[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 2rem;\n  border-top: 2px solid var(--border-primary);\n  margin-top: 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(74, 158, 255, 0.03) 0%,\n      rgba(124, 58, 237, 0.03) 100%);\n  border-radius: 0.75rem;\n}\n.settings-actions[_ngcontent-%COMP%]   .save-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: var(--success-color);\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.settings-actions[_ngcontent-%COMP%]   .save-status[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.settings-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n.settings-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5rem 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.5rem;\n  font-family:\n    "Inter",\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  font-size: 0.875rem;\n  font-weight: 500;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.15s ease-in-out;\n  outline: none;\n  padding: 1rem 1.5rem;\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.settings-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(74, 158, 255, 0.3);\n}\n.settings-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.settings-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5rem 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.5rem;\n  font-family:\n    "Inter",\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  font-size: 0.875rem;\n  font-weight: 500;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.15s ease-in-out;\n  outline: none;\n  background-color: transparent;\n  color: var(--text-secondary);\n  border-color: var(--border-primary);\n}\n.settings-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(74, 158, 255, 0.3);\n}\n.settings-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.settings-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: var(--hover-bg);\n  border-color: var(--border-accent);\n}\n.settings-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:active:not(:disabled) {\n  background-color: var(--active-bg);\n}\n.settings-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-danger[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  border-color: rgba(239, 68, 68, 0.3);\n  color: var(--error-color);\n}\n.settings-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-danger[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.2);\n  border-color: rgba(239, 68, 68, 0.5);\n}\n.settings-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n@media (max-width: 1200px) {\n  .settings-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .setting-item[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n}\n@media (max-width: 768px) {\n  .settings-container[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .settings-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .setting-item[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .theme-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .icon-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));\n  }\n  .settings-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .settings-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .settings-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}\n/*# sourceMappingURL=settings.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsComponent, [{
    type: Component,
    args: [{ selector: "app-settings", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="settings-container">\r
  <!-- Settings Header -->\r
  <div class="settings-header">\r
    <h2 class="settings-title">\r
      <i class="fas fa-cog"></i>\r
      Settings\r
    </h2>\r
    <p class="settings-subtitle">Manage your application preferences and appearance</p>\r
  </div>\r
\r
  <!-- Settings Content -->\r
  <div class="settings-content">\r
    \r
    <!-- Color & Theme Section -->\r
    <div class="settings-section">\r
      <div class="section-header">\r
        <h3 class="section-title">\r
          <i class="fas fa-palette"></i>\r
          Color & Theme\r
        </h3>\r
        <p class="section-description">Customize colors and visual themes</p>\r
      </div>\r
\r
      <div class="section-content">\r
        <!-- Theme Toggle -->\r
        <div class="setting-item">\r
          <div class="setting-label">\r
            <label>Color Theme</label>\r
            <span class="setting-description">Choose between dark and light mode</span>\r
          </div>\r
          <div class="setting-control">\r
            <div class="theme-toggle-group">\r
              <button \r
                class="theme-btn" \r
                [class.active]="currentTheme === 'dark'"\r
                (click)="onThemeChange('dark')">\r
                <i class="fas fa-moon"></i>\r
                <span>Dark</span>\r
              </button>\r
              <button \r
                class="theme-btn" \r
                [class.active]="currentTheme === 'light'"\r
                (click)="onThemeChange('light')">\r
                <i class="fas fa-sun"></i>\r
                <span>Light</span>\r
              </button>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Application Themes -->\r
        <div class="setting-item">\r
          <div class="setting-label">\r
            <label>Application Theme</label>\r
            <span class="setting-description">Select a visual theme for the application</span>\r
          </div>\r
          <div class="setting-control">\r
            <div class="theme-grid">\r
              <div \r
                class="theme-card" \r
                *ngFor="let theme of appThemes"\r
                [class.active]="selectedAppTheme === theme.id"\r
                [class.disabled]="!theme.isAvailable"\r
                (click)="theme.isAvailable && onAppThemeChange(theme.id)">\r
                <div class="theme-preview">\r
                  <div class="preview-box" [style.background]="theme.id === 'theme1' ? 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)' : '#f0f0f0'"></div>\r
                </div>\r
                <div class="theme-info">\r
                  <h4>{{ theme.name }}</h4>\r
                  <p>{{ theme.description }}</p>\r
                  <span class="badge" *ngIf="!theme.isAvailable">Coming Soon</span>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Icon Theme -->\r
        <div class="setting-item">\r
          <div class="setting-label">\r
            <label>Icon Theme</label>\r
            <span class="setting-description">Choose your preferred icon style</span>\r
          </div>\r
          <div class="setting-control">\r
            <select class="form-select" [(ngModel)]="selectedIconTheme" (change)="onIconThemeChange(selectedIconTheme)">\r
              <option *ngFor="let theme of iconThemes" [value]="theme.id">\r
                {{ theme.name }}\r
              </option>\r
            </select>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Control Bar Theme Section -->\r
    <div class="settings-section">\r
      <div class="section-header">\r
        <h3 class="section-title">\r
          <i class="fas fa-sliders-h"></i>\r
          Control Bar Theme\r
        </h3>\r
        <p class="section-description">Customize the appearance of the control bar</p>\r
      </div>\r
\r
      <div class="section-content">\r
        <!-- Control Bar Themes -->\r
        <div class="setting-item">\r
          <div class="setting-label">\r
            <label>Control Bar Theme</label>\r
            <span class="setting-description">Select a visual theme for the control bar</span>\r
          </div>\r
          <div class="setting-control">\r
            <div class="theme-grid">\r
              <div \r
                class="theme-card" \r
                *ngFor="let theme of controlBarThemes"\r
                [class.active]="selectedControlBarTheme === theme.id"\r
                [class.disabled]="!theme.isAvailable"\r
                (click)="theme.isAvailable && onControlBarThemeChange(theme.id)">\r
                <div class="theme-preview">\r
                  <div class="preview-box" \r
                    [style.background]="theme.id === 'standard' ? 'linear-gradient(135deg, rgba(109, 94, 246, 0.95) 0%, rgba(107, 87, 242, 0.95) 50%, rgba(116, 79, 230, 0.95) 100%)' : \r
                    theme.id === 'dark' ? 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 25%, #252525 50%, #1f1f1f 75%, #151515 100%)' : \r
                    theme.id === 'chrome-windows11' ? 'linear-gradient(135deg, #f3f3f3 0%, #e8e8e8 50%, #f0f0f0 100%)' : '#f0f0f0'"></div>\r
                </div>\r
                <div class="theme-info">\r
                  <h4>{{ theme.name }}</h4>\r
                  <p>{{ theme.description }}</p>\r
                  <span class="badge" *ngIf="!theme.isAvailable">Coming Soon</span>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Icon Selection Section -->\r
    <div class="settings-section">\r
      <div class="section-header">\r
        <h3 class="section-title">\r
          <i class="fas fa-icons"></i>\r
          Application Icon\r
        </h3>\r
        <p class="section-description">Select the icon displayed in the header</p>\r
      </div>\r
\r
      <div class="section-content">\r
        <!-- Application Icon -->\r
        <div class="setting-item icon-selection-item">\r
          <div class="setting-control icon-selection-control">\r
            <div class="icon-grid">\r
              <div \r
                class="icon-option" \r
                *ngFor="let icon of iconOptions"\r
                [class.active]="selectedIcon === icon.name"\r
                (click)="onIconSelect(icon.name)"\r
                [title]="icon.description">\r
                <div class="icon-preview-box">\r
                  <i class="fas" [class]="'fa-' + icon.name"></i>\r
                </div>\r
                <div class="icon-name">{{ icon.name }}</div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- General Settings -->\r
    <div class="settings-section full-width">\r
      <div class="section-header">\r
        <h3 class="section-title">\r
          <i class="fas fa-sliders-h"></i>\r
          General\r
        </h3>\r
        <p class="section-description">General application settings</p>\r
      </div>\r
\r
      <div class="section-content">\r
        <!-- Sidebar Behavior -->\r
        <div class="setting-item">\r
          <div class="setting-label">\r
            <label>Sidebar Behavior</label>\r
            <span class="setting-description">Control how the sidebar behaves by default</span>\r
          </div>\r
          <div class="setting-control">\r
            <label class="toggle-switch">\r
              <input \r
                type="checkbox" \r
                [(ngModel)]="sidebarCollapsed"\r
                (change)="onSidebarCollapseChange(sidebarCollapsed)">\r
              <span class="slider"></span>\r
              <span class="toggle-label">{{ sidebarCollapsed ? 'Collapsed by default' : 'Expanded by default' }}</span>\r
            </label>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Notifications & Alerts -->\r
    <div class="settings-section full-width">\r
      <div class="section-header">\r
        <h3 class="section-title">\r
          <i class="fas fa-bell"></i>\r
          Notifications & Alerts\r
        </h3>\r
        <p class="section-description">Manage notification preferences and alerts</p>\r
      </div>\r
\r
      <div class="section-content">\r
        <div class="setting-item">\r
          <div class="setting-label">\r
            <label>Desktop Notifications</label>\r
            <span class="setting-description">Receive browser notifications for important events</span>\r
          </div>\r
          <div class="setting-control">\r
            <label class="toggle-switch">\r
              <input type="checkbox" [(ngModel)]="notificationEnabled" (change)="onNotificationToggle()">\r
              <span class="slider"></span>\r
              <span class="toggle-label">{{ notificationEnabled ? 'Enabled' : 'Disabled' }}</span>\r
            </label>\r
          </div>\r
        </div>\r
\r
        <div class="setting-item">\r
          <div class="setting-label">\r
            <label>Sound Alerts</label>\r
            <span class="setting-description">Play sounds for notifications and alerts</span>\r
          </div>\r
          <div class="setting-control">\r
            <label class="toggle-switch">\r
              <input type="checkbox" [(ngModel)]="soundEnabled" (change)="onSoundToggle()">\r
              <span class="slider"></span>\r
              <span class="toggle-label">{{ soundEnabled ? 'Enabled' : 'Disabled' }}</span>\r
            </label>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Data & Privacy -->\r
    <div class="settings-section full-width">\r
      <div class="section-header">\r
        <h3 class="section-title">\r
          <i class="fas fa-database"></i>\r
          Data & Privacy\r
        </h3>\r
        <p class="section-description">Manage your data and privacy settings</p>\r
      </div>\r
\r
      <div class="section-content">\r
        <div class="setting-item">\r
          <div class="setting-label">\r
            <label>Export Data</label>\r
            <span class="setting-description">Export all your application data</span>\r
          </div>\r
          <div class="setting-control">\r
            <button class="btn btn-secondary" (click)="exportData()">\r
              <i class="fas fa-download"></i>\r
              Export Data\r
            </button>\r
          </div>\r
        </div>\r
\r
        <div class="setting-item">\r
          <div class="setting-label">\r
            <label>Clear Local Storage</label>\r
            <span class="setting-description">Remove all locally stored data (preferences, cache, etc.)</span>\r
          </div>\r
          <div class="setting-control">\r
            <button class="btn btn-danger" (click)="clearLocalStorage()">\r
              <i class="fas fa-trash"></i>\r
              Clear Storage\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Save Status & Actions -->\r
    <div class="settings-actions">\r
      <div class="save-status" *ngIf="saveSuccess">\r
        <i class="fas fa-check-circle"></i>\r
        <span>Preferences saved successfully!</span>\r
      </div>\r
      <div class="action-buttons">\r
        <button class="btn btn-secondary" (click)="resetToDefaults()">\r
          <i class="fas fa-undo"></i>\r
          Reset to Defaults\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
`, styles: ['/* src/app/components/settings/settings.scss */\n:root {\n  --primary-bg: #1a1a1a;\n  --secondary-bg: #2d2d2d;\n  --tertiary-bg: #3a3a3a;\n  --surface-bg: #2a2a2a;\n  --primary-accent: #4a9eff;\n  --secondary-accent: #7c3aed;\n  --success-color: #10b981;\n  --warning-color: #f59e0b;\n  --error-color: #ef4444;\n  --text-primary: #ffffff;\n  --text-secondary: #e5e5e5;\n  --text-muted: #a3a3a3;\n  --text-disabled: #6b7280;\n  --border-primary: #4a4a4a;\n  --border-secondary: #3a3a3a;\n  --border-accent: #5a5a5a;\n  --shadow-light: rgba(0, 0, 0, 0.1);\n  --shadow-medium: rgba(0, 0, 0, 0.2);\n  --shadow-heavy: rgba(0, 0, 0, 0.3);\n  --hover-bg: #3a3a3a;\n  --hover-accent: #5bb0ff;\n  --active-bg: #4a4a4a;\n  --active-accent: #3a8fdf;\n}\n.settings-container {\n  width: 100%;\n  max-width: 100%;\n  padding: 2rem 3rem;\n  color: var(--text-primary);\n  box-sizing: border-box;\n}\n.settings-header {\n  margin-bottom: 3rem;\n  padding-bottom: 1.5rem;\n  border-bottom: 2px solid var(--border-primary);\n}\n.settings-header .settings-title {\n  color: var(--text-primary);\n  font-size: 2.25rem;\n  font-weight: 700;\n  margin: 0 0 0.5rem 0;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.settings-header .settings-title i {\n  color: var(--primary-accent);\n  font-size: 1.75rem;\n}\n.settings-header .settings-subtitle {\n  color: var(--text-muted);\n  font-size: 1.125rem;\n  margin: 0;\n  font-weight: 400;\n}\n.settings-content {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 2rem;\n  align-items: start;\n}\n.settings-section {\n  background-color: var(--secondary-bg);\n  border: 1px solid var(--border-primary);\n  border-radius: 0.75rem;\n  box-shadow: 0 1px 2px 0 var(--shadow-light);\n  transition: all 0.3s ease-in-out;\n  box-shadow: 0 10px 15px -3px var(--shadow-medium), 0 4px 6px -2px var(--shadow-light);\n  border-radius: 0.75rem;\n  overflow: hidden;\n  height: fit-content;\n}\n.settings-section:hover {\n  box-shadow: 0 4px 6px -1px var(--shadow-light), 0 2px 4px -1px var(--shadow-light);\n  border-color: var(--border-accent);\n}\n.settings-section:hover {\n  box-shadow: 0 20px 25px -5px var(--shadow-medium), 0 10px 10px -5px var(--shadow-light);\n  transform: translateY(-2px);\n}\n.settings-section.full-width {\n  grid-column: 1/-1;\n}\n.settings-section .section-header {\n  padding: 1.5rem 2rem;\n  border-bottom: 1px solid var(--border-primary);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(74, 158, 255, 0.08) 0%,\n      rgba(124, 58, 237, 0.08) 100%);\n}\n.settings-section .section-header .section-title {\n  color: var(--text-primary);\n  font-size: 1.125rem;\n  font-weight: 600;\n  margin: 0 0 0.25rem 0;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.settings-section .section-header .section-title i {\n  color: var(--primary-accent);\n  font-size: 1rem;\n}\n.settings-section .section-header .section-description {\n  color: var(--text-muted);\n  font-size: 0.875rem;\n  margin: 0;\n}\n.settings-section .section-content {\n  padding: 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.setting-item {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  gap: 1.5rem;\n  align-items: start;\n  padding: 1rem 0;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n}\n.setting-item:last-child {\n  border-bottom: none;\n}\n.setting-item .setting-label {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  min-width: 200px;\n}\n.setting-item .setting-label label {\n  color: var(--text-primary);\n  font-size: 1rem;\n  font-weight: 600;\n}\n.setting-item .setting-label .setting-description {\n  color: var(--text-muted);\n  font-size: 0.875rem;\n  line-height: 1.4;\n}\n.setting-item .setting-control {\n  width: 100%;\n}\n.setting-item.icon-selection-item {\n  grid-template-columns: 1fr;\n  padding: 0;\n  border-bottom: none;\n}\n.setting-item.icon-selection-item .icon-selection-control {\n  width: 100%;\n}\n.theme-toggle-group {\n  display: flex;\n  gap: 1rem;\n}\n.theme-toggle-group .theme-btn {\n  flex: 1;\n  padding: 1rem 1.5rem;\n  background: var(--tertiary-bg);\n  border: 2px solid var(--border-primary);\n  border-radius: 0.5rem;\n  color: var(--text-secondary);\n  font-size: 1rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.theme-toggle-group .theme-btn i {\n  font-size: 1.125rem;\n}\n.theme-toggle-group .theme-btn:hover {\n  background: var(--hover-bg);\n  border-color: var(--primary-accent);\n  color: var(--text-primary);\n  transform: translateY(-2px);\n}\n.theme-toggle-group .theme-btn.active {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-accent) 0%,\n      var(--secondary-accent) 100%);\n  border-color: var(--primary-accent);\n  color: var(--text-primary);\n  box-shadow: 0 4px 12px rgba(74, 158, 255, 0.3);\n}\n.theme-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 1.5rem;\n}\n.theme-grid .theme-card {\n  background-color: var(--secondary-bg);\n  border: 1px solid var(--border-primary);\n  border-radius: 0.75rem;\n  box-shadow: 0 1px 2px 0 var(--shadow-light);\n  transition: all 0.3s ease-in-out;\n  box-shadow: 0 10px 15px -3px var(--shadow-medium), 0 4px 6px -2px var(--shadow-light);\n  border-radius: 0.75rem;\n  padding: 1rem;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  border: 2px solid transparent;\n  opacity: 1;\n}\n.theme-grid .theme-card:hover {\n  box-shadow: 0 4px 6px -1px var(--shadow-light), 0 2px 4px -1px var(--shadow-light);\n  border-color: var(--border-accent);\n}\n.theme-grid .theme-card:hover {\n  box-shadow: 0 20px 25px -5px var(--shadow-medium), 0 10px 10px -5px var(--shadow-light);\n  transform: translateY(-2px);\n}\n.theme-grid .theme-card:hover:not(.disabled) {\n  transform: translateY(-4px);\n  border-color: rgba(74, 158, 255, 0.3);\n}\n.theme-grid .theme-card.active {\n  border-color: var(--primary-accent);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(74, 158, 255, 0.1) 0%,\n      rgba(124, 58, 237, 0.1) 100%);\n}\n.theme-grid .theme-card.disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.theme-grid .theme-card .theme-preview {\n  width: 100%;\n  height: 80px;\n  border-radius: 0.5rem;\n  overflow: hidden;\n  margin-bottom: 1rem;\n}\n.theme-grid .theme-card .theme-preview .preview-box {\n  width: 100%;\n  height: 100%;\n  border-radius: 0.5rem;\n}\n.theme-grid .theme-card .theme-info {\n  text-align: center;\n}\n.theme-grid .theme-card .theme-info h4 {\n  color: var(--text-primary);\n  font-size: 1rem;\n  font-weight: 600;\n  margin: 0 0 0.25rem 0;\n}\n.theme-grid .theme-card .theme-info p {\n  color: var(--text-muted);\n  font-size: 0.75rem;\n  margin: 0 0 0.25rem 0;\n}\n.theme-grid .theme-card .theme-info .badge {\n  display: inline-block;\n  padding: 2px 0.25rem;\n  background: var(--warning-color);\n  color: var(--text-primary);\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.form-select {\n  width: 100%;\n  padding: 1rem;\n  background: var(--tertiary-bg);\n  border: 1px solid var(--border-primary);\n  border-radius: 0.5rem;\n  color: var(--text-primary);\n  font-size: 1rem;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n}\n.form-select:hover {\n  border-color: var(--primary-accent);\n}\n.form-select:focus {\n  outline: none;\n  border-color: var(--primary-accent);\n  box-shadow: 0 0 0 3px rgba(74, 158, 255, 0.2);\n}\n.icon-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\n  gap: 1rem;\n}\n.icon-grid .icon-option {\n  background-color: var(--secondary-bg);\n  border: 1px solid var(--border-primary);\n  border-radius: 0.75rem;\n  box-shadow: 0 1px 2px 0 var(--shadow-light);\n  transition: all 0.3s ease-in-out;\n  box-shadow: 0 10px 15px -3px var(--shadow-medium), 0 4px 6px -2px var(--shadow-light);\n  padding: 1rem;\n  border-radius: 0.5rem;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  border: 2px solid transparent;\n  text-align: center;\n}\n.icon-grid .icon-option:hover {\n  box-shadow: 0 4px 6px -1px var(--shadow-light), 0 2px 4px -1px var(--shadow-light);\n  border-color: var(--border-accent);\n}\n.icon-grid .icon-option:hover {\n  box-shadow: 0 20px 25px -5px var(--shadow-medium), 0 10px 10px -5px var(--shadow-light);\n  transform: translateY(-2px);\n}\n.icon-grid .icon-option:hover {\n  transform: translateY(-2px);\n  border-color: rgba(74, 158, 255, 0.3);\n}\n.icon-grid .icon-option.active {\n  border-color: var(--primary-accent);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(74, 158, 255, 0.1) 0%,\n      rgba(124, 58, 237, 0.1) 100%);\n}\n.icon-grid .icon-option.active .icon-preview-box {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-accent) 0%,\n      var(--secondary-accent) 100%);\n  box-shadow: 0 4px 12px rgba(74, 158, 255, 0.3);\n}\n.icon-grid .icon-option .icon-preview-box {\n  width: 48px;\n  height: 48px;\n  margin: 0 auto 0.5rem;\n  background: var(--tertiary-bg);\n  border-radius: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-primary);\n  font-size: 1.5rem;\n  transition: all 0.3s ease-in-out;\n}\n.icon-grid .icon-option .icon-name {\n  color: var(--text-primary);\n  font-size: 0.75rem;\n  font-weight: 600;\n  margin-bottom: 0.25rem;\n  text-transform: capitalize;\n}\n.icon-grid .icon-option .icon-description {\n  color: var(--text-muted);\n  font-size: 0.65rem;\n  line-height: 1.2;\n  display: none;\n}\n.toggle-switch {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  cursor: pointer;\n}\n.toggle-switch input[type=checkbox] {\n  display: none;\n}\n.toggle-switch input[type=checkbox] + .slider {\n  position: relative;\n  width: 50px;\n  height: 26px;\n  background: var(--tertiary-bg);\n  border-radius: 9999px;\n  transition: all 0.3s ease-in-out;\n  border: 2px solid var(--border-primary);\n}\n.toggle-switch input[type=checkbox] + .slider::before {\n  content: "";\n  position: absolute;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  background: var(--text-primary);\n  top: 2px;\n  left: 2px;\n  transition: all 0.3s ease-in-out;\n}\n.toggle-switch input[type=checkbox]:checked + .slider {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-accent) 0%,\n      var(--secondary-accent) 100%);\n  border-color: var(--primary-accent);\n}\n.toggle-switch input[type=checkbox]:checked + .slider::before {\n  transform: translateX(24px);\n}\n.toggle-switch .toggle-label {\n  color: var(--text-secondary);\n  font-size: 0.875rem;\n}\n.settings-actions {\n  grid-column: 1/-1;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 2rem;\n  border-top: 2px solid var(--border-primary);\n  margin-top: 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(74, 158, 255, 0.03) 0%,\n      rgba(124, 58, 237, 0.03) 100%);\n  border-radius: 0.75rem;\n}\n.settings-actions .save-status {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: var(--success-color);\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.settings-actions .save-status i {\n  font-size: 1rem;\n}\n.settings-actions .action-buttons {\n  display: flex;\n  gap: 1rem;\n}\n.settings-actions .action-buttons .btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5rem 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.5rem;\n  font-family:\n    "Inter",\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  font-size: 0.875rem;\n  font-weight: 500;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.15s ease-in-out;\n  outline: none;\n  padding: 1rem 1.5rem;\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.settings-actions .action-buttons .btn:focus {\n  box-shadow: 0 0 0 3px rgba(74, 158, 255, 0.3);\n}\n.settings-actions .action-buttons .btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.settings-actions .action-buttons .btn.btn-secondary {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5rem 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.5rem;\n  font-family:\n    "Inter",\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  font-size: 0.875rem;\n  font-weight: 500;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.15s ease-in-out;\n  outline: none;\n  background-color: transparent;\n  color: var(--text-secondary);\n  border-color: var(--border-primary);\n}\n.settings-actions .action-buttons .btn.btn-secondary:focus {\n  box-shadow: 0 0 0 3px rgba(74, 158, 255, 0.3);\n}\n.settings-actions .action-buttons .btn.btn-secondary:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.settings-actions .action-buttons .btn.btn-secondary:hover:not(:disabled) {\n  background-color: var(--hover-bg);\n  border-color: var(--border-accent);\n}\n.settings-actions .action-buttons .btn.btn-secondary:active:not(:disabled) {\n  background-color: var(--active-bg);\n}\n.settings-actions .action-buttons .btn.btn-danger {\n  background: rgba(239, 68, 68, 0.1);\n  border-color: rgba(239, 68, 68, 0.3);\n  color: var(--error-color);\n}\n.settings-actions .action-buttons .btn.btn-danger:hover {\n  background: rgba(239, 68, 68, 0.2);\n  border-color: rgba(239, 68, 68, 0.5);\n}\n.settings-actions .action-buttons .btn i {\n  font-size: 0.875rem;\n}\n@media (max-width: 1200px) {\n  .settings-content {\n    grid-template-columns: 1fr;\n  }\n  .setting-item {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n}\n@media (max-width: 768px) {\n  .settings-container {\n    padding: 1.5rem;\n  }\n  .settings-content {\n    grid-template-columns: 1fr;\n  }\n  .setting-item {\n    grid-template-columns: 1fr;\n  }\n  .theme-grid {\n    grid-template-columns: 1fr;\n  }\n  .icon-grid {\n    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));\n  }\n  .settings-actions {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .settings-actions .action-buttons {\n    width: 100%;\n  }\n  .settings-actions .action-buttons .btn {\n    flex: 1;\n  }\n}\n/*# sourceMappingURL=settings.css.map */\n'] }]
  }], () => [{ type: ThemeService }, { type: SettingsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent", filePath: "src/app/components/settings/settings.ts", lineNumber: 53 });
})();
export {
  SettingsComponent
};
//# sourceMappingURL=chunk-NCGHEHGP.js.map
