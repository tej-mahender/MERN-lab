const express = require("express");
const Student = require("./Student");
const router = express.Router();

// Create a new student
router.post("/", async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    console.log("Student created:", student);
    res.status(201).send(student);
  } catch (err) {
    console.error(err);
    res.status(400).send(err);
  }
});

// Read all students
router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    console.log("Students retrieved:", students);
    res.status(200).send(students);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

// Read particular student
router.get("/:roll", async (req, res) => {
  try {
    const student = await Student.findOne({ roll: req.params.roll }, req.body, { new: true });
    if (!student) return res.status(404).send({ message: "Student not found" });
    console.log("Student retrieved:", student);
    res.status(200).send(student);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

// Update a student
router.put("/:roll", async (req, res) => {
  try {
    const student = await Student.findOneAndUpdate({ roll: req.params.roll }, req.body, { new: true });
    if (!student) return res.status(404).send({ message: "Student not found" });
    
    console.log("Student updated:", student);
    res.status(200).send(student);
  } catch (err) {
    console.error(err);
    res.status(400).send(err);
  }
});


// Delete a student
router.delete("/:roll", async (req, res) => {
  try {
    const student = await Student.findOneAndDelete({ roll: req.params.roll });
    if (!student) return res.status(404).send({ message: "Student not found" });
    
    console.log(`Student with Roll ${req.params.roll} deleted`);
    res.status(200).send({ message: "Student deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

module.exports = router;
