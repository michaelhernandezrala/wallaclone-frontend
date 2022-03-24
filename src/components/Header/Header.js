import React, { useContext } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AuthContext from '../auth/context';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const { isLogged, handleLogout } = useContext(AuthContext);

  return (
    <Navbar className='navbar' bg='primary' color='white' expand='lg'>
      <Container>
        <Navbar.Brand className='navbar__title' href='/'>
          WallaClone
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse className='navbar__toggle' id='basic-navbar-nav'>
          <Nav className='navbar__menu'>
            <Nav.Link className='navbar__nav--link' href='/adverts/new'>
              Create Advert
            </Nav.Link>
            {isLogged ? (
              <Nav.Link className='navbar__nav--link' onClick={handleLogout}>
                Logout
              </Nav.Link>
            ) : (
              <Nav.Link className='navbar__nav--link' href='/login'>
                Login
              </Nav.Link>
            )}
            {isLogged ? (
              <Nav.Link className='navbar__nav--link' href='/account/settings'>
                Settings
              </Nav.Link>
            ) : null}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
