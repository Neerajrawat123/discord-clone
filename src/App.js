import './App.css';
import {useEffect} from 'react'

import {useSelector, useDispatch} from 'react-redux'
import Sidebar from './components/Sidebar';
import Chat from './components/chat';
import { selectUser } from './features/userSlice';
import Login from '../src/components/Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './lib/firebase';
import {login,logout} from './features/userSlice'

function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  useEffect(() => {
    onAuthStateChanged(auth, (user) =>{
      if(user){
        dispatch(
          login({
            uid: user.uid,
            photo: user.photoURL,
            email: user.email,
            displayName: user.displayName,

          })
        )

      }else{

        dispatch(logout());
      }
    })
    
  
    
  }, [dispatch])
  
   return (
    <div className="App">

      {
        user ? (
          <>
          <Sidebar /> 
          <Chat />
          
          </>
        ) : (
          <Login />
        )
      }

    </div>
  );
}

export default App;
