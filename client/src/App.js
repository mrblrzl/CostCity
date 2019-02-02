import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import 'semantic-ui-css/semantic.min.css';
import Nav from "./components/Nav";
import LandingPage from './components/LandingPage';
import Routes from './routes.js';
function App () {
    return (
      <div>
      <Nav />
      <Routes />

      </div>
      
      
        
  
    );
  }


export default App;