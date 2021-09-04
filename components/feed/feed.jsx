import styles from '../../styles/Feed.module.css';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Carousel from 'react-elastic-carousel';
import Image from 'next/image';
import logo from '../../public/Gamut_logo_small.png';
import useAuth from '../../firebase.js';
import NavBar from '../navbar/Nav.jsx';
import MainContext from "../../context/MainContext";
import Lottie from './lottie.js';
import confetti from './sliderEffect.json';
import dislike from './dislike.json';
import { categoryIcon } from '../search/icon.js';
import { Heading } from "@chakra-ui/react";
import Slider from "../slider/slider";


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
        .then((res)=>{
          console.log('success')
        })
        .catch((err) => console.log(err));
    }
    setVotes(0);
  };

  return (
    <>
    <div className={styles.cardContainer}>
      <Heading as='h1' size="xl" className={styles.heading}>Home</Heading>
    <Carousel verticalMode itemsToShow={1} showArrows={false} pagination={false} onChange={(currentItem, pageIndex) =>
    handleSwipe(pageIndex)}>
      {posts.map((post,index) =>
       <div className={styles.page} key={index}>
       <p className={styles.topic}>{post.title}</p>
       <div className={styles.post}>
         <p className={styles.text}>{post.body}</p>
         <div className={styles.footer}>
           <span className={styles.category}>
             {categoryIcon(post.category)}
           </span>
           <div className={styles.logo}>
             <Image src={logo} alt='logo' />
             <p className={styles.interactions}>{post.interactions}</p>
           </div>
           <div className={styles.effectInPost}>
            {votes < -99 ? <Lottie lotti={dislike} height={200} width={200} speed={0.5}/> : null}
            {votes > 99 ? <Lottie lotti={confetti} height={200} width={300} speed={0.5}/> : null}
           </div>
         </div>
       </div>
       <div className={styles.feedContainer}>
         <span className={styles.username}>{post.username}</span>
         <span className={styles.date}>
           {new Date(post.date).toLocaleDateString('en-US')}
         </span>
       </div>

       <div className={styles.field}>
       <Slider setVotes={setVotes} votes={votes} />
       </div>
     </div>
     )}
    </Carousel>
    <NavBar />
    </div>
  </>
  )
}
