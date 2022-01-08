import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 70px;
    position: fixed;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img{
        width: 51px;
        height: 51px;
        border-radius: 25.5px;
        margin: 9px 16px;
        object-fit: cover;
    }
    svg{
        margin-left: 16px;
    }
`;

export {
    Container
}