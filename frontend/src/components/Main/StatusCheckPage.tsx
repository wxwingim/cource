import React from 'react';
import { Col, Container, Row, Form, FormControl, FormGroup, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Tools} from 'react-bootstrap-icons';
import '../custom.css';

 
interface IProps {}
interface IState {}

class StatusCheckPage extends React.Component<IProps, IState>{
    render(){
        return (

            <Container fluid className='bg-light p-3'>
                <Container>
                    <Row>
                        <Col md={2}>

                        <svg width="0" height="0">
                            <linearGradient id="perfect-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                                <stop stopColor="#fccb90" offset="0%" />
                                <stop stopColor="#d57eeb" offset="100%" />
                            </linearGradient>
                        </svg>

                            <Tools size="150" className="h-100" style={{ fill: "url(#perfect-gradient)" }}/>
                        </Col>

                        <Col md="auto" className="ms-2">
                            <h2 className="text-dark mt-5">Узнайте статус ремонта</h2>
                            <p>Введите номер заказа, чтобы узнать его статус.</p>

                            <Form className="mt-3 mb-5">
                                <Form.Group as={Row}>

                                    <Form.Group as={Col}>
                                        <Form.Control 
                                            type='text'
                                            placeholder='номер заказа'/>
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Button variant="outline-info">Узнать статус</Button>
                                    </Form.Group>

                                </Form.Group>
                            </Form>
                        </Col>
                    
                    </Row>
                </Container>
            </Container>
        );
    }
}

export default StatusCheckPage;