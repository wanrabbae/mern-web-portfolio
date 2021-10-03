import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'
import { Route, Switch } from "react-router-dom";

// User
import Navbar from "./components/User/Navbar/Navbar";
import Home from "./components/User/Home/Home";
import About from "./components/User/About/About";
import Education from "./components/User/Education/Education";
import Experience from "./components/User/Experience/Experience";
import Skills from "./components/User/Skills/Skills";
import Projects from "./components/User/Projects/Projects";
import Certificate from "./components/User/Certificate/Certificate";
import Contact from "./components/User/Contact/Contact";

AOS.init();

function App() {
  const [isLogin, setIsLogin] = React.useState(false);
  return (
    <div className="App">
      {isLogin ? <div>
        <h1>Sidebar Admin!</h1>
        <h2>Admin Page</h2>
        <button onClick={() => setIsLogin(false)} className="btn btn-danger">Logout</button>
        <Switch>
          <Route path="/about" component={About} />
        </Switch>
      </div>
        : <div>
          <Navbar />
          <Switch>
            <div className="container py-5">
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/education" component={Education} />
              <Route path="/experience" component={Experience} />
              <Route path="/skills" component={Skills} />
              <Route path="/projects" component={Projects} />
              <Route path="/certificate" component={Certificate} />
              <Route path="/contact" component={Contact} />
            </div>
          </Switch>
        </div>}
    </div>
  );
}

export default App;
