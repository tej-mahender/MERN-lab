```javascript
// 1. Create a new database as "college"
use college;

// 2. Create students and faculty collections
db.createCollection("students");
db.createCollection("faculty");

// 3. Insert documents in students and faculty collections
db.students.insertMany([
  { _id: 1, name: "Alice", surname: "Johnson", marks: { math: 45, physics: 38, chemistry: 50 } },
  { _id: 2, name: "Bob", surname: "Smith", marks: { math: 28, physics: 30, chemistry: 25 } }
]);

db.faculty.insertMany([
  { _id: 1, name: "Dr. Miller", surname: "Anderson", department: "Physics" },
  { _id: 2, name: "Prof. Lee", surname: "Chang", department: "Mathematics" }
]);

// 4. Show collections data
db.students.find();
db.faculty.find();

// 5. Create indexes for documents
db.students.createIndex({ surname: 1 });
db.faculty.createIndex({ surname: 1 });

// 6. Count documents in a collection
db.students.countDocuments();
db.faculty.countDocuments();

// 7. Find first document in a collection
db.students.findOne();
db.faculty.findOne();

// 8. Find document by _id 
db.students.find({ _id: 2 });
db.faculty.find({ _id: 1 }).pretty();

// 9. Find student and faculty by surname 
db.students.find({ surname: "Smith" }).pretty();
db.faculty.find({ surname: "Chang" }).pretty();

// 10. Display top 10 documents in the collection
db.students.find().limit(10).pretty();
db.faculty.find().limit(10).pretty();

// 11. Students names who got less than 40 marks in different subjects
db.students.find({ 
  $or: [
    { "marks.math": { $lt: 40 } },
    { "marks.physics": { $lt: 40 } },
    { "marks.chemistry": { $lt: 40 } }
  ]
}).pretty();

// 12. Display names of students based on their marks

// 12.1 Sorted based on math marks in descending order
db.students.find({}, { name: 1, marks: 1 }).sort({ "marks.math": -1 }).pretty();

// 12.2 Sorted in descending order of total marks
db.students.aggregate([
  { $addFields: { totalMarks: { $sum: ["$marks.math", "$marks.physics", "$marks.chemistry"] } } },
  { $sort: { totalMarks: -1 } },
  { $project: { name: 1, totalMarks: 1, _id: 0 } }
]);

// 13. Update the name of a student
db.students.updateOne(
  { _id: 2 }, 
  { $set: { name: "Robert" } }
);

// 14. Delete students whose marks are less than 35 in any subject
db.students.deleteMany({
  $or: [
    { "marks.math": { $lt: 35 } },
    { "marks.physics": { $lt: 35 } },
    { "marks.chemistry": { $lt: 35 } }
  ]
});

// 15. Display the grades of students (Assuming grading logic)
db.students.aggregate([
  {
    $project: {
      name: 1,
      marks: 1,
      grade: {
        $cond: { if: { $gte: [ "$marks.math", 75 ] }, then: "A", else: "B" }
      }
    }
  }
]).pretty();

// 16. Drop the faculty collection
db.faculty.drop();

// 17. Drop the college database
db.dropDatabase();

// 18. Execute query selectors

// Comparison selectors
db.students.find({ "marks.math": { $gte: 50 } }).pretty();  

// Logical selectors
db.students.find({ 
  $and: [{ "marks.math": { $gte: 40 } }, { "marks.physics": { $gte: 40 } }] 
}).pretty();

// Element selectors (Finds students who have a chemistry marks field)
db.students.find({ "marks.chemistry": { $exists: true } }).pretty();
```
