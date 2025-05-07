import React, { useState } from 'react';
import axios from 'axios';
import "../styles/Signup.css";

const Signup = ({ onSignup, switchToLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', { username, password });
      window.alert("Signup successful");
      // Optionally pass additional data (i.e., token) to onSignup as needed
      onSignup(username);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        window.alert("User already exists");
      } else {
        console.error("Error signing up:", error);
        window.alert("Error signing up.");
      }
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input 
            type="text" 
            value={username} 
            onChange={e => setUsername(e.target.value)} 
          />
        </div>
        <div>
          <label>Password: </label>
          <input 
            type="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <br />
      <button onClick={switchToLogin}>Back to Login</button>
    </div>
  );
};

export default Signup;