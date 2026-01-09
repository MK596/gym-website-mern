import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FaDumbbell } from 'react-icons/fa';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Navbar
            expand="lg"
            fixed="top"
            className={`transition-all ${scrolled ? 'bg-black shadow-lg py-2' : 'bg-transparent py-4'}`}
            variant="dark"
        >
            <Container>
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
                    <FaDumbbell className="text-primary fs-3" />
                    <span className="fw-bold fs-3 text-white tracking-widest">T2K<span className="text-primary">GYM</span></span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 text-white d-lg-none" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto mb-2 mb-lg-0 d-none d-lg-flex">
                        {['Home', 'About', 'Programs', 'Trainers'].map((item) => (
                            <Nav.Link
                                key={item}
                                as={Link}
                                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                className={`text-uppercase fw-bold px-3 letter-spacing-1 nav-item-custom ${location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`) ? 'active' : ''}`}
                                style={{ fontSize: '0.9rem', color: 'white' }}
                            >
                                {item}
                            </Nav.Link>
                        ))}
                    </Nav>
                    <div className="d-none d-lg-flex gap-3">
                        <Link to="/contact">
                            <Button variant="outline-light" className="text-uppercase fw-bold letter-spacing-1 rounded-0 px-4">Contact</Button>
                        </Link>
                        <Link to="/memberships">
                            <Button variant="primary" className="text-uppercase fw-bold letter-spacing-1 rounded-0 px-4">Join Now</Button>
                        </Link>
                    </div>
                </Navbar.Collapse>
            </Container>
            <style>
                {`
                    .transition-all { transition: all 0.3s ease; }
                    .nav-item-custom { position: relative; opacity: 0.8; transition: opacity 0.2s; }
                    .nav-item-custom:hover, .nav-item-custom.active { opacity: 1; color: var(--primary-color) !important; }
                    .nav-item-custom::after {
                        content: ''; position: absolute; bottom: 0; left: 50%; width: 0; height: 2px; 
                        background: var(--primary-color); transition: all 0.3s; transform: translateX(-50%);
                    }
                    .nav-item-custom.active::after, .nav-item-custom:hover::after { width: 100%; }
                    .tracking-widest { letter-spacing: 2px; }
                `}
            </style>
        </Navbar>
    );
};

export default Header;
