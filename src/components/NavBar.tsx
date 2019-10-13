import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5 mb-4">
    <Link className="navbar-brand mr-5" to='/'>App Logo</Link>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link mx-2" to='/dictionaries'>View Dictionaries</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mx-2" to='/admin'>Manage Dictionaries</Link>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <i className='material-icons search-icon'>search</i>
        <input className="form-control form-control-sm mr-sm-2" type="search" placeholder="Search..." aria-label="Search" style={{ paddingLeft: '2rem' }} />
        <button className="btn btn-light btn-sm my-2 my-sm-0" type="submit">Go</button>
      </form>
    </div>
  </nav>
);

export default NavBar;