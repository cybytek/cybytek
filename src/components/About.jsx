import React from 'react';
import './About.css';
import heroBg from '../assets/hero-bg.png';
import { FaRocket, FaLightbulb, FaFileInvoiceDollar, FaGlobe, FaCogs, FaHandshake, FaAward } from 'react-icons/fa';

const About = () => {
    const journeyItems = [
        {
            year: '2025',
            title: 'Founded in Calicut',
            description: 'CyByTeK Solutions was founded in Calicut, Kerala with a vision to build smart digital solutions.',
            icon: <FaRocket />
        },
        {
            year: 'Early Days',
            title: 'Local Solutions',
            description: 'Started by building small custom websites and internal tools for local businesses.',
            icon: <FaLightbulb />
        },
        {
            year: 'Expansion',
            title: 'Modern Web Apps',
            description: 'Delivered modern web applications using MERN & MEAN stacks.',
            icon: <FaGlobe />
        },
        {
            year: 'Automation',
            title: 'Odoo ERP',
            description: 'Expanded into Odoo ERP customizations for business workflow automation.',
            icon: <FaCogs />
        },
        {
            year: 'Growth',
            title: 'Empowering Startups',
            description: 'Helped startups and small companies build their digital presence with cost-effective solutions.',
            icon: <FaHandshake />
        },
        {
            year: 'Growth',
            title: 'Resume Building Services',
            description: 'Started offering professional resume-building services to help job seekers create clean, modern resumes at the lowest cost.',
            icon: <FaAward />
        }
    ];

    return (
        <section className="about" id="about">
            <div className="about-background">
                <img src={heroBg} alt="Background" />
                <div className="about-overlay"></div>
            </div>
            <div className="about-container">
                <div className="about-header">
                    <h2 className="section-title">Who We Are</h2>
                    <div className="section-line"></div>
                    <p className="about-description">
                        CyByTeK Solutions is a young and passionate technology startup founded in 2025 in Calicut, Kerala.
                        We began our journey with a simple vision — to build smart, scalable, and affordable digital solutions
                        that help businesses grow without complexity.
                    </p>
                    <p className="about-description">
                        What started as a small team with big dreams has now evolved into a dedicated tech company focused
                        on delivering modern, high-performance software solutions. Over time, we have worked on multiple
                        web applications, internal tools, and early-stage digital products for local businesses and entrepreneurs.
                    </p>
                </div>

                <div className="journey-section">
                    <h3 className="journey-title">✨ Our Journey So Far</h3>
                    <div className="timeline">
                        {journeyItems.map((item, index) => (
                            <div className="timeline-item" key={index}>
                                <div className="timeline-icon">
                                    {item.icon}
                                </div>
                                <div className="timeline-content">
                                    <span className="timeline-year">{item.year}</span>
                                    <h4 className="timeline-item-title">{item.title}</h4>
                                    <p className="timeline-text">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
