import React, { useContext, useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import './Login.css';
import AuthService from '../../../services/AuthService';
import { AuthContext } from '../../../Contexts/AuthContext';
import colorLogo from '../../../assets/logo/logo1.png'
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { isLogged, isAdmin, setIsAdmin, setIsLogged, employee } =
  useContext(AuthContext);
  const navigator = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //validatetion
    const islog = await AuthService.login(username, password);
  
    if (islog) {
      setIsAdmin(islog.employee_role === 'admin');
      setIsLogged(true); // Fix this line
      console.log(employee);
      if (isLogged && isAdmin) {
    
        navigator('/admin/users');
      } else if (isLogged) {
      //  console.log("object");
        navigator('/');
      }
    }
  };
  
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);



  };

  useEffect(() => {
    console.log(employee);
    if (isLogged && isAdmin) {
     
      navigator('/admin/users');
    
    } else if (isLogged) {
      // console.log("object");
      navigator('/');
    
    }
  }, [isLogged, isAdmin, navigator, employee]);
  

  return (
    <>
    <div className='loginpage'>

    
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
      </div>
    </>
  );
};

export default Login;