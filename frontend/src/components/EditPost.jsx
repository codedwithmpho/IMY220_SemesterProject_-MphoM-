import { useState } from 'react';

function EditPost({ initialDescription, initialHashtags }) {
  const [description, setDescription] = useState(initialDescription);
  const [hashtags, setHashtags] = useState(initialHashtags);

  const isValid = description.trim().length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Post updated:', { description, hashtags });
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
        Save Changes
      </button>
    </form>
  );
}

export default EditPost;