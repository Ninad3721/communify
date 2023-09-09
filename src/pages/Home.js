import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios'
import HomeSkeleton from '../components/Skeletons/pages/HomeSkeleton'
import Navbar2 from '../components/Navbar2'
import ChatModule from '../components/ChatModule'
import VideoChatModule from '../VideoChatModule'
import UnAuthorized from './UnAuthorized'
import VideoChatButton from '../components/VideoChatButton'
import NotionButton from '../components/NotionButton'
import AIModule from '../components/AIModule'
import VideoChatDialog from '../components/VideoChatDialog'
function Home() {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [videoChatModuleVisiblity, setVideoChatModuleVisiblity] = useState(false)
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [permitted, setPermitted] = useState(false)
    const [openDailogBox, setOpenDialogBox] = React.useState(false);
    const [redirectNotion, setRedirectNotion] = useState(false);
    useEffect(() => {
        axios.get("http://localhost:5000/Home").then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
        console.log(isAuthenticated)
    }, [])
    if (isLoading) {
        return <div><HomeSkeleton /></div>;
    }

    const handleVideoChatButton = () => {
        setVideoChatModuleVisiblity(true)
    }
    const handleClickOpen = () => {
        setOpenDialogBox(true);
    };

    const handleNotionClick = async () => {
        console.log("Hello")
        await axios.get("http://localhost:5000/Notion")
    }

    return (

        isAuthenticated && (
            <>

                <div className="flex bg-[#20232b] h-[100%]">
                    <div>
                        <Navbar2 />
                    </div>
                    <div>
                        <ChatModule />
                        {/* <VideoChatModule /> */}

                        <div className='flex'>
                            <VideoChatDialog />
                            {/* <button onClick={handleClickOpen}> <VideoChatButton openDailogBox={openDailogBox} /></button> */}
                            <a href="https://api.notion.com/v1/oauth/authorize?client_id=40f7e3f9-7501-4f6a-9846-f2c92e976113&response_type=code&owner=user&redirect_uri=https%3A%2F%2Flocalhost%3A3000%2FNotion"><NotionButton /></a>
                        </div>
                    </div>
                    <AIModule />

                </div>
            </>

        )


        // isAuthorized ? () : ()

    )
}

export default Home
