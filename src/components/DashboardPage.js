import React from 'react';
import { Link } from 'react-router-dom';
import PostList from './PostList';

const DashboardPage = () => (
  <div>
    <Link className="button" to="/create">New post</Link>
    <PostList />
  </div>
);

export default DashboardPage;
