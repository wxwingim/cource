import React from 'react';
import './../custom.css'
import { Col, Container, Row, Stack, Tab, TabPane } from 'react-bootstrap';
import Sidebar from './PersonalAccountParts/Sidebar';
import Header from './../Header';
import Footer from './../Footer';

function PersonalAccount() {
    return (
        <Stack direction="horizontal" className="bg-lidht" >
            <Sidebar />

            <Container fluid className='flex-fill'>
                <Row>

                    <Col>
                        <Container>
                            <Row>
                                <h2>PersonalAccount</h2>
                            </Row>

                        </Container>
                    </Col>
                </Row>

            </Container>
        </Stack>
    );
}

export default PersonalAccount;