import MainContext from './MainContext';
import {useState, useEffect} from 'react'
import axios from 'axios'


const Provider = ({children})=>{
  //this is for when the page loads for the trending result
  const [exploreData, setExploreData] = useState([]);
  const [category, setCategory] = useState([]);
  const [filterData, setFilterData] = useState([])
  const [categoryOptions, setCategoryOptions] = useState({
    'Sports' : 'fa-futbol-o',
    'Food': 'fa fa-cutlery',
    'Politics': 'fa fa-balance-scale',
    'Travel': 'fa fa-plane"',
    'Religion': 'fa fa-book',
    'Music': 'fa fa-music'


  })

  const searchData = async() => {
    const {data} = await axios.get('/api/getPosts')
    setExploreData(data)
    setFilterData(data)
    setCategory([...new Set(data.map(item => item.category))])
    console.log(category)
  }
  useEffect(() => {
    searchData()
  }, [])

  const filterPostByCategory = (category) => {
    let copy = [...exploreData];
    console.log(copy)
    copy = copy.filter(item => item.category.includes(category));
    setFilterData(copy);
  }

  return (
    <MainContext.Provider value={{exploreData, searchData, filterPostByCategory, category, filterData}}>
      {children}
    </MainContext.Provider>
  )
}

export default Provider

