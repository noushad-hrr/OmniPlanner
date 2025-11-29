import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { API_CONFIG } from '../shared/config/api.config';

export interface Credential {
  id: number;
  provider: string;
  credential_name: string;
  credential_id: string;
  credential_password?: string;
  additional_fields?: string; // JSON string
  notes?: string;
  created_by?: number;
  created_on?: string;
  last_modified_by?: number;
  last_modified_on?: string;
  is_active?: boolean;
  is_deleted?: boolean;
}

export interface CredentialViewModel extends Credential {
  created_by_name?: string;
  last_modified_by_name?: string;
}

export interface ServiceResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CredentialsMasterService {
  constructor(private http: HttpClient) {}

  getAllCredentials(): Observable<CredentialViewModel[]> {
    return this.http.get<ServiceResponse<CredentialViewModel[]>>(API_CONFIG.credentials.getAll).pipe(
      map(response => response.data || [])
    );
  }

  getCredentialById(id: number): Observable<Credential> {
    return this.http.get<ServiceResponse<Credential>>(API_CONFIG.credentials.getById(id)).pipe(
      map(response => response.data!)
    );
  }

  addUpdateCredential(credential: Credential): Observable<Credential> {
    return this.http.post<ServiceResponse<Credential>>(API_CONFIG.credentials.addUpdate, credential).pipe(
      map(response => response.data!)
    );
  }

  deleteCredential(id: number, isHardDelete: boolean = false): Observable<boolean> {
    return this.http.delete<ServiceResponse<boolean>>(API_CONFIG.credentials.delete(id, isHardDelete)).pipe(
      map(response => response.success)
    );
  }
}

