const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "Every user needs a first name"],
      lowercase: true,
      trim: true,
    },
    lastname: {
      type: String,
      required: [true, "Every user needs a last name"],
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Every user needs an email address"],
      unique: [true, "Email already exists in db"],
      lowercase: true,
      trim: true,
      validate: [validator.isEmail, "Please enter valid e-mail"],
    },
    password: {
      type: String,
      required: [true, "Every user needs a password"],
      trim: true,
    },
    birthday: {
      type: Date,
      required: [true, "Every user needs a birthday"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema, "vacation_users");
