import React from 'react';
import { Container, Row, Button, Stack, Col, Form } from 'react-bootstrap';
import { Google } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import "./../../custom.css";
// import AuthService from '../../../services/auth.service';
import {Context} from '../../../index';


interface IProps {
}
interface IState {
    lastName: string,
    firstName: string,
    middleName: string,
    username: string,
    password: string,
}

export const {store} = useContext(Context);


class RegistrationForm extends React.Component<IProps, IState> {

    constructor(props : any){
        super(props);
        this.registrationUser = this.registrationUser.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeLName = this.onChangeLName.bind(this);
        this.onChangeFName = this.onChangeFName.bind(this);
        this.onChangeMName = this.onChangeMName.bind(this);

        this.state = {
            lastName: '',
            firstName: '',
            middleName: '',
            username: '',
            password: ''
        }
    }

    onChangeLName(e:any) {
        this.setState({
            lastName: e.target.value
        });
    }
    onChangeFName(e:any) {
        this.setState({
            firstName: e.target.value
        });
    }
    onChangeMName(e:any) {
        this.setState({
            middleName: e.target.value
        });
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
    registrationUser(e:any){
        // AuthService.register(
        //     this.state.lastName,
        //     this.state.firstName,
        //     this.state.middleName,
        //     this.state.username,
        //     this.state.password
        // );
        // AuthService.login(this.state.username, this.state.password);
        store.register(this.state.username,
            this.state.password,
            this.state.lastName,
            this.state.firstName,
            this.state.middleName);
    }

    render() {
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
                                    type="text" 
                                    placeholder="Иванов"
                                    value={this.state.lastName}
                                    onChange={this.onChangeLName} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="py-3" controlId="formHorizontalPassword">
                            <Col>
                                <Form.Label column sm={4}>Имя</Form.Label>
                            </Col>
                            <Col sm={9}>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Иван" 
                                    value={this.state.firstName}
                                    onChange={this.onChangeFName}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="py-3" controlId="formHorizontalPassword">
                            <Col>
                                <Form.Label column sm={4}>Отчество</Form.Label>
                            </Col>
                            <Col sm={9}>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Иванович" 
                                    value={this.state.middleName}
                                    onChange={this.onChangeMName}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="py-4" controlId="formHorizontalTel">
                            <Col>
                                <Form.Label column>email</Form.Label>
                            </Col>                    
                            <Col sm={9}>
                                <Form.Control 
                                    type="email" 
                                    placeholder="example.email@mail.com"
                                    value={this.state.username}
                                    onChange={this.onChangeUsername} />
                            </Col>                   
                        </Form.Group>

                        <Form.Group as={Row} className="py-3" controlId="formHorizontalPassword">
                            <Col>
                                <Form.Label column sm={4}>Пароль</Form.Label>
                            </Col>
                            <Col sm={9}>
                                <Form.Control 
                                    type="password" 
                                    placeholder="password" 
                                    value={this.state.password}
                                    onChange={this.onChangePassword}/>
                            </Col>
                        </Form.Group>

                        <Form.Group className='pt-3'>
                            <Stack>
                                <Link onClick={this.registrationUser} to='/account'  className='btn-block btn btn-dark'>Зарегистрироваться</Link> 
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
}

export default RegistrationForm;