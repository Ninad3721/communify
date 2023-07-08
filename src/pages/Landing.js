import Button from '@mui/material/Button';
import { useState } from 'react'
import axios from 'axios'
import TextField from '@mui/material/TextField';
import technologist from '../images/apple_technologist.png';
import postbox from "../images/apple_postbox.png"
import oldkey from "../images/apple-old-key.png"
import Alert from '@mui/material/Alert';
import { redirect } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import background from "../images/login-background.png"

const Landing = () => {
    const [resultMessage, setResultMessage] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [alertType, setAlertType] = useState("")
    const handelSubmit = () => {
        axios.post("http://localhost:5000/",
            {
                email: email,
                password: password,

            }).then((response) => {
                console.log(response.data)
                if (response.data.Result) {
                    setResultMessage(response.data.Result)
                    setAlertType("success")
                    // redirect("http://localhost:5000/Home")
                    axios.get("http://localhost:5000/Home")
                    // window.location.href = "/Home";
                }
                else {
                    setResultMessage(response.data.Error)
                    setAlertType("error")
                }
            }).catch((error) => {
                console.log(error)
            })
    }
    return (
        <>
            {
                <Alert severity={alertType}>{resultMessage}</Alert>
            }
            <div className="absolute left-52 rounded-xl bg-white w-[1024px] h-[720px] overflow-hidden text-left text-5xl text-black font-inter" >
                <TextField
                    className="[border:none] bg-[transparent] absolute top-[342px] left-[373px]"
                    sx={{ width: 310 }}
                    color="primary"
                    variant="filled"
                    type="text"
                    name="Email"
                    placeholder="gavinbelson@hooli.com"
                    size="medium"
                    margin="none"
                    onChange={(event) => { setEmail(event.target.value) }}
                />
                <TextField
                    className="[border:none] bg-[transparent] absolute top-[460px] left-[60px]"
                    sx={{ width: 310 }}
                    color="primary"
                    variant="filled"
                    type="password"
                    name="Password"
                    label="Password"
                    placeholder="Password"
                    size="medium"
                    margin="none"
                    onChange={(event) => { setPassword(event.target.value) }}
                />
                <div className="absolute top-[302px] left-[410px] font-light inline-block w-[318px] h-7 text-xl" >
                    Email
                </div>
                <img
                    className="absolute top-[303px] left-[380px] w-[30px] h-[29px] object-cover"
                    alt="mail box"
                    src={postbox}
                />
                <h4 className="m-0 absolute top-[405px] left-[415px]" />
                <div className="absolute top-[415px] left-[410px] font-light inline-block w-[318px] h-7 text-xl" >
                    Password
                </div>
                <img
                    className="absolute top-[405px] left-[380px] w-[30px] h-[30px] object-cover"
                    src={oldkey}
                />
                <a href="/Signup" className="[text-decoration:none] absolute top-[600px] left-[460px] font-light text-[inherit] inline-block w-[265px] h-[51px] text-xl text-blue-600 underline">
                    or Sign Up !!!!!!
                </a>
                <h2 className="m-0 absolute top-[204px] left-[380px] text-[48px] font-normal font-motley-forces text-mediumspringgreen inline-block w-[341px] h-[73px] mix-blend-multiply " style={{
                    fontFamily: "Motley Forces", color: "#00D88E"
                }}>
                    Communify
                </h2>
                <img
                    className="absolute top-[209px] left-[625px] w-9 h-[41px] object-cover"
                    src={technologist}
                />

                <Button sx={{ width: 310 }} className="absolute top-[529px] left-[-250px] text-blue underline bg-green-500" variant="contained" onClick={handelSubmit}>Submit</Button>
            </div >

        </>
    );
};

export default Landing;
