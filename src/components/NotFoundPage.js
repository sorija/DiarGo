import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    404 - <Link to="/">Go home <span>you're drunk</span></Link>
  </div>
);

export default NotFoundPage;
