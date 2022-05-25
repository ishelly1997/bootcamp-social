import React, {useState }from "react";

import { useMutation } from '@apollo/client'

import {LOGIN_USER} from '../utils/mutations'

import Auth from '../utils/auth'

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
      console.log('test')
      try {
    
       const {data} = await login({
          variables: { ...formState }
        });
    
        console.log(data);
        Auth.login(data.login.token);
      } catch (e) {
        console.error(e);
      }
  //
    //  setFormState({
      //  username: '',
       // password: '',
   //   });
=======
  
      // clear form values
      setFormState({
        username: '',
        password: '',
      });

    };
    return(
        <div className="form">
        <form >
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
/>

          </div>
          <div className="button-container">
            <input type="submit" onClick={handleFormSubmit}/>
          </div>
        </form>
     {/*
      {error && <div>Login failed</div>}
     */}  

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