import React, {FC, useContext, useState, useEffect} from 'react';
import './custom.css';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import Footer from './Footer';
import AuthButtons from './Main/HeaderOptions/AuthButtons';
import AuthProfile from './Main/HeaderOptions/AuthProfile';
import AuthService from './../services/auth.service';
import {Context} from '../index';
import { observer } from 'mobx-react-lite';
import UserService from './../services/user.service';

function Header() {
  
  const {store} = useContext(Context);

  const [isAuth, setAuth] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");

  useEffect(()=>{
    setAuth(store.isAuth);
    UserService.getUserDetails().then((res) => {
      setUsername(res.data.username)
    })
    console.log(store.isAuth);
    console.log(username);
    
  }, [])

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
              isAuth ? <AuthProfile username={username || '{}'}/> : <AuthButtons />
            }

          </Container>
      </Navbar>

      <Outlet />
      <Footer />
    </>
  );
}

export default observer(Header);