import '../styles/sidebar-Channel.css';


function SidebarChannel({id,channelName}) {
  return (
    <div className='sidebar__channel'>
        <h4>
            <span className='sidebarChannel__hash'>#</span>
            {channelName}
        </h4>
    </div>
  )
}

export default SidebarChannel