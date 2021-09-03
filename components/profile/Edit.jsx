import { useContext, useState } from 'react';
import {
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,
  Input, Button, useDisclosure, FormControl, FormLabel, Textarea, Select
} from "@chakra-ui/react";
import axios from 'axios';

const Edit = (props) => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { username, gender, city, state, birthDate, email } = props.userInfo;
  // console.log(props.userInfo);
  const [tempName, setName] = useState(null);
  const [tempGen, setGen] = useState(null);
  const [tempCity, setCity] = useState(null);
  const [tempState, setState] = useState(null);
  const handName = (e) => {
    setName(e.target.value);
    // console.log(e.target.value);
  }
  const handleGen = (e) => {
    setGen(e.target.value);
    // console.log(e.target.value);
  }
  const handleCity = (e) => {
    setCity(e.target.value);
    // console.log(e.target.value);
  }
  const handleState = (e) => {
    setState(e.target.value);
    // console.log(e.target.value);
  }

  const info = {
    email: email,
    username: tempName || username,
    gender: tempGen || gender,
    city: tempCity || city,
    state: tempState || state,
    birthDate: birthDate
  }

  // console.log(info);

  const handleUpdate = () => {
    axios.post('/api/createUser', info)
    console.log('done user done')
    onClose();
  }

  return (
    <>
      <div>
        <Button className="edit-btn" background="transparent" onClick={onOpen}>
          Edit Info
        </Button>
      </div>
      <div>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Your Profile</ModalHeader>
            <ModalBody>
              <FormControl>
                <FormLabel>Username</FormLabel>
                <Input onChange={handName} placeholder={username} />
              </FormControl>
              <FormControl>
                <FormLabel>Gender</FormLabel>
                <Select onChange={handleGen} placeholder="Change gender?">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>City</FormLabel>
                <Input onChange={handleCity} placeholder={city} />
              </FormControl>
              <FormControl>
                <FormLabel>State</FormLabel>
                <Input onChange={handleState} placeholder={state} />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="orange" onClick={handleUpdate}>Update the Change</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </>
  )
}

export default Edit;