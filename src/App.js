import React from 'react';
import logo from './assets/logo.svg';
import './App.css';
import Layout from './components/Layout'
import Box from '@material-ui/core/Box';
import Home from './pages/Home'
import Auth from './pages/Auth'
import Restaurants from './pages/Restaurants'
import Food from './pages/Food'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout>
      <Switch>
        <Route path="/restaurants">
          <Restaurants />
        </Route>
        <Route path="/restaurants/:id">
          <Food />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </Layout>
    </Router>
  );
}

export default App;
