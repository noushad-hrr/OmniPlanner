import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { API_CONFIG } from '../shared/config/api.config';

export interface Category {
  id: number;
  category: string;
  icon: string;
  created_by?: number;
  created_on?: string;
  last_modified_by?: number;
  last_modified_on?: string;
  is_active?: boolean;
  is_deleted?: boolean;
}

export interface CategoryViewModel extends Category {
  color?: string;  // Add color property
  created_by_name?: string;
  last_modified_by_name?: string;
}

export interface ServiceResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

@Injectable({ providedIn: 'root' })
export class CategoryMasterService {
  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<CategoryViewModel[]> {
    return this.http.get<ServiceResponse<CategoryViewModel[]>>(API_CONFIG.categories.getAll)
      .pipe(
        map(response => response.data || [])
      );
  }

  getCategoryById(id: number): Observable<Category> {
    return this.http.get<ServiceResponse<Category>>(API_CONFIG.categories.getById(id))
      .pipe(
        map(response => response.data!)
      );
  }

  addUpdateCategory(category: Category): Observable<Category> {
    return this.http.post<ServiceResponse<Category>>(API_CONFIG.categories.addUpdate, category)
      .pipe(
        map(response => response.data!)
      );
  }

  deleteCategory(id: number, isHardDelete: boolean = false): Observable<boolean> {
    return this.http.delete<ServiceResponse<boolean>>(API_CONFIG.categories.delete(id, isHardDelete))
      .pipe(
        map(response => response.success)
      );
  }
}

