import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
`; 

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

const Input = styled.input`
    width: 303px;
    height: 45px;
    border: 1px solid #D5D5D5;
    padding: 9px 11px;
    border-radius: 5px;
    font-size: 19.976px;
    line-height: 25px;
    ::placeholder{
        color: #DBDBDB;
    }
`;

const Button = styled.button`
    width: 303px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #52B6FF;
    border-radius: 4.63636px;
    border: none;
    color: white;
    font-size: 20.976px;
    line-height: 26px;
`;

const StyledLink = styled(Link)`
    font-size: 13.976px;
    line-height: 17px;
    color: #52B6FF;
`;

export {
    Container,
    Form,
    Input,
    Button,
    StyledLink
}