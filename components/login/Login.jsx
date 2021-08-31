import React, {useState} from 'react';
import Router from 'next/router';
import firebase from '../../firebase.js';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import styles from '../../styles/Home.module.css'
import {Heading, VStack, Button, Input} from "@chakra-ui/react"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={styles.container}>
      <Heading>Log In</Heading>
      <VStack>
        <Input
          size = "md"
          type = "email"
          placeholder = "teamBurberry@gmail.com"
          onChange = {e => {
            setEmail(e.target.value);
        }}/>
        <Input
          size = "md"
          type = "password"
          placeholder = "topSecretP455word"
          onChange = {e => {
            setPassword(e.target.value);
        }}/>
        <Button
          colorScheme = "orange"
          onClick = {e => {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                const user = userCredential.user;
                console.log('[SIGN IN]:', user);
                const {pathname} = Router;
                if (pathname == '/') {
                  Router.push('/search');
                }
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
              });
        }}>Log In</Button>
      </VStack>
      <p>Don&apos;t have an account? <a href="./signup">Sign Up</a></p>
    </div>
  )};

export default Login;