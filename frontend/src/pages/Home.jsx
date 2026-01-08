import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaDumbbell, FaRunning, FaHeartbeat, FaSpa, FaArrowRight, FaClock, FaTrophy, FaCheckCircle } from 'react-icons/fa';

const Home = () => {
    return (
        <div className="home-page bg-black">
            {/* Hero Section - High Impact */}
            <section className="hero-section position-relative d-flex align-items-center" style={{ minHeight: '100vh', overflow: 'hidden' }}>
                <div className="position-absolute w-100 h-100 top-0 start-0" style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'grayscale(100%) contrast(1.1) brightness(0.6)'
                }}></div>
                <div className="position-absolute w-100 h-100 top-0 start-0 bg-gradient-to-r" style={{ background: 'linear-gradient(90deg, #050505 0%, rgba(5,5,5,0.85) 40%, rgba(5,5,5,0.2) 100%)' }}></div>

                <Container className="position-relative z-1 pt-5">
                    <Row>
                        <Col lg={8} className="pt-5">
                            <h5 className="text-primary text-uppercase letter-spacing-3 fw-bold mb-3 animate__animated animate__fadeInDown">Welcome to T2K Gym</h5>
                            <h1 className="display-1 fw-bold text-white mb-4 text-uppercase lh-1 animate__animated animate__fadeInLeft" style={{ fontSize: '5rem' }}>
                                Build Your <br />
                                <span className="text-outline-primary" style={{ color: 'transparent', WebkitTextStroke: '2px var(--primary-color)' }}>Legacy</span> Today
                            </h1>
                            <p className="lead text-secondary fs-4 mb-5 animate__animated animate__fadeInUp" style={{ maxWidth: '600px' }}>
                                Premium equipment. Expert coaching. Unmatched atmosphere.
                                Stop starting over. Start evolving.
                            </p>
                            <div className="d-flex gap-3 animate__animated animate__fadeInUp">
                                <Link to="/memberships">
                                    <Button variant="primary" size="lg" className="rounded-0 px-5 py-3 text-uppercase fw-bold letter-spacing-1 hover-lift">Start Journey</Button>
                                </Link>
                                <Link to="/about">
                                    <Button variant="outline-light" size="lg" className="rounded-0 px-5 py-3 text-uppercase fw-bold letter-spacing-1 hover-lift">Tour Club</Button>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Orange Strip Features */}
            <div className="bg-primary py-5 position-relative z-2" style={{ marginTop: '-50px' }}>
                <Container>
                    <Row className="g-4">
                        {[
                            { icon: <FaClock />, title: "24/7 Access", text: "Train on your terms" },
                            { icon: <FaTrophy />, title: "Top Rated", text: "Best Gym 2024" },
                            { icon: <FaCheckCircle />, title: "No Contract", text: "Cancel anytime" }
                        ].map((item, idx) => (
                            <Col md={4} key={idx} className="border-end border-dark-subtle last-no-border">
                                <div className="d-flex align-items-center justify-content-center gap-3 text-black">
                                    <div className="display-5">{item.icon}</div>
                                    <div className="text-start">
                                        <h5 className="fw-bold text-uppercase mb-0">{item.title}</h5>
                                        <p className="mb-0 fw-medium opacity-75">{item.text}</p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>

            {/* Split Section - Dark & Orange Accent */}
            <section className="py-5">
                <Container className="py-5">
                    <Row className="align-items-center">
                        <Col lg={6} className="mb-5 mb-lg-0">
                            <div className="position-relative ps-4 pt-4">
                                <div className="position-absolute top-0 start-0 w-75 h-75 border-start border-top border-primary border-3"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop"
                                    alt="Gym Floor"
                                    className="img-fluid position-relative shadow-lg grayscale-hover transition-all"
                                    style={{ zIndex: 1, filter: 'grayscale(100%) brightness(0.9)' }}
                                    onMouseOver={(e) => e.target.style.filter = 'grayscale(0%)'}
                                    onMouseOut={(e) => e.target.style.filter = 'grayscale(100%) brightness(0.9)'}
                                />
                            </div>
                        </Col>
                        <Col lg={6} className="ps-lg-5">
                            <h5 className="text-primary text-uppercase letter-spacing-2 mb-3">The Experience</h5>
                            <h2 className="display-4 fw-bold text-white mb-4">TRAIN LIKE A <br /> PROFESSIONAL</h2>
                            <p className="text-secondary fs-5 mb-4">
                                At T2K, we've stripped away the distractions. No juice bars, no gimmicks.
                                Just the best biomechanical equipment in the world, positioned for serious training.
                            </p>
                            <ul className="list-unstyled mb-5">
                                {[
                                    "Official Hammer Strength Training Center",
                                    "Eleiko Powerlifting Platforms",
                                    "Functional Turf & Sled Track",
                                    "Private High-Performance Zone"
                                ].map((feature, i) => (
                                    <li key={i} className="mb-3 d-flex align-items-center text-white p-3 bg-dark border-start border-primary border-3">
                                        <FaCheckCircle className="text-primary me-3" />
                                        <span className="fw-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link to="/about">
                                <Button variant="outline-primary" className="rounded-0 px-4 py-2 text-uppercase fw-bold letter-spacing-1">
                                    Discover More <FaArrowRight className="ms-2" />
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Services Grid - High Contrast */}
            <section className="py-5 bg-dark border-top border-secondary">
                <Container className="py-5">
                    <div className="text-center mb-5">
                        <h2 className="display-4 fw-bold text-white text-uppercase">Our <span className="text-primary">Expertise</span></h2>
                        <p className="text-secondary">Comprehensive training solutions for every goal.</p>
                    </div>

                    <Row className="g-4">
                        {[
                            { icon: <FaDumbbell />, title: 'Strength', desc: 'Precision equipment for optimal growth.' },
                            { icon: <FaRunning />, title: 'Cardio', desc: 'Endless rows of top-tier cardio machines.' },
                            { icon: <FaHeartbeat />, title: 'HIIT', desc: 'High-intensity intervals to torch calories.' },
                            { icon: <FaSpa />, title: 'Recovery', desc: 'Sauna and steam rooms for recovery.' }
                        ].map((service, index) => (
                            <Col md={6} lg={3} key={index}>
                                <div className="service-card h-100 p-4 bg-black border border-secondary hover-border-primary transition-all position-relative overflow-hidden group">
                                    <div className="position-absolute top-0 end-0 p-3 opacity-10 text-primary display-1" style={{ transform: 'translate(20%, -20%)' }}>
                                        {service.icon}
                                    </div>
                                    <div className="position-relative z-1">
                                        <span className="text-primary fs-2 mb-4 d-block">{service.icon}</span>
                                        <h4 className="text-white fw-bold text-uppercase mb-3">{service.title}</h4>
                                        <p className="text-secondary mb-0">{service.desc}</p>
                                    </div>
                                    <div className="position-absolute bottom-0 start-0 w-100 h-1 bg-primary transform-scale-x-0 group-hover-scale-x-100 transition-all origin-left"></div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Dynamic CTA */}
            <section className="py-5 position-relative overflow-hidden">
                <div className="position-absolute w-100 h-100 top-0 start-0 bg-primary" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0% 100%)' }}></div>
                <Container className="position-relative py-5">
                    <Row className="align-items-center text-center text-lg-start">
                        <Col lg={8}>
                            <h2 className="display-3 fw-bold text-black mb-2">READY TO START?</h2>
                            <p className="text-black fw-medium fs-4 mb-0 opacity-75">Join the strongest community in the city today.</p>
                        </Col>
                        <Col lg={4} className="text-lg-end mt-4 mt-lg-0">
                            <Link to="/memberships">
                                <Button variant="dark" size="lg" className="rounded-0 px-5 py-3 text-uppercase fw-bold border-0">
                                    View Memberships
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </section>

            <style>
                {`
                    .last-no-border:last-child { border-right: 0 !important; }
                    .hover-border-primary:hover { border-color: var(--primary-color) !important; }
                    .transform-scale-x-0 { transform: scaleX(0); }
                    .group-hover-scale-x-100:hover { transform: scaleX(1); } /* Requires JS or simpler CSS hover */
                    .service-card:hover .transform-scale-x-0 { transform: scaleX(1); }
                    .grayscale-hover { transition: filter 0.3s ease; }
                    @media (max-width: 768px) {
                        .border-end { border-right: 0 !important; border-bottom: 1px solid rgba(0,0,0,0.1); padding-bottom: 1rem; }
                        .last-no-border { border-bottom: 0 !important; }
                    }
                `}
            </style>
        </div>
    );
};

export default Home;
