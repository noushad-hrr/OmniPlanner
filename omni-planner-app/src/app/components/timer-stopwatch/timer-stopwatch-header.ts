import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimerStopwatchService } from './timer-stopwatch.service';

@Component({
  selector: 'app-timer-stopwatch-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="timer-header-widget" [class.expanded]="showFullTimer" [class.running]="timerService.isRunning">
      <!-- Compact View -->
      <div class="timer-compact" (click)="toggleExpand()" *ngIf="!showFullTimer">
        <div class="timer-icon" [class.active]="timerService.isRunning">
          <i class="fas" [class]="timerService.mode === 'timer' ? 'fa-clock' : 'fa-stopwatch'"></i>
        </div>
        <div class="timer-display-compact">
          <div class="timer-time">{{ timerService.formatTime(timerService.time) }}</div>
          <div class="timer-mode">{{ timerService.mode === 'timer' ? 'Timer' : 'Stopwatch' }}</div>
        </div>
        <button class="timer-control-compact" (click)="toggleTimer($event)">
          <i class="fas" [class]="timerService.isRunning ? 'fa-pause' : 'fa-play'"></i>
        </button>
      </div>

      <!-- Expanded View -->
      <div class="timer-expanded" *ngIf="showFullTimer">
        <div class="timer-expanded-header">
          <div class="timer-mode-toggle">
            <button class="mode-btn-small" [class.active]="timerService.mode === 'stopwatch'" (click)="timerService.toggleMode()">
              <i class="fas fa-stopwatch"></i>
            </button>
            <button class="mode-btn-small" [class.active]="timerService.mode === 'timer'" (click)="timerService.toggleMode()">
              <i class="fas fa-clock"></i>
            </button>
          </div>
          <button class="close-btn" (click)="showFullTimer = false">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="timer-expanded-content">
          <!-- Timer Input Fields (shown only in timer mode when not running) -->
          <div class="timer-inputs-header" *ngIf="timerService.mode === 'timer' && !timerService.isRunning">
            <div class="timer-input-group">
              <label>Hours</label>
              <input 
                type="number" 
                class="timer-input-field"
                [(ngModel)]="timerService.timerHours"
                (change)="onTimerInputChange()"
                (input)="onTimerInputChange()"
                min="0"
                max="23"
                placeholder="0">
            </div>
            <div class="timer-input-group">
              <label>Minutes</label>
              <input 
                type="number" 
                class="timer-input-field"
                [(ngModel)]="timerService.timerMinutes"
                (change)="onTimerInputChange()"
                (input)="onTimerInputChange()"
                min="0"
                max="59"
                placeholder="0">
            </div>
            <div class="timer-input-group">
              <label>Seconds</label>
              <input 
                type="number" 
                class="timer-input-field"
                [(ngModel)]="timerService.timerSeconds"
                (change)="onTimerInputChange()"
                (input)="onTimerInputChange()"
                min="0"
                max="59"
                placeholder="0">
            </div>
          </div>
          
          <!-- Quick Presets (shown only in timer mode when not running) -->
          <div class="timer-presets-header" *ngIf="timerService.mode === 'timer' && !timerService.isRunning">
            <button 
              class="preset-btn-header"
              *ngFor="let preset of presets"
              (click)="usePreset(preset)">
              {{ preset }}m
            </button>
          </div>
          
          <div class="time-display-header">
            <div class="time-value-header">{{ timerService.formatTime(timerService.time) }}</div>
          </div>
          <div class="timer-controls-header">
            <button class="control-btn-header" 
                    [class.start]="!timerService.isRunning" 
                    [class.pause]="timerService.isRunning"
                    (click)="handleStartPause()"
                    [disabled]="timerService.mode === 'timer' && timerService.getTimerTotalTime() === 0 && !timerService.isRunning">
              <i class="fas" [class]="timerService.isRunning ? 'fa-pause' : 'fa-play'"></i>
            </button>
            <button class="control-btn-header reset" (click)="handleReset()">
              <i class="fas fa-redo"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .timer-header-widget {
      position: relative;
      display: flex;
      align-items: center;
    }

    .timer-compact {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 12px;
      background: rgba(74, 158, 255, 0.1);
      border: 1px solid rgba(74, 158, 255, 0.2);
      border-radius: 20px;
      cursor: pointer;
      transition: all 0.3s ease;
      min-width: 140px;
    }

    .timer-compact:hover {
      background: rgba(74, 158, 255, 0.15);
      border-color: rgba(74, 158, 255, 0.4);
    }

    .timer-compact.running {
      background: rgba(74, 158, 255, 0.2);
      border-color: rgba(74, 158, 255, 0.5);
      box-shadow: 0 0 10px rgba(74, 158, 255, 0.3);
    }

    .timer-icon {
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(74, 158, 255, 0.2);
      border-radius: 50%;
      color: var(--primary-accent);
      font-size: 14px;
    }

    .timer-icon.active {
      animation: pulse 2s ease-in-out infinite;
    }

    .timer-display-compact {
      flex: 1;
      text-align: left;
    }

    .timer-time {
      font-size: 14px;
      font-weight: 600;
      color: var(--text-primary);
      font-family: 'Courier New', monospace;
      line-height: 1.2;
    }

    .timer-mode {
      font-size: 10px;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .timer-control-compact {
      width: 28px;
      height: 28px;
      border: none;
      background: rgba(74, 158, 255, 0.3);
      border-radius: 50%;
      color: white;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 10px;
      transition: all 0.2s;
    }

    .timer-control-compact:hover {
      background: rgba(74, 158, 255, 0.5);
      transform: scale(1.1);
    }

    .timer-expanded {
      position: absolute;
      top: calc(100% + 10px);
      right: 0;
      width: 360px;
      background: var(--secondary-bg);
      border: 1px solid rgba(74, 158, 255, 0.3);
      border-radius: 12px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
      z-index: 1000;
      padding: 16px;
    }

    .timer-expanded-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
    }

    .timer-mode-toggle {
      display: flex;
      gap: 4px;
      background: rgba(74, 158, 255, 0.1);
      padding: 4px;
      border-radius: 8px;
    }

    .mode-btn-small {
      width: 32px;
      height: 32px;
      border: none;
      background: transparent;
      border-radius: 6px;
      color: var(--text-muted);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;
    }

    .mode-btn-small.active {
      background: linear-gradient(135deg, var(--primary-accent), var(--secondary-accent));
      color: white;
    }

    .close-btn {
      width: 28px;
      height: 28px;
      border: none;
      background: transparent;
      color: var(--text-muted);
      cursor: pointer;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .close-btn:hover {
      background: rgba(239, 68, 68, 0.1);
      color: var(--error-color);
    }

    .timer-inputs-header {
      display: flex;
      gap: 8px;
      margin-bottom: 12px;
      padding: 12px;
      background: rgba(74, 158, 255, 0.05);
      border-radius: 8px;
      
      .timer-input-group {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 4px;
        
        label {
          font-size: 11px;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 600;
        }
        
        .timer-input-field {
          width: 100%;
          padding: 8px;
          background: var(--secondary-bg);
          border: 1px solid var(--border-primary);
          border-radius: 6px;
          color: var(--text-primary);
          font-size: 16px;
          font-weight: 600;
          text-align: center;
          font-family: 'Courier New', monospace;
          transition: all 0.2s;
          
          &:focus {
            outline: none;
            border-color: var(--primary-accent);
            box-shadow: 0 0 0 3px rgba(74, 158, 255, 0.1);
          }
          
          &::-webkit-inner-spin-button,
          &::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          
          &[type=number] {
            -moz-appearance: textfield;
          }
        }
      }
    }
    
    .timer-presets-header {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-bottom: 12px;
      
      .preset-btn-header {
        flex: 1;
        min-width: calc(33.333% - 4px);
        padding: 8px 12px;
        background: rgba(74, 158, 255, 0.1);
        border: 1px solid rgba(74, 158, 255, 0.2);
        border-radius: 6px;
        color: var(--text-primary);
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
        
        &:hover {
          background: rgba(74, 158, 255, 0.2);
          border-color: rgba(74, 158, 255, 0.4);
          transform: translateY(-1px);
        }
      }
    }

    .time-display-header {
      text-align: center;
      padding: 20px;
      background: rgba(74, 158, 255, 0.1);
      border-radius: 8px;
      margin-bottom: 12px;
    }

    .time-value-header {
      font-size: 32px;
      font-weight: bold;
      font-family: 'Courier New', monospace;
      color: var(--text-primary);
      letter-spacing: 2px;
    }

    .timer-controls-header {
      display: flex;
      gap: 8px;
      justify-content: center;
    }

    .control-btn-header {
      width: 48px;
      height: 48px;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      transition: all 0.2s;
    }

    .control-btn-header.start {
      background: linear-gradient(135deg, #22c55e, #16a34a);
      color: white;
    }

    .control-btn-header.pause {
      background: linear-gradient(135deg, #eab308, #ca8a04);
      color: white;
    }

    .control-btn-header.reset {
      background: var(--tertiary-bg);
      color: var(--text-primary);
      border: 1px solid var(--border-primary);
    }

    .control-btn-header:hover:not(:disabled) {
      transform: scale(1.1);
    }

    .control-btn-header:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.7; }
    }
  `]
})
export class TimerStopwatchHeaderComponent implements OnInit, OnDestroy {
  showFullTimer = false;
  private clickListener?: EventListener;
  
  // Preset timers (in minutes)
  presets = [5, 10, 15, 20, 30, 45, 60];

  constructor(public timerService: TimerStopwatchService) {}
  
  usePreset(minutes: number): void {
    if (this.timerService.isRunning) {
      this.timerService.pause();
    }
    this.timerService.timerHours = 0;
    this.timerService.timerMinutes = minutes;
    this.timerService.timerSeconds = 0;
    this.timerService.setTimer();
  }

  ngOnInit(): void {
    // Close expanded view when clicking outside
    this.clickListener = (event: Event) => {
      if (this.showFullTimer) {
        const widget = document.querySelector('.timer-header-widget');
        if (widget && !widget.contains(event.target as Node)) {
          this.showFullTimer = false;
        }
      }
    };
    setTimeout(() => {
      document.addEventListener('click', this.clickListener!);
    }, 0);
  }

  ngOnDestroy(): void {
    if (this.clickListener) {
      document.removeEventListener('click', this.clickListener);
    }
  }

  toggleExpand(): void {
    this.showFullTimer = !this.showFullTimer;
  }

  onTimerInputChange(): void {
    // Update timer display immediately when input changes
    if (!this.timerService.isRunning) {
      this.timerService.setTimer();
    }
  }
  
  handleStartPause(): void {
    if (this.timerService.isRunning) {
      this.timerService.pause();
    } else {
      // Ensure timer is synced before starting
      if (this.timerService.mode === 'timer') {
        this.timerService.setTimer();
      }
      this.timerService.start();
    }
  }
  
  handleReset(): void {
    this.timerService.reset();
  }
  
  toggleTimer(event: Event): void {
    event.stopPropagation();
    this.handleStartPause();
  }
}

