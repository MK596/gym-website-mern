import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Card } from 'react-bootstrap';
import axios from 'axios';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/contact', { name, email, message });
            setSuccess('Message sent successfully! We will get back to you soon.');
            setName('');
            setEmail('');
            setMessage('');
            setError(null);
        } catch (error) {
            setError('Failed to send message. Please try again.');
            setSuccess(null);
        }
    };

    return (
        <Container className="py-5 mt-5">
            <h1 className="text-center text-neon mb-5 fw-bold animate__animated animate__fadeInDown">GET IN TOUCH</h1>
            <Row>
                <Col md={6} className="mb-4 animate__animated animate__fadeInLeft">
                    <h3 className="text-white mb-4">Contact Information</h3>
                    <div className="d-flex align-items-center mb-3">
                        <FaMapMarkerAlt className="text-neon fs-4 me-3" />
                        <p className="text-muted mb-0">123 Fitness Street, Muscle City, CA 90210</p>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                        <FaPhoneAlt className="text-neon fs-4 me-3" />
                        <p className="text-muted mb-0">+1 (555) 123-4567</p>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                        <FaEnvelope className="text-neon fs-4 me-3" />
                        <p className="text-muted mb-0">info@t2kgym.com</p>
                    </div>

                    <Card className="bg-dark text-white p-3 mt-4 border-0">
                        <Card.Body>
                            <Card.Title className="text-neon">Opening Hours</Card.Title>
                            <p className="mb-1">Mon - Fri: 5:00 AM - 11:00 PM</p>
                            <p className="mb-1">Sat: 6:00 AM - 9:00 PM</p>
                            <p>Sun: 7:00 AM - 8:00 PM</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} className="animate__animated animate__fadeInRight">
                    <Card className="p-4 card-custom">
                        <h3 className="text-neon mb-3">Send us a Message</h3>
                        {success && <Alert variant="success">{success}</Alert>}
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form onSubmit={submitHandler}>
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="message">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={4} placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} required />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="w-100">SEND MESSAGE</Button>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
