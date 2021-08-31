/* eslint-disable react/no-children-prop */
import { Flex, Spacer, InputGroup, InputLeftElement, Input,SearchIcon , PhoneIcon, Heading} from "@chakra-ui/react";

const SearchBar = () => {

  const handleSearch = () => {
    
  }
  return (
    <Flex direction="column" p={3}>
      <Heading mb={5}as='h1' size="xl">Search</Heading>

        <form w='100%'
          onSubmit={(e) => submitForm(e)}

        >
          <InputGroup w='100%'>
            <InputLeftElement
              pointerEvents="none"

            />

            <Input w='100%' type="tel" placeholder="search" />
          </InputGroup>
        </form>

    </Flex>
  );
};


export default SearchBar;
