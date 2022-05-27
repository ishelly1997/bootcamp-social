import React, {useState }from "react";

import { useMutation } from '@apollo/client'

import { LOGIN_USER } from '../utils/mutations'

import Auth from '../utils/auth'

import { Link } from "react-router-dom";

const Login = () => {

    const [formState, setFormState] = useState({ username: '', password: '' });

  const [login, { error }] = useMutation(LOGIN_USER);
  
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      try {
    
       const {data} = await login({
          variables: { ...formState }
        });
    
        Auth.login(data.login.token);
      } catch (e) {
        console.error(e);
      }

      setFormState({
        username: '',
        password: '',
      });

    };
    return(
      <div
      className="form"
      align="center"
      >
        <div class="row h-100 justify-content-center align-items-center">
      <form onSubmit={handleFormSubmit}>
      <h1>Bootcamp Social</h1>
              <p class="description">
                Welcome to After Camp
              </p>
        <div className="input-container">
          <label>Username </label>
          <input
            placeholder='Username'
            name='username'
            id='username'
            value={formState.username}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            placeholder='******'
            name='password'
            id='password'
            value={formState.password}
            onChange={handleChange}
            type='password'
/>
        </div>
        <div className="button-container">
          <input align="center" value="Login" type="submit" />
        </div>
        {error && <div>Login failed</div>}
        <p class="copyright">&copy; Your journey doesn't stop after camp.</p>
        <div>No login? <Link id="view-profile" to="/signup" className="profile-link" >
                <button id="view-profile">Sign Up Here!</button>
              </Link> </div>
      </form>
         </div>
    </div>
  )
};

export default Login;

// type="text" 
// name="uname" 
// required 
// value={formState.email} 
// onChange={handleChange} 

// type="password" 
// name="pass" 
// required 
// value={formState.password} 
// onChange={handleChange} 