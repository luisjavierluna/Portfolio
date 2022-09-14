using Microsoft.EntityFrameworkCore;
using PortfolioAPI.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<ContactFormDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("ContactFormConnectionString")));

builder.Services.AddCors(options =>
{
    var clientUrl = builder.Configuration.GetValue<string>("ClientUrl");
    options.AddDefaultPolicy(builder =>
    {
        builder.WithOrigins(clientUrl).AllowAnyMethod().AllowAnyHeader()
        .WithExposedHeaders(new string[] { "totalAmontRegisters" });
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
