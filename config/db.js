const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const mongoose = require("mongoose");

// Connecting to MongoDB Atlas
const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB Atlas...");

    const conn = await mongoose.connect(
      process.env.MONGO_URI
    );

    console.log(
      `MongoDB Connected: ${conn.connection.host}`
    );

  } catch (err) {
    console.error("FULL ERROR:");
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;