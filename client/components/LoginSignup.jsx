import React from 'react';
import { useNavigate } from 'react-router-dom';
import { googleSignIn } from './Firebase.js';

const LoginSignup = ({ onLogin, setUser }) => {
  const navigate = useNavigate();

  const handleGoogleSignIn = async (e) => {
    e.preventDefault(); // this will prevent the div from submitting
    const { name, email } = await googleSignIn();
    await fetch('/api/oauthSignup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, displayName: name }),
    });
    
    setUser(email);
    onLogin();
    navigate('/user');
  };

  return (
    <div className='signup-container'>
      <button onClick={(e) => handleGoogleSignIn(e)}>GOOGLE AUTH!!!!!!</button>
    </div>
  );
};

export default LoginSignup;
