import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import LeftControl from './LeftControl/LeftControl';
import Home from './Home/Home';
import { useState } from 'react';
import Dashboard from './Dashboard/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  

  return (
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/data' element={<Home/>}/>
        </Routes>
        
      </div>
    
  );
}

export default App;
