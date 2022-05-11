import React from 'react';
import { Container, Row, Button, Stack, Col, Form } from 'react-bootstrap';
import { Google } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import "./../../custom.css";

const RegistrationForm = () => {

    return(
        <Container className='mx-auto col-md-4 m-5 bg-light rounded p-5'>

            <Row className='mb-4 text-center'>
                <h2 className='fw-bold'>Регистрация</h2>
            </Row>
            
            <Row className='m-0'>                
                <Button type='button' variant='primary'>
                    <Stack direction="horizontal" gap={2} className='align-items-center justify-content-center'>
                        <Google />
                        <span>Войти с помощью Google</span>
                    </Stack>               
                </Button>
            </Row>

            <Row className='mt-4'>
                <Form>
                    <Form.Group as={Row} className="py-3" controlId="formHorizontalPassword">
                        <Col>
                            <Form.Label column sm={4}>Фамилия</Form.Label>
                        </Col>
                        <Col sm={9}>
                            <Form.Control type="text" placeholder="Иванов" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="py-3" controlId="formHorizontalPassword">
                        <Col>
                            <Form.Label column sm={4}>Имя</Form.Label>
                        </Col>
                        <Col sm={9}>
                            <Form.Control type="text" placeholder="Иван" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="py-3" controlId="formHorizontalPassword">
                        <Col>
                            <Form.Label column sm={4}>Отчество</Form.Label>
                        </Col>
                        <Col sm={9}>
                            <Form.Control type="text" placeholder="Иванович" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="py-4" controlId="formHorizontalTel">
                        <Col>
                            <Form.Label column>email</Form.Label>
                        </Col>                    
                        <Col sm={9}>
                            <Form.Control type="email" placeholder="example.email@mail.com" />
                        </Col>                   
                    </Form.Group>

                    <Form.Group as={Row} className="py-3" controlId="formHorizontalPassword">
                        <Col>
                            <Form.Label column sm={4}>Пароль</Form.Label>
                        </Col>
                        <Col sm={9}>
                            <Form.Control type="password" placeholder="password" />
                        </Col>
                    </Form.Group>

                    <Form.Group className='pt-3'>
                            <Link to='/login' className='d-flex'>
                                <Button type="submit" variant='dark' className='w-100'>Зарегистрироваться</Button>
                            </Link> 
                            <p className='pt-2 form-text'>
                                Продолжая, вы соглашаетесь <a href='#'>со сбором и обработкой персональных данных и пользовательским соглашением</a>
                            </p>
                    </Form.Group>              
                </Form>
            </Row>

            <Row className='text-center'>
                <p>Есть аккаунт? <Link to='/login'>Войди</Link></p>
            </Row>
        </Container>
    );
}

export default RegistrationForm;