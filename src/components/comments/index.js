import React from "react";

import "./styles.css";

const CommentBox = ({ comment, author }) => {
  return (
    <div className="comment-box">
      <p>{comment}</p>
      <span>{author}</span>
    </div>
  );
};

export default CommentBox;
