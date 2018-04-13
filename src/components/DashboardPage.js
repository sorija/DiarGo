import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage = () => (
  <div>
    <Link className="button" to="/create">New post</Link>
  </div>
);

export default DashboardPage;
