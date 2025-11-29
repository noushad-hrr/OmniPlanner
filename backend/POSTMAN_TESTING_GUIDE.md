# Postman Testing Guide for Password Hashing Implementation

## Overview

This guide provides step-by-step instructions for testing the password hashing implementation using Postman. The system now uses `%$*#` as the separator for salt and hash instead of dots to avoid conflicts with passwords containing dots.

## Prerequisites

1. **Postman installed** on your machine
2. **API running** on your local/development environment
3. **Valid JWT token** for authenticated endpoints
4. **Database access** for verification

## Base URL

```
http://localhost:5000/api
```
*(Adjust the port according to your configuration)*

---

## 🔄 **Step 1: Password Migration (First Step)**

### **Endpoint:** `POST /api/User/MigratePasswords`

**Headers:**
```
Authorization: Bearer {your_jwt_token}
Content-Type: application/json
```

**Body:** *(Empty - no body needed)*

**Expected Response:**
```json
{
  "success": true,
  "message": "Password migration completed successfully. X passwords were migrated. 0 plain text passwords remaining.",
  "data": null
}
```

**Notes:**
- This should be called **ONCE** after deployment
- Requires super admin access (recommended)
- Migrates existing plain text passwords to hashed format

---

## 🔐 **Step 2: Test User Login (Existing Users)**

### **Endpoint:** `POST /api/User/Login`

**Headers:**
```
Content-Type: application/json
```

**Body:**
```json
{
  "email": "existing_user@example.com",
  "password": "existing_password"
}
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Get Successfully",
  "data": {
    "id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "existing_user@example.com",
    "password": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", // JWT token
    "role_id": 1,
    "role_name": "Admin",
    "permissions": [...],
    "sites": [...]
  }
}
```

**Test Cases:**
- ✅ Login with existing user (should work after migration)
- ❌ Login with wrong password (should fail)
- ❌ Login with non-existent email (should fail)

---

## 👤 **Step 3: Create New User**

### **Endpoint:** `POST /api/User/AddUpdateUser`

**Headers:**
```
Authorization: Bearer {your_jwt_token}
Content-Type: application/json
```

**Body:**
```json
{
  "first_name": "Test",
  "last_name": "User",
  "email": "testuser@example.com",
  "password": "My.Secure.Password.123!",
  "phone_number": "1234567890",
  "role_id": 1,
  "is_super_admin": false,
  "is_active": true,
  "regions": [
    {
      "regionID": 1,
      "siteIDs": [1, 2, 3]
    }
  ]
}
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Get Successfully",
  "data": {
    "id": 123,
    "first_name": "Test",
    "last_name": "User",
    "email": "testuser@example.com",
    "password": "ABC123DEF456%$*#xyz789uvw012...", // Hashed password with %$*# separator
    "phone_number": "1234567890",
    "role_id": 1,
    "is_super_admin": false,
    "is_active": true
  }
}
```

**Important:** Notice the password in the response contains `%$*#` separator, not dots.

---

## 🔐 **Step 4: Test Login with New User**

### **Endpoint:** `POST /api/User/Login`

**Headers:**
```
Content-Type: application/json
```

**Body:**
```json
{
  "email": "testuser@example.com",
  "password": "My.Secure.Password.123!"
}
```

**Expected Response:** Same as Step 2, but with new user data.

**Test Cases:**
- ✅ Login with correct password (should work)
- ❌ Login with wrong password (should fail)
- ❌ Login with wrong email (should fail)

---

## 🔄 **Step 5: Test Password Reset Flow**

### **Step 5a: Forgot Password**

**Endpoint:** `POST /api/User/ForgotPassword`

**Headers:**
```
Content-Type: application/json
```

**Body:**
```json
{
  "email": "testuser@example.com"
}
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Sent password reset link to your email",
  "data": true
}
```

### **Step 5b: Reset Password**

**Endpoint:** `POST /api/User/ResetPassword`

**Headers:**
```
Content-Type: application/json
```

**Body:**
```json
{
  "userid": "base64_encoded_user_id",
  "date": "base64_encoded_date",
  "password": "New.Secure.Password.456!"
}
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Get Successfully",
  "data": true
}
```

### **Step 5c: Login with Reset Password**

**Endpoint:** `POST /api/User/Login`

**Headers:**
```
Content-Type: application/json
```

**Body:**
```json
{
  "email": "testuser@example.com",
  "password": "New.Secure.Password.456!"
}
```

**Expected Response:** Successful login with JWT token.

---

## 🔍 **Step 6: Database Verification**

### **Check Password Format**

Run this SQL query in your database:

```sql
SELECT id, email, password FROM users WHERE email = 'testuser@example.com';
```

**Expected Result:**
- Password should look like: `ABC123DEF456%$*#xyz789uvw012...`
- Should contain the `%$*#` separator
- Should NOT contain plain text password

### **Verify Migration Completion**

```sql
SELECT COUNT(*) FROM users WHERE password NOT LIKE '%$*#%' AND password IS NOT NULL AND password != '';
```

**Expected Result:** `0` (no plain text passwords remaining)

---

## 🧪 **Step 7: Edge Case Testing**

### **Test 1: Password with Dots**

**Create User:**
```json
{
  "email": "dotuser@example.com",
  "password": "My.Password.With.Dots.123!"
}
```

**Login:**
```json
{
  "email": "dotuser@example.com",
  "password": "My.Password.With.Dots.123!"
}
```

**Expected:** Should work correctly, password hashed with `%$*#` separator

### **Test 2: Password with Special Characters**

**Create User:**
```json
{
  "email": "specialuser@example.com",
  "password": "My%$*#Password123!"
}
```

**Login:**
```json
{
  "email": "specialuser@example.com",
  "password": "My%$*#Password123!"
}
```

**Expected:** Should work correctly, password hashed with `%$*#` separator

### **Test 3: Wrong Password Scenarios**

**Test with wrong password:**
```json
{
  "email": "testuser@example.com",
  "password": "WrongPassword123!"
}
```

**Expected Response:**
```json
{
  "success": false,
  "message": "Username Or Password is incorrect",
  "data": null
}
```

---

## 📋 **Testing Checklist**

- [ ] Run password migration endpoint
- [ ] Test login with existing users (should work)
- [ ] Create new user (password should be hashed with `%$*#`)
- [ ] Login with new user (should work)
- [ ] Test password reset flow
- [ ] Verify database contains hashed passwords with `%$*#` separator
- [ ] Test passwords with dots (should work)
- [ ] Test passwords with special characters (should work)
- [ ] Test wrong password scenarios
- [ ] Verify JWT token generation works

---

## 🚨 **Troubleshooting**

### **Common Issues:**

1. **Migration Fails:**
   - Check database permissions
   - Verify connection string
   - Ensure you have super admin access

2. **Login Fails After Migration:**
   - Verify migration completed successfully
   - Check if password was properly hashed
   - Ensure no plain text passwords remain

3. **Password with Dots Not Working:**
   - Verify the `%$*#` separator is being used
   - Check database for correct hash format
   - Ensure migration was run

4. **JWT Token Issues:**
   - Verify authentication is successful
   - Check token expiration
   - Ensure proper authorization headers

### **Debug Queries:**

```sql
-- Check all password formats
SELECT id, email, 
       CASE 
         WHEN password LIKE '%$*#%' THEN 'Hashed'
         WHEN password IS NULL THEN 'Null'
         WHEN password = '' THEN 'Empty'
         ELSE 'Plain Text'
       END as password_type
FROM users;

-- Find any remaining plain text passwords
SELECT id, email, password 
FROM users 
WHERE password NOT LIKE '%$*#%' 
  AND password IS NOT NULL 
  AND password != '';
```

---

## ✅ **Success Criteria**

The implementation is working correctly if:

1. ✅ All passwords are stored with `%$*#` separator
2. ✅ Users can log in with their original passwords after migration
3. ✅ New users can be created and can log in
4. ✅ Password reset functionality works
5. ✅ Passwords with dots work correctly
6. ✅ No plain text passwords remain in the database
7. ✅ JWT tokens are generated successfully

This testing guide ensures your password hashing implementation is secure and functional with the new `%$*#` separator. 