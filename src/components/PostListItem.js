import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const PostListItem = ({ id, title, content, createdAt }) => (
  <Link className="list-item" to={`/read/${id}`}>
    <span className="list-item__date">{moment(createdAt).format('MMMM Do, YYYY [at] h:mm:ss A')}</span>
    <h2 className="list-item__title">{title}</h2>
  </Link>
);

export default PostListItem;
