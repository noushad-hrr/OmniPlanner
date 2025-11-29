import { Directive, Input, TemplateRef, ViewContainerRef, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Subject, takeUntil } from 'rxjs';

@Directive({
  selector: '[appHasPermission]',
  standalone: true
})
export class HasPermissionDirective implements OnInit, OnDestroy {
  @Input() appHasPermission!: string | string[];
  @Input() appHasPermissionMode: 'all' | 'any' = 'any'; // 'all' = user must have ALL permissions, 'any' = user must have ANY permission

  private destroy$ = new Subject<void>();
  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService: AuthService
  ) {}

  ngOnInit() {
    // Subscribe to auth changes to re-evaluate permissions
    this.authService.currentUser$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.updateView();
    });

    // Initial check
    this.updateView();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private updateView() {
    const hasPermission = this.checkPermission();

    if (hasPermission && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (!hasPermission && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }

  private checkPermission(): boolean {
    if (!this.appHasPermission) {
      return true; // No permission specified, show element
    }

    const permissions = Array.isArray(this.appHasPermission) 
      ? this.appHasPermission 
      : [this.appHasPermission];

    if (permissions.length === 0) {
      return true;
    }

    if (this.appHasPermissionMode === 'all') {
      // User must have ALL permissions
      return permissions.every(permission => this.authService.hasPermission(permission));
    } else {
      // User must have ANY permission
      return permissions.some(permission => this.authService.hasPermission(permission));
    }
  }
}

