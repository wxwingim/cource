import React from 'react';
import { Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface IProps {
}
interface IState {
}

class AuthButtons extends React.Component<IProps, IState> {
    render(){
        return(
            <Stack gap={3} direction="horizontal" className="justify-content-end">

                <Link to="/login" className='btn btn-outline-light'>Войти</Link>
                <Link to="/registration" className='btn btn-secondary'>Зарегистрироваться</Link>          
                    
            </Stack>
        )
    }
}

export default AuthButtons;