import React from "react";
import { Link } from "react-router-dom";
//import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../utils/queries'

import usericon from "../images/network.png"
//import Auth from '../utils/auth';
const Network = () => {
  
  const { data } = useQuery(QUERY_USERS);
  let users;
  if(data){
    users=data.users
  }
 
  console.log(data);

    return (
<div className="container">
        {users && users.map((user) => (
          <div key={user._id} className="card mb-3">
            <p className="card-header">
              {user.username}
            </p>
            <img src={usericon} alt="user-icon" className="tab-icons"></img>
            <div className="card-body">
              <p>{user.email}</p>
              <p>Cohort: Columbia University Full-Stack Bootcamp May 2022</p>
              <Link id="view-profile" to="/profile" className="profile-link" >
                <button id="view-profile">View Profile</button>
              </Link> 
      </div>
    </div>
  ))};
  </div>
    );
};

export default Network;