import React, {useState,useEffect} from 'react'
import axios from 'axios'

function NotionDbSideBar() {
  const [databaseList, setDatabaseList] = useState([])


  return (
    <div>
              <>
            <div className="w-[180px] h-[640px] m-3  bg-[#171717] text-white rounded-lg font-roboto">
                <button>clicky</button>
            </div>

        </>
    </div>
  )
}

export default NotionDbSideBar
