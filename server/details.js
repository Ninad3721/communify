const express = require("express")
const app = express()
const port = 5000
const mongoose = require('mongoose')
const cors = require('cors')
const userModel = require("./model/user_detail")
const bodyParser = require('body-parser')
const multer = require('multer')


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


app.post("/details", cors(), (req, res) => {
    res.send("Success")
    var User = new userModel()
    console.log(req.body)
    User.avatar.data = req.file.filename,
        User.avatar.contentType = 'image/png',
        User.username = req.body.user,
        User.dob = req.body.dob,
        User.save().then(() => { console.log("Success") }).catch((error) => {
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