import {
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,
  Input, Button, useDisclosure, FormControl, FormLabel, Textarea
} from "@chakra-ui/react";
import { WarningTwoIcon } from '@chakra-ui/icons';
import Congrats from './Congrats.jsx';
import { useState } from 'react';

const Confirm = (props) => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isOpen1, setOpen1] = useState(false);

  const open1 = () => {
    setOpen1(true);
    // submit the data here
  }

  const close1 = () => {
    setOpen1(false);
  }
  const complete = () => {
    onClose();
    // alert('successfully submitted!');
    open1();
  }
  return (
    <>
      <Button colorScheme="red" onClick={onOpen}>Create new post</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Are you sure you are done?
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" onClick={onClose}>
              Continue Editing
            </Button>
            <Button colorScheme="blue" onClick={complete}>Submit</Button>
            {/* <Congrats handleSubmit={props.handleSubmit} onClose={onClose} /> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal isOpen={isOpen1} onClose={close1}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            Your post has been created successfully!
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" onClick={close1}>
              Done
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Confirm;