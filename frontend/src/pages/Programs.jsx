import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Spinner, Alert, Button, Badge } from 'react-bootstrap';
import axios from 'axios';
import { FaClock, FaFire, FaArrowRight, FaDumbbell } from 'react-icons/fa';
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
        <div className="programs-page bg-black min-vh-100">


            <Container className="pb-5" style={{ paddingTop: '120px' }}>
                {/* Filter Section */}
                <Row className="mb-5 justify-content-center">
                    <Col md={10} className="text-center">
                        <div className="d-flex flex-wrap justify-content-center gap-3">
                            {categories.map(cat => (
                                <Button
                                    key={cat}
                                    variant={filter === cat ? "primary" : "outline-secondary"}
                                    className="px-4 py-2 rounded-0 text-uppercase fw-bold letter-spacing-1"
                                    onClick={() => setFilter(cat)}
                                    style={{ minWidth: '120px' }}
                                >
                                    {cat}
                                </Button>
                            ))}
                        </div>
                    </Col>
                </Row>

                {loading ? (
                    <div className="text-center py-5"><Spinner animation="border" variant="primary" /></div>
                ) : error ? (
                    <Alert variant="danger">{error}</Alert>
                ) : (
                    <Row className="g-4">
                        {filteredPrograms.map((program) => (
                            <Col key={program._id} md={6} lg={4}>
                                <Card className="h-100 bg-dark text-white border border-secondary rounded-0 hover-lift">
                                    <div className="position-relative" style={{ height: '240px', overflow: 'hidden' }}>
                                        <Card.Img
                                            variant="top"
                                            src={program.image}
                                            className="h-100 w-100"
                                            style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                        />
                                        <div className="position-absolute top-0 end-0 p-3">
                                            <Badge bg="primary" className="rounded-0 text-uppercase fw-normal letter-spacing-1 px-3 py-2">
                                                {program.title.split(' ')[0]}
                                            </Badge>
                                        </div>
                                    </div>
                                    <Card.Body className="d-flex flex-column p-4">
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <div className="text-muted small d-flex align-items-center">
                                                <FaClock className="me-2 text-primary" /> {program.duration}
                                            </div>
                                            <div className="text-muted small d-flex align-items-center">
                                                <FaFire className="me-2 text-primary" /> {program.intensity || 'High'}
                                            </div>
                                        </div>
                                        <Card.Title className="fw-bold h4 mb-3 text-uppercase">{program.title}</Card.Title>
                                        <Card.Text className="text-secondary mb-4 flex-grow-1" style={{ fontSize: '0.95rem' }}>
                                            {program.description.substring(0, 100)}...
                                        </Card.Text>
                                        <Link to={`/programs/${program._id}`}>
                                            <Button variant="outline-primary" className="w-100 rounded-0 text-uppercase fw-bold">
                                                View Program <FaArrowRight className="ms-2" size={12} />
                                            </Button>
                                        </Link>
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

export default Programs;
