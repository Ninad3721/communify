import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useState } from 'react';
import { Input } from '@mui/icons-material';
import { TextField } from '@mui/material';
import axios from 'axios';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PageIdDialogBox({pageIdBox, user}) {
  const [open, setOpen] = useState({pageIdBox});
  const [pageId, setPageId] = useState('')
    const handleSubmit= async ()=>
    {
        setPageId(pageId)
        try {
            const res = await axios.post("http://localhost:5000/saveNotionPageId", {
                _id : user._id,
                pageId : pageId,
                email: user.email
            })
            console.log(res)
        } catch (error) {
            
        }
    }
  const handleClose = () => {                  
    setOpen(false);
  };
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Page Id Connect"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Enter your page Id from Notion app to connect it to communify
          </DialogContentText>
          <TextField id="outlined-basic" variant="outlined" onChange={(e)=>{setPageId(e.target.value)}}  />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}