import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer-section pt-5 border-top border-dark" style={{ backgroundColor: '#0a0a0a', color: '#b0b0b0' }}>
            <Container className="pb-5">
                <Row className="gy-5">
                    {/* Brand Column */}
                    <Col lg={4} md={6}>
                        <h3 className="text-white fw-bold mb-4 text-uppercase letter-spacing-2">T2K<span className="text-primary">GYM</span></h3>
                        <p className="mb-4" style={{ maxWidth: '300px' }}>
                            Forging bodies and breaking limits since 2010.
                            Join the elite community dedicated to physical excellence.
                        </p>
                        <div className="d-flex gap-3 social-links">
                            {[
                                { icon: <FaFacebookF />, url: '#' },
                                { icon: <FaTwitter />, url: '#' },
                                { icon: <FaInstagram />, url: '#' },
                                { icon: <FaYoutube />, url: '#' }
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.url}
                                    className="d-flex align-items-center justify-content-center rounded-circle text-white transition-all"
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        backgroundColor: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(255,255,255,0.1)'
                                    }}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </Col>

                    {/* Quick Links */}
                    <Col lg={2} md={6}>
                        <h5 className="text-white text-uppercase fw-bold mb-4">Explore</h5>
                        <ul className="list-unstyled d-flex flex-column gap-2">
                            {['Home', 'About', 'Programs', 'Trainers', 'Memberships'].map((item) => (
                                <li key={item}>
                                    <Link
                                        to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                        className="text-decoration-none footer-link transition-all"
                                        style={{ color: '#b0b0b0' }}
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Col>

                    {/* Contact Info */}
                    <Col lg={3} md={6}>
                        <h5 className="text-white text-uppercase fw-bold mb-4">Contact</h5>
                        <ul className="list-unstyled d-flex flex-column gap-3">
                            <li className="d-flex gap-3">
                                <FaMapMarkerAlt className="text-neon mt-1" />
                                <span>123 Iron Street, Muscle City, Gym State 90210</span>
                            </li>
                            <li className="d-flex gap-3">
                                <FaPhoneAlt className="text-neon mt-1" />
                                <span>+1 (555) 0123-4567</span>
                            </li>
                            <li className="d-flex gap-3">
                                <FaEnvelope className="text-neon mt-1" />
                                <span>inquiries@t2kgym.com</span>
                            </li>
                        </ul>
                    </Col>

                    {/* Newsletter */}
                    <Col lg={3} md={6}>
                        <h5 className="text-white text-uppercase fw-bold mb-4">Newsletter</h5>
                        <p className="small mb-3">Subscribe for workout tips and exclusive offers.</p>
                        <Form className="d-flex flex-column gap-2">
                            <Form.Control
                                type="email"
                                placeholder="Your Email Address"
                                className="bg-transparent border-secondary text-white p-3"
                                style={{ borderRadius: '2px' }}
                            />
                            <Button variant="primary" className="w-100 py-3 text-uppercase fw-bold" style={{ borderRadius: '2px' }}>
                                Subscribe
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>

            {/* Copyright */}
            <div className="py-4 mt-4 text-center border-top border-dark" style={{ backgroundColor: '#050505' }}>
                <p className="mb-0 small opacity-50">
                    &copy; {new Date().getFullYear()} T2K Gym. All Rights Reserved.
                    <span className="mx-2">|</span>
                    <Link to="#" className="text-decoration-none text-muted">Privacy Policy</Link>
                </p>
            </div>

            <style>
                {`
                    .footer-link:hover {
                        color: var(--primary-color) !important;
                        padding-left: 5px;
                    }
                    .social-links a:hover {
                        background-color: var(--primary-color) !important;
                        transform: translateY(-3px);
                        border-color: var(--primary-color) !important;
                    }
                `}
            </style>
        </footer>
    );
};

export default Footer;
