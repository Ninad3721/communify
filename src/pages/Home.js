import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios'
import HomeSkeleton from '../components/Skeletons/pages/HomeSkeleton'
import Navbar2 from '../components/Navbar2'
import ChatModule from '../components/ChatModule'
import VideoChatModule from '../VideoChatModule'
import UnAuthorized from './UnAuthorized'
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
                <div className='flex' style={{ backgroundColor: "#20232B" }}>
                    <Navbar2 />
                    {/* <ChatModule /> */}
                    <div style={{ position: "absolute", left: "200px" }}></div>
                    <VideoChatModule />
                </div>
            ) : <UnAuthorized />
            }

        </>


        // isAuthorized ? () : ()

    )
}

export default Home
