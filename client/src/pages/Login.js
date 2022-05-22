import React, {useState }from "react";

import { useMutation } from '@apollo/client'

import {LOGIN_USER} from '../utils/mutations'

import Auth from '../utils/auth'

const Login = (props) => {

    const [formState, setFormState] = useState({ email: '', password: '' });

    const [login, { error }] = useMutation(LOGIN_USER);
  
    // update state based on form input changes
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    // submit form
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
            <label>Username </label>
            <input type="text" name="uname" required onChange={handleChange} />
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" required onChange={handleChange} />
          </div>
          <div className="button-container">
            <input type="submit" onChange={handleChange} />
          </div>
        </form>
      </div>
    )
};

export default Login;