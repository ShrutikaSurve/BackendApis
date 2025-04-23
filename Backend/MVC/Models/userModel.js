const mongoose = require("mongoose");
// Schema

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    mobile: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
},
{timestamps: true})

module.exports = mongoose.model("user",userSchema);