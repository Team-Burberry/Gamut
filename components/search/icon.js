import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faMusic,
  faPrayingHands,
  faPizzaSlice,
  faShoppingBag,
  faGamepad,
  faMicroscope,
  faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import style from "../../styles/SearchPost.module.css";

export const categoryIcon = (category) => {
  let icon;
  let bg;
  switch (category) {
    case "Science":
      bg = <div className={`${style.cardBg} ${style.Science}`}></div>;
      icon = <FontAwesomeIcon icon={faMicroscope} className={style.title} />;
      break;

    case "Celebrity":
      bg = <div className={`${style.cardBg} ${style.Celebrity}`}></div>;
      icon = <i className={`fa fa-camera-retro ${style.title}`} />;
      break;
    case "Technology":
      bg = <div className={`${style.cardBg} ${style.Technology}`}></div>;
      icon = <i className={`fa fa-laptop ${style.title}`} />;
      break;
    case "Fashion":
      bg = <div className={`${style.cardBg} ${style.Fashion}`}></div>;
      icon = <FontAwesomeIcon icon={faShoppingBag} className={style.title} />;
      break;
    case "Art":
      bg = <div className={`${style.cardBg} ${style.Art}`}></div>;
      icon = <FontAwesomeIcon icon={faPaintBrush} className={style.title} />;
      break;
    case "Games":
      bg = <div className={`${style.cardBg} ${style.Games}`}></div>;
      icon = <FontAwesomeIcon icon={faGamepad} className={style.title} />;
      break;
    case "Sports":
      bg = <div className={`${style.cardBg} ${style.Sports}`}></div>;
      icon = <i className={`fa fa-futbol-o ${style.title}`} />;
      break;
    case "Food":
      bg = <div className={`${style.cardBg} ${style.Food}`}></div>;
      icon = <i className={`fa fa-cutlery ${style.title}`} />;
      break;
    case "Politics":
      bg = <div className={`${style.cardBg} ${style.Politics}`}></div>;
      icon = <i className={`fa fa-balance-scale ${style.title}`} />;
      break;
    case "Travel":
      bg = <div className={`${style.cardBg} ${style.Travel}`}></div>;
      icon = <i className={`fa fa-plane ${style.title}`} />;
      break;
    case "Religion":
      bg = <div className={`${style.cardBg} ${style.Religion}`}></div>;
      icon = <FontAwesomeIcon icon={faPrayingHands} className={style.title} />;
      break;
    case "Music":
      bg = <div className={`${style.cardBg} ${style.Music}`}></div>;
      icon = <FontAwesomeIcon icon={faMusic} className={style.title} />;
      break;
  }
  return icon;
};
