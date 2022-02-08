/* client/src/App.js. */
import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import List from "./views/List";
// import Links from './views/Links';

export default function App() {
  const App = () => (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/list" component={List} />
      </Switch>
    </div>
  );

  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
