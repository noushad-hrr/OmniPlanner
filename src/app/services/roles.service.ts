import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { API_CONFIG } from '../shared/config/api.config';

export interface Role {
  id: number;
  name: string;
  description?: string;
  is_active: boolean;
  created_on?: string;
  last_modified_on?: string;
}

export interface RoleViewModel extends Role {
  created_by_name?: string;
  last_modified_by_name?: string;
}

export interface PermissionViewModel {
  id: number;
  name: string;
  code: string;
  description?: string;
  module?: string;
  is_active: boolean;
}

export interface CreateRoleRequest {
  name: string;
  description?: string;
  permissionIds: number[];
  is_active: boolean;
}

export interface UpdateRoleRequest {
  id: number;
  name: string;
  description?: string;
  permissionIds: number[];
  is_active: boolean;
}

export interface ServiceResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

@Injectable({ providedIn: 'root' })
export class RolesService {
  constructor(private http: HttpClient) {}

  getAllRoles(): Observable<RoleViewModel[]> {
    return this.http.get<ServiceResponse<RoleViewModel[]>>(API_CONFIG.roles.getAll)
      .pipe(map(response => response.data || []));
  }

  getRoleById(id: number): Observable<any> {
    return this.http.get<ServiceResponse<any>>(API_CONFIG.roles.getById(id))
      .pipe(map(response => response.data!));
  }

  createRole(role: CreateRoleRequest): Observable<RoleViewModel> {
    return this.http.post<ServiceResponse<RoleViewModel>>(API_CONFIG.roles.create, role)
      .pipe(map(response => response.data!));
  }

  updateRole(role: UpdateRoleRequest): Observable<RoleViewModel> {
    return this.http.put<ServiceResponse<RoleViewModel>>(API_CONFIG.roles.update, role)
      .pipe(map(response => response.data!));
  }

  deleteRole(id: number, isHardDelete: boolean = false): Observable<boolean> {
    return this.http.delete<ServiceResponse<boolean>>(API_CONFIG.roles.delete(id, isHardDelete))
      .pipe(map(response => response.success));
  }

  getRolePermissions(roleId: number): Observable<PermissionViewModel[]> {
    return this.http.get<ServiceResponse<PermissionViewModel[]>>(API_CONFIG.roles.getPermissions(roleId))
      .pipe(map(response => response.data || []));
  }
}

