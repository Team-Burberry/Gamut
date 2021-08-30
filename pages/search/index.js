import SearchBar from '../../components/search/SearchBar';
import dynamic from 'next/dynamic';
const MenuBar = dynamic(() => import('../../components/search/MenuBar'), {
  ssr: false
});
import SearchPost from '../../components/search/SearchPost';
import Nav from '../../components/navbar/Nav';

const Search = () => {


  return (
    <>
    <SearchBar/>
    <MenuBar/>
    <SearchPost/>
    <Nav/>
    </>
  )
}
export default Search