import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

function Header() {
  return (
    <header>
      <Container>
        <Navbar>
          <Navbar.Brand href="/">Patterns</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </header>
  );
}

export default Header;
