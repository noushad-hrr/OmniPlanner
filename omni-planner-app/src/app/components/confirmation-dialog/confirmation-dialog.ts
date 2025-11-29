import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConfirmationService, ConfirmationOptions } from '../../services/confirmation.service';

@Component({
  selector: 'app-confirmation-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirmation-dialog.html',
  styleUrls: ['./confirmation-dialog.scss']
})
export class ConfirmationDialogComponent implements OnInit, OnDestroy {
  show = false;
  title = 'Confirm';
  message = '';
  confirmText = 'Confirm';
  cancelText = 'Cancel';
  confirmClass: 'primary' | 'danger' | 'warn' | 'success' = 'primary';
  
  private subscription?: Subscription;
  private currentResolve?: (result: { confirmed: boolean }) => void;

  constructor(private confirmationService: ConfirmationService) {}

  ngOnInit(): void {
    this.subscription = this.confirmationService.confirmations$.subscribe(data => {
      this.title = data.title || 'Confirm';
      this.message = data.message;
      this.confirmText = data.confirmText || 'Confirm';
      this.cancelText = data.cancelText || 'Cancel';
      this.confirmClass = data.confirmClass || 'primary';
      this.currentResolve = data.resolve;
      this.show = true;
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  onConfirm(): void {
    if (this.currentResolve) {
      this.currentResolve({ confirmed: true });
      this.currentResolve = undefined;
    }
    this.show = false;
  }

  onCancel(): void {
    if (this.currentResolve) {
      this.currentResolve({ confirmed: false });
      this.currentResolve = undefined;
    }
    this.show = false;
  }

  onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.onCancel();
    }
  }
}

