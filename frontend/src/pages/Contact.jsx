import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Card } from 'react-bootstrap';
import axios from 'axios';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/contact', { name, email, phone, message });
            setSuccess('Message sent successfully! We will get back to you soon.');
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
            setError(null);
        } catch (error) {
            setError('Failed to send message. Please try again.');
            setSuccess(null);
        }
    };

    return (
        <div className="contact-page bg-black min-vh-100" style={{ paddingTop: '100px' }}>
            <Container className="py-5">
                <div className="text-center mb-5">
                    <h5 className="text-primary text-uppercase letter-spacing-3 fw-bold mb-2">Connect</h5>
                    <h1 className="display-4 fw-bold text-white text-uppercase">GET IN <span className="text-primary">TOUCH</span></h1>
                </div>



                <Row className="g-5">
                    <Col lg={7} className="animate__animated animate__fadeInLeft order-2 order-lg-1">
                        <Card className="p-4 p-md-5 bg-dark border-0 rounded-0 shadow-lg">
                            <h3 className="text-white text-uppercase fw-bold mb-4">Send us a Message</h3>
                            {success && <Alert variant="success" className="rounded-0 border-0 bg-success text-white mb-4">{success}</Alert>}
                            {error && <Alert variant="danger" className="rounded-0 border-0 bg-danger text-white mb-4">{error}</Alert>}
                            <Form onSubmit={submitHandler}>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-4 form-group-custom" controlId="name">
                                            <Form.Label className="text-secondary text-uppercase small letter-spacing-1">Full Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="John Doe"
                                                className="rounded-0 bg-black text-white py-3 form-control-custom"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-4 form-group-custom" controlId="email">
                                            <Form.Label className="text-secondary text-uppercase small letter-spacing-1">Email Address</Form.Label>
                                            <Form.Control
                                                type="email"
                                                placeholder="john@example.com"
                                                className="rounded-0 bg-black text-white py-3 form-control-custom"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group className="mb-4 form-group-custom" controlId="phone">
                                    <Form.Label className="text-secondary text-uppercase small letter-spacing-1">Phone Number</Form.Label>
                                    <PhoneInput
                                        country={'in'}
                                        value={phone}
                                        onChange={phone => setPhone(phone)}
                                        inputClass="rounded-0 bg-black text-white py-3 w-100 form-control-custom"
                                        containerClass="phone-input-container"
                                        buttonClass="phone-input-button"
                                        dropdownClass="phone-input-dropdown"
                                        placeholder="+91 0000000000"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-4 form-group-custom" controlId="message">
                                    <Form.Label className="text-secondary text-uppercase small letter-spacing-1">Your Message</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={5}
                                        placeholder="Tell us about your goals..."
                                        className="rounded-0 bg-black text-white py-3 form-control-custom"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="w-100 rounded-0 py-3 text-uppercase fw-bold letter-spacing-2">
                                    Send Message Now
                                </Button>
                            </Form>
                        </Card>
                    </Col>

                    <Col lg={5} className="animate__animated animate__fadeInRight order-1 order-lg-2">
                        <div className="ps-lg-4">
                            {/* Desktop Heading */}
                            <h3 className="text-white text-uppercase fw-bold mb-4 d-none d-lg-block">Connect With Us</h3>

                            {/* Mobile Contact Quick Board (Now placed here for mobile flow) */}
                            <div className="d-lg-none mb-4">
                                <Card className="bg-dark border-0 rounded-0 overflow-hidden shadow-lg border-start border-primary border-4">
                                    <Card.Body className="p-0">
                                        <div className="d-flex border-bottom border-secondary border-opacity-25">
                                            <a href="tel:+15551234567" className="flex-fill text-center py-3 border-end border-secondary border-opacity-25 text-decoration-none">
                                                <FaPhoneAlt className="text-primary mb-1 d-block mx-auto fs-5" />
                                                <small className="text-white text-uppercase letter-spacing-1" style={{ fontSize: '10px' }}>Call Now</small>
                                            </a>
                                            <a href="mailto:info@t2kgym.com" className="flex-fill text-center py-3 text-decoration-none">
                                                <FaEnvelope className="text-primary mb-1 d-block mx-auto fs-5" />
                                                <small className="text-white text-uppercase letter-spacing-1" style={{ fontSize: '10px' }}>Email Us</small>
                                            </a>
                                        </div>
                                        <div className="p-3 text-center bg-black bg-opacity-50">
                                            <FaMapMarkerAlt className="text-primary mb-2 fs-5" />
                                            <p className="text-secondary small mb-0 px-3">123 Fitness Street, Muscle City, CA 90210</p>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="d-none d-lg-flex align-items-center mb-4 p-3 bg-dark border-start border-primary border-3">
                                <FaMapMarkerAlt className="text-primary fs-3 me-4" />
                                <div>
                                    <h6 className="text-white text-uppercase mb-1 small letter-spacing-1">Location</h6>
                                    <p className="text-secondary mb-0">123 Fitness Street, Muscle City, CA 90210</p>
                                </div>
                            </div>
                            <div className="d-none d-lg-flex align-items-center mb-4 p-3 bg-dark border-start border-primary border-3">
                                <FaPhoneAlt className="text-primary fs-3 me-4" />
                                <div>
                                    <h6 className="text-white text-uppercase mb-1 small letter-spacing-1">Phone</h6>
                                    <p className="text-secondary mb-0">+1 (555) 123-4567</p>
                                </div>
                            </div>
                            <div className="d-none d-lg-flex align-items-center mb-4 p-3 bg-dark border-start border-primary border-3">
                                <FaEnvelope className="text-primary fs-3 me-4" />
                                <div>
                                    <h6 className="text-white text-uppercase mb-1 small letter-spacing-1">Email</h6>
                                    <p className="text-secondary mb-0">info@t2kgym.com</p>
                                </div>
                            </div>

                            <Card className="bg-dark border-0 p-4 mt-lg-5 rounded-0 d-none d-lg-block">
                                <h5 className="text-primary text-uppercase mb-3 letter-spacing-1">Opening Hours</h5>
                                <div className="d-flex justify-content-between text-secondary mb-2 pb-2 border-bottom border-secondary border-opacity-25">
                                    <span>Monday - Friday</span>
                                    <span className="text-white">5:00 AM - 11:00 PM</span>
                                </div>
                                <div className="d-flex justify-content-between text-secondary mb-2 pb-2 border-bottom border-secondary border-opacity-25">
                                    <span>Saturday</span>
                                    <span className="text-white">6:00 AM - 9:00 PM</span>
                                </div>
                                <div className="d-flex justify-content-between text-secondary">
                                    <span>Sunday</span>
                                    <span className="text-white">7:00 AM - 8:00 PM</span>
                                </div>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;
