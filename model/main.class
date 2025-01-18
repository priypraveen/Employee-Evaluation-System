// Main Class
public class EmployeeEvaluationSystem {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        EvaluationSystem system = new EvaluationSystem();

        while (true) {
            System.out.println("\n--- Employee Evaluation System ---");
            System.out.println("1. Add Employee");
            System.out.println("2. Evaluate Employee");
            System.out.println("3. Display All Employees");
            System.out.println("4. Display Employee by ID");
            System.out.println("5. Exit");
            System.out.print("Enter your choice: ");
            int choice = scanner.nextInt();
            scanner.nextLine(); // Consume newline

            switch (choice) {
                case 1:
                    System.out.print("Enter Employee ID: ");
                    String id = scanner.nextLine();
                    System.out.print("Enter Employee Name: ");
                    String name = scanner.nextLine();
                    system.addEmployee(id, name);
                    break;

                case 2:
                    System.out.print("Enter Employee ID: ");
                    String evalId = scanner.nextLine();
                    System.out.print("Enter Performance Score (0-100): ");
                    int performance = scanner.nextInt();
                    System.out.print("Enter Attendance Score (0-100): ");
                    int attendance = scanner.nextInt();
                    System.out.print("Enter Teamwork Score (0-100): ");
                    int teamwork = scanner.nextInt();
                    system.evaluateEmployee(evalId, performance, attendance, teamwork);
                    break;

                case 3:
                    system.displayAllEmployees();
                    break;

                case 4:
                    System.out.print("Enter Employee ID: ");
                    String searchId = scanner.nextLine();
                    system.displayEmployee(searchId);
                    break;

                case 5:
                    System.out.println("Exiting the system. Goodbye!");
                    scanner.close();
                    return;

                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        }
    }
}
