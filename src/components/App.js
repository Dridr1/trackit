import React, { useState } from 'react';
import Login from './Login/Index';
import Hoje from './Hoje/Index';
import TopBar from './TopBar/Index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BottomBar from './BottomBar/Index';
import "../styles/reset.css";
import "../styles/styles.css";
import SignUp from './SignUp/Index';
import Habits from './Habits/Index';
import History from './History/Index'
import UserData from '../contexts/UserData';
import HabitsStats from '../contexts/HabitsStats';

export default function App() {

    const [userData, setUserData] = useState(localStorage.getItem('user') !== null ? JSON.parse(localStorage.getItem('user')) : '');
    const [percentage, setPercentage] = useState({
        total: 0,
        done: 0,
        getPercentage: (done, total) => total === 0 ? 0 : (done / total * 100)
    });

    return (
        <UserData.Provider value={{ userData, setUserData }}>
            <HabitsStats.Provider value={{ percentage, setPercentage }}>
                <BrowserRouter>
                    <TopBar />
                    <BottomBar />
                    <Routes>
                        <Route path='/' element={<Login />} />
                        <Route path='/habitos' element={<Habits />} />
                        <Route path='/cadastro' element={<SignUp />} />
                        <Route path='/hoje' element={<Hoje />} />
                        <Route path='/historico' element={<History />} />
                    </Routes>
                </BrowserRouter>
            </HabitsStats.Provider>
        </UserData.Provider>
    )
}
