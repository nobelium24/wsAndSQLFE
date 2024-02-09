
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {HomePage} from './pages/HomePage';
import SignUpPage from './pages/SignupPage';
import LoginPage from './pages/Login';
import { MainPage } from './pages/MainPage';


export const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path='/signup' element={<SignUpPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/mainpage' element={<MainPage />} />
            </Routes>
        </Router>
    );
}