const express = require('express');
const fs = require('fs').promises;

const app = express();
const PORT = 3000;

const FILE_PATH = 'employees.json';

// Middleware to parse JSON bodies
app.use(express.json());

const getEmployeesFromFile = async () => {
    try {
        const data = await fs.readFile(FILE_PATH, "utf-8");
        return data ? JSON.parse(data) : [];
    } catch (err) {
        return [];
    }
};

const writeEmployeesToFile = async (employees) => {
    try {
        await fs.writeFile(FILE_PATH, JSON.stringify(employees, null, 2));
        return true;
    } catch (err) {
        return false;
    }
};

// Route to get all employees (GET)
app.get('/getEmployees',async (req, res) => {
    const employees = await getEmployeesFromFile();
    res.json({
        message:"Employees fetched successfully",
        data:employees
    });
});

// Get an employee by ID
app.get("/getEmployee/:id", async (req, res) => {
    const employees = await getEmployeesFromFile();
    const id = parseInt(req.params.id);
    const employee = employees.find(emp => emp.id === id);
    if (!employee) {
        return res.json({ message: "Employee not found" });
    }

    res.json({ message: "Employee found", data: employee });
});

//  Create a new employee
app.post("/createEmployee", async (req, res) => {
    const employees = await getEmployeesFromFile();
    const newEmployee = req.body;
    newEmployee.id = employees.length ? employees[employees.length - 1].id + 1 : 1;
    employees.push(newEmployee);
    await writeEmployeesToFile(employees);

    res.json({ message: "Employee added successfully", data: newEmployee });
});

// Update an employee
app.put("/updateEmployee/:id", async (req, res) => {
    const employees = await getEmployeesFromFile();
    const id = parseInt(req.params.id);
    const index = employees.findIndex(emp => emp.id === id);

    if (index === -1) {
        return res.json({ message: "Employee not found" });
    }

    employees[index] = { ...employees[index], ...req.body };
    await writeEmployeesToFile(employees);

    res.json({ message: "Employee updated successfully", data: employees[index] });
});

// Delete an employee
app.delete("/deleteEmployee/:id", async (req, res) => {
    const employees = await getEmployeesFromFile();
    const id = parseInt(req.params.id);
    const index = employees.findIndex(emp => emp.id === id);

    if (index === -1) {
        return res.json({ message: "Employee not found" });
    }

    employees.splice(index, 1);
    await writeEmployeesToFile(employees);

    res.json({ message: "Employee deleted successfully" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});