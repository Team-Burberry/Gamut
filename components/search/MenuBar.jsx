import {useContext, useState} from 'react'
// import dynamic from 'next/dynamic'
import  { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import MainContext from '../../context/MainContext';




function MenuBar() {

  const [selected, setSelected] = useState([]);
  const [position, setPosition] = useState(0);
  const {exploreData} = useContext(MainContext);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick = (id) => ({ getItemById, scrollToItem }) => {
    const itemSelected = isItemSelected(id)

    setSelected((currentSelected) =>
      itemSelected
        ? currentSelected.filter((el) => el !== id)
        : currentSelected.concat(id)
    );
  }

  return (
        <ScrollMenu >
          {exploreData.map(({ id, title }) => (
            <Card
              itemId={id} // NOTE: itemId is required for track items
              title={title}
              key={id}
              onClick={handleClick(id)}
              selected={isItemSelected(id)}
            />)
          )}

        </ScrollMenu>
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
    <div
      onClick={() => onClick(visibility)}
      style={{
        padding: "15px",
        backgroundColor: 'gray',
        margin: '5px',
        minWidth: '70px'
      }}
      tabIndex={0}
    >
    <p>{title}</p>

    </div>
  );
}

export default MenuBar;