const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please enter a first name"],
      trim: true,
      lowercase: true,
    },
    lastName: {
      type: String,
      required: [true, "Please enter a last name"],
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: [true, "Please enter an email address"],
      unique: [true, "email already exists in DataBase"],
      trim: true,
      lowercase: true,
      validate: [validator.isEmail, "please enter a valid email address"],
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      trim: true,
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

module.exports = mongoose.model("User", UserSchema, "song_user");
