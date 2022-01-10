import styled from "styled-components";
const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: rgba(225, 225, 225, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 4;
    position: absolute;
    `;

const LogoutBox = styled.div`
    border-radius: 15px;
    width: 150px;
    height: 200px;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    img{
        width: 80px;
        height: 80px;
        border-radius: 40px;
        object-fit: cover;
    }
`;

const LogoutButton = styled.button`
    width: 80px;
    height: 35px;
    border: none;
    background: #EA5766;
    color: white;
    border-radius: 5px;
    z-index: 5;
`;

const CancelButton = styled.button`
    width: 80px;
    height: 35px;
    border: none;
    background: #FFFFFF;
    color: #EA5766;
`;

export {
    Container,
    LogoutBox,
    LogoutButton,
    CancelButton
}