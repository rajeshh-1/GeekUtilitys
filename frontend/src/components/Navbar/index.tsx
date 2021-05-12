import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';



function NavBar() {
  return (
    <div className="pb-3">
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">GeekUtility</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Home</Nav.Link>
          <Nav.Link href="#pricing">Favoritos</Nav.Link>
          <Nav.Link href="#features">Assistir mais tarde</Nav.Link>
          
          
        </Nav>
        <Nav>
          <NavDropdown title="User#123" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Anotações</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Pensar</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Pensar</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Sair</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}

export default NavBar;