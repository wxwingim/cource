import React from 'react';
import { Container, Row, Col, Stack } from 'react-bootstrap';
import Header from './../../Header';
import Footer from './../../Footer';
import Sidebar from './Sidebar';
import { HouseDoorFill } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom';
import OrdersHistoryTable from './../Tables/OrdersHistoryTable';


function OrdersHistoryPage() {
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
                    </Stack>
                </Row>

                <Row>
                    <h2>История заказов</h2>
                </Row>

                <Row>
                    {/* Search */}
                </Row>

                <Row className="py-5">
                    <OrdersHistoryTable />
                </Row>
                
            </Container>
        </Stack>
    );
}

export default OrdersHistoryPage;