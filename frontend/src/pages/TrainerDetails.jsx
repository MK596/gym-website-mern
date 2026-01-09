import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Badge, Spinner, Alert, Button } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { FaInstagram, FaTwitter, FaLinkedin, FaCertificate, FaArrowLeft, FaStar } from 'react-icons/fa';

const TrainerDetails = () => {
    const { id } = useParams();
    const [trainer, setTrainer] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTrainer = async () => {
            try {
                const { data } = await axios.get(`/api/trainers/${id}`);
                setTrainer(data);
                setLoading(false);
            } catch (err) {
                setError('Trainer not found');
                setLoading(false);
            }
        };
        fetchTrainer();
        window.scrollTo(0, 0);
    }, [id]);

    if (loading) return (
        <div className="bg-black min-vh-100 d-flex align-items-center justify-content-center">
            <Spinner animation="border" variant="primary" />
        </div>
    );

    if (error) return (
        <div className="bg-black min-vh-100 py-5 mt-5">
            <Container>
                <Alert variant="danger">{error}</Alert>
                <Link to="/trainers">
                    <Button variant="outline-primary">Back to Trainers</Button>
                </Link>
            </Container>
        </div>
    );

    return (
        <div className="trainer-details-page bg-black min-vh-100">
            {/* Header / Back Button */}
            <div className="position-fixed top-0 start-0 w-100 p-3 z-3 d-lg-none" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)' }}>
                <Link to="/trainers" className="text-white">
                    <FaArrowLeft size={24} />
                </Link>
            </div>

            <Container className="pb-5 pt-lg-5" style={{ paddingTop: '80px' }}>
                <Row className="g-5">
                    <Col lg={5}>
                        <div className="position-relative">
                            <div className="position-absolute w-100 h-100 border border-primary d-none d-lg-block" style={{ top: '20px', left: '20px', zIndex: 0 }}></div>
                            <img
                                src={trainer.image}
                                alt={trainer.name}
                                className="img-fluid w-100 position-relative shadow-lg"
                                style={{ zIndex: 1, objectFit: 'cover', height: '600px' }}
                            />
                        </div>
                    </Col>
                    <Col lg={7}>
                        <div className="ps-lg-4">
                            <div className="d-flex align-items-center gap-3 mb-3">
                                <Badge bg="primary" className="rounded-0 text-uppercase letter-spacing-2 px-3 py-2">
                                    {trainer.experience} Experience
                                </Badge>
                                <div className="text-primary d-flex align-items-center gap-1 fw-bold">
                                    <FaStar /> {trainer.rating || '5.0'}
                                </div>
                            </div>

                            <h1 className="display-3 fw-bold text-white text-uppercase mb-2">{trainer.name}</h1>
                            <h4 className="text-primary text-uppercase letter-spacing-3 mb-4">{trainer.specialization}</h4>

                            <hr className="border-secondary opacity-25 mb-4" />

                            <p className="lead text-secondary mb-5" style={{ lineHeight: '1.8' }}>
                                {trainer.bio}
                            </p>

                            <h5 className="text-white text-uppercase letter-spacing-2 mb-3">Professional Certifications</h5>
                            <div className="d-flex flex-wrap gap-2 mb-5">
                                {trainer.certifications?.map((cert, i) => (
                                    <Badge key={i} bg="dark" className="border border-secondary fw-normal text-secondary rounded-0 px-3 py-2 fs-6">
                                        <FaCertificate className="me-2 text-primary" /> {cert}
                                    </Badge>
                                ))}
                            </div>

                            <div className="bg-dark p-4 border-start border-primary border-4 mb-5">
                                <h5 className="text-white mb-3">Connect with {trainer.name.split(' ')[0]}</h5>
                                <div className="d-flex gap-4">
                                    {trainer.socials?.instagram && (
                                        <a href={`https://instagram.com/${trainer.socials.instagram}`} target="_blank" rel="noopener noreferrer" className="text-white hover-primary fs-4">
                                            <FaInstagram />
                                        </a>
                                    )}
                                    {trainer.socials?.twitter && (
                                        <a href={`https://twitter.com/${trainer.socials.twitter}`} target="_blank" rel="noopener noreferrer" className="text-white hover-primary fs-4">
                                            <FaTwitter />
                                        </a>
                                    )}
                                    {trainer.socials?.linkedin && (
                                        <a href={`https://linkedin.com/in/${trainer.socials.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-white hover-primary fs-4">
                                            <FaLinkedin />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="d-flex gap-3">
                                <Link to="/contact">
                                    <Button variant="primary" size="lg" className="rounded-0 px-5 py-3 text-uppercase fw-bold letter-spacing-1">
                                        Book Session
                                    </Button>
                                </Link>
                                <Link to="/trainers" className="d-none d-lg-inline-block">
                                    <Button variant="outline-light" size="lg" className="rounded-0 px-5 py-3 text-uppercase fw-bold letter-spacing-1">
                                        All Trainers
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <style>
                {`
                    .hover-primary:hover { color: var(--primary-color) !important; transition: color 0.3s; }
                    .letter-spacing-3 { letter-spacing: 3px; }
                `}
            </style>
        </div>
    );
};

export default TrainerDetails;
