import {initializeApp} from 'firebase/app'
import {GoogleAuthProvider, getAuth ,signOut} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyCJ0wztkw8S4zbjIiM7EcVZk0WGfgtWuls",
    authDomain: "discord-clone-890a7.firebaseapp.com",
    projectId: "discord-clone-890a7",
    storageBucket: "discord-clone-890a7.appspot.com",
    messagingSenderId: "598005737578",
    appId: "1:598005737578:web:320739fc831ee5902c8213"
  };

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)
  const auth = getAuth(app)
  const provider = new GoogleAuthProvider()

  export { app, db, auth, provider, signOut}

  