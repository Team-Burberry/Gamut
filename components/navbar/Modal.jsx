import {

  Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,
  Input, Button, useDisclosure, FormControl, FormLabel, Textarea, Lorem
} from "@chakra-ui/react";
import Login from '../login/Login';
import Link from "next/link";
import style from "../../styles/NavModal.module.css";

const MyModal = ({isOpen, onClose}) =>  {
  // const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className={style.navModal}>Please Login to Access</ModalHeader>
          <ModalBody>
          <Link href="/login">
            <a ><Button colorScheme = "orange">Login</Button></a>
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
