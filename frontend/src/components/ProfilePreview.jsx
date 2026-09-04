function ProfilePreview({ username, profileImage, bio }) {
  return (
    <div className="profile-preview">
      <img src={profileImage} alt={username} />
      <p>{username}</p>
      <p>{bio}</p>
    </div>
  );
}

export default ProfilePreview;