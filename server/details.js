import express from "express"
export const app = express()
import axios from "axios"
const port = 5000;
import mongoose from 'mongoose'
import cors from 'cors'
import userModel from "./model/user_detail.js"
import bodyParser from 'body-parser'
import ngrok from 'ngrok'
import 'dotenv/config'



app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
});
app.use(cors(
    {
        origin: "http://localhost:3000",
    }   
))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    // Other CORS headers and settings as needed
    next();
  });   

const connection_config = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

// function async ngorkTunnel() {

// }


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

app.post("/Home" , async (req,res)=>
{
    const userEmail = req.body.email
    const response = await userModel.find({email : userEmail })
    console.log(response)
    // if()
    // {
    //     const User = new userModel()
    //     User.email = userEmail
    //     User.save().then(()=>
    //     {
    //         res.status(200)

    //     }).catch((error)=>
    //     {
    //         res.send(error)
    //         res.status(400)
    //     })
    // }
})
app.get("/Notion", async (req, res) => {
    console.log("hemlo")
    try {
        let userArray = [];
        const response = await axios("https://api.notion.com/v1/users",
        {
            headers:
            {
                Authorization : 'Bearer secret_w4femp7hkXOmfmxkWwBHfXPx14lc71ZKatGycd1sCJg',
                'Notion-Version' : '2022-06-28',
            }
        })
        response.data.results.map((obj)=>
        {{
            if(obj.type === "person")
            {
                const usersInworkspace = {
                    id : obj.id,
                    name : obj.name,
                    email: obj.person.email,
                    image_url : obj.avatar_url,
                }
                userArray.push(usersInworkspace)
            }
        }})
        res.send(userArray);
        res.status(200)
        
    } catch (error) {
        console.log(error)
    }
})



app.post("/fetchPageInfo" , async  (req,res)=>
{
    var User = new userModel()
    const userEmail = req.body.email
    const pageIdArray = await User.find({email: userEmail})
    console.log(pageIdArray)
    const response = await axios.get("https://api.notion.com/v1/pages/79d0ad742581420cb2f9b6348a5716d7", 
    {
        headers:
        {
            Authorization : 'Bearer secret_w4femp7hkXOmfmxkWwBHfXPx14lc71ZKatGycd1sCJg',
            'Notion-Version' : '2022-06-28',
        }
    })
    //  console.log(response.data)
})

app.listen(port, () => {
    console.log("listening on port " + port)
})
