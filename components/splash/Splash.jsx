import React, {useEffect} from 'react';
import Image from 'next/image';
import Router from 'next/router';

import firebase from '../../firebase.js';
import { getAuth } from "firebase/auth";

import LogOut from '../logOut/LogOut.jsx';

import Logo from '../../public/Gamut_logo_small.png';
import {Heading, Box} from "@chakra-ui/react";

const Splash = () => {
  // useEffect(() => {
  //   setTimeout(()=>{
  //     const auth = getAuth();
  //   if (auth.currentUser) {
  //     Router.push('/feed');
  //   } else {
  //     Router.push('/login');
  //   }
  // }, 5000);
  // });

  return (
    <Box h="100vh" bg={`var(--navyBlue)`} align="center" justifyContent="space-between" verticalAlign="center">
      <Image src = {Logo} alt = "Gamut fire logo"/>
      <Heading >Gamut</Heading>
    </Box>
  );
}

export default Splash;