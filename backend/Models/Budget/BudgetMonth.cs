namespace OmniPlanner_API.Models.Budget
{
    public class BudgetMonth
    {
        public int id { get; set; }
        public string month_year { get; set; }
        public int month_number { get; set; }
        public int year_number { get; set; }
        public DateTime created_at { get; set; }
        public DateTime updated_at { get; set; }
    }

    public class BudgetCredit
    {
        public int id { get; set; }
        public int month_id { get; set; }
        public string source { get; set; }
        public decimal amount_estimated { get; set; }
        public decimal amount_actual { get; set; }
        public bool is_last_month_balance { get; set; }
        public DateTime created_at { get; set; }
        public DateTime updated_at { get; set; }
    }

    public class BudgetDebit
    {
        public int id { get; set; }
        public int month_id { get; set; }
        public string target { get; set; }
        public decimal amount_estimated { get; set; }
        public decimal amount_actual { get; set; }
        public DateTime created_at { get; set; }
        public DateTime updated_at { get; set; }
    }

    public class BudgetSummary
    {
        public int month_id { get; set; }
        public string month_year { get; set; }
        public decimal monthly_credit { get; set; }
        public decimal monthly_debit { get; set; }
        public decimal final_balance { get; set; }
    }

    public class BudgetMonthlyData
    {
        public BudgetMonth month { get; set; }
        public List<BudgetCredit> credits { get; set; }
        public List<BudgetDebit> debits { get; set; }
        public BudgetSummary summary { get; set; }
    }

    // Request DTOs
    public class CreateMonthRequest
    {
        public string monthYear { get; set; }
        public int monthNumber { get; set; }
        public int yearNumber { get; set; }
    }

    public class CreateCreditRequest
    {
        public int monthId { get; set; }
        public string source { get; set; }
        public decimal amountEstimated { get; set; }
        public decimal amountActual { get; set; }
        public bool isLastMonthBalance { get; set; }
    }

    public class UpdateCreditRequest
    {
        public string source { get; set; }
        public decimal amountEstimated { get; set; }
        public decimal amountActual { get; set; }
        public bool isLastMonthBalance { get; set; }
    }

    public class CreateDebitRequest
    {
        public int monthId { get; set; }
        public string target { get; set; }
        public decimal amountEstimated { get; set; }
        public decimal amountActual { get; set; }
    }

    public class UpdateDebitRequest
    {
        public string target { get; set; }
        public decimal amountEstimated { get; set; }
        public decimal amountActual { get; set; }
    }
}

