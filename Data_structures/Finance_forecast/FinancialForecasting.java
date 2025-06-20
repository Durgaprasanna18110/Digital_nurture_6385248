public class FinancialForecasting {

    public static double forecastValue(double presentValue, double growthRate, int years) {
        if (years == 0) return presentValue;
        return forecastValue(presentValue, growthRate, years - 1) * (1 + growthRate);
    }

    public static double forecastValueIterative(double presentValue, double growthRate, int years) {
        double futureValue = presentValue;
        for (int i = 0; i < years; i++) {
            futureValue *= (1 + growthRate);
        }
        return futureValue;
    }

    public static void main(String[] args) {
        System.out.println("== Financial Forecasting Using Recursion ==");

        double presentValue = 10000.0;
        double growthRate = 0.08;
        int years = 5;

        double futureValueRecursive = forecastValue(presentValue, growthRate, years);
        System.out.println("Future value (recursive): ₹" + futureValueRecursive);

        double futureValueIterative = forecastValueIterative(presentValue, growthRate, years);
        System.out.println("Future value (iterative): ₹" + futureValueIterative);

        System.out.println("\nTime Complexity:");
        System.out.println("- Recursive: O(n), but not optimized for large n due to call stack.");
        System.out.println("- Iterative: O(n), more efficient and avoids stack overhead.");
    }
}
