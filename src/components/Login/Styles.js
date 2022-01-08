import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 305px;
    gap: 6px;
    input{
        height: 45px;
    }
    button{
        height: 45px;
    }
`;

const RedLink = styled(Link)`
    font-size: 13.976px;
    line-height: 17px;
    text-decoration-line: underline;
    color: #52B6FF;
`;


export {
    Container,
    Form,
    RedLink
}