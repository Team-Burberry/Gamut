import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import axios from 'axios';
import Carousel from 'react-elastic-carousel';

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

export default function Home() {
  const [index, setIndex] = useState(0);
  var data = db.slice(index, index + 1);
  const [sliderValue, setSliderValue] = useState(0);
  const swiped = (direction) => {
    if (direction === 'up' && index === db.length - 1) { return; }
    if (direction === 'down' && index === 0) { return; }
    direction === 'up' ? setIndex(index + 1) : setIndex(index - 1);
  };

  const checkLoginStatus = () => {
    axios.get('', { withCredentials: true })
          .then(res => {

          })
          .catch(err => {

          });
  };

  useEffect(()=>{
    checkLoginStatus();
  }, [])

  return (
    <>
    <div className={styles.cardContainer}>

    <Carousel verticalMode itemsToShow={1}>
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
        </div> )}
    </Carousel>
    </div>
  </>
  )
}

{/* <div className={styles.range}>
<div className={styles.field}>
  <div className={styles.valueLeft}>-1</div>
  <input type='range' min='-1' max='1' value={sliderValue} step='1'
  onChange={(e) => {setSliderValue(e.target.value);console.log(sliderValue)}}></input>
  <div className={styles.valueRight}>1</div>
</div>
</div> */}

        // <TinderCard className={styles.swipe} key={card.name} flickOnSwipe={false} preventSwipe={['left', 'right']} onSwipe={(dir) => swiped(dir)}>
        //   <div className={styles.card}>
        //     <div className={styles.feedContainer}>
        //     <span className={styles.username}>{card.name}</span>
        //     <span className={styles.date}>{card.date}</span>
        //     <span className={styles.category}>{card.category}</span>
        //     </div>
        //     <div className={styles.post}>
        //       <p className={styles.topic}>topic</p>
        //       <p className={styles.text}>{card.text}</p>
        //     </div>
        //   </div>
        // </TinderCard>