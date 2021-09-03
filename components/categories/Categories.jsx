import React, {useState, useContext} from 'react';
import Category from './Category.jsx';
import {Head, Center, VStack, Heading, SimpleGrid, Button, Box} from "@chakra-ui/react";
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
      {/* <Head>
        <title>Gamut: Interests</title>
      </Head> */}
      <Center>
        <VStack>
          <Heading my="8" color="var(--orange)">Categories</Heading>
            <SimpleGrid my="10" columns = {3} spacing = {2}>
              {
                category.map((c, i) =>
                <Box
                  px="5px"
                  py="11px"
                  key={i}
                  bg = "var(--lightGray)">{c}</Box>
                )
              }
            </SimpleGrid>
          <Button
            mt = "5"
            bg = {`var(--orange)`}
            onClick = {()=> {
              console.log('click')
              //submit the interests to the api
            }
          }>Get Started!</Button>
        </VStack>
      </Center>
    </React.Fragment>
  )
}

export default Categories;