const mongoose = require("mongoose");
const vacationSchema = new mongoose.Schema({
  destination: {
    type: String,
    required: [true, "Enter destination name"],
    lowercase: true,
    trim: true,
    unique: [true, "Destination already exists in DB"],
  },
  description: {
    type: String,
    required: [true, "Enter description"],
    lowercase: true,
    trim: true,
  },
  startDate: {
    type: Date,
    required: [true, "Enter starting date"],
  },
  endDate: {
    type: Date,
    required: [true, "Enter ending date"],
  },
  price: {
    type: Number,
    required: [true, "Enter price"],
    trim: true,
  },
  imageUrl: {
    type: String,
    required: [true, "Enter url to store a pic"],
    lowercase: true,
    trim: true,
  },
  isAllInclusive: {
    type: Boolean,
    required: [true, "Enter if it's all inclusive or not"],
  },
  rating:{
    type: Number,
    required: [true, "Enter rating on 5"],
    trim: true,
  },
});

module.exports = mongoose.model("Vacation", vacationSchema)