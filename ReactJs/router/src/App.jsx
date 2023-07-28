import React, { useState } from 'react';
import { BrowserRouter} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [account, setAccount] = useState('');

  const handleLogin = (email) => {
    setLoggedIn(true);
    setAccount(email);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          {!loggedIn ? <Login onLogin={handleLogin} /> : <Redirect to="/home" />}
        </Route>
        <Route exact path="/home">
          {loggedIn ? <Home account={account} /> : <Redirect to="/login" />}
        </Route>
        <Route path="/">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
