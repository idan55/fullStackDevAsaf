const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Every student needs a first name"],
    lowercase: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, "Every student needs a last name"],
    lowercase: true,
    trim: true,
  },
  age: {
    type: Number,
    required: [true, "Every student needs an age"],
    min: 0,
    max: 120,
  },
  grade: {
    type: String,
    required: [true, "Every student needs to be in a grade"],
    lowercase: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Every student needs to have an email"],
    lowercase: true,
    trim: true,
    validate: [validator.isEmail, "Please enter a valid email address"],
  },
  school: {
    type: mongoose.Schema.ObjectId,
    ref: "School",
    required: [true, "Student must be connected to a school"],
  },
});

module.exports = mongoose.model("Student", studentSchema);
