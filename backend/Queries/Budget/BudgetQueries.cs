namespace OmniPlanner_API.Queries.Budget
{
    public static class BudgetQueries
    {
        // Budget Months
        public const string GetAllMonths = @"
            SELECT id, month_year, month_number, year_number, created_at, updated_at
            FROM budget_months
            ORDER BY year_number, month_number;";

        public const string GetMonthById = @"
            SELECT id, month_year, month_number, year_number, created_at, updated_at
            FROM budget_months
            WHERE id = @id;";

        public const string CreateMonth = @"
            INSERT INTO budget_months (month_year, month_number, year_number, created_at, updated_at)
            VALUES (@monthYear, @monthNumber, @yearNumber, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
            RETURNING id, month_year, month_number, year_number, created_at, updated_at;";

        public const string CheckMonthExists = @"
            SELECT COUNT(*) FROM budget_months WHERE month_year = @monthYear;";

        // Budget Credits
        public const string GetCreditsByMonthId = @"
            SELECT id, month_id, source, amount_estimated, amount_actual, is_last_month_balance, created_at, updated_at
            FROM budget_credits
            WHERE month_id = @monthId
            ORDER BY is_last_month_balance DESC, id;";

        public const string GetCreditById = @"
            SELECT id, month_id, source, amount_estimated, amount_actual, is_last_month_balance, created_at, updated_at
            FROM budget_credits
            WHERE id = @id;";

        public const string AddCredit = @"
            INSERT INTO budget_credits (month_id, source, amount_estimated, amount_actual, is_last_month_balance, created_at, updated_at)
            VALUES (@monthId, @source, @amountEstimated, @amountActual, @isLastMonthBalance, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
            RETURNING id, month_id, source, amount_estimated, amount_actual, is_last_month_balance, created_at, updated_at;";

        public const string UpdateCredit = @"
            UPDATE budget_credits
            SET source = @source,
                amount_estimated = @amountEstimated,
                amount_actual = @amountActual,
                is_last_month_balance = @isLastMonthBalance,
                updated_at = CURRENT_TIMESTAMP
            WHERE id = @id
            RETURNING id, month_id, source, amount_estimated, amount_actual, is_last_month_balance, created_at, updated_at;";

        public const string DeleteCredit = @"
            DELETE FROM budget_credits WHERE id = @id;";

        public const string GetLastMonthBalanceCredit = @"
            SELECT id, month_id, source, amount_estimated, amount_actual, is_last_month_balance, created_at, updated_at
            FROM budget_credits
            WHERE month_id = @monthId AND is_last_month_balance = true
            LIMIT 1;";

        // Budget Debits
        public const string GetDebitsByMonthId = @"
            SELECT id, month_id, target, amount_estimated, amount_actual, created_at, updated_at
            FROM budget_debits
            WHERE month_id = @monthId
            ORDER BY id;";

        public const string GetDebitById = @"
            SELECT id, month_id, target, amount_estimated, amount_actual, created_at, updated_at
            FROM budget_debits
            WHERE id = @id;";

        public const string AddDebit = @"
            INSERT INTO budget_debits (month_id, target, amount_estimated, amount_actual, created_at, updated_at)
            VALUES (@monthId, @target, @amountEstimated, @amountActual, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
            RETURNING id, month_id, target, amount_estimated, amount_actual, created_at, updated_at;";

        public const string UpdateDebit = @"
            UPDATE budget_debits
            SET target = @target,
                amount_estimated = @amountEstimated,
                amount_actual = @amountActual,
                updated_at = CURRENT_TIMESTAMP
            WHERE id = @id
            RETURNING id, month_id, target, amount_estimated, amount_actual, created_at, updated_at;";

        public const string DeleteDebit = @"
            DELETE FROM budget_debits WHERE id = @id;";

        // Budget Summary Calculations
        public const string GetMonthlySummary = @"
            SELECT 
                bm.id as month_id,
                bm.month_year,
                COALESCE(SUM(bc.amount_actual), 0) as monthly_credit,
                COALESCE(SUM(bd.amount_actual), 0) as monthly_debit,
                COALESCE(SUM(bc.amount_actual), 0) - COALESCE(SUM(bd.amount_actual), 0) as final_balance
            FROM budget_months bm
            LEFT JOIN budget_credits bc ON bm.id = bc.month_id
            LEFT JOIN budget_debits bd ON bm.id = bd.month_id
            WHERE bm.id = @monthId
            GROUP BY bm.id, bm.month_year;";

        public const string GetAllMonthsWithSummaries = @"
            SELECT 
                bm.id as month_id,
                bm.month_year,
                COALESCE(SUM(bc.amount_actual), 0) as monthly_credit,
                COALESCE(SUM(bd.amount_actual), 0) as monthly_debit,
                COALESCE(SUM(bc.amount_actual), 0) - COALESCE(SUM(bd.amount_actual), 0) as final_balance
            FROM budget_months bm
            LEFT JOIN budget_credits bc ON bm.id = bc.month_id
            LEFT JOIN budget_debits bd ON bm.id = bd.month_id
            GROUP BY bm.id, bm.month_year, bm.month_number, bm.year_number
            ORDER BY bm.year_number, bm.month_number;";

        public const string GetPreviousMonthFinalBalance = @"
            SELECT 
                COALESCE(SUM(bc.amount_actual), 0) - COALESCE(SUM(bd.amount_actual), 0) as final_balance
            FROM budget_months bm
            LEFT JOIN budget_credits bc ON bm.id = bc.month_id
            LEFT JOIN budget_debits bd ON bm.id = bd.month_id
            WHERE bm.year_number = @yearNumber AND bm.month_number = @monthNumber
            GROUP BY bm.id
            LIMIT 1;";
    }
}

