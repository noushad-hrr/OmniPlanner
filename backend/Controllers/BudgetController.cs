using OmniPlanner_API.IRepository;
using OmniPlanner_API.Models.Budget;
using OmniPlanner_API.Queries;
using OmniPlanner_API.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace OmniPlanner_API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    //[Authorize]
    public class BudgetController : ControllerBase
    {
        private readonly IBudgetRepository _budgetRepository;

        public BudgetController(IBudgetRepository budgetRepository)
        {
            _budgetRepository = budgetRepository;
        }

        // Get All Months
        [HttpGet]
        public async Task<IActionResult> GetAllMonths()
        {
            var response = new ServiceResponse<IEnumerable<BudgetMonth>>();
            try
            {
                response.Data = await _budgetRepository.GetAllMonths();
                if (response.Data == null || !response.Data.Any())
                    throw new Exception(CommonMessages.DataNotFound);

                response.Message = CommonMessages.GetSuccessfully;
                response.Success = true;
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
                return Ok(response);
            }
        }

        // Get Month Data (with Credits and Debits)
        [HttpGet("{monthId}")]
        public async Task<IActionResult> GetMonthData(int monthId)
        {
            var response = new ServiceResponse<BudgetMonthlyData>();
            try
            {
                var month = await _budgetRepository.GetMonthById(monthId);
                if (month == null)
                    throw new Exception(CommonMessages.DataNotFound);

                var credits = await _budgetRepository.GetCreditsByMonthId(monthId);
                var debits = await _budgetRepository.GetDebitsByMonthId(monthId);
                var summary = await _budgetRepository.GetMonthlySummary(monthId);

                response.Data = new BudgetMonthlyData
                {
                    month = month,
                    credits = credits.ToList(),
                    debits = debits.ToList(),
                    summary = summary ?? new BudgetSummary
                    {
                        month_id = monthId,
                        month_year = month.month_year,
                        monthly_credit = credits.Sum(c => c.amount_actual),
                        monthly_debit = debits.Sum(d => d.amount_actual),
                        final_balance = credits.Sum(c => c.amount_actual) - debits.Sum(d => d.amount_actual)
                    }
                };

                response.Message = CommonMessages.GetSuccessfully;
                response.Success = true;
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
                return Ok(response);
            }
        }

        // Get All Months with Summaries
        [HttpGet]
        public async Task<IActionResult> GetAllMonthsWithSummaries()
        {
            var response = new ServiceResponse<IEnumerable<BudgetSummary>>();
            try
            {
                response.Data = await _budgetRepository.GetAllMonthsWithSummaries();
                if (response.Data == null)
                    throw new Exception(CommonMessages.DataNotFound);

                response.Message = CommonMessages.GetSuccessfully;
                response.Success = true;
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
                return Ok(response);
            }
        }

        // Create Month
        [HttpPost]
        public async Task<IActionResult> CreateMonth([FromBody] CreateMonthRequest request)
        {
            var response = new ServiceResponse<BudgetMonth>();
            try
            {
                if (string.IsNullOrEmpty(request.monthYear))
                    throw new Exception("Month Year is required");

                if (request.monthNumber < 1 || request.monthNumber > 12)
                    throw new Exception("Month Number must be between 1 and 12");

                // Check if month already exists
                if (await _budgetRepository.MonthExists(request.monthYear))
                    throw new Exception("Month already exists");

                response.Data = await _budgetRepository.CreateMonth(
                    request.monthYear,
                    request.monthNumber,
                    request.yearNumber);

                if (response.Data == null)
                    throw new Exception(CommonMessages.UnableToCreate);

                response.Message = "Month created successfully";
                response.Success = true;
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
                return Ok(response);
            }
        }

        // Add Credit
        [HttpPost]
        public async Task<IActionResult> AddCredit([FromBody] CreateCreditRequest request)
        {
            var response = new ServiceResponse<BudgetCredit>();
            try
            {
                if (string.IsNullOrEmpty(request.source))
                    throw new Exception("Source is required");

                if (request.monthId <= 0)
                    throw new Exception("Valid Month ID is required");

                // If this is a last month balance, remove any existing one
                if (request.isLastMonthBalance)
                {
                    var existing = await _budgetRepository.GetLastMonthBalanceCredit(request.monthId);
                    if (existing != null)
                    {
                        await _budgetRepository.DeleteCredit(existing.id);
                    }
                }

                response.Data = await _budgetRepository.AddCredit(request);
                if (response.Data == null)
                    throw new Exception(CommonMessages.UnableToCreate);

                response.Message = "Credit added successfully";
                response.Success = true;
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
                return Ok(response);
            }
        }

        // Update Credit
        [HttpPut("{creditId}")]
        public async Task<IActionResult> UpdateCredit(int creditId, [FromBody] UpdateCreditRequest request)
        {
            var response = new ServiceResponse<BudgetCredit>();
            try
            {
                if (string.IsNullOrEmpty(request.source))
                    throw new Exception("Source is required");

                var existingCredit = await _budgetRepository.GetCreditById(creditId);
                if (existingCredit == null)
                    throw new Exception(CommonMessages.DataNotFound);

                // If updating to last month balance, remove any existing one for this month
                if (request.isLastMonthBalance && !existingCredit.is_last_month_balance)
                {
                    var existing = await _budgetRepository.GetLastMonthBalanceCredit(existingCredit.month_id);
                    if (existing != null && existing.id != creditId)
                    {
                        await _budgetRepository.DeleteCredit(existing.id);
                    }
                }

                response.Data = await _budgetRepository.UpdateCredit(creditId, request);
                if (response.Data == null)
                    throw new Exception("Unable to update credit");

                response.Message = "Credit updated successfully";
                response.Success = true;
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
                return Ok(response);
            }
        }

        // Delete Credit
        [HttpDelete("{creditId}")]
        public async Task<IActionResult> DeleteCredit(int creditId)
        {
            var response = new ServiceResponse<bool>();
            try
            {
                var credit = await _budgetRepository.GetCreditById(creditId);
                if (credit == null)
                    throw new Exception(CommonMessages.DataNotFound);

                response.Data = await _budgetRepository.DeleteCredit(creditId);
                if (!response.Data)
                    throw new Exception(CommonMessages.UnableToDelete);

                response.Message = "Credit deleted successfully";
                response.Success = true;
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
                return Ok(response);
            }
        }

        // Add Debit
        [HttpPost]
        public async Task<IActionResult> AddDebit([FromBody] CreateDebitRequest request)
        {
            var response = new ServiceResponse<BudgetDebit>();
            try
            {
                if (string.IsNullOrEmpty(request.target))
                    throw new Exception("Target is required");

                if (request.monthId <= 0)
                    throw new Exception("Valid Month ID is required");

                response.Data = await _budgetRepository.AddDebit(request);
                if (response.Data == null)
                    throw new Exception(CommonMessages.UnableToCreate);

                response.Message = "Debit added successfully";
                response.Success = true;
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
                return Ok(response);
            }
        }

        // Update Debit
        [HttpPut("{debitId}")]
        public async Task<IActionResult> UpdateDebit(int debitId, [FromBody] UpdateDebitRequest request)
        {
            var response = new ServiceResponse<BudgetDebit>();
            try
            {
                if (string.IsNullOrEmpty(request.target))
                    throw new Exception("Target is required");

                var existingDebit = await _budgetRepository.GetDebitById(debitId);
                if (existingDebit == null)
                    throw new Exception(CommonMessages.DataNotFound);

                response.Data = await _budgetRepository.UpdateDebit(debitId, request);
                if (response.Data == null)
                    throw new Exception("Unable to update debit");

                response.Message = "Debit updated successfully";
                response.Success = true;
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
                return Ok(response);
            }
        }

        // Delete Debit
        [HttpDelete("{debitId}")]
        public async Task<IActionResult> DeleteDebit(int debitId)
        {
            var response = new ServiceResponse<bool>();
            try
            {
                var debit = await _budgetRepository.GetDebitById(debitId);
                if (debit == null)
                    throw new Exception(CommonMessages.DataNotFound);

                response.Data = await _budgetRepository.DeleteDebit(debitId);
                if (!response.Data)
                    throw new Exception(CommonMessages.UnableToDelete);

                response.Message = "Debit deleted successfully";
                response.Success = true;
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
                return Ok(response);
            }
        }

        // Update Last Month Balance
        [HttpPost("{monthId}")]
        public async Task<IActionResult> UpdateLastMonthBalance(int monthId)
        {
            var response = new ServiceResponse<BudgetCredit>();
            try
            {
                var month = await _budgetRepository.GetMonthById(monthId);
                if (month == null)
                    throw new Exception("Month not found");

                // Calculate previous month
                int prevYear = month.year_number;
                int prevMonth = month.month_number - 1;
                
                if (prevMonth < 1)
                {
                    prevMonth = 12;
                    prevYear -= 1;
                }

                // Get previous month's final balance
                var previousBalance = await _budgetRepository.GetPreviousMonthFinalBalance(prevYear, prevMonth);

                // Check if last month balance credit already exists
                var existing = await _budgetRepository.GetLastMonthBalanceCredit(monthId);

                if (existing != null)
                {
                    // Update existing
                    var updateRequest = new UpdateCreditRequest
                    {
                        source = "Last month balance",
                        amountEstimated = previousBalance,
                        amountActual = previousBalance,
                        isLastMonthBalance = true
                    };
                    response.Data = await _budgetRepository.UpdateCredit(existing.id, updateRequest);
                }
                else
                {
                    // Create new
                    var createRequest = new CreateCreditRequest
                    {
                        monthId = monthId,
                        source = "Last month balance",
                        amountEstimated = previousBalance,
                        amountActual = previousBalance,
                        isLastMonthBalance = true
                    };
                    response.Data = await _budgetRepository.AddCredit(createRequest);
                }

                if (response.Data == null)
                    throw new Exception("Unable to update last month balance");

                response.Message = "Last month balance updated successfully";
                response.Success = true;
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
                return Ok(response);
            }
        }
    }
}

