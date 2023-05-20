const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },

    dob:
    {
        type: Date,
        required: true,
    }
})

const userModel = mongoose.model("user_detail", userSchema)

module.exports = userModel