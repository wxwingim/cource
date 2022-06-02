import React from 'react';
import "./../../custom.css";
import ServiceTable from '../Tables/ServiceTable';
import { Container, Row, Col } from 'react-bootstrap';

interface IProps {
    type: string;
}
interface IState {
    // services: servX[];
}

class SpecificService extends React.Component<IProps, IState> {

    render(): React.ReactNode {
        return(
            <>
                <Container >
                    <Row className="justify-content-center">
                        <Col md={9} className='p-5'>
                            <ServiceTable typeDev={this.props.type}/>
                        </Col>             
                    </Row>       

                    <Row className="justify-content-center">
                        {/* TODO create defects */}
                    </Row>    
                </Container>   
            </>
    );
    }

}

export default SpecificService;