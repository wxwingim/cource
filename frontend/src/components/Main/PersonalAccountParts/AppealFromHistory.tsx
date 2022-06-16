import React from 'react';
import { Container, Row, Col, Stack, Button, Breadcrumb, Badge, Form } from 'react-bootstrap';
import Sidebar from './Sidebar';
import { Paperclip, HouseDoorFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import AppealCommentCard from '../Tables/AppealCommentCard';

function AppealFromHistory() {
    return (
        <Container fluid className='bg-light p-3'>

            <Row >
                <Breadcrumb>
                    <Link to={'/'} className="breadcrumb-item text-dark"><HouseDoorFill className='mb-1'/></Link>
                    <Link to={'/account'} className="breadcrumb-item text-dark">Аккаунт</Link>
                    <Link to={'/account/history'} className="breadcrumb-item text-dark">История обращений</Link>
                    <Breadcrumb.Item active>Новое обращение</Breadcrumb.Item>
                </Breadcrumb>
            </Row>

            <Row className="pb-3">
                <h2 className="h1 pb-3">Наименование устройства</h2>
                <p className='text-muted fw-bolder fs-4'>Неисправность</p>
            </Row>

            <hr className="mb-5" />

            <Container className="justify-content-between pb-3">
                <Row>
                    <Col>                   
                        <span className='text-muted fw-bolder mb-2 '>Номер</span>
                        <p className="pb-3">№000095678902</p></Col>
                    <Col>                    
                        <span className='text-muted fw-bolder mb-2'>Дата обращения</span>
                        <p className="pb-3">22.09.2021</p></Col>
                    <Col>                   
                        <span className='text-muted fw-bolder mb-2'>Дата закрытия</span>
                        <p className="pb-3">-</p>
                    </Col>
                    <Col>                    
                        <Badge pill bg="success" className="px-3 py-2">
                            принят в ремонт
                        </Badge>
                    </Col>
                </Row>

                <Row>
                    <Col>                    
                        <span className='text-muted fw-bolder mb-2 '>Тип</span>
                        <p>Ноутбук</p></Col>
                    <Col>                    
                        <span className='text-muted fw-bolder mb-2 '>Механические повреждения</span>
                        <p>Царапины</p></Col>
                    <Col>
                        <span className='text-muted fw-bolder mb-2'>Комплектация</span>
                        <p>нет</p></Col>
                    <Col>
                        <span className='text-muted fw-bolder mb-2'>Гарантия</span>
                        <p>нет</p>
                    </Col>
                </Row>
            </Container>
            
            <hr className="mb-5" />

            <Row className="mx-1">
                <AppealCommentCard />
                <AppealCommentCard />
            </Row>

            <Row>
                <Form>
                    <Form.Group>
                        <Form.Label className="text-muted h5">Сообщение</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>

                    <Form.Group controlId="formFile" className="my-3">
                        <Form.Control type="file" />
                    </Form.Group>
                </Form> 

            </Row>

            <Stack direction="horizontal" className="justify-content-end">
                <Button variant="primary">Отправить</Button>
            </Stack>
                    
            
        </Container>
    );
}

export default AppealFromHistory;