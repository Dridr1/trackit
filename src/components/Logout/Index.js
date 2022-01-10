import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserData from '../../contexts/UserData';
import { CancelButton, Container, LogoutBox, LogoutButton } from './Styles';

export default function Logout({ setLogoutVisible }) {

    const Navigate = useNavigate();

    const { userData } = useContext(UserData);

    function logout() {
        localStorage.removeItem('user');
        Navigate('/');
        setLogoutVisible(false);
    }
    return (
        <Container>
            <LogoutBox>
                <img src={userData.image} alt="user" />
                <LogoutButton onClick={() => logout()}>Sair</LogoutButton>
                <CancelButton onClick={ () => setLogoutVisible(false) }>Cancelar</CancelButton>
            </LogoutBox>
        </Container>
    )
}
