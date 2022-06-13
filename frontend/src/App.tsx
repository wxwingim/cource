import React from 'react';
import Header from './components/Header';
import LandingPage from "./components/Main/LandingPage";
import Footer from './components/Footer';
import { Container, Row, Stack } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';

import LoginPage from './components/Main/LoginPage';
import RegistrationPage from './components/Main/RegistrationPage';
import ServicesPage from './components/Main/ServicesPage';
import PersonalAccount from './components/Main/PersonalAccount';
import SpecificService from './components/Main/Service/SpecificService';
import Sidebar from './components/Main/PersonalAccountParts/Sidebar';
import OrdersHistoryPage from './components/Main/PersonalAccountParts/OrdersHistoryPage';
import CreateAppealPage from './components/Main/PersonalAccountParts/CreateAppealPage';
import AppealFromHistory from './components/Main/PersonalAccountParts/AppealFromHistory';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Header />}>
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

export default App;
