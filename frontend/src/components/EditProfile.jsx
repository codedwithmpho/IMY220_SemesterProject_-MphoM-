import { useState } from 'react';

function EditProfile({ initialBio, initialUsername }) {
  const [bio, setBio] = useState(initialBio);
  const [username, setUsername] = useState(initialUsername);

  const isValid = username.trim().length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile updated:', { username, bio });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username<br />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Bio<br />
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </label>
      <br />
      <button type="submit" disabled={!isValid}>
        Save
      </button>
    </form>
  );
}

export default EditProfile;