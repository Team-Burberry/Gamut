import { Box, Flex, Text, Spacer, Grid, HStack, useDisclosure } from "@chakra-ui/react";
import { useContext, useState, useEffect } from "react";
import style from "../../styles/SearchPost.module.css";
import MainContext from "../../context/MainContext";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faMusic, faPrayingHands, faPizzaSlice, faShoppingBag, faGamepad, faMicroscope, faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import PostModal from './PostModal';
import MyModal from '../navbar/Modal';
import useAuth from '../../firebase';


const SearchPost = () => {
  const { exploreData, filterData } = useContext(MainContext);
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen:logInIsOpen, onOpen: logInOnOpen, onClose: logInOnClose } = useDisclosure();

  const [selectedPost, setSelectedPost] = useState()
  const user = useAuth();

  const handleOpenModal = (item) => {
    if(user) setSelectedPost(item);
    else logInOnOpen();
  };

  useEffect(() => {
    if(selectedPost) onOpen()
  }, [selectedPost]);

  return (
    <div className={`${style.bigContainer}`}>
      <p className={style.text}>Trending</p>
      <MyModal isOpen={logInIsOpen} onClose={logInOnClose}/>
    <PostModal isOpen={isOpen} onClose={onClose} post={selectedPost}/>
      {filterData.sort((a, b) => b.interactions - a.interactions).map((item, key) => (
        <div onClick={()=> handleOpenModal(item)}

          className={`${style.container}`}
          key={key}>
            <div className={style.cardInfo}>

          {item.category === "Science & Nature" && (
            <>
              <div className={`${style.cardBg} ${style.science}`}></div>
              <FontAwesomeIcon icon={faMicroscope} className={style.title}/>
            </>
          )}

          {item.category === "Celebrity" && (
            <>
              <div className={`${style.cardBg} ${style.celebrity}`}></div>
              <i className={`fa fa-camera-retro ${style.title}`} />
            </>
          )}

          {item.category === "Technology" && (
            <>
              <div className={`${style.cardBg} ${style.technology}`}></div>
              <i className={`fa fa-laptop ${style.title}`} />
            </>
          )}

          {item.category === "Fashion" && (
            <>
              <div className={`${style.cardBg} ${style.fashion}`}></div>
              <FontAwesomeIcon icon={faShoppingBag} className={style.title}/>
            </>
          )}

          {item.category === "Arts & Crafts" && (
            <>
              <div className={`${style.cardBg} ${style.arts}`}></div>
            <FontAwesomeIcon icon={faPaintBrush} className={style.title}/>
            </>
          )}

          {item.category === "Video Games" && (
            <>
              <div className={`${style.cardBg} ${style.game}`}></div>
              <FontAwesomeIcon icon={faGamepad} className={style.title}/>
            </>
          )}

          {item.category === "Sports" && (
            <>
            <div className={`${style.cardBg} ${style.sport}`}></div>
            <i className={`fa fa-futbol-o ${style.title}`} />
            </>
          )}

          {item.category === "Food" && (
            <>
              <div className={`${style.cardBg} ${style.food}`}></div>
              <i className={`fa fa-cutlery ${style.title}`} />
            </>

          )}
          {item.category === "Politics" && (
            <>
              <div className={`${style.cardBg} ${style.politics}`}></div>
              <i className={`fa fa-balance-scale ${style.title}`} />
            </>
          )}
           {item.category === "Travel" && (
             <>
              <div className={`${style.cardBg} ${style.travel}`}></div>
              <i className={`fa fa-plane ${style.title}`} />
             </>
          )}
           {item.category === "Religion" && (
             <>
              <div className={`${style.cardBg} ${style.religion}`}></div>
              <FontAwesomeIcon icon={faPrayingHands} className={style.title}/>
             </>
          )}
           {item.category === "Music" && (
             <>
              <div className={`${style.cardBg} ${style.music}`}></div>
              <FontAwesomeIcon icon={faMusic} className={style.title}/>
             </>

          )}
           <div className={style.interaction}>
            <img src="logo.png" alt='gamut logo'/>
            <p>{item.interactions}</p>
          </div>
          </div>
          <h2>{item.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default SearchPost;
