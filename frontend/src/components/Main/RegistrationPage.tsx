import React from 'react';
import { Stack } from 'react-bootstrap';
import "./../custom.css";
import RegistrationForm from './mainForms/RegistrationForm';

const RegistrationPage = () => {

    return(
        <Stack className='my-01 py-5 bg-dark'>
            <RegistrationForm />
        </Stack>
    );
}

export default RegistrationPage;