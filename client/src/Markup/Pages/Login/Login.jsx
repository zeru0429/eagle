import React, { useState } from 'react';
import './Login.css';
import AuthService from '../../../services/AuthService';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
       //validatetion
       AuthService.login(username,password);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);



  };

  return (
    <>
      <div className="login-container">
        <h2 className="login-title">Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="login-input"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
          <input
            type="password"
            className="login-input"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <button type="submit" className="login-button">
            Sign In
          </button>
        </form>
        <p className="login-text">
          Don't have an account? <a href="#" className="login-link">Sign Up</a>
        </p>
      </div>
    </>
  );
};

export default Login;