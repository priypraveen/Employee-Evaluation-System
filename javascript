const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/employee_eval", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Employee Schema
const EmployeeSchema = new mongoose.Schema({
  name: String,
  position: String,
  evaluations: [
    {
      date: { type: Date, default: Date.now },
      score: Number,
      comments: String,
    },
  ],
});

const Employee = mongoose.model("Employee", EmployeeSchema);

// Add Employee
app.post("/employees", async (req, res) => {
  const employee = new Employee(req.body);
  await employee.save();
  res.json(employee);
});

// Get All Employees
app.get("/employees", async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});

// Add Evaluation
app.post("/employees/:id/evaluate", async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  employee.evaluations.push(req.body);
  await employee.save();
  res.json(employee);
});

app.listen(3000, () => console.log("Server running on port 3000"));
