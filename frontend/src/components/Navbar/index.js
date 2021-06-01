import React from 'react';
import './styles.css';
import { Link, useHistory } from "react-router-dom";
import { Navbar, Nav, NavDropdown, DropdownButton, Dropdown } from 'react-bootstrap';

import { useAuth } from '../../contexts/AuthContext'
function NavBar() {
  const { currentUser, logout } = useAuth();
  const history = useHistory()
  // console.log(currentUser)


  async function handleLogout() {
    try {
      await logout()
      history.push("/login")
    } catch (err) {
      console.error(err)
    }
  }
  return (

    <div className="pb-3">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">GeekUtility</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link as={Link} to="/">Home</Nav.Link> */}
            {/* <Nav.Link as={Link} to="/favorites">Favorites</Nav.Link> */}
            {/* <Nav.Link href="#features">Assistir mais tarde</Nav.Link> */}
          </Nav>
          <Nav>
            <DropdownButton
              menuAlign="right"
              title={
                <div className="pull-left">
                  <img id="user-image"
                    src={currentUser.photoURL}
                    alt={currentUser.displayName}
                  />
                </div>
              }
              id="dropdown-menu-align-right"
            >
              <Dropdown.Item>{currentUser.displayName}</Dropdown.Item>

              <Dropdown.Divider />
              <Dropdown.Item as={Link} to="/update-profile">Settings</Dropdown.Item>
              <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
            </DropdownButton>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;