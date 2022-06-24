import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Form, FormControl, FormGroup, Button, Modal, Badge} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Tools} from 'react-bootstrap-icons';
import '../custom.css';
import { createTrue } from 'typescript';
import { OrderRes, DeviceType, StatusRepair} from '../../models/OrderResponce';
import UserService from '../../services/user.service';

function MyVerticallyCenteredModal(props: any) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          { props.num }
        </Modal.Title>
        <br></br>
        
      </Modal.Header>
      <Modal.Body>
        <Container fluid>
          <Row>
            <Col>{ props.order.model }</Col>
            <Col>
              <Badge pill bg="success" className="px-3 py-2">
                { props.statusRepair.nametatus } 
              </Badge> 
            </Col>
          </Row>
          <Row className="my-2">
            <Col>Тип: { props.deviceType.nameType }</Col>
          </Row>
          <Row> 
            <Col>Гарантия: { props.order.quarantee ? 'да' : 'нет' }</Col>           
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


interface IProps {
  modalShow: boolean,
  num: string
}

function StatusCheckPage() {

  const [modalShow, setModalShow] = useState(false);
  const [num, setNum] = useState<string>('');
  const [order, setOrder] = useState<OrderRes>({} as OrderRes);
  const [deviceType, setDeviceType] = useState<DeviceType>({} as DeviceType);
  const [statusRepair, setStatusRepair] = useState<StatusRepair>({} as StatusRepair);
  const [message, setMessage] = useState<string>(''); 

  function checkOrder(): boolean{
    UserService.getOrderAnonim(num.substring(5)).then((res) => {
      setOrder(res.data);
      setDeviceType(res.data.deviceType);
      setStatusRepair(res.data.statusRepair);
    });
    try{
      if(order.id && num.substring(0,2) === "СЦ" 
          && num.substring(2,5) === (deviceType.nameType).substring(0,2).toUpperCase() + '-') {
        setMessage('');
        return true
      }
      else {
        console.log((deviceType.nameType).substring(0,2).toUpperCase());
        setMessage('Заказ не найден');
        return false
      }
    } catch (e : any) {
      console.log(e.response?.data?.message);
      // setMessage('Заказ не найден');
      return false;
    }
  }

  function closeModalShow(){
    setStatusRepair({} as StatusRepair);
    setDeviceType({} as DeviceType);
    setOrder({} as OrderRes);
    setNum('');
    setModalShow(false);
  }

  return (

    <Container fluid className='bg-light p-3  flex-fill'>
      <Container>
        <Row>
          <Col md={2}>

          <svg width="0" height="0">
            <linearGradient id="perfect-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop stopColor="#fccb90" offset="0%" />
              <stop stopColor="#d57eeb" offset="100%" />
            </linearGradient>
          </svg>

            <Tools size="150" className="h-100" style={{ fill: "url(#perfect-gradient)" }}/>
          </Col>

          <Col md="auto" className="ms-2">
            <h2 className="text-dark mt-5">Узнайте статус ремонта</h2>
            <p>Введите номер заказа, чтобы узнать его статус.</p>

            <Form className="mt-3 mb-5">
              <Form.Group as={Row}>

                <Form.Group as={Col}>
                  <Form.Control 
                    type='text'
                    onChange={e => setNum(e.target.value)}
                    value={num}        
                    placeholder='номер заказа'/>
                  <Form.Label className="text-danger">{ message }</Form.Label>
                </Form.Group>

                <Form.Group as={Col}>
                  <Button onClick={ () => setModalShow(checkOrder) } variant="outline-info">Узнать статус</Button>
                </Form.Group>

                <MyVerticallyCenteredModal
                  num={num}
                  show={modalShow}
                  order={order}
                  deviceType={deviceType}
                  statusRepair={statusRepair}
                  onHide={() => closeModalShow()}
                />

              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default StatusCheckPage;