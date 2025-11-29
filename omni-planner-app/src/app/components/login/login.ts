import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-new.html',
  styleUrls: ['./login-new.scss']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  showPassword = false;
  rememberMe = false;
  isLoading = false;
  errorMessage = '';
  emailFocused = false;
  passwordFocused = false;
  showAboutSection = false;
  
  features = [
    {
      icon: 'fas fa-tasks',
      title: 'Task Management',
      description: 'Organize and track all your tasks'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Budget Tracking',
      description: 'Monitor expenses and income'
    },
    {
      icon: 'fas fa-users',
      title: 'Team Collaboration',
      description: 'Work together seamlessly'
    },
    {
      icon: 'fas fa-brain',
      title: 'AI Analytics',
      description: 'Smart insights and predictions'
    }
  ];

  constructor() {}

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

    // Simulate API call
    setTimeout(() => {
      this.isLoading = false;
      
      // Dummy validation
      if (this.email === 'admin@omniplanner.com' && this.password === 'admin123') {
        // Save credentials if remember me is checked
        if (this.rememberMe) {
          localStorage.setItem('omni-planner-remember-email', this.email);
        } else {
          localStorage.removeItem('omni-planner-remember-email');
        }
        
        // Handle successful login
        console.log('Login successful');
        // Navigate to main app - you can emit an event or use router here
      } else {
        this.errorMessage = 'Invalid email or password. Try: admin@omniplanner.com / admin123';
      }
    }, 1500);
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
    console.log('Forgot password clicked');
    // Implement forgot password flow
  }

  onSignUp(): void {
    console.log('Sign up clicked');
    // Navigate to sign up page
  }

  quickLogin(): void {
    this.email = 'admin@omniplanner.com';
    this.password = 'admin123';
    this.onLogin();
  }

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      // Show toast notification or feedback
      const toast = document.createElement('div');
      toast.className = 'copy-toast';
      toast.textContent = 'Copied to clipboard!';
      document.body.appendChild(toast);
      setTimeout(() => {
        toast.classList.add('show');
      }, 10);
      setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => document.body.removeChild(toast), 300);
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy:', err);
    });
  }

  toggleAboutSection(): void {
    this.showAboutSection = !this.showAboutSection;
  }
}
