import React from 'react';
import style from '../../styles/Slider.module.css';

const Slider = () => {

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

  return (
    <div className={style.sliderContainer}>
      <i className={`fas fa-snowflake ${style.flake}`}></i>
      <div className={style.rangeWrap}>
        <input type="range" className={style.range} min="-100" max="100"></input>
        <output className={style.bubble}></output>
      </div>
      <i className={`fas fa-fire ${style.fire}`}></i>
    </div>
  )
}

export default Slider;