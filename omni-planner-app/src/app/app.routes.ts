import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { PermissionGuard } from './guards/permission.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./components/login/login-new').then(m => m.LoginNewComponent)
  },
  {
    path: '',
    redirectTo: '/tasks',
    pathMatch: 'full'
  },
  {
    path: 'tasks',
    loadComponent: () => import('./components/tasks/tasks').then(m => m.TasksComponent),
    canActivate: [AuthGuard, PermissionGuard],
    data: { permission: 'tasks.view' }
  },
  {
    path: 'tasks2',
    loadComponent: () => import('./components/tasks2/tasks2').then(m => m.Tasks2Component),
    canActivate: [AuthGuard, PermissionGuard],
    data: { permission: 'tasks2.view' }
  },
  {
    path: 'budget',
    loadComponent: () => import('./components/budget/budget').then(m => m.BudgetComponent),
    canActivate: [AuthGuard, PermissionGuard],
    data: { permission: 'budget.view' }
  },
  {
    path: 'notes',
    loadComponent: () => import('./components/notes/notes').then(m => m.NotesComponent),
    canActivate: [AuthGuard, PermissionGuard],
    data: { permission: 'notes.view' }
  },
  {
    path: 'settings',
    loadComponent: () => import('./components/settings/settings').then(m => m.SettingsComponent),
    canActivate: [AuthGuard, PermissionGuard],
    data: { permission: 'settings.view' }
  },
  {
    path: 'masters',
    children: [
      {
        path: 'category',
        loadComponent: () => import('./components/category-master/category-master').then(m => m.CategoryMasterComponent),
        canActivate: [AuthGuard, PermissionGuard],
        data: { permission: 'categories.view' }
      },
      {
        path: 'status',
        loadComponent: () => import('./components/status-master/status-master').then(m => m.StatusMasterComponent),
        canActivate: [AuthGuard, PermissionGuard],
        data: { permission: 'statuses.view' }
      },
      {
        path: 'priority',
        loadComponent: () => import('./components/priority-master/priority-master').then(m => m.PriorityMasterComponent),
        canActivate: [AuthGuard, PermissionGuard],
        data: { permission: 'priorities.view' }
      },
      {
        path: 'urls-docs',
        loadComponent: () => import('./components/urls-master/urls-master').then(m => m.UrlsMasterComponent),
        canActivate: [AuthGuard, PermissionGuard],
        data: { permission: 'urls.view' }
      },
      {
        path: 'credentials',
        loadComponent: () => import('./components/credentials-master/credentials-master').then(m => m.CredentialsMasterComponent),
        canActivate: [AuthGuard, PermissionGuard],
        data: { permission: 'credentials.view' }
      }
    ]
  },
  {
    path: 'administration',
    children: [
      {
        path: 'users',
        loadComponent: () => import('./components/user-management/user-management').then(m => m.UserManagementComponent),
        canActivate: [AuthGuard, PermissionGuard],
        data: { permission: 'users.view' }
      },
      {
        path: 'roles',
        loadComponent: () => import('./components/role-management/role-management').then(m => m.RoleManagementComponent),
        canActivate: [AuthGuard, PermissionGuard],
        data: { permission: 'roles.view' }
      },
      {
        path: 'permissions',
        loadComponent: () => import('./components/permission-management/permission-management').then(m => m.PermissionManagementComponent),
        canActivate: [AuthGuard, PermissionGuard],
        data: { permission: 'permissions.view' }
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/tasks'
  }
];
