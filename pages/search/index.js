import SearchBar from "../../components/search/SearchBar";
import axios from "axios";
import dynamic from 'next/dynamic';
import Nav from "../../components/navbar/Nav";
import SearchPost from '../../components/search/SearchPost'
const MenuBar = dynamic(() => import('../../components/search/MenuBar'), {
  ssr: false

});

const Search = () => {
  return (
    <>
      <div
        style={{
          position: "sticky",
          top: "0",
          backgroundColor: "#1E3D59",
          zIndex: "3",
        }}
      >
        <SearchBar />
        <MenuBar />
      </div>
      <SearchPost />
      <Nav />
    </>
  );
};
export default Search;
