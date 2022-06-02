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

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<LandingPage/>} />
          <Route path='login' element={<LoginPage/>} />
          <Route path='registration' element={<RegistrationPage/>} />
          {/* <Route path='services' element={<ServicesPage/>} /> */}

          <Route path='service'>
            <Route index element={<ServicesPage />} />
            <Route path='monitors' element={<SpecificService type='monitors'/>} />
            <Route path='tablets' element={<SpecificService type='tablets'/>} />
            <Route path='phones' element={<SpecificService type='phones'/>} />
            <Route path='laptops' element={<SpecificService type='laptops'/>} />

          </Route>

          <Route path='account' element={<PersonalAccount/>} />
          <Route path='registration' element={<RegistrationPage/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
