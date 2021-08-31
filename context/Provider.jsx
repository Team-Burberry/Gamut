import MainContext from './MainContext';
import {useState} from 'react'

//dummy data
const dummyData = [
  {
    id: 1,
    user: 34,
    category: 'sports',
    title: 'testing',
    intraction: 4

  },
  {
    id: 1,
    user: 34,
    category: 'sports',
    title: 'music',
    intraction: 4

  }
  ,
  {
    id: 1,
    user: 34,
    category: 'sports',
    title: 'food',
    intraction: 4

  }
  ,
  {
    id: 1,
    user: 34,
    category: 'sports',
    title: 'religion',
    intraction: 4

  }
  ,
  {
    id: 1,
    user: 34,
    category: 'sports',
    title: 'food',
    intraction: 4

  }
  ,
  {
    id: 1,
    user: 34,
    category: 'sports',
    title: 'politics',
    intraction: 4

  },
  {
    id: 1,
    user: 34,
    category: 'sports',
    title: 'food',
    intraction: 4

  }
  ,
  {
    id: 1,
    user: 34,
    category: 'sports',
    title: 'politics',
    intraction: 4

  }
]
const Provider = ({children})=>{
  //this is for when the page loads for the trending result
  const [exploreData, setExploreData] = useState(dummyData);



  const handleSearch = async(category) => {
    //find the query
    const {data} = await axios.get('api/getPost')
    //setExploreData(data)
  }
  return (
    <MainContext.Provider value={{exploreData}}>
      {children}
    </MainContext.Provider>
  )
}

export default Provider

