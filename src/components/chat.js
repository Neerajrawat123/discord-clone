/** @format */

import React, { useState } from 'react';
import '../styles/chat.css';
import ChatHeader from './ChatHeader';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifBoxIcon from '@mui/icons-material/GifBox';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Message from './Message';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { selectChannelId, selectChannelName } from '../features/appslice';
import { addDoc, collection, getDocs, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useEffect } from 'react';

function Chat() {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const getMessages = async() =>{
      const q = query(collection(db,`channels/${channelId}/messages`),orderBy("timestamp", "asc"))
      const message = onSnapshot(q, (snap) => {
        setMessages(snap.docs.map((doc) => doc.data()))
        

      })
    }
  getMessages()
    
  }, [channelId])
   console.log(messages)

  const sendMessage = (e) => {
    e.preventDefault();
    const colref = collection(db, `channels/${channelId}/messages`);
    addDoc(colref, {
      timestamp: serverTimestamp(),
      message: input,
      user: user,
    });
    setInput('');
  };
  return (
    <div className='chat'>
      <ChatHeader channelName={channelName} />
      <div className='chat__messages'>
        {
          messages.map((message) => (

            <Message message={message.message} user ={message.user} timestamp ={message.timestamp}/>
          ))
        }
      </div>
      <div className='chat__input'>
        <AddCircleRoundedIcon />
        <form>
          <input
            type='text'
            placeholder='message #${channelName}'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            disabled ={!channelId}
            className='chat__inputButton'
            type='submit'
            onClick={sendMessage}
          >
            send message
          </button>
        </form>
        <div className='chat__inputIcons'>
          <CardGiftcardIcon />
          <GifBoxIcon />
          <EmojiEmotionsIcon />
        </div>
      </div>
    </div>
  );
}

export default Chat;
