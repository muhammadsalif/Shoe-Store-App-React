import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <h2>Hello from home page</h2>
        </Route>
        <Route path="/product">
          <h2>Hello from Product page</h2>
        </Route>
      </Switch>
    </>
  );
}

export default App;
