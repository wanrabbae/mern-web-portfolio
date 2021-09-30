import React from 'react';
import { NavLink } from 'react-router-dom';
import logoImg from '../../../assets/images/logo.png'

function Navbar() {
    return (

        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top" style={{ boxShadow: 'rgba(50, 50, 93, 0.25) -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px' }}>
                <div className="container py-2">
                    <NavLink to="/" className="navbar-brand">
                        Alwan
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink to="/" exact className="nav-link">Home</NavLink>
                            <NavLink to="/about" className="nav-link">About</NavLink>
                            <NavLink to="/education" className="nav-link">Education</NavLink>
                            <NavLink to="/experience" className="nav-link">Experience</NavLink>
                            <NavLink to="/skills" className="nav-link">Skills</NavLink>
                            <NavLink to="/Projects" className="nav-link">Projects</NavLink>
                            <NavLink to="/Contact" className="nav-link">Contact</NavLink>
                        </div>
                        <div className="navbar-nav ms-auto">
                            <NavLink to="/" className="nav-link"><i className="fas fa-lock"></i> Sign In</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div >
    );
}

export default Navbar;