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
import { useState, useEffect } from "react";
import styles from "../../styles/modal.module.css";
import MyModal from "./Modal";
import { useDisclosure } from "@chakra-ui/react";
import LogOut from "../logOut/LogOut";

const Nav = () => {
  // const [user, setUser] = useState(false)
  const [openModal, setOpenModal] = useState(false);
  const [userLogIn, setUserLogIn] = useState(false);
  const auth = getAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (auth.currentUser) setUserLogIn(true);
  }, []);

  const showModal = () => {
    if (!auth.currentUser) onOpen();
  };
  return (
    <>
      <div className={styles.modalContainer}>
        <MyModal isOpen={isOpen} onClose={onClose} />
      </div>

      <div className={`${style.container}`}>
        <i className={`fa fa-home fa-lg ${style.icon}`} />
        <Link href="/search">
          <a>
            <i className={`fa fa-search fa-lg ${style.icon}`} />
          </a>
        </Link>
        {!userLogIn ? (
          <i
            onClick={() => showModal()}
            className={`fa fa-plus fa-lg ${style.icon}`}
          />
        ) : (
          <Link href="/new-post">
            <a>
              <i className={`fa fa-plus fa-lg ${style.icon}`} />
            </a>
          </Link>
        )}
        {!userLogIn ? (
          <a>
            <i
              onClick={() => showModal()}
              className={`fa fa-user fa-lg ${style.icon}`}
            />
          </a>
        ) : (
          <Link href="/profile">
            <a>
              <i className={`fa fa-user fa-lg ${style.icon}`} />
            </a>
          </Link>
        )}
         <LogOut />
      </div>
    </>
  );
};
export default Nav;
