function PostPreview({ username, image, description, hashtags }) {
  return (
    <div className="post-preview">
      <p className="username">{username}</p>
      <img src={image} alt={description} />
      <p>{description}</p>
      <div className="hashtags">
        {hashtags.map((tag) => (
          <span key={tag}>#{tag} </span>
        ))}
      </div>
    </div>
  );
}

export default PostPreview;