import React, {FC, useState, useContext, useEffect} from 'react';
import { Container, Row, Breadcrumb, Form, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HouseDoorFill, Pencil, Rss } from 'react-bootstrap-icons';
import {Context} from "../../../index";
import { UserResponce } from '../../../models/UserResponce';
import axios from 'axios'; 
import UserService from '../../../services/user.service';
import { observer } from 'mobx-react-lite';


interface IProps {
}
interface IState {
    user: UserResponce
}

class UserProfile extends React.Component<IProps, IState> {

    constructor(props : any){
        super(props);

        this.state = {
            user: {} as UserResponce
        }
    }

    componentDidMount(){
        UserService.getUserDetails().then((res) => {
            this.setState({
                user: res.data
            });
            console.log("componentDidMount");
            console.log(this.state.user);
        });
    }




    // useEffect(() => {
    //     UserService.getUserDetails();
    //     setUser(UserService.user);
    // });

    render() {
        return (
            <Container fluid className='bg-light p-3'>
                <Row >
                    <Breadcrumb>
                        <Link to={'/'} className="breadcrumb-item text-dark"><HouseDoorFill className='mb-1'/></Link>
                        <Link to={'account'} className="breadcrumb-item text-dark"> Аккаунт</Link>
                        <Breadcrumb.Item active>Профиль</Breadcrumb.Item>
                    </Breadcrumb>
                </Row>

                <Row>
                    <h2>Профиль</h2>
                </Row>

                <Form>
                    <Form.Group as={Row} className="mt-5">
                        <Form.Group as={Col}>
                            <Form.Label className="text-muted">Email</Form.Label>
                            <InputGroup>
                                <FormControl
                                    type="email" 
                                    disabled
                                    readOnly
                                    defaultValue={ this.state.user.username }/>
                                <Button variant="outline-secondary"><Pencil className='mb-1'/></Button>
                            </InputGroup>
                        </Form.Group>

                        <Form.Group as={Col} className="mx-4">
                            <Form.Label className="text-muted">Фамилия</Form.Label>
                            <InputGroup>
                                <FormControl
                                    type="text" 
                                    disabled
                                    readOnly
                                    defaultValue={ this.state.user.lastName}/>
                                <Button variant="outline-secondary"><Pencil className='mb-1'/></Button>
                            </InputGroup>
                        </Form.Group>

                        <Col></Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mt-5">

                        <Form.Group as={Col}>
                            <Form.Label className="text-muted">Номер телефона</Form.Label>
                            <InputGroup>
                                <FormControl
                                    type="phone" 
                                    disabled
                                    readOnly
                                    defaultValue={ this.state.user.phone }/>
                                <Button variant="outline-secondary"><Pencil className='mb-1'/></Button>
                            </InputGroup>
                        </Form.Group>

                        <Form.Group as={Col}  className="mx-4">
                            <Form.Label className="text-muted">Имя</Form.Label>
                            <InputGroup>
                                <FormControl
                                    type="text" 
                                    disabled
                                    readOnly
                                    defaultValue={ this.state.user.firstName}/>
                                <Button variant="outline-secondary"><Pencil className='mb-1'/></Button>
                            </InputGroup>
                        </Form.Group>

                        <Col></Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mt-5">

                        <Form.Group as={Col}>
                            <Form.Label className="text-muted">Пароль</Form.Label>
                            <InputGroup>
                                <FormControl
                                    type="password" 
                                    disabled
                                    readOnly/>
                                <Button variant="outline-secondary"><Pencil className='mb-1'/></Button>
                            </InputGroup>
                        </Form.Group>

                        <Form.Group as={Col} className="mx-4">
                            <Form.Label className="text-muted">Отчество</Form.Label>
                            <InputGroup>
                                <FormControl
                                    type="text" 
                                    disabled
                                    readOnly
                                    defaultValue={ this.state.user.middleName}/>
                                <Button variant="outline-secondary"><Pencil className='mb-1'/></Button>
                            </InputGroup>
                        </Form.Group>

                        <Col></Col>

                    </Form.Group>
                </Form>

            </Container>
        );
    }
}

export default UserProfile;