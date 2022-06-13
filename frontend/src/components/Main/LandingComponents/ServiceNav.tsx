import React from 'react';
import {Container, Navbar, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './../../custom.css';

const ServiceNav = () => {
    return (
        <Container fluid className='bg-dark my-01'>
            <Navbar bg='dark' variant='dark'>
                <Stack className="d-flex flex-row flex-wrap justify-content-between">

                    {/* <Link to="service/monitors" className='btn btn-outline-light'>МОНИТОРЫ</Link> */}
                    <Link to="service/tablets" className='btn btn-outline-light border-0'>ПЛАНШЕТЫ</Link>
                    <Link to="service/phones" className='btn btn-outline-light border-0'>ТЕЛЕФОНЫ</Link>
                    <Link to="service/laptops" className='btn btn-outline-light border-0'>НОУТБУКИ</Link>
                    <Link to="service/computers" className='btn btn-outline-light border-0'>КОМПЬЮТЕРЫ</Link>
                    {/* <Link to="service/laptops" className='btn btn-outline-light'>ТЕЛЕВИЗОРЫ</Link> */}
                    <Link to="service/monoblocks" className='btn btn-outline-light border-0'>МОНОБЛОКИ</Link>
                    <Link to="service/console" className='btn btn-outline-light border-0'>ПРИСТАВКИ</Link>
                    <Link to="service/cameras" className='btn btn-outline-light border-0'>ФОТОАППАРАТЫ</Link>
                    <Link to="service/watch" className='btn btn-outline-light border-0'>ЧАСЫ</Link>
                    
                </Stack>
            </Navbar>
        </Container>



        
    );
}

export default ServiceNav;