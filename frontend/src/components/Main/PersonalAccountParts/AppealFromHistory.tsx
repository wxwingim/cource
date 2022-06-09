import React from 'react';
import { Container, Row, Col, Stack, Button } from 'react-bootstrap';
import Sidebar from './Sidebar';
import { HouseDoorFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import WorksTable from './../Tables/WorksTable';

function AppealFromHistory() {
    return (
        <Stack direction="horizontal" className="bg-light">
            <Sidebar />
        
            <Container fluid className='flex-fill mx-3'>

                <Row >
                    <Stack direction="horizontal" className='pb-3 px-2'>
                        <Link to={'/'}><HouseDoorFill className='text-dark'/></Link>
                        <span className='mx-2'> / </span>
                        <Link to={'account'}> <span className='text-dark'>Аккаунт</span></Link>
                        <span className='mx-2'> / </span>
                        <Link to={'history'}> <span className='text-dark'>История заказов</span></Link>
                        <span className='mx-2'> / </span>
                        <Link to={'history'}> <span className='text-dark'>Обращение</span></Link>
                    </Stack>
                </Row>

                <Row className="py-3">
                    <h2>Обращение №</h2>
                </Row>

                <Row>
                    <h3>Общая информация</h3>
                </Row>

                <Row className="py-5">
                    <h3 className='pb-3'>Выполненные работы/оказанные услуги</h3>
                    <WorksTable />
                </Row>

                <Row>
                    {/* <Button variant="primary" >Открыть историю изменений</Button> */}
                    <Button variant="primary" >Акт приема/передачи оборудования в ремонт</Button>
                    <Button variant="primary">Акт выполненных работ/оказанных услуг</Button>
                </Row>
                
            </Container>
        </Stack>
    );
}

export default AppealFromHistory;