import React from 'react';
import Category from './Category.jsx'
import {Heading} from "@chakra-ui/react";

const Categories = ({clickHandler}) => {
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
    </div>
  )
}

export default Categories;