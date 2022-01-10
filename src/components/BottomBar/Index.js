import React, { useContext } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { useLocation } from 'react-router-dom';
import { Container, ProgressbarContainer, StyledLink } from './Styles';
import 'react-circular-progressbar/dist/styles.css';
import HabitsStats from '../../contexts/HabitsStats';

export default function BottomBar() {
    const {percentage} = useContext(HabitsStats);
    const location = useLocation();

    return (
        <>
            {location.pathname === '/' ?
                null
                :
                location.pathname === '/cadastro' ?
                    null
                    :
                    <Container>
                        <StyledLink to='/habitos'>Hábitos</StyledLink>
                        <ProgressbarContainer>
                            <StyledLink to='/hoje'>
                                <CircularProgressbar
                                    background
                                    text='Hoje'
                                    backgroundPadding={6}
                                    value={percentage.getPercentage(percentage.done, percentage.total)}
                                    styles={buildStyles({
                                        backgroundColor: "#52b6ff",
                                        textColor: "#ffffff",
                                        pathColor: "#ffffff",
                                        trailColor: "#52b6ff",
                                        strokeLinecap: 'round'
                                    })}
                                />
                            </StyledLink>
                        </ProgressbarContainer>
                        <StyledLink to='/historico'>Histórico</StyledLink>
                    </Container>
            }
        </>
    )
}
