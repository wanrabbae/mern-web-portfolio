import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";

// Admin
import NavbarAdmin from "./components/Admin/Navbar/NavbarAdmin.jsx";
import HomeAdmin from "./components/Admin/Home/HomeAdmin.jsx";
import AboutAdmin from "./components/Admin/About/AboutAdmin.jsx";
import EducationAdmin from "./components/Admin/Education/EducationAdmin.jsx";
import ExperienceAdmin from "./components/Admin/Experience/ExperienceAdmin.jsx";
import SkillsAdmin from "./components/Admin/Skills/SkillsAdmin.jsx";
import ProjectsAdmin from "./components/Admin/Projects/ProjectsAdmin.jsx";
import CertificateAdmin from "./components/Admin/Certificate/CertificateAdmin.jsx";

// User
import Navbar from "./components/User/Navbar/Navbar.jsx";
import Login from "./components/Auth/Login.jsx";
import Home from "./components/User/Home/Home.jsx";
import About from "./components/User/About/About.jsx";
import Education from "./components/User/Education/Education.jsx";
import Experience from "./components/User/Experience/Experience.jsx";
import Skills from "./components/User/Skills/Skills.jsx";
import Projects from "./components/User/Projects/Projects.jsx";
import Certificate from "./components/User/Certificate/Certificate.jsx";
import Contact from "./components/User/Contact/Contact.jsx";
import NotFound from "./components/User/NotFound/NotFound.jsx";

// utils
import authCheck from "./utils/authCheck";

AOS.init();

function App() {
  const [isLogin, setIsLogin] = React.useState(authCheck());
  return (
    <div className="App">
      <ToastContainer
        autoClose={3000}
        toastClassName="dark-toast"
        toastStyle={{ backgroundColor: "#1d1f28" }}
      />
      <BrowserRouter>
        {isLogin ? (
          <>
            <NavbarAdmin isLogged={setIsLogin} />
            <Switch>
              <div className="container py-5">
                <Route exact path="/" component={HomeAdmin} />
                <Route path="/aboutadmin" component={AboutAdmin} />
                <Route path="/educationadmin" component={EducationAdmin} />
                <Route path="/experienceadmin" component={ExperienceAdmin} />
                <Route path="/skillsadmin" component={SkillsAdmin} />
                <Route path="/projectsadmin" component={ProjectsAdmin} />
                <Route path="/certificateadmin" component={CertificateAdmin} />
                <Route path="/about" component={About} />
                <Route path="/education" component={Education} />
                <Route path="/experience" component={Experience} />
                <Route path="/skills" component={Skills} />
                <Route path="/projects" component={Projects} />
                <Route path="/certificate" component={Certificate} />
                <Route path="/contact" component={Contact} />
              </div>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </>
        ) : (
          <>
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
                <Route path="/signin" component={Login} />
              </div>
              <Route path="*" component={NotFound} />
            </Switch>
          </>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
