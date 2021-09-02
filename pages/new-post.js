import MainContext from '../context/MainContext.js'
import { useState, useContext } from 'react';
import Nav from '../components/navbar/Nav.jsx';
import { FormControl, FormLabel, Textarea, Input, Select, Button, Heading } from "@chakra-ui/react";
import Confirm from '../components/new-post/Confirm.jsx';
import Head from 'next/head';
import axios from 'axios';


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

  const info = {
    category: cat || '',
    email: 'pillsbury.doughboy@gmail.com',
    body: txt || '',
    title: top || ''
  };

  const handleSubmit = () => {
    event.preventDefault();
    // console.log(info);
    axios.post('/api/createPost', info)
  }


  // const { handleSubmit } = useContext(MainContext);
  const allcat = ['Sports', 'Food', 'Politics', 'Art', 'Film & TV', 'Games', 'Fashion', 'Technology', 'Travel', 'Automotive', 'Celebrity', 'Music', 'Science', 'Religion'];

  return (
    <div className="new-post-wrapper">
      <Head>
        <title>Create New Post</title>
      </Head>
      <Heading className="post-title" mb={5} as='h1' size="xl">New Post</Heading>
      <Confirm colorScheme="red" done={(!top || !cat || !txt ? false: true)} handleSubmit={handleSubmit} />
      <form className="new-post-form">
        <FormControl isRequired>
          <FormLabel>Topic</FormLabel>
          <Input onChange={handleTop} placeholder="Topic" />
        </FormControl>
        <br></br>
        <FormControl isRequired>
          <FormLabel>Share your idea here</FormLabel>
          <Textarea onChange={handleTxt} placeholder="Please feel free to share your ideas!" />
        </FormControl>
        <br></br>
        <FormControl isRequired>
          <FormLabel>Category</FormLabel>
          <Select placeholder="Select your category" onChange={handleCat} isRequired>
            {allcat.map((item,index) => {
              return (
                <option key={index} value={item}>{item}</option>
              )
            })}
          </Select>
        </FormControl>
        <br></br>
      </form>
      <Nav />
    </div>
  )
}


export default NewPost;