import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService, Theme } from '../../services/theme';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-toggle.html',
  styleUrls: ['./theme-toggle.scss']
})
export class ThemeToggleComponent implements OnInit, OnDestroy {
  currentTheme: Theme = 'dark';

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.currentTheme = this.themeService.getCurrentTheme();
    this.themeService.watchSystemTheme();
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
    this.currentTheme = this.themeService.getCurrentTheme();
  }

  setTheme(theme: Theme): void {
    this.themeService.setTheme(theme);
    this.currentTheme = theme;
  }

  isDarkTheme(): boolean {
    return this.currentTheme === 'dark';
  }

  isLightTheme(): boolean {
    return this.currentTheme === 'light';
  }
}
