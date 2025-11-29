using OmniPlanner_API.Models.Inventory_Management;
using OmniPlanner_API.Models.Sales_Management;
using AutoMapper;

namespace OmniPlanner_API.Repository
{
    public class MapperProfile : Profile
    {
        public MapperProfile()
        {
            CreateMap<InventorySoldRequest, InventorySold>()
                .ForMember(dest => dest.payment_verified, opt => opt.MapFrom(src => false))
                .ForMember(dest => dest.payment_verified_by, opt => opt.MapFrom(src => 0))
                .ForMember(dest => dest.payment_verified_on, opt => opt.MapFrom(src => DateTime.MinValue));


            CreateMap<MoveInventory, MoveInventoryHistory>();
            CreateMap<QuickSaleInventories, InventoryMaster>();
            CreateMap<QuickSaleInventories, InventorySoldRequest>().ForMember(dest => dest.files, opt => opt.Ignore());
        }
    }
}
