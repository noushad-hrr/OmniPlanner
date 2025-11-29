import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { API_CONFIG } from '../shared/config/api.config';

export interface Priority {
  id: number;
  priority: string;
  color: string;
  created_by?: number;
  created_on?: string;
  last_modified_by?: number;
  last_modified_on?: string;
  is_active?: boolean;
  is_deleted?: boolean;
  is_default?: boolean;
}

export interface PriorityViewModel extends Priority {
  created_by_name?: string;
  last_modified_by_name?: string;
}

export interface ServiceResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

@Injectable({ providedIn: 'root' })
export class PriorityMasterService {
  constructor(private http: HttpClient) {}

  getAllPriorities(): Observable<PriorityViewModel[]> {
    return this.http.get<ServiceResponse<PriorityViewModel[]>>(API_CONFIG.priorities.getAll)
      .pipe(map(response => response.data || []));
  }

  getPriorityById(id: number): Observable<Priority> {
    return this.http.get<ServiceResponse<Priority>>(API_CONFIG.priorities.getById(id))
      .pipe(map(response => response.data!));
  }

  addUpdatePriority(priority: Priority): Observable<Priority> {
    return this.http.post<ServiceResponse<Priority>>(API_CONFIG.priorities.addUpdate, priority)
      .pipe(map(response => response.data!));
  }

  deletePriority(id: number, isHardDelete: boolean = false): Observable<boolean> {
    return this.http.delete<ServiceResponse<boolean>>(API_CONFIG.priorities.delete(id, isHardDelete))
      .pipe(map(response => response.success));
  }
}


