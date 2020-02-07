import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Restaurants from "./pages/Restaurants";
import Food from "./pages/Food";
import FoodSharing from "./pages/FoodSharing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/restaurants/:id">
            <Food />
          </Route>
          <Route path="/foodsharing">
            <FoodSharing />
          </Route>
          <Route path="/restaurants">
            <Restaurants />
          </Route>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
