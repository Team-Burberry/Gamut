import { Box, Flex, Text, Spacer, Grid, HStack } from "@chakra-ui/react";
import { useContext, useState } from "react";
import style from "../../styles/SearchPost.module.css";
import MainContext from "../../context/MainContext";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faMusic, faPrayingHands, faPizzaSlice, faShoppingBag, faGamepad, faMicroscope, faPaintBrush } from '@fortawesome/free-solid-svg-icons';

const SearchPost = () => {
  const { exploreData, filterData } = useContext(MainContext);
  const router = useRouter();

  return (
    <div className={`${style.bigContainer}`}>
      <p className={style.text}>Trending</p>

      {filterData.sort((a, b) => b.interactions - a.interactions).map((item, key) => (
        <div
          onClick={() => router.push(`/feed/${item.id}`)}
          className={`${style.container}`}
          key={key}>

          {item.category === "Science & Nature" && (
            <FontAwesomeIcon icon={faMicroscope} className={style.title}/>
          )}

          {item.category === "Celebrity" && (
            <i className={`fa fa-camera-retro ${style.title}`} />
          )}

          {item.category === "Technology" && (
            <i className={`fa fa-laptop ${style.title}`} />
          )}

          {item.category === "Fashion" && (
             <FontAwesomeIcon icon={faShoppingBag} className={style.title}/>
          )}

          {item.category === "Arts & Crafts" && (
           <FontAwesomeIcon icon={faPaintBrush} className={style.title}/>
          )}

          {item.category === "Video Games" && (
             <FontAwesomeIcon icon={faGamepad} className={style.title}/>
          )}

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
    </div>
  );
};

export default SearchPost;
