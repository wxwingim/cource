import React, {useLayoutEffect, useEffect, useState} from 'react';
import { Container, Row, Col, Stack, Button, Breadcrumb, Badge, Form } from 'react-bootstrap';
import Sidebar from './Sidebar';
import { Paperclip, HouseDoorFill } from 'react-bootstrap-icons';
import { Link, useParams } from 'react-router-dom';
import AppealCommentCard from '../Tables/AppealCommentCard';
import {OrderRes, DeviceType, StatusRepair} from '../../../models/OrderResponce';
import UserService from '../../../services/user.service';
import {PrettyFormat} from '../../../Custom/PrettyFormat';
import WorksTable from '../Tables/WorksTable';
import ReactToPrint from 'react-to-print';
import { saveAs } from 'file-saver';
import { PillColor } from '../../../Custom/servicesToRus';

function DocsButtons(props: any) {

    function payment(): void{
        UserService.getMail(props.id || '');
    }

    return (
        <Row className="pb-3">
            <Stack direction="horizontal">
                <Link to="/success/payment" onClick={ payment } className="btn btn-outline-primary">Оплатить</Link>
            </Stack>
        </Row>
    );
}

export default DocsButtons