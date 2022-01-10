import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    width: 100%;
    padding: 98px 17px 300px 17px;
    background: #F2F2F2;
    display: flex;
    flex-direction: column;
    overflow: auto;
`;

const NewHabitButton = styled.button`
    width: 40px;
    height: 35px;
    border: none;
    background: #52B6FF;
    border-radius: 4.63636px;
    font-size: 26.976px;
    line-height: 34px;
    color: white;
`;

const MyHabits = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
`;

const Grid = styled.div`
    display: flex;
    margin-top: 8px;
    gap: 4px;
`;

const NewHabitBox = styled.div`
    width: 100%;
    height: 180px;
    background: white;
    margin-top: 20px;
    border-radius: 5px;
    padding: 15px 18px;
    input{
        width: 100%;
        height: 45px;
        padding: 9px 11px;
        font-size: 19.976px;
        line-height: 25px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        ::placeholder{
            color: #DBDBDB;
        }
    }
`;

const Weekday = styled.div`
    width: 30px;
    height: 30px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.backgroundcolor};
    color: ${props => props.fontcolor};
`;

const NewHabitButtons = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 23px;
    margin-top: 29px;
`;

const Cancel = styled.button`
    border: none;
    background: white;
    color: #52B6FF;
    font-size: 15.976px;
    line-height: 20px;
`;

const Save = styled.button`
    width: 84px;
    height: 35px;
    border: none;
    background: #52B6FF;
    border-radius: 4.63636px;
    color: white;
    font-size: 15.976px;
    line-height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Habit = styled.div`
    width: 100%;
    height: auto;
    padding: 15px;
    position: relative;
    background: white;
    margin-bottom: 10px;
    border-radius: 5px;
`;

const Delete = styled.div`
    position: absolute;
    right: 10px;
    top: 11px;
    width: 13px;
    height: 15px;
`;

export {
    Container,
    NewHabitButton,
    MyHabits,
    NewHabitBox,
    Grid,
    NewHabitButtons,
    Cancel,
    Save,
    Weekday,
    Delete,
    Habit
}