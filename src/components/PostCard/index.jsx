import React from "react";

import "./style.css";
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line react/prop-types
export const PostCard = ({ title, cover, body }) => {
  return (
    <div className="post">
      <img src={cover} alt={title} />
      <div className="post-content">
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
};
