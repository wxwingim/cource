import React from 'react';
import "./../../custom.css";
import ServiceTable from '../Tables/ServiceTable';
import { Container, Row, Col, Nav, Stack, Card, ListGroup, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HouseDoorFill } from 'react-bootstrap-icons';
import ToRus from './../../../Custom/servicesToRus';

import ServiceDefects from './ServiceDefects';


interface IProps {
    type: string;
}
interface IState {
}

class SpecificService extends React.Component<IProps, IState> {

    render(): React.ReactNode {
        return(
            <Container fluid className='bg-light py-5'>
                <Container className="py-4">
                    <Row>
                        <Breadcrumb>
                            <Link to={'/'} className="breadcrumb-item text-dark"><HouseDoorFill className='mb-1'/></Link>
                            <Link to={'/service'} className="breadcrumb-item text-dark">Ремонт техники</Link>
                            <Breadcrumb.Item active>Ремонт {ToRus(this.props.type)}</Breadcrumb.Item>
                        </Breadcrumb>
                    </Row>

                    <Row className='pb-3'>
                        <Col>
                            <h3 className='h1 text-dark'>Ремонт {ToRus(this.props.type)}</h3>
                        </Col>
                    </Row>

                    <Row className="justify-content-center pb-5">
                        <Col md={9} className='p-5'>
                            <ServiceTable typeDev={this.props.type}/>
                        </Col>             
                    </Row>      

                    <Row className='pb-5'>
                        <Col>
                            <h4 className='h1 text-dark'>Распространенные неисправности</h4>
                        </Col>
                    </Row> 

                    <Row className="justify-content-center">
                        <ServiceDefects typeDev={this.props.type} />
                    </Row>    
                </Container>   
            </Container>
    );
    }

}

export default SpecificService;