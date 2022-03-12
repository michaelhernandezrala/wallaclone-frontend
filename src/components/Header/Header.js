import React, { useContext } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AuthContext from '../auth/context';
import { Link } from 'react-router-dom';

function Header() {
  const { isLogged, handleLogout } = useContext(AuthContext);

  console.log('header', isLogged);
  return (
    <Navbar className='navbar' bg='light' expand='lg'>
      <Container>
        <Navbar.Brand href='/'>WallaClone</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            {isLogged ? (
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            ) : (
              <Nav.Link href='/login'>Login</Nav.Link>
            )}

            <Nav.Link href='/adverts/new'>Subir producto</Nav.Link>
            <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
              <NavDropdown.Item href='/account/settings'>
                Configuracion
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Cerrar Sesión
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
