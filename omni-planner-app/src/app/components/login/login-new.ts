import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-new',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-new.html',
  styleUrls: ['./login-new.scss']
})
export class LoginNewComponent implements OnInit {
  email: string = '';
  password: string = '';
  showPassword = false;
  rememberMe = false;
  isLoading = false;
  errorMessage = '';
  emailFocused = false;
  passwordFocused = false;
  showAboutSection = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Check for saved credentials
    const savedEmail = localStorage.getItem('omni-planner-remember-email');
    if (savedEmail) {
      this.email = savedEmail;
      this.rememberMe = true;
    }
  }

  onLogin(): void {
    if (!this.validateForm()) {
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.authService.login({
      email: this.email.trim(),
      password: this.password,
      rememberMe: this.rememberMe
    }).subscribe({
      next: (auth) => {
        console.log('Login successful, auth received:', auth);
        this.isLoading = false;
        
        // Verify auth data is valid
        if (!auth || !auth.token) {
          console.error('Invalid auth data received:', auth);
          this.errorMessage = 'Login failed: Invalid response from server';
          return;
        }
        
        // Save credentials if remember me is checked
        if (this.rememberMe) {
          localStorage.setItem('omni-planner-remember-email', this.email);
        } else {
          localStorage.removeItem('omni-planner-remember-email');
        }
        
        // Verify authentication state before navigation
        const isAuthenticated = this.authService.isAuthenticated();
        console.log('Is authenticated after login:', isAuthenticated);
        console.log('Token stored:', this.authService.getToken() ? 'Yes' : 'No');
        
        if (isAuthenticated) {
          // Navigate to main app
          const returnUrl = this.router.parseUrl(this.router.url).queryParams['returnUrl'] || '/tasks';
          console.log('Navigating to:', returnUrl);
          this.router.navigateByUrl(returnUrl).then(
            (success) => {
              console.log('Navigation successful:', success);
              // Force reload if navigation didn't work
              if (!success) {
                window.location.href = returnUrl;
              }
            },
            (error) => {
              console.error('Navigation failed:', error);
              window.location.href = returnUrl;
            }
          );
        } else {
          this.errorMessage = 'Authentication failed. Please try again.';
        }
      },
      error: (error) => {
        console.error('Login error:', error);
        this.isLoading = false;
        this.errorMessage = error.error?.message || error.message || 'Invalid email or password. Please try again.';
      }
    });
  }

  validateForm(): boolean {
    if (!this.email.trim()) {
      this.errorMessage = 'Email is required';
      return false;
    }
    if (!this.isValidEmail(this.email)) {
      this.errorMessage = 'Please enter a valid email address';
      return false;
    }
    if (!this.password) {
      this.errorMessage = 'Password is required';
      return false;
    }
    if (this.password.length < 6) {
      this.errorMessage = 'Password must be at least 6 characters';
      return false;
    }
    return true;
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onGoogleLogin(): void {
    this.isLoading = true;
    // Simulate Google OAuth
    setTimeout(() => {
      this.isLoading = false;
      console.log('Google login');
    }, 1000);
  }

  onForgotPassword(): void {
    if (!this.email.trim()) {
      this.errorMessage = 'Please enter your email address first';
      return;
    }

    if (!this.isValidEmail(this.email)) {
      this.errorMessage = 'Please enter a valid email address';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.authService.forgotPassword(this.email.trim()).subscribe({
      next: () => {
        this.isLoading = false;
        this.errorMessage = ''; // Clear error
        alert('If the email exists, a password reset link has been sent to your email.');
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.error?.message || 'Failed to send password reset email. Please try again.';
      }
    });
  }

  onSignUp(): void {
    console.log('Sign up clicked');
    // Navigate to sign up page
  }

  toggleAboutSection(): void {
    this.showAboutSection = !this.showAboutSection;
  }
}

