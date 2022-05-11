import React from 'react';
import { Button, ButtonGroup, Container, Nav, Navbar, Row, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './../../custom.css';

const ServiceNav = () => {
    return (
        <Container fluid className='bg-dark my-01'>
            <Navbar bg='dark' variant='dark'>
                <Stack className="d-flex flex-row flex-wrap justify-content-between py-3">
                    <Button size="lg"  variant="outline-light">МОНИТОРЫ</Button>
                    <Button size="lg"  variant="outline-light">ПЛАНШЕТЫ</Button>
                    <Button size="lg"  variant="outline-light">ТЕЛЕФОНЫ</Button>
                    <Button size="lg"  variant="outline-light">НОУТБУКИ</Button>
                    <Button size="lg"  variant="outline-light">КОМПЬЮТЕРЫ</Button>
                    <Button size="lg"  variant="outline-light">ТЕЛЕВИЗОРЫ</Button>
                    <Button size="lg"  variant="outline-light">МОНОБЛОКИ</Button>
                    <Button size="lg"  variant="outline-light">ПРИСТАВКИ</Button>
                    <Button size="lg"  variant="outline-light">ФОТОАППАРАТЫ</Button>
                    <Button size="lg"  variant="outline-light">ПРОЕКТОРЫ</Button>
                    <Button size="lg"  variant="outline-light">ПРИНТЕРЫ</Button>
                </Stack>
            </Navbar>
        </Container>



        
    );
}

export default ServiceNav;