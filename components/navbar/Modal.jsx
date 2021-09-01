
import  style  from '../../styles/modal.module.css';
import {

  Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,
  Input, Button, useDisclosure, FormControl, FormLabel, Textarea, Lorem
} from "@chakra-ui/react";
import Login from '../login/Login';

const MyModal = ({isOpen, onClose}) =>  {
  // const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>oops, You Need to Login to Access</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           <Button>Login</Button>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default MyModal;
