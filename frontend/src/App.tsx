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


const App: FC = () => {
  const {store} = useContext(Context);
  const [isAuth, setAuth] = useState<boolean>(store.isAuth);


  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth();
    }
  })

  function LoginVerification(){
    if (!isAuth && localStorage.getItem('username')){
      return <AuthProfile username={localStorage.getItem('username') || '{}'} />
    } else{
      return <AuthButtons />    }
  }

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

          <LoginVerification/>

        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Footer />}>
          <Route index element={<LandingPage/>} />
          <Route path='login' element={<LoginPage/>} />
          <Route path='registration' element={<RegistrationPage/>} />

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
            <Route path='history' element={<OrdersHistoryPage />} />
            <Route path='history/appeal' element={<AppealFromHistory />} />
            <Route path='newappeal' element={<CreateAppealPage />} />
          </Route>
          
        </Route>
      </Routes>
    </>
  );
}

export default observer(App);
