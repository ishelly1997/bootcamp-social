// import logo from './logo.svg';
import './App.css';
// import Header from './components/Header';
// import Footer from './components/Footer';
import Login from './components/Login/login';

const App = () => {
  return(
    <body className='App' >
      <div className='App-header'>
        <img className='App-logo' src={require('./images/Bootcamp.gif')} alt='/'/>
      </div>
      
      <form className='App-form'>
        <div className='App-formContent'>
        <Login />
        </div>
      </form>
      
    </body>
  
  );

}

export default App;
