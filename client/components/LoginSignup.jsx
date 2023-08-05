import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const LoginSignup = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const history = useHistory();

  const login = async () => {
    if (!username || !password) {
      setError('All fields required');
      return;
    }

    try {
      const response = await axios.post('/login', { username, password });
      if (response.status === 200) {
        onLogin();
        history.push('/user');
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      setError('Invalid credentials');
      console.error(err);
    }
  };

  const signup = async () => {
    if (!username || !password) {
      setError('All fields required');
      return;
    }

    try {
      await axios.post('/signup', { username, password });
      setError('Signup successful. Please login.');
    } catch (err) {
      setError('Signup failed. Username might already be in use.');
      console.error(err);
    }
  };

  return (
    <div>
      <div>
        <input
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={login}>Login</button>
      <button onClick={signup}>Sign Up</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginSignup;
