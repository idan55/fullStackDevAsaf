const Song = require("./SongModel");

exports.createSong = async function (req, res) {
  try {
    const song = await Song.create(req.body);
    res.json({ message: "New song added successfully", song });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    if (songs.length == 0) {
      return res.status(404).json({ message: "No songs found in DataBase" });
    }
    res.json(songs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getSongById = async (req, res) => {
  try {
    const id = (req.params.id || "").trim();
    if (!id) {
      return res.status(404).json({ error: "missing id" });
    }
    const song = await Song.findById(id);
    if (!song) {
      return res.status(404).json({ error: "No product found by this id" });
    }
    res.json({ song });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateSong = async function (req, res) {
  try {
    const id = (req.params.id || "").trim();
    if (!id) {
      return res.status(404).json({ error: "missing id" });
    }
    const song = await Song.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
      overwrite: true,
    });
    if (!song) {
      return res.status(404).json({ message: "No song found to update" });
    }
    res.json({ message: "Song updated!", song });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteSong = async function (req, res) {
  try {
    const id = (req.params.id || "").trim();
    if (!id) {
      return res.status(404).json({ error: "id is missing" });
    }
    const song = await Song.findByIdAndDelete(id);
    if (!song) {
      return res.status(404).json({ message: "Song not found" });
    }
    res.json(song);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.getSongByGenre = async function (req, res) {
  try {
    const songs = await Song.find({ genre: req.params.genre });
    if (songs.length == 0) {
      return res.status(404).json({ message: "no songs in this genre" });
    }
    res.json({songs});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTopSongs = async function (req, res) {
  try {
    const best = await Song.find().sort({ rating: -1 }).limit(5);
    res.json({ top_5_Songs: best });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
