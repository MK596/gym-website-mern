import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Spinner, Alert, Form } from 'react-bootstrap';
import axios from 'axios';
import { FaCheck } from 'react-icons/fa';
import { SiVisa, SiMastercard, SiPhonepe, SiPaytm } from 'react-icons/si';

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
        <Container className="py-5 mt-5">
            <div className="text-center mb-5">
                <h1 className="text-neon fw-bold">MEMBERSHIP PLANS</h1>
                <p className="text-muted lead">Choose the plan that suits your fitness journey</p>

                <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
                    <span className={billingCycle === 'monthly' ? 'text-white fw-bold' : 'text-muted'}>Monthly</span>
                    <Form.Check
                        type="switch"
                        id="billing-switch"
                        className="fs-4"
                        checked={billingCycle === 'yearly'}
                        onChange={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                    />
                    <span className={billingCycle === 'yearly' ? 'text-white fw-bold' : 'text-muted'}>
                        Yearly <span className="badge bg-danger ms-1" style={{ fontSize: '0.7rem' }}>SAVE 20%</span>
                    </span>
                </div>
            </div>

            {loading ? (
                <div className="text-center"><Spinner animation="border" variant="primary" /></div>
            ) : error ? (
                <Alert variant="danger">{error}</Alert>
            ) : (
                <Row className="justify-content-center">
                    {plans.map((plan) => (
                        <Col key={plan._id} md={4} className="mb-4">
                            <Card className={`h-100 bg-dark text-white shadow-lg card-hover text-center p-3 ${plan.name === 'Premium' ? 'border-primary' : 'border-secondary'}`}
                                style={{ borderWidth: plan.name === 'Premium' ? '2px' : '1px' }}>

                                {plan.name === 'Premium' && (
                                    <div className="position-absolute top-0 start-50 translate-middle">
                                        <span className="badge bg-primary px-3 py-2 rounded-pill text-uppercase" style={{ fontSize: '0.8rem', letterSpacing: '1px' }}>Most Popular</span>
                                    </div>
                                )}

                                <Card.Body className="d-flex flex-column">
                                    <h3 className="text-neon mb-3">{plan.name}</h3>
                                    <h1 className="display-4 fw-bold mb-3">
                                        ${billingCycle === 'yearly' ? (plan.price * 10).toFixed(2) : plan.price}
                                        <span className="fs-6 text-muted">/{billingCycle === 'yearly' ? 'yr' : 'mo'}</span>
                                    </h1>
                                    <div className="flex-grow-1">
                                        <ul className="list-unstyled text-start mx-auto" style={{ maxWidth: '250px' }}>
                                            {plan.features.map((feature, index) => (
                                                <li key={index} className="mb-3">
                                                    <FaCheck className="text-success me-2" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mt-4">
                                        <p className="text-muted small mb-3">Visit our facility to enroll</p>
                                        <div className="d-flex justify-content-center gap-2 text-muted opacity-50 fs-5">
                                            <SiVisa /> <SiMastercard /> <SiPhonepe /> <SiPaytm />
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
};

export default Membership;
