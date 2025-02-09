const http = require("http");
const fs = require("fs").promises;

const FILE_PATH = "students.json";
const PORT = 3000;

const getStudentsFromFile = async () => {
    try {
        const data = await fs.readFile(FILE_PATH, "utf-8");
        return data ? JSON.parse(data) : [];
    } catch (err) {
        return [];
    }
};

const writeStudentsToFile = async (students) => {
    try {
        await fs.writeFile(FILE_PATH, JSON.stringify(students, null, 2));
        return true;
    } catch (err) {
        return false;
    }
};

const server = http.createServer(async (req, res) => {
    res.setHeader("Content-Type", "application/json");

    const url = req.url;
    const method = req.method;
    let students = await getStudentsFromFile();

    // Get all students
    if (method === "GET" && url === "/getStudents") {
        return res.end(JSON.stringify({
            message: "Data successfully fetched",
            data: students
        }));
    }

    // Create a new student
    if (method === "POST" && url === "/createStudent") {
        let body = "";
        req.on("data", (chunk) => (body += chunk.toString()));
        req.on("end", async () => {
            try {
                const newStudent = JSON.parse(body);
                newStudent.id = students.length ? students[students.length - 1].id + 1 : 1;
                students.push(newStudent);
                await writeStudentsToFile(students);
                res.end(JSON.stringify({ message: "Student successfully created", data:students}));
            } catch (err) {
                res.end(JSON.stringify({ message: "Invalid JSON format" }));
            }
        });
        return;
    }

    // Update a student
    if (method === "PUT" && url === "/updateStudent") {
        let body = "";
        req.on("data", (chunk) => (body += chunk.toString()));
        req.on("end", async () => {
            try {
                const data = JSON.parse(body);
                let index = students.findIndex((student) => student.rollno === data.rollno);
                if (index === -1) {
                    return res.end(JSON.stringify({ message: "Student not found" }));
                }
                students[index] = { ...students[index], ...data };
                await writeStudentsToFile(students);
                res.end(JSON.stringify({ message: "Student successfully updated", data:students}));
            } catch (err) {
                res.end(JSON.stringify({ message: "Invalid JSON format"}));
            }
        });
        return;
    }

    // Delete a student
    if (method === "DELETE" && url === "/deleteStudent") {
        let body = "";
        req.on("data", (chunk) => (body += chunk.toString()));
        req.on("end", async () => {
            try {
                const data = JSON.parse(body);
                let index = students.findIndex((student) => student.rollno === data.rollno);
                if (index === -1) {
                    return res.end(JSON.stringify({ message: "Student not found" }));
                }
                students.splice(index, 1);
                await writeStudentsToFile(students);
                res.end(JSON.stringify({ message: "Student successfully deleted", data:students}));
            } catch (err) {
                res.end(JSON.stringify({ message: "Invalid JSON format" }));
            }
        });
        return;
    }
});

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
