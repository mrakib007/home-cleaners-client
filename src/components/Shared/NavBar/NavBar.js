import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" className="container" expand="lg">
        <Navbar.Brand as={Link} to="/" className="ml-2" style={{color:"teal"}} >Home-Cleaners BD.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
                        <Nav.Link as={Link} className="mr-4" to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} className="mr-4" to="/login">
                            Login
                        </Nav.Link>
                        <Nav.Link as={Link} className="mr-4" to="/dashboard">
                            Dashboard
                        </Nav.Link>
                        <Nav.Link as={Link} className="mr-4" to="/dashboard">
                            Admin
                        </Nav.Link>
                        <Nav.Link as={Link} className="mr-4" to="#">
                            Blogs
                        </Nav.Link>
                        <Nav.Link as={Link} className="mr-4" to="#">
                            Contact Us
                        </Nav.Link>
                    </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
