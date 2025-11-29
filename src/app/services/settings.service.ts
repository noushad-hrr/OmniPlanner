import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserPreferences } from '../components/settings/settings';
import { API_CONFIG } from '../shared/config/api.config';
import { StorageUtil } from '../shared/utils/storage.util';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private apiUrl = `${API_CONFIG.baseUrl}/Settings`;
  
  constructor(private http: HttpClient) {}
  
  /**
   * Get user preferences from backend
   */
  getUserPreferences(): Observable<UserPreferences | null> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    
    return this.http.get<{ success: boolean; data: UserPreferences | null; message: string }>(`${this.apiUrl}/GetUserPreferences`, { headers })
      .pipe(
        map(response => response.data),
        catchError((error) => {
          console.warn('API not available, using localStorage:', error);
          return of(this.getFromLocalStorage());
        })
      );
  }
  
  /**
   * Save user preferences to backend
   */
  saveUserPreferences(preferences: UserPreferences): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    
    return this.http.post<{ success: boolean; data: any; message: string }>(`${this.apiUrl}/SaveUserPreferences`, preferences, { headers })
      .pipe(
        map(response => response),
        catchError((error) => {
          console.warn('API not available, saving to localStorage:', error);
          this.saveToLocalStorage(preferences);
          return of({ success: true });
        })
      );
  }
  
  /**
   * Get available application themes
   */
  getAppThemes(): Observable<any[]> {
    return this.http.get<{ success: boolean; data: any[]; message: string }>(`${this.apiUrl}/GetAppThemes`)
      .pipe(
        map(response => response.data),
        catchError(() => {
          return of([
            { id: 'theme1', name: 'Theme 1', description: 'Default dark theme', isAvailable: true }
          ]);
        })
      );
  }
  
  /**
   * Get available icon themes
   */
  getIconThemes(): Observable<any[]> {
    return this.http.get<{ success: boolean; data: any[]; message: string }>(`${this.apiUrl}/GetIconThemes`)
      .pipe(
        map(response => response.data),
        catchError(() => {
          return of([
            { id: 'default', name: 'Default Icons', description: 'Standard FontAwesome icons', isDefault: true }
          ]);
        })
      );
  }
  
  /**
   * Fallback: Get from localStorage
   */
  private getFromLocalStorage(): UserPreferences | null {
    try {
      const stored = StorageUtil.getItem<string>('omni-planner-preferences');
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (error) {
      console.error('Error reading from localStorage:', error);
    }
    return null;
  }
  
  /**
   * Fallback: Save to localStorage
   */
  private saveToLocalStorage(preferences: UserPreferences): void {
    try {
      StorageUtil.setItem('omni-planner-preferences', preferences);
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }
}

