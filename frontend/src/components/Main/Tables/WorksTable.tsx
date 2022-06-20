import React, { useEffect, useState } from 'react';
import { Card, Container, ListGroup, Table } from 'react-bootstrap';
import { Link,useParams } from 'react-router-dom';
import { BoxArrowUpRight, InfoSquareFill } from 'react-bootstrap-icons'
import { Works, Service } from '../../../models/OrderResponce';
import UserService from '../../../services/user.service';
 

function WorksTable(props: any) {

    let idOrder = useParams<{ id:string }>();
    const [works, setWorks] = useState<Works[]>([] as Works[]);

    useEffect(() => {
        UserService.getWorks(idOrder.id || '').then(res => {
            setWorks(res.data);
        })
    }, []);

    return (
        <Container>

            <p className="h5 mb-4">Работы</p>

            <ListGroup as="ol" numbered>
                <ListGroup.Item variant="dark" className="d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">Наименование</div>
                    <div>Цена</div>
                </ListGroup.Item>

                {
                    works.map((work: Works) =>
                        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">{ work.service.name || '' }</div>
                            <div>{ work.service.price || '' }</div>
                        </ListGroup.Item>
                    )
                }
            </ListGroup>

            <p className="h5 my-4">Запчасти</p>

            <ListGroup as="ol" numbered className="mb-5">
                <ListGroup.Item variant="dark" className="d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">Наименование</div>
                    <div>Цена</div>
                </ListGroup.Item>
            </ListGroup>

        </Container>
    );

}

export default WorksTable;