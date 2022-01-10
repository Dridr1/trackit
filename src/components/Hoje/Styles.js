import styled from "styled-components";

const Container = styled.div`
    background: #F2F2F2;
    width: 100%;
    height: 100vh;
    padding: 98px 17px 150px 17px;
    overflow: auto;
`;

const Title = styled.h2`
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
`;

const Subtitle = styled.h3`
    font-size: 17.976px;
    line-height: 22px;
    color: ${props => props.textcolor};
    margin-bottom: 30px;
`;

const HabitContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    background: white;
    margin-bottom: 10px;
    padding: 13px;
    border-radius: 5px;
`;

const HabitInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 230px;
    word-break: normal;
    h3{
        font-size: 19.976px;
        line-height: 25px;    
        color: #666666;

    }
    span{
        font-size: 12.976px;
        line-height: 16px;
        color: #666666;
    }
`;

const CheckBox = styled.div`
    width: 69px;
    height: 69px;
    background: ${props => props.isDone ? '#8FC549' : '#EBEBEB'};
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export {
    Container,
    Title,
    Subtitle,
    HabitContainer,
    HabitInfo,
    CheckBox
}