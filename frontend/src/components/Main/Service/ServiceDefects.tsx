import React, { Component } from 'react';
import { Container, Stack, Table, Card, ListGroup } from 'react-bootstrap';
import "./../../custom.css";

import ServiceService from '../../../services/service.service';

type defectType = {
    "id" : number,
    "nameType" : string
}

interface defect {
    "id" : number,
    "name" : string,
    "defectType" : defectType
}

interface IProps {
    typeDev: string;
}
interface IState {
    defects: defect[][],
    defectTypes: defectType[]
}

class ServiceDefects extends React.Component<IProps, IState> {

    constructor(props : any){
        super(props);

        this.state = {
            defects: [[], []],
            defectTypes: []
        }
    }

    componentDidMount(){

        ServiceService.getfRequentDefects(this.props.typeDev).then((res) => {
            this.setState(
                {
                    defects: res.data
                }
            )
        });

        ServiceService.getDefectTypes(this.props.typeDev).then((res) => {
            this.setState({
                defectTypes: res.data
            })
        });
    }

    render() {
        return(
            <> 
                {/* TODO create defects in component??? */}
                <Stack direction="horizontal">

                    {
                    this.state.defectTypes.map((defType) =>
                        <Card style={{ width: '18rem' }} key={defType.id}>
                            <Card.Body>
                                <Card.Header>{ defType.nameType }</Card.Header>
                            </Card.Body>
                        </Card>
                    
                    )}

                    {/* <ol variant="flush">
                        {
                            defType.map((def) =>{
                                <li key={def.id}></li>
                            }
                            )
                        }
                    </ol> */}

                    {/* <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Header>Тип 1</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Неисправность 1</ListGroup.Item>
                                <ListGroup.Item>Неисправность 2</ListGroup.Item>
                                <ListGroup.Item>Неисправность 3</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>    
                    </Card> */}
                </Stack>

                <Stack direction="horizontal" gap={4} className="flex-wrap justify-content-between align-items-start">
                    {
                        this.state.defects.map((def, index) => 
                            <Card style={{ width: '16rem' }}>
                                <Card.Body>
                                    <Card.Header>Тип 1</Card.Header>
                                    <ListGroup variant="flush">
                                        {
                                            def.map((defect) =>
                                            <ListGroup.Item>{ defect.name }</ListGroup.Item>
                                            )
                                        }
                                    </ListGroup>
                                </Card.Body>
                            </Card>

                        )
                    }
                </Stack>
            </>
        );
    }
}

export default ServiceDefects