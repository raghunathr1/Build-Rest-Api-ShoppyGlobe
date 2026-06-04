// Importing Files and packages
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const userRoutes = require("./routes/userRoutes");
const app = express();

// Database Connection
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);

// Authentication Routes
app.use("/", userRoutes);

// Server
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});