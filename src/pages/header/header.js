import React from "react";
import { Navbar } from "react-bootstrap";
import {Nav} from 'react-bootstrap'
import { Container } from "react-bootstrap";
const Header = () => {

  return (
    <>
     <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/home">Nanvbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/products">Products</Nav.Link>    
    </Nav>
    </Container>
  </Navbar>
    </>
  );
};

export default Header;
