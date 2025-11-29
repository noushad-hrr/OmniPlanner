# Password Hashing Implementation

## Overview

This document describes the implementation of secure password hashing in the AESOP Commodity Application API. The implementation follows security best practices by using PBKDF2 with HMACSHA256 for password hashing instead of storing plain text passwords.

## Security Implementation

### Password Hashing Algorithm

- **Algorithm**: PBKDF2 (Password-Based Key Derivation Function 2)
- **Hash Function**: HMACSHA256
- **Iterations**: 10,000 (configurable)
- **Salt Size**: 128 bits (16 bytes)
- **Output Size**: 256 bits (32 bytes)

### Key Security Features

1. **Salt Generation**: Each password uses a cryptographically secure random salt
2. **One-way Hashing**: Passwords cannot be reversed or decrypted
3. **High Iteration Count**: 10,000 iterations make brute force attacks computationally expensive
4. **Unique Hashes**: Same password produces different hashes due to unique salts

## Implementation Details

### Files Modified/Created

1. **`Repository/PasswordHasher.cs`** - Core password hashing utility
2. **`Repository/PasswordMigrationHelper.cs`** - Migration utility for existing users
3. **`Repository/UsersRepository.cs`** - Updated to use password hashing
4. **`Controllers/UserController.cs`** - Added migration endpoint
5. **`Queries/System/UserQueries.cs`** - Updated login query
6. **`IRepository/IUsersRepository.cs`** - Added interface method

### Password Storage Format

Hashed passwords are stored in the format: `{salt}%$*#{hash}`

Example:
```
ABC123DEF456%$*#xyz789uvw012...
```

## API Changes

### Authentication Flow

1. **Login**: User provides email and password
2. **Database Query**: Fetch user by email only (no password comparison in SQL)
3. **Password Verification**: Use `PasswordHasher.VerifyPassword()` to verify the password
4. **JWT Token**: Generate token if verification succeeds

### User Management

1. **Create User**: Password is automatically hashed before saving
2. **Update User**: Password is hashed if provided
3. **Reset Password**: New password is hashed before saving

### Migration Endpoint

**POST** `/api/User/MigratePasswords`

- Migrates existing plain text passwords to hashed format
- Should be called once after deployment
- Requires super admin access (recommended)

## Migration Process

### Step 1: Deploy the Updated Code

Deploy the new code with password hashing functionality.

### Step 2: Run Migration

Call the migration endpoint to convert existing plain text passwords:

```bash
POST /api/User/MigratePasswords
```

### Step 3: Verify Migration

The migration endpoint will return:
- Number of passwords migrated
- Number of remaining plain text passwords (should be 0)

### Step 4: Test Authentication

Verify that existing users can still log in with their original passwords.

## Testing

### Manual Testing

1. **Create New User**: Verify password is hashed in database
2. **Login with New User**: Verify authentication works
3. **Login with Existing User**: Verify migration worked correctly
4. **Reset Password**: Verify new password is hashed

### Database Verification

1. **Check Password Format:**
   ```sql
   SELECT id, email, password FROM users WHERE email = 'testuser@example.com';
   ```
   - Password should look like: `ABC123DEF456%$*#xyz789uvw012...`
   - Should contain the `%$*#` separator

2. **Verify Migration:**
   ```sql
   SELECT COUNT(*) FROM users WHERE password NOT LIKE '%$*#%' AND password IS NOT NULL AND password != '';
   ```
   - Should return 0 (no plain text passwords)

### Automated Testing

Run the test file to verify hashing functionality:

```csharp
PasswordHashingTest.TestPasswordHashing();
```

## Security Considerations

### What This Implementation Protects Against

1. **Database Breaches**: Even if database is compromised, passwords are not readable
2. **Rainbow Table Attacks**: Unique salts prevent pre-computed hash attacks
3. **Brute Force Attacks**: High iteration count makes attacks computationally expensive
4. **Password Reuse**: Same password produces different hashes due to unique salts

### Additional Security Recommendations

1. **HTTPS Only**: Ensure all API communication uses HTTPS
2. **Password Policy**: Implement strong password requirements
3. **Rate Limiting**: Limit login attempts to prevent brute force
4. **Audit Logging**: Log authentication attempts and failures
5. **Regular Updates**: Keep dependencies updated for security patches

## Database Schema

No changes required to the existing database schema. The `password` column continues to store string values, but now contains hashed passwords instead of plain text.

## Rollback Plan

If issues arise during migration:

1. **Backup Database**: Always backup before migration
2. **Monitor Logs**: Watch for authentication failures
3. **Test Thoroughly**: Verify all user types can authenticate
4. **Gradual Rollout**: Consider migrating users in batches

## Performance Impact

- **Hashing**: ~1-2ms per password hash (acceptable for user operations)
- **Verification**: ~1-2ms per password verification
- **Migration**: Depends on number of users (typically seconds to minutes)

## Compliance

This implementation follows:

- **OWASP Guidelines**: Password storage best practices
- **NIST Guidelines**: Password hashing recommendations
- **Industry Standards**: PBKDF2 is widely accepted and secure

## Troubleshooting

### Common Issues

1. **Migration Fails**: Check database permissions and connection
2. **Login Fails**: Verify password migration completed successfully
3. **Performance Issues**: Monitor server resources during migration

### Debug Information

Enable detailed logging to troubleshoot authentication issues:

```csharp
// Add logging to PasswordHasher for debugging
_logger.LogDebug("Password verification result: {result}", isValid);
```

## Support

For questions or issues with the password hashing implementation, contact the development team or refer to the security documentation. 