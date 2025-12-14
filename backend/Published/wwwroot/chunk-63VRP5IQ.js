import {
  Router
} from "./chunk-6CSC2D6H.js";
import {
  AuthService
} from "./chunk-HVWUQA7X.js";
import "./chunk-XMNU56NZ.js";
import {
  CheckboxControlValueAccessor,
  CommonModule,
  Component,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgIf,
  NgModel,
  setClassMetadata,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-OPSATDSU.js";

// src/app/components/login/login-new.ts
function LoginNewComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63)(1, "div", 64)(2, "div", 65);
    \u0275\u0275element(3, "i", 66);
    \u0275\u0275elementStart(4, "div", 67)(5, "span", 68);
    \u0275\u0275text(6, "Task Management");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 69);
    \u0275\u0275text(8, "Task & Periodic Task");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 65);
    \u0275\u0275element(10, "i", 66);
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "Efficiency Planning");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 65);
    \u0275\u0275element(14, "i", 66);
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "Budget Management");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 65);
    \u0275\u0275element(18, "i", 66);
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20, "Resource Allocation");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 65);
    \u0275\u0275element(22, "i", 66);
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24, "Time Management");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 65);
    \u0275\u0275element(26, "i", 66);
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28, "Team Collaboration");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 65);
    \u0275\u0275element(30, "i", 66);
    \u0275\u0275elementStart(31, "span");
    \u0275\u0275text(32, "Progress Tracking");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 65);
    \u0275\u0275element(34, "i", 66);
    \u0275\u0275elementStart(35, "span");
    \u0275\u0275text(36, "Reporting & Analytics");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 65);
    \u0275\u0275element(38, "i", 66);
    \u0275\u0275elementStart(39, "span");
    \u0275\u0275text(40, "Timer");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 65);
    \u0275\u0275element(42, "i", 66);
    \u0275\u0275elementStart(43, "span");
    \u0275\u0275text(44, "Calendar");
    \u0275\u0275elementEnd()()()();
  }
}
function LoginNewComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275element(1, "i", 71);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function LoginNewComponent_span_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 72)(1, "span");
    \u0275\u0275text(2, "Sign In");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "i", 73);
    \u0275\u0275elementEnd();
  }
}
function LoginNewComponent_span_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 74);
    \u0275\u0275element(1, "i", 75);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Authenticating...");
    \u0275\u0275elementEnd()();
  }
}
var LoginNewComponent = class _LoginNewComponent {
  authService;
  router;
  email = "";
  password = "";
  showPassword = false;
  rememberMe = false;
  isLoading = false;
  errorMessage = "";
  emailFocused = false;
  passwordFocused = false;
  showAboutSection = false;
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  ngOnInit() {
    const savedEmail = localStorage.getItem("omni-planner-remember-email");
    if (savedEmail) {
      this.email = savedEmail;
      this.rememberMe = true;
    }
  }
  onLogin() {
    if (!this.validateForm()) {
      return;
    }
    this.isLoading = true;
    this.errorMessage = "";
    this.authService.login({
      email: this.email.trim(),
      password: this.password,
      rememberMe: this.rememberMe
    }).subscribe({
      next: (auth) => {
        console.log("Login successful, auth received:", auth);
        this.isLoading = false;
        if (!auth || !auth.token) {
          console.error("Invalid auth data received:", auth);
          this.errorMessage = "Login failed: Invalid response from server";
          return;
        }
        if (this.rememberMe) {
          localStorage.setItem("omni-planner-remember-email", this.email);
        } else {
          localStorage.removeItem("omni-planner-remember-email");
        }
        const isAuthenticated = this.authService.isAuthenticated();
        console.log("Is authenticated after login:", isAuthenticated);
        console.log("Token stored:", this.authService.getToken() ? "Yes" : "No");
        if (isAuthenticated) {
          const returnUrl = this.router.parseUrl(this.router.url).queryParams["returnUrl"] || "/tasks";
          console.log("Navigating to:", returnUrl);
          this.router.navigateByUrl(returnUrl).then((success) => {
            console.log("Navigation successful:", success);
            if (!success) {
              window.location.href = returnUrl;
            }
          }, (error) => {
            console.error("Navigation failed:", error);
            window.location.href = returnUrl;
          });
        } else {
          this.errorMessage = "Authentication failed. Please try again.";
        }
      },
      error: (error) => {
        console.error("Login error:", error);
        this.isLoading = false;
        this.errorMessage = error.error?.message || error.message || "Invalid email or password. Please try again.";
      }
    });
  }
  validateForm() {
    if (!this.email.trim()) {
      this.errorMessage = "Email is required";
      return false;
    }
    if (!this.isValidEmail(this.email)) {
      this.errorMessage = "Please enter a valid email address";
      return false;
    }
    if (!this.password) {
      this.errorMessage = "Password is required";
      return false;
    }
    if (this.password.length < 6) {
      this.errorMessage = "Password must be at least 6 characters";
      return false;
    }
    return true;
  }
  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  onGoogleLogin() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      console.log("Google login");
    }, 1e3);
  }
  onForgotPassword() {
    if (!this.email.trim()) {
      this.errorMessage = "Please enter your email address first";
      return;
    }
    if (!this.isValidEmail(this.email)) {
      this.errorMessage = "Please enter a valid email address";
      return;
    }
    this.isLoading = true;
    this.errorMessage = "";
    this.authService.forgotPassword(this.email.trim()).subscribe({
      next: () => {
        this.isLoading = false;
        this.errorMessage = "";
        alert("If the email exists, a password reset link has been sent to your email.");
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.error?.message || "Failed to send password reset email. Please try again.";
      }
    });
  }
  onSignUp() {
    console.log("Sign up clicked");
  }
  toggleAboutSection() {
    this.showAboutSection = !this.showAboutSection;
  }
  static \u0275fac = function LoginNewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginNewComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginNewComponent, selectors: [["app-login-new"]], decls: 84, vars: 37, consts: [[1, "login-page"], [1, "login-background"], [1, "bg-gradient-1"], [1, "bg-gradient-2"], [1, "bg-gradient-3"], [1, "floating-shapes"], [1, "shape", "shape-1"], [1, "shape", "shape-2"], [1, "shape", "shape-3"], [1, "shape", "shape-4"], [1, "grid-overlay"], [1, "login-left"], [1, "branding-section"], [1, "logo-container"], [1, "app-name-large"], [1, "app-logo-large"], [1, "logo-inner"], [1, "fas", "fa-layer-group"], [1, "name-text"], [1, "info-intro"], ["class", "about-features", 4, "ngIf"], [1, "about-section-toggle"], [1, "about-btn", 3, "click"], [1, "fas"], [1, "login-right"], [1, "login-form-container"], [1, "form-header"], [1, "form-title"], [1, "form-subtitle"], ["class", "error-message", 4, "ngIf"], [1, "login-form", 3, "ngSubmit"], [1, "form-group"], ["for", "email"], [1, "input-wrapper"], [1, "fas", "fa-envelope", "input-icon"], ["type", "email", "id", "email", "placeholder", "admin@omniplanner.com", "name", "email", "autocomplete", "email", 1, "form-input", 3, "ngModelChange", "focus", "blur", "ngModel", "disabled"], [1, "input-glow"], ["for", "password"], [1, "fas", "fa-lock", "input-icon"], ["id", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "name", "password", "autocomplete", "current-password", 1, "form-input", 3, "ngModelChange", "focus", "blur", "type", "ngModel", "disabled"], ["type", "button", 1, "password-toggle", 3, "click", "disabled"], [1, "form-options"], [1, "checkbox-label"], ["type", "checkbox", "name", "rememberMe", 3, "ngModelChange", "ngModel", "disabled"], ["type", "button", 1, "forgot-password-link", 3, "click", "disabled"], ["type", "submit", 1, "login-btn", 3, "disabled"], ["class", "btn-content", 4, "ngIf"], ["class", "btn-content loading-content", 4, "ngIf"], [1, "btn-glow"], [1, "btn-shine"], [1, "divider"], [1, "divider-line"], [1, "divider-text"], [1, "social-login"], [1, "social-btn", "google-btn", 3, "click", "disabled"], ["viewBox", "0 0 24 24", "width", "20", "height", "20", 1, "social-icon"], ["fill", "#4285F4", "d", "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"], ["fill", "#34A853", "d", "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"], ["fill", "#FBBC05", "d", "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"], ["fill", "#EA4335", "d", "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"], [1, "signup-section"], [1, "signup-text"], ["type", "button", 1, "signup-link", 3, "click", "disabled"], [1, "about-features"], [1, "about-features-grid"], [1, "info-feature-item"], [1, "fas", "fa-check-circle"], [1, "feature-content"], [1, "feature-main"], [1, "feature-sub"], [1, "error-message"], [1, "fas", "fa-exclamation-circle"], [1, "btn-content"], [1, "fas", "fa-arrow-right", "btn-arrow"], [1, "btn-content", "loading-content"], [1, "fas", "fa-spinner", "fa-spin"]], template: function LoginNewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275elementStart(5, "div", 5);
      \u0275\u0275element(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275element(10, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 11)(12, "div", 12)(13, "div", 13)(14, "h1", 14)(15, "div", 15)(16, "div", 16);
      \u0275\u0275element(17, "i", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "span", 18);
      \u0275\u0275text(19, "OmniPlanner");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "p", 19);
      \u0275\u0275text(21, "Transform your vision into reality through strategic planning and intelligently streamlined workflows powered by smart task management. Achieve exceptional results with unmatched efficiency, smart budgeting, and seamless resource optimization.");
      \u0275\u0275elementEnd();
      \u0275\u0275template(22, LoginNewComponent_div_22_Template, 45, 0, "div", 20);
      \u0275\u0275elementStart(23, "div", 21)(24, "button", 22);
      \u0275\u0275listener("click", function LoginNewComponent_Template_button_click_24_listener() {
        return ctx.toggleAboutSection();
      });
      \u0275\u0275element(25, "i", 23);
      \u0275\u0275elementStart(26, "span");
      \u0275\u0275text(27);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(28, "div", 24)(29, "div", 25)(30, "div", 26)(31, "h2", 27);
      \u0275\u0275text(32, "Welcome Back");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "p", 28);
      \u0275\u0275text(34, "Sign in to continue to OmniPlanner");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(35, LoginNewComponent_div_35_Template, 4, 1, "div", 29);
      \u0275\u0275elementStart(36, "form", 30);
      \u0275\u0275listener("ngSubmit", function LoginNewComponent_Template_form_ngSubmit_36_listener() {
        return ctx.onLogin();
      });
      \u0275\u0275elementStart(37, "div", 31)(38, "label", 32);
      \u0275\u0275text(39, " Email Address ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 33);
      \u0275\u0275element(41, "i", 34);
      \u0275\u0275elementStart(42, "input", 35);
      \u0275\u0275twoWayListener("ngModelChange", function LoginNewComponent_Template_input_ngModelChange_42_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
        return $event;
      });
      \u0275\u0275listener("focus", function LoginNewComponent_Template_input_focus_42_listener() {
        return ctx.emailFocused = true;
      })("blur", function LoginNewComponent_Template_input_blur_42_listener() {
        return ctx.emailFocused = false;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(43, "div", 36);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div", 31)(45, "label", 37);
      \u0275\u0275text(46, " Password ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 33);
      \u0275\u0275element(48, "i", 38);
      \u0275\u0275elementStart(49, "input", 39);
      \u0275\u0275twoWayListener("ngModelChange", function LoginNewComponent_Template_input_ngModelChange_49_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
        return $event;
      });
      \u0275\u0275listener("focus", function LoginNewComponent_Template_input_focus_49_listener() {
        return ctx.passwordFocused = true;
      })("blur", function LoginNewComponent_Template_input_blur_49_listener() {
        return ctx.passwordFocused = false;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "button", 40);
      \u0275\u0275listener("click", function LoginNewComponent_Template_button_click_50_listener() {
        return ctx.togglePasswordVisibility();
      });
      \u0275\u0275element(51, "i", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275element(52, "div", 36);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "div", 41)(54, "label", 42)(55, "input", 43);
      \u0275\u0275twoWayListener("ngModelChange", function LoginNewComponent_Template_input_ngModelChange_55_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.rememberMe, $event) || (ctx.rememberMe = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "span");
      \u0275\u0275text(57, "Remember me");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "button", 44);
      \u0275\u0275listener("click", function LoginNewComponent_Template_button_click_58_listener() {
        return ctx.onForgotPassword();
      });
      \u0275\u0275text(59, " Forgot password? ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "button", 45);
      \u0275\u0275template(61, LoginNewComponent_span_61_Template, 4, 0, "span", 46)(62, LoginNewComponent_span_62_Template, 4, 0, "span", 47);
      \u0275\u0275element(63, "div", 48)(64, "div", 49);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "div", 50);
      \u0275\u0275element(66, "div", 51);
      \u0275\u0275elementStart(67, "span", 52);
      \u0275\u0275text(68, "OR");
      \u0275\u0275elementEnd();
      \u0275\u0275element(69, "div", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "div", 53)(71, "button", 54);
      \u0275\u0275listener("click", function LoginNewComponent_Template_button_click_71_listener() {
        return ctx.onGoogleLogin();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(72, "svg", 55);
      \u0275\u0275element(73, "path", 56)(74, "path", 57)(75, "path", 58)(76, "path", 59);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(77, "span");
      \u0275\u0275text(78, "Continue with Google");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(79, "div", 60)(80, "span", 61);
      \u0275\u0275text(81, "Don't have an account?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "button", 62);
      \u0275\u0275listener("click", function LoginNewComponent_Template_button_click_82_listener() {
        return ctx.onSignUp();
      });
      \u0275\u0275text(83, " Sign up ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(22);
      \u0275\u0275property("ngIf", ctx.showAboutSection);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.showAboutSection);
      \u0275\u0275advance();
      \u0275\u0275classProp("fa-info-circle", !ctx.showAboutSection)("fa-times", ctx.showAboutSection);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", ctx.showAboutSection ? "Hide" : "About", " Features");
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("focused", ctx.emailFocused)("has-value", ctx.email);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.email);
      \u0275\u0275property("disabled", ctx.isLoading);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("focused", ctx.passwordFocused)("has-value", ctx.password);
      \u0275\u0275advance(2);
      \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
      \u0275\u0275twoWayProperty("ngModel", ctx.password);
      \u0275\u0275property("disabled", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275classProp("fa-eye", !ctx.showPassword)("fa-eye-slash", ctx.showPassword);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.rememberMe);
      \u0275\u0275property("disabled", ctx.isLoading);
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.isLoading);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("loading", ctx.isLoading);
      \u0275\u0275property("disabled", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance(9);
      \u0275\u0275property("disabled", ctx.isLoading);
      \u0275\u0275advance(11);
      \u0275\u0275property("disabled", ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], styles: ['\n\n[_ngcontent-%COMP%]:root {\n  --primary-bg: #1a1a1a;\n  --secondary-bg: #2d2d2d;\n  --tertiary-bg: #3a3a3a;\n  --surface-bg: #2a2a2a;\n  --primary-accent: #4a9eff;\n  --secondary-accent: #7c3aed;\n  --success-color: #10b981;\n  --warning-color: #f59e0b;\n  --error-color: #ef4444;\n  --text-primary: #ffffff;\n  --text-secondary: #e5e5e5;\n  --text-muted: #a3a3a3;\n  --text-disabled: #6b7280;\n  --border-primary: #4a4a4a;\n  --border-secondary: #3a3a3a;\n  --border-accent: #5a5a5a;\n  --shadow-light: rgba(0, 0, 0, 0.1);\n  --shadow-medium: rgba(0, 0, 0, 0.2);\n  --shadow-heavy: rgba(0, 0, 0, 0.3);\n  --hover-bg: #3a3a3a;\n  --hover-accent: #5bb0ff;\n  --active-bg: #4a4a4a;\n  --active-accent: #3a8fdf;\n}\n.login-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: 1.2fr 1fr;\n  position: relative;\n  overflow: hidden;\n  background: #0a0a0a;\n}\n.login-background[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  z-index: 0;\n  background-image: url("./media/login_page_bg.png");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.login-background[_ngcontent-%COMP%]   .bg-gradient-1[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 800px;\n  height: 800px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(74, 158, 255, 0.15) 0%,\n      transparent 70%);\n  top: -400px;\n  left: -400px;\n  animation: _ngcontent-%COMP%_float 20s ease-in-out infinite;\n}\n.login-background[_ngcontent-%COMP%]   .bg-gradient-2[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 600px;\n  height: 600px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(124, 58, 237, 0.15) 0%,\n      transparent 70%);\n  bottom: -300px;\n  right: -300px;\n  animation: _ngcontent-%COMP%_float 25s ease-in-out infinite reverse;\n}\n.login-background[_ngcontent-%COMP%]   .bg-gradient-3[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 500px;\n  height: 500px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(34, 197, 94, 0.1) 0%,\n      transparent 70%);\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  animation: _ngcontent-%COMP%_pulse 15s ease-in-out infinite;\n}\n.login-background[_ngcontent-%COMP%]   .grid-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-image:\n    linear-gradient(rgba(74, 158, 255, 0.03) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(74, 158, 255, 0.03) 1px,\n      transparent 1px);\n  background-size: 50px 50px;\n  opacity: 0.5;\n}\n.login-background[_ngcontent-%COMP%]   .floating-shapes[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.login-background[_ngcontent-%COMP%]   .floating-shapes[_ngcontent-%COMP%]   .shape[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(74, 158, 255, 0.1),\n      rgba(124, 58, 237, 0.1));\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n}\n.login-background[_ngcontent-%COMP%]   .floating-shapes[_ngcontent-%COMP%]   .shape.shape-1[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  top: 10%;\n  left: 10%;\n  animation: _ngcontent-%COMP%_float 15s ease-in-out infinite;\n}\n.login-background[_ngcontent-%COMP%]   .floating-shapes[_ngcontent-%COMP%]   .shape.shape-2[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  top: 60%;\n  left: 20%;\n  animation: _ngcontent-%COMP%_float 20s ease-in-out infinite reverse;\n}\n.login-background[_ngcontent-%COMP%]   .floating-shapes[_ngcontent-%COMP%]   .shape.shape-3[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  top: 30%;\n  right: 15%;\n  animation: _ngcontent-%COMP%_float 18s ease-in-out infinite;\n}\n.login-background[_ngcontent-%COMP%]   .floating-shapes[_ngcontent-%COMP%]   .shape.shape-4[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  bottom: 20%;\n  right: 25%;\n  animation: _ngcontent-%COMP%_float 22s ease-in-out infinite reverse;\n}\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translate(0, 0) rotate(0deg);\n  }\n  33% {\n    transform: translate(30px, -30px) rotate(120deg);\n  }\n  66% {\n    transform: translate(-20px, 20px) rotate(240deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 0.3;\n    transform: translate(-50%, -50%) scale(1);\n  }\n  50% {\n    opacity: 0.6;\n    transform: translate(-50%, -50%) scale(1.2);\n  }\n}\n.login-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  position: relative;\n  z-index: 1;\n  height: 100vh;\n  min-height: 100vh;\n  background: transparent;\n  overflow: hidden;\n  isolation: isolate;\n  box-shadow: inset -20px 0 40px rgba(0, 0, 0, 0.2), -10px 0 60px rgba(74, 158, 255, 0.08);\n}\n.login-left[_ngcontent-%COMP%]   .branding-section[_ngcontent-%COMP%] {\n  max-width: 650px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  height: 100%;\n  position: relative;\n  justify-content: center;\n  align-items: flex-start;\n}\n.login-left[_ngcontent-%COMP%]   .branding-section[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%] {\n  text-align: left;\n  position: relative;\n}\n.login-left[_ngcontent-%COMP%]   .branding-section[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .app-name-large[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: 700;\n  margin: 0 0 1rem 0;\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.login-left[_ngcontent-%COMP%]   .branding-section[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .app-name-large[_ngcontent-%COMP%]   .app-logo-large[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  flex-shrink: 0;\n  position: relative;\n}\n.login-left[_ngcontent-%COMP%]   .branding-section[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .app-name-large[_ngcontent-%COMP%]   .app-logo-large[_ngcontent-%COMP%]   .logo-inner[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      #4a9eff 0%,\n      #7c3aed 100%);\n  border-radius: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 1.8rem;\n  box-shadow: 0 4px 20px rgba(74, 158, 255, 0.3), 0 0 30px rgba(124, 58, 237, 0.2);\n  position: relative;\n  transition: all 0.3s ease-in-out;\n}\n.login-left[_ngcontent-%COMP%]   .branding-section[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .app-name-large[_ngcontent-%COMP%]   .app-logo-large[_ngcontent-%COMP%]   .logo-inner[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  box-shadow: 0 6px 25px rgba(74, 158, 255, 0.4), 0 0 40px rgba(124, 58, 237, 0.3);\n}\n.login-left[_ngcontent-%COMP%]   .branding-section[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .app-name-large[_ngcontent-%COMP%]   .name-text[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #e0e7ff 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  letter-spacing: -1px;\n  line-height: 1;\n}\n.login-left[_ngcontent-%COMP%]   .branding-section[_ngcontent-%COMP%]   .info-intro[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.85);\n  font-size: 1rem;\n  line-height: 1.8;\n  text-align: left;\n  font-weight: 500;\n  margin: 0;\n  padding: 0;\n}\n.login-left[_ngcontent-%COMP%]   .branding-section[_ngcontent-%COMP%]   .about-section-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 1.5rem;\n  left: 0;\n  width: 100%;\n}\n.login-left[_ngcontent-%COMP%]   .branding-section[_ngcontent-%COMP%]   .about-section-toggle[_ngcontent-%COMP%]   .about-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.5rem 1rem;\n  background: rgba(74, 158, 255, 0.08);\n  border: 1px solid rgba(74, 158, 255, 0.2);\n  border-radius: 0.5rem;\n  color: var(--primary-accent);\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.login-left[_ngcontent-%COMP%]   .branding-section[_ngcontent-%COMP%]   .about-section-toggle[_ngcontent-%COMP%]   .about-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(74, 158, 255, 0.12);\n  border-color: rgba(74, 158, 255, 0.4);\n  transform: translateY(-1px);\n  box-shadow: 0 2px 8px rgba(74, 158, 255, 0.15);\n}\n.login-left[_ngcontent-%COMP%]   .branding-section[_ngcontent-%COMP%]   .about-section-toggle[_ngcontent-%COMP%]   .about-btn.active[_ngcontent-%COMP%] {\n  background: rgba(74, 158, 255, 0.15);\n  border-color: rgba(74, 158, 255, 0.4);\n}\n.login-left[_ngcontent-%COMP%]   .branding-section[_ngcontent-%COMP%]   .about-section-toggle[_ngcontent-%COMP%]   .about-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.login-left[_ngcontent-%COMP%]   .branding-section[_ngcontent-%COMP%]   .about-features[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 1rem;\n  animation: _ngcontent-%COMP%_slideDown 0.3s ease-out;\n  position: relative;\n  z-index: 1;\n}\n.login-left[_ngcontent-%COMP%]   .branding-section[_ngcontent-%COMP%]   .about-features[_ngcontent-%COMP%]   .about-features-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1rem;\n}\n.login-left[_ngcontent-%COMP%]   .branding-section[_ngcontent-%COMP%]   .about-features[_ngcontent-%COMP%]   .about-features-grid[_ngcontent-%COMP%]   .info-feature-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.5rem;\n  padding: 1rem 1.5rem;\n  background: rgba(74, 158, 255, 0.08);\n  border: 1px solid rgba(74, 158, 255, 0.15);\n  border-radius: 0.5rem;\n  transition: all 0.3s ease-in-out;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.login-left[_ngcontent-%COMP%]   .branding-section[_ngcontent-%COMP%]   .about-features[_ngcontent-%COMP%]   .about-features-grid[_ngcontent-%COMP%]   .info-feature-item[_ngcontent-%COMP%]:hover {\n  background: rgba(74, 158, 255, 0.12);\n  border-color: rgba(74, 158, 255, 0.3);\n  transform: translateX(5px);\n}\n.login-left[_ngcontent-%COMP%]   .branding-section[_ngcontent-%COMP%]   .about-features[_ngcontent-%COMP%]   .about-features-grid[_ngcontent-%COMP%]   .info-feature-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary-accent);\n  font-size: 1rem;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.login-left[_ngcontent-%COMP%]   .branding-section[_ngcontent-%COMP%]   .about-features[_ngcontent-%COMP%]   .about-features-grid[_ngcontent-%COMP%]   .info-feature-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-size: 1rem;\n  font-weight: 500;\n  display: block;\n}\n.login-left[_ngcontent-%COMP%]   .branding-section[_ngcontent-%COMP%]   .about-features[_ngcontent-%COMP%]   .about-features-grid[_ngcontent-%COMP%]   .info-feature-item[_ngcontent-%COMP%]   .feature-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  flex: 1;\n}\n.login-left[_ngcontent-%COMP%]   .branding-section[_ngcontent-%COMP%]   .about-features[_ngcontent-%COMP%]   .about-features-grid[_ngcontent-%COMP%]   .info-feature-item[_ngcontent-%COMP%]   .feature-content[_ngcontent-%COMP%]   .feature-main[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-size: 1rem;\n  font-weight: 600;\n  display: block;\n}\n.login-left[_ngcontent-%COMP%]   .branding-section[_ngcontent-%COMP%]   .about-features[_ngcontent-%COMP%]   .about-features-grid[_ngcontent-%COMP%]   .info-feature-item[_ngcontent-%COMP%]   .feature-content[_ngcontent-%COMP%]   .feature-sub[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.875rem;\n  font-weight: 400;\n  display: block;\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_logoFloat {\n  0%, 100% {\n    transform: translateY(0) scale(1);\n  }\n  50% {\n    transform: translateY(-10px) scale(1.05);\n  }\n}\n@keyframes _ngcontent-%COMP%_logoGlow {\n  0%, 100% {\n    opacity: 0.5;\n  }\n  50% {\n    opacity: 0.8;\n  }\n}\n@keyframes _ngcontent-%COMP%_sparkle {\n  0%, 100% {\n    transform: scale(1) rotate(0deg);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(1.2) rotate(180deg);\n    opacity: 0.7;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(-20px);\n  }\n}\n.login-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  background: transparent;\n  -webkit-backdrop-filter: blur(20px) saturate(180%);\n  backdrop-filter: blur(20px) saturate(180%);\n  position: relative;\n  z-index: 2;\n  box-shadow:\n    10px 0 80px rgba(0, 0, 0, 0.3),\n    0 0 40px rgba(74, 158, 255, 0.15),\n    inset 20px 0 50px rgba(0, 0, 0, 0.15);\n  height: 100vh;\n  min-height: 100vh;\n  border-radius: 50vh 0 50vh 0;\n  overflow: hidden;\n  isolation: isolate;\n  margin-left: -10vh;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 480px;\n  animation: _ngcontent-%COMP%_slideInRight 0.6s ease-out;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 3rem;\n  position: relative;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%]   .icon-circle[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  margin: 0 auto;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(74, 158, 255, 0.2),\n      rgba(124, 58, 237, 0.2));\n  border: 2px solid rgba(74, 158, 255, 0.3);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%]   .icon-circle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary-accent);\n  font-size: 2rem;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%]   .icon-circle[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: -4px;\n  border: 2px solid rgba(74, 158, 255, 0.2);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_rotate 3s linear infinite;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 0.5rem 0;\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      rgba(255, 255, 255, 0.8) 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   .form-subtitle[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 1rem;\n  margin: 0 0 1rem 0;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   .security-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.25rem 1rem;\n  background: rgba(34, 197, 94, 0.1);\n  border: 1px solid rgba(34, 197, 94, 0.2);\n  border-radius: 9999px;\n  color: #22c55e;\n  font-size: 0.75rem;\n  font-weight: 500;\n  margin-top: 1rem;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 1rem;\n  background: rgba(239, 68, 68, 0.1);\n  border: 1px solid rgba(239, 68, 68, 0.3);\n  border-radius: 0.5rem;\n  color: var(--error-color);\n  font-size: 0.875rem;\n  margin-bottom: 1.5rem;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  color: var(--text-primary);\n  font-size: 0.875rem;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .label-icon[_ngcontent-%COMP%] {\n  color: var(--primary-accent);\n  font-size: 0.75rem;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  transition: all 0.3s ease-in-out;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input-wrapper.focused[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%] {\n  color: var(--primary-accent);\n  transform: translateY(-50%) scale(1.1);\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input-wrapper.focused[_ngcontent-%COMP%]   .input-glow[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input-wrapper.has-value[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%] {\n  color: var(--primary-accent);\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 1.5rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-muted);\n  z-index: 2;\n  transition: all 0.3s ease-in-out;\n  font-size: 1rem;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1.5rem 2rem 1.5rem 4rem;\n  background: rgba(26, 26, 26, 0.8) !important;\n  border: 2px solid rgba(74, 158, 255, 0.2);\n  border-radius: 0.75rem;\n  color: var(--text-primary) !important;\n  font-size: 1rem;\n  transition: all 0.3s ease-in-out;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-accent);\n  box-shadow: 0 0 0 4px rgba(74, 158, 255, 0.1), 0 4px 20px rgba(74, 158, 255, 0.2);\n  background: rgba(30, 30, 30, 0.9) !important;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-muted);\n  opacity: 0.6;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:-webkit-autofill, \n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:-webkit-autofill:hover, \n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:-webkit-autofill:focus, \n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:-webkit-autofill:active {\n  -webkit-box-shadow: 0 0 0 30px rgba(26, 26, 26, 0.8) inset !important;\n  -webkit-text-fill-color: var(--text-primary) !important;\n  background-color: rgba(26, 26, 26, 0.8) !important;\n  background-clip: content-box !important;\n  transition: background-color 5000s ease-in-out 0s;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:-webkit-autofill:focus {\n  -webkit-box-shadow: 0 0 0 30px rgba(30, 30, 30, 0.9) inset !important;\n  background-color: rgba(30, 30, 30, 0.9) !important;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .input-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: -2px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(74, 158, 255, 0.3),\n      rgba(124, 58, 237, 0.3));\n  border-radius: 0.75rem;\n  opacity: 0;\n  transition: opacity 0.3s ease-in-out;\n  z-index: -1;\n  filter: blur(10px);\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .password-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 1.5rem;\n  top: 50%;\n  transform: translateY(-50%);\n  background: transparent;\n  border: none;\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease-in-out;\n  width: 32px;\n  height: 32px;\n  border-radius: 0.375rem;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .password-toggle[_ngcontent-%COMP%]:hover:not(:disabled) {\n  color: var(--primary-accent);\n  background: rgba(74, 158, 255, 0.1);\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .password-toggle[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .form-options[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .form-options[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  color: var(--text-secondary);\n  font-size: 0.875rem;\n  cursor: pointer;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .form-options[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .form-options[_ngcontent-%COMP%]   .forgot-password-link[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: var(--primary-accent);\n  font-size: 0.875rem;\n  cursor: pointer;\n  text-decoration: none;\n  transition: color 0.3s ease-in-out;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .form-options[_ngcontent-%COMP%]   .forgot-password-link[_ngcontent-%COMP%]:hover:not(:disabled) {\n  color: var(--secondary-accent);\n  text-decoration: underline;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .form-options[_ngcontent-%COMP%]   .forgot-password-link[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1.5rem 2rem;\n  background:\n    linear-gradient(\n      135deg,\n      #4a9eff 0%,\n      #7c3aed 100%);\n  border: none;\n  border-radius: 0.75rem;\n  color: white;\n  font-size: 1rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 1rem;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]   .btn-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]   .btn-content[_ngcontent-%COMP%]   .btn-arrow[_ngcontent-%COMP%] {\n  transition: transform 0.3s ease-in-out;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]   .btn-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: -2px;\n  background:\n    linear-gradient(\n      135deg,\n      #4a9eff,\n      #7c3aed);\n  border-radius: 0.75rem;\n  opacity: 0;\n  filter: blur(20px);\n  transition: opacity 0.3s ease-in-out;\n  z-index: 0;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]   .btn-shine[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background:\n    linear-gradient(\n      45deg,\n      transparent 30%,\n      rgba(255, 255, 255, 0.3) 50%,\n      transparent 70%);\n  transform: rotate(45deg);\n  transition: left 0.5s;\n  z-index: 1;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 30px rgba(74, 158, 255, 0.5), 0 0 40px rgba(124, 58, 237, 0.3);\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]:hover:not(:disabled)   .btn-glow[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]:hover:not(:disabled)   .btn-shine[_ngcontent-%COMP%] {\n  left: 100%;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]:hover:not(:disabled)   .btn-arrow[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .login-btn.loading[_ngcontent-%COMP%]   .btn-shine[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_shine 1.5s infinite;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin: 2rem 0;\n  position: relative;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]   .divider-line[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      rgba(74, 158, 255, 0.3) 50%,\n      transparent 100%);\n  position: relative;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]   .divider-line[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      rgba(124, 58, 237, 0.3) 50%,\n      transparent 100%);\n  animation: _ngcontent-%COMP%_shimmer 2s ease-in-out infinite;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]   .divider-text[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  padding: 0 1rem;\n  position: relative;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]   .divider-text[_ngcontent-%COMP%]::before, \n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]   .divider-text[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  width: 4px;\n  height: 4px;\n  background: var(--primary-accent);\n  border-radius: 50%;\n  top: 50%;\n  transform: translateY(-50%);\n  box-shadow: 0 0 8px rgba(74, 158, 255, 0.6);\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]   .divider-text[_ngcontent-%COMP%]::before {\n  left: -8px;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]   .divider-text[_ngcontent-%COMP%]::after {\n  right: -8px;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .social-login[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .social-login[_ngcontent-%COMP%]   .social-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem 1.5rem;\n  background: rgba(26, 26, 26, 0.8);\n  border: 2px solid rgba(74, 158, 255, 0.2);\n  border-radius: 0.75rem;\n  color: var(--text-primary);\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  position: relative;\n  overflow: hidden;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .social-login[_ngcontent-%COMP%]   .social-btn[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(74, 158, 255, 0.1),\n      rgba(124, 58, 237, 0.1));\n  opacity: 0;\n  transition: opacity 0.3s ease-in-out;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .social-login[_ngcontent-%COMP%]   .social-btn[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  position: relative;\n  z-index: 1;\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .social-login[_ngcontent-%COMP%]   .social-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .social-login[_ngcontent-%COMP%]   .social-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgba(30, 30, 30, 0.9);\n  border-color: rgba(74, 158, 255, 0.5);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 20px rgba(74, 158, 255, 0.3), 0 0 30px rgba(124, 58, 237, 0.2);\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .social-login[_ngcontent-%COMP%]   .social-btn[_ngcontent-%COMP%]:hover:not(:disabled)::before {\n  opacity: 1;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .social-login[_ngcontent-%COMP%]   .social-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .signup-section[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 2rem;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .signup-section[_ngcontent-%COMP%]   .signup-text[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.875rem;\n  margin-right: 0.25rem;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .signup-section[_ngcontent-%COMP%]   .signup-link[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: var(--primary-accent);\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  text-decoration: none;\n  transition: all 0.3s ease-in-out;\n  position: relative;\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.375rem;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .signup-section[_ngcontent-%COMP%]   .signup-link[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--primary-accent),\n      var(--secondary-accent));\n  transition: width 0.3s ease-in-out;\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .signup-section[_ngcontent-%COMP%]   .signup-link[_ngcontent-%COMP%]:hover:not(:disabled) {\n  color: var(--secondary-accent);\n  background: rgba(74, 158, 255, 0.05);\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .signup-section[_ngcontent-%COMP%]   .signup-link[_ngcontent-%COMP%]:hover:not(:disabled)::after {\n  width: calc(100% - 1rem);\n}\n.login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%]   .signup-section[_ngcontent-%COMP%]   .signup-link[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n@keyframes _ngcontent-%COMP%_rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_slideInRight {\n  from {\n    opacity: 0;\n    transform: translateX(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0%, 100% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_shine {\n  0% {\n    left: -100%;\n  }\n  100% {\n    left: 100%;\n  }\n}\n@media (max-width: 1024px) {\n  .login-page[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .login-left[_ngcontent-%COMP%] {\n    padding: 2rem;\n    min-height: 40vh;\n  }\n  .login-left[_ngcontent-%COMP%]   .branding-section[_ngcontent-%COMP%] {\n    gap: 2rem;\n  }\n  .login-left[_ngcontent-%COMP%]   .branding-section[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .app-name-large[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n  .login-left[_ngcontent-%COMP%]   .branding-section[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .app-name-large[_ngcontent-%COMP%]   .app-logo-large[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 50px;\n  }\n  .login-left[_ngcontent-%COMP%]   .branding-section[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .app-name-large[_ngcontent-%COMP%]   .app-logo-large[_ngcontent-%COMP%]   .logo-inner[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .login-left[_ngcontent-%COMP%]   .branding-section[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .info-intro[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n    padding-left: calc(50px + 1rem);\n  }\n  .login-left[_ngcontent-%COMP%]   .branding-section[_ngcontent-%COMP%]   .about-features[_ngcontent-%COMP%]   .about-features-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0.5rem;\n  }\n  .login-left[_ngcontent-%COMP%]   .branding-section[_ngcontent-%COMP%]   .about-features[_ngcontent-%COMP%]   .about-features-grid[_ngcontent-%COMP%]   .info-feature-item[_ngcontent-%COMP%] {\n    padding: 0.5rem 1rem;\n  }\n  .login-left[_ngcontent-%COMP%]   .branding-section[_ngcontent-%COMP%]   .about-features[_ngcontent-%COMP%]   .about-features-grid[_ngcontent-%COMP%]   .info-feature-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n   .login-left[_ngcontent-%COMP%]   .branding-section[_ngcontent-%COMP%]   .about-features[_ngcontent-%COMP%]   .about-features-grid[_ngcontent-%COMP%]   .info-feature-item[_ngcontent-%COMP%]   .feature-content[_ngcontent-%COMP%]   .feature-main[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n  .login-left[_ngcontent-%COMP%]   .branding-section[_ngcontent-%COMP%]   .about-features[_ngcontent-%COMP%]   .about-features-grid[_ngcontent-%COMP%]   .info-feature-item[_ngcontent-%COMP%]   .feature-content[_ngcontent-%COMP%]   .feature-sub[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n  .login-right[_ngcontent-%COMP%] {\n    padding: 2rem;\n    border-left: none;\n    border-top: 1px solid rgba(74, 158, 255, 0.1);\n  }\n}\n@media (max-width: 768px) {\n  .login-left[_ngcontent-%COMP%], \n   .login-right[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .login-left[_ngcontent-%COMP%]   .branding-section[_ngcontent-%COMP%] {\n    gap: 1.5rem;\n  }\n  .login-left[_ngcontent-%COMP%]   .branding-section[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .app-name-large[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    gap: 0.5rem;\n  }\n  .login-left[_ngcontent-%COMP%]   .branding-section[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .app-name-large[_ngcontent-%COMP%]   .app-logo-large[_ngcontent-%COMP%] {\n    width: 45px;\n    height: 45px;\n  }\n  .login-left[_ngcontent-%COMP%]   .branding-section[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .app-name-large[_ngcontent-%COMP%]   .app-logo-large[_ngcontent-%COMP%]   .logo-inner[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  .login-left[_ngcontent-%COMP%]   .branding-section[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .info-intro[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    padding-left: calc(45px + 0.5rem);\n  }\n  .login-left[_ngcontent-%COMP%]   .branding-section[_ngcontent-%COMP%]   .about-features[_ngcontent-%COMP%]   .about-features-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0.25rem;\n  }\n  .login-left[_ngcontent-%COMP%]   .branding-section[_ngcontent-%COMP%]   .about-features[_ngcontent-%COMP%]   .about-features-grid[_ngcontent-%COMP%]   .info-feature-item[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n  }\n  .login-left[_ngcontent-%COMP%]   .branding-section[_ngcontent-%COMP%]   .about-features[_ngcontent-%COMP%]   .about-features-grid[_ngcontent-%COMP%]   .info-feature-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n   .login-left[_ngcontent-%COMP%]   .branding-section[_ngcontent-%COMP%]   .about-features[_ngcontent-%COMP%]   .about-features-grid[_ngcontent-%COMP%]   .info-feature-item[_ngcontent-%COMP%]   .feature-content[_ngcontent-%COMP%]   .feature-main[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n  .login-left[_ngcontent-%COMP%]   .branding-section[_ngcontent-%COMP%]   .about-features[_ngcontent-%COMP%]   .about-features-grid[_ngcontent-%COMP%]   .info-feature-item[_ngcontent-%COMP%]   .feature-content[_ngcontent-%COMP%]   .feature-sub[_ngcontent-%COMP%] {\n    font-size: 0.65rem;\n  }\n  .login-right[_ngcontent-%COMP%]   .login-form-container[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=login-new.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginNewComponent, [{
    type: Component,
    args: [{ selector: "app-login-new", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="login-page">\r
  <!-- Animated Background -->\r
  <div class="login-background">\r
    <div class="bg-gradient-1"></div>\r
    <div class="bg-gradient-2"></div>\r
    <div class="bg-gradient-3"></div>\r
    <div class="floating-shapes">\r
      <div class="shape shape-1"></div>\r
      <div class="shape shape-2"></div>\r
      <div class="shape shape-3"></div>\r
      <div class="shape shape-4"></div>\r
    </div>\r
    <div class="grid-overlay"></div>\r
  </div>\r
\r
  <!-- Left Side - Branding -->\r
  <div class="login-left">\r
    <div class="branding-section">\r
      <!-- Logo and Brand -->\r
      <div class="logo-container">\r
        <h1 class="app-name-large">\r
          <div class="app-logo-large">\r
            <div class="logo-inner">\r
              <i class="fas fa-layer-group"></i>\r
            </div>\r
          </div>\r
          <span class="name-text">OmniPlanner</span>\r
        </h1>\r
      </div>\r
      \r
      <!-- Description Statement -->\r
      <p class="info-intro">Transform your vision into reality through strategic planning and intelligently streamlined workflows powered by smart task management. Achieve exceptional results with unmatched efficiency, smart budgeting, and seamless resource optimization.</p>\r
\r
      <!-- About Features - Collapsible -->\r
      <div class="about-features" *ngIf="showAboutSection">\r
        <div class="about-features-grid">\r
          <div class="info-feature-item">\r
            <i class="fas fa-check-circle"></i>\r
            <div class="feature-content">\r
              <span class="feature-main">Task Management</span>\r
              <span class="feature-sub">Task & Periodic Task</span>\r
            </div>\r
          </div>\r
          <div class="info-feature-item">\r
            <i class="fas fa-check-circle"></i>\r
            <span>Efficiency Planning</span>\r
          </div>\r
          <div class="info-feature-item">\r
            <i class="fas fa-check-circle"></i>\r
            <span>Budget Management</span>\r
          </div>\r
          <div class="info-feature-item">\r
            <i class="fas fa-check-circle"></i>\r
            <span>Resource Allocation</span>\r
          </div>\r
          <div class="info-feature-item">\r
            <i class="fas fa-check-circle"></i>\r
            <span>Time Management</span>\r
          </div>\r
          <div class="info-feature-item">\r
            <i class="fas fa-check-circle"></i>\r
            <span>Team Collaboration</span>\r
          </div>\r
          <div class="info-feature-item">\r
            <i class="fas fa-check-circle"></i>\r
            <span>Progress Tracking</span>\r
          </div>\r
          <div class="info-feature-item">\r
            <i class="fas fa-check-circle"></i>\r
            <span>Reporting & Analytics</span>\r
          </div>\r
          <div class="info-feature-item">\r
            <i class="fas fa-check-circle"></i>\r
            <span>Timer</span>\r
          </div>\r
          <div class="info-feature-item">\r
            <i class="fas fa-check-circle"></i>\r
            <span>Calendar</span>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- About Section Toggle - Bottom -->\r
      <div class="about-section-toggle">\r
        <button class="about-btn" (click)="toggleAboutSection()" [class.active]="showAboutSection">\r
          <i class="fas" [class.fa-info-circle]="!showAboutSection" [class.fa-times]="showAboutSection"></i>\r
          <span>{{ showAboutSection ? 'Hide' : 'About' }} Features</span>\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Right Side - Login Form -->\r
  <div class="login-right">\r
    <div class="login-form-container">\r
      <!-- Form Header with Animation -->\r
      <div class="form-header">\r
        <!-- <div class="header-icon">\r
          <div class="icon-circle">\r
            <i class="fas fa-shield-alt"></i>\r
          </div>\r
        </div> -->\r
        <h2 class="form-title">Welcome Back</h2>\r
        <p class="form-subtitle">Sign in to continue to OmniPlanner</p>\r
        <!-- <div class="security-badge">\r
          <i class="fas fa-lock"></i>\r
          <span>Secure Authentication</span>\r
        </div> -->\r
      </div>\r
\r
      <!-- Error Message -->\r
      <div class="error-message" *ngIf="errorMessage">\r
        <i class="fas fa-exclamation-circle"></i>\r
        <span>{{ errorMessage }}</span>\r
      </div>\r
\r
      <!-- Login Form -->\r
      <form class="login-form" (ngSubmit)="onLogin()">\r
        <div class="form-group">\r
          <label for="email">\r
            <!-- <i class="fas fa-envelope label-icon"></i> -->\r
            Email Address\r
          </label>\r
          <div class="input-wrapper" [class.focused]="emailFocused" [class.has-value]="email">\r
            <i class="fas fa-envelope input-icon"></i>\r
            <input \r
              type="email" \r
              id="email"\r
              class="form-input"\r
              placeholder="admin@omniplanner.com"\r
              [(ngModel)]="email"\r
              name="email"\r
              [disabled]="isLoading"\r
              (focus)="emailFocused = true"\r
              (blur)="emailFocused = false"\r
              autocomplete="email">\r
            <div class="input-glow"></div>\r
          </div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label for="password">\r
            <!-- <i class="fas fa-lock label-icon"></i> -->\r
            Password\r
          </label>\r
          <div class="input-wrapper" [class.focused]="passwordFocused" [class.has-value]="password">\r
            <i class="fas fa-lock input-icon"></i>\r
            <input \r
              [type]="showPassword ? 'text' : 'password'"\r
              id="password"\r
              class="form-input"\r
              placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"\r
              [(ngModel)]="password"\r
              name="password"\r
              [disabled]="isLoading"\r
              (focus)="passwordFocused = true"\r
              (blur)="passwordFocused = false"\r
              autocomplete="current-password">\r
            <button \r
              type="button"\r
              class="password-toggle"\r
              (click)="togglePasswordVisibility()"\r
              [disabled]="isLoading">\r
              <i class="fas" [class.fa-eye]="!showPassword" [class.fa-eye-slash]="showPassword"></i>\r
            </button>\r
            <div class="input-glow"></div>\r
          </div>\r
        </div>\r
\r
        <div class="form-options">\r
          <label class="checkbox-label">\r
            <input \r
              type="checkbox" \r
              [(ngModel)]="rememberMe"\r
              name="rememberMe"\r
              [disabled]="isLoading">\r
            <span>Remember me</span>\r
          </label>\r
          <button \r
            type="button"\r
            class="forgot-password-link"\r
            (click)="onForgotPassword()"\r
            [disabled]="isLoading">\r
            Forgot password?\r
          </button>\r
        </div>\r
\r
        <button \r
          type="submit"\r
          class="login-btn"\r
          [disabled]="isLoading"\r
          [class.loading]="isLoading">\r
          <span class="btn-content" *ngIf="!isLoading">\r
            <span>Sign In</span>\r
            <i class="fas fa-arrow-right btn-arrow"></i>\r
          </span>\r
          <span class="btn-content loading-content" *ngIf="isLoading">\r
            <i class="fas fa-spinner fa-spin"></i>\r
            <span>Authenticating...</span>\r
          </span>\r
          <div class="btn-glow"></div>\r
          <div class="btn-shine"></div>\r
        </button>\r
      </form>\r
\r
      <!-- Divider -->\r
      <div class="divider">\r
        <div class="divider-line"></div>\r
        <span class="divider-text">OR</span>\r
        <div class="divider-line"></div>\r
      </div>\r
\r
      <!-- Social Login -->\r
      <div class="social-login">\r
        <button \r
          class="social-btn google-btn"\r
          (click)="onGoogleLogin()"\r
          [disabled]="isLoading">\r
          <svg class="social-icon" viewBox="0 0 24 24" width="20" height="20">\r
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>\r
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>\r
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>\r
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>\r
          </svg>\r
          <span>Continue with Google</span>\r
        </button>\r
      </div>\r
\r
      <!-- Sign Up Link -->\r
      <div class="signup-section">\r
        <span class="signup-text">Don't have an account?</span>\r
        <button \r
          type="button"\r
          class="signup-link"\r
          (click)="onSignUp()"\r
          [disabled]="isLoading">\r
          Sign up\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
`, styles: ['/* src/app/components/login/login-new.scss */\n:root {\n  --primary-bg: #1a1a1a;\n  --secondary-bg: #2d2d2d;\n  --tertiary-bg: #3a3a3a;\n  --surface-bg: #2a2a2a;\n  --primary-accent: #4a9eff;\n  --secondary-accent: #7c3aed;\n  --success-color: #10b981;\n  --warning-color: #f59e0b;\n  --error-color: #ef4444;\n  --text-primary: #ffffff;\n  --text-secondary: #e5e5e5;\n  --text-muted: #a3a3a3;\n  --text-disabled: #6b7280;\n  --border-primary: #4a4a4a;\n  --border-secondary: #3a3a3a;\n  --border-accent: #5a5a5a;\n  --shadow-light: rgba(0, 0, 0, 0.1);\n  --shadow-medium: rgba(0, 0, 0, 0.2);\n  --shadow-heavy: rgba(0, 0, 0, 0.3);\n  --hover-bg: #3a3a3a;\n  --hover-accent: #5bb0ff;\n  --active-bg: #4a4a4a;\n  --active-accent: #3a8fdf;\n}\n.login-page {\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: 1.2fr 1fr;\n  position: relative;\n  overflow: hidden;\n  background: #0a0a0a;\n}\n.login-background {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  z-index: 0;\n  background-image: url("./media/login_page_bg.png");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.login-background .bg-gradient-1 {\n  position: absolute;\n  width: 800px;\n  height: 800px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(74, 158, 255, 0.15) 0%,\n      transparent 70%);\n  top: -400px;\n  left: -400px;\n  animation: float 20s ease-in-out infinite;\n}\n.login-background .bg-gradient-2 {\n  position: absolute;\n  width: 600px;\n  height: 600px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(124, 58, 237, 0.15) 0%,\n      transparent 70%);\n  bottom: -300px;\n  right: -300px;\n  animation: float 25s ease-in-out infinite reverse;\n}\n.login-background .bg-gradient-3 {\n  position: absolute;\n  width: 500px;\n  height: 500px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(34, 197, 94, 0.1) 0%,\n      transparent 70%);\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  animation: pulse 15s ease-in-out infinite;\n}\n.login-background .grid-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-image:\n    linear-gradient(rgba(74, 158, 255, 0.03) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(74, 158, 255, 0.03) 1px,\n      transparent 1px);\n  background-size: 50px 50px;\n  opacity: 0.5;\n}\n.login-background .floating-shapes {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.login-background .floating-shapes .shape {\n  position: absolute;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(74, 158, 255, 0.1),\n      rgba(124, 58, 237, 0.1));\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n}\n.login-background .floating-shapes .shape.shape-1 {\n  width: 200px;\n  height: 200px;\n  top: 10%;\n  left: 10%;\n  animation: float 15s ease-in-out infinite;\n}\n.login-background .floating-shapes .shape.shape-2 {\n  width: 150px;\n  height: 150px;\n  top: 60%;\n  left: 20%;\n  animation: float 20s ease-in-out infinite reverse;\n}\n.login-background .floating-shapes .shape.shape-3 {\n  width: 100px;\n  height: 100px;\n  top: 30%;\n  right: 15%;\n  animation: float 18s ease-in-out infinite;\n}\n.login-background .floating-shapes .shape.shape-4 {\n  width: 120px;\n  height: 120px;\n  bottom: 20%;\n  right: 25%;\n  animation: float 22s ease-in-out infinite reverse;\n}\n@keyframes float {\n  0%, 100% {\n    transform: translate(0, 0) rotate(0deg);\n  }\n  33% {\n    transform: translate(30px, -30px) rotate(120deg);\n  }\n  66% {\n    transform: translate(-20px, 20px) rotate(240deg);\n  }\n}\n@keyframes pulse {\n  0%, 100% {\n    opacity: 0.3;\n    transform: translate(-50%, -50%) scale(1);\n  }\n  50% {\n    opacity: 0.6;\n    transform: translate(-50%, -50%) scale(1.2);\n  }\n}\n.login-left {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  position: relative;\n  z-index: 1;\n  height: 100vh;\n  min-height: 100vh;\n  background: transparent;\n  overflow: hidden;\n  isolation: isolate;\n  box-shadow: inset -20px 0 40px rgba(0, 0, 0, 0.2), -10px 0 60px rgba(74, 158, 255, 0.08);\n}\n.login-left .branding-section {\n  max-width: 650px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  height: 100%;\n  position: relative;\n  justify-content: center;\n  align-items: flex-start;\n}\n.login-left .branding-section .logo-container {\n  text-align: left;\n  position: relative;\n}\n.login-left .branding-section .logo-container .app-name-large {\n  font-size: 3rem;\n  font-weight: 700;\n  margin: 0 0 1rem 0;\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.login-left .branding-section .logo-container .app-name-large .app-logo-large {\n  width: 60px;\n  height: 60px;\n  flex-shrink: 0;\n  position: relative;\n}\n.login-left .branding-section .logo-container .app-name-large .app-logo-large .logo-inner {\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      #4a9eff 0%,\n      #7c3aed 100%);\n  border-radius: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 1.8rem;\n  box-shadow: 0 4px 20px rgba(74, 158, 255, 0.3), 0 0 30px rgba(124, 58, 237, 0.2);\n  position: relative;\n  transition: all 0.3s ease-in-out;\n}\n.login-left .branding-section .logo-container .app-name-large .app-logo-large .logo-inner:hover {\n  transform: scale(1.05);\n  box-shadow: 0 6px 25px rgba(74, 158, 255, 0.4), 0 0 40px rgba(124, 58, 237, 0.3);\n}\n.login-left .branding-section .logo-container .app-name-large .name-text {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #e0e7ff 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  letter-spacing: -1px;\n  line-height: 1;\n}\n.login-left .branding-section .info-intro {\n  color: rgba(255, 255, 255, 0.85);\n  font-size: 1rem;\n  line-height: 1.8;\n  text-align: left;\n  font-weight: 500;\n  margin: 0;\n  padding: 0;\n}\n.login-left .branding-section .about-section-toggle {\n  position: absolute;\n  bottom: 1.5rem;\n  left: 0;\n  width: 100%;\n}\n.login-left .branding-section .about-section-toggle .about-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.5rem 1rem;\n  background: rgba(74, 158, 255, 0.08);\n  border: 1px solid rgba(74, 158, 255, 0.2);\n  border-radius: 0.5rem;\n  color: var(--primary-accent);\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.login-left .branding-section .about-section-toggle .about-btn:hover {\n  background: rgba(74, 158, 255, 0.12);\n  border-color: rgba(74, 158, 255, 0.4);\n  transform: translateY(-1px);\n  box-shadow: 0 2px 8px rgba(74, 158, 255, 0.15);\n}\n.login-left .branding-section .about-section-toggle .about-btn.active {\n  background: rgba(74, 158, 255, 0.15);\n  border-color: rgba(74, 158, 255, 0.4);\n}\n.login-left .branding-section .about-section-toggle .about-btn i {\n  font-size: 0.875rem;\n}\n.login-left .branding-section .about-features {\n  width: 100%;\n  margin-top: 1rem;\n  animation: slideDown 0.3s ease-out;\n  position: relative;\n  z-index: 1;\n}\n.login-left .branding-section .about-features .about-features-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1rem;\n}\n.login-left .branding-section .about-features .about-features-grid .info-feature-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.5rem;\n  padding: 1rem 1.5rem;\n  background: rgba(74, 158, 255, 0.08);\n  border: 1px solid rgba(74, 158, 255, 0.15);\n  border-radius: 0.5rem;\n  transition: all 0.3s ease-in-out;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.login-left .branding-section .about-features .about-features-grid .info-feature-item:hover {\n  background: rgba(74, 158, 255, 0.12);\n  border-color: rgba(74, 158, 255, 0.3);\n  transform: translateX(5px);\n}\n.login-left .branding-section .about-features .about-features-grid .info-feature-item i {\n  color: var(--primary-accent);\n  font-size: 1rem;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.login-left .branding-section .about-features .about-features-grid .info-feature-item span {\n  color: var(--text-primary);\n  font-size: 1rem;\n  font-weight: 500;\n  display: block;\n}\n.login-left .branding-section .about-features .about-features-grid .info-feature-item .feature-content {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  flex: 1;\n}\n.login-left .branding-section .about-features .about-features-grid .info-feature-item .feature-content .feature-main {\n  color: var(--text-primary);\n  font-size: 1rem;\n  font-weight: 600;\n  display: block;\n}\n.login-left .branding-section .about-features .about-features-grid .info-feature-item .feature-content .feature-sub {\n  color: var(--text-muted);\n  font-size: 0.875rem;\n  font-weight: 400;\n  display: block;\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes logoFloat {\n  0%, 100% {\n    transform: translateY(0) scale(1);\n  }\n  50% {\n    transform: translateY(-10px) scale(1.05);\n  }\n}\n@keyframes logoGlow {\n  0%, 100% {\n    opacity: 0.5;\n  }\n  50% {\n    opacity: 0.8;\n  }\n}\n@keyframes sparkle {\n  0%, 100% {\n    transform: scale(1) rotate(0deg);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(1.2) rotate(180deg);\n    opacity: 0.7;\n  }\n}\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes float {\n  0%, 100% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(-20px);\n  }\n}\n.login-right {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  background: transparent;\n  -webkit-backdrop-filter: blur(20px) saturate(180%);\n  backdrop-filter: blur(20px) saturate(180%);\n  position: relative;\n  z-index: 2;\n  box-shadow:\n    10px 0 80px rgba(0, 0, 0, 0.3),\n    0 0 40px rgba(74, 158, 255, 0.15),\n    inset 20px 0 50px rgba(0, 0, 0, 0.15);\n  height: 100vh;\n  min-height: 100vh;\n  border-radius: 50vh 0 50vh 0;\n  overflow: hidden;\n  isolation: isolate;\n  margin-left: -10vh;\n}\n.login-right .login-form-container {\n  width: 100%;\n  max-width: 480px;\n  animation: slideInRight 0.6s ease-out;\n}\n.login-right .login-form-container .form-header {\n  text-align: center;\n  margin-bottom: 3rem;\n  position: relative;\n}\n.login-right .login-form-container .form-header .header-icon {\n  margin-bottom: 1.5rem;\n}\n.login-right .login-form-container .form-header .header-icon .icon-circle {\n  width: 80px;\n  height: 80px;\n  margin: 0 auto;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(74, 158, 255, 0.2),\n      rgba(124, 58, 237, 0.2));\n  border: 2px solid rgba(74, 158, 255, 0.3);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n.login-right .login-form-container .form-header .header-icon .icon-circle i {\n  color: var(--primary-accent);\n  font-size: 2rem;\n}\n.login-right .login-form-container .form-header .header-icon .icon-circle::before {\n  content: "";\n  position: absolute;\n  inset: -4px;\n  border: 2px solid rgba(74, 158, 255, 0.2);\n  border-radius: 50%;\n  animation: rotate 3s linear infinite;\n}\n.login-right .login-form-container .form-header .form-title {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 0.5rem 0;\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      rgba(255, 255, 255, 0.8) 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.login-right .login-form-container .form-header .form-subtitle {\n  color: var(--text-muted);\n  font-size: 1rem;\n  margin: 0 0 1rem 0;\n}\n.login-right .login-form-container .form-header .security-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.25rem 1rem;\n  background: rgba(34, 197, 94, 0.1);\n  border: 1px solid rgba(34, 197, 94, 0.2);\n  border-radius: 9999px;\n  color: #22c55e;\n  font-size: 0.75rem;\n  font-weight: 500;\n  margin-top: 1rem;\n}\n.login-right .login-form-container .error-message {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 1rem;\n  background: rgba(239, 68, 68, 0.1);\n  border: 1px solid rgba(239, 68, 68, 0.3);\n  border-radius: 0.5rem;\n  color: var(--error-color);\n  font-size: 0.875rem;\n  margin-bottom: 1.5rem;\n}\n.login-right .login-form-container .error-message i {\n  font-size: 1rem;\n}\n.login-right .login-form-container .login-form .form-group {\n  margin-bottom: 2rem;\n}\n.login-right .login-form-container .login-form .form-group label {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  color: var(--text-primary);\n  font-size: 0.875rem;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n}\n.login-right .login-form-container .login-form .form-group label .label-icon {\n  color: var(--primary-accent);\n  font-size: 0.75rem;\n}\n.login-right .login-form-container .login-form .form-group .input-wrapper {\n  position: relative;\n  transition: all 0.3s ease-in-out;\n}\n.login-right .login-form-container .login-form .form-group .input-wrapper.focused .input-icon {\n  color: var(--primary-accent);\n  transform: translateY(-50%) scale(1.1);\n}\n.login-right .login-form-container .login-form .form-group .input-wrapper.focused .input-glow {\n  opacity: 1;\n}\n.login-right .login-form-container .login-form .form-group .input-wrapper.has-value .input-icon {\n  color: var(--primary-accent);\n}\n.login-right .login-form-container .login-form .form-group .input-wrapper .input-icon {\n  position: absolute;\n  left: 1.5rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-muted);\n  z-index: 2;\n  transition: all 0.3s ease-in-out;\n  font-size: 1rem;\n}\n.login-right .login-form-container .login-form .form-group .input-wrapper .form-input {\n  width: 100%;\n  padding: 1.5rem 2rem 1.5rem 4rem;\n  background: rgba(26, 26, 26, 0.8) !important;\n  border: 2px solid rgba(74, 158, 255, 0.2);\n  border-radius: 0.75rem;\n  color: var(--text-primary) !important;\n  font-size: 1rem;\n  transition: all 0.3s ease-in-out;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.login-right .login-form-container .login-form .form-group .input-wrapper .form-input:focus {\n  outline: none;\n  border-color: var(--primary-accent);\n  box-shadow: 0 0 0 4px rgba(74, 158, 255, 0.1), 0 4px 20px rgba(74, 158, 255, 0.2);\n  background: rgba(30, 30, 30, 0.9) !important;\n}\n.login-right .login-form-container .login-form .form-group .input-wrapper .form-input:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.login-right .login-form-container .login-form .form-group .input-wrapper .form-input::placeholder {\n  color: var(--text-muted);\n  opacity: 0.6;\n}\n.login-right .login-form-container .login-form .form-group .input-wrapper .form-input:-webkit-autofill,\n.login-right .login-form-container .login-form .form-group .input-wrapper .form-input:-webkit-autofill:hover,\n.login-right .login-form-container .login-form .form-group .input-wrapper .form-input:-webkit-autofill:focus,\n.login-right .login-form-container .login-form .form-group .input-wrapper .form-input:-webkit-autofill:active {\n  -webkit-box-shadow: 0 0 0 30px rgba(26, 26, 26, 0.8) inset !important;\n  -webkit-text-fill-color: var(--text-primary) !important;\n  background-color: rgba(26, 26, 26, 0.8) !important;\n  background-clip: content-box !important;\n  transition: background-color 5000s ease-in-out 0s;\n}\n.login-right .login-form-container .login-form .form-group .input-wrapper .form-input:-webkit-autofill:focus {\n  -webkit-box-shadow: 0 0 0 30px rgba(30, 30, 30, 0.9) inset !important;\n  background-color: rgba(30, 30, 30, 0.9) !important;\n}\n.login-right .login-form-container .login-form .form-group .input-wrapper .input-glow {\n  position: absolute;\n  inset: -2px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(74, 158, 255, 0.3),\n      rgba(124, 58, 237, 0.3));\n  border-radius: 0.75rem;\n  opacity: 0;\n  transition: opacity 0.3s ease-in-out;\n  z-index: -1;\n  filter: blur(10px);\n}\n.login-right .login-form-container .login-form .form-group .input-wrapper .password-toggle {\n  position: absolute;\n  right: 1.5rem;\n  top: 50%;\n  transform: translateY(-50%);\n  background: transparent;\n  border: none;\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease-in-out;\n  width: 32px;\n  height: 32px;\n  border-radius: 0.375rem;\n}\n.login-right .login-form-container .login-form .form-group .input-wrapper .password-toggle:hover:not(:disabled) {\n  color: var(--primary-accent);\n  background: rgba(74, 158, 255, 0.1);\n}\n.login-right .login-form-container .login-form .form-group .input-wrapper .password-toggle:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.login-right .login-form-container .login-form .form-options {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n}\n.login-right .login-form-container .login-form .form-options .checkbox-label {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  color: var(--text-secondary);\n  font-size: 0.875rem;\n  cursor: pointer;\n}\n.login-right .login-form-container .login-form .form-options .checkbox-label input[type=checkbox] {\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n}\n.login-right .login-form-container .login-form .form-options .forgot-password-link {\n  background: transparent;\n  border: none;\n  color: var(--primary-accent);\n  font-size: 0.875rem;\n  cursor: pointer;\n  text-decoration: none;\n  transition: color 0.3s ease-in-out;\n}\n.login-right .login-form-container .login-form .form-options .forgot-password-link:hover:not(:disabled) {\n  color: var(--secondary-accent);\n  text-decoration: underline;\n}\n.login-right .login-form-container .login-form .form-options .forgot-password-link:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.login-right .login-form-container .login-form .login-btn {\n  width: 100%;\n  padding: 1.5rem 2rem;\n  background:\n    linear-gradient(\n      135deg,\n      #4a9eff 0%,\n      #7c3aed 100%);\n  border: none;\n  border-radius: 0.75rem;\n  color: white;\n  font-size: 1rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 1rem;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.login-right .login-form-container .login-form .login-btn .btn-content {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.login-right .login-form-container .login-form .login-btn .btn-content .btn-arrow {\n  transition: transform 0.3s ease-in-out;\n}\n.login-right .login-form-container .login-form .login-btn .btn-glow {\n  position: absolute;\n  inset: -2px;\n  background:\n    linear-gradient(\n      135deg,\n      #4a9eff,\n      #7c3aed);\n  border-radius: 0.75rem;\n  opacity: 0;\n  filter: blur(20px);\n  transition: opacity 0.3s ease-in-out;\n  z-index: 0;\n}\n.login-right .login-form-container .login-form .login-btn .btn-shine {\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background:\n    linear-gradient(\n      45deg,\n      transparent 30%,\n      rgba(255, 255, 255, 0.3) 50%,\n      transparent 70%);\n  transform: rotate(45deg);\n  transition: left 0.5s;\n  z-index: 1;\n}\n.login-right .login-form-container .login-form .login-btn:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 30px rgba(74, 158, 255, 0.5), 0 0 40px rgba(124, 58, 237, 0.3);\n}\n.login-right .login-form-container .login-form .login-btn:hover:not(:disabled) .btn-glow {\n  opacity: 1;\n}\n.login-right .login-form-container .login-form .login-btn:hover:not(:disabled) .btn-shine {\n  left: 100%;\n}\n.login-right .login-form-container .login-form .login-btn:hover:not(:disabled) .btn-arrow {\n  transform: translateX(4px);\n}\n.login-right .login-form-container .login-form .login-btn.loading .btn-shine {\n  animation: shine 1.5s infinite;\n}\n.login-right .login-form-container .login-form .login-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n}\n.login-right .login-form-container .divider {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin: 2rem 0;\n  position: relative;\n}\n.login-right .login-form-container .divider .divider-line {\n  flex: 1;\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      rgba(74, 158, 255, 0.3) 50%,\n      transparent 100%);\n  position: relative;\n}\n.login-right .login-form-container .divider .divider-line::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      rgba(124, 58, 237, 0.3) 50%,\n      transparent 100%);\n  animation: shimmer 2s ease-in-out infinite;\n}\n.login-right .login-form-container .divider .divider-text {\n  color: var(--text-muted);\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  padding: 0 1rem;\n  position: relative;\n}\n.login-right .login-form-container .divider .divider-text::before,\n.login-right .login-form-container .divider .divider-text::after {\n  content: "";\n  position: absolute;\n  width: 4px;\n  height: 4px;\n  background: var(--primary-accent);\n  border-radius: 50%;\n  top: 50%;\n  transform: translateY(-50%);\n  box-shadow: 0 0 8px rgba(74, 158, 255, 0.6);\n}\n.login-right .login-form-container .divider .divider-text::before {\n  left: -8px;\n}\n.login-right .login-form-container .divider .divider-text::after {\n  right: -8px;\n}\n.login-right .login-form-container .social-login {\n  margin-bottom: 1.5rem;\n}\n.login-right .login-form-container .social-login .social-btn {\n  width: 100%;\n  padding: 1rem 1.5rem;\n  background: rgba(26, 26, 26, 0.8);\n  border: 2px solid rgba(74, 158, 255, 0.2);\n  border-radius: 0.75rem;\n  color: var(--text-primary);\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  position: relative;\n  overflow: hidden;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.login-right .login-form-container .social-login .social-btn::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(74, 158, 255, 0.1),\n      rgba(124, 58, 237, 0.1));\n  opacity: 0;\n  transition: opacity 0.3s ease-in-out;\n}\n.login-right .login-form-container .social-login .social-btn .social-icon {\n  flex-shrink: 0;\n  position: relative;\n  z-index: 1;\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));\n}\n.login-right .login-form-container .social-login .social-btn span {\n  position: relative;\n  z-index: 1;\n}\n.login-right .login-form-container .social-login .social-btn:hover:not(:disabled) {\n  background: rgba(30, 30, 30, 0.9);\n  border-color: rgba(74, 158, 255, 0.5);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 20px rgba(74, 158, 255, 0.3), 0 0 30px rgba(124, 58, 237, 0.2);\n}\n.login-right .login-form-container .social-login .social-btn:hover:not(:disabled)::before {\n  opacity: 1;\n}\n.login-right .login-form-container .social-login .social-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.login-right .login-form-container .signup-section {\n  text-align: center;\n  margin-top: 2rem;\n}\n.login-right .login-form-container .signup-section .signup-text {\n  color: var(--text-muted);\n  font-size: 0.875rem;\n  margin-right: 0.25rem;\n}\n.login-right .login-form-container .signup-section .signup-link {\n  background: transparent;\n  border: none;\n  color: var(--primary-accent);\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  text-decoration: none;\n  transition: all 0.3s ease-in-out;\n  position: relative;\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.375rem;\n}\n.login-right .login-form-container .signup-section .signup-link::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--primary-accent),\n      var(--secondary-accent));\n  transition: width 0.3s ease-in-out;\n}\n.login-right .login-form-container .signup-section .signup-link:hover:not(:disabled) {\n  color: var(--secondary-accent);\n  background: rgba(74, 158, 255, 0.05);\n}\n.login-right .login-form-container .signup-section .signup-link:hover:not(:disabled)::after {\n  width: calc(100% - 1rem);\n}\n.login-right .login-form-container .signup-section .signup-link:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes slideInRight {\n  from {\n    opacity: 0;\n    transform: translateX(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes shimmer {\n  0%, 100% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n}\n@keyframes shine {\n  0% {\n    left: -100%;\n  }\n  100% {\n    left: 100%;\n  }\n}\n@media (max-width: 1024px) {\n  .login-page {\n    grid-template-columns: 1fr;\n  }\n  .login-left {\n    padding: 2rem;\n    min-height: 40vh;\n  }\n  .login-left .branding-section {\n    gap: 2rem;\n  }\n  .login-left .branding-section .logo-container .app-name-large {\n    font-size: 2.5rem;\n  }\n  .login-left .branding-section .logo-container .app-name-large .app-logo-large {\n    width: 50px;\n    height: 50px;\n  }\n  .login-left .branding-section .logo-container .app-name-large .app-logo-large .logo-inner {\n    font-size: 1.5rem;\n  }\n  .login-left .branding-section .logo-container .info-intro {\n    font-size: 0.875rem;\n    padding-left: calc(50px + 1rem);\n  }\n  .login-left .branding-section .about-features .about-features-grid {\n    grid-template-columns: 1fr;\n    gap: 0.5rem;\n  }\n  .login-left .branding-section .about-features .about-features-grid .info-feature-item {\n    padding: 0.5rem 1rem;\n  }\n  .login-left .branding-section .about-features .about-features-grid .info-feature-item span,\n  .login-left .branding-section .about-features .about-features-grid .info-feature-item .feature-content .feature-main {\n    font-size: 0.875rem;\n  }\n  .login-left .branding-section .about-features .about-features-grid .info-feature-item .feature-content .feature-sub {\n    font-size: 0.75rem;\n  }\n  .login-right {\n    padding: 2rem;\n    border-left: none;\n    border-top: 1px solid rgba(74, 158, 255, 0.1);\n  }\n}\n@media (max-width: 768px) {\n  .login-left,\n  .login-right {\n    padding: 1.5rem;\n  }\n  .login-left .branding-section {\n    gap: 1.5rem;\n  }\n  .login-left .branding-section .logo-container .app-name-large {\n    font-size: 2rem;\n    gap: 0.5rem;\n  }\n  .login-left .branding-section .logo-container .app-name-large .app-logo-large {\n    width: 45px;\n    height: 45px;\n  }\n  .login-left .branding-section .logo-container .app-name-large .app-logo-large .logo-inner {\n    font-size: 1.3rem;\n  }\n  .login-left .branding-section .logo-container .info-intro {\n    font-size: 0.75rem;\n    padding-left: calc(45px + 0.5rem);\n  }\n  .login-left .branding-section .about-features .about-features-grid {\n    grid-template-columns: 1fr;\n    gap: 0.25rem;\n  }\n  .login-left .branding-section .about-features .about-features-grid .info-feature-item {\n    padding: 0.5rem;\n  }\n  .login-left .branding-section .about-features .about-features-grid .info-feature-item span,\n  .login-left .branding-section .about-features .about-features-grid .info-feature-item .feature-content .feature-main {\n    font-size: 0.75rem;\n  }\n  .login-left .branding-section .about-features .about-features-grid .info-feature-item .feature-content .feature-sub {\n    font-size: 0.65rem;\n  }\n  .login-right .login-form-container {\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=login-new.css.map */\n'] }]
  }], () => [{ type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginNewComponent, { className: "LoginNewComponent", filePath: "src/app/components/login/login-new.ts", lineNumber: 14 });
})();
export {
  LoginNewComponent
};
//# sourceMappingURL=chunk-63VRP5IQ.js.map
