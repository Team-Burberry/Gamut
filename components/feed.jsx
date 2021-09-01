import styles from '../styles/Feed.module.css';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Carousel from 'react-elastic-carousel';
import Image from 'next/image'
import logo from '../public/Gamut_logo_small.png'
import firebase from '../firebase.js'
import { getAuth} from "firebase/auth";
import NavBar from './navbar/Nav.jsx';
import MainContext from "../context/MainContext";

export default function Feed() {
  const { exploreData } = useContext(MainContext);
  const [votes, setVotes] = useState(0);

console.log(exploreData)
  const checkLoginStatus = () => {
    const auth = getAuth();
    if(auth.currentUser !== null) {
    }
  };

  return (
    <>
    <div className={styles.cardContainer}>
    <Carousel verticalMode itemsToShow={1} showArrows={false} onChange={(currentItem, pageIndex) =>
    console.log(pageIndex)}>
      {exploreData.map((post,index) =>
        <div className={styles.card} key={index}>
          <div className={styles.feedContainer}>
            <span className={styles.username}>{post.username}</span>
            <span className={styles.date}>{Date(post.date)}</span>
            <span className={styles.category}>{post.category}</span>
          </div>
          <div className={styles.post}>
            <p className={styles.topic}>{post.title}</p>
            <p className={styles.text}>{post.body}</p>
            <div className={styles.logo}>
            <Image src={logo} alt='logo'/>
            <span className={styles.interactions}>{post.interactions}</span>
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.sliderLeft}>-100</div>
            <input className={styles.slider} type='range' min='-100' max='100' value={votes} steps='1'
            onChange={(e)=>{setVotes(e.target.value);}}></input>
            <div className={styles.sliderRight}>100</div>
          </div>
        </div> )}
    </Carousel>
    <NavBar />
    </div>

  </>
  )
}