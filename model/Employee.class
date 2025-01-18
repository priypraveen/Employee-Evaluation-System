import java.util.ArrayList;
import java.util.Scanner;

// Employee Class
class Employee {
    private String id;
    private String name;
    private int performanceScore;
    private int attendanceScore;
    private int teamworkScore;
    private double overallScore;
    private String rating;

    public Employee(String id, String name) {
        this.id = id;
        this.name = name;
    }

    public void evaluate(int performance, int attendance, int teamwork) {
        this.performanceScore = performance;
        this.attendanceScore = attendance;
        this.teamworkScore = teamwork;
        calculateOverallScore();
    }

    private void calculateOverallScore() {
        this.overallScore = (performanceScore * 0.5) + (attendanceScore * 0.3) + (teamworkScore * 0.2);
        assignRating();
    }

    private void assignRating() {
        if (overallScore >= 90) {
            rating = "Excellent";
        } else if (overallScore >= 75) {
            rating = "Good";
        } else if (overallScore >= 60) {
            rating = "Average";
        } else {
            rating = "Needs Improvement";
        }
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public double getOverallScore() {
        return overallScore;
    }

    public String getRating() {
        return rating;
    }

    @Override
    public String toString() {
        return "ID: " + id + ", Name: " + name + ", Overall Score: " + overallScore + ", Rating: " + rating;
    }
}
