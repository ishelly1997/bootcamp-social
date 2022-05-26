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
  
      // clear form values
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
        <form >
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
            <input align="center" value="Login" type="submit" onClick={handleFormSubmit}/>
          </div>
          {error && <div>Login failed</div>}
          <p class="copyright">&copy; Your journey doesn't stop after camp.</p>
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
