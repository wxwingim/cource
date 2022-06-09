import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import "./../../custom.css";

const SearchOrderForm = () => {

    return(
        <Container fluid>
            <Row>
                <Form>
                    <Form.Group as={Row} className="my-5 justify-content-between">
                            <Col xs lg="2">
                                <Form.Label column>Номер заказа</Form.Label>
                            </Col>                    
                            <Col >
                                <Form.Control type="text" placeholder="Введите номер заказа" />
                            </Col>
                            <Col xs lg="2" className='d-flex justify-content-end'>
                                <Button type="submit" variant='dark'>Найти</Button>
                            </Col>                   
                    </Form.Group>
                </Form>
            </Row>
        </Container>

    );
}

export default SearchOrderForm;