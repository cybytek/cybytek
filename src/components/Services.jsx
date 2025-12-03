import React from 'react';
import './Services.css';
import heroBg from '../assets/hero-bg.png';
import { FaLaptopCode, FaCogs, FaFileInvoiceDollar, FaFileAlt, FaCode, FaArrowRight } from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            title: 'Website Development',
            description: 'Custom websites using MERN / MEAN stacks. We build business portfolios, e-commerce platforms, and dynamic web apps tailored to your brand.',
            icon: <FaLaptopCode />,
            features: ['MERN / MEAN Stack', 'Business Websites', 'E-commerce Solutions']
        },
        {
            title: 'Odoo ERP Development',
            description: 'Streamline your business operations with custom Odoo ERP modules. We automate workflows, billing, and inventory management.',
            icon: <FaCogs />,
            features: ['Custom Modules', 'Workflow Automation', 'Inventory Systems']
        },

        {
            title: 'Custom Software',
            description: 'Tailor-made software solutions to solve specific business problems. From internal tools to complex automation systems.',
            icon: <FaCode />,
            features: ['Internal Tools', 'Automation Systems', 'Scalable Architecture']
        },
        {
            title: 'Resume Building',
            description: 'Professional and modern resume building services. We help job seekers create impactful resumes at an affordable cost.',
            icon: <FaFileAlt />,
            features: ['Modern Designs', 'ATS Friendly', 'Affordable']
        }
    ];

    return (
        <section className="services" id="services">
            <div className="services-background">
                <img src={heroBg} alt="Background" />
                <div className="services-overlay"></div>
            </div>

            <div className="services-container">
                <div className="services-header">
                    <h2 className="section-title">What We Do</h2>
                    <div className="section-line"></div>
                    <p className="services-description">
                        We deliver high-performance digital solutions tailored to your business needs.
                        From custom web development to powerful ERP systems, we have you covered.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div className="service-card" key={index}>
                            <div className="service-icon-wrapper">
                                {service.icon}
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-text">{service.description}</p>
                            <ul className="service-features">
                                {service.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>
                            <a href="#contact" className="service-link">
                                Learn More <FaArrowRight />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
