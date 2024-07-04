import React from 'react';
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row  bounceIn pro">
          <nav className="col d-flex justify-content-center">
            <ul className="nav pe-1">
              <li className="nav-item">
              <Link to="/" className="text-decoration-none"> <a  className="nav-link">Home </a></Link> 
              </li>
              {/* <li className="nav-item">
                <a " className="nav-link">About</a>
              </li> */}
              <li className="nav-item">
              <Link to="/skill" className="text-decoration-none"> <a  className="nav-link">Skill/Project</a>
</Link>
              </li>
              {/* <li className="nav-item">
              <Link to="/project" className="text-decoration-none">  <a  className="nav-link"> Project </a></Link>
              </li> */}
              <li className="nav-item">
              <Link to="/contact" className="text-decoration-none">  <a  className="nav-link text-decoration-none">Contact</a></Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
