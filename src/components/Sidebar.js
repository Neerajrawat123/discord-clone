/** @format */

import React from 'react';
import '../styles/sidebar.css';

import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';
import AddIcon from '@mui/icons-material/Add';
const handleAddChannels =() =>{
  return null
}
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <h3>neeraj rawat</h3>
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
          <SidebarChannel />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
