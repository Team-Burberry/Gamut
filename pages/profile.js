import Edit from '../components/profile/Edit.jsx';
import Nav from '../components/navbar/Nav.jsx';
import Head from 'next/head';


const Profile = () => {

  let dummy = {
    id: 10010,
    name: "Bob Dylan",
    img: 'https://st2.depositphotos.com/1104517/11965/v/600/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg',
    bio: 'I am the goat!'
  }
  return (
    <>
      <Head>
        <title>Create New Post</title>
      </Head>
      <h1>Profile</h1>
      <div>
        <img className="profile-img" src={dummy.img} />
        <div>
          <div>Profile Name</div>
          <div>21</div>
        </div>
      </div>
      <Edit />
      <div>Bio</div>
      <Nav />
    </>
  )
}

export default Profile;