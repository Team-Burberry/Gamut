/* eslint-disable @next/next/link-passhref */
import { Flex, Spacer, InputGroup, InputLeftElement, Input, SearchIcon, PhoneIcon, Heading } from "@chakra-ui/react";
import Link from 'next/link';
import style from '../../styles/Nav.module.css';
import firebase from '../../firebase.js';
import {getAuth} from 'firebase/auth';
import {useState} from 'react';
import  styles  from '../../styles/modal.module.css';
import MyModal from './Modal';

const Nav = () => {
  // const [user, setUser] = useState(false)
  const[openModal, setOpenModal] = useState(false);
  const auth = getAuth();

  // const handleUser = () => {
  //   if (auth.currentUser) setUser(auth.currentUser)
  // }

  const showModal = () => {
    if (!auth.currentUser) setOpenModal(true);

  }
  return (
    <>
    <div className={styles.modalContainer}>
    {openModal && <MyModal/>}
    </div>
    <div className={`${style.container}`}>
      <Link href="/feed">
      <i className={`fa fa-home fa-lg ${style.icon}`}/>
      </Link>
      <Link href='/search'>
      <i className={`fa fa-search fa-lg ${style.icon}`}/>
      </Link>
      {!auth.currentUser ?
      <i onClick={()=> showModal()}className={`fa fa-plus fa-lg ${style.icon}`}/>
      : <Link href='/new-post'>
      <i className={`fa fa-plus fa-lg ${style.icon}`}/>
      </Link>
      }
      {!auth.currentUser ?
        <i onClick={() => showModal()}className={`fa fa-user fa-lg ${style.icon}`}/>
      : <Link href='/profile'>
      <i className={`fa fa-user fa-lg ${style.icon}`}/>
      </Link>
      }
    </div>
    </>
  )
}
export default Nav