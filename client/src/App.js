import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";

// Admin
import NavbarAdmin from "./components/Admin/Navbar/NavbarAdmin";
import HomeAdmin from "./components/Admin/Home/HomeAdmin";
import AboutAdmin from "./components/Admin/About/AboutAdmin";
import EducationAdmin from "./components/Admin/Education/EducationAdmin";
import ExperienceAdmin from "./components/Admin/Experience/ExperienceAdmin";
import SkillsAdmin from "./components/Admin/Skills/SkillsAdmin";
import ProjectsAdmin from "./components/Admin/Projects/ProjectsAdmin";
import CertificateAdmin from "./components/Admin/Certificate/CertificateAdmin";

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
      <ToastContainer autoClose={3000} toastClassName="dark-toast" toastStyle={{ backgroundColor: "#1d1f28" }} />
      {isLogin ? <div>
        <NavbarAdmin />
        <Switch>
          <div className="container py-5">
            <Route exact path="/" component={HomeAdmin} />
            <Route exact path="/aboutadmin" component={AboutAdmin} />
            <Route exact path="/educationadmin" component={EducationAdmin} />
            <Route exact path="/experienceadmin" component={ExperienceAdmin} />
            <Route exact path="/skillsadmin" component={SkillsAdmin} />
            <Route exact path="/projectsadmin" component={ProjectsAdmin} />
            <Route exact path="/certificateadmin" component={CertificateAdmin} />
          </div>
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
