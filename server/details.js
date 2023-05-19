const express = require("express")
const app = express()
const port = 5000
const mongoose = require('mongoose')
const cors = require('cors')
const schema = new mongoose.Schema;

app.use(express.urlencoded({ extended: true }));
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


const db_url = "mongodb+srv://Ninad:4u2HGF9pHMhZJAQB@cluster0.tbblf5d.mongodb.net/?retryWrites=true&w=majority"

const connection = mongoose.connect(db_url, connection_config).then(() => {
    console.log("Connection established")
}).catch((error) => {
    console.log(error)
})




const userSchema = new schema({
    username: String,
    dob: String
});

const User = mongoose.model('User', userSchema);





app.post("/details", cors(), (req, res) => {
    res.send("Success")
    res.status(200)
    const newUser = new User({ username: req.body.username, dob: req.body.dob });
    newUser.save(function (err) {
        if (err) return console.error(err);
        console.log('User saved to database!');
    });

})

app.get("/details", (req, res) => {
    res.send("Hello")
})

app.listen(port, () => {
    console.log("listening on port " + port)
})