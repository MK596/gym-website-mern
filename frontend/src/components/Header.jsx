import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar expand="lg" variant="dark" fixed="top" collapseOnSelect className="navbar-custom">
            <Container>
                <Navbar.Brand as={Link} to="/" className="text-neon fw-bold fs-3" style={{ letterSpacing: '2px' }}>T2K GYM</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center gap-3">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/programs">Programs</Nav.Link>
                        <Nav.Link as={Link} to="/trainers">Trainers</Nav.Link>
                        <Nav.Link as={Link} to="/memberships">Memberships</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
