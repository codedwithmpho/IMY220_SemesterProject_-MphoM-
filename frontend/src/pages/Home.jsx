import Header from '../components/Header';
import PostPreview from '../components/PostPreview';

//=====================================
//Dummy data
const dummyPosts = [
  {
    id: 1,
    username: 'quicksand_man',
    image: 'https://placehold.co/300',
    description: 'the claw machine finally let me win something',
    hashtags: ['mojolo', 'realising'],
  },
  {
    id: 2,
    username: 'evans_jpeg',
    image: 'https://placehold.co/300',
    description: 'definitely not poisoned cake, i promise',
    hashtags: ['thisandthat'],
  },
];

//=====================================
function Home() {
  return (
    <div>
      <Header /> navigation bar
      <h1>Home</h1>

      {/* loops over dummy posts, show one PostPreview per post. */}
      {dummyPosts.map((post) => (
        <PostPreview key={post.id} {...post} />
      ))}
    </div>
  );
}
export default Home;