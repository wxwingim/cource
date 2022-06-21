import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Stack, Breadcrumb, Form, Button, Card } from 'react-bootstrap';
import { HouseDoorFill } from 'react-bootstrap-icons'
import { Link, useNavigate } from 'react-router-dom';
import ServiceService from '../../../services/service.service';
import { DeviceType, OrderRes, StatusRepair } from '../../../models/OrderResponce';
import UserService from '../../../services/user.service';

function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

function CreateAppealPage() {

    let navigate = useNavigate();

    const [deviceTypes, setDeviceTypes] = useState<DeviceType[]>([]);
    const [validated, setValidated] = useState<boolean>(false);

    const [selectedValue, setSelectedValue] = useState<string>('');

    const [model, setModel] = useState<string>('');
    const [devType, setDevType] = useState<string>('');
    const [defect, setDefect] = useState<string>('');
    const [mechanicalDamage, setMechanicalDamage] = useState<string>('');
    const [equipment, setEquipment] = useState<string>('');

    useEffect(() => {
        ServiceService.getDeviceTypes().then((res) => {
            setDeviceTypes(res.data);
        })
    }, []);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false){
            event.preventDefault();
            event.stopPropagation();
        } else {
            setValidated(true);
            let devT: DeviceType = { 
                id: Number(selectedValue), 
                nameType: selectedValue 
            }
            UserService.createOrder(model, defect, equipment, mechanicalDamage, devT);
            delay(1000);
            navigate("/account/history");
        }
    }

    return (
        <Container fluid className='bg-light p-3'>

            <Row >
                <Breadcrumb>
                    <Link to={'/'} className="breadcrumb-item text-dark"><HouseDoorFill className='mb-1'/></Link>
                    <Link to={'account'} className="breadcrumb-item text-dark"> Аккаунт</Link>
                    <Breadcrumb.Item active>Новое обращение</Breadcrumb.Item>
                </Breadcrumb>
            </Row>

            <Row className="mb-4">
                <h2>Создать обращение</h2>
            </Row>

            <Row>
                <Card className="p-4 mx-auto col-md-6">
                    <Form noValidate validated={validated} onSubmit={ handleSubmit }>            

                        <Form.Group as={Row} className="mt-5">
                            <Form.Group as={Col}>
                                <Form.Label className="text-muted">Тип устройства</Form.Label>
                                <Form.Select 
                                    required
                                    onChange={e => setSelectedValue(e.target.value) }
                                    value={selectedValue}
                                    >
                                    {
                                        deviceTypes.map((deviceType) => 
                                            <option value={deviceType.id} 
                                                    >
                                                        {deviceType.nameType || ''}
                                            </option>
                                        )
                                    }
                                </Form.Select>
                            </Form.Group>
                            <Col></Col>
                        </Form.Group>

                        <Form.Group className="mt-5">
                            <Form.Label className="text-muted">Модель</Form.Label>
                            <Form.Control 
                                required
                                type="text"
                                onChange={e => setModel(e.target.value)}
                                value={model}/>
                            <Form.Control.Feedback type="invalid">
                                Обязательное для заполнения поле
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mt-5">
                            <Form.Label className="text-muted">Неисправность</Form.Label>
                            <Form.Control 
                                required
                                type="text"
                                onChange={e => setDefect(e.target.value)}
                                value={defect}/>
                            <Form.Control.Feedback type="invalid">
                                Обязательное для заполнения поле
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mt-5">
                            <Form.Label className="text-muted">Механические повреждения</Form.Label>
                            <Form.Control 
                                required
                                type="text"
                                onChange={e => setMechanicalDamage(e.target.value)}
                                value={mechanicalDamage}/>
                            <Form.Control.Feedback type="invalid">
                                Обязательное для заполнения поле
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mt-5">
                            <Form.Label className="text-muted">Комплектация</Form.Label>
                            <Form.Control 
                                required
                                defaultValue="нет"
                                type="text"
                                onChange={e => setEquipment(e.target.value)}
                                value={equipment}/>
                        </Form.Group>

                        <Stack direction="horizontal" className="justify-content-end mt-5">
                            <Button type="submit" 
                                    variant="primary"
                                    >Отправить</Button>
                        </Stack>
                    </Form>
                </Card>
                {/* <Col></Col> */}
            </Row>

            <Container className="py-5"></Container>
            
        </Container>
    );
}

export default CreateAppealPage;