function Comments({ comments }) {
  return (
    <div className="comments">
      {comments.map((comment, index) => (
        <p key={index}>
          <strong>{comment.username}:</strong> {comment.text}
        </p>
      ))}
    </div>
  );
}

export default Comments;