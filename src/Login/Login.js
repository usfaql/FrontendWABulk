import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from "../App";
import axios from 'axios';
import "./style.css"
function Login() {
  const { setUserId, setToken, setIsLoggedIn } = useContext(userContext);
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [anError, setAnError] = useState(false);
  const [contentError, setContentError] = useState("");

   const handleLogin = async () => {
      await axios.post('https://serverwabulk.onrender.com/login', { username, password }).then((result) => {
        const { token, userId } = result.data;
        setToken(token);
        setUserId(userId);
        setIsLoggedIn(true);
        localStorage.setItem("token", token);
        navigate("/");
        setAnError(false);
      }).catch((err) => {
        setAnError(true);
        setContentError(err.response?.data?.message || "An error occurred. Please try again.");
      });
  };


  return (
    <div className='main-container-login'>
        <div className='container-login'>
            <div className='title-login'>Login 
                <div className='desc-login'>Login is required to access the content.</div>
            </div>
            <div className='container-input'>
              <input
                className='input-username'
                type="text"
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                className='input-password'
                type="password"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className='container-login-btn'>
              <button onClick={handleLogin} className='login-btn'>Login</button>
            </div>
            {anError && <div style={{ color: 'red' }} className='err-text'>{contentError}</div>}
        </div>
    </div>
  );
}

export default Login;
