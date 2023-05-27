import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios'
import HomeSkeleton from '../components/Skeletons/pages/HomeSkeleton'

function Home() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get("http://localhost:5000/Home").then((response) => {
            console.log(response.data)
            // setLoading(false)
        }).catch((error) => {
            console.log(error)
        })
    }, [])
    return (
        <>
            {loading ? <HomeSkeleton /> : <p>Not Loading</p>}
        </>


        // isAuthorized ? () : ()

    )
}

export default Home
