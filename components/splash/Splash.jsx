import React, {useContext, useEffect} from 'react';

import useAuth from '../../firebase';

import Image from 'next/image';
import Router from 'next/router';

import Logo from '../../public/gamut_word_logo.png';
import {Heading, Center, VStack} from "@chakra-ui/react";

const Splash = () => {
  const user = useAuth();

  useEffect(() => {
    setTimeout(()=>{
      //FIXME: this still flashes login page before rerouting to feed why?
      Router.push(`/${user?'feed':'login'}`);
     }, 3000);
  });

  return (
    <Center h="100vh" bg={`var(--navyBlue)`} p="30px">
      <Image src = {Logo} alt = "Gamut fire logo"/>
    </Center>
  );
}

export default Splash;