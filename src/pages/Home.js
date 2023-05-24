import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios'
import LoaderIcon from '../components/LoaderIcon'

function Home() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get("/Home").then((response) => {
            console.log(response.data)
            setLoading(false)
        })
    }, [])
    return (
        loading ? (<div>
            <Navbar></Navbar>
        </div>) : (<LoaderIcon />)
        // isAuthorized ? () : ()

    )
}

export default Home
