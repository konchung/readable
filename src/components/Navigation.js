import React from 'react';
import { Link } from 'react-router-dom';
import { capitalize } from '../utils/helpers';

const Navigation = ({ categories }) => {

  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
      </div>
      {categories.map((c, i) => (
        <div key={i}>
          <Link to={`/${c.path}`}>
            {capitalize(c.name)}
          </Link>
        </div>
      ))}
      <div>
        <Link to="/posts/new">Create</Link>
      </div>
    </nav>
  )
}

export default Navigation
