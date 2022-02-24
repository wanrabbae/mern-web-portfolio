import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";

// Admin
import {
  AboutAdmin,
  CertificateAdmin,
  ContactAdmin,
  EducationAdmin,
  ExperienceAdmin,
  HomeAdmin,
  NavbarAdmin,
  ProjectsAdmin,
  SkillsAdmin,
} from "./components/Admin/index.jsx";

// User
import Login from "./components/Auth/Login.jsx";
import {
  About,
  Certificate,
  Contact,
  Education,
  Experience,
  Home,
  Navbar,
  NotFound,
  Skills,
  Projects,
} from "./components/User/index.jsx";

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
                <Route exact path="/dashboard" component={HomeAdmin} />
                <Route path="/dashboard/about" component={AboutAdmin} />
                <Route path="/dashboard/education" component={EducationAdmin} />
                <Route
                  path="/dashboard/experience"
                  component={ExperienceAdmin}
                />
                <Route path="/dashboard/skills" component={SkillsAdmin} />
                <Route path="/dashboard/projects" component={ProjectsAdmin} />
                <Route
                  path="/dashboard/certificate"
                  component={CertificateAdmin}
                />
                <Route path="/dashboard/contact" component={ContactAdmin} />
                <Route path="/about" component={About} />
                <Route path="/education" component={Education} />
                <Route path="/experience" component={Experience} />
                <Route path="/skills" component={Skills} />
                <Route path="/projects" component={Projects} />
                <Route path="/certificate" component={Certificate} />
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
