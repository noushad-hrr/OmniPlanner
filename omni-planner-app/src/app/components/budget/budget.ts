import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { BudgetService, BudgetMonth, BudgetCredit, BudgetDebit, BudgetSummary, BudgetMonthlyData } from '../../services/budget.service';
import { ConfirmationService } from '../../services/confirmation.service';

@Component({
  selector: 'app-budget',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './budget.html',
  styleUrls: ['./budget.scss']
})
export class BudgetComponent implements OnInit, OnDestroy {
  months: BudgetMonth[] = [];
  selectedMonth: BudgetMonth | null = null;
  currentMonthData: BudgetMonthlyData | null = null;
  summaries: BudgetSummary[] = [];

  // UI State
  showAddCreditModal = false;
  showEditCreditModal = false;
  showAddDebitModal = false;
  showEditDebitModal = false;
  showAddMonthModal = false;

  selectedCredit: BudgetCredit | null = null;
  selectedDebit: BudgetDebit | null = null;

  // Form data
  newCredit: Partial<BudgetCredit> = {
    source: '',
    amountEstimated: 0,
    amountActual: 0,
    isLastMonthBalance: false
  };

  newDebit: Partial<BudgetDebit> = {
    target: '',
    amountEstimated: 0,
    amountActual: 0
  };

  newMonth = {
    monthYear: '',
    monthNumber: 0,
    yearNumber: new Date().getFullYear()
  };

  monthErrorMessage = '';

  private destroy$ = new Subject<void>();

  constructor(
    private budgetService: BudgetService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
    // Load all months
    this.budgetService.months$
      .pipe(takeUntil(this.destroy$))
      .subscribe(months => {
        this.months = months;
        if (months.length > 0 && !this.selectedMonth) {
          this.selectMonth(months[0]);
        }
      });

    // Load summaries
    this.loadSummaries();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadSummaries(): void {
    this.budgetService.getAllMonthsWithSummaries()
      .pipe(takeUntil(this.destroy$))
      .subscribe(summaries => {
        this.summaries = summaries;
      });
  }

  selectMonth(month: BudgetMonth | null): void {
    if (!month) return;
    this.selectedMonth = month;
    this.budgetService.getMonthData(month.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        this.currentMonthData = data;
        // Auto-update last month balance if needed
        this.ensureLastMonthBalance();
      });
  }

  onMonthChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const monthId = parseInt(target.value, 10);
    const month = this.months.find(m => m.id === monthId);
    if (month) {
      this.selectMonth(month);
    }
  }

  ensureLastMonthBalance(): void {
    if (!this.currentMonthData) return;

    const hasLastMonthBalance = this.currentMonthData.credits.some(c => c.isLastMonthBalance);

    if (!hasLastMonthBalance && this.selectedMonth) {
      // Calculate previous month's final balance
      const prevMonthSummary = this.findPreviousMonthSummary(this.selectedMonth);
      if (prevMonthSummary && prevMonthSummary.finalBalance > 0) {
        // Auto-add last month balance as credit
        this.budgetService.addCredit({
          monthId: this.selectedMonth.id,
          source: 'Last month balance',
          amountEstimated: prevMonthSummary.finalBalance,
          amountActual: prevMonthSummary.finalBalance,
          isLastMonthBalance: true
        }).subscribe(() => {
          this.refreshCurrentMonth();
        });
      }
    }
  }

  findPreviousMonthSummary(currentMonth: BudgetMonth): BudgetSummary | null {
    // Find previous month's summary
    const currentIndex = this.months.findIndex(m => m.id === currentMonth.id);
    if (currentIndex > 0) {
      const prevMonth = this.months[currentIndex - 1];
      return this.summaries.find(s => s.monthId === prevMonth.id) || null;
    }
    return null;
  }

  getCredits(): BudgetCredit[] {
    return this.currentMonthData?.credits || [];
  }

  getDebits(): BudgetDebit[] {
    return this.currentMonthData?.debits || [];
  }

  getMonthlyCredit(): number {
    if (!this.currentMonthData) return 0;
    return this.currentMonthData.credits.reduce((sum, c) => sum + c.amountActual, 0);
  }

  getMonthlyDebit(): number {
    if (!this.currentMonthData) return 0;
    return this.currentMonthData.debits.reduce((sum, d) => sum + d.amountActual, 0);
  }

  getFinalBalance(): number {
    return this.getMonthlyCredit() - this.getMonthlyDebit();
  }

  getTotalMonthlyCredit(): number {
    return this.summaries.reduce((sum, s) => sum + s.monthlyCredit, 0);
  }

  getTotalMonthlyDebit(): number {
    return this.summaries.reduce((sum, s) => sum + s.monthlyDebit, 0);
  }

  getTotalFinalBalance(): number {
    return this.summaries.reduce((sum, s) => sum + s.finalBalance, 0);
  }

  // Credit operations
  openAddCreditModal(): void {
    if (!this.selectedMonth) return;
    this.newCredit = {
      source: '',
      amountEstimated: 0,
      amountActual: 0,
      isLastMonthBalance: false,
      monthId: this.selectedMonth.id
    };
    this.showAddCreditModal = true;
  }

  openEditCreditModal(credit: BudgetCredit): void {
    this.selectedCredit = credit;
    this.newCredit = { ...credit };
    this.showEditCreditModal = true;
  }

  saveCredit(): void {
    if (!this.selectedMonth || !this.newCredit.source) return;

    const operation = this.showEditCreditModal && this.selectedCredit
      ? this.budgetService.updateCredit(this.selectedCredit.id, this.newCredit)
      : this.budgetService.addCredit({ ...this.newCredit, monthId: this.selectedMonth.id });

    operation.pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.closeCreditModal();
        this.refreshCurrentMonth();
        this.loadSummaries();
      });
  }

  async deleteCredit(credit: BudgetCredit): Promise<void> {
    const confirmed = await this.confirmationService.confirm({
      title: 'Delete Credit',
      message: `Are you sure you want to delete "${credit.source}"? This action cannot be undone.`,
      confirmText: 'Delete',
      cancelText: 'Cancel',
      confirmClass: 'danger'
    });

    if (!confirmed) return;

    this.budgetService.deleteCredit(credit.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.refreshCurrentMonth();
        this.loadSummaries();
      });
  }

  closeCreditModal(): void {
    this.showAddCreditModal = false;
    this.showEditCreditModal = false;
    this.selectedCredit = null;
    this.newCredit = {
      source: '',
      amountEstimated: 0,
      amountActual: 0,
      isLastMonthBalance: false
    };
  }

  // Debit operations
  openAddDebitModal(): void {
    if (!this.selectedMonth) return;
    this.newDebit = {
      target: '',
      amountEstimated: 0,
      amountActual: 0,
      monthId: this.selectedMonth.id
    };
    this.showAddDebitModal = true;
  }

  openEditDebitModal(debit: BudgetDebit): void {
    this.selectedDebit = debit;
    this.newDebit = { ...debit };
    this.showEditDebitModal = true;
  }

  saveDebit(): void {
    if (!this.selectedMonth || !this.newDebit.target) return;

    const operation = this.showEditDebitModal && this.selectedDebit
      ? this.budgetService.updateDebit(this.selectedDebit.id, this.newDebit)
      : this.budgetService.addDebit({ ...this.newDebit, monthId: this.selectedMonth.id });

    operation.pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.closeDebitModal();
        this.refreshCurrentMonth();
        this.loadSummaries();
      });
  }

  async deleteDebit(debit: BudgetDebit): Promise<void> {
    const confirmed = await this.confirmationService.confirm({
      title: 'Delete Debit',
      message: `Are you sure you want to delete "${debit.target}"? This action cannot be undone.`,
      confirmText: 'Delete',
      cancelText: 'Cancel',
      confirmClass: 'danger'
    });

    if (!confirmed) return;

    this.budgetService.deleteDebit(debit.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.refreshCurrentMonth();
        this.loadSummaries();
      });
  }

  closeDebitModal(): void {
    this.showAddDebitModal = false;
    this.showEditDebitModal = false;
    this.selectedDebit = null;
    this.newDebit = {
      target: '',
      amountEstimated: 0,
      amountActual: 0
    };
  }

  // Month operations
  openAddMonthModal(): void {
    const now = new Date();
    this.newMonth = {
      monthYear: '',
      monthNumber: now.getMonth() + 1,
      yearNumber: now.getFullYear()
    };
    this.monthErrorMessage = '';
    this.updateMonthYearLabel();
    this.showAddMonthModal = true;
  }

  onMonthNumberChange(): void {
    this.updateMonthYearLabel();
  }

  onYearNumberChange(): void {
    this.updateMonthYearLabel();
  }

  updateMonthYearLabel(): void {
    if (this.newMonth.monthNumber >= 1 && this.newMonth.monthNumber <= 12 && this.newMonth.yearNumber) {
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      this.newMonth.monthYear = `${monthNames[this.newMonth.monthNumber - 1]} ${this.newMonth.yearNumber}`;
    } else {
      this.newMonth.monthYear = '';
    }
  }

  saveMonth(): void {
    this.monthErrorMessage = '';

    if (!this.newMonth.monthYear) {
      this.monthErrorMessage = 'Please select a valid month and year';
      return;
    }

    // Check for duplicate
    const isDuplicate = this.months.some(m =>
      m.monthNumber === this.newMonth.monthNumber &&
      m.yearNumber === this.newMonth.yearNumber
    );

    if (isDuplicate) {
      this.monthErrorMessage = `${this.newMonth.monthYear} already exists`;
      return;
    }

    this.budgetService.createMonth(
      this.newMonth.monthYear,
      this.newMonth.monthNumber,
      this.newMonth.yearNumber
    ).pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (month) => {
          this.closeMonthModal();
          this.selectMonth(month);
          this.loadSummaries();
        },
        error: (error) => {
          // Handle backend error (e.g., duplicate month_year)
          if (error.error?.message) {
            this.monthErrorMessage = error.error.message;
          } else {
            this.monthErrorMessage = 'Failed to create month. Please try again.';
          }
        }
      });
  }

  closeMonthModal(): void {
    this.showAddMonthModal = false;
    this.monthErrorMessage = '';
    this.newMonth = {
      monthYear: '',
      monthNumber: 0,
      yearNumber: new Date().getFullYear()
    };
  }

  refreshCurrentMonth(): void {
    if (this.selectedMonth) {
      this.selectMonth(this.selectedMonth);
    }
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  }
}

