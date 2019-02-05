import React, { Component } from "react";
import "./App.css";
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Routes from './routes';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar /> 
        <Routes />
      </div>
      
    )
  }
}

export default App;