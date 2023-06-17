import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,

    },
    password:
    {
        type: String,
        required: true,
        trim: true,
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        default: "Unkown"
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

export const userModel = mongoose.model("user_detail", userSchema)

