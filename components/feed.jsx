import styles from '../styles/Feed.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from 'react-elastic-carousel';
import Image from 'next/image'
import logo from '../public/logo.png'
import firebase from '../firebase.js'
import { getAuth} from "firebase/auth";
import NavBar from './navbar/Nav.jsx'

export default function Feed() {
  const [data, setData] = useState([]);
  const [votes, setVotes] = useState(0);


  const checkLoginStatus = () => {
    const auth = getAuth();
    if(auth.currentUser !== null) {
    }
  };

  useEffect(()=>{
    checkLoginStatus();
    axios.get('http://localhost:3000/api/getPosts')
         .then(res => {
           setData(res.data)
         })
         .catch(err => console.log(err))
  }, [])

  return (
    <>
    <div className={styles.cardContainer}>
    <Carousel verticalMode itemsToShow={1} showArrows={false} onChange={(currentItem, pageIndex) =>
    console.log(pageIndex)}>
      {data.map((post,index) =>
        <div className={styles.card} key={index}>
          <div className={styles.feedContainer}>
            <span className={styles.username}>{post.user}</span>
            <span className={styles.date}>Date</span>
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