// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'; 

import { setContext } from '@apollo/client/link/context'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Login from './pages/Login';
import SignUp from './pages/Signup'
import Home from './pages/Homepage'
import NoMatch from './pages/NoMatch';

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
function App() {
  return(

    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header />
          <div className='container'>
            <Routes>
              <Route
                exact path="/"
                component={Home}
              />
              <Route
                exact path="/login"
                component={Login}
              />
              <Route
                path="/signup"
                component={SignUp}
              />
              <Route
                path="/homepage"
                element={<Home />}
              />
                  <Route
                    path="*"
                    component={NoMatch}
                  />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
  }


export default App;
