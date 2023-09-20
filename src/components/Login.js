import React from 'react';
import Button from '@mui/material/Button';
import '../styles/login.css'
import {signInWithPopup,GoogleAuthProvider} from 'firebase/auth'
import { auth, provider } from '../lib/firebase';

function Login() {
  const signIn = () => {
    // Google Login
    signInWithPopup(auth, provider).then((result) =>{
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
    }).catch((error) => alert(error.message));
  };
  
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="images/logo.png"
          alt="Discord Logo"
        />
      </div>

      <Button onClick={signIn}>Sign In</Button>
    </div>
  )
}

export default Login