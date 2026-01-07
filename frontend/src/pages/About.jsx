import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCheckCircle, FaDumbbell, FaUsers, FaTrophy, FaMedal, FaHistory } from 'react-icons/fa';

const About = () => {
    return (
        <div>
            {/* Page Header */}
            <div className="page-header" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069')" }}>
                <div className="page-header-content">
                    <h1 className="display-3 fw-bold text-neon animate__animated animate__fadeInDown">OUR STORY</h1>
                    <p className="lead text-white animate__animated animate__fadeInUp">Forging Legends Since 2020</p>
                </div>
            </div>

            <Container className="py-5">
                {/* Mission Section */}
                <Row className="align-items-center mb-5 pb-5 border-bottom border-secondary">
                    <Col lg={6} className="mb-4 mb-lg-0 animate__animated animate__fadeInLeft">
                        <h4 className="text-neon text-uppercase mb-3" style={{ letterSpacing: '2px' }}>Who We Are</h4>
                        <h2 className="display-4 fw-bold text-white mb-4">MORE THAN JUST <br /> A GYM.</h2>
                        <p className="text-muted lead mb-4">
                            T2K Gym isn't just a place to lift weights; it's a sanctuary for transformation. We believe in the power of discipline, community, and expert guidance to unlock human potential.
                        </p>
                        <div className="d-flex gap-4">
                            <div className="d-flex align-items-center gap-3">
                                <FaHistory className="text-neon fs-2" />
                                <div>
                                    <h5 className="mb-0 text-white">Est. 2020</h5>
                                    <small className="text-muted">Years of Excellence</small>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-3">
                                <FaUsers className="text-neon fs-2" />
                                <div>
                                    <h5 className="mb-0 text-white">2000+</h5>
                                    <small className="text-muted">Active Members</small>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className="position-relative animate__animated animate__fadeInRight">
                        <img
                            src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069"
                            alt="Trainer"
                            className="img-fluid rounded shadow-lg position-relative z-2"
                        />
                        <div style={{
                            position: 'absolute',
                            top: '-20px',
                            right: '-20px',
                            width: '100px',
                            height: '100px',
                            border: '4px solid var(--primary-color)',
                            zIndex: 1
                        }}></div>
                    </Col>
                </Row>

                {/* Stats / Numbers */}
                <Row className="mb-5 pb-5">
                    <Col md={3} className="mb-3">
                        <div className="stat-box text-center bg-dark">
                            <FaTrophy className="text-neon display-4 mb-3" />
                            <h2 className="fw-bold text-white">50+</h2>
                            <p className="text-muted mb-0">Awards Won</p>
                        </div>
                    </Col>
                    <Col md={3} className="mb-3">
                        <div className="stat-box text-center bg-dark">
                            <FaDumbbell className="text-neon display-4 mb-3" />
                            <h2 className="fw-bold text-white">200+</h2>
                            <p className="text-muted mb-0">Equipment</p>
                        </div>
                    </Col>
                    <Col md={3} className="mb-3">
                        <div className="stat-box text-center bg-dark">
                            <FaMedal className="text-neon display-4 mb-3" />
                            <h2 className="fw-bold text-white">15+</h2>
                            <p className="text-muted mb-0">Expert Trainers</p>
                        </div>
                    </Col>
                    <Col md={3} className="mb-3">
                        <div className="stat-box text-center bg-dark">
                            <FaUsers className="text-neon display-4 mb-3" />
                            <h2 className="fw-bold text-white">2k+</h2>
                            <p className="text-muted mb-0">Happy Clients</p>
                        </div>
                    </Col>
                </Row>

                {/* Values Section */}
                <div className="text-center mb-5">
                    <h2 className="fw-bold text-white display-5">WHY CHOOSE <span className="text-neon">T2K?</span></h2>
                    <p className="text-muted">We provide the tools; you bring the sweat.</p>
                </div>
                <Row className="mb-5">
                    <Col md={4} className="mb-4">
                        <Card className="h-100 p-4 bg-dark text-white border-secondary hover-lift">
                            <div className="text-neon fs-1 mb-3"><FaDumbbell /></div>
                            <h4 className="fw-bold mb-3">Elite Equipment</h4>
                            <p className="text-muted">
                                Train with the best. Our floor is stocked with Hammer Strength, Rogue Fitness, and Life Fitness equipment, maintained daily for your safety and performance.
                            </p>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="h-100 p-4 bg-dark text-white border-secondary hover-lift">
                            <div className="text-neon fs-1 mb-3"><FaUsers /></div>
                            <h4 className="fw-bold mb-3">Vibrant Community</h4>
                            <p className="text-muted">
                                Join a tribe of like-minded individuals. We foster a culture of respect, encouragement, and healthy competition that pushes you further.
                            </p>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="h-100 p-4 bg-dark text-white border-secondary hover-lift">
                            <div className="text-neon fs-1 mb-3"><FaCheckCircle /></div>
                            <h4 className="fw-bold mb-3">Proven Results</h4>
                            <p className="text-muted">
                                Our programs are science-backed and results-driven. Whether you want to lose weight, build muscle, or improve agility, we have the roadmap.
                            </p>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;
