import {useContext, useState} from 'react';
// import dynamic from 'next/dynamic'
import  { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import MainContext from '../../context/MainContext';
import style from '../../styles/SearchMenu.module.css'



function MenuBar() {
  const [selected, setSelected] = useState([]);
  const [position, setPosition] = useState(0);
  const {exploreData, category, filterPostByCategory, searchData} = useContext(MainContext);

  const isItemSelected = (id) => !!selected.find((el) => el === id);
  const handleClick = (id) => ({ getItemById, scrollToItem }) => {
    const itemSelected = isItemSelected(id)
    if (itemSelected) searchData();
    else filterPostByCategory(id);
    setSelected((currentSelected) =>
      itemSelected
        ? currentSelected.filter((el) => el !== id)
        : currentSelected.concat(id)
    );
  }

  return (
    <div className={style.menuContainer}>
        <ScrollMenu >
          {category.map((item) => (
            <Card
              itemId={item} // NOTE: itemId is required for track items
              title={item}
              key={item}
              onClick={handleClick(item)}
              selected={isItemSelected(item)}
            />)
          )}
        </ScrollMenu>
        </div>
  );
}

function Card({
  onClick,
  selected,
  title,
  itemId
}) {
  const visibility = useContext(VisibilityContext)

  return (
    <div className={style.menuBar} onClick={() => onClick(visibility)} tabIndex={0}>
      <p>{title}</p>
    </div>
  );
}

export default MenuBar;
