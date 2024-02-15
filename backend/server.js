require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import the cors middleware
const detailsRoutes = require("./routes/details");

// express app
const app = express();

// middleware
app.use(cors()); // Use cors middleware to enable CORS
app.use(express.json());

app.use((req, res, next) => {
  // console.log(req.path, req.method);
  next();
});

// routes
app.use("https://threads24.onrender.com/threads", detailsRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Connected to db & listening on port 4000!!!");
    });
  })
  .catch((error) => {
    console.log(error);
  });
