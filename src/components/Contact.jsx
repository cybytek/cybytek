import React from 'react';
import './Contact.css';
import heroBg from '../assets/hero-bg.png';
import { FaPaperPlane, FaUser, FaEnvelope, FaPhone, FaCommentAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="contact-background">
                <img src={heroBg} alt="Background" />
                <div className="contact-overlay"></div>
            </div>

            <div className="contact-container">
                <div className="contact-content-wrapper">
                    <div className="contact-info">
                        <h2 className="contact-heading">
                            🤝 Let’s Partner for <br />
                            <span className="highlight-text">Your Growth</span>
                        </h2>
                        <p className="contact-description">
                            Whether it's a website, ERP solution, custom software, or resume-building support,
                            CyByTeK Solutions is ready to deliver modern, scalable, and affordable solutions for your business.
                        </p>
                        <div className="contact-decoration">
                            <div className="decoration-circle"></div>
                            <div className="decoration-line"></div>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <h3 className="form-title">Send us a Message</h3>

                            <div className="form-group">
                                <div className="input-icon">
                                    <FaUser />
                                </div>
                                <input type="text" placeholder="Name" className="form-input" required />
                            </div>

                            <div className="form-group">
                                <div className="input-icon">
                                    <FaEnvelope />
                                </div>
                                <input type="email" placeholder="Email" className="form-input" required />
                            </div>

                            <div className="form-group">
                                <div className="input-icon">
                                    <FaPhone />
                                </div>
                                <input type="tel" placeholder="Phone (Optional)" className="form-input" />
                            </div>

                            <div className="form-group">
                                <div className="input-icon textarea-icon">
                                    <FaCommentAlt />
                                </div>
                                <textarea placeholder="Your Message" className="form-input form-textarea" rows="4" required></textarea>
                            </div>

                            <button type="submit" className="submit-btn">
                                Send Message <FaPaperPlane className="btn-icon" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
