import React from 'react';
import { Container, Row, Col, Stack, Breadcrumb, Form, Button } from 'react-bootstrap';
import Header from './../../Header';
import Footer from './../../Footer';
import Sidebar from './Sidebar';
import { HouseDoorFill } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom';

function CreateAppealPage() {
    return (
        <Container fluid className='bg-light p-3'>

            <Row >
                <Breadcrumb>
                    <Link to={'/'} className="breadcrumb-item text-dark"><HouseDoorFill className='mb-1'/></Link>
                    <Link to={'account'} className="breadcrumb-item text-dark"> Аккаунт</Link>
                    <Breadcrumb.Item active>Новое обращение</Breadcrumb.Item>
                </Breadcrumb>
            </Row>

            <Row>
                <h2>Создать обращение</h2>
            </Row>

            <Form>            
                <Form.Group as={Row} className="mt-5">
                    <Form.Group as={Col}>
                        <Form.Label className="text-muted">Номер телефона</Form.Label>
                        <Form.Control
                            type="phone" />
                    </Form.Group>
                    <Col></Col><Col></Col><Col></Col>
                </Form.Group>

                <Form.Group as={Row} className="mt-5">
                    <Form.Group as={Col}>
                        <Form.Label className="text-muted">Тип устройства</Form.Label>
                        <Form.Select>
                            <option>Тип</option>
                            <option value="1">Тип1</option>
                            <option value="2">Тип2</option>
                            <option value="3">Тип3</option>
                        </Form.Select>
                    </Form.Group>
                    <Col></Col><Col></Col><Col></Col>
                </Form.Group>

                <Form.Group className="mt-5">
                    <Form.Label className="text-muted">Модель</Form.Label>
                    <Form.Control 
                        type="text"/>
                </Form.Group>

                <Form.Group className="mt-5">
                    <Form.Label className="text-muted">Неисправность</Form.Label>
                    <Form.Control 
                        type="text"/>
                </Form.Group>

                <Form.Group className="mt-5">
                        <Form.Label className="text-muted">Сообщение</Form.Label>
                        <Form.Control as="textarea" rows={5} />
                </Form.Group>

                <Form.Group controlId="formFile" className="my-5">
                        <Form.Control type="file" />
                </Form.Group>

                <Stack direction="horizontal" className="justify-content-end">
                    <Button variant="primary">Отправить</Button>
                </Stack>
            </Form>

            <Container className="py-5"></Container>
            
        </Container>
    );
}

export default CreateAppealPage;