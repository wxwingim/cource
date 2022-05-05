import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { Container, Row, Stack } from 'react-bootstrap';

function App() {
  return (
    // <Container fluid>
    //   <Row><Header/></Row>   
    //   <Row><Main/></Row>
    //   <Row><Footer/></Row>
    // </Container>
    <Stack direction='vertical'>
      <Header/>
      <Main/>
      <Footer/>
    </Stack>
  );
}

export default App;
