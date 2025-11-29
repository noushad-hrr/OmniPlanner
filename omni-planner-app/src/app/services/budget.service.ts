import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { API_CONFIG } from '../shared/config/api.config';

export interface BudgetCredit {
  id: number;
  monthId: number;
  source: string;
  amountEstimated: number;
  amountActual: number;
  isLastMonthBalance: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface BudgetDebit {
  id: number;
  monthId: number;
  target: string;
  amountEstimated: number;
  amountActual: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface BudgetMonth {
  id: number;
  monthYear: string;
  monthNumber: number;
  yearNumber: number;
  createdAt?: Date;
  updatedAt?: Date;
  credits?: BudgetCredit[];
  debits?: BudgetDebit[];
}

export interface BudgetSummary {
  monthId: number;
  monthYear: string;
  monthlyCredit: number;
  monthlyDebit: number;
  finalBalance: number;
}

export interface BudgetMonthlyData {
  month: BudgetMonth;
  credits: BudgetCredit[];
  debits: BudgetDebit[];
  summary: BudgetSummary;
}

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private baseUrl = `${API_CONFIG.baseUrl}/Budget`;
  private monthsSubject = new BehaviorSubject<BudgetMonth[]>([]);
  public months$ = this.monthsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadMonths();
  }

  // Load all months
  loadMonths(): void {
    this.http.get<any>(`${this.baseUrl}/GetAllMonths`)
      .pipe(
        map(response => {
          const months = response.data || [];
          return months.map((month: any) => this.normalizeMonth(month));
        }),
        catchError(error => {
          console.error('Error loading months from API:', error);
          // Fallback to sample data if API fails
          this.initializeSampleData();
          return of([]);
        })
      )
      .subscribe({
        next: (months) => {
          this.monthsSubject.next(months);
        }
      });
  }

  // Get single month with all data
  getMonthData(monthId: number): Observable<BudgetMonthlyData> {
    return this.http.get<any>(`${this.baseUrl}/GetMonthData/${monthId}`)
      .pipe(
        map(response => {
          const data = response.data || {};
          return {
            month: this.normalizeMonth(data.month || {}),
            credits: (data.credits || []).map((c: any) => this.normalizeCredit(c)),
            debits: (data.debits || []).map((d: any) => this.normalizeDebit(d)),
            summary: this.normalizeSummary(data.summary || {})
          };
        }),
        catchError(error => {
          console.error('Error loading month data from API:', error);
          return of(this.getSampleMonthData(monthId));
        })
      );
  }

  // Get all months with summaries
  getAllMonthsWithSummaries(): Observable<BudgetSummary[]> {
    return this.http.get<any>(`${this.baseUrl}/GetAllMonthsWithSummaries`)
      .pipe(
        map(response => {
          const summaries = response.data || [];
          return summaries.map((s: any) => this.normalizeSummary(s));
        }),
        catchError(error => {
          console.error('Error loading summaries from API:', error);
          return of([]);
        })
      );
  }

  // Create new month
  createMonth(monthYear: string, monthNumber: number, yearNumber: number): Observable<BudgetMonth> {
    return this.http.post<any>(`${this.baseUrl}/CreateMonth`, {
      monthYear,
      monthNumber,
      yearNumber
    }).pipe(
      map(response => {
        const month = this.normalizeMonth(response.data || response);
        this.loadMonths(); // Reload months list
        return month;
      })
    );
  }

  // Credit operations
  addCredit(credit: Partial<BudgetCredit>): Observable<BudgetCredit> {
    return this.http.post<any>(`${this.baseUrl}/AddCredit`, {
      monthId: credit.monthId,
      source: credit.source,
      amountEstimated: credit.amountEstimated || 0,
      amountActual: credit.amountActual || 0,
      isLastMonthBalance: credit.isLastMonthBalance || false
    }).pipe(
      map(response => this.normalizeCredit(response.data || response))
    );
  }

  updateCredit(id: number, credit: Partial<BudgetCredit>): Observable<BudgetCredit> {
    return this.http.put<any>(`${this.baseUrl}/UpdateCredit/${id}`, {
      source: credit.source,
      amountEstimated: credit.amountEstimated,
      amountActual: credit.amountActual,
      isLastMonthBalance: credit.isLastMonthBalance
    }).pipe(
      map(response => this.normalizeCredit(response.data || response))
    );
  }

  deleteCredit(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/DeleteCredit/${id}`);
  }

  // Debit operations
  addDebit(debit: Partial<BudgetDebit>): Observable<BudgetDebit> {
    return this.http.post<any>(`${this.baseUrl}/AddDebit`, {
      monthId: debit.monthId,
      target: debit.target,
      amountEstimated: debit.amountEstimated || 0,
      amountActual: debit.amountActual || 0
    }).pipe(
      map(response => this.normalizeDebit(response.data || response))
    );
  }

  updateDebit(id: number, debit: Partial<BudgetDebit>): Observable<BudgetDebit> {
    return this.http.put<any>(`${this.baseUrl}/UpdateDebit/${id}`, {
      target: debit.target,
      amountEstimated: debit.amountEstimated,
      amountActual: debit.amountActual
    }).pipe(
      map(response => this.normalizeDebit(response.data || response))
    );
  }

  deleteDebit(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/DeleteDebit/${id}`);
  }

  // Calculate and update last month balance for a month
  updateLastMonthBalance(monthId: number): Observable<BudgetCredit> {
    return this.http.post<any>(`${this.baseUrl}/UpdateLastMonthBalance/${monthId}`, {})
      .pipe(
        map(response => this.normalizeCredit(response.data || response))
      );
  }

  // Normalize data from API
  private normalizeMonth(month: any): BudgetMonth {
    return {
      id: month.id,
      monthYear: month.monthYear || month.month_year || '',
      monthNumber: month.monthNumber || month.month_number || 0,
      yearNumber: month.yearNumber || month.year_number || 0,
      createdAt: month.createdAt ? new Date(month.createdAt) : new Date(),
      updatedAt: month.updatedAt ? new Date(month.updatedAt) : new Date()
    };
  }

  private normalizeCredit(credit: any): BudgetCredit {
    return {
      id: credit.id,
      monthId: credit.monthId || credit.month_id,
      source: credit.source || '',
      amountEstimated: parseFloat(credit.amountEstimated || credit.amount_estimated || 0),
      amountActual: parseFloat(credit.amountActual || credit.amount_actual || 0),
      isLastMonthBalance: credit.isLastMonthBalance || credit.is_last_month_balance || false,
      createdAt: credit.createdAt ? new Date(credit.createdAt) : new Date(),
      updatedAt: credit.updatedAt ? new Date(credit.updatedAt) : new Date()
    };
  }

  private normalizeDebit(debit: any): BudgetDebit {
    return {
      id: debit.id,
      monthId: debit.monthId || debit.month_id,
      target: debit.target || '',
      amountEstimated: parseFloat(debit.amountEstimated || debit.amount_estimated || 0),
      amountActual: parseFloat(debit.amountActual || debit.amount_actual || 0),
      createdAt: debit.createdAt ? new Date(debit.createdAt) : new Date(),
      updatedAt: debit.updatedAt ? new Date(debit.updatedAt) : new Date()
    };
  }

  private normalizeSummary(summary: any): BudgetSummary {
    return {
      monthId: summary.monthId || summary.month_id,
      monthYear: summary.monthYear || summary.month_year || '',
      monthlyCredit: parseFloat(summary.monthlyCredit || summary.monthly_credit || 0),
      monthlyDebit: parseFloat(summary.monthlyDebit || summary.monthly_debit || 0),
      finalBalance: parseFloat(summary.finalBalance || summary.final_balance || 0)
    };
  }

  // Sample data for development/testing
  private initializeSampleData(): void {
    // This will be used if API is not available
    const sampleMonths: BudgetMonth[] = [
      {
        id: 1,
        monthYear: 'Oct 2025',
        monthNumber: 10,
        yearNumber: 2025
      },
      {
        id: 2,
        monthYear: 'Nov 2025',
        monthNumber: 11,
        yearNumber: 2025
      }
    ];
    this.monthsSubject.next(sampleMonths);
  }

  private getSampleMonthData(monthId: number): BudgetMonthlyData {
    const sampleCredits: BudgetCredit[] = [
      { id: 1, monthId: 1, source: 'Salary', amountEstimated: 20000, amountActual: 20000, isLastMonthBalance: false },
      { id: 2, monthId: 1, source: 'Dad', amountEstimated: 5000, amountActual: 6000, isLastMonthBalance: false },
      { id: 3, monthId: 1, source: 'Printer Payment', amountEstimated: 2000, amountActual: 1500, isLastMonthBalance: false },
      { id: 4, monthId: 1, source: 'Last month balance', amountEstimated: 0, amountActual: 0, isLastMonthBalance: true }
    ];

    const sampleDebits: BudgetDebit[] = [
      { id: 1, monthId: 1, target: 'Salary sent to Home', amountEstimated: 18000, amountActual: 17500 },
      { id: 2, monthId: 1, target: 'My daily spents', amountEstimated: 2000, amountActual: 3200 },
      { id: 3, monthId: 1, target: 'Paid to friend', amountEstimated: 1000, amountActual: 1000 },
      { id: 4, monthId: 1, target: 'EMI', amountEstimated: 900, amountActual: 900 }
    ];

    const monthlyCredit = sampleCredits.reduce((sum, c) => sum + c.amountActual, 0);
    const monthlyDebit = sampleDebits.reduce((sum, d) => sum + d.amountActual, 0);

    return {
      month: { id: 1, monthYear: 'Oct 2025', monthNumber: 10, yearNumber: 2025 },
      credits: sampleCredits,
      debits: sampleDebits,
      summary: {
        monthId: 1,
        monthYear: 'Oct 2025',
        monthlyCredit,
        monthlyDebit,
        finalBalance: monthlyCredit - monthlyDebit
      }
    };
  }
}

