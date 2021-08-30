// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth, onAuthStateChanged} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLbvxaz9xaPcAK06O-YcwsTQfjOtWZzMM",
  authDomain: "hr--bo-burberry-gamut.firebaseapp.com",
  projectId: "hr--bo-burberry-gamut",
  storageBucket: "hr--bo-burberry-gamut.appspot.com",
  messagingSenderId: "109134107661",
  appId: "1:109134107661:web:a84342a72a684d10eeb144",
  measurementId: "G-WLZ2SKE7RX"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);
const auth = getAuth(firebaseApp);

//detect auth state
onAuthStateChanged(auth, user=>{
  if (user !== null) {
    console.log('Signed in as user: ', user);
  } else {
    console.log('Guest mode. If you would like to access the entire app, please sign in. Or if you do not have an account, please sign up');
  }
})