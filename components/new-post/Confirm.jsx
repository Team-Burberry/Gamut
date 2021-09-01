import {
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,
  Input, Button, useDisclosure, FormControl, FormLabel, Textarea
} from "@chakra-ui/react";
import { WarningTwoIcon } from '@chakra-ui/icons';
import { useState } from 'react';

const Confirm = (props) => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isOpen1, setOpen1] = useState(false);
  const [isOpenErr, setOpenErr] = useState(false);
  const open1 = () => {
    if (props.done === true) {
      setOpen1(true);
    } else {
      setOpenErr(true);
    }
    // submit the data here
  }
  const closeErr = () => {
    setOpenErr(false);
  }
  const close1 = () => {
    setOpen1(false);
  }
  const complete = () => {
    onClose();
    props.handleSubmit();
    open1();
  }

  return (
    <>
      <Button background="transparent" font="blue" onClick={onOpen}>Create new post</Button>

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
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal isOpen={isOpen1} onClose={close1}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader m={2}>
            Your post has been created successfully!
          </ModalHeader>

          <ModalFooter>
            <Button colorScheme="blue" onClick={close1}>
              Done
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal isOpen={isOpenErr} onClose={closeErr}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader m={2}>
            Please complete all the required fields!
          </ModalHeader>

          <ModalFooter>
            <Button colorScheme="red" onClick={closeErr}>
              OK
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Confirm;