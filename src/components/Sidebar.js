/** @format */

import React,{useState,useEffect} from 'react';
import '../styles/sidebar.css';

import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';
import AddIcon from '@mui/icons-material/Add';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CallIcon from "@mui/icons-material/Call";
import MicIcon from '@mui/icons-material/Mic';
import Avatar from '@mui/material/Avatar';

import HeadsetIcon from "@mui/icons-material/Headset";
import SettingsIcon from "@mui/icons-material/Settings";
import SidebarChannel from './SidebarChannel'
import {selectUser} from '../features/userSlice'
import { useSelector } from 'react-redux';
import  { db, auth ,signOut} from '../lib/firebase';
import { addDoc, arrayUnion, collection, doc, onSnapshot, setDoc } from 'firebase/firestore';
const handleAddChannels =() =>{
  return null
}
function Sidebar() {
  const user = useSelector(selectUser)
  const [channels, setChannels] = useState([])

  useEffect(() => {

    const getChannels =() => {

      const q = collection(db, `channels`)
      
      onSnapshot(
        q,
        (docs) =>{
          const channelsdata = docs.docs.map((doc)=>({
            ...doc.data(),
            id : doc?.id
          }))
          setChannels(channelsdata)
        },
        (err) =>{
          console.log(err)
        }
        )
        
      }

      getChannels()
    
  
   
  }, [])
  console.log(user)

  const handleAddChannel = () => {
    const channelName = prompt("Enter a new channel name");

    if (channelName) {
      const docref = collection(db,"channels")
      addDoc(docref,{

        channelName: channelName,}
        
        )
     
     
    }
  };
  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <h3>{user.displayName}</h3>
        <ExpandMoreSharpIcon />
      </div>
      <div className='sidebar__channels'>
        <div className='sidebar__channelsHeader'>
          <div className='sidebar__header'>
            <ExpandMoreSharpIcon />
            <h4>Text Channels</h4>
          </div>
            <AddIcon onClick={() => handleAddChannel()} className='sidebar__addChannel'/>
        </div>
        <div className="sidebar__channelList">

          {
            
            channels.map((channel ) => (
              <SidebarChannel
                key={channel?.id}
                id={channel?.id}
                channelName={channel?.channelName }
              />
            ))}
          

        </div>
      </div>

      <div className="sidebar__voice">
      <SignalCellularAltIcon
          className="sidebar__voiceIcon"
          fontSize="large"
        /> <div className="sidebar__voiceInfo">
        <h3>Voice Connected</h3>
        <p>Stream</p>
      </div>

      <div className="sidebar__voiceIcons">
        <InfoOutlinedIcon />
        <CallIcon />
      </div>
    </div>

    <div className="sidebar__profile">
    <Avatar onClick ={()=> signOut(auth)} src={user.photo} />
      <div className="sidebar__profileInfo">
          <h3>{user.displayName}</h3>
        <p>#{user.uid.substring(0, 5)}</p>
      </div>

      <div className="sidebar__profileIcons">
        <MicIcon />
        <HeadsetIcon />
        <SettingsIcon />
      </div>
      </div>
    </div>
  );
}

export default Sidebar;
