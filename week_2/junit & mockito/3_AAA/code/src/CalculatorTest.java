import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class CalculatorTest {

    private Calculator calculator;

    @BeforeEach
    public void setUp() {
        calculator = new Calculator();
        System.out.println("🔧 Setup complete");
    }
    @AfterEach
    public void tearDown() {
        System.out.println("🧹 Cleanup done");
    }
    @Test
    public void testAddition() {
        int a = 2;
        int b = 3;

        int result = calculator.add(a, b);
        assertEquals(5, result, "2 + 3 should equal 5");
    }

    @Test
    public void testMultiplication() {
        int a = 4;
        int b = 5;
        int result = calculator.multiply(a, b);
        assertEquals(20, result, "4 * 5 should equal 20");
    }
}
