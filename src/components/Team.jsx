import React from 'react';
import './Team.css';
import heroBg from '../assets/hero-bg.png';
import akashImg from '../assets/akash.jpg';
import ashwinImg from '../assets/ashwin.png';
import avanthikImg from '../assets/avanthik.png';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Team = () => {
    const teamMembers = [
        {
            name: 'Akash PC',
            role: 'CEO & Founder',
            image: akashImg,
            description: 'Visionary leader with a passion for technology and innovation. Founded CyByTeK to bridge the gap between complex tech and business needs.',
            social: {
                linkedin: '#',
                twitter: '#',
                email: 'mailto:akash@cybytek.com'
            }
        },
        {
            name: 'Ashwin T',
            role: 'Co-Founder & CTO',
            image: ashwinImg,
            description: 'Tech enthusiast and architect behind our scalable solutions. Leads the technical strategy and ensures we stay ahead of the curve.',
            social: {
                linkedin: '#',
                twitter: '#',
                email: 'mailto:ashwin@cybytek.com'
            }
        },
        {
            name: 'Avanthik',
            role: 'Co-Founder & Head of Operations',
            image: avanthikImg,
            description: 'The operational backbone of CyByTeK. Ensures smooth business processes and drives strategic growth initiatives.',
            social: {
                linkedin: '#',
                twitter: '#',
                email: 'mailto:avanthik@cybytek.com'
            }
        }
    ];

    return (
        <section className="team" id="team">
            <div className="team-background">
                <img src={heroBg} alt="Background" />
                <div className="team-overlay"></div>
            </div>

            <div className="team-container">
                <div className="team-header">
                    <h2 className="section-title">Meet Our Team</h2>
                    <div className="section-line"></div>
                    <p className="team-description">
                        The passionate minds behind CyByTeK Solutions, dedicated to delivering excellence.
                    </p>
                </div>

                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <div className="team-card" key={index}>
                            <div className="member-image-wrapper">
                                <img src={member.image} alt={member.name} className="member-image" />
                            </div>
                            <div className="member-info">
                                <h3 className="member-name">{member.name}</h3>
                                <p className="member-role">{member.role}</p>
                                <p className="member-bio">{member.description}</p>
                                <div className="member-social">
                                    <a href={member.social.linkedin} className="social-link"><FaLinkedin /></a>
                                    <a href={member.social.twitter} className="social-link"><FaTwitter /></a>
                                    <a href={member.social.email} className="social-link"><FaEnvelope /></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
