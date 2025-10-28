const mongoose = require("mongoose");
const express = require("express");
const MovieModel = require("./MovieModel");
const app = express();
app.use(express.json());
const uri =
  "mongodb+srv://david:Aa123456@cluster0.eaoiqha.mongodb.net/movies?retryWrites=true&w=majority&appName=Cluster0";
const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};
async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    //     Ensures that the client will close when you finish/error
    //     await mongoose.disconnect();
  }
}
run().catch(console.dir);

app.get("/movies", async function (req, res) {
  try {
    const movies = await MovieModel.find();
    if (movies.length === 0) {
      return res.status(404).json({ message: "No movies found" });
    }
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/movies/:id", async (req, res) => {
  try {
    const movie = await MovieModel.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: "No movie found" });
    }
    res.json(movie);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/movies", async function (req, res) {
  try {
    const movie = await MovieModel.create(req.body);
    res.json({ message: "movie added succesfully!", movie });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put("/movies/:id", async (req, res) => {
  try {
    const movie = await MovieModel.findByIdAndUpdate(
      { id: req.params.id },
      req.body,
      {
        new: true,
        runValidators: true,
        overwrite: true,
      }
    );
    if (!movie) {
      return res.status(404).json({ message: "Movie not found to update" });
    }
    res.json({ message: "Movie updated succesfully!", movie });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/movies/:id", async function (req, res) {
  try {
    const movie = MovieModel.findByIdAndDelete(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: "No movie found with that id" });
    }
    res.json({ message: "movie deleted successfully", movie });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/movies/price/above/:amount", async function (req, res) {
  try {
    const minPrice = parseFloat(req.params.id);
    const movies = await MovieModel.find({ price: { $gt: minPrice } });
    if (movies.length === 0) {
      return res.status(404).json({ message: "no movie found" });
    }
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/movies/price/below/:amount", async (req, res) => {
  try {
    const maxPrice = parseFloat(req.params.id);
    const movies = MovieModel.find({ price: { $lt: maxPrice } });
    if (movies.length === 0) {
      return res.status(404).json({ message: "movie not found" });
    }
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/movies/search/title/:title", async (req, res) => {
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
});

app.get("/movies/search/director/:director", async function (req, res) {
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
});

app.get("/movies/showing", async function (req, res) {
  try {
    const movies = await MovieModel.find({ isShowing: true });
    if (movies.length === 0) {
      return res.status(404).json({ message: "no movies found" });
    }
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/movies/showing", async function (req, res) {
  try {
    const movies = await MovieModel.countDocuments({ isShowing: true });
    const moviesNotShowing = await MovieModel.countDocuments({ isShowing: false });
    if (movies === 0 && moviesNotShowing === 0) {
      return res.status(404).json({ message: "no movies found" });
    }
    res.json({showing: movies,
      notShowing: moviesNotShowing
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const port = 3000;
app.listen(port, () => {
  console.log("Server is running on port: " + port);
});
