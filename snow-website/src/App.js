import "./App.css";
import Home from "./pages";
import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./pages/About";
import Koncerty from "./pages/Koncerty";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/About" component={About} exact />
        <Route path="/Koncerty" component={Koncerty} exact />
        <Route path="/Kontakt" component={About} exact />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
