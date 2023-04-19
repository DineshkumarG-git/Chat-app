import React, { useEffect, useRef, useState } from 'react'
import { auth, db } from './firebase-config';
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, where } from 'firebase/firestore';

import './Chat.css'

export const Chat = (props) => {
    const { room } = props;
    const[newMessage,setNewMessage] = useState("");
    const[messages,setMessages] = useState([])
    const messageRef = collection(db,"messages");
    const handleSubmit =  async (e) =>{
       e.preventDefault();
        if(newMessage === "") return ;
        await addDoc(messageRef,{
            text : newMessage,
            createdAt : serverTimestamp(),
            user : auth.currentUser.displayName,
            room,

        })
        
        setNewMessage("");
       
    }
      
    useEffect(()=>{
        const queryMessage = query(messageRef,where("room","==",room),orderBy("createdAt"));
        onSnapshot(queryMessage, (snapshot) =>{
        let messages = []
        snapshot.forEach((doc)=>{
            messages.push({...doc.data(), id: doc.id });
        });
        setMessages(messages);
        })
       
    },[])
    

  return (
    <div className='chat-app'>
        <div className='header'>
            <h1> Welcome to : {room.toUpperCase()}</h1>
        </div>
        <div className='messages'>{messages.map((message) => <div className='message' key={message.id}>
            <span className='user'>{message.user}</span>
            {message.text}
        </div>)}</div>
        <form onSubmit={handleSubmit} className='new-message-form'>
            <input className='new-message-input' placeholder='Enter your message here' onChange={(e)=>setNewMessage(e.target.value)} value={newMessage}/>
            <button className='send-button' type='submit'>Send</button>
        </form>
    </div>
  )
}
