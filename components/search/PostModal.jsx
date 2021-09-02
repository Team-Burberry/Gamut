import {
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,
  Input, Button, useDisclosure, FormControl, FormLabel, Textarea, Lorem
} from "@chakra-ui/react";
import Link from "next/link";
import MainContext from "../../context/MainContext";
import { useContext, useState } from "react";
import styles from '../../styles/PostModal.module.css';
import axios from 'axios';
import useAuth from '../../firebase';


const PostModal = ({isOpen, onClose, post}) =>  {
  // const { exploreData, filterData } = useContext(MainContext);
  const [votes, setVotes] = useState(0);
  const user = useAuth();

  const handleSwipe = () => {
      axios
        .post(`http://localhost:3000/api/updateInteraction`, {email: user.email, postId: post.id, interaction: votes})
        .then((res) => {
          res.send('Success')
        })
        .catch((err) => console.log(err));
  };

  const handleClose = () => {
    handleSwipe();
    onClose()
  }

  return (
    <>
    {post &&
      <Modal className={styles.modal} m={5} onClose={() => handleClose()} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Feed</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <div className={styles.card}>
          <div className={styles.feedContainer}>
            <span className={styles.username}>{post.username}</span>
            <span className={styles.date}>{(new Date(post.date)).toLocaleDateString('en-US')}</span>
            <span className={styles.category}>{post.category}</span>
          </div>
          <div className={styles.post}>
            <p className={styles.topic}>{post.title}</p>
            <p className={styles.text}>{post.body}</p>
            <div className={styles.logo}>
            <img src='logo.png' alt='logo'/>
            <span className={styles.interactions}>{post.interactions}</span>
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.sliderLeft}>-100</div>
            <input className={styles.slider} type='range' min='-100' max='100' value={votes} steps='1'
            onChange={(e)=>{setVotes(e.target.value);}}></input>
            <div className={styles.sliderRight}>100</div>
          </div>
        </div>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
  }
    </>
  )
}

export default PostModal;
