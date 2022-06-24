import React, {FC, useContext} from 'react';
import { Nav, NavDropdown, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Context } from '../../../index';
import UserService from '../../../services/user.service';
import { UserResponce } from '../../../models/UserResponce';
import { observer } from 'mobx-react-lite';


interface IProps {
    username: string;
}


const AuthProfile: FC<IProps> = (props) => {

    const {store} = useContext(Context);

    function logout(e: any){
        store.logout();
        // UserService.setUser({} as UserResponce)
        // store.logout();
        // localStorage.setAuth(false);
    }

    return(
        <Nav>         
                <NavDropdown align="end" title={props.username} id="basic-nav-dropdown">
                    <Link to="/account/profile" className="dropdown-item">Профиль</Link>
                    <Link to="/account/history" className="dropdown-item">История</Link>
                    <Link to="/account/newappeal" className="dropdown-item">Создать обращение</Link>
                    <NavDropdown.Divider />
                    <Link to="/" className="dropdown-item" onClick={logout}>Выход</Link>
                </NavDropdown>
        </Nav>
    )
}

export default AuthProfile;