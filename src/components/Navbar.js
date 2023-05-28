import React from 'react';
import Box from '@mui/material/Box';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';

function Navbar() {
    const [activeItem, setActiveItem] = useState("Home");
    return (
        <Box
            sx={{
                width: 224,
                height: 714,
                borderRadius: 8,
                margin: 1,
                backgroundColor: 'black',
                opacity: 0.8,
            }}
        >
            {/* Box content goes here */}
            <div>
                <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 56, height: 56 }}
                />
                <div>
                    <a>UserName</a>
                    <a>First Name-last Name</a>
                </div>
            </div>
            <a>Groups</a>
            <a>Private Chats</a>
            <a>Home</a>
            <a>Settings</a>
            <a></a>
        </Box>
    );
}

export default Navbar;