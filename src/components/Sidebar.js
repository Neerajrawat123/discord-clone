/** @format */

import React from 'react';
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
import { auth ,signOut} from '../lib/firebase';
const handleAddChannels =() =>{
  return null
}
function Sidebar() {
  const user = useSelector(selectUser)
  console.log(user)
  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <h3>{user.name}</h3>
        <ExpandMoreSharpIcon />
      </div>
      <div className='sidebar__channels'>
        <div className='sidebar__channelsHeader'>
          <div className='sidebar__header'>
            <ExpandMoreSharpIcon />
            <h4>Text Channels</h4>
          </div>
            <AddIcon onclick={handleAddChannels()} className='sidebar__addChannel'/>
        </div>
        <div className="sidebar__channelList">
          <SidebarChannel channelName={"neeraj"} id={55}/>
          <SidebarChannel channelName={"neeraj3"} id={55}/>
          <SidebarChannel channelName={"neeraj23"} id={55}/>

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
