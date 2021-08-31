import { Box, Flex, Text, Spacer, Grid, HStack } from "@chakra-ui/react";
import { useContext, useState } from "react";
import style from "../../styles/SearchPost.module.css";
import MainContext from "../../context/MainContext";

const SearchPost = () => {
  const { exploreData, post, setPost} = useContext(MainContext);



  return (
    <div className={`${style.bigContainer}`}>
      <p>Trending</p>

        {exploreData.map((item, key) => (
          <div  className={`${style.container}`} key={key}>
            {
              (item.category = "sports" ? (
                <i
                  className={`fa fa-futbol-o ${style.title}`}
                  aria-hidden="true"
                ></i>
              ) : null)
            }
            <h2>{item.title}</h2>
          <p>{item.intraction}</p>
          </div>
        ))}



     {/* <button onClick={() => setPost(post + 1)}>Load More</button> */}

    </div>
  );
};

export default SearchPost;
