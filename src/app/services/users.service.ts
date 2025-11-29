import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { API_CONFIG } from '../shared/config/api.config';

export interface User {
  id: number;
  email: string;
  username: string;
  first_name: string;
  last_name: string;
  phone?: string;
  is_active: boolean;
  email_verified: boolean;
  last_login?: string;
  created_on: string;
  last_modified_on: string;
}

export interface UserViewModel extends User {
  roles: RoleViewModel[];
  created_by_name?: string;
  last_modified_by_name?: string;
}

export interface RoleViewModel {
  id: number;
  name: string;
  description?: string;
  is_active: boolean;
}

export interface CreateUserRequest {
  email: string;
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  phone?: string;
  roleIds: number[];
  is_active: boolean;
}

export interface UpdateUserRequest {
  id: number;
  email: string;
  username: string;
  password?: string;
  first_name: string;
  last_name: string;
  phone?: string;
  roleIds: number[];
  is_active: boolean;
}

export interface ServiceResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

@Injectable({ providedIn: 'root' })
export class UsersService {
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<UserViewModel[]> {
    return this.http.get<ServiceResponse<UserViewModel[]>>(API_CONFIG.users.getAll)
      .pipe(map(response => response.data || []));
  }

  getUserById(id: number): Observable<UserViewModel> {
    return this.http.get<ServiceResponse<UserViewModel>>(API_CONFIG.users.getById(id))
      .pipe(map(response => response.data!));
  }

  createUser(user: CreateUserRequest): Observable<UserViewModel> {
    return this.http.post<ServiceResponse<UserViewModel>>(API_CONFIG.users.create, user)
      .pipe(map(response => response.data!));
  }

  updateUser(user: UpdateUserRequest): Observable<UserViewModel> {
    return this.http.put<ServiceResponse<UserViewModel>>(API_CONFIG.users.update, user)
      .pipe(map(response => response.data!));
  }

  deleteUser(id: number, isHardDelete: boolean = false): Observable<boolean> {
    return this.http.delete<ServiceResponse<boolean>>(API_CONFIG.users.delete(id, isHardDelete))
      .pipe(map(response => response.success));
  }

  changePassword(userId: number, newPassword: string): Observable<boolean> {
    // Backend expects string in body, not JSON object
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<ServiceResponse<boolean>>(
      API_CONFIG.users.changePassword(userId), 
      JSON.stringify(newPassword),
      { headers }
    )
      .pipe(map(response => response.success));
  }
}

