import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { response } from 'express';

function NotionDbSideBar() {
  const [databaseList, setDatabaseList] = useState([])
  const  callAPI = async ()=>
  {
    const res = await axios.get('http://localhost:5000/NotionPagesAndDatabases');
    return res;
  }

  return (
    <div>
              <>
            <div className="w-[180px] h-[640px] m-3  bg-[#171717] text-white rounded-lg font-roboto">

            </div>

        </>
    </div>
  )
}

export default NotionDbSideBar
