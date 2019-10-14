import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './../components/NavBar/NavBar';

const HomePage: React.FC = () => (
  <>
    <NavBar />
    <div className='container my-5'>
      <h1 className='display-3 text-center mb-5'>Welcome to this page</h1>
      <p className='lead text-center'>Where do you want to go next?</p>
      <div className='d-flex justify-content-center'>
        <Link className="btn btn-primary btn-lg mx-2" to='/dictionaries'>View Dictionaries</Link>
        <Link className="btn btn-success btn-lg mx-2" to='/admin'>Manage Dictionaries</Link>
      </div>
    </div>
  </>
);

export default HomePage;