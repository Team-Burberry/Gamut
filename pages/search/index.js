import SearchBar from '../../components/search/SearchBar';
import dynamic from 'next/dynamic';
import axios from 'axios';
import {motion} from 'framer-motion';

const MenuBar = dynamic(() => import('../../components/search/MenuBar'), {
  ssr: false
});
import SearchPost from '../../components/search/SearchPost';
import Nav from '../../components/navbar/Nav';

const Search = () => {
  return (
    <motion.div
      exit = {{ opacity: 0 }}
      initial = {{ opacity: 0 }}
      animate = {{ opacity: 1 }}
      >
      <div style={{position: 'sticky', top: '0', backgroundColor: 'white'}}>
        <SearchBar/>
        <MenuBar/>
      </div>
      <SearchPost/>
      <Nav/>
    </motion.div>
  )
}
export default Search;
