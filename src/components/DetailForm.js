import React from 'react'
import TextField from '@mui/material/TextField';
import { FormControl, InputLabel, Input } from '@mui/material';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./DetailForm.css"

function DetailForm() {

    const handleSubmit = async () => {
        try {
            await axios.post('http://localhost:5000/details', {
                dob: document.getElementById('dob').value,
                user: document.getElementById('username').value
            })
        } catch (error) {
            console.log(error)
        }


    }
    return (
        <div className="relative rounded-[20px] bg-white w-full h-[882px] overflow-hidden text-left text-17xl text-black font-inter">
            <div className="absolute top-[897px] left-[402px] rounded-[14px] bg-gainsboro w-[961px] h-[86px]" />
            <div className="absolute top-[784px] left-[1283px] rounded-[50%] bg-gainsboro w-[100px] h-[100px]" />
            <div className="absolute top-[37px] left-[456px] rounded-[50%] bg-gainsboro w-[165px] h-[164px]" />
            <div className="absolute top-[283px] left-[476px] rounded-3xs bg-gainsboro box-border w-[398px] h-[74px] border-[2px] border-solid border-white" />
            <div className="absolute top-[416px] left-[476px] rounded-3xs bg-gainsboro w-[398px] h-[74px]" />
            <div className="absolute top-[563px] left-[476px] rounded-3xs bg-gainsboro w-[398px] h-[74px]" />
            <div className="absolute top-[710px] left-[586px] rounded-3xs bg-gainsboro w-72 h-[74px]" />
            <div className="absolute top-[710px] left-[476px] rounded-3xs bg-gainsboro w-[92px] h-[74px]" />
            <div className="absolute top-[224px] left-[476px] font-light inline-block w-[409px] h-9">
                Username
            </div>
            <div className="absolute top-[364px] left-[476px] font-light inline-block w-[409px] h-9">{`First Name `}</div>
            <div className="absolute top-[508px] left-[476px] font-light inline-block w-[409px] h-9">
                Last Name
            </div>
            <div className="absolute top-[652px] left-[476px] font-light inline-block w-[92px] h-9">
                Age
            </div>
            <div className="absolute top-[656px] left-[586px] font-light inline-block w-[285px] h-9">
                Date of Birth
            </div>
            <div className="absolute top-[80px] left-[639px] text-21xl font-extrabold inline-block w-[358px] h-28">
                <p className="m-0">GIVE YOURSELF</p>
                <p className="m-0">{` A FACE `}</p>
            </div>
            <img
                className="absolute top-[543px] left-[0px] w-[476px] h-[339px] object-cover"
                alt=""

                src="D:/communify/public/4401287.jpg"
            />
            <div className="absolute top-[312px] left-[192px] text-21xl font-extrabold inline-block w-80 h-[283px]">
                <p className="m-0">LO</p>
                <p className="m-0">GO</p>
            </div>
        </div>


    )
}

export default DetailForm

//Align the components
//cchange the backgeound
//Add background