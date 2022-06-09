import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './../../Header';
import Footer from './../../Footer';
import Sidebar from './Sidebar';

function UserProfile() {
    return (
        <Container fluid className='bg-light'>
            <Container>
                <div className='text-light'>UserProfile</div>
            </Container>           
        </Container>
    );
}

export default UserProfile;