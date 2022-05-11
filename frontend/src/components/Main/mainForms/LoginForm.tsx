import React from 'react'
import { Button, Col, Container, Form, Row, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Google } from 'react-bootstrap-icons';

const AuthorizationForm = (props: React.HTMLProps<HTMLInputElement>) => {

    return(
        <Container className='mx-auto col-md-4 m-5 bg-light rounded p-5'>

            <Row className='mb-4 text-center'>
                <h2 className='fw-bold'>Вход</h2>
            </Row>
            
            <Row className='m-0'>                
                <Button type='button' variant='primary'>
                    <Stack direction="horizontal" gap={2} className='align-items-center justify-content-center'>
                        <Google />
                        <span>Войти с помощью Google</span>
                    </Stack>               
                </Button>
            </Row>

            <Row className='my-4'>
                <Form>
                    <Form.Group as={Row} className="my-4" controlId="formHorizontalTel">
                        <Col><Form.Label column>email</Form.Label></Col>                    
                        <Col sm={9}>
                            <Form.Control type="email" placeholder="example.email@mail.com" />
                        </Col>                   
                    </Form.Group>

                    <Form.Group as={Row} className="my-4" controlId="formHorizontalPassword">
                        <Col>
                            <Form.Label column>Пароль</Form.Label>
                        </Col>
                        <Col sm={9}>
                            <Form.Control type="password" placeholder="password" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-5" controlId="formHorizontalCheck">
                        <Col>
                            <Form.Check label="Запомнить пароль" />
                        </Col>
                    </Form.Group>

                    <Form.Group>
                            <Link to='/account' className='d-flex'>
                                <Button type="submit" variant='dark' className='w-100'>Войти</Button>
                            </Link> 
                    </Form.Group>              
                </Form>
            </Row>

            <Row className='text-center'>
                <p>Нет аккаунта? <Link to='/registration'>Зарегистрируйся</Link></p>
            </Row>
        </Container>
    );
}

export default AuthorizationForm;

