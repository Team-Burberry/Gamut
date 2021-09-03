import styles from '../../styles/Feed.module.css';
import { useState, useEffect, useContext, useReducer } from 'react';
import axios from 'axios';
import Carousel from 'react-elastic-carousel';
import Image from 'next/image';
import logo from '../../public/Gamut_logo_small.png';
import useAuth from '../../firebase.js';
import NavBar from '../navbar/Nav.jsx';
import MainContext from "../../context/MainContext";
import Lottie from './lottie.js';
import animationDislike from './dislike.json';
import animationConfetti from './sliderEffect.json';
import heart2 from './heart.json';
import moreHearts from './morehearts.json';
import leaf from './leaf.json';

export default function Feed() {
  const { exploreData } = useContext(MainContext);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [votes, setVotes] = useState(0);
  const email = useAuth();

  useEffect(()=>{
    if(email !== null) {
      axios.get(`/api/getPosts`, {params: {email: email}})
            .then((res) => {
              setFilteredPosts(res.data)
          })
            .catch(err => console.log(err))
    }
  },[])

  let posts = filteredPosts.length === 0 ? exploreData : filteredPosts;

  const handleSwipe = (index) => {
    if(email !== null){
      axios
        .post(`/api/updateInteraction`, {email: email, postId: posts[index].id, interaction: votes})
        .then((res) => {
          console.log('Success')
        })
        .catch((err) => console.log(err));
    }
    setVotes(0);
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
            <div className={styles.topicArea}>
            <div className={styles.category}>{post.category}</div>
            <span className={styles.topic}>{post.title}</span>
            </div>
            <p className={styles.text}>{post.body}</p>
            <div className={styles.logo}>
            <Image src={logo} alt='logo'/>
            <span className={styles.interactions}>{post.interactions}</span>
            </div>
           <div className={styles.effectInPost}>
            {votes < -99 ? <Lottie lotti={leaf} height={300} width={300} speed={0.5}/> : null}
            {votes > 99 ? <Lottie lotti={animationConfetti} height={500} width={500} speed={0.5}/> : null}
           </div>
          </div>

          {email !== null ? <div className={styles.field}>
           <div className={styles.like}>
            {votes > 0 && votes <= 20 ? <Lottie lotti={heart2} height={100} width={100} /> : null}
            {votes > 20 && votes <= 40 ? <Lottie lotti={heart2} height={100} width={100} /> : null}
            {votes > 40 && votes <= 60 ? <Lottie lotti={heart2} height={100} width={100} /> : null}
            {votes > 60 && votes <= 80 ? <Lottie lotti={moreHearts} height={100} width={100} /> : null}
            {votes > 80 && votes <= 99 ? <Lottie lotti={moreHearts} height={100} width={100} /> : null}
           </div>
           <div className={styles.dislike}>
            {votes < 0 && votes >= -20 ? <Lottie lotti={animationDislike} height={50} width={50} /> : null}
            {votes < -20 && votes >= -40 ? <Lottie lotti={animationDislike} height={50} width={50} /> : null}
            {votes < -40 && votes >= -60 ? <Lottie lotti={animationDislike} height={50} width={50} /> : null}
            {votes < -60 && votes >= -80 ? <Lottie lotti={animationDislike} height={50} width={50} /> : null}
            {votes < -80 && votes >= -99 ? <Lottie lotti={animationDislike} height={50} width={50} /> : null}
           </div>
            <input id={styles.slider} type='range' min='-100' max='100' value={votes} steps='1'
            onChange={(e)=>{setVotes(e.target.value); }}></input>
          </div> : null}
        </div> )}
    </Carousel>
    <NavBar />
    </div>
  </>
  )
}
