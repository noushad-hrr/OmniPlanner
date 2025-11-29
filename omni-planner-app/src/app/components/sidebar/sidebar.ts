import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SidebarItem {
  id: string;
  label: string;
  icon: string;
  route?: string;
  badge?: string;
  permission?: string | string[]; // Optional: Permission(s) required to see this item
  children?: SidebarItem[];
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss']
})
export class SidebarComponent {
  @Input() items: SidebarItem[] = [];
  @Input() activeItem: string = '';
  @Input() collapsed: boolean = false;
  @Output() itemClick = new EventEmitter<SidebarItem>();
  @Output() toggleCollapse = new EventEmitter<boolean>();

  expandedItems: Set<string> = new Set();
  hoveredItemId: string | null = null;

  onItemClick(item: SidebarItem, event: Event): void {
    // If item has children, toggle expand/collapse instead of navigating
    if (item.children && item.children.length > 0) {
      event.stopPropagation();
      this.toggleExpand(item.id);
    } else {
      this.itemClick.emit(item);
    }
  }

  onChildClick(child: SidebarItem, event: Event): void {
    event.stopPropagation();
    this.itemClick.emit(child);
  }

  toggleExpand(itemId: string): void {
    if (this.expandedItems.has(itemId)) {
      this.expandedItems.delete(itemId);
    } else {
      this.expandedItems.add(itemId);
    }
  }

  isExpanded(itemId: string): boolean {
    return this.expandedItems.has(itemId);
  }

  onToggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.toggleCollapse.emit(this.collapsed);
  }

  isActive(item: SidebarItem): boolean {
    return this.activeItem === item.id;
  }

  hoveredItemPosition: { top: number; left: number } | null = null;

  onMouseEnter(item: SidebarItem, event: MouseEvent): void {
    if (this.collapsed && item.children && item.children.length > 0) {
      // Clear any pending hide timeout
      if (this.hideTimeout) {
        clearTimeout(this.hideTimeout);
        this.hideTimeout = null;
      }
      
      this.hoveredItemId = item.id;
      // Calculate position for fixed positioning (relative to viewport)
      const target = event.currentTarget as HTMLElement;
      if (target) {
        const rect = target.getBoundingClientRect();
        this.hoveredItemPosition = {
          top: rect.top - 30, // Move up by 8px to align with Masters menu item
          left: rect.left + rect.width - 5 // Overlap slightly (-5px) to prevent gap
        };
      }
    }
  }

  hideTimeout: any = null;

  onMouseLeave(event: MouseEvent): void {
    // Add a small delay before hiding to allow movement to popover
    const target = event.relatedTarget as HTMLElement;
    
    // Clear any existing timeout
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
    }
    
    // Check if mouse is moving to popover
    if (target && target.closest('.submenu-popover')) {
      // Mouse is moving to popover, don't hide
      return;
    }
    
    // Delay hiding to allow smooth transition
    this.hideTimeout = setTimeout(() => {
      const currentTarget = document.elementFromPoint(event.clientX, event.clientY);
      if (!currentTarget || (!currentTarget.closest('.nav-item') && !currentTarget.closest('.submenu-popover'))) {
        this.hoveredItemId = null;
        this.hoveredItemPosition = null;
      }
    }, 100); // 100ms delay
  }

  onPopoverMouseEnter(): void {
    // Clear any pending hide timeout
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
    // Keep popover visible when hovering over it
  }

  onPopoverMouseLeave(event: MouseEvent): void {
    // Only hide if mouse is truly leaving (not moving back to nav-item)
    const target = event.relatedTarget as HTMLElement;
    if (!target || (!target.closest('.nav-item') && !target.closest('.submenu-popover'))) {
      // Add small delay to allow movement back to nav-item
      this.hideTimeout = setTimeout(() => {
        this.hoveredItemId = null;
        this.hoveredItemPosition = null;
      }, 100);
    }
  }

  isHovered(itemId: string): boolean {
    return this.hoveredItemId === itemId;
  }

  // TrackBy function to preserve item identity and prevent unnecessary re-renders
  trackByItemId(index: number, item: SidebarItem): string {
    return item.id;
  }
}
