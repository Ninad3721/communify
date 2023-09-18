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
// app.use(cors(
//     {
//         origin: "http://localhost:3000",
//     }
// ))

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

app.get("/Notion", async (req, res) => {
    console.log("hemlo")
    try {
        let userArray = [];
        const response = await axios("https://api.notion.com/v1/users",
        {
            headers:
            {
                Authorization : 'Bearer secret_JO1OkCvdwKMgFEgdXoIu91eiKnfNEqXnNgirTj5PMb6',
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


app.get('/NotionPagesAndDatabases' , async (req,res)=>
{
    let DatabaseArr = [];
    let PageArr = [];
    try{
        const res = await axios.post('https://api.notion.com/v1/search',
    {
        headers:
        {
            Authorization : 'Bearer secret_JO1OkCvdwKMgFEgdXoIu91eiKnfNEqXnNgirTj5PMb6',
            'Notion-Version' : '2022-06-28',
        }
    })
    console.log(res.data)
    res.data.results.map((obj)=>
    {
        if(obj.object ===  'page')
        {
            PageArr.push(obj)
        }
        else
        {
            DatabaseArr.push(obj)
        }
    })
    res.send(DatabaseArr,PageArr)
    res.status(200)
    } catch(error)
    {
        res.status(error)
        res.status(400)
    }
    


    
})

app.listen(port, () => {
    console.log("listening on port " + port)
})
