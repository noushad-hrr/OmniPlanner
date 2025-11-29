using Dapper;
using OmniPlanner_API.Models.Budget;
using OmniPlanner_API.IRepository;
using OmniPlanner_API.Queries.Budget;

namespace OmniPlanner_API.Repository
{
    public class BudgetRepository : IBudgetRepository
    {
        private readonly DapperContext _context;

        public BudgetRepository(DapperContext context)
        {
            _context = context;
        }

        // Month Operations
        public async Task<IEnumerable<BudgetMonth>> GetAllMonths()
        {
            using var connection = _context.CreateConnection();
            return await connection.QueryAsync<BudgetMonth>(BudgetQueries.GetAllMonths);
        }

        public async Task<BudgetMonth> GetMonthById(int monthId)
        {
            using var connection = _context.CreateConnection();
            return await connection.QueryFirstOrDefaultAsync<BudgetMonth>(
                BudgetQueries.GetMonthById, 
                new { id = monthId });
        }

        public async Task<BudgetMonth> CreateMonth(string monthYear, int monthNumber, int yearNumber)
        {
            using var connection = _context.CreateConnection();
            return await connection.QueryFirstOrDefaultAsync<BudgetMonth>(
                BudgetQueries.CreateMonth,
                new { monthYear, monthNumber, yearNumber });
        }

        public async Task<bool> MonthExists(string monthYear)
        {
            using var connection = _context.CreateConnection();
            var count = await connection.QueryFirstOrDefaultAsync<int>(
                BudgetQueries.CheckMonthExists,
                new { monthYear });
            return count > 0;
        }

        // Credit Operations
        public async Task<IEnumerable<BudgetCredit>> GetCreditsByMonthId(int monthId)
        {
            using var connection = _context.CreateConnection();
            return await connection.QueryAsync<BudgetCredit>(
                BudgetQueries.GetCreditsByMonthId,
                new { monthId });
        }

        public async Task<BudgetCredit> GetCreditById(int creditId)
        {
            using var connection = _context.CreateConnection();
            return await connection.QueryFirstOrDefaultAsync<BudgetCredit>(
                BudgetQueries.GetCreditById,
                new { id = creditId });
        }

        public async Task<BudgetCredit> AddCredit(CreateCreditRequest request)
        {
            using var connection = _context.CreateConnection();
            return await connection.QueryFirstOrDefaultAsync<BudgetCredit>(
                BudgetQueries.AddCredit,
                new
                {
                    monthId = request.monthId,
                    source = request.source,
                    amountEstimated = request.amountEstimated,
                    amountActual = request.amountActual,
                    isLastMonthBalance = request.isLastMonthBalance
                });
        }

        public async Task<BudgetCredit> UpdateCredit(int creditId, UpdateCreditRequest request)
        {
            using var connection = _context.CreateConnection();
            return await connection.QueryFirstOrDefaultAsync<BudgetCredit>(
                BudgetQueries.UpdateCredit,
                new
                {
                    id = creditId,
                    source = request.source,
                    amountEstimated = request.amountEstimated,
                    amountActual = request.amountActual,
                    isLastMonthBalance = request.isLastMonthBalance
                });
        }

        public async Task<bool> DeleteCredit(int creditId)
        {
            using var connection = _context.CreateConnection();
            var rowsAffected = await connection.ExecuteAsync(
                BudgetQueries.DeleteCredit,
                new { id = creditId });
            return rowsAffected > 0;
        }

        public async Task<BudgetCredit> GetLastMonthBalanceCredit(int monthId)
        {
            using var connection = _context.CreateConnection();
            return await connection.QueryFirstOrDefaultAsync<BudgetCredit>(
                BudgetQueries.GetLastMonthBalanceCredit,
                new { monthId });
        }

        // Debit Operations
        public async Task<IEnumerable<BudgetDebit>> GetDebitsByMonthId(int monthId)
        {
            using var connection = _context.CreateConnection();
            return await connection.QueryAsync<BudgetDebit>(
                BudgetQueries.GetDebitsByMonthId,
                new { monthId });
        }

        public async Task<BudgetDebit> GetDebitById(int debitId)
        {
            using var connection = _context.CreateConnection();
            return await connection.QueryFirstOrDefaultAsync<BudgetDebit>(
                BudgetQueries.GetDebitById,
                new { id = debitId });
        }

        public async Task<BudgetDebit> AddDebit(CreateDebitRequest request)
        {
            using var connection = _context.CreateConnection();
            return await connection.QueryFirstOrDefaultAsync<BudgetDebit>(
                BudgetQueries.AddDebit,
                new
                {
                    monthId = request.monthId,
                    target = request.target,
                    amountEstimated = request.amountEstimated,
                    amountActual = request.amountActual
                });
        }

        public async Task<BudgetDebit> UpdateDebit(int debitId, UpdateDebitRequest request)
        {
            using var connection = _context.CreateConnection();
            return await connection.QueryFirstOrDefaultAsync<BudgetDebit>(
                BudgetQueries.UpdateDebit,
                new
                {
                    id = debitId,
                    target = request.target,
                    amountEstimated = request.amountEstimated,
                    amountActual = request.amountActual
                });
        }

        public async Task<bool> DeleteDebit(int debitId)
        {
            using var connection = _context.CreateConnection();
            var rowsAffected = await connection.ExecuteAsync(
                BudgetQueries.DeleteDebit,
                new { id = debitId });
            return rowsAffected > 0;
        }

        // Summary Operations
        public async Task<BudgetSummary> GetMonthlySummary(int monthId)
        {
            using var connection = _context.CreateConnection();
            return await connection.QueryFirstOrDefaultAsync<BudgetSummary>(
                BudgetQueries.GetMonthlySummary,
                new { monthId });
        }

        public async Task<IEnumerable<BudgetSummary>> GetAllMonthsWithSummaries()
        {
            using var connection = _context.CreateConnection();
            return await connection.QueryAsync<BudgetSummary>(
                BudgetQueries.GetAllMonthsWithSummaries);
        }

        public async Task<decimal> GetPreviousMonthFinalBalance(int yearNumber, int monthNumber)
        {
            using var connection = _context.CreateConnection();
            var result = await connection.QueryFirstOrDefaultAsync<decimal?>(
                BudgetQueries.GetPreviousMonthFinalBalance,
                new { yearNumber, monthNumber });
            return result ?? 0;
        }
    }
}

