import React from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
} from "react-router-dom";

// Components
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Product } from "./components/Product";
import { ProductItem } from "./components/ProductItem";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Home}></Route>

        <Route exact path="/about" component={About}></Route>

        <Route exact path="/product" component={Product}></Route>

        <Route path="/product/:id" component={ProductItem}></Route>

        <Route path="*">
          <h2>404 Not Found!!!!</h2>
        </Route>
      </Switch>
    </>
  );
}

export default App;
