import React from 'react';
import firebase from '../../firebase.js'
import { getAuth, signOut } from "firebase/auth";

import {Button} from "@chakra-ui/react"

const LogOut = () => (
  <Button colorScheme="orange" onClick={
    (e)=>{
      const auth = getAuth();
      signOut(auth).then(() => {
        console.log('Session has terminated. Please sign in again');
      }).catch((error) => {
        console.log('Something went wrong with the sign out process: ');
      });
    }
  }>Sign Out</Button>
);

export default LogOut;