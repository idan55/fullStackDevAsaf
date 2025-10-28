require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;

const studentRouter = require("./api/Student/StudentRouter.js");
app.use("/api/students/", studentRouter);

const schoolRouter = require("./api/School/SchoolRouter.js");
app.use("/api/schools/", schoolRouter);

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
  console.log("Server runs on port: " + port);
});
