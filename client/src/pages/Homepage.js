
import React from 'react';

import newsfeed from '../images/newsfeed.png'

import Auth from '../utils/auth'

import { Navigate, useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';

const Home = () => {

  if (!localStorage.getItem('id_token')) {
    return (
      <h4>
        You need to be logged in to see this page. Login below.
      </h4>
    );
  }
  return (
    <div>
      <h3>Welcome Tech Alumns!</h3>

      <img src={newsfeed} alt='newsfeed' ></img>

      <h3>Under Construction, come back soon!</h3>

      

    </div>
  );
};

export default Home;