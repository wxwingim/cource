import React from 'react';
import { Alert, Container, Row, Col, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function SuccessPayment(){
    return(
        <Container fluid className='bg-light d-flex flex-fill'>
            <Stack className="justify-content-center align-items-center">
                <Row className="justify-content-center align-items-center">
                    <Alert variant="success" className="px-5 py-3">
                        Оплата прошла успешно, проверьте электронную почту! Перейдите к 
                        <Link to="/account/history"> истории обращений</Link>.
                    </Alert>        
                </Row>
            </Stack>


        </Container>

    );
}