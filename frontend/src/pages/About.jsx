import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaQuoteRight } from 'react-icons/fa';

const About = () => {
    return (
        <div className="about-page bg-black text-white min-vh-100">
            {/* 1. Clean Text Hero */}
            <section className="position-relative d-flex align-items-center" style={{ minHeight: '50vh', paddingTop: '120px' }}>
                <Container>
                    <Row className="justify-content-center text-center">
                        <Col lg={9}>
                            <div className="d-inline-block px-3 py-1 border border-secondary rounded-pill mb-4">
                                <small className="text-uppercase letter-spacing-2 text-primary fw-bold">Since 2010</small>
                            </div>
                            <h1 className="display-3 fw-bold mb-4">
                                PURSUING <span className="text-primary">PERFECTION</span> IN <br />
                                EVERY REP.
                            </h1>
                            <p className="lead text-secondary fs-4 fw-light mx-auto" style={{ maxWidth: '700px' }}>
                                T2K Gym is built on a simple foundation: quality equipment, serious training, and a community that pushes you further.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* 2. Cinematic Image Strip */}
            <section className="w-100 my-5" style={{ height: '400px', overflow: 'hidden' }}>
                <img
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=60&w=1600&auto=format&fit=crop"
                    alt="Gym Interior"
                    className="w-100 h-100 object-fit-cover"
                    loading="lazy"
                    style={{ objectFit: 'cover' }}
                />
            </section>

            {/* 3. Minimal Content Grid */}
            <section className="py-5">
                <Container className="py-5">
                    <Row className="g-5">
                        <Col lg={5}>
                            <h3 className="fw-bold mb-4 text-uppercase">T2K: TRAIN 2 KEEP</h3>
                            <p className="text-secondary fs-5 mb-4">
                                "Train 2 Keep" isn't just a name; it's our training methadology. We focus on sustainable, long-term strength and conditioning that serves you for life.
                            </p>
                            <p className="text-secondary mb-4">
                                Located in the heart of the city, our 20,000 sq ft facility features an "Iron Pit" for heavy compound lifts, a 40m agility turf, and a recovery suite with saunas.
                            </p>
                            <div className="d-flex flex-wrap gap-2">
                                {['Hammer Strength', 'Eleiko', 'Rogue', 'Life Fitness'].map(brand => (
                                    <span key={brand} className="badge bg-dark border border-secondary text-secondary fw-normal px-3 py-2">{brand}</span>
                                ))}
                            </div>
                        </Col>
                        <Col lg={1}></Col>
                        <Col lg={6}>
                            <div className="border-start border-primary border-3 ps-4 py-2">
                                <FaQuoteRight className="text-primary mb-3 fs-3 opacity-50" />
                                <h4 className="fw-medium fst-italic lh-base mb-3">
                                    "We don't sell memberships. We sell the environment you need to reach your potential. The rest is up to you."
                                </h4>
                                <small className="text-muted text-uppercase letter-spacing-2">— Founder, T2K Gym</small>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* 4. Simple Stats - Minimalist */}
            <section className="py-5 border-top border-dark">
                <Container>
                    <Row className="text-center g-4">
                        {[
                            { value: "20,000", label: "Square Feet" },
                            { value: "2,500+", label: "Active Members" },
                            { value: "15", label: "Elite Trainers" },
                            { value: "24/7", label: "Access" }
                        ].map((item, idx) => (
                            <Col xs={6} md={3} key={idx}>
                                <h2 className="display-4 fw-bold text-white mb-0">{item.value}</h2>
                                <p className="text-primary text-uppercase letter-spacing-2 small fw-bold">{item.label}</p>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <style>
                {`
                    .object-fit-cover { object-fit: cover; }
                `}
            </style>
        </div>
    );
};

export default About;
