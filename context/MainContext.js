import {createContext} from 'react';

const MainContext = createContext({
  exploreData: [],
  searchData: () => {},
  filterPostByCategory: () => {},
  category: [],
  filterData: [],
  userLogIn: null,
  getAuthUser: () => {}
})

export default MainContext;
