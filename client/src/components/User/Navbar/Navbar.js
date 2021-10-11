import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css'

function Navbar({ isLogged }) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${style.navbarShadow}`}>
                <div className="container py-2">
                    <NavLink to="/" className="navbar-brand">
                        <span style={{ color: '#0095EB' }}>akhmadalwan</span>
                    </NavLink>
                    <button className={`navbar-toggler ${style.navbarHumbergerButton} ${style.navbarHumbergerButtonFocusOutline}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-center" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink to="/" exact className="nav-link">Home</NavLink>
                            <NavLink to="/about" className="nav-link">About</NavLink>
                            <NavLink to="/education" className="nav-link">Education</NavLink>
                            <NavLink to="/experience" className="nav-link">Experience</NavLink>
                            <NavLink to="/skills" className="nav-link">Skills</NavLink>
                            <NavLink to="/Projects" className="nav-link">Projects</NavLink>
                            <NavLink to="/certificate" className="nav-link">Certificate</NavLink>
                            <NavLink to="/Contact" className="nav-link">Contact</NavLink>
                        </div>
                        <div className="navbar-nav ms-auto" onClick={() => isLogged(true)}>
                            <NavLink to="/" className="nav-link"><i className="fas fa-lock"></i> Sign In</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div >
    );
}

export default Navbar;