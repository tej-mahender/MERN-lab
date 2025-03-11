import React, { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [students, setStudents] = useState([]);
  const [addForm, setAddForm] = useState({ roll: "", name: "", age: "", course: "" });
  const [updateForm, setUpdateForm] = useState({ roll: "", name: "", age: "", course: "" });
  const [searchRoll, setSearchRoll] = useState("");
  const [deleteRoll, setDeleteRoll] = useState("");
  const [searchedStudent, setSearchedStudent] = useState(null);
  const [addMessage, setAddMessage] = useState("");
  const [searchMessage, setSearchMessage] = useState("");
  const [updateMessage, setUpdateMessage] = useState("");
  const [deleteMessage, setDeleteMessage] = useState("");

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/students");
      setStudents(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddChange = (e) => {
    setAddForm({ ...addForm, [e.target.name]: e.target.value });
  };

  const handleUpdateChange = (e) => {
    setUpdateForm({ ...updateForm, [e.target.name]: e.target.value });
  };

  const handleAddSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/students", addForm);
      setAddMessage("Student added successfully");
      fetchStudents();
      setAddForm({ roll: "", name: "", age: "", course: "" });
    } catch (err) {
      setAddMessage("Error adding student");
      console.error(err);
    }
  };

  const handleSearch = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/students/${searchRoll}`);
      if (res.data) {
        setSearchedStudent(res.data);
        setSearchMessage("");
      } else {
        setSearchedStudent(null);
        setSearchMessage("Student not found");
      }
    } catch (err) {
      setSearchedStudent(null);
      setSearchMessage("Student not found");
      console.error(err);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/students/${updateForm.roll}`, updateForm);
      setUpdateMessage("Student updated successfully");
      fetchStudents();
    } catch (err) {
      setUpdateMessage("Error updating student");
      console.error(err);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/students/${deleteRoll}`);
      setDeleteMessage("Student deleted successfully");
      fetchStudents();
    } catch (err) {
      setDeleteMessage("Error deleting student");
      console.error(err);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Student Management</h1>
      
      {/* Add Student */}
      <div className="p-4 border rounded">
        <h2 className="text-lg font-bold">Add Student</h2>
        {addMessage && <p className="text-green-600">{addMessage}</p>}
        <form onSubmit={handleAddSubmit} className="space-y-2">
          <input name="roll" value={addForm.roll} onChange={handleAddChange} placeholder="Roll" className="p-2 border w-full" required />
          <input name="name" value={addForm.name} onChange={handleAddChange} placeholder="Name" className="p-2 border w-full" required />
          <input name="age" value={addForm.age} onChange={handleAddChange} placeholder="Age" className="p-2 border w-full" required />
          <input name="course" value={addForm.course} onChange={handleAddChange} placeholder="Course" className="p-2 border w-full" required />
          <button type="submit" className="p-2 bg-blue-500 text-white w-full">Add Student</button>
        </form>
      </div>

      {/* Search Student */}
      <div className="p-4 border rounded">
        <h2 className="text-lg font-bold mb-2">Search Student</h2>
        <input 
          value={searchRoll} 
          onChange={(e) => setSearchRoll(e.target.value)} 
          placeholder="Enter Roll No" 
          className="p-2 border w-full mb-2" 
        />
        <button onClick={handleSearch} className="p-2 bg-yellow-500 text-white w-full">
          Get Student
        </button>

        {/* Display Message */}
        {searchMessage && <p className="text-red-600 mt-2">{searchMessage}</p>}

        {/* Display Student Details */}
        {searchedStudent && (
          <div className="mt-4 p-4 border rounded shadow">
            <h3 className="text-md font-semibold">Student Details</h3>
            <table className="w-full mt-2 border-collapse border">
              <tbody>
                <tr>
                  <td className="border p-2 font-medium">Name:</td>
                  <td className="border p-2">{searchedStudent.name}</td>
                </tr>
                <tr>
                  <td className="border p-2 font-medium">Roll No:</td>
                  <td className="border p-2">{searchedStudent.roll}</td>
                </tr>
                <tr>
                  <td className="border p-2 font-medium">Course:</td>
                  <td className="border p-2">{searchedStudent.course}</td>
                </tr>
                <tr>
                  <td className="border p-2 font-medium">Age:</td>
                  <td className="border p-2">{searchedStudent.age}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Update Student */}
      <div className="p-4 border rounded">
        <h2 className="text-lg font-bold">Update Student</h2>
        {updateMessage && <p className="text-green-600">{updateMessage}</p>}
        <input name="roll" value={updateForm.roll} onChange={handleUpdateChange} placeholder="Roll" className="p-2 border w-full" required />
        <input name="name" value={updateForm.name} onChange={handleUpdateChange} placeholder="Name" className="p-2 border w-full" required />
        <input name="age" value={updateForm.age} onChange={handleUpdateChange} placeholder="Age" className="p-2 border w-full" required />
        <input name="course" value={updateForm.course} onChange={handleUpdateChange} placeholder="Course" className="p-2 border w-full" required />
        <button onClick={handleUpdate} className="p-2 bg-green-500 text-white w-full mt-2">Update Student</button>
      </div>

      {/* Delete Student */}
      <div className="p-4 border rounded">
        <h2 className="text-lg font-bold">Delete Student</h2>
        {deleteMessage && <p className="text-green-600">{deleteMessage}</p>}
        <input 
          value={deleteRoll} 
          onChange={(e) => setDeleteRoll(e.target.value)} 
          placeholder="Enter Roll No" 
          className="p-2 border w-full" 
        />
        <button onClick={handleDelete} className="p-2 bg-red-500 text-white w-full mt-2">Delete Student</button>
      </div>
    </div>
  );
}
