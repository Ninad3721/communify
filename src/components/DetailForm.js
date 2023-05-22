import React from 'react'
import TextField from '@mui/material/TextField';
import { FormControl, InputLabel, Input } from '@mui/material';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
        <div className='text-center bg-gradient-to-r from-blue-800 from-10% to-blue-500 to-90%  h-screen text-white'>
            <div className='text-center p-10 inline-grid gap-4'>
                <div className='text-6xl font-bold display: inline-grid'>Bit of details ....</div>
                <TextField type="date" id='dob'>Date of  Birth</TextField>
                <TextField id="username" className='p-10' label="Username" variant="outlined" />
                <Button variant="contained" className='m-10' color="success" onClick={handleSubmit}> Success</Button>
            </div>

        </div>



    )
}

export default DetailForm

//Align the components
//cchange the backgeound
//Add background