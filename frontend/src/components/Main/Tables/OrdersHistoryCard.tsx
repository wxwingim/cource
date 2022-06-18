import React, {FC} from 'react';
import { Card, Container, Stack, Table, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BoxArrowUpRight, InfoSquareFill } from 'react-bootstrap-icons';
import { OrderRes, DeviceType, StatusRepair } from '../../../models/OrderResponce';
import {PrettyFormat} from '../../../Custom/PrettyFormat';
 

interface IProps {
    order: OrderRes
}
interface IState {
    // order: OrderRes
}

class OrdersHistoryCard extends React.Component<IProps, IState>{

    constructor(props : any){
        super(props);

        this.state = {
        }
    }

    componentDidMount(){

    }

    render(): React.ReactNode {
        return (
            <Card className="p-3 mb-4 shadow-sm">
                <Card.Body>
                    <Stack direction="horizontal"  className="justify-content-between">
                        <Card.Title> { this.props.order.model} </Card.Title>
                        <Badge pill bg="success" className="px-3 py-2">
                            { this.props.order.statusRepair.nametatus }
                        </Badge>
                    </Stack>  

                    <hr className="my-4" />

                    <Stack direction="horizontal" className="justify-content-between pb-4">
                        <Stack className="pb-5 w-25">
                            <span className='text-muted fw-bolder mb-2'>Номер</span>
                            <Card.Text>{ PrettyFormat.PrettyNumber(this.props.order.deviceType.nameType, this.props.order.id) }</Card.Text>
                        </Stack>

                        <Stack className="pb-5 w-25">
                            <span className='text-muted fw-bolder mb-2'>Дата обращения</span>
                            <Card.Text>{ PrettyFormat.Deserialize(this.props.order.dateRequest) }</Card.Text>
                        </Stack>

                        <Stack className="pb-5 w-25">
                            <span className='text-muted fw-bolder mb-2'>Дата закрытия</span>
                            <Card.Text>{ this.props.order.dateLimit ? PrettyFormat.Deserialize(this.props.order.dateLimit) : "-"}</Card.Text>
                        </Stack>

                        <Stack className="align-self-end ">
                            <Link to={`appeal/${this.props.order.id}`}
                                className="btn btn-dark d-flex justify-content-center align-items-center py-2">
                                    <InfoSquareFill className="mx-1"/>
                                    <div className="mx-1 ">Детали</div>
                            </Link>
                        </Stack>
                    </Stack>


                </Card.Body>
            </Card>
        );
    }
}

export default OrdersHistoryCard;