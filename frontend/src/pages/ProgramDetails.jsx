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
    }, [id]);

    if (loading) return <div className="text-center py-5"><Spinner animation="border" variant="warning" /></div>;
    if (error) return <Container className="py-5"><Alert variant="danger">{error}</Alert></Container>;
    if (!program) return null;

    return (
        <div>
            {/* Header */}
            <div className="page-header" style={{ backgroundImage: `url('${program.image}')` }}>
                <div className="page-header-content">
                    <h1 className="display-3 fw-bold text-neon animate__animated animate__fadeInDown">{program.title.toUpperCase()}</h1>
                    <div className="d-flex justify-content-center gap-3 mt-3 animate__animated animate__fadeInUp">
                        <Badge bg="dark" className="border border-warning text-warning p-2"><FaClock className="me-2" /> {program.duration}</Badge>
                        <Badge bg="dark" className="border border-danger text-danger p-2"><FaFire className="me-2" /> {program.intensity}</Badge>
                    </div>
                </div>
            </div>

            <Container className="py-5">
                <Link to="/programs" className="text-muted d-inline-flex align-items-center mb-4 hover-neon">
                    <FaArrowLeft className="me-2" /> Back to Programs
                </Link>

                <Row>
                    <Col lg={8} className="mb-4">
                        <Card className="bg-dark text-white border-0 p-4 mb-4">
                            <h3 className="text-white mb-4 border-bottom border-secondary pb-2">Program Overview</h3>
                            <p className="lead text-gray">{program.description}</p>

                            <h4 className="text-neon mt-4 mb-3">Key Benefits</h4>
                            <Row>
                                {program.benefits && program.benefits.map((benefit, index) => (
                                    <Col md={6} key={index} className="mb-2">
                                        <div className="d-flex align-items-center text-gray">
                                            <FaCheck className="text-success me-2" /> {benefit}
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Card>
                    </Col>

                    <Col lg={4}>
                        <Card className="bg-card text-white p-4 sticky-top" style={{ top: '100px', borderTop: '4px solid var(--primary-color)' }}>
                            <h4 className="text-white mb-4"><FaCalendarAlt className="text-neon me-2" /> Schedule</h4>
                            <p className="text-gray mb-4">{program.schedule}</p>

                            <hr className="border-secondary" />

                            <div className="d-grid gap-2">
                                <Button variant="primary" size="lg">Join This Class</Button>
                                <Button variant="outline-light" href="/contact">Contact Support</Button>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProgramDetails;
