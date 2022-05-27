import React from 'react';

import Auth from '../utils/auth'

import { Navigate, useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';

const Resources = () => {

  
  
    if (!localStorage.getItem('id_token')) {
      return (
        <h4>
          You need to be logged in to see this page. Login below.
        </h4>
      );
    }
    return (
        <div className="Resources">
    <h3>Continued Resources</h3>
<iframe width="560" height="315" src="https://www.youtube.com/embed/PkZNo7MFNFg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<h3>Cohort Contributed Resources:</h3>
Anthony Marrocco (Cohort 12/21): Github Respository for Bootcamp Resources:

<a href='https://github.com/ajmarrocco/bootcamp-resources' target='_blank'>HERE</a>

</div> );};

export default Resources;
