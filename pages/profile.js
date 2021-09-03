import Edit from '../components/profile/Edit.jsx';
import Nav from '../components/navbar/Nav.jsx';
import Head from 'next/head';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import moment from 'moment';
import { Heading } from "@chakra-ui/react";
import useAuth from '../firebase';
import MyPost from '../components/profile/MyPost.jsx';
import LogOut from '../components/logOut/LogOut.jsx';

const Profile = () => {

  const user = useAuth();
  let img = 'https://res.cloudinary.com/de6ct75k5/image/upload/v1630619315/Screen_Shot_2021-09-02_at_2.48.20_PM_wavxfb.png';

  const [userInfo, setUserinfo] = useState(null);


  useEffect(() => {
    if (user) {
      axios.get('/api/getUserInfo', { params: { email: user } })
        .then((response) => {
          setUserinfo(response.data);
        })
        .catch((err) => {
          console.log('fetch err: ', err);
        })
    }
  }, [user])

  if (userInfo) {
    var timeStamp = userInfo.birthDate;
    var formatted = moment.unix(timeStamp / 1000).fromNow();

    return (
      <>
        <div className="profile-wrapper">
          <Head>
            <title>Gamut: Profile Page</title>
          </Head>
          <Heading className="post-title" mb={5} as='h1' size="xl">Profile</Heading>
          <Edit email={user} userInfo={userInfo} />
          <div>
            <img className="profile-img" src={img} />
            <div className="profile-info">
              <div className="profile-name">{userInfo.username}</div>
              <div className="profile-date">{formatted}</div>
              <div className="profile-gender">{userInfo.gender}</div>
              <div className="profile-location">{userInfo.city}, {userInfo.state}</div>
            </div>
            <LogOut />
          </div>
          <MyPost />
        </div>
        <Nav />
      </>
    )
  } else {
    return (
      <h1>
        still loading..
      </h1>
    )
  }
}

export default Profile;