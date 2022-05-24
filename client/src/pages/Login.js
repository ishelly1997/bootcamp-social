import React, {useState }from "react";

import { useMutation } from '@apollo/client'

import {LOGIN_USER} from '../utils/mutations'

import Auth from '../utils/auth'

const Login = (props) => {

    const [formState, setFormState] = useState({ email: '', password: '' });

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
        const { data } = await login({
          variables: { ...formState }
        });
    
        console.log(data);
        Auth.login(data.login.token);
      } catch (e) {
        console.error(e);
      }
  
      // clear form values
      setFormState({
        email: '',
        password: '',
      });
    };
    return(
        <div className="form">
        <form >
          <div className="input-container" onSubmit={handleFormSubmit}>
            <label>Email </label>
            <input 
              placeholder='Your email'
              name='email'
              type='email'
              id='email'
              value={formState.email}
              onChange={handleChange}

/>
          </div>
          <div className="input-container">
            <label>Password </label>
            <input 
              placeholder='******'
              name='password'
              type='password'
              id='password'
              value={formState.password}
              onChange={handleChange}
/>
          </div>
          <div className="button-container">
            <input type="submit" onChange={handleChange} />
          </div>
        </form>
        {error && <div>Login failed</div>}
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