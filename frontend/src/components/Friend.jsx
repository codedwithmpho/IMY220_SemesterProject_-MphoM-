function Friend({ username, profileImage }) {
  return (
    <div className="friend">
      <img src={profileImage} alt={username} />
      <p>{username}</p>
    </div>
  );
}

export default Friend;