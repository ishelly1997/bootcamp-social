// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Login from './pages/Login';
import SignUp from './pages/Signup'
import Home from './pages/Homepage'

import Events from './pages/Events'

import NoMatch from './pages/NoMatch';

import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


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
    <div className='App' >
      <div className='App-header'>
        <img className='App-logo' src={require('./images/Bootcamp.gif')} alt='/' />
      </div>

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
               path="/login" element={<Login />}
            />
            <Route path="/signup"
              element={

                <SignUp />
              }
            />
            <Route
               path="/events"
            element={

              <Events />
            }             
            />
            {/*
                  <Route
                  path="*"
                  element={<NoMatch />}
                  />
    */}

          </Routes>

        </Router>
        <Footer />
      </ApolloProvider>

    </div>

  );

}

export default App;
