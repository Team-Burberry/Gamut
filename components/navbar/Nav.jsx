/* eslint-disable @next/next/link-passhref */
import {
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Lorem} from "@chakra-ui/react"
import Link from 'next/link'
import style from '../../styles/Nav.module.css'
import firebase from '../../firebase.js'
import {getAuth} from 'firebase/auth';

const Nav = () => {
  const auth = getAuth();
  return (
    <div className={`${style.container}`}>
      <i className={`fa fa-home fa-lg ${style.icon}`}></i>
      <Link href='/search'>
      <i className={`fa fa-search fa-lg ${style.icon}`}></i>
      </Link>
      <i onClick={()=> console.log(auth.currentUser)}className={`fa fa-plus fa-lg ${style.icon}`}></i>
      <i className={`fa fa-user fa-lg ${style.icon}`}></i>

    </div>
  )
}
export default Nav