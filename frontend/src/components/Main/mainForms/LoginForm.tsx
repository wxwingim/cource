import React, { useContext } from 'react'
import { Button, Col, Container, Form, Row, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Google } from 'react-bootstrap-icons';
import AuthService from '../../../services/auth.service';
import { Context } from '../../../index';

interface IProps {
}
interface IState {
    username: string,
    password: string,
    loading: boolean
}

export const {store} = useContext(Context);

class AuthorizationForm extends React.Component<IProps, IState>{

    constructor(props : any){
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: '',
            password: '',
            loading: false
        }
    }

    onChangeUsername(e:any) {
        this.setState({
          username: e.target.value
        });
    }
    onChangePassword(e:any) {
        this.setState({
            password: e.target.value
        });
    }

    handleLogin(e: any){
        store.login(this.state.username, this.state.password);
    }

    render() {

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
                                    type="text" 
                                    placeholder="example.email@gmail.com"                 
                                    value={this.state.username}
                                    onChange={this.onChangeUsername}
                                    />
                            </Col>                   
                        </Form.Group>

                        <Form.Group as={Row} className="my-4" controlId="formHorizontalPassword">
                            <Col>
                                <Form.Label column>Пароль</Form.Label>
                            </Col>
                            <Col sm={9}>
                                <Form.Control 
                                    type="password" 
                                    placeholder="password" 
                                    value={this.state.password}
                                    onChange={this.onChangePassword}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-5" controlId="formHorizontalCheck">
                            <Col>
                                <Form.Check label="Запомнить пароль" />
                            </Col>
                        </Form.Group>

                        <Form.Group>
                            <Button type="button" onClick={this.handleLogin} variant='dark' className='w-100'>Войти</Button>
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
}

export default AuthorizationForm;
