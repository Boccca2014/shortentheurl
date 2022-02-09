/* client/src/App.js. */
import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./views/Home";

export default function App() {
  const App = () => (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );

  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
