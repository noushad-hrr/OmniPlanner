import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

export interface ConfirmationOptions {
  title?: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  confirmClass?: 'primary' | 'danger' | 'warn' | 'success';
}

export interface ConfirmationResult {
  confirmed: boolean;
}

@Injectable({ providedIn: 'root' })
export class ConfirmationService {
  private confirmationSubject = new Subject<ConfirmationOptions & { resolve: (result: ConfirmationResult) => void }>();
  confirmations$ = this.confirmationSubject.asObservable();

  confirm(options: ConfirmationOptions): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      this.confirmationSubject.next({
        ...options,
        resolve: (result) => resolve(result.confirmed)
      });
    });
  }
}

