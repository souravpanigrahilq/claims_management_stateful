require("dotenv").config();

const mongoose = require("mongoose");

const connect = async () => {
  try {
    console.log("MongoDB URI:", process.env.MONGO_URI); // Debugging statement

    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connect;
