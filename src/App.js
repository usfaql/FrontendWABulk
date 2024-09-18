import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import LeftControl from './LeftControl/LeftControl';
import Home from './Home/Home';
import { createContext, useEffect, useState } from 'react';
import Dashboard from './Dashboard/Dashboard';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Login from './Login/Login';
export const userContext = createContext();
function PrivateRoute({ element, isLoggedIn }) {
  return isLoggedIn ? element : <Navigate to="/login" />;
}

function App() {

  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  useEffect(() => {
    setIsLoggedIn(!!token);
  }, [token]);

  return (
    <userContext.Provider value={{token, setToken, isLoggedIn , setIsLoggedIn}}>
      <div className="App">

        {!isLoginPage && <Navbar />}
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<PrivateRoute element={<Dashboard />} isLoggedIn={isLoggedIn} />} />
        <Route path="/data" element={<PrivateRoute element={<Home />} isLoggedIn={isLoggedIn} />} />
        </Routes>
        
      </div>
    </userContext.Provider>
  );
}

export default App;
