import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import ProfilePreview from '../components/ProfilePreview';
import Friend from '../components/Friend';

function Profile() {
  const { id } = useParams();

  const dummyFriends = [
    { username: 'quicksand_man', profileImage: 'https://via.placeholder.com/80' },
    { username: 'amber_debeers', profileImage: 'https://via.placeholder.com/80' },
  ];

  return (
    <div>
      <Header />
      <h1>Profile page for user {id}</h1>
      <ProfilePreview
        username="evans_jpeg"
        profileImage="https://placehold.co/300"
        bio="pixel artist, nostalgia core"
      />
      <h3>Friends</h3>
      {dummyFriends.map((friend) => (
        <Friend key={friend.username} {...friend} />
      ))}
    </div>
  );
}
export default Profile;