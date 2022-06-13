import React from 'react';
import { Container } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';


function Footer() {
    return (
        <>
            <Outlet />        
            <Container fluid className='bg-dark'>
                <Container>
                    <div className='text-light'>2022</div>
                </Container>           
            </Container>
        </>
    );
}

export default Footer;