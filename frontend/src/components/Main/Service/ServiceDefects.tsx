import React, { Component } from 'react';
import { Container, Stack, Table, Card, ListGroup } from 'react-bootstrap';
import "./../../custom.css";
import {defect, defectType} from "../../../models/ServiceModel";

import ServiceService from '../../../services/service.service';

interface IProps {
    typeDev: string;
}
interface IState {
    defects: defect[][],
    defectTypes: defectType[],
    types: string[]
}

class ServiceDefects extends React.Component<IProps, IState> {

    constructor(props : any){
        super(props);

        this.state = {
            defects: [[], []],
            defectTypes: [],
            types:[]
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
            this.setState(
                {
                    defectTypes: res.data
                }
            )
        });

        // console.log(this.state.defectTypes)

        // let testTypes : string[] = [];

        // for(let defectType of this.state.defectTypes){
        //     testTypes.push(defectType.nameType);
        // }

        // this.setState({types: testTypes})

        // console.log(testTypes);
    }

    render() {
        return(
            <> 
                <Stack direction="horizontal" gap={4} className="flex-wrap justify-content-between align-items-start">
                    {
                        this.state.defects.map((def, index) => 
                            <Card key={index} style={{ width: '16rem' }}>
                                <Card.Body>
                                    <Card.Header> { this.state.types[0] } </Card.Header>
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