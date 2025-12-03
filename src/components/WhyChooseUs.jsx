import React from 'react';
import './WhyChooseUs.css';
import heroBg from '../assets/hero-bg.png';
import { FaHandHoldingUsd, FaBolt, FaLayerGroup, FaDraftingCompass, FaChartLine, FaHeadset, FaUsers } from 'react-icons/fa';

const WhyChooseUs = () => {
    const features = [
        {
            title: 'Startup-Friendly Pricing',
            description: 'We offer cost-effective solutions designed especially for startups, small businesses, and early-stage companies who want quality without overspending.',
            icon: <FaHandHoldingUsd />
        },
        {
            title: 'Fast & Reliable Delivery',
            description: 'Our streamlined workflow ensures quick delivery without compromising quality. Every project is built with clean, maintainable code.',
            icon: <FaBolt />
        },
        {
            title: 'Modern Tech Expertise',
            description: 'We work with powerful, future-ready technologies including Odoo ERP, MERN, MEAN, and custom automation tools.',
            icon: <FaLayerGroup />
        },
        {
            title: 'Tailor-Made Solutions',
            description: 'Every business is unique—so we build custom digital products that match your exact requirement, workflow, and business goals.',
            icon: <FaDraftingCompass />
        },
        {
            title: 'Scalable & Future-Ready',
            description: 'All our systems are designed to grow with your business, ensuring long-term reliability and easy expansion.',
            icon: <FaChartLine />
        },
        {
            title: 'Dedicated Support',
            description: 'We believe in building long-term relationships. Our team provides ongoing support, updates, and improvements whenever needed.',
            icon: <FaHeadset />
        },
        {
            title: 'Young, Passionate & Creative Team',
            description: 'CyByTeK is driven by a passionate group of developers who love solving problems, experimenting with ideas, and delivering smart solutions.',
            icon: <FaUsers />
        }
    ];

    return (
        <section className="why-choose-us" id="why-choose-us">
            <div className="wcu-background">
                <img src={heroBg} alt="Background" />
                <div className="wcu-overlay"></div>
            </div>

            <div className="wcu-container">
                <div className="wcu-header">
                    <h2 className="section-title">Why Choose Us</h2>
                    <div className="section-line"></div>
                    <p className="wcu-description">
                        At CyByTeK Solutions, we focus on delivering modern, scalable, and affordable digital solutions that help businesses grow without complications.
                        As a young and energetic tech team, we combine creativity, technology, and precision to build systems that truly make a difference.
                    </p>
                </div>

                <div className="wcu-grid">
                    {features.map((feature, index) => (
                        <div className="wcu-card" key={index}>
                            <div className="wcu-icon-wrapper">
                                {feature.icon}
                            </div>
                            <h3 className="wcu-title">{feature.title}</h3>
                            <p className="wcu-text">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
