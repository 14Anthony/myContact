import React from 'react';
import PropTypes from 'prop-types';
import { Container, Nav, NavbarBrand } from 'react-bootstrap';


const Navbar = ({ title, icon }) => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </>
    )
}
Navbar.PropTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
}

Navbar.defaultProps = {
    title: 'Contact Keeper',
    icon: 'far fa-address-card'
}
export default Navbar
