import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <ul className="nav nav-pills mb-3 mt-2">

      <li className="nav-item">
        <NavLink className="nav-link" activeClassName="active" to="/new-post">New User</NavLink>
      </li>
     
      <li className="nav-item">
        <NavLink className="nav-link" activeClassName="active" to="/posts">Report</NavLink>
      </li>
     
     
    </ul>
  );
};

export default Nav;
