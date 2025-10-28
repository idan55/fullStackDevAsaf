const mongoose = require("mongoose");
const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "a book must have a title"],
    unique: [true, "2 books can't have the same name"],
    trim: true,
  },
  author: {
    type: String,
    required: [true, "a book must have a title"],
    trim: true,
  },
  year: {
    type: Number,
    required: [true, "a book must have a year of production"],
    min: [-3760, "A book can't be older than the beginning of time"],
    max: [2025, "Invalid date"],
  },
  availability: {
    type: Boolean,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Book", BookSchema);
