import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { API_CONFIG } from '../shared/config/api.config';

export interface Permission {
  id: number;
  name: string;
  code: string;
  description?: string;
  module?: string;
  is_active: boolean;
  created_on?: string;
  last_modified_on?: string;
}

export interface PermissionViewModel extends Permission {}

export interface CreatePermissionRequest {
  name: string;
  code: string;
  description?: string;
  module?: string;
  is_active: boolean;
}

export interface UpdatePermissionRequest {
  id: number;
  name: string;
  code: string;
  description?: string;
  module?: string;
  is_active: boolean;
}

export interface ServiceResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

@Injectable({ providedIn: 'root' })
export class PermissionsService {
  constructor(private http: HttpClient) {}

  getAllPermissions(): Observable<PermissionViewModel[]> {
    return this.http.get<ServiceResponse<PermissionViewModel[]>>(API_CONFIG.permissions.getAll)
      .pipe(map(response => response.data || []));
  }

  getPermissionsByModule(module: string): Observable<PermissionViewModel[]> {
    return this.http.get<ServiceResponse<PermissionViewModel[]>>(API_CONFIG.permissions.getByModule(module))
      .pipe(map(response => response.data || []));
  }

  getPermissionById(id: number): Observable<PermissionViewModel> {
    return this.http.get<ServiceResponse<PermissionViewModel>>(API_CONFIG.permissions.getById(id))
      .pipe(map(response => response.data!));
  }

  createPermission(permission: CreatePermissionRequest): Observable<PermissionViewModel> {
    return this.http.post<ServiceResponse<PermissionViewModel>>(API_CONFIG.permissions.create, permission)
      .pipe(map(response => response.data!));
  }

  updatePermission(permission: UpdatePermissionRequest): Observable<PermissionViewModel> {
    return this.http.put<ServiceResponse<PermissionViewModel>>(API_CONFIG.permissions.update, permission)
      .pipe(map(response => response.data!));
  }

  deletePermission(id: number, isHardDelete: boolean = false): Observable<boolean> {
    return this.http.delete<ServiceResponse<boolean>>(API_CONFIG.permissions.delete(id, isHardDelete))
      .pipe(map(response => response.success));
  }

  getUniqueModules(): Observable<string[]> {
    return this.http.get<ServiceResponse<string[]>>(API_CONFIG.permissions.getUniqueModules)
      .pipe(map(response => response.data || []));
  }
}

