import React, {useState} from 'react';
import Router from 'next/router';

import firebase from '../../firebase.js';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import Categories from '../categories/Categories.jsx';

import styles from '../../styles/Home.module.css';
import {Heading, VStack, Input, Select, SimpleGrid, Box, Button} from "@chakra-ui/react";

import moment from 'moment';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthdate, setBirthdate] = useState(null); //unix date number
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [gender, setGender] = useState('');
  const [interests, setInterests] = useState([]);

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
    <div className = {styles.container} bg={`var(--navyBlue)`}>
      <Heading>SignUp</Heading>
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
            //verify all the form data
            //if account is successfully created
              //submit account info to db
                //if post is successful
                  //forward user to feed page
            let userInfo = {
              username: username,
              email: email,
              birthdate: moment(birthdate).unix(),//unix date number
              city: city,
              state: state,
              gender: gender,
              interests: interests//array of strings
            }
            console.log(userInfo);
                //else
                  //notify user of error
            //else
              //notify user of error

            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                const user = userCredential.user;
                console.log(userCredential);
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
              });
          }}>Sign Up</Button>
        </VStack>

      </form>
      <p>Have an account? <a href="./login">log in</a></p>
    </div>
)};

export default SignUp;