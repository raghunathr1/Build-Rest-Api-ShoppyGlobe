const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);


const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB Atlas...");

    const conn = await mongoose.connect(
      "mongodb+srv://raghunathkapase2004_db_user:Raghu123@cluster0.z6h61pz.mongodb.net/shoppyglobe?retryWrites=true&w=majority"
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("FULL ERROR:");
    console.error(err);
  }
};

module.exports = connectDB;