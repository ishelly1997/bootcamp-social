
import React from 'react';

import newsfeed from '../images/newsfeed.png'

const Home = () => {

  // if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
  //   return <Navigate to="/" />;
  // }
  return (
    <div>
      <h3>Welcome Tech Alumns!</h3>

  

      <img src={newsfeed} alt='newsfeed'></img>

      <h3>Under Construction, come back soon!</h3>

      

    </div>
  );
};

export default Home;