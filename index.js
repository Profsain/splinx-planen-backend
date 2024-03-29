const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const eventRoutes = require("./routes/eventRoutes");

// dotenv config
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;


// Connect to MongoDB
mongoose
  .connect(MONGODB_URI)
    .then(() => {
        console.log("✔✨✨Connected to MongoDB");

        const app = express(); // Create Express app

      app.use(bodyParser.json()); // JSON body parser middleware
        app.use(cors()); // Enable CORS middleware
        // restrict requests
        // app.use(cors({
        //     origin: "https://example.com"
        // }));

        app.use("/auth", authRoutes); // Use auth routes
      app.use("/user", userRoutes); // Use user routes
      app.use("/event", eventRoutes); // Use event routes
      

        
        app.listen(PORT, () => {
            console.log(`👌✨Server running at http://localhost:${PORT}`);
        });

        // export app
        module.exports = app;
  })
    .catch(err => console.log(err));
  



