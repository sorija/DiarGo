import React from 'react';
import { Link } from 'react-router-dom';
import PostList from './PostList';
import PostListFilters from './PostListFilters';

const DashboardPage = () => (
  <div>
    <Link className="button" to="/create">New post</Link>
    <PostListFilters />
    <PostList />
  </div>
);

export default DashboardPage;
