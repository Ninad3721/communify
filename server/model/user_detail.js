const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    // avatar:
    // {
    //     data: Buffer,
    //     contentType: String,

    // },
    dob:
    {
        type: Date,
        required: true,
    },
    firstName:
    {
        type: String,
        required: true,
        default: "Unknown"
    },
    lastName:
    {
        type: String,
        required: true,
        default: "Unknown"
    },
    age:
    {
        type: Number,
        required: true,
        default: 0
    },

})

const userModel = mongoose.model("user_detail", userSchema)

module.exports = userModel