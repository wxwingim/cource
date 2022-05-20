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

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<LandingPage/>} />
          <Route path='login' element={<LoginPage/>} />
          <Route path='registration' element={<RegistrationPage/>} />
          {/* <Route path='service' element={<ServicesPage/>} /> */}
          <Route path='services' element={<ServicesPage/>} />
          <Route path='account' element={<PersonalAccount/>} />
          <Route path='registration' element={<RegistrationPage/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
