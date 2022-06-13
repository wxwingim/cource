import React from 'react';
import { Container, Row, Col, Stack } from 'react-bootstrap';
import Header from './../../Header';
import Footer from './../../Footer';
import Sidebar from './Sidebar';
import { HouseDoorFill } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom';

function CreateAppealPage() {
    return (
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
                <h2>Новое обращение</h2>
            </Row>
            
        </Container>
    );
}

export default CreateAppealPage;