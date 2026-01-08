import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Spinner, Alert, Badge } from 'react-bootstrap';
import axios from 'axios';
import { FaInstagram, FaTwitter, FaLinkedin, FaQuoteLeft, FaCertificate } from 'react-icons/fa';

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
        <div className="trainers-page bg-black min-vh-100">


            <Container className="pb-5" style={{ paddingTop: '120px' }}>
                {loading ? (
                    <div className="text-center py-5"><Spinner animation="border" variant="primary" /></div>
                ) : error ? (
                    <Alert variant="danger">{error}</Alert>
                ) : (
                    <Row className="g-5">
                        {trainers.map((trainer) => (
                            <Col key={trainer._id} md={6} lg={4}>
                                <Card className="h-100 bg-transparent border-0">
                                    {/* Image Container */}
                                    <div className="position-relative mb-4" style={{ height: '450px' }}>
                                        <div className="position-absolute w-100 h-100 border border-primary" style={{ top: '15px', left: '15px', zIndex: 0 }}></div>
                                        <Card.Img
                                            variant="top"
                                            src={trainer.image}
                                            className="h-100 w-100 position-relative"
                                            style={{ objectFit: 'cover', zIndex: 1 }}
                                        />
                                        <div className="position-absolute bottom-0 start-0 w-100 p-4 bg-gradient-to-t from-black" style={{ zIndex: 2, background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
                                            <div className="d-flex gap-3 justify-content-center">
                                                {trainer.socials?.instagram && <a href={`https://instagram.com/${trainer.socials.instagram}`} className="text-white hover-primary transition-all"><FaInstagram size={20} /></a>}
                                                {trainer.socials?.twitter && <a href={`https://twitter.com/${trainer.socials.twitter}`} className="text-white hover-primary transition-all"><FaTwitter size={20} /></a>}
                                                {trainer.socials?.linkedin && <a href={`https://linkedin.com/in/${trainer.socials.linkedin}`} className="text-white hover-primary transition-all"><FaLinkedin size={20} /></a>}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="text-center">
                                        <h3 className="text-white text-uppercase fw-bold mb-1">{trainer.name}</h3>
                                        <p className="text-primary text-uppercase letter-spacing-2 small mb-3">{trainer.specialization}</p>

                                        <div className="d-flex justify-content-center mb-4">
                                            <FaQuoteLeft className="text-secondary opacity-25 me-2" size={12} />
                                            <p className="text-secondary small fst-italic mb-0" style={{ maxWidth: '80%' }}>"{trainer.bio.substring(0, 80)}..."</p>
                                        </div>

                                        <div className="d-flex flex-wrap justify-content-center gap-2">
                                            {trainer.certifications && trainer.certifications.slice(0, 2).map((cert, index) => (
                                                <Badge key={index} bg="dark" className="border border-secondary fw-normal text-secondary rounded-0 px-2 py-1">
                                                    <FaCertificate className="me-1 text-primary" size={10} /> {cert}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                )}
            </Container>
            <style>
                {`
                    .hover-primary:hover { color: var(--primary-color) !important; }
                `}
            </style>
        </div>
    );
};

export default Trainers;
