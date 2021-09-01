import { useContext, useState } from 'react';
import {
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,
  Input, Button, useDisclosure, FormControl, FormLabel, Textarea
} from "@chakra-ui/react";
import { WarningTwoIcon } from '@chakra-ui/icons'

const Edit = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button colorScheme="yellow" onClick={onOpen}>
        <WarningTwoIcon />
        Edit Profile
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Your Profile</ModalHeader>
          <ModalBody>
            <FormControl>
              <FormLabel>Dirth of Birth</FormLabel>
              <Input />
            </FormControl>
            <FormControl>
              <FormLabel>City</FormLabel>
              <Input />
            </FormControl>
            <FormControl>
              <FormLabel>State</FormLabel>
              <Input />
            </FormControl>
            <FormControl>
              <FormLabel>Bio</FormLabel>
              <Textarea placeholder="Enter Your Bio Here"></Textarea>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Update the Change</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Edit;