import React from "react";
import { NavLink } from "react-router-dom";
import Cookies from "js-cookie";
import style from "./NavbarAdmin.module.css";
import { toast } from "react-toastify";

function Sidebar({ isLogged }) {
  const handleLogout = () => {
    isLogged(false);
    Cookies.set("token", "", { expires: -1 });
    toast.success("Logout Successfully!");
  };

  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-dark fixed-top ${style.navbarShadow}`}
      >
        <div className="container py-2">
          <NavLink to="/" className="navbar-brand">
            <span style={{ color: "#0095EB" }}>Admin Mode</span>
          </NavLink>
          <button
            className={`navbar-toggler ${style.navbarHumbergerButton} ${style.navbarHumbergerButtonFocusOutline}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse text-center"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <NavLink to="/" exact className="nav-link">
                Home
              </NavLink>
              <NavLink to="/aboutadmin" className="nav-link">
                About
              </NavLink>
              <NavLink to="/educationadmin" className="nav-link">
                Education
              </NavLink>
              <NavLink to="/experienceadmin" className="nav-link">
                Experience
              </NavLink>
              <NavLink to="/skillsadmin" className="nav-link">
                Skills
              </NavLink>
              <NavLink to="/projectsadmin" className="nav-link">
                Projects
              </NavLink>
              <NavLink to="/certificateadmin" className="nav-link">
                Certificate
              </NavLink>
              <NavLink to="/contactadmin" className="nav-link">
                Contacts
              </NavLink>
            </div>
            <div className="navbar-nav ms-auto" onClick={() => handleLogout()}>
              <NavLink to="/" className="nav-link">
                <i className="fas fa-sign-out-alt"></i> Logout
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
