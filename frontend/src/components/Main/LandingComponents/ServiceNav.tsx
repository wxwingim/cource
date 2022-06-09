import React from 'react';
import {Container, Navbar, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './../../custom.css';

const ServiceNav = () => {
    return (
        <Container fluid className='bg-dark my-01'>
            <Navbar bg='dark' variant='dark'>
                <Stack className="d-flex flex-row flex-wrap justify-content-between">

                    <Link to="service/monitors" className='btn btn-outline-light'>МОНИТОРЫ</Link>
                    <Link to="service/tablets" className='btn btn-outline-light'>ПЛАНШЕТЫ</Link>
                    <Link to="service/phones" className='btn btn-outline-light'>ТЕЛЕФОНЫ</Link>
                    <Link to="service/laptops" className='btn btn-outline-light'>НОУТБУКИ</Link>
                    <Link to="service/laptops" className='btn btn-outline-light'>КОМПЬЮТЕРЫ</Link>
                    <Link to="service/laptops" className='btn btn-outline-light'>ТЕЛЕВИЗОРЫ</Link>
                    <Link to="service/laptops" className='btn btn-outline-light'>МОНОБЛОКИ</Link>
                    <Link to="service/laptops" className='btn btn-outline-light'>ПРИСТАВКИ</Link>
                    <Link to="service/laptops" className='btn btn-outline-light'>ФОТОАППАРАТЫ</Link>
                    
                </Stack>
            </Navbar>
        </Container>



        
    );
}

export default ServiceNav;