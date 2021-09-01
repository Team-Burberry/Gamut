import MainContext from '../context/MainContext.js'
import { useState, useContext } from 'react';
import Nav from '../components/navbar/Nav.jsx';
import { FormControl, FormLabel, Textarea, Input, Select, Button } from "@chakra-ui/react";
import Confirm from '../components/new-post/Confirm.jsx';

const NewPost = () => {

  const [cat, setCat] = useState(null);
  const handleCat = (e) => {
    setCat(e.target.value);
    console.log(e.target.value);
  };
  const [top, setTop] = useState(null);
  const handleTop = (e) => {
    setTop(e.target.value);
    console.log(e.target.value);
  };
  const [txt, setTxt] = useState(null);
  const handleTxt = (e) => {
    setTxt(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = () => {
    event.preventDefault();
    console.log('hi ', cat, top, txt);
  }

  const info = {
    email: '',
    category: cat || '',
    body: txt || '',
    title: top || ''
  }
  // const { handleSubmit } = useContext(MainContext);
  const allcat = ['Sports', 'Food', 'Politics', 'Arts & Crafts', 'Film & TV', 'Video Games', 'Fashion', 'Technology', 'Travel', 'Automotive', 'Celebrity', 'Music', 'Science & Nature', 'Religion'];

  return (
    <>
      <h1 className="newP">
        Welcome to New Post Page.
      </h1>
      <form>
        <Select placeholder="Select your category" onChange={handleCat}>
          {allcat.map((item) => {
            return (
              <option value={item}>{item}</option>
            )
          })}
        </Select>
        <br></br>
        <FormControl>
          <Input onChange={handleTop} placeholder="Topic" />
        </FormControl>
        <br></br>
        <FormControl>
          <FormLabel>Feel Free to Share Your Thoughts</FormLabel>
          <Textarea onChange={handleTxt} placeholder="Please feel free to share your ideas!" />
        </FormControl>
        <br></br>
        {/* <Button colorScheme="red" onClick={handleSubmit}>Post</Button> */}
        <Confirm colorScheme="red" handleSubmit={handleSubmit} />
      </form>
      <Nav />
    </>
  )
}


export default NewPost;