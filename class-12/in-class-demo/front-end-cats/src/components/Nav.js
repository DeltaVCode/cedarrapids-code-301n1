import React from 'react';
import { Link } from "react-router-dom";
import '../css/Nav.css';

class Nav extends React.Component {

  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to={''}>Home</Link>
          </li>
          <li>
            <Link to={ `about` }>About Us</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Nav;