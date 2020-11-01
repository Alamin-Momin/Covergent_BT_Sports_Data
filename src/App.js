import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HomeScreen from './component/Home';
import DashboardScreen from './component/Details'
import LoginScreen from './component/Login';

function App() {
  return (
    <Router>
      <Route exact path="/">
        <LoginScreen />
      </Route>
      <Route path="/home">
        <HomeScreen />
      </Route>
      <Route path="/dashboard">
        <DashboardScreen />
      </Route>
    </Router>
  );
}

export default App;
