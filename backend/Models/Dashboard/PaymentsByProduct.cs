namespace OmniPlanner_API.Models.Dashboard
{
    public class PaymentsByProduct // query response
    {
        public string product_name { get; set; }
        public string site_code_or_region_name { get; set; }
        public string customer_name { get; set; }
        public decimal avg_price { get; set; }
        public decimal customer_frequency_percentage { get; set; }
    }
    public class CustomisePaymentsByProducts
    {
        // Generates key prefixes: a, b, c, ..., z, aa, ab, ..., ba, bb, ...
        public static string GetPrefix(int index)
        {
            var prefix = string.Empty;
            do
            {
                prefix = (char)('a' + (index % 26)) + prefix;
                index = (index / 26) - 1;
            } while (index >= 0);

            return prefix;
        }

        //public static IEnumerable<Dictionary<string, object>> GenerateCustomisePaymentsByProductData(IEnumerable<PaymentsByProduct> data)
        //{
        //    return data
        //        .GroupBy(x => x.product_id)
        //        .Select(group =>
        //        {
        //            var productData = new Dictionary<string, object>();
        //            int siteIndex = 0;

        //            foreach (var item in group)
        //            {
        //                string prefix = GetPrefix(siteIndex++); // ax, bx, cx, ..., aax, abx, ...

        //                productData[$"{prefix}x"] = item.product_id;
        //                productData[$"{prefix}y"] = item.site_id;
        //                productData[$"{prefix}a"] = item.customer_name;
        //                productData[$"{prefix}b"] = item.avg_price;
        //                productData[$"{prefix}c"] = item.percentage;
        //            }

        //            return productData;
        //        });
        //}
    }
}
