using OmniPlanner_API.IRepository;
using OmniPlanner_API.Middleware;
using OmniPlanner_API.Models.System;
using OmniPlanner_API.Repository;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.FileProviders;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Text;
using System.Text.Json.Serialization;
using System.Diagnostics;
using System.Diagnostics;

var builder = WebApplication.CreateBuilder(args);

// Get JWT configuration from appsettings.json or environment variables
var jwtSecretKey = builder.Configuration["Jwt:SecretKey"] 
    ?? throw new InvalidOperationException("JWT Secret Key not configured. Please set Jwt:SecretKey in appsettings.json or environment variables.");

var jwtIssuer = builder.Configuration["Jwt:Issuer"] ?? "OmniPlanner";
var jwtAudience = builder.Configuration["Jwt:Audience"] ?? "OmniPlannerUsers";
var jwtExpirationMinutes = int.Parse(builder.Configuration["Jwt:ExpirationMinutes"] ?? "60");

builder.Services.AddHttpContextAccessor();
// Add Dapper Context and Repository
builder.Services.AddSingleton<DapperContext>();
builder.Services.AddScoped<IUsersRepository, UsersRepository>();
builder.Services.AddScoped<IRolesRepository, RolesRepository>();
builder.Services.AddScoped<IPermissionsRepository, PermissionsRepository>();
builder.Services.AddScoped<JwtService>();
builder.Services.AddScoped<ISitesRepository, SitesRepository>();
builder.Services.AddScoped<IRegionsRepository, RegionsRepository>();
builder.Services.AddScoped<IProductsRepository, ProductsRepository>();
builder.Services.AddScoped<IPackageTypesRepository, PackageTypesRepository>();
builder.Services.AddScoped<IEmailNotificationRepository, EmailNotificationRepository>();
builder.Services.AddScoped<ICustomerRepository, CustomerRepository>();
builder.Services.AddScoped<IScaleAndPaymentMethodRepository, ScaleAndPaymentMethodRepository>();
//builder.Services.AddScoped<IInventoryMasterRepository, InventoryMasterRepository>();
//builder.Services.AddScoped<IInventorySoldDataRepository, InventorySoldDataRepository>();
builder.Services.AddScoped<IAttachmentRepository, AttachmentRepository>();
builder.Services.AddScoped<IUtilitiesRepository, UtilitiesRepository>();
builder.Services.AddScoped<IDashboardRepository, DashboardRepository>();
builder.Services.AddScoped<IPaymentHistoryRepository, PaymentHistoryRepository>();
builder.Services.AddScoped<ITasksRepository>(sp => 
    new TasksRepository(sp.GetRequiredService<DapperContext>(), sp.GetRequiredService<IHttpContextAccessor>()));
builder.Services.AddScoped<ITask2Repository>(sp => 
    new Task2Repository(sp.GetRequiredService<DapperContext>(), sp.GetRequiredService<IHttpContextAccessor>()));
builder.Services.AddScoped<IPeriodicTasksRepository, PeriodicTasksRepository>();
builder.Services.AddScoped<IBudgetRepository, BudgetRepository>();
builder.Services.AddScoped<ISettingsRepository, SettingsRepository>();
builder.Services.AddScoped<INotesRepository>(sp => 
    new NotesRepository(sp.GetRequiredService<DapperContext>(), sp.GetRequiredService<IHttpContextAccessor>()));
builder.Services.AddScoped<ICategoryMasterRepository, CategoryMasterRepository>();
builder.Services.AddScoped<IStatusMasterRepository, StatusMasterRepository>();
builder.Services.AddScoped<IPriorityMasterRepository, PriorityMasterRepository>();
builder.Services.AddScoped<IUrlsMasterRepository, UrlsMasterRepository>();
builder.Services.AddScoped<ICredentialsMasterRepository, CredentialsMasterRepository>();
builder.Services.Configure<MailSettings>(builder.Configuration.GetSection("MailSettings"));
builder.Services.AddAutoMapper(typeof(MapperProfile));
// CORS Configuration
builder.Services.AddCors(options =>
{
    if (builder.Environment.IsDevelopment())
    {
        // Development: Allow all origins for easier development
        options.AddDefaultPolicy(policy =>
        {
            policy.AllowAnyOrigin()
                  .AllowAnyMethod()
                  .AllowAnyHeader();
        });
    }
    else
    {
        // Production: Restrict to specific origins
        var allowedOrigins = builder.Configuration.GetSection("AllowedOrigins").Get<string[]>() 
            ?? new[] { "https://yourdomain.com" };
        
        options.AddDefaultPolicy(policy =>
        {
            policy.WithOrigins(allowedOrigins)
                  .AllowAnyMethod()
                  .AllowAnyHeader()
                  .AllowCredentials();
        });
    }
});
builder.Services.AddAuthentication(x =>
{
    x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(x =>
{
    x.RequireHttpsMetadata = !builder.Environment.IsDevelopment(); // Require HTTPS in production
    x.SaveToken = true;
    x.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSecretKey)),
        ValidateIssuer = true,
        ValidIssuer = jwtIssuer,
        ValidateAudience = true,
        ValidAudience = jwtAudience,
        ValidateLifetime = true, // This ensures expired tokens are rejected
        ClockSkew = TimeSpan.Zero // No additional time tolerance for expiration
    };
});

builder.Services.AddRazorPages();
builder.Services.AddControllers().AddJsonOptions(options =>
{
    options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
});
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "OmniPlanner", Version = "v1" });
    // ?? Add JWT Bearer Authorization
    c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Name = "Authorization",
        Type = SecuritySchemeType.ApiKey,
        Scheme = "Bearer",
        BearerFormat = "JWT",
        In = ParameterLocation.Header,
        Description = "Enter JWT token in format: Bearer {your token}"
    });

    c.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference { Type = ReferenceType.SecurityScheme, Id = "Bearer" }
            },
            new string[] {}
        }
    });
});

var app = builder.Build();
IConfiguration configuration = app.Configuration;
if (builder.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();

}

// Swagger only in development
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json/", "OmniPlanner v1"));
}
app.UseStaticFiles();
app.UseStaticFiles(new StaticFileOptions()
{
    FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), @"Uploads")),
    RequestPath = new PathString("/Uploads")
});
// Directory browser only in development
if (app.Environment.IsDevelopment())
{
    app.UseDirectoryBrowser(new DirectoryBrowserOptions()
    {
        FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), @"Uploads")),
        RequestPath = new PathString("/Uploads")
    });
}
app.UseRouting();
app.UseCors(); // Use configured CORS policy

app.UseAuthentication();
app.UseAuthorization();
app.UseMiddleware<LoggingMiddleware>();

app.Lifetime.ApplicationStarted.Register(() =>
{
    LoggerHelper.LogSystemEvent("? Server started successfully");
});
app.Lifetime.ApplicationStopping.Register(() =>
{
    LoggerHelper.LogSystemEvent("?? Server is shutting down");
});
app.Lifetime.ApplicationStopped.Register(() =>
{
    LoggerHelper.LogSystemEvent("? Server has stopped");
});


app.UseEndpoints(endpoints =>
{
    // endpoints.MapControllers();
    endpoints.MapRazorPages();
    endpoints.MapControllerRoute(
     name: "default",
     pattern: "{controller=Home}/{action=Index}/{id?}");
});

app.Run();
