import React from 'react';
import { Nav, NavDropdown, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthService from '../../../services/auth.service';
import { Context } from '../../../index';

// export const {store} = useContext(Context);

interface IProps {
    username: string;
}

interface IState {
}

class AuthProfile extends React.Component<IProps, IState> {

    static store = Context;

    Logout(e: any){
        AuthProfile.store.logout();
    }

    render(){
        return(
            <Nav>         
                    <NavDropdown align="end" title={this.props.username} id="basic-nav-dropdown">
                        <NavDropdown.Item>Профиль</NavDropdown.Item>
                        <NavDropdown.Item>История</NavDropdown.Item>
                        <NavDropdown.Item>Создать обращение</NavDropdown.Item>
                        <NavDropdown.Divider />
                        {/* <NavDropdown.Item>Выход</NavDropdown.Item> */}
                        <Link to="/" className="dropdown-item" onClick={this.Logout}>Выход</Link>
                    </NavDropdown>
            </Nav>
        )
    }
}

export default AuthProfile;