import Edit from '../components/profile/Edit.jsx';
import Nav from '../components/navbar/Nav.jsx';

const Profile = () => {

  let dummy = {
    id: 10010,
    name: "Bob Dylan",
    img: 'https://st2.depositphotos.com/1104517/11965/v/600/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg',
    bio: 'I am the goat!'
  }
  return (
    <>
      <h1>Profile</h1>
      <img className="profile-img" src={dummy.img} />
      <div>Profile Name</div>
      <div>21</div>
      <Edit />
      <div>Bio</div>
      <Nav />
    </>
  )
}

export default Profile;