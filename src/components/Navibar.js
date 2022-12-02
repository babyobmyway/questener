import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";

import { Link, Outlet } from 'react-router-dom'

export default function Navibar() {
    return (
        <>
            <Navbar collapseOnSelecet expand='lg' bg='dark' variant="dark">
                <Navbar.Brand>WebDevBlog</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                        <Nav.Link><Link to='/users'>Users</Link></Nav.Link>
                        <Nav.Link><Link to='/about'>About</Link></Nav.Link>
                    </Nav>
                    <Nav>
                        <Button variant="primary" className="me-2">Log in</Button>
                        <Button variant="primary">Sign out</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Outlet />
            
            <footer>2021</footer>
        </>
        
    )
}