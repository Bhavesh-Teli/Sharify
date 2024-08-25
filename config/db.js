const mongoose = require('mongoose');

async function connectedDB() {
    try {
        // Hardcode connection string for debugging
        const MONGO_CONNECTION_URL = "mongodb+srv://Daakkii:daakkii@sharify.bpxai.mongodb.net/Sharify?retryWrites=true&w=majority&appName=Sharify";
        
        await mongoose.connect(MONGO_CONNECTION_URL);
        console.log("MongoDB connected successfully");
    } catch (err) {
        console.error("MongoDB connection error: ", err);
    }
}

module.exports = connectedDB;
