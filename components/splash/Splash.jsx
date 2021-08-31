import React, {useEffect} from 'react';
import Router from 'next/router';

import firebase from '../firebase.js';
import { getAuth } from "firebase/auth";

import LogOut from '../components/logOut/LogOut.jsx';

import {Heading} from "@chakra-ui/react";

const Splash = () => {
  useEffect(() => {
    const auth = getAuth();
    if (auth.currentUser) {
      Router.
    }
  });

  return (
    <React.Fragment>
      <LogOut/>
      <Heading>Gamut</Heading>
      <p>🔥</p>
    </React.Fragment>
  );
}