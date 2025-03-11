const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  roll:String,
  section:Number,
  course: String
});

module.exports = mongoose.model("Student", studentSchema);
