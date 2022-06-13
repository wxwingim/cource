import React, {FC, useContext} from 'react';
import { Nav, NavDropdown, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthService from '../../../services/auth.service';
import { Context } from '../../../index';
import { observer } from 'mobx-react-lite';



interface IProps {
    username: string;
}


const AuthProfile: FC<IProps> = (props) => {

    const {store} = useContext(Context);

    function logout(e: any){
        store.logout();
    }

    return(
        <Nav>         
                <NavDropdown align="end" title={props.username} id="basic-nav-dropdown">
                    <NavDropdown.Item>Профиль</NavDropdown.Item>
                    <NavDropdown.Item>История</NavDropdown.Item>
                    <NavDropdown.Item>Создать обращение</NavDropdown.Item>
                    <NavDropdown.Divider />
                    {/* <NavDropdown.Item>Выход</NavDropdown.Item> */}
                    <Link to="/" className="dropdown-item" onClick={logout}>Выход</Link>
                </NavDropdown>
        </Nav>
    )
}

export default AuthProfile;