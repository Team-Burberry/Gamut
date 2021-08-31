import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card'

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
  const swiped = (direction) => {
    if (direction === 'up' && index === db.length - 1) { return; }
    if (direction === 'down' && index === 0) { return; }
    direction === 'up' ? setIndex(index + 1) : setIndex(index - 1);
  };

  return (
    <>
    <div className={styles.cardContainer}>
      {data.map((card) =>
        <TinderCard className={styles.swipe} key={card.name} flickOnSwipe={false} preventSwipe={['left', 'right']} onSwipe={(dir) => swiped(dir)}>
          <div className={styles.card}>
            <div className={styles.feedContainer}>
            <span className={styles.username}>{card.name}</span>
            <span className={styles.date}>{card.date}</span>
            </div>
            <div className={styles.post}>
              <span className={styles.category}>{card.category}</span>
              <p className={styles.text}>{card.text}</p>
            </div>
          </div>
        </TinderCard>
      )}
    </div>
  </>
  )
}