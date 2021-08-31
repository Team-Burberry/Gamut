import styles from '../styles/Feed.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from 'react-elastic-carousel';
// import firebase from '../../firebase.js'
// import { getAuth} from "firebase/auth";

const db = [
  {
    name: 'Richard Hendricks',
    text: 'How is it going',
    date: '08-30-2021',
    category: 'Category'
  },
  {
    name: 'Toni Fribourg',
    text: 'Sooooo busy',
    date: '08-30-2021',
    category: 'Category'
  },
  {
    name: 'Monica Hall',
    text: 'I want to get this done asap',
    date: '08-30-2021',
    category: 'Category'
  }
];

export default function Feed() {
  const [data, setData] = useState([]);
  const [votes, setVotes] = useState(0);

  const checkLoginStatus = () => {
    // const auth = getAuth();
    // if(auth.currentUser === null) {

    // }
  };

  useEffect(()=>{
    checkLoginStatus();
  }, [])

  return (
    <>
    <div className={styles.cardContainer}>
    <Carousel verticalMode itemsToShow={1} onChange={(currentItem, pageIndex) =>
    console.log(pageIndex)}>
      {db.map((card,index) =>
        <div className={styles.card} key={index}>
          <div className={styles.feedContainer}>
            <span className={styles.username}>{card.name}</span>
            <span className={styles.date}>{card.date}</span>
            <span className={styles.category}>{card.category}</span>
          </div>
          <div className={styles.post}>
            <p className={styles.topic}>topic</p>
            <p className={styles.text}>{card.text}</p>
          </div>

          {/* <div className={styles.middle}>
            <div className={styles.sliderMiddle}>0</div>
          </div> */}
          <div className={styles.field}>
            <div className={styles.sliderLeft}>-100</div>
            <input className={styles.slider} type='range' min='-100' max='100' value={votes} steps='1'
            onChange={(e)=>{setVotes(e.target.value);console.log(votes)}}></input>
            <div className={styles.sliderRight}>100</div>
          </div>

        </div> )}
    </Carousel>
    </div>
  </>
  )
}