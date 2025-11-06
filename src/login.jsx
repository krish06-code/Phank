import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email.trim() === '') {
      alert('Please enter your email!');
      return;
    }
    navigate('/domains'); // Redirect to domains page
  };

  return (
    <div className="login-container">
      <h1>Welcome to Phank</h1>
      <p>Login to find your dream work</p>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
        />
        <button type="submit" className="login-btn">
          Continue
        </button>
      </form>


      <p className="back-link" onClick={() => navigate('/')}>
        ← Back to Home
      </p>
    </div>
  );
}
