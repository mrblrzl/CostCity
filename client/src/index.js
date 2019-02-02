import React from "react";
import ReactDOM from "react-dom";
import createHistory from 'history/createBrowserHistory';
import createMemoryHistory from 'history/createMemoryHistory';
import "./index.css";
import App from "./App";
import { Router } from 'react-router-dom';
import registerServiceWorker from "./registerServiceWorker";

const history = process.env.NODE_ENV === 'test' ? createMemoryHistory() : createHistory();

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>
, document.getElementById("root"));
registerServiceWorker();