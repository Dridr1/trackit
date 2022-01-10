import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Container, Title, Subtitle, HabitContainer, HabitInfo, CheckBox } from './Styles';
import dayjs from 'dayjs';
import UserData from '../../contexts/UserData';
import HabitsStats from '../../contexts/HabitsStats';

export default function Hoje() {

    const [todayHabits, setTodayHabits] = useState([]);
    const dayEng = dayjs().format('d');
    const dayPt = translateDay(dayEng);
    const Navigate = useNavigate();

    const {percentage, setPercentage} = useContext(HabitsStats)
    const user = useContext(UserData);

    function translateDay(d) {
        if (d === '0') { return 'Domingo'; }
        else if (d === '1') { return 'Segunda'; }
        else if (d === '2') { return 'Terça'; }
        else if (d === '3') { return 'Quarta'; }
        else if (d === '4') { return 'Quinta'; }
        else if (d === '5') { return 'Sexta'; }
        else if (d === '6') { return 'Sábado'; }
    }

    function getHabits() {
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', {
            headers: {
                Authorization: `Bearer ${user.userData.token}`
            }
        });

        promise.then(ans => {
            setTodayHabits(ans.data);
            setPercentage({
                ...percentage,
                done: ans.data.filter((habit) => habit.done).length,
                total: ans.data.length
            });
            })
            .catch(err => {
                Navigate('/');
            });
    }

    function checkHabit(habitID, Done) {
        let checkOrUncheck = '';
        if (Done) {
            checkOrUncheck = 'uncheck';
        }
        else {
            checkOrUncheck = 'check'
        }
        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitID}/${checkOrUncheck}`, {}, {
            headers: {
                Authorization: `Bearer ${user.userData.token}`
            }
        });
        promise.then(ans => getHabits())
            .catch(err => alert('Algo deu errado'));

    }

    useEffect(getHabits, [user.userData.token, Navigate, percentage, setPercentage])

    return (
        <Container>
            <Title>{`${dayPt}, ${dayjs().format('DD/MM')}`}</Title>
                {
                    percentage.getPercentage(percentage.done, percentage.total) === 0 ?
                    <Subtitle textcolor='#BABABA'>
                        Nenhum hábito concluído ainda
                    </Subtitle>
                    :
                    <Subtitle textcolor='#8FC549'>
                        {Math.round(percentage.getPercentage(percentage.done, percentage.total))}% dos hábitos concluídos
                    </Subtitle>
                }
            {
                todayHabits.map((habit, index) => { 
                    return (
                        <HabitContainer isDone={habit.done} key={index}>
                            <HabitInfo>
                                <h3>{habit.name}</h3>
                                <span>Sequência atual: <b style={{ color: `${habit.done ? '#8FC549' : '#666666'}` }}>{habit.currentSequence}</b></span>
                                <span>Seu recorde: <b style={{ color: `${habit.highestSequence === habit.currentSequence ? '#8FC549' : '#666666'}` }}>{habit.highestSequence}</b></span>
                            </HabitInfo>

                            <CheckBox isDone={habit.done} onClick={() => checkHabit(habit.id, habit.done)}>
                                <svg width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M29.5686 0.956629C30.1694 0.350274 30.9857 0.00637472 31.8392 8.77323e-05C32.6928 -0.00619925 33.5141 0.325638 34.1237 0.923077C34.7333 1.52052 35.0816 2.33498 35.0926 3.18846C35.1035 4.04195 34.7761 4.86506 34.182 5.4779L16.9915 26.9682C16.6962 27.2862 16.3398 27.5413 15.9437 27.7185C15.5476 27.8957 15.1198 27.9912 14.6859 27.9994C14.252 28.0076 13.821 27.9283 13.4184 27.7662C13.0159 27.6041 12.6502 27.3625 12.3431 27.0559L0.945601 15.6628C0.339937 15.0569 -0.000205509 14.2351 9.31541e-08 13.3784C0.000205695 12.5216 0.340743 11.7001 0.946698 11.0944C1.55265 10.4887 2.37439 10.1486 3.23113 10.1488C4.08788 10.149 4.90945 10.4895 5.51511 11.0955L14.5292 20.1117L29.4831 1.05749C29.5103 1.02282 29.5396 0.989868 29.5708 0.958822L29.5686 0.956629Z" fill="white" />
                                </svg>
                            </CheckBox>
                        </HabitContainer>
                    )

                })
            }
        </Container>
    )
}