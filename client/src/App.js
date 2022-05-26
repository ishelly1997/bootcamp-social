// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';

import Login from './pages/Login';
import SignUp from './pages/Signup'
import Home from './pages/Homepage'
import Profile from './pages/Profile';


import Events from './pages/Events'
import Network from './pages/Network';
import NoMatch from './pages/NoMatch';

import Nav from "./components/Navigation/nav"

import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

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

  return (
    <><div className='App'>
      <div className='App-header'>
        <img className='App-logo' src={require('./images/Bootcamp.gif')} alt='/' />
      </div>

      {/* <div>
      <Nav></Nav>
    </div> */}


      {/* <form className='App-form'>
      <div className='App-formContent'>
        <p>hello</p>
      </div>
    </form> */}


      <ApolloProvider client={client}>
        <Router>
          <Routes>

            <Route exact path="/" element={<Home />} />
            <Route
              path="/login" element={<Login />} />
            <Route path="/signup"
              element={<SignUp />} />
            <Route
              path="/events"
              element={<Events />} />
            <Route
              path="/network"
              element={<Network />} />
                          <Route
              path="/profile"
              element={<Profile />} />
                          <Route
              path="/homepage"
              element={<Home />} />
            {/*

          <Route
          path="*"
          element={<NoMatch />}
          />
*/}

          </Routes>

        </Router>

      </ApolloProvider>

    </div>

    <div className='App-footer'>
      <Footer  />
      </div>
   
    </>

  );
  }


export default App;
