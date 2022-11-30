import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";

export function Navibar() {
    <>
        <Navbar collapseOnSelecet expand='lg' bg='dark' variant="dark">
            <Navbar.Brand>WebDevBlog</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link>Home</Nav.Link>
                </Nav>
                <Nav className="mr-auto">
                    <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                </Nav>
                <Nav>
                    <Button variant="primary" className="mr-2">Log in</Button>
                    <Button variant="primary">Sign out</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
}