import React, {useState, useContext} from 'react';
import {Head, Center, VStack, Heading, SimpleGrid, Button} from "@chakra-ui/react";
import axios from 'axios';
import Router from 'next/router';
import MainContext from "../../context/MainContext.js";
import useAuth from "../../firebase.js";

const Categories = () => {
  const user = useAuth();
  const {category} = useContext(MainContext);

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
    <React.Fragment>
      <Center>
        <VStack>
          <Heading my="8" color="var(--orange)">Choose up to<br/> 5 Categories</Heading>
            <SimpleGrid my="10" columns = {3} spacing = {3}>
              {
                category.map((c, i) =>
                <Button
                  align = "center"
                  px="5px"
                  py="11px"
                  key={i}
                  bg = {interests.includes(c)?"var(--orange)":"var(--lightGray)"}
                  value = {c}
                  onClick = {
                    e => {
                      updateInterests(e.target.value);
                    }
                  }
                >{c}</Button>
                )
              }
            </SimpleGrid>
          <Button
            mt = "5"
            bg = {`var(--orange)`}
            onClick = {()=> {
              axios.post('/api/updateInterests', {
                email: user,
                interests: interests
              }).then(res => {
                Router.push('/feed');
              }).catch(err=>{
                alert('Something went wrong');
              })
            }
          }>Get Started!</Button>
        </VStack>
      </Center>
    </React.Fragment>
  )
}

export default Categories;