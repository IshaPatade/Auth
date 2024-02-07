const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config()

const app = express();

// Middleware
app.use(express.json()); // Body parser middleware

const userRoutes = require("./routes/user");

app.use("/api/user", userRoutes);

// Routes
app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

// Connect to MongoDB
mongoose
  .connect( process.env.MONGO_URI , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
