import { useState } from 'react';

function CreatePost() {
  const [description, setDescription] = useState('');
  const [hashtags, setHashtags] = useState('');

  const isValid = description.trim().length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Post created:', { description, hashtags });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Description<br />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <br />
      <label>
        Hashtags<br />
        <input
          type="text"
          value={hashtags}
          onChange={(e) => setHashtags(e.target.value)}
        />
      </label>
      <br />
      <button type="submit" disabled={!isValid}>
        Post
      </button>
    </form>
  );
}

export default CreatePost;