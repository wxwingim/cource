import React from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./../custom.css";

import ServiceNav from './LandingComponents/ServiceNav';
import SearchOrderForm from './mainForms/SearchOrderForm';

const LandingPage = () => {
    return (
        <>
        
            <ServiceNav />

            <Container fluid className='bg-dark py-4 my-01'></Container>

            <Container fluid className='my-01 py-25 bg-dark'>
                <Container>
                    <Row>
                        <Col>
                            <h1 className='fw-bold text-light'>SERVICEcenter</h1>
                            <p className='text-light mb-5'>Сервисный центр по ремонту бытовой техники и электроники</p>
                            <Link to="/status" className='btn btn-outline-info'>Проверить по номеру</Link>
                        </Col>
                        <Col>
                            {/* TODO create image */}
                        </Col>
                    </Row>
                </Container>
            </Container>

            

            <Container fluid className='bg-dark py-4 my-01'></Container>

            <Container fluid className='bg-icons py-10'>
            </Container>

            <Container fluid className='py-25 my-01 bg-dark'>
                <Container>
                    <Row>
                        <Col>
                            <h1 className='text-light'>О компании</h1>
                        </Col>
                        <Col>
                            <Stack gap={4}>
                                <p className='text-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p className='text-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p className='text-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </Stack>                            
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}

export default LandingPage;