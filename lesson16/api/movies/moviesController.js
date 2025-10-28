const escapeRegex = require("./moviesUtils");
const MovieModel = require("./MovieModel");

exports.get = async function (req, res) {
  try {
    const movies = await MovieModel.find();
    if (movies.length === 0) {
      return res.status(404).json({ message: "No movies found" });
    }
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMovieById = async (req, res) => {
  try {
    const movie = await MovieModel.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: "No movie found" });
    }
    res.json(movie);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.post = async function (req, res) {
  try {
    const movie = await MovieModel.create(req.body);
    res.json({ message: "movie added succesfully!", movie });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.put = async (req, res) => {
  try {
    const movie = await MovieModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      overwrite: true,
    });
    if (!movie) {
      return res.status(404).json({ message: "Movie not found to update" });
    }
    res.json({ message: "Movie updated succesfully!", movie });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.delete = async function (req, res) {
  try {
    const movie = await MovieModel.findByIdAndDelete(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: "No movie found with that id" });
    }
    res.json({ message: "movie deleted successfully", movie });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMoviesAboveAmount = async function (req, res) {
  try {
    const minPrice = parseFloat(req.params.amount);
    const movies = await MovieModel.find({ price: { $gt: minPrice } });
    if (movies.length === 0) {
      return res.status(404).json({ message: "no movie found" });
    }
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMoviesBelowAmount = async (req, res) => {
  try {
    const maxPrice = parseFloat(req.params.amount);
    const movies = await MovieModel.find({ price: { $lt: maxPrice } });
    if (movies.length === 0) {
      return res.status(404).json({ message: "movie not found" });
    }
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMoviesByTitle = async (req, res) => {
  try {
    const title = req.params.title;
    if (!title) {
      return res.status(400).json({ message: "missing search term " });
    }
    const movies = await MovieModel.find({
      title: { $regex: escapeRegex(title), $options: "i" },
    });
    if (movies.length === 0) {
      return res.status(404).json({ message: "no movies found" });
    }

    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMoviesByDirector = async function (req, res) {
  try {
    const director = req.params.director;
    if (!director) {
      return res.status(400).json({ message: "missing search term " });
    }
    const movies = await MovieModel.find({
      director: { $regex: escapeRegex(director), $options: "i" },
    });
    if (movies.length === 0) {
      return res.status(404).json({ message: "no movies found" });
    }
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMoviesShowing = async function (req, res) {
  try {
    const movies = await MovieModel.find({ isShowing: true });
    if (movies.length === 0) {
      return res.status(404).json({ message: "no movies found" });
    }
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMoviesCountcShowing = async function (req, res) {
  try {
    const movies = await MovieModel.countDocuments({ isShowing: true });
    const moviesNotShowing = await MovieModel.countDocuments({
      isShowing: false,
    });
    if (movies === 0 && moviesNotShowing === 0) {
      return res.status(404).json({ message: "no movies found" });
    }
    res.json({ showing: movies, notShowing: moviesNotShowing });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
