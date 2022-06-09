import React, { Component } from 'react';
import { Card, Container, Table } from 'react-bootstrap';
import "./../../custom.css";

import ServiceService from '../../../services/service.service';

type servX = {
    "id": number,
    "name" : string,
    "price" : number
}

interface IProps {
    typeDev: string;
}
interface IState {
    services: servX[];
}

class ServiceTable extends React.Component<IProps, IState> {

    constructor(props : any){
        super(props);

        this.state = {
            services: []
        }
    }

    componentDidMount(){
        ServiceService.getServices(this.props.typeDev).then((res) => {
            this.setState(
                { 
                    services: res.data
                }
            );
        });
    }

    render() {
        return(
            <Card>
                <Table striped bordered size="sm">
                    <thead>
                        <tr>
                            <th>Наименование</th>
                            <th>Стоимость</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.services.map(
                                service =>
                                <tr key={service.id}>
                                    <td>{service.name}</td>
                                    <td>от {service.price}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </Card>
        );
    }
}

export default ServiceTable;