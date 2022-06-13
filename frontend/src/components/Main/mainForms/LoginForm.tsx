import React, { useContext, FC, useState } from 'react'
import { Button, Col, Container, Form, Row, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Google } from 'react-bootstrap-icons';
import AuthService from '../../../services/auth.service';
import { Context } from '../../../index';
import { observer } from 'mobx-react-lite';


const AuthorizationForm: FC = () => {

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const {store} = useContext(Context);

    function handleLogin(e: any){
        store.login(username, password);
    }

    return(
        <Container className='mx-auto col-md-4 m-5 bg-light rounded p-5'>

            <Row className='mb-4 text-center'>
                <h2 className='fw-bold'>Вход</h2>
            </Row>
            
            <Row className='my-4'>
                <Form>
                    <Form.Group as={Row} className="my-4" controlId="formHorizontalTel">
                        <Col><Form.Label column>email</Form.Label></Col>                    
                        <Col sm={9}>
                            <Form.Control 
                                onChange={e => setUsername(e.target.value)}
                                value={username}
                                type="text" 
                                placeholder="example.email@gmail.com" />
                        </Col>                   
                    </Form.Group>

                    <Form.Group as={Row} className="my-4" controlId="formHorizontalPassword">
                        <Col>
                            <Form.Label column>Пароль</Form.Label>
                        </Col>
                        <Col sm={9}>
                            <Form.Control 
                                onChange={e => setPassword(e.target.value)}
                                value={password}
                                type="password" 
                                placeholder="password" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-5" controlId="formHorizontalCheck">
                        <Col>
                            <Form.Check label="Запомнить пароль" />
                        </Col>
                    </Form.Group>

                    <Form.Group>
                        <Button type="button" onClick={handleLogin} variant='dark' className='w-100'>Войти</Button>
                    </Form.Group>              
                </Form>
            </Row>

            <Row className='text-center'>
                <p>Нет аккаунта? <Link to='/registration'>Зарегистрируйся</Link></p>
            </Row>

            <Row>
                <Link to='/account'> test Personal Account</Link>
            </Row>
        </Container>
    );
}

export default AuthorizationForm;
