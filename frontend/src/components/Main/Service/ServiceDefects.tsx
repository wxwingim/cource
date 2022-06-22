import React, { useState, useEffect } from 'react';
import { Container, Stack, Table, Card, ListGroup } from 'react-bootstrap';
import "./../../custom.css";
import {Defect, DefectType} from "../../../models/ServiceModel";

import ServiceService from '../../../services/service.service';


function ServiceDefects(props: any) {

    const [defects, setDefects] = useState<Defect[][]>([[],[]] as Defect[][]);
    const [defectTypes, setDefectTypes] = useState<DefectType[]>([] as DefectType[]);

    useEffect(() => {
        ServiceService.getfRequentDefects(props.typeDev).then((res) => {
            setDefects(res.data);
        });
        ServiceService.getDefectTypes(props.typeDev).then((res) => {
            setDefectTypes(res.data);
        })

    }, [])

        return(
            <> 
                <Stack direction="horizontal" gap={4} className="flex-wrap justify-content-between align-items-start">
                    {
                        defects.map((def, index) => 
                            <Card key={index} style={{ width: '16rem' }}>
                                <Card.Body>
                                    <Card.Header> { defectTypes[index]?.nameType || ' ' } </Card.Header>
                                    <ListGroup variant="flush">
                                        {
                                            def.map((defect) =>
                                            <ListGroup.Item>{ defect.name || ' ' }</ListGroup.Item>
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
    // }
}

export default ServiceDefects