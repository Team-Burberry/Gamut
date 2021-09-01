import { initializeApp } from "firebase/app";
import {getAuth, onAuthStateChanged} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBLbvxaz9xaPcAK06O-YcwsTQfjOtWZzMM",
  authDomain: "hr--bo-burberry-gamut.firebaseapp.com",
  projectId: "hr--bo-burberry-gamut",
  storageBucket: "hr--bo-burberry-gamut.appspot.com",
  messagingSenderId: "109134107661",
  appId: "1:109134107661:web:a84342a72a684d10eeb144",
  measurementId: "G-WLZ2SKE7RX"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

onAuthStateChanged(auth, user=>{
  if (user !== null) {
    //update user to show currentUser.email
    console.log('Signed in as user: ', user);
  } else {
    //update context to show "guest"
    console.log('Guest mode. If you would like to access the entire app, please sign in. Or if you do not have an account, please sign up');
  }
})