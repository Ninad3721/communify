import express from "express"
export const app = express()
const port = 5000
import mongoose from 'mongoose'
import cors from 'cors'
import { userModel } from "./model/user_detail.js"
import bodyParser from 'body-parser'
import multer from 'multer'
import User from "@auth0/auth0-react"
import http from "http"
import { error } from "console"

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
});
app.use(cors())


const connection_config = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
export const server = http.createServer(app);

const Storage = multer.diskStorage({
    destination: 'upload',
    filename: (req, file, cb) => {
        cb(null, Date.now + file.originalname)
    }
})

const upload = multer({
    storage: Storage,
}).single('testImage')

const db_url = "mongodb+srv://Ninad:4u2HGF9pHMhZJAQB@cluster0.tbblf5d.mongodb.net/?retryWrites=true&w=majority"

const connection = mongoose.connect(db_url, connection_config)

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB Atlas!');
});

app.post("/", (req, res) => {

})

app.post("/signup", (req, res) => {
    //Signup using email and password
    //If user is already present then dont add to db and giev warning

    var User = new userModel();
    try {
        User.email = req.body.email
        User.password = req.body.password
        console.log(req.body)
        console.log(req.body.password)
        User.save().then(() => {
            console.log("success email password")
        }).catch(error)
        {
            console.log(error)
        }
    } catch (error) {
        res.send(error)
        console.log(error)
    }
})
app.post("/details", cors(), (req, res) => {
    res.send("Success")
    var User = new userModel()
    console.log(req.body)
    // User.avatar.data = req.file.filename,
    //     User.avatar.contentType = 'image/png',
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

app.get("/Home", (req, res) => {
    res.send("Hello")
}
)
app.get("/details", (req, res) => {
    res.send("Hello")
})

app.listen(port, () => {
    console.log("listening on port " + port)
})