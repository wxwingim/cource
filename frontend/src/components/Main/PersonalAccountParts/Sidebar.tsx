import React from 'react';
import './../../custom.css'
import { Button, Col, Container, Nav, Row, Stack, Tab } from 'react-bootstrap';
import {Person, PlusSquare, CalendarCheck} from 'react-bootstrap-icons';
import { Link, Outlet } from 'react-router-dom';

function Sidebar() {
    return (
        <Stack direction="horizontal" className="bg-dark">
            <Stack direction="vertical" className='justify-content-between col-3 pb-2'>
                <Nav variant='tabs' navbarScroll  className="flex-column align-items-stretch">

                    <Link to='profile' className='btn btn-outline-light border-0'>
                        <Stack direction="horizontal" gap={3} >
                            <Person />
                            <span>Профиль</span>
                        </Stack>
                    </Link>

                    <Link to='newappeal' className='btn btn-outline-light border-0'>
                        <Stack direction="horizontal" gap={3}>
                            <PlusSquare />
                            <span>Новое обращение</span>
                        </Stack>
                    </Link>

                    <Link to='history' className='btn btn-outline-light border-0'>
                        <Stack direction="horizontal" gap={3}>
                            <CalendarCheck />
                            <span>История обращений</span>
                        </Stack>
                    </Link>

                </Nav>

                {/* <Button variant='outline-light border-0'>Выход</Button> */}
            </Stack>

            <Outlet />
        </Stack>
    );
}

export default Sidebar;