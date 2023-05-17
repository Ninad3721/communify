import React from 'react'
import TextField from '@mui/material/TextField';
import { FormControl, InputLabel, Input } from '@mui/material';

function DetailForm() {
    return (
        <div>
            <TextField type="date">Date of  Birth</TextField>
            <FormControl>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
        </div>
    )
}

export default DetailForm
