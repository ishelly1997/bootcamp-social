
import React from 'react'

import newsfeed from '../images/newsfeed.png'


const chatRoom = () => {

    if (!localStorage.getItem('id_token')) {
        return (
          <h4>
            You need to be logged in to see this page. Login below.
          </h4>
        );
      }

    return(
        <div class='chat-container'>
            <h3>Welcome Tech to Messaging!</h3>

                <img src={newsfeed}></img>
            <p>This site is currently under construction. Come back soon!</p>
      </div>
    )
}

export default chatRoom