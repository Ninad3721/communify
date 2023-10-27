import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { useAuth0 } from "@auth0/auth0-react";

function NotionDbSideBar({user}) {
  const [databaseList, setDatabaseList] = useState([])

  return (

              <>
            <div className="w-[180px] h-[680px] m-3  bg-[#171717] text-white rounded-lg font-roboto">
            <div className="flex">
                    <img
                        className="relative top-8  left-4 rounded-[50px] w-[68px] h-[68px] object-cover"
                        alt="Avatar"
                        loading="lazy"
                        src={user.picture}
                    />
                    {/* <div>
                        <a className=" relative top-9 left-6 text-xl font-bold text-[inherit] inline-block w-[109px] h-6 [text-decoration:none]">
                            <p className="m-0">Nint#123</p>
                            <p className="m-0"></p>
                        </a>
                        <p className="relative top-8 left-6 text-[13px] font-light inline-block w-[119px] h-[21px]">
                            {user.name}
                        </p>
                    </div> */}
       
                    </div>
                </div>
            

        </>
   
  )
}

export default NotionDbSideBar
