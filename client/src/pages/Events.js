import React from 'react';

import Auth from '../utils/auth'

import { Navigate, useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';

const Events = () => {
  // const { username: userParam } = useParams();

  // const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
  //   variables: { username: userParam }
  // });

  // const user = data?.me || data?.user || {};

  // if (loading) {
  //   return <div>Loading...</div>;
  // }


  // if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
  //   return <Navigate to="/events" />;
  // }


  // if (!user?.username) {
  //   return (
  //     <h4>
  //       You need to be logged in to see this page. Use the navigation links above to sign up or log in!
  //     </h4>
  //   );
  // }

  return (
    <div className="calendar">
      <h3>Events Calendar</h3>
      <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&src=YXRoYW5hc2lha290b3BvdWxvc0BnbWFpbC5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=dnY1Z2I1NDZrbDZ0ZW5yaWJjbm9rcmg3MzBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%234285F4&color=%2333B679&color=%239E69AF" 
      width="800" height="600" frameBorder="0" scrolling="no"></iframe>
   
    </div>
  );
};

export default Events;