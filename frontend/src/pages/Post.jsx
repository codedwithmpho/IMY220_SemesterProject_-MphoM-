import { useParams } from 'react-router-dom';
import Header from '../components/Header';

function Post() {
  const { id } = useParams();
  return (
    <div>
      <Header />
      <h1>Post page for post {id}</h1>
    </div>
  );
}
export default Post;