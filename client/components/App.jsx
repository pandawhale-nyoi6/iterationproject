import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes, // use Routes instead of Switch
  Route,
  Navigate,
} from 'react-router-dom';
import LoginSignup from './LoginSignup.jsx';
import UserPage from './UserPage.jsx';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path='/login-signup'
          element={
            !isLoggedIn ? (
              <LoginSignup onLogin={() => setIsLoggedIn(true)} />
            ) : (
              <Navigate to='/user' replace />
            )
          }
        />
        <Route
          path='/user'
          element={
            isLoggedIn ? <UserPage /> : <Navigate to='/login-signup' replace />
          }
        />
        <Route path='*' element={<Navigate to='/login-signup' replace />} />
      </Routes>
    </Router>
  );
};

export default App;
