
import React from 'react';

import newsfeed from '../images/newsfeed.png'

//import Auth from '../utils/auth'

//import { Navigate, useParams } from 'react-router-dom';

//import { useQuery } from '@apollo/client';
//import { QUERY_USER, QUERY_ME } from '../utils/queries';

const Home = () => {

  // const { username: userParam } = useParams();

  // const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
  //   variables: { username: userParam }
  // });

  // const user = data?.me || data?.user || {};


  // if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
  //   return <Navigate to="/home" />;
  // }

  // if (loading) {
  //   return <div>Loading...</div>;
  // }


  // if (!user?.username) {
  //   return (
  //     <h4>
  //       You need to be logged in to see this page. Use the navigation links above to sign up or log in!
  //     </h4>
  //   );
  // }
  return (
    <div>
      <h3>Welcome Tech Alumns!</h3>

      <img src={newsfeed} alt='newsfeed' ></img>

      <h3>Under Construction, come back soon!</h3>

      

    </div>
  );
};

export default Home;