import Edit from '../components/profile/Edit.jsx';
import Nav from '../components/navbar/Nav.jsx';
import Head from 'next/head';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import moment from 'moment';
import { Heading } from "@chakra-ui/react";
import useAuth from '../firebase';


const Profile = () => {

  const user = useAuth();
  
  let dummy = {
    id: 10010,
    name: "Bob Dylan",
    img: 'https://st2.depositphotos.com/1104517/11965/v/600/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg',
    bio: 'I am the goat!'
  }

  const [userInfo, setUserinfo] = useState(null);


  useEffect(() => {
    axios.get('/api/getUserInfo', { params: {email: "pillsbury.doughboy@gmail.com" }})
      .then((response) => {
        console.log(response.data);
        setUserinfo(response.data);
      })
      .catch((err) => {
        console.log('fetch err: ', err);
      })
  }, [])

  if (userInfo) {
    var timeStamp = userInfo.birthDate;
    var formatted = moment.unix(timeStamp / 1000).fromNow();
    // var age = moment().diff((moment.unix(userInfo.birthDate).format("MM/DD/YYYY")), 'years');
    console.log(formatted);


    return (
      <div className="profile-wrapper">
        <Head>
          <title>Create New Post</title>
        </Head>
        <Heading className="post-title" mb={5} as='h1' size="xl">Profile</Heading>
        <div>
          <img className="profile-img" src={dummy.img} />
          <div className="profile-info">
            <div className="profile-name">{userInfo.username}</div>
            <div className="profile-date">{formatted}</div>
            <div className="profile-gender">{userInfo.gender}</div>
            <div className="profile-location">{userInfo.city}, {userInfo.state}</div>
          </div>
        </div>
        <Edit userInfo={userInfo}/>
        <Nav />
      </div>
    )
  } else {
    return (
      <>
      </>
    )
  }
}

export default Profile;