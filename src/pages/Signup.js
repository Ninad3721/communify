import { TextField, InputAdornment, Icon, } from "@mui/material";
import Button from '@mui/material/Button';
import { useState } from 'react'
import axios from 'axios'
import { IconButton } from '@mui/material';
import technologist from '../images/apple_technologist.png';

function Signup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handelSubmit = () => {
        axios.post("http://localhost:5000/Signup",
            {
                email: email,
                password: password,

            })
    }
    return (
        <>
            <div className="relative rounded-xl bg-white w-full h-[882px] overflow-hidden text-left text-5xl text-black font-inter">
                <TextField
                    className="[border:none] bg-[transparent] absolute top-[342px] left-[373px]"
                    sx={{ width: 310 }}
                    color="primary"
                    variant="filled"
                    type="text"
                    name="Email"
                    label="Email"
                    placeholder="Email"
                    size="medium"
                    margin="none"
                    onChange={(event) => { setEmail(event.target.value) }}
                />
                <TextField
                    className="[border:none] bg-[transparent] absolute top-[446px] left-[373px]"
                    sx={{ width: 310 }}
                    color="primary"
                    variant="filled"
                    type="text"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton aria-label="toggle password visibility">
                                    <Icon>visibility</Icon>
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    name="Password"
                    label="Set Password"
                    placeholder="Set Password"
                    size="medium"
                    margin="none"
                    onChange={(event) => { setPassword(event.target.value) }}
                />
                <div className="absolute top-[302px] left-[410px] font-light inline-block w-[318px] h-7">
                    Email
                </div>
                <img
                    className="absolute top-[303px] left-[380px] w-[30px] h-[29px] object-cover"
                    alt="mail box"
                    src="/image-14@2x.png"
                />
                <h4 className="m-0 absolute top-[405px] left-[415px]" />
                <img
                    className="absolute top-[405px] left-[380px] w-[30px] h-[30px] object-cover"
                    alt="Key"
                    src="/image-13@2x.png"
                />
                <a href="/" className="[text-decoration:none] absolute top-[529px] left-[436px] font-light text-[inherit] inline-block w-[265px] h-[51px]">
                    Already have an account !!!!!!
                </a>
                <h2 className="m-0 absolute top-[204px] left-[380px] text-[48px] font-normal font-motley-forces text-mediumspringgreen inline-block w-[341px] h-[73px] mix-blend-multiply">
                    Communify
                </h2>
                <img
                    className="absolute top-[209px] left-[625px] w-9 h-[41px]"
                    src="https://em-content.zobj.net/thumbs/120/apple/354/technologist-medium-skin-tone_1f9d1-1f3fd-200d-1f4bb.png"
                />
                <img
                    className="absolute top-[0px] left-[0px] w-[1224px] h-[938px] object-cover opacity-[0.1]"
                    alt="background"
                    src="https://em-content.zobj.net/thumbs/120/apple/354/technologist-medium-skin-tone_1f9d1-1f3fd-200d-1f4bb.png"
                />
                <Button variant="contained" onClick={handelSubmit()}>Submit</Button>
            </div>
        </>
    )
}

export default Signup;