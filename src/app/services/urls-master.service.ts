import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { API_CONFIG } from '../shared/config/api.config';

export interface UrlDoc {
  id: number;
  label: string;
  url: string;
  category_id?: number | null;
  created_by?: number;
  created_on?: string;
  last_modified_by?: number;
  last_modified_on?: string;
  is_active?: boolean;
  is_deleted?: boolean;
}

export interface CredentialInfo {
  id: number;
  provider: string;
  credential_name: string;
  credential_id: string;
}

export interface UrlDocViewModel extends UrlDoc {
  created_by_name?: string;
  last_modified_by_name?: string;
  category_name?: string;
  category_icon?: string;
  credentials?: CredentialInfo[];
}

export interface ServiceResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

@Injectable({ providedIn: 'root' })
export class UrlsMasterService {
  constructor(private http: HttpClient) {}

  getAllUrls(): Observable<UrlDocViewModel[]> {
    return this.http.get<ServiceResponse<UrlDocViewModel[]>>(API_CONFIG.urls.getAll)
      .pipe(map(response => response.data || []));
  }

  getUrlById(id: number): Observable<UrlDoc> {
    return this.http.get<ServiceResponse<UrlDoc>>(API_CONFIG.urls.getById(id))
      .pipe(map(response => response.data!));
  }

  addUpdateUrl(doc: UrlDoc, credentialIds?: number[]): Observable<UrlDoc> {
    // Only use UrlDocRequest format if credentialIds is provided and not empty
    // Otherwise, send just the UrlDoc for backward compatibility
    const payload = (credentialIds && credentialIds.length > 0) 
      ? { urlDoc: doc, credentialIds: credentialIds } 
      : doc;
    return this.http.post<ServiceResponse<UrlDoc>>(API_CONFIG.urls.addUpdate, payload)
      .pipe(map(response => response.data!));
  }

  deleteUrl(id: number, isHardDelete: boolean = false): Observable<boolean> {
    return this.http.delete<ServiceResponse<boolean>>(API_CONFIG.urls.delete(id, isHardDelete))
      .pipe(map(response => response.success));
  }

  getUrlCredentials(urlId: number): Observable<CredentialInfo[]> {
    return this.http.get<ServiceResponse<CredentialInfo[]>>(API_CONFIG.urls.getCredentials(urlId))
      .pipe(map(response => response.data || []));
  }
}


