import React from 'react';
import Category from './Category.jsx'
import {Heading, } from "@chakra-ui/react";
import axios from 'axios';
import Router from 'next/router';
import MainContext from "../../context/MainContext";
const Categories = ({clickHandler}) => {
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

  const categoriesOptions = {
    'sports' : 'fa-futbol-o',
    'food' : 'fa-cutlery',
    'religion' : 'fa-universal-access',
    'politics' : 'fa-university',
    'music' : 'fa-music'
  }
  return (
    <div>
      <Heading>Categories</Heading>
      {Object.entries(categoriesOptions).map((cat, i) => {
        return <Category key = {i} category = {cat} clickHandler = {clickHandler}/>
      })}
      <button onClick={
        console.log('click')
        //submit the interests to the api
      }>Get Started!</button>
    </div>
  )
}

export default Categories;

/*
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

*/