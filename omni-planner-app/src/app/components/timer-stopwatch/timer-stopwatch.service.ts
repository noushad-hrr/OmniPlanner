import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type TimerMode = 'timer' | 'stopwatch';
export type NotificationTone = 'beep' | 'chime' | 'alarm' | 'notification' | 'bell';

export interface TimerSettings {
  soundEnabled: boolean;
  notificationEnabled: boolean;
  selectedTone: NotificationTone;
  customMessage: string;
}

@Injectable({
  providedIn: 'root'
})
export class TimerStopwatchService {
  mode: TimerMode = 'stopwatch';
  isRunning = false;
  time = 0; // milliseconds
  timerHours = 0;
  timerMinutes = 0;
  timerSeconds = 0;
  
  private intervalId: any = null;
  private startTimestamp: number = 0; // When timer was started (milliseconds since epoch)
  private startTime: number = 0; // Initial time value when timer was started
  
  // Settings
  settings: TimerSettings = {
    soundEnabled: true,
    notificationEnabled: true,
    selectedTone: 'alarm',
    customMessage: ''
  };

  private timeSubject = new BehaviorSubject<number>(0);
  private runningSubject = new BehaviorSubject<boolean>(false);
  private visibilityHandler?: () => void;

  constructor() {
    this.loadSettings();
    this.loadState();
    this.setupVisibilityHandling();
    
    // Periodic state save to ensure persistence
    setInterval(() => {
      if (this.isRunning) {
        this.saveState();
      }
    }, 5000); // Save every 5 seconds
  }
  
  private setupVisibilityHandling(): void {
    this.visibilityHandler = () => {
      if (document.hidden && this.isRunning) {
        // Tab is hidden - continue using timestamp tracking
        // The interval will continue but may be throttled, so we'll compensate
      } else if (!document.hidden && this.isRunning) {
        // Tab is visible again - sync time based on elapsed real time
        this.syncTime();
      }
    };
    document.addEventListener('visibilitychange', this.visibilityHandler);
    
    // Also handle window focus/blur for better reliability
    window.addEventListener('blur', () => {
      if (this.isRunning) {
        this.saveState();
      }
    });
    
    window.addEventListener('focus', () => {
      if (this.isRunning) {
        this.syncTime();
      }
    });
  }
  
  private syncTime(): void {
    if (!this.isRunning || this.startTimestamp === 0) return;
    
    const now = Date.now();
    const elapsed = now - this.startTimestamp;
    
    if (this.mode === 'stopwatch') {
      this.time = this.startTime + elapsed;
    } else {
      // Timer mode - countdown
      const remaining = this.startTime - elapsed;
      if (remaining <= 0) {
        this.time = 0;
        this.onTimerComplete();
        return;
      }
      this.time = remaining;
    }
    
    this.timeSubject.next(this.time);
    this.saveState();
  }

  toggleMode(): void {
    if (this.isRunning) {
      this.stop();
    }
    this.mode = this.mode === 'timer' ? 'stopwatch' : 'timer';
    this.reset();
    this.saveState();
  }

  start(): void {
    // For timer mode, ensure time is set from input fields
    if (this.mode === 'timer') {
      const totalTime = this.getTimerTotalTime();
      if (totalTime === 0) {
        console.warn('Cannot start timer with 0 time');
        return;
      }
      // Sync time from input fields before starting
      this.time = totalTime;
    }
    
    // Don't start if already at 0 (for timer mode)
    if (this.mode === 'timer' && this.time <= 0) {
      return;
    }
    
    this.isRunning = true;
    this.runningSubject.next(true);
    this.startTimestamp = Date.now();
    this.startTime = this.time;
    
    // Save state immediately when starting
    this.saveState();
    
    // Use recursive setTimeout for better control, with timestamp-based compensation
    const updateTimer = () => {
      if (!this.isRunning) {
        return;
      }
      
      const now = Date.now();
      const elapsed = now - this.startTimestamp;
      
      if (this.mode === 'stopwatch') {
        // Stopwatch - count up
        this.time = this.startTime + elapsed;
        this.timeSubject.next(this.time);
        this.intervalId = setTimeout(updateTimer, 50);
      } else {
        // Timer mode - countdown
        const remaining = this.startTime - elapsed;
        if (remaining <= 0) {
          // Timer completed
          this.time = 0;
          this.timeSubject.next(0);
          this.onTimerComplete();
          // Don't schedule another update - timer is done
          return;
        } else {
          this.time = remaining;
          this.timeSubject.next(this.time);
          this.intervalId = setTimeout(updateTimer, 50);
        }
      }
    };
    
    updateTimer();
  }

  pause(): void {
    if (!this.isRunning) return;
    
    // Sync time one final time before pausing
    this.syncTime();
    
    this.isRunning = false;
    this.runningSubject.next(false);
    this.clearInterval();
    this.startTimestamp = 0;
    this.startTime = 0;
    this.saveState();
  }

  stop(): void {
    if (!this.isRunning) return;
    
    // Sync time one final time before stopping
    this.syncTime();
    
    this.isRunning = false;
    this.runningSubject.next(false);
    this.clearInterval();
    this.startTimestamp = 0;
    this.startTime = 0;
    this.saveState();
  }

  reset(): void {
    // Stop everything first
    this.isRunning = false;
    this.runningSubject.next(false);
    this.clearInterval();
    this.startTimestamp = 0;
    this.startTime = 0;
    
    // Reset time based on mode
    if (this.mode === 'stopwatch') {
      this.time = 0;
    } else {
      // Timer mode - reset to original set time
      const totalTime = this.getTimerTotalTime();
      if (totalTime === 0) {
        // If no time is set in inputs, keep current display time or reset to 0
        this.time = 0;
        this.timerHours = 0;
        this.timerMinutes = 0;
        this.timerSeconds = 0;
      } else {
        // Reset to the time set in input fields
        this.time = totalTime;
      }
    }
    
    this.timeSubject.next(this.time);
    this.saveState();
  }

  setTimer(): void {
    if (this.isRunning) {
      this.pause();
    }
    const totalTime = this.getTimerTotalTime();
    this.time = totalTime;
    this.timeSubject.next(this.time);
    this.saveState();
  }

  getTimerTotalTime(): number {
    // Ensure values are numbers and valid
    const hours = Math.max(0, Math.floor(Number(this.timerHours) || 0));
    const minutes = Math.max(0, Math.min(59, Math.floor(Number(this.timerMinutes) || 0)));
    const seconds = Math.max(0, Math.min(59, Math.floor(Number(this.timerSeconds) || 0)));
    return (hours * 3600 + minutes * 60 + seconds) * 1000;
  }

  formatTime(ms: number): string {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const centiseconds = Math.floor((ms % 1000) / 10);

    if (hours > 0) {
      return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}.${this.pad(centiseconds, 2)}`;
    }
    return `${this.pad(minutes)}:${this.pad(seconds)}.${this.pad(centiseconds, 2)}`;
  }

  pad(num: number, length: number = 2): string {
    return num.toString().padStart(length, '0');
  }

  onTimerComplete(): void {
    // Stop the timer first
    this.isRunning = false;
    this.runningSubject.next(false);
    this.clearInterval();
    this.startTimestamp = 0;
    this.startTime = 0;
    this.time = 0;
    this.timeSubject.next(0);
    
    // Trigger notifications
    this.playNotificationSound();
    
    if (this.settings.notificationEnabled) {
      this.showDesktopNotification();
    }
    
    // Save state after completion
    this.saveState();
  }

  playNotificationSound(): void {
    if (!this.settings.soundEnabled) {
      console.log('Sound disabled');
      return;
    }
    
    try {
      // Ensure AudioContext is resumed (browsers may suspend it when tab is hidden)
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      const audioContext = new AudioContextClass();
      
      // Resume context if suspended (required for background playback)
      const playSound = () => {
        this.playToneSequence(audioContext);
      };
      
      if (audioContext.state === 'suspended') {
        audioContext.resume().then(playSound).catch(() => {
          console.warn('Failed to resume audio context, trying anyway');
          playSound();
        });
      } else {
        playSound();
      }
    } catch (error) {
      console.error('Error playing notification sound:', error);
    }
  }
  
  private playToneSequence(audioContext: AudioContext): void {
    const tone = this.getToneForType(this.settings.selectedTone);
    
    // Play tone in a loop for better visibility even when minimized
    let playCount = 0;
    const maxPlays = 5;
    
    const playTone = () => {
      if (playCount >= maxPlays) {
        setTimeout(() => {
          try {
            audioContext.close();
          } catch (e) {
            // Context may already be closed
          }
        }, tone.duration * 1000 + 500);
        return;
      }
      playCount++;
      
      try {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = tone.frequency;
        oscillator.type = tone.type;
        
        // Higher volume for better audibility
        gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + tone.duration);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + tone.duration);
        
        if (playCount < maxPlays) {
          setTimeout(playTone, tone.duration * 1000 + 200);
        } else {
          setTimeout(() => {
            try {
              audioContext.close();
            } catch (e) {
              // Context may already be closed
            }
          }, tone.duration * 1000 + 500);
        }
      } catch (error) {
        console.error('Error in playTone:', error);
      }
    };
    
    playTone();
  }

  getToneForType(toneType: NotificationTone): {frequency: number, duration: number, type: OscillatorType} {
    switch (toneType) {
      case 'beep':
        return { frequency: 800, duration: 0.3, type: 'sine' };
      case 'chime':
        return { frequency: 523.25, duration: 0.5, type: 'sine' };
      case 'alarm':
        return { frequency: 1000, duration: 0.4, type: 'square' };
      case 'notification':
        return { frequency: 659.25, duration: 0.3, type: 'sine' };
      case 'bell':
        return { frequency: 783.99, duration: 0.6, type: 'sine' };
      default:
        return { frequency: 800, duration: 0.3, type: 'sine' };
    }
  }

  showDesktopNotification(): void {
    if (!('Notification' in window)) {
      console.log('Notifications not supported');
      return;
    }

    const showNotif = () => {
      this.createNotification();
    };

    if (Notification.permission === 'granted') {
      showNotif();
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          showNotif();
        } else {
          console.log('Notification permission denied');
        }
      }).catch(error => {
        console.error('Error requesting notification permission:', error);
      });
    } else {
      console.log('Notification permission denied');
    }
  }

  private createNotification(): void {
    try {
      const message = this.settings.customMessage.trim() || 'Timer completed!';
      const title = 'OmniPlanner Timer';
      
      const notificationOptions: NotificationOptions = {
        body: message,
        icon: '/assets/icon-192x192.png',
        badge: '/assets/icon-192x192.png',
        tag: 'omniplanner-timer',
        requireInteraction: true,
        silent: false
      };
      
      if ('vibrate' in navigator) {
        (notificationOptions as any).vibrate = [200, 100, 200];
      }
      
      const notification = new Notification(title, notificationOptions);

      setTimeout(() => {
        try {
          notification.close();
        } catch (e) {
          // Notification may already be closed
        }
      }, 15000);

      notification.onclick = () => {
        window.focus();
        notification.close();
      };
    } catch (error) {
      console.error('Error creating notification:', error);
    }
  }

  updateSettings(settings: Partial<TimerSettings>): void {
    this.settings = { ...this.settings, ...settings };
    this.saveSettings();
  }

  requestNotificationPermission(): void {
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
  }

  saveState(): void {
    try {
      const state = {
        mode: this.mode,
        time: this.time,
        isRunning: this.isRunning,
        timerHours: this.timerHours,
        timerMinutes: this.timerMinutes,
        timerSeconds: this.timerSeconds,
        startTimestamp: this.startTimestamp, // Save timestamp for recovery
        startTime: this.startTime
      };
      localStorage.setItem('timer-stopwatch-state', JSON.stringify(state));
    } catch (error) {
      console.warn('Failed to save timer state:', error);
    }
  }

  loadState(): void {
    try {
      const saved = localStorage.getItem('timer-stopwatch-state');
      if (saved) {
        const state = JSON.parse(saved);
        this.mode = state.mode || 'stopwatch';
        this.timerHours = state.timerHours || 0;
        this.timerMinutes = state.timerMinutes || 0;
        this.timerSeconds = state.timerSeconds || 0;
        
        // If timer was running when page closed, recover time
        if (state.isRunning && state.startTimestamp && state.startTime !== undefined) {
          const now = Date.now();
          const elapsed = now - state.startTimestamp;
          
          if (this.mode === 'stopwatch') {
            this.time = state.startTime + elapsed;
          } else {
            const remaining = state.startTime - elapsed;
            this.time = remaining > 0 ? remaining : 0;
          }
          
          // Auto-resume if timer hasn't completed
          if (this.mode === 'stopwatch' || (this.mode === 'timer' && this.time > 0)) {
            // Don't auto-resume, let user manually start
            // But sync the time so it's accurate
          } else if (this.mode === 'timer' && this.time <= 0) {
            // Timer completed while page was closed
            this.time = 0;
            this.onTimerComplete();
          }
        } else {
          this.time = state.time || 0;
        }
        
        this.timeSubject.next(this.time);
      }
    } catch (error) {
      console.warn('Failed to load timer state:', error);
    }
  }

  saveSettings(): void {
    try {
      localStorage.setItem('timer-stopwatch-settings', JSON.stringify(this.settings));
    } catch (error) {
      console.warn('Failed to save timer settings:', error);
    }
  }

  loadSettings(): void {
    try {
      const saved = localStorage.getItem('timer-stopwatch-settings');
      if (saved) {
        this.settings = { ...this.settings, ...JSON.parse(saved) };
      }
    } catch (error) {
      console.warn('Failed to load timer settings:', error);
    }
  }

  clearInterval(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  getTime$(): Observable<number> {
    return this.timeSubject.asObservable();
  }

  getRunning$(): Observable<boolean> {
    return this.runningSubject.asObservable();
  }
}

