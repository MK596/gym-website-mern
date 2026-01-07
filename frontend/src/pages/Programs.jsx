import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Spinner, Alert, Button, Badge } from 'react-bootstrap';
import axios from 'axios';
import { FaClock, FaFire, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Programs = () => {
    const [programs, setPrograms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        const fetchPrograms = async () => {
            try {
                const { data } = await axios.get('/api/programs');
                setPrograms(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchPrograms();
    }, []);

    const filteredPrograms = filter === 'All' ? programs : programs.filter(p => p.title.toLowerCase().includes(filter.toLowerCase()));

    const categories = ['All', 'Strength', 'Yoga', 'Cardio', 'CrossFit'];

    return (
        <div>
            {/* Page Header */}
            <div className="page-header" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070')" }}>
                <div className="page-header-content">
                    <h1 className="display-3 fw-bold text-neon animate__animated animate__fadeInDown">TRAINING PROGRAMS</h1>
                    <p className="lead text-white animate__animated animate__fadeInUp">Push Your Limits. Break Barriers.</p>
                </div>
            </div>

            <Container className="py-5">
                {/* Filter Section */}
                <Row className="mb-5 justify-content-center">
                    <Col md={8} className="text-center">
                        <div className="btn-group flex-wrap gap-2" role="group">
                            {categories.map(cat => (
                                <Button
                                    key={cat}
                                    variant={filter === cat ? "primary" : "outline-secondary"}
                                    className="rounded-pill px-4 py-2 m-1"
                                    onClick={() => setFilter(cat)}
                                >
                                    {cat}
                                </Button>
                            ))}
                        </div>
                    </Col>
                </Row>

                {loading ? (
                    <div className="text-center py-5"><Spinner animation="border" variant="warning" /></div>
                ) : error ? (
                    <Alert variant="danger">{error}</Alert>
                ) : (
                    <Row>
                        {filteredPrograms.map((program) => (
                            <Col key={program._id} md={6} lg={4} className="mb-5">
                                <Card className="h-100 bg-dark text-white border-0 shadow-lg program-card">
                                    <div className="program-card-img-wrapper">
                                        <Card.Img variant="top" src={program.image} style={{ objectFit: 'cover', height: '100%', width: '100%' }} />
                                        <div className="program-overlay">
                                            <Link to={`/programs/${program._id}`}>
                                                <Button variant="outline-light" className="rounded-pill px-4">View Details</Button>
                                            </Link>
                                        </div>
                                    </div>
                                    <Card.Body className="d-flex flex-column p-4">
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <Badge bg="warning" text="dark" className="px-3 py-2">
                                                {program.title.includes('Yoga') ? 'Wellness' : program.title.includes('HIIT') ? 'Endurance' : 'Strength'}
                                            </Badge>
                                            <div className="text-muted small"><FaClock className="me-1" /> {program.duration}</div>
                                        </div>
                                        <Card.Title className="text-neon fw-bold fs-4 mb-3">{program.title}</Card.Title>
                                        <Card.Text className="text-gray flex-grow-1">
                                            {program.description}
                                        </Card.Text>
                                        <div className="border-top border-secondary pt-3 mt-3 d-flex justify-content-between align-items-center">
                                            <span className="text-white small"><FaFire className="text-danger me-1" /> {program.intensity || 'High Intensity'}</span>
                                            <Link to={`/programs/${program._id}`} className="text-neon fw-bold text-decoration-none">
                                                Learn More <FaArrowRight />
                                            </Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                        {filteredPrograms.length === 0 && (
                            <Col className="text-center py-5">
                                <h3 className="text-muted">No programs found for this category.</h3>
                            </Col>
                        )}
                    </Row>
                )}
            </Container>
        </div>
    );
};

export default Programs;
