import React, {useContext, useEffect} from 'react';
import MainContext from "../../context/MainContext";
import Image from 'next/image';
import Router from 'next/router';

import firebase from '../../firebase.js';
import { getAuth } from "firebase/auth";

import Logo from '../../public/Gamut_logo_small.png';
import {Heading, Center, VStack} from "@chakra-ui/react";

const Splash = () => {
  const { user } = useContext(MainContext);
  useEffect(() => {
    // setTimeout(()=>{
    // if (user) {
      Router.push(`/${user?'feed':'login'}`);
    // } else {
    //   Router.push('/login');
    // }
  // }, 5000);
  });

  return (
    <MainContext.Consumer>
      {({user})=>{
        return (
          <Center h="100vh" bg={`var(--navyBlue)`} >
            <VStack>
              <Image src = {Logo} alt = "Gamut fire logo"/>
              <Heading color={'var(--orange)'}>GAMUT</Heading>
            </VStack>
          </Center>
      )}}
    </MainContext.Consumer>
  );
}

export default Splash;