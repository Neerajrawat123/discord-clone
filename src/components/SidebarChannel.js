import React from 'react'

function SidebarChannel({id,channelName}) {
  return (
    <div className='sidebar__channel'>
        <h4>
            <span>#</span>
            {channelName}
        </h4>
    </div>
  )
}

export default SidebarChannel