import React, {FC} from 'react';
import { Card, Container, Stack, Table, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BoxArrowUpRight, InfoSquareFill } from 'react-bootstrap-icons'
 

interface IProps {
}
interface IState {
}

const OrdersHistoryCard: FC = () => {

        return (
            <Card className="p-3 mb-4 shadow-sm">
                <Card.Body>
                    <Stack direction="horizontal"  className="justify-content-between">
                        <Card.Title>Наименование устройства</Card.Title>
                        <Badge pill bg="success" className="px-3 py-2">
                            принят в ремонт
                        </Badge>
                    </Stack>  

                    <hr className="my-4" />

                    <Stack direction="horizontal" className="justify-content-between pb-4">
                        <Stack className="pb-5 w-25">
                            <span className='text-muted fw-bolder mb-2'>Номер</span>
                            <Card.Text>№000095678902</Card.Text>
                        </Stack>

                        <Stack className="pb-5 w-25">
                            <span className='text-muted fw-bolder mb-2'>Дата обращения</span>
                            <Card.Text>22.09.2021</Card.Text>
                        </Stack>

                        <Stack className="pb-5 w-25">
                            <span className='text-muted fw-bolder mb-2'>Дата закрытия</span>
                            <Card.Text>-</Card.Text>
                        </Stack>

                        <Stack className="align-self-end ">
                            <Link to="appeal" className="btn btn-dark d-flex justify-content-center align-items-center py-2">
                                    <InfoSquareFill className="mx-1"/>
                                    <div className="mx-1 ">Детали</div>
                            </Link>
                        </Stack>
                    </Stack>


                </Card.Body>
            </Card>
        );
}

export default OrdersHistoryCard;