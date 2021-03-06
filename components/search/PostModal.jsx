import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Textarea,
  Lorem,
} from "@chakra-ui/react";
import Link from "next/link";
import MainContext from "../../context/MainContext";
import { useContext, useState } from "react";
import styles from "../../styles/PostModal.module.css";
import axios from "axios";
import useAuth from "../../firebase";
import { categoryIcon } from "./icon";
import Slider from "../slider/slider";

const PostModal = ({ isOpen, onClose, post }) => {
  const [votes, setVotes] = useState(0);
  const user = useAuth();

  const handleSwipe = () => {
    axios
      .post(`/api/updateInteraction`, {
        email: user,
        postId: post.id,
        interaction: votes,
      })
      .catch((err) => console.log(err));
  };

  const handleClose = () => {
    handleSwipe();
    onClose();
  };

  return (
    <>
      {post && (
        <Modal m={5} onClose={() => handleClose()} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalBody>
              <div className={styles.card}>
                <p className={styles.topic}>{post.title}</p>
                <div className={styles.post}>
                  <p className={styles.text}>{post.body}</p>
                  <div className={styles.footer}>
                    <span className={styles.category}>
                      {categoryIcon(post.category)}
                    </span>
                    <div className={styles.logo}>
                      <img src="logo.png" alt="logo" />
                      <p className={styles.interactions}>{post.interactions}</p>
                    </div>
                  </div>
                </div>
                <div className={styles.feedContainer}>
                  <span className={styles.username}>{post.username}</span>
                  <span className={styles.date}>
                    {new Date(post.date).toLocaleDateString("en-US")}
                  </span>
                </div>
                <div className={styles.field}>
                  <Slider setVotes={setVotes} votes={votes} />
                </div>
              </div>
            </ModalBody>
            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default PostModal;
