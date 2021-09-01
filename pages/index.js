import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import firebase from '../firebase.js'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

import LogOut from '../components/logOut/LogOut.jsx'
import Login from '../components/login/Login.jsx'
import SignUp from '../components/signUp/SignUp.jsx'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gamut</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <LogOut/>
        <Login/>
        <SignUp/>
      </main>
    </div>
  )
}

/*
Set an authentication state observer and get user data
For each of your app's pages that need information about the signed-in user, attach an observer to the global authentication object. This observer gets called whenever the user's sign-in state changes.

Attach the observer using the onAuthStateChanged method. When a user successfully signs in, you can get information about the user in the observer.
*/
// import { getAuth, onAuthStateChanged } from "firebase/auth";

// const auth = getAuth();
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });