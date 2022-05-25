import React from 'react';

import { Link } from 'react-router-dom'; // so that links to components work, such as login, 
import background from '../../images/bootcampsocialbackground.png'
const Header = () => {
  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
          <h1>Bootcamp Social</h1>
        </Link>
        <img id="background"src={background} alt='logo'/>
        <nav className="text-center">
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </nav>
      </div>
    </header>
  );
};

// links in the navigator work with LINK

export default Header;