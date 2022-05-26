/* import React from "react";
import { Link } from "react-router-dom";
//import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../utils/queries'

import usericon from "../images/network.png"
//import Auth from '../utils/auth';
const Network = (props) => {
  

  const { data: userData } = useQuery(QUERY_USERS)
    return (
    <div className="container">
        {userData.map(props => (
          <div key={props._id} className="card mb-3">
            
            <p className="card-header">
              {props.username}
            </p>
            <img src={usericon} alt="user-icon"></img>
            <div className="card-body">
              <p>{props.email}</p>
              <p>Cohort: Columbia University Full-Stack Bootcamp May 2022</p>
              <Link onClick id="view-profile" to="/Profile" className="profile-link" >
                <button id="view-profile">View Profile</button>
              </Link> 
      </div>
    </div>
  ))};
  </div>
    );
};

export default Network; */