const mongoose = require("mongoose");
let express = require("express");
let app = express();
app.use(express.json());
const uri =
  "mongodb+srv://david:Aa123456@cluster0.eaoiqha.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};
const ProductModel = require("./ProductModel");
const PersonModel = require("./PersonModel");
const BookModel = require("./BookModel");
const MovieModel = require("../../lesson15/MovieModel");
async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    //await mongoose.disconnect();
  }
}

run().catch(console.dir);

app.post("/products", async function (req, res) {
  try {
    const product = new ProductModel({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      create: req.body.create,
    });
    const savedProduct = await product.save();
    res.json(savedProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.get("/products", async function (req, res) {
  try {
    let products = await ProductModel.find();
    if (products.length == 0) {
      return res.status(404).json({ message: "No products to display" });
    }
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/products/:id", async function (req, res) {
  try {
    let product = await ProductModel.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Products not found" });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/products/:title", async function (req, res) {
  try {
    let product = await ProductModel.deleteOne({ title: req.params.title });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put("/products/:id", async function (req, res) {
  try {
    let product = await ProductModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/persons", async (req, res) => {
  try {
    const persons = new PersonModel({
      firstName: req.body.firstName,
      familyName: req.body.familyName,
      city: req.body.city,
      country: req.body.country,
      salary: req.body.salary,
    });
    const savedPersons = await persons.save();
    res.json(savedPersons);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/persons", async function (req, res) {
  try {
    const person = await PersonModel.find();
    res.json(person);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/persons/:id", async (req, res) => {
  try {
    const person = await PersonModel.findById(req.params.id);
    if (!person) {
      return res.status(404).json({ message: "Person not found" });
    }
    res.json(person);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/persons/:id", async function (req, res) {
  try {
    const person = await PersonModel.findByIdAndDelete(req.params.id);
    if (!person) {
      return res.status(404).json({ message: "Person doesn't exist" });
    }
    res.json(person);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put("/persons/:id", async (req, res) => {
  try {
    const person = await PersonModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true, overwrite: true }
    );
    if (!person) return res.status(404).json({ message: "Person not found" });
    res.json(person);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.patch("/persons/:id", async function (req, res) {
  try {
    const person = await PersonModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      {
        new: true,
        runValidators: true,
        omitUndefined: true,
      }
    );
    if (!person) {
      return res.status(404).json({ message: "Person not found" });
    }
    res.json(person);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/books", async (req, res) => {
  try {
    const books = await BookModel.find();
    if (books.length == 0) {
      return res.status(404).json({ message: "No books found" });
    }
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/books/:id", async function (req, res) {
  try {
    const book = await BookModel.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/books", async function (req, res) {
  try {
    const savedBook = await BookModel.create(req.body);
    res.json(savedBook);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put("/books/:id", async function (req, res) {
  try {
    const book = await BookModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      overwrite: true,
    });
    if (!book) {
      return res.status(404).json({ message: "No book found to update" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/books/:id", async (req, res) => {
  try {
    const book = await BookModel.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "No book found to delete" });
    }
    res.json({ message: "book succesfully deleted", book });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/books/availability", async function (req, res) {
  try {
    const books = await BookModel.find({ availability: true });
    if (books.length === 0) {
      res.status(404).json({ message: "No books available" });
    }
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/books/year/:year", async function (req, res) {
  try {
    const year = Number(req.params.year);
    const books = await BookModel.find({ year: year });
    if (books.length === 0) {
      res.status(404).json({ message: "No books available" });
    }
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/books/count/available", async function (req, res) {
  try {
    const available = await BookModel.countDocuments({ availability: true });
    const unavailable = await BookModel.countDocuments({ availability: false });
    if (available + unavailable == 0) {
      res.status(404).json({ message: "No books are showing" });
    }
    res.json({ available, unavailable });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

let port = 3000;
app.listen(port, function () {
  console.log("Running on port " + port);
});
