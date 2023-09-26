import React from 'react'
import '../styles/message.css'
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';


function Message({message,user,timestamp}) {
  console.log(timestamp)
  return (
    <div className='message'>
        <AccountCircleSharpIcon />
        <div className="message__info">
            <h4>{user.displayName}
                <span className='message__timestamp'>{new Date(timestamp?.toDate()).toUTCString()}</span>
            </h4>
        <p>{message}</p>
        </div>

    </div>
  )
}

export default Message