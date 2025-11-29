// Common Loader Service - Manages global loading state
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$: Observable<boolean> = this.loadingSubject.asObservable();
  
  private loadingCount = 0;

  /**
   * Show the loader
   */
  show(): void {
    this.loadingCount++;
    if (this.loadingCount === 1) {
      this.loadingSubject.next(true);
    }
  }

  /**
   * Hide the loader
   */
  hide(): void {
    this.loadingCount--;
    if (this.loadingCount <= 0) {
      this.loadingCount = 0;
      this.loadingSubject.next(false);
    }
  }

  /**
   * Reset the loader (force hide)
   */
  reset(): void {
    this.loadingCount = 0;
    this.loadingSubject.next(false);
  }

  /**
   * Check if loader is currently active
   */
  get isLoading(): boolean {
    return this.loadingSubject.value;
  }
}

