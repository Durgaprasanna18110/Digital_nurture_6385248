public class Calculator {

    public int add(int a, int b) {
        return a + b;
    }

    public int multiply(int a, int b) {
        return a * b;
    }

    public static void main(String[] args) {
        Calculator calc = new Calculator();

        int sum = calc.add(5, 3);
        int product = calc.multiply(4, 6);

        System.out.println("Addition: 5 + 3 = " + sum);
        System.out.println("Multiplication: 4 * 6 = " + product);
    }
}
