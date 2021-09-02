import styles from '../../styles/Feed.module.css';
import { useState, useEffect, useContext, useReducer } from 'react';
import axios from 'axios';
import Carousel from 'react-elastic-carousel';
import Image from 'next/image';
import logo from '../../public/Gamut_logo_small.png'
import firebase from '../../firebase.js'
import { getAuth } from "firebase/auth";
import NavBar from '../navbar/Nav.jsx';
import MainContext from "../../context/MainContext";
import Lottie from './lottie.js';
import animationDislike from './dislike.json';
import animationConfetti from './sliderEffect.json';

export default function Feed() {
  const { exploreData } = useContext(MainContext);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [votes, setVotes] = useState(0);
  const auth = getAuth();

  useEffect(()=>{
    if(auth.currentUser !== null) {
      axios.get('http://localhost:3000/api/getPosts', {params: {email: auth.currentUser.email}})
            .then((res) => {
              setFilteredPosts(res.data)
          })
            .catch(err => console.log(err))
    }
  },[])

  let posts = filteredPosts.length === 0 ? exploreData : filteredPosts;

  const handleSwipe = (index) => {
    if(auth.currentUser !== null){
      axios
        .post(`http://localhost:3000/api/updateInteraction`, {email: auth.currentUser.email, postId: posts[index].id, interaction: votes})
        .then((res) => {
          console.log('Success')
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
    <div className={styles.cardContainer}>
    <Carousel verticalMode itemsToShow={1} showArrows={false} pagination={false} onChange={(currentItem, pageIndex) =>
    handleSwipe(pageIndex)}>
      {posts.map((post,index) =>
        <div className={styles.card} key={index}>
          <div className={styles.feedContainer}>
            <span className={styles.home}>HOME</span>
            <span className={styles.username}>{post.username}</span>
            <span className={styles.date}>{(new Date(post.date)).toLocaleDateString('en-US')}</span>
          </div>

          <div className={styles.post}>
            <div className={styles.topic}>
            <div className={styles.category}>{post.category}</div>
             {post.title}
            </div>
            <p className={styles.text}>{post.body}</p>
            <div className={styles.logo}>
            <Image src={logo} alt='logo'/>
            <span className={styles.interactions}>{post.interactions}</span>
            </div>
           <div className={styles.effect}>
            {votes < -99 ? <Lottie lotti={animationDislike} height={300} width={300} speed={0.5}/> : null}
            {votes > 99 ? <Lottie lotti={animationConfetti} height={500} width={500} speed={0.5}/> : null}
           </div>
          </div>

          <div className={styles.field}>
            <input className={styles.slider} type='range' min='-100' max='100' value={votes} steps='1'
            onChange={(e)=>{setVotes(e.target.value); }}></input>
          </div>

          {/* <div className={styles.bottom}>
            {votes === 100 ? <Lottie lotti={animationBottom} height={150} width={150}/> : null}
          </div> */}
        </div> )}
    </Carousel>
    <NavBar />
    </div>
  </>
  )
}