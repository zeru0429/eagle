import React from 'react';
import './Signup.css';

const SignUp = () => {
  return (
    <div className="signup-container">
      <h2 className="signup-title">Create an Account</h2>
      <form className="signup-form">
        <input type="text" className="signup-input" placeholder="Full Name" required/>
        <input type="email" className="signup-input" placeholder="Email Address" required/>
        <input type="password" className="signup-input" placeholder="Password" required/>
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
      <p className="signup-text">Already have an account? <a href="/signup" className="signup-link">Log In</a></p>
    </div>
  );
};

export default SignUp;