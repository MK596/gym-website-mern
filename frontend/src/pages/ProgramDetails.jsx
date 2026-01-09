import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Spinner, Alert, ListGroup, Button, Badge } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { FaClock, FaFire, FaCalendarAlt, FaCheck, FaArrowLeft } from 'react-icons/fa';

const ProgramDetails = () => {
    const { id } = useParams();
    const [program, setProgram] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProgram = async () => {
            try {
                const { data } = await axios.get(`/api/programs/${id}`);
                setProgram(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchProgram();
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
                <Link to="/programs" className="btn btn-outline-primary">Back to Programs</Link>
            </Container>
        </div>
    );

    if (!program) return null;

    return (
        <div className="program-details bg-black min-vh-100">
            {/* High Impact Hero */}
            <div className="position-relative" style={{ height: '60vh', minHeight: '400px' }}>
                <div className="position-absolute w-100 h-100" style={{
                    backgroundImage: `url('${program.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.4)'
                }}></div>
                <div className="position-absolute w-100 h-100 bg-gradient-to-t from-black"></div>

                <Container className="position-relative h-100 d-flex flex-column justify-content-end pb-5">
                    <Link to="/programs" className="text-white text-decoration-none mb-4 d-inline-flex align-items-center opacity-75 hover-opacity-100">
                        <FaArrowLeft className="me-2" /> Back to Programs
                    </Link>
                    <Badge bg="primary" className="rounded-0 text-uppercase letter-spacing-2 px-3 py-2 mb-3 align-self-start">
                        {program.intensity} Intensity
                    </Badge>
                    <h1 className="display-2 fw-bold text-white text-uppercase mb-0">{program.title}</h1>
                </Container>
            </div>

            <Container className="py-5">
                <Row className="g-5">
                    <Col lg={8}>
                        <div className="pe-lg-4">
                            <h3 className="text-white text-uppercase letter-spacing-2 mb-4">About the Program</h3>
                            <p className="lead text-secondary mb-5" style={{ lineHeight: '1.8' }}>
                                {program.description}
                            </p>

                            <h4 className="text-primary text-uppercase letter-spacing-2 mb-4">Program Benefits</h4>
                            <Row className="g-3 mb-5">
                                {program.benefits && program.benefits.map((benefit, index) => (
                                    <Col md={6} key={index}>
                                        <div className="d-flex align-items-center p-3 bg-dark border-start border-primary border-3 h-100">
                                            <FaCheck className="text-primary me-3 flex-shrink-0" />
                                            <span className="text-white">{benefit}</span>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </Col>

                    <Col lg={4}>
                        <Card className="bg-dark text-white p-4 rounded-0 border-0 sticky-top" style={{ top: '100px' }}>
                            <div className="mb-4">
                                <h5 className="text-primary text-uppercase letter-spacing-2 small mb-3">Schedule</h5>
                                <div className="d-flex align-items-center text-white fs-5 fw-bold">
                                    <FaCalendarAlt className="me-3 text-secondary" />
                                    {program.schedule}
                                </div>
                            </div>

                            <div className="mb-4">
                                <h5 className="text-primary text-uppercase letter-spacing-2 small mb-3">Duration</h5>
                                <div className="d-flex align-items-center text-white fs-5 fw-bold">
                                    <FaClock className="me-3 text-secondary" />
                                    {program.duration}
                                </div>
                            </div>

                            <hr className="border-secondary opacity-25 mb-4" />

                            <div className="d-grid gap-3">
                                <Button variant="primary" size="lg" className="rounded-0 py-3 text-uppercase fw-bold letter-spacing-1">
                                    Join Class
                                </Button>
                                <Link to="/contact">
                                    <Button variant="outline-light" size="lg" className="rounded-0 py-3 text-uppercase fw-bold letter-spacing-1 w-100">
                                        Inquire More
                                    </Button>
                                </Link>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <style>
                {`
                    .bg-gradient-to-t {
                        background: linear-gradient(to top, var(--bg-dark), transparent);
                    }
                    .hover-opacity-100:hover { opacity: 1 !important; transition: opacity 0.3s; }
                `}
            </style>
        </div>
    );
};

export default ProgramDetails;
