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
        trim: true,
        default: null
    },
    // avatar:
    // {
    //     data: Buffer,
    //     contentType: String,

    // },
    jwt:
    {
        type: String,
        required: true,
    },
    dob:
    {
        type: Date,
        default: null

    },
    firstName:
    {
        type: String,
        default: null
    },
    lastName:
    {
        type: String,
        default: null
    },
    age:
    {
        type: Number,
        default: null
    },

})

export default mongoose.model("user_detail", userSchema);

