import React, { useState } from 'react';
import { FaHome, FaServicestack, FaBriefcase, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <a href="/">
                        <img src={logo} alt="Cybytek Solutions" />
                    </a>
                </div>
                <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
                    <a href="#home" className="navbar-item" onClick={() => setIsOpen(false)}><FaHome /> Home</a>
                    <a href="#services" className="navbar-item" onClick={() => setIsOpen(false)}><FaServicestack /> Services</a>
                    <a href="#careers" className="navbar-item" onClick={() => setIsOpen(false)}><FaBriefcase /> Careers</a>
                    <a href="#about" className="navbar-item" onClick={() => setIsOpen(false)}><FaInfoCircle /> About Us</a>
                    <a href="#contact" className="navbar-item" onClick={() => setIsOpen(false)}><FaEnvelope /> Contact Us</a>
                </div>
                <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
                    <span className={`bar ${isOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${isOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${isOpen ? 'open' : ''}`}></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
