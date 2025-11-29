// Common Loader Component - Reusable loading spinner
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderService } from '../../services/loader.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {
  @Input() message: string = 'Loading...';
  @Input() fullScreen: boolean = false;
  @Input() showGlobalLoader: boolean = false; // If true, subscribes to LoaderService
  
  isLoading: boolean = false;
  private subscription?: Subscription;

  constructor(public loaderService: LoaderService) {}

  ngOnInit(): void {
    if (this.showGlobalLoader) {
      // Subscribe immediately to get current state
      this.isLoading = this.loaderService.isLoading;
      
      // Subscribe to loading state changes
      this.subscription = this.loaderService.loading$.subscribe(isLoading => {
        this.isLoading = isLoading;
      });
    } else {
      this.isLoading = true;
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

