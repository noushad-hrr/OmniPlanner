using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using System.Security.Cryptography;

namespace OmniPlanner_API.Repository
{
    public static class PasswordHasher
    {
        /// <summary>
        /// Hashes a password using PBKDF2 with HMACSHA256
        /// </summary>
        /// <param name="password">The plain text password to hash</param>
        /// <returns>A string containing the salt and hash separated by a dot</returns>
        public static string HashPassword(string password)
        {
            // Generate a 128-bit salt using a secure PRNG
            byte[] salt = new byte[128 / 8];
            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(salt);
            }

            // Derive a 256-bit subkey (use HMACSHA256 with 10,000 iterations)
            string hashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: password,
                salt: salt,
                prf: KeyDerivationPrf.HMACSHA256,
                iterationCount: 10000,
                numBytesRequested: 256 / 8));

            // Store salt + hash (you need salt for later verification)
            return $"{Convert.ToBase64String(salt)}%$*#{hashed}";
        }

        /// <summary>
        /// Verifies a password against a stored hash
        /// </summary>
        /// <param name="enteredPassword">The password entered by the user</param>
        /// <param name="storedHash">The stored hash from the database</param>
        /// <returns>True if the password matches, false otherwise</returns>
        public static bool VerifyPassword(string enteredPassword, string storedHash)
        {
            var parts = storedHash.Split(new[] { "%$*#" }, StringSplitOptions.None);
            if (parts.Length != 2) return false;

            byte[] salt = Convert.FromBase64String(parts[0]);
            string hashedEntered = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: enteredPassword,
                salt: salt,
                prf: KeyDerivationPrf.HMACSHA256,
                iterationCount: 10000,
                numBytesRequested: 256 / 8));

            return hashedEntered == parts[1];
        }

        /// <summary>
        /// Checks if a password hash is in the new format (contains the %$*# separator)
        /// </summary>
        /// <param name="storedHash">The stored hash to check</param>
        /// <returns>True if the hash is in the new format, false if it's plain text</returns>
        public static bool IsHashedPassword(string storedHash)
        {
            return !string.IsNullOrEmpty(storedHash) && storedHash.Contains("%$*#");
        }
    }
} 
