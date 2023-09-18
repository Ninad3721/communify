import { useAuth0 } from '@auth0/auth0-react'
import React,{useEffect} from 'react'
import UnAuthorized from './UnAuthorized';
import HomeSkeleton from '../components/Skeletons/pages/HomeSkeleton'
import DialogBox from '../components/DialogBox';
import { useState } from 'react';
import NotionDbSideBar from '../components/NotionDbSideBar';
function NotionNotes() {
  const {isAuthenticated, loginWithRedirect, isLoading} = useAuth0();
  const [showDialog , setShowDialog] = useState(false);
  // loginWithRedirect()
  console.log(isAuthenticated)
  useEffect(()=>
  {
    setShowDialog(true)
  })
  if (isLoading) {
    return <div><HomeSkeleton /></div>;
}

  return (
  
    isAuthenticated ?  
    <div className='flex  bg-[#20232b] h-[100%]'>
      <NotionDbSideBar/>      
    </div>
    : <UnAuthorized/>
  
   
  )
}

export default NotionNotes
