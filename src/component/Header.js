import { Nav, Navbar } from "react-bootstrap";
import React from "react";

function Header() {
    return (
        <Navbar className="bg-light justify-content-between" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Jetcake</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#profile">Profile</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link href="#logout">Logout</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Header;