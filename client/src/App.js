// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header'

import Login from './pages/Login';
import SignUp from './pages/Signup'
import Home from './pages/Homepage'


import Events from './pages/Events'
import Network from './pages/Network';
import NoMatch from './pages/NoMatch';
import Jobs from './pages/Jobs'
import Messaging from './pages/Messaging'
import Resources from './pages/Resources'
import Profile from './pages/Profile'

import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Auth from './utils/auth'


const App = () => {
  const httpLink = createHttpLink({
    uri: '/graphql',
  });


  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (

      <ApolloProvider client={client}>
        <Router>
          <Header> </Header>
          <div className='App' >
            

            <div className="App-body">
            <Routes>
              <Route 
                  exact path="/home" 
                  element={<Home />} />
              <Route
                path="/" 
                element={<Login />}
              />
              <Route 
                  path="/signup"
                  element={<SignUp />}
              />
              <Route
              path="/profile"
              element={<Profile />}             
              />
              <Route
                  path="/events"
                  element={<Events />}             
              />
              <Route
                  path="/network"
                  element={<Network />}             
              />
              <Route
                  path="/jobs"
                  element={<Jobs />}             
              />
              <Route
                  path="/messaging"
                  element={<Messaging />}             
              />
              <Route
                  path="/resources"
                  element={<Resources />}             
              />     
              <Route
                  path="*"
                  element={<NoMatch />}
              />

            </Routes>
            </div>
          </div>
          <div>{Auth.getToken() ? (
            <><a href='/' onClick={logout}>Logout</a></>
            ) : (<p>Currently not logged in. Login <a href='/'>HERE</a></p>)}
        </div>
        </Router>
        <div className='App-footer'>
        <Footer />
        </div>
           
  
   
      </ApolloProvider>

   

  );
  }


export default App;


   

          //     <Route
          //     path="/network"
          //     element={<Network />}             
          // />