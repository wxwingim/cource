import React, {useLayoutEffect, useEffect, useState} from 'react';
import { Container, Row, Col, Stack, Button, Breadcrumb, Badge, Form } from 'react-bootstrap';
import Sidebar from './Sidebar';
import { Paperclip, HouseDoorFill } from 'react-bootstrap-icons';
import { Link, useParams } from 'react-router-dom';
import AppealCommentCard from '../Tables/AppealCommentCard';
import {OrderRes, DeviceType, StatusRepair} from '../../../models/OrderResponce';
import UserService from '../../../services/user.service';
import {PrettyFormat} from '../../../Custom/PrettyFormat';
import WorksTable from '../Tables/WorksTable';

function AppealFromHistory() {
    let id = useParams<{ id:string }>();
    const [order, setOrder] = useState<OrderRes>({} as OrderRes);
    const [deviceType, setDeviceType] = useState<DeviceType>({} as DeviceType);
    const [statusRepair, setStatusRepair] = useState<StatusRepair>({} as StatusRepair);

    useEffect(()=>{
        UserService.getOrder(id.id || '').then(order => {
            setOrder(order.data);
            setDeviceType(order.data.deviceType);
            setStatusRepair(order.data.statusRepair);
        });
    }, [])

    return (
        <Container fluid className='bg-light p-3'>

            <Row >
                <Breadcrumb>
                    <Link to={'/'} className="breadcrumb-item text-dark"><HouseDoorFill className='mb-1'/></Link>
                    <Link to={'/account'} className="breadcrumb-item text-dark">Аккаунт</Link>
                    <Link to={'/account/history'} className="breadcrumb-item text-dark">История обращений</Link>
                    <Breadcrumb.Item active>Обращение</Breadcrumb.Item>
                </Breadcrumb>
            </Row>

            <Row className="pb-3">
                <h2 className="h1 pb-3">{ order.model }</h2>
                <p className='text-muted fw-bolder fs-4'>{ order.defect }</p>
            </Row>

            <Row className="pb-3">
                <Stack direction="horizontal">
                    <Link to="/" className="btn btn-outline-primary">Перейти к оплате</Link>

                </Stack>
            </Row>

            <hr className="mb-5" />

            <Container className="justify-content-between pb-3">
                <Row>
                    <Col>                   
                        <span className='text-muted fw-bolder mb-2 '>Номер</span>
                        <p className="pb-3">{ deviceType.nameType ? PrettyFormat.PrettyNumber(deviceType.nameType, order.id) : ''}</p></Col>
                    <Col>                    
                        <span className='text-muted fw-bolder mb-2'>Дата обращения</span>
                        <p className="pb-3">{ PrettyFormat.Deserialize(order.dateRequest) }</p></Col>
                    <Col>                   
                        <span className='text-muted fw-bolder mb-2'>Дата закрытия</span>
                        <p className="pb-3">{ order.dateLimit ? PrettyFormat.Deserialize(order.dateLimit) : '-' }</p>
                    </Col>
                    <Col>                    
                        <Badge pill bg="success" className="px-3 py-2">
                            { statusRepair.nametatus || ''} 
                        </Badge> 
                    </Col>
                </Row>

                <Row>
                    <Col>                    
                        <span className='text-muted fw-bolder mb-2 '>Тип</span>
                        <p>{ deviceType.nameType || ''}</p></Col>
                    <Col>                    
                        <span className='text-muted fw-bolder mb-2 '>Механические повреждения</span>
                        <p>{ order.mechanicalDamage }</p></Col>
                    <Col>
                        <span className='text-muted fw-bolder mb-2'>Комплектация</span>
                        <p>{ order.equipment }</p></Col>
                    <Col>
                        <span className='text-muted fw-bolder mb-2'>Гарантия</span>
                        <p>{ order.quarantee ? 'да' : 'нет' }</p>
                    </Col>
                </Row>
            </Container>
            
            <hr className="mb-5" />

            <Row>
                <WorksTable id={order.id}/>
            </Row>

            {/* <Row className="mx-1">
                <AppealCommentCard />
                <AppealCommentCard />
            </Row> */}

            {/* <Row>
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
            </Stack> */}
                    
            
        </Container>
    );
}

export default AppealFromHistory;