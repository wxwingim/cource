import React from 'react';
import { Alert, Container, Row, Col, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function succesRegistration(){
    return(
        <Container fluid className='bg-light d-flex flex-fill'>
            <Stack className="justify-content-center align-items-center">
                <Row className="justify-content-center align-items-center">
                    {/* <Col> */}
                        <Alert variant="success" className="px-5 py-3">
                            Регистрация прошла успешно! Войдите в свой 
                            <Link to="/login"> аккаунт </Link>.
                        </Alert>
                    {/* </Col> */}
                    
                </Row>
            </Stack>


        </Container>

    );
}