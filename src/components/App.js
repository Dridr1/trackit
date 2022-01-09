import React, { useState } from 'react';
import Login from './Login/Index';
import Hoje from './Hoje/Index';
import TopBar from './TopBar/Index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserData from '../contexts/UserData';
import BottomBar from './BottomBar/Index';
import "../styles/reset.css";
import SignUp from './SignUp/Index';
export default function App() {


    const [userData, setUserData] = useState(localStorage.getItem('user') !== null ? JSON.parse(localStorage.getItem('user')): '');

    return (
            <UserData.Provider value={{ userData, setUserData }}>
                <BrowserRouter>
                    <TopBar/>
                    <BottomBar/>
                    <Routes>
                        <Route path='/' element={<Login />} />
                        <Route path='/cadastro' element={<SignUp/>} />
                        <Route path='/hoje' element={<Hoje />} />
                    </Routes>
                </BrowserRouter>
            </UserData.Provider>
    )
}
