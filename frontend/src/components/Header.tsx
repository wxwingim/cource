import React from 'react';
import { Button, Container, Nav, Navbar, Stack } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg='dark' variant='dark' fixed="top">
        <Container fluid>
            <Navbar.Brand href="#home">LOGO</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-center">
            <Nav>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            <Stack gap={3} direction="horizontal" className="justify-content-end">
                <Button variant="outline-light">Войти</Button>
                <Button variant="light">Зарегистрироваться</Button>
            </Stack>
            
        </Container>
    </Navbar>
  );
}

export default Header;