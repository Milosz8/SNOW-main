import "./App.css";
import Home from "./pages";
import React, { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ScrolltoTop from "../src/components/ScrollToTop";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./pages/About";
import Koncerty from "./pages/Koncerty";
import Contact from "./pages/Contact";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
      <ScrolltoTop />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/About" component={About} exact />
        <Route path="/Koncerty" component={Koncerty} exact />
        <Route path="/Contact" component={Contact} exact />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
