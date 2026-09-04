import Header from '../components/Header';
import PostPreview from '../components/PostPreview';

const dummyPosts = [
  {
    id: 1,
    username: 'quicksand_man',
    image: 'https://via.placeholder.com/300',
    description: 'the claw machine finally let me win something',
    hashtags: ['mojolo', 'realising'],
  },
  {
    id: 2,
    username: 'evans_jpeg',
    image: 'https://via.placeholder.com/300',
    description: 'definitely not poisoned cake, i promise',
    hashtags: ['thisandthat'],
  },
];

function Home() {
  return (
    <div>
      <Header />
      <h1>Home</h1>
      {dummyPosts.map((post) => (
        <PostPreview key={post.id} {...post} />
      ))}
    </div>
  );
}
export default Home;