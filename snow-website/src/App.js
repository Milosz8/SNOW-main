import "./App.css";
import Home from "./pages";
import React, { useState } from "react";
import Footer from "./components/Footer";
import SmoothScrollbar from "./components/SmoothScrollbar/SmoothScrollbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import About from "./pages/About";
import Koncerty from "./pages/Koncerty";
import Contact from "./pages/Contact";
import NavMenu from "./components/Navbar";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
      <NavMenu toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <SmoothScrollbar>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/About" component={About} exact />
          <Route path="/Koncerty" component={Koncerty} exact />
          <Route path="/Contact" component={Contact} exact />
        </Switch>

        <Footer />
      </SmoothScrollbar>
    </Router>
  );
}

export default App;
