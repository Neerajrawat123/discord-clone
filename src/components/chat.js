import React,{useState} from 'react'
import '../styles/chat.css'
import ChatHeader from './ChatHeader'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifBoxIcon from '@mui/icons-material/GifBox';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Message from './Message';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { selectChannelId, selectChannelName } from '../features/appslice';
import { collection } from 'firebase/firestore';
import { db } from '../lib/firebase';

function Chat() {
  const user = useSelector(selectUser); 
  const channelId = useSelector(selectChannelId);  
  const channelName = useSelector(selectChannelName);
  const [input, setInput] = useState("")
  
  const sendMessage = (e) =>{
    e.preventDefault();
    collection(db,"channels/")
  }
  console.log(input)
  return (
    <div className="chat">
      <ChatHeader channelName = {channelName}/>
      <div className="chat__messages">
        <Message />

      </div>
      <div className= "chat__input">
        <AddCircleRoundedIcon />
        <form>
          <input type="text" placeholder = "message #${channelName}"
          value={input}
          onChange={(e) => setInput(e.target.value)}/>
          <button className='chat__inputButton' type="submit" disabled={!channelId}
          onClick={() => sendMessage}
          >send message</button>
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