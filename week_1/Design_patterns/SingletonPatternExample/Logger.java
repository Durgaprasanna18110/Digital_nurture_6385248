public class Logger {
    private static Logger instance;

    private Logger() {
        System.out.println("Logger instance created");
    }

    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();  // Corrected from "new logger();"
        }
        return instance;
    }

    public void log(String message) {
        System.out.println("Log message: " + message);
    }

    public static void main(String[] args) {
        Logger log1 = Logger.getInstance();
        log1.log("This is the first log message");

        Logger log2 = Logger.getInstance();
        log2.log("This is the second log message");

        System.out.println("log1 == log2? " + (log1 == log2)); // Should print true
    }
}
