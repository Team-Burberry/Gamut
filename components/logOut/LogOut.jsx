import React from 'react';
import Router from 'next/router';
import firebase from '../../firebase.js'
import { getAuth, signOut } from "firebase/auth";

import {Button} from "@chakra-ui/react"

const LogOut = () => (
  <Button colorScheme="orange" onClick={
    (e)=>{
      const auth = getAuth();
      signOut(auth).then(() => {
        Router.push('/login');
      })
      .catch((error) => {
        alert('Something went wrong with the sign out process, please try again');
      });
    }
  }>Sign Out</Button>
);

export default LogOut;