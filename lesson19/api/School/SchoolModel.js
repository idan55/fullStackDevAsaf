const mongoose = require("mongoose");
const schoolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Every school needs a name"],
    lowercase: true,
    unique: [true, "Duplicate"],
    trim: true,
  },
  address: {
    type: String,
    required: [true, "Every school needs an address"],
    unique: [true, "Duplicate"],
    lowercase: true,
    trim: true,
  },
  phone: {
    type: String,
    required: [true, "Every school needs a phone number"],
    unique: [true, "Duplicate"],
    trim: true,
  },
  principal: {
    type: String,
    required: [true, "Every school needs a principle"],
    trim: true,
  },
  foundedYear: {
    type: Number,
    trim: true,
  },
  students: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Student",
    },
  ],
});

module.exports = mongoose.model("School", schoolSchema);
