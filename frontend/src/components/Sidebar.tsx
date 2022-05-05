import React from 'react';
import './custom.css'
import { Button, ButtonGroup, Col, Container, Nav, Row, Stack, Tab } from 'react-bootstrap';

function Categories() {
    return (
        <Stack className='flex-fill justify-content-between pt-10 pb-2'>
            <Nav variant='tabs' navbarScroll  className="flex-column">
                <Nav.Link eventKey="first" href="#home">Профиль</Nav.Link>
                <Nav.Link eventKey="second" href="#home">Создать</Nav.Link>
                <Nav.Link eventKey="third" href="#home">История</Nav.Link>

            </Nav>

            <Button variant='outline-light' >Выход</Button>
        </Stack>


        
    );
}

export default Categories;