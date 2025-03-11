require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const studentRoutes = require("./studentsAPI");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

// Toggle between local and cloud MongoDB
const isLocal = process.argv.includes("--local");
const MONGO_URI = isLocal ? process.env.MONGO_LOCAL_URI : process.env.MONGO_CLOUD_URI;

// Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => console.log(`Connected to ${isLocal ? "Local" : "Cloud"} MongoDB`))
  .catch((err) => console.error(err));

app.use("/students", studentRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
