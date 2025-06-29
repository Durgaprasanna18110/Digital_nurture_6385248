package com.example;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class App {

    @Test
    public void testAssertions() {
        assertEquals(5, 2 + 3);
        assertTrue(5 > 3);
        assertFalse(5 < 3);
        assertNull(null);
        assertNotNull(new Object());
    }

    public static void main(String[] args) {
        App app = new App();
        try {
            app.testAssertions();
            app.testAdditionalAssertions();
            System.out.println("All assertions passed.");
        } catch (AssertionError e) {
            System.err.println("Test failed: " + e.getMessage());
        }
    }

    @Test
    public void testAdditionalAssertions() {
        assertEquals("hello", "he" + "llo");
        assertFalse("abc".isEmpty());
        assertNotNull(new String("test"));
        assertNull(null);
    }
}
