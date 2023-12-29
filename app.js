const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Connection to MongoDB
mongoose.connect("mongodb+srv://fayiz1234:fayiz1234@mybyk.imawonn.mongodb.net/", {
  useNewUrlParser: true,
});



// Middleware to parse incoming request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // If you're sending JSON in the request body

// Routes
app.use(require("./routes/tudoRoutes"));

// Server configuration
app.listen(3000, () => console.log("Server started listening on port: 3000"));
