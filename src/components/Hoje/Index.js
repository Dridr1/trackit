import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import UserData from '../../contexts/UserData';
import { Container } from './Styles';
export default function Hoje() {

    const Navigate = useNavigate();

    const user = useContext(UserData);

    useEffect(() => {
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', {
            headers: {
                Authorization: `Bearer ${user.userData.token}`
            }
        });

        promise.then(ans => console.log(ans.data))
        .catch(err => {
            alert('Algo deu errado');
            Navigate('/');
        });
    },[user.userData.token, Navigate])

    return (
        <Container>
            
        </Container>
    )
}
