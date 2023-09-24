import React, {useState,useEffect} from 'react'
import axios from 'axios'

function NotionDbSideBar() {
  const [databaseList, setDatabaseList] = useState([])
  const callAPI = async ()=>
  {
    console.log("he")
    try {
      const res = await axios.post("https://api.notion.com/v1/search",
      {
          headers:
          {
              Authorization : 'Bearer secret_JO1OkCvdwKMgFEgdXoIu91eiKnfNEqXnNgirTj5PMb6',
              'Notion-Version' : '2022-06-28',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin' : 'True'
          } 
      }
      )
      console.log(res)
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div>
              <>
            <div className="w-[180px] h-[640px] m-3  bg-[#171717] text-white rounded-lg font-roboto">
                <button onClick={callAPI}>clicky</button>
            </div>

        </>
    </div>
  )
}

export default NotionDbSideBar
