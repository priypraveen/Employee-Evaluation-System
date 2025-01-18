class EvaluationSystem {
    private ArrayList<Employee> employees;

    public EvaluationSystem() {
        employees = new ArrayList<>();
    }

    public void addEmployee(String id, String name) {
        employees.add(new Employee(id, name));
        System.out.println("Employee added successfully!");
    }

    public void evaluateEmployee(String id, int performance, int attendance, int teamwork) {
        for (Employee emp : employees) {
            if (emp.getId().equals(id)) {
                emp.evaluate(performance, attendance, teamwork);
                System.out.println("Employee evaluated successfully!");
                return;
            }
        }
        System.out.println("Employee not found.");
    }

    public void displayAllEmployees() {
        if (employees.isEmpty()) {
            System.out.println("No employees found.");
            return;
        }
        System.out.println("Employee Evaluations:");
        for (Employee emp : employees) {
            System.out.println(emp);
        }
    }

    public void displayEmployee(String id) {
        for (Employee emp : employees) {
            if (emp.getId().equals(id)) {
                System.out.println(emp);
                return;
            }
        }
        System.out.println("Employee not found.");
    }
}
