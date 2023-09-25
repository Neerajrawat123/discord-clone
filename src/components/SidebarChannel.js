import { useDispatch } from 'react-redux';
import '../styles/sidebar-Channel.css';
import { setChannelInfo } from '../features/appslice';


function SidebarChannel({id,channelName}) {
  console.log(channelName)
  const dispatch = useDispatch()
  return (
    <div className='sidebar__channel'
      onClick={() =>
        dispatch(
          setChannelInfo({
            channelId: id,
            channelName: channelName,
          })
        )
      }>
        <h4>
            <span className='sidebarChannel__hash'>#</span>
            {channelName}
        </h4>
    </div>
  )
}

export default SidebarChannel