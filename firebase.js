import { initializeApp } from "firebase/app";
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import {useState, useEffect} from 'react';

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

const useAuth=()=>{
  const [userLogin,setUserLogin] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, user=>{
      if (user !== null) {
        setUserLogin(user.email)
      } else {
        setUserLogin(null)
      }
    })
  },[])

  return userLogin
}

export default useAuth;
