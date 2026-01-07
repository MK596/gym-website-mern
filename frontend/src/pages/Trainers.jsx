import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Spinner, Alert, Badge, Button } from 'react-bootstrap';
import axios from 'axios';
import { FaInstagram, FaTwitter, FaLinkedin, FaStar, FaQuoteLeft } from 'react-icons/fa';

const Trainers = () => {
    const [trainers, setTrainers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTrainers = async () => {
            try {
                const { data } = await axios.get('/api/trainers');
                setTrainers(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchTrainers();
    }, []);

    return (
        <div>
            {/* Page Header */}
            <div className="page-header" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069')" }}>
                <div className="page-header-content">
                    <h1 className="display-3 fw-bold text-neon animate__animated animate__fadeInDown">MEET THE COACHES</h1>
                    <p className="lead text-white animate__animated animate__fadeInUp">Expert guidance to help you reach your peak.</p>
                </div>
            </div>

            <Container className="py-5">
                {loading ? (
                    <div className="text-center py-5"><Spinner animation="border" variant="primary" /></div>
                ) : error ? (
                    <Alert variant="danger">{error}</Alert>
                ) : (
                    <Row>
                        {trainers.map((trainer) => (
                            <Col key={trainer._id} md={6} lg={4} className="mb-5">
                                <Card className="h-100 bg-dark text-white border-0 shadow-lg trainer-card position-relative overflow-hidden">
                                    {/* Image Section */}
                                    <div className="trainer-img-wrapper position-relative">
                                        <Card.Img variant="top" src={trainer.image} style={{ objectFit: 'cover', height: '400px' }} />
                                        <div className="trainer-overlay">
                                            <div className="d-flex gap-3 justify-content-center">
                                                {trainer.socials?.instagram && <a href={`https://instagram.com/${trainer.socials.instagram}`} className="social-icon"><FaInstagram /></a>}
                                                {trainer.socials?.twitter && <a href={`https://twitter.com/${trainer.socials.twitter}`} className="social-icon"><FaTwitter /></a>}
                                                {trainer.socials?.linkedin && <a href={`https://linkedin.com/in/${trainer.socials.linkedin}`} className="social-icon"><FaLinkedin /></a>}
                                            </div>
                                        </div>
                                    </div>

                                    <Card.Body className="text-center p-4">
                                        <h3 className="text-neon fw-bold mb-1">{trainer.name}</h3>
                                        <p className="text-muted text-uppercase small mb-3 letter-spacing-2">{trainer.specialization}</p>

                                        <div className="mb-3">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar key={i} className={i < Math.round(trainer.rating || 5) ? "text-warning" : "text-muted"} size={14} />
                                            ))}
                                            <span className="ms-2 text-muted small">({trainer.experience})</span>
                                        </div>

                                        <div className="mb-3">
                                            <FaQuoteLeft className="text-neon opacity-50 mb-2" />
                                            <p className="text-gray small fst-italic">"{trainer.bio}"</p>
                                        </div>

                                        {/* Certifications Badges */}
                                        <div className="d-flex flex-wrap justify-content-center gap-2 mt-auto">
                                            {trainer.certifications && trainer.certifications.map((cert, index) => (
                                                <Badge key={index} bg="secondary" className="fw-normal">{cert}</Badge>
                                            ))}
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                )}
            </Container>
        </div>
    );
};

export default Trainers;
