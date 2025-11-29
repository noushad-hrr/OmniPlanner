using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using System.Security.Cryptography;

namespace OmniPlanner_API.Utilities
{
    public static class PasswordHashGenerator
    {
        /// <summary>
        /// Generate a password hash using the same algorithm as PasswordHasher
        /// Run this in a console or create a simple endpoint to generate hashes
        /// </summary>
        public static string GenerateHash(string password)
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

            // Store salt + hash
            return $"{Convert.ToBase64String(salt)}%$*#{hashed}";
        }

        /// <summary>
        /// Main method - can be used in a console app
        /// Uncomment and run this to generate password hash
        /// </summary>
        //public static void Main(string[] args)
        //{
        //    Console.WriteLine("Password Hash Generator");
        //    Console.WriteLine("Enter password to hash (or 'admin' for default):");
        //    string password = Console.ReadLine() ?? "admin";
        //    
        //    if (string.IsNullOrEmpty(password))
        //        password = "admin";
        //        
        //    string hash = GenerateHash(password);
        //    Console.WriteLine($"\nHashed Password:");
        //    Console.WriteLine(hash);
        //    Console.WriteLine($"\nSQL Update Statement:");
        //    Console.WriteLine($"UPDATE users SET password_hash = '{hash}' WHERE email = 'admin@omniplanner.com';");
        //}
    }
}

