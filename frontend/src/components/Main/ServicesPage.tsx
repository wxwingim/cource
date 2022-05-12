import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./../custom.css";

import ServiceTable from './Tables/ServiceTable';

const ServicesPage = () => {

    return(
        <Container >
            <Row className="justify-content-center">
                <Col md={9} className='p-5'>
                    <ServiceTable />
                </Col>             
            </Row>           
        </Container>       
    );
}

export default ServicesPage;
