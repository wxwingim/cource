import React from 'react';
import { Button, ButtonGroup, Container, Nav, Navbar, Row, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './../../custom.css';

const ServiceNav = () => {
    return (
        <Container fluid className='bg-dark my-01'>
            <Navbar bg='dark' variant='dark'>
                <Stack className="d-flex flex-row flex-wrap justify-content-between">
                    <Link to="service/monitors">
                        <Button variant="outline-light">МОНИТОРЫ</Button>
                    </Link>
                    
                    <Link to="service/tablets">
                        <Button variant="outline-light">ПЛАНШЕТЫ</Button>
                    </Link>
                    
                    <Link to="service/phones">
                        <Button variant="outline-light">ТЕЛЕФОНЫ</Button>
                    </Link>
                    
                    <Link to="service/laptops">
                        <Button variant="outline-light">НОУТБУКИ</Button>
                    </Link>
                    
                    <Button variant="outline-light">КОМПЬЮТЕРЫ</Button>
                    <Button variant="outline-light">ТЕЛЕВИЗОРЫ</Button>
                    <Button variant="outline-light">МОНОБЛОКИ</Button>
                    <Button variant="outline-light">ПРИСТАВКИ</Button>
                    <Button variant="outline-light">ФОТОАППАРАТЫ</Button>
                    {/* <Button variant="outline-light">ПРОЕКТОРЫ</Button> */}
                    {/* <Button variant="outline-light">ПРИНТЕРЫ</Button> */}
                </Stack>
            </Navbar>
        </Container>



        
    );
}

export default ServiceNav;