const mongoose = require("mongoose");

const SongSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Enter a title"],
    unique: [true, "Song already exists in DataBase"],
    trim: true,
    lowercase: true,
  },
  artist: {
    type: String,
    required: [true, "Enter an artist name"],
    trim: true,
    lowercase: true,
  },
  album: {
    type: String,
    required: [true, "Enter an album name"],
    trim: true,
    lowercase: true,
  },
  year: {
    type: Number,
    required: [true, "Enter a release year"],
  },
  genre: {
    type: String,
    required: [true, "Enter a genre"],
    trim: true,
    lowercase: true,
  },
  rating: {
    type: Number,
    required: [true, "Enter rating as a number from 1 - 5"],
    min: [1, "Minimum rating is 1"],
    max: [5, "Maximum rating is 5"],
  },
});

module.exports = mongoose.model("Song", SongSchema);
