import React from 'react';
import { Link } from 'react-router-dom';

const PostListItem = ({ id, title, content }) => (
  <Link to={`/edit/${id}`}>
    <h2>{title}</h2>
    <p>{content}</p>
  </Link>
);

export default PostListItem;