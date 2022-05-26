import React from 'react';

// import Auth from '../utils/auth'

const Events = () => {

    // if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    //     return <Navigate to="/events" />;
    //   }

  return (
    <div className="calendar">
      <h3>Events Calendar</h3>
      <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&src=YXRoYW5hc2lha290b3BvdWxvc0BnbWFpbC5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=dnY1Z2I1NDZrbDZ0ZW5yaWJjbm9rcmg3MzBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%234285F4&color=%2333B679&color=%239E69AF" 
      width="800" height="600" frameBorder="0" scrolling="no"></iframe>
   
    </div>
  );
};

export default Events;