import {createContext} from 'react';

const MainContext = createContext({
  exploreData: [],
  searchData: () => {},
  filterPostByCategory: () => {},
  category: [],
  filterData: [],
  user: null
})

export default MainContext;
