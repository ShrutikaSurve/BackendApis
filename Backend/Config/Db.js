const mongoose = require("mongoose");
const connectDb = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("connection establish successfully");
    } catch (error) {
        console.log("Error in DB connection");
    }
}

module.exports = connectDb;