import {

  Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,
  Input, Button, useDisclosure, FormControl, FormLabel, Textarea, Lorem
} from "@chakra-ui/react";
import Login from '../login/Login';
import Link from "next/link";

const MyModal = ({isOpen, onClose}) =>  {
  // const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Please Login to Access</ModalHeader>
          <ModalBody>
          <Link href="/login">
            <a><Button>Login</Button></a>
          </Link>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default MyModal;
