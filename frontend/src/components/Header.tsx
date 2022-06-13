import React from 'react';
import './custom.css';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import Footer from './Footer';
import AuthButtons from './Main/HeaderOptions/AuthButtons';
import AuthProfile from './Main/HeaderOptions/AuthProfile';
import AuthService from './../services/auth.service';

interface IProps {
}
interface IState {
}

class Header extends React.Component<IProps, IState> {

  LoginVerification(){
    var user = AuthService.getCurrentUser();
    if (!user.access_token){
      return <AuthButtons />
    } else{
      return <AuthProfile username={user.username} />
    }
  }

  render(){
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

              <this.LoginVerification />

            </Container>
        </Navbar>

        <Outlet />
        <Footer />
      </>
    );
  }
}

export default Header;