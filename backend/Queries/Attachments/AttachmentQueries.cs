namespace OmniPlanner_API.Queries.Attachments
{
    public class AttachmentQueries
    {
        //public const string GetAll = @"SELECT
        //                                c.*,
        //                                CONCAT(u1.first_name, ' ', u1.last_name) AS created_by_name,
        //                                CONCAT(u2.first_name, ' ', u2.last_name) AS last_modified_by_name
        //                                FROM customer_master c
        //                                LEFT JOIN users u1 ON c.created_by = u1.id
        //                                LEFT JOIN users u2 ON c.last_modified_by = u2.id
        //                                WHERE c.is_deleted = false";

        public const string GetById = @"SELECT i.*,
                                        CONCAT(u1.first_name, ' ', u1.last_name) AS created_by_name,
                                        CONCAT(u2.first_name, ' ', u2.last_name) AS last_modified_by_name
                                        FROM inventory_attachments i
                                        LEFT JOIN users u1 ON i.created_by = u1.id
                                        LEFT JOIN users u2 ON i.last_modified_by = u2.id
                                        WHERE i.id = @id AND is_deleted = false";

        public const string GetByInventoryId = @"SELECT i.*,
                                        CONCAT(u1.first_name, ' ', u1.last_name) AS created_by_name,
                                        CONCAT(u2.first_name, ' ', u2.last_name) AS last_modified_by_name
                                        FROM inventory_attachments i 
                                        LEFT JOIN users u1 ON i.created_by = u1.id
                                        LEFT JOIN users u2 ON i.last_modified_by = u2.id
                                        WHERE i.inventory_id = @id AND is_deleted = false";

        public const string Insert = @"INSERT INTO inventory_attachments 
            (inventory_id, file_name, attachment_path, created_by, created_on, last_modified_by, last_modified_on, is_deleted)
            VALUES (@inventory_id, @file_name, @attachment_path, @created_by, NOW(), @created_by, NOW(), false) RETURNING id;";

        public const string Delete = @"DELETE FROM inventory_attachments WHERE id = @id";
        public const string SoftDelete =  @"UPDATE inventory_attachments SET is_deleted = true WHERE id = @id";
        public const string DeleteByInventoryId = @"DELETE FROM inventory_attachments WHERE inventory_id = @id";
    }
}
