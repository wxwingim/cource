import React from 'react';
import { Table } from 'react-bootstrap';
import "./../../custom.css";

const ServiceTable = () => {

    return(
        <Table striped bordered size="sm">
            <thead>
                <tr>
                    <th>Наименование</th>
                    <th>Стоимость</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>@fat</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default ServiceTable;