import React from 'react';
import Box from '@mui/material/Box';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { PeopleCommunity } from "@styled-icons/fluentui-system-filled/PeopleCommunity"
import { ChatMultiple } from "@styled-icons/fluentui-system-filled/ChatMultiple"
import { Home } from "@styled-icons/entypo/Home"
import { Settings } from '@styled-icons/fluentui-system-filled/Settings';

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
            <div className="text-center">
                <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 56, height: 56 }}
                />
                <div className="text-white text-center grid-rows-3">
                    <a>UserName</a>
                    <a>First Name-last Name</a>
                </div>
            </div>
            <div className="grid text-white text-center">
                <a><PeopleCommunity className="h-8" />Groups</a>
                <a><ChatMultiple className="h-8" />Private Chats</a>
                <a><Home className="h-8" />Home</a>
                <a><Settings className="h-8" />Settings</a>
            </div>

            <a></a>
        </Box>
    );
}

export default Navbar;