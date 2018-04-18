import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const PostListItem = ({ id, title, content, createdAt }) => (
  <Link to={`/edit/${id}`}>
    <h2>{title}</h2>
    <span>{moment(createdAt).format('MMMM Do, YYYY, h:mm:ss a')}</span>
    <p>{content}</p>
  </Link>
);

export default PostListItem;
