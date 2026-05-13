// This file is responsible for:
// Reading MongoDB connection string
// Connecting to MongoDB using mongoose
// Handling success/errors
// Exporting connection function

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Database Connection failed: ${error.message}`);

    process.exit(1);
  }
};

export default connectDB;