import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaDumbbell, FaRunning, FaHeartbeat, FaSpa } from 'react-icons/fa';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="hero-section text-white text-center">
                <Container>
                    <h1 className="display-1 fw-bold text-uppercase mb-4 text-neon animate__animated animate__fadeInDown">
                        Unleash Your <br /> Inner Beast
                    </h1>
                    <p className="lead fs-4 mb-5 animate__animated animate__fadeInUp">
                        Join the elite fitness community. Professional trainers, <br />
                        state-of-the-art equipment, and a vibe that motivates.
                    </p>
                    <div className="d-flex justify-content-center gap-3 animate__animated animate__fadeInUp">
                        <Link to="/memberships">
                            <Button variant="primary" size="lg" className="px-5 py-3 fs-5">Get Started</Button>
                        </Link>
                        <Link to="/memberships">
                            <Button variant="outline-primary" size="lg" className="px-5 py-3 fs-5">View Plans</Button>
                        </Link>
                    </div>
                </Container>
            </section>

            {/* Services Section */}
            <section className="py-5 bg-black">
                <Container>
                    <div className="text-center mb-5">
                        <h2 className="display-4 fw-bold text-white">OUR <span className="text-neon">SERVICES</span></h2>
                        <p className="text-muted">Push your limits with our specialized training programs.</p>
                    </div>
                    <Row>
                        <Col md={3} className="mb-4">
                            <Card className="h-100 text-center p-4 border-0 bg-dark text-white service-card">
                                <Card.Body>
                                    <div className="mb-3 text-neon fs-1"><FaDumbbell /></div>
                                    <Card.Title className="fw-bold">Strength Training</Card.Title>
                                    <Card.Text className="text-muted">
                                        Build muscle and increase power with our free weights and resistance machines.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3} className="mb-4">
                            <Card className="h-100 text-center p-4 border-0 bg-dark text-white service-card">
                                <Card.Body>
                                    <div className="mb-3 text-neon fs-1"><FaRunning /></div>
                                    <Card.Title className="fw-bold">Cardio Fitness</Card.Title>
                                    <Card.Text className="text-muted">
                                        Boost your endurance with top-tier treadmills, ellipticals, and bikes.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3} className="mb-4">
                            <Card className="h-100 text-center p-4 border-0 bg-dark text-white service-card">
                                <Card.Body>
                                    <div className="mb-3 text-neon fs-1"><FaHeartbeat /></div>
                                    <Card.Title className="fw-bold">CrossFit</Card.Title>
                                    <Card.Text className="text-muted">
                                        High-intensity interval training to shred fat and build functional strength.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3} className="mb-4">
                            <Card className="h-100 text-center p-4 border-0 bg-dark text-white service-card">
                                <Card.Body>
                                    <div className="mb-3 text-neon fs-1"><FaSpa /></div>
                                    <Card.Title className="fw-bold">Yoga & Recovery</Card.Title>
                                    <Card.Text className="text-muted">
                                        Improve flexibility and recover faster with our yoga and sauna sessions.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-5 text-center bg-dark text-white border-top border-secondary">
                <Container>
                    <h2 className="mb-4">Ready to Change Your Life?</h2>
                    <Link to="/contact">
                        <Button variant="primary" size="lg">Contact Us Today</Button>
                    </Link>
                </Container>
            </section>
        </>
    );
};

export default Home;
