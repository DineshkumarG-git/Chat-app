import React, { useState } from 'react'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../firebase-config'
import { Cookies } from 'react-cookie'
const cookies  = new Cookies()
export const Auth = (props) => {

    const { setIsAuth } = props;

    const signInWithGoogle = async() => {
      try{
       const result =   await signInWithPopup( auth,provider);
    //    console.log(result.user.refreshToken);
       cookies.set("auth-token",result.user.refreshToken);
       console.log(cookies.get("auth-token"));
        setIsAuth(true)
      }
      catch(err)
      {
        console.log(err);
      }


    }
    
  return (
    
    <div className="auth">
        <h2>   Welcome to Dinesh'sapp </h2>
        
        
        <div className='google_button'>
        <button onClick={signInWithGoogle}> Sign In With Google</button>
        <img src='https://th.bing.com/th/id/OIP.T6F6Vja5ue4BhRs81wWlywHaHa?pid=ImgDet&rs=1'></img>
        </div>
    </div>
  )
}
