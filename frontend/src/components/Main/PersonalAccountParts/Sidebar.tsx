import React from 'react';
import './../../custom.css'
import { Button, Col, Container, Nav, Row, Stack, Tab } from 'react-bootstrap';
import {Person, PlusSquare, CalendarCheck} from 'react-bootstrap-icons';
import { Link, Outlet } from 'react-router-dom';

function Sidebar() {
    return (
        <Stack direction="horizontal" className="bg-light">
            <Stack direction="vertical" className='justify-content-between col-3 pb-2 bg-dark'>
                <Nav variant='tabs' navbarScroll  className="flex-column flex-fill align-items-stretch">

                    <Link to='/' className='btn btn-outline-light border-0'>
                        <Stack direction="horizontal" gap={3} >
                            <Person className='text-light'/>
                            <span>Профиль</span>
                        </Stack>
                    </Link>

                    <Link to='newappeal' className='btn btn-outline-light border-0'>
                        <Stack direction="horizontal" gap={3}>
                            <PlusSquare className='text-light'/>
                            <span>Создать</span>
                        </Stack>
                    </Link>

                    <Link to='history' className='btn btn-outline-light border-0'>
                        <Stack direction="horizontal" gap={3}>
                            <CalendarCheck className='text-light'/>
                            <span>История</span>
                        </Stack>
                    </Link>

                </Nav>

                <Button variant='outline-light border-0'>Выход</Button>
            </Stack>

            <Outlet />
        </Stack>
    );
}

export default Sidebar;