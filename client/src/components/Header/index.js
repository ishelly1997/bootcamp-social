import React from 'react';

//import { Link } from 'react-router-dom';
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
