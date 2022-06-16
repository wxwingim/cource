import React from 'react';
import { Col, Container, Row, Stack, Breadcrumb} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./../custom.css";
import { HouseDoorFill } from 'react-bootstrap-icons'


const ServicesPage = () => {

    return(
        <Container fluid className='bg-light py-5'>
            <Container className="py-4">

                <Row >
                    <Breadcrumb>
                        <Link to={'/'} className="breadcrumb-item text-dark"><HouseDoorFill className='mb-1'/></Link>
                        <Breadcrumb.Item active>Ремонт техники</Breadcrumb.Item>
                    </Breadcrumb>
                </Row>

                <Row className='pb-3'>
                    <Col>
                        <h3 className='h1 text-dark'>Ремонт техники</h3>
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col className='bg-service bg-service-1 m-2 rounded'>
                        <Link to="monitors">
                            <p>Ремонт мониторов</p>
                        </Link>
                    </Col>   
                    <Col className='bg-service bg-service-2 m-2 rounded'>
                        <Link to="tablets">
                            <p>Ремонт планшетов</p>
                        </Link>
                    </Col>  
                    <Col className='bg-service bg-service-3 m-2 rounded'>
                        <Link to="phones">
                            <p>Ремонт телефонов</p>
                        </Link>
                    </Col>  
                    <Col className='bg-service bg-service-4 m-2 rounded'>
                        <Link to="laptops">
                            <p>Ремонт ноутбуков</p>
                        </Link>
                    </Col>            
                </Row>   

                <Row className="justify-content-center">
                    <Col className='bg-service bg-service-5 m-2 rounded'>
                        <Link to="computers">
                            <p>Ремонт компьютеров</p>
                        </Link>
                    </Col>   
                    <Col className='bg-service bg-service-6 m-2 rounded'>
                        <Link to="tvs">
                            <p>Ремонт телевизоров</p>
                        </Link>
                    </Col>   
                    <Col className='bg-service bg-service-7 m-2 rounded'>
                        <Link to="printers">
                            <p>Ремонт принтеров</p>
                        </Link>
                    </Col>          
                </Row> 

                <Row className="justify-content-center">
                    <Col className='bg-service bg-service-8 m-2 rounded'>
                        <Link to="monoblocks">
                            <p>Ремонт моноблоков</p>
                        </Link>
                    </Col>   
                    <Col className='bg-service bg-service-9 m-2 rounded'>
                        <Link to="console">
                            <p>Ремонт приставок</p>
                        </Link>
                    </Col>  
                    <Col className='bg-service bg-service-10 m-2 rounded'>
                        <Link to="cameras">
                            <p>Ремонт фотоаппаратов</p>
                        </Link>
                    </Col>  
                    <Col className='bg-service bg-service-11 m-2 rounded'>
                        <Link to="projectors">
                            <p>Ремонт проекторов</p>
                        </Link>
                    </Col>             
                </Row>         
            </Container>     
        </Container>  
    );
}

export default ServicesPage;
