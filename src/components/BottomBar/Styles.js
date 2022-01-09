import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    min-height: 70px;
    max-height: 70px;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 161px;
`;

const ProgressbarContainer = styled.div`
    width: 91px;
    height: 91px;
    border-radius: 45.1px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    bottom: 10px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 17.976px;
    line-height: 22px;
    color: #52B6FF;
`;

export {
    Container,
    ProgressbarContainer,
    StyledLink
}