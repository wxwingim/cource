import React from 'react';
import './../../custom.css'
import { Button, ButtonGroup, Col, Container, Nav, Row, Stack, Tab } from 'react-bootstrap';
import {Person, PlusSquare, CalendarCheck} from 'react-bootstrap-icons';

function Categories() {
    return (
        <Stack className='flex-fill justify-content-between pb-2'>
            <Nav variant='tabs' navbarScroll  className="flex-column">

                <Nav.Link eventKey="first" href="#home">
                    <Stack direction="horizontal" gap={3} >
                        <Person className='text-light'/>
                        Профиль
                    </Stack>
                    
                </Nav.Link>

                <Nav.Link eventKey="second" href="#home">
                    <Stack direction="horizontal" gap={3}>
                        <PlusSquare className='text-light'/>
                        Создать
                    </Stack>
                </Nav.Link>

                <Nav.Link eventKey="third" href="#home">
                    <Stack direction="horizontal" gap={3}>
                        <CalendarCheck className='text-light'/>
                        История
                    </Stack>
                    
                </Nav.Link>

            </Nav>

            <Button variant='outline-light' >Выход</Button>
        </Stack>
    );
}

export default Categories;