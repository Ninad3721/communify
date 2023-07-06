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
import cookie from 'cookie'

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
});
app.use(cors())
app.use(cookieParser())


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

const auth = async (req, res, next) => {
    console.log(req.cookies)
    if (!req.cookies.jwt) {
        res.json({ Error: "No authorization header found" })
        res.status(401)
        return;
    }
    jwt.verify(req.cookie.jwt, JWTPASS, (err, user) => {
        if (err) {
            res.json({ Error: "No Token found" })
            res.status(401)
            return;
        }
        console.log(user)

    })

    // const authHeaders = req.headers.authorization;
    // jwt.verify(authHeaders, JWTPASS, (err, user) => {
    //     if (err) {
    //         res.json({ Error: "Unauthorized token" })
    //         console.log("Unauthorized token")
    //         return;
    //     }
    //     console.log(user)
    //     console.log("Hola")
    // })
    // console.log("Success")
    next()
}

app.post("/", async (req, res) => {

    try {
        // var User = new userModel();
        // User.email = req.body.email;
        const dbRow = await userModel.findOne({ email: req.body.email }).exec()
        if (!dbRow) {
            res.json({ Error: "User not found please enter correct email" })
            console.log("User not found")
            return;
        }
        if (req.body.password === dbRow.password) {
            // res.set('Authorization', 'Bearer ' + dbRow.jwt);
            cookie.serialize("jwt", dbRow.jwt)
            res.cookie('jwt', dbRow.jwt, { path: "/" })
            //  res.cookie('jwt', "abcd")
            res.json({ Result: "Correct password Logging in " })
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

app.get("/Home", auth, (req, res) => {

}
)
app.get("/details", (req, res) => {
    res.send("Hello")
})

app.listen(port, () => {
    console.log("listening on port " + port)
})