import React, {FC, useEffect, useContext, useState} from 'react';
import Header from './components/Header';
import LandingPage from "./components/Main/LandingPage";
import Footer from './components/Footer';
import { Container, Row, Stack, Nav, Navbar } from 'react-bootstrap';
import { Route, Routes, Link } from 'react-router-dom';
import {Context} from './index';

import LoginPage from './components/Main/LoginPage';
import RegistrationPage from './components/Main/RegistrationPage';
import ServicesPage from './components/Main/ServicesPage';
import PersonalAccount from './components/Main/PersonalAccount';
import SpecificService from './components/Main/Service/SpecificService';
import Sidebar from './components/Main/PersonalAccountParts/Sidebar';
import OrdersHistoryPage from './components/Main/PersonalAccountParts/OrdersHistoryPage';
import CreateAppealPage from './components/Main/PersonalAccountParts/CreateAppealPage';
import AppealFromHistory from './components/Main/PersonalAccountParts/AppealFromHistory';
import { observer } from 'mobx-react-lite';
import AuthProfile from './components/Main/HeaderOptions/AuthProfile';
import AuthButtons from './components/Main/HeaderOptions/AuthButtons';
import UserProfile from './components/Main/PersonalAccountParts/UserProfile';
import StatusCheckPage from './components/Main/StatusCheckPage';
import UserService from './services/user.service';
import SuccessRegistration from './components/Main/SuccessComponents/SuccessRegistration';
import SuccessAppeal from './components/Main/SuccessComponents/SuccessAppeal';

const App: FC = () => {
  const {store} = useContext(Context);

  const [isAuth, setAuth] = useState<boolean>(store.isAuth);
  const [username, setUsername] = useState<string>('');


  useEffect(() => {
    UserService.getUserDetails().then((res) => {
      setUsername(res.data.username);
    });
    if (username){
      setAuth(true) 
    } else {
      setAuth(false)
    }
  })

  return (
    <>
      <Navbar bg='dark' variant='dark' sticky="top">
        <Container fluid>
          <Link to="/"><Navbar.Brand>LOGO</Navbar.Brand></Link>
            
          <Navbar.Toggle />
          <Navbar.Collapse>
          <Nav>
              <Nav.Link><Link to="/service" className='text-light'>Услуги</Link></Nav.Link>
              <Nav.Link><Link to='/contacts' className='text-light'>Контакты</Link></Nav.Link>
              <Nav.Link><Link to='/about' className='text-light'>О компании</Link></Nav.Link>
          </Nav>
          </Navbar.Collapse>

          {
            isAuth ? <AuthProfile username={username || ''} /> : <AuthButtons /> 
          }

        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Footer />}>
          <Route index element={<LandingPage/>} />
          <Route path='login' element={<LoginPage/>} />
          <Route path='registration' element={<RegistrationPage/>} />
          <Route path='status' element={<StatusCheckPage />} />

          <Route path='service'>
            <Route index element={<ServicesPage />} />
            <Route path='monitors' element={<SpecificService type='monitors'/>} />
            <Route path='tablets' element={<SpecificService type='tablets'/>} />
            <Route path='phones' element={<SpecificService type='phones'/>} />
            <Route path='laptops' element={<SpecificService type='laptops'/>} />
          </Route>

          <Route path='registration' element={<RegistrationPage/>}/>

          <Route path='account' element={<Sidebar />}>
            <Route index element={<PersonalAccount />} />

            <Route path='history'>
              <Route index element={<OrdersHistoryPage />}/>
              <Route path='appeal/:id' element={<AppealFromHistory />} />
            </Route>
            
            <Route path='newappeal' element={<CreateAppealPage />} />

            <Route path='profile' element={<UserProfile />} />
          </Route>

          <Route path='success/registration' element={<SuccessRegistration />} />
          <Route path='success/appeal' element={<SuccessAppeal />} />
          
        </Route>
      </Routes>
    </>
  );
}

export default observer(App);
