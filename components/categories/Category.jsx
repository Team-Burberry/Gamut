import React from 'react';

const Category = ({category, clickHandler}) => {
  const [name, faIconCode] = category;
  return (
  <label>
    <input
      type = "checkbox"
      name = "interests"
      value = {name}
      onChange = {
        e => {
          clickHandler(name);
        }
      }/>
    <i className = {`fa ${faIconCode}`}></i>
  </label>
)}

export default Category;