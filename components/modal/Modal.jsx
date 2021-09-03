import {
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,
  Input, Button, useDisclosure, FormControl, FormLabel, Textarea
} from "@chakra-ui/react";
import Link from "next/link";

const ModalComponent = ({isOpen, onClose, msgText}) => (
  <Modal onClose={onClose} isOpen={isOpen} isCentered>
    <ModalOverlay />
    <ModalContent>
      <ModalBody>
        {msgText}
      </ModalBody>
    </ModalContent>
  </Modal>
);

export default ModalComponent;