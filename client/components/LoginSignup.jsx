import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // replaced useHistory with useNavigate as useHistory is deprecated
import { googleSignIn } from './Firebase.js';

const LoginSignup = ({ onLogin, setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // replaced history with navigate

  const login = async (event) => {
    event.preventDefault();
    if (!username || !password) {
      setError('All fields required');
      return;
    }

    try {
      const response = await axios.post('api/login', { username, password });
      if (response.status === 200) {
        onLogin();
        setUser(username)
        navigate('/user'); // updated history.push with navigate
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      setError('Invalid credentials');
      console.error(err);
    }
  };

  const signup = async (event) => {
    event.preventDefault();
    if (!username || !password) {
      setError('All fields required');
      return;
    }

    try {
      await axios.post('api/signup', { username, password });
      setError('Signup successful. Please login.');
    } catch (err) {
      setError('Signup failed. Username might already be in use.');
      console.error(err);
    }
  };

  return (
   <button onClick = {googleSignIn} > GOOOGLEEE </button>
  );
};

export default LoginSignup;
