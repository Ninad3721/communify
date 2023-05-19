import React from 'react'
import TextField from '@mui/material/TextField';
import { FormControl, InputLabel, Input } from '@mui/material';
import Button from '@mui/material/Button';
import axios from 'axios';

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
        <div>
            <form>
                <TextField type="date" id='dob'>Date of  Birth</TextField>
                <FormControl>
                    <InputLabel htmlFor="my-input">Username</InputLabel>
                    <Input id="username" aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl>
                </FormControl>
                <Button variant="contained" color="success" onClick={handleSubmit}>
                    Success
                </Button>
            </form>

        </div>
    )
}

export default DetailForm
