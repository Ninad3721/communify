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
function Home() {
    const { user, isAuthenticated, isLoading } = useAuth0();
    useEffect(() => {
        axios.get("http://localhost:5000/Home").then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }, [])
    if (isLoading) {
        return <div><HomeSkeleton /></div>;
    }
    return (
        <>

            {isAuthenticated ? (
                <>
                    <div className="flex bg-[#20232b] h-[100%]">
                        <div>
                            <Navbar2 />
                        </div>
                        <div>
                            <ChatModule />
                            <div className='flex'>
                                <VideoChatButton />
                                <NotionButton />
                            </div>
                        </div>
                        <AIModule />

                    </div>

                </>
            ) : <UnAuthorized />}

        </>


        // isAuthorized ? () : ()

    )
}

export default Home
