// require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());


const movieRouter = require("./api/movies/moviesRouter");
app.use("/api/movies", movieRouter);

const userRouter = require("./api/users/UserRouter");
app.use("/api/users", userRouter);

const uri =
  "mongodb+srv://idan:Aa123456@cluster0.tihjpom.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
    // Ensures that the client will close when you finish/error
    // await mongoose.disconnect();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log("Server is running on port: " + port);
});
