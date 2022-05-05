import React from 'react';
import Sidebar from './Sidebar'
import './custom.css'
import { Col, Container, Row, Stack, Tab, TabPane } from 'react-bootstrap';

function Main() {
    return (
        <Container fluid className='flex-fill'>
            <Tab.Container defaultActiveKey="first">
                <Row className='flex-fill'>
                    <Col sm={2} className="bg-dark">
                        <Sidebar/>
                    </Col>
                    <Col>
                        <Tab.Content className='pt-10'>
                            <Tab.Pane eventKey="first">
                                <p>Content 1</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <p>Content 2</p>
                            </Tab.Pane>
                            <TabPane eventKey='third'>
                                <p>Content 3</p>
                            </TabPane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
}

export default Main;