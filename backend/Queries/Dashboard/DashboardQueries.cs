namespace OmniPlanner_API.Queries.Dashboard
{
    public static class DashboardQueries
    {
        public static string GetDashboardData = @"
            SELECT 
                COUNT(*) as total_inventory,
                SUM(CASE WHEN is_active = true THEN 1 ELSE 0 END) as active_inventory,
                SUM(CASE WHEN is_deleted = true THEN 1 ELSE 0 END) as deleted_inventory
            FROM inventory_master";

        public static string GetSalesData = @"
            SELECT 
                DATE(sold_date) as sale_date,
                COUNT(*) as total_sales,
                SUM(total_amount) as total_revenue
            FROM inventory_sold 
            WHERE sold_date >= @startDate AND sold_date <= @endDate
            GROUP BY DATE(sold_date)
            ORDER BY sale_date";

        public static string GetTopProducts = @"
            SELECT 
                p.product_name,
                COUNT(is.inventory_sold_id) as sales_count,
                SUM(is.total_amount) as total_revenue
            FROM products p
            LEFT JOIN inventory_sold is ON p.product_id = is.inventory_id
            WHERE is.sold_date >= @startDate AND is.sold_date <= @endDate
            GROUP BY p.product_id, p.product_name
            ORDER BY sales_count DESC
            LIMIT @limit";

        public static string GetCustomerStats = @"
            SELECT 
                c.customer_name,
                COUNT(is.inventory_sold_id) as purchase_count,
                SUM(is.total_amount) as total_spent
            FROM customers c
            LEFT JOIN inventory_sold is ON c.customer_id = is.customer_id
            WHERE is.sold_date >= @startDate AND is.sold_date <= @endDate
            GROUP BY c.customer_id, c.customer_name
            ORDER BY total_spent DESC
            LIMIT @limit";

        public static string GetAvailableInventoriesByProduct = @"
            SELECT 
                p.product_name,
                COUNT(im.inventory_id) as available_count,
                SUM(im.quantity) as total_quantity
            FROM products p
            LEFT JOIN inventory_master im ON p.product_id = im.product_id
            WHERE im.is_active = true AND im.is_deleted = false
            GROUP BY p.product_id, p.product_name
            ORDER BY available_count DESC";

        public static string GetTotalAvailableInventories = @"
            SELECT COUNT(*) as total_available
            FROM inventory_master 
            WHERE is_active = true AND is_deleted = false";

        public static string GetCrushAndCoreSales = @"
            SELECT 
                SUM(total_amount) as total_sales,
                COUNT(*) as total_transactions
            FROM inventory_sold 
            WHERE sold_date >= @startDate AND sold_date <= @endDate";

        public static string GetDuePast45Days = @"
            SELECT 
                COUNT(*) as overdue_count,
                SUM(total_amount) as overdue_amount
            FROM inventory_sold 
            WHERE payment_status = 'Pending' 
            AND sold_date <= DATE_SUB(NOW(), INTERVAL 45 DAY)";

        public static string GetPaymentsByProductsBySites = @"
            SELECT 
                s.site_name,
                p.product_name,
                SUM(is.total_amount) as total_payments
            FROM inventory_sold is
            JOIN inventory_master im ON is.inventory_id = im.inventory_id
            JOIN products p ON im.product_id = p.product_id
            JOIN sites s ON im.site_id = s.site_id
            WHERE is.sold_date >= @startDate AND is.sold_date <= @endDate
            GROUP BY s.site_id, s.site_name, p.product_id, p.product_name
            ORDER BY total_payments DESC";

        public static string GetPaymentsByProductsByRegions = @"
            SELECT 
                r.region_name,
                p.product_name,
                SUM(is.total_amount) as total_payments
            FROM inventory_sold is
            JOIN inventory_master im ON is.inventory_id = im.inventory_id
            JOIN products p ON im.product_id = p.product_id
            JOIN sites s ON im.site_id = s.site_id
            JOIN regions r ON s.region_id = r.region_id
            WHERE is.sold_date >= @startDate AND is.sold_date <= @endDate
            GROUP BY r.region_id, r.region_name, p.product_id, p.product_name
            ORDER BY total_payments DESC";

        public static string GetProductsAverage = @"
            SELECT 
                p.product_name,
                AVG(is.total_amount) as average_sale_price,
                COUNT(*) as sale_count
            FROM inventory_sold is
            JOIN inventory_master im ON is.inventory_id = im.inventory_id
            JOIN products p ON im.product_id = p.product_id
            WHERE is.sold_date >= @startDate AND is.sold_date <= @endDate
            GROUP BY p.product_id, p.product_name
            ORDER BY average_sale_price DESC";

        public static string GetTodaySection = @"
            SELECT 
                COUNT(*) as today_sales_count,
                SUM(total_amount) as today_sales_amount,
                COUNT(DISTINCT customer_id) as today_customers
            FROM inventory_sold 
            WHERE DATE(sold_date) = CURDATE()";
    }
}
