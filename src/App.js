import React from 'react';
import './App.css';
import Login from './Login';
import Navbar from './Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect, Router, BrowserRouter } from "react-router-dom";
// import Signup from './Signup';
import Contact from './Contact';
 
const App = () => {
  return (
    <BrowserRouter>
    <>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/contact" component={Contact} />
      <Redirect to="/" />
      </Switch>
    </>
    </BrowserRouter>
  );
};

export default App;