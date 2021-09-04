import React from "react";
import style from "../../styles/Slider.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSnowflake, faFire } from "@fortawesome/free-solid-svg-icons";
const Slider = ({ setVotes, votes }) => {
  const allRanges = document.querySelectorAll(".range-wrap");
  allRanges.forEach((wrap) => {
    const range = wrap.querySelector(".range");
    const bubble = wrap.querySelector(".bubble");

    range.addEventListener("input", () => {
      setBubble(range, bubble);
    });
    setBubble(range, bubble);
  });

  function setBubble(range, bubble) {
    const val = range.value;
    const min = range.min ? range.min : -100;
    const max = range.max ? range.max : 100;
    const newVal = Number(((val - min) * 100) / (max - min));
    bubble.innerHTML = val;

    bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.12}px))`;
  }

  const handleVote = (e) => {
    setVotes(e.target.value);
  };

  return (
    <div className={style.sliderContainer}>
      <FontAwesomeIcon
        icon={faSnowflake}
        className={votes < -99 ? style.blueSnow : style.flake}
      />
      <div className={style.rangeWrap}>
        <input
          onChange={(e) => handleVote(e)}
          type="range"
          value={votes}
          className={style.range}
          min="-100"
          max="100"
        ></input>
        <p className={style.bubble}>{votes}</p>
      </div>
      <FontAwesomeIcon
        icon={faFire}
        className={votes > 99 ? style.orangeFire : style.fire}
      />
    </div>
  );
};

export default Slider;
