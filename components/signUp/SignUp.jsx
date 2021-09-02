import React, {useContext, useState} from 'react';
import axios from 'axios';
import Router from 'next/router';
import MainContext from "../../context/MainContext";

import firebase from '../../firebase.js';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import Categories from '../categories/Categories.jsx';

import styles from '../../styles/Home.module.css';
import {Box, Heading, VStack, Input, Select, SimpleGrid, Button} from "@chakra-ui/react";

import moment from 'moment';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthdate, setBirthdate] = useState(null); //unix date number
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [gender, setGender] = useState('');
  // const [interests, setInterests] = useState([]);

  const updateInterests = (value) => {
    const valIndex = interests.indexOf(value);
    if (valIndex === -1) {
      setInterests([...interests, value]);
    } else {
      setInterests(
        interests.filter((interest) => interest !== value)
      );
    }
  }

  return (
    <Box h="100vh" bg={`var(--navyBlue)`} color="#fff">
      <VStack spacing={4}>
        <div className = {styles.container} bg={`var(--navyBlue)`}>
          <Heading color={`var(--orange)`} align="center">SignUp</Heading>
          <form>
            <VStack>
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
              <Categories clickHandler={updateInterests}/>
              <SimpleGrid columns = {3} spacing = {2}>
                <Box px="35px" py="11px" bg = "orange">Cat</Box>
                <Box px="35px" py="11px" bg = "orange">Cat</Box>
                <Box px="35px" py="11px" bg = "orange">Cat</Box>
                <Box px="35px" py="11px" bg = "orange">Cat</Box>
                <Box px="35px" py="11px" bg = "orange">Cat</Box>
                <Box px="35px" py="11px" bg = "orange">Cat</Box>
                <Box px="35px" py="11px" bg = "orange">Cat</Box>
                <Box px="35px" py="11px" bg = "orange">Cat</Box>
                <Box px="35px" py="11px" bg = "orange">Cat</Box>
                <Box px="35px" py="11px" bg = "orange">Cat</Box>
                <Box px="35px" py="11px" bg = "orange">Cat</Box>
                <Box px="35px" py="11px" bg = "orange">Cat</Box>
              </SimpleGrid>
              {/* <button>Next</button> */}
              <Button colorScheme="orange" onClick={e=>{
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
                  alert('Password must be at least 7 characters');
                }

                if (valid) {
                  for (let field in userInfo) {
                    if (field === "birthDate") {
                      if (birthdate === null) {
                        valid = false;
                        alert(`Please fill out ${field}`);
                        break;
                      }
                    }
                    if (!userInfo[field]) {
                      valid = false;
                      alert(`Please fill out ${field}`);
                      break;
                    }
                  }
                }

                if (valid) {
                  console.log('creating account');
                  const auth = getAuth();
                  createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                      const user = userCredential.user;
                      console.log('account created with firebase');
                      axios.post('/api/createUser', userInfo)
                        .then(res=>{
                          console.log('account created:', res);
                          Router.push('/feed');
                        })
                        .catch(err=>{
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
              }}>Sign Up</Button>
            </VStack>
          </form>
          <p>Have an account? <a href="./login">log in</a></p>
        </div>
      </VStack>
    </Box>
)};

export default SignUp;