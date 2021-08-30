import React from 'react';
import firebase from '../../firebase.js'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import {Button} from "@chakra-ui/react"

const SignUp = () => (
  <div>
    <h2>SignUp</h2>
    <form>
      <input type="text" placeholder="name"/>
      <input type="email" placeholder="email@email.com"/>
      <input type="password" placeholder="******"/>
      <input type="date"/>
      <input type="text" placeholder="city"/>
      <input type="text" placeholder="state"/>
      <select name="gender">
        <option value="">Gender selection</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="non-binary">Non Binary</option>
      </select>
      {/* <button>Next</button> */}
      <Button colorScheme="orange" onClick={e=>{
        e.preventDefault();
        const email = 'teamBurberry@gmail.com';
        const password = 'topSecretP455word';

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(userCredential);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });
      }}>Sign Up</Button>
    </form>
    {/* <p>Have an account? <a href="./login">login</a></p> */}
  </div>
);

export default SignUp;