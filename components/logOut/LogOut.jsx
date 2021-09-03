import React from 'react';
import Router from 'next/router';
import firebase from '../../firebase.js'
import { getAuth, signOut } from "firebase/auth";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Input, Button, useDisclosure, FormControl, FormLabel, Textarea, extendTheme } from "@chakra-ui/react";


const LogOut = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button className="signout-btn" colorScheme="orange" onClick={
        (e) => {
          const auth = getAuth();
          signOut(auth).then(() => {
            console.log('Session has terminated. Please sign in again');
            onOpen();
          }).catch((error) => {
            console.log('Something went wrong with the sign out process: ');
          });
        }
      }>Sign Out
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Logged out</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            You have been successfully logged out!
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => {onClose(); Router.push('/login');}}>
              OK
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
};

export default LogOut;