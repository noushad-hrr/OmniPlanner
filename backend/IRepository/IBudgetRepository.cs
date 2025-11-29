using OmniPlanner_API.Models.Budget;

namespace OmniPlanner_API.IRepository
{
    public interface IBudgetRepository
    {
        Task<IEnumerable<BudgetMonth>> GetAllMonths();
        Task<BudgetMonth> GetMonthById(int monthId);
        Task<BudgetMonth> CreateMonth(string monthYear, int monthNumber, int yearNumber);
        Task<bool> MonthExists(string monthYear);

        Task<IEnumerable<BudgetCredit>> GetCreditsByMonthId(int monthId);
        Task<BudgetCredit> GetCreditById(int creditId);
        Task<BudgetCredit> AddCredit(CreateCreditRequest request);
        Task<BudgetCredit> UpdateCredit(int creditId, UpdateCreditRequest request);
        Task<bool> DeleteCredit(int creditId);
        Task<BudgetCredit> GetLastMonthBalanceCredit(int monthId);

        Task<IEnumerable<BudgetDebit>> GetDebitsByMonthId(int monthId);
        Task<BudgetDebit> GetDebitById(int debitId);
        Task<BudgetDebit> AddDebit(CreateDebitRequest request);
        Task<BudgetDebit> UpdateDebit(int debitId, UpdateDebitRequest request);
        Task<bool> DeleteDebit(int debitId);

        Task<BudgetSummary> GetMonthlySummary(int monthId);
        Task<IEnumerable<BudgetSummary>> GetAllMonthsWithSummaries();
        Task<decimal> GetPreviousMonthFinalBalance(int yearNumber, int monthNumber);
    }
}

