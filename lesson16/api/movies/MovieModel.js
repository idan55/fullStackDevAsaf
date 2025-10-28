const mongoose = require("mongoose");
const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: [true, "Every movie needs a title"],
    trim: true,
  },
  director: {
    type: String,
    required: [true, "Every movie needs a title"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "every movie has a price"],
  },
  isShowing: {
    type: Boolean,
    required: [true, "every movie is or showing or not showing"],
  },
});

module.exports = mongoose.model('Movie', MovieSchema)
