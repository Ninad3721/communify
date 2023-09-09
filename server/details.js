import express from "express"
export const app = express()
import axios from "axios"
const port = 5000;
import mongoose from 'mongoose'
import cors from 'cors'
import userModel from "./model/user_detail.js"
import bodyParser from 'body-parser'
import 'dotenv/config'



app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
});
app.use(cors(
    {
        origin: "http://localhost:5000/Notion",
    }
))

const connection_config = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const db_url = "mongodb+srv://Ninad:4u2HGF9pHMhZJAQB@cluster0.tbblf5d.mongodb.net/?retryWrites=true&w=majority"

const connection = mongoose.connect(db_url, connection_config)

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB Atlas!');
});



app.post("/details", cors(), (req, res) => {
    res.send("Success")
    var User = new userModel()
    // User.avatar.data = req.file.filename,
    // User.avatar.contentType = 'image/png',
    User.email = req.body.email,
        User.username = req.body.username,
        User.firstName = req.body.firstname,
        User.lastName = req.body.lastname,
        User.age = req.body.age,
        User.dob = req.body.dob,
        User.save().then(() => {
            console.log("Success")

        }).catch((error) => {
            console.log(error)
        })
    res.status(200)
})

app.get("/Notion", async (req, res) => {
    console.log("hemlo")
    try {
        const response = await axios.getUri("https://api.notion.com/v1/oauth/authorize?client_id=40f7e3f9-7501-4f6a-9846-f2c92e976113&response_type=code&owner=user&redirect_uri=https%3A%2F%2Flocalhost%3A3000%2FNotion")

    } catch (error) {
        console.log(error)
    }
})
app.listen(port, () => {
    console.log("listening on port " + port)
})
