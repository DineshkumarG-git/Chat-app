import logo from './logo.svg';
import './App.css';
import { Auth } from './Components/Auth';
import { useState,useRef } from 'react';
 import { Cookies } from 'react-cookie';
import { Chat } from './Chat';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';
 const cookies = new Cookies();

function App() {


  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const[room,setRoom] = useState(null);
  const roomInputRef = useRef(null);
  const signUserOut = async () =>{
    await signOut(auth)
    cookies.remove("auth-token");
    setIsAuth(false);
        setRoom(null);
  }
  if(!isAuth)
    {
  return (
    
    <div className="App">
     <Auth setIsAuth ={setIsAuth}></Auth>
    </div>
   
  );
};
return (
  <>
  <div className='sign-out'>
    <button onClick={()=>signUserOut()}> Sign out</button>
  </div>
  { room ? (<div><Chat room={room}></Chat></div>) : (<div className='App'><div className='room'><label> Enter Room Name:</label>
  <input type='text'  ref={roomInputRef}/>

  <button onClick={()=>setRoom(roomInputRef.current.value)}>Enter Chat</button>
  </div>
  </div>)}
  

  </>
)
  
}

export default App;
