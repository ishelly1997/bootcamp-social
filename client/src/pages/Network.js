/* import React from "react";
//import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../utils/queries'

import usericon from "../images/network.png"
//import Auth from '../utils/auth';
const Network = () => {
  
  const { data: userData } = useQuery(QUERY_USERS)
    return (
    <div className="container">
        {userData && userData.map(user => (
          <div key={user._id} className="card mb-3">
            
            <p className="card-header">
              {user.username}
            </p>
            <img src={usericon} alt="user-icon"></img>
            <div className="card-body">
              <p>{user.email}</p>
              <p>Cohort: Columbia University Full-Stack Bootcamp May 2022</p>
        <button id="view-profile">View Profile</button>
      </div>
    </div>
  ))};
  </div>
    );
};

export default Network; */