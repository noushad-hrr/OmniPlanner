using Dapper;
using OmniPlanner_API.IRepository;

namespace OmniPlanner_API.Repository
{
    public class PasswordMigrationHelper
    {
        private readonly DapperContext _context;

        public PasswordMigrationHelper(DapperContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Migrates existing plain text passwords to hashed passwords
        /// This should be run once to update existing users
        /// </summary>
        public async Task MigrateExistingPasswords()
        {
            using (var connection = _context.CreateConnection())
            {
                // Get all users with plain text passwords (those that don't contain the %$*# separator)
                var usersWithPlainTextPasswords = await connection.QueryAsync<dynamic>(
                    "SELECT id, password FROM users WHERE password NOT LIKE '%$*#%' AND password IS NOT NULL AND password != ''");

                foreach (var user in usersWithPlainTextPasswords)
                {
                    // Hash the plain text password
                    string hashedPassword = PasswordHasher.HashPassword(user.password);
                    
                    // Update the user with the hashed password
                    await connection.ExecuteAsync(
                        "UPDATE users SET password = @hashedPassword WHERE id = @userId",
                        new { hashedPassword, userId = user.id });
                }
            }
        }

        /// <summary>
        /// Checks if there are any users with plain text passwords that need migration
        /// </summary>
        /// <returns>True if there are users with plain text passwords</returns>
        public async Task<bool> HasPlainTextPasswords()
        {
            using (var connection = _context.CreateConnection())
            {
                var count = await connection.ExecuteScalarAsync<int>(
                    "SELECT COUNT(*) FROM users WHERE password NOT LIKE '%$*#%' AND password IS NOT NULL AND password != ''");
                return count > 0;
            }
        }

        /// <summary>
        /// Gets the count of users with plain text passwords
        /// </summary>
        /// <returns>Number of users with plain text passwords</returns>
        public async Task<int> GetPlainTextPasswordCount()
        {
            using (var connection = _context.CreateConnection())
            {
                return await connection.ExecuteScalarAsync<int>(
                    "SELECT COUNT(*) FROM users WHERE password NOT LIKE '%$*#%' AND password IS NOT NULL AND password != ''");
            }
        }
    }
} 
