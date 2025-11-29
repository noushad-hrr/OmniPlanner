import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { API_CONFIG } from '../shared/config/api.config';

export interface Status {
  id: number;
  status: string;
  color: string;
  created_by?: number;
  created_on?: string;
  last_modified_by?: number;
  last_modified_on?: string;
  is_active?: boolean;
  is_deleted?: boolean;
  is_default?: boolean;
  is_completion_status?: boolean;
}

export interface StatusViewModel extends Status {
  created_by_name?: string;
  last_modified_by_name?: string;
}

export interface ServiceResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

@Injectable({ providedIn: 'root' })
export class StatusMasterService {
  constructor(private http: HttpClient) {}

  getAllStatuses(): Observable<StatusViewModel[]> {
    return this.http.get<ServiceResponse<StatusViewModel[]>>(API_CONFIG.statuses.getAll)
      .pipe(map(response => response.data || []));
  }

  getStatusById(id: number): Observable<Status> {
    return this.http.get<ServiceResponse<Status>>(API_CONFIG.statuses.getById(id))
      .pipe(map(response => response.data!));
  }

  addUpdateStatus(status: Status): Observable<Status> {
    return this.http.post<ServiceResponse<Status>>(API_CONFIG.statuses.addUpdate, status)
      .pipe(map(response => response.data!));
  }

  deleteStatus(id: number, isHardDelete: boolean = false): Observable<boolean> {
    return this.http.delete<ServiceResponse<boolean>>(API_CONFIG.statuses.delete(id, isHardDelete))
      .pipe(map(response => response.success));
  }
}


