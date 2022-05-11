import React from 'react';
import { Button, Col, Container, Row, Stack } from 'react-bootstrap';
import "./../custom.css";

import ServiceNav from './LandingComponents/ServiceNav';
import SearchOrderForm from './mainForms/SearchOrderForm';

const LandingPage = () => {
    return (
        <>
            <Container fluid className='my-01 py-25 bg-dark'>
                <Container>
                    <Row>
                        <Col>
                            <h1 className='text-light fw-bold'>SERVICECENTER</h1>
                        </Col>
                        <Col>
                            <p className='text-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <ServiceNav />

            <Container fluid className='bg-dark py-4 my-01'></Container>

            <Container fluid className='bg-light py-25'>
                <Container>
                    <Row>
                        <h2>Проверить по номеру заказа</h2>
                    </Row>
                    <Row>
                        <SearchOrderForm />
                    </Row>
                </Container>
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