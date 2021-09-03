import React, {useContext, useState} from 'react';
import axios from 'axios';
import Router from 'next/router';
import MainContext from "../../context/MainContext";
import Modal from '../modal/Modal.jsx';

import firebase from '../../firebase.js';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import {Head, Center, Box, Heading, VStack, Input, Select, Button} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

import moment from 'moment';

const SignUp = () => {
  const [openModal, setOpenModal] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [msgText, setMsgText] = useState('');

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthdate, setBirthdate] = useState(null); //unix date number
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [gender, setGender] = useState('');

  return (
    <React.Fragment>
      <Modal isOpen={isOpen} onClose={onClose} msgText={msgText}/>
      <Center h="100vh" bg={`var(--navyBlue)`} color="var(--white)">
      <VStack spacing={7}>
        <div bg={`var(--navyBlue)`}>
          <Heading color={`var(--orange)`} align="center" mb="20px">SignUp</Heading>
          <form>
            <VStack spacing={5}>
              <Input
                size="sm"
                type="text"
                placeholder="name"
                onChange = {
                  e => {
                    setUsername(e.target.value);
              }}/>
              <Input
                size="sm"
                type="email"
                placeholder="email@email.com"
                onChange = {
                  e => {
                    setEmail(e.target.value);
              }}/>
              <Input
                size="sm"
                type="password"
                placeholder="******"
                onChange = {
                  e => {
                    setPassword(e.target.value);
              }}/>
              <Input
                size="sm"
                type="date"
                onChange = {
                  e => {
                    setBirthdate(e.target.value);
              }}/>
              <Input
                size="sm"
                type="text"
                placeholder="city"
                onChange = {
                  e => {
                    setCity(e.target.value);
              }}/>
              <Input
                size="sm"
                type="text"
                placeholder="state"
                onChange = {
                  e => {
                    setState(e.target.value);
              }}/>
              <Select
                name="gender"
                size="sm"
                onChange = {
                  e => {
                    setGender(e.target.value);
                }}>
                <option value="">Gender selection</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="non-binary">Non Binary</option>
              </Select>
              <Button mb="20px" bg="var(--orange)" onClick={e=>{
                e.preventDefault();
                let valid = true;

                const userInfo = {
                  username: username,
                  email: email,
                  birthDate: `${moment(birthdate).unix()}`,
                  city: city,
                  state: state,
                  gender: gender
                }

                if (password.length < 7) {
                  valid = false;
                  setMsgText('Password must be at least 7 characters');
                        onOpen();
                }

                if (valid) {
                  for (let field in userInfo) {
                    if (field === "birthDate") {
                      if (birthdate === null) {
                        valid = false;
                        setMsgText(`Please fill out ${field}`);
                        onOpen();
                        break;
                      }
                    }
                    if (!userInfo[field]) {
                      valid = false;
                      setMsgText(`Please fill out ${field}`);
                      onOpen();
                      break;
                    }
                  }
                }

                if (valid) {
                  const auth = getAuth();
                  createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                      const user = userCredential.user;
                      axios.post('/api/createUser', userInfo)
                        .then(res => {
                          //FIXME: update user in context
                          Router.push('/interests');
                        })
                        .catch(err => {
                          setMsgText('Something went wrong. Please try again');
                          onOpen();
                          console.log(`Unable to create account on DB:`, err);
                        })
                      })
                      .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        let msgText = null;
                        switch (error.message) {
                          case "auth/email-already-in-use" :
                            msgText = "The email address entered already has an account. Please try again";
                            break;
                          default:
                            msgText = "Something went wrong. Please check the information entered and try again."
                        }
                        console.log(error);
                      });
                }
              }}>Next</Button>
            </VStack>
          </form>
          <p>Have an account? <a color = 'var(--orange)' href="./login">log in</a></p>
        </div>
      </VStack>
    </Center>
    </React.Fragment>
)};

export default SignUp;