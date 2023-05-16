import React from 'react'
import LoginButton from '../components/LoginButton'
import style from "../index.css"
// import "./landing.css"
function Landing() {
    return (
        <div className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  h-screen'>
            <div className='text-center text-white items-center justify-center pt-10'>
                <div className='text-6xl '>Communify.</div>
                <div className='text-3xl mt-2'>Gateway to community sharing.</div>
                <div className=''>
                    <p className='text-2xl mt-10'>Click to login or Signup</p>
                    <LoginButton />
                </div>

            </div>
        </div>

    )
}

export default Landing
