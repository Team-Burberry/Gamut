import React, {useState} from 'react';
import Modal from '../modal/Modal.jsx';
import Router from 'next/router';

import firebase from '../../firebase.js';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import {Center, Heading, VStack, Button, Input} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [openModal, setOpenModal] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [msgText, setMsgText] = useState(null);

  return (
    <Center h="100vh" bg={`var(--navyBlue)`} color="var(--white)">
      <Modal isOpen={isOpen} onClose={onClose} msgText={msgText}/>
      <VStack spacing={4}>
        <Heading color={`var(--orange)`} mb="20px">Log In</Heading>
        <Input
          variant = "filled"
          align="center"
          size = "md"
          type = "email"
          placeholder = "burberry@gmail.com"
          onChange = {e => {
            setEmail(e.target.value);
        }}/>
        <Input
          variant = "filled"
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
                const errorMsgs = {
                  "auth/invalid-email": "Please enter a valid email",
                  "auth/user-not-found": "This email account is not registered with us. Please check the spelling and try again.",
                  "auth/wrong-password": "Password does not match this email. Please try again."
                }
                setMsgText(errorMsgs[errorCode]? errorMsgs[errorCode]: `Please fill out both email and password fields and try again`);
                onOpen();
              });
        }}>Log In</Button>
        <p align="center">Don&apos;t have an account? <br/>
          <a href="./signup" color={`var(--orange)`}>Sign up here</a></p>
        <p><a href="./search" color = 'var(--lightGray)'>Enter in guest mode</a></p>
      </VStack>
    </Center>
  )};

export default Login;