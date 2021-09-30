import React from "react";
import './App.css'
import { Route, Switch, Router } from "react-router-dom";
import Navbar from "./components/User/Navbar/Navbar";
import Home from "./components/User/Home/Home";
import About from "./components/User/About/About";
import Education from "./components/User/Education/Education";
import Experience from "./components/User/Experience/Experience";
import Skills from "./components/User/Skills/Skills";
import Projects from "./components/User/Projects/Projects";
import Contact from "./components/User/Contact/Contact";

function App() {
  console.log(Router);
  return (
    <div className="App">
      <Navbar />
      <Switch>
        {/* Not Admin */}
        <div className="container py-5">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/education" component={Education} />
          <Route path="/experience" component={Experience} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </div>
        {/* Admin */}
        {/* <Route path="/admin" component={Admin} /> */}
      </Switch>
    </div>
  );
}

export default App;
