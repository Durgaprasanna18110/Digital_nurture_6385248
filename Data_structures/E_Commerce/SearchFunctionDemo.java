import java.util.Arrays;
import java.util.Comparator;

public class SearchFunctionDemo {

    static class Product {
        int productId;
        String productName;
        String category;

        public Product(int productId, String productName, String category) {
            this.productId = productId;
            this.productName = productName;
            this.category = category;
        }

        public String toString() {
            return productId + " - " + productName + " (" + category + ")";
        }
    }

    public static Product linearSearch(Product[] products, String targetName) {
        for (Product product : products) {
            if (product.productName.equalsIgnoreCase(targetName)) {
                return product;
            }
        }
        return null;
    }

    public static Product binarySearch(Product[] products, String targetName) {

        Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));

        int left = 0, right = products.length - 1;

        while (left <= right) {
            int mid = (left + right) / 2;
            int cmp = targetName.compareToIgnoreCase(products[mid].productName);
            if (cmp == 0) return products[mid];
            else if (cmp < 0) right = mid - 1;
            else left = mid + 1;
        }
        return null;
    }

    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Shampoo", "Personal Care"),
            new Product(103, "Chair", "Furniture"),
            new Product(104, "Mobile", "Electronics"),
            new Product(105, "Table", "Furniture")
        };

        String searchName = "Mobile";

        System.out.println("Searching for: " + searchName);

        Product linearResult = linearSearch(products, searchName);
        System.out.println("Linear Search Result: " + (linearResult != null ? linearResult : "Product not found"));

        Product binaryResult = binarySearch(products, searchName);
        System.out.println("Binary Search Result: " + (binaryResult != null ? binaryResult : "Product not found"));
    }
}
