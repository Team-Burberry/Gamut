/* eslint-disable @next/next/link-passhref */
import {
  Flex,
  Spacer,
  InputGroup,
  InputLeftElement,
  Input,
  SearchIcon,
  PhoneIcon,
  Heading,
} from "@chakra-ui/react";
import Link from "next/link";
import style from "../../styles/Nav.module.css";
import firebase from "../../firebase.js";
import { getAuth } from "firebase/auth";
import { useState, useEffect, useContext, useCallback } from "react";
import { useRouter } from "next/router";
import MyModal from "./Modal";
import { useDisclosure } from "@chakra-ui/react";
import LogOut from "../logOut/LogOut";
import MainContext from '../../context/MainContext';
import useAuth from '../../firebase';


const Nav = () => {
  const[buttonClick, setButtonClick] = useState('feed');
  const [openModal, setOpenModal] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = useAuth();
  const router = useRouter();

  useEffect(() => {
    console.log(router.pathname)
    if (router.pathname === '/search') setButtonClick('search');
    else if (router.pathname === '/feed') setButtonClick('feed');
    else if (router.pathname === '/new-post') setButtonClick('post');
    else if (router.pathname === '/profile') setButtonClick('user');

  }, []);

  const showModal = () => {
    if (!user) onOpen();
  };

  return (
    <>
      <div>
        <MyModal isOpen={isOpen} onClose={onClose} />
      </div>

      <div className={`${style.container}`}>

        <Link href="/feed">
          <a onClick={() => setButtonClick('feed')}>
            <i className={buttonClick === 'feed' ? `fa fa-home fa-lg  ${style.clicked}` : `fa fa-home fa-lg ${style.icon}`}/>
            </a>
        </Link>

        <Link href="/search">
          <a onClick={() => setButtonClick('search')}>
            <i className={buttonClick === 'search' ? `fa fa-search fa-lg  ${style.clicked}` : `fa fa-search fa-lg ${style.icon}`}/>
            </a>
        </Link>
        {!user ? (
          <i onClick={() => showModal()} className={`fa fa-plus fa-lg ${style.icon}`}/>
        ) : (
        <Link href="/new-post">
          <a onClick={() => setButtonClick('post')}>
            <i className={buttonClick === 'post' ? `fa fa-plus fa-lg  ${style.clicked}` : `fa fa-plus fa-lg ${style.icon}`}/>
            </a>
        </Link>
          )}
        {!user ? (
          <a>
            <i onClick={() => showModal()}
            className={`fa fa-user fa-lg ${style.icon}`}
            />
            </a>
          ) : (
        <Link href="/profile">
          <a onClick={() => setButtonClick('user')}>
            <i className={buttonClick === 'user' ? `fa fa-user fa-lg  ${style.clicked}` : `fa fa-user fa-lg ${style.icon}`}/>
          </a>
        </Link>
          )}
      </div>
    </>
  );
};
export default Nav;
