# Generate Password Hash for Admin User

## Option 1: Use C# Console Application (Recommended)

Create a simple console application or use the existing backend:

1. **Create a temporary endpoint** (add to AuthController temporarily):
```csharp
[HttpGet("GenerateHash/{password}")]
[AllowAnonymous]
public IActionResult GenerateHash(string password)
{
    var hash = PasswordHasher.HashPassword(password);
    return Ok(new { 
        password = password,
        hash = hash,
        sql = $"UPDATE users SET password_hash = '{hash}' WHERE email = 'admin@omniplanner.com';"
    });
}
```

2. **Call the endpoint**:
```
GET http://localhost:5500/api/Auth/GenerateHash/admin
```

3. **Use the returned hash** in your SQL update statement.

## Option 2: Use PowerShell Script

Create a file `generate-hash.ps1`:

```powershell
# This requires .NET SDK
# Note: This is a simplified version - actual hash generation needs .NET libraries
Write-Host "Please use the C# method or the temporary endpoint"
```

## Option 3: Manual Calculation

Since the hash uses PBKDF2 with a random salt, each hash will be unique. You need to use the actual C# implementation.

## Quick Solution: Temporary Endpoint

Add this to `AuthController.cs` temporarily:

```csharp
[HttpGet("GenerateHash/{password}")]
[AllowAnonymous]
public IActionResult GenerateHash(string password = "admin")
{
    var hash = PasswordHasher.HashPassword(password);
    return Ok(new { 
        password = password,
        hash = hash,
        sql = $"UPDATE users SET password_hash = '{hash}' WHERE email = 'admin@omniplanner.com';"
    });
}
```

Then call: `GET http://localhost:5500/api/Auth/GenerateHash/admin`

