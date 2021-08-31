/* eslint-disable react/no-children-prop */
import { Flex, Spacer, InputGroup, InputLeftElement, Input,SearchIcon , PhoneIcon, Heading} from "@chakra-ui/react";
import MainContext from '../../context/MainContext';
import {useContext, useState} from 'react'

const SearchBar = () => {
  const { searchData, filterPostByCategory} = useContext(MainContext);
  const [category, setCategory] = useState('')

  const submitForm = (e) => {
    e.preventDefault();
    if (category.length > 0) {
      filterPostByCategory(category)
    }
  }

  const inputFilter = (e) => {
    setCategory(e.target.value);
    if (e.target.value.length === 0) searchData()
    else filterPostByCategory(e.target.value)
  }

  return (
    <Flex direction="column" p={3}>
      <Heading mb={5}as='h1' size="xl">Search</Heading>

        <form w='100%'onSubmit={(e) => submitForm(e)}>
          <InputGroup w='100%'>
            <InputLeftElement pointerEvents="none"/>
            <Input onChange={(e) => inputFilter(e)}  w='100%' type="tel" placeholder="search" />
          </InputGroup>
        </form>
    </Flex>
  );
};

export default SearchBar;
