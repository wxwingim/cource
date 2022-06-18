import React from 'react';
import { Container, Row, Col, Stack, InputGroup, FormControl, Button, Badge, Breadcrumb } from 'react-bootstrap';
import { HouseDoorFill } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom';
import OrdersHistoryCard from '../Tables/OrdersHistoryCard';
import {Search} from 'react-bootstrap-icons';
import {OrderRes, DeviceType, StatusRepair} from '../../../models/OrderResponce';
import UserService from '../../../services/user.service';

interface IProps {
}
interface IState {
    orders: OrderRes[]
}

class OrdersHistoryPage extends React.Component<IProps, IState>{
    constructor(props : any){
        super(props);

        this.state = {
            orders: [] as OrderRes[]
        }
    }

    componentDidMount(){
        UserService.getUserOrdersAll().then((res) => {
            this.setState(
                {
                    orders: res.data
                }
            );
        });
    }

    render(){
        return (
            <Container fluid className='bg-light p-3'>

                <Row >
                    <Breadcrumb>
                        <Link to={'/'} className="breadcrumb-item text-dark"><HouseDoorFill className='mb-1'/></Link>
                        <Link to={'/account'} className="breadcrumb-item text-dark"> Аккаунт</Link>
                        <Breadcrumb.Item active>История обращений</Breadcrumb.Item>
                    </Breadcrumb>
                </Row>

                <Row className="pb-4">
                    <h2 className="h1">История обращений</h2>
                </Row>

                <Row>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Поиск по обращениям"
                            aria-label="Поиск по обращениям"
                        />
                        <Button variant="outline-secondary" id="button-addon2" className="pb-2">
                            <Search />
                        </Button>
                    </InputGroup>
                </Row>

                <Stack className="py-5 mx-1">

                    {
                        this.state.orders.map((order: OrderRes) => 
                            <OrdersHistoryCard order={order}/>
                        )
                    }

                </Stack>                
                
            </Container>
        );
    }
}

export default OrdersHistoryPage;