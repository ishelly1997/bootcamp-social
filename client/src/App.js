// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import SignUp from './pages/Signup'

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

  return(
    <body className='App' >
      <div className='App-header'>
        <img className='App-logo' src={require('./images/Bootcamp.gif')} alt='/'/>
      </div>
      
      {/* <form className='App-form'>
        <div className='App-formContent'>
          <p>hello</p>
        </div>
      </form> */}


    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header />
          <div>
            <Routes>
              {/* <Route
                path="/"
                element={<Home />}
              /> */}
              <Route
                path="/login"
                element={<Login />}
              />
              /* <Route
                path="/signup"
                element={<SignUp />}
              />
              {/* <Route
                path="/profile"
                element={<Profile />}
              />
              <Route
                path="/thought"
                element={<SingleThought />}
              />  */}
                  <Route
                    path="*"
                    element={<NoMatch />}
                  />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
      
    </body>
  
  );

}

export default App;
