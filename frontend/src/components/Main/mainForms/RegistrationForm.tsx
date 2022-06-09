import React from 'react';
import { Container, Row, Button, Stack, Col, Form } from 'react-bootstrap';
import { Google } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import "./../../custom.css";
import AuthService from '../../../services/auth.service';


interface IProps {
}
interface IState {
    lName: string,
    fName: string,
    mName: string,
    username: string,
    password: string,
    // loading: boolean
}

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
            lName: '',
            fName: '',
            mName: '',
            username: '',
            password: ''
            // loading: false
        }
    }

    onChangeLName(e:any) {
        this.setState({
            lName: e.target.value
        });
    }
    onChangeFName(e:any) {
        this.setState({
            fName: e.target.value
        });
    }
    onChangeMName(e:any) {
        this.setState({
            mName: e.target.value
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
        AuthService.register(
            this.state.lName,
            this.state.fName,
            this.state.mName,
            this.state.username,
            this.state.password
        );
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
                                    value={this.state.lName}
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
                                    value={this.state.fName}
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
                                    value={this.state.mName}
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
                                <Link to='/login' className='d-flex'>
                                    <Button type="button" onClick={this.registrationUser} variant='dark' className='w-100'>Зарегистрироваться</Button>
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
}

export default RegistrationForm;