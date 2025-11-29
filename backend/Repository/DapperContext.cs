using Npgsql;
using System.Data;

namespace OmniPlanner_API.Repository
{
    public class DapperContext
    {
        private readonly string _connectionString;

        public DapperContext(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("DBConnection");
        }

        public IDbConnection CreateConnection() => new NpgsqlConnection(_connectionString);
    }
}
