import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import LoginSignup from './LoginSignup';
import UserPage from './UserPage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Switch>
        <Route path='/login-signup'>
          {!isLoggedIn ? (
            <LoginSignup onLogin={() => setIsLoggedIn(true)} />
          ) : (
            <Redirect to='/user' />
          )}
        </Route>

        <Route path='/user'>
          {isLoggedIn ? <UserPage /> : <Redirect to='/login-signup' />}
        </Route>

        <Route path='*'>
          <Redirect to='/login-signup' />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
