import {
  NavigationEnd,
  Router,
  RouterOutlet,
  bootstrapApplication,
  provideRouter
} from "./chunk-6CSC2D6H.js";
import {
  AuthService
} from "./chunk-HVWUQA7X.js";
import {
  ThemeService
} from "./chunk-HSSXEUBC.js";
import "./chunk-XMNU56NZ.js";
import {
  ToasterService
} from "./chunk-LTVL2GFZ.js";
import {
  ConfirmationService
} from "./chunk-Y44A5WDP.js";
import {
  AsyncPipe,
  BehaviorSubject,
  CommonModule,
  Component,
  DefaultValueAccessor,
  EventEmitter,
  FormsModule,
  HTTP_INTERCEPTORS,
  Injectable,
  Input,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  NumberValueAccessor,
  Output,
  __spreadProps,
  __spreadValues,
  filter,
  finalize,
  provideBrowserGlobalErrorListeners,
  provideHttpClient,
  provideZoneChangeDetection,
  setClassMetadata,
  withInterceptorsFromDi,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
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
  ɵɵpipe,
  ɵɵpipeBind1,
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

// src/app/guards/auth.guard.ts
var AuthGuard = class _AuthGuard {
  authService;
  router;
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate(route, state) {
    if (this.authService.isAuthenticated()) {
      return true;
    }
    this.router.navigate(["/login"], { queryParams: { returnUrl: state.url } });
    return false;
  }
  static \u0275fac = function AuthGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthGuard)(\u0275\u0275inject(AuthService), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthGuard, factory: _AuthGuard.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthGuard, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: AuthService }, { type: Router }], null);
})();

// src/app/guards/permission.guard.ts
var PermissionGuard = class _PermissionGuard {
  authService;
  router;
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate(route, state) {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(["/login"], { queryParams: { returnUrl: state.url } });
      return false;
    }
    const requiredPermission = route.data["permission"];
    if (!requiredPermission) {
      return true;
    }
    if (this.authService.hasPermission(requiredPermission)) {
      return true;
    }
    console.warn(`Access denied: User does not have permission '${requiredPermission}'`);
    this.router.navigate(["/tasks"]);
    return false;
  }
  static \u0275fac = function PermissionGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PermissionGuard)(\u0275\u0275inject(AuthService), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PermissionGuard, factory: _PermissionGuard.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PermissionGuard, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: AuthService }, { type: Router }], null);
})();

// src/app/app.routes.ts
var routes = [
  {
    path: "login",
    loadComponent: () => import("./chunk-63VRP5IQ.js").then((m) => m.LoginNewComponent)
  },
  {
    path: "",
    redirectTo: "/tasks",
    pathMatch: "full"
  },
  {
    path: "tasks",
    loadComponent: () => import("./chunk-MDOBLZ6J.js").then((m) => m.TasksComponent),
    canActivate: [AuthGuard, PermissionGuard],
    data: { permission: "tasks.view" }
  },
  {
    path: "budget",
    loadComponent: () => import("./chunk-XS4Y7MTH.js").then((m) => m.BudgetComponent),
    canActivate: [AuthGuard, PermissionGuard],
    data: { permission: "budget.view" }
  },
  {
    path: "notes",
    loadComponent: () => import("./chunk-B2T4G7QC.js").then((m) => m.NotesComponent),
    canActivate: [AuthGuard, PermissionGuard],
    data: { permission: "notes.view" }
  },
  {
    path: "settings",
    loadComponent: () => import("./chunk-NCGHEHGP.js").then((m) => m.SettingsComponent),
    canActivate: [AuthGuard, PermissionGuard],
    data: { permission: "settings.view" }
  },
  {
    path: "masters",
    children: [
      {
        path: "category",
        loadComponent: () => import("./chunk-BALXQSPK.js").then((m) => m.CategoryMasterComponent),
        canActivate: [AuthGuard, PermissionGuard],
        data: { permission: "categories.view" }
      },
      {
        path: "status",
        loadComponent: () => import("./chunk-3FIGB656.js").then((m) => m.StatusMasterComponent),
        canActivate: [AuthGuard, PermissionGuard],
        data: { permission: "statuses.view" }
      },
      {
        path: "priority",
        loadComponent: () => import("./chunk-RUVV3PUX.js").then((m) => m.PriorityMasterComponent),
        canActivate: [AuthGuard, PermissionGuard],
        data: { permission: "priorities.view" }
      },
      {
        path: "urls-docs",
        loadComponent: () => import("./chunk-2KXMCPVS.js").then((m) => m.UrlsMasterComponent),
        canActivate: [AuthGuard, PermissionGuard],
        data: { permission: "urls.view" }
      },
      {
        path: "credentials",
        loadComponent: () => import("./chunk-3N26GHZX.js").then((m) => m.CredentialsMasterComponent),
        canActivate: [AuthGuard, PermissionGuard],
        data: { permission: "credentials.view" }
      }
    ]
  },
  {
    path: "administration",
    children: [
      {
        path: "users",
        loadComponent: () => import("./chunk-OCXC6ZEN.js").then((m) => m.UserManagementComponent),
        canActivate: [AuthGuard, PermissionGuard],
        data: { permission: "users.view" }
      },
      {
        path: "roles",
        loadComponent: () => import("./chunk-OIX3HSZL.js").then((m) => m.RoleManagementComponent),
        canActivate: [AuthGuard, PermissionGuard],
        data: { permission: "roles.view" }
      },
      {
        path: "permissions",
        loadComponent: () => import("./chunk-3RZLP2KI.js").then((m) => m.PermissionManagementComponent),
        canActivate: [AuthGuard, PermissionGuard],
        data: { permission: "permissions.view" }
      }
    ]
  },
  {
    path: "**",
    redirectTo: "/tasks"
  }
];

// src/app/interceptors/auth.interceptor.ts
var AuthInterceptor = class _AuthInterceptor {
  authService;
  constructor(authService) {
    this.authService = authService;
  }
  intercept(request, next) {
    const token = this.authService.getToken();
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(request);
  }
  static \u0275fac = function AuthInterceptor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthInterceptor)(\u0275\u0275inject(AuthService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthInterceptor, factory: _AuthInterceptor.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthInterceptor, [{
    type: Injectable
  }], () => [{ type: AuthService }], null);
})();

// src/app/shared/services/loader.service.ts
var LoaderService = class _LoaderService {
  loadingSubject = new BehaviorSubject(false);
  loading$ = this.loadingSubject.asObservable();
  loadingCount = 0;
  /**
   * Show the loader
   */
  show() {
    this.loadingCount++;
    if (this.loadingCount === 1) {
      this.loadingSubject.next(true);
    }
  }
  /**
   * Hide the loader
   */
  hide() {
    this.loadingCount--;
    if (this.loadingCount <= 0) {
      this.loadingCount = 0;
      this.loadingSubject.next(false);
    }
  }
  /**
   * Reset the loader (force hide)
   */
  reset() {
    this.loadingCount = 0;
    this.loadingSubject.next(false);
  }
  /**
   * Check if loader is currently active
   */
  get isLoading() {
    return this.loadingSubject.value;
  }
  static \u0275fac = function LoaderService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoaderService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LoaderService, factory: _LoaderService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoaderService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/interceptors/loader.interceptor.ts
var LoaderInterceptor = class _LoaderInterceptor {
  loaderService;
  // URLs that should NOT trigger the loader (optional - currently empty to show loader on all requests)
  // Only add URLs here if you specifically don't want loader for certain endpoints
  // Examples: health checks, ping endpoints, polling requests, etc.
  excludedUrls = [
    // Example exclusions (currently none - loader shows on ALL requests):
    // '/api/health',
    // '/api/ping',
  ];
  constructor(loaderService) {
    this.loaderService = loaderService;
  }
  intercept(request, next) {
    const shouldExclude = this.excludedUrls.some((url) => request.url.includes(url));
    if (!shouldExclude) {
      this.loaderService.show();
    }
    return next.handle(request).pipe(finalize(() => {
      if (!shouldExclude) {
        this.loaderService.hide();
      }
    }));
  }
  static \u0275fac = function LoaderInterceptor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoaderInterceptor)(\u0275\u0275inject(LoaderService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LoaderInterceptor, factory: _LoaderInterceptor.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoaderInterceptor, [{
    type: Injectable
  }], () => [{ type: LoaderService }], null);
})();

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    }
  ]
};

// src/app/components/sidebar/sidebar.ts
function SidebarComponent_div_4_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2.label);
  }
}
function SidebarComponent_div_4_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2.badge);
  }
}
function SidebarComponent_div_4_i_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 15);
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("expanded", ctx_r2.isExpanded(item_r2.id));
  }
}
function SidebarComponent_div_4_div_6_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const child_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(child_r5.badge);
  }
}
function SidebarComponent_div_4_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275listener("click", function SidebarComponent_div_4_div_6_div_1_Template_div_click_0_listener($event) {
      const child_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onChildClick(child_r5, $event));
    });
    \u0275\u0275element(1, "i", 19);
    \u0275\u0275elementStart(2, "span", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, SidebarComponent_div_4_div_6_div_1_span_4_Template, 2, 1, "span", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const child_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r2.isActive(child_r5));
    \u0275\u0275advance();
    \u0275\u0275classMap("fa-" + child_r5.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(child_r5.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", child_r5.badge);
  }
}
function SidebarComponent_div_4_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275template(1, SidebarComponent_div_4_div_6_div_1_Template, 5, 6, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", item_r2.children)("ngForTrackBy", ctx_r2.trackByItemId);
  }
}
function SidebarComponent_div_4_div_7_div_3_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const child_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(child_r8.badge);
  }
}
function SidebarComponent_div_4_div_7_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275listener("click", function SidebarComponent_div_4_div_7_div_3_Template_div_click_0_listener($event) {
      const child_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onChildClick(child_r8, $event));
    });
    \u0275\u0275element(1, "i", 27);
    \u0275\u0275elementStart(2, "span", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, SidebarComponent_div_4_div_7_div_3_span_4_Template, 2, 1, "span", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const child_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r2.isActive(child_r8));
    \u0275\u0275advance();
    \u0275\u0275classMap("fa-" + child_r8.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(child_r8.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", child_r8.badge);
  }
}
function SidebarComponent_div_4_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275listener("mouseenter", function SidebarComponent_div_4_div_7_Template_div_mouseenter_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onPopoverMouseEnter());
    })("mouseleave", function SidebarComponent_div_4_div_7_Template_div_mouseleave_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onPopoverMouseLeave($event));
    });
    \u0275\u0275elementStart(1, "div", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, SidebarComponent_div_4_div_7_div_3_Template, 5, 6, "div", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("top", ctx_r2.hoveredItemPosition == null ? null : ctx_r2.hoveredItemPosition.top, "px")("left", ctx_r2.hoveredItemPosition == null ? null : ctx_r2.hoveredItemPosition.left, "px");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", item_r2.children)("ngForTrackBy", ctx_r2.trackByItemId);
  }
}
function SidebarComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275listener("mouseenter", function SidebarComponent_div_4_Template_div_mouseenter_0_listener($event) {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onMouseEnter(item_r2, $event));
    })("mouseleave", function SidebarComponent_div_4_Template_div_mouseleave_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onMouseLeave($event));
    });
    \u0275\u0275elementStart(1, "div", 6);
    \u0275\u0275listener("click", function SidebarComponent_div_4_Template_div_click_1_listener($event) {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onItemClick(item_r2, $event));
    });
    \u0275\u0275element(2, "i", 7);
    \u0275\u0275template(3, SidebarComponent_div_4_span_3_Template, 2, 1, "span", 8)(4, SidebarComponent_div_4_span_4_Template, 2, 1, "span", 9)(5, SidebarComponent_div_4_i_5_Template, 1, 2, "i", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, SidebarComponent_div_4_div_6_Template, 2, 2, "div", 11)(7, SidebarComponent_div_4_div_7_Template, 4, 7, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.isActive(item_r2))("has-children", item_r2.children && item_r2.children.length > 0)("expanded", ctx_r2.isExpanded(item_r2.id) && item_r2.children && item_r2.children.length > 0);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("fa-" + item_r2.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.collapsed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r2.badge && !ctx_r2.collapsed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r2.children && item_r2.children.length > 0 && !ctx_r2.collapsed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r2.children && item_r2.children.length > 0 && !ctx_r2.collapsed && ctx_r2.isExpanded(item_r2.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r2.children && item_r2.children.length > 0 && ctx_r2.collapsed && ctx_r2.isHovered(item_r2.id));
  }
}
var SidebarComponent = class _SidebarComponent {
  items = [];
  activeItem = "";
  collapsed = false;
  itemClick = new EventEmitter();
  toggleCollapse = new EventEmitter();
  expandedItems = /* @__PURE__ */ new Set();
  hoveredItemId = null;
  onItemClick(item, event) {
    if (item.children && item.children.length > 0) {
      event.stopPropagation();
      this.toggleExpand(item.id);
    } else {
      this.itemClick.emit(item);
    }
  }
  onChildClick(child, event) {
    event.stopPropagation();
    this.itemClick.emit(child);
  }
  toggleExpand(itemId) {
    if (this.expandedItems.has(itemId)) {
      this.expandedItems.delete(itemId);
    } else {
      this.expandedItems.add(itemId);
    }
  }
  isExpanded(itemId) {
    return this.expandedItems.has(itemId);
  }
  onToggleCollapse() {
    this.collapsed = !this.collapsed;
    this.toggleCollapse.emit(this.collapsed);
  }
  isActive(item) {
    return this.activeItem === item.id;
  }
  hoveredItemPosition = null;
  onMouseEnter(item, event) {
    if (this.collapsed && item.children && item.children.length > 0) {
      if (this.hideTimeout) {
        clearTimeout(this.hideTimeout);
        this.hideTimeout = null;
      }
      this.hoveredItemId = item.id;
      const target = event.currentTarget;
      if (target) {
        const rect = target.getBoundingClientRect();
        this.hoveredItemPosition = {
          top: rect.top - 30,
          // Move up by 8px to align with Masters menu item
          left: rect.left + rect.width - 5
          // Overlap slightly (-5px) to prevent gap
        };
      }
    }
  }
  hideTimeout = null;
  onMouseLeave(event) {
    const target = event.relatedTarget;
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
    }
    if (target && target.closest(".submenu-popover")) {
      return;
    }
    this.hideTimeout = setTimeout(() => {
      const currentTarget = document.elementFromPoint(event.clientX, event.clientY);
      if (!currentTarget || !currentTarget.closest(".nav-item") && !currentTarget.closest(".submenu-popover")) {
        this.hoveredItemId = null;
        this.hoveredItemPosition = null;
      }
    }, 100);
  }
  onPopoverMouseEnter() {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
  }
  onPopoverMouseLeave(event) {
    const target = event.relatedTarget;
    if (!target || !target.closest(".nav-item") && !target.closest(".submenu-popover")) {
      this.hideTimeout = setTimeout(() => {
        this.hoveredItemId = null;
        this.hoveredItemPosition = null;
      }, 100);
    }
  }
  isHovered(itemId) {
    return this.hoveredItemId === itemId;
  }
  // TrackBy function to preserve item identity and prevent unnecessary re-renders
  trackByItemId(index, item) {
    return item.id;
  }
  static \u0275fac = function SidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarComponent, selectors: [["app-sidebar"]], inputs: { items: "items", activeItem: "activeItem", collapsed: "collapsed" }, outputs: { itemClick: "itemClick", toggleCollapse: "toggleCollapse" }, decls: 5, vars: 4, consts: [[1, "sidebar"], [1, "sidebar-header"], [1, "sidebar-nav"], [1, "nav-section"], ["class", "nav-item", 3, "active", "has-children", "expanded", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "nav-item", 3, "mouseenter", "mouseleave"], [1, "nav-item-content", 3, "click"], [1, "nav-icon", "fas"], ["class", "nav-label", 4, "ngIf"], ["class", "nav-badge", 4, "ngIf"], ["class", "nav-chevron fas fa-chevron-down", 3, "expanded", 4, "ngIf"], ["class", "submenu", 4, "ngIf"], ["class", "submenu-popover", 3, "top", "left", "mouseenter", "mouseleave", 4, "ngIf"], [1, "nav-label"], [1, "nav-badge"], [1, "nav-chevron", "fas", "fa-chevron-down"], [1, "submenu"], ["class", "submenu-item", 3, "active", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "submenu-item", 3, "click"], [1, "submenu-icon", "fas"], [1, "submenu-label"], ["class", "submenu-badge", 4, "ngIf"], [1, "submenu-badge"], [1, "submenu-popover", 3, "mouseenter", "mouseleave"], [1, "popover-header"], ["class", "popover-item", 3, "active", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "popover-item", 3, "click"], [1, "popover-icon", "fas"], [1, "popover-label"], ["class", "popover-badge", 4, "ngIf"], [1, "popover-badge"]], template: function SidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "div", 1);
      \u0275\u0275elementStart(2, "nav", 2)(3, "div", 3);
      \u0275\u0275template(4, SidebarComponent_div_4_Template, 8, 13, "div", 4);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("collapsed", ctx.collapsed);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngForOf", ctx.items)("ngForTrackBy", ctx.trackByItemId);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf], styles: ['\n\n[_ngcontent-%COMP%]:root {\n  --primary-bg: #1a1a1a;\n  --secondary-bg: #2d2d2d;\n  --tertiary-bg: #3a3a3a;\n  --surface-bg: #2a2a2a;\n  --primary-accent: #4a9eff;\n  --secondary-accent: #7c3aed;\n  --success-color: #10b981;\n  --warning-color: #f59e0b;\n  --error-color: #ef4444;\n  --text-primary: #ffffff;\n  --text-secondary: #e5e5e5;\n  --text-muted: #a3a3a3;\n  --text-disabled: #6b7280;\n  --border-primary: #4a4a4a;\n  --border-secondary: #3a3a3a;\n  --border-accent: #5a5a5a;\n  --shadow-light: rgba(0, 0, 0, 0.1);\n  --shadow-medium: rgba(0, 0, 0, 0.2);\n  --shadow-heavy: rgba(0, 0, 0, 0.3);\n  --hover-bg: #3a3a3a;\n  --hover-accent: #5bb0ff;\n  --active-bg: #4a4a4a;\n  --active-accent: #3a8fdf;\n}\n.sidebar[_ngcontent-%COMP%] {\n  background-color: var(--primary-bg);\n  border-right: 1px solid var(--border-primary);\n  min-height: 100vh;\n  width: 280px;\n  transition: all 0.3s ease-in-out;\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  left: 0;\n  top: 66px;\n  height: calc(100vh - 66px);\n  min-height: calc(100vh - 66px);\n  z-index: 1030;\n  transition: width 0.3s ease-in-out;\n  margin-top: 0;\n  padding-top: 0;\n  border-top: none;\n  background-color: rgba(26, 26, 26, 0.95);\n  backdrop-filter: blur(15px);\n  -webkit-backdrop-filter: blur(15px);\n  box-shadow: inset 1px 0 0 rgba(74, 158, 255, 0.08);\n}\n.sidebar.collapsed[_ngcontent-%COMP%] {\n  width: 69px;\n  overflow: visible;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%], \n.sidebar.collapsed[_ngcontent-%COMP%]   .nav-badge[_ngcontent-%COMP%], \n.sidebar.collapsed[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%] {\n  display: none;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .submenu-popover[_ngcontent-%COMP%] {\n  display: block !important;\n  visibility: visible !important;\n  opacity: 1 !important;\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  display: none;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 1.5rem 0.5rem;\n  padding-top: 1.5rem;\n  overflow-y: auto;\n  overflow-x: visible;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.sidebar-nav[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.sidebar-nav[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 1rem;\n  color: var(--text-secondary);\n  text-decoration: none;\n  transition: all 0.15s ease-in-out;\n  border-radius: 0.5rem;\n  margin: 0.25rem 0.5rem;\n  position: relative;\n  margin: 0.25rem 0.5rem;\n  flex-direction: column;\n  align-items: stretch;\n  padding: 0;\n  overflow: visible;\n}\n.sidebar-nav[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover {\n  background-color: var(--hover-bg);\n  color: var(--text-primary);\n}\n.sidebar-nav[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .nav-item.active[_ngcontent-%COMP%] {\n  background-color: var(--primary-accent);\n  color: var(--text-primary);\n}\n.sidebar-nav[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .nav-item.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-accent) 0%,\n      rgba(74, 158, 255, 0.8) 100%);\n  color: var(--text-primary);\n  box-shadow: 0 2px 8px rgba(74, 158, 255, 0.3);\n}\n.sidebar-nav[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .nav-item.active[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  transform: scale(1.1);\n}\n.sidebar-nav[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .nav-item.active[_ngcontent-%COMP%]   .nav-item-content[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 3px;\n  height: 60%;\n  background: var(--text-primary);\n  border-radius: 0 2px 2px 0;\n}\n.sidebar-nav[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover:not(.active) {\n  background-color: rgba(74, 158, 255, 0.1);\n}\n.sidebar-nav[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover:not(.active)   .nav-icon[_ngcontent-%COMP%] {\n  color: var(--primary-accent);\n  transform: scale(1.05);\n}\n.sidebar-nav[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-item-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  cursor: pointer;\n  padding: 1rem;\n  flex-shrink: 0;\n  position: relative;\n}\n.sidebar-nav[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-item-content[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 20px;\n  text-align: center;\n  color: var(--text-secondary);\n  transition: all 0.3s ease-in-out;\n}\n.sidebar-nav[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-item-content[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-left: 1rem;\n  font-weight: 500;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.sidebar-nav[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-item-content[_ngcontent-%COMP%]   .nav-badge[_ngcontent-%COMP%] {\n  background-color: var(--primary-accent);\n  color: var(--text-primary);\n  font-size: 0.75rem;\n  padding: 0.25rem 0.5rem;\n  border-radius: 9999px;\n  font-weight: 600;\n  min-width: 20px;\n  text-align: center;\n}\n.sidebar-nav[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-item-content[_ngcontent-%COMP%]   .nav-chevron[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  margin-left: 0.5rem;\n  transition: transform 0.3s ease-in-out;\n}\n.sidebar-nav[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-item-content[_ngcontent-%COMP%]   .nav-chevron.expanded[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.sidebar-nav[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .nav-item.has-children[_ngcontent-%COMP%]   .nav-item-content[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.sidebar-nav[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-left: calc(1rem + 20px + 1rem);\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0;\n  padding-bottom: 0.25rem;\n  border-left: 2px solid var(--border-secondary);\n  animation: _ngcontent-%COMP%_slideDown 0.2s ease-out;\n  overflow: hidden;\n  max-height: 500px;\n  transition: max-height 0.2s ease-out;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  width: calc(100% - (1rem + 20px + 1rem));\n}\n.sidebar-nav[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   .submenu-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 1rem;\n  color: var(--text-secondary);\n  text-decoration: none;\n  transition: all 0.15s ease-in-out;\n  border-radius: 0.5rem;\n  margin: 0.25rem 0.5rem;\n  padding: 0.5rem 1rem;\n  margin: 0.25rem 0;\n  margin-left: 0;\n  margin-right: 0;\n  font-size: 0.875rem;\n  cursor: pointer;\n  width: 100%;\n  box-sizing: border-box;\n}\n.sidebar-nav[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   .submenu-item[_ngcontent-%COMP%]:hover {\n  background-color: var(--hover-bg);\n  color: var(--text-primary);\n}\n.sidebar-nav[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   .submenu-item.active[_ngcontent-%COMP%] {\n  background-color: var(--primary-accent);\n  color: var(--text-primary);\n}\n.sidebar-nav[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   .submenu-item.active[_ngcontent-%COMP%] {\n  background-color: var(--primary-accent);\n  color: var(--text-primary);\n}\n.sidebar-nav[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   .submenu-item[_ngcontent-%COMP%]:hover:not(.active) {\n  background-color: rgba(74, 158, 255, 0.1);\n}\n.sidebar-nav[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   .submenu-item[_ngcontent-%COMP%]   .submenu-icon[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  width: 16px;\n  text-align: center;\n  color: var(--text-muted);\n}\n.sidebar-nav[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   .submenu-item[_ngcontent-%COMP%]   .submenu-label[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.sidebar-nav[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   .submenu-item[_ngcontent-%COMP%]   .submenu-badge[_ngcontent-%COMP%] {\n  background-color: var(--secondary-accent);\n  color: var(--text-primary);\n  font-size: 0.75rem;\n  padding: 2px 0.25rem;\n  border-radius: 9999px;\n  font-weight: 600;\n}\n.sidebar-nav[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .submenu-popover[_ngcontent-%COMP%] {\n  position: fixed;\n  min-width: 200px;\n  max-width: 250px;\n  background-color: rgba(26, 26, 26, 0.98);\n  backdrop-filter: blur(15px);\n  -webkit-backdrop-filter: blur(15px);\n  border: 1px solid var(--border-primary);\n  border-radius: 0.5rem;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);\n  z-index: 9999 !important;\n  padding: 0.5rem 0;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease-out;\n  pointer-events: auto;\n}\n.sidebar-nav[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .submenu-popover[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: -15px;\n  top: 0;\n  width: 15px;\n  height: 100%;\n  background: transparent;\n}\n.sidebar-nav[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .submenu-popover[_ngcontent-%COMP%]   .popover-header[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  font-weight: 600;\n  font-size: 0.875rem;\n  color: var(--text-secondary);\n  border-bottom: 1px solid var(--border-secondary);\n  margin-bottom: 0.25rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.sidebar-nav[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .submenu-popover[_ngcontent-%COMP%]   .popover-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.5rem 1rem;\n  color: var(--text-secondary);\n  cursor: pointer;\n  transition: all 0.15s ease-in-out;\n  font-size: 0.875rem;\n}\n.sidebar-nav[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .submenu-popover[_ngcontent-%COMP%]   .popover-item[_ngcontent-%COMP%]:hover {\n  background-color: rgba(74, 158, 255, 0.1);\n  color: var(--text-primary);\n}\n.sidebar-nav[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .submenu-popover[_ngcontent-%COMP%]   .popover-item.active[_ngcontent-%COMP%] {\n  background-color: var(--primary-accent);\n  color: var(--text-primary);\n}\n.sidebar-nav[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .submenu-popover[_ngcontent-%COMP%]   .popover-item[_ngcontent-%COMP%]   .popover-icon[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  width: 18px;\n  text-align: center;\n  color: var(--text-muted);\n  margin-right: 0.5rem;\n}\n.sidebar-nav[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .submenu-popover[_ngcontent-%COMP%]   .popover-item[_ngcontent-%COMP%]   .popover-label[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.sidebar-nav[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .submenu-popover[_ngcontent-%COMP%]   .popover-item[_ngcontent-%COMP%]   .popover-badge[_ngcontent-%COMP%] {\n  background-color: var(--secondary-accent);\n  color: var(--text-primary);\n  font-size: 0.75rem;\n  padding: 2px 0.25rem;\n  border-radius: 9999px;\n  font-weight: 600;\n  margin-left: 0.5rem;\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    max-height: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    max-height: 500px;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateX(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@media (max-width: 768px) {\n  .sidebar[_ngcontent-%COMP%] {\n    width: 100%;\n    top: 62px;\n    height: calc(100vh - 62px);\n    min-height: calc(100vh - 62px);\n    transform: translateX(-100%);\n    transition: transform 0.3s ease-in-out;\n  }\n  .sidebar.collapsed[_ngcontent-%COMP%] {\n    transform: translateX(0);\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=sidebar.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarComponent, [{
    type: Component,
    args: [{ selector: "app-sidebar", standalone: true, imports: [CommonModule], template: `<div class="sidebar" [class.collapsed]="collapsed">\r
  <!-- Header (Empty - removed OmniPlanner branding) -->\r
  <div class="sidebar-header">\r
  </div>\r
\r
  <!-- Navigation Items -->\r
  <nav class="sidebar-nav">\r
    <div class="nav-section">\r
      <div class="nav-item" \r
           *ngFor="let item of items; trackBy: trackByItemId" \r
           [class.active]="isActive(item)"\r
           [class.has-children]="item.children && item.children.length > 0"\r
           [class.expanded]="isExpanded(item.id) && item.children && item.children.length > 0"\r
           (mouseenter)="onMouseEnter(item, $event)"\r
           (mouseleave)="onMouseLeave($event)">\r
        <div class="nav-item-content" (click)="onItemClick(item, $event)">\r
          <i class="nav-icon fas" [class]="'fa-' + item.icon"></i>\r
          <span class="nav-label" *ngIf="!collapsed">{{ item.label }}</span>\r
          <span class="nav-badge" *ngIf="item.badge && !collapsed">{{ item.badge }}</span>\r
          <i class="nav-chevron fas fa-chevron-down" \r
             *ngIf="item.children && item.children.length > 0 && !collapsed"\r
             [class.expanded]="isExpanded(item.id)"></i>\r
        </div>\r
        \r
        <!-- Submenu (expanded sidebar) -->\r
        <div class="submenu" *ngIf="item.children && item.children.length > 0 && !collapsed && isExpanded(item.id)">\r
          <div class="submenu-item" \r
               *ngFor="let child of item.children; trackBy: trackByItemId"\r
               [class.active]="isActive(child)"\r
               (click)="onChildClick(child, $event)">\r
            <i class="submenu-icon fas" [class]="'fa-' + child.icon"></i>\r
            <span class="submenu-label">{{ child.label }}</span>\r
            <span class="submenu-badge" *ngIf="child.badge">{{ child.badge }}</span>\r
          </div>\r
        </div>\r
\r
        <!-- Submenu Popover (collapsed sidebar) -->\r
        <div class="submenu-popover" \r
             *ngIf="item.children && item.children.length > 0 && collapsed && isHovered(item.id)"\r
             [style.top.px]="hoveredItemPosition?.top"\r
             [style.left.px]="hoveredItemPosition?.left"\r
             (mouseenter)="onPopoverMouseEnter()"\r
             (mouseleave)="onPopoverMouseLeave($event)">\r
          <div class="popover-header">{{ item.label }}</div>\r
          <div class="popover-item" \r
               *ngFor="let child of item.children; trackBy: trackByItemId"\r
               [class.active]="isActive(child)"\r
               (click)="onChildClick(child, $event)">\r
            <i class="popover-icon fas" [class]="'fa-' + child.icon"></i>\r
            <span class="popover-label">{{ child.label }}</span>\r
            <span class="popover-badge" *ngIf="child.badge">{{ child.badge }}</span>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </nav>\r
</div>\r
`, styles: ['/* src/app/components/sidebar/sidebar.scss */\n:root {\n  --primary-bg: #1a1a1a;\n  --secondary-bg: #2d2d2d;\n  --tertiary-bg: #3a3a3a;\n  --surface-bg: #2a2a2a;\n  --primary-accent: #4a9eff;\n  --secondary-accent: #7c3aed;\n  --success-color: #10b981;\n  --warning-color: #f59e0b;\n  --error-color: #ef4444;\n  --text-primary: #ffffff;\n  --text-secondary: #e5e5e5;\n  --text-muted: #a3a3a3;\n  --text-disabled: #6b7280;\n  --border-primary: #4a4a4a;\n  --border-secondary: #3a3a3a;\n  --border-accent: #5a5a5a;\n  --shadow-light: rgba(0, 0, 0, 0.1);\n  --shadow-medium: rgba(0, 0, 0, 0.2);\n  --shadow-heavy: rgba(0, 0, 0, 0.3);\n  --hover-bg: #3a3a3a;\n  --hover-accent: #5bb0ff;\n  --active-bg: #4a4a4a;\n  --active-accent: #3a8fdf;\n}\n.sidebar {\n  background-color: var(--primary-bg);\n  border-right: 1px solid var(--border-primary);\n  min-height: 100vh;\n  width: 280px;\n  transition: all 0.3s ease-in-out;\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  left: 0;\n  top: 66px;\n  height: calc(100vh - 66px);\n  min-height: calc(100vh - 66px);\n  z-index: 1030;\n  transition: width 0.3s ease-in-out;\n  margin-top: 0;\n  padding-top: 0;\n  border-top: none;\n  background-color: rgba(26, 26, 26, 0.95);\n  backdrop-filter: blur(15px);\n  -webkit-backdrop-filter: blur(15px);\n  box-shadow: inset 1px 0 0 rgba(74, 158, 255, 0.08);\n}\n.sidebar.collapsed {\n  width: 69px;\n  overflow: visible;\n}\n.sidebar.collapsed .nav-label,\n.sidebar.collapsed .nav-badge,\n.sidebar.collapsed .submenu {\n  display: none;\n}\n.sidebar.collapsed .submenu-popover {\n  display: block !important;\n  visibility: visible !important;\n  opacity: 1 !important;\n}\n.sidebar-header {\n  display: none;\n}\n.sidebar-nav {\n  flex: 1;\n  padding: 1.5rem 0.5rem;\n  padding-top: 1.5rem;\n  overflow-y: auto;\n  overflow-x: visible;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.sidebar-nav::-webkit-scrollbar {\n  display: none;\n}\n.sidebar-nav .nav-section .nav-item {\n  display: flex;\n  align-items: center;\n  padding: 1rem;\n  color: var(--text-secondary);\n  text-decoration: none;\n  transition: all 0.15s ease-in-out;\n  border-radius: 0.5rem;\n  margin: 0.25rem 0.5rem;\n  position: relative;\n  margin: 0.25rem 0.5rem;\n  flex-direction: column;\n  align-items: stretch;\n  padding: 0;\n  overflow: visible;\n}\n.sidebar-nav .nav-section .nav-item:hover {\n  background-color: var(--hover-bg);\n  color: var(--text-primary);\n}\n.sidebar-nav .nav-section .nav-item.active {\n  background-color: var(--primary-accent);\n  color: var(--text-primary);\n}\n.sidebar-nav .nav-section .nav-item.active {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-accent) 0%,\n      rgba(74, 158, 255, 0.8) 100%);\n  color: var(--text-primary);\n  box-shadow: 0 2px 8px rgba(74, 158, 255, 0.3);\n}\n.sidebar-nav .nav-section .nav-item.active .nav-icon {\n  color: var(--text-primary);\n  transform: scale(1.1);\n}\n.sidebar-nav .nav-section .nav-item.active .nav-item-content::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 3px;\n  height: 60%;\n  background: var(--text-primary);\n  border-radius: 0 2px 2px 0;\n}\n.sidebar-nav .nav-section .nav-item:hover:not(.active) {\n  background-color: rgba(74, 158, 255, 0.1);\n}\n.sidebar-nav .nav-section .nav-item:hover:not(.active) .nav-icon {\n  color: var(--primary-accent);\n  transform: scale(1.05);\n}\n.sidebar-nav .nav-section .nav-item .nav-item-content {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  cursor: pointer;\n  padding: 1rem;\n  flex-shrink: 0;\n  position: relative;\n}\n.sidebar-nav .nav-section .nav-item .nav-item-content .nav-icon {\n  font-size: 1rem;\n  width: 20px;\n  text-align: center;\n  color: var(--text-secondary);\n  transition: all 0.3s ease-in-out;\n}\n.sidebar-nav .nav-section .nav-item .nav-item-content .nav-label {\n  flex: 1;\n  margin-left: 1rem;\n  font-weight: 500;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.sidebar-nav .nav-section .nav-item .nav-item-content .nav-badge {\n  background-color: var(--primary-accent);\n  color: var(--text-primary);\n  font-size: 0.75rem;\n  padding: 0.25rem 0.5rem;\n  border-radius: 9999px;\n  font-weight: 600;\n  min-width: 20px;\n  text-align: center;\n}\n.sidebar-nav .nav-section .nav-item .nav-item-content .nav-chevron {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  margin-left: 0.5rem;\n  transition: transform 0.3s ease-in-out;\n}\n.sidebar-nav .nav-section .nav-item .nav-item-content .nav-chevron.expanded {\n  transform: rotate(180deg);\n}\n.sidebar-nav .nav-section .nav-item.has-children .nav-item-content {\n  cursor: pointer;\n}\n.sidebar-nav .nav-section .nav-item .submenu {\n  margin-top: 0;\n  margin-left: calc(1rem + 20px + 1rem);\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0;\n  padding-bottom: 0.25rem;\n  border-left: 2px solid var(--border-secondary);\n  animation: slideDown 0.2s ease-out;\n  overflow: hidden;\n  max-height: 500px;\n  transition: max-height 0.2s ease-out;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  width: calc(100% - (1rem + 20px + 1rem));\n}\n.sidebar-nav .nav-section .nav-item .submenu .submenu-item {\n  display: flex;\n  align-items: center;\n  padding: 1rem;\n  color: var(--text-secondary);\n  text-decoration: none;\n  transition: all 0.15s ease-in-out;\n  border-radius: 0.5rem;\n  margin: 0.25rem 0.5rem;\n  padding: 0.5rem 1rem;\n  margin: 0.25rem 0;\n  margin-left: 0;\n  margin-right: 0;\n  font-size: 0.875rem;\n  cursor: pointer;\n  width: 100%;\n  box-sizing: border-box;\n}\n.sidebar-nav .nav-section .nav-item .submenu .submenu-item:hover {\n  background-color: var(--hover-bg);\n  color: var(--text-primary);\n}\n.sidebar-nav .nav-section .nav-item .submenu .submenu-item.active {\n  background-color: var(--primary-accent);\n  color: var(--text-primary);\n}\n.sidebar-nav .nav-section .nav-item .submenu .submenu-item.active {\n  background-color: var(--primary-accent);\n  color: var(--text-primary);\n}\n.sidebar-nav .nav-section .nav-item .submenu .submenu-item:hover:not(.active) {\n  background-color: rgba(74, 158, 255, 0.1);\n}\n.sidebar-nav .nav-section .nav-item .submenu .submenu-item .submenu-icon {\n  font-size: 0.875rem;\n  width: 16px;\n  text-align: center;\n  color: var(--text-muted);\n}\n.sidebar-nav .nav-section .nav-item .submenu .submenu-item .submenu-label {\n  margin-left: 0.5rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.sidebar-nav .nav-section .nav-item .submenu .submenu-item .submenu-badge {\n  background-color: var(--secondary-accent);\n  color: var(--text-primary);\n  font-size: 0.75rem;\n  padding: 2px 0.25rem;\n  border-radius: 9999px;\n  font-weight: 600;\n}\n.sidebar-nav .nav-section .submenu-popover {\n  position: fixed;\n  min-width: 200px;\n  max-width: 250px;\n  background-color: rgba(26, 26, 26, 0.98);\n  backdrop-filter: blur(15px);\n  -webkit-backdrop-filter: blur(15px);\n  border: 1px solid var(--border-primary);\n  border-radius: 0.5rem;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);\n  z-index: 9999 !important;\n  padding: 0.5rem 0;\n  animation: fadeIn 0.2s ease-out;\n  pointer-events: auto;\n}\n.sidebar-nav .nav-section .submenu-popover::before {\n  content: "";\n  position: absolute;\n  left: -15px;\n  top: 0;\n  width: 15px;\n  height: 100%;\n  background: transparent;\n}\n.sidebar-nav .nav-section .submenu-popover .popover-header {\n  padding: 0.5rem 1rem;\n  font-weight: 600;\n  font-size: 0.875rem;\n  color: var(--text-secondary);\n  border-bottom: 1px solid var(--border-secondary);\n  margin-bottom: 0.25rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.sidebar-nav .nav-section .submenu-popover .popover-item {\n  display: flex;\n  align-items: center;\n  padding: 0.5rem 1rem;\n  color: var(--text-secondary);\n  cursor: pointer;\n  transition: all 0.15s ease-in-out;\n  font-size: 0.875rem;\n}\n.sidebar-nav .nav-section .submenu-popover .popover-item:hover {\n  background-color: rgba(74, 158, 255, 0.1);\n  color: var(--text-primary);\n}\n.sidebar-nav .nav-section .submenu-popover .popover-item.active {\n  background-color: var(--primary-accent);\n  color: var(--text-primary);\n}\n.sidebar-nav .nav-section .submenu-popover .popover-item .popover-icon {\n  font-size: 0.875rem;\n  width: 18px;\n  text-align: center;\n  color: var(--text-muted);\n  margin-right: 0.5rem;\n}\n.sidebar-nav .nav-section .submenu-popover .popover-item .popover-label {\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.sidebar-nav .nav-section .submenu-popover .popover-item .popover-badge {\n  background-color: var(--secondary-accent);\n  color: var(--text-primary);\n  font-size: 0.75rem;\n  padding: 2px 0.25rem;\n  border-radius: 9999px;\n  font-weight: 600;\n  margin-left: 0.5rem;\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    max-height: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    max-height: 500px;\n    transform: translateY(0);\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateX(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@media (max-width: 768px) {\n  .sidebar {\n    width: 100%;\n    top: 62px;\n    height: calc(100vh - 62px);\n    min-height: calc(100vh - 62px);\n    transform: translateX(-100%);\n    transition: transform 0.3s ease-in-out;\n  }\n  .sidebar.collapsed {\n    transform: translateX(0);\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=sidebar.css.map */\n'] }]
  }], null, { items: [{
    type: Input
  }], activeItem: [{
    type: Input
  }], collapsed: [{
    type: Input
  }], itemClick: [{
    type: Output
  }], toggleCollapse: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarComponent, { className: "SidebarComponent", filePath: "src/app/components/sidebar/sidebar.ts", lineNumber: 21 });
})();

// src/app/components/timer-stopwatch/timer-stopwatch.service.ts
var TimerStopwatchService = class _TimerStopwatchService {
  mode = "stopwatch";
  isRunning = false;
  time = 0;
  // milliseconds
  timerHours = 0;
  timerMinutes = 0;
  timerSeconds = 0;
  intervalId = null;
  startTimestamp = 0;
  // When timer was started (milliseconds since epoch)
  startTime = 0;
  // Initial time value when timer was started
  // Settings
  settings = {
    soundEnabled: true,
    notificationEnabled: true,
    selectedTone: "alarm",
    customMessage: ""
  };
  timeSubject = new BehaviorSubject(0);
  runningSubject = new BehaviorSubject(false);
  visibilityHandler;
  constructor() {
    this.loadSettings();
    this.loadState();
    this.setupVisibilityHandling();
    setInterval(() => {
      if (this.isRunning) {
        this.saveState();
      }
    }, 5e3);
  }
  setupVisibilityHandling() {
    this.visibilityHandler = () => {
      if (document.hidden && this.isRunning) {
      } else if (!document.hidden && this.isRunning) {
        this.syncTime();
      }
    };
    document.addEventListener("visibilitychange", this.visibilityHandler);
    window.addEventListener("blur", () => {
      if (this.isRunning) {
        this.saveState();
      }
    });
    window.addEventListener("focus", () => {
      if (this.isRunning) {
        this.syncTime();
      }
    });
  }
  syncTime() {
    if (!this.isRunning || this.startTimestamp === 0)
      return;
    const now = Date.now();
    const elapsed = now - this.startTimestamp;
    if (this.mode === "stopwatch") {
      this.time = this.startTime + elapsed;
    } else {
      const remaining = this.startTime - elapsed;
      if (remaining <= 0) {
        this.time = 0;
        this.onTimerComplete();
        return;
      }
      this.time = remaining;
    }
    this.timeSubject.next(this.time);
    this.saveState();
  }
  toggleMode() {
    if (this.isRunning) {
      this.stop();
    }
    this.mode = this.mode === "timer" ? "stopwatch" : "timer";
    this.reset();
    this.saveState();
  }
  start() {
    if (this.mode === "timer") {
      const totalTime = this.getTimerTotalTime();
      if (totalTime === 0) {
        console.warn("Cannot start timer with 0 time");
        return;
      }
      this.time = totalTime;
    }
    if (this.mode === "timer" && this.time <= 0) {
      return;
    }
    this.isRunning = true;
    this.runningSubject.next(true);
    this.startTimestamp = Date.now();
    this.startTime = this.time;
    this.saveState();
    const updateTimer = () => {
      if (!this.isRunning) {
        return;
      }
      const now = Date.now();
      const elapsed = now - this.startTimestamp;
      if (this.mode === "stopwatch") {
        this.time = this.startTime + elapsed;
        this.timeSubject.next(this.time);
        this.intervalId = setTimeout(updateTimer, 50);
      } else {
        const remaining = this.startTime - elapsed;
        if (remaining <= 0) {
          this.time = 0;
          this.timeSubject.next(0);
          this.onTimerComplete();
          return;
        } else {
          this.time = remaining;
          this.timeSubject.next(this.time);
          this.intervalId = setTimeout(updateTimer, 50);
        }
      }
    };
    updateTimer();
  }
  pause() {
    if (!this.isRunning)
      return;
    this.syncTime();
    this.isRunning = false;
    this.runningSubject.next(false);
    this.clearInterval();
    this.startTimestamp = 0;
    this.startTime = 0;
    this.saveState();
  }
  stop() {
    if (!this.isRunning)
      return;
    this.syncTime();
    this.isRunning = false;
    this.runningSubject.next(false);
    this.clearInterval();
    this.startTimestamp = 0;
    this.startTime = 0;
    this.saveState();
  }
  reset() {
    this.isRunning = false;
    this.runningSubject.next(false);
    this.clearInterval();
    this.startTimestamp = 0;
    this.startTime = 0;
    if (this.mode === "stopwatch") {
      this.time = 0;
    } else {
      const totalTime = this.getTimerTotalTime();
      if (totalTime === 0) {
        this.time = 0;
        this.timerHours = 0;
        this.timerMinutes = 0;
        this.timerSeconds = 0;
      } else {
        this.time = totalTime;
      }
    }
    this.timeSubject.next(this.time);
    this.saveState();
  }
  setTimer() {
    if (this.isRunning) {
      this.pause();
    }
    const totalTime = this.getTimerTotalTime();
    this.time = totalTime;
    this.timeSubject.next(this.time);
    this.saveState();
  }
  getTimerTotalTime() {
    const hours = Math.max(0, Math.floor(Number(this.timerHours) || 0));
    const minutes = Math.max(0, Math.min(59, Math.floor(Number(this.timerMinutes) || 0)));
    const seconds = Math.max(0, Math.min(59, Math.floor(Number(this.timerSeconds) || 0)));
    return (hours * 3600 + minutes * 60 + seconds) * 1e3;
  }
  formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1e3);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor(totalSeconds % 3600 / 60);
    const seconds = totalSeconds % 60;
    const centiseconds = Math.floor(ms % 1e3 / 10);
    if (hours > 0) {
      return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}.${this.pad(centiseconds, 2)}`;
    }
    return `${this.pad(minutes)}:${this.pad(seconds)}.${this.pad(centiseconds, 2)}`;
  }
  pad(num, length = 2) {
    return num.toString().padStart(length, "0");
  }
  onTimerComplete() {
    this.isRunning = false;
    this.runningSubject.next(false);
    this.clearInterval();
    this.startTimestamp = 0;
    this.startTime = 0;
    this.time = 0;
    this.timeSubject.next(0);
    this.playNotificationSound();
    if (this.settings.notificationEnabled) {
      this.showDesktopNotification();
    }
    this.saveState();
  }
  playNotificationSound() {
    if (!this.settings.soundEnabled) {
      console.log("Sound disabled");
      return;
    }
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      const audioContext = new AudioContextClass();
      const playSound = () => {
        this.playToneSequence(audioContext);
      };
      if (audioContext.state === "suspended") {
        audioContext.resume().then(playSound).catch(() => {
          console.warn("Failed to resume audio context, trying anyway");
          playSound();
        });
      } else {
        playSound();
      }
    } catch (error) {
      console.error("Error playing notification sound:", error);
    }
  }
  playToneSequence(audioContext) {
    const tone = this.getToneForType(this.settings.selectedTone);
    let playCount = 0;
    const maxPlays = 5;
    const playTone = () => {
      if (playCount >= maxPlays) {
        setTimeout(() => {
          try {
            audioContext.close();
          } catch (e) {
          }
        }, tone.duration * 1e3 + 500);
        return;
      }
      playCount++;
      try {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        oscillator.frequency.value = tone.frequency;
        oscillator.type = tone.type;
        gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + tone.duration);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + tone.duration);
        if (playCount < maxPlays) {
          setTimeout(playTone, tone.duration * 1e3 + 200);
        } else {
          setTimeout(() => {
            try {
              audioContext.close();
            } catch (e) {
            }
          }, tone.duration * 1e3 + 500);
        }
      } catch (error) {
        console.error("Error in playTone:", error);
      }
    };
    playTone();
  }
  getToneForType(toneType) {
    switch (toneType) {
      case "beep":
        return { frequency: 800, duration: 0.3, type: "sine" };
      case "chime":
        return { frequency: 523.25, duration: 0.5, type: "sine" };
      case "alarm":
        return { frequency: 1e3, duration: 0.4, type: "square" };
      case "notification":
        return { frequency: 659.25, duration: 0.3, type: "sine" };
      case "bell":
        return { frequency: 783.99, duration: 0.6, type: "sine" };
      default:
        return { frequency: 800, duration: 0.3, type: "sine" };
    }
  }
  showDesktopNotification() {
    if (!("Notification" in window)) {
      console.log("Notifications not supported");
      return;
    }
    const showNotif = () => {
      this.createNotification();
    };
    if (Notification.permission === "granted") {
      showNotif();
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          showNotif();
        } else {
          console.log("Notification permission denied");
        }
      }).catch((error) => {
        console.error("Error requesting notification permission:", error);
      });
    } else {
      console.log("Notification permission denied");
    }
  }
  createNotification() {
    try {
      const message = this.settings.customMessage.trim() || "Timer completed!";
      const title = "OmniPlanner Timer";
      const notificationOptions = {
        body: message,
        icon: "/assets/icon-192x192.png",
        badge: "/assets/icon-192x192.png",
        tag: "omniplanner-timer",
        requireInteraction: true,
        silent: false
      };
      if ("vibrate" in navigator) {
        notificationOptions.vibrate = [200, 100, 200];
      }
      const notification = new Notification(title, notificationOptions);
      setTimeout(() => {
        try {
          notification.close();
        } catch (e) {
        }
      }, 15e3);
      notification.onclick = () => {
        window.focus();
        notification.close();
      };
    } catch (error) {
      console.error("Error creating notification:", error);
    }
  }
  updateSettings(settings) {
    this.settings = __spreadValues(__spreadValues({}, this.settings), settings);
    this.saveSettings();
  }
  requestNotificationPermission() {
    if ("Notification" in window && Notification.permission === "default") {
      Notification.requestPermission();
    }
  }
  saveState() {
    try {
      const state = {
        mode: this.mode,
        time: this.time,
        isRunning: this.isRunning,
        timerHours: this.timerHours,
        timerMinutes: this.timerMinutes,
        timerSeconds: this.timerSeconds,
        startTimestamp: this.startTimestamp,
        // Save timestamp for recovery
        startTime: this.startTime
      };
      localStorage.setItem("timer-stopwatch-state", JSON.stringify(state));
    } catch (error) {
      console.warn("Failed to save timer state:", error);
    }
  }
  loadState() {
    try {
      const saved = localStorage.getItem("timer-stopwatch-state");
      if (saved) {
        const state = JSON.parse(saved);
        this.mode = state.mode || "stopwatch";
        this.timerHours = state.timerHours || 0;
        this.timerMinutes = state.timerMinutes || 0;
        this.timerSeconds = state.timerSeconds || 0;
        if (state.isRunning && state.startTimestamp && state.startTime !== void 0) {
          const now = Date.now();
          const elapsed = now - state.startTimestamp;
          if (this.mode === "stopwatch") {
            this.time = state.startTime + elapsed;
          } else {
            const remaining = state.startTime - elapsed;
            this.time = remaining > 0 ? remaining : 0;
          }
          if (this.mode === "stopwatch" || this.mode === "timer" && this.time > 0) {
          } else if (this.mode === "timer" && this.time <= 0) {
            this.time = 0;
            this.onTimerComplete();
          }
        } else {
          this.time = state.time || 0;
        }
        this.timeSubject.next(this.time);
      }
    } catch (error) {
      console.warn("Failed to load timer state:", error);
    }
  }
  saveSettings() {
    try {
      localStorage.setItem("timer-stopwatch-settings", JSON.stringify(this.settings));
    } catch (error) {
      console.warn("Failed to save timer settings:", error);
    }
  }
  loadSettings() {
    try {
      const saved = localStorage.getItem("timer-stopwatch-settings");
      if (saved) {
        this.settings = __spreadValues(__spreadValues({}, this.settings), JSON.parse(saved));
      }
    } catch (error) {
      console.warn("Failed to load timer settings:", error);
    }
  }
  clearInterval() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
  getTime$() {
    return this.timeSubject.asObservable();
  }
  getRunning$() {
    return this.runningSubject.asObservable();
  }
  static \u0275fac = function TimerStopwatchService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TimerStopwatchService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TimerStopwatchService, factory: _TimerStopwatchService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimerStopwatchService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/components/timer-stopwatch/timer-stopwatch-header.ts
function TimerStopwatchHeaderComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275listener("click", function TimerStopwatchHeaderComponent_div_1_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleExpand());
    });
    \u0275\u0275elementStart(1, "div", 4);
    \u0275\u0275element(2, "i", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 6)(4, "div", 7);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 8);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 9);
    \u0275\u0275listener("click", function TimerStopwatchHeaderComponent_div_1_Template_button_click_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleTimer($event));
    });
    \u0275\u0275element(9, "i", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.timerService.isRunning);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.timerService.mode === "timer" ? "fa-clock" : "fa-stopwatch");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.timerService.formatTime(ctx_r1.timerService.time));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.timerService.mode === "timer" ? "Timer" : "Stopwatch");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.timerService.isRunning ? "fa-pause" : "fa-play");
  }
}
function TimerStopwatchHeaderComponent_div_2_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28)(2, "label");
    \u0275\u0275text(3, "Hours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function TimerStopwatchHeaderComponent_div_2_div_10_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.timerService.timerHours, $event) || (ctx_r1.timerService.timerHours = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function TimerStopwatchHeaderComponent_div_2_div_10_Template_input_change_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTimerInputChange());
    })("input", function TimerStopwatchHeaderComponent_div_2_div_10_Template_input_input_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTimerInputChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 28)(6, "label");
    \u0275\u0275text(7, "Minutes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function TimerStopwatchHeaderComponent_div_2_div_10_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.timerService.timerMinutes, $event) || (ctx_r1.timerService.timerMinutes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function TimerStopwatchHeaderComponent_div_2_div_10_Template_input_change_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTimerInputChange());
    })("input", function TimerStopwatchHeaderComponent_div_2_div_10_Template_input_input_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTimerInputChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 28)(10, "label");
    \u0275\u0275text(11, "Seconds");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function TimerStopwatchHeaderComponent_div_2_div_10_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.timerService.timerSeconds, $event) || (ctx_r1.timerService.timerSeconds = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function TimerStopwatchHeaderComponent_div_2_div_10_Template_input_change_12_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTimerInputChange());
    })("input", function TimerStopwatchHeaderComponent_div_2_div_10_Template_input_input_12_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTimerInputChange());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.timerService.timerHours);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.timerService.timerMinutes);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.timerService.timerSeconds);
  }
}
function TimerStopwatchHeaderComponent_div_2_div_11_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function TimerStopwatchHeaderComponent_div_2_div_11_button_1_Template_button_click_0_listener() {
      const preset_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.usePreset(preset_r6));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const preset_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", preset_r6, "m ");
  }
}
function TimerStopwatchHeaderComponent_div_2_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275template(1, TimerStopwatchHeaderComponent_div_2_div_11_button_1_Template, 2, 1, "button", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.presets);
  }
}
function TimerStopwatchHeaderComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "div", 12)(3, "button", 13);
    \u0275\u0275listener("click", function TimerStopwatchHeaderComponent_div_2_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.timerService.toggleMode());
    });
    \u0275\u0275element(4, "i", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 13);
    \u0275\u0275listener("click", function TimerStopwatchHeaderComponent_div_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.timerService.toggleMode());
    });
    \u0275\u0275element(6, "i", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 16);
    \u0275\u0275listener("click", function TimerStopwatchHeaderComponent_div_2_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showFullTimer = false);
    });
    \u0275\u0275element(8, "i", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 18);
    \u0275\u0275template(10, TimerStopwatchHeaderComponent_div_2_div_10_Template, 13, 3, "div", 19)(11, TimerStopwatchHeaderComponent_div_2_div_11_Template, 2, 1, "div", 20);
    \u0275\u0275elementStart(12, "div", 21)(13, "div", 22);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 23)(16, "button", 24);
    \u0275\u0275listener("click", function TimerStopwatchHeaderComponent_div_2_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleStartPause());
    });
    \u0275\u0275element(17, "i", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 25);
    \u0275\u0275listener("click", function TimerStopwatchHeaderComponent_div_2_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleReset());
    });
    \u0275\u0275element(19, "i", 26);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.timerService.mode === "stopwatch");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.timerService.mode === "timer");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.timerService.mode === "timer" && !ctx_r1.timerService.isRunning);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.timerService.mode === "timer" && !ctx_r1.timerService.isRunning);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.timerService.formatTime(ctx_r1.timerService.time));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("start", !ctx_r1.timerService.isRunning)("pause", ctx_r1.timerService.isRunning);
    \u0275\u0275property("disabled", ctx_r1.timerService.mode === "timer" && ctx_r1.timerService.getTimerTotalTime() === 0 && !ctx_r1.timerService.isRunning);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.timerService.isRunning ? "fa-pause" : "fa-play");
  }
}
var TimerStopwatchHeaderComponent = class _TimerStopwatchHeaderComponent {
  timerService;
  showFullTimer = false;
  clickListener;
  // Preset timers (in minutes)
  presets = [5, 10, 15, 20, 30, 45, 60];
  constructor(timerService) {
    this.timerService = timerService;
  }
  usePreset(minutes) {
    if (this.timerService.isRunning) {
      this.timerService.pause();
    }
    this.timerService.timerHours = 0;
    this.timerService.timerMinutes = minutes;
    this.timerService.timerSeconds = 0;
    this.timerService.setTimer();
  }
  ngOnInit() {
    this.clickListener = (event) => {
      if (this.showFullTimer) {
        const widget = document.querySelector(".timer-header-widget");
        if (widget && !widget.contains(event.target)) {
          this.showFullTimer = false;
        }
      }
    };
    setTimeout(() => {
      document.addEventListener("click", this.clickListener);
    }, 0);
  }
  ngOnDestroy() {
    if (this.clickListener) {
      document.removeEventListener("click", this.clickListener);
    }
  }
  toggleExpand() {
    this.showFullTimer = !this.showFullTimer;
  }
  onTimerInputChange() {
    if (!this.timerService.isRunning) {
      this.timerService.setTimer();
    }
  }
  handleStartPause() {
    if (this.timerService.isRunning) {
      this.timerService.pause();
    } else {
      if (this.timerService.mode === "timer") {
        this.timerService.setTimer();
      }
      this.timerService.start();
    }
  }
  handleReset() {
    this.timerService.reset();
  }
  toggleTimer(event) {
    event.stopPropagation();
    this.handleStartPause();
  }
  static \u0275fac = function TimerStopwatchHeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TimerStopwatchHeaderComponent)(\u0275\u0275directiveInject(TimerStopwatchService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TimerStopwatchHeaderComponent, selectors: [["app-timer-stopwatch-header"]], decls: 3, vars: 6, consts: [[1, "timer-header-widget"], ["class", "timer-compact", 3, "click", 4, "ngIf"], ["class", "timer-expanded", 4, "ngIf"], [1, "timer-compact", 3, "click"], [1, "timer-icon"], [1, "fas"], [1, "timer-display-compact"], [1, "timer-time"], [1, "timer-mode"], [1, "timer-control-compact", 3, "click"], [1, "timer-expanded"], [1, "timer-expanded-header"], [1, "timer-mode-toggle"], [1, "mode-btn-small", 3, "click"], [1, "fas", "fa-stopwatch"], [1, "fas", "fa-clock"], [1, "close-btn", 3, "click"], [1, "fas", "fa-times"], [1, "timer-expanded-content"], ["class", "timer-inputs-header", 4, "ngIf"], ["class", "timer-presets-header", 4, "ngIf"], [1, "time-display-header"], [1, "time-value-header"], [1, "timer-controls-header"], [1, "control-btn-header", 3, "click", "disabled"], [1, "control-btn-header", "reset", 3, "click"], [1, "fas", "fa-redo"], [1, "timer-inputs-header"], [1, "timer-input-group"], ["type", "number", "min", "0", "max", "23", "placeholder", "0", 1, "timer-input-field", 3, "ngModelChange", "change", "input", "ngModel"], ["type", "number", "min", "0", "max", "59", "placeholder", "0", 1, "timer-input-field", 3, "ngModelChange", "change", "input", "ngModel"], [1, "timer-presets-header"], ["class", "preset-btn-header", 3, "click", 4, "ngFor", "ngForOf"], [1, "preset-btn-header", 3, "click"]], template: function TimerStopwatchHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, TimerStopwatchHeaderComponent_div_1_Template, 10, 8, "div", 1)(2, TimerStopwatchHeaderComponent_div_2_Template, 20, 14, "div", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("expanded", ctx.showFullTimer)("running", ctx.timerService.isRunning);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.showFullTimer);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showFullTimer);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel], styles: ['\n\n.timer-header-widget[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.timer-compact[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 12px;\n  background: rgba(74, 158, 255, 0.1);\n  border: 1px solid rgba(74, 158, 255, 0.2);\n  border-radius: 20px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  min-width: 140px;\n}\n.timer-compact[_ngcontent-%COMP%]:hover {\n  background: rgba(74, 158, 255, 0.15);\n  border-color: rgba(74, 158, 255, 0.4);\n}\n.timer-compact.running[_ngcontent-%COMP%] {\n  background: rgba(74, 158, 255, 0.2);\n  border-color: rgba(74, 158, 255, 0.5);\n  box-shadow: 0 0 10px rgba(74, 158, 255, 0.3);\n}\n.timer-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(74, 158, 255, 0.2);\n  border-radius: 50%;\n  color: var(--primary-accent);\n  font-size: 14px;\n}\n.timer-icon.active[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_pulse 2s ease-in-out infinite;\n}\n.timer-display-compact[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: left;\n}\n.timer-time[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n  font-family: "Courier New", monospace;\n  line-height: 1.2;\n}\n.timer-mode[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.timer-control-compact[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border: none;\n  background: rgba(74, 158, 255, 0.3);\n  border-radius: 50%;\n  color: white;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  transition: all 0.2s;\n}\n.timer-control-compact[_ngcontent-%COMP%]:hover {\n  background: rgba(74, 158, 255, 0.5);\n  transform: scale(1.1);\n}\n.timer-expanded[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 10px);\n  right: 0;\n  width: 360px;\n  background: var(--secondary-bg);\n  border: 1px solid rgba(74, 158, 255, 0.3);\n  border-radius: 12px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);\n  z-index: 1000;\n  padding: 16px;\n}\n.timer-expanded-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.timer-mode-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  background: rgba(74, 158, 255, 0.1);\n  padding: 4px;\n  border-radius: 8px;\n}\n.mode-btn-small[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: none;\n  background: transparent;\n  border-radius: 6px;\n  color: var(--text-muted);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n.mode-btn-small.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-accent),\n      var(--secondary-accent));\n  color: white;\n}\n.close-btn[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border: none;\n  background: transparent;\n  color: var(--text-muted);\n  cursor: pointer;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n  color: var(--error-color);\n}\n.timer-inputs-header[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 12px;\n  padding: 12px;\n  background: rgba(74, 158, 255, 0.05);\n  border-radius: 8px;\n}\n.timer-inputs-header[_ngcontent-%COMP%]   .timer-input-group[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.timer-inputs-header[_ngcontent-%COMP%]   .timer-input-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  font-weight: 600;\n}\n.timer-inputs-header[_ngcontent-%COMP%]   .timer-input-group[_ngcontent-%COMP%]   .timer-input-field[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px;\n  background: var(--secondary-bg);\n  border: 1px solid var(--border-primary);\n  border-radius: 6px;\n  color: var(--text-primary);\n  font-size: 16px;\n  font-weight: 600;\n  text-align: center;\n  font-family: "Courier New", monospace;\n  transition: all 0.2s;\n}\n.timer-inputs-header[_ngcontent-%COMP%]   .timer-input-group[_ngcontent-%COMP%]   .timer-input-field[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-accent);\n  box-shadow: 0 0 0 3px rgba(74, 158, 255, 0.1);\n}\n.timer-inputs-header[_ngcontent-%COMP%]   .timer-input-group[_ngcontent-%COMP%]   .timer-input-field[_ngcontent-%COMP%]::-webkit-inner-spin-button, \n.timer-inputs-header[_ngcontent-%COMP%]   .timer-input-group[_ngcontent-%COMP%]   .timer-input-field[_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.timer-inputs-header[_ngcontent-%COMP%]   .timer-input-group[_ngcontent-%COMP%]   .timer-input-field[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n.timer-presets-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-bottom: 12px;\n}\n.timer-presets-header[_ngcontent-%COMP%]   .preset-btn-header[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: calc(33.333% - 4px);\n  padding: 8px 12px;\n  background: rgba(74, 158, 255, 0.1);\n  border: 1px solid rgba(74, 158, 255, 0.2);\n  border-radius: 6px;\n  color: var(--text-primary);\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.timer-presets-header[_ngcontent-%COMP%]   .preset-btn-header[_ngcontent-%COMP%]:hover {\n  background: rgba(74, 158, 255, 0.2);\n  border-color: rgba(74, 158, 255, 0.4);\n  transform: translateY(-1px);\n}\n.time-display-header[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n  background: rgba(74, 158, 255, 0.1);\n  border-radius: 8px;\n  margin-bottom: 12px;\n}\n.time-value-header[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: bold;\n  font-family: "Courier New", monospace;\n  color: var(--text-primary);\n  letter-spacing: 2px;\n}\n.timer-controls-header[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  justify-content: center;\n}\n.control-btn-header[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border: none;\n  border-radius: 50%;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  transition: all 0.2s;\n}\n.control-btn-header.start[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e,\n      #16a34a);\n  color: white;\n}\n.control-btn-header.pause[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #eab308,\n      #ca8a04);\n  color: white;\n}\n.control-btn-header.reset[_ngcontent-%COMP%] {\n  background: var(--tertiary-bg);\n  color: var(--text-primary);\n  border: 1px solid var(--border-primary);\n}\n.control-btn-header[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: scale(1.1);\n}\n.control-btn-header[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.7;\n  }\n}\n/*# sourceMappingURL=timer-stopwatch-header.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimerStopwatchHeaderComponent, [{
    type: Component,
    args: [{ selector: "app-timer-stopwatch-header", standalone: true, imports: [CommonModule, FormsModule], template: `
    <div class="timer-header-widget" [class.expanded]="showFullTimer" [class.running]="timerService.isRunning">
      <!-- Compact View -->
      <div class="timer-compact" (click)="toggleExpand()" *ngIf="!showFullTimer">
        <div class="timer-icon" [class.active]="timerService.isRunning">
          <i class="fas" [class]="timerService.mode === 'timer' ? 'fa-clock' : 'fa-stopwatch'"></i>
        </div>
        <div class="timer-display-compact">
          <div class="timer-time">{{ timerService.formatTime(timerService.time) }}</div>
          <div class="timer-mode">{{ timerService.mode === 'timer' ? 'Timer' : 'Stopwatch' }}</div>
        </div>
        <button class="timer-control-compact" (click)="toggleTimer($event)">
          <i class="fas" [class]="timerService.isRunning ? 'fa-pause' : 'fa-play'"></i>
        </button>
      </div>

      <!-- Expanded View -->
      <div class="timer-expanded" *ngIf="showFullTimer">
        <div class="timer-expanded-header">
          <div class="timer-mode-toggle">
            <button class="mode-btn-small" [class.active]="timerService.mode === 'stopwatch'" (click)="timerService.toggleMode()">
              <i class="fas fa-stopwatch"></i>
            </button>
            <button class="mode-btn-small" [class.active]="timerService.mode === 'timer'" (click)="timerService.toggleMode()">
              <i class="fas fa-clock"></i>
            </button>
          </div>
          <button class="close-btn" (click)="showFullTimer = false">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="timer-expanded-content">
          <!-- Timer Input Fields (shown only in timer mode when not running) -->
          <div class="timer-inputs-header" *ngIf="timerService.mode === 'timer' && !timerService.isRunning">
            <div class="timer-input-group">
              <label>Hours</label>
              <input 
                type="number" 
                class="timer-input-field"
                [(ngModel)]="timerService.timerHours"
                (change)="onTimerInputChange()"
                (input)="onTimerInputChange()"
                min="0"
                max="23"
                placeholder="0">
            </div>
            <div class="timer-input-group">
              <label>Minutes</label>
              <input 
                type="number" 
                class="timer-input-field"
                [(ngModel)]="timerService.timerMinutes"
                (change)="onTimerInputChange()"
                (input)="onTimerInputChange()"
                min="0"
                max="59"
                placeholder="0">
            </div>
            <div class="timer-input-group">
              <label>Seconds</label>
              <input 
                type="number" 
                class="timer-input-field"
                [(ngModel)]="timerService.timerSeconds"
                (change)="onTimerInputChange()"
                (input)="onTimerInputChange()"
                min="0"
                max="59"
                placeholder="0">
            </div>
          </div>
          
          <!-- Quick Presets (shown only in timer mode when not running) -->
          <div class="timer-presets-header" *ngIf="timerService.mode === 'timer' && !timerService.isRunning">
            <button 
              class="preset-btn-header"
              *ngFor="let preset of presets"
              (click)="usePreset(preset)">
              {{ preset }}m
            </button>
          </div>
          
          <div class="time-display-header">
            <div class="time-value-header">{{ timerService.formatTime(timerService.time) }}</div>
          </div>
          <div class="timer-controls-header">
            <button class="control-btn-header" 
                    [class.start]="!timerService.isRunning" 
                    [class.pause]="timerService.isRunning"
                    (click)="handleStartPause()"
                    [disabled]="timerService.mode === 'timer' && timerService.getTimerTotalTime() === 0 && !timerService.isRunning">
              <i class="fas" [class]="timerService.isRunning ? 'fa-pause' : 'fa-play'"></i>
            </button>
            <button class="control-btn-header reset" (click)="handleReset()">
              <i class="fas fa-redo"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `, styles: ['/* angular:styles/component:scss;69d07407f69642f85c8b6246ab3f370a809f8e46ef4eab25c790ec2a6b1c1627;D:/noushad/OmniPlanner/OmniPlanner_Prod/omni-planner-app/src/app/components/timer-stopwatch/timer-stopwatch-header.ts */\n.timer-header-widget {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.timer-compact {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 12px;\n  background: rgba(74, 158, 255, 0.1);\n  border: 1px solid rgba(74, 158, 255, 0.2);\n  border-radius: 20px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  min-width: 140px;\n}\n.timer-compact:hover {\n  background: rgba(74, 158, 255, 0.15);\n  border-color: rgba(74, 158, 255, 0.4);\n}\n.timer-compact.running {\n  background: rgba(74, 158, 255, 0.2);\n  border-color: rgba(74, 158, 255, 0.5);\n  box-shadow: 0 0 10px rgba(74, 158, 255, 0.3);\n}\n.timer-icon {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(74, 158, 255, 0.2);\n  border-radius: 50%;\n  color: var(--primary-accent);\n  font-size: 14px;\n}\n.timer-icon.active {\n  animation: pulse 2s ease-in-out infinite;\n}\n.timer-display-compact {\n  flex: 1;\n  text-align: left;\n}\n.timer-time {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n  font-family: "Courier New", monospace;\n  line-height: 1.2;\n}\n.timer-mode {\n  font-size: 10px;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.timer-control-compact {\n  width: 28px;\n  height: 28px;\n  border: none;\n  background: rgba(74, 158, 255, 0.3);\n  border-radius: 50%;\n  color: white;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  transition: all 0.2s;\n}\n.timer-control-compact:hover {\n  background: rgba(74, 158, 255, 0.5);\n  transform: scale(1.1);\n}\n.timer-expanded {\n  position: absolute;\n  top: calc(100% + 10px);\n  right: 0;\n  width: 360px;\n  background: var(--secondary-bg);\n  border: 1px solid rgba(74, 158, 255, 0.3);\n  border-radius: 12px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);\n  z-index: 1000;\n  padding: 16px;\n}\n.timer-expanded-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.timer-mode-toggle {\n  display: flex;\n  gap: 4px;\n  background: rgba(74, 158, 255, 0.1);\n  padding: 4px;\n  border-radius: 8px;\n}\n.mode-btn-small {\n  width: 32px;\n  height: 32px;\n  border: none;\n  background: transparent;\n  border-radius: 6px;\n  color: var(--text-muted);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n.mode-btn-small.active {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-accent),\n      var(--secondary-accent));\n  color: white;\n}\n.close-btn {\n  width: 28px;\n  height: 28px;\n  border: none;\n  background: transparent;\n  color: var(--text-muted);\n  cursor: pointer;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.close-btn:hover {\n  background: rgba(239, 68, 68, 0.1);\n  color: var(--error-color);\n}\n.timer-inputs-header {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 12px;\n  padding: 12px;\n  background: rgba(74, 158, 255, 0.05);\n  border-radius: 8px;\n}\n.timer-inputs-header .timer-input-group {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.timer-inputs-header .timer-input-group label {\n  font-size: 11px;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  font-weight: 600;\n}\n.timer-inputs-header .timer-input-group .timer-input-field {\n  width: 100%;\n  padding: 8px;\n  background: var(--secondary-bg);\n  border: 1px solid var(--border-primary);\n  border-radius: 6px;\n  color: var(--text-primary);\n  font-size: 16px;\n  font-weight: 600;\n  text-align: center;\n  font-family: "Courier New", monospace;\n  transition: all 0.2s;\n}\n.timer-inputs-header .timer-input-group .timer-input-field:focus {\n  outline: none;\n  border-color: var(--primary-accent);\n  box-shadow: 0 0 0 3px rgba(74, 158, 255, 0.1);\n}\n.timer-inputs-header .timer-input-group .timer-input-field::-webkit-inner-spin-button,\n.timer-inputs-header .timer-input-group .timer-input-field::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.timer-inputs-header .timer-input-group .timer-input-field[type=number] {\n  -moz-appearance: textfield;\n}\n.timer-presets-header {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-bottom: 12px;\n}\n.timer-presets-header .preset-btn-header {\n  flex: 1;\n  min-width: calc(33.333% - 4px);\n  padding: 8px 12px;\n  background: rgba(74, 158, 255, 0.1);\n  border: 1px solid rgba(74, 158, 255, 0.2);\n  border-radius: 6px;\n  color: var(--text-primary);\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.timer-presets-header .preset-btn-header:hover {\n  background: rgba(74, 158, 255, 0.2);\n  border-color: rgba(74, 158, 255, 0.4);\n  transform: translateY(-1px);\n}\n.time-display-header {\n  text-align: center;\n  padding: 20px;\n  background: rgba(74, 158, 255, 0.1);\n  border-radius: 8px;\n  margin-bottom: 12px;\n}\n.time-value-header {\n  font-size: 32px;\n  font-weight: bold;\n  font-family: "Courier New", monospace;\n  color: var(--text-primary);\n  letter-spacing: 2px;\n}\n.timer-controls-header {\n  display: flex;\n  gap: 8px;\n  justify-content: center;\n}\n.control-btn-header {\n  width: 48px;\n  height: 48px;\n  border: none;\n  border-radius: 50%;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  transition: all 0.2s;\n}\n.control-btn-header.start {\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e,\n      #16a34a);\n  color: white;\n}\n.control-btn-header.pause {\n  background:\n    linear-gradient(\n      135deg,\n      #eab308,\n      #ca8a04);\n  color: white;\n}\n.control-btn-header.reset {\n  background: var(--tertiary-bg);\n  color: var(--text-primary);\n  border: 1px solid var(--border-primary);\n}\n.control-btn-header:hover:not(:disabled) {\n  transform: scale(1.1);\n}\n.control-btn-header:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.7;\n  }\n}\n/*# sourceMappingURL=timer-stopwatch-header.css.map */\n'] }]
  }], () => [{ type: TimerStopwatchService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TimerStopwatchHeaderComponent, { className: "TimerStopwatchHeaderComponent", filePath: "src/app/components/timer-stopwatch/timer-stopwatch-header.ts", lineNumber: 410 });
})();

// src/app/components/toast/toast-container.ts
function ToastContainerComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "span", 4);
    \u0275\u0275elementStart(2, "span", 5);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 6);
    \u0275\u0275listener("click", function ToastContainerComponent_div_1_Template_button_click_4_listener() {
      const m_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toaster.dismiss(m_r2.id));
    });
    \u0275\u0275text(5, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r2 = ctx.$implicit;
    \u0275\u0275classMap("toast " + m_r2.type);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(m_r2.text);
  }
}
var ToastContainerComponent = class _ToastContainerComponent {
  toaster;
  constructor(toaster) {
    this.toaster = toaster;
  }
  static \u0275fac = function ToastContainerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastContainerComponent)(\u0275\u0275directiveInject(ToasterService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToastContainerComponent, selectors: [["app-toast-container"]], decls: 4, vars: 3, consts: [[1, "toast-container"], ["class", "toast", 3, "class", 4, "ngFor", "ngForOf"], ["aria-hidden", "true", 1, "spacer"], [1, "toast"], [1, "dot"], [1, "text"], ["aria-label", "Close", 1, "close", 3, "click"]], template: function ToastContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, ToastContainerComponent_div_1_Template, 6, 3, "div", 1);
      \u0275\u0275pipe(2, "async");
      \u0275\u0275element(3, "div", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(2, 1, ctx.toaster.messages$));
    }
  }, dependencies: [CommonModule, NgForOf, AsyncPipe], styles: ["\n\n.toast-container[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 50%;\n  transform: translateX(-50%);\n  top: 16px;\n  z-index: 10000;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  max-width: 640px;\n  width: calc(100% - 32px);\n  pointer-events: none;\n}\n.toast[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #12161d;\n  border: 1px solid #2a2f36;\n  color: #e6e6e6;\n  padding: 10px 12px;\n  border-radius: 10px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);\n  pointer-events: auto;\n}\n.toast[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #6b7280;\n}\n.toast.success[_ngcontent-%COMP%] {\n  border-color: #166534;\n  background: #0a1f14;\n}\n.toast.success[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  background: #22c55e;\n}\n.toast.error[_ngcontent-%COMP%] {\n  border-color: #7f1d1d;\n  background: #1a0f11;\n}\n.toast.error[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n.toast.info[_ngcontent-%COMP%] {\n  border-color: #1e3a8a;\n  background: #0b1320;\n}\n.toast.info[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  background: #60a5fa;\n}\n.toast.warn[_ngcontent-%COMP%] {\n  border-color: #854d0e;\n  background: #1a1408;\n}\n.toast.warn[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.toast[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.toast[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: #9aa0a6;\n  cursor: pointer;\n  font-size: 16px;\n}\n/*# sourceMappingURL=toast-container.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastContainerComponent, [{
    type: Component,
    args: [{ selector: "app-toast-container", standalone: true, imports: [CommonModule], template: `<div class="toast-container">\r
  <div class="toast" *ngFor="let m of (toaster.messages$ | async)" [class]="'toast ' + m.type">\r
    <span class="dot"></span>\r
    <span class="text">{{ m.text }}</span>\r
    <button class="close" (click)="toaster.dismiss(m.id)" aria-label="Close">\xD7</button>\r
  </div>\r
  <div class="spacer" aria-hidden="true"></div>\r
</div>\r
\r
\r
`, styles: ["/* src/app/components/toast/toast-container.scss */\n.toast-container {\n  position: fixed;\n  left: 50%;\n  transform: translateX(-50%);\n  top: 16px;\n  z-index: 10000;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  max-width: 640px;\n  width: calc(100% - 32px);\n  pointer-events: none;\n}\n.toast {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #12161d;\n  border: 1px solid #2a2f36;\n  color: #e6e6e6;\n  padding: 10px 12px;\n  border-radius: 10px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);\n  pointer-events: auto;\n}\n.toast .dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #6b7280;\n}\n.toast.success {\n  border-color: #166534;\n  background: #0a1f14;\n}\n.toast.success .dot {\n  background: #22c55e;\n}\n.toast.error {\n  border-color: #7f1d1d;\n  background: #1a0f11;\n}\n.toast.error .dot {\n  background: #ef4444;\n}\n.toast.info {\n  border-color: #1e3a8a;\n  background: #0b1320;\n}\n.toast.info .dot {\n  background: #60a5fa;\n}\n.toast.warn {\n  border-color: #854d0e;\n  background: #1a1408;\n}\n.toast.warn .dot {\n  background: #f59e0b;\n}\n.toast .text {\n  flex: 1;\n}\n.toast .close {\n  background: transparent;\n  border: none;\n  color: #9aa0a6;\n  cursor: pointer;\n  font-size: 16px;\n}\n/*# sourceMappingURL=toast-container.css.map */\n"] }]
  }], () => [{ type: ToasterService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToastContainerComponent, { className: "ToastContainerComponent", filePath: "src/app/components/toast/toast-container.ts", lineNumber: 12 });
})();

// src/app/components/confirmation-dialog/confirmation-dialog.ts
function ConfirmationDialogComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function ConfirmationDialogComponent_div_0_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBackdropClick($event));
    });
    \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "h3", 4);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 5)(6, "p", 6);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 7)(9, "button", 8);
    \u0275\u0275listener("click", function ConfirmationDialogComponent_div_0_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 9);
    \u0275\u0275listener("click", function ConfirmationDialogComponent_div_0_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onConfirm());
    });
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.message);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.cancelText);
    \u0275\u0275advance();
    \u0275\u0275classMap("btn-confirm btn-" + ctx_r1.confirmClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.confirmText);
  }
}
var ConfirmationDialogComponent = class _ConfirmationDialogComponent {
  confirmationService;
  show = false;
  title = "Confirm";
  message = "";
  confirmText = "Confirm";
  cancelText = "Cancel";
  confirmClass = "primary";
  subscription;
  currentResolve;
  constructor(confirmationService) {
    this.confirmationService = confirmationService;
  }
  ngOnInit() {
    this.subscription = this.confirmationService.confirmations$.subscribe((data) => {
      this.title = data.title || "Confirm";
      this.message = data.message;
      this.confirmText = data.confirmText || "Confirm";
      this.cancelText = data.cancelText || "Cancel";
      this.confirmClass = data.confirmClass || "primary";
      this.currentResolve = data.resolve;
      this.show = true;
    });
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  onConfirm() {
    if (this.currentResolve) {
      this.currentResolve({ confirmed: true });
      this.currentResolve = void 0;
    }
    this.show = false;
  }
  onCancel() {
    if (this.currentResolve) {
      this.currentResolve({ confirmed: false });
      this.currentResolve = void 0;
    }
    this.show = false;
  }
  onBackdropClick(event) {
    if (event.target === event.currentTarget) {
      this.onCancel();
    }
  }
  static \u0275fac = function ConfirmationDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmationDialogComponent)(\u0275\u0275directiveInject(ConfirmationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmationDialogComponent, selectors: [["app-confirmation-dialog"]], decls: 1, vars: 1, consts: [["class", "confirmation-overlay", 3, "click", 4, "ngIf"], [1, "confirmation-overlay", 3, "click"], [1, "confirmation-dialog"], [1, "dialog-header"], [1, "dialog-title"], [1, "dialog-body"], [1, "dialog-message"], [1, "dialog-footer"], [1, "btn", "btn-cancel", 3, "click"], [1, "btn", 3, "click"]], template: function ConfirmationDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ConfirmationDialogComponent_div_0_Template, 13, 6, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.show);
    }
  }, dependencies: [CommonModule, NgIf], styles: ["\n\n.confirmation-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10001;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.confirmation-dialog[_ngcontent-%COMP%] {\n  background: #14171c;\n  border: 1px solid #2a2f36;\n  border-radius: 12px;\n  min-width: 400px;\n  max-width: 500px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);\n}\n.dialog-header[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  border-bottom: 1px solid #2a2f36;\n}\n.dialog-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: #e6e6e6;\n}\n.dialog-body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.dialog-message[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #c6cbd2;\n  line-height: 1.6;\n  font-size: 14px;\n}\n.dialog-footer[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  border-top: 1px solid #2a2f36;\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 8px;\n  border: 1px solid;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  transition: all 0.2s;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  background: #2c2f36;\n  border-color: #3a3f47;\n  color: #e6e6e6;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: #353942;\n  border-color: #4a4f57;\n}\n.btn-confirm[_ngcontent-%COMP%] {\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  border-color: #3b82f6;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n  border-color: #2563eb;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background: #dc2626;\n  border-color: #dc2626;\n}\n.btn-danger[_ngcontent-%COMP%]:hover {\n  background: #b91c1c;\n  border-color: #b91c1c;\n}\n.btn-warn[_ngcontent-%COMP%] {\n  background: #f59e0b;\n  border-color: #f59e0b;\n}\n.btn-warn[_ngcontent-%COMP%]:hover {\n  background: #d97706;\n  border-color: #d97706;\n}\n.btn-success[_ngcontent-%COMP%] {\n  background: #16a34a;\n  border-color: #16a34a;\n}\n.btn-success[_ngcontent-%COMP%]:hover {\n  background: #15803d;\n  border-color: #15803d;\n}\n/*# sourceMappingURL=confirmation-dialog.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmationDialogComponent, [{
    type: Component,
    args: [{ selector: "app-confirmation-dialog", standalone: true, imports: [CommonModule], template: `<div class="confirmation-overlay" *ngIf="show" (click)="onBackdropClick($event)">\r
  <div class="confirmation-dialog">\r
    <div class="dialog-header">\r
      <h3 class="dialog-title">{{ title }}</h3>\r
    </div>\r
    <div class="dialog-body">\r
      <p class="dialog-message">{{ message }}</p>\r
    </div>\r
    <div class="dialog-footer">\r
      <button class="btn btn-cancel" (click)="onCancel()">{{ cancelText }}</button>\r
      <button class="btn" [class]="'btn-confirm btn-' + confirmClass" (click)="onConfirm()">{{ confirmText }}</button>\r
    </div>\r
  </div>\r
</div>\r
\r
`, styles: ["/* src/app/components/confirmation-dialog/confirmation-dialog.scss */\n.confirmation-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10001;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.confirmation-dialog {\n  background: #14171c;\n  border: 1px solid #2a2f36;\n  border-radius: 12px;\n  min-width: 400px;\n  max-width: 500px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);\n}\n.dialog-header {\n  padding: 16px 20px;\n  border-bottom: 1px solid #2a2f36;\n}\n.dialog-title {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: #e6e6e6;\n}\n.dialog-body {\n  padding: 20px;\n}\n.dialog-message {\n  margin: 0;\n  color: #c6cbd2;\n  line-height: 1.6;\n  font-size: 14px;\n}\n.dialog-footer {\n  padding: 16px 20px;\n  border-top: 1px solid #2a2f36;\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n.btn {\n  padding: 8px 16px;\n  border-radius: 8px;\n  border: 1px solid;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  transition: all 0.2s;\n}\n.btn-cancel {\n  background: #2c2f36;\n  border-color: #3a3f47;\n  color: #e6e6e6;\n}\n.btn-cancel:hover {\n  background: #353942;\n  border-color: #4a4f57;\n}\n.btn-confirm {\n  color: white;\n}\n.btn-primary {\n  background: #3b82f6;\n  border-color: #3b82f6;\n}\n.btn-primary:hover {\n  background: #2563eb;\n  border-color: #2563eb;\n}\n.btn-danger {\n  background: #dc2626;\n  border-color: #dc2626;\n}\n.btn-danger:hover {\n  background: #b91c1c;\n  border-color: #b91c1c;\n}\n.btn-warn {\n  background: #f59e0b;\n  border-color: #f59e0b;\n}\n.btn-warn:hover {\n  background: #d97706;\n  border-color: #d97706;\n}\n.btn-success {\n  background: #16a34a;\n  border-color: #16a34a;\n}\n.btn-success:hover {\n  background: #15803d;\n  border-color: #15803d;\n}\n/*# sourceMappingURL=confirmation-dialog.css.map */\n"] }]
  }], () => [{ type: ConfirmationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmationDialogComponent, { className: "ConfirmationDialogComponent", filePath: "src/app/components/confirmation-dialog/confirmation-dialog.ts", lineNumber: 13 });
})();

// src/app/shared/components/loader/loader.component.ts
function LoaderComponent_div_0_p_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.message);
  }
}
function LoaderComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
    \u0275\u0275element(2, "div", 3);
    \u0275\u0275template(3, LoaderComponent_div_0_p_3_Template, 2, 1, "p", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("fullscreen", ctx_r0.fullScreen);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.message);
  }
}
var LoaderComponent = class _LoaderComponent {
  loaderService;
  message = "Loading...";
  fullScreen = false;
  showGlobalLoader = false;
  // If true, subscribes to LoaderService
  isLoading = false;
  subscription;
  constructor(loaderService) {
    this.loaderService = loaderService;
  }
  ngOnInit() {
    if (this.showGlobalLoader) {
      this.isLoading = this.loaderService.isLoading;
      this.subscription = this.loaderService.loading$.subscribe((isLoading) => {
        this.isLoading = isLoading;
      });
    } else {
      this.isLoading = true;
    }
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static \u0275fac = function LoaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoaderComponent)(\u0275\u0275directiveInject(LoaderService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoaderComponent, selectors: [["app-loader"]], inputs: { message: "message", fullScreen: "fullScreen", showGlobalLoader: "showGlobalLoader" }, decls: 1, vars: 1, consts: [["class", "loader-overlay", 3, "fullscreen", 4, "ngIf"], [1, "loader-overlay"], [1, "loader-content"], [1, "spinner-gradient"], ["class", "loader-message", 4, "ngIf"], [1, "loader-message"]], template: function LoaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, LoaderComponent_div_0_Template, 4, 3, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgIf], styles: ["\n\n.loader-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 99999;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease-out;\n}\n.loader-overlay.fullscreen[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 99999;\n}\n.loader-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  padding: 24px;\n  background: rgba(26, 26, 26, 0.95);\n  border-radius: 12px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);\n  min-width: 120px;\n}\n.spinner-gradient[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid rgba(74, 158, 255, 0.2);\n  border-top-color: #4a9eff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.loader-message[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.9);\n  text-align: center;\n  letter-spacing: 0.2px;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=loader.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoaderComponent, [{
    type: Component,
    args: [{ selector: "app-loader", standalone: true, imports: [CommonModule], template: '<div class="loader-overlay" [class.fullscreen]="fullScreen" *ngIf="isLoading">\r\n  <div class="loader-content">\r\n    <div class="spinner-gradient"></div>\r\n    <p class="loader-message" *ngIf="message">{{ message }}</p>\r\n  </div>\r\n</div>\r\n\r\n', styles: ["/* src/app/shared/components/loader/loader.component.scss */\n.loader-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 99999;\n  animation: fadeIn 0.2s ease-out;\n}\n.loader-overlay.fullscreen {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 99999;\n}\n.loader-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  padding: 24px;\n  background: rgba(26, 26, 26, 0.95);\n  border-radius: 12px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);\n  min-width: 120px;\n}\n.spinner-gradient {\n  width: 40px;\n  height: 40px;\n  border: 3px solid rgba(74, 158, 255, 0.2);\n  border-top-color: #4a9eff;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n.loader-message {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.9);\n  text-align: center;\n  letter-spacing: 0.2px;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=loader.component.css.map */\n"] }]
  }], () => [{ type: LoaderService }], { message: [{
    type: Input
  }], fullScreen: [{
    type: Input
  }], showGlobalLoader: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoaderComponent, { className: "LoaderComponent", filePath: "src/app/shared/components/loader/loader.component.ts", lineNumber: 14 });
})();

// src/app/app.ts
function AppComponent_div_0_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.unreadCount);
  }
}
function AppComponent_div_0_div_17_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function AppComponent_div_0_div_17_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.markAllAsRead());
    });
    \u0275\u0275text(1, " Mark all as read ");
    \u0275\u0275elementEnd();
  }
}
function AppComponent_div_0_div_17_div_6_div_1_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 51);
    \u0275\u0275listener("click", function AppComponent_div_0_div_17_div_6_div_1_button_11_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const notification_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.markAsRead(notification_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(1, "i", 52);
    \u0275\u0275elementEnd();
  }
}
function AppComponent_div_0_div_17_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275listener("click", function AppComponent_div_0_div_17_div_6_div_1_Template_div_click_0_listener() {
      const notification_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onNotificationClick(notification_r6));
    });
    \u0275\u0275elementStart(1, "div", 42);
    \u0275\u0275element(2, "i", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 43)(4, "div", 44);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 45);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 46);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 47);
    \u0275\u0275template(11, AppComponent_div_0_div_17_div_6_div_1_button_11_Template, 2, 0, "button", 48);
    \u0275\u0275elementStart(12, "button", 49);
    \u0275\u0275listener("click", function AppComponent_div_0_div_17_div_6_div_1_Template_button_click_12_listener($event) {
      const notification_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.removeNotification(notification_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(13, "i", 50);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const notification_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("unread", !notification_r6.read);
    \u0275\u0275advance();
    \u0275\u0275classMap("icon-" + notification_r6.type);
    \u0275\u0275advance();
    \u0275\u0275classMap("fa-" + notification_r6.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(notification_r6.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(notification_r6.message);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getTimeAgo(notification_r6.timestamp));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !notification_r6.read);
  }
}
function AppComponent_div_0_div_17_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275template(1, AppComponent_div_0_div_17_div_6_div_1_Template, 14, 10, "div", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.notifications);
  }
}
function AppComponent_div_0_div_17_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275element(1, "i", 54);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "You're all caught up!");
    \u0275\u0275elementEnd()();
  }
}
function AppComponent_div_0_div_17_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55)(1, "button", 56);
    \u0275\u0275listener("click", function AppComponent_div_0_div_17_div_8_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.viewAllNotifications());
    });
    \u0275\u0275text(2, " View All Notifications ");
    \u0275\u0275elementEnd()();
  }
}
function AppComponent_div_0_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275listener("click", function AppComponent_div_0_div_17_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 32)(2, "h3", 33);
    \u0275\u0275element(3, "i", 15);
    \u0275\u0275text(4, " Notifications ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AppComponent_div_0_div_17_button_5_Template, 2, 0, "button", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, AppComponent_div_0_div_17_div_6_Template, 2, 1, "div", 35)(7, AppComponent_div_0_div_17_div_7_Template, 6, 0, "div", 36)(8, AppComponent_div_0_div_17_div_8_Template, 3, 0, "div", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("top", ctx_r1.notificationsDropdownTop, "px")("right", ctx_r1.notificationsDropdownRight, "px");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.unreadCount > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.notifications.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.notifications.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.notifications.length > 0);
  }
}
function AppComponent_div_0_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275listener("click", function AppComponent_div_0_div_27_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 58)(2, "div", 59);
    \u0275\u0275element(3, "i", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 60)(5, "div", 61);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 62);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(9, "div", 63);
    \u0275\u0275elementStart(10, "div", 64);
    \u0275\u0275listener("click", function AppComponent_div_0_div_27_Template_div_click_10_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onProfileClick());
    });
    \u0275\u0275element(11, "i", 65);
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13, "My Profile");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 64);
    \u0275\u0275listener("click", function AppComponent_div_0_div_27_Template_div_click_14_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSettingsClick());
    });
    \u0275\u0275element(15, "i", 66);
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17, "Settings");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(18, "div", 63);
    \u0275\u0275elementStart(19, "div", 67);
    \u0275\u0275listener("click", function AppComponent_div_0_div_27_Template_div_click_19_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onLogout());
    });
    \u0275\u0275element(20, "i", 68);
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22, "Logout");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("top", ctx_r1.dropdownTop, "px")("right", ctx_r1.dropdownRight, "px");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.userDisplayName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r1.currentUser == null ? null : ctx_r1.currentUser.email) || "No email");
  }
}
function AppComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "header", 4)(2, "div", 5)(3, "div", 6)(4, "div", 7);
    \u0275\u0275listener("click", function AppComponent_div_0_Template_div_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSidebar());
    });
    \u0275\u0275element(5, "i", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 9)(7, "h1", 10);
    \u0275\u0275text(8, "OmniPlanner");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 11);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "div", 12);
    \u0275\u0275element(12, "app-timer-stopwatch-header");
    \u0275\u0275elementStart(13, "div", 13)(14, "button", 14);
    \u0275\u0275listener("click", function AppComponent_div_0_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleNotificationsDropdown());
    });
    \u0275\u0275element(15, "i", 15);
    \u0275\u0275template(16, AppComponent_div_0_span_16_Template, 2, 1, "span", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, AppComponent_div_0_div_17_Template, 9, 8, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 18);
    \u0275\u0275listener("click", function AppComponent_div_0_Template_div_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleUserDropdown());
    });
    \u0275\u0275elementStart(19, "div", 19);
    \u0275\u0275element(20, "i", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 21)(22, "span", 22);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 23);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(26, "i", 24);
    \u0275\u0275template(27, AppComponent_div_0_div_27_Template, 23, 6, "div", 25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 26)(29, "app-sidebar", 27);
    \u0275\u0275listener("itemClick", function AppComponent_div_0_Template_app_sidebar_itemClick_29_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSidebarItemClick($event));
    })("toggleCollapse", function AppComponent_div_0_Template_app_sidebar_toggleCollapse_29_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSidebarToggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 28)(31, "main", 29);
    \u0275\u0275element(32, "router-outlet");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275classMap("fa-" + ctx_r1.selectedIcon);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getCurrentMenuName());
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.showNotificationsDropdown);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.unreadCount > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showNotificationsDropdown);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.showUserDropdown);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.userDisplayName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.userRole);
    \u0275\u0275advance();
    \u0275\u0275classProp("rotated", ctx_r1.showUserDropdown);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showUserDropdown);
    \u0275\u0275advance(2);
    \u0275\u0275property("items", ctx_r1.filteredSidebarItems)("collapsed", ctx_r1.sidebarCollapsed);
    \u0275\u0275advance();
    \u0275\u0275classProp("sidebar-collapsed", ctx_r1.sidebarCollapsed);
  }
}
function AppComponent_router_outlet_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet");
  }
}
var AppComponent = class _AppComponent {
  themeService;
  authService;
  router;
  title = "OmniPlanner";
  sidebarCollapsed = true;
  // Keep sidebar collapsed by default
  isAuthenticated = false;
  currentView = "tasks";
  // Track current view
  selectedIcon = "layer-group";
  // Current selected icon
  showUserDropdown = false;
  // User profile dropdown state
  dropdownTop = 70;
  // Dropdown top position (header height + margin)
  dropdownRight = 24;
  // Dropdown right position
  // User info from auth service
  currentUser = null;
  userDisplayName = "Guest User";
  userRole = "Guest";
  showNotificationsDropdown = false;
  // Notifications dropdown state
  notificationsDropdownTop = 70;
  // Notifications dropdown top position
  notificationsDropdownRight = 24;
  // Notifications dropdown right position
  showSearch = false;
  // Search dropdown state
  searchQuery = "";
  // Search query
  searchResults = [];
  // Search results
  notifications = [
    {
      id: 1,
      type: "task",
      icon: "tasks",
      title: "Task Overdue",
      message: 'Task "Implement user authentication system" is overdue',
      timestamp: new Date(Date.now() - 36e5),
      // 1 hour ago
      read: false,
      actionUrl: "/tasks"
    },
    {
      id: 2,
      type: "warning",
      icon: "exclamation-triangle",
      title: "Budget Alert",
      message: "Budget for October is exceeding the limit",
      timestamp: new Date(Date.now() - 72e5),
      // 2 hours ago
      read: false,
      actionUrl: "/budget"
    },
    {
      id: 3,
      type: "info",
      icon: "info-circle",
      title: "New Assignment",
      message: "You have been assigned to a new task",
      timestamp: new Date(Date.now() - 864e5),
      // 1 day ago
      read: false,
      actionUrl: "/tasks"
    },
    {
      id: 4,
      type: "success",
      icon: "check-circle",
      title: "Task Completed",
      message: 'Task "Setup development environment" has been completed',
      timestamp: new Date(Date.now() - 1728e5),
      // 2 days ago
      read: true,
      actionUrl: "/tasks"
    }
  ];
  get unreadCount() {
    return this.notifications.filter((n) => !n.read).length;
  }
  sidebarItems = [
    {
      id: "tasks",
      label: "Tasks",
      icon: "tasks",
      route: "/tasks",
      permission: "tasks.view"
    },
    {
      id: "budget",
      label: "Budget",
      icon: "dollar-sign",
      route: "/budget",
      permission: "budget.view"
    },
    {
      id: "notes",
      label: "Notes",
      icon: "sticky-note",
      route: "/notes",
      permission: "notes.view"
    },
    {
      id: "masters",
      label: "Masters",
      icon: "database",
      permission: ["categories.view", "statuses.view", "priorities.view", "urls.view", "credentials.view"],
      children: [
        { id: "category", label: "Category", icon: "tags", route: "/masters/category", permission: "categories.view" },
        { id: "status", label: "Status", icon: "info-circle", route: "/masters/status", permission: "statuses.view" },
        { id: "priority", label: "Priority", icon: "exclamation-circle", route: "/masters/priority", permission: "priorities.view" },
        { id: "urls-docs", label: "Urls/Docs", icon: "link", route: "/masters/urls-docs", permission: "urls.view" },
        { id: "credentials", label: "Credentials", icon: "key", route: "/masters/credentials", permission: "credentials.view" }
      ]
    },
    {
      id: "administration",
      label: "Administration",
      icon: "user-shield",
      permission: ["users.view", "roles.view", "permissions.view"],
      children: [
        { id: "users", label: "Users", icon: "users", route: "/administration/users", permission: "users.view" },
        { id: "roles", label: "Roles", icon: "user-tag", route: "/administration/roles", permission: "roles.view" },
        { id: "permissions", label: "Permissions", icon: "key", route: "/administration/permissions", permission: "permissions.view" }
      ]
    },
    {
      id: "settings",
      label: "Settings",
      icon: "cog",
      route: "/settings",
      permission: "settings.view"
    }
  ];
  // Filtered sidebar items - property that only updates when permissions change
  // This prevents sidebar state from being reset on every change detection
  filteredSidebarItems = [];
  _lastPermissionsString = "";
  // Update filtered sidebar items (only called when permissions actually change)
  updateFilteredSidebarItems() {
    const currentPermissions = this.authService.getPermissions().sort().join(",");
    if (currentPermissions !== this._lastPermissionsString) {
      this._lastPermissionsString = currentPermissions;
      this.filteredSidebarItems = this.calculateFilteredItems();
    }
  }
  // Calculate filtered items based on permissions
  // IMPORTANT: Preserves object references when possible to prevent sidebar state reset
  calculateFilteredItems() {
    const result = [];
    for (const item of this.sidebarItems) {
      if (item.permission) {
        const hasPermission = Array.isArray(item.permission) ? item.permission.some((p) => this.authService.hasPermission(p)) : this.authService.hasPermission(item.permission);
        if (!hasPermission) {
          continue;
        }
      }
      if (item.children && item.children.length > 0) {
        const filteredChildren = item.children.filter((child) => {
          if (child.permission) {
            if (Array.isArray(child.permission)) {
              return child.permission.some((p) => this.authService.hasPermission(p));
            } else {
              return this.authService.hasPermission(child.permission);
            }
          }
          return true;
        });
        if (filteredChildren.length === 0) {
          continue;
        }
        if (filteredChildren.length === item.children.length && filteredChildren.every((child, idx) => child === item.children[idx])) {
          result.push(item);
        } else {
          result.push(__spreadProps(__spreadValues({}, item), {
            children: filteredChildren
          }));
        }
      } else {
        result.push(item);
      }
    }
    return result;
  }
  constructor(themeService, authService, router) {
    this.themeService = themeService;
    this.authService = authService;
    this.router = router;
  }
  ngOnInit() {
    this.checkAuthentication();
    this._lastPermissionsString = "";
    this.updateFilteredSidebarItems();
    this.authService.currentUser$.subscribe((user) => {
      console.log("Auth state changed - User:", user);
      this.currentUser = user;
      this.isAuthenticated = this.authService.isAuthenticated();
      if (user && this.isAuthenticated) {
        this.userDisplayName = `${user.first_name} ${user.last_name}`.trim() || user.username || user.email;
        const auth = this.authService.getStoredAuth();
        if (auth && auth.roles && auth.roles.length > 0) {
          this.userRole = auth.roles[0];
        } else {
          this.userRole = "User";
        }
      } else {
        this.userDisplayName = "Guest User";
        this.userRole = "Guest";
        this.isAuthenticated = false;
      }
      this.updateFilteredSidebarItems();
    });
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
      const url = event.urlAfterRedirects;
      if (url.startsWith("/masters/")) {
        this.currentView = url.split("/masters/")[1];
      } else if (url.startsWith("/administration/")) {
        this.currentView = url.split("/administration/")[1];
      } else if (url.startsWith("/")) {
        this.currentView = url.substring(1) || "tasks";
      }
    });
    this.themeService.watchSystemTheme();
    const storedIcon = localStorage.getItem("omni-planner-icon");
    if (storedIcon) {
      this.selectedIcon = storedIcon;
    }
    window.addEventListener("icon-changed", ((event) => {
      if (event.detail && event.detail.icon) {
        this.selectedIcon = event.detail.icon;
      }
    }));
    document.addEventListener("keydown", (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "k") {
        event.preventDefault();
        this.toggleSearch();
      }
      if (event.key === "Escape" && this.showSearch) {
        this.closeSearch();
      }
    });
    document.addEventListener("click", (event) => {
      const target = event.target;
      if (!target.closest(".user-profile-menu") && !target.closest(".user-dropdown")) {
        this.showUserDropdown = false;
      }
      if (!target.closest(".notifications-container") && !target.closest(".notifications-dropdown")) {
        this.showNotificationsDropdown = false;
      }
      if (!target.closest(".search-container") && !target.closest(".search-dropdown")) {
        this.closeSearch();
      }
    });
    window.addEventListener("resize", () => {
      if (this.showUserDropdown) {
        this.calculateDropdownPosition();
      }
      if (this.showNotificationsDropdown) {
        this.calculateNotificationsPosition();
      }
    });
  }
  onSidebarItemClick(item) {
    if (item.route) {
      this.router.navigate([item.route]);
    } else if (item.id) {
      if (item.id === "category") {
        this.router.navigate(["/masters/category"]);
      } else if (item.id === "status") {
        this.router.navigate(["/masters/status"]);
      } else if (item.id === "priority") {
        this.router.navigate(["/masters/priority"]);
      } else if (item.id === "urls-docs") {
        this.router.navigate(["/masters/urls-docs"]);
      } else if (item.id === "credentials") {
        this.router.navigate(["/masters/credentials"]);
      } else if (item.id === "users") {
        this.router.navigate(["/administration/users"]);
      } else if (item.id === "roles") {
        this.router.navigate(["/administration/roles"]);
      } else if (item.id === "permissions") {
        this.router.navigate(["/administration/permissions"]);
      } else {
        this.router.navigate([`/${item.id}`]);
      }
    }
  }
  onSidebarToggle(collapsed) {
    this.sidebarCollapsed = collapsed;
  }
  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }
  toggleUserDropdown() {
    this.showUserDropdown = !this.showUserDropdown;
    if (this.showUserDropdown) {
      this.calculateDropdownPosition();
    }
  }
  calculateDropdownPosition() {
    setTimeout(() => {
      const button = document.querySelector(".user-profile-menu");
      if (button) {
        const rect = button.getBoundingClientRect();
        this.dropdownTop = rect.bottom + 8;
        const dropdownWidth = 220;
        const screenPadding = 16;
        const rightPosition = window.innerWidth - rect.right;
        if (rightPosition + dropdownWidth > window.innerWidth - screenPadding) {
          this.dropdownRight = screenPadding;
        } else {
          this.dropdownRight = Math.max(screenPadding, rightPosition);
        }
      }
    }, 0);
  }
  checkAuthentication() {
    this.isAuthenticated = this.authService.isAuthenticated();
    console.log("App init - Is authenticated:", this.isAuthenticated);
    console.log("App init - Token exists:", this.authService.getToken() ? "Yes" : "No");
    if (this.isAuthenticated) {
      const storedAuth = this.authService.getStoredAuth();
      if (storedAuth && storedAuth.user) {
        this.currentUser = storedAuth.user;
        this.userDisplayName = `${storedAuth.user.first_name} ${storedAuth.user.last_name}`.trim() || storedAuth.user.username || storedAuth.user.email;
        if (storedAuth.roles && storedAuth.roles.length > 0) {
          this.userRole = storedAuth.roles[0];
        }
      }
      this.authService.getCurrentUser().subscribe({
        next: (auth) => {
          console.log("Current user loaded:", auth);
          if (auth && auth.user) {
            this.currentUser = auth.user;
            this.userDisplayName = `${auth.user.first_name} ${auth.user.last_name}`.trim() || auth.user.username || auth.user.email;
            if (auth.roles && auth.roles.length > 0) {
              this.userRole = auth.roles[0];
            }
          }
        },
        error: (error) => {
          console.error("GetCurrentUser error:", error);
          this.authService.clearAuthLocal();
          this.isAuthenticated = false;
          this.currentUser = null;
          this.userDisplayName = "Guest User";
          this.userRole = "Guest";
          if (this.router.url !== "/login" && !this.router.url.startsWith("/login")) {
            this.router.navigate(["/login"]);
          }
        }
      });
    } else {
      const currentUrl = this.router.url;
      console.log("Not authenticated, current URL:", currentUrl);
      if (currentUrl !== "/login" && !currentUrl.startsWith("/login")) {
        console.log("Redirecting to login");
        this.router.navigate(["/login"]);
      }
    }
  }
  onLogout() {
    console.log("Logout initiated");
    this.showUserDropdown = false;
    this.authService.clearAuthLocal();
    this.isAuthenticated = false;
    this.currentUser = null;
    this.userDisplayName = "Guest User";
    this.userRole = "Guest";
    this.router.navigate(["/login"]).then(() => {
      this.authService.logout().subscribe({
        next: () => console.log("Backend logout successful"),
        error: (error) => console.log("Backend logout failed (expected if token already cleared):", error)
      });
    });
  }
  onProfileClick() {
    this.showUserDropdown = false;
    console.log("Profile clicked");
  }
  onSettingsClick() {
    this.showUserDropdown = false;
    this.router.navigate(["/settings"]);
  }
  toggleNotificationsDropdown() {
    this.showNotificationsDropdown = !this.showNotificationsDropdown;
    if (this.showNotificationsDropdown) {
      this.calculateNotificationsPosition();
    }
  }
  calculateNotificationsPosition() {
    setTimeout(() => {
      const button = document.querySelector(".notifications-btn");
      if (button) {
        const rect = button.getBoundingClientRect();
        this.notificationsDropdownTop = rect.bottom + 8;
        const dropdownWidth = 500;
        const screenPadding = 16;
        const rightPosition = window.innerWidth - rect.right;
        if (rightPosition + dropdownWidth > window.innerWidth - screenPadding) {
          this.notificationsDropdownRight = screenPadding;
        } else {
          this.notificationsDropdownRight = Math.max(screenPadding, rightPosition - 140);
        }
      }
    }, 0);
  }
  onNotificationClick(notification) {
    if (!notification.read) {
      this.markAsRead(notification);
    }
    if (notification.actionUrl) {
      this.currentView = notification.actionUrl.substring(1);
      this.showNotificationsDropdown = false;
    }
  }
  markAsRead(notification) {
    notification.read = true;
  }
  markAllAsRead() {
    this.notifications.forEach((n) => n.read = true);
  }
  removeNotification(notification) {
    const index = this.notifications.findIndex((n) => n.id === notification.id);
    if (index > -1) {
      this.notifications.splice(index, 1);
    }
  }
  viewAllNotifications() {
    this.currentView = "notifications";
    this.showNotificationsDropdown = false;
  }
  getTimeAgo(timestamp) {
    const now = /* @__PURE__ */ new Date();
    const diff = now.getTime() - timestamp.getTime();
    const seconds = Math.floor(diff / 1e3);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    if (seconds < 60) {
      return "Just now";
    } else if (minutes < 60) {
      return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
    } else if (hours < 24) {
      return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
    } else if (days < 7) {
      return `${days} ${days === 1 ? "day" : "days"} ago`;
    } else {
      return timestamp.toLocaleDateString();
    }
  }
  toggleSearch() {
    this.showSearch = !this.showSearch;
    if (!this.showSearch) {
      this.searchQuery = "";
      this.searchResults = [];
    }
  }
  closeSearch() {
    this.showSearch = false;
    this.searchQuery = "";
    this.searchResults = [];
  }
  onSearchInput() {
    if (!this.searchQuery.trim()) {
      this.searchResults = [];
      return;
    }
    const query = this.searchQuery.toLowerCase().trim();
    const results = [];
    this.sidebarItems.forEach((item) => {
      if (item.label.toLowerCase().includes(query)) {
        results.push({
          id: item.id,
          type: "menu",
          title: item.label,
          subtitle: `Navigate to ${item.label}`,
          icon: item.icon,
          action: () => {
            this.currentView = item.id;
            this.closeSearch();
          }
        });
      }
    });
    if (query.includes("task") || query.includes("todo")) {
      results.unshift({
        id: "tasks-menu",
        type: "menu",
        title: "Tasks Management",
        subtitle: "View and manage all tasks",
        icon: "tasks",
        action: () => {
          this.currentView = "tasks";
          this.closeSearch();
        }
      });
    }
    if (query.includes("budget") || query.includes("money") || query.includes("expense")) {
      results.unshift({
        id: "budget-menu",
        type: "menu",
        title: "Budget Management",
        subtitle: "View and manage budget",
        icon: "dollar-sign",
        action: () => {
          this.currentView = "budget";
          this.closeSearch();
        }
      });
    }
    if (query.includes("setting") || query.includes("preference") || query.includes("config")) {
      results.unshift({
        id: "settings-menu",
        type: "menu",
        title: "Settings",
        subtitle: "Application settings and preferences",
        icon: "cog",
        action: () => {
          this.currentView = "settings";
          this.closeSearch();
        }
      });
    }
    if (query.includes("timer") || query.includes("stopwatch") || query.includes("clock")) {
      results.unshift({
        id: "timer-menu",
        type: "menu",
        title: "Timer & Stopwatch",
        subtitle: "Use timer or stopwatch",
        icon: "stopwatch",
        action: () => {
          this.currentView = "timer";
          this.closeSearch();
        }
      });
    }
    this.searchResults = results.slice(0, 8);
  }
  onSearchResultClick(result) {
    result.action();
  }
  quickAction(action) {
    switch (action) {
      case "new-task":
        this.currentView = "tasks";
        break;
      default:
        console.log("Quick action:", action);
    }
  }
  getCurrentMenuName() {
    if (this.currentView === "tasks") {
      return "Tasks Management";
    }
    if (this.currentView === "budget") {
      return "Budget Management";
    }
    if (this.currentView === "settings") {
      return "Settings";
    }
    if (this.currentView === "timer") {
      return "Timer & Stopwatch";
    }
    const mainItem = this.sidebarItems.find((item) => item.id === this.currentView);
    if (mainItem) {
      return mainItem.label;
    }
    for (const item of this.sidebarItems) {
      if (item.children) {
        const childItem = item.children.find((child) => child.id === this.currentView);
        if (childItem) {
          if (item.id === "masters") {
            return `${childItem.label} Master`;
          }
          if (item.id === "administration") {
            return `${childItem.label} Management`;
          }
          return childItem.label;
        }
      }
    }
    return this.title;
  }
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)(\u0275\u0275directiveInject(ThemeService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 5, vars: 4, consts: [["class", "app-container", 4, "ngIf"], [4, "ngIf"], [3, "showGlobalLoader", "fullScreen"], [1, "app-container"], [1, "app-header"], [1, "header-left"], [1, "app-branding"], ["title", "Click to toggle sidebar or right-click to change icon", 1, "app-logo", 3, "click"], [1, "fas"], [1, "app-name-wrapper"], [1, "app-name"], [1, "app-subtitle"], [1, "header-right"], [1, "notifications-container"], ["title", "Notifications", 1, "header-action-btn", "notifications-btn", 3, "click"], [1, "fas", "fa-bell"], ["class", "notification-badge", 4, "ngIf"], ["class", "notifications-dropdown", 3, "top", "right", "click", 4, "ngIf"], [1, "user-profile-menu", 3, "click"], ["title", "User Profile", 1, "user-avatar"], [1, "fas", "fa-user"], [1, "user-info"], [1, "user-name"], [1, "user-role"], [1, "fas", "fa-chevron-down", "dropdown-icon"], ["class", "user-dropdown", 3, "top", "right", "click", 4, "ngIf"], [1, "app-body"], [3, "itemClick", "toggleCollapse", "items", "collapsed"], [1, "main-content"], [1, "content-area"], [1, "notification-badge"], [1, "notifications-dropdown", 3, "click"], [1, "notifications-header"], [1, "notifications-title"], ["class", "mark-all-read-btn", 3, "click", 4, "ngIf"], ["class", "notifications-list", 4, "ngIf"], ["class", "notifications-empty", 4, "ngIf"], ["class", "notifications-footer", 4, "ngIf"], [1, "mark-all-read-btn", 3, "click"], [1, "notifications-list"], ["class", "notification-item", 3, "unread", "click", 4, "ngFor", "ngForOf"], [1, "notification-item", 3, "click"], [1, "notification-icon"], [1, "notification-content"], [1, "notification-title"], [1, "notification-message"], [1, "notification-time"], [1, "notification-actions"], ["class", "notification-action-btn", "title", "Mark as read", 3, "click", 4, "ngIf"], ["title", "Remove", 1, "notification-action-btn", "delete-btn", 3, "click"], [1, "fas", "fa-times"], ["title", "Mark as read", 1, "notification-action-btn", 3, "click"], [1, "fas", "fa-circle"], [1, "notifications-empty"], [1, "fas", "fa-bell-slash"], [1, "notifications-footer"], [1, "view-all-btn", 3, "click"], [1, "user-dropdown", 3, "click"], [1, "dropdown-header"], [1, "dropdown-avatar"], [1, "dropdown-user-info"], [1, "dropdown-name"], [1, "dropdown-email"], [1, "dropdown-divider"], [1, "dropdown-item", 3, "click"], [1, "fas", "fa-user-circle"], [1, "fas", "fa-cog"], [1, "dropdown-item", "logout-item", 3, "click"], [1, "fas", "fa-sign-out-alt"]], template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, AppComponent_div_0_Template, 33, 18, "div", 0)(1, AppComponent_router_outlet_1_Template, 1, 0, "router-outlet", 1);
      \u0275\u0275element(2, "app-toast-container")(3, "app-confirmation-dialog")(4, "app-loader", 2);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isAuthenticated);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isAuthenticated);
      \u0275\u0275advance(3);
      \u0275\u0275property("showGlobalLoader", true)("fullScreen", true);
    }
  }, dependencies: [RouterOutlet, CommonModule, NgForOf, NgIf, FormsModule, SidebarComponent, TimerStopwatchHeaderComponent, ToastContainerComponent, ConfirmationDialogComponent, LoaderComponent], styles: ['\n\n[_ngcontent-%COMP%]:root {\n  --primary-bg: #1a1a1a;\n  --secondary-bg: #2d2d2d;\n  --tertiary-bg: #3a3a3a;\n  --surface-bg: #2a2a2a;\n  --primary-accent: #4a9eff;\n  --secondary-accent: #7c3aed;\n  --success-color: #10b981;\n  --warning-color: #f59e0b;\n  --error-color: #ef4444;\n  --text-primary: #ffffff;\n  --text-secondary: #e5e5e5;\n  --text-muted: #a3a3a3;\n  --text-disabled: #6b7280;\n  --border-primary: #4a4a4a;\n  --border-secondary: #3a3a3a;\n  --border-accent: #5a5a5a;\n  --shadow-light: rgba(0, 0, 0, 0.1);\n  --shadow-medium: rgba(0, 0, 0, 0.2);\n  --shadow-heavy: rgba(0, 0, 0, 0.3);\n  --hover-bg: #3a3a3a;\n  --hover-accent: #5bb0ff;\n  --active-bg: #4a4a4a;\n  --active-accent: #3a8fdf;\n}\n.app-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background-color: var(--primary-bg);\n}\n.app-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 1.5rem;\n  padding-left: calc(1.5rem - 5px);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(20, 20, 20, 0.98) 0%,\n      rgba(35, 35, 35, 0.98) 100%);\n  border-bottom: 2px solid rgba(74, 158, 255, 0.3);\n  height: 66px;\n  min-height: 66px;\n  max-height: 66px;\n  width: 100%;\n  max-width: 100%;\n  box-sizing: border-box;\n  overflow: visible;\n  position: sticky;\n  top: 0;\n  z-index: 1040;\n  backdrop-filter: blur(25px) saturate(200%);\n  -webkit-backdrop-filter: blur(25px) saturate(200%);\n  box-shadow:\n    0 4px 30px rgba(0, 0, 0, 0.5),\n    0 0 2px rgba(74, 158, 255, 0.2),\n    inset 0 1px 0 rgba(255, 255, 255, 0.05);\n  border-top: 2px solid rgba(74, 158, 255, 0.15);\n  display: flex;\n  align-items: center;\n}\n.app-header[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(74, 158, 255, 0.4),\n      transparent);\n}\n.app-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .app-branding[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 3px 0;\n}\n.app-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .app-branding[_ngcontent-%COMP%]   .app-logo[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-accent) 0%,\n      var(--secondary-accent) 100%);\n  border-radius: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-primary);\n  font-size: 1.125rem;\n  box-shadow: 0 3px 10px rgba(74, 158, 255, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1);\n  transition: all 0.3s ease-in-out;\n  position: relative;\n  overflow: hidden;\n  cursor: pointer;\n}\n.app-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .app-branding[_ngcontent-%COMP%]   .app-logo[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n  transition: left 0.5s;\n}\n.app-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .app-branding[_ngcontent-%COMP%]   .app-logo[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px) scale(1.03);\n  box-shadow: 0 4px 14px rgba(74, 158, 255, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.15);\n}\n.app-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .app-branding[_ngcontent-%COMP%]   .app-logo[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n.app-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .app-branding[_ngcontent-%COMP%]   .app-name-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.app-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .app-branding[_ngcontent-%COMP%]   .app-name-wrapper[_ngcontent-%COMP%]   .app-name[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-size: 1.25rem;\n  font-weight: 700;\n  margin: 0;\n  padding-top: 2px;\n  line-height: 1.1;\n  letter-spacing: -0.3px;\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      rgba(255, 255, 255, 0.9) 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  text-shadow: 0 0 30px rgba(74, 158, 255, 0.2);\n}\n.app-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .app-branding[_ngcontent-%COMP%]   .app-name-wrapper[_ngcontent-%COMP%]   .app-subtitle[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  opacity: 0.9;\n  margin-top: -2px;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1.5rem;\n  align-items: center;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .header-action-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: 1px solid var(--border-primary);\n  border-radius: 0.5rem;\n  color: var(--text-secondary);\n  font-size: 1rem;\n  transition: all 0.3s ease-in-out;\n  cursor: pointer;\n  position: relative;\n  padding: 0.5rem 1rem;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .header-action-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(74, 158, 255, 0.1);\n  border-color: rgba(74, 158, 255, 0.3);\n  color: var(--primary-accent);\n  transform: translateY(-1px);\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .header-action-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .header-action-btn.notifications-btn[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  padding: 0;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .header-action-btn.notifications-btn[_ngcontent-%COMP%]   .notification-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -4px;\n  right: -4px;\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444 0%,\n      #dc2626 100%);\n  color: white;\n  font-size: 0.65rem;\n  font-weight: 700;\n  padding: 2px 6px;\n  border-radius: 9999px;\n  min-width: 18px;\n  height: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 8px rgba(239, 68, 68, 0.4);\n  border: 2px solid var(--primary-bg);\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .search-container.active[_ngcontent-%COMP%]   .search-toggle-btn[_ngcontent-%COMP%] {\n  background-color: rgba(74, 158, 255, 0.15);\n  border-color: rgba(74, 158, 255, 0.4);\n  color: var(--primary-accent);\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-toggle-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: 1px solid var(--border-primary);\n  border-radius: 0.5rem;\n  color: var(--text-secondary);\n  font-size: 1rem;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  width: 44px;\n  height: 44px;\n  position: relative;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-toggle-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(74, 158, 255, 0.1);\n  border-color: rgba(74, 158, 255, 0.3);\n  color: var(--primary-accent);\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-toggle-btn[_ngcontent-%COMP%]::after {\n  content: "Ctrl+K";\n  position: absolute;\n  bottom: -18px;\n  left: 50%;\n  transform: translateX(-50%);\n  font-size: 0.6rem;\n  color: var(--text-muted);\n  white-space: nowrap;\n  opacity: 0;\n  transition: opacity 0.3s ease-in-out;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-toggle-btn[_ngcontent-%COMP%]:hover::after {\n  opacity: 1;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 70px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 600px;\n  max-width: 90vw;\n  background: var(--tertiary-bg);\n  border: 1px solid var(--border-primary);\n  border-radius: 0.75rem;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);\n  z-index: 9999;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_dropdownFadeIn 0.2s ease-out;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 1rem;\n  border-bottom: 1px solid var(--border-primary);\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 1.5rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-muted);\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem 2rem 1rem 3rem;\n  background: var(--secondary-bg);\n  border: 2px solid var(--border-primary);\n  border-radius: 0.5rem;\n  color: var(--text-primary);\n  font-size: 1rem;\n  transition: all 0.3s ease-in-out;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-accent);\n  box-shadow: 0 0 0 3px rgba(74, 158, 255, 0.2);\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-muted);\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]   .search-close[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 1.5rem;\n  top: 50%;\n  transform: translateY(-50%);\n  background: transparent;\n  border: none;\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: 0.25rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: color 0.3s ease-in-out;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]   .search-close[_ngcontent-%COMP%]:hover {\n  color: var(--text-primary);\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%] {\n  max-height: 400px;\n  overflow-y: auto;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-result-item[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-result-item[_ngcontent-%COMP%]:hover {\n  background: rgba(74, 158, 255, 0.1);\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-result-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary-accent);\n  font-size: 1.125rem;\n  width: 24px;\n  text-align: center;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-result-item[_ngcontent-%COMP%]   .result-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-result-item[_ngcontent-%COMP%]   .result-content[_ngcontent-%COMP%]   .result-title[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-size: 0.875rem;\n  font-weight: 600;\n  margin-bottom: 2px;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-result-item[_ngcontent-%COMP%]   .result-content[_ngcontent-%COMP%]   .result-subtitle[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.75rem;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .search-empty[_ngcontent-%COMP%] {\n  padding: 3rem;\n  text-align: center;\n  color: var(--text-muted);\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .search-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 1rem;\n  opacity: 0.5;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .search-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%]   .quick-action-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e 0%,\n      #16a34a 100%);\n  border: none;\n  border-radius: 0.5rem;\n  color: white;\n  font-size: 1rem;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  width: 44px;\n  height: 44px;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%]   .quick-action-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(34, 197, 94, 0.4);\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .notifications-container[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: visible;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .notifications-container.active[_ngcontent-%COMP%]   .notifications-btn[_ngcontent-%COMP%] {\n  background-color: rgba(74, 158, 255, 0.15);\n  border-color: rgba(74, 158, 255, 0.4);\n  color: var(--primary-accent);\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .notifications-container[_ngcontent-%COMP%]   .notifications-dropdown[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 500px;\n  max-width: 90vw;\n  max-height: 500px;\n  background: var(--tertiary-bg);\n  border: 1px solid var(--border-primary);\n  border-radius: 0.75rem;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5), 0 2px 8px rgba(0, 0, 0, 0.3);\n  z-index: 9999;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  animation: _ngcontent-%COMP%_dropdownFadeIn 0.2s ease-out;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .notifications-container[_ngcontent-%COMP%]   .notifications-dropdown[_ngcontent-%COMP%]   .notifications-header[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid var(--border-primary);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(74, 158, 255, 0.1) 0%,\n      rgba(124, 58, 237, 0.1) 100%);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .notifications-container[_ngcontent-%COMP%]   .notifications-dropdown[_ngcontent-%COMP%]   .notifications-header[_ngcontent-%COMP%]   .notifications-title[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-size: 1rem;\n  font-weight: 600;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .notifications-container[_ngcontent-%COMP%]   .notifications-dropdown[_ngcontent-%COMP%]   .notifications-header[_ngcontent-%COMP%]   .notifications-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary-accent);\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .notifications-container[_ngcontent-%COMP%]   .notifications-dropdown[_ngcontent-%COMP%]   .notifications-header[_ngcontent-%COMP%]   .mark-all-read-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: var(--primary-accent);\n  font-size: 0.75rem;\n  font-weight: 500;\n  cursor: pointer;\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.375rem;\n  transition: all 0.3s ease-in-out;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .notifications-container[_ngcontent-%COMP%]   .notifications-dropdown[_ngcontent-%COMP%]   .notifications-header[_ngcontent-%COMP%]   .mark-all-read-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(74, 158, 255, 0.1);\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .notifications-container[_ngcontent-%COMP%]   .notifications-dropdown[_ngcontent-%COMP%]   .notifications-list[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n  max-height: 400px;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .notifications-container[_ngcontent-%COMP%]   .notifications-dropdown[_ngcontent-%COMP%]   .notifications-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .notifications-container[_ngcontent-%COMP%]   .notifications-dropdown[_ngcontent-%COMP%]   .notifications-list[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n  display: flex;\n  gap: 1rem;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  position: relative;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .notifications-container[_ngcontent-%COMP%]   .notifications-dropdown[_ngcontent-%COMP%]   .notifications-list[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]:hover {\n  background: rgba(74, 158, 255, 0.05);\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .notifications-container[_ngcontent-%COMP%]   .notifications-dropdown[_ngcontent-%COMP%]   .notifications-list[_ngcontent-%COMP%]   .notification-item.unread[_ngcontent-%COMP%] {\n  background: rgba(74, 158, 255, 0.03);\n  border-left: 3px solid var(--primary-accent);\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .notifications-container[_ngcontent-%COMP%]   .notifications-dropdown[_ngcontent-%COMP%]   .notifications-list[_ngcontent-%COMP%]   .notification-item.unread[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 6px;\n  height: 6px;\n  background: var(--primary-accent);\n  border-radius: 50%;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .notifications-container[_ngcontent-%COMP%]   .notifications-dropdown[_ngcontent-%COMP%]   .notifications-list[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .notification-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 1.125rem;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .notifications-container[_ngcontent-%COMP%]   .notifications-dropdown[_ngcontent-%COMP%]   .notifications-list[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .notification-icon.icon-info[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.15);\n  color: #3b82f6;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .notifications-container[_ngcontent-%COMP%]   .notifications-dropdown[_ngcontent-%COMP%]   .notifications-list[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .notification-icon.icon-success[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.15);\n  color: #22c55e;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .notifications-container[_ngcontent-%COMP%]   .notifications-dropdown[_ngcontent-%COMP%]   .notifications-list[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .notification-icon.icon-warning[_ngcontent-%COMP%] {\n  background: rgba(234, 179, 8, 0.15);\n  color: #eab308;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .notifications-container[_ngcontent-%COMP%]   .notifications-dropdown[_ngcontent-%COMP%]   .notifications-list[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .notification-icon.icon-error[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  color: #ef4444;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .notifications-container[_ngcontent-%COMP%]   .notifications-dropdown[_ngcontent-%COMP%]   .notifications-list[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .notification-icon.icon-task[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.15);\n  color: #7c3aed;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .notifications-container[_ngcontent-%COMP%]   .notifications-dropdown[_ngcontent-%COMP%]   .notifications-list[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .notifications-container[_ngcontent-%COMP%]   .notifications-dropdown[_ngcontent-%COMP%]   .notifications-list[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   .notification-title[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-size: 0.875rem;\n  font-weight: 600;\n  margin-bottom: 0.25rem;\n  line-height: 1.3;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .notifications-container[_ngcontent-%COMP%]   .notifications-dropdown[_ngcontent-%COMP%]   .notifications-list[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   .notification-message[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.75rem;\n  margin-bottom: 0.25rem;\n  line-height: 1.4;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .notifications-container[_ngcontent-%COMP%]   .notifications-dropdown[_ngcontent-%COMP%]   .notifications-list[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   .notification-time[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.7rem;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .notifications-container[_ngcontent-%COMP%]   .notifications-dropdown[_ngcontent-%COMP%]   .notifications-list[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .notification-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  align-items: center;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .notifications-container[_ngcontent-%COMP%]   .notifications-dropdown[_ngcontent-%COMP%]   .notifications-list[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .notification-actions[_ngcontent-%COMP%]   .notification-action-btn[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  background: transparent;\n  border: 1px solid var(--border-primary);\n  border-radius: 0.375rem;\n  color: var(--text-muted);\n  font-size: 0.75rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease-in-out;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .notifications-container[_ngcontent-%COMP%]   .notifications-dropdown[_ngcontent-%COMP%]   .notifications-list[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .notification-actions[_ngcontent-%COMP%]   .notification-action-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(74, 158, 255, 0.1);\n  border-color: var(--primary-accent);\n  color: var(--primary-accent);\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .notifications-container[_ngcontent-%COMP%]   .notifications-dropdown[_ngcontent-%COMP%]   .notifications-list[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .notification-actions[_ngcontent-%COMP%]   .notification-action-btn.delete-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n  border-color: var(--error-color);\n  color: var(--error-color);\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .notifications-container[_ngcontent-%COMP%]   .notifications-dropdown[_ngcontent-%COMP%]   .notifications-empty[_ngcontent-%COMP%] {\n  padding: 3rem;\n  text-align: center;\n  color: var(--text-muted);\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .notifications-container[_ngcontent-%COMP%]   .notifications-dropdown[_ngcontent-%COMP%]   .notifications-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n  opacity: 0.5;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .notifications-container[_ngcontent-%COMP%]   .notifications-dropdown[_ngcontent-%COMP%]   .notifications-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  margin-bottom: 0.25rem;\n  color: var(--text-secondary);\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .notifications-container[_ngcontent-%COMP%]   .notifications-dropdown[_ngcontent-%COMP%]   .notifications-empty[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .notifications-container[_ngcontent-%COMP%]   .notifications-dropdown[_ngcontent-%COMP%]   .notifications-footer[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  border-top: 1px solid var(--border-primary);\n  background: rgba(74, 158, 255, 0.03);\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .notifications-container[_ngcontent-%COMP%]   .notifications-dropdown[_ngcontent-%COMP%]   .notifications-footer[_ngcontent-%COMP%]   .view-all-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.5rem 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-accent) 0%,\n      var(--secondary-accent) 100%);\n  border: none;\n  border-radius: 0.5rem;\n  color: var(--text-primary);\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .notifications-container[_ngcontent-%COMP%]   .notifications-dropdown[_ngcontent-%COMP%]   .notifications-footer[_ngcontent-%COMP%]   .view-all-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(74, 158, 255, 0.3);\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .user-profile-menu[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.25rem 1rem 0.25rem 0.25rem;\n  background: rgba(74, 158, 255, 0.05);\n  border: 1px solid rgba(74, 158, 255, 0.2);\n  border-radius: 0.75rem;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  position: relative;\n  overflow: visible;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .user-profile-menu[_ngcontent-%COMP%]:hover {\n  background: rgba(74, 158, 255, 0.1);\n  border-color: rgba(74, 158, 255, 0.4);\n  transform: translateY(-1px);\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .user-profile-menu.active[_ngcontent-%COMP%] {\n  background: rgba(74, 158, 255, 0.15);\n  border-color: rgba(74, 158, 255, 0.5);\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .user-profile-menu[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-accent) 0%,\n      var(--secondary-accent) 100%);\n  border-radius: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-primary);\n  font-size: 1rem;\n  box-shadow: 0 2px 8px rgba(74, 158, 255, 0.25);\n  flex-shrink: 0;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .user-profile-menu[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .user-profile-menu[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n  min-width: 0;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .user-profile-menu[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-size: 0.875rem;\n  font-weight: 600;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 1.2;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .user-profile-menu[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-role[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.75rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 1.2;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .user-profile-menu[_ngcontent-%COMP%]   .dropdown-icon[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.75rem;\n  transition: transform 0.3s ease-in-out;\n  flex-shrink: 0;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .user-profile-menu[_ngcontent-%COMP%]   .dropdown-icon.rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .user-profile-menu[_ngcontent-%COMP%]:hover   .dropdown-icon[_ngcontent-%COMP%]:not(.rotated) {\n  transform: translateY(1px);\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .user-profile-menu[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%] {\n  position: fixed;\n  min-width: 220px;\n  max-width: 280px;\n  background: var(--tertiary-bg);\n  border: 1px solid var(--border-primary);\n  border-radius: 0.75rem;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5), 0 2px 8px rgba(0, 0, 0, 0.3);\n  z-index: 9999;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_dropdownFadeIn 0.2s ease-out;\n  margin-top: 4px;\n}\n@keyframes _ngcontent-%COMP%_dropdownFadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .user-profile-menu[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%] {\n  padding: 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(74, 158, 255, 0.1) 0%,\n      rgba(124, 58, 237, 0.1) 100%);\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .user-profile-menu[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%]   .dropdown-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-accent) 0%,\n      var(--secondary-accent) 100%);\n  border-radius: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-primary);\n  font-size: 1rem;\n  box-shadow: 0 2px 8px rgba(74, 158, 255, 0.25);\n  flex-shrink: 0;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .user-profile-menu[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%]   .dropdown-user-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .user-profile-menu[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%]   .dropdown-user-info[_ngcontent-%COMP%]   .dropdown-name[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-size: 0.875rem;\n  font-weight: 600;\n  margin-bottom: 2px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .user-profile-menu[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%]   .dropdown-user-info[_ngcontent-%COMP%]   .dropdown-email[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.75rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .user-profile-menu[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   .dropdown-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: var(--border-primary);\n  margin: 0.25rem 0;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .user-profile-menu[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  padding: 1rem;\n  color: var(--text-secondary);\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .user-profile-menu[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 20px;\n  text-align: center;\n  color: var(--text-muted);\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .user-profile-menu[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background: rgba(74, 158, 255, 0.1);\n  color: var(--text-primary);\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .user-profile-menu[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: var(--primary-accent);\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .user-profile-menu[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   .dropdown-item.logout-item[_ngcontent-%COMP%] {\n  color: var(--error-color);\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .user-profile-menu[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   .dropdown-item.logout-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--error-color);\n}\n.app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .user-profile-menu[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   .dropdown-item.logout-item[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n  color: var(--error-color);\n}\n.icon-options-demo[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n.icon-options-demo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-size: 1.5rem;\n  margin-bottom: 0.5rem;\n}\n.icon-options-demo[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  margin-bottom: 2rem;\n}\n.icon-options-demo[_ngcontent-%COMP%]   .icon-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.icon-options-demo[_ngcontent-%COMP%]   .icon-grid[_ngcontent-%COMP%]   .icon-option[_ngcontent-%COMP%] {\n  background-color: var(--secondary-bg);\n  border: 1px solid var(--border-primary);\n  border-radius: 0.75rem;\n  box-shadow: 0 1px 2px 0 var(--shadow-light);\n  transition: all 0.3s ease-in-out;\n  box-shadow: 0 10px 15px -3px var(--shadow-medium), 0 4px 6px -2px var(--shadow-light);\n  padding: 1.5rem;\n  border-radius: 0.75rem;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  border: 2px solid transparent;\n}\n.icon-options-demo[_ngcontent-%COMP%]   .icon-grid[_ngcontent-%COMP%]   .icon-option[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 6px -1px var(--shadow-light), 0 2px 4px -1px var(--shadow-light);\n  border-color: var(--border-accent);\n}\n.icon-options-demo[_ngcontent-%COMP%]   .icon-grid[_ngcontent-%COMP%]   .icon-option[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 20px 25px -5px var(--shadow-medium), 0 10px 10px -5px var(--shadow-light);\n  transform: translateY(-2px);\n}\n.icon-options-demo[_ngcontent-%COMP%]   .icon-grid[_ngcontent-%COMP%]   .icon-option[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 10px 15px -3px var(--shadow-medium), 0 4px 6px -2px var(--shadow-light);\n  border-color: rgba(74, 158, 255, 0.3);\n}\n.icon-options-demo[_ngcontent-%COMP%]   .icon-grid[_ngcontent-%COMP%]   .icon-option.active[_ngcontent-%COMP%] {\n  border-color: var(--primary-accent);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(74, 158, 255, 0.1) 0%,\n      rgba(124, 58, 237, 0.1) 100%);\n}\n.icon-options-demo[_ngcontent-%COMP%]   .icon-grid[_ngcontent-%COMP%]   .icon-option.active[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-accent) 0%,\n      var(--secondary-accent) 100%);\n  box-shadow: 0 4px 16px rgba(74, 158, 255, 0.4);\n}\n.icon-options-demo[_ngcontent-%COMP%]   .icon-grid[_ngcontent-%COMP%]   .icon-option[_ngcontent-%COMP%]   .icon-preview[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 1rem;\n}\n.icon-options-demo[_ngcontent-%COMP%]   .icon-grid[_ngcontent-%COMP%]   .icon-option[_ngcontent-%COMP%]   .icon-preview[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(74, 158, 255, 0.2) 0%,\n      rgba(124, 58, 237, 0.2) 100%);\n  border-radius: 0.75rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-primary);\n  font-size: 2rem;\n  transition: all 0.3s ease-in-out;\n}\n.icon-options-demo[_ngcontent-%COMP%]   .icon-grid[_ngcontent-%COMP%]   .icon-option[_ngcontent-%COMP%]   .icon-info[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.icon-options-demo[_ngcontent-%COMP%]   .icon-grid[_ngcontent-%COMP%]   .icon-option[_ngcontent-%COMP%]   .icon-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-size: 1rem;\n  font-weight: 600;\n  margin: 0 0 0.25rem 0;\n  text-transform: capitalize;\n}\n.icon-options-demo[_ngcontent-%COMP%]   .icon-grid[_ngcontent-%COMP%]   .icon-option[_ngcontent-%COMP%]   .icon-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.875rem;\n  margin: 0;\n  line-height: 1.4;\n}\n.icon-options-demo[_ngcontent-%COMP%]   .icon-selection-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  padding-top: 1.5rem;\n  border-top: 1px solid var(--border-primary);\n}\n.icon-options-demo[_ngcontent-%COMP%]   .icon-selection-actions[_ngcontent-%COMP%]   .btn-apply[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5rem 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.5rem;\n  font-family:\n    "Inter",\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  font-size: 0.875rem;\n  font-weight: 500;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.15s ease-in-out;\n  outline: none;\n  background-color: var(--primary-accent);\n  color: var(--text-primary);\n  border-color: var(--primary-accent);\n  padding: 1rem 2rem;\n  font-weight: 600;\n}\n.icon-options-demo[_ngcontent-%COMP%]   .icon-selection-actions[_ngcontent-%COMP%]   .btn-apply[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(74, 158, 255, 0.3);\n}\n.icon-options-demo[_ngcontent-%COMP%]   .icon-selection-actions[_ngcontent-%COMP%]   .btn-apply[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.icon-options-demo[_ngcontent-%COMP%]   .icon-selection-actions[_ngcontent-%COMP%]   .btn-apply[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: var(--hover-accent);\n  border-color: var(--hover-accent);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 6px -1px var(--shadow-light), 0 2px 4px -1px var(--shadow-light);\n}\n.icon-options-demo[_ngcontent-%COMP%]   .icon-selection-actions[_ngcontent-%COMP%]   .btn-apply[_ngcontent-%COMP%]:active:not(:disabled) {\n  background-color: var(--active-accent);\n  border-color: var(--active-accent);\n  transform: translateY(0);\n}\n.icon-options-demo[_ngcontent-%COMP%]   .icon-selection-actions[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5rem 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.5rem;\n  font-family:\n    "Inter",\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  font-size: 0.875rem;\n  font-weight: 500;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.15s ease-in-out;\n  outline: none;\n  background-color: transparent;\n  color: var(--text-secondary);\n  border-color: var(--border-primary);\n  padding: 1rem 2rem;\n  font-weight: 600;\n}\n.icon-options-demo[_ngcontent-%COMP%]   .icon-selection-actions[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(74, 158, 255, 0.3);\n}\n.icon-options-demo[_ngcontent-%COMP%]   .icon-selection-actions[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.icon-options-demo[_ngcontent-%COMP%]   .icon-selection-actions[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: var(--hover-bg);\n  border-color: var(--border-accent);\n}\n.icon-options-demo[_ngcontent-%COMP%]   .icon-selection-actions[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%]:active:not(:disabled) {\n  background-color: var(--active-bg);\n}\n.app-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  width: 100%;\n  overflow: hidden;\n}\n.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-left: 280px;\n  transition: margin-left 0.3s ease-in-out;\n  display: flex;\n  flex-direction: column;\n  width: calc(100% - 280px);\n  max-width: calc(100% - 280px);\n  overflow-x: hidden;\n  box-sizing: border-box;\n  min-height: calc(100vh - 66px);\n}\n.main-content.sidebar-collapsed[_ngcontent-%COMP%] {\n  margin-left: 69px;\n  width: calc(100% - 69px);\n  max-width: calc(100% - 69px);\n}\n.content-area[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n  width: 100%;\n  max-width: 100%;\n  box-sizing: border-box;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.content-area[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.content-area[_ngcontent-%COMP%]:has(app-notes) {\n  overflow: hidden;\n}\n.welcome-section[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 2rem;\n}\n.welcome-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n}\n.welcome-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 1.125rem;\n  margin-bottom: 2rem;\n}\n.feature-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n  margin-top: 2rem;\n}\n.feature-cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: var(--secondary-bg);\n  border: 1px solid var(--border-primary);\n  border-radius: 0.75rem;\n  box-shadow: 0 1px 2px 0 var(--shadow-light);\n  transition: all 0.3s ease-in-out;\n  box-shadow: 0 10px 15px -3px var(--shadow-medium), 0 4px 6px -2px var(--shadow-light);\n  padding: 2rem;\n  text-align: center;\n}\n.feature-cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 6px -1px var(--shadow-light), 0 2px 4px -1px var(--shadow-light);\n  border-color: var(--border-accent);\n}\n.feature-cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 20px 25px -5px var(--shadow-medium), 0 10px 10px -5px var(--shadow-light);\n  transform: translateY(-2px);\n}\n.feature-cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-size: 1.125rem;\n  margin-bottom: 1rem;\n}\n.feature-cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 1rem;\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .app-body[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .main-content[_ngcontent-%COMP%] {\n    margin-left: 0;\n    width: 100%;\n    max-width: 100%;\n  }\n  .main-content.sidebar-collapsed[_ngcontent-%COMP%] {\n    margin-left: 0;\n    width: 100%;\n    max-width: 100%;\n  }\n  .app-header[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n    height: 62px;\n    min-height: 62px;\n    max-height: 62px;\n  }\n  .app-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .app-branding[_ngcontent-%COMP%] {\n    padding: 3px 0;\n    gap: 0.5rem;\n  }\n  .app-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .app-branding[_ngcontent-%COMP%]   .app-logo[_ngcontent-%COMP%] {\n    width: 36px;\n    height: 36px;\n    font-size: 1rem;\n  }\n  .app-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .app-branding[_ngcontent-%COMP%]   .app-name-wrapper[_ngcontent-%COMP%] {\n    gap: 1px;\n  }\n  .app-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .app-branding[_ngcontent-%COMP%]   .app-name-wrapper[_ngcontent-%COMP%]   .app-name[_ngcontent-%COMP%] {\n    font-size: 1.125rem;\n    padding-top: 2px;\n  }\n  .app-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .app-branding[_ngcontent-%COMP%]   .app-name-wrapper[_ngcontent-%COMP%]   .app-subtitle[_ngcontent-%COMP%] {\n    font-size: 0.65rem;\n    margin-top: 0;\n  }\n  .app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%] {\n    gap: 0.5rem;\n  }\n  .app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .user-profile-menu[_ngcontent-%COMP%] {\n    padding: 0.25rem;\n  }\n  .app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .user-profile-menu[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .user-profile-menu[_ngcontent-%COMP%]   .dropdown-icon[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .user-profile-menu[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n  }\n  .app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .user-profile-menu[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%] {\n    min-width: 200px;\n    max-width: 240px;\n  }\n  .app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .notifications-btn[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n  .app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .notifications-container[_ngcontent-%COMP%]   .notifications-dropdown[_ngcontent-%COMP%] {\n    width: calc(100vw - 32px);\n    max-width: 500px;\n    right: 16px !important;\n  }\n  .app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .notifications-container[_ngcontent-%COMP%]   .notifications-dropdown[_ngcontent-%COMP%]   .notifications-list[_ngcontent-%COMP%] {\n    max-height: 300px;\n  }\n  .app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%] {\n    left: 16px !important;\n    right: 16px !important;\n    transform: none;\n    width: calc(100vw - 32px);\n    max-width: 100%;\n  }\n  .app-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%]   .quick-action-btn[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n  .content-area[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .feature-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n}\n/*# sourceMappingURL=app.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", standalone: true, imports: [RouterOutlet, CommonModule, FormsModule, SidebarComponent, TimerStopwatchHeaderComponent, ToastContainerComponent, ConfirmationDialogComponent, LoaderComponent], template: `<!-- Main Application - Only show if authenticated -->\r
<div class="app-container" *ngIf="isAuthenticated">\r
  <!-- Header -->\r
  <header class="app-header">\r
    <div class="header-left">\r
      <div class="app-branding">\r
        <div class="app-logo" (click)="toggleSidebar()" title="Click to toggle sidebar or right-click to change icon">\r
          <i class="fas" [class]="'fa-' + selectedIcon"></i>\r
        </div>\r
        <div class="app-name-wrapper">\r
          <h1 class="app-name">OmniPlanner</h1>\r
          <span class="app-subtitle">{{ getCurrentMenuName() }}</span>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="header-right">\r
      <!-- Search -->\r
      <!-- <div class="search-container" [class.active]="showSearch">\r
        <button class="search-toggle-btn" (click)="toggleSearch()" title="Search">\r
          <i class="fas fa-search"></i>\r
        </button>\r
        <div class="search-dropdown" *ngIf="showSearch" (click)="$event.stopPropagation()">\r
          <div class="search-input-wrapper">\r
            <i class="fas fa-search search-icon"></i>\r
            <input \r
              type="text" \r
              class="search-input"\r
              placeholder="Search tasks, budget, reports..."\r
              [(ngModel)]="searchQuery"\r
              (input)="onSearchInput()"\r
              (keydown.esc)="closeSearch()"\r
              autofocus>\r
            <button class="search-close" (click)="closeSearch()" title="Close">\r
              <i class="fas fa-times"></i>\r
            </button>\r
          </div>\r
          <div class="search-results" *ngIf="searchQuery && searchResults.length > 0">\r
            <div class="search-result-item" \r
                 *ngFor="let result of searchResults"\r
                 (click)="onSearchResultClick(result)">\r
              <i class="fas" [class]="'fa-' + result.icon"></i>\r
              <div class="result-content">\r
                <div class="result-title">{{ result.title }}</div>\r
                <div class="result-subtitle">{{ result.subtitle }}</div>\r
              </div>\r
            </div>\r
          </div>\r
          <div class="search-empty" *ngIf="searchQuery && searchResults.length === 0">\r
            <i class="fas fa-search"></i>\r
            <p>No results found</p>\r
          </div>\r
        </div>\r
      </div> -->\r
\r
      <!-- Quick Actions -->\r
      <!-- <div class="quick-actions">\r
        <button class="quick-action-btn" (click)="quickAction('new-task')" title="New Task">\r
          <i class="fas fa-plus"></i>\r
        </button>\r
      </div> -->\r
\r
      <!-- Timer & Stopwatch Widget -->\r
      <app-timer-stopwatch-header></app-timer-stopwatch-header>\r
\r
      <!-- Notifications -->\r
      <div class="notifications-container" [class.active]="showNotificationsDropdown">\r
        <button class="header-action-btn notifications-btn" title="Notifications" (click)="toggleNotificationsDropdown()">\r
          <i class="fas fa-bell"></i>\r
          <span class="notification-badge" *ngIf="unreadCount > 0">{{ unreadCount }}</span>\r
        </button>\r
        \r
        <!-- Notifications Dropdown -->\r
        <div class="notifications-dropdown" *ngIf="showNotificationsDropdown" (click)="$event.stopPropagation()" \r
             [style.top.px]="notificationsDropdownTop" [style.right.px]="notificationsDropdownRight">\r
          <div class="notifications-header">\r
            <h3 class="notifications-title">\r
              <i class="fas fa-bell"></i>\r
              Notifications\r
            </h3>\r
            <button class="mark-all-read-btn" *ngIf="unreadCount > 0" (click)="markAllAsRead()">\r
              Mark all as read\r
            </button>\r
          </div>\r
          \r
          <div class="notifications-list" *ngIf="notifications.length > 0">\r
            <div class="notification-item" \r
                 *ngFor="let notification of notifications" \r
                 [class.unread]="!notification.read"\r
                 (click)="onNotificationClick(notification)">\r
              <div class="notification-icon" [class]="'icon-' + notification.type">\r
                <i class="fas" [class]="'fa-' + notification.icon"></i>\r
              </div>\r
              <div class="notification-content">\r
                <div class="notification-title">{{ notification.title }}</div>\r
                <div class="notification-message">{{ notification.message }}</div>\r
                <div class="notification-time">{{ getTimeAgo(notification.timestamp) }}</div>\r
              </div>\r
              <div class="notification-actions">\r
                <button class="notification-action-btn" *ngIf="!notification.read" (click)="markAsRead(notification); $event.stopPropagation()" title="Mark as read">\r
                  <i class="fas fa-circle"></i>\r
                </button>\r
                <button class="notification-action-btn delete-btn" (click)="removeNotification(notification); $event.stopPropagation()" title="Remove">\r
                  <i class="fas fa-times"></i>\r
                </button>\r
              </div>\r
            </div>\r
          </div>\r
          \r
          <div class="notifications-empty" *ngIf="notifications.length === 0">\r
            <i class="fas fa-bell-slash"></i>\r
            <p>No notifications</p>\r
            <span>You're all caught up!</span>\r
          </div>\r
          \r
          <div class="notifications-footer" *ngIf="notifications.length > 0">\r
            <button class="view-all-btn" (click)="viewAllNotifications()">\r
              View All Notifications\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <!-- User Profile -->\r
      <div class="user-profile-menu" [class.active]="showUserDropdown" (click)="toggleUserDropdown()">\r
        <div class="user-avatar" title="User Profile">\r
          <i class="fas fa-user"></i>\r
        </div>\r
        <div class="user-info">\r
          <span class="user-name">{{ userDisplayName }}</span>\r
          <span class="user-role">{{ userRole }}</span>\r
        </div>\r
        <i class="fas fa-chevron-down dropdown-icon" [class.rotated]="showUserDropdown"></i>\r
        \r
        <!-- Dropdown Menu -->\r
        <div class="user-dropdown" *ngIf="showUserDropdown" (click)="$event.stopPropagation()" [style.top.px]="dropdownTop" [style.right.px]="dropdownRight">\r
          <div class="dropdown-header">\r
            <div class="dropdown-avatar">\r
              <i class="fas fa-user"></i>\r
            </div>\r
            <div class="dropdown-user-info">\r
              <div class="dropdown-name">{{ userDisplayName }}</div>\r
              <div class="dropdown-email">{{ currentUser?.email || 'No email' }}</div>\r
            </div>\r
          </div>\r
          <div class="dropdown-divider"></div>\r
          <div class="dropdown-item" (click)="onProfileClick()">\r
            <i class="fas fa-user-circle"></i>\r
            <span>My Profile</span>\r
          </div>\r
          <div class="dropdown-item" (click)="onSettingsClick()">\r
            <i class="fas fa-cog"></i>\r
            <span>Settings</span>\r
          </div>\r
          <div class="dropdown-divider"></div>\r
          <div class="dropdown-item logout-item" (click)="onLogout()">\r
            <i class="fas fa-sign-out-alt"></i>\r
            <span>Logout</span>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </header>\r
\r
  <!-- App Body (Sidebar + Content) -->\r
  <div class="app-body">\r
    <!-- Sidebar -->\r
    <app-sidebar \r
      [items]="filteredSidebarItems"\r
      [collapsed]="sidebarCollapsed"\r
      (itemClick)="onSidebarItemClick($event)"\r
      (toggleCollapse)="onSidebarToggle($event)"\r
      >\r
    </app-sidebar>\r
\r
    <!-- Main Content -->\r
    <div class="main-content" [class.sidebar-collapsed]="sidebarCollapsed">\r
      <!-- Content Area -->\r
      <main class="content-area">\r
        <!-- Router outlet for all components -->\r
        <router-outlet></router-outlet>\r
      </main>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Router outlet for login page (shown when not authenticated) -->\r
<router-outlet *ngIf="!isAuthenticated"></router-outlet>\r
\r
<!-- Toast, Dialog, and Loader components (always available) -->\r
<app-toast-container></app-toast-container>\r
<app-confirmation-dialog></app-confirmation-dialog>\r
<app-loader [showGlobalLoader]="true" [fullScreen]="true"></app-loader>`, styles: ['/* src/app/app.scss */\n:root {\n  --primary-bg: #1a1a1a;\n  --secondary-bg: #2d2d2d;\n  --tertiary-bg: #3a3a3a;\n  --surface-bg: #2a2a2a;\n  --primary-accent: #4a9eff;\n  --secondary-accent: #7c3aed;\n  --success-color: #10b981;\n  --warning-color: #f59e0b;\n  --error-color: #ef4444;\n  --text-primary: #ffffff;\n  --text-secondary: #e5e5e5;\n  --text-muted: #a3a3a3;\n  --text-disabled: #6b7280;\n  --border-primary: #4a4a4a;\n  --border-secondary: #3a3a3a;\n  --border-accent: #5a5a5a;\n  --shadow-light: rgba(0, 0, 0, 0.1);\n  --shadow-medium: rgba(0, 0, 0, 0.2);\n  --shadow-heavy: rgba(0, 0, 0, 0.3);\n  --hover-bg: #3a3a3a;\n  --hover-accent: #5bb0ff;\n  --active-bg: #4a4a4a;\n  --active-accent: #3a8fdf;\n}\n.app-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background-color: var(--primary-bg);\n}\n.app-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 1.5rem;\n  padding-left: calc(1.5rem - 5px);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(20, 20, 20, 0.98) 0%,\n      rgba(35, 35, 35, 0.98) 100%);\n  border-bottom: 2px solid rgba(74, 158, 255, 0.3);\n  height: 66px;\n  min-height: 66px;\n  max-height: 66px;\n  width: 100%;\n  max-width: 100%;\n  box-sizing: border-box;\n  overflow: visible;\n  position: sticky;\n  top: 0;\n  z-index: 1040;\n  backdrop-filter: blur(25px) saturate(200%);\n  -webkit-backdrop-filter: blur(25px) saturate(200%);\n  box-shadow:\n    0 4px 30px rgba(0, 0, 0, 0.5),\n    0 0 2px rgba(74, 158, 255, 0.2),\n    inset 0 1px 0 rgba(255, 255, 255, 0.05);\n  border-top: 2px solid rgba(74, 158, 255, 0.15);\n  display: flex;\n  align-items: center;\n}\n.app-header::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(74, 158, 255, 0.4),\n      transparent);\n}\n.app-header .header-left .app-branding {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 3px 0;\n}\n.app-header .header-left .app-branding .app-logo {\n  width: 40px;\n  height: 40px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-accent) 0%,\n      var(--secondary-accent) 100%);\n  border-radius: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-primary);\n  font-size: 1.125rem;\n  box-shadow: 0 3px 10px rgba(74, 158, 255, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1);\n  transition: all 0.3s ease-in-out;\n  position: relative;\n  overflow: hidden;\n  cursor: pointer;\n}\n.app-header .header-left .app-branding .app-logo::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n  transition: left 0.5s;\n}\n.app-header .header-left .app-branding .app-logo:hover {\n  transform: translateY(-1px) scale(1.03);\n  box-shadow: 0 4px 14px rgba(74, 158, 255, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.15);\n}\n.app-header .header-left .app-branding .app-logo:hover::before {\n  left: 100%;\n}\n.app-header .header-left .app-branding .app-name-wrapper {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.app-header .header-left .app-branding .app-name-wrapper .app-name {\n  color: var(--text-primary);\n  font-size: 1.25rem;\n  font-weight: 700;\n  margin: 0;\n  padding-top: 2px;\n  line-height: 1.1;\n  letter-spacing: -0.3px;\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      rgba(255, 255, 255, 0.9) 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  text-shadow: 0 0 30px rgba(74, 158, 255, 0.2);\n}\n.app-header .header-left .app-branding .app-name-wrapper .app-subtitle {\n  color: var(--text-muted);\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  opacity: 0.9;\n  margin-top: -2px;\n}\n.app-header .header-right {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1.5rem;\n  align-items: center;\n}\n.app-header .header-right .header-action-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: 1px solid var(--border-primary);\n  border-radius: 0.5rem;\n  color: var(--text-secondary);\n  font-size: 1rem;\n  transition: all 0.3s ease-in-out;\n  cursor: pointer;\n  position: relative;\n  padding: 0.5rem 1rem;\n}\n.app-header .header-right .header-action-btn:hover {\n  background-color: rgba(74, 158, 255, 0.1);\n  border-color: rgba(74, 158, 255, 0.3);\n  color: var(--primary-accent);\n  transform: translateY(-1px);\n}\n.app-header .header-right .header-action-btn i {\n  font-size: 1.125rem;\n}\n.app-header .header-right .header-action-btn.notifications-btn {\n  width: 44px;\n  height: 44px;\n  padding: 0;\n}\n.app-header .header-right .header-action-btn.notifications-btn .notification-badge {\n  position: absolute;\n  top: -4px;\n  right: -4px;\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444 0%,\n      #dc2626 100%);\n  color: white;\n  font-size: 0.65rem;\n  font-weight: 700;\n  padding: 2px 6px;\n  border-radius: 9999px;\n  min-width: 18px;\n  height: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 8px rgba(239, 68, 68, 0.4);\n  border: 2px solid var(--primary-bg);\n}\n.app-header .header-right .search-container {\n  position: relative;\n}\n.app-header .header-right .search-container.active .search-toggle-btn {\n  background-color: rgba(74, 158, 255, 0.15);\n  border-color: rgba(74, 158, 255, 0.4);\n  color: var(--primary-accent);\n}\n.app-header .header-right .search-container .search-toggle-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: 1px solid var(--border-primary);\n  border-radius: 0.5rem;\n  color: var(--text-secondary);\n  font-size: 1rem;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  width: 44px;\n  height: 44px;\n  position: relative;\n}\n.app-header .header-right .search-container .search-toggle-btn:hover {\n  background-color: rgba(74, 158, 255, 0.1);\n  border-color: rgba(74, 158, 255, 0.3);\n  color: var(--primary-accent);\n}\n.app-header .header-right .search-container .search-toggle-btn::after {\n  content: "Ctrl+K";\n  position: absolute;\n  bottom: -18px;\n  left: 50%;\n  transform: translateX(-50%);\n  font-size: 0.6rem;\n  color: var(--text-muted);\n  white-space: nowrap;\n  opacity: 0;\n  transition: opacity 0.3s ease-in-out;\n}\n.app-header .header-right .search-container .search-toggle-btn:hover::after {\n  opacity: 1;\n}\n.app-header .header-right .search-container .search-dropdown {\n  position: fixed;\n  top: 70px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 600px;\n  max-width: 90vw;\n  background: var(--tertiary-bg);\n  border: 1px solid var(--border-primary);\n  border-radius: 0.75rem;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);\n  z-index: 9999;\n  overflow: hidden;\n  animation: dropdownFadeIn 0.2s ease-out;\n}\n.app-header .header-right .search-container .search-dropdown .search-input-wrapper {\n  position: relative;\n  padding: 1rem;\n  border-bottom: 1px solid var(--border-primary);\n}\n.app-header .header-right .search-container .search-dropdown .search-input-wrapper .search-icon {\n  position: absolute;\n  left: 1.5rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-muted);\n}\n.app-header .header-right .search-container .search-dropdown .search-input-wrapper .search-input {\n  width: 100%;\n  padding: 1rem 2rem 1rem 3rem;\n  background: var(--secondary-bg);\n  border: 2px solid var(--border-primary);\n  border-radius: 0.5rem;\n  color: var(--text-primary);\n  font-size: 1rem;\n  transition: all 0.3s ease-in-out;\n}\n.app-header .header-right .search-container .search-dropdown .search-input-wrapper .search-input:focus {\n  outline: none;\n  border-color: var(--primary-accent);\n  box-shadow: 0 0 0 3px rgba(74, 158, 255, 0.2);\n}\n.app-header .header-right .search-container .search-dropdown .search-input-wrapper .search-input::placeholder {\n  color: var(--text-muted);\n}\n.app-header .header-right .search-container .search-dropdown .search-input-wrapper .search-close {\n  position: absolute;\n  right: 1.5rem;\n  top: 50%;\n  transform: translateY(-50%);\n  background: transparent;\n  border: none;\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: 0.25rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: color 0.3s ease-in-out;\n}\n.app-header .header-right .search-container .search-dropdown .search-input-wrapper .search-close:hover {\n  color: var(--text-primary);\n}\n.app-header .header-right .search-container .search-dropdown .search-results {\n  max-height: 400px;\n  overflow-y: auto;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.app-header .header-right .search-container .search-dropdown .search-results::-webkit-scrollbar {\n  display: none;\n}\n.app-header .header-right .search-container .search-dropdown .search-results .search-result-item {\n  padding: 1rem 1.5rem;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n}\n.app-header .header-right .search-container .search-dropdown .search-results .search-result-item:hover {\n  background: rgba(74, 158, 255, 0.1);\n}\n.app-header .header-right .search-container .search-dropdown .search-results .search-result-item i {\n  color: var(--primary-accent);\n  font-size: 1.125rem;\n  width: 24px;\n  text-align: center;\n}\n.app-header .header-right .search-container .search-dropdown .search-results .search-result-item .result-content {\n  flex: 1;\n}\n.app-header .header-right .search-container .search-dropdown .search-results .search-result-item .result-content .result-title {\n  color: var(--text-primary);\n  font-size: 0.875rem;\n  font-weight: 600;\n  margin-bottom: 2px;\n}\n.app-header .header-right .search-container .search-dropdown .search-results .search-result-item .result-content .result-subtitle {\n  color: var(--text-muted);\n  font-size: 0.75rem;\n}\n.app-header .header-right .search-container .search-dropdown .search-empty {\n  padding: 3rem;\n  text-align: center;\n  color: var(--text-muted);\n}\n.app-header .header-right .search-container .search-dropdown .search-empty i {\n  font-size: 2rem;\n  margin-bottom: 1rem;\n  opacity: 0.5;\n}\n.app-header .header-right .search-container .search-dropdown .search-empty p {\n  font-size: 0.875rem;\n}\n.app-header .header-right .quick-actions {\n  display: flex;\n  gap: 0.5rem;\n}\n.app-header .header-right .quick-actions .quick-action-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e 0%,\n      #16a34a 100%);\n  border: none;\n  border-radius: 0.5rem;\n  color: white;\n  font-size: 1rem;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  width: 44px;\n  height: 44px;\n}\n.app-header .header-right .quick-actions .quick-action-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(34, 197, 94, 0.4);\n}\n.app-header .header-right .notifications-container {\n  position: relative;\n  overflow: visible;\n}\n.app-header .header-right .notifications-container.active .notifications-btn {\n  background-color: rgba(74, 158, 255, 0.15);\n  border-color: rgba(74, 158, 255, 0.4);\n  color: var(--primary-accent);\n}\n.app-header .header-right .notifications-container .notifications-dropdown {\n  position: fixed;\n  width: 500px;\n  max-width: 90vw;\n  max-height: 500px;\n  background: var(--tertiary-bg);\n  border: 1px solid var(--border-primary);\n  border-radius: 0.75rem;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5), 0 2px 8px rgba(0, 0, 0, 0.3);\n  z-index: 9999;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  animation: dropdownFadeIn 0.2s ease-out;\n}\n.app-header .header-right .notifications-container .notifications-dropdown .notifications-header {\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid var(--border-primary);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(74, 158, 255, 0.1) 0%,\n      rgba(124, 58, 237, 0.1) 100%);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.app-header .header-right .notifications-container .notifications-dropdown .notifications-header .notifications-title {\n  color: var(--text-primary);\n  font-size: 1rem;\n  font-weight: 600;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.app-header .header-right .notifications-container .notifications-dropdown .notifications-header .notifications-title i {\n  color: var(--primary-accent);\n}\n.app-header .header-right .notifications-container .notifications-dropdown .notifications-header .mark-all-read-btn {\n  background: transparent;\n  border: none;\n  color: var(--primary-accent);\n  font-size: 0.75rem;\n  font-weight: 500;\n  cursor: pointer;\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.375rem;\n  transition: all 0.3s ease-in-out;\n}\n.app-header .header-right .notifications-container .notifications-dropdown .notifications-header .mark-all-read-btn:hover {\n  background: rgba(74, 158, 255, 0.1);\n}\n.app-header .header-right .notifications-container .notifications-dropdown .notifications-list {\n  flex: 1;\n  overflow-y: auto;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n  max-height: 400px;\n}\n.app-header .header-right .notifications-container .notifications-dropdown .notifications-list::-webkit-scrollbar {\n  display: none;\n}\n.app-header .header-right .notifications-container .notifications-dropdown .notifications-list .notification-item {\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n  display: flex;\n  gap: 1rem;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  position: relative;\n}\n.app-header .header-right .notifications-container .notifications-dropdown .notifications-list .notification-item:hover {\n  background: rgba(74, 158, 255, 0.05);\n}\n.app-header .header-right .notifications-container .notifications-dropdown .notifications-list .notification-item.unread {\n  background: rgba(74, 158, 255, 0.03);\n  border-left: 3px solid var(--primary-accent);\n}\n.app-header .header-right .notifications-container .notifications-dropdown .notifications-list .notification-item.unread::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 6px;\n  height: 6px;\n  background: var(--primary-accent);\n  border-radius: 50%;\n}\n.app-header .header-right .notifications-container .notifications-dropdown .notifications-list .notification-item .notification-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 1.125rem;\n}\n.app-header .header-right .notifications-container .notifications-dropdown .notifications-list .notification-item .notification-icon.icon-info {\n  background: rgba(59, 130, 246, 0.15);\n  color: #3b82f6;\n}\n.app-header .header-right .notifications-container .notifications-dropdown .notifications-list .notification-item .notification-icon.icon-success {\n  background: rgba(34, 197, 94, 0.15);\n  color: #22c55e;\n}\n.app-header .header-right .notifications-container .notifications-dropdown .notifications-list .notification-item .notification-icon.icon-warning {\n  background: rgba(234, 179, 8, 0.15);\n  color: #eab308;\n}\n.app-header .header-right .notifications-container .notifications-dropdown .notifications-list .notification-item .notification-icon.icon-error {\n  background: rgba(239, 68, 68, 0.15);\n  color: #ef4444;\n}\n.app-header .header-right .notifications-container .notifications-dropdown .notifications-list .notification-item .notification-icon.icon-task {\n  background: rgba(124, 58, 237, 0.15);\n  color: #7c3aed;\n}\n.app-header .header-right .notifications-container .notifications-dropdown .notifications-list .notification-item .notification-content {\n  flex: 1;\n  min-width: 0;\n}\n.app-header .header-right .notifications-container .notifications-dropdown .notifications-list .notification-item .notification-content .notification-title {\n  color: var(--text-primary);\n  font-size: 0.875rem;\n  font-weight: 600;\n  margin-bottom: 0.25rem;\n  line-height: 1.3;\n}\n.app-header .header-right .notifications-container .notifications-dropdown .notifications-list .notification-item .notification-content .notification-message {\n  color: var(--text-secondary);\n  font-size: 0.75rem;\n  margin-bottom: 0.25rem;\n  line-height: 1.4;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.app-header .header-right .notifications-container .notifications-dropdown .notifications-list .notification-item .notification-content .notification-time {\n  color: var(--text-muted);\n  font-size: 0.7rem;\n}\n.app-header .header-right .notifications-container .notifications-dropdown .notifications-list .notification-item .notification-actions {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  align-items: center;\n}\n.app-header .header-right .notifications-container .notifications-dropdown .notifications-list .notification-item .notification-actions .notification-action-btn {\n  width: 24px;\n  height: 24px;\n  background: transparent;\n  border: 1px solid var(--border-primary);\n  border-radius: 0.375rem;\n  color: var(--text-muted);\n  font-size: 0.75rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease-in-out;\n}\n.app-header .header-right .notifications-container .notifications-dropdown .notifications-list .notification-item .notification-actions .notification-action-btn:hover {\n  background: rgba(74, 158, 255, 0.1);\n  border-color: var(--primary-accent);\n  color: var(--primary-accent);\n}\n.app-header .header-right .notifications-container .notifications-dropdown .notifications-list .notification-item .notification-actions .notification-action-btn.delete-btn:hover {\n  background: rgba(239, 68, 68, 0.1);\n  border-color: var(--error-color);\n  color: var(--error-color);\n}\n.app-header .header-right .notifications-container .notifications-dropdown .notifications-empty {\n  padding: 3rem;\n  text-align: center;\n  color: var(--text-muted);\n}\n.app-header .header-right .notifications-container .notifications-dropdown .notifications-empty i {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n  opacity: 0.5;\n}\n.app-header .header-right .notifications-container .notifications-dropdown .notifications-empty p {\n  font-size: 1rem;\n  font-weight: 600;\n  margin-bottom: 0.25rem;\n  color: var(--text-secondary);\n}\n.app-header .header-right .notifications-container .notifications-dropdown .notifications-empty span {\n  font-size: 0.875rem;\n}\n.app-header .header-right .notifications-container .notifications-dropdown .notifications-footer {\n  padding: 1rem 1.5rem;\n  border-top: 1px solid var(--border-primary);\n  background: rgba(74, 158, 255, 0.03);\n}\n.app-header .header-right .notifications-container .notifications-dropdown .notifications-footer .view-all-btn {\n  width: 100%;\n  padding: 0.5rem 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-accent) 0%,\n      var(--secondary-accent) 100%);\n  border: none;\n  border-radius: 0.5rem;\n  color: var(--text-primary);\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n}\n.app-header .header-right .notifications-container .notifications-dropdown .notifications-footer .view-all-btn:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(74, 158, 255, 0.3);\n}\n.app-header .header-right .user-profile-menu {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.25rem 1rem 0.25rem 0.25rem;\n  background: rgba(74, 158, 255, 0.05);\n  border: 1px solid rgba(74, 158, 255, 0.2);\n  border-radius: 0.75rem;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  position: relative;\n  overflow: visible;\n}\n.app-header .header-right .user-profile-menu:hover {\n  background: rgba(74, 158, 255, 0.1);\n  border-color: rgba(74, 158, 255, 0.4);\n  transform: translateY(-1px);\n}\n.app-header .header-right .user-profile-menu.active {\n  background: rgba(74, 158, 255, 0.15);\n  border-color: rgba(74, 158, 255, 0.5);\n}\n.app-header .header-right .user-profile-menu .user-avatar {\n  width: 36px;\n  height: 36px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-accent) 0%,\n      var(--secondary-accent) 100%);\n  border-radius: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-primary);\n  font-size: 1rem;\n  box-shadow: 0 2px 8px rgba(74, 158, 255, 0.25);\n  flex-shrink: 0;\n}\n.app-header .header-right .user-profile-menu .user-avatar i {\n  font-size: 0.875rem;\n}\n.app-header .header-right .user-profile-menu .user-info {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n  min-width: 0;\n}\n.app-header .header-right .user-profile-menu .user-info .user-name {\n  color: var(--text-primary);\n  font-size: 0.875rem;\n  font-weight: 600;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 1.2;\n}\n.app-header .header-right .user-profile-menu .user-info .user-role {\n  color: var(--text-muted);\n  font-size: 0.75rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 1.2;\n}\n.app-header .header-right .user-profile-menu .dropdown-icon {\n  color: var(--text-muted);\n  font-size: 0.75rem;\n  transition: transform 0.3s ease-in-out;\n  flex-shrink: 0;\n}\n.app-header .header-right .user-profile-menu .dropdown-icon.rotated {\n  transform: rotate(180deg);\n}\n.app-header .header-right .user-profile-menu:hover .dropdown-icon:not(.rotated) {\n  transform: translateY(1px);\n}\n.app-header .header-right .user-profile-menu .user-dropdown {\n  position: fixed;\n  min-width: 220px;\n  max-width: 280px;\n  background: var(--tertiary-bg);\n  border: 1px solid var(--border-primary);\n  border-radius: 0.75rem;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5), 0 2px 8px rgba(0, 0, 0, 0.3);\n  z-index: 9999;\n  overflow: hidden;\n  animation: dropdownFadeIn 0.2s ease-out;\n  margin-top: 4px;\n}\n@keyframes dropdownFadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.app-header .header-right .user-profile-menu .user-dropdown .dropdown-header {\n  padding: 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(74, 158, 255, 0.1) 0%,\n      rgba(124, 58, 237, 0.1) 100%);\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.app-header .header-right .user-profile-menu .user-dropdown .dropdown-header .dropdown-avatar {\n  width: 40px;\n  height: 40px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-accent) 0%,\n      var(--secondary-accent) 100%);\n  border-radius: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-primary);\n  font-size: 1rem;\n  box-shadow: 0 2px 8px rgba(74, 158, 255, 0.25);\n  flex-shrink: 0;\n}\n.app-header .header-right .user-profile-menu .user-dropdown .dropdown-header .dropdown-user-info {\n  flex: 1;\n  min-width: 0;\n}\n.app-header .header-right .user-profile-menu .user-dropdown .dropdown-header .dropdown-user-info .dropdown-name {\n  color: var(--text-primary);\n  font-size: 0.875rem;\n  font-weight: 600;\n  margin-bottom: 2px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.app-header .header-right .user-profile-menu .user-dropdown .dropdown-header .dropdown-user-info .dropdown-email {\n  color: var(--text-muted);\n  font-size: 0.75rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.app-header .header-right .user-profile-menu .user-dropdown .dropdown-divider {\n  height: 1px;\n  background: var(--border-primary);\n  margin: 0.25rem 0;\n}\n.app-header .header-right .user-profile-menu .user-dropdown .dropdown-item {\n  padding: 1rem;\n  color: var(--text-secondary);\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.app-header .header-right .user-profile-menu .user-dropdown .dropdown-item i {\n  width: 20px;\n  text-align: center;\n  color: var(--text-muted);\n}\n.app-header .header-right .user-profile-menu .user-dropdown .dropdown-item:hover {\n  background: rgba(74, 158, 255, 0.1);\n  color: var(--text-primary);\n}\n.app-header .header-right .user-profile-menu .user-dropdown .dropdown-item:hover i {\n  color: var(--primary-accent);\n}\n.app-header .header-right .user-profile-menu .user-dropdown .dropdown-item.logout-item {\n  color: var(--error-color);\n}\n.app-header .header-right .user-profile-menu .user-dropdown .dropdown-item.logout-item i {\n  color: var(--error-color);\n}\n.app-header .header-right .user-profile-menu .user-dropdown .dropdown-item.logout-item:hover {\n  background: rgba(239, 68, 68, 0.1);\n  color: var(--error-color);\n}\n.icon-options-demo {\n  margin-top: 2rem;\n}\n.icon-options-demo h3 {\n  color: var(--text-primary);\n  font-size: 1.5rem;\n  margin-bottom: 0.5rem;\n}\n.icon-options-demo > p {\n  color: var(--text-muted);\n  margin-bottom: 2rem;\n}\n.icon-options-demo .icon-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.icon-options-demo .icon-grid .icon-option {\n  background-color: var(--secondary-bg);\n  border: 1px solid var(--border-primary);\n  border-radius: 0.75rem;\n  box-shadow: 0 1px 2px 0 var(--shadow-light);\n  transition: all 0.3s ease-in-out;\n  box-shadow: 0 10px 15px -3px var(--shadow-medium), 0 4px 6px -2px var(--shadow-light);\n  padding: 1.5rem;\n  border-radius: 0.75rem;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  border: 2px solid transparent;\n}\n.icon-options-demo .icon-grid .icon-option:hover {\n  box-shadow: 0 4px 6px -1px var(--shadow-light), 0 2px 4px -1px var(--shadow-light);\n  border-color: var(--border-accent);\n}\n.icon-options-demo .icon-grid .icon-option:hover {\n  box-shadow: 0 20px 25px -5px var(--shadow-medium), 0 10px 10px -5px var(--shadow-light);\n  transform: translateY(-2px);\n}\n.icon-options-demo .icon-grid .icon-option:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 10px 15px -3px var(--shadow-medium), 0 4px 6px -2px var(--shadow-light);\n  border-color: rgba(74, 158, 255, 0.3);\n}\n.icon-options-demo .icon-grid .icon-option.active {\n  border-color: var(--primary-accent);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(74, 158, 255, 0.1) 0%,\n      rgba(124, 58, 237, 0.1) 100%);\n}\n.icon-options-demo .icon-grid .icon-option.active .icon-box {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-accent) 0%,\n      var(--secondary-accent) 100%);\n  box-shadow: 0 4px 16px rgba(74, 158, 255, 0.4);\n}\n.icon-options-demo .icon-grid .icon-option .icon-preview {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 1rem;\n}\n.icon-options-demo .icon-grid .icon-option .icon-preview .icon-box {\n  width: 64px;\n  height: 64px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(74, 158, 255, 0.2) 0%,\n      rgba(124, 58, 237, 0.2) 100%);\n  border-radius: 0.75rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-primary);\n  font-size: 2rem;\n  transition: all 0.3s ease-in-out;\n}\n.icon-options-demo .icon-grid .icon-option .icon-info {\n  text-align: center;\n}\n.icon-options-demo .icon-grid .icon-option .icon-info h4 {\n  color: var(--text-primary);\n  font-size: 1rem;\n  font-weight: 600;\n  margin: 0 0 0.25rem 0;\n  text-transform: capitalize;\n}\n.icon-options-demo .icon-grid .icon-option .icon-info p {\n  color: var(--text-muted);\n  font-size: 0.875rem;\n  margin: 0;\n  line-height: 1.4;\n}\n.icon-options-demo .icon-selection-actions {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  padding-top: 1.5rem;\n  border-top: 1px solid var(--border-primary);\n}\n.icon-options-demo .icon-selection-actions .btn-apply {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5rem 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.5rem;\n  font-family:\n    "Inter",\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  font-size: 0.875rem;\n  font-weight: 500;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.15s ease-in-out;\n  outline: none;\n  background-color: var(--primary-accent);\n  color: var(--text-primary);\n  border-color: var(--primary-accent);\n  padding: 1rem 2rem;\n  font-weight: 600;\n}\n.icon-options-demo .icon-selection-actions .btn-apply:focus {\n  box-shadow: 0 0 0 3px rgba(74, 158, 255, 0.3);\n}\n.icon-options-demo .icon-selection-actions .btn-apply:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.icon-options-demo .icon-selection-actions .btn-apply:hover:not(:disabled) {\n  background-color: var(--hover-accent);\n  border-color: var(--hover-accent);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 6px -1px var(--shadow-light), 0 2px 4px -1px var(--shadow-light);\n}\n.icon-options-demo .icon-selection-actions .btn-apply:active:not(:disabled) {\n  background-color: var(--active-accent);\n  border-color: var(--active-accent);\n  transform: translateY(0);\n}\n.icon-options-demo .icon-selection-actions .btn-cancel {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5rem 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.5rem;\n  font-family:\n    "Inter",\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  font-size: 0.875rem;\n  font-weight: 500;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.15s ease-in-out;\n  outline: none;\n  background-color: transparent;\n  color: var(--text-secondary);\n  border-color: var(--border-primary);\n  padding: 1rem 2rem;\n  font-weight: 600;\n}\n.icon-options-demo .icon-selection-actions .btn-cancel:focus {\n  box-shadow: 0 0 0 3px rgba(74, 158, 255, 0.3);\n}\n.icon-options-demo .icon-selection-actions .btn-cancel:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.icon-options-demo .icon-selection-actions .btn-cancel:hover:not(:disabled) {\n  background-color: var(--hover-bg);\n  border-color: var(--border-accent);\n}\n.icon-options-demo .icon-selection-actions .btn-cancel:active:not(:disabled) {\n  background-color: var(--active-bg);\n}\n.app-body {\n  display: flex;\n  flex: 1;\n  width: 100%;\n  overflow: hidden;\n}\n.main-content {\n  flex: 1;\n  margin-left: 280px;\n  transition: margin-left 0.3s ease-in-out;\n  display: flex;\n  flex-direction: column;\n  width: calc(100% - 280px);\n  max-width: calc(100% - 280px);\n  overflow-x: hidden;\n  box-sizing: border-box;\n  min-height: calc(100vh - 66px);\n}\n.main-content.sidebar-collapsed {\n  margin-left: 69px;\n  width: calc(100% - 69px);\n  max-width: calc(100% - 69px);\n}\n.content-area {\n  flex: 1;\n  padding: 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n  width: 100%;\n  max-width: 100%;\n  box-sizing: border-box;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.content-area::-webkit-scrollbar {\n  display: none;\n}\n.content-area:has(app-notes) {\n  overflow: hidden;\n}\n.welcome-section {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 2rem;\n}\n.welcome-section h2 {\n  color: var(--text-primary);\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n}\n.welcome-section p {\n  color: var(--text-secondary);\n  font-size: 1.125rem;\n  margin-bottom: 2rem;\n}\n.feature-cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n  margin-top: 2rem;\n}\n.feature-cards .card {\n  background-color: var(--secondary-bg);\n  border: 1px solid var(--border-primary);\n  border-radius: 0.75rem;\n  box-shadow: 0 1px 2px 0 var(--shadow-light);\n  transition: all 0.3s ease-in-out;\n  box-shadow: 0 10px 15px -3px var(--shadow-medium), 0 4px 6px -2px var(--shadow-light);\n  padding: 2rem;\n  text-align: center;\n}\n.feature-cards .card:hover {\n  box-shadow: 0 4px 6px -1px var(--shadow-light), 0 2px 4px -1px var(--shadow-light);\n  border-color: var(--border-accent);\n}\n.feature-cards .card:hover {\n  box-shadow: 0 20px 25px -5px var(--shadow-medium), 0 10px 10px -5px var(--shadow-light);\n  transform: translateY(-2px);\n}\n.feature-cards .card h3 {\n  color: var(--text-primary);\n  font-size: 1.125rem;\n  margin-bottom: 1rem;\n}\n.feature-cards .card p {\n  color: var(--text-secondary);\n  font-size: 1rem;\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .app-body {\n    flex-direction: column;\n  }\n  .main-content {\n    margin-left: 0;\n    width: 100%;\n    max-width: 100%;\n  }\n  .main-content.sidebar-collapsed {\n    margin-left: 0;\n    width: 100%;\n    max-width: 100%;\n  }\n  .app-header {\n    padding: 0 1rem;\n    height: 62px;\n    min-height: 62px;\n    max-height: 62px;\n  }\n  .app-header .header-left .app-branding {\n    padding: 3px 0;\n    gap: 0.5rem;\n  }\n  .app-header .header-left .app-branding .app-logo {\n    width: 36px;\n    height: 36px;\n    font-size: 1rem;\n  }\n  .app-header .header-left .app-branding .app-name-wrapper {\n    gap: 1px;\n  }\n  .app-header .header-left .app-branding .app-name-wrapper .app-name {\n    font-size: 1.125rem;\n    padding-top: 2px;\n  }\n  .app-header .header-left .app-branding .app-name-wrapper .app-subtitle {\n    font-size: 0.65rem;\n    margin-top: 0;\n  }\n  .app-header .header-right {\n    gap: 0.5rem;\n  }\n  .app-header .header-right .user-profile-menu {\n    padding: 0.25rem;\n  }\n  .app-header .header-right .user-profile-menu .user-info {\n    display: none;\n  }\n  .app-header .header-right .user-profile-menu .dropdown-icon {\n    display: none;\n  }\n  .app-header .header-right .user-profile-menu .user-avatar {\n    width: 32px;\n    height: 32px;\n  }\n  .app-header .header-right .user-profile-menu .user-dropdown {\n    min-width: 200px;\n    max-width: 240px;\n  }\n  .app-header .header-right .notifications-btn {\n    width: 40px;\n    height: 40px;\n  }\n  .app-header .header-right .notifications-container .notifications-dropdown {\n    width: calc(100vw - 32px);\n    max-width: 500px;\n    right: 16px !important;\n  }\n  .app-header .header-right .notifications-container .notifications-dropdown .notifications-list {\n    max-height: 300px;\n  }\n  .app-header .header-right .search-container .search-dropdown {\n    left: 16px !important;\n    right: 16px !important;\n    transform: none;\n    width: calc(100vw - 32px);\n    max-width: 100%;\n  }\n  .app-header .header-right .quick-actions .quick-action-btn {\n    width: 40px;\n    height: 40px;\n  }\n  .content-area {\n    padding: 0;\n  }\n  .feature-cards {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n}\n/*# sourceMappingURL=app.css.map */\n'] }]
  }], () => [{ type: ThemeService }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.ts", lineNumber: 41 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
