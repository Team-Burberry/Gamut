import React, {useState} from 'react';
import Router from 'next/router';
import firebase from '../../firebase.js';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import styles from '../../styles/Home.module.css'
import {Center, Heading, VStack, Button, Input} from "@chakra-ui/react"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Center h="100vh" bg={`var(--navyBlue)`} color="#fff">
      <VStack spacing={4}>
      <Heading color={`var(--orange)`} mb="20px">Log In</Heading>
        <Input
          align="center"
          size = "md"
          type = "email"
          placeholder = "burberry@gmail.com"
          onChange = {e => {
            setEmail(e.target.value);
        }}/>
        <Input
          align="center"
          size = "md"
          type = "password"
          placeholder = "topSecretP455word"
          onChange = {e => {
            setPassword(e.target.value);
        }}/>
        <Button
          bg = {'var(--orange)'}
          color = '#fff'
          onClick = {e => {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                Router.push('/feed');
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert('error.message');
              });
        }}>Log In</Button>
      <p align="center">Don&apos;t have an account? <br/>
        <a href="./signup" color={`var(--orange)`}>Sign up here</a></p>
      <p><a href="./search">View site as a guest</a></p>
      </VStack>
    </Center>
  )};

export default Login;