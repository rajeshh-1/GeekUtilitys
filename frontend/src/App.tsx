import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Routes from './routes'


function App() {
  return (
    <div>
      <Navbar/>
      <Routes/>
      {/* <Home/> */}
    </div>
  );
}

export default App;
