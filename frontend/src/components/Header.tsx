import React from 'react';
import './custom.css';
import { Button, Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import Footer from './Footer';

function Header() {
  return (
    <>
      <Navbar bg='dark' variant='dark' sticky="top">
          <Container fluid>
            <Link to="/"><Navbar.Brand>LOGO</Navbar.Brand></Link>
              
            <Navbar.Toggle />
            <Navbar.Collapse>
            <Nav>
                <Nav.Link><Link to="/service" className='text-light'>Услуги</Link></Nav.Link>
                <Nav.Link><Link to='/contacts' className='text-light'>Контакты</Link></Nav.Link>
                <Nav.Link><Link to='/about' className='text-light'>О компании</Link></Nav.Link>
            </Nav>
            </Navbar.Collapse>
            <Stack gap={3} direction="horizontal" className="justify-content-end">
              <Link to="/login">
                <Button variant="outline-light">Войти</Button>
              </Link>

              <Link to="/registration">
                <Button variant="secondary">Зарегистрироваться</Button>
              </Link>                  
            </Stack>
          </Container>
      </Navbar>

      <Outlet />
      <Footer />
    </>
  );
}

export default Header;