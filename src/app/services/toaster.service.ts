import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type ToastType = 'success' | 'error' | 'info' | 'warn';

export interface ToastMessage {
  id: number;
  type: ToastType;
  text: string;
  timeoutMs: number;
}

@Injectable({ providedIn: 'root' })
export class ToasterService {
  private sequence = 1;
  private readonly messagesSubject = new BehaviorSubject<ToastMessage[]>([]);
  readonly messages$ = this.messagesSubject.asObservable();

  show(text: string, type: ToastType = 'info', timeoutMs = 3500): void {
    const msg: ToastMessage = { id: this.sequence++, type, text, timeoutMs };
    const current = this.messagesSubject.getValue();
    this.messagesSubject.next([...current, msg]);
    window.setTimeout(() => this.dismiss(msg.id), timeoutMs);
  }

  success(text: string, timeoutMs = 3000): void { this.show(text, 'success', timeoutMs); }
  error(text: string, timeoutMs = 5000): void { this.show(text, 'error', timeoutMs); }
  info(text: string, timeoutMs = 3500): void { this.show(text, 'info', timeoutMs); }
  warn(text: string, timeoutMs = 4000): void { this.show(text, 'warn', timeoutMs); }

  dismiss(id: number): void {
    const current = this.messagesSubject.getValue();
    this.messagesSubject.next(current.filter(m => m.id !== id));
  }
}


