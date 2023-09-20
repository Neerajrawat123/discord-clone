import React from 'react'
import '../styles/chat.css'
import ChatHeader from './ChatHeader'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifBoxIcon from '@mui/icons-material/GifBox';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Message from './Message';

function Chat() {
  return (
    <div className="chat">
      <ChatHeader />
      <div className="chat__messages">
        <Message />

      </div>
      <div className="chat__input">
        <AddCircleRoundedIcon />
        <form>
          <input type="text" placeholder='enter the text' />
          <button className='chat__inputButton' type="submit">send message</button>
        </form>
        <div className="chat__inputIcons">
        <CardGiftcardIcon />
        <GifBoxIcon />
        <EmojiEmotionsIcon />

        </div>
      </div>
    </div>
  )
    
}

export default Chat