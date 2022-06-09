import React from 'react';
import { Card, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BoxArrowUpRight, InfoSquareFill } from 'react-bootstrap-icons'
 

interface IProps {
}
interface IState {
}

class OrdersHistoryTable extends React.Component<IProps, IState> {

    render(): React.ReactNode {
        return (
            <Card>
                <Table striped bordered size="sm">
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>Тип</th>
                            <th>Устройство</th>
                            <th>Дата обращения</th>
                            <th>Дата закрытия</th>
                            <th>Статус</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>0000000001SN</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <Link to='appeal' className='btn btn-info'>
                                    <InfoSquareFill className='text-light'/>
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Card>
    );
    }

}

export default OrdersHistoryTable;