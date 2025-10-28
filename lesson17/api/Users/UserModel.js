const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please provide your first name"],
      lowercase: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Please provide your last name"],
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please provide your email address"],
      trim: true,
      lowercase: true,
      unique: [true, "email already exists in DataBase"],
      validate: [validator.isEmail, "please enter a valid email address"],
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
    },
    birthday: {
      type: Date,
      required: [true, "Please enter birthday"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema /*"users"*/);
