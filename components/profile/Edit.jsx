import { useContext, useState } from 'react';
import {
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,
  Input, Button, useDisclosure, FormControl, FormLabel, Textarea
} from "@chakra-ui/react";

const Edit = (props) => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { username, gender, city, state } = props.userInfo;
  console.log(props.userInfo);
  const [tempName, setName] = useState(null);
  const [tempGen, setGen] = useState(null);
  const [tempCity, setCity] = useState(null);
  const [tempState, setState] = useState(null);
  const handName = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  }
  const handleGen = (e) => {
    setGen(e.target.value);
    console.log(e.target.value);
  }
  const handleCity = (e) => {
    setCity(e.target.value);
    console.log(e.target.value);
  }
  const handleState = (e) => {
    setState(e.target.value);
    console.log(e.target.value);
  }

  return (
    <>
      <div>
        <Button className="edit-btn" background="transparent" onClick={onOpen}>
          Edit
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
                <Input onChange={handleGen} placeholder={gender} />
              </FormControl>
              <FormControl>
                <FormLabel>City</FormLabel>
                <Input onChange={handleCity} placeholder={city} />
              </FormControl>
              <FormControl>
                <FormLabel>State</FormLabel>
                <Input onChange={handleState} placeholder={state} />
              </FormControl>
              {/* <FormControl>
              <FormLabel>Bio</FormLabel>
              <Textarea placeholder="Enter Your Bio Here"></Textarea>
            </FormControl> */}
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="red" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue">Update the Change</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </>
  )
}

export default Edit;