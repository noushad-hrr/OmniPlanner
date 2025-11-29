import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ToasterService } from '../../services/toaster.service';

@Component({
  selector: 'app-toast-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast-container.html',
  styleUrls: ['./toast-container.scss']
})
export class ToastContainerComponent {
  constructor(public toaster: ToasterService) {}
}


