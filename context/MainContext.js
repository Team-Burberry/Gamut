import {createContext} from 'react'
const MainContext = createContext({
  exploreData: [],
  searchData: () => {},
  filterPostByCategory: () => {},
  category: [],
  filterData: [],

})

export default MainContext