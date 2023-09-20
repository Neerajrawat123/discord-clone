import React from 'react'
import '../styles/message.css'
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';


function Message() {
  return (
    <div className='message'>
        <AccountCircleSharpIcon />
        <div className="message__info">
            <h4>ssssafdf
                <span className='message__timestamp'>timestamop</span>
            </h4>
        <p>this is message</p>
        </div>

    </div>
  )
}

export default Message