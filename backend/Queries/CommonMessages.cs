namespace OmniPlanner_API.Queries
{
    public static class CommonMessages
    {
        // For Successful response
        public const string GetSuccessfully = "Successful";
        public const string DeletedSuccessfully = "Deleted Successfully";
        public const string InventoryAdded = "Inventory Added Successfully";
        public const string InventoryUpdated = "Inventory Updated Successfully";
        public const string InventoryMovedSuccessfully = "Inventory Moved Successfully";

        public const string InventorySoldSuccessfully = "Inventory Marked As Sold Successfully";
        public const string SubProductUpdatedSuccessfully = "Sub Products Updated Successfully";
        public const string QuickSaleSuccessfully = "Quick Sale : Items Sold Successfully";

        public const string MarkAsPaidSuccessfully = "Marked Paid Successfully";
        public const string MarkAsVerifySuccessfully = "Verified Successfully";

        // For errors
        public const string DataNotFound = "Data Not Found";
        public const string ErrorGetMasterData = "Unable to fetch master data";
        public const string InvalidId = "Please Provide Valid ID";
        public const string UnableToCreate = "Unable to create the record";
        public const string UnableToDelete = "Unable to delete the record";
        public const string SameSiteInventoryMoveError = "Inventory can not be moved to same site";
        public const string NoSitePermission = "No site permissions found for the user";
        public const string isRequired = " is Required";
    }
}
