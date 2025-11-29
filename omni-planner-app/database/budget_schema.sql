-- Budget Management System Database Schema (PostgreSQL)
-- Execute these queries in your PostgreSQL database

-- 1. Create Budget Months Table
CREATE TABLE IF NOT EXISTS budget_months (
    id SERIAL PRIMARY KEY,
    month_year VARCHAR(20) NOT NULL UNIQUE,
    month_number INTEGER NOT NULL,
    year_number INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create index for budget_months
CREATE INDEX IF NOT EXISTS idx_month_year ON budget_months(month_number, year_number);

-- 2. Create Budget Credits Table
CREATE TABLE IF NOT EXISTS budget_credits (
    id SERIAL PRIMARY KEY,
    month_id INTEGER NOT NULL,
    source VARCHAR(255) NOT NULL,
    amount_estimated DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    amount_actual DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    is_last_month_balance BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (month_id) REFERENCES budget_months(id) ON DELETE CASCADE
);

-- Create index for budget_credits
CREATE INDEX IF NOT EXISTS idx_credits_month_id ON budget_credits(month_id);

-- 3. Create Budget Debits Table
CREATE TABLE IF NOT EXISTS budget_debits (
    id SERIAL PRIMARY KEY,
    month_id INTEGER NOT NULL,
    target VARCHAR(255) NOT NULL,
    amount_estimated DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    amount_actual DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (month_id) REFERENCES budget_months(id) ON DELETE CASCADE
);

-- Create index for budget_debits
CREATE INDEX IF NOT EXISTS idx_debits_month_id ON budget_debits(month_id);

-- Create trigger function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for auto-updating updated_at
CREATE TRIGGER update_budget_months_updated_at BEFORE UPDATE ON budget_months
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_budget_credits_updated_at BEFORE UPDATE ON budget_credits
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_budget_debits_updated_at BEFORE UPDATE ON budget_debits
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert Dummy Data for Budget Months
INSERT INTO budget_months (month_year, month_number, year_number) VALUES
('Oct 2025', 10, 2025),
('Nov 2025', 11, 2025),
('Dec 2025', 12, 2025),
('Jan 2026', 1, 2026);

-- Insert Dummy Data for Budget Credits (Oct 2025)
INSERT INTO budget_credits (month_id, source, amount_estimated, amount_actual, is_last_month_balance) VALUES
(1, 'Salary', 20000.00, 20000.00, FALSE),
(1, 'Dad', 5000.00, 6000.00, FALSE),
(1, 'Printer Payment', 2000.00, 1500.00, FALSE),
(1, 'Last month balance', 0.00, 0.00, TRUE);

-- Insert Dummy Data for Budget Credits (Nov 2025)
INSERT INTO budget_credits (month_id, source, amount_estimated, amount_actual, is_last_month_balance) VALUES
(2, 'Salary', 20000.00, 20000.00, FALSE),
(2, 'Laptop sold', 13000.00, 12000.00, FALSE),
(2, 'Last month balance', 4900.00, 4900.00, TRUE);

-- Insert Dummy Data for Budget Credits (Dec 2025)
INSERT INTO budget_credits (month_id, source, amount_estimated, amount_actual, is_last_month_balance) VALUES
(3, 'Salary', 20000.00, 20000.00, FALSE),
(3, 'Bonus', 5000.00, 5000.00, FALSE),
(3, 'Last month balance', 15000.00, 15000.00, TRUE);

-- Insert Dummy Data for Budget Credits (Jan 2026)
INSERT INTO budget_credits (month_id, source, amount_estimated, amount_actual, is_last_month_balance) VALUES
(4, 'Salary', 22000.00, 22000.00, FALSE),
(4, 'Freelance', 3000.00, 3500.00, FALSE),
(4, 'Last month balance', 40000.00, 40000.00, TRUE);

-- Insert Dummy Data for Budget Debits (Oct 2025)
INSERT INTO budget_debits (month_id, target, amount_estimated, amount_actual) VALUES
(1, 'Salary sent to Home', 18000.00, 17500.00),
(1, 'My daily spents', 2000.00, 3200.00),
(1, 'Paid to friend', 1000.00, 1000.00),
(1, 'EMI', 900.00, 900.00);

-- Insert Dummy Data for Budget Debits (Nov 2025)
INSERT INTO budget_debits (month_id, target, amount_estimated, amount_actual) VALUES
(2, 'Salary sent to Home', 18000.00, 17500.00),
(2, 'My daily spents', 2000.00, 2000.00),
(2, 'Paid to friend', 1000.00, 1500.00),
(2, 'EMI', 900.00, 900.00);

-- Insert Dummy Data for Budget Debits (Dec 2025)
INSERT INTO budget_debits (month_id, target, amount_estimated, amount_actual) VALUES
(3, 'Salary sent to Home', 18000.00, 18000.00),
(3, 'My daily spents', 2500.00, 2800.00),
(3, 'Christmas Shopping', 3000.00, 3500.00),
(3, 'EMI', 900.00, 900.00);

-- Insert Dummy Data for Budget Debits (Jan 2026)
INSERT INTO budget_debits (month_id, target, amount_estimated, amount_actual) VALUES
(4, 'Salary sent to Home', 19000.00, 19000.00),
(4, 'My daily spents', 2500.00, 2300.00),
(4, 'New Year Celebration', 2000.00, 2500.00),
(4, 'EMI', 900.00, 900.00);

-- Views for easier querying (Optional - for reporting)
CREATE OR REPLACE VIEW budget_monthly_summary AS
SELECT 
    bm.id as month_id,
    bm.month_year,
    bm.month_number,
    bm.year_number,
    COALESCE(SUM(bc.amount_actual), 0) as monthly_credit,
    COALESCE(SUM(bd.amount_actual), 0) as monthly_debit,
    COALESCE(SUM(bc.amount_actual), 0) - COALESCE(SUM(bd.amount_actual), 0) as final_balance
FROM budget_months bm
LEFT JOIN budget_credits bc ON bm.id = bc.month_id
LEFT JOIN budget_debits bd ON bm.id = bd.month_id
GROUP BY bm.id, bm.month_year, bm.month_number, bm.year_number
ORDER BY bm.year_number, bm.month_number;

