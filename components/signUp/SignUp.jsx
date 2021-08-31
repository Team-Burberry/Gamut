import React from 'react';
import firebase from '../../firebase.js'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import {Heading, VStack, Input, Select, Button} from "@chakra-ui/react"

const SignUp = () => (
  <div>
    <Heading>SignUp</Heading>
    <form>
      <VStack>
        <Input size="sm" type="text" placeholder="name"/>
        <Input size="sm" type="email" placeholder="email@email.com"/>
        <Input size="sm" type="password" placeholder="******"/>
        <Input size="sm" type="date"/>
        <Input size="sm" type="text" placeholder="city"/>
        <Input size="sm" type="text" placeholder="state"/>
        <Select name="gender" size="sm">
          <option value="">Gender selection</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="non-binary">Non Binary</option>
        </Select>
        {/* <button>Next</button> */}
        <Button colorScheme="orange" onClick={e=>{
          e.preventDefault();
          //verify all the form data
          //if account is created
            //submit account info to db
              //if post is successful
                //forward user to feed page
              //else
                //notify user of error
          //else
            //notify user of error

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
      </VStack>

    </form>
    {/* <p>Have an account? <a href="./login">login</a></p> */}
  </div>
);

export default SignUp;