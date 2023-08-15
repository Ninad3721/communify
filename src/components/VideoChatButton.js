import React from 'react'
import videoCamIcon from '../images/videoCam.png'
function VideoChatButton() {
    return (
        <div className='w-258px h-60px bg-white' >
            <div className='flex'>
                <img
                    style={{ width: "50px", height: "50px" }}
                    src={videoCamIcon}>
                </img>
                <div>
                    <p>Video Chat</p>
                </div>
            </div>
        </div>
    )
}

export default VideoChatButton
