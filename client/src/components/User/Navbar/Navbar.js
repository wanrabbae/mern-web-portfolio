import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <NavLink to="/" className="navbar-brand">Navbar</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                            <NavLink to="/about" className="nav-link">About</NavLink>
                            <NavLink to="/education" className="nav-link">Education</NavLink>
                            <NavLink to="/experience" className="nav-link">Experience</NavLink>
                            <NavLink to="/skills" className="nav-link">Skills</NavLink>
                            <NavLink to="/Projects" className="nav-link">Projects</NavLink>
                            <NavLink to="/Contact" className="nav-link">Contact</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;