import React from "react";
import './App.css'
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/User/Navbar/Navbar";
import Home from "./components/User/Home/Home";
import About from "./components/User/About/About";
import Education from "./components/User/Education/Education";
import Experience from "./components/User/Experience/Experience";
import Skills from "./components/User/Skills/Skills";
import Projects from "./components/User/Projects/Projects";
import Contact from "./components/User/Contact/Contact";

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
              <Route path="/contact" component={Contact} />
            </div>
          </Switch>
        </div>}
      <footer>
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <p>
                Created by <span style={{ color: '#0095EB' }}>Alwan</span>
                <br />
                With <span style={{ color: '#0095EB' }}>M.E.R.N</span> Stack
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
