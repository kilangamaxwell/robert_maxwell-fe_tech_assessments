import React from "react";
import { Container, Navbar } from "react-bootstrap";

const NavBarCom = () => {
  return (
    <Navbar sticky="top" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="--bs-white">
          Shopping Cart
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBarCom;
