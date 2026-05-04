// This file is responsible for:
// Reading mongoDB connection String
// Connect to MongoDb using mongoose
// Handle success/ error 
// Export connection Function


const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Database Connection failed: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB