import express from "express"
export const app = express()
const port = 5000
const JWTPASS = "nkjdnfohfhohdhwofjnffoh"
import mongoose from 'mongoose'
import cors from 'cors'
import userModel from "./model/user_detail.js"
import bodyParser from 'body-parser'
import multer from 'multer'
import http from "http"
import { error } from "console"
import jwt from "jsonwebtoken"
import 'dotenv/config'
import cookieParser from 'cookie-parser'
import session from 'express-session';
import passport from 'passport'
import flash from "express-flash"


app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
});
app.use(cors())
app.use(cookieParser())
app.use(flash())
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));
app.use(passport.initialize());
app.use(passport.session());


const connection_config = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const server = http.createServer(app);

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

app.post("/", async (req, res) => {

    try {
        const dbRow = await userModel.findOne({ email: req.body.email }).exec()
        if (!dbRow) {
            res.json({ Error: "User not found please enter correct email" })
            console.log("User not found")
            return;
        }
        if (req.body.password === dbRow.password) {
            res.json({ Result: "Correct password Logging in " })
            console.log("Yo")

        }
        else {
            res.json({ Error: "Incorrect Password " })
            console.log(dbRow.password + " " + req.body.password)
            console.log("User not found")
        }
    } catch (error) {
        console.log(error)
    }

})

app.post("/Signup", (req, res) => {
    //Signup using email and password
    //If user is already present then dont add to db and giev warning

    var User = new userModel();
    try {
        const token = jwt.sign(req.body.email, JWTPASS)
        User.email = req.body.email
        User.password = req.body.password
        User.jwt = token
        User.save().then(() => {
            res.status(200)
        }).catch(error)
        {
            console.log(error)

        }
    } catch (error) {
        console.log("Error message " + error.message)
    }
})
app.post("/details", cors(), (req, res) => {
    res.send("Success")
    var User = new userModel()
    console.log(req.body)
    // User.avatar.data = req.file.filename,
    // User.avatar.contentType = 'image/png',
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


app.get("/details", (req, res) => {
    res.send("Hello")
})

app.listen(port, () => {
    console.log("listening on port " + port)
})

export default server