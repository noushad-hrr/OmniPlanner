# Budget Management System - API Documentation

This document describes all the API endpoints that need to be implemented in the backend (Node.js/.NET/etc.) at `http://localhost:5500/api/Budget`.

## Base URL
```
http://localhost:5500/api/Budget
```

## Response Format
All API responses should follow this structure:
```json
{
  "success": true,
  "data": { ... },
  "message": "Operation successful"
}
```

For errors:
```json
{
  "success": false,
  "error": "Error message",
  "data": null
}
```

---

## Endpoints

### 1. Get All Months
**GET** `/GetAllMonths`

Returns all budget months in the system.

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "monthYear": "Oct 2025",
      "monthNumber": 10,
      "yearNumber": 2025,
      "createdAt": "2025-10-01T00:00:00Z",
      "updatedAt": "2025-10-01T00:00:00Z"
    }
  ]
}
```

---

### 2. Get Month Data (with Credits and Debits)
**GET** `/GetMonthData/{monthId}`

Returns complete data for a specific month including all credits and debits.

**Parameters:**
- `monthId` (path parameter): Integer ID of the month

**Response:**
```json
{
  "success": true,
  "data": {
    "month": {
      "id": 1,
      "monthYear": "Oct 2025",
      "monthNumber": 10,
      "yearNumber": 2025
    },
    "credits": [
      {
        "id": 1,
        "monthId": 1,
        "source": "Salary",
        "amountEstimated": 20000.00,
        "amountActual": 20000.00,
        "isLastMonthBalance": false
      }
    ],
    "debits": [
      {
        "id": 1,
        "monthId": 1,
        "target": "Salary sent to Home",
        "amountEstimated": 18000.00,
        "amountActual": 17500.00
      }
    ],
    "summary": {
      "monthId": 1,
      "monthYear": "Oct 2025",
      "monthlyCredit": 27500.00,
      "monthlyDebit": 22600.00,
      "finalBalance": 4900.00
    }
  }
}
```

**Note:** The summary should calculate:
- `monthlyCredit`: Sum of all `amountActual` from credits
- `monthlyDebit`: Sum of all `amountActual` from debits
- `finalBalance`: `monthlyCredit - monthlyDebit`

---

### 3. Get All Months with Summaries
**GET** `/GetAllMonthsWithSummaries`

Returns all months with their calculated summaries.

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "monthId": 1,
      "monthYear": "Oct 2025",
      "monthlyCredit": 27500.00,
      "monthlyDebit": 22600.00,
      "finalBalance": 4900.00
    }
  ]
}
```

---

### 4. Create Month
**POST** `/CreateMonth`

Creates a new budget month.

**Request Body:**
```json
{
  "monthYear": "Dec 2025",
  "monthNumber": 12,
  "yearNumber": 2025
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 3,
    "monthYear": "Dec 2025",
    "monthNumber": 12,
    "yearNumber": 2025,
    "createdAt": "2025-12-01T00:00:00Z",
    "updatedAt": "2025-12-01T00:00:00Z"
  }
}
```

**Validation:**
- `monthYear` must be unique
- `monthNumber` must be between 1-12
- `yearNumber` must be a valid year

---

### 5. Add Credit
**POST** `/AddCredit`

Adds a new credit entry to a month.

**Request Body:**
```json
{
  "monthId": 1,
  "source": "Salary",
  "amountEstimated": 20000.00,
  "amountActual": 20000.00,
  "isLastMonthBalance": false
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "monthId": 1,
    "source": "Salary",
    "amountEstimated": 20000.00,
    "amountActual": 20000.00,
    "isLastMonthBalance": false,
    "createdAt": "2025-10-01T00:00:00Z",
    "updatedAt": "2025-10-01T00:00:00Z"
  }
}
```

**Important:** 
- Only one credit entry per month should have `isLastMonthBalance: true`
- When adding a new month, the system should automatically calculate and add the last month's balance as a credit

---

### 6. Update Credit
**PUT** `/UpdateCredit/{creditId}`

Updates an existing credit entry.

**Parameters:**
- `creditId` (path parameter): Integer ID of the credit

**Request Body:**
```json
{
  "source": "Salary + Bonus",
  "amountEstimated": 22000.00,
  "amountActual": 22000.00,
  "isLastMonthBalance": false
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "monthId": 1,
    "source": "Salary + Bonus",
    "amountEstimated": 22000.00,
    "amountActual": 22000.00,
    "isLastMonthBalance": false,
    "updatedAt": "2025-10-05T00:00:00Z"
  }
}
```

---

### 7. Delete Credit
**DELETE** `/DeleteCredit/{creditId}`

Deletes a credit entry.

**Parameters:**
- `creditId` (path parameter): Integer ID of the credit

**Response:**
```json
{
  "success": true,
  "message": "Credit deleted successfully"
}
```

**Note:** Should not allow deletion of entries with `isLastMonthBalance: true` if you want to maintain data integrity.

---

### 8. Add Debit
**POST** `/AddDebit`

Adds a new debit entry to a month.

**Request Body:**
```json
{
  "monthId": 1,
  "target": "Salary sent to Home",
  "amountEstimated": 18000.00,
  "amountActual": 17500.00
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "monthId": 1,
    "target": "Salary sent to Home",
    "amountEstimated": 18000.00,
    "amountActual": 17500.00,
    "createdAt": "2025-10-01T00:00:00Z",
    "updatedAt": "2025-10-01T00:00:00Z"
  }
}
```

---

### 9. Update Debit
**PUT** `/UpdateDebit/{debitId}`

Updates an existing debit entry.

**Parameters:**
- `debitId` (path parameter): Integer ID of the debit

**Request Body:**
```json
{
  "target": "Home Expenses",
  "amountEstimated": 18000.00,
  "amountActual": 17500.00
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "monthId": 1,
    "target": "Home Expenses",
    "amountEstimated": 18000.00,
    "amountActual": 17500.00,
    "updatedAt": "2025-10-05T00:00:00Z"
  }
}
```

---

### 10. Delete Debit
**DELETE** `/DeleteDebit/{debitId}`

Deletes a debit entry.

**Parameters:**
- `debitId` (path parameter): Integer ID of the debit

**Response:**
```json
{
  "success": true,
  "message": "Debit deleted successfully"
}
```

---

### 11. Update Last Month Balance
**POST** `/UpdateLastMonthBalance/{monthId}`

Calculates and updates the last month balance credit entry for a specific month.

**Parameters:**
- `monthId` (path parameter): Integer ID of the month

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 4,
    "monthId": 2,
    "source": "Last month balance",
    "amountEstimated": 4900.00,
    "amountActual": 4900.00,
    "isLastMonthBalance": true
  }
}
```

**Business Logic:**
1. Find the previous month's `finalBalance`
2. If a "Last month balance" credit exists for this month, update it
3. If it doesn't exist, create a new credit entry with `isLastMonthBalance: true`
4. The amount should be the previous month's `finalBalance`

---

## Database Field Mapping

The frontend uses camelCase, but the database uses snake_case. Here's the mapping:

### BudgetMonth
- Frontend: `monthYear` → Database: `month_year`
- Frontend: `monthNumber` → Database: `month_number`
- Frontend: `yearNumber` → Database: `year_number`

### BudgetCredit
- Frontend: `monthId` → Database: `month_id`
- Frontend: `amountEstimated` → Database: `amount_estimated`
- Frontend: `amountActual` → Database: `amount_actual`
- Frontend: `isLastMonthBalance` → Database: `is_last_month_balance`

### BudgetDebit
- Frontend: `monthId` → Database: `month_id`
- Frontend: `amountEstimated` → Database: `amount_estimated`
- Frontend: `amountActual` → Database: `amount_actual`

---

## Business Rules

1. **Last Month Balance:**
   - Automatically calculated from the previous month's final balance
   - Should be added as a credit entry when viewing a month if it doesn't exist
   - Only one "Last month balance" entry per month

2. **Final Balance Calculation:**
   - `Final Balance = Monthly Credit - Monthly Debit`
   - Monthly Credit = Sum of all credit `amountActual`
   - Monthly Debit = Sum of all debit `amountActual`

3. **Month Ordering:**
   - Months should be ordered by `yearNumber` and `monthNumber` ascending

4. **Data Integrity:**
   - Deleting a month should cascade delete all its credits and debits
   - Foreign key constraints should be enforced

---

## Error Handling

All endpoints should handle:
- 400 Bad Request: Invalid input data
- 404 Not Found: Resource not found
- 500 Internal Server Error: Server-side errors

Example error response:
```json
{
  "success": false,
  "error": "Month with ID 999 not found",
  "data": null
}
```

