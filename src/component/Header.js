import { Image, Nav, Navbar } from "react-bootstrap";
import React from "react";

function Header() {
    return (
        <React.Fragment>
            <Navbar className="bg-light justify-content-between" bg="dark" variant="dark">
                <Navbar.Brand>Jetcake</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/profile">Profile</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/login">Login</Nav.Link>
                </Nav>
            </Navbar>
            <div>
                <Image src="https://asyncdeveloper.com/images/home-bg.jpg"  fluid />
                <h1 className="hero-text"> Hello</h1>
            </div>
        </React.Fragment>
    )
}

export default Header;