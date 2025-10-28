const Student = require("./StudentModel");
const School = require("../School/SchoolModel");

exports.createStudent = async function (req, res) {
  try {
    const { school } = req.body;

    const student = await Student.create(req.body);
    await School.findByIdAndUpdate(school, {
      $push: { students: student._id },
    });
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getStudents = async function (req, res) {
  try {
    const students = await Student.find().populate({
      path: "school",
    });
    if (students.length == 0) {
      return res.status(404).json({ message: "No students found" });
    }
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getStudentById = async function (req, res) {
  try {
    const id = req.params.id;
    // if (!Types.ObjectId.isValid(id)) {
    //   return res.status(404).json({ message: "Id invalid" });
    // }
    const student = await Student.findById(id).populate({
      path: "school",
    });
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateStudent = async function (req, res) {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(404).json({ message: "No student found by this id" });
    }
    const student = await Student.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
      //   overwrite: true,
    });
    res.json({ message: "student updated successfully!", student });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.delete = async function (req, res) {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(404).json({ message: "Incorrect id" });
    }
    const student = await Student.findByIdAndDelete(id);
    await School.findByIdAndUpdate(student.school, {
      $pull: { students: student._id },
    });
    res.json({ message: "Student deleted succesfully", student });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
