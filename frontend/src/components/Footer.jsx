import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-5 mt-auto border-top border-secondary">
            <Container>
                <Row>
                    <Col md={4} className="mb-4">
                        <h4 className="text-neon mb-3" style={{ letterSpacing: '2px' }}>T2K GYM</h4>
                        <p className="text-muted">Unlock your potential with the best equipment and trainers in town. Join us today and transform your life.</p>
                    </Col>
                    <Col md={4} className="mb-4">
                        <h5 className="mb-3 text-white">Quick Links</h5>
                        <ul className="list-unstyled text-muted">
                            <li className="mb-2"><a href="/about" className="text-decoration-none text-muted hover-neon">About Us</a></li>
                            <li className="mb-2"><a href="/programs" className="text-decoration-none text-muted hover-neon">Programs</a></li>
                            <li className="mb-2"><a href="/memberships" className="text-decoration-none text-muted hover-neon">Plans</a></li>
                            <li className="mb-2"><a href="/contact" className="text-decoration-none text-muted hover-neon">Contact</a></li>
                        </ul>
                    </Col>
                    <Col md={4} className="mb-4">
                        <h5 className="mb-3 text-white">Connect With Us</h5>
                        <div className="d-flex gap-3">
                            <a href="#" className="text-white fs-5 hover-neon"><FaFacebookF /></a>
                            <a href="#" className="text-white fs-5 hover-neon"><FaTwitter /></a>
                            <a href="#" className="text-white fs-5 hover-neon"><FaInstagram /></a>
                            <a href="#" className="text-white fs-5 hover-neon"><FaLinkedinIn /></a>
                        </div>
                    </Col>
                </Row>
                <Row className="text-center mt-4 border-top border-secondary pt-3">
                    <Col>
                        <p className="mb-0 text-muted">&copy; {new Date().getFullYear()} T2K Gym. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
