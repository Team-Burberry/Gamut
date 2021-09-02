import MainContext from './MainContext';
import {useState, useEffect} from 'react';
import axios from 'axios';

import firebase from '../firebase.js';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Provider = ({children})=>{
  //this is for when the page loads for the trending result
  const [user, setUser] = useState(null);
  const [exploreData, setExploreData] = useState([]);
  const [category, setCategory] = useState([]);
  const [filterData, setFilterData] = useState([])
  const [categoryOptions, setCategoryOptions] = useState({
    'Sports' : 'fa-futbol-o',
    'Food': 'fa fa-cutlery',
    'Politics': 'fa fa-balance-scale',
    'Travel': 'fa fa-plane"',
    'Religion': 'fa fa-book',
    'Music': 'fa fa-music',
    'Science & Nature': 'fa-flask',
    'Celebrity': 'fa fa-camera-retro',
    'Technology': 'fa fa-laptop',
    'Fashion': 'fa-shopping-bag',
    'Arts & Crafts': 'fa-paint-brush',
    'Video Games': 'fa-gamepad',
  })

  const [colorSchema, setColorSchema] = useState({
    'Orange ': '#FF6E40',
    'Light Gray': '#EBEBEB',
    'Dark Gray': ' #484848',
    'Navy Blue': '#1E3D59',
    'White': '#fff',
  })

  const searchData = async() => {
    let {data} = await axios.get('/api/getPosts')
    setExploreData(data)
    setFilterData(data)
    setCategory([...new Set(data.map(item => item.category))])
    // console.log(category)
  }

  useEffect(() => {
    searchData();
  }, [])

  const auth = getAuth();
  useEffect(() => {
    //checks if user is logged in or not
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user.email);
      } else {
        setUser(null);
        alert('Session is terminated');
      }
    });
  }, [])

  const filterPostByCategory = (category) => {
    let copy = [...exploreData];
    copy = copy.filter(item => item.category.includes(category));
    setFilterData(copy);
  }

  return (
    <MainContext.Provider value={{exploreData, searchData, filterPostByCategory, category, filterData, user, setUser}}>
      {children}
    </MainContext.Provider>
  )
}

export default Provider
