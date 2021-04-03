import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post({ userName, imageUrl, caption }) {
  return (
    <div className="post">
      <div className="post-header">
        <Avatar
          className="post-avatar"
          alt={userName}
          src="/static/images/avatar/1.jpg"
        />
        <h3>{userName}</h3>
      </div>
      <img src={imageUrl} alt="" className="post-image" />
      <h4 className="post-text">
        <strong>{userName}</strong> : {caption}
      </h4>
    </div>
  );
}

export default Post;
