import Edit from '../components/profile/Edit.jsx';
import Nav from '../components/navbar/Nav.jsx';
import Head from 'next/head';
import axios from 'axios';
import { useState, useEffect } from 'react';
import moment from 'moment';


const Profile = () => {

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
      <>
        <Head>
          <title>Create New Post</title>
        </Head>
        <h1>Profile</h1>
        <div>
          <img className="profile-img" src={dummy.img} />
          <div>
            <div>{userInfo.username}</div>
            <div>{formatted}</div>
            <div>{userInfo.gender}</div>
            <div>{userInfo.city}, {userInfo.state}</div>
          </div>
        </div>
        <Edit userInfo={userInfo}/>
        {/* <div>Bio</div> */}
        <Nav />
      </>
    )
  } else {
    return (
      <>
      </>
    )
  }
}

export default Profile;