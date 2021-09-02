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
import { useState, useEffect, useContext } from "react";

import MyModal from "./Modal";
import { useDisclosure } from "@chakra-ui/react";
import LogOut from "../logOut/LogOut";
import MainContext from '../../context/MainContext';
import useAuth from '../../firebase';

const Nav = () => {
  // const [user, setUser] = useState(false)
  const [openModal, setOpenModal] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = useAuth();


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
          <a>
            <i className={`fa fa-home fa-lg ${style.icon}`} />
          </a>
        </Link>

        <Link href="/search">
          <a>
            <i className={`fa fa-search fa-lg ${style.icon}`} />
          </a>
        </Link>
        {!user ? (
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
        {!user ? (
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
         {/* <LogOut /> */}
      </div>
    </>
  );
};
export default Nav;
