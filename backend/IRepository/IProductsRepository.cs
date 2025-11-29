using OmniPlanner_API.Models.Master_Data;
using OmniPlanner_API.Models.System;
using OmniPlanner_API.ViewModels.Master_Data;

namespace OmniPlanner_API.IRepository
{
    public interface IProductsRepository
    {
        Task<IEnumerable<ProductsViewModel>> GetProducts();
        Task<Products?> GetProductById(int id);
        Task<Products> AddUpdateProduct(Products request);
        Task<bool> DeleteProduct(int id, bool isHardDelete);
        //Task<bool> ActiveInActive(int id, bool is_active);
    }
}
