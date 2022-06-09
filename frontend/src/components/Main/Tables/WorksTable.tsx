import React from 'react';
import { Card, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BoxArrowUpRight, InfoSquareFill } from 'react-bootstrap-icons'
 

interface IProps {
}
interface IState {
}

class WorksTable extends React.Component<IProps, IState> {

    render(): React.ReactNode {
        return (
            <Card>
                <Table striped bordered size="sm">
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>Услуга/запчасть</th>
                            <th>Наименование</th>
                            <th>Цена</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
            </Card>
    );
    }

}

export default WorksTable;