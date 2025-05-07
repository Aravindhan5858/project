import React, { useState } from 'react';
import axios from 'axios';
import "../styles/Login.css";

const Login = ({ onLogin, switchToSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { username, password });
      window.alert("Login successful");
      onLogin(username, response.data.token);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        window.alert("Invalid credentials");
      } else {
        console.error("Error logging in:", error);
        window.alert("Error logging in.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Enter your credentials to access your account</p>
        </div>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <div className="input-container">
              <input
                id="username"
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-container">
              <input
                id="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
          </div>
          
          <div className="forgot-password">
            <a href="#">Forgot password?</a>
          </div>
          
          <button 
            type="submit" 
            className={`login-button ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Log In'}
          </button>
        </form>
        
        <div className="signup-prompt">
          <p>Don't have an account?</p>
          <button onClick={switchToSignup} className="signup-link">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Login;