namespace OmniPlanner_API.ViewModels
{
    public class SearchDataByPaging
    {
        public int PageSize { get; set; }
        public string SearchKeyword { get; set; }
        public int PageNumber { get; set; }
        public bool isManuallyCreatedLabel { get; set; }
    }
}
