import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimerStopwatchService, NotificationTone } from './timer-stopwatch.service';

export interface Lap {
  id: number;
  time: number;
  timestamp: Date;
}

@Component({
  selector: 'app-timer-stopwatch',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './timer-stopwatch.html',
  styleUrls: ['./timer-stopwatch.scss']
})
export class TimerStopwatchComponent implements OnInit, OnDestroy {
  laps: Lap[] = [];
  lapCounter = 0;
  lastLapTime = 0;
  
  // Preset timers (in minutes)
  presets = [5, 10, 15, 20, 30, 45, 60];
  
  // Available tones
  availableTones: {value: NotificationTone, label: string}[] = [
    { value: 'beep', label: 'Beep' },
    { value: 'chime', label: 'Chime' },
    { value: 'alarm', label: 'Alarm' },
    { value: 'notification', label: 'Notification' },
    { value: 'bell', label: 'Bell' }
  ];

  constructor(public timerService: TimerStopwatchService) {}
  
  get mode() { return this.timerService.mode; }
  get isRunning() { return this.timerService.isRunning; }
  get time() { return this.timerService.time; }
  get timerHours() { return this.timerService.timerHours; }
  set timerHours(val: number) { this.timerService.timerHours = val; }
  get timerMinutes() { return this.timerService.timerMinutes; }
  set timerMinutes(val: number) { this.timerService.timerMinutes = val; }
  get timerSeconds() { return this.timerService.timerSeconds; }
  set timerSeconds(val: number) { this.timerService.timerSeconds = val; }
  get soundEnabled() { return this.timerService.settings.soundEnabled; }
  set soundEnabled(val: boolean) { 
    this.timerService.updateSettings({ soundEnabled: val }); 
  }
  get notificationEnabled() { return this.timerService.settings.notificationEnabled; }
  set notificationEnabled(val: boolean) { 
    this.timerService.updateSettings({ notificationEnabled: val }); 
    if (val) {
      this.timerService.requestNotificationPermission();
    }
  }
  get selectedTone() { return this.timerService.settings.selectedTone; }
  set selectedTone(val: NotificationTone) {
    this.timerService.updateSettings({ selectedTone: val });
  }
  get customMessage() { return this.timerService.settings.customMessage; }
  set customMessage(val: string) {
    this.timerService.updateSettings({ customMessage: val });
  }

  ngOnInit(): void {
    // Subscribe to timer updates
    this.timerService.getTime$().subscribe(time => {
      // Check lap notifications when time updates
      if (this.timerService.mode === 'stopwatch' && this.timerService.isRunning) {
        this.checkLapNotifications();
      }
    });
    this.loadLapsState();
  }

  ngOnDestroy(): void {
    // Service handles state saving
  }

  toggleMode(): void {
    this.timerService.toggleMode();
    if (this.timerService.mode === 'stopwatch') {
      this.laps = [];
      this.lapCounter = 0;
      this.lastLapTime = 0;
    }
  }

  start(): void {
    this.timerService.start();
  }

  pause(): void {
    this.timerService.pause();
  }

  reset(): void {
    this.timerService.reset();
    if (this.timerService.mode === 'stopwatch') {
      this.laps = [];
      this.lapCounter = 0;
      this.lastLapTime = 0;
    }
  }

  setTimer(): void {
    this.timerService.setTimer();
  }

  getTimerTotalTime(): number {
    return this.timerService.getTimerTotalTime();
  }

  usePreset(minutes: number): void {
    if (this.timerService.isRunning) {
      this.timerService.pause();
    }
    this.timerService.timerHours = 0;
    this.timerService.timerMinutes = minutes;
    this.timerService.timerSeconds = 0;
    this.setTimer();
  }

  addLap(): void {
    if (!this.timerService.isRunning || this.timerService.mode !== 'stopwatch') return;
    
    const lapTime = this.timerService.time - this.lastLapTime;
    this.laps.unshift({
      id: ++this.lapCounter,
      time: lapTime,
      timestamp: new Date()
    });
    this.lastLapTime = this.timerService.time;
    
    // Keep only last 20 laps
    if (this.laps.length > 20) {
      this.laps = this.laps.slice(0, 20);
    }
    
    this.saveLapsState();
  }

  clearLaps(): void {
    this.laps = [];
    this.lapCounter = 0;
    this.lastLapTime = 0;
    this.saveLapsState();
  }

  saveLapsState(): void {
    try {
      const state = {
        laps: this.laps,
        lapCounter: this.lapCounter,
        lastLapTime: this.lastLapTime
      };
      localStorage.setItem('timer-laps-state', JSON.stringify(state));
    } catch (error) {
      console.warn('Failed to save laps state:', error);
    }
  }

  loadLapsState(): void {
    try {
      const saved = localStorage.getItem('timer-laps-state');
      if (saved) {
        const state = JSON.parse(saved);
        this.laps = state.laps || [];
        this.lapCounter = state.lapCounter || 0;
        this.lastLapTime = state.lastLapTime || 0;
      }
    } catch (error) {
      console.warn('Failed to load laps state:', error);
    }
  }

  formatTime(ms: number): string {
    return this.timerService.formatTime(ms);
  }

  formatLapTime(ms: number): string {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const centiseconds = Math.floor((ms % 1000) / 10);
    return `${this.pad(minutes)}:${this.pad(seconds)}.${this.pad(centiseconds, 2)}`;
  }

  pad(num: number, length: number = 2): string {
    return num.toString().padStart(length, '0');
  }

  getFastestLap(): Lap | null {
    if (this.laps.length === 0) return null;
    return this.laps.reduce((fastest, lap) => lap.time < fastest.time ? lap : fastest);
  }

  getSlowestLap(): Lap | null {
    if (this.laps.length === 0) return null;
    return this.laps.reduce((slowest, lap) => lap.time > slowest.time ? lap : slowest);
  }

  checkLapNotifications(): void {
    // Notify every 5 minutes in stopwatch mode
    if (this.timerService.mode === 'stopwatch' && this.timerService.time > 0 && this.timerService.time % 300000 === 0) {
      this.timerService.playNotificationSound();
    }
  }

  exportLaps(): void {
    if (this.laps.length === 0) return;
    
    let csv = 'Lap,Time,Difference,Timestamp\n';
    let previousTime = 0;
    
    this.laps.forEach((lap, index) => {
      const reversedIndex = this.laps.length - index;
      const difference = index === 0 ? '' : `+${this.formatLapTime(lap.time - previousTime)}`;
      csv += `${reversedIndex},${this.formatLapTime(lap.time)},${difference},${lap.timestamp.toISOString()}\n`;
      previousTime = lap.time;
    });
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `laps-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    window.URL.revokeObjectURL(url);
  }
}

