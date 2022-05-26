import React from 'react';

import { Link } from 'react-router-dom';
import background from '../../images/Bootcamp.gif'

import Nav from '../Navigation/nav'


const Header = () => {

  return(
  <div className='App-header'>

    <a href="/">
    <img className='App-logo' src= {background} alt='/' /> 
    </a>
    <Nav></Nav>
  </div>
)
};

export default Header;



{/* <header className="bg-secondary mb-4 py-2 flex-row align-center">
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
</header> */}