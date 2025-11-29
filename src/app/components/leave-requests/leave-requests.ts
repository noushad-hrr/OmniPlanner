import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface LeaveRequest {
  id: string;
  employee: {
    name: string;
    avatar: string;
    department: string;
    position: string;
  };
  leaveType: string;
  startDate: string;
  endDate: string;
  duration: number;
  status: 'Pending' | 'Approved' | 'Declined';
  priority: 'Low' | 'Medium' | 'High';
  reason: string;
  submittedDate: string;
  approvedBy?: string;
  comments?: string;
}

export interface FilterOptions {
  status: string[];
  leaveType: string[];
  department: string[];
  priority: string[];
  dateRange: {
    start: string;
    end: string;
  };
}

@Component({
  selector: 'app-leave-requests',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './leave-requests.html',
  styleUrls: ['./leave-requests.scss']
})
export class LeaveRequestsComponent implements OnInit {
  activeTab: string = 'Leave Requests';
  searchQuery: string = '';
  selectedRows: Set<string> = new Set();
  showActionMenu: string | null = null;
  viewMode: 'table' | 'cards' = 'table';
  showFilters: boolean = false;
  showBulkActions: boolean = false;
  sortBy: string = 'submittedDate';
  sortOrder: 'asc' | 'desc' = 'desc';
  
  // Smart Analytics
  analytics = {
    totalRequests: 0,
    pendingRequests: 0,
    approvedRequests: 0,
    declinedRequests: 0,
    averageProcessingTime: '2.3 days',
    peakLeaveMonth: 'December',
    departmentStats: [] as Array<{name: string, count: number, pending: number}>
  };

  tabs = [
    'Leave Requests',
    'Leave Balances', 
    'Leave Calendar',
    'Analytics'
  ];

  filterOptions: FilterOptions = {
    status: [],
    leaveType: [],
    department: [],
    priority: [],
    dateRange: { start: '', end: '' }
  };

  leaveRequests: LeaveRequest[] = [
    {
      id: '1',
      employee: { name: 'Robert Fox', avatar: 'RF', department: 'Engineering', position: 'Senior Developer' },
      leaveType: 'Annual Leave',
      startDate: 'Sep 12, 2024',
      endDate: 'Sep 16, 2024',
      duration: 5,
      status: 'Pending',
      priority: 'Medium',
      reason: 'Family vacation',
      submittedDate: 'Sep 1, 2024'
    },
    {
      id: '2',
      employee: { name: 'Arlene McCoy', avatar: 'AM', department: 'Marketing', position: 'Marketing Manager' },
      leaveType: 'Sick Leave',
      startDate: 'Aug 2, 2024',
      endDate: 'Aug 9, 2024',
      duration: 8,
      status: 'Pending',
      priority: 'High',
      reason: 'Medical treatment',
      submittedDate: 'Aug 1, 2024'
    },
    {
      id: '3',
      employee: { name: 'Brooklyn Simmons', avatar: 'BS', department: 'HR', position: 'HR Specialist' },
      leaveType: 'Annual Leave',
      startDate: 'Apr 18, 2024',
      endDate: 'April 21, 2024',
      duration: 4,
      status: 'Pending',
      priority: 'Low',
      reason: 'Personal time off',
      submittedDate: 'Apr 10, 2024'
    },
    {
      id: '4',
      employee: { name: 'Darlene Robertson', avatar: 'DR', department: 'Sales', position: 'Sales Director' },
      leaveType: 'Annual Leave',
      startDate: 'Apr 1, 2024',
      endDate: 'April 4, 2024',
      duration: 4,
      status: 'Approved',
      priority: 'Medium',
      reason: 'Spring break',
      submittedDate: 'Mar 20, 2024',
      approvedBy: 'John Smith'
    },
    {
      id: '5',
      employee: { name: 'Jacob Jones', avatar: 'JJ', department: 'Engineering', position: 'Tech Lead' },
      leaveType: 'Annual Leave',
      startDate: 'Mar 6, 2024',
      endDate: 'Mar 7, 2024',
      duration: 2,
      status: 'Approved',
      priority: 'Low',
      reason: 'Conference attendance',
      submittedDate: 'Feb 28, 2024',
      approvedBy: 'Sarah Wilson'
    },
    {
      id: '6',
      employee: { name: 'Devon Lane', avatar: 'DL', department: 'Finance', position: 'Financial Analyst' },
      leaveType: 'Annual Leave',
      startDate: 'Feb 16, 2024',
      endDate: 'Feb 18, 2024',
      duration: 3,
      status: 'Declined',
      priority: 'Medium',
      reason: 'Personal commitments',
      submittedDate: 'Feb 10, 2024',
      comments: 'Overlapping with critical project deadline'
    },
    {
      id: '7',
      employee: { name: 'Kathryn Murphy', avatar: 'KM', department: 'Operations', position: 'Operations Manager' },
      leaveType: 'Sick Leave',
      startDate: 'Feb 1, 2024',
      endDate: 'Feb 4, 2024',
      duration: 4,
      status: 'Pending',
      priority: 'High',
      reason: 'Medical emergency',
      submittedDate: 'Jan 30, 2024'
    },
    {
      id: '8',
      employee: { name: 'Ralph Edwards', avatar: 'RE', department: 'Engineering', position: 'Senior Developer' },
      leaveType: 'Paternity Leave',
      startDate: 'Dec 22, 2023',
      endDate: 'Jan 24, 2024',
      duration: 31,
      status: 'Approved',
      priority: 'High',
      reason: 'Newborn child',
      submittedDate: 'Dec 15, 2023',
      approvedBy: 'Mike Johnson'
    }
  ];

  filteredRequests: LeaveRequest[] = this.leaveRequests;

  constructor() {}

  ngOnInit(): void {
    this.filterRequests();
    this.calculateAnalytics();
  }

  calculateAnalytics(): void {
    this.analytics.totalRequests = this.leaveRequests.length;
    this.analytics.pendingRequests = this.leaveRequests.filter(r => r.status === 'Pending').length;
    this.analytics.approvedRequests = this.leaveRequests.filter(r => r.status === 'Approved').length;
    this.analytics.declinedRequests = this.leaveRequests.filter(r => r.status === 'Declined').length;
    
    // Calculate department stats
    const departments = [...new Set(this.leaveRequests.map(r => r.employee.department))];
    this.analytics.departmentStats = departments.map(dept => ({
      name: dept,
      count: this.leaveRequests.filter(r => r.employee.department === dept).length,
      pending: this.leaveRequests.filter(r => r.employee.department === dept && r.status === 'Pending').length
    }));
  }

  onTabClick(tab: string): void {
    this.activeTab = tab;
  }

  onSearch(): void {
    this.filterRequests();
  }

  onSort(field: string): void {
    if (this.sortBy === field) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortBy = field;
      this.sortOrder = 'asc';
    }
    this.filterRequests();
  }

  filterRequests(): void {
    let filtered = [...this.leaveRequests];

    // Search filter
    if (this.searchQuery.trim()) {
      filtered = filtered.filter(request =>
        request.employee.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        request.leaveType.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        request.employee.department.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    // Status filter
    if (this.filterOptions.status.length > 0) {
      filtered = filtered.filter(request => this.filterOptions.status.includes(request.status));
    }

    // Leave type filter
    if (this.filterOptions.leaveType.length > 0) {
      filtered = filtered.filter(request => this.filterOptions.leaveType.includes(request.leaveType));
    }

    // Department filter
    if (this.filterOptions.department.length > 0) {
      filtered = filtered.filter(request => this.filterOptions.department.includes(request.employee.department));
    }

    // Priority filter
    if (this.filterOptions.priority.length > 0) {
      filtered = filtered.filter(request => this.filterOptions.priority.includes(request.priority));
    }

    // Sort
    filtered.sort((a, b) => {
      let aValue: any, bValue: any;
      
      switch (this.sortBy) {
        case 'employee':
          aValue = a.employee.name;
          bValue = b.employee.name;
          break;
        case 'status':
          aValue = a.status;
          bValue = b.status;
          break;
        case 'duration':
          aValue = a.duration;
          bValue = b.duration;
          break;
        case 'priority':
          const priorityOrder = { 'High': 3, 'Medium': 2, 'Low': 1 };
          aValue = priorityOrder[a.priority];
          bValue = priorityOrder[b.priority];
          break;
        default:
          aValue = a.submittedDate;
          bValue = b.submittedDate;
      }

      if (this.sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    this.filteredRequests = filtered;
  }

  onRowSelect(requestId: string, event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target.checked) {
      this.selectedRows.add(requestId);
    } else {
      this.selectedRows.delete(requestId);
    }
    this.showBulkActions = this.selectedRows.size > 0;
  }

  onSelectAll(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target.checked) {
      this.filteredRequests.forEach(request => this.selectedRows.add(request.id));
    } else {
      this.selectedRows.clear();
    }
    this.showBulkActions = this.selectedRows.size > 0;
  }

  toggleActionMenu(requestId: string): void {
    this.showActionMenu = this.showActionMenu === requestId ? null : requestId;
  }

  onAction(action: string, requestId: string): void {
    console.log(`${action} for request ${requestId}`);
    this.showActionMenu = null;
    
    // Update status based on action
    const request = this.leaveRequests.find(r => r.id === requestId);
    if (request && action === 'Approve') {
      request.status = 'Approved';
      request.approvedBy = 'Current User';
    } else if (request && action === 'Decline') {
      request.status = 'Declined';
    }
    
    this.calculateAnalytics();
  }

  onBulkAction(action: string): void {
    console.log(`Bulk ${action} for ${this.selectedRows.size} requests`);
    this.selectedRows.forEach(id => {
      const request = this.leaveRequests.find(r => r.id === id);
      if (request && action === 'Approve') {
        request.status = 'Approved';
        request.approvedBy = 'Current User';
      } else if (request && action === 'Decline') {
        request.status = 'Declined';
      }
    });
    this.selectedRows.clear();
    this.showBulkActions = false;
    this.calculateAnalytics();
  }

  toggleViewMode(): void {
    this.viewMode = this.viewMode === 'table' ? 'cards' : 'table';
  }

  toggleFilters(): void {
    this.showFilters = !this.showFilters;
  }

  clearFilters(): void {
    this.filterOptions = {
      status: [],
      leaveType: [],
      department: [],
      priority: [],
      dateRange: { start: '', end: '' }
    };
    this.filterRequests();
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Pending': return 'status-pending';
      case 'Approved': return 'status-approved';
      case 'Declined': return 'status-declined';
      default: return '';
    }
  }

  getPriorityClass(priority: string): string {
    switch (priority) {
      case 'High': return 'priority-high';
      case 'Medium': return 'priority-medium';
      case 'Low': return 'priority-low';
      default: return '';
    }
  }

  getAvatarColor(avatar: string): string {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F'];
    const index = avatar.charCodeAt(0) % colors.length;
    return colors[index];
  }

  trackByRequestId(index: number, request: LeaveRequest): string {
    return request.id;
  }

  getUniqueValues(field: string): string[] {
    const values = this.leaveRequests.map(r => {
      switch (field) {
        case 'status': return r.status;
        case 'leaveType': return r.leaveType;
        case 'department': return r.employee.department;
        case 'priority': return r.priority;
        default: return '';
      }
    });
    return [...new Set(values)];
  }
}
