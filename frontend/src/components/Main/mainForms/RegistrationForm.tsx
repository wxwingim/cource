import React, {FC, useState, useContext} from 'react';
import { Container, Row, Button, Stack, Col, Form } from 'react-bootstrap';
import { Google } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import "./../../custom.css";
// import AuthService from '../../../services/auth.service';
import {Context} from '../../../index';
import { observer } from 'mobx-react-lite';


const RegistrationForm: FC = () => {


    const [lastName, setLName] = useState<string>('');
    const [firstName, setFName] = useState<string>('');
    const [middleName, setMName] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const {store} = useContext(Context);

    function registrationUser(e: any){
        store.register(username, password, lastName, firstName, middleName);
    }

    return(
        <Container className='mx-auto col-md-5 m-5 bg-light rounded p-5'>

            <Row className='mb-4 text-center'>
                <h2 className='fw-bold'>Регистрация</h2>
            </Row>
            
            <Row className='mt-4'>
                <Form>
                    <Form.Group as={Row} className="py-3" controlId="formHorizontalPassword">
                        <Col>
                            <Form.Label column sm={4}>Фамилия</Form.Label>
                        </Col>
                        <Col sm={9}>
                            <Form.Control 
                                onChange={e => setLName(e.target.value)}
                                value={lastName}
                                type="text" 
                                placeholder="Иванов" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="py-3" controlId="formHorizontalPassword">
                        <Col>
                            <Form.Label column sm={4}>Имя</Form.Label>
                        </Col>
                        <Col sm={9}>
                            <Form.Control 
                                onChange={e => setFName(e.target.value)}
                                value={firstName}
                                type="text" 
                                placeholder="Иван" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="py-3" controlId="formHorizontalPassword">
                        <Col>
                            <Form.Label column sm={4}>Отчество</Form.Label>
                        </Col>
                        <Col sm={9}>
                            <Form.Control 
                                onChange={e => setMName(e.target.value)}
                                value={middleName}
                                type="text" 
                                placeholder="Иванович" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="py-4" controlId="formHorizontalTel">
                        <Col>
                            <Form.Label column>email</Form.Label>
                        </Col>                    
                        <Col sm={9}>
                            <Form.Control 
                                onChange={e => setUsername(e.target.value)}
                                value={username}
                                type="email" 
                                placeholder="example.email@mail.com"/>
                        </Col>                   
                    </Form.Group>

                    <Form.Group as={Row} className="py-3" controlId="formHorizontalPassword">
                        <Col>
                            <Form.Label column sm={4}>Пароль</Form.Label>
                        </Col>
                        <Col sm={9}>
                            <Form.Control 
                                onChange={e => setPassword(e.target.value)}
                                value={password}
                                type="password" 
                                placeholder="password" />
                        </Col>
                    </Form.Group>

                    <Form.Group className='pt-3'>
                        <Stack>
                            <Link onClick={registrationUser} to='/account'  className='btn-block btn btn-dark'>Зарегистрироваться</Link> 
                            <p className='pt-2 form-text'>
                                Продолжая, вы соглашаетесь <a href='#'>со сбором и обработкой персональных данных и пользовательским соглашением</a>
                            </p>
                        </Stack>
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