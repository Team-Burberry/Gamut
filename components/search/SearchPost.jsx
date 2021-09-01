import { Box, Flex, Text, Spacer, Grid, HStack } from "@chakra-ui/react";
import { useContext, useState } from "react";
import style from "../../styles/SearchPost.module.css";
import MainContext from "../../context/MainContext";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import {faPrayingHands} from '@fortawesome/free-solid-svg-icons';
import {faPizzaSlice} from '@fortawesome/free-solid-svg-icons';

const SearchPost = () => {
  const { exploreData, filterData } = useContext(MainContext);
  const router = useRouter();

  return (
    <div className={`${style.bigContainer}`}>
      <p>Trending</p>

      {filterData.sort((a, b) => b.interactions - a.interactions).map((item, key) => (
        <div
          onClick={() => router.push(`/feed/${item.id}`)}
          className={`${style.container}`}
          key={key}
        >
          {item.category === "Sports" && (
            <i className={`fa fa-futbol-o ${style.title}`} />
          )}

          {item.category === "Food" && (
            <i className={`fa fa-cutlery ${style.title}`} />

          )}
          {item.category === "Politics" && (
            <i className={`fa fa-balance-scale ${style.title}`} />
          )}
           {item.category === "Travel" && (
            <i className={`fa fa-plane ${style.title}`} />
          )}
           {item.category === "Religion" && (
             <FontAwesomeIcon icon={faPrayingHands} className={style.title}/>
          )}
           {item.category === "Music" && (
             <FontAwesomeIcon icon={faMusic} className={style.title}/>

          )}
          <h2>{item.title}</h2>
          <div className={style.interaction}>
            <img src="logo.png" alt='gamut logo'/>
            <p>{item.interactions}</p>
          </div>
        </div>
      ))}
      {/* <button onClick={() => setPost(post + 1)}>Load More</button> */}
    </div>
  );
};

export default SearchPost;
