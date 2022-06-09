import React from 'react';
import { Container, Stack } from 'react-bootstrap';
import "./../custom.css";

import LoginForm from './mainForms/LoginForm';

const LoginPage = () => {

    return(
        <Stack className='my-01 pt-5 flex-fill bg-dark'>
            <LoginForm />
        </Stack>
    );
}

export default LoginPage;