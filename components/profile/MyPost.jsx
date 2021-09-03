import { Box, Flex, Text, Spacer, Grid, HStack, useDisclosure } from "@chakra-ui/react";
import { useContext, useState, useEffect } from "react";
import style from "../../styles/SearchPost.module.css";
import MainContext from "../../context/MainContext";
// import { useRouter } from "next/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faMusic, faPrayingHands, faPizzaSlice, faShoppingBag, faGamepad, faMicroscope, faPaintBrush } from '@fortawesome/free-solid-svg-icons';
// import PostModal from './PostModal';
// import MyModal from '../navbar/Modal';
import useAuth from '../../firebase';
import axios from 'axios';


const MyPost = () => {
  // const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: logInIsOpen, onOpen: logInOnOpen, onClose: logInOnClose } = useDisclosure();
  const { exploreData, filterData } = useContext(MainContext);
  const [selectedPost, setSelectedPost] = useState(null)
  const user = useAuth();

  const handleOpenModal = (item) => {
    if (user) setSelectedPost(item);
    else logInOnOpen();
  };

  const [currentPost, setCurrentPost] = useState(null);
  const retrievePost = async (user) => {
    let { data } = await axios.get('/api/getMyPosts', { params: { email: user } })
    setCurrentPost(data);
  }

  useEffect(() => {
    if (selectedPost) onOpen()
  }, [selectedPost]);

  useEffect(() => {
    if (user) {
      retrievePost(user)
    }
  }, [user])


  if (currentPost) {
    return (
      <div className="mypost-wrapper">
        <div className={`${style.bigContainer}`}>
          <p className={style.text}>My Post</p>
          {currentPost.sort((a, b) => b.interactions - a.interactions).map((item, key) => (
            <div onClick={() => handleOpenModal(item)}

              className={`${style.container}`}
              key={key}>
              <div className={style.cardInfo}>

                {item.category === "Science" && (
                  <>
                    <div className={`${style.cardBg} ${style.Science}`}></div>
                    <FontAwesomeIcon icon={faMicroscope} className={style.title} />
                  </>
                )}

                {item.category === "Celebrity" && (
                  <>
                    <div className={`${style.cardBg} ${style.Celebrity}`}></div>
                    <i className={`fa fa-camera-retro ${style.title}`} />
                  </>
                )}

                {item.category === "Technology" && (
                  <>
                    <div className={`${style.cardBg} ${style.Technology}`}></div>
                    <i className={`fa fa-laptop ${style.title}`} />
                  </>
                )}

                {item.category === "Fashion" && (
                  <>
                    <div className={`${style.cardBg} ${style.Fashion}`}></div>
                    <FontAwesomeIcon icon={faShoppingBag} className={style.title} />
                  </>
                )}

                {item.category === "Art" && (
                  <>
                    <div className={`${style.cardBg} ${style.Art}`}></div>
                    <FontAwesomeIcon icon={faPaintBrush} className={style.title} />
                  </>
                )}

                {item.category === "Games" && (
                  <>
                    <div className={`${style.cardBg} ${style.Games}`}></div>
                    <FontAwesomeIcon icon={faGamepad} className={style.title} />
                  </>
                )}

                {item.category === "Sports" && (
                  <>
                    <div className={`${style.cardBg} ${style.Sports}`}></div>
                    <i className={`fa fa-futbol-o ${style.title}`} />
                  </>
                )}

                {item.category === "Food" && (
                  <>
                    <div className={`${style.cardBg} ${style.Food}`}></div>
                    <i className={`fa fa-cutlery ${style.title}`} />
                  </>

                )}
                {item.category === "Politics" && (
                  <>
                    <div className={`${style.cardBg} ${style.Politics}`}></div>
                    <i className={`fa fa-balance-scale ${style.title}`} />
                  </>
                )}
                {item.category === "Travel" && (
                  <>
                    <div className={`${style.cardBg} ${style.Travel}`}></div>
                    <i className={`fa fa-plane ${style.title}`} />
                  </>
                )}
                {item.category === "Religion" && (
                  <>
                    <div className={`${style.cardBg} ${style.Religion}`}></div>
                    <FontAwesomeIcon icon={faPrayingHands} className={style.title} />
                  </>
                )}
                {item.category === "Music" && (
                  <>
                    <div className={`${style.cardBg} ${style.Music}`}></div>
                    <FontAwesomeIcon icon={faMusic} className={style.title} />
                  </>

                )}
                <div className={style.interaction}>
                  <img src="logo.png" alt='gamut logo' />
                  <p>{item.interactions}</p>
                </div>
              </div>
              <h2>{item.title}</h2>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="profile-loading">
        Your posts are still being loaded..
      </div>
    )
  }
};

export default MyPost;
