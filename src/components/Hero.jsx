import React from 'react';
import './Hero.css';
import heroBg from '../assets/hero-bg.png';
import heroTrust from '../assets/hero-trust.png';
import { FaArrowRight, FaRocket } from 'react-icons/fa';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-background">
                <img src={heroBg} alt="Digital Innovation Background" />
                <div className="hero-overlay"></div>
            </div>

            <div className="hero-container">
                <div className="hero-text">
                    <div className="hero-badge">
                        <span className="pulse-icon"></span>
                        <span>Innovating Smarter Digital Solutions</span>
                    </div>

                    <h1 className="hero-title">
                        Innovating Smarter <br />
                        <span className="highlight-text">Digital Solutions</span> <br />
                        for Your Business
                    </h1>

                    <p className="hero-description">
                        CyByTeK Solutions helps businesses grow through powerful ERP systems, modern websites, and scalable custom software. We build seamless digital experiences using Odoo, MERN, and MEAN stacks—crafted for performance, reliability, and long-term success.
                    </p>

                    <div className="hero-buttons">
                        <button className="btn btn-primary">
                            Get Started <FaRocket className="btn-icon" />
                        </button>
                        <button className="btn btn-secondary">
                            Explore Our Services <FaArrowRight className="btn-icon" />
                        </button>
                    </div>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">10+</span>
                            <span className="stat-label">Projects Delivered</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number">98%</span>
                            <span className="stat-label">Client Satisfaction</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number">24/7</span>
                            <span className="stat-label">Support Available</span>
                        </div>
                    </div>
                </div>

                <div className="hero-image">
                    <img src={heroTrust} alt="Trusted by Startups" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
