import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Spinner, Alert, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Membership = () => {
    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [billingCycle, setBillingCycle] = useState('monthly');

    useEffect(() => {
        const fetchPlans = async () => {
            try {
                const { data } = await axios.get('/api/memberships');
                setPlans(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchPlans();
    }, []);

    return (
        <div className="membership-page bg-black min-vh-100 position-relative">
            {/* Header Section */}
            <section className="position-relative text-center border-bottom border-secondary" style={{ paddingTop: '140px', paddingBottom: '80px', background: '#050505' }}>
                <Container>
                    <h5 className="text-primary text-uppercase letter-spacing-2 fw-bold mb-3">Join The Elite</h5>
                    <h1 className="display-3 fw-bold text-white text-uppercase mb-4">Invest In <span className="text-outline-white" style={{ WebkitTextStroke: '1px #fff', color: 'transparent' }}>Yourself</span></h1>
                    <p className="text-secondary fs-5 mb-5" style={{ maxWidth: '600px', margin: '0 auto' }}>
                        No hidden fees. No restrictive contracts. Just straightforward access to the best training facility in the city.
                    </p>

                    {/* Billing Toggle */}
                    <div className="d-inline-flex align-items-center bg-dark rounded-pill p-1 border border-secondary shadow-sm">
                        <Button
                            variant={billingCycle === 'monthly' ? 'primary' : 'transparent'}
                            className={`rounded-pill px-4 py-2 fw-bold ${billingCycle === 'monthly' ? 'text-black' : 'text-white'}`}
                            onClick={() => setBillingCycle('monthly')}
                        >
                            Monthly
                        </Button>
                        <Button
                            variant={billingCycle === 'yearly' ? 'primary' : 'transparent'}
                            className={`rounded-pill px-4 py-2 fw-bold ${billingCycle === 'yearly' ? 'text-black' : 'text-white'}`}
                            onClick={() => setBillingCycle('yearly')}
                        >
                            Yearly <small className="opacity-75 ms-1">(-20%)</small>
                        </Button>
                    </div>
                </Container>
            </section>

            <Container className="py-5" style={{ marginTop: '-40px' }}>
                {loading ? (
                    <div className="text-center py-5"><Spinner animation="border" variant="primary" /></div>
                ) : error ? (
                    <Alert variant="danger">{error}</Alert>
                ) : (
                    <Row className="justify-content-center g-4">
                        {plans.map((plan) => (
                            <Col key={plan._id} md={6} lg={4}>
                                <Card className={`h-100 bg-secondary-black border-0 rounded-0 overflow-hidden transition-all hover-transform position-relative ${plan.name === 'Premium' ? 'shadow-glow' : ''}`}>
                                    {plan.name === 'Premium' && (
                                        <div className="bg-primary text-center text-uppercase fw-bold text-black py-1 small letter-spacing-1">
                                            Most Popular
                                        </div>
                                    )}
                                    <Card.Body className="p-5 d-flex flex-column text-center">
                                        <h4 className="text-white text-uppercase fw-bold letter-spacing-2 mb-2">{plan.name}</h4>
                                        <div className="display-2 fw-bold text-primary mb-4 d-flex align-items-start justify-content-center">
                                            <span className="currency-symbol">$</span>
                                            <span className="price-value">{billingCycle === 'yearly' ? (plan.price * 10).toFixed(0) : plan.price}</span>
                                        </div>
                                        <p className="text-secondary small text-uppercase letter-spacing-1 mb-5 border-bottom border-dark pb-3">
                                            Billed {billingCycle}
                                        </p>

                                        <div className="text-start mb-5 flex-grow-1">
                                            {plan.features.map((feature, index) => (
                                                <div key={index} className="d-flex align-items-center mb-3">
                                                    <div className="flex-shrink-0 text-primary me-3"><FaCheck /></div>
                                                    <span className="text-white opacity-75">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <Link to="/contact">
                                            <Button
                                                variant={plan.name === 'Premium' ? 'primary' : 'outline-light'}
                                                className="w-100 py-3 text-uppercase fw-bold letter-spacing-1 rounded-0"
                                            >
                                                Select Plan
                                            </Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                )}
            </Container>

            {/* Simple FAQ Strip */}
            <section className="py-5 border-top border-dark">
                <Container className="text-center">
                    <p className="text-secondary mb-0">
                        Questions? Contact our membership team at <span className="text-primary cursor-pointer">join@t2kgym.com</span> or call <span className="text-white">+1 (555) 0123-4567</span>
                    </p>
                </Container>
            </section>

            <style>
                {`
                    .bg-secondary-black { background-color: #111; }
                    .hover-transform:hover { transform: translateY(-10px); }
                    .shadow-glow { box-shadow: 0 0 30px rgba(var(--primary-rgb), 0.2); }
                    .text-outline-white { -webkit-text-stroke: 1px rgba(255,255,255,0.8); }
                    .transition-all { transition: all 0.3s ease; }
                    
                    .currency-symbol {
                        font-size: 1.5rem;
                        color: rgba(255, 255, 255, 0.5);
                        margin-top: 1rem;
                        margin-right: 4px;
                        font-weight: 600;
                    }
                    
                    .price-value {
                        line-height: 1;
                    }
                    
                    @media (max-width: 768px) {
                        .display-2 { font-size: 3.5rem; }
                        .currency-symbol { font-size: 1.2rem; margin-top: 0.8rem; }
                    }
                `}
            </style>
        </div>
    );
};

export default Membership;
