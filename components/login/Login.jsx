import React from 'react';
import firebase from '../../firebase.js'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import {Button} from "@chakra-ui/react"

const Login = () => (
  <div>
    <h1>Log in</h1>
    {/* <input type="email" placeholder="teamBurberry@gmail.com"/>
    <input type="password" placeholder="topSecretP455word"/> */}
    <Button colorScheme="orange" onClick={e=>{
      const email = 'teamBurberry@gmail.com';
      const password = 'topSecretP455word';
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log('[SIGN IN]:', user);
          //redirect to feed page
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }}>Log In</Button>
  </div>
);

export default Login;