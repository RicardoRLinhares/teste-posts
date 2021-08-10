/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/prop-types */
import { PostCard } from "../PostCard";

import "./style.css";

export const Posts = ({ posts }) => (
  // eslint-disable-next-line react/react-in-jsx-scope
  <div className="posts">
    {posts.map((post) => (
      // eslint-disable-next-line react/react-in-jsx-scope
      <PostCard
        key={post.id}
        title={post.title}
        body={post.body}
        id={post.id}
        cover={post.cover}
      />
    ))}
  </div>
);
